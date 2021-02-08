const obj = {
  documentation0: 'url',
  documentation1: 'url',
  documentation2: 'url',
  image0: 'url',
  image1: 'url',
  image2: 'url',
}

const filterObjectKeys = (string, obj) => {
  const objectKeys = Object.keys(obj)
  const filteredKeys = objectKeys.filter((key) => key.includes(string))
  console.log(filteredKeys)
}

filterObjectKeys('documentation', obj)
