from bs4 import BeautifulSoup
import re

html = """
  <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Tigre Branco', 'https://embedder.net/e/movie?imdb=tt6571548')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/FHpjm49uWcwqE3qITgysvBb6sw.jpg);"></div>
                    <a onclick="openMovie('O Tigre Branco', 'https://embedder.net/e/movie?imdb=tt6571548')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Tigre Branco</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Bem-Vindo à Prisão', 'https://embedder.net/e/movie?imdb=tt0454987')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ioLSJT7QImNDbrZtiy5PiJbCz0d.jpg);"></div>
                    <a onclick="openMovie('Bem-Vindo à Prisão', 'https://embedder.net/e/movie?imdb=tt0454987')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Bem-Vindo à Prisão</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('365 Dias', 'https://embedder.net/e/movie?imdb=tt10886166')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3b1uR8Jggt1hWgtBbp42Mt3cwWe.jpg);"></div>
                    <a onclick="openMovie('365 Dias', 'https://embedder.net/e/movie?imdb=tt10886166')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">365 Dias</h5>
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
