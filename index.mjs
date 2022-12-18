import { Octokit, App } from "octokit";
import 'dotenv/config';

const octokit = new Octokit({ auth: process.env.GITHUB_AUTH });

let response = await octokit.request('POST /repos/adith90/automation/pulls', {
  owner: 'adith90',
  repo: 'automation',
  title: 'My first pull request using the API',
  body: 'This is simply a pull request for demo purposes',
  head: 'new',
  base: 'main'
}); 

console.log(response);
