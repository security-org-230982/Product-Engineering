function createGame() {
  return {
    title: 'Simple Game',
    rules: 'Click score to increment and race to 10!',
    maxScore: 10
  };
}

module.exports = { createGame };
