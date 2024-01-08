from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Segredos de um Escândalo', 'https://embedder.net/e/movie?imdb=tt13651794')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eroW8nDnZ31OLVwiHRCrIB3RBJV.jpg);"></div>
<a onclick="openMovie('Segredos de um Escândalo', 'https://embedder.net/e/movie?imdb=tt13651794')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Segredos de um Escândalo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Miyamoto Musashi e os 400 Samurais', 'https://embedder.net/e/movie?imdb=tt12015352')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6K0LhZglkxZ1SwKXKNyOjTAzuMx.jpg);"></div>
<a onclick="openMovie('Miyamoto Musashi e os 400 Samurais', 'https://embedder.net/e/movie?imdb=tt12015352')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Miyamoto Musashi e os 400 Samurais</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Manodrome', 'https://embedder.net/e/movie?imdb=tt14813150')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/w5hACqUlPbpHiGLYbtoQHF0SNWe.jpg);"></div>
<a onclick="openMovie('Manodrome', 'https://embedder.net/e/movie?imdb=tt14813150')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Manodrome</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Karim, O Infiltrado', 'https://embedder.net/e/movie?imdb=tt10937496')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qql5LcwpfooxQFk8RKimSduHUsP.jpg);"></div>
<a onclick="openMovie('Karim, O Infiltrado', 'https://embedder.net/e/movie?imdb=tt10937496')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Karim, O Infiltrado</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('罗布泊幽陵', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dzzB67NRFDFNRayJ9UOX6rSNRSV.jpg);"></div>
<a onclick="openMovie('罗布泊幽陵', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">罗布泊幽陵</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Hotel do Medo', 'https://embedder.net/e/movie?imdb=tt6688304')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tQTUHmnB2l8YRgO8qE8V6aqyMOC.jpg);"></div>
<a onclick="openMovie('Hotel do Medo', 'https://embedder.net/e/movie?imdb=tt6688304')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Hotel do Medo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('FPS: First Person Shooter', 'https://embedder.net/e/movie?imdb=tt28681130')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jBV9V2MBUQelh65lWQOEtvsVvdP.jpg);"></div>
<a onclick="openMovie('FPS: First Person Shooter', 'https://embedder.net/e/movie?imdb=tt28681130')" class="media-play"><i class="icofont-ui-play"></i></a>    
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">FPS: First Person Shooter</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Do Ut Des', 'https://embedder.net/e/movie?imdb=tt16008564')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bQxBSr2oiRT1creXScCE4S2VeS.jpg);"></div>
<a onclick="openMovie('Do Ut Des', 'https://embedder.net/e/movie?imdb=tt16008564')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Do Ut Des</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Intruso', 'https://embedder.net/e/movie?imdb=tt8258502')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7he2IBkpbedIOJiBBq5LjY4ZCC5.jpg);"></div>
<a onclick="openMovie('Intruso', 'https://embedder.net/e/movie?imdb=tt8258502')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Intruso</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Efeitos Colaterais de um Casamento', 'https://embedder.net/e/movie?imdb=tt13582614')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/z3eKohlfAFVBwDUqbfbk51f69rd.jpg);"></div>
<a onclick="openMovie('Efeitos Colaterais de um Casamento', 'https://embedder.net/e/movie?imdb=tt13582614')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Efeitos Colaterais de um Casamento</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Depois da Aula', 'https://embedder.net/e/movie?imdb=tt11010888')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gmV7Y98E5L0aVavRyVseD3WKyxJ.jpg);"></div>
<a onclick="openMovie('Depois da Aula', 'https://embedder.net/e/movie?imdb=tt11010888')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Depois da Aula</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Dark Parasite', 'https://embedder.net/e/movie?imdb=tt23128514')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rhkL2T66YZOk0WkKYXVBuFZZQ7W.jpg);"></div>
<a onclick="openMovie('Dark Parasite', 'https://embedder.net/e/movie?imdb=tt23128514')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Dark Parasite</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Coletivo', 'https://embedder.net/e/movie?imdb=tt23556408')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/araUzE6drxWABCMSKvnKHV11vr1.jpg);"></div>
<a onclick="openMovie('O Coletivo', 'https://embedder.net/e/movie?imdb=tt23556408')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Coletivo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Coisas Divertidas Sobre o Amor', 'https://embedder.net/e/movie?imdb=tt13891338')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uIUFGA0G124m52CEJmNlsp3ui9W.jpg);"></div>
<a onclick="openMovie('Coisas Divertidas Sobre o Amor', 'https://embedder.net/e/movie?imdb=tt13891338')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Coisas Divertidas Sobre o Amor</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Cidade das Trevas', 'https://embedder.net/e/movie?imdb=tt8115996')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jQoUqpBZxF1rloQadqJfSMzPu95.jpg);"></div>
<a onclick="openMovie('Cidade das Trevas', 'https://embedder.net/e/movie?imdb=tt8115996')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Cidade das Trevas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Cara a Cara com o ETA', 'https://embedder.net/e/movie?imdb=tt29295010')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pUThEccecvgCERVJEUzZUBdqFO2.jpg);"></div>
<a onclick="openMovie('Cara a Cara com o ETA', 'https://embedder.net/e/movie?imdb=tt29295010')" class="media-play"><i class="icofont-ui-play"></i></a>        
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Cara a Cara com o ETA</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Boudica', 'https://embedder.net/e/movie?imdb=tt22688572')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/adMcxfUonnm9RvPImGHy25wYUks.jpg);"></div>
<a onclick="openMovie('Boudica', 'https://embedder.net/e/movie?imdb=tt22688572')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Boudica</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('战地：异种浩劫', 'https://embedder.net/e/movie?imdb=tt27727400')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8VTUd9kTBySAedlM3gsPi6EVte4.jpg);"></div>
<a onclick="openMovie('战地：异种浩劫', 'https://embedder.net/e/movie?imdb=tt27727400')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">战地：异种浩劫</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Atomic Poop', 'https://embedder.net/e/movie?imdb=tt28683949')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/le47veBLKalWgZzFCCh2Oy7UMTm.jpg);"></div>
<a onclick="openMovie('Atomic Poop', 'https://embedder.net/e/movie?imdb=tt28683949')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Atomic Poop</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Até o Limite da Honra', 'https://embedder.net/e/movie?imdb=tt19770590')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7fZxEnhh8VY1N5ftRIkTMaC7xAA.jpg);"></div>
<a onclick="openMovie('Até o Limite da Honra', 'https://embedder.net/e/movie?imdb=tt19770590')" class="media-play"><i class="icofont-ui-play"></i></a>        
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Até o Limite da Honra</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Abandonada', 'https://embedder.net/e/movie?imdb=tt2980152')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rC3O8VIPhLhJOO68XsPruBoirDR.jpg);"></div>
<a onclick="openMovie('Abandonada', 'https://embedder.net/e/movie?imdb=tt2980152')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Abandonada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Modelo e o Fotógrafo', 'https://embedder.net/e/movie?imdb=tt13129114')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pwWAzpOGbO9quvzOjmE5ledaqUA.jpg);"></div>
<a onclick="openMovie('A Modelo e o Fotógrafo', 'https://embedder.net/e/movie?imdb=tt13129114')" class="media-play"><i class="icofont-ui-play"></i></a>       
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Modelo e o Fotógrafo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Fuga de Alice', 'https://embedder.net/e/movie?imdb=tt6550978')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5LM3AZZAVSVVu3Nea0y3AP0oXte.jpg);"></div>
<a onclick="openMovie('A Fuga de Alice', 'https://embedder.net/e/movie?imdb=tt6550978')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Fuga de Alice</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Informante', 'https://embedder.net/e/movie?imdb=tt14316486')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bfziuazNnGF9ASMoaSLtwZHGp9T.jpg);"></div>
<a onclick="openMovie('A Informante', 'https://embedder.net/e/movie?imdb=tt14316486')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Informante</h5>
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
