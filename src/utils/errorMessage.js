export default function (err) {
  if (err.response) {
    let message = ''
    if (Array.isArray(err.response.data.message)) {
      return (message = err.response.data.message.join(' '))
    } else {
      return (message = err.response.data.message)
    }
  }
}
