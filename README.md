# ggj-2018

## ISeekU - Global Game Jam 2018 - 'Transmission'

https://globalgamejam.org/2018/games/i-seek-u

https://github.com/njmcode/ggj-2018

## Quick start

- Install Node and npm.
- Clone the repo and run `npm install`.
- Run `npm start`.
- Visit `localhost:8080` to play.

## npm scripts

- `start` - serves via `webpack-dev-server` on port `8080`, watching for changes.
- `build` - outputs a production build to `/dist`.
- `testserve` - runs a build and starts a Node server on port `3000` - useful for ngrok etc.

## Custom game data

It is possible to customize certain aspects of the game via a custom URL.
If the game finds a URL hash beginning with `#custom:` when it first loads, it will
attempt to parse everything after the `:` as a base64-encoded resource URL. It will then
attempt to XHR fetch that URL and decode it as JSON - if successful, it will use the
JSON data in place of the default iamges, payloads and passcodes.

It is also optionally possible to specify custom colors for the majority of the
UI elements in the game.

The JSON file should be in the following format:

```javascript
{
  "meta": {
    "title": "Custom game title",
    "author": "Your name"
  },
  "images": [
    {
      "idx": "0",
      "url": "https://some-url.com/1.jpg",  // absolute URL to a publicly-hosted image
      "payload": "Some payload data", // Can be anything
      "passcode": "45367669" // Any unique code number
    },
    ... // must define at least 5 images
  ],
  "skin": {
    // Key-value pairs for app colors that you wish to override.
    // Defaults will be used for any not specified here.
    // Full list is available in src/shared/skinvars.css
    // Use the variable names without the leading -- e.g.
    "app-title-bg": "red",
    "app-title-text": "yellow",
    "chat-msg-1": "purple",
    "chat-msg-2": "cyan",
    // ...etc.
  }
}
```