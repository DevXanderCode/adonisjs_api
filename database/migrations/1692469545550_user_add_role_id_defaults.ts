import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Roles from 'App/Enums/Roles'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('role_id').alter().defaultTo(Roles.MEMBER)
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('role_id').alter().defaultTo(null)
    })
  }
}
