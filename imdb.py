from bs4 import BeautifulSoup
import re

html = """
    <div class="media-box">
    <a onclick="openMovie('Desconectados', 'https://embedder.net/e/movie?imdb=tt22442442')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8Wad2HeJg4Y67dFRGC6oGKqLJWO.jpg);"></div>
    <a onclick="openMovie('Desconectados', 'https://embedder.net/e/movie?imdb=tt22442442')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Desconectados</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Amor em Tempos de Polarização', 'https://embedder.net/e/movie?imdb=tt20816202')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5KL3ewJAgjoXrThUBJfQadGq6B.jpg);"></div>
    <a onclick="openMovie('Amor em Tempos de Polarização', 'https://embedder.net/e/movie?imdb=tt20816202')" class="media-play"><i class="icofont-ui-play"></i></a>       
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Amor em Tempos de Polarização</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('30 Noites com a Minha Ex', 'https://embedder.net/e/movie?imdb=tt15977950')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9GUOSsdQrchL57N4HTAncDEWxKO.jpg);"></div>
    <a onclick="openMovie('30 Noites com a Minha Ex', 'https://embedder.net/e/movie?imdb=tt15977950')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">30 Noites com a Minha Ex</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('ผ้าผีบอก', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/o1ZqapMkAqIRoJMRecwbpeb1FkD.jpg);"></div>
    <a onclick="openMovie('ผ้าผีบอก', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">ผ้าผีบอก</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('暴走财神3', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rOb04vA8BxnpDN5A8Wvb4BnFhTg.jpg);"></div>
    <a onclick="openMovie('暴走财神3', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">暴走财神3</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('ポプラン', 'https://embedder.net/e/movie?imdb=tt13167612')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hZDBIMkmKLDopCMPTPLAkhF6Bhs.jpg);"></div>
    <a onclick="openMovie('ポプラン', 'https://embedder.net/e/movie?imdb=tt13167612')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">ポプラン</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Festival dos Trovadores', 'https://embedder.net/e/movie?imdb=tt15335282')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/70JB1IwPg5Ivf2D1Txk2VTAbbVI.jpg);"></div>
    <a onclick="openMovie('O Festival dos Trovadores', 'https://embedder.net/e/movie?imdb=tt15335282')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Festival dos Trovadores</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Segundo Homem', 'https://embedder.net/e/movie?imdb=tt12935690')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9Yw0YP4pbWbbGBcHmNvfCA97ZRD.jpg);"></div>
    <a onclick="openMovie('O Segundo Homem', 'https://embedder.net/e/movie?imdb=tt12935690')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Segundo Homem</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Mestre das Sombras', 'https://embedder.net/e/movie?imdb=tt19879786')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yFQ3mmGtZsNluNwfbh8i35b8up.jpg);"></div>
    <a onclick="openMovie('O Mestre das Sombras', 'https://embedder.net/e/movie?imdb=tt19879786')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Mestre das Sombras</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Scarlett Cross: Agents of D.E.A.T.H.', 'https://embedder.net/e/movie?imdb=tt4962720')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4gOo5hViQ1rK4kom6z0QawuZ66H.jpg);"></div>
    <a onclick="openMovie('Scarlett Cross: Agents of D.E.A.T.H.', 'https://embedder.net/e/movie?imdb=tt4962720')" class="media-play"><i class="icofont-ui-play"></i></a> 
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Scarlett Cross: Agents of D.E.A.T.H.</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Downton Abbey II: Uma Nova Era', 'https://embedder.net/e/movie?imdb=tt11703710')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bbYN97IJhezFG9bGnSSG42Cz3lm.jpg);"></div>
    <a onclick="openMovie('Downton Abbey II: Uma Nova Era', 'https://embedder.net/e/movie?imdb=tt11703710')" class="media-play"><i class="icofont-ui-play"></i></a>      
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Downton Abbey II: Uma Nova Era</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Ela Disse', 'https://embedder.net/e/movie?imdb=tt11198810')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8BNJjZRfNoD0bskwuY3Oekzz2Ih.jpg);"></div>
    <a onclick="openMovie('Ela Disse', 'https://embedder.net/e/movie?imdb=tt11198810')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Ela Disse</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Notre-Dame: Desastre em Paris', 'https://embedder.net/e/movie?imdb=tt12264966')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4Qe6fhD4seSPhprEx6VPTjfIXWo.jpg);"></div>
    <a onclick="openMovie('Notre-Dame: Desastre em Paris', 'https://embedder.net/e/movie?imdb=tt12264966')" class="media-play"><i class="icofont-ui-play"></i></a>       
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Notre-Dame: Desastre em Paris</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('BlackBerry', 'https://embedder.net/e/movie?imdb=tt21867434')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/neV35lK7em4rIY9QIoH1cruErPA.jpg);"></div>
    <a onclick="openMovie('BlackBerry', 'https://embedder.net/e/movie?imdb=tt21867434')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">BlackBerry</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Diário de um Banana no Natal: Casa dos Horrores', 'https://embedder.net/e/movie?imdb=tt29033964')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1tbFuwWZOcAXySQ2A1KpxExUirH.jpg);"></div>
    <a onclick="openMovie('Diário de um Banana no Natal: Casa dos Horrores', 'https://embedder.net/e/movie?imdb=tt29033964')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Diário de um Banana no Natal: Casa dos Horrores</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Mavka: Aventura na Floresta', 'https://embedder.net/e/movie?imdb=tt6685538')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/adyriBXnBuhdRgAllYAurnDQtQb.jpg);"></div>
    <a onclick="openMovie('Mavka: Aventura na Floresta', 'https://embedder.net/e/movie?imdb=tt6685538')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Mavka: Aventura na Floresta</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Missão Condor', 'https://embedder.net/e/movie?imdb=tt8032034')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dX4zUmTl86s1ao92aKJG1pbrjhO.jpg);"></div>
    <a onclick="openMovie('Missão Condor', 'https://embedder.net/e/movie?imdb=tt8032034')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Missão Condor</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Navio de Sangue', 'https://embedder.net/e/movie?imdb=tt30096240')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/z40Iwyn9XpwUumPnA4BmGMpvDRF.jpg);"></div>
    <a onclick="openMovie('Navio de Sangue', 'https://embedder.net/e/movie?imdb=tt30096240')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Navio de Sangue</h5>
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
