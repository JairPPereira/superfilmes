import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt13774454
tt2103254
tt10483152
tt0496806
tt6116856
tt1559547
tt2123516
tt8583378
tt21339834
tt27155038
tt5541240
tt19623240
tt14846026
tt1308650
tt0349903
tt0100157
tt9620292
tt4590256
tt10303430
tt8718158
tt14412446
tt0151738
tt8870814
tt1484922
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