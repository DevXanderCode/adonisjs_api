import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Topic from 'App/Models/Topic'

export default class TopicsController {
  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'slug', 'description'])
    const topic = new Topic()

    await topic.merge(data).save()

    // topic.name = 'Adonisjs'
    // topic.slug = 'adonisjs'
    // topic.description = 'An Awesome Nodejs Framework.'

    // const topic = await Topic.create(data)
    // const topic = await Topic.createMany([data])
    // const topic = await Topic.firstOrCreate(
    //   { name: 'JavaScript', slug: 'javascript' },
    //   {
    //     name: 'JavaScript',
    //     slug: 'javascript',
    //     description: 'A super cool programming language',
    //   }
    // )
    const topic = await Topic.updateOrCreate(
      { name: 'JavaScript', slug: 'javascript' },
      {
        name: 'JavaScript',
        slug: 'javascript',
        description: 'A super cool programming language',
      }
    )

    // await topic.save()
    return topic
  }
}
