from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Enigma do Medo', 'https://embedder.net/e/movie?imdb=tt6846978')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pDaHNUgDHvhVHryMBPm3WFXtFT6.jpg);"></div>
<a onclick="openMovie('O Enigma do Medo', 'https://embedder.net/e/movie?imdb=tt6846978')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Enigma do Medo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Pastor e o Guerrilheiro', 'https://embedder.net/e/movie?imdb=tt14589900')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/527ORgyx6yrdSbJ459DlpOrC8p9.jpg);"></div>
<a onclick="openMovie('O Pastor e o Guerrilheiro', 'https://embedder.net/e/movie?imdb=tt14589900')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Pastor e o Guerrilheiro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Palau: Um Homem de F�', 'https://embedder.net/e/movie?imdb=tt8109800')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sOi2rRKMujdE7AAOfuT345LMjoH.jpg);"></div>
<a onclick="openMovie('Palau: Um Homem de F�', 'https://embedder.net/e/movie?imdb=tt8109800')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Palau: Um Homem de F�</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Possess�o Demon�aca', 'https://embedder.net/e/movie?imdb=tt14438348')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yR4jOsVYdXoEUvYkgCx2ymbpEwa.jpg);"></div>
<a onclick="openMovie('Possess�o Demon�aca', 'https://embedder.net/e/movie?imdb=tt14438348')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Possess�o Demon�aca</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Relaxe, Eu Sou Do Futuro', 'https://embedder.net/e/movie?imdb=tt13786042')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lF0xbAJatRiBk8UNQ82ufi2vdjP.jpg);"></div>
<a onclick="openMovie('Relaxe, Eu Sou Do Futuro', 'https://embedder.net/e/movie?imdb=tt13786042')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Relaxe, Eu Sou Do Futuro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Tequila Repasado', 'https://embedder.net/e/movie?imdb=tt13006472')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7onQmk5ZzUjx6SEAiqILWQFTaYC.jpg);"></div>
<a onclick="openMovie('Tequila Repasado', 'https://embedder.net/e/movie?imdb=tt13006472')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Tequila Repasado</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Kill Room', 'https://embedder.net/e/movie?imdb=tt11908172')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qKpdy7N6zX05eisopvvviiTwPxb.jpg);"></div>
<a onclick="openMovie('The Kill Room', 'https://embedder.net/e/movie?imdb=tt11908172')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Kill Room</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Terra Prometida', 'https://embedder.net/e/movie?imdb=tt20561198')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/llXvirrQKyKSmRf9kxYzb7EUWDl.jpg);"></div>
<a onclick="openMovie('A Terra Prometida', 'https://embedder.net/e/movie?imdb=tt20561198')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Terra Prometida</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Plano Por �gua Abaixo', 'https://embedder.net/e/movie?imdb=tt8191850')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gNu1KmRtg70URO0wwrKWfbGhRn4.jpg);"></div>
<a onclick="openMovie('Um Plano Por �gua Abaixo', 'https://embedder.net/e/movie?imdb=tt8191850')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Plano Por �gua Abaixo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Tia Virg�nia', 'https://embedder.net/e/movie?imdb=tt28582081')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ibAyBZyxph1zcWZX7Eo4F8tCKmJ.jpg);"></div>
<a onclick="openMovie('Tia Virg�nia', 'https://embedder.net/e/movie?imdb=tt28582081')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Tia Virg�nia</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Maldi��o de Raven's Hollow', 'https://embedder.net/e/movie?imdb=tt15245390')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8N9qjYLujTFwawY95mHxQUPO1sj.jpg);"></div>
<a onclick="openMovie('A Maldi��o de Raven's Hollow', 'https://embedder.net/e/movie?imdb=tt15245390')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Maldi��o de Raven's Hollow</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Maldi��o do Boneco Robert', 'https://embedder.net/e/movie?imdb=tt21967800')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zrEpRwFOKDKzDStnHRwFhZKkY1O.jpg);"></div>
<a onclick="openMovie('A Maldi��o do Boneco Robert', 'https://embedder.net/e/movie?imdb=tt21967800')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Maldi��o do Boneco Robert</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Pequena Indom�vel', 'https://embedder.net/e/movie?imdb=tt6002094')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7ImB1LyrYaHhIem3mfnmRneEySu.jpg);"></div>
<a onclick="openMovie('A Pequena Indom�vel', 'https://embedder.net/e/movie?imdb=tt6002094')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Pequena Indom�vel</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Verdade Sobre o Caso Deventer', 'https://embedder.net/e/movie?imdb=tt6851410')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ttfPfgduSmQI3phKbCFLBVWr2GI.jpg);"></div>
<a onclick="openMovie('A Verdade Sobre o Caso Deventer', 'https://embedder.net/e/movie?imdb=tt6851410')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Verdade Sobre o Caso Deventer</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('�guia e Jaguar: Os Guerreiros Lend�rios', 'https://embedder.net/e/movie?imdb=tt21230032')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1UnP6AtY3DHYjOVDEEF0Age7RKJ.jpg);"></div>
<a onclick="openMovie('�guia e Jaguar: Os Guerreiros Lend�rios', 'https://embedder.net/e/movie?imdb=tt21230032')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">�guia e Jaguar: Os Guerreiros Lend�rios</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Aniquila��o', 'https://embedder.net/e/movie?imdb=tt2798920')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5DUGK2WvnyiBJwKOYhTR9FHx2Mh.jpg);"></div>
<a onclick="openMovie('Aniquila��o', 'https://embedder.net/e/movie?imdb=tt2798920')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Aniquila��o</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('As Aventuras de Poliana: O Filme', 'https://embedder.net/e/movie?imdb=tt30431349')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dLfgd33vg7PxnWf6guh8deiuBkM.jpg);"></div>
<a onclick="openMovie('As Aventuras de Poliana: O Filme', 'https://embedder.net/e/movie?imdb=tt30431349')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">As Aventuras de Poliana: O Filme</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ca�adores de Lobisomem', 'https://embedder.net/e/movie?imdb=tt9898844')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nCxQiLsYXHAPls4RyVsv0Pcok4Q.jpg);"></div>
<a onclick="openMovie('Ca�adores de Lobisomem', 'https://embedder.net/e/movie?imdb=tt9898844')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ca�adores de Lobisomem</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('As Superpoderosas', 'https://embedder.net/e/movie?imdb=tt16970906')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/itUAkQmihFmRxMYTa3AkvIzMCV4.jpg);"></div>
<a onclick="openMovie('As Superpoderosas', 'https://embedder.net/e/movie?imdb=tt16970906')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">As Superpoderosas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Carona Aterrorizante', 'https://embedder.net/e/movie?imdb=tt21979910')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2fyv8VPNOMZRoL239rJZqBgycSu.jpg);"></div>
<a onclick="openMovie('Carona Aterrorizante', 'https://embedder.net/e/movie?imdb=tt21979910')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Carona Aterrorizante</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Criaturas', 'https://embedder.net/e/movie?imdb=tt11252490')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4tWlLE2jphhziZbFQrgWZ0GFIlA.jpg);"></div>
<a onclick="openMovie('Criaturas', 'https://embedder.net/e/movie?imdb=tt11252490')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Criaturas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Do Outro Lado da Dor', 'https://embedder.net/e/movie?imdb=tt19887550')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4loAQSV9tLQbVPvWrAntNn0kBIO.jpg);"></div>
<a onclick="openMovie('Do Outro Lado da Dor', 'https://embedder.net/e/movie?imdb=tt19887550')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Do Outro Lado da Dor</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Esculturas da Vida', 'https://embedder.net/e/movie?imdb=tt13923216')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cA9ihYHlTBfbWKXxjgmVpl7QJGx.jpg);"></div>
<a onclick="openMovie('Esculturas da Vida', 'https://embedder.net/e/movie?imdb=tt13923216')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Esculturas da Vida</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Heran�a de Fam�lia', 'https://embedder.net/e/movie?imdb=tt11353050')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1n1BJc3wbetxKyyjZ2dDnNZs5JE.jpg);"></div>
<a onclick="openMovie('Heran�a de Fam�lia', 'https://embedder.net/e/movie?imdb=tt11353050')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Heran�a de Fam�lia</h5>
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
