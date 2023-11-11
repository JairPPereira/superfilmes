import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt15509560
tt27197387
tt13405810
tt14592044
tt22168778
tt14096132
tt13603966
tt6689014
tt10676048
tt1469304
tt26756609
tt19072084
tt21232992
tt22375620
tt1621045
tt21340020
tt28254460
tt14865406
tt15771916
tt0099685
tt9244554
tt15837338
tt13968674
tt5302918
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