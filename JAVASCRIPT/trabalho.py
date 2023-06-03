def carregarArquivo(aqruivo):
    with open(arquivo, 'r') as file:
        primeira_linha = file.readline().split()

        num_vertices = int(primeira_linha[0])
        num_arestas = int(primeira_linha[1])
        tipo_grafo = primeira_linha[2]

        lista_adjacencia = {v: [] for v in range(1, num_vertices + 1)}

        for line in file:
            aresta = line.split()
            origem = int(aresta[0])
            destino = int(aresta[1])

            lista_adjacencia[origem].append(destino)

    return lista_adjacencia
