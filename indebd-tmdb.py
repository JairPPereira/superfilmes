import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt20247162
tt21991654
tt8129806
tt11820950
tt14672882
tt14097180
tt18376800
tt25010142
tt2583014
tt14636186
tt11947100
tt24852002
tt10980638
tt27712788
tt13419036
tt13669038
tt14542504
tt21969174
tt26828542
tt18260564
tt28496500
tt14967472
tt15403362
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