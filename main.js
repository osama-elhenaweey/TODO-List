// dark theme with local storage
let btnToggle = document.getElementById("btn-toggler");
let backGround = document.getElementById("header");
// console.log(backGround);
function changeBackgroundImage(color) {
    backGround.style.backgroundImage = `url("../images/bg-desktop-${color}.jpg")`;
}

btnToggle.addEventListener("click", function (e) {
    if (e.target.className.includes("fa-sun")) {
        document.documentElement.setAttribute("data-theme", "dark");

        document.getElementById("icon").classList.replace("fa-sun", "fa-moon");
        changeBackgroundImage("dark");

        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById("icon").classList.replace("fa-moon", "fa-sun");
        changeBackgroundImage("light");
        localStorage.setItem("theme", "light");
    }
});
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme == "dark") {
        changeBackgroundImage("dark");
        document.getElementById("icon").classList.replace("fa-sun", "fa-moon");
    } else {
        changeBackgroundImage("light");
    }
}

// Dark theme ending///////////////////

// the number of tasks
let counter;
let numberIterationContainer = document.getElementById("numbers");

let tasks = document.querySelectorAll(".todo__tasks__task");

let btnRemove = document.querySelectorAll(".remove_task");
function removingTask() {
    for (let task = 0; task < tasks.length; task++) {
        /////////////////REMOVE/////////////////////////////////////
        btnRemove[task].addEventListener("click", function () {
            // /////when i click in the x button the father element will ber removed

            // btnRemove[el].parentElement.classList.add("aaa");
            btnRemove[task].parentElement.remove();
        });
    }
}
removingTask();
let btnCheck = document.querySelectorAll(".check");
function makeChecking() {
    for (let task = 0; task < tasks.length; task++) {
        /////////////////////ADDING styles to component/////////////////////////
        btnCheck[task].addEventListener("click", function () {
            // to add class i will do that when finish a task in todo list
            tasks[task].classList.toggle("active");
        });
    }
}
makeChecking();
// // check if you press complete button it will show only completed tasks and display none for all other tasks

let btnComplete = document.getElementById("complete");

for (let el = 0; el < tasks.length; el++) {
    btnComplete.addEventListener("click", function () {
        console.log(tasks[el]);

        if (tasks[el].classList.value.includes("active")) {
            tasks[el].classList.remove("non");
        } else {
            // console.log("bye");
            tasks[el].classList.add("non");
        }
    });
}
// // check if you press active button it will show only active tasks and display none for all other tasks

let btnActive = document.getElementById("active");

for (let el = 0; el < tasks.length; el++) {
    /////////////////////ADDING styles to component/////////////////////////
    btnActive.addEventListener("click", function () {
        counter = 0;
        if (tasks[el].classList.value.includes("active")) {
            tasks[el].classList.add("non");
            //
        } else {
            // tasks[el].classList.add("non");

            tasks[el].classList.remove("non");

            //
        }
    });
}

let btnAll = document.getElementById("all");
for (let el = 0; el < tasks.length; el++) {
    /////////////////////ADDING styles to component/////////////////////////
    btnAll.addEventListener("click", function () {
        counter = 0;
        if (tasks[el].classList.value.includes("active")) {
            tasks[el].classList.remove("non");

            //
        } else {
            // console.log("bye");
            // tasks[el].classList.add("non");
            console.log("hiiii");
            tasks[el].classList.remove("non");

            //
        }
    });
}
let btnClear = document.getElementById("clear");

for (let el = 0; el < tasks.length; el++) {
    /////////////////////ADDING styles to component/////////////////////////
    btnClear.addEventListener("click", function () {
        if (tasks[el].classList.value.includes("active")) {
            tasks[el].remove();
            // console.log(tasks[el]);

            //
        }
    });
}

function makeIterations(tasks) {
    counter = 0;
    for (let el = 0; el < tasks.length; el++) {
        if (!tasks[el].classList.value.includes("active")) {
            counter++;
            numberIterationContainer.innerHTML = `${counter} iterations left`;
        }
    }
}
makeIterations(tasks);
// numberIterationContainer.innerHTML = `${counter} iterations`;

let task_container = document.getElementById("todo__tasks");
let addButton = document.getElementById("plus");
let inputText = document.getElementById("input_feild");

function addHtml() {
    addButton.addEventListener("click", function () {
        htmlContent = `<span class="todo__tasks__task">
                                <span class="check"
                                    ><i class="fa-solid fa-check"></i
                                ></span>
                                <span class="task_text">${inputText.value}</span>
                                <span class="remove_task"
                                    ><i class="fa-solid fa-xmark"></i
                                ></span>`;
        task_container.insertAdjacentHTML("beforeend", htmlContent);
        // console.log(inputText.value);
        inputText.value = "";
    });
}
addHtml();
