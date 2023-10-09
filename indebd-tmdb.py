import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt1462764
tt14300912
tt15893750
tt14318430
tt27856735
tt9779516
tt2005151
tt11224358
tt22868844
tt11388990
tt15789038
tt1698641
tt19724192
tt21909764
tt22185848
tt0363988
tt19500164
tt21245882
tt10418662
tt13521006
tt8080204
tt4896168
tt11768948
tt10276482
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