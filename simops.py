import requests
import json

def get_movie_info(tmdb_id):
    url = f"https://api.themoviedb.org/3/movie/{tmdb_id}?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if "status_code" in data and data["status_code"] == 34:
            return None  # Filme não encontrado
        movie_info = {
            "titulo": data["title"],
            "descricao": data["overview"],
            "imdb": data["imdb_id"],
            "imagem": f"https://image.tmdb.org/t/p/w300/{data['poster_path']}" if data['poster_path'] else None
        }
        return movie_info
    else:
        return None

tmdb_ids = [1182297, 866346, 1260916, 987032, 1152619, 845111, 1005681, 967847, 478530, 929590, 969492, 744857, 818621, 1015303, 1143319, 964592, 1261924, 1239146, 1019317, 828305, 681478, 1273606, 1041613]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
