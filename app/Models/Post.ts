import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { AttachmentContract, attachment } from '@ioc:Adonis/Addons/AttachmentLite'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public stateId: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public description: string | null

  @column()
  public body: string | null

  @attachment()
  public thumbnail: AttachmentContract | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
