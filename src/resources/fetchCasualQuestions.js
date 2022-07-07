const fetchCasualQuestions = async (setupInformation) => {
  const { amount, category } = setupInformation;

  // const difficultyCondition =
  //   difficulty !== "" ? `&difficulty=${difficulty}` : "";

  // const typeCondition = type !== "" ? `&type=${type}` : "";

  const response = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}`
  );
  const questions = await response.json();

  return questions.results;
};

export default fetchCasualQuestions;
