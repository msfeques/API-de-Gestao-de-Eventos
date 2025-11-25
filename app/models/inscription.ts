import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Inscription extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare participantId: number

  @column()
  declare eventId: number
}
