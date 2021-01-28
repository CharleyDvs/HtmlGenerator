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
      label: 'Dirección del fondo izquierdo (300x550px)',
    },
    {
      name: 'rightImage',
      label: 'Dirección del fondo derecho (300x550px)',
    },
    {
      name: 'linkText1',
      label: 'Texto del primer enlace',
    },
    {
      name: 'linkImage1',
      label: 'Imagen del primer enlace (160x160px)',
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
      label: 'Imagen del segundo enlace (160x160px)',
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
      label: 'Imagen del tercer enlace (160x160px)',
    },
    {
      name: 'url3',
      label: 'Dirección del tercer enlace',
    },
    {
      name: 'headerBg',
      label: 'Color de fondo (Hexadecimal)',
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
