var nodemailer = require('nodemailer');
var error = require('./error');
var config = require('../secure/config.js')["prod"];

var transporter = nodemailer.createTransport('smtps://stag.stacks@gmail.com:' + config["gamil_pass"] + '@smtp.gmail.com');

var feedback = {
    save: function(req, res, next) {
        process.console.tag("Feedback").log("FEEDBACK");
        if (req.body.email && req.body.text) {
            var mailOptions = {
                from: 'stag.stacks@gmail.com',
                to: config["mail_to"],
                subject: 'Feedback',
                text: 'Name: ' + req.body.name + '\nEmail: ' + req.body.email + '\nText: ' + req.body.text + '\nClientTime: ' + req.body.time
            };
            transporter.sendMail(mailOptions, function(err, info) {
                if (err) {
                    error(req, res, {
                        status: 500,
                        text: "Internal Server Error"
                    }, err);
                } else {
                    process.console.tag("Feedback").log('Name: ' + req.body.name +
                        '\nEmail: ' + req.body.email +
                        '\nText: ' + req.body.text +
                        '\nClientTime: ' + req.body.time +
                        '\nIp: ' + req.ip +
                        '\nMessage sent: ' + info.response);
                    res.sendStatus(200)
                }
            });
        } else {
            error(req, res, {
                status: 422,
                text: "req body malformed"
            }, "req body malformed");
        }
    }
}
module.exports = feedback;
