const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  let top = Math.floor(Math.random() * 90);
  let left = Math.floor(Math.random() * 90);

  noBtn.style.position = "absolute";
  noBtn.style.top = `${top}%`;
  noBtn.style.left = `${left}%`;
});

const yesBtn = document.getElementById("yesBtn");
yesBtn.addEventListener("click", () => {
  alert("awwww, ty");
});
