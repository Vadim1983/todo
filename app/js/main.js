$(document).ready(function () {

    // New task //
    $('#form-new-task').on('submit', function (e) {
        e.preventDefault();

        var taskText = $('#addNewTask').val();
        var $taskHolder = $('<li class="list-group-item d-flex justify-content-between task-item">');
        var $taskTitle = $('<span class="task-title"></span>').text(taskText);
        var $taskButtons = $('<div class="task-item_buttons"><button type="button" class="btn btn-light align-self-end gray" data-action="task-done"><i class="fas fa-check"></i></button><button type="button" class="btn btn-light align-self-end gray" data-action="task-delete"><i class="far fa-trash-alt"></i></button></div>');

        $taskHolder.append($taskTitle).append($taskButtons);
        $('#listOfTasks').append($taskHolder);
        $('#addNewTask').val('');
        showNotify('new');
        toggleEmptyList();
    });

      // Delete task //
    $('#listOfTasks').on('click', '[data-action="task-delete"]', function (e) {
        e.preventDefault();
        $(this).parents('.task-item').remove();
        showNotify('delete');
        toggleEmptyList();
    });

       // Done task //
    $('#listOfTasks').on('click', '[data-action="task-done"]', function (e) {
        e.preventDefault();
        $(this).parents('.task-item').find('.task-title').toggleClass('task-title--done');
        showNotify('done');
    });

      // Show Notification //
    function showNotify(type) {

        var $notifyDone = $('<div class="alert alert-success" role="alert"> Задача выполнена </div>');
        var $notifyDelete = $('<div class="alert alert-danger" role="alert"> Задача удалена </div>');
        var $notifyNew = $('<div class="alert alert-warning" role="alert"> Задача добавлена </div>');
        var $notifyError = $('<div class="alert alert-danger" role="alert"> Ошибка! </div>');

        switch (type) {
            case 'new':
                $notifyBlock = $notifyNew;
                break;

            case 'done':
                $notifyBlock = $notifyDone;
                break;

            case 'delete':
                $notifyBlock = $notifyDelete;
                break;
            default:
                $notifyBlock = $notifyError;
                break;
        }

        $('#notifyHolder .alert').fadeOut();
        $notifyBlock.hide();
        $('#notifyHolder').append($notifyBlock);
        $notifyBlock.fadeIn();
        setTimeout(function () {
            $notifyBlock.fadeOut();
            setTimeout(function () {
                $notifyBlock.remove()
            }, 1500);
        }, 1500);
    }

       // toggle empty list block //
    function toggleEmptyList(){

        if( $('#listOfTasks').children().length > 1) {
            console.log('SOME TASK');
            $('#emptyList').hide();

        } else {
            console.log('NO TASK');
            $('#emptyList').show();
        }
    }

});

