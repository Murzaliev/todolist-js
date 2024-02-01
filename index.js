const name = document.querySelector(".name");
const lastName = document.querySelector(".lastName");
const img = document.querySelector(".img");
const btn_create = document.querySelector(".custom-btn");
const list = document.querySelector(".list");
read();
list.style.transform = "scale(0)"


btn_create.addEventListener("click", () => {
  list.style.transform = "scale(1)"
  let obj = {
    name: name.value,
    lastName: lastName.value,
    img: img.value,
  };
  let data = JSON.parse(localStorage.getItem("todo")) || [];
  data.push(obj);
  localStorage.setItem("todo", JSON.stringify(data));
  read();
});

function read() {
  let newData = JSON.parse(localStorage.getItem("todo")) || [];
  list.innerHTML = "";
  newData.forEach((el, idx) => {
    let info = document.createElement("div");
    let pName = document.createElement("p");
    let pLastName = document.createElement("p");
    let image = document.createElement("img");
    let infoImg = document.createElement("div");
    let btnDelete = document.createElement("button");
    let btnEdit = document.createElement("button");
    btnEdit.classList.add("edit-btn")
    btnDelete.classList.add("del-btn")
    info.classList.add("addText")
    infoImg.classList.add("titile")
    pName.classList.add("addname")
    pLastName.classList.add("LastName")
    pName.innerText = el.name;
    pLastName.innerText = el.lastName;
    image.src = el.img;
    btnDelete.innerText = "delete";
    btnEdit.innerText = "edit";
    info.append(pName);
    info.append(pLastName);
    infoImg.append(image);
    list.append(infoImg);
    list.append(info);
    list.append(btnDelete);
    list.append(btnEdit);
    btnDelete.addEventListener("click", () => {
      delate(idx);
      read();
    });
    btnEdit.addEventListener("click", () => {
      edit(idx);
    });
  });
}

function delate(id) {
  let data = JSON.parse(localStorage.getItem("todo")) || [];
  data.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(data));
}

const editname = document.querySelector(".editname");
const editlastName = document.querySelector(".editlastName");
const editimg = document.querySelector(".editimg");
const btn_save = document.querySelector(".custom-btn-1");

function edit(id) {
  let data = JSON.parse(localStorage.getItem("todo")) || [];
  editname.setAttribute("id", id);
  editname.value = data[id].name;
  editlastName.setAttribute("id", id);
  editlastName.value = data[id].lastName;
  editimg.setAttribute("id", id);
  editimg.value = data[id].img;
}
btn_save.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("todo")) || [];
  let nameId = editname.id;
  let lastNameId = editlastName.id;
  let imgId = editimg.id;
  let editObj = {
    name: editname.value,
    lastName: editlastName.value,
    img: editimg.value,
  };
  data.splice(nameId, 1, editObj);
  data.splice(lastNameId, 1, editObj);
  data.splice(imgId, 1, editObj);
  localStorage.setItem("todo", JSON.stringify(data));
  read();  
});