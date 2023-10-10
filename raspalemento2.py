import requests
from bs4 import BeautifulSoup
import re

# URL da página web que você deseja raspar
url = "https://embedder.net/lib/movies?page=140"

# Faz uma requisição GET para a página web
response = requests.get(url)

# Verifica se a requisição foi bem-sucedida
if response.status_code == 200:
    # Parseia o conteúdo HTML da página usando o Beautiful Soup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Encontra todos os elementos <div> com a classe "film-poster"
    film_posters = soup.find_all('div', class_='film-poster')

    # Loop pelos elementos e reformatá-los
    for index, film_poster in enumerate(film_posters):
        img_tag = film_poster.find('img', class_='film-poster-img')
        title = film_poster.find('a', class_='bop-name').text.strip()
        img_url = img_tag['data-src']

        # Encontra o IMDb ID no atributo href do link
        imdb_link = film_poster.find('a', class_='film-poster-ahref')['href']
        imdb_match = re.search(r'tt\d+', imdb_link)
        imdb_id = imdb_match.group() if imdb_match else None

        # Verifica se há descrição disponível
        descricao = f'Descrição do filme {index + 1}'  # Descrição padrão
        descricao_tag = film_poster.find('p', class_='descricao-classe')  # Substitua 'descricao-classe' pela classe real
        if descricao_tag:
            descricao = descricao_tag.text.strip()

        # Imprime o resultado formatado
        print(f'{{\n'
              f'    titulo: \'{title}\',\n'
              f'    descricao: \'{descricao}\',\n'
              f'    imdb: \'{imdb_id}\',\n'
              f'    imagem: \'{img_url}\'\n'
              f'}},')
else:
    print("Erro ao acessar a página")
