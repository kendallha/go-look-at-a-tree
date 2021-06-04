export const retrieveTrees = async () => {
  const response = await fetch('https://go-look-at-a-tree-api.herokuapp.com/api/v1/trees');
  const data = await errorHandler(response);

  return data
}

export const addTree = async (newData) => {
  const response = await fetch('https://go-look-at-a-tree-api.herokuapp.com/api/v1/trees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData),
  })
  const data = await errorHandler(response);

  return data
}

export const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message)
  } else {
    return response.json()
  }
}
