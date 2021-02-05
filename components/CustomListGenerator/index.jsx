import React from 'react'
import TemplateFormInput from '../TemplateFormInput'

function CustomListGenerator({
  title,
  templateData,
  templateKey,
  newName,
  handleInputChange,
  handleTemplateChange,
}) {
  const list = templateData[templateKey]

  const addItem = (name, label) => {
    const newList = [...list]
    newList.push({
      name,
      label,
    })
    handleTemplateChange(templateKey, newList)
  }

  const removeItem = () => {
    const newList = [...list]
    newList.pop()
    handleTemplateChange(templateKey, newList)
  }

  return (
    <fieldset>
      <legend>{title}</legend>
      {list.map((item, index) => (
        <TemplateFormInput
          key={`${item.name}-${index}`}
          name={item.name}
          label={item.label}
          handleInput={handleInputChange}
        />
      ))}
      <button
        onClick={() => {
          addItem(`${newName}${list.length}`, `${title} ${list.length + 1}`)
        }}
        type="button"
      >
        Añadir {title}
      </button>
      <button onClick={removeItem} type="button" disabled={list.length < 1}>
        Borrar {title}
      </button>
    </fieldset>
  )
}

export default CustomListGenerator
