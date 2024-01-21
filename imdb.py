from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sequestrando Chaplin', 'https://embedder.net/e/movie?imdb=tt10205046')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zjzrYxwyxzWMcdeGQpKCutQP42o.jpg);"></div>
<a onclick="openMovie('Sequestrando Chaplin', 'https://embedder.net/e/movie?imdb=tt10205046')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sequestrando Chaplin</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Mais Um Tiro Certo', 'https://embedder.net/e/movie?imdb=tt27110516')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zkHkMLoC41euiPZG62wslcHLreH.jpg);"></div>
<a onclick="openMovie('Mais Um Tiro Certo', 'https://embedder.net/e/movie?imdb=tt27110516')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Mais Um Tiro Certo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Filha do Rei do Pântano', 'https://embedder.net/e/movie?imdb=tt8002382')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rm6iGsOUe9v2I0jqHyGRUliAMJO.jpg);"></div>
<a onclick="openMovie('A Filha do Rei do Pântano', 'https://embedder.net/e/movie?imdb=tt8002382')" class="media-play"><i class="icofont-ui-play"></i></a>     
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Filha do Rei do Pântano</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Lift: Roubo nas Alturas', 'https://embedder.net/e/movie?imdb=tt14371878')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ca74jjIYRVDdsnlWk8JzyVY49dE.jpg);"></div>
<a onclick="openMovie('Lift: Roubo nas Alturas', 'https://embedder.net/e/movie?imdb=tt14371878')" class="media-play"><i class="icofont-ui-play"></i></a>      
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Lift: Roubo nas Alturas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Jogo do Disfarce', 'https://embedder.net/e/movie?imdb=tt12964320')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rHS23wVWUrLwKu8Fu6oLH5uQJTO.jpg);"></div>
<a onclick="openMovie('O Jogo do Disfarce', 'https://embedder.net/e/movie?imdb=tt12964320')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Jogo do Disfarce</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Liga da Justiça: Crise nas Infinitas Terras - Parte 1', 'https://embedder.net/e/movie?imdb=tt29195117')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vsiDOIO4APrPQQ4xx8vJW8N0uHV.jpg);"></div>
<a onclick="openMovie('Liga da Justiça: Crise nas Infinitas Terras - Parte 1', 'https://embedder.net/e/movie?imdb=tt29195117')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Liga da Justiça: Crise nas Infinitas Terras - Parte 1</h5>
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
