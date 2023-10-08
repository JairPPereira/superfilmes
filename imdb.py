from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Asteroid City', 'https://embedder.net/e/movie?imdb=tt14230388')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4BYYVj8mFDAgeQBz89eJRCpMEYI.jpg);"></div>
<a onclick="openMovie('Asteroid City', 'https://embedder.net/e/movie?imdb=tt14230388')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Asteroid City</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Bird Box Barcelona', 'https://embedder.net/e/movie?imdb=tt14400246')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/iTGBHdL12QEpLyRVlykDuiYxzAG.jpg);"></div>
<a onclick="openMovie('Bird Box Barcelona', 'https://embedder.net/e/movie?imdb=tt14400246')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Bird Box Barcelona</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Missão', 'https://embedder.net/e/movie?imdb=tt0091530')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/itBZgfqQ6yHL7KN80M3BxO02Knp.jpg);"></div>
<a onclick="openMovie('A Missão', 'https://embedder.net/e/movie?imdb=tt0091530')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Missão</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('To End All War: Oppenheimer & the Atomic Bomb', 'https://embedder.net/e/movie?imdb=tt28240284')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xwkYWcs8aypUtk3xDRUh0ndo4GA.jpg);"></div>
<a onclick="openMovie('To End All War: Oppenheimer & the Atomic Bomb', 'https://embedder.net/e/movie?imdb=tt28240284')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">To End All War: Oppenheimer & the Atomic Bomb</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Aranhas! Um Experimento Que Deu Errado', 'https://embedder.net/e/movie?imdb=tt18298604')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uwWKxXedTIqWQ1bPXE4kkbjIjv8.jpg);"></div>
<a onclick="openMovie('Aranhas! Um Experimento Que Deu Errado', 'https://embedder.net/e/movie?imdb=tt18298604')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Aranhas! Um Experimento Que Deu Errado</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('De Tirar o Fôlego', 'https://embedder.net/e/movie?imdb=tt24132732')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pmIXPqjZl50UP2dbglEKDfOOBZV.jpg);"></div>
<a onclick="openMovie('De Tirar o Fôlego', 'https://embedder.net/e/movie?imdb=tt24132732')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">De Tirar o Fôlego</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Resident Evil: Ilha da Morte', 'https://embedder.net/e/movie?imdb=tt26674627')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nEWftodqakZu0RcfqhVr9f7ZdUH.jpg);"></div>
<a onclick="openMovie('Resident Evil: Ilha da Morte', 'https://embedder.net/e/movie?imdb=tt26674627')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Resident Evil: Ilha da Morte</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Abercrombie & Fitch: Ascensão e Queda', 'https://embedder.net/e/movie?imdb=tt19034522')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8Zi3lyy7hOw2VGeLJ0A813oSGis.jpg);"></div>
<a onclick="openMovie('Abercrombie & Fitch: Ascensão e Queda', 'https://embedder.net/e/movie?imdb=tt19034522')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Abercrombie & Fitch: Ascensão e Queda</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Oppenheimer', 'https://embedder.net/e/movie?imdb=tt15398776')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg);"></div>
<a onclick="openMovie('Oppenheimer', 'https://embedder.net/e/movie?imdb=tt15398776')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Oppenheimer</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Barbie', 'https://embedder.net/e/movie?imdb=tt1517268')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg);"></div>
<a onclick="openMovie('Barbie', 'https://embedder.net/e/movie?imdb=tt1517268')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Barbie</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sobrenatural: A Porta Vermelha', 'https://embedder.net/e/movie?imdb=tt13405778')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/A2XloB9BYZtMzWOR78uguOoCfH5.jpg);"></div>
<a onclick="openMovie('Sobrenatural: A Porta Vermelha', 'https://embedder.net/e/movie?imdb=tt13405778')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sobrenatural: A Porta Vermelha</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Daisy Quokka: O Animal Mais Feroz Do Mundo', 'https://embedder.net/e/movie?imdb=tt11482894')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/p9dbwWKE8SQqyHoN3Vo8BHpt8fc.jpg);"></div>
<a onclick="openMovie('Daisy Quokka: O Animal Mais Feroz Do Mundo', 'https://embedder.net/e/movie?imdb=tt11482894')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Daisy Quokka: O Animal Mais Feroz Do Mundo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Frio nos Ossos', 'https://embedder.net/e/movie?imdb=tt19858164')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ttPNKyqXv3kK92tCw4zI7tjOaOn.jpg);"></div>
<a onclick="openMovie('Frio nos Ossos', 'https://embedder.net/e/movie?imdb=tt19858164')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Frio nos Ossos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Irmãos Por Escolha', 'https://embedder.net/e/movie?imdb=tt28022751')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fN8SBoDHYT2zO1x80GhhX605WuX.jpg);"></div>
<a onclick="openMovie('Irmãos Por Escolha', 'https://embedder.net/e/movie?imdb=tt28022751')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Irmãos Por Escolha</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sing Street: Música e Sonho', 'https://embedder.net/e/movie?imdb=tt3544112')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jihKpntyd6G1nOJsW2VjMa9jgSU.jpg);"></div>
<a onclick="openMovie('Sing Street: Música e Sonho', 'https://embedder.net/e/movie?imdb=tt3544112')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sing Street: Música e Sonho</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Unicorn Wars', 'https://embedder.net/e/movie?imdb=tt10483152')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/joOEYpfltqoqkaiQio24TUTntGM.jpg);"></div>
<a onclick="openMovie('Unicorn Wars', 'https://embedder.net/e/movie?imdb=tt10483152')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Unicorn Wars</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ursinho Pooh: Sangue e Mel', 'https://embedder.net/e/movie?imdb=tt19623240')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg);"></div>
<a onclick="openMovie('Ursinho Pooh: Sangue e Mel', 'https://embedder.net/e/movie?imdb=tt19623240')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ursinho Pooh: Sangue e Mel</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Noite nos Persegue', 'https://embedder.net/e/movie?imdb=tt6116856')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eh2e6feFLOmlQDcKSDCJCwXVsUd.jpg);"></div>
<a onclick="openMovie('A Noite nos Persegue', 'https://embedder.net/e/movie?imdb=tt6116856')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Noite nos Persegue</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ana e Vitória', 'https://embedder.net/e/movie?imdb=tt8583378')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cgpI8BlXW5OWWUQc1A1zFrMRrBG.jpg);"></div>
<a onclick="openMovie('Ana e Vitória', 'https://embedder.net/e/movie?imdb=tt8583378')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ana e Vitória</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ele é Demais', 'https://embedder.net/e/movie?imdb=tt4590256')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dR5s6KTvHFBzVMiSiFFHkOhEbbJ.jpg);"></div>
<a onclick="openMovie('Ele é Demais', 'https://embedder.net/e/movie?imdb=tt4590256')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ele é Demais</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Tammy: Fora de Controle', 'https://embedder.net/e/movie?imdb=tt2103254')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xF1fM9RwCCCmFi8z7lvl2eBSvJ.jpg);"></div> 
<a onclick="openMovie('Tammy: Fora de Controle', 'https://embedder.net/e/movie?imdb=tt2103254')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Tammy: Fora de Controle</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Moloch', 'https://embedder.net/e/movie?imdb=tt14412446')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3jVzYOnylmvo7ZnGerjfoRj2wFz.jpg);"></div>
<a onclick="openMovie('Moloch', 'https://embedder.net/e/movie?imdb=tt14412446')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Moloch</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ruby Marinho - Monstro Adolescente', 'https://embedder.net/e/movie?imdb=tt27155038')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nNcxpjCtcawf8wQmTwnA0u1jukC.jpg);"></div>
<a onclick="openMovie('Ruby Marinho - Monstro Adolescente', 'https://embedder.net/e/movie?imdb=tt27155038')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ruby Marinho - Monstro Adolescente</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ben 10: Mutante Rex Heróis Unidos', 'https://embedder.net/e/movie?imdb=tt2123516')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/iSPCeuGiN06540ZUCfcunc4hOm3.jpg);"></div>
<a onclick="openMovie('Ben 10: Mutante Rex Heróis Unidos', 'https://embedder.net/e/movie?imdb=tt2123516')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ben 10: Mutante Rex Heróis Unidos</h5>
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
