const express = require("express");
const bodyParser = require("body-parser");
const app =  express();

app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("calculated value is " + result);

});







app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post("/bmicalculator", function(req, res){
  var num1 = parseFloat(req.body.weight);
  var num2 = parseFloat(req.body.height);

  var bmiResult = num1 / (num2 * num2);

  res.send("Your Bmi is  " + bmiResult);

});


app.get("/divcal", function(req, res){
  res.sendFile(__dirname + "/division.html");

});

app.post("/divcal", function(req, res){
  var value1 = Number(req.body.n1);
  var value2 = Number(req.body.n2);
  var totalValue = value1 / value2;

  res.send("you division value is" + totalValue);



});


app.listen(process.env.PORT,3000, function(){
  console.log("our server on port 3000");
});
