const button = document.getElementById("animateBtn");
const prefSpan = document.getElementById("preference");

let stored = localStorage.getItem("userPref") || "None";
prefSpan.textContent = stored;

button.addEventListener("click", () => {
  button.classList.add("animate");

  button.addEventListener("animationend", () => {
    button.classList.remove("animate");
  }, { once: true });

  const newPref = stored === "Clicked" ? "Clicked Again" : "Clicked";
  localStorage.setItem("userPref", newPref);
  prefSpan.textContent = newPref;
  stored = newPref;
});
