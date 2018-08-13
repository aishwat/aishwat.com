function error(req, res, custom_error, actual_error) {
    if (actual_error) {
        var body = "";
        if (req.body)
            body = JSON.stringify(req.body);

        process.console.tag("error").error("Ip: " + req.ip +
            "\nreq.url: " + req.url +
            "\nreq.body: " + body +
            "\nactual_error: " + actual_error);
    }
    res.status(custom_error.status).send(custom_error.text);
}
module.exports = error;
