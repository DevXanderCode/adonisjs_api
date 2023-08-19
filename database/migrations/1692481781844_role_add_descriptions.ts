import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Roles from 'App/Enums/Roles'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('description', 255)
    })

    this.defer(async (db) => {
      await db.from(this.tableName).where('id', Roles.ADMIN).update({
        description: 'Our applicaton super admin',
      })

      await db.from(this.tableName).where('id', Roles.MEMBER).update({
        description: 'Our application default user',
      })
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('description')
    })
  }
}
