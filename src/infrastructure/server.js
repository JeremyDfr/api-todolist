const db = require('./models/index');

const fastify = require('fastify')({
    logger: true
})

// TODO: Check if this is the right way to do it
const taskRepository = require('./repositories/TaskRepository')(db.Task);
const TaskController = require('../controllers/TaskController')(taskRepository);

fastify.get('/task', TaskController.getAll);
fastify.post('/task', TaskController.create);
fastify.put('/task/:id', TaskController.update);
fastify.delete('/task/:id', TaskController.delete);

fastify.listen(3000, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})