<h1 id="greet">Hello 🌸</h1>
<button id="clickMe">Click Me 💖</button>

<script>
  // Animated greetings
  const greetings = ["Hello 🌸", "Welcome 💖", "Hi there 🐰"];
  let i = 0;
  setInterval(() => {
    document.getElementById("greet").textContent = greetings[i];
    i = (i + 1) % greetings.length;
  }, 2000);

  // Button click cute animation
  const btn = document.getElementById("clickMe");
  btn.addEventListener("click", () => {
    btn.textContent = "Yay! 💕";
    setTimeout(() => btn.textContent = "Click Me 💖", 1000);
  });
</script>
