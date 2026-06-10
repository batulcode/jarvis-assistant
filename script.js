function talk() {

    alert("Speech support: " + ('speechSynthesis' in window));
let input = document.getElementById("userInput").value.toLowerCase();

let output = "";

if(input === "hello"){
    output = "Hello, I am Jarvis!";
}
else if(input === "time"){
    output = new Date().toLocaleTimeString();
}
else{
    output = "Sorry, I don't understand.";
}

document.getElementById("output").innerText = output;

if ('speechSynthesis' in window) {
    let speech = new SpeechSynthesisUtterance(output);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
} else {
    alert("Speech not supported on this browser");
}

}
