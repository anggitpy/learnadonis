import vine from '@vinejs/vine'
import type { HttpContext } from '@adonisjs/core/http'
import Recipe from '#models/recipe'

// One validator used for both creating and updating a recipe.
const recipeValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(1).maxLength(255),
    prepTime: vine.number().min(1).max(1440),
    ingredients: vine.string().trim().minLength(1),
    instructions: vine.string().trim().minLength(1),
  })
)

export default class RecipesController {
  // READ (List): GET /recipes
  async index({ view }: HttpContext) {
    const recipes = await Recipe.query().orderBy('createdAt', 'desc')

    return view.render('recipes/index', { recipes })
  }

  // CREATE (Form): GET /recipes/create
  async create({ view }: HttpContext) {
    return view.render('recipes/create')
  }

  // CREATE (Save): POST /recipes
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(recipeValidator)

    const recipe = await Recipe.create(data)

    return response.redirect(`/recipes/${recipe.id}`)
  }

  // READ (Single): GET /recipes/:id
  async show({ params, view }: HttpContext) {
    const recipe = await Recipe.findOrFail(params.id)

    return view.render('recipes/show', { recipe })
  }

  // UPDATE (Form): GET /recipes/:id/edit
  async edit({ params, view }: HttpContext) {
    const recipe = await Recipe.findOrFail(params.id)

    return view.render('recipes/edit', { recipe })
  }

  // UPDATE (Save): POST /recipes/:id
  async update({ params, request, response }: HttpContext) {
    const recipe = await Recipe.findOrFail(params.id)
    const data = await request.validateUsing(recipeValidator)

    recipe.merge(data)
    await recipe.save()

    return response.redirect(`/recipes/${recipe.id}`)
  }

  // DELETE: POST /recipes/:id/delete
  async destroy({ params, response }: HttpContext) {
    const recipe = await Recipe.findOrFail(params.id)
    await recipe.delete()

    return response.redirect('/recipes')
  }
}
