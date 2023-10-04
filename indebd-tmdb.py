import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt0102926
tt0367959
tt6921996
tt3379372
tt0800320
tt0457430
tt11847410
tt1634122
tt3859466
tt0082186
tt8956324
tt15132028
tt9224288
tt0300471
tt15909848
tt0274166
tt5151716
tt1646987
tt2872718
tt3181822
tt0430308
tt0096283
tt9286908
tt11285908
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