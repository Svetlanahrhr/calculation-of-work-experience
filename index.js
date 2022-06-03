const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#finish-date");
const newStr = document.querySelector(".new-str");
const list = document.querySelector(".list");

newStr.addEventListener("click", addNewStr);
newStr.addEventListener("click", getDateStart);
newStr.addEventListener("click", getDateEnd);

function getDateStart(e) {
  console.log(startDate.value);

  console.log(e);
}
function getDateEnd(e) {

  console.log(endDate.value);
  console.log(e);
}

function addNewStr() {
  const li = document.createElement("li");
  li.classList = "list-item";
  li.innerHTML = `<div id="durations-line">
    <div>
        <label for="start"></label>
        <input type="date" id="start-date" name="duration-start">
    </div>
    <div>-</div>
    <div>
        <label for="finish"></label>
        <input type="date" id="finish" name="duration-finish">
    </div>
</div>`;
  list.appendChild(li);

}
