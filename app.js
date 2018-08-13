var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var routes = require('./routes/index');
var auth = require('http-auth');
var scribe = require('scribe-js')();
var console = process.console;
var env="prod";
// var env = "dev";

var app = express();

var compress = require('compression');
app.use(compress());

app.use(scribe.express.logger());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var basicAuth = auth.basic({ //basic auth config
    realm: "ScribeJS WebPanel",
    file: "./secure/users.htpasswd" // test:test
});
app.use('/logs', auth.connect(basicAuth), scribe.webPanel());
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (env === 'dev') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var PORT = process.env.PORT || 3000 ;
if (env === "dev") {
    var server = app.listen(PORT, function() {
        console.tag('Server Started').log('Express server listening on port ' + server.address().port);
    });
} else {

    var serv_options={
        key: fs.readFileSync('secure/myserver.key'),
        cert: fs.readFileSync('secure/aishwat_com.crt'),
        ca: [fs.readFileSync('secure/aishwat_com.ca-bundle')]
    };
    require('https').createServer(serv_options, app).listen('443', function() {
        console.tag('Server Started').log('Express server listening on port 443');
    });

    require('http').createServer(app).listen('80', function() {
        console.tag('Server Started').log('Express server listening on port 80');
    });
}
