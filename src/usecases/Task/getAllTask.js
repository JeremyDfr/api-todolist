async function getAllTask(TaskRepository) {
    return TaskRepository.getAll();
}

module.exports = getAllTask;