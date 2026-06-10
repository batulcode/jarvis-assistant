function talk() {

let input =
document.getElementById("userInput").value.toLowerCase();

let output = "";

if(input === "hello"){
    output = "Hello, I am Jarvis!";
}
else if(input === "time"){
    output = new Date().toLocaleTimeString();
}
else if(input === "date"){
    output = new Date().toLocaleDateString();
}
else{
    output = "Sorry, I don't understand.";
}

document.getElementById("output").innerText = output;

let speech = new SpeechSynthesisUtterance(output);
speechSynthesis.speak(speech);

}
