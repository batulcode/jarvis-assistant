function talk() {

    alert("Speech support: " + ('speechSynthesis' in window));
let input = document.getElementById("userInput").value.toLowerCase();

let output = "";

if(input.includes("hello"))
    output = "Hello, I am Jarvis!";
}
else if(input.includes("time"))
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
function testVoice() {
    let speech = new SpeechSynthesisUtterance("Hello Batul, Jarvis is working.");
    speech.lang = "en-US";
    speechSynthesis.speak(speech);
}

function startListening() {

if (!('webkitSpeechRecognition' in window)) {
    alert("Speech Recognition not supported");
    return;
}

const recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";

recognition.onstart = function() {
    alert("Listening...");
};

recognition.onresult = function(event) {

    let command = event.results[0][0].transcript;

    document.getElementById("userInput").value = command;

    talk();
};

recognition.onerror = function(event) {
    alert("Error: " + event.error);
};

recognition.start();

}
