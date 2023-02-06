import { Octokit } from '@octokit/core';
import * as dotenv from 'dotenv';

dotenv.config();

async function createGist(gist: Gist) {
    const octokit = new Octokit({
        auth: process.env,
    });

    const res = await octokit.request('POST /gists', gist);
    console.log(res);
};

type Gist = {
    description?: string;
    files: {
        [filename: string]: {
            content: string;
        };
    };
    public?: boolean | "true" | "false";
};

const myGist: Gist = {
    description: 'main.txt',
    public: false,
    files: { // we can extend this to read files and content from a folder upload
        'README.md': {
            content: 'Some text :)'
        }
    },
};

createGist(myGist);