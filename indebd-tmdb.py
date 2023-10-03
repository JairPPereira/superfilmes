import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt1127180
tt2397535
tt1878841
tt1691916
tt5640450
tt11080108
tt7638348
tt2194499
tt9701940
tt0468536
tt9701942
tt0167261
tt0120737
tt3174376
tt0343660
tt0945513
tt2118624
tt4858674
tt0077869
tt0107048
tt0167260
tt11464826
tt1631867
tt6566576
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