export const filterObjectKeys = (string, obj) => {
  const objectKeys = Object.keys(obj)
  const filteredKeys = objectKeys.filter((key) => key.includes(string))
  return filteredKeys
}
