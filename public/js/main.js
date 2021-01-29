;(() => {
  var localData = {}

  init(initialValue => {
    localData = initialValue
  })

  let checks = document.querySelectorAll('.cookie-item')

  addEventListenerToList(
    'click',
    document.querySelectorAll('.acceptAll'),
    () => {
      checks.forEach((el, idx) => {
        el.checked = true
      })

      Object.keys(JSON.parse(localStorage.acceptedLocalData)).map(
        (key, idx) => {
          changeLocalDataValue(true, key)
        }
      )
    }
  )
  addEventListenerToList(
    'click',
    document.querySelectorAll('.disableAll'),
    () => {
      checks.forEach((el, idx) => {
        el.checked = false
      })
      Object.keys(JSON.parse(localStorage.acceptedLocalData)).map(
        (key, idx) => {
          changeLocalDataValue(false, key)
        }
      )
    }
  )

  document.querySelector('#initTerms').addEventListener('click', function () {
    localStorage.removeItem('termsAccepted')
    localStorage.setItem(
      'acceptedLocalData',
      JSON.stringify({ ...initialState })
    )
    document.querySelector('.box-cookies').classList.remove('hide')
  })

  document
    .querySelector('#modalCookieConsent')
    .addEventListener('show.bs.modal', function () {
      localData = JSON.parse(localStorage.acceptedLocalData)
      document.querySelector('#dados_funcionalidade').checked =
        localData.functionality == 'accepted'
      document.querySelector('#dados_desempenho').checked =
        localData.performance == 'accepted'
      document.querySelector('#dados_publicidade').checked =
        localData.publicity == 'accepted'
      document.querySelector('#dados_social').checked =
        localData.social == 'accepted'
    })

  document.querySelector('#form-cookies').addEventListener('submit', e => {
    e.preventDefault()
    let countAccepted = countAcceptedLocalData()
    localData['publicity'] = getElementById('dados_publicidade').checked
      ? 'accepted'
      : 'disabled'
    localData['functionality'] = getElementById('dados_funcionalidade').checked
      ? 'accepted'
      : 'disabled'
    localData['performance'] = getElementById('dados_desempenho').checked
      ? 'accepted'
      : 'disabled'
    localData['social'] = getElementById('dados_social').checked
      ? 'accepted'
      : 'disabled'
    localStorage.setItem('acceptedLocalData', JSON.stringify(localData))
    localStorage.setItem(
      'termsAccepted',
      countAccepted > 0 ? 'accepted' : 'disabled'
    )
    document.querySelector('.box-cookies').classList.add('hide')
    document.getElementById('dismissModal').click()
  })

  document.querySelector('#enableAll').addEventListener('click', function () {
    enableDisableAll('accepted')
  })

  document.querySelector('#disableAll').addEventListener('click', function () {
    enableDisableAll('disabled')
  })
})()
