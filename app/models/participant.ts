import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Event from './event.js'

export default class Participant extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare cpf: string

  @manyToMany(() => Event, {
    pivotTable: 'inscriptions',
  })
  declare events: ManyToMany<typeof Event>
}
