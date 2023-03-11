//domain/.netlify/functions/hello

const items = [
  { id: 1, name: 'Jake' },
  { id: 2, name: 'Amy' },
]

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'hello world',
  }
}
