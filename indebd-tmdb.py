import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt15128068
tt14384176
tt0283426
tt0120589
tt8646254
tt0112641
tt4341582
tt0172493
tt10242388
tt9038678
tt6613958
tt0120689
tt11057882
tt0437179
tt4546156
tt0471414
tt0107659
tt13640696
tt13139228
tt8296030
tt13920702
tt0080120
tt0228982
tt0452702
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