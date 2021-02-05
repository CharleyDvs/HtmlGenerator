const obj = {
  table: [],
  abs: [],
}

if ('table' in obj) {
  console.log('working')
}

'table' in obj && console.log('works')
