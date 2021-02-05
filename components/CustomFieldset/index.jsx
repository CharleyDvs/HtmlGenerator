import React from 'react'
import TemplateFormInput from '../TemplateFormInput'

function CustomFieldset({ legend, templateData, data, handleInputChange }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {Object.keys(templateData).map((templateKey) => (
        <TemplateFormInput
          key={templateData[templateKey].name}
          name={templateData[templateKey].name}
          label={templateData[templateKey].label}
          handleInput={handleInputChange}
          placeholder={data[templateData[templateKey].name]}
        />
      ))}
    </fieldset>
  )
}

export default CustomFieldset
