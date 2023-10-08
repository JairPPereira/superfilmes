import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt9779516
tt19408362
tt15022184
tt6456326
tt15789038
tt13923456
tt0363988
tt4896168
tt13521006
tt19500164
tt4873118
tt11768948
tt21245882
tt5212808
tt1974419
tt20859028
tt15671028
tt27542448
tt10418662
tt22488414
tt10276482
tt1698641
tt1462764
tt2005151
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