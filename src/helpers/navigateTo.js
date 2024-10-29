// перейти на другой путь
function navigateTo(path) {
  window.history.pushState(null, null, path)
}

export default navigateTo