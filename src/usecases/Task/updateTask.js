function updateTask(TaskRepository) {
    return async function (id, name, status) {
        return TaskRepository.update(id, name, status);
    }
}

module.exports = updateTask;