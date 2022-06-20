import React from 'react'
import "./PokeInfo.css"
function PokeInfo({pokedex}) {
  console.log(pokedex)
  return (
    <>
   {
     (!pokedex)?"":(
       
       <>
      <div className="PokeInfo">
      <h1>{pokedex.name}</h1>
      <img src={pokedex.sprites.front_default} alt="network error" />
      <div className="abilites">
      {
        pokedex.abilities.map((item,index)=>{
          return (
      <div className="group" key={index}>
      <h2>{item.ability.name}</h2>
      </div>
          )
        })
      }
      
      </div>
      <div className="base-state">
        {
          pokedex.stats.map((item,index)=>{
return(<h3 key={index}>{item.stat.name}:{item.base_stat}</h3>)
          })
        }
      
      </div>
      </div>
      </>
      )
      
    } 
    </>
    
  )
}
export default PokeInfo;