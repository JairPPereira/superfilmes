from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Broto Legal', 'https://embedder.net/e/movie?imdb=tt21220538')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jgKAAhnJ63nhrGrjrWl7cv7QFG7.jpg);"></div>
<a onclick="openMovie('Um Broto Legal', 'https://embedder.net/e/movie?imdb=tt21220538')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Broto Legal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Island', 'https://embedder.net/e/movie?imdb=tt21853596')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ajb1rMiorchfRemYHZCkbV9DBg6.jpg);"></div>
<a onclick="openMovie('The Island', 'https://embedder.net/e/movie?imdb=tt21853596')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Island</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Hill', 'https://embedder.net/e/movie?imdb=tt8051894')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gKh28PVUqt1vY2oAdFlauXkDacW.jpg);"></div>
<a onclick="openMovie('The Hill', 'https://embedder.net/e/movie?imdb=tt8051894')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Hill</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Stalker: O Jogo da Morte', 'https://embedder.net/e/movie?imdb=tt7211648')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/h4VrgOmIOHPHygSAHMMThEKmCO4.jpg);"></div>
<a onclick="openMovie('Stalker: O Jogo da Morte', 'https://embedder.net/e/movie?imdb=tt7211648')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Stalker: O Jogo da Morte</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sob o Domínio do Mal', 'https://embedder.net/e/movie?imdb=tt10703978')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4ZzZezjTeS5NtZBpTyqMIAYl3ik.jpg);"></div>
<a onclick="openMovie('Sob o Domínio do Mal', 'https://embedder.net/e/movie?imdb=tt10703978')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sob o Domínio do Mal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Snag', 'https://embedder.net/e/movie?imdb=tt26082308')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nhj4Q39qMSk6X5Ly9j9Yqyjrg5A.jpg);"></div>
<a onclick="openMovie('Snag', 'https://embedder.net/e/movie?imdb=tt26082308')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Snag</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Slotherhouse', 'https://embedder.net/e/movie?imdb=tt15422224')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cPeZYjtt0B2a1gXVKPC6j1xM7fi.jpg);"></div>
<a onclick="openMovie('Slotherhouse', 'https://embedder.net/e/movie?imdb=tt15422224')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Slotherhouse</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sem Rastro', 'https://embedder.net/e/movie?imdb=tt18074198')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/m3ZNSvplELOkVZKPXElMwdapIr4.jpg);"></div>
<a onclick="openMovie('Sem Rastro', 'https://embedder.net/e/movie?imdb=tt18074198')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sem Rastro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Resgate em 12 Horas', 'https://embedder.net/e/movie?imdb=tt14012572')" class="full-click"></a>    
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/m19SDzdaCwcO6p7S5q0YP335x1Z.jpg);"></div>
<a onclick="openMovie('Resgate em 12 Horas', 'https://embedder.net/e/movie?imdb=tt14012572')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Resgate em 12 Horas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Raiva', 'https://embedder.net/e/movie?imdb=tt28492037')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1xIvYJ6HcmD5lcXlaOhChPxLLcY.jpg);"></div>
<a onclick="openMovie('Raiva', 'https://embedder.net/e/movie?imdb=tt28492037')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Raiva</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Pornhub: Sexo Bilionário', 'https://embedder.net/e/movie?imdb=tt26739529')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ae9ooWLtS4LEsSBCUvaFkrrxqiH.jpg);"></div>
<a onclick="openMovie('Pornhub: Sexo Bilionário', 'https://embedder.net/e/movie?imdb=tt26739529')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Pornhub: Sexo Bilionário</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Outra Alma', 'https://embedder.net/e/movie?imdb=tt5165620')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hFV6FXi8oDOfbXuBKODafOev06K.jpg);"></div>
<a onclick="openMovie('Outra Alma', 'https://embedder.net/e/movie?imdb=tt5165620')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Outra Alma</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Osmar, a Primeira Fatia do Pão de Forma', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oW9y28wcG6NApOEikKVRsMewThu.jpg);"></div>
<a onclick="openMovie('Osmar, a Primeira Fatia do Pão de Forma', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Osmar, a Primeira Fatia do Pão de Forma</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Peludos', 'https://embedder.net/e/movie?imdb=tt15547806')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/q0poNkSayOtlwRzY6MKHTQcBauq.jpg);"></div>
<a onclick="openMovie('Os Peludos', 'https://embedder.net/e/movie?imdb=tt15547806')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Peludos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Aventureiros – A Origem', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qKyfHivRX3wRbY4zgN1oFdjqBqH.jpg);"></div>
<a onclick="openMovie('Os Aventureiros – A Origem', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Aventureiros – A Origem</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Reis da Rua Mulberry: Que Reine o Amor', 'https://embedder.net/e/movie?imdb=tt13014820')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3Tr5ziHzI6nEJyXwcyr0z29mA77.jpg);"></div>
<a onclick="openMovie('Os Reis da Rua Mulberry: Que Reine o Amor', 'https://embedder.net/e/movie?imdb=tt13014820')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Reis da Rua Mulberry: Que Reine o Amor</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Preço do Prazer', 'https://embedder.net/e/movie?imdb=tt11871074')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uvnvE2lwwcFH4Smc4ilz194EdoD.jpg);"></div>
<a onclick="openMovie('O Preço do Prazer', 'https://embedder.net/e/movie?imdb=tt11871074')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Preço do Prazer</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Preço do Poder', 'https://embedder.net/e/movie?imdb=tt11152422')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dtDfNAUoCPJVKexcRx2JlT2JAxI.jpg);"></div>
<a onclick="openMovie('O Preço do Poder', 'https://embedder.net/e/movie?imdb=tt11152422')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Preço do Poder</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Motorista de Aplicativo', 'https://embedder.net/e/movie?imdb=tt11957450')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lfcR6c3MPoScJnzqfZCdKfNZVqB.jpg);"></div>
<a onclick="openMovie('O Motorista de Aplicativo', 'https://embedder.net/e/movie?imdb=tt11957450')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Motorista de Aplicativo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Lodo', 'https://embedder.net/e/movie?imdb=tt11701102')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rtAbde8LTcD7aMxm1i5gVJnqVH5.jpg);"></div>
<a onclick="openMovie('O Lodo', 'https://embedder.net/e/movie?imdb=tt11701102')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Lodo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('As Gêmeas Silenciosas', 'https://embedder.net/e/movie?imdb=tt11052678')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zPZJuUSjFMvht73XDrvj0HbYWJC.jpg);"></div>
<a onclick="openMovie('As Gêmeas Silenciosas', 'https://embedder.net/e/movie?imdb=tt11052678')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">As Gêmeas Silenciosas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Assombrosas', 'https://embedder.net/e/movie?imdb=tt18315204')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6Etd8hNlq0VhnrIxPpDmwPGGQrU.jpg);"></div>
<a onclick="openMovie('Assombrosas', 'https://embedder.net/e/movie?imdb=tt18315204')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Assombrosas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Aventura em Legacy Peak', 'https://embedder.net/e/movie?imdb=tt21104674')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9tMLvle4KpP210u647x5yQ4bTM3.jpg);"></div>
<a onclick="openMovie('Aventura em Legacy Peak', 'https://embedder.net/e/movie?imdb=tt21104674')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Aventura em Legacy Peak</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Casamento em Família', 'https://embedder.net/e/movie?imdb=tt20879602')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1vi88La90aTwEtsRMNqXNwtTXn3.jpg);"></div>
<a onclick="openMovie('Casamento em Família', 'https://embedder.net/e/movie?imdb=tt20879602')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Casamento em Família</h5>
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
