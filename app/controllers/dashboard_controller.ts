import type { HttpContext } from '@adonisjs/core/http'
import Task from '#models/task'

export default class DashboardController {
  async index({ view }: HttpContext) {
    const tasks = await Task.query().orderBy('createdAt', 'desc')

    const total = tasks.length
    const completed = tasks.filter((t) => t.isCompleted).length
    const pending = total - completed
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0

    return view.render('dashboard/index', {
      stats: {
        total,
        completed,
        pending,
        completionRate,
      },
      recentTasks: tasks.slice(0, 5),
    })
  }
}
