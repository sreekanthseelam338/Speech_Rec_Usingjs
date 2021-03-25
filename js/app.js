window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition(); //built in fucn = window

let words = document.getElementById("template");
let p = document.createElement("p");

words.appendChild(p);

recognition.addEventListener("result", e => {
  let transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

recognition.addEventListener("end", recognition.start);
console.log(recognition);
recognition.start();
