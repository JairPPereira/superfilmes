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

tmdb_ids = [508883, 656156, 792293, 1169900,]

# Imprime os itens no formato desejado
for tmdb_id in tmdb_ids:
    movie_info = get_movie_info(tmdb_id)
    if movie_info:
        print(json.dumps(movie_info, indent=4))
        print(',')
    else:
        print(f"Não foi possível obter informações do filme com TMDb ID {tmdb_id}.")
