import requests

def get_movie_info(tmdb_id):
    url = f"https://api.themoviedb.org/3/movie/{tmdb_id}?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if "status_code" in data and data["status_code"] == 34:
            return None, None  # Filme não encontrado
        title = data["title"]
        synopsis = data["overview"]
        return title, synopsis
    else:
        return None, None

tmdb_ids = [930094, 993867, 565770, 63197, 547404, 87827, 647250, 522925, 635910, 520720, 957445, 1153222, 1146019, 22538, 832502, 1140056, 568467, 300667, 893345, 1128604, 631583, 27850, 1158959]

# Imprime o título e a sinopse de cada filme
for tmdb_id in tmdb_ids:
    title, synopsis = get_movie_info(tmdb_id)
    if title and synopsis:
        print(f"Título do filme com TMDb ID {tmdb_id}: {title}")
        print(f"Sinopse do filme com TMDb ID {tmdb_id}:")
        print(synopsis)
        print()
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
