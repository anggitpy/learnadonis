import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

// A Lucid model maps this class to the tasks table created by the migration.
// The naming strategy maps camelCase properties to snake_case database columns.
export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare isCompleted: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
