const createQuestion = (text, answer) => {
  const question = text;
  const expected = answer;
  return (field) => {
    switch (field) {
      case 'question': return question;
      case 'expected': return expected;
      default: return null;
    }
  };
};

const getText = (question) => question('question');

const getExpectedAnswer = (question) => question('expected');

export { createQuestion, getText, getExpectedAnswer };
