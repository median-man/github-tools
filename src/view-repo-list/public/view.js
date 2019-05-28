const data = $.get('/api/repos')
$(document).ready(() => {
  const REFRESH_REPO = 'refresh-repo'
  const REPO_NAME = 'repo-name'
  const GITHUB_REPO_URL = 'github-repo-url'
  const GITHUB_REPO_LINK = 'github-repo-link'

  data.then(data => updateTable(data)).catch(console.error)

  $(document).on('click', `.${REFRESH_REPO}`, function() {
    const url = `/api/repos/${$(this).data(REPO_NAME)}`
    $.get(url)
      .then(newData => {
        $(this)
          .parent()
          .replaceWith(createTableRow(newData))
      })
      .catch(console.error)
  })

  $(document).on('click', `.${GITHUB_REPO_LINK}`, function() {
    const url = $(this).data(GITHUB_REPO_URL)
    window.open(url, '_blank')
  })

  function updateTable(repos) {
    $('tbody')
      .empty()
      .append(repos.map(createTableRow))
    $('.collapse').collapse({ toggle: true })
  }

  function createTableRow({ name, url, lastPush }) {
    const nameTd$ = $('<td>')
      .addClass(GITHUB_REPO_LINK)
      .data(GITHUB_REPO_URL, url)
      .text(name)

    const lastPushTd$ = $('<td>')
      .addClass(GITHUB_REPO_LINK)
      .data(GITHUB_REPO_URL, url)
      .text(new Date(lastPush).toDateString())

    const refreshTd$ = $('<td>').append(createRefreshButton())

    return $('<tr>').append(nameTd$, lastPushTd$, refreshTd$)

    function createRefreshButton() {
      return $('<button>')
        .addClass(`${REFRESH_REPO} btn btn-secondary btn-sm`)
        .data(REPO_NAME, name)
        .text('⭮ Refresh')
    }
  }
})
