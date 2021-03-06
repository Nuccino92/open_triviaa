import shuffle from "./shuffle";

const fetchRankedQuestions = async (category) => {
  const array = [];

  const easy = await fetch(
    `https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&category=${category}`
  );

  const medium = await fetch(
    `https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple&category=${category}`
  );

  const hard = await fetch(
    `https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple&category=${category}`
  );

  const easyResult = await easy.json();
  const mediumResult = await medium.json();
  const hardResult = await hard.json();

  easyResult.results.map((res) => {
    return array.push(res);
  });

  mediumResult.results.map((res) => {
    return array.push(res);
  });

  hardResult.results.map((res) => {
    return array.push(res);
  });

  // mix up the array
  return shuffle(array);
};

export default fetchRankedQuestions;
