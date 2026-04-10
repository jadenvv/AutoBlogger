import { env } from "node:process";
import { Octokit, App } from "octokit";
import { publicIpv4 } from "public-ip"
import { RequestError } from "@octokit/request-error"
import type { Endpoints, OctokitResponse } from "@octokit/types"
type responseGitHooks = Endpoints["POST /repos/{owner}/{repo}/hooks"]["response"]
type githook_t =
  {
    _octokit: Octokit;
    _owner: undefined | string;
    _alreadyExist: () => boolean;
    _repo: string | null;
    initGithook: (repo: string) => Promise<void>;
    existRepo: () => Promise<any>;
    getOwner: () => void;
    createWebHook: () => Promise<OctokitResponse<responseGitHooks> | null>;
  };
const githook: githook_t
  = {
  _octokit: new Octokit({ auth: "" }),
  _owner: undefined,
  _repo: null,
  _alreadyExist: function () {
    /*    const response = await this._octokit.request(
          "GET ",
          {}
        );
      */
    return false;
  },


  initGithook: async function (repo: string) {
    this._repo = repo;
    this.getOwner();
    await this.existRepo();

  },
  createWebHook: async function (): Promise<OctokitResponse<responseGitHooks> | null> {
    let response: OctokitResponse<responseGitHooks> | null = null;
    try {
      response = await this._octokit.request(
        `POST /repos/${this._owner}/${this._repo}/hooks`,
        {
          owner: this._owner,
          repo: this._repo,
          name: "web",
          active: true,
          events: ["push"],
          config: {
            url: `https://nonfimbriated-unpolitical-elma.ngrok-free.dev/push`,
            content_type: 'json',

          },
          headers: {
            'X-GitHub-Api-Version': '2026-03-10'
          }

        })
    }
    catch (err) {
      if (err instanceof RequestError) {
        if (err.status === 422) {
          console.log("hook already made procceeding")
        }
      }
    }
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
