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

tmdb_ids = [730167, 997791, 783556, 761563, 326316, 1034336, 1067820, 313922, 1112548, 10474, 862552, 1024773, 1146147,]

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
