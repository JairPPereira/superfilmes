from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Lima Barreto ao Terceiro Dia', 'https://embedder.net/e/movie?imdb=tt10925780')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9Hld1VFMK2sUdwXSwQ6VjhLUkvJ.jpg);"></div>
    <a onclick="openMovie('Lima Barreto ao Terceiro Dia', 'https://embedder.net/e/movie?imdb=tt10925780')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Lima Barreto ao Terceiro Dia</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Loop Track', 'https://embedder.net/e/movie?imdb=tt13592970')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7cCztHZK3VKCECAV9YRDq1yAOP8.jpg);"></div>
    <a onclick="openMovie('Loop Track', 'https://embedder.net/e/movie?imdb=tt13592970')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Loop Track</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('maboroshi', 'https://embedder.net/e/movie?imdb=tt14935892')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/piDXkSvBA56NTIC6D3uA1eECwtd.jpg);"></div>
    <a onclick="openMovie('maboroshi', 'https://embedder.net/e/movie?imdb=tt14935892')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">maboroshi</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Meu Peda�o de Terra', 'https://embedder.net/e/movie?imdb=tt13625932')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/s3WU7sSonmAxGsEggPwuiOHRv9m.jpg);"></div>
    <a onclick="openMovie('Meu Peda�o de Terra', 'https://embedder.net/e/movie?imdb=tt13625932')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Meu Peda�o de Terra</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Nina: A Hero�na dos Sete Mares', 'https://embedder.net/e/movie?imdb=tt22360682')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hCRZCkQScaK0cg2tfgqNZKYgff4.jpg);"></div>
    <a onclick="openMovie('Nina: A Hero�na dos Sete Mares', 'https://embedder.net/e/movie?imdb=tt22360682')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Nina: A Hero�na dos Sete Mares</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('57 Segundos', 'https://embedder.net/e/movie?imdb=tt18083578')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kRLNtJ0dWUHhNt20NijeWhnLJ5E.jpg);"></div>
    <a onclick="openMovie('57 Segundos', 'https://embedder.net/e/movie?imdb=tt18083578')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">57 Segundos</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('A Felicidade das Coisas', 'https://embedder.net/e/movie?imdb=tt14667700')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8Jjd0ebhZwHFT0PYsOVVRBGQ1su.jpg);"></div>
    <a onclick="openMovie('A Felicidade das Coisas', 'https://embedder.net/e/movie?imdb=tt14667700')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">A Felicidade das Coisas</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('A F�ria de Dr�cula', 'https://embedder.net/e/movie?imdb=tt27547215')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zOThazY5PDAjhYftw43nv17Gb57.jpg);"></div>
    <a onclick="openMovie('A F�ria de Dr�cula', 'https://embedder.net/e/movie?imdb=tt27547215')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">A F�ria de Dr�cula</h5>
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
