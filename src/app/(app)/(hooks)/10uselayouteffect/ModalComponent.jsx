import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


export default function ModalComponent() {
   const [show, setShow] = useState(false)
   const popup = useRef()
   const button = useRef()

   useEffect(() => {
      if (popup.current == null || button.current == null) return
      const { bottom } = button.current.getBoundingClientRect()
      popup.current.style.top = `${bottom + 25}px`
   }, [show])

   return (
      <>
         <button ref={button} onClick={() => setShow(prev => !prev)}>
            Click Here
         </button>
         {
            show && (
               <div style={{ position: 'absolute' }} ref={popup}>
                  This is a popup
               </div>
            )
         }
      </>
   )
}