function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = () => li.remove();
    
    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
    
    input.value = "";
}
