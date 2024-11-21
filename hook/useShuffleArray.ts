export const useShuffleArray = () => {
  const shuffleArray = (array: any) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return shuffleArray;
};
