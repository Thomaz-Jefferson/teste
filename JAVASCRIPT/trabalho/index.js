function lerArquivo() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const conteudo = e.target.result;
        const listaAdjacencia = carregarGrafoDirecionado(conteudo);
        console.log(listaAdjacencia); // Exemplo: Imprimir a lista de adjacência no console
      }
  
      reader.readAsText(file);
    }
  }
  
  function carregarGrafo(arquivo) {
    const fileReader = new FileReader();
    fileReader.onload = function (event) {
      const conteudo = event.target.result;
      const linhas = conteudo.split('\n');
  
      const primeiraLinha = linhas[0].split(' ');
      const numVertices = parseInt(primeiraLinha[0]);
      const numArestas = parseInt(primeiraLinha[1]);
      const tipoGrafo = primeiraLinha[2];
  
      const grafo = {};
  
      for (let i = 1; i <= numArestas; i++) {
        const linha = linhas[i].split(' ');
        const vertice1 = parseInt(linha[0]);
        const vertice2 = parseInt(linha[1]);
  
        if (!grafo[vertice1]) {
          grafo[vertice1] = [];
        }
        if (!grafo[vertice2]) {
          grafo[vertice2] = [];
        }
  
        grafo[vertice1].push(vertice2);
  
        if (tipoGrafo === 'U') { // Se for um grafo não direcionado, adicione a aresta oposta
          grafo[vertice2].push(vertice1);
        }
      }
  
      const dfs = new DFS(grafo);
      dfs.executarDFS();
      exibirResultadoDFS(dfs.resultadoDFS);
    };
  
    fileReader.readAsText(arquivo);
  }
  
  class DFS {
    constructor(grafo) {
      this.grafo = grafo;
      this.visitados = new Set();
      this.d = {};
      this.f = {};
      this.tempo = 0;
      this.resultadoDFS = [];
    }
  
    dfs(vertice) {
      this.visitados.add(vertice);
      this.tempo++;
      this.d[vertice] = this.tempo;
  
      for (let vizinho of this.grafo[vertice]) {
        if (!this.visitados.has(vizinho)) {
          this.resultadoDFS.push(`Aresta de Árvore: ${vertice} -> ${vizinho}`);
          this.dfs(vizinho);
        } else if (vizinho in this.d && !(vizinho in this.f)) {
          this.resultadoDFS.push(`Aresta de Retorno: ${vertice} -> ${vizinho}`);
        } else if (this.d[vizinho] > this.d[vertice]) {
          this.resultadoDFS.push(`Aresta de Avanço: ${vertice} -> ${vizinho}`);
        } else {
          this.resultadoDFS.push(`Aresta de Cruzamento: ${vertice} -> ${vizinho}`);
        }
      }
  
      this.tempo++;
      this.f[vertice] = this.tempo;
    }
  
    executarDFS() {
      const vertices = Object.keys(this.grafo);
  
      vertices.sort((a, b) => a - b);
  
      for (let vertice of vertices) {
        if (!this.visitados.has(vertice)) {
          this.dfs(vertice);
        }
      }
    }
  }
  
  function exibirResultadoDFS(resultado) {
    const container = document.getElementById('resultado-dfs');
    container.innerHTML = ''; // Limpa o conteúdo anterior
  
    for (const aresta of resultado) {
      const elemento = document.createElement('p');
      elemento.textContent = aresta;
      container.appendChild(elemento);
    }
  }
  
  document.querySelector('input[type="file"]').addEventListener('change', function (event) {
    const arquivo = event.target.files[0]; // Obtenha o arquivo selecionado pelo input file
    carregarGrafo(arquivo);
  });