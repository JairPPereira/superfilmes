import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt1502397
tt1843866
tt7097896
tt8652818
tt0974661
tt0172156
tt2375779
tt6823368
tt3498820
tt3410834
tt1840309
tt4972582
tt4154664
tt0362478
tt0217869
tt13464350
tt14124268
tt3878542
tt3612032
tt0458339
tt2908446
tt11701774
tt16375288
tt17887288
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