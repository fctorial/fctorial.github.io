function make_element (str, base = "div") {
  const p = document.createElement(base)
  p.innerHTML = str
  return p.children[0]
}
