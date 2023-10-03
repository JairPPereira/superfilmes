import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt15053518
tt6914122
tt1649418
tt14145426
tt21044524
tt0964539
tt13087796
tt7466442
tt3437892
tt6428676
tt0335121
tt5056842
tt9272572
tt12676006
tt14622542
tt15831226
tt8006426
tt9086228
tt9671918
tt10127708
tt0242888
tt3704428
tt13456318
tt0240468
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