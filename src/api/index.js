export const login = async data => {
  console.log(data)
  return await fetch('http://localhost:3001/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
