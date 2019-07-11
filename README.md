# Mono repo with NextJS Proof of Concept

This is currently a work in progress to establish a good approach to potentially separating the codebase of `corporate-react` so that components are then available for import into other projects.  

The original premise was to investigate using Lerna, hence the name of the repo, but a decision was taken to first investigate using Yarn workspaces. 

## Mono repo setup via Yarn Workspaces

Workspaces are defined as a string array of folder names in the root `package.json`. For workspaces to work the repo must be set to private.

```
// package.json
  ...
  "private": true,
  "workspaces": [
    "components",
    "site"
  ],
  ...
```

Each workspace must have a package.json of its own. 

`components` folder has been published as a public npm package for consumption.

https://www.npmjs.com/package/@npoc/components

## Installation

In root folder run 

```yarn```


To run NextJS go to `/site` and run

```yarn dev```


## Further reading on mono repos

* https://yarnpkg.com/lang/en/docs/workspaces/
* https://medium.com/@maoberlehner/monorepos-in-the-wild-33c6eb246cb9
* https://codeburst.io/monorepos-by-example-part-1-3a883b49047e
* https://hackernoon.com/4-ways-to-go-monorepo-in-2019-ea5d19fc1f08
