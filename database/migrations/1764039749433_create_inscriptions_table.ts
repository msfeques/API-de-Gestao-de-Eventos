import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inscriptions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('participant_id')
        .unsigned()
        .references('id')
        .inTable('participants')
        .onDelete('CASCADE')
      table.integer('event_id').unsigned().references('id').inTable('events').onDelete('CASCADE')
      table.unique(['participant_id', 'event_id'])
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
