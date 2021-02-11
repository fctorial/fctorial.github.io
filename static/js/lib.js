function make_element (str) {
  const p = document.createElement("template")
  p.innerHTML = str
  return p.content.cloneNode(true).children[0]
}
