from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Rock Dog: Uma Batida Animal', 'https://embedder.net/e/movie?imdb=tt11207270')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/q69N7l4ioEqs5Tlz7lH61DL01eh.jpg);"></div>
<a onclick="openMovie('Rock Dog: Uma Batida Animal', 'https://embedder.net/e/movie?imdb=tt11207270')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Rock Dog: Uma Batida Animal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Nosso Sonho', 'https://embedder.net/e/movie?imdb=tt15060662')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oB4KWKaMwYL9B606oP2R2tukzCB.jpg);"></div>
<a onclick="openMovie('Nosso Sonho', 'https://embedder.net/e/movie?imdb=tt15060662')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Nosso Sonho</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Liga da Justiça: Mundo Bélico', 'https://embedder.net/e/movie?imdb=tt27687527')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yxXOMGosmqgjFicfmde61wnwQQ4.jpg);"></div>
<a onclick="openMovie('Liga da Justiça: Mundo Bélico', 'https://embedder.net/e/movie?imdb=tt27687527')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Liga da Justiça: Mundo Bélico</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Leo', 'https://embedder.net/e/movie?imdb=tt5755238')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gSOVog7ydsaF1YpgAqBqnKYFGY.jpg);"></div>
<a onclick="openMovie('Leo', 'https://embedder.net/e/movie?imdb=tt5755238')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Leo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Jogos Entre Amigos 2: Eulogia Atrapalhada', 'https://embedder.net/e/movie?imdb=tt21241942')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kjyOtmWbP8CtJUywDBf1bh4QPmT.jpg);"></div>
<a onclick="openMovie('Jogos Entre Amigos 2: Eulogia Atrapalhada', 'https://embedder.net/e/movie?imdb=tt21241942')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Jogos Entre Amigos 2: Eulogia Atrapalhada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Harmonia Silenciosa', 'https://embedder.net/e/movie?imdb=tt6051918')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ye8ztkPkvGvI9i8ESOTnFep3GwI.jpg);"></div>
<a onclick="openMovie('Harmonia Silenciosa', 'https://embedder.net/e/movie?imdb=tt6051918')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Harmonia Silenciosa</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Heróis da Máscara Dourada', 'https://embedder.net/e/movie?imdb=tt6349210')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wuuC2UVWsCSvAQNxvJiRJZLuYD3.jpg);"></div>
<a onclick="openMovie('Heróis da Máscara Dourada', 'https://embedder.net/e/movie?imdb=tt6349210')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Heróis da Máscara Dourada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ele Vem à Noite', 'https://embedder.net/e/movie?imdb=tt9750368')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2ocm4qhruZrDODyAPWQmJa3lXsL.jpg);"></div>
<a onclick="openMovie('Ele Vem à Noite', 'https://embedder.net/e/movie?imdb=tt9750368')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ele Vem à Noite</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Destacamento Blood', 'https://embedder.net/e/movie?imdb=tt9777644')" class="full-click"></a>        
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sl2qDR4aRHW5bAJdfiFC4H2NKWZ.jpg);"></div>
<a onclick="openMovie('Destacamento Blood', 'https://embedder.net/e/movie?imdb=tt9777644')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Destacamento Blood</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Contos Sombrios', 'https://embedder.net/e/movie?imdb=tt8954352')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2hXLV4PMgu8blPtvGEDlIVumwul.jpg);"></div>
<a onclick="openMovie('Contos Sombrios', 'https://embedder.net/e/movie?imdb=tt8954352')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Contos Sombrios</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Batem à Porta', 'https://embedder.net/e/movie?imdb=tt15679400')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/94Gfu9vxUAVeL8EHc9toT9nGLkv.jpg);"></div>
<a onclick="openMovie('Batem à Porta', 'https://embedder.net/e/movie?imdb=tt15679400')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Batem à Porta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Acampamento Maldito', 'https://embedder.net/e/movie?imdb=tt2789014')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ayMAxYTvCMWCQKG84dRT8ZEa0GC.jpg);"></div>
<a onclick="openMovie('Acampamento Maldito', 'https://embedder.net/e/movie?imdb=tt2789014')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Acampamento Maldito</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Lista de Beijos', 'https://embedder.net/e/movie?imdb=tt19753884')" class="full-click"></a>        
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xVNUvJpvfu1ggHz1NZ0ilFfmFeW.jpg);"></div>
<a onclick="openMovie('A Lista de Beijos', 'https://embedder.net/e/movie?imdb=tt19753884')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Lista de Beijos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Aqua Teen Forever: Plantasm', 'https://embedder.net/e/movie?imdb=tt14636190')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dzMfgDxEOfFdw6WIaoC94CayYWL.jpg);"></div>
<a onclick="openMovie('Aqua Teen Forever: Plantasm', 'https://embedder.net/e/movie?imdb=tt14636190')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Aqua Teen Forever: Plantasm</h5>
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
