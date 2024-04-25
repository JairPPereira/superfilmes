from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Operário', 'https://embedder.net/e/movie?imdb=tt0361862')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xU4BxDFlEVxdUfWN8pLtBcFI5zB.jpg);"></div>
<a onclick="openMovie('O Operário', 'https://embedder.net/e/movie?imdb=tt0361862')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Operário</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Lados Opostos', 'https://embedder.net/e/movie?imdb=tt17352384')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4LLBtwwAqMfou51XQax0Axr2dSo.jpg);"></div>
<a onclick="openMovie('Lados Opostos', 'https://embedder.net/e/movie?imdb=tt17352384')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Lados Opostos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Irmãos de Guerra', 'https://embedder.net/e/movie?imdb=tt19878422')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ozHweLTPGEWRQyr1z4npGjm6ko0.jpg);"></div>
<a onclick="openMovie('Irmãos de Guerra', 'https://embedder.net/e/movie?imdb=tt19878422')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Irmãos de Guerra</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Incompatível com a Vida', 'https://embedder.net/e/movie?imdb=tt27788763')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/s3hjvbZuXRVmfGanJyx0AdGzoPB.jpg);"></div>
<a onclick="openMovie('Incompatível com a Vida', 'https://embedder.net/e/movie?imdb=tt27788763')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Incompatível com a Vida</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('George, o Curioso: Aventuras no Mar', 'https://embedder.net/e/movie?imdb=tt15437042')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/539klzkpRB4KvpsiWaFjKjeGWwc.jpg);"></div>
<a onclick="openMovie('George, o Curioso: Aventuras no Mar', 'https://embedder.net/e/movie?imdb=tt15437042')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">George, o Curioso: Aventuras no Mar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Esse é o Meu Lugar', 'https://embedder.net/e/movie?imdb=tt10426580')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/whPI5co6ZISWCA39jvDw4c6qdzp.jpg);"></div>
<a onclick="openMovie('Esse é o Meu Lugar', 'https://embedder.net/e/movie?imdb=tt10426580')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Esse é o Meu Lugar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Criptofraude', 'https://embedder.net/e/movie?imdb=tt30317302')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5HHMl8k7cugjUUXQYx85eD0A0tf.jpg);"></div>
<a onclick="openMovie('Criptofraude', 'https://embedder.net/e/movie?imdb=tt30317302')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Criptofraude</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Caçadores', 'https://embedder.net/e/movie?imdb=tt14624330')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5CNyDfoMb4bqo6AZs0Y3OOL5oqb.jpg);"></div>
<a onclick="openMovie('Caçadores', 'https://embedder.net/e/movie?imdb=tt14624330')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Caçadores</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Charlie: Um Cachorro Especial', 'https://embedder.net/e/movie?imdb=tt7466810')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6jSjNlbScgnR4w8VSO0lcJdhHJI.jpg);"></div>
<a onclick="openMovie('Charlie: Um Cachorro Especial', 'https://embedder.net/e/movie?imdb=tt7466810')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Charlie: Um Cachorro Especial</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Benny Loves You', 'https://embedder.net/e/movie?imdb=tt3917506')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mQ8vALvqA0z0qglG3gI6xpVcslo.jpg);"></div>
<a onclick="openMovie('Benny Loves You', 'https://embedder.net/e/movie?imdb=tt3917506')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Benny Loves You</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Aporia', 'https://embedder.net/e/movie?imdb=tt8511466')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8BnoaS3M8zEVE6pCkOoyyEjswCH.jpg);"></div>
<a onclick="openMovie('Aporia', 'https://embedder.net/e/movie?imdb=tt8511466')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Aporia</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ficção Americana', 'https://embedder.net/e/movie?imdb=tt23561236')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bndwT7YCJv9nEHGSXuzvx9PJ013.jpg);"></div>
<a onclick="openMovie('Ficção Americana', 'https://embedder.net/e/movie?imdb=tt23561236')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ficção Americana</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Sequestro do Voo 375', 'https://embedder.net/e/movie?imdb=tt13073252')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nY5v3pTXZjms3m1ZrUMlt3teL7X.jpg);"></div>
<a onclick="openMovie('O Sequestro do Voo 375', 'https://embedder.net/e/movie?imdb=tt13073252')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Sequestro do Voo 375</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Upgrade: As Cores do Amor', 'https://embedder.net/e/movie?imdb=tt21830902')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rqfqLTNpueBtdtMO0QZ8XzQaDi1.jpg);"></div>
<a onclick="openMovie('Upgrade: As Cores do Amor', 'https://embedder.net/e/movie?imdb=tt21830902')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Upgrade: As Cores do Amor</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ninguém Vai te Salvar', 'https://embedder.net/e/movie?imdb=tt14509110')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hkIwPpdmGI1BaZeR2yrPSnNcv4v.jpg);"></div>
<a onclick="openMovie('Ninguém Vai te Salvar', 'https://embedder.net/e/movie?imdb=tt14509110')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ninguém Vai te Salvar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Arma Secreta', 'https://embedder.net/e/movie?imdb=tt15980462')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/a6TTj8rNPaS6GhcQFdgKO3w2DnS.jpg);"></div>
<a onclick="openMovie('A Arma Secreta', 'https://embedder.net/e/movie?imdb=tt15980462')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Arma Secreta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Noite que Mudou o Pop', 'https://embedder.net/e/movie?imdb=tt30796448')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/c5Dz7xZMxPbdaLn5nte4DCa61Gy.jpg);"></div>
<a onclick="openMovie('A Noite que Mudou o Pop', 'https://embedder.net/e/movie?imdb=tt30796448')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Noite que Mudou o Pop</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Luta', 'https://embedder.net/e/movie?imdb=tt7935770')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/u7hSjwNjMYtORwOErHNLpAXeIEp.jpg);"></div>
<a onclick="openMovie('A Luta', 'https://embedder.net/e/movie?imdb=tt7935770')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Luta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Maldição do Queen Mary', 'https://embedder.net/e/movie?imdb=tt3463938')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/52Sd1DLBn2zlPsUB9mnvtKHgh8O.jpg);"></div>
<a onclick="openMovie('A Maldição do Queen Mary', 'https://embedder.net/e/movie?imdb=tt3463938')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Maldição do Queen Mary</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Vingança da Babá', 'https://embedder.net/e/movie?imdb=tt11505682')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/iYCM9JYdz20U476tSpfeGQ5iTrM.jpg);"></div>
<a onclick="openMovie('A Vingança da Babá', 'https://embedder.net/e/movie?imdb=tt11505682')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Vingança da Babá</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Assassinato do Bolo de Cenoura: Um Mistério de Hannah Swensen', 'https://embedder.net/e/movie?imdb=tt26928076')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hZGyYkniGFfpf4WnO3hhscvr8du.jpg);"></div>
<a onclick="openMovie('Assassinato do Bolo de Cenoura: Um Mistério de Hannah Swensen', 'https://embedder.net/e/movie?imdb=tt26928076')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Assassinato do Bolo de Cenoura: Um Mistério de Hannah Swensen</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Caminhos da Sobrevivência', 'https://embedder.net/e/movie?imdb=tt26067432')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/FSFhUQD96WlDLfYfheod05WOQo.jpg);"></div>
<a onclick="openMovie('Caminhos da Sobrevivência', 'https://embedder.net/e/movie?imdb=tt26067432')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Caminhos da Sobrevivência</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Até Marte por Amor', 'https://embedder.net/e/movie?imdb=tt6317762')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jmvjmR50c3vIegMbfoEoNns84lM.jpg);"></div>
<a onclick="openMovie('Até Marte por Amor', 'https://embedder.net/e/movie?imdb=tt6317762')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Até Marte por Amor</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Cinzas', 'https://embedder.net/e/movie?imdb=tt21308718')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/44BquVRWlRN3B3Xh6yZxNxFdTER.jpg);"></div>
<a onclick="openMovie('Cinzas', 'https://embedder.net/e/movie?imdb=tt21308718')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Cinzas</h5>
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
