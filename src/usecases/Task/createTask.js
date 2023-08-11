const Task = require('../../entities/Task')

function createTask(TaskRepository) {
    return async function (name, status) {
        const task = new Task(null, name, status)
        return TaskRepository.create(task);
    }
}

module.exports = createTask;