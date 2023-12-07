 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GithubService from '../../Services/GithubService'

export default class GithubsController {
public async index({response, request}: HttpContextContract){

  const repos = await GithubService.getPrivateRepos()
    return response.send({repos})
}
}

