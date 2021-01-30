import { storage } from '@core/utils'

function toHTML(key) {
  const model = storage(key)
  const id = key.split(':')[1]

  return `
    <a href="#excel/${id}">
      <li class="db__record">
        <span>${model.title}</span>
        <strong>
          ${new Date(model.openDate).toLocaleDateString()}
          ${new Date(model.openDate).toLocaleTimeString()}
        </strong>
      </li>
    </a>
  `
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.includes('excel')) continue
    keys.push(key)
  }

  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()

  if (!keys.length) return `<p>There are no tables</p>`

  return `
    <div class="db__list-header">
      <span>Name</span>
      <span>Open date</span>
    </div>

    <ul class="db__list">
     ${keys.map(toHTML).join('')}
    </ul>
  `
}
