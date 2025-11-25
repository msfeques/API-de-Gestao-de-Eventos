import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Owner from './owner.js'
import Participant from './participant.js'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime()
  declare dateTime: DateTime

  @column()
  declare location: string

  @column()
  declare maxCapacity: number

  @column()
  declare ownerId: number

  @belongsTo(() => Owner)
  declare owner: BelongsTo<typeof Owner>

  @manyToMany(() => Participant, {
    pivotTable: 'inscriptions',
  })
  declare participants: ManyToMany<typeof Participant>
}
