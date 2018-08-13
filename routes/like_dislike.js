var like = 0;
var dislike = 0;

var like_dislike = {
    like: function(req, res, next) {
        like++;
        process.console.tag("LIKE").log("Like_Count: " + like + "\nClientTime: " + req.query.timestamp+"\nIP: "+req.ip);
        res.sendStatus(200)
    },
    dislike: function(req, res, next) {
        dislike++;
        process.console.tag("DISLIKE").log("Dislike_Count: " + dislike + "\nClientTime: " + req.query.timestamp+"\nIP: "+req.ip);
        res.sendStatus(200)
    }
}
module.exports=like_dislike