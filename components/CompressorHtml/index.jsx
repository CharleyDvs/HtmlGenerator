import React, { useState } from 'react'
import CustomFieldset from '../CustomFieldset'
import ListFieldset from '../ListFieldset'
import CustomListGenerator from '../CustomListGenerator'

const initialTemplateData = {
  defaultInputs: {
    name: {
      name: 'brandName',
      label: 'Marca',
    },
    model: {
      name: 'model',
      label: 'Modelo',
    },
    capacity: {
      name: 'capacity',
      label: 'Potencia',
    },
    voltage: {
      name: 'voltage',
      label: 'Voltaje de operación',
    },
    flowRate: {
      name: 'flowRate',
      label: 'Capacidad de flujo',
    },
  },
  description: '',
  features: '',
  tank: 'Sin tanque',
  dryer: 'Sin secador',
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

  const [templateData, setTemplateData] = useState(initialTemplateData)

  const handleTemplateChange = (templateKey, obj) => {
    setTemplateData({
      ...templateData,
      [templateKey]: obj,
    })
    console.log(templateData)
  }

  const { defaultInputs } = templateData

  return (
    <form className="generator-form">
      <CustomFieldset
        legend="Datos básicos"
        templateData={defaultInputs}
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
      />
      <ListFieldset
        title="código interno"
        templateData={templateData}
        templateKey="innerCodeList"
        newName="innerCode"
        handleInputChange={handleInputChange}
        handleTemplateChange={handleTemplateChange}
      />
      <fieldset>
        <legend>Datos adicionales</legend>
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          onChange={(e) => {
            handleTemplateChange('description', e.target.value)
          }}
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="">Tanque</label>
        <input
          onChange={(e) => {
            handleInputChange(e)
          }}
          placeholder={templateData.tank}
          name="tank"
          type="text"
        />
        <label htmlFor="dryer">Secador</label>
        <input
          onChange={(e) => {
            handleInputChange(e)
          }}
          placeholder={templateData.dryer}
          name="dryer"
          type="text"
        />
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
      {/* <CustomListGenerator
        title="características"
        templateData={templateData}
        templateKey="features"
        newName="feature"
        handleInputChange={handleInputChange}
        handleTemplateChange={handleTemplateChange}
      /> */}
      <ListFieldset
        title="documentación"
        templateData={templateData}
        templateKey="documentationList"
        newName="documentation"
        handleInputChange={handleInputChange}
        handleTemplateChange={handleTemplateChange}
      />
      <ListFieldset
        title="video"
        templateData={templateData}
        templateKey="videoList"
        newName="video"
        handleInputChange={handleInputChange}
        handleTemplateChange={handleTemplateChange}
      />
      <ListFieldset
        title="imagen"
        templateData={templateData}
        templateKey="imageList"
        newName="image"
        handleInputChange={handleInputChange}
        handleTemplateChange={handleTemplateChange}
      />
    </form>
  )
}

export default CompressorHtml
