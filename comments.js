// Create web server
// Create a web server that listens to the port 3000 and returns the comments from the comments variable. If the URL is /comments, the server should return all the comments. If the URL is /comments/:id, the server should return the comment with that id.

// The comments should be returned as JSON. If a comment with that id is not found, the server should return a 404 status code.

// To start the server, you can run the following command: node comments.js.

// comments.js
const http = require('http');

const comments = [
  { id: 1, author: 'John', text: 'Hello World' },
  { id: 2, author: 'Jane', text: 'Another comment' },
  { id: 3, author: 'Alice', text: 'Third comment' }
];

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else if (req.url.startsWith('/comments/')) {
    const id = parseInt(req.url.substring(10));
    const comment = comments.find((comment) => comment.id === id);

    if (comment) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(comment));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Comment not found');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, '