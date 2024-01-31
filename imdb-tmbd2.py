"""
Módulo para obter IDs de filmes do TMDB a partir de IDs IMDb.
"""
import requests

def obter_tmdb_ids(imdb_ids, api_key):
    """
    Obtém os IDs dos filmes do TMDB a partir dos IDs IMDb fornecidos.

    :param imdb_ids: Lista de IDs IMDb dos filmes.
    :param api_key: Chave da API do TMDB.
    :return: Lista de IDs dos filmes do TMDB.
    """
    tmdb_ids = []

    for imdb_id in imdb_ids:
        # Construindo a URL da API do TMDB
        url = (
            f"https://api.themoviedb.org/3/find/{imdb_id}?"
            f"api_key={api_key}&language=pt-BR&external_source=imdb_id"
        )

        try:
            # Fazendo uma requisição GET para a API do TMDB
            response = requests.get(url, timeout=10)  # Adicionando um timeout

            response.raise_for_status()  # Lança uma exceção para erros HTTP

            # Convertendo a resposta para JSON
            data = response.json()

            # Extraindo os IDs dos filmes do JSON
            movie_ids = [result["id"] for result in data.get("movie_results", [])]

            # Adicionando os IDs dos filmes do TMDB à lista
            tmdb_ids.extend(movie_ids)

        except requests.exceptions.RequestException as e:
            print(f"Erro na requisição para o filme {imdb_id}: {e}")

    return tmdb_ids

if __name__ == "__main__":
    # Inserir os IDs dos filmes IMDb, separados por quebra de linha
    imdb_codes = """
    tt14667700
    tt13625932
    tt13592970
    tt27547215
    tt22360682
    tt10925780
    tt14935892
    tt18083578
    """

    # Converter a string em uma lista com os códigos IMDb
    imdb_ids = imdb_codes.split()

    # Chave da API do TMDB
    api_key = "fcfe44809de84129fab53e785124bb95"

    # Obter os IDs dos filmes do TMDB
    tmdb_ids = obter_tmdb_ids(imdb_ids, api_key)

    # Imprimir os IDs dos filmes do TMDB como uma lista corrida
    print(f"IDs do TMDB: {', '.join(str(id) for id in tmdb_ids)}")
