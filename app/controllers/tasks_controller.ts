import vine from '@vinejs/vine'
import type { HttpContext } from '@adonisjs/core/http'
import Task from '#models/task'

// Validate untrusted form data before it reaches Lucid or the database.
const createTaskValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(1).maxLength(255),
  })
)

export default class TasksController {
  // The controller asks Lucid for tasks, then passes them to the Edge template.
  async index({ view }: HttpContext) {
    const tasks = await Task.query().orderBy('createdAt', 'desc')

    return view.render('tasks/index', { tasks })
  }

  // A normal HTML form posts a title here; after saving, redirect to the list.
  async store({ request, response }: HttpContext) {
    const { title } = await request.validateUsing(createTaskValidator)

    await Task.create({ title })

    return response.redirect().back()
  }

  // The URL id selects one Lucid model; saving its flipped value persists it.
  async toggle({ params, response }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    task.isCompleted = !task.isCompleted
    await task.save()

    return response.redirect().back()
  }

  // Delete the selected model, then return to the same server-rendered list.
  async destroy({ params, response }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    await task.delete()

    return response.redirect().back()
  }
}
