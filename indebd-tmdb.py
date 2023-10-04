import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt0822854
tt0066434
tt3501632
tt1587310
tt0443706
tt5127206
tt0071315
tt9348848
tt2274648
tt6195094
tt4807408
tt0167190
tt0400497
tt4777008
tt1529572
tt0467110
tt0108052
tt1454029
tt3745906
tt0411477
tt0864761
tt13863334
tt0073092
tt3583336
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