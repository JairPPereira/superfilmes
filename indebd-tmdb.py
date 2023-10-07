import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt9741180
tt10364034
tt0108432
tt27876411
tt1657865
tt14770620
tt21737024
tt15509244
tt9873892
tt12680684
tt19113292
tt0338094
tt0985699
tt1509767
tt4925292
tt14851194
tt0338013
tt0092067
tt13814704
tt11703244
tt0087182
tt0097814
tt27837488
tt6879446
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