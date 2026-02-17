import  { useRef, useState } from 'react'
import { getGifsbyQuery } from '../../actions/get-gifs-by-query.action'
import type { Gif } from '../../interfaces/gif.interface'

// const gifCache: Record<string, Gif[]> ={}
export const useGifsApp = () => {
  
  const [gifs, setgifs] = useState<Gif[]>([])
  
  const [previousTerms, SetpreviousTerms] = useState<string[]>([])
  const gifCache = useRef< Record<string, Gif[]>>({})

  const handleTermClicked = async (term:string) => {


    if(gifCache.current[term]){
         setgifs(gifCache.current[term])
      return;
    }

        const gifs =  await getGifsbyQuery(term);
   setgifs(gifs)
  }

  const handelSearch = async(query:string) =>{
    query=  query.trim().toLowerCase()
    if(query.length === 0) return

     if(previousTerms.includes(query))return

     SetpreviousTerms([query, ...previousTerms].splice(0,8))

    const gifs =  await getGifsbyQuery(query);
   setgifs(gifs)
   gifCache.current[query] = gifs;
   console.log(gifCache)

  }
  
    return {
        gifs,
        handelSearch,
        handleTermClicked, 
        previousTerms

    } 


}
