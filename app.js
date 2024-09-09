function pesquisar() {
  // Obtém a referência ao elemento HTML com o ID "resultados-pesquisa"
  // Este elemento será utilizado para exibir os resultados da pesquisa
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);

  if (!campoPesquisa) {
    section.innerHTML = `<p>Nada foi digitado no campo de pesquisa.</p>`;
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let nome = "";
  let descricao = "";

  // Itera sobre cada elemento do array "dados" (não mostrado no código)
  // Para cada elemento, cria uma nova div com as informações do dado e
  // concatena essa div à string "resultados"
  for (let dado of dados) {
    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();

    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      //Cria um novo elemento
      resultados += `
    <div class="item-resultado">
      <h2><a href="#" target="_blank">${dado.nome}</a></h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <p><strong>Ano de formação: ${dado.anoFormacao}</strong></p>
      <p><strong>Gênero principal: ${dado.generoPrincipal}</strong></p>
      <p><strong>Albuns famosos: ${dado.albunsFamosos}</strong></p>
      <p><strong>Integrantes: ${dado.integrantes}</strong></p>
      <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
  `;
    }
  }

  if (!resultados){
    resultados = "<p>A Banda não foi encontrada!</p>"
  }

  // Atribui o conteúdo da string "resultados" ao HTML do elemento "section"
  // Substituindo assim o conteúdo anterior e exibindo os resultados da pesquisa
  section.innerHTML = resultados;
}
