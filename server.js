const express = require('express');
const app = express();
const methodOverride = require('method-override');
const articleRouter = require('./routes/articles');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Sample data without a database
const articles = [
  { title: 'Current Oppurtunities for 2026 graduates', content: 'Content for article 1' },
  { title: 'Blog about the 2023 WE bootcamp', content: 'Content for article 2' },
  // Add more articles as needed
];

app.get('/', (req, res) => {
  res.render('articles/index', { articles });
});

app.use('/articles', articleRouter);

app.listen(6200, () => {
  console.log('Server is running on port 6200');
});
