function getItem() {
    var inputData;
    inputData = document.getElementById('input').value;
    if (inputData == "") {
        alert('please enter a task');
    } else {
        document.getElementById('input').value = ''
        var liTag = document.createElement('li');
        var tasktag = document.createElement('span');
        var task = document.createTextNode(inputData);
        tasktag.appendChild(task)
        liTag.appendChild(tasktag);
        var result = document.getElementById('result');
        result.appendChild(liTag);
        var remTag = document.createElement('button');
        var remTxt = document.createTextNode(' X ');
        remTag.appendChild(remTxt);
        liTag.appendChild(remTag);
        liTag.addEventListener("click", taskDone);

        function taskDone() {
            tasktag.style.textDecoration = "line-through";
        }

        var remove = document.createAttribute('onclick')
        remove.value = 'this.parentNode.remove();';
        remTag.setAttributeNode(remove)
    }
}