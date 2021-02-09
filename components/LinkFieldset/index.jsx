import React from 'react'
import TemplateFormInput from '../TemplateFormInput'

function LinkFieldset({
  title,
  templateData,
  templateKey,
  newName,
  handleInputChange,
  handleTemplateChange,
  removeFieldFromData,
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
    const keyToRemove = `text-${newName}${list.length - 1}`
    const linkKeyToRemove = `link-${newName}${list.length - 1}`
    removeFieldFromData(keyToRemove, linkKeyToRemove)
    const newList = [...list]
    newList.pop()
    handleTemplateChange(templateKey, newList)
  }

  return (
    <fieldset>
      <legend>{title}</legend>
      {list.map((item, index) => (
        <div key={`${item.name}-${index}`}>
          <TemplateFormInput
            name={`text-${item.name}`}
            label={item.label}
            handleInput={handleInputChange}
          />
          <br />
          <TemplateFormInput
            name={`link-${item.name}`}
            label={`URL ${item.label}`}
            handleInput={handleInputChange}
          />
        </div>
      ))}
      <button
        onClick={() => {
          addItem(`${newName}${list.length}`, `${title} ${list.length + 1}`)
        }}
        type="button"
        disabled={list.length > 2}
      >
        Añadir {title}
      </button>
      <button onClick={removeItem} type="button" disabled={list.length < 2}>
        Borrar {title}
      </button>
    </fieldset>
  )
}

export default LinkFieldset
