const {where} = require("sequelize");
module.exports = (taskModel) => {
    class TaskRepository {
        async getAll() {
            const tasks = await taskModel.findAll()
            return tasks;
        }
        async create(taskEntity) {
            return await taskModel.create({
                name: taskEntity.name,
                status: taskEntity.status
            });
        }
        async update(id, name, status) {
            return await taskModel.update({
                name: name,
                status: status
            }, {
                where: {
                    id: id
                }
            });
        }
        async delete(id) {
            return await taskModel.destroy({
                where: {
                    id: id
                }
            });
        }
    }

    return new TaskRepository();
}