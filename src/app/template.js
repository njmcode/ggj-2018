import style from './style.css'

export default `
<div id="main" class="${style.appWrapper}">
  <header class="${style.appHeader}">
    <h1>ISeekU v1.0.3a</h1>
    <button class="${style.closeBut}">X</button>
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