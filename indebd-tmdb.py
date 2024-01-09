import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt0090728
tt14849194
tt20917338
tt14303882
tt10950320
tt23752770
tt3963674
tt16277374
tt8997712
tt22041854
tt12980286
tt13729068
tt13615030
tt13566172
tt12003946
tt9288776
tt14460090
tt9145510
tt16106000
tt10960102
tt30399498
tt0176861
tt8571674
tt10990970
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