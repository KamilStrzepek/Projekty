const ToDoTaskMessage = document.querySelector('#ToDoMessage');
const ToDoList = document.querySelector('#ToDoList');
// const ToDoElements = document.querySelectorAll(".ToDoElement");

function TaskNumber() {
    const ToDoElements = document.querySelectorAll(".ToDoElement");
    var number = 1;
   // console.log(ToDoElements);
    [].forEach.call(ToDoElements, function (el) {
        //console.log(el);
        el.querySelector(".ListNumber").innerText = number;
        number++;
    });
}
//var TaskNumber=1;


function AddTask(TaskMessage) {
    const ToDoElement = document.createElement('div');
    ToDoElement.classList.add('ToDoElement');

    const ListNumber = document.createElement('div');
    ListNumber.classList.add("ListNumber");

    // ListNumber.innerText = TaskNumber+".";
    //TaskNumber++;

    const ListElement = document.createElement('div');
    ListElement.classList.add('ListElement');

    const time = new Date();
    const Month = ((time.getMonth() + 1) < 10) ? ("0" + (time.getMonth() + 1)) : (time.getMonth() + 1);
    const Day = ((time.getDate()) < 10) ? ("0" + (time.getDate())) : (time.getDate());
    const czas = Day + "-" + Month + "-" + time.getFullYear() + " godz.: " + time.getHours() + ":" + time.getMinutes();
    const ElementDate = document.createElement('div');
    ElementDate.classList.add('ElementDate');
    ElementDate.innerText = czas;

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('todo-element-delete');
    btnDelete.title = "Usuń zadanie";
    btnDelete.innerHTML = "<i class='fas fa-times-circle'></i>";

    const ElementText = document.createElement('div');
    ElementText.classList.add('ElementText');
    ElementText.innerText = TaskMessage;

    ToDoList.appendChild(ToDoElement);

    ToDoElement.appendChild(ListNumber);
    ToDoElement.appendChild(ListElement);

    ListElement.appendChild(ElementDate);
    ListElement.appendChild(btnDelete);
    ListElement.appendChild(ElementText);

    TaskNumber();
    SaveToStorage();
}
function GetFromStorage(){
    var Inner = window.localStorage.Lista;
    ToDoList.innerHTML = Inner;

}

function SaveToStorage() {
    const ToDoList = document.querySelector('#ToDoList');
    window.localStorage.Lista = ToDoList.innerHTML;
}

document.addEventListener('DOMContentLoaded', function () {
    const AddTaskButton = document.querySelector("#AddTask_button");
    const AddTaskForm = document.querySelector("#AddTask");
    const ToDoSearch = document.querySelector('#ToDoSearch');
    GetFromStorage();

    AddTaskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (ToDoTaskMessage.value !== "") {
            AddTask(ToDoTaskMessage.value);
            ToDoTaskMessage.value = "";
        }
    });
    ToDoList.addEventListener('click', function (el) {
        
        if(el.target.classList.contains('todo-element-delete'))
        {
            el.target.closest('.ToDoElement').remove();
        TaskNumber();
        SaveToStorage();
        }
        
    });

    ToDoSearch.addEventListener('input', function () {
        const val = this.value;
        const ToDoElements = document.querySelectorAll(".ToDoElement");

        [].forEach.call(ToDoElements, function (el) {
            const text = el.querySelector('.ElementText').innerText;

            if (text.indexOf(val) !== -1) {
                el.style.display = "";
            }
            else {
                el.style.display = "none";
            }
        })
    });

});