// Animated greetings
const greetings = ["Happy Birthday! 🎀", "Welcome 💖", "Hi there 🌸"];
let i = 0;

setInterval(() => {
  document.getElementById("greet").textContent = greetings[i];
  i = (i + 1) % greetings.length;
}, 2000);

// Cute button click animation
const btn = document.getElementById("btn1");
btn.addEventListener("click", () => {
  const original = btn.textContent;
  btn.textContent = "Yay! 💕";
  setTimeout(() => btn.textContent = original, 1000);
});
