import { useEffect, useState } from "react";

const useGetPokemonByName = (query: string) => {
  const [filteredPokemon, setFilteredPokemon] = useState<any>(null);

  useEffect(() => {
    const fetchPokemonByName = async () => {
      try {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
        const allPokemons = await response.json();

        // Filtrer le Pokémon correspondant au texte de recherche
        const pokemon = allPokemons.find(
          (p: any) => p.name.toLowerCase() === query.toLowerCase()
        );

        setFilteredPokemon(pokemon || null);
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
        setFilteredPokemon(null);
      }
    };

    if (query) fetchPokemonByName();
  }, [query]);

  return filteredPokemon;
};

export default useGetPokemonByName;
