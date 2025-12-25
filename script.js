const container = document.querySelector(".container");

const colorNameText = document.querySelector("#text");

const button = document.querySelector(".colorbox");

const simpleButton = document.querySelector("#simpleButton");

const hexButton = document.querySelector("#hexButton");

const hexPicker = document.querySelector("#hexPicker");

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

const randomColorPicker = () => {
  let colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
};

const randomHexPicker = () => {
  let hexIndex = Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, "0");

  return "#" + hexIndex;
};

let mode = "simple";

hexButton.addEventListener("click", () => {
  mode = "hex";
});

simpleButton.addEventListener("click", () => {
  mode = "simple";
});

const colorChanger = () => {
  let color;

  if (mode === "simple") {
    color = randomColorPicker();
  } else if (mode === "hex") {
    color = randomHexPicker();
  }

  container.style.backgroundColor = color;
  colorNameText.innerHTML = `<p class="text">${color}</p>`;
};

hexPicker.addEventListener("input", () => {
  const hexColor = hexPicker.value;
  container.style.backgroundColor = hexColor;
  colorNameText.innerHTML = `<p class="text">${hexColor}</p>`;
  mode = "hex";
});

hexButton.addEventListener("click", () => {
  mode = "hex";
  hexPicker.click();
});

button.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.key === " ") {
    event.preventDefault();
    colorChanger();
  }
});
