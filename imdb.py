from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Cercados', 'https://embedder.net/e/movie?imdb=tt2572212')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/53zYYgWqxxmTaMlsIfiCWCLRwJf.jpg);"></div>
<a onclick="openMovie('Cercados', 'https://embedder.net/e/movie?imdb=tt2572212')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Cercados</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Colheita Sombria', 'https://embedder.net/e/movie?imdb=tt9204328')" class="full-click"></a>        
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eeePA5kvAt5swaBAi3YLJjLDHHz.jpg);"></div>
<a onclick="openMovie('Colheita Sombria', 'https://embedder.net/e/movie?imdb=tt9204328')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Colheita Sombria</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Conferência Mortal', 'https://embedder.net/e/movie?imdb=tt26547864')" class="full-click"></a>     
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nGaXnZmSpEKlg16e6PNxWga3UJL.jpg);"></div>
<a onclick="openMovie('Conferência Mortal', 'https://embedder.net/e/movie?imdb=tt26547864')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Conferência Mortal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Crypto Boy', 'https://embedder.net/e/movie?imdb=tt24785544')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6QOukjAgAm9L1WNiOjqJzlg5luU.jpg);"></div>
<a onclick="openMovie('Crypto Boy', 'https://embedder.net/e/movie?imdb=tt24785544')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Crypto Boy</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Diamantes do Caos', 'https://embedder.net/e/movie?imdb=tt29168830')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sBH3IkwCCMGIWAkdQ00tOEmLPkm.jpg);"></div>
<a onclick="openMovie('Diamantes do Caos', 'https://embedder.net/e/movie?imdb=tt29168830')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Diamantes do Caos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Jogando a Linha', 'https://embedder.net/e/movie?imdb=tt9201772')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tQpEqBoOWkNJRGpSQDTTsXCxVVL.jpg);"></div>
<a onclick="openMovie('Jogando a Linha', 'https://embedder.net/e/movie?imdb=tt9201772')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Jogando a Linha</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Disco Inferno', 'https://embedder.net/e/movie?imdb=tt29291452')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mqlHnsj2l7NkXbmu7ZXcVvP8uda.jpg);"></div>
<a onclick="openMovie('Disco Inferno', 'https://embedder.net/e/movie?imdb=tt29291452')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Disco Inferno</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Kandasamys: O Bebê', 'https://embedder.net/e/movie?imdb=tt27048691')" class="full-click"></a>     
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/byF0OTIt67FXCqan5bjPgF1v0Hi.jpg);"></div>
<a onclick="openMovie('Kandasamys: O Bebê', 'https://embedder.net/e/movie?imdb=tt27048691')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Kandasamys: O Bebê</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Assassinos da Lua das Flores', 'https://embedder.net/e/movie?imdb=tt5537002')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sz0HswdqLa6I5ialoyBvn5gm0r5.jpg);"></div>
<a onclick="openMovie('Assassinos da Lua das Flores', 'https://embedder.net/e/movie?imdb=tt5537002')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Assassinos da Lua das Flores</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Massa Cinzenta', 'https://embedder.net/e/movie?imdb=tt25947954')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4EuZtw5Z6dVn5IOe7whR9Qy8UET.jpg);"></div>
<a onclick="openMovie('Massa Cinzenta', 'https://embedder.net/e/movie?imdb=tt25947954')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Massa Cinzenta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Mortal Kombat Legends: Cage - Bom de Briga', 'https://embedder.net/e/movie?imdb=tt22698070')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1eKWqTHp4OgKdx1QX1O9LxKHr1M.jpg);"></div>
<a onclick="openMovie('Mortal Kombat Legends: Cage - Bom de Briga', 'https://embedder.net/e/movie?imdb=tt22698070')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Mortal Kombat Legends: Cage - Bom de Briga</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Próprio Enterro', 'https://embedder.net/e/movie?imdb=tt5648882')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4Fxb4goCtkHluDwymYvHW1xoC6P.jpg);"></div>
<a onclick="openMovie('O Próprio Enterro', 'https://embedder.net/e/movie?imdb=tt5648882')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Próprio Enterro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Diabo no Tribunal', 'https://embedder.net/e/movie?imdb=tt28810493')" class="full-click"></a>    
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6ZxFx9aQkZyd2SbxKt59x8WooPQ.jpg);"></div>
<a onclick="openMovie('O Diabo no Tribunal', 'https://embedder.net/e/movie?imdb=tt28810493')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Diabo no Tribunal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Porteiro', 'https://embedder.net/e/movie?imdb=tt28603694')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8UIXPu4LRu6Zho8ruWhIjpeY439.jpg);"></div>
<a onclick="openMovie('O Porteiro', 'https://embedder.net/e/movie?imdb=tt28603694')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Porteiro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sayen: A Rota Seca', 'https://embedder.net/e/movie?imdb=tt27351936')" class="full-click"></a>     
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bPf85Ro1XgWnhJMfAZa3SdQ4Muf.jpg);"></div>
<a onclick="openMovie('Sayen: A Rota Seca', 'https://embedder.net/e/movie?imdb=tt27351936')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sayen: A Rota Seca</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Scarygirl', 'https://embedder.net/e/movie?imdb=tt4556264')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1tcLXVaXFG9OObnCN3a5KrymrQG.jpg);"></div>
<a onclick="openMovie('Scarygirl', 'https://embedder.net/e/movie?imdb=tt4556264')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Scarygirl</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Tiozões', 'https://embedder.net/e/movie?imdb=tt18394190')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pslwfOD7sFLmpRcHklHOFf2aoDi.jpg);"></div>
<a onclick="openMovie('Tiozões', 'https://embedder.net/e/movie?imdb=tt18394190')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Tiozões</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Tudo Por um Ex-Namorado', 'https://embedder.net/e/movie?imdb=tt15819902')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wd7Y9KCVDUzEIj1j1o3EZSxaKcU.jpg);"></div>
<a onclick="openMovie('Tudo Por um Ex-Namorado', 'https://embedder.net/e/movie?imdb=tt15819902')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Tudo Por um Ex-Namorado</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Se Beber, Não Case!', 'https://embedder.net/e/movie?imdb=tt1119646')" class="full-click"></a>     
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6Hi9g065cxrQc2TLh5zwmTOurvK.jpg);"></div>
<a onclick="openMovie('Se Beber, Não Case!', 'https://embedder.net/e/movie?imdb=tt1119646')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Se Beber, Não Case!</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Se Beber, Não Case! - Parte II', 'https://embedder.net/e/movie?imdb=tt1411697')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lvwO6R9RImeq3UBbh6DPWG3Iiqw.jpg);"></div>
<a onclick="openMovie('Se Beber, Não Case! - Parte II', 'https://embedder.net/e/movie?imdb=tt1411697')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Se Beber, Não Case! - Parte II</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Chamada', 'https://embedder.net/e/movie?imdb=tt6906292')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eqaSh2PjYcGpS6rybz6UjLNuvrg.jpg);"></div>
<a onclick="openMovie('A Chamada', 'https://embedder.net/e/movie?imdb=tt6906292')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Chamada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Outra Zoey', 'https://embedder.net/e/movie?imdb=tt11951276')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9lZd2rV8Jgupu2bGTVgahKj5Gvc.jpg);"></div>
<a onclick="openMovie('A Outra Zoey', 'https://embedder.net/e/movie?imdb=tt11951276')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Outra Zoey</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Ressurreição da Múmia', 'https://embedder.net/e/movie?imdb=tt20141822')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qIrJYG0ffdbkR0f0a6slVLXOnjQ.jpg);"></div>
<a onclick="openMovie('A Ressurreição da Múmia', 'https://embedder.net/e/movie?imdb=tt20141822')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Ressurreição da Múmia</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Vida Diante de Seus Olhos', 'https://embedder.net/e/movie?imdb=tt29291436')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/djREwz46Ssm5LlMD9yN2ckvzVWU.jpg);"></div>
<a onclick="openMovie('A Vida Diante de Seus Olhos', 'https://embedder.net/e/movie?imdb=tt29291436')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Vida Diante de Seus Olhos</h5>
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
