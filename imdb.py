from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Jogos Vorazes: A Cantiga dos Pássaros e das Serpentes', 'https://embedder.net/e/movie?imdb=tt10545296')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nNNxK2NwqHmAjuStya7SwOQeMwq.jpg);"></div>
    <a onclick="openMovie('Jogos Vorazes: A Cantiga dos Pássaros e das Serpentes', 'https://embedder.net/e/movie?imdb=tt10545296')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Jogos Vorazes: A Cantiga dos Pássaros e das Serpentes</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Um Chamado Natalino', 'https://embedder.net/e/movie?imdb=tt5608166')" class="full-click"></a>       
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hRKyfZoHndndMbvUGqjVbmuuOT9.jpg);"></div>
    <a onclick="openMovie('Um Chamado Natalino', 'https://embedder.net/e/movie?imdb=tt5608166')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Um Chamado Natalino</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Seja Meus Olhos', 'https://embedder.net/e/movie?imdb=tt17220590')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gJqDeuPGddm2ORNqYRkTxRRsTkL.jpg);"></div>
    <a onclick="openMovie('Seja Meus Olhos', 'https://embedder.net/e/movie?imdb=tt17220590')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Seja Meus Olhos</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Tem Algo de Errado com as Crianças', 'https://embedder.net/e/movie?imdb=tt16127696')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8ZFb1xE1D3HZl41dlpCfRZrXNdU.jpg);"></div>
    <a onclick="openMovie('Tem Algo de Errado com as Crianças', 'https://embedder.net/e/movie?imdb=tt16127696')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Tem Algo de Errado com as Crianças</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Rustin', 'https://embedder.net/e/movie?imdb=tt14160834')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lCawCmTJhKT7c2ZOzLBTXDIR8JS.jpg);"></div>
    <a onclick="openMovie('Rustin', 'https://embedder.net/e/movie?imdb=tt14160834')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Rustin</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Respect: A História de Aretha Franklin', 'https://embedder.net/e/movie?imdb=tt2452150')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1u672qYJpk2Ru4ejNo7eHl1zVws.jpg);"></div>
    <a onclick="openMovie('Respect: A História de Aretha Franklin', 'https://embedder.net/e/movie?imdb=tt2452150')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Respect: A História de Aretha Franklin</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Os Reis de Queenstown', 'https://embedder.net/e/movie?imdb=tt21448346')" class="full-click"></a>    
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3TuRHUEecBSZgPx40JZWOemzAwx.jpg);"></div>
    <a onclick="openMovie('Os Reis de Queenstown', 'https://embedder.net/e/movie?imdb=tt21448346')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Os Reis de Queenstown</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Novos Ricos', 'https://embedder.net/e/movie?imdb=tt27921620')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jfEuk5VdwaDN4UAGBPqUwZWAteg.jpg);"></div>
    <a onclick="openMovie('Novos Ricos', 'https://embedder.net/e/movie?imdb=tt27921620')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Novos Ricos</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Nos Vemos Em Vênus', 'https://embedder.net/e/movie?imdb=tt14960612')" class="full-click"></a>       
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nAhxlttDRAoJlP0IL1li460cMt3.jpg);"></div>
    <a onclick="openMovie('Nos Vemos Em Vênus', 'https://embedder.net/e/movie?imdb=tt14960612')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Nos Vemos Em Vênus</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Natal no Restaurante Chinês', 'https://embedder.net/e/movie?imdb=tt13937754')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gvWai64abofTjpZERA4xh6APzH5.jpg);"></div>
    <a onclick="openMovie('Natal no Restaurante Chinês', 'https://embedder.net/e/movie?imdb=tt13937754')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Natal no Restaurante Chinês</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Mercy: Golpe de Misericórdia', 'https://embedder.net/e/movie?imdb=tt26439204')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dXqeLm3Eq0HYKLfp9AeVdtd3eId.jpg);"></div>
    <a onclick="openMovie('Mercy: Golpe de Misericórdia', 'https://embedder.net/e/movie?imdb=tt26439204')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Mercy: Golpe de Misericórdia</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Luccas Neto em: Uma Aventura no Zoológico', 'https://embedder.net/e/movie?imdb=tt29952387')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/c13uqs7p5cNiuLBKKHsYYNcaZ1q.jpg);"></div>
    <a onclick="openMovie('Luccas Neto em: Uma Aventura no Zoológico', 'https://embedder.net/e/movie?imdb=tt29952387')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Luccas Neto em: Uma Aventura no Zoológico</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Casa do Carvalho - O Filme', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>     
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ueYgWeUbaNTam7mtG8AXH9vt6Hk.jpg);"></div>
    <a onclick="openMovie('Casa do Carvalho - O Filme', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Casa do Carvalho - O Filme</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Bihter: A Forbidden Passion', 'https://embedder.net/e/movie?imdb=tt26258488')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jfn5p0uC7cuxQSLvBNSWWQ7Iz6j.jpg);"></div>
    <a onclick="openMovie('Bihter: A Forbidden Passion', 'https://embedder.net/e/movie?imdb=tt26258488')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Bihter: A Forbidden Passion</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Believer 2', 'https://embedder.net/e/movie?imdb=tt26258204')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/h3G2rjJoOOMOKweAY3YTK0Tnaa0.jpg);"></div>
    <a onclick="openMovie('Believer 2', 'https://embedder.net/e/movie?imdb=tt26258204')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Believer 2</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Amor em Águas Turvas', 'https://embedder.net/e/movie?imdb=tt21211474')" class="full-click"></a>     
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oABVKUveQbAPaQtzG3M3QevBg0D.jpg);"></div>
    <a onclick="openMovie('Amor em Águas Turvas', 'https://embedder.net/e/movie?imdb=tt21211474')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Amor em Águas Turvas</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Assassino', 'https://embedder.net/e/movie?imdb=tt1136617')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mkEQgdQcvmxSYvY4bMhabxLjjXY.jpg);"></div>
    <a onclick="openMovie('O Assassino', 'https://embedder.net/e/movie?imdb=tt1136617')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Assassino</h5>
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
