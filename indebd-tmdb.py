import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt5648882
tt1411697
tt28810493
tt15819902
tt5537002
tt18394190
tt29291452
tt25947954
tt26547864
tt28603694
tt29291436
tt9201772
tt11951276
tt2572212
tt1119646
tt22698070
tt20141822
tt6906292
tt27048691
tt24785544
tt9204328
tt27351936
tt29168830
tt4556264
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