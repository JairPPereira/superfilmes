from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Babylon 5: O Caminho', 'https://embedder.net/e/movie?imdb=tt27712788')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zaXdRG8bCdK923JsmSej37j517C.jpg);"></div>
<a onclick="openMovie('Babylon 5: O Caminho', 'https://embedder.net/e/movie?imdb=tt27712788')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Babylon 5: O Caminho</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Sorte Grande', 'https://embedder.net/e/movie?imdb=tt8129806')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/e2DiRIkVUURXD40JxcrO1D1i8Og.jpg);"></div>
<a onclick="openMovie('A Sorte Grande', 'https://embedder.net/e/movie?imdb=tt8129806')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Sorte Grande</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('10 Dias de um Homem Mau', 'https://embedder.net/e/movie?imdb=tt24852002')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fl0vUwiKyxEauecs9UCh8cGRzZH.jpg);"></div>
<a onclick="openMovie('10 Dias de um Homem Mau', 'https://embedder.net/e/movie?imdb=tt24852002')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">10 Dias de um Homem Mau</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Geração do Mal', 'https://embedder.net/e/movie?imdb=tt13419036')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xcHUuWAUHT7aAoV6IddtgD0qUVI.jpg);"></div>
<a onclick="openMovie('A Geração do Mal', 'https://embedder.net/e/movie?imdb=tt13419036')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Geração do Mal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Amor² para Sempre', 'https://embedder.net/e/movie?imdb=tt28496500')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cD67jLjJcPKFyIRlyLmECyENrz6.jpg);"></div>
<a onclick="openMovie('Amor² para Sempre', 'https://embedder.net/e/movie?imdb=tt28496500')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Amor² para Sempre</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Baby Blue', 'https://embedder.net/e/movie?imdb=tt18376800')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pC6j3tSoneNbe4pjjtGOcWWxGMU.jpg);"></div>
<a onclick="openMovie('Baby Blue', 'https://embedder.net/e/movie?imdb=tt18376800')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Baby Blue</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Magic Carpet Rides', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vp9GeAQDUbJ1vExJSWIduBPrKtM.jpg);"></div>
<a onclick="openMovie('Magic Carpet Rides', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Magic Carpet Rides</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Clube de Leitores Assassinos', 'https://embedder.net/e/movie?imdb=tt18260564')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rn7PFMpdUUEPxaf6AYMVF91DUfJ.jpg);"></div>
<a onclick="openMovie('O Clube de Leitores Assassinos', 'https://embedder.net/e/movie?imdb=tt18260564')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Clube de Leitores Assassinos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Melhor Lugar da Terra', 'https://embedder.net/e/movie?imdb=tt14542504')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sL44B6R6yjuWWqUQENQRQUsHFfI.jpg);"></div>
<a onclick="openMovie('O Melhor Lugar da Terra', 'https://embedder.net/e/movie?imdb=tt14542504')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Melhor Lugar da Terra</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Falsificador', 'https://embedder.net/e/movie?imdb=tt15403362')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2Es52cS0Cu44UxpeICzN1GxFmnF.jpg);"></div>
<a onclick="openMovie('O Falsificador', 'https://embedder.net/e/movie?imdb=tt15403362')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Falsificador</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Portal Secreto', 'https://embedder.net/e/movie?imdb=tt11820950')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3mu3olAbPYTm4GkEdsr6Bk1MU5.jpg);"></div> 
<a onclick="openMovie('O Portal Secreto', 'https://embedder.net/e/movie?imdb=tt11820950')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Portal Secreto</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Irmãos Aventura: O Filme', 'https://embedder.net/e/movie?imdb=tt14636186')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oGX6dBRHjO2FsQG5FaNpS7NOtFs.jpg);"></div>
<a onclick="openMovie('Os Irmãos Aventura: O Filme', 'https://embedder.net/e/movie?imdb=tt14636186')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Irmãos Aventura: O Filme</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Pastacolypse', 'https://embedder.net/e/movie?imdb=tt20247162')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4skTPWLXrIpHh0BU6Rmi0a1y5hb.jpg);"></div>
<a onclick="openMovie('Pastacolypse', 'https://embedder.net/e/movie?imdb=tt20247162')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Pastacolypse</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Tomorrow Job', 'https://embedder.net/e/movie?imdb=tt14672882')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/Ah3pJ3iuX28PKHjGLyIrEsFVq5q.jpg);"></div>
<a onclick="openMovie('The Tomorrow Job', 'https://embedder.net/e/movie?imdb=tt14672882')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Tomorrow Job</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sympathy for the Devil', 'https://embedder.net/e/movie?imdb=tt21991654')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/afGdVMa80LMs6ibLP22CwM5uI4e.jpg);"></div>
<a onclick="openMovie('Sympathy for the Devil', 'https://embedder.net/e/movie?imdb=tt21991654')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sympathy for the Devil</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Sete Pecados Capitais: Fúria de Edimburgo – Parte 2', 'https://embedder.net/e/movie?imdb=tt25010142')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tCEFjPGeaQJldoDpqDiDBdOH8GA.jpg);"></div>
<a onclick="openMovie('Os Sete Pecados Capitais: Fúria de Edimburgo – Parte 2', 'https://embedder.net/e/movie?imdb=tt25010142')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Sete Pecados Capitais: Fúria de Edimburgo – Parte 2</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Nikki e Nora: Gêmeas em Ação', 'https://embedder.net/e/movie?imdb=tt21969174')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8bcg5Xtzj8Sg5ivEdjt0DOe3WSR.jpg);"></div>
<a onclick="openMovie('Nikki e Nora: Gêmeas em Ação', 'https://embedder.net/e/movie?imdb=tt21969174')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Nikki e Nora: Gêmeas em Ação</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Murder City', 'https://embedder.net/e/movie?imdb=tt2583014')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1hFtSsYryX2dTGXWHSynGPsASOD.jpg);"></div>
<a onclick="openMovie('Murder City', 'https://embedder.net/e/movie?imdb=tt2583014')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Murder City</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Murder at the Murder Mystery Party', 'https://embedder.net/e/movie?imdb=tt26828542')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/grZfIESG5f4hQhcsC7LKYljCghl.jpg);"></div>
<a onclick="openMovie('Murder at the Murder Mystery Party', 'https://embedder.net/e/movie?imdb=tt26828542')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Murder at the Murder Mystery Party</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Férias em Taipei', 'https://embedder.net/e/movie?imdb=tt11947100')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/o6TMfQn6RsWmJVtCoCKk04sQcID.jpg);"></div>
<a onclick="openMovie('Férias em Taipei', 'https://embedder.net/e/movie?imdb=tt11947100')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Férias em Taipei</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Entre Mulheres', 'https://embedder.net/e/movie?imdb=tt13669038')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lH5qPokImvjzg18DxURFS3Clmyw.jpg);"></div>
<a onclick="openMovie('Entre Mulheres', 'https://embedder.net/e/movie?imdb=tt13669038')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Entre Mulheres</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Em Outros Tempos', 'https://embedder.net/e/movie?imdb=tt14967472')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hM1WknAN6uOeH2YxTQ9RaI0C3Uj.jpg);"></div>
<a onclick="openMovie('Em Outros Tempos', 'https://embedder.net/e/movie?imdb=tt14967472')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Em Outros Tempos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Em Algum Lugar do Queens', 'https://embedder.net/e/movie?imdb=tt14097180')" class="full-click"></a>     
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/AenJ68E9z4IeasZs72jUgwO4Fo5.jpg);"></div>
<a onclick="openMovie('Em Algum Lugar do Queens', 'https://embedder.net/e/movie?imdb=tt14097180')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Em Algum Lugar do Queens</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Devil's Peak', 'https://embedder.net/e/movie?imdb=tt10980638')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1zMicGEwmGJTcxKT6h7mORVmORL.jpg);"></div>
<a onclick="openMovie('Devil's Peak', 'https://embedder.net/e/movie?imdb=tt10980638')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Devil's Peak</h5>
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
