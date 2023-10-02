import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt2109248
tt27403906
tt13375076
tt17321230
tt2906216
tt2545440
tt0050301
tt15767808
tt4960748
tt10366206
tt15339456
tt16900880
tt12758060
tt0423238
tt14923260
tt11358390
tt0304415
tt13833688
tt0061655
tt14330236
tt24223450
tt14781036
tt1055369
tt0418279
"""

# converter a string em uma lista com os códigos imdb
imdb_ids = imdb_codes.split()
# chave da API do TMDB
api_key = "fcfe44809de84129fab53e785124bb95"

# lista para armazenar os ids dos filmes do TMDB
tmdb_ids = []

# loop através dos ids do imdb
for imdb_id in imdb_ids:
    # construindo a url da API do TMDB
    url = f"https://api.themoviedb.org/3/find/{imdb_id}?api_key={api_key}&language=pt-BR&external_source=imdb_id"

    # fazendo uma requisição GET para a API do TMDB
    response = requests.get(url)

    # convertendo a resposta para JSON
    data = response.json()

    # extraindo os ids dos filmes do JSON
    movie_ids = [result["id"] for result in data["movie_results"]]

    # adicionando os ids dos filmes do TMDB à lista
    tmdb_ids.extend(movie_ids)

# imprimindo os ids dos filmes do TMDB como uma lista corrida
print(f"IDs do TMDB: {', '.join(str(id) for id in tmdb_ids)}")