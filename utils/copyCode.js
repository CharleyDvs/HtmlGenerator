export const copyCodeToClipboard = (code) => {
  const temporalInput = document.createElement('input')
  temporalInput.className = 'temporalInput'
  document.body.appendChild(temporalInput)
  temporalInput.value = code
  temporalInput.select()
  document.execCommand('copy')
  document.body.removeChild(temporalInput)
}
