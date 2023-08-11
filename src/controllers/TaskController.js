const createTask = require('../usecases/Task/createTask')
const getAllTask = require('../usecases/Task/getAllTask')
const updateTask = require('../usecases/Task/updateTask')
const deleteTask = require('../usecases/Task/deleteTask')

module.exports = (repository) => {
    return {
        async getAll(request, reply) {
            const tasks = await getAllTask(repository);
            reply.code(200).send(tasks);
        },
        async create(request, reply) {
            const { name, status } = request.body;
            const task = await createTask(repository)(name, status);
            reply.code(201).send(task);
        },
        async update(request, reply) {
            const { id } = request.params;
            const { name, status } = request.body;
            const task = await updateTask(repository)(id, name, status);
            reply.code(200).send(task);
        },
        async delete(request, reply) {
            const { id } = request.params;
            const task = await deleteTask(repository)(id);
            reply.code(200).send(task);
        }
    }
}