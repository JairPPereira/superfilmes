from bs4 import BeautifulSoup
import re

html = """
  <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Som ao Redor', 'https://embedder.net/e/movie?imdb=tt2190367')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qVSxFFAv7IoTccP7MTk5L92Gfon.jpg);"></div>
                    <a onclick="openMovie('O Som ao Redor', 'https://embedder.net/e/movie?imdb=tt2190367')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Som ao Redor</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Praia do Futuro', 'https://embedder.net/e/movie?imdb=tt2199543')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uDyrxgzaCCv0LWNEzsrQ3MT3vnt.jpg);"></div>
                    <a onclick="openMovie('Praia do Futuro', 'https://embedder.net/e/movie?imdb=tt2199543')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Praia do Futuro</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Paraísos Artificiais', 'https://embedder.net/e/movie?imdb=tt2102396')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/v4jVEhbQ0dbBFFWOlaPUhOYhDOf.jpg);"></div>
                    <a onclick="openMovie('Paraísos Artificiais', 'https://embedder.net/e/movie?imdb=tt2102396')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Paraísos Artificiais</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Redemoinho', 'https://embedder.net/e/movie?imdb=tt3108658')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2CKKVhJq1Qu83HWeG4s3B8cRIIm.jpg);"></div>
                    <a onclick="openMovie('Redemoinho', 'https://embedder.net/e/movie?imdb=tt3108658')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Redemoinho</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Speed Racer', 'https://embedder.net/e/movie?imdb=tt0811080')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/arJV6ypZidAn4qiJXrvow3KbBqZ.jpg);"></div>
                    <a onclick="openMovie('Speed Racer', 'https://embedder.net/e/movie?imdb=tt0811080')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Speed Racer</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Meu Malvado Favorito', 'https://embedder.net/e/movie?imdb=tt1323594')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rYZzutMXxvirK9gK01iLo3Blaj3.jpg);"></div>
                    <a onclick="openMovie('Meu Malvado Favorito', 'https://embedder.net/e/movie?imdb=tt1323594')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Meu Malvado Favorito</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Meu Malvado Favorito 2', 'https://embedder.net/e/movie?imdb=tt1690953')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7mYMq6OQyum1wAiUI7i6w78YKEO.jpg);"></div>
                    <a onclick="openMovie('Meu Malvado Favorito 2', 'https://embedder.net/e/movie?imdb=tt1690953')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Meu Malvado Favorito 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Carter', 'https://embedder.net/e/movie?imdb=tt21237030')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cPKmoSTrPjvSjvKHvnMm1qs0Upa.jpg);"></div>
                    <a onclick="openMovie('Carter', 'https://embedder.net/e/movie?imdb=tt21237030')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Carter</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Campo do Medo', 'https://embedder.net/e/movie?imdb=tt4687108')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wG0tORn6XqSwjN2tBAZJrFTh7n0.jpg);"></div>
                    <a onclick="openMovie('Campo do Medo', 'https://embedder.net/e/movie?imdb=tt4687108')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Campo do Medo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Família do Futuro', 'https://embedder.net/e/movie?imdb=tt0396555')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uR9rV69x4saB2vh9yfgQ5PA5E0r.jpg);"></div>
                    <a onclick="openMovie('A Família do Futuro', 'https://embedder.net/e/movie?imdb=tt0396555')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Família do Futuro</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Detona Ralph', 'https://embedder.net/e/movie?imdb=tt1772341')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9OGpoSaGGwbWSFQVFaVGakLyaoK.jpg);"></div>
                    <a onclick="openMovie('Detona Ralph', 'https://embedder.net/e/movie?imdb=tt1772341')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Detona Ralph</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Galinho Chicken Little', 'https://embedder.net/e/movie?imdb=tt0371606')" class="full-click"></a>      
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fUCBkuNWpAIfH6yhuRzujy5Zjv0.jpg);"></div>
                    <a onclick="openMovie('O Galinho Chicken Little', 'https://embedder.net/e/movie?imdb=tt0371606')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Galinho Chicken Little</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Os Incríveis', 'https://embedder.net/e/movie?imdb=tt0317705')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/z8k5EhZZTLsCRF8NWjSe6snWNZg.jpg);"></div>
                    <a onclick="openMovie('Os Incríveis', 'https://embedder.net/e/movie?imdb=tt0317705')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Os Incríveis</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Ratatouille', 'https://embedder.net/e/movie?imdb=tt0382932')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lpyqGZXjaPpr2dzkD9XD5DUGMkN.jpg);"></div>
                    <a onclick="openMovie('Ratatouille', 'https://embedder.net/e/movie?imdb=tt0382932')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Ratatouille</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Círculo de Fogo', 'https://embedder.net/e/movie?imdb=tt1663662')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uFaWzdxzITZxHKaKwyG26QfzHiG.jpg);"></div>
                    <a onclick="openMovie('Círculo de Fogo', 'https://embedder.net/e/movie?imdb=tt1663662')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Círculo de Fogo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Instinto Secreto', 'https://embedder.net/e/movie?imdb=tt0780571')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uwgrln1BB1KZqvktSO6HtpW62Qk.jpg);"></div>
                    <a onclick="openMovie('Instinto Secreto', 'https://embedder.net/e/movie?imdb=tt0780571')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Instinto Secreto</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Assassinato de Nicole Brown Simpson', 'https://embedder.net/e/movie?imdb=tt8415352')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sUOvmVshnmz13Qa0uWvkAeYnejp.jpg);"></div>
                    <a onclick="openMovie('O Assassinato de Nicole Brown Simpson', 'https://embedder.net/e/movie?imdb=tt8415352')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Assassinato de Nicole Brown Simpson</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Que Ficou Perdido', 'https://embedder.net/e/movie?imdb=tt8226892')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3rj5Oky3akGa6f0IGTk4o9ATrrL.jpg);"></div>
                    <a onclick="openMovie('O Que Ficou Perdido', 'https://embedder.net/e/movie?imdb=tt8226892')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Que Ficou Perdido</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Nível Hard', 'https://embedder.net/e/movie?imdb=tt8675288')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lwDNwvzXkPslQTRRCEoPNnNo76T.jpg);"></div>
                    <a onclick="openMovie('Nível Hard', 'https://embedder.net/e/movie?imdb=tt8675288')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Nível Hard</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Os Mercenários 3', 'https://embedder.net/e/movie?imdb=tt2333784')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vd22faXhHRCr8d1FSiXuFfnpSKv.jpg);"></div>
                    <a onclick="openMovie('Os Mercenários 3', 'https://embedder.net/e/movie?imdb=tt2333784')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Os Mercenários 3</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Os Mercenários 2', 'https://embedder.net/e/movie?imdb=tt1764651')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gEDpD6l2CJ8aLbtYLL2ecQ3yk09.jpg);"></div>
                    <a onclick="openMovie('Os Mercenários 2', 'https://embedder.net/e/movie?imdb=tt1764651')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Os Mercenários 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Os Mercenários', 'https://embedder.net/e/movie?imdb=tt1320253')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tTfRV9lOBi3YDJpYXqbj4Ai04g2.jpg);"></div>
                    <a onclick="openMovie('Os Mercenários', 'https://embedder.net/e/movie?imdb=tt1320253')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Os Mercenários</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Sol da Meia-noite', 'https://embedder.net/e/movie?imdb=tt4799066')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1x8tN7XMxWgnJQnjZRxwMeiEWtF.jpg);"></div>
                    <a onclick="openMovie('Sol da Meia-noite', 'https://embedder.net/e/movie?imdb=tt4799066')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Sol da Meia-noite</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Kubo e as Cordas Mágicas', 'https://embedder.net/e/movie?imdb=tt4302938')" class="full-click"></a>      
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/g7QMdkgrqVJYyUoiTcAz27vzpVd.jpg);"></div>
                    <a onclick="openMovie('Kubo e as Cordas Mágicas', 'https://embedder.net/e/movie?imdb=tt4302938')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Kubo e as Cordas Mágicas</h5>
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
