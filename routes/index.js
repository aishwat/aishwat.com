var express = require('express');
var router = express.Router();
var feedback = require('./feedback');
var like_dislike = require('./like_dislike');
var path = require('path');

router.post('/feedback', feedback.save);
router.get('/like', like_dislike.like);
router.get('/dislike', like_dislike.dislike);

router.get('/resume', function(req, res){
    res.download(path.join(__dirname, '../public/assets/cv.pdf'));
});
router.get('/cv', function(req, res){
    res.download(path.join(__dirname, '../public/assets/cv.pdf'));
});

router.get('*', function(req, res, next) {
	process.console.tag('view').log("Ip: "+req.ip);
    res.redirect('/index.html');
});




module.exports = router;
