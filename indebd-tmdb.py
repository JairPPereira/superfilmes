import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt28118695
tt0115963
tt26350277
tt14057604
tt16304446
tt28912858
tt13482828
tt23049270
tt15433600
tt13400142
tt11426232
tt21109580
tt15268244
tt7599146
tt17202164
tt13022120
tt12921446
tt6384920
tt11858890
tt10098448
tt25471950
tt15783426
tt26450742
tt15053106
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