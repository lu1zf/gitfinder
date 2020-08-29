const bodyElement = document.querySelector("body");
const containerElement = document.querySelector("#container-repos");
const listElement = document.querySelector("#lista ul");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

function busca() {
  listElement.innerHTML = "";
  let user = inputElement.value;
  axios
    .get("https://api.github.com/users/" + user + "/repos")
    .then((response) => {
      containerElement.setAttribute("class", "container");
      const titleResponse = document.createElement("h1");
      const textTitleResponse = document.createTextNode("Repositórios");

      titleResponse.appendChild(textTitleResponse);
      listElement.appendChild(titleResponse);

      repos = response.data;
      for (repo of repos) {
        let repoElement = document.createElement("li");
        let linkElement = document.createElement("a");
        let paragraphElement = document.createElement("p");

        if (repo.description == null) {
          repo.description = "Repositório sem descrição";
        }

        let descriptionElement = document.createTextNode(repo.description);

        linkElement.setAttribute("href", repo.html_url);
        linkElement.setAttribute("target", "_blank");
        linkElement.text = repo.name;

        repoElement.appendChild(linkElement);
        paragraphElement.appendChild(descriptionElement);
        repoElement.appendChild(paragraphElement);
        listElement.appendChild(repoElement);
      }
    })
    .catch((error) => {
      console.warn(error);
    });
}

buttonElement.onclick = busca;
