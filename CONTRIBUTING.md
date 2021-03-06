If you would like to contribute to the project then I welcome all support. If you are a developer (or would like to be) the hit me up in discord and I can help get you up and running. Merge requests are welcome and there are plenty of issues logged if you want to sink your teeth into something. 

The project uses webpack to package the SASS files needed for a build and can create a local distribution for your own Foundry server. If you want to give it a go yourself follow these steps:
* Clone the repo into a local folder in your dev environment `git clone https://gitlab.com/hooking/foundry-vtt---pathfinder-2e.git pf2e-dev`
* Install the Javascript dependencies with `npm ci`
* Optionally, configure a `foundryconfig.json` file in the root folder of the project with `dataPath` and `systemName` attributes. An example can be found in `foundryconfig.example.json`, simply copy it and remove the `.example`, and configure it accordingly. The dataPath attribute is your User Data Folder from Foundry and can be found on the Configuration tab on the Setup screen. If you do not configure this file, the build will be built in the dist folder
* Run `npm run build` to perform a one off compile/build
* Run `npm run build:dev` to keep the pf2e system in your Foundry User Data Folder up to date with any coding changes you make in your dev environment.

As a project, we are using a modified gitlab flow, with a development branch (master) for development and a release branch (release) that contains one commit per release. If you want to make improvements to the project, you can ask to be added to the project or make a fork of the project in gitlab. Then push your branch to gitlab and open a merge request for your branch to our development branch. After being reviewed it can be merged into the project by one of the project maintainers.

Note: we have started to integrate Prettier into this project but it is still early days. Please do not submit any merge requests with reformatted / auto-formatted code outside of what you are actively contributing to. Unfortunately there is a lot of technical debt in this project and we will be biting it off in small chunks.