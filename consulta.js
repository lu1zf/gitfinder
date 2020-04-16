const bodyElement = document.querySelector('body')
const listElement = document.querySelector('#lista ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

function busca(){
  listElement.innerHTML = ''
  let user = inputElement.value
  axios.get('https://api.github.com/users/'+user+'/repos')
    .then((response) => {
      repos = response.data
      for (repo of repos){
        let repoElement = document.createElement('li')
        let linkElement = document.createElement('a')
        linkElement.setAttribute('href', repo.html_url)
        linkElement.setAttribute('target', '_blank')
        linkElement.text = repo.name

        repoElement.appendChild(linkElement)
        listElement.appendChild(repoElement)
      }
    })
    .catch((error) => {
      console.warn(error)
    })
}

buttonElement.onclick = busca