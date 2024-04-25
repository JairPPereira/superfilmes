import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt21308718
tt3917506
tt13073252
tt19878422
tt10426580
tt14624330
tt15980462
tt8511466
tt17352384
tt26928076
tt14509110
tt7466810
tt30796448
tt6317762
tt0361862
tt30317302
tt11505682
tt7935770
tt3463938
tt15437042
tt23561236
tt27788763
tt21830902
tt26067432
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