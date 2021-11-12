const shuffleboard = document.getElementById("shuffleboard-boxes");
function getBoxes() {
  return [
    {
      number: 1,
      color: "#6F98A8",
    },
    {
      number: 2,
      color: "#2B8EAD",
    },
    {
      number: 3,
      color: "#2F454E",
    },
    {
      number: 4,
      color: "#2B8EAD",
    },
    {
      number: 5,
      color: "#2F454E",
    },
    {
      number: 6,
      color: "#BFBFBF",
    },
    {
      number: 7,
      color: "#BFBFBF",
    },
    {
      number: 8,
      color: "#6F98A8",
    },
    {
      number: 9,
      color: "#2F454E",
    },
  ];
}

function initializeBoxes() {
  renderBoxes(getBoxes());
}

function shuffleBoxes() {
  let boxes = getBoxes();
  for (let index = 0; index < boxes.length; index++) {
    let randomIndex = Math.floor(Math.random() * 8);
    let temp = boxes[index];
    boxes[index] = boxes[randomIndex];
    boxes[randomIndex] = temp;
  }
  renderBoxes(boxes);
}

function sortBoxes() {
  renderBoxes(getBoxes().sort());
}

function renderBoxes(boxes) {
  let content = "";
  boxes.forEach((box) => {
    content += ` <div class="shuffleboard-boxes-box">
    <span class="shuffleboard-boxes-box-banner" style="background-color: ${box.color}"></span>
    <span class="shuffleboard-boxes-box-label">${box.number}</span>
  </div>`;
  });
  shuffleboard.innerHTML = content;
}
