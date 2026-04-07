import { env } from "node:process";
import { Octokit, App } from "octokit";
import { publicIpv4 } from "public-ip"
import { }
type githook_t =
{
  _octokit: Octokit;
  _owner: undefined | string;
  initGithook: (repo: string) => Promise<void>;
  existRepo: (repo: string) => Promise<any>;
  getOwner: () => void;
  createWebHook: (repo: string) => Promise<any>;
};
const githook: githook_t
  = {
  _octokit: new Octokit({ auth: env.AUTH }),
  _owner: undefined,
  initGithook: async function (repo: string) {
    this.getOwner();
    this.existRepo(repo);


  },
  createWebHook: async function (repo: string): Promise<any> {
    const response = await this._octokit.request(
      `POST /repos/${this._owner}/${repo}/hooks`,
      {
        owner: this._owner,
        repo: repo,
        name: repo,
        active: true,
        events: ["push"],
        config: {
          url: `http://${await publicIpv4()}/push`,
          content_type: 'json'

        },
      })
    return response;

  },
  getOwner: function () {
    const own: undefined | string = env.USER;
    if (!own)
      throw new Error("please put USER in .env file (USER=GITHUB_USERNAME\)");
    this._owner = env.GITUSER;
  },
  existRepo: async function (repo: string): Promise<any> {
    const response = await this._octokit.request(
      `GET /repos/${this._owner}/${repo}`,
      {
        owner: this._owner,
        repo: repo
      }
    );
    return response;
  }


}
export default githook; 
