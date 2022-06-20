import React, { useState, useEffect } from "react";
import "./Parent.css";
import Card from "./Card";
import PokeInfo from "./PokeInfo";
import axios from "axios";
function Parent() {
  const [PokeData, setPokeData] = useState([]);
  const [loading, setloading] = useState(true);
  const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [Nexturl, setNexturl] = useState();
  const [Previousurl, setPreviousurl] = useState();
  const [PokeDex, setPokedex] = useState();
  const pokefun = async () => {
    setloading(true);
    const response = await axios.get(url);
    const data = response.data.results;
    console.log(response.data);
    console.log(data);
    setNexturl(response.data.next);
    setPreviousurl(response.data.previous);
    getPokemon(data);
    setloading(false);
  };
  const getPokemon = async(data) => {
    data.map(async(item) => {
      console.log(item.url)
      const PokeInfo = await axios.get(item.url);
      // console.log(PokeInfo.data);
      setPokeData((state) => {
        state = [...state, PokeInfo.data];
        state.sort((a,b)=>{
          return a.id-b.id;
          
        })
        return state;
      });
    });
  };
  useEffect(() => {
    pokefun();
  }, [url]);
  return (
    <div className="parent">
      <div className="container">
        <div className="left-side">
          <Card PokeData={PokeData} loading={loading} InfoPokemon={poke=>setPokedex(poke)} />
          
        </div>
        <div className="right-side">
          <PokeInfo pokedex={PokeDex} />
        </div>
      </div>
      <div className="buttons">
        {

       Previousurl && <button className="pre" onClick={()=>{ setPokeData([])
          seturl(Previousurl)}}>Previous</button>
        }
        {

        Nexturl && <button className="next" onClick={()=>{setPokeData([])
          seturl(Nexturl)}}>Next</button>
        }
      </div>
    </div>
  );
}
export default Parent;
