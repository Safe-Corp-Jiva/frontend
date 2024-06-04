if (typeof window !== 'undefined') {
  window.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code == 'KeyB') {
      //b
      window.location.href = '/dashboard'
    }
    if (event.ctrlKey && event.code == 'KeyM') {
      //m
      window.location.href = '/chat'
    }
  })
}
