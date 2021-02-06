import React from 'react'

function ProductTablePreview({ tableData, tableTemplateData }) {
  const tableKeys = Object.keys(tableData)
  return (
    <table className="product-table-preview">
      {tableKeys.map((tableKey, index) => {
        if (tableData[tableKey] !== '') {
          return (
            <tr key={`${tableKey}${index}`}>
              <th>{tableTemplateData[tableKey].label}</th>
              <td>{tableData[tableKey]}</td>
            </tr>
          )
        }
      })}
    </table>
  )
}

export default ProductTablePreview
