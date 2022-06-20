import React from 'react'
import "./Card.css"
 function Card({PokeData,loading,InfoPokemon}) {
  console.log(InfoPokemon)
  console.log(PokeData)
  return (
    loading?<h1>Loading...</h1>:
    PokeData.map((item)=>{
      return (<div className='card' key={item.id} onClick={()=>InfoPokemon(item)}>
      <p className='id'>{item.id}</p>
        <img src={item.sprites.front_default} alt="Network error" />
        <p className='name'>{item.name}</p>
    </div>)
    })
    
  )
}
export default Card;

