const INPUT = document.querySelector("#input");
const BUTTON = document.querySelector("#button");
const LIST = document.querySelector("#list");

console.log({ INPUT, BUTTON, LIST });

const addToDo = () => {
  if (INPUT.value) {
    const toDo = INPUT.value;
    const toDoElement = createToDoElement(toDo);
    LIST.append(toDoElement);
    INPUT.value = "";
  }
};
BUTTON.addEventListener("click", addToDo);

const createToDoElement = (toDo) => {
  const wrapper = document.createElement("div");
  const content = document.createElement("span");
  content.innerText = toDo;
  const buttonRemove = document.createElement("button");
  buttonRemove.innerText = "X";
  buttonRemove.addEventListener("click", () => {
    wrapper.remove();
  });
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      content.classList.add("done");
    } else {
      content.classList.remove("done");
    }
  });
  const edit = document.createElement("button");
  edit.innerText = "edit";
  edit.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = content.innerText;
    const enter = document.createElement("button");
    enter.innerText = "enter";
    enter.addEventListener("click", () => {
      const newValue = input.value;
      content.innerText = newValue;
      wrapper.innerHTML = "";
      wrapper.append(checkbox, content, edit, buttonRemove);
    });
    wrapper.innerHTML = "";
    wrapper.append(checkbox, input, enter, buttonRemove);
  });
  wrapper.append(checkbox, content, edit, buttonRemove);
  return wrapper;
};
