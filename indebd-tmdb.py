import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt0075148
tt0118998
tt6676028
tt0422401
tt7240616
tt9562694
tt3984356
tt9105628
tt0428251
tt0101587
tt10243992
tt0283111
tt3319730
tt1270835
tt0458471
tt10763618
tt11844684
tt0288477
tt1318517
tt6865630
tt5926990
tt8028600
tt9477066
tt10965792
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