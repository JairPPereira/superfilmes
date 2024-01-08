import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt5585272
tt9068272
tt10375396
tt10545696
tt28255598
tt5673432
tt10376800
tt21328106
tt14631460
tt9839038
tt10565666
tt10974674
tt17074644
tt3917710
tt21158192
tt7724516
tt9185206
tt24076146
tt21738294
tt16302202
tt6844138
tt7686376
tt12453124
tt29174442
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