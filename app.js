const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/auth/signup', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'vous êtes inscrit !'
  });
});
app.post('/api/auth/login', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'vous êtes connecté !'
  });
});

app.get('/api/sauces', (req, res, next) => {
  res.status(200).json({
    message: 'tableau des sauces'
  });
});

app.get('/api/sauces/:id', (req, res, next) => {
  res.status(200).json({
    message: 'ma sauce ' + req.params.id
  });
});

app.post('/api/sauces', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'ma nouvelle sauce !'
  });
});

app.put('/api/sauces/:id', (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  res.status(200).json({
    message: 'ma sauce ' + req.params.id +' est mise à jour !' 
  });
});        

app.delete('/api/sauces/:id', (req, res, next) => {
  console.log(req.params.id);
  res.status(204).json({
    message: 'ma sauce ' + req.params.id +' est supprimée!'
  });
});

app.post('/api/sauces/:id/like', (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  res.status(200).json({
    message: 'like/dislike la sauce ' + req.params.id
  });
});
 




module.exports = app;