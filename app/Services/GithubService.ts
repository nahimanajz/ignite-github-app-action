"use strict";

import Env from "@ioc:Adonis/Core/Env";
import { Octokit } from "@octokit/core";
import axios from "axios";

export default class GithubService {
  public static async getRepositories() {
    const { data } = await axios.get(Env.get("REPOSITORIES_URL"));
    return data;
  }

  public static async getPrivateRepos() {
    const options = {
      username: Env.get("GITHUB_USERNAME"),
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    };
    const octokit = new Octokit({
      auth: `Bearer ${Env.get("GITHUB_APP_TOKEN")}`,
      options,
    });

    const {data} = await octokit.request(`GET /user/repos`);
    return data.filter((repo)=> repo.private && repo);
  }
}
