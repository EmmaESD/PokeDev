import { useEffect, useState } from "react";
import { useShuffleArray } from "@/hook/useShuffleArray";

export const useRandomPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  const shuffleArray = useShuffleArray();

  useEffect(() => {
    (async () => {
      const pokemonsJson = await fetch(
        "https://pokebuildapi.fr/api/v1/pokemon"
      );
      const pokemons = await pokemonsJson.json();
      const randomPokemons = shuffleArray(pokemons).slice(0, 6);
      setPokemons(randomPokemons);
    })();
  }, []);

  return pokemons;
};
