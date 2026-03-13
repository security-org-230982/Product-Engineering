const express = require('express');
const { createGame } = require('./game');

const app = express();
const port = process.env.PORT || 3000;
const game = createGame();

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/api/game', (_req, res) => res.json(game));
app.get('/', (_req, res) => {
  res.type('html').send(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${game.title}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 2rem; text-align:center; }
        button { padding: 1rem 2rem; font-size: 1rem; cursor:pointer; }
        .card { max-width: 640px; margin: 0 auto; padding: 2rem; border: 1px solid #ddd; border-radius: 12px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>${game.title}</h1>
        <p>${game.rules}</p>
        <h2 id="score">0</h2>
        <button onclick="increment()">Score!</button>
        <p id="result"></p>
      </div>
      <script>
        let score = 0;
        function increment() {
          score += 1;
          document.getElementById('score').innerText = score;
          document.getElementById('result').innerText = score >= ${game.maxScore}
            ? 'You win! Refresh to play again.'
            : 'Keep going...';
        }
      </script>
    </body>
  </html>`);
});

if (require.main === module) {
  app.listen(port, () => console.log(`simple-game listening on ${port}`));
}

module.exports = app;
