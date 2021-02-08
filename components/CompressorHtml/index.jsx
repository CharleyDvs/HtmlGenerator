import React, { useState } from 'react'
import CustomFieldset from '../CustomFieldset'
import ListFieldset from '../ListFieldset'
import CustomListGenerator from '../CustomListGenerator'
import ProductTemplatePreview from '../ProductTemplatePreview'

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

function CompressorHtml() {
  const [data, setData] = useState({
    brandName: 'Chicago Pneumatic',
    model: 'Modelo',
    capacity: 'Hp',
    voltage: '127V',
    maxPressure: '150psi',
    flowRate: '10cfm',
    tank: 'Sin tanque',
    dryer: 'Sin secador',
    description: '',
    niche: '',
  })

  const handleInputChange = (e) => {
    e.preventDefault()
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
    console.log(data)
  }

  const removeFieldFromData = (keyToRemove) => {
    const newData = { ...data }
    delete newData[keyToRemove]
    setData(newData)
  }

  const [templateData, setTemplateData] = useState(initialTemplateData)

  const handleTemplateChange = (templateKey, obj) => {
    setTemplateData({
      ...templateData,
      [templateKey]: obj,
    })
  }

  const { tableTemplate } = templateData

  return (
    <section className="product-html-grid">
      <form className="generator-form">
        <CustomFieldset
          legend="Datos básicos"
          templateData={tableTemplate}
          data={data}
          handleInputChange={handleInputChange}
        />
        <ListFieldset
          title="código alterno"
          templateData={templateData}
          templateKey="alternativeCodeList"
          newName="alternativeCode"
          handleInputChange={handleInputChange}
          handleTemplateChange={handleTemplateChange}
          removeFieldFromData={removeFieldFromData}
        />
        <ListFieldset
          title="código interno"
          templateData={templateData}
          templateKey="innerCodeList"
          newName="innerCode"
          handleInputChange={handleInputChange}
          handleTemplateChange={handleTemplateChange}
          removeFieldFromData={removeFieldFromData}
        />
        <fieldset>
          <legend>Datos adicionales</legend>
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            onChange={(e) => {
              handleInputChange(e)
            }}
            cols="30"
            rows="10"
          ></textarea>
          <label htmlFor="niche">Segmento Objetivo</label>
          <input
            onChange={(e) => {
              handleInputChange(e)
            }}
            placeholder={templateData.niche}
            name="niche"
            type="text"
          />
        </fieldset>
        <CustomListGenerator
          title="características"
          templateData={templateData}
          templateKey="features"
          newName="feature"
          handleInputChange={handleInputChange}
          handleTemplateChange={handleTemplateChange}
          removeFieldFromData={removeFieldFromData}
        />
        <ListFieldset
          title="documentación"
          templateData={templateData}
          templateKey="documentationList"
          newName="documentation"
          handleInputChange={handleInputChange}
          handleTemplateChange={handleTemplateChange}
          removeFieldFromData={removeFieldFromData}
        />
        <ListFieldset
          title="video"
          templateData={templateData}
          templateKey="videoList"
          newName="video"
          handleInputChange={handleInputChange}
          handleTemplateChange={handleTemplateChange}
          removeFieldFromData={removeFieldFromData}
        />
        <ListFieldset
          title="imagen"
          templateData={templateData}
          templateKey="imageList"
          newName="image"
          handleInputChange={handleInputChange}
          handleTemplateChange={handleTemplateChange}
          removeFieldFromData={removeFieldFromData}
        />
      </form>
      <ProductTemplatePreview data={data} />
    </section>
  )
}

export default CompressorHtml
