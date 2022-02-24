import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const{cocktails, loading}=useGlobalContext();

  if(loading){
    return <Loading />
  }
  if(cocktails.length<1){
    return (
      <h2> No cocktails matched your search</h2>
    )
  }
  return (
    <div>
      <h2 className='section-title'>cocktail list component</h2>
    </div>
  )
}

export default CocktailList
