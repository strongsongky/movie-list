export default function httpStatusErrorHandler(status) {
  if (status === 404) {
    return console.log('url 주소가 잘못되었어요!!!')
  }
  if (status === 400) {
    return console.log('url 주소가 잘못되었어요!!!')
  }
  if (status === 401) {
    return console.log('url 주소가 잘못되었어요!!!')
  }
  return
}
