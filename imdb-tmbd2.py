import requests

def obter_informacoes_filme_tmdb(imdb_id):
    api_key = "fcfe44809de84129fab53e785124bb95"
    url = f"https://api.themoviedb.org/3/find/{imdb_id}?api_key={api_key}&language=pt-BR&external_source=imdb_id"

    try:
        resposta = requests.get(url)
        resposta.raise_for_status()
        dados = resposta.json()
        return dados
    except requests.exceptions.HTTPError as errh:
        print(f"Erro HTTP: {errh}")
    except requests.exceptions.ConnectionError as errc:
        print(f"Erro de Conexão: {errc}")
    except requests.exceptions.Timeout as errt:
        print(f"Erro de Timeout: {errt}")
    except requests.exceptions.RequestException as err:
        print(f"Erro na solicitação: {err}")

# Exemplo de uso
codigo_imdb = "tt30431349"
informacoes_filme = obter_informacoes_filme_tmdb(codigo_imdb)

if informacoes_filme:
    print(informacoes_filme)
else:
    print("Não foi possível obter informações do filme.")
