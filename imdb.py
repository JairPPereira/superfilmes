from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('A Fada do Dente', 'https://embedder.net/e/movie?imdb=tt20199226')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7Biyu5aP0o86GjxnffsHThYN4h1.jpg);"></div>
    <a onclick="openMovie('A Fada do Dente', 'https://embedder.net/e/movie?imdb=tt20199226')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">A Fada do Dente</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('As Ladras', 'https://embedder.net/e/movie?imdb=tt21638298')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wnLJ7nVObgbAD7cgF87XW1t9JT2.jpg);"></div>
    <a onclick="openMovie('As Ladras', 'https://embedder.net/e/movie?imdb=tt21638298')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">As Ladras</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('David contra os Bancos', 'https://embedder.net/e/movie?imdb=tt14308636')" class="full-click"></a> 
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nYM7ooxIqyMcywcC1QDanyc9Hh8.jpg);"></div>
    <a onclick="openMovie('David contra os Bancos', 'https://embedder.net/e/movie?imdb=tt14308636')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">David contra os Bancos</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Nuovo Olimpo', 'https://embedder.net/e/movie?imdb=tt18394610')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3nx8pSvAARYOLlZ2MNBlH7vW9jv.jpg);"></div>
    <a onclick="openMovie('Nuovo Olimpo', 'https://embedder.net/e/movie?imdb=tt18394610')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Nuovo Olimpo</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Paralisia', 'https://embedder.net/e/movie?imdb=tt24870072')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cjEpz3rZNOae9SghNhoUqxpEjlY.jpg);"></div>
    <a onclick="openMovie('Paralisia', 'https://embedder.net/e/movie?imdb=tt24870072')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Paralisia</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Retorno a Seul', 'https://embedder.net/e/movie?imdb=tt19719836')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ylWKMdWk4Ac30JzPP4fx7RIEEOX.jpg);"></div>
    <a onclick="openMovie('Retorno a Seul', 'https://embedder.net/e/movie?imdb=tt19719836')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Retorno a Seul</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Temporada de Furacões', 'https://embedder.net/e/movie?imdb=tt28657882')" class="full-click"></a>  
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bbfcDxGCvCuhMphluVOMkuPy6hF.jpg);"></div>
    <a onclick="openMovie('Temporada de Furacões', 'https://embedder.net/e/movie?imdb=tt28657882')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Temporada de Furacões</h5>
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
