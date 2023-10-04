var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/download-cv', (req, res) => {
  const cvPath ='public/CV2023.pdf';
  const abs = path.resolve(cvPath);
  res.download(abs, 'JulianRodriguez2023.pdf');
});

module.exports = router;