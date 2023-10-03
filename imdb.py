from bs4 import BeautifulSoup
import re

html = """
 <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Arraste-me Para o Inferno', 'https://embedder.net/e/movie?imdb=tt1127180')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dnfLXsIxGdqC2tP08LqqQddINsn.jpg);"></div>
                    <a onclick="openMovie('Arraste-me Para o Inferno', 'https://embedder.net/e/movie?imdb=tt1127180')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Arraste-me Para o Inferno</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Caçados', 'https://embedder.net/e/movie?imdb=tt0468536')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hOuF1Egtx151TgJKuFetK9NkEHy.jpg);"></div>
                    <a onclick="openMovie('Caçados', 'https://embedder.net/e/movie?imdb=tt0468536')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Caçados</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Sono da Morte', 'https://embedder.net/e/movie?imdb=tt3174376')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1DZZENNLsHCsX3yLZwBI77lnNOn.jpg);"></div>
                    <a onclick="openMovie('O Sono da Morte', 'https://embedder.net/e/movie?imdb=tt3174376')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Sono da Morte</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Extraordinária Garota Chamada Estrela', 'https://embedder.net/e/movie?imdb=tt4858674')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zYvD1TZfGF2RHe1078MULl78nsV.jpg);"></div>
                    <a onclick="openMovie('A Extraordinária Garota Chamada Estrela', 'https://embedder.net/e/movie?imdb=tt4858674')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Extraordinária Garota Chamada Estrela</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Escuridão', 'https://embedder.net/e/movie?imdb=tt1878841')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7KZTACSm5nih0B2xfQEJ84UrNcp.jpg);"></div>
                    <a onclick="openMovie('A Escuridão', 'https://embedder.net/e/movie?imdb=tt1878841')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Escuridão</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Senhor dos Anéis', 'https://embedder.net/e/movie?imdb=tt0077869')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3rSiabvjCGjkCTHSB3eYgDKKNv2.jpg);"></div>
                    <a onclick="openMovie('O Senhor dos Anéis', 'https://embedder.net/e/movie?imdb=tt0077869')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Senhor dos Anéis</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Senhor dos Anéis: O Retorno do Rei', 'https://embedder.net/e/movie?imdb=tt0167260')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/izPNMzffsgZUvlbiYlPxjFr3TAa.jpg);"></div>
                    <a onclick="openMovie('O Senhor dos Anéis: O Retorno do Rei', 'https://embedder.net/e/movie?imdb=tt0167260')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Senhor dos Anéis: O Retorno do Rei</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Senhor dos Anéis: As Duas Torres', 'https://embedder.net/e/movie?imdb=tt0167261')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/20eUL6eN89SM0U7KPDw8iR82mOT.jpg);"></div>
                    <a onclick="openMovie('O Senhor dos Anéis: As Duas Torres', 'https://embedder.net/e/movie?imdb=tt0167261')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Senhor dos Anéis: As Duas Torres</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Senhor dos Anéis: A Sociedade do Anel', 'https://embedder.net/e/movie?imdb=tt0120737')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/omoMXT3Z7XrQwRZ2OGJGNWbdeEl.jpg);"></div>
                    <a onclick="openMovie('O Senhor dos Anéis: A Sociedade do Anel', 'https://embedder.net/e/movie?imdb=tt0120737')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Senhor dos Anéis: A Sociedade do Anel</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Rua do Medo: 1978 - Parte 2', 'https://embedder.net/e/movie?imdb=tt9701940')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uicSprflqrrhWykOuJjHQ9lSLJ1.jpg);"></div>
                    <a onclick="openMovie('Rua do Medo: 1978 - Parte 2', 'https://embedder.net/e/movie?imdb=tt9701940')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Rua do Medo: 1978 - Parte 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Rua do Medo: 1666 – Parte 3', 'https://embedder.net/e/movie?imdb=tt9701942')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hsX1vt168fNSMSYwTVi8M9O0hLu.jpg);"></div>
                    <a onclick="openMovie('Rua do Medo: 1666 – Parte 3', 'https://embedder.net/e/movie?imdb=tt9701942')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Rua do Medo: 1666 – Parte 3</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Rua do Medo: 1994 - Parte 1', 'https://embedder.net/e/movie?imdb=tt6566576')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kIABUqs2kfFBDa10l2tFxTIKZMH.jpg);"></div>
                    <a onclick="openMovie('Rua do Medo: 1994 - Parte 1', 'https://embedder.net/e/movie?imdb=tt6566576')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Rua do Medo: 1994 - Parte 1</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Como Se Fosse a Primeira Vez', 'https://embedder.net/e/movie?imdb=tt0343660')" class="full-click"></a>  
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xbfB2yzfGIPKBDDFize1Y5acqjm.jpg);"></div>
                    <a onclick="openMovie('Como Se Fosse a Primeira Vez', 'https://embedder.net/e/movie?imdb=tt0343660')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Como Se Fosse a Primeira Vez</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Questão de Tempo', 'https://embedder.net/e/movie?imdb=tt2194499')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uqEzxvGDYNzoQE7rayv7gRXBomt.jpg);"></div>
                    <a onclick="openMovie('Questão de Tempo', 'https://embedder.net/e/movie?imdb=tt2194499')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Questão de Tempo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Terror nos Bastidores', 'https://embedder.net/e/movie?imdb=tt2118624')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/62dY02Dp8CFySosyrn1A4kBCYxu.jpg);"></div>
                    <a onclick="openMovie('Terror nos Bastidores', 'https://embedder.net/e/movie?imdb=tt2118624')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Terror nos Bastidores</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Feitiço do Tempo', 'https://embedder.net/e/movie?imdb=tt0107048')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rhiOgetrHuYAIJkGjReCDkbEBJ5.jpg);"></div>
                    <a onclick="openMovie('Feitiço do Tempo', 'https://embedder.net/e/movie?imdb=tt0107048')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Feitiço do Tempo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('ARQ', 'https://embedder.net/e/movie?imdb=tt5640450')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xA9y9lqXkOJw6RbnAeRoOiG5eSS.jpg);"></div>
                    <a onclick="openMovie('ARQ', 'https://embedder.net/e/movie?imdb=tt5640450')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">ARQ</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Predestinado', 'https://embedder.net/e/movie?imdb=tt2397535')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uvukjvh9w0dtFHacYaRL1YWzFGc.jpg);"></div>
                    <a onclick="openMovie('O Predestinado', 'https://embedder.net/e/movie?imdb=tt2397535')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Predestinado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Contra o Tempo', 'https://embedder.net/e/movie?imdb=tt0945513')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qMQx47D8yRowguSqjRBqHvqVI6y.jpg);"></div>
                    <a onclick="openMovie('Contra o Tempo', 'https://embedder.net/e/movie?imdb=tt0945513')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Contra o Tempo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Antes Que Eu Vá', 'https://embedder.net/e/movie?imdb=tt1691916')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yv2SEabyL9BVVJsmXM52s9kTHLD.jpg);"></div>
                    <a onclick="openMovie('Antes Que Eu Vá', 'https://embedder.net/e/movie?imdb=tt1691916')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Antes Que Eu Vá</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Dilema das Redes', 'https://embedder.net/e/movie?imdb=tt11464826')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4ca2o7afA65YGoc9hsmwobIivsQ.jpg);"></div>
                    <a onclick="openMovie('O Dilema das Redes', 'https://embedder.net/e/movie?imdb=tt11464826')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Dilema das Redes</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Mate ou Morra', 'https://embedder.net/e/movie?imdb=tt7638348')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/b9mTht2VCw0IMXmeeruRdZno3eS.jpg);"></div>
                    <a onclick="openMovie('Mate ou Morra', 'https://embedder.net/e/movie?imdb=tt7638348')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Mate ou Morra</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('No Limite do Amanhã', 'https://embedder.net/e/movie?imdb=tt1631867')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gWn1904gvaQOQHvKAmEKbJ6cIgX.jpg);"></div>
                    <a onclick="openMovie('No Limite do Amanhã', 'https://embedder.net/e/movie?imdb=tt1631867')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">No Limite do Amanhã</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Mapa das Pequenas Coisas Perfeitas', 'https://embedder.net/e/movie?imdb=tt11080108')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sXhkHPAOD14ZtEPoZtJRqLVQKat.jpg);"></div>
                    <a onclick="openMovie('O Mapa das Pequenas Coisas Perfeitas', 'https://embedder.net/e/movie?imdb=tt11080108')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Mapa das Pequenas Coisas Perfeitas</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>                
"""

# Parse o HTML usando BeautifulSoup
soup = BeautifulSoup(html, "html.parser")

# Encontre todos os links que têm um padrão de código IMDb usando regex
imdb_links = soup.find_all("a", {"onclick": re.compile(r"openMovie\('.*?', 'https://embedder\.net/e/movie\?imdb=(.*?)'\)")})

# Extrair e imprimir os códigos IMDb únicos em cada linha
imdb_codes = set(re.findall(r"openMovie\('.*?', 'https://embedder\.net/e/movie\?imdb=(.*?)'\)", str(imdb_links)))

# Imprimir os códigos IMDb únicos em cada linha
for code in imdb_codes:
    print(code)
