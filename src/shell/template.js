import style from './style.css'

export default `
<div id="main" class="${style.appWrapper}">
  <header class="${style.appHeader}">
    <h1>CompuChat v1.0a</h1>
  </header>
  <nav class="${style.tabNav}">
  </nav>
  <div class="${style.appTabWindow}">
    <!-- render tab contents here -->
  </div>
  <footer class="${style.appFooter}">
    Ready
  </footer>
</div>`