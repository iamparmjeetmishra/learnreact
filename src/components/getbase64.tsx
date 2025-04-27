import {getPlaiceholder} from 'plaiceholder'

const getbase64 = async (text:string) => {
    try {
      const res = await fetch(text)

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const buffer = await res.arrayBuffer()
      const { base64 } = await getPlaiceholder(Buffer.from(buffer))
      
      return base64

    } catch (error) {
      console.log(error)
    }
  
}

export default getbase64