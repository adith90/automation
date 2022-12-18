import { Octokit, App } from "octokit";

let octokit = new Octokit();
let repos = await octokit.request("GET /users/schacon/repos");

console.log(repos);
