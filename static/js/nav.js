
const ne = document.createElement("nav")
const header = document.querySelector('header');

fetch("/collections/nav.json")
  .then(res => res.json())
  .then(res => Object.keys(res).forEach(k => {
    const item = document.createElement('a')
    item.setAttribute('href', res[k])
    item.innerText = k
    ne.appendChild(item)
  }))
  .then(() => header.parentElement.insertBefore(ne, header))
