from bs4 import BeautifulSoup
import re

html = """
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('過時·過節', 'https://embedder.net/e/movie?imdb=tt22398080')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rXsbzkVnGWly43I40PBAtHUZA6T.jpg);"></div>
<a onclick="openMovie('過時·過節', 'https://embedder.net/e/movie?imdb=tt22398080')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">過時·過節</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('มายาพิศวง', 'https://embedder.net/e/movie?imdb=tt22084794')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oLV7twdo1u79QH4Luierfn5GbcL.jpg);"></div>
<a onclick="openMovie('มายาพิศวง', 'https://embedder.net/e/movie?imdb=tt22084794')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">มายาพิศวง</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('該死的阿修羅', 'https://embedder.net/e/movie?imdb=tt15742308')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hDMZ6VRbYu30yx64ZRs9WrbdgiX.jpg);"></div>
<a onclick="openMovie('該死的阿修羅', 'https://embedder.net/e/movie?imdb=tt15742308')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">該死的阿修羅</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Farsa', 'https://embedder.net/e/movie?imdb=tt14534796')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7ZBfjV7pJMXnuftpDr35gUHe8Pe.jpg);"></div>
<a onclick="openMovie('A Farsa', 'https://embedder.net/e/movie?imdb=tt14534796')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Farsa</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('13 Exorcismos', 'https://embedder.net/e/movie?imdb=tt21199996')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8LpnMIqpRiwxpbGR33ALCmVl7gj.jpg);"></div>
<a onclick="openMovie('13 Exorcismos', 'https://embedder.net/e/movie?imdb=tt21199996')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">13 Exorcismos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Aníkúlápó', 'https://embedder.net/e/movie?imdb=tt21432050')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xb30hkUpBm23stnVgDJGYGsC0R0.jpg);"></div>
<a onclick="openMovie('Aníkúlápó', 'https://embedder.net/e/movie?imdb=tt21432050')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Aníkúlápó</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Gestora', 'https://embedder.net/e/movie?imdb=tt15006754')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hRqvE6dABictKuLwqQMzq6AptiZ.jpg);"></div>
<a onclick="openMovie('A Gestora', 'https://embedder.net/e/movie?imdb=tt15006754')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Gestora</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('As Verdades', 'https://embedder.net/e/movie?imdb=tt21139960')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/of9YFiZW10xZ6sxeImLl1r7M9XQ.jpg);"></div>
<a onclick="openMovie('As Verdades', 'https://embedder.net/e/movie?imdb=tt21139960')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">As Verdades</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um ano, uma noite', 'https://embedder.net/e/movie?imdb=tt14104600')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/e56720Fkue43Gb1Hop2YYwWsvCA.jpg);"></div>
<a onclick="openMovie('Um ano, uma noite', 'https://embedder.net/e/movie?imdb=tt14104600')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um ano, uma noite</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Juang', 'https://embedder.net/e/movie?imdb=tt16566428')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/A3viWkDsRt886XATPXj049Td19a.jpg);"></div>
<a onclick="openMovie('Juang', 'https://embedder.net/e/movie?imdb=tt16566428')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Juang</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Terapia da Dança', 'https://embedder.net/e/movie?imdb=tt12362542')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eiAl7F1eCPrddNOvcJwlXLGXaPP.jpg);"></div>
<a onclick="openMovie('Terapia da Dança', 'https://embedder.net/e/movie?imdb=tt12362542')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Terapia da Dança</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Fabelmans', 'https://embedder.net/e/movie?imdb=tt14208870')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/BWHoAAcKnGtowRXju2c2RBrT0m.jpg);"></div>
<a onclick="openMovie('Os Fabelmans', 'https://embedder.net/e/movie?imdb=tt14208870')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Fabelmans</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sra. Harris Vai a Paris', 'https://embedder.net/e/movie?imdb=tt5151570')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dCp4P08sqOeazheX4GiRRyg5PMm.jpg);"></div>
<a onclick="openMovie('Sra. Harris Vai a Paris', 'https://embedder.net/e/movie?imdb=tt5151570')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sra. Harris Vai a Paris</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Amor de Filhote', 'https://embedder.net/e/movie?imdb=tt5878194')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zlu2aoiKCDs1QTB3ZQnB6xFe9FI.jpg);"></div>
<a onclick="openMovie('Um Amor de Filhote', 'https://embedder.net/e/movie?imdb=tt5878194')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Amor de Filhote</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Paixão Inesperada', 'https://embedder.net/e/movie?imdb=tt14406418')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/o2e66XBZRq5imsJ8gwKvJBltCyg.jpg);"></div>
<a onclick="openMovie('Uma Paixão Inesperada', 'https://embedder.net/e/movie?imdb=tt14406418')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Paixão Inesperada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Camisa de Ouro', 'https://embedder.net/e/movie?imdb=tt5301942')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1wbtzkeabooVQj4d5z1Qh6ieEbd.jpg);"></div>
<a onclick="openMovie('Camisa de Ouro', 'https://embedder.net/e/movie?imdb=tt5301942')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Camisa de Ouro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Dog - A Aventura de Uma Vida', 'https://embedder.net/e/movie?imdb=tt11252248')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gln0b5rezteLuyv9kO1q0h0vqnA.jpg);"></div>
<a onclick="openMovie('Dog - A Aventura de Uma Vida', 'https://embedder.net/e/movie?imdb=tt11252248')" class="media-play"><i class="icofont-ui-play"></i></a>        
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Dog - A Aventura de Uma Vida</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Império da Luz', 'https://embedder.net/e/movie?imdb=tt14402146')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9hoNGfSq3ZiolERu1yFEOWhGLPL.jpg);"></div>
<a onclick="openMovie('Império da Luz', 'https://embedder.net/e/movie?imdb=tt14402146')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Império da Luz</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Bandido', 'https://embedder.net/e/movie?imdb=tt9853500')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/y1EnJdRe9qm3VFEbDXc6PotfDhz.jpg);"></div>
<a onclick="openMovie('Bandido', 'https://embedder.net/e/movie?imdb=tt9853500')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Bandido</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Inspetor Aranha', 'https://embedder.net/e/movie?imdb=tt6661616')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2mRCD2Hn9eaeZszKc6AsFo0VAkM.jpg);"></div>
<a onclick="openMovie('Inspetor Aranha', 'https://embedder.net/e/movie?imdb=tt6661616')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Inspetor Aranha</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Deslizando pela Vida', 'https://embedder.net/e/movie?imdb=tt13316790')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6Q53nx651SCGCZFWIbethzQhyfZ.jpg);"></div>
<a onclick="openMovie('Deslizando pela Vida', 'https://embedder.net/e/movie?imdb=tt13316790')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Deslizando pela Vida</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Darby: A Jovem Sensitiva', 'https://embedder.net/e/movie?imdb=tt15745226')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dfgKwPUMc8WVzm40eJ5ox6DSk1L.jpg);"></div>
<a onclick="openMovie('Darby: A Jovem Sensitiva', 'https://embedder.net/e/movie?imdb=tt15745226')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Darby: A Jovem Sensitiva</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Força de Pai para Filha', 'https://embedder.net/e/movie?imdb=tt7472122')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fV638xlTJDKIGwURcs3y7AmWUGt.jpg);"></div>
<a onclick="openMovie('Força de Pai para Filha', 'https://embedder.net/e/movie?imdb=tt7472122')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Força de Pai para Filha</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Em um Passe de Mágica', 'https://embedder.net/e/movie?imdb=tt13793230')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lfprZ6p6rliMRgnhE09kVV57Q1o.jpg);"></div>
<a onclick="openMovie('Em um Passe de Mágica', 'https://embedder.net/e/movie?imdb=tt13793230')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Em um Passe de Mágica</h5>
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
