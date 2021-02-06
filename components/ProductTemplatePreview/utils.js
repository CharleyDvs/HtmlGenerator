const dataTemplate = [
  'brandName',
  'model',
  'capacity',
  'maxPressure',
  'flowRate',
  'airFlow',
  'motor',
  'control',
  'tank',
  'compressorElem',
  'noiseLevel',
  'dryerModel',
  'airOutput',
  'measures',
  'weight',
  'efficiency',
  'energyConsumed',
  'useLevel',
]

const data = {
  brandName: 'Chicago Pneumatic',
  model: 'Modelo',
  capacity: 'Hp',
  voltage: '127V',
  flowRate: '10cfm',
  tank: 'Sin tanque',
  dryer: 'Sin secador',
  description: '',
  niche: '',
}

export const sortData = (dataTemplate, data) => {
  const dataSorted = {}
  dataTemplate.forEach((dataKey) => {
    if (data[dataKey]) {
      dataSorted[dataKey] = data[dataKey]
    }
  })
  return dataSorted
}
