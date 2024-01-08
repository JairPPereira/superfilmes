from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Filha do Papai Noel', 'https://embedder.net/e/movie?imdb=tt7315570')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/aLBNhfYtyBOHdePncblmijrDljQ.jpg);"></div>
<a onclick="openMovie('A Filha do Papai Noel', 'https://embedder.net/e/movie?imdb=tt7315570')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Filha do Papai Noel</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Agradecimento e Desculpas', 'https://embedder.net/e/movie?imdb=tt23735436')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/24WSZJyiQbLuH1esYnVhJOvQXNx.jpg);"></div>
<a onclick="openMovie('Agradecimento e Desculpas', 'https://embedder.net/e/movie?imdb=tt23735436')" class="media-play"><i class="icofont-ui-play"></i></a>    
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Agradecimento e Desculpas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Afonso Padilha: Gerações', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/e0e0pI3OoaNEfLx6z4FkUkzlJEK.jpg);"></div>
<a onclick="openMovie('Afonso Padilha: Gerações', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Afonso Padilha: Gerações</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Câmera Indiscreta', 'https://embedder.net/e/movie?imdb=tt10314344')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jyOSszi8FsMetUONo6VB6Qutnle.jpg);"></div>
<a onclick="openMovie('Câmera Indiscreta', 'https://embedder.net/e/movie?imdb=tt10314344')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Câmera Indiscreta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Curry com Cianeto', 'https://embedder.net/e/movie?imdb=tt30177031')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sdXu8YeDqg1qxEP9LJuTIFBtR5L.jpg);"></div>
<a onclick="openMovie('Curry com Cianeto', 'https://embedder.net/e/movie?imdb=tt30177031')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Curry com Cianeto</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Desejo e Obsessão', 'https://embedder.net/e/movie?imdb=tt9733108')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4CMYFwp6tJuufQViFceAtGE9rOZ.jpg);"></div>
<a onclick="openMovie('Desejo e Obsessão', 'https://embedder.net/e/movie?imdb=tt9733108')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Desejo e Obsessão</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Desencaixados', 'https://embedder.net/e/movie?imdb=tt15434074')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qQo7PrvRRGSnNYJqFX0cd5LGiy3.jpg);"></div>
<a onclick="openMovie('Desencaixados', 'https://embedder.net/e/movie?imdb=tt15434074')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Desencaixados</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Feriado Sangrento', 'https://embedder.net/e/movie?imdb=tt1448754')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xPLOOSM49kz4LAlCbg3CsgD0ayD.jpg);"></div>
<a onclick="openMovie('Feriado Sangrento', 'https://embedder.net/e/movie?imdb=tt1448754')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Feriado Sangrento</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Jornada Para Belém', 'https://embedder.net/e/movie?imdb=tt13848804')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tv0Ta1lAIZYuLKAcQhnRTe8bUTV.jpg);"></div>
<a onclick="openMovie('Jornada Para Belém', 'https://embedder.net/e/movie?imdb=tt13848804')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Jornada Para Belém</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Marcados: A História do Racismo nos EUA', 'https://embedder.net/e/movie?imdb=tt13871094')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zKr6pPEtvyc0wGiiFseLNPvYhz9.jpg);"></div>
<a onclick="openMovie('Marcados: A História do Racismo nos EUA', 'https://embedder.net/e/movie?imdb=tt13871094')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Marcados: A História do Racismo nos EUA</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Meu Cunhado é Um Vampiro', 'https://embedder.net/e/movie?imdb=tt23744022')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/w1hyHgP4fyrW9tEqlX472bMgLO9.jpg);"></div>
<a onclick="openMovie('Meu Cunhado é Um Vampiro', 'https://embedder.net/e/movie?imdb=tt23744022')" class="media-play"><i class="icofont-ui-play"></i></a>     
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Meu Cunhado é Um Vampiro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Clube dos Milagres', 'https://embedder.net/e/movie?imdb=tt12712604')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fQwEEKyZ5WVIs9UscUg7fUbyduW.jpg);"></div>
<a onclick="openMovie('O Clube dos Milagres', 'https://embedder.net/e/movie?imdb=tt12712604')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Clube dos Milagres</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Prancer: Um Conto de Natal', 'https://embedder.net/e/movie?imdb=tt14668196')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vdubjRZoszEOHFYr6FpIdqrKvxJ.jpg);"></div>
<a onclick="openMovie('Prancer: Um Conto de Natal', 'https://embedder.net/e/movie?imdb=tt14668196')" class="media-play"><i class="icofont-ui-play"></i></a>   
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Prancer: Um Conto de Natal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sol Lunar', 'https://embedder.net/e/movie?imdb=tt14999006')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/x29rKMGLUrQ2W2U8oNPpMC2guwR.jpg);"></div>
<a onclick="openMovie('Sol Lunar', 'https://embedder.net/e/movie?imdb=tt14999006')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sol Lunar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Natal 5 Estrelas', 'https://embedder.net/e/movie?imdb=tt22333954')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rg2qXwnGHm6H2kYiy66yJqDo0Sh.jpg);"></div>
<a onclick="openMovie('Um Natal 5 Estrelas', 'https://embedder.net/e/movie?imdb=tt22333954')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Natal 5 Estrelas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Vivo ou Morto', 'https://embedder.net/e/movie?imdb=tt30613964')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fl6akfUcmfuTgLw2FromKDct8tS.jpg);"></div>
<a onclick="openMovie('Vivo ou Morto', 'https://embedder.net/e/movie?imdb=tt30613964')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Vivo ou Morto</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Jester: A Morte Sorri', 'https://embedder.net/e/movie?imdb=tt26533869')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xMvd6QBbXFsRG1LHoEVJafWj6Xj.jpg);"></div>
<a onclick="openMovie('Jester: A Morte Sorri', 'https://embedder.net/e/movie?imdb=tt26533869')" class="media-play"><i class="icofont-ui-play"></i></a>        
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Jester: A Morte Sorri</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Maestro', 'https://embedder.net/e/movie?imdb=tt5535276')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kxj7rMco6RNYsVcNwuGAIlfWu64.jpg);"></div>
<a onclick="openMovie('Maestro', 'https://embedder.net/e/movie?imdb=tt5535276')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Maestro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Mussum: O Filmis', 'https://embedder.net/e/movie?imdb=tt18560202')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/olETegpIsLwrApT1ldOKIwFE8lY.jpg);"></div>
<a onclick="openMovie('Mussum: O Filmis', 'https://embedder.net/e/movie?imdb=tt18560202')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Mussum: O Filmis</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Perder é Ganhar um Pouco', 'https://embedder.net/e/movie?imdb=tt30422156')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/d45rHJsby26TSakc5ahkdmE72YH.jpg);"></div>
<a onclick="openMovie('Perder é Ganhar um Pouco', 'https://embedder.net/e/movie?imdb=tt30422156')" class="media-play"><i class="icofont-ui-play"></i></a>     
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Perder é Ganhar um Pouco</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Plano em Família', 'https://embedder.net/e/movie?imdb=tt16431870')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3CezGI4ORSgVKk5Ch3UUWtL7SET.jpg);"></div>
<a onclick="openMovie('Plano em Família', 'https://embedder.net/e/movie?imdb=tt16431870')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Plano em Família</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Saltburn', 'https://embedder.net/e/movie?imdb=tt17351924')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qjhahNLSZ705B5JP92YMEYPocPz.jpg);"></div>
<a onclick="openMovie('Saltburn', 'https://embedder.net/e/movie?imdb=tt17351924')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Saltburn</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Silêncio da Vingança', 'https://embedder.net/e/movie?imdb=tt15799866')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7W2fdpbWV2MiaCpjYakbudP3Ywx.jpg);"></div>
<a onclick="openMovie('O Silêncio da Vingança', 'https://embedder.net/e/movie?imdb=tt15799866')" class="media-play"><i class="icofont-ui-play"></i></a>       
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Silêncio da Vingança</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sistema Bruto', 'https://embedder.net/e/movie?imdb=tt15129154')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hEK0FLgnOXqy4RT0qvRMJi5iSAF.jpg);"></div>
<a onclick="openMovie('Sistema Bruto', 'https://embedder.net/e/movie?imdb=tt15129154')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sistema Bruto</h5>
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
