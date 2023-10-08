import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt2103254
tt1517268
tt27155038
tt2123516
tt4590256
tt28022751
tt14230388
tt19034522
tt3544112
tt11482894
tt19858164
tt14400246
tt10483152
tt13405778
tt15398776
tt19623240
tt28240284
tt14412446
tt0091530
tt18298604
tt24132732
tt8583378
tt6116856
tt26674627
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