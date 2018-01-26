import { dom } from 'shared/utils'
import template from './template'
import styles from './style.css'

class AppShell {
  constructor(appEl, tabs = []) {
    this.appEl = appEl
    this.tabs = tabs
    this.currentTabIdx = null
  }

  start() {
    // Render shell
    this.el = dom(template)
    this.appEl.innerHTML = ''
    this.appEl.appendChild(this.el)

    // Setup nav tabs
    this.navEl = this.el.querySelector(`.${styles.tabNav}`)

    this.tabs.forEach((tab, idx) => {
      const tabEl = document.createElement('button')
      tabEl.textContent = tab.label
      tabEl.dataset.tabidx = idx
      tabEl.addEventListener('click', e => {
        const t = e.srcElement
        this.goToTabIdx(t.dataset.tabidx)
      })
      this.navEl.appendChild(tabEl)
    })

    // Setup content area
    this.contentEl = this.el.querySelector(`.${styles.appTabWindow}`)

    // Init all tab modules
    this.tabs.forEach(tab => tab.module.init())

    // Render initial tab
    this.goToTabIdx(0)
  }

  goToTabIdx(idx) {
    if (idx < 0 || idx > this.tabs.length -1) return false

    if (this.currentTabIdx !== null) {
      this.tabs[this.currentTabIdx].module.onExit()
    }

    const newTabContentEl = dom(this.tabs[idx].module.template)

    this.contentEl.innerHTML = ''
    this.contentEl.appendChild(newTabContentEl)

    this.currentTabIdx = idx
    this.tabs[this.currentTabIdx].module.onEnter(newTabContentEl)
  }

  setActiveTabButton(idx) {
    // TODO
  }
}

export default AppShell