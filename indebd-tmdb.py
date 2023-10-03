import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt6499752
tt13308110
tt0421994
tt1288558
tt4361050
tt3567666
tt0324216
tt0112281
tt0465234
tt3387648
tt13822738
tt1152398
tt4218572
tt0420294
tt1572315
tt11686490
tt2870612
tt0253474
tt0109040
tt4244998
tt1038686
tt0389860
tt5126274
tt2446980
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