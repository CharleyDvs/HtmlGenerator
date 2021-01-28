import React from 'react'

const TemplateFormInput = (props) => {
  const { name, label, handleInput, placeholder } = props
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          handleInput(e)
        }}
        required
      />
    </>
  )
}

export default TemplateFormInput
