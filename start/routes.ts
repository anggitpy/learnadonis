import router from '@adonisjs/core/services/router'

// Routes are the entry points for HTTP requests: they either redirect or hand
// the request to a controller, which loads/changes model data and renders Edge.
router.get('/', ({ response }) => response.redirect('/dashboard'))

router
  .get('/dashboard', [() => import('#controllers/dashboard_controller'), 'index'])
  .as('dashboard.index')

router.get('/tasks', [() => import('#controllers/tasks_controller'), 'index']).as('tasks.index')
router.post('/tasks', [() => import('#controllers/tasks_controller'), 'store']).as('tasks.store')
router
  .post('/tasks/:id/toggle', [() => import('#controllers/tasks_controller'), 'toggle'])
  .as('tasks.toggle')
router
  .post('/tasks/:id/delete', [() => import('#controllers/tasks_controller'), 'destroy'])
  .as('tasks.destroy')

// Recipe CRUD routes
router.get('/recipes', [() => import('#controllers/recipes_controller'), 'index']).as('recipes.index')
router
  .get('/recipes/create', [() => import('#controllers/recipes_controller'), 'create'])
  .as('recipes.create')
router.post('/recipes', [() => import('#controllers/recipes_controller'), 'store']).as('recipes.store')
router.get('/recipes/:id', [() => import('#controllers/recipes_controller'), 'show']).as('recipes.show')
router
  .get('/recipes/:id/edit', [() => import('#controllers/recipes_controller'), 'edit'])
  .as('recipes.edit')
router
  .post('/recipes/:id', [() => import('#controllers/recipes_controller'), 'update'])
  .as('recipes.update')
router
  .post('/recipes/:id/delete', [() => import('#controllers/recipes_controller'), 'destroy'])
  .as('recipes.destroy')
