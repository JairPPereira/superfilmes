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

tmdb_ids = [335977, 869623, 1049638, 810731, 884535, 585244, 308266, 685264, 812225, 653594, 976573, 218778, 1107872, 1010581, 868985, 1586, 961323, 988078, 615658, 798286, 536437, 917007, 713776, 758336,]

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
