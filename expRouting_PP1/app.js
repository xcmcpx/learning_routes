var express = require('express');
var app = express();


app.get('/', function(req, res){
   res.send('Hi, welcome to one of my many assignments practicing the MEAN stack. In this mini-project, I implement the express framework and ROUTEs.');
});

//DRY code technique for greetings ROUTE
app.get('/language/:lang', function(req,res){
    var lang = req.params.lang.toLowerCase();
    var greet = '';
    if(lang === 'arabic'){
        greet = 'ahlan habibi ow habibti';
    } else if (lang === 'spanish'){
        greet = 'Bienvenido';
    } else if (lang === 'latin'){
        greet = 'saluto';
    } else {
        res.send("Oops! You found a language I wasn't practicing with! Sorry.");
    }
    res.send('The ' + lang + ' welcomes guests with the phrase: ' + greet);
});

// DRY more efficient code for goodbye ROUTE
app.get('/language/:lang/bye', function(req, res){
  var languages = {
      arabic: 'ma as-salaamah',
      spanish: 'adios',
      latin: 'vale'
  } 
  var lang = req.params.lang.toLowerCase();
  var bye = languages[lang];

  res.send("The " + lang + " says good bye bye saying: " + bye);
});

app.get('/repeat/:message/:times', function(req, res){
   var message = req.params.message;
   var times = Number(req.params.times);
   var result = '';
   
   for(var i = 0; i<times; i++){
        result += message + ' ';    
   }
   res.send(result);
});

app.get('*', function(req, res){
   res.send('Sorry, this page was not part of my testing/practice. Please stick to the afore-mentioned links.'); 
});

app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log('App running, server is ON');
});