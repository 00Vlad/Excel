const CODES = {
  A: 65,
  Z: 90
}

function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function toColumn(col) {
  return `
    <div class="column">
      ${col}
      <div class="col-resize"></div>
      </div>
  `
}

function createRow(content, index = '') {
  const resizer = index ? '<div class="row-resize"></div>' : ''

  return `
    <div class="row">
      <div class="row-info">
        ${index}
        ${resizer}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
  //.map((el) => { return createCol(el) })
  // ----- То же самое что и -----
  //.map(createCol)

  // top row (with letters)
  rows.push(createRow(cols))

  // left rows (with nums)
  for (let i = 1; i <= rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')

    rows.push(createRow(cells, i))
  }

  return rows.join('')
}
