import { useEffect, useState } from "react";
import { useShuffleArray } from "@/hook/useShuffleArray";

export const useRandomType = () => {
  const [types, setTypes] = useState([]);
  const shuffleArray = useShuffleArray();

  useEffect(() => {
    (async () => {
      const typesJson = await fetch("https://pokebuildapi.fr/api/v1/types");
      const types = await typesJson.json();
      const randomTypes = shuffleArray(types).slice(0, 6);
      setTypes(randomTypes);
    })();
  }, []);

  return types;
};
