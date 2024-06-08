import { useState, useEffect } from "react"


const synth = window.speechSynthesis;

const speak = (state: any, voice: any) => {
   const utterance = new SpeechSynthesisUtterance()
   utterance.voice = voice
   utterance.text = state.text
   synth.speak(utterance)
}

export default function useTts () {
   const [voices, setVoices] = useState([])

   useEffect(() => {
      let list = synth.getVoices()
      setVoices(list)
   }, [])

   return {
      voices,
      speak: speak,
      pause: () => synth.pause(),
      resume: () => synth.resume(),
      cancel: () => synth.cancel()
   }
}

// export default useTts;