const fetchCasualQuestions = async (setupInformation) => {
  const { amount, category, difficulty, type } = setupInformation;

  const difficultyCondition =
    difficulty !== "" ? `&difficulty=${difficulty}` : "";

  const typeCondition = type !== "" ? `&type=${type}` : "";

  const response = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}${difficultyCondition}${typeCondition}`
  );
  const questions = await response.json();

  return questions.results;
};

export default fetchCasualQuestions;
