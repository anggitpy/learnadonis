import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Task from '#models/task'

export default class TaskSeeder extends BaseSeeder {
  async run() {
    // Keep repeated seed runs safe without overwriting tasks added by the user.
    if (await Task.query().first()) {
      return
    }

    await Task.createMany([
      { title: 'Read the routes file' },
      { title: 'Follow a request into the controller' },
      { title: 'Render tasks with an Edge view' },
    ])
  }
}
