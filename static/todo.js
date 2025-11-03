

// remove task button
// const removeTaskButtons = document.querySelectorAll('.remove-btn');
// removeTaskButtons.forEach(button => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     const taskId = button.getAttribute('task-id');
//     console.log(`Removing task with ID: ${taskId}`);
//     fetch(`/remove/${taskId}`, { method: 'GET' })
//       .then(response => {
//         if (response.ok) {
//           button.closest('li').remove();
//         }
//       });
//   });
// });


// remove task function
function removeTask(taskId) {
  console.log(`Removing task with ID: ${taskId}`);
  fetch(`/remove/${taskId}`, { method: 'GET' })
    .then(response => {
      if (response.ok) {
        document.querySelector(`.remove-btn[task-id="${taskId}"]`).closest('li').remove();
      }
    });
}

// change priority
function changePriority(taskId){
  console.log(`Changing priority of task with ID: ${taskId}`);
  fetch(`/priority/${taskId}`, { method: 'POST' })
    .then(response => response.text())
    .then(curPriority => {
        const priorityBtn = document.querySelector(`.priority-btn[task-id="${taskId}"]`);

        priorityBtn.innerText = curPriority;

        
    
    });


}