from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ritual Maldito', 'https://embedder.net/e/movie?imdb=tt12980286')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lxkSuHgWDNWIoJ6hu6wEaUSqZ1k.jpg);"></div>
<a onclick="openMovie('Ritual Maldito', 'https://embedder.net/e/movie?imdb=tt12980286')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ritual Maldito</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Valentina Despertando Para Os Sonhos', 'https://embedder.net/e/movie?imdb=tt16277374')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lPslknj3CohVLrKwElVJwRvafPe.jpg);"></div>
<a onclick="openMovie('Valentina Despertando Para Os Sonhos', 'https://embedder.net/e/movie?imdb=tt16277374')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Valentina Despertando Para Os Sonhos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Lenda da Serpente', 'https://embedder.net/e/movie?imdb=tt9288776')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lmJsSOQtuU7xwN48ATCPrI96ENM.jpg);"></div>
<a onclick="openMovie('A Lenda da Serpente', 'https://embedder.net/e/movie?imdb=tt9288776')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Lenda da Serpente</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Romance Perfeito', 'https://embedder.net/e/movie?imdb=tt14460090')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8sFlJzuVXsva7z154JN9eLWBUfH.jpg);"></div>
<a onclick="openMovie('Um Romance Perfeito', 'https://embedder.net/e/movie?imdb=tt14460090')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Romance Perfeito</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Novo Conto de Natal', 'https://embedder.net/e/movie?imdb=tt23752770')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/t8DhkXo7xKFKLeBqHddHz1VM1eh.jpg);"></div>
<a onclick="openMovie('Um Novo Conto de Natal', 'https://embedder.net/e/movie?imdb=tt23752770')" class="media-play"><i class="icofont-ui-play"></i></a>       
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Novo Conto de Natal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Natal para Chueco', 'https://embedder.net/e/movie?imdb=tt30399498')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1kkSj7KAWRR9fWmyPYfp4bLJKQr.jpg);"></div>
<a onclick="openMovie('Um Natal para Chueco', 'https://embedder.net/e/movie?imdb=tt30399498')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Natal para Chueco</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Lugar para Voltar', 'https://embedder.net/e/movie?imdb=tt13615030')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zD46NlpUEDKwZxP9HMzuTNKVA2B.jpg);"></div>
<a onclick="openMovie('Um Lugar para Voltar', 'https://embedder.net/e/movie?imdb=tt13615030')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Lugar para Voltar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Rejeitados', 'https://embedder.net/e/movie?imdb=tt14849194')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nuljFk9VbHR8JPPl2uNbu9aMlqg.jpg);"></div>
<a onclick="openMovie('Os Rejeitados', 'https://embedder.net/e/movie?imdb=tt14849194')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Rejeitados</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Tempos Super Modernos', 'https://embedder.net/e/movie?imdb=tt10960102')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/n2lmXVxfXcTk9lnlGbWUuS8JTNF.jpg);"></div>
<a onclick="openMovie('Tempos Super Modernos', 'https://embedder.net/e/movie?imdb=tt10960102')" class="media-play"><i class="icofont-ui-play"></i></a>        
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Tempos Super Modernos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sem Ar', 'https://embedder.net/e/movie?imdb=tt13566172')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/PSCKrkl3jPqe3f6Dbx3Tic1I5i.jpg);"></div>
<a onclick="openMovie('Sem Ar', 'https://embedder.net/e/movie?imdb=tt13566172')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sem Ar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Scrooge: Um Conto de Natal', 'https://embedder.net/e/movie?imdb=tt20917338')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2jR1JmDCOKbOIfTc3a9pQV36EpZ.jpg);"></div>
<a onclick="openMovie('Scrooge: Um Conto de Natal', 'https://embedder.net/e/movie?imdb=tt20917338')" class="media-play"><i class="icofont-ui-play"></i></a>   
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Scrooge: Um Conto de Natal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Rumble Through the Dark', 'https://embedder.net/e/movie?imdb=tt10950320')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/19UbYIT9WEQS5qSD3BREDxVXk8g.jpg);"></div>
<a onclick="openMovie('Rumble Through the Dark', 'https://embedder.net/e/movie?imdb=tt10950320')" class="media-play"><i class="icofont-ui-play"></i></a>      
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Rumble Through the Dark</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Priscilla', 'https://embedder.net/e/movie?imdb=tt22041854')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gn5Qt8X7cltcYC5HYBXgLQZEogM.jpg);"></div>
<a onclick="openMovie('Priscilla', 'https://embedder.net/e/movie?imdb=tt22041854')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Priscilla</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Presságios', 'https://embedder.net/e/movie?imdb=tt3963674')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dinY8mjw6NLMmyPZHjyQYlGmKaN.jpg);"></div>
<a onclick="openMovie('Presságios', 'https://embedder.net/e/movie?imdb=tt3963674')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Presságios</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Иванов катер', 'https://embedder.net/e/movie?imdb=tt0176861')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1d6tpDYQvX3JxGniSlPp7DWUmIH.jpg);"></div>
<a onclick="openMovie('Иванов катер', 'https://embedder.net/e/movie?imdb=tt0176861')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Иванов катер</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ouija - Invocando o Mal', 'https://embedder.net/e/movie?imdb=tt10990970')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/Ah0HQiYAgjfi9PwdznzXSLW70xn.jpg);"></div>
<a onclick="openMovie('Ouija - Invocando o Mal', 'https://embedder.net/e/movie?imdb=tt10990970')" class="media-play"><i class="icofont-ui-play"></i></a>      
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ouija - Invocando o Mal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Rio do Terror', 'https://embedder.net/e/movie?imdb=tt16106000')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/AaXAYapF1bmSMekElaCuj1P1Xon.jpg);"></div>
<a onclick="openMovie('O Rio do Terror', 'https://embedder.net/e/movie?imdb=tt16106000')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Rio do Terror</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Aventureiros do Bairro Proibido', 'https://embedder.net/e/movie?imdb=tt0090728')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wjziUc5HK1emyez9lBGHre3jD4i.jpg);"></div>
<a onclick="openMovie('Os Aventureiros do Bairro Proibido', 'https://embedder.net/e/movie?imdb=tt0090728')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Aventureiros do Bairro Proibido</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Piloto - Uma Batalha Pela Sobrevivência', 'https://embedder.net/e/movie?imdb=tt14303882')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mRV9tKNpxRvN8ezShKkwaFBsrw5.jpg);"></div>
<a onclick="openMovie('O Piloto - Uma Batalha Pela Sobrevivência', 'https://embedder.net/e/movie?imdb=tt14303882')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Piloto - Uma Batalha Pela Sobrevivência</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Mistério da Floresta', 'https://embedder.net/e/movie?imdb=tt9145510')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/59ZFASEFZWoB4QJQglVJeSwM57U.jpg);"></div>
<a onclick="openMovie('O Mistério da Floresta', 'https://embedder.net/e/movie?imdb=tt9145510')" class="media-play"><i class="icofont-ui-play"></i></a>        
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Mistério da Floresta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Culto de Amityville', 'https://embedder.net/e/movie?imdb=tt13729068')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8tLosHyehDDWtM3GfrVlmlPEKuX.jpg);"></div>
<a onclick="openMovie('O Culto de Amityville', 'https://embedder.net/e/movie?imdb=tt13729068')" class="media-play"><i class="icofont-ui-play"></i></a>        
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Culto de Amityville</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Jantar Está Servido', 'https://embedder.net/e/movie?imdb=tt8997712')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/d0Ebzxx0YrBM7KP8SCmeIqkER5t.jpg);"></div>
<a onclick="openMovie('O Jantar Está Servido', 'https://embedder.net/e/movie?imdb=tt8997712')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Jantar Está Servido</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Noite Infeliz', 'https://embedder.net/e/movie?imdb=tt12003946')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ooWaKY6CgJVamHg1hnnNf4pl2xR.jpg);"></div>
<a onclick="openMovie('Noite Infeliz', 'https://embedder.net/e/movie?imdb=tt12003946')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Noite Infeliz</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Não Odeie', 'https://embedder.net/e/movie?imdb=tt8571674')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/a8lQe4db7tqHiov2tHw6vqQllps.jpg);"></div>
<a onclick="openMovie('Não Odeie', 'https://embedder.net/e/movie?imdb=tt8571674')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Não Odeie</h5>
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
