import React from 'react'
import { sortData } from './utils'
import ProductTablePreview from '../ProductTablePreview'

const initialTemplateData = {
  tableTemplate: {
    brandName: {
      name: 'brandName',
      label: 'marca',
    },
    model: {
      name: 'model',
      label: 'modelo',
    },
    capacity: {
      name: 'capacity',
      label: 'potencia',
    },
    maxPressure: {
      name: 'maxPressure',
      label: 'presión máxima',
    },
    voltage: {
      name: 'voltage',
      label: 'voltaje de operación',
    },
    flowRate: {
      name: 'flowRate',
      label: 'capacidad de flujo',
    },
    airFlow: {
      name: 'airFlow',
      label: 'volumen de generación de aire',
    },
    motor: {
      name: 'motor',
      label: 'tipo de motor',
    },
    control: {
      name: 'control',
      label: 'tipo de control',
    },
    tank: {
      name: 'tank',
      label: 'posición del tanque',
    },
    compressorElem: {
      name: 'compressorElem',
      label: 'tipo de elemento compresor',
    },
    noiseLevel: {
      name: 'noiseLevel',
      label: 'nivel de ruido',
    },
    dryer: {
      name: 'dryer',
      label: 'modelo del secador',
    },
    airOutput: {
      name: 'airOutput',
      label: 'diámetro de salida de aire',
    },
    measures: {
      name: 'measures',
      label: 'dimensiones',
    },
    weight: {
      name: 'weight',
      label: 'peso estimado',
    },
    efficiency: {
      name: 'efficiency',
      label: 'eficiencia nominal del motor',
    },
    energyConsumed: {
      name: 'energyConsumed',
      label: 'consumo energético',
    },
    useLevel: {
      name: 'useLevel',
      label: 'nivel de uso',
    },
  },
  description: '',
  features: [],
  niche: '',
  alternativeCodeList: [
    {
      name: 'alternativeCode0',
      label: 'código alterno 1',
    },
  ],
  innerCodeList: [
    {
      name: 'innerCode0',
      label: 'código interno 1',
    },
  ],
  additionalData: {},
  documentationList: [
    {
      name: 'documentation0',
      label: 'documentación 1',
    },
  ],
  videoList: [
    {
      name: 'video0',
      label: 'video 1',
    },
  ],
  imageList: [
    {
      name: 'image0',
      label: 'imagen 1',
    },
  ],
}

function ProductTemplatePreview({ data }) {
  const { tableTemplate } = initialTemplateData
  const tableDataSorted = sortData(Object.keys(tableTemplate), data)
  return (
    <section className="product-template-preview">
      <ProductTablePreview
        tableData={tableDataSorted}
        tableTemplateData={tableTemplate}
      />
    </section>
  )
}

export default ProductTemplatePreview
