const { createGame } = require('../../src/game');

test('createGame returns game metadata', () => {
  const game = createGame();
  expect(game.title).toBe('Simple Game');
  expect(game.maxScore).toBe(10);
});
