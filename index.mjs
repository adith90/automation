import { Octokit, App } from "octokit";
import 'dotenv/config';

const octokit = new Octokit({ auth: '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' });

let response = await octokit.request('POST /repos/adith90/automation/pulls', {
  owner: 'adith90',
  repo: 'automation',
  title: 'My first pull request using the API',
  body: 'This is simply a pull request for demo purposes',
  head: 'new',
  base: 'main'
}); 

console.log(response);
