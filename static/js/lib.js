function make_element (str, base = "div") {
  console.log(str)
  const p = document.createElement(base)
  p.innerHTML = str
  console.log(p)
  return p.children[0]
}
