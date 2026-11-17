import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

export default defineConfig({
  connection: 'sqlite',
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      // Keep the database in the app's local tmp folder; no external service is needed.
      connection: {
        filename: app.tmpPath('db.sqlite3'),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
      schemaGeneration: {
        enabled: false,
      },
      debug: app.inDev,
    },
  },
})
