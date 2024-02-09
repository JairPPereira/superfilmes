from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Dinheiro F�cil', 'https://embedder.net/e/movie?imdb=tt13957560')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/l3pI4Nbe9vRC2cd7WsHtiMGZW0T.jpg);"></div>
    <a onclick="openMovie('Dinheiro F�cil', 'https://embedder.net/e/movie?imdb=tt13957560')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Dinheiro F�cil</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Um Homem Implac�vel', 'https://embedder.net/e/movie?imdb=tt21387514')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/woL8DLY4NLJCg8qKiSrOF4QfMkz.jpg);"></div>
    <a onclick="openMovie('Um Homem Implac�vel', 'https://embedder.net/e/movie?imdb=tt21387514')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Um Homem Implac�vel</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Mamonas Assassinas: O Filme', 'https://embedder.net/e/movie?imdb=tt29713426')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ayrEg6LdzNjCSdgHGMlEihzwjJg.jpg);"></div>
    <a onclick="openMovie('Mamonas Assassinas: O Filme', 'https://embedder.net/e/movie?imdb=tt29713426')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Mamonas Assassinas: O Filme</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Menino e a Gar�a', 'https://embedder.net/e/movie?imdb=tt6587046')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qPNmxw9Ag66rmaYPKDpob9HIpth.jpg);"></div>
    <a onclick="openMovie('O Menino e a Gar�a', 'https://embedder.net/e/movie?imdb=tt6587046')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Menino e a Gar�a</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
"""

# Parse o HTML usando BeautifulSoup
soup = BeautifulSoup(html, "html.parser")

# Encontre todos os links que têm um padrão de código IMDb usando regex
imdb_links = soup.find_all("a", {"onclick": re.compile(
    r"openMovie\('.*?', 'https://embedder\.net/e/movie\?imdb=(.*?)'\)")})

# Extrair e imprimir os códigos IMDb únicos em cada linha
imdb_codes = set(re.findall(
    r"openMovie\('.*?', 'https://embedder\.net/e/movie\?imdb=(.*?)'\)", str(imdb_links)))

# Imprimir os códigos IMDb únicos em cada linha
for code in imdb_codes:
    print(code)
