from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ponyo - Uma Amizade que Veio do Mar', 'https://embedder.net/e/movie?imdb=tt0876563')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cvpsmNWc8nyePJMbyMc9X5lLN6L.jpg);"></div>
<a onclick="openMovie('Ponyo - Uma Amizade que Veio do Mar', 'https://embedder.net/e/movie?imdb=tt0876563')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ponyo - Uma Amizade que Veio do Mar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Vilã', 'https://embedder.net/e/movie?imdb=tt6777338')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sU2fQEZ6paXXxJ4CKiUa0hbOIx0.jpg);"></div>
<a onclick="openMovie('A Vilã', 'https://embedder.net/e/movie?imdb=tt6777338')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Vilã</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Lupin III: O Segredo de Mamo', 'https://embedder.net/e/movie?imdb=tt0078187')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fMLbX1RdVGDyJn9eraKa7HzaaEj.jpg);"></div>
<a onclick="openMovie('Lupin III: O Segredo de Mamo', 'https://embedder.net/e/movie?imdb=tt0078187')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Lupin III: O Segredo de Mamo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Lupin III: O Castelo de Cagliostro', 'https://embedder.net/e/movie?imdb=tt0079833')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zQRfJDWbSh3C3bGw34QHJeUnlZF.jpg);"></div>
<a onclick="openMovie('Lupin III: O Castelo de Cagliostro', 'https://embedder.net/e/movie?imdb=tt0079833')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Lupin III: O Castelo de Cagliostro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Fazenda Maluca 2: Queijo de Cabra', 'https://embedder.net/e/movie?imdb=tt2491648')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zbqvfoCo4q1DrMzzc4kdocyZcFo.jpg);"></div>
<a onclick="openMovie('Uma Fazenda Maluca 2: Queijo de Cabra', 'https://embedder.net/e/movie?imdb=tt2491648')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Fazenda Maluca 2: Queijo de Cabra</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Lupin III: O Ouro da Babilônia', 'https://embedder.net/e/movie?imdb=tt0089943')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/q5CQfjWGcHemKXbYNfCDBcQsJfc.jpg);"></div>
<a onclick="openMovie('Lupin III: O Ouro da Babilônia', 'https://embedder.net/e/movie?imdb=tt0089943')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Lupin III: O Ouro da Babilônia</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Fallen', 'https://embedder.net/e/movie?imdb=tt1564777')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/t4wfwph9hvvrtLcQdNf0JwK3fVR.jpg);"></div>
<a onclick="openMovie('Fallen', 'https://embedder.net/e/movie?imdb=tt1564777')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Fallen</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ela é o Cara', 'https://embedder.net/e/movie?imdb=tt0454945')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ooZWyBiibhT8il0MGjOYQYYJcsT.jpg);"></div>
<a onclick="openMovie('Ela é o Cara', 'https://embedder.net/e/movie?imdb=tt0454945')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ela é o Cara</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Pacto Secreto', 'https://embedder.net/e/movie?imdb=tt1232783')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/p6ljEqL37ZV8OOQsI8LOGHjPsmS.jpg);"></div>
<a onclick="openMovie('Pacto Secreto', 'https://embedder.net/e/movie?imdb=tt1232783')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Pacto Secreto</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Matriarca', 'https://embedder.net/e/movie?imdb=tt17202326')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/o57VVZImE6RcZAffPepZyuwNLKs.jpg);"></div>
<a onclick="openMovie('A Matriarca', 'https://embedder.net/e/movie?imdb=tt17202326')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Matriarca</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Liga da Justiça: A Nova Fronteira', 'https://embedder.net/e/movie?imdb=tt0902272')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pQjMxF8DBsLhFD9CJZUhA28Me1g.jpg);"></div>
<a onclick="openMovie('Liga da Justiça: A Nova Fronteira', 'https://embedder.net/e/movie?imdb=tt0902272')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Liga da Justiça: A Nova Fronteira</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Lanterna Verde: Primeiro Vôo', 'https://embedder.net/e/movie?imdb=tt1384590')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/745szFCV9ZGvBPvlwxcSKDqW6QK.jpg);"></div>
<a onclick="openMovie('Lanterna Verde: Primeiro Vôo', 'https://embedder.net/e/movie?imdb=tt1384590')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Lanterna Verde: Primeiro Vôo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Quatro Vidas de um Cachorro', 'https://embedder.net/e/movie?imdb=tt1753383')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3W5jF8z5GkOHEslaIv89Ncp06J4.jpg);"></div>
<a onclick="openMovie('Quatro Vidas de um Cachorro', 'https://embedder.net/e/movie?imdb=tt1753383')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Quatro Vidas de um Cachorro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Superman & Batman: Apocalipse', 'https://embedder.net/e/movie?imdb=tt1673430')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vZqD8QMXiZh977LipOsXQmaMM7l.jpg);"></div>
<a onclick="openMovie('Superman & Batman: Apocalipse', 'https://embedder.net/e/movie?imdb=tt1673430')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Superman & Batman: Apocalipse</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Descoberta', 'https://embedder.net/e/movie?imdb=tt5155780')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lgLyPfWHkmt8v8ulz04NL2FFHQ4.jpg);"></div>
<a onclick="openMovie('A Descoberta', 'https://embedder.net/e/movie?imdb=tt5155780')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Descoberta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Tinta Bruta', 'https://embedder.net/e/movie?imdb=tt7925066')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6zW8OKgJKaO5JHzZe6geZd2vpgT.jpg);"></div>
<a onclick="openMovie('Tinta Bruta', 'https://embedder.net/e/movie?imdb=tt7925066')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Tinta Bruta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Fantasmas do Abismo', 'https://embedder.net/e/movie?imdb=tt0297144')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4iJG3uN4DvtX9vZ5kE5XUdqfB6b.jpg);"></div>
<a onclick="openMovie('Fantasmas do Abismo', 'https://embedder.net/e/movie?imdb=tt0297144')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Fantasmas do Abismo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Esticando a Festa', 'https://embedder.net/e/movie?imdb=tt11742798')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1bkcOEt4zvc5tBl6xFxTbkSqhEQ.jpg);"></div>
<a onclick="openMovie('Esticando a Festa', 'https://embedder.net/e/movie?imdb=tt11742798')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Esticando a Festa</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Leonardo Perdido', 'https://embedder.net/e/movie?imdb=tt11225756')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8CCtH4klPFUOtW6sO17fJUnEIhj.jpg);"></div>
<a onclick="openMovie('O Leonardo Perdido', 'https://embedder.net/e/movie?imdb=tt11225756')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Leonardo Perdido</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('As Semanas Mágicas', 'https://embedder.net/e/movie?imdb=tt22506746')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4G83nVZiPyFTQ6KBnWhEdKr3mX2.jpg);"></div>
<a onclick="openMovie('As Semanas Mágicas', 'https://embedder.net/e/movie?imdb=tt22506746')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">As Semanas Mágicas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Explorando o Desconhecido: Robôs Assassinos', 'https://embedder.net/e/movie?imdb=tt27837442')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hjvYHMOmeO5AQyFTymgYlSYrHdO.jpg);"></div>
<a onclick="openMovie('Explorando o Desconhecido: Robôs Assassinos', 'https://embedder.net/e/movie?imdb=tt27837442')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Explorando o Desconhecido: Robôs Assassinos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Demônio dos Mares', 'https://embedder.net/e/movie?imdb=tt10279472')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/873A55IZrwEP98hn82EGdS0xv0N.jpg);"></div>
<a onclick="openMovie('O Demônio dos Mares', 'https://embedder.net/e/movie?imdb=tt10279472')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Demônio dos Mares</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Batman Lego: O Filme - Super Heróis Se Unem', 'https://embedder.net/e/movie?imdb=tt2465238')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kMULqTVLgbrjfcLzSsSWAjlc6Tj.jpg);"></div>
<a onclick="openMovie('Batman Lego: O Filme - Super Heróis Se Unem', 'https://embedder.net/e/movie?imdb=tt2465238')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Batman Lego: O Filme - Super Heróis Se Unem</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Lego Batman: O Filme', 'https://embedder.net/e/movie?imdb=tt4116284')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qVf6lTFzDsBZUbYbk8m9dk9SipX.jpg);"></div>
<a onclick="openMovie('Lego Batman: O Filme', 'https://embedder.net/e/movie?imdb=tt4116284')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Lego Batman: O Filme</h5>
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
