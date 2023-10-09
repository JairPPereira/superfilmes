from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Arte da Sobrevivência', 'https://embedder.net/e/movie?imdb=tt15053106')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lxRlS1EN0ByrhqkisV41l0havin.jpg);"></div>
<a onclick="openMovie('A Arte da Sobrevivência', 'https://embedder.net/e/movie?imdb=tt15053106')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Arte da Sobrevivência</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Angela', 'https://embedder.net/e/movie?imdb=tt28118695')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qIRRUoeJPXJQ0lSuW3OI9NYLb10.jpg);"></div>
<a onclick="openMovie('Angela', 'https://embedder.net/e/movie?imdb=tt28118695')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Angela</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Bailarina', 'https://embedder.net/e/movie?imdb=tt26350277')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5BEYUwi4PCTfCaoGCL17DD9h7sM.jpg);"></div>
<a onclick="openMovie('A Bailarina', 'https://embedder.net/e/movie?imdb=tt26350277')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Bailarina</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Círculo de Espiões', 'https://embedder.net/e/movie?imdb=tt15433600')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jGUcSkXhBpgqIjSW5f5QKAmi2SQ.jpg);"></div>
<a onclick="openMovie('Círculo de Espiões', 'https://embedder.net/e/movie?imdb=tt15433600')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Círculo de Espiões</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Dezesseis Facadas', 'https://embedder.net/e/movie?imdb=tt11426232')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/o5tWAiHfxEvu2z1qkJKU4gW1uPY.jpg);"></div>
<a onclick="openMovie('Dezesseis Facadas', 'https://embedder.net/e/movie?imdb=tt11426232')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Dezesseis Facadas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Jogo Justo', 'https://embedder.net/e/movie?imdb=tt16304446')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/AteINDGu2VqyI1M8mBZXYMA7Yhs.jpg);"></div>
<a onclick="openMovie('Jogo Justo', 'https://embedder.net/e/movie?imdb=tt16304446')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Jogo Justo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Loucas em Apuros', 'https://embedder.net/e/movie?imdb=tt15268244')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kjFuCcTiTTmFbaNWIMcwrnZpMpr.jpg);"></div>
<a onclick="openMovie('Loucas em Apuros', 'https://embedder.net/e/movie?imdb=tt15268244')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Loucas em Apuros</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Mate-me se Puder', 'https://embedder.net/e/movie?imdb=tt13022120')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/e2ghk75hCIu7N2Xk7baIJtvwMPP.jpg);"></div>
<a onclick="openMovie('Mate-me se Puder', 'https://embedder.net/e/movie?imdb=tt13022120')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Mate-me se Puder</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Rei dos Assassinos', 'https://embedder.net/e/movie?imdb=tt14057604')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tHA2wltMBWuaTzOzSf7P2bzhmIy.jpg);"></div>
<a onclick="openMovie('O Rei dos Assassinos', 'https://embedder.net/e/movie?imdb=tt14057604')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Rei dos Assassinos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Bela Manhã', 'https://embedder.net/e/movie?imdb=tt13482828')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/f0zZGfxM6GOuOuZY61m0JcfGi4S.jpg);"></div>
<a onclick="openMovie('Uma Bela Manhã', 'https://embedder.net/e/movie?imdb=tt13482828')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Bela Manhã</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Vidas em Jogo', 'https://embedder.net/e/movie?imdb=tt13400142')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1ohnWjUgVrJVK8tLpG1MHotgJMk.jpg);"></div>
<a onclick="openMovie('Vidas em Jogo', 'https://embedder.net/e/movie?imdb=tt13400142')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Vidas em Jogo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Exorcista: O Devoto', 'https://embedder.net/e/movie?imdb=tt12921446')" class="full-click"></a>        
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/l6nMIFfpkL5cQz4ulSV0llwOWoh.jpg);"></div>
<a onclick="openMovie('O Exorcista: O Devoto', 'https://embedder.net/e/movie?imdb=tt12921446')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Exorcista: O Devoto</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Virando o Jogo', 'https://embedder.net/e/movie?imdb=tt6384920')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ybWVBbq9W2MCzjL2UMBmqrc8eEc.jpg);"></div>
<a onclick="openMovie('Virando o Jogo', 'https://embedder.net/e/movie?imdb=tt6384920')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Virando o Jogo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Do Not Disturb', 'https://embedder.net/e/movie?imdb=tt23049270')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gyuMSazHAcTSZRhe17NFMXPXOgi.jpg);"></div>
<a onclick="openMovie('Do Not Disturb', 'https://embedder.net/e/movie?imdb=tt23049270')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Do Not Disturb</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Flora e Filho: Música em Família', 'https://embedder.net/e/movie?imdb=tt25471950')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/i1Xv3pmIwEXmrbnMOwl6BExjV9a.jpg);"></div>
<a onclick="openMovie('Flora e Filho: Música em Família', 'https://embedder.net/e/movie?imdb=tt25471950')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Flora e Filho: Música em Família</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Jovens Bruxas', 'https://embedder.net/e/movie?imdb=tt0115963')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yPZHvXmOBbkVKUHZO7gz1ho3TFP.jpg);"></div>
<a onclick="openMovie('Jovens Bruxas', 'https://embedder.net/e/movie?imdb=tt0115963')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Jovens Bruxas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Movimento de Jesus', 'https://embedder.net/e/movie?imdb=tt10098448')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/m96gOrdyL5jC3u3Znaqq4AG1V8T.jpg);"></div>
<a onclick="openMovie('Movimento de Jesus', 'https://embedder.net/e/movie?imdb=tt10098448')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Movimento de Jesus</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Caçador de Ratos', 'https://embedder.net/e/movie?imdb=tt28912858')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5fHwVtgJLeOiaKENJ2s8BPY6Rvv.jpg);"></div>
<a onclick="openMovie('O Caçador de Ratos', 'https://embedder.net/e/movie?imdb=tt28912858')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Caçador de Ratos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Engenheiro', 'https://embedder.net/e/movie?imdb=tt26450742')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/daEvqdnGCrbk5yMkYkxoDpNuCkP.jpg);"></div>
<a onclick="openMovie('O Engenheiro', 'https://embedder.net/e/movie?imdb=tt26450742')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Engenheiro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Monstro que vive em Mim', 'https://embedder.net/e/movie?imdb=tt17202164')" class="full-click"></a>    
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fDBAZRH4YiqtOrcTwmwbjz4KsXe.jpg);"></div>
<a onclick="openMovie('O Monstro que vive em Mim', 'https://embedder.net/e/movie?imdb=tt17202164')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Monstro que vive em Mim</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('One Day as a Lion', 'https://embedder.net/e/movie?imdb=tt15783426')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cxSKca4dNlk7O7PMiEYT203vlIw.jpg);"></div>
<a onclick="openMovie('One Day as a Lion', 'https://embedder.net/e/movie?imdb=tt15783426')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">One Day as a Lion</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Som da Liberdade', 'https://embedder.net/e/movie?imdb=tt7599146')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2BWhcrlPr6UvSJy5D044Ikq2QxH.jpg);"></div>
<a onclick="openMovie('Som da Liberdade', 'https://embedder.net/e/movie?imdb=tt7599146')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Som da Liberdade</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('살수', 'https://embedder.net/e/movie?imdb=tt21109580')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/B1WdiNIa8qQNrZZ7pUXltZoFpr.jpg);"></div> 
<a onclick="openMovie('살수', 'https://embedder.net/e/movie?imdb=tt21109580')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">살수</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Resistência', 'https://embedder.net/e/movie?imdb=tt11858890')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/187OBBT5oMQ2XPXgx9F8JhlycvK.jpg);"></div>
<a onclick="openMovie('Resistência', 'https://embedder.net/e/movie?imdb=tt11858890')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Resistência</h5>
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
