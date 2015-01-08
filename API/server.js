var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var app = express();

app.use(cors());
app.use(bodyParser.json());

var generator = require('xoauth2').createXOAuth2Generator({

});

var transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        xoauth2: generator
    }
}));


app.post('/', function(req, res){
    var mailOptions = {
        from: req.body.name + ' ' + '<' + req.body.email + '>', // sender address
        to: '', // list of receivers
        subject: req.body.name + ' wants to sell their house', // Subject line
        text: 'Here is the info:' + req.body, // plaintext body
        html: '<p>Name: ' + req.body.name + '</p>' +
                '<p>Phone: '+ req.body.phone + '</p>' +
                '<p>Email: ' + req.body.email + '</p>' +
                '<p>Address: ' + req.body.street1 + " " + req.body.city + " " + req.body.zipcode + '<p>' +
                '<p>Reason: ' + req.body.reason + '</p>'
    };

    transport.sendMail(mailOptions, function(error, info){
        if(error){
            res.status(500).end();
        }else{
            res.status(200).end();
        }
        transport.close();
    });
});

app.listen(8080, function(){
    console.log('listening');
});