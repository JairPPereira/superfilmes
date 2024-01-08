from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('South Park (Não Recomendado Para Menores)', 'https://embedder.net/e/movie?imdb=tt30505159')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/opc6DIkByOp9vOt14jzfu8oVjbM.jpg);"></div>
<a onclick="openMovie('South Park (Não Recomendado Para Menores)', 'https://embedder.net/e/movie?imdb=tt30505159')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">South Park (Não Recomendado Para Menores)</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Mission', 'https://embedder.net/e/movie?imdb=tt28097834')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kSLbmZ6R1VaNM1Kr1EJcdvHV94v.jpg);"></div>
<a onclick="openMovie('The Mission', 'https://embedder.net/e/movie?imdb=tt28097834')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Mission</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Marinette', 'https://embedder.net/e/movie?imdb=tt20251542')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/opijCRwdFICFPhROwHEEjocgIeo.jpg);"></div>
<a onclick="openMovie('Marinette', 'https://embedder.net/e/movie?imdb=tt20251542')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Marinette</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Natal com Teddy', 'https://embedder.net/e/movie?imdb=tt21054736')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ltk2gZxM0UEXvbyptuviGMBiRqk.jpg);"></div>
<a onclick="openMovie('Um Natal com Teddy', 'https://embedder.net/e/movie?imdb=tt21054736')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Natal com Teddy</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Mil e Um', 'https://embedder.net/e/movie?imdb=tt12427158')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5zshgJxnUp409zZ9ULRKsLuLVWf.jpg);"></div>
<a onclick="openMovie('Mil e Um', 'https://embedder.net/e/movie?imdb=tt12427158')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Mil e Um</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Minha Casa', 'https://embedder.net/e/movie?imdb=tt13431018')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qbDfpHOgvnxIhVJLunxXFDL6fG5.jpg);"></div>
<a onclick="openMovie('Minha Casa', 'https://embedder.net/e/movie?imdb=tt13431018')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Minha Casa</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Quatro Histórias de Desejo 2', 'https://embedder.net/e/movie?imdb=tt27989067')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hPJ8I4ehMFEp9bmOg12Ay7gg021.jpg);"></div>
<a onclick="openMovie('Quatro Histórias de Desejo 2', 'https://embedder.net/e/movie?imdb=tt27989067')" class="media-play"><i class="icofont-ui-play"></i></a> 
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Quatro Histórias de Desejo 2</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sex Games', 'https://embedder.net/e/movie?imdb=tt27551883')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9U47u3cDXTPgxAFqns0Sur9DvyV.jpg);"></div>
<a onclick="openMovie('Sex Games', 'https://embedder.net/e/movie?imdb=tt27551883')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sex Games</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('12 Horas Para o Fim do Mundo', 'https://embedder.net/e/movie?imdb=tt15296186')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gurQloozD4oBjjCBhqm3KPjxWxL.jpg);"></div>
<a onclick="openMovie('12 Horas Para o Fim do Mundo', 'https://embedder.net/e/movie?imdb=tt15296186')" class="media-play"><i class="icofont-ui-play"></i></a> 
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">12 Horas Para o Fim do Mundo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Fuga das Galinhas: A Ameaça dos Nuggets', 'https://embedder.net/e/movie?imdb=tt8337264')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3ZpbQ571GHAYIZl1zqZ3Non75Y7.jpg);"></div>
<a onclick="openMovie('A Fuga das Galinhas: A Ameaça dos Nuggets', 'https://embedder.net/e/movie?imdb=tt8337264')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Fuga das Galinhas: A Ameaça dos Nuggets</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Megera Domada 2', 'https://embedder.net/e/movie?imdb=tt30225700')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/k00QQRSHFbz1miYda8QxclXLAyk.jpg);"></div>
<a onclick="openMovie('A Megera Domada 2', 'https://embedder.net/e/movie?imdb=tt30225700')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Megera Domada 2</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Bruxa do Gelo', 'https://embedder.net/e/movie?imdb=tt9383752')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nE8kvNUcEQ1HhILzT5gDPM5Lj25.jpg);"></div>
<a onclick="openMovie('A Bruxa do Gelo', 'https://embedder.net/e/movie?imdb=tt9383752')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Bruxa do Gelo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Ressurreição de Charles Manson', 'https://embedder.net/e/movie?imdb=tt18362708')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pB090ok6FEOAqPG2rVMdW7jxJe9.jpg);"></div>
<a onclick="openMovie('A Ressurreição de Charles Manson', 'https://embedder.net/e/movie?imdb=tt18362708')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Ressurreição de Charles Manson</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Aquaman 2: O Reino Perdido', 'https://embedder.net/e/movie?imdb=tt9663764')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2Mys5JCHhUH6DE9YxLFFZaCsOHu.jpg);"></div>
<a onclick="openMovie('Aquaman 2: O Reino Perdido', 'https://embedder.net/e/movie?imdb=tt9663764')" class="media-play"><i class="icofont-ui-play"></i></a>    
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Aquaman 2: O Reino Perdido</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Casamento Grego 3', 'https://embedder.net/e/movie?imdb=tt21103300')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hVmsjW1QEIJ8ixG0H6ymqBqaxEc.jpg);"></div>
<a onclick="openMovie('Casamento Grego 3', 'https://embedder.net/e/movie?imdb=tt21103300')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Casamento Grego 3</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Homem dos Sonhos', 'https://embedder.net/e/movie?imdb=tt21942866')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zEq3hBlXMD22Oq0Z3KXzHQDR4g4.jpg);"></div>
<a onclick="openMovie('O Homem dos Sonhos', 'https://embedder.net/e/movie?imdb=tt21942866')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Homem dos Sonhos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Família', 'https://embedder.net/e/movie?imdb=tt27828085')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5LyiadeCXEsoqmph0fZZhoCBWJa.jpg);"></div>
<a onclick="openMovie('Família', 'https://embedder.net/e/movie?imdb=tt27828085')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Família</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Finestkind', 'https://embedder.net/e/movie?imdb=tt7991508')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/90D6sXfbXKhDpd4S1cHICdAe8VD.jpg);"></div>
<a onclick="openMovie('Finestkind', 'https://embedder.net/e/movie?imdb=tt7991508')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Finestkind</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Godzilla Minus One', 'https://embedder.net/e/movie?imdb=tt23289160')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/iXrCBynsyRGbOtoBeWjt1bRINuA.jpg);"></div>
<a onclick="openMovie('Godzilla Minus One', 'https://embedder.net/e/movie?imdb=tt23289160')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Godzilla Minus One</h5>
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
