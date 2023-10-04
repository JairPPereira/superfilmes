import requests

# inserir os ids dos filmes imdb, separados por quebra de linha
imdb_codes = """
tt1800741
tt1193631
tt6284256
tt3470600
tt4060544
tt10696018
tt14731142
tt1697800
tt9419976
tt1023481
tt8639326
tt0892782
tt8721424
tt12441478
tt1838544
tt13382698
tt0337592
tt0393162
tt2626350
tt15484488
tt1656186
tt4194558
tt0462590
tt15863594
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