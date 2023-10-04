from bs4 import BeautifulSoup
import re

html = """
 <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Confiar', 'https://embedder.net/e/movie?imdb=tt1529572')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ktBSBdEPvo8NJ5QEdCj8baYKmHf.jpg);"></div>
                    <a onclick="openMovie('Confiar', 'https://embedder.net/e/movie?imdb=tt1529572')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Confiar</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Zodíaco', 'https://embedder.net/e/movie?imdb=tt0443706')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/otQHyCjlkcFfvUDPMdJdBMN7Rg5.jpg);"></div>
                    <a onclick="openMovie('Zodíaco', 'https://embedder.net/e/movie?imdb=tt0443706')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Zodíaco</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Herbie: Meu Fusca Turbinado', 'https://embedder.net/e/movie?imdb=tt0400497')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/z3dDSU387L19TNEJkYhYAMjU4Sr.jpg);"></div>
                    <a onclick="openMovie('Herbie: Meu Fusca Turbinado', 'https://embedder.net/e/movie?imdb=tt0400497')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Herbie: Meu Fusca Turbinado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Atirador', 'https://embedder.net/e/movie?imdb=tt0822854')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qluvMxXA2p15s7egazJn9vhX5Gi.jpg);"></div>
                    <a onclick="openMovie('Atirador', 'https://embedder.net/e/movie?imdb=tt0822854')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Atirador</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('THX 1138', 'https://embedder.net/e/movie?imdb=tt0066434')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/25cQH5gZ60BiA5Y91HxoPpnFiY0.jpg);"></div>
                    <a onclick="openMovie('THX 1138', 'https://embedder.net/e/movie?imdb=tt0066434')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">THX 1138</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Duquesa', 'https://embedder.net/e/movie?imdb=tt0864761')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1RdxwvaLd9r7vW4tL47Ay3626hf.jpg);"></div>
                    <a onclick="openMovie('A Duquesa', 'https://embedder.net/e/movie?imdb=tt0864761')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Duquesa</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Hellboy', 'https://embedder.net/e/movie?imdb=tt2274648')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lmh8wXm6f3z7wcRqQ8NSXrB8tMQ.jpg);"></div>
                    <a onclick="openMovie('Hellboy', 'https://embedder.net/e/movie?imdb=tt2274648')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Hellboy</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Hellboy II: O Exército Dourado', 'https://embedder.net/e/movie?imdb=tt0411477')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2ZFnYUkYDlwJQvODkQ0JyTRZDSO.jpg);"></div>
                    <a onclick="openMovie('Hellboy II: O Exército Dourado', 'https://embedder.net/e/movie?imdb=tt0411477')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Hellboy II: O Exército Dourado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Hellboy', 'https://embedder.net/e/movie?imdb=tt0167190')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/aqSzF4WqCDVphxiOlpLGufqJc6j.jpg);"></div>
                    <a onclick="openMovie('Hellboy', 'https://embedder.net/e/movie?imdb=tt0167190')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Hellboy</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Espécies em Perigo', 'https://embedder.net/e/movie?imdb=tt13863334')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/irlz2mCcTUZXMLTUGtHTs1JwnFx.jpg);"></div>
                    <a onclick="openMovie('Espécies em Perigo', 'https://embedder.net/e/movie?imdb=tt13863334')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Espécies em Perigo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Raça e Redenção', 'https://embedder.net/e/movie?imdb=tt4807408')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2SZw4eBmDRDGjgG7ACxBdiiKBpO.jpg);"></div>
                    <a onclick="openMovie('Raça e Redenção', 'https://embedder.net/e/movie?imdb=tt4807408')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Raça e Redenção</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Lista de Schindler', 'https://embedder.net/e/movie?imdb=tt0108052')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bGhhNzJYDsuLruNN5bJ2PvLcMiq.jpg);"></div>
                    <a onclick="openMovie('A Lista de Schindler', 'https://embedder.net/e/movie?imdb=tt0108052')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Lista de Schindler</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Chinatown', 'https://embedder.net/e/movie?imdb=tt0071315')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mQJz8J4naOA7RmCtypTPjgXZIMY.jpg);"></div>
                    <a onclick="openMovie('Chinatown', 'https://embedder.net/e/movie?imdb=tt0071315')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Chinatown</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Os Espetaculares', 'https://embedder.net/e/movie?imdb=tt3583336')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6tmPf0RhrOfhOriE93UHoLgYur5.jpg);"></div>
                    <a onclick="openMovie('Os Espetaculares', 'https://embedder.net/e/movie?imdb=tt3583336')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Os Espetaculares</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Histórias Cruzadas', 'https://embedder.net/e/movie?imdb=tt1454029')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7iWfEm9VOeX8AAnC7F1ApxRDTfw.jpg);"></div>
                    <a onclick="openMovie('Histórias Cruzadas', 'https://embedder.net/e/movie?imdb=tt1454029')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Histórias Cruzadas</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Lutador de Rua', 'https://embedder.net/e/movie?imdb=tt0073092')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mdPkVDvMqqmg5cJLRF5deXhzdyY.jpg);"></div>
                    <a onclick="openMovie('Lutador de Rua', 'https://embedder.net/e/movie?imdb=tt0073092')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Lutador de Rua</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Menininha', 'https://embedder.net/e/movie?imdb=tt5127206')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oSmvE4dceUUo6hHC2v533M3k2Vs.jpg);"></div>
                    <a onclick="openMovie('A Menininha', 'https://embedder.net/e/movie?imdb=tt5127206')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Menininha</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Colmeia', 'https://embedder.net/e/movie?imdb=tt3745906')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/w6kJXPELCTjcGe1nSEHQgAoVZVX.jpg);"></div>
                    <a onclick="openMovie('A Colmeia', 'https://embedder.net/e/movie?imdb=tt3745906')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Colmeia</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Thor: Ragnarok', 'https://embedder.net/e/movie?imdb=tt3501632')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jrF3WW4lJkIFtIY3nIyapZ7q0N8.jpg);"></div>
                    <a onclick="openMovie('Thor: Ragnarok', 'https://embedder.net/e/movie?imdb=tt3501632')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Thor: Ragnarok</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Malévola: Dona do Mal', 'https://embedder.net/e/movie?imdb=tt4777008')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/llHTFUeUCWmkW5fR4J9kpa6Asep.jpg);"></div>
                    <a onclick="openMovie('Malévola: Dona do Mal', 'https://embedder.net/e/movie?imdb=tt4777008')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Malévola: Dona do Mal</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Fuga pela Fronteira', 'https://embedder.net/e/movie?imdb=tt9348848')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yTrKZdCoARyXmuDBX7rahgrydhm.jpg);"></div>
                    <a onclick="openMovie('Fuga pela Fronteira', 'https://embedder.net/e/movie?imdb=tt9348848')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Fuga pela Fronteira</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Malévola', 'https://embedder.net/e/movie?imdb=tt1587310')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kqifqRhUWjx5WT0OJPxWbcnzc2O.jpg);"></div>
                    <a onclick="openMovie('Malévola', 'https://embedder.net/e/movie?imdb=tt1587310')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Malévola</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Casa do Medo: Incidente em Ghostland', 'https://embedder.net/e/movie?imdb=tt6195094')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/j7p3JKIAwysHpZsmdINLNeVjApg.jpg);"></div>
                    <a onclick="openMovie('A Casa do Medo: Incidente em Ghostland', 'https://embedder.net/e/movie?imdb=tt6195094')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Casa do Medo: Incidente em Ghostland</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Vira-Lata', 'https://embedder.net/e/movie?imdb=tt0467110')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lcedkHKYYatdNrUE91CMDahxAg9.jpg);"></div>
                    <a onclick="openMovie('Vira-Lata', 'https://embedder.net/e/movie?imdb=tt0467110')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Vira-Lata</h5>
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
