import 'shared/main.css'

import AppShell from './shell'
import Chat from './chat'
import Media from './media';
//import Puzzle from './puzzle'

/**
 * Every tab must have a `module`.
 * Modules must expose the following:
 * - init() - only called when the app starts. Setup logic, recover from storage, etc.
 * - onEnter(tabContentEl) - called every time the tab is switched to. Start/resume activity etc.
 * - template - ES6 template literal of HTML to render for the tab
 * - onExit() [optional] - called after the tab is switched away from. Pause/clear activity etc.
**/
const TABS = [
  {
    label: 'Chat',
    module: Chat()
  },
  {
    label: 'Media',
    module: Media
  }
]

const shell = new AppShell(document.body, TABS)
shell.start()
