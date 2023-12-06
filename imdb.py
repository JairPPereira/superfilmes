from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Fada Veio Me Visitar', 'https://embedder.net/e/movie?imdb=tt28515096')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/atxRkJD5gvBDl8m02UZtoA6jwNr.jpg);"></div>
<a onclick="openMovie('Uma Fada Veio Me Visitar', 'https://embedder.net/e/movie?imdb=tt28515096')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Fada Veio Me Visitar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Trocados', 'https://embedder.net/e/movie?imdb=tt14227048')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qvzfsE88SJAKql3IGl2Y2KdQpAV.jpg);"></div>
<a onclick="openMovie('Trocados', 'https://embedder.net/e/movie?imdb=tt14227048')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Trocados</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Travessuras de Natal', 'https://embedder.net/e/movie?imdb=tt16491414')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/l3qGXGEE6GgcLBdlsmhR2NuZZIy.jpg);"></div>
<a onclick="openMovie('Travessuras de Natal', 'https://embedder.net/e/movie?imdb=tt16491414')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Travessuras de Natal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Tempos de Barbárie – Ato I: Terapia de Vingança', 'https://embedder.net/e/movie?imdb=tt28697115')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fB4SsQK4OW1CZYGySRfJmMs2hhx.jpg);"></div>
<a onclick="openMovie('Tempos de Barbárie – Ato I: Terapia de Vingança', 'https://embedder.net/e/movie?imdb=tt28697115')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Tempos de Barbárie – Ato I: Terapia de Vingança</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ritmo de Natal', 'https://embedder.net/e/movie?imdb=tt29491281')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yVw1ZoyQ6dF6qVRFsD36Ye3ifdH.jpg);"></div>
<a onclick="openMovie('Ritmo de Natal', 'https://embedder.net/e/movie?imdb=tt29491281')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ritmo de Natal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Paisagem com Mão Invisível', 'https://embedder.net/e/movie?imdb=tt7645334')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qAdpCl52gwMV3JFFRB7UXOb3AjE.jpg);"></div>
<a onclick="openMovie('Paisagem com Mão Invisível', 'https://embedder.net/e/movie?imdb=tt7645334')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Paisagem com Mão Invisível</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Caras Malvados: Um Natal do Mal', 'https://embedder.net/e/movie?imdb=tt28863512')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tHTEgWMPg7AdeotObEUqdOo98Zx.jpg);"></div>
<a onclick="openMovie('Os Caras Malvados: Um Natal do Mal', 'https://embedder.net/e/movie?imdb=tt28863512')" class="media-play"><i class="icofont-ui-play"></i></a>  
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Caras Malvados: Um Natal do Mal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ninguém é de Ninguém', 'https://embedder.net/e/movie?imdb=tt24325846')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wBkP0yXOywAAU9tcqgXaJJjtfqz.jpg);"></div>
<a onclick="openMovie('Ninguém é de Ninguém', 'https://embedder.net/e/movie?imdb=tt24325846')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ninguém é de Ninguém</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Não Enche!', 'https://embedder.net/e/movie?imdb=tt28444644')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jX8vNKif3C8UPc5pNHnyCz0sr5X.jpg);"></div>
<a onclick="openMovie('Não Enche!', 'https://embedder.net/e/movie?imdb=tt28444644')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Não Enche!</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Na Hora da Virada', 'https://embedder.net/e/movie?imdb=tt9783730')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jbAoqJUA6mOJTKhVbJXaqNPmW6Z.jpg);"></div>
<a onclick="openMovie('Na Hora da Virada', 'https://embedder.net/e/movie?imdb=tt9783730')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Na Hora da Virada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Minha Família Quer que Eu Case', 'https://embedder.net/e/movie?imdb=tt13430858')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uPnDVNrtIZDHKmvCWN5dMGzI4Uu.jpg);"></div>
<a onclick="openMovie('Minha Família Quer que Eu Case', 'https://embedder.net/e/movie?imdb=tt13430858')" class="media-play"><i class="icofont-ui-play"></i></a>      
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Minha Família Quer que Eu Case</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('George Foreman: Sua História', 'https://embedder.net/e/movie?imdb=tt12226632')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/65k7FeAQfYCUXml5vT1vvHAYJoD.jpg);"></div>
<a onclick="openMovie('George Foreman: Sua História', 'https://embedder.net/e/movie?imdb=tt12226632')" class="media-play"><i class="icofont-ui-play"></i></a>        
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">George Foreman: Sua História</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Fluxo', 'https://embedder.net/e/movie?imdb=tt14399538')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mDBN58VZHct93SyqWGj4fpOgLlu.jpg);"></div>
<a onclick="openMovie('Fluxo', 'https://embedder.net/e/movie?imdb=tt14399538')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Fluxo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Doce Amor de Inverno', 'https://embedder.net/e/movie?imdb=tt22189742')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/Sp2vUXCAKvma23CUxWUW7QjShL.jpg);"></div>
<a onclick="openMovie('Doce Amor de Inverno', 'https://embedder.net/e/movie?imdb=tt22189742')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Doce Amor de Inverno</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Dias Difíceis', 'https://embedder.net/e/movie?imdb=tt26594589')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4UpMPxy0K1XFdH6OgcnWZgCbqg3.jpg);"></div>
<a onclick="openMovie('Dias Difíceis', 'https://embedder.net/e/movie?imdb=tt26594589')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Dias Difíceis</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Baby Ruby', 'https://embedder.net/e/movie?imdb=tt21448540')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qUizkrlKbT4nHXUElvnIrjcPsDd.jpg);"></div>
<a onclick="openMovie('Baby Ruby', 'https://embedder.net/e/movie?imdb=tt21448540')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Baby Ruby</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Natal Prometido 2', 'https://embedder.net/e/movie?imdb=tt29483952')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lOhpKjDk32Ly9Q5PCXWGcXRasbe.jpg);"></div>
<a onclick="openMovie('O Natal Prometido 2', 'https://embedder.net/e/movie?imdb=tt29483952')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Natal Prometido 2</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Meu Nome é Gal', 'https://embedder.net/e/movie?imdb=tt18244348')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zWKWDxF2oCYvl7PoShG253oIp27.jpg);"></div>
<a onclick="openMovie('Meu Nome é Gal', 'https://embedder.net/e/movie?imdb=tt18244348')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Meu Nome é Gal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Eulália', 'https://embedder.net/e/movie?imdb=tt28570523')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vk09bOU0CM0FIzQZhnjURlQmcxs.jpg);"></div>
<a onclick="openMovie('Eulália', 'https://embedder.net/e/movie?imdb=tt28570523')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Eulália</h5>
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
