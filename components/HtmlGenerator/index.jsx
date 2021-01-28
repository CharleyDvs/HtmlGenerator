import React, { useState } from 'react'
import TemplateForm from '../TemplateForm'
import TemplatePreview from '../TemplatePreview'
import { initialState } from '../../utils/initialState'
import { templateGenerator } from '../../utils/templateGenerator'
import { copyCodeToClipboard } from '../../utils/copyCode'

const HtmlGenerator = () => {
  const [templateVariables, setTemplateVariables] = useState(initialState)
  const setTemplateData = (data) => {
    setTemplateVariables(data)
  }
  return (
    <section className="html-generator">
      <h1>Generador de HTML para cornershop</h1>
      <div className="generator-grid">
        <div className="variable-input-container">
          <TemplateForm
            setTemplateData={setTemplateData}
            templateVariables={templateVariables}
          />
        </div>
        <div className="html-output-container">
          <h2>Código generado:</h2>
          <p>{templateGenerator(templateVariables)}</p>
          <button
            onClick={() => {
              copyCodeToClipboard(templateGenerator(templateVariables))
            }}
          >
            Copiar código
          </button>
        </div>
      </div>
      <h2>Vista previa:</h2>
      <div className="preview-container">
        <TemplatePreview templateVariables={templateVariables} />
      </div>
    </section>
  )
}

export default HtmlGenerator
