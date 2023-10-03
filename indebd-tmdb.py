import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt0371606
tt1320253
tt0382932
tt8675288
tt2190367
tt8226892
tt8415352
tt1323594
tt2102396
tt21237030
tt4302938
tt0396555
tt1764651
tt0780571
tt0317705
tt1690953
tt1663662
tt1772341
tt0811080
tt4687108
tt2333784
tt2199543
tt3108658
tt4799066
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