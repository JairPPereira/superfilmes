import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt14641648
tt1879016
tt4123432
tt10160886
tt3513500
tt11217036
tt3876910
tt19883622
tt6020800
tt8949056
tt10516196
tt1798243
tt9738784
tt9419884
tt10023022
tt8941380
tt5108870
tt12412888
tt13650600
tt14926808
tt10986222
tt13276352
tt9789042
tt1745960
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