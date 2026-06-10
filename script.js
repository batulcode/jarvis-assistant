function talk() {

let input =
document.getElementById("userInput").value.toLowerCase();

let output = "";

if (input === "hello") {
    output = "Hello, I am Jarvis!";
}
else if (input === "how are you") {
    output = "I am doing great!";
}
else if (input === "time") {
    output = new Date().toLocaleTimeString();
}
else if (input === "date") {
    output = new Date().toLocaleDateString();
}
else {
    output = "Sorry, I don't understand.";
}

document.getElementById("output").innerText = output;

}
