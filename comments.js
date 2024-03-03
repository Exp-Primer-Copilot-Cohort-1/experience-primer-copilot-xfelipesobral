// Create web server
// Use express.js to create web server
const express = require('express');
const app = express();
const port = 3000;

// Use body-parser to parse JSON data
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a comment array
let comments = [];

// Create a GET method to get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Create a POST method to add a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send('Comment is added to the server');
});

// Create a PUT method to update a comment
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const newComment = req.body;
    comments[id] = newComment;
    res.send('Comment is updated');
});

// Create a DELETE method to delete a comment
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.splice(id, 1);
    res.send('Comment is deleted');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Test the server with curl
// curl -X GET http://localhost:3000/comments
// curl -X POST http://localhost:3000/comments -H "Content-Type: application/json" -d '{"name": "John", "message": "Hello World"}'
// curl -X PUT http://localhost:3000/comments/0 -H "Content-Type: application/json" -d '{"name": "John", "message": "Hello John"}'
// curl -X DELETE http://localhost:3000/comments/0