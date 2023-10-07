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

tmdb_ids = [32873, 9655, 24982, 14011, 1128718, 376134, 1126844, 500854, 381289, 17445, 12429, 822099, 324849, 26688, 437109, 177271, 184313, 283378, 45162, 890771, 785457, 15371, 30143, 1024535,]

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
