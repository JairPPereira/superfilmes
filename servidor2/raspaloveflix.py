import requests
from bs4 import BeautifulSoup

# função que obtém o imdb_id a partir do link
def get_imdb_id(link):
    return link.split('/')[-1]

# função que obtém a url da imagem do filme
def get_movie_image(imdb_id, api_key):
    url = f"https://api.themoviedb.org/3/find/{imdb_id}?api_key={api_key}&language=pt-BR&external_source=imdb_id"
    response = requests.get(url)
    data = response.json()
    if data['movie_results']:
        poster_path = data['movie_results'][0]['poster_path']
        return f"https://image.tmdb.org/t/p/w300/{poster_path}"
    return None

# url da página com os filmes
url = 'https://superflixapi.top/filmes/?paged=12'
response = requests.get(url)

soup = BeautifulSoup(response.content, 'html.parser')
items = soup.find_all('div', class_='item')

# sua chave de API do The Movie Database
api_key = 'fcfe44809de84129fab53e785124bb95'

# lista para armazenar os dados dos filmes
filmes = []

# itera sobre os filmes
for item in items:
    title = item.find('a', class_='title').text.strip()
    link = item.find('div', class_='actions').find('a', class_='iframe-link').get('href')
    imdb_id = get_imdb_id(link)
    movie_image = get_movie_image(imdb_id, api_key)
    descricao = ""  # você precisa obter a descrição do filme de alguma forma, não está claro no código fornecido
    if movie_image:
        filme = {
            'titulo': title,
            'descricao': descricao,
            'imdb': imdb_id,
            'imagem': movie_image
        }
        filmes.append(filme)

# imprime os dados no formato desejado
for filme in filmes:
    print(f"{{\n\ttitulo: '{filme['titulo']}',\n\tdescricao: '{filme['descricao']}',\n\timdb: '{filme['imdb']}',\n\timagem: '{filme['imagem']}'\n}},")
