x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "system is listening please speak";  
  recognition.start();
}

function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;
to_number = Number(content);
if(Number.isInteger(to_number));


for(var i = 1; i <= to_number; i++)
{
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    document.getElementById("status").innerHTML = "Started drawing apple";
    image(apple, x, y, 50, 50);
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    draw_apple="set";
}
}

function setup() {
  canvas = createCanvas(700, 400);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    screen_width = window.innerWidth;
  }
}


 
