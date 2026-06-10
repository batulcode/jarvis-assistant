function talk() {

let input =
document.getElementById("userInput").value;

let output = "";

if(input.toLowerCase() === "hello") {
output = "Hello, I am Jarvis!";
}
else {
output = "I don't understand.";
}

document.getElementById("output").innerText =
output;

}
