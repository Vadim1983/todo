$(document).ready(function () {

    $('#form-new-task').on('submit', function (e) {
        e.preventDefault();

    var taskText = $('#addNewTask').val();
    var $taskHolder = $('<li class="list-group-item d-flex justify-content-between task-item">');
    var $taskTitle = $('<span class="task-title"></span>').text(taskText);
    var $taskButtons = $('<div class="task-item_buttons">\n' +
        '          <button type="button" class="btn btn-light align-self-end gray" id="task-done" data-action="task-done"><i\n' +
        '                  class="fas fa-check"></i>\n' +
        '          </button>\n' +
        '          <button type="button" class="btn btn-light align-self-end gray" data-action="task-delete"><i\n' +
        '                  class="far fa-trash-alt"></i></button>\n' +
        '        </div>');

    $taskHolder.append($taskTitle).append($taskButtons);
    $('#listOfTasks').append($taskHolder);
    });
    $('#task-done').on('click', function () {
        
    })
});

