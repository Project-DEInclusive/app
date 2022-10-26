# Project deinclusive.org
## How to setup development enviornment
1. Install Node
2. Install Visual Studio Code (VSCode) 
3. Install git and sign in with your account. 

## :warning: Read the [contributing guide](/docs/CONTRIBUTING.md) before start contributing to the project.

## Setup Project 
1. Request collabaration access for `repository`
2. Fork the main repository from the organization to your account
3. `git clone https://github.com/[REPLACE_WITH_YOUR_USERNAME]/deinclusive.org.git`
4. Open the repository folder using VSCode editor
5. Open the terminal/cmd SHORTCUT:  `CTRL+J`
6. Run `npm install` or `npm i`
7. Install visual studio code extensions - Tailwind CSS IntelliSense (by Tailwind Labs)
8. Restart the Visual Studio Code

## Basic Rules
1. First-Time load network traffic for any page must be below 60kB. `!important`
2. Always use Tailwind classes and @apply attributes for styling.
3. Never import more than 10 lines of CSS copied from other sites/themes.
4. Never use icon packs/external fonts. Use inline SVGs and CSS embeded SVGs instead.
5. Refractor into components when possible.
6. Lighthouse score of every page must be higher than 95.

Breaking these rules could lead into git commit reverts or bans.

## How to contribute

Read the [contributing guide](/docs/CONTRIBUTING.md)

## Static assets

- All the raster images must be formated in `.webp` format and lossly compressed to balance size and quality

- Animated GIFs should not be used. Use `.webm` or JS/CSS animations instead.

- All the audio files should be formated in `.mp3` format
- All the icons must be vector graphics in `svg` format. They should be URL encoded and embeded in CSS
- Bigger static assets like images and audio should be stored in ./public/static directory.
    - When programmatically accessing content in `./public/static` directory, use the file path relative to the `./public/static` directory. For example, to display `./public/static/images/cat.webp`, you should use `<img src="/static/images/cat.webp" />`. Note that the path starts with "/"


## API v2
- Vercel 