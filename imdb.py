from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Que Horas Eu Te Pego?', 'https://embedder.net/e/movie?imdb=tt15671028')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/en47PkDX8IhtQA3i1MYslx8eH91.jpg);"></div>
<a onclick="openMovie('Que Horas Eu Te Pego?', 'https://embedder.net/e/movie?imdb=tt15671028')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Que Horas Eu Te Pego?</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Barraco de Família', 'https://embedder.net/e/movie?imdb=tt19408362')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/f5IqNMb4IVdijcaHI3oXyM6sEhE.jpg);"></div>
<a onclick="openMovie('Barraco de Família', 'https://embedder.net/e/movie?imdb=tt19408362')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Barraco de Família</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Mafia Mamma: De Repente Criminosa', 'https://embedder.net/e/movie?imdb=tt13923456')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ldMp0tTPzlcjdoAJI1jfnDXRrfX.jpg);"></div>
<a onclick="openMovie('Mafia Mamma: De Repente Criminosa', 'https://embedder.net/e/movie?imdb=tt13923456')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Mafia Mamma: De Repente Criminosa</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Monstros do Homem', 'https://embedder.net/e/movie?imdb=tt6456326')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uoYHGazS5wLQFJe7tqZ39M8dA7Q.jpg);"></div>
<a onclick="openMovie('Monstros do Homem', 'https://embedder.net/e/movie?imdb=tt6456326')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Monstros do Homem</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Royalteen: Princesa Margrethe', 'https://embedder.net/e/movie?imdb=tt22488414')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oWmcC2RENbkdS3BuPor530KzKDc.jpg);"></div>
<a onclick="openMovie('Royalteen: Princesa Margrethe', 'https://embedder.net/e/movie?imdb=tt22488414')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Royalteen: Princesa Margrethe</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Royalteen', 'https://embedder.net/e/movie?imdb=tt15022184')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/n7ptP3khuhWHrTvFO0VCVPs6EVY.jpg);"></div>
<a onclick="openMovie('Royalteen', 'https://embedder.net/e/movie?imdb=tt15022184')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Royalteen</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Amor Não Tem Idade', 'https://embedder.net/e/movie?imdb=tt20859028')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4FaXdT2g7jOOpCT2vgXDkfIMEKv.jpg);"></div>
<a onclick="openMovie('Amor Não Tem Idade', 'https://embedder.net/e/movie?imdb=tt20859028')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Amor Não Tem Idade</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Amor Sem Limites', 'https://embedder.net/e/movie?imdb=tt5212808')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rsnZmL3oW0XUU9tICw7JB1zLa4m.jpg);"></div>
<a onclick="openMovie('Amor Sem Limites', 'https://embedder.net/e/movie?imdb=tt5212808')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Amor Sem Limites</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Mistério de Maya', 'https://embedder.net/e/movie?imdb=tt27542448')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9niJrWHUCnPnDTrnYmVki663Esf.jpg);"></div>
<a onclick="openMovie('O Mistério de Maya', 'https://embedder.net/e/movie?imdb=tt27542448')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Mistério de Maya</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Pacto', 'https://embedder.net/e/movie?imdb=tt4873118')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pTQZT9R6YjKrweJ0llPtq57j1Z0.jpg);"></div>
<a onclick="openMovie('O Pacto', 'https://embedder.net/e/movie?imdb=tt4873118')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Pacto</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Demônio de Neon', 'https://embedder.net/e/movie?imdb=tt1974419')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tZzE1utUG5psYaT58cZbrrx7nyx.jpg);"></div>
<a onclick="openMovie('Demônio de Neon', 'https://embedder.net/e/movie?imdb=tt1974419')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Demônio de Neon</h5>
</div>
<!-- end media-box -->
</div>
</div>

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
