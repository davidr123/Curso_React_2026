
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'

import {  useGifsApp } from './gifs/components/hooks/useGifsApp';


export const GifApp = () => {

 const {gifs, handelSearch, handleTermClicked, previousTerms } = useGifsApp()

  return (
   <>
     <CustomHeader title='Buscadir de Gif' description='Descubrey comparte'></CustomHeader>
     <SearchBar placeholder='Buscar Gif' onQuery={handelSearch}></SearchBar>
        <PreviousSearches searches={previousTerms} onLabelClicked={(term:string)=> handleTermClicked(term)}></PreviousSearches>
          <GifList data={gifs}></GifList>
   </>
  )
}
