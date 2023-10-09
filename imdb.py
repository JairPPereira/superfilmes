from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Beau Tem Medo', 'https://embedder.net/e/movie?imdb=tt13521006')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vPZnGnrLok0S5ZHPL5H8RG4PmEK.jpg);"></div>
<a onclick="openMovie('Beau Tem Medo', 'https://embedder.net/e/movie?imdb=tt13521006')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Beau Tem Medo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Cães de Guerra', 'https://embedder.net/e/movie?imdb=tt2005151')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uv9g0yF3z10tWWq24OQewQf6r5e.jpg);"></div>
<a onclick="openMovie('Cães de Guerra', 'https://embedder.net/e/movie?imdb=tt2005151')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Cães de Guerra</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Enquanto Estivermos Juntos', 'https://embedder.net/e/movie?imdb=tt9779516')" class="full-click"></a>    
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/FyxWixSh2EHN44SbbC640NcaUF.jpg);"></div> 
<a onclick="openMovie('Enquanto Estivermos Juntos', 'https://embedder.net/e/movie?imdb=tt9779516')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Enquanto Estivermos Juntos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Janela Secreta', 'https://embedder.net/e/movie?imdb=tt0363988')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dJ2XE9EQVixJVLfMUSF85E4TiaA.jpg);"></div>
<a onclick="openMovie('A Janela Secreta', 'https://embedder.net/e/movie?imdb=tt0363988')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Janela Secreta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Alexandre e o Dia Terrível, Horrível, Espantoso e Horroroso', 'https://embedder.net/e/movie?imdb=tt1698641')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7DhdFeIxE9zCnjF7qGkjNxHQIr9.jpg);"></div>
<a onclick="openMovie('Alexandre e o Dia Terrível, Horrível, Espantoso e Horroroso', 'https://embedder.net/e/movie?imdb=tt1698641')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Alexandre e o Dia Terrível, Horrível, Espantoso e Horroroso</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Se Algo Acontecer... Te Amo', 'https://embedder.net/e/movie?imdb=tt11768948')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/81sFRZluM59eRmvhNMSPQItRfOV.jpg);"></div>
<a onclick="openMovie('Se Algo Acontecer... Te Amo', 'https://embedder.net/e/movie?imdb=tt11768948')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Se Algo Acontecer... Te Amo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Indiana Jones e A Relíquia do Destino', 'https://embedder.net/e/movie?imdb=tt1462764')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9EnfMH0nTPCna87Mh3G8Q6W2wze.jpg);"></div>
<a onclick="openMovie('Indiana Jones e A Relíquia do Destino', 'https://embedder.net/e/movie?imdb=tt1462764')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Indiana Jones e A Relíquia do Destino</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Nascimento do Mal', 'https://embedder.net/e/movie?imdb=tt4896168')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dyZF3BqHD24J4UTdwK8OMuK5mfI.jpg);"></div>
<a onclick="openMovie('O Nascimento do Mal', 'https://embedder.net/e/movie?imdb=tt4896168')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Nascimento do Mal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Nimona', 'https://embedder.net/e/movie?imdb=tt19500164')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dHFUte9BLYhihC9YqKWyxmWXnZu.jpg);"></div>
<a onclick="openMovie('Nimona', 'https://embedder.net/e/movie?imdb=tt19500164')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Nimona</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Amor Mandou Mensagem', 'https://embedder.net/e/movie?imdb=tt10276482')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/s3SntheUQWJysPSZGcegQj473Pq.jpg);"></div>
<a onclick="openMovie('O Amor Mandou Mensagem', 'https://embedder.net/e/movie?imdb=tt10276482')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Amor Mandou Mensagem</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Awake', 'https://embedder.net/e/movie?imdb=tt10418662')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uZkNbB8isWXHMDNoIbqXvmslBMC.jpg);"></div>
<a onclick="openMovie('Awake', 'https://embedder.net/e/movie?imdb=tt10418662')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Awake</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Através da Minha Janela: Além-mar', 'https://embedder.net/e/movie?imdb=tt21245882')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/252wEUZ6lr4a5sF7DUzRRH3iGEO.jpg);"></div>
<a onclick="openMovie('Através da Minha Janela: Além-mar', 'https://embedder.net/e/movie?imdb=tt21245882')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Através da Minha Janela: Além-mar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Elementos', 'https://embedder.net/e/movie?imdb=tt15789038')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/88OGFOcFI04CL4uucb6I7ZzUqD6.jpg);"></div>
<a onclick="openMovie('Elementos', 'https://embedder.net/e/movie?imdb=tt15789038')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Elementos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Rye Lane: Um Amor Inesperado', 'https://embedder.net/e/movie?imdb=tt15893750')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ljqrimXtkF47gSKcDyVLZ03ctYG.jpg);"></div>
<a onclick="openMovie('Rye Lane: Um Amor Inesperado', 'https://embedder.net/e/movie?imdb=tt15893750')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Rye Lane: Um Amor Inesperado</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Viva o México!', 'https://embedder.net/e/movie?imdb=tt22185848')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mZWLkJQeVy990LMFGlFJphOaioh.jpg);"></div>
<a onclick="openMovie('Viva o México!', 'https://embedder.net/e/movie?imdb=tt22185848')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Viva o México!</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Pray Away', 'https://embedder.net/e/movie?imdb=tt11224358')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1wikrtZZZoThwnHulB7klQek4Ai.jpg);"></div>
<a onclick="openMovie('Pray Away', 'https://embedder.net/e/movie?imdb=tt11224358')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Pray Away</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Ano Inesquecível - Outono', 'https://embedder.net/e/movie?imdb=tt27856735')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bIco5SOsxCHiLVOIVxKwV3axT1K.jpg);"></div>
<a onclick="openMovie('Um Ano Inesquecível - Outono', 'https://embedder.net/e/movie?imdb=tt27856735')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Ano Inesquecível - Outono</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Por Que Você Me Matou?', 'https://embedder.net/e/movie?imdb=tt14318430')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/u2eBUmtBLTzb0M2BDxuNqB9trlz.jpg);"></div>
<a onclick="openMovie('Por Que Você Me Matou?', 'https://embedder.net/e/movie?imdb=tt14318430')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Por Que Você Me Matou?</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('No Caminho da Cura', 'https://embedder.net/e/movie?imdb=tt14300912')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1t1bf7upwyEDq0OGpz0DvNhk7Ki.jpg);"></div>
<a onclick="openMovie('No Caminho da Cura', 'https://embedder.net/e/movie?imdb=tt14300912')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">No Caminho da Cura</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Hipnótico', 'https://embedder.net/e/movie?imdb=tt8080204')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3IhGkkalwXguTlceGSl8XUJZOVI.jpg);"></div>
<a onclick="openMovie('Hipnótico', 'https://embedder.net/e/movie?imdb=tt8080204')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Hipnótico</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Mãe do Ano', 'https://embedder.net/e/movie?imdb=tt19724192')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3kTffR2pOxjwVP1qI5RwWnktI4y.jpg);"></div>
<a onclick="openMovie('A Mãe do Ano', 'https://embedder.net/e/movie?imdb=tt19724192')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Mãe do Ano</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Levo Você Comigo', 'https://embedder.net/e/movie?imdb=tt11388990')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4AiQsYiuqaxAIjXqfJImGnLjEA3.jpg);"></div>
<a onclick="openMovie('Levo Você Comigo', 'https://embedder.net/e/movie?imdb=tt11388990')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Levo Você Comigo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Black Clover: A Espada do Rei Mago', 'https://embedder.net/e/movie?imdb=tt22868844')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5KK0FJGdZI7jMhfwyJTg1LGR2z8.jpg);"></div>
<a onclick="openMovie('Black Clover: A Espada do Rei Mago', 'https://embedder.net/e/movie?imdb=tt22868844')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Black Clover: A Espada do Rei Mago</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Minha Culpa', 'https://embedder.net/e/movie?imdb=tt21909764')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/a59iGvF609yAZ5tfZUoQ3XipeQH.jpg);"></div>
<a onclick="openMovie('Minha Culpa', 'https://embedder.net/e/movie?imdb=tt21909764')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Minha Culpa</h5>
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
