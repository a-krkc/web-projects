function UI() {}

UI.prototype.addItemToUI = function (item) {
  const li = document.createElement("li");
  li.className = "list-items";
  li.appendChild(document.createTextNode(item));
  li.appendChild(this.createButton(this.createIcon()));
  ul.appendChild(li);
  // console.log(input.value);
  input.value = "";
};

UI.prototype.createButton = function (i) {
  const button = document.createElement("button");
  button.className = "remove-item btn-remove red";
  button.appendChild(i);
  return button;
};

UI.prototype.createIcon = function () {
  const i = document.createElement("i");
  i.className = "fa-solid fa-xmark";
  return i;
};

UI.prototype.loadAllItemsToUI = function () {
  let items = storage.getItemsFromStorage();
  items.map((item) => this.addItemToUI(item));
};

UI.prototype.deleteItemFromUI = function (e) {
  if (e.target.className === "fa-solid fa-xmark") {
    storage.deleteItemFromStorage(
      e.target.parentElement.parentElement.textContent
    );
    e.target.parentElement.parentElement.remove();
  }
};

UI.prototype.clearAllItemsFromUI = function () {
  while (ul.firstElementChild !== null) {
    ul.removeChild(ul.firstElementChild);
  }
};

UI.prototype.showAlert = function (tf) {
  tf
    ? (input.style.borderColor = "rgba(0, 255, 0, 1)")
    : (input.style.borderColor = "rgba(255, 0, 0, 1)");
  setTimeout(function () {
    input.style.borderColor = "rgba(0, 0, 0, 0)";
  }, 1000);
};
