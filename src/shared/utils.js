
export function dom (tplStr) {
  const wrap = document.createElement('template')
  wrap.innerHTML = tplStr
  return wrap.content.firstElementChild
}
