import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt0089943
tt0454945
tt0297144
tt0902272
tt27837442
tt5155780
tt22506746
tt7925066
tt1753383
tt1384590
tt0876563
tt11225756
tt4116284
tt1232783
tt6777338
tt2465238
tt2491648
tt1564777
tt1673430
tt10279472
tt11742798
tt0079833
tt0078187
tt17202326
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