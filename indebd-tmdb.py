import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt30431349
tt21230032
tt13786042
tt28582081
tt15245390
tt6846978
tt9898844
tt11353050
tt16970906
tt11252490
tt8191850
tt13006472
tt20561198
tt8109800
tt14589900
tt6002094
tt11908172
tt21967800
tt6851410
tt2798920
tt13923216
tt14438348
tt21979910
tt19887550
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