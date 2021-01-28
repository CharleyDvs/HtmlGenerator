import React, { useState } from 'react'
import TemplateFormInput from '../TemplateFormInput'

const TemplateForm = ({ setTemplateData, templateVariables }) => {
  const handleInput = (e) => {
    setTemplateData({
      ...templateVariables,
      [e.target.name]: e.target.value,
    })
  }
  const formValues = [
    {
      name: 'brandName',
      label: 'Nombre de la marca',
    },
    {
      name: 'logoUrl',
      label: 'Dirección del logo',
    },
    {
      name: 'leftImage',
      label: 'Dirección del fondo izquierdo',
    },
    {
      name: 'rightImage',
      label: 'Dirección del fondo derecho',
    },
    {
      name: 'linkText1',
      label: 'Texto del primer enlace',
    },
    {
      name: 'linkImage1',
      label: 'Imagen del primer enlace',
    },
    {
      name: 'url1',
      label: 'Dirección del primer enlace',
    },
    {
      name: 'linkText2',
      label: 'Texto del segundo enlace',
    },
    {
      name: 'linkImage2',
      label: 'Imagen del segundo enlace',
    },
    {
      name: 'url2',
      label: 'Dirección del segundo enlace',
    },
    {
      name: 'linkText3',
      label: 'Texto del tercer enlace',
    },
    {
      name: 'linkImage3',
      label: 'Imagen del tercer enlace',
    },
    {
      name: 'url3',
      label: 'Dirección del tercer enlace',
    },
  ]
  return (
    <form className="templateForm">
      <h2>Datos de la página</h2>
      {formValues.map((formValue) => (
        <TemplateFormInput
          key={formValue.name}
          name={formValue.name}
          label={formValue.label}
          placeholder={templateVariables[formValue.name]}
          handleInput={handleInput}
        />
      ))}
      <label htmlFor="flavorText">Texto de introducción</label>
      <textarea
        name="flavorText"
        cols="30"
        rows="11"
        placeholder={templateVariables.flavorText}
        onChange={(e) => handleInput(e)}
      ></textarea>
    </form>
  )
}

export default TemplateForm
