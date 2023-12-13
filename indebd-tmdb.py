import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt6661616
tt14104600
tt5301942
tt14402146
tt21139960
tt5151570
tt15742308
tt12362542
tt13316790
tt21199996
tt14534796
tt5878194
tt14208870
tt22398080
tt11252248
tt14406418
tt15745226
tt21432050
tt15006754
tt7472122
tt9853500
tt16566428
tt22084794
tt13793230
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