import { env } from "node:process";
import { Octokit, App } from "octokit";
import { publicIpv4 } from "public-ip"
import { Endpoints } from "@octokit/types"
type githook_t =
  {
    _octokit: Octokit;
    _owner: undefined | string;
    _alreadyExist: () => boolean;
    _repo: string | null;
    initGithook: () => Promise<void>;
    existRepo: () => Promise<any>;
    getOwner: () => void;
    createWebHook: () => Promise<any>;
  };
const githook: githook_t
  = {
  _octokit: new Octokit({ auth: env.AUTH }),
  _owner: undefined,
  _repo: null,

  initGithook: async function (repo: string) {
    this.getOwner();
    this.existRepo(repo);
    this._repo = repo;
  },
  createWebHook: async function (): Promise<any> {
    const response = await this._octokit.request(
      `POST /repos/${this._owner}/${repo}/hooks`,
      {
        owner: this._owner,
        repo: this._repo,
        name: this._repo,
        active: true,
        events: ["push"],
        config: {
          url: `http://${await publicIpv4()}:80/push`,
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
  existRepo: async function (): Promise<any> {
    const response = await this._octokit.request(
      `GET /repos/${this._owner}/${this._repo}`,
      {
        owner: this._owner,
        repo: this._repo
      }
    );
    return response;
  }


}
export default githook; 
