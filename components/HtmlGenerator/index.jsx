import React, { useState, useEffect } from 'react'
import TemplateForm from '../TemplateForm'
import TemplatePreview from '../TemplatePreview'
import axios from 'axios'
import { templateGenerator } from '../../utils/templateGenerator'
import { copyCodeToClipboard } from '../../utils/copyCode'

const HtmlGenerator = () => {
  const [templateVariables, setTemplateVariables] = useState({})
  const setTemplateData = (data) => {
    setTemplateVariables(data)
  }
  useEffect(() => {
    const getInitialData = async () => {
      try {
        const response = await axios('http://localhost:3000/api/initialData')
        const data = await response.data
        setTemplateVariables(data)
      } catch (error) {
        console.error(error)
      }
    }
    getInitialData()
  }, [])
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
