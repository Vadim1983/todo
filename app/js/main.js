$(document).ready(function () {

    $('#form-new-task').on('submit', function (e) {
        e.preventDefault();

    var taskText = $('#addNewTask').val();
    var $taskHolder = $('<li class="list-group-item d-flex justify-content-between task-item">');
    var $taskTitle = $('<span class="task-title"></span>').text(taskText);
    var $taskButtons = $('<div class="task-item_buttons">\n' +
        '          <button type="button" class="btn btn-light align-self-end gray" data-action="task-done"><i\n' +
        '                  class="fas fa-check"></i>\n' +
        '          </button>\n' +
        '          <button type="button" class="btn btn-light align-self-end gray" data-action="task-delete"><i\n' +
        '                  class="far fa-trash-alt"></i></button>\n' +
        '        </div>');

    $taskHolder.append($taskTitle).append($taskButtons);
    $('#listOfTasks').append($taskHolder);
    });

    $('#listOfTasks').on('click', '[data-action="task-delete"]', function (e) {
        e.preventDefault();
        $(this).parents('.task-item').remove();
    });

    $('#listOfTasks').on('click', '[data-action="task-done"]', function (e) {
        e.preventDefault();
        $(this).parents('.task-item').find('.task-title').toggleClass('task-title--done');
    });

});

