<h1 align="center">
  <br>
  <img src="./public/assets/tropic.png" alt="header" width="300"/></a>
  <br>
  Typescript ROllup Phaser in Capacitor
  <br>
</h1>

## Find and replace these values in the entire project

Since you most likely found this template on GitHub, it assumes you are a GitHub User. If you are using a different version control system for your application then you will need to change some URLs in your `package.json` file.

To start your project, you should find and replace the following symbols project-wide in VS Code by hitting `crtl-shift-f` _(or `command-shift-f` on macOS)_:

1. `YOUR_GITHUB_USER` => your github username
2. `YOUR_GITHUB_REPO` => your application's github repository name
3. `your-package-name` => your application's npm package name
4. `YOUR_APP_SHORT_NAME` => your application's shortened name
5. `YOUR_PRODUCT_NAME` => your application's human-readable product name
6. `YOUR_APPLICATION_DESCRIPTON` => your application's human-readable short description
7. `YOUR_NAME` => your human name
8. `YOUR_EMAIL_ADDRESS` => your email address

## Requirements

### any platform

- VS Code [download](https://code.visualstudio.com/Download)
- yarn (run `npm i yarn -g`)

### for iOS development

- XCode [macOS App Store](https://apps.apple.com/us/app/xcode/id497799835?ls=1&mt=12)
- cocoapods (run `sudo gem install cocoapods`)
- an iOS developer account, if you want to publish to the App Store

### for Android development

- Android Studio [download](https://developer.android.com/studio/)
- a developer account, if you want to publish to the App Store

This is a [Phaser 3](https://github.com/photonstorm/phaser) starter with [TypeScript](https://www.typescriptlang.org/), [Rollup](https://rollupjs.org) with ⚡️ lightning fast HMR through [Vite](https://vitejs.dev/).

## Available Commands

| Command      | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| `yarn`       | Install project dependencies                                   |
| `yarn clean` | Rebuild everything from scratch except your source code        |
| `yarn dev`   | Builds project and open web server, watching for changes       |
| `yarn build` | Builds code bundle with production settings                    |
| `yarn serve` | Run a web server to serve built code bundle from `dist` folder |

There's a few other scripts in package.json if you aren't trying to build for every platform.

## Development

After cloning the repo, run `yarn clean` from your project directory. Then, you can start the local development
server by running `yarn dev` and navigate to http://localhost:3000.

## Production

After running `yarn build`, the files you need for production will be on the `dist` folder. To test code on your `dist` folder, run `yarn serve` and navigate to http://localhost:5000. To build and publish your Android or iOS applications, you will need to complete the build process from XCode or Android Studio.
