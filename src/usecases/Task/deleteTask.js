function deleteTask(TaskRepository) {
    return async function (id) {
        return TaskRepository.delete(id);
    }
}

module.exports = deleteTask;