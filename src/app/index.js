import { dom } from 'shared/utils'
import template from './template'
import styles from './style.css'

import Emitter from 'core/Emitter'
import GameState from './GameState'
import ChatTab from 'modules/chat/ChatTab'
import MediaTab from 'modules/media/MediaTab'

import { CHAT_A, CHAT_B } from 'data/gamescript'
import { EVT_TAB_NOTIFY } from 'data/events'

/**
 * Main app UI class.
 *
 * - Composes the tab modules, event emitter and game
 * state
 * - Determines the available tabs and their default state
 * - Handles tab switching and visibility/rendering
 * - Initialises the tab modules
 * - Shares an Emitter instance between itself, game state and tab modules
 */

class App {
  constructor() {
    this.initialTabId = 'ChatA'

    this.appEl = document.body
    this.tabData = [
      {
        id: 'ChatA',
        label: '???',
        visible: true,
        module: new ChatTab(CHAT_A)
      },
      {
        id: 'ChatB',
        label: '???',
        visible: true,
        module: new ChatTab(CHAT_B)
      },
      {
        id: 'Media',
        label: 'Media',
        visible: true,
        module: new MediaTab()
      }
    ]
    this.tabDataIds = this.tabData.map(td => td.id)

    this.emitter = new Emitter()
    this.gamestate = new GameState(this.emitter)
  }

  start() {
    // Render app shell
    this.el = dom(template)
    this.appEl.innerHTML = ''
    this.appEl.appendChild(this.el)

    // DOM areas for nav and content
    this.navEl = this.el.querySelector(`.${styles.tabNav}`)
    this.contentEl = this.el.querySelector(`.${styles.appTabWindow}`)

    // Handle tab modules
    this.tabData.forEach((tdata, idx) => {

      // Create nav item
      const tabNavEl = document.createElement('button')
      tabNavEl.textContent = tdata.id
      tabNavEl.dataset.tabId = tdata.id
      if (tdata.visible) tabNavEl.classList.add(styles.visibleTab)

      tabNavEl.addEventListener('click', e => {
        const t = e.srcElement
        this.setActiveTab(t.dataset.tabId)
      })

      this.navEl.appendChild(tabNavEl)
      tdata._navEl = tabNavEl

      // Init module
      if (!tdata.module) return false

      // Render tab template into container
      const tabWrapEl = document.createElement('div')
      tabWrapEl.classList.add(styles.appTabWrapper)
      const tabContentEl = dom(tdata.module.template)
      tabWrapEl.appendChild(tabContentEl)
      this.contentEl.appendChild(tabWrapEl)

      tdata._wrapEl = tabWrapEl
      tdata._contentEl = tabContentEl

      tdata.module.init(tdata.id, tabContentEl, this.emitter)
    })

    // Show notification on tabs if not the current one
    this.emitter.bind(EVT_TAB_NOTIFY, (tabId) => {
      if (tabId !== this.activeTab) {
        this.setTabNotification(tabId)
      }
    }, this)

    // Render initial tab
    this.setActiveTab(this.initialTabId)
    this.gamestate.init()
  }

  setActiveTab(tabId) {
    const tidx = this.tabDataIds.indexOf(tabId)
    if (tidx === -1 || !this.tabData[tidx].visible) return false

    this.tabData.forEach(tab => {
      const fn = (tab.id === tabId) ? 'add' : 'remove'
      tab._navEl.classList[fn](styles.activeTab)
      tab._wrapEl.classList[fn](styles.activeContent)
      if (tab.id === tabId) tab._navEl.classList.remove(styles.tabNotify)
    })

    this.activeTab = tabId

    return true
  }

  setTabVisibility(idx, isVisible = true) {
    const tidx = this.tabDataIds.indexOf(tabId)
    if (tidx === -1 || !this.tabData[tidx].visible) return false

    const fn = (isVisible) ? 'add' : 'remove'
    tab._navEl.classList[fn](styles.visibleTab)
    tab._wrapEl.classList[fn](styles.visibleContent)
  }

  setTabNotification(tabId) {
    if (tabId === this.activeTab) return false
    const tidx = this.tabDataIds.indexOf(tabId)
    if (tidx === -1) return false
    this.tabData[tidx]._navEl.classList.add(styles.tabNotify)

  }
}

export default App