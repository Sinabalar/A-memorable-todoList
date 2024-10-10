const input = document.getElementById('input');
input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            getItem()
        }
    }
);

function getItem() {
    if (!input.value) {
        alert('please enter a task');
    } else {
        let liTag = document.createElement('li');
        let taskTag = document.createElement('span');
        let task = document.createTextNode(input.value);
        taskTag.appendChild(task)
        liTag.appendChild(taskTag);
        let result = document.getElementById('result');
        result.appendChild(liTag);
        let remTag = document.createElement('button');
        let iTag = document.createElement('i');
        remTag.appendChild(iTag);
        iTag.setAttribute('class', 'fas fa-trash');
        liTag.appendChild(remTag);
        input.value = '';


        function taskDone(calledByUpdatePendingText) {
            !calledByUpdatePendingText && (taskTag.classList.toggle('task-done'))

            const allTasks = Array.from(document.querySelectorAll('li span'));

            const completedTasks = allTasks.filter(el => el.classList.contains('task-done'));


            if (!completedTasks.length) {
                document.querySelector('.pending span').textContent = ``;
            } else if (allTasks.length !== completedTasks.length) {
                document.querySelector('.pending span').textContent = `You done ${completedTasks.length} of them. (${Math.round((completedTasks.length / allTasks.length) * 100)})%`;
            } else {
                document.querySelector('.pending span').textContent = `All done ✅`;
            }
        }


        function updatePendingText() {
            taskDone(true)
            const allTasks = document.querySelectorAll('li')
            const pending = document.querySelector('.pending p');
            pending.textContent = `You have ${allTasks.length} task${allTasks.length > 1 ? 's' : ''}`;
        }


        function handelRemove() {
            this.parentNode.remove();
            updatePendingText();
            taskDone(false);
        }


        updatePendingText();

        taskTag.addEventListener("click", () => taskDone(false));


        remTag.addEventListener('click', handelRemove.bind(remTag));
    }
}
