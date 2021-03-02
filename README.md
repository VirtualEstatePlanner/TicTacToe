<h1 align="center">
  Tic Tac Toe in a webapp, iOS app, or Android app
</h1>

## Find and replace these values in the entire project

Since you most likely found this repo on GitHub, it assumes you are a GitHub User. If you are using a different version control system for your application then you will need to change some URLs in your `package.json` file.

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

| Command            | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `yarn`             | Install project dependencies                                   |
| `yarn clean`       | Rebuild everything from scratch except your source code        |
| `yarn build`       | Builds code bundle with production settings                    |
| `yarn dev`         | Builds project and open web server, watching for changes       |
| `yarn redev`       | clean, install, build, and dev                                 |
| `yarn serve`       | Run a web server to serve built code bundle from `dist` folder |
| `yarn cap-prepare` | add android and ios support to capacitor                       |
| `yarn cap-a`       | sync Android build and open Android Studio simulator           |
| `yarn cap-i`       | sync iOS build and open XCode iOS simulator                    |
| `yarn build-a`     | build and sync for Android                                     |
| `yarn build-i`     | build and sync for iOS                                         |

## Development

After cloning the repo, run `yarn redev` from your project directory. Then, you can start the local development and navigate to http://localhost:3000.

## Production

After running `yarn build`, the files you need for production will be on the `dist` folder. To test code on your `dist` folder, run `yarn serve` and navigate to http://localhost:5000. To build and publish your Android or iOS applications, you will need to run `yarn cap-prepare` and then either `yarn cap-a`, or `yarn cap-i`.  You can complete the build process from XCode or Android Studio.
