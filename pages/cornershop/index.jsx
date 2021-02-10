import React, { useState, useEffect } from 'react'
import TemplateForm from '../../components/TemplateForm'
import TemplatePreview from '../../components/TemplatePreview'
import axios from 'axios'
import { templateGenerator } from '../../utils/templateGenerator'
import { copyCodeToClipboard } from '../../utils/copyCode'

const CornershopGenerator = () => {
  const [templateVariables, setTemplateVariables] = useState({})
  const setTemplateData = (data) => {
    setTemplateVariables(data)
  }
  useEffect(() => {
    const getInitialData = async () => {
      try {
        const response = await axios(
          'https://html-generator.vercel.app/api/initialData'
        )
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
          <div className="code-preview">
            <p>{templateGenerator(templateVariables)}</p>
          </div>
          <button
            onClick={() => {
              copyCodeToClipboard(templateGenerator(templateVariables))
            }}
          >
            <i className="fas fa-clipboard fa-lg"></i> Copiar código
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

export default CornershopGenerator
