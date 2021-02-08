export const sortData = (dataTemplate, data) => {
  const dataSorted = {}
  dataTemplate.forEach((dataKey) => {
    if (data[dataKey]) {
      dataSorted[dataKey] = data[dataKey]
    }
  })
  return dataSorted
}
