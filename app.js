/*
// this commented code is first version, no storage

document.getElementById("addBtn").addEventListener("click", function () {
    const input = document.getElementById("nameInput");
    const name = input.value;


    if (name === "") return;


    const li = document.createElement("li");
    li.textContent = name;


    document.getElementById("nameList").appendChild(li);


    input.value = "";
});
*/

/*

const input = document.getElementById("nameInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("nameList");

// load saved names when page opens
let names = JSON.parse(localStorage.getItem("names")) || [];

function renderList() {
    list.innerHTML = "";
    names.forEach(function(name) {
        const li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    });
}

// initial render
renderList();

button.addEventListener("click", function () {
    const name = input.value;

    if (name === "") return;

    names.push(name);

    // save to browser
    localStorage.setItem("names", JSON.stringify(names));

    renderList();

    input.value = "";
});

*/


const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("nameList");

// load saved data
let people = JSON.parse(localStorage.getItem("people")) || [];

function renderList() {
    list.innerHTML = "";

    people.forEach(function(person) {
        const li = document.createElement("li");
        li.textContent = person.name + " - " + person.age;
        list.appendChild(li);
    });
}

// initial render
renderList();

button.addEventListener("click", function () {
    const name = nameInput.value;
    const age = ageInput.value;

    if (name === "" || age === "") return;

    people.push({ name: name, age: age });

    localStorage.setItem("people", JSON.stringify(people));

    renderList();

    nameInput.value = "";
    ageInput.value = "";
});

deleteBtn.addEventListener("click", function () {
    people = [];

    localStorage.removeItem("people");

    renderList();
});