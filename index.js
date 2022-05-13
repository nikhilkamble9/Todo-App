const inputBox = document.getElementById("inputBox");
const btn = document.getElementById("btnon");
const pending = document.getElementById("pending");
const rmvbtn = document.getElementById("removebtn");

let i = 0;
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = inputBox.value;
  const newP = document.createElement("p");
  newP.innerText = inputValue;
  const newRemovebtn = document.createElement("button");
  newRemovebtn.innerText = "❌";
  newRemovebtn.accessKey = i;
  newRemovebtn.className = "removebtn";
  i += 1;
  const newSpan = document.createElement("span");
  newSpan.append(newRemovebtn);
  newP.append(newSpan);
  pending.append(newP);
  inputBox.value = "";

  //   Removing the p
  newRemovebtn.onclick = () => {
    newP.remove();
  };
});
