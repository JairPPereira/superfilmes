from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Família Noel 3', 'https://embedder.net/e/movie?imdb=tt19072084')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fhARqtq7lAdahwGgTPMVWmpd5LG.jpg);"></div>
<a onclick="openMovie('A Família Noel 3', 'https://embedder.net/e/movie?imdb=tt19072084')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Família Noel 3</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Acampamento de Teatro', 'https://embedder.net/e/movie?imdb=tt21232992')" class="full-click"></a>    
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/j0vEroDi8SepB3lXQGrrWQVRTSm.jpg);"></div>
<a onclick="openMovie('Acampamento de Teatro', 'https://embedder.net/e/movie?imdb=tt21232992')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Acampamento de Teatro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Crimes em Hollywood', 'https://embedder.net/e/movie?imdb=tt9244554')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7g2dtDG3yiCpIAPOGaTFjY2kfJ1.jpg);"></div>
<a onclick="openMovie('Crimes em Hollywood', 'https://embedder.net/e/movie?imdb=tt9244554')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Crimes em Hollywood</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Festa do Pijama Muito Louca', 'https://embedder.net/e/movie?imdb=tt22375620')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1i7dglSbXeDUJrGd4rKGhLKzqGJ.jpg);"></div>
<a onclick="openMovie('Festa do Pijama Muito Louca', 'https://embedder.net/e/movie?imdb=tt22375620')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Festa do Pijama Muito Louca</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Fundo do Poço', 'https://embedder.net/e/movie?imdb=tt14592044')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ijXKi02M7HIAHtjpBCWKTQj5L3X.jpg);"></div>
<a onclick="openMovie('Fundo do Poço', 'https://embedder.net/e/movie?imdb=tt14592044')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Fundo do Poço</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Game of Deceit', 'https://embedder.net/e/movie?imdb=tt22168778')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vm9UevgNtoeZJhXYzJlnAmCFDc1.jpg);"></div>
<a onclick="openMovie('Game of Deceit', 'https://embedder.net/e/movie?imdb=tt22168778')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Game of Deceit</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Na Ponta dos Dedos', 'https://embedder.net/e/movie?imdb=tt13968674')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/t1CrJNPsoofVWFiNb3JpXmZgu9W.jpg);"></div>
<a onclick="openMovie('Na Ponta dos Dedos', 'https://embedder.net/e/movie?imdb=tt13968674')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Na Ponta dos Dedos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('NYAD', 'https://embedder.net/e/movie?imdb=tt5302918')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eh1IjDZfDRjgv5NzMBkjN1GzKgy.jpg);"></div>
<a onclick="openMovie('NYAD', 'https://embedder.net/e/movie?imdb=tt5302918')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">NYAD</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Sequestro', 'https://embedder.net/e/movie?imdb=tt21340020')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/k5vgkmlaOSDOMqgKPUhWBXEYTpR.jpg);"></div>
<a onclick="openMovie('O Sequestro', 'https://embedder.net/e/movie?imdb=tt21340020')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Sequestro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Quiz Lady', 'https://embedder.net/e/movie?imdb=tt13405810')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2kkz5jZwKkwYxV8sw6EGMyHjSzO.jpg);"></div>
<a onclick="openMovie('Quiz Lady', 'https://embedder.net/e/movie?imdb=tt13405810')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Quiz Lady</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sharkula', 'https://embedder.net/e/movie?imdb=tt14096132')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uEAMS8gvPPDt7sMjBdzgCzO0Dnr.jpg);"></div>
<a onclick="openMovie('Sharkula', 'https://embedder.net/e/movie?imdb=tt14096132')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sharkula</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('She Came to Me', 'https://embedder.net/e/movie?imdb=tt6689014')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2lG18RqCK8qTk7R5jA1L7ZRMWXu.jpg);"></div>
<a onclick="openMovie('She Came to Me', 'https://embedder.net/e/movie?imdb=tt6689014')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">She Came to Me</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Terror nas Profundezas', 'https://embedder.net/e/movie?imdb=tt14865406')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1ZZFTMqbQaP59yGTqKOcfqVE7NC.jpg);"></div>
<a onclick="openMovie('Terror nas Profundezas', 'https://embedder.net/e/movie?imdb=tt14865406')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Terror nas Profundezas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Última Montanha', 'https://embedder.net/e/movie?imdb=tt15509560')" class="full-click"></a>        
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/adNemSIVVpQ1EwiBjygJCh6N9iF.jpg);"></div>
<a onclick="openMovie('A Última Montanha', 'https://embedder.net/e/movie?imdb=tt15509560')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Última Montanha</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('As Marvels', 'https://embedder.net/e/movie?imdb=tt10676048')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sPmmgdmApfjX9x2mg02bo0aUOU9.jpg);"></div>
<a onclick="openMovie('As Marvels', 'https://embedder.net/e/movie?imdb=tt10676048')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">As Marvels</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Verdades Dolorosas', 'https://embedder.net/e/movie?imdb=tt15771916')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/h0nB00M7n1jjKc0PHXF3cSZPbb8.jpg);"></div>
<a onclick="openMovie('Verdades Dolorosas', 'https://embedder.net/e/movie?imdb=tt15771916')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Verdades Dolorosas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Pense como Eles', 'https://embedder.net/e/movie?imdb=tt1621045')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/flTmZdq5oERiXR0Rv5o8rmhKzMg.jpg);"></div>
<a onclick="openMovie('Pense como Eles', 'https://embedder.net/e/movie?imdb=tt1621045')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Pense como Eles</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sly', 'https://embedder.net/e/movie?imdb=tt28254460')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/flnrKe85SfgcRCW2KgUhz2Bn9yE.jpg);"></div>
<a onclick="openMovie('Sly', 'https://embedder.net/e/movie?imdb=tt28254460')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sly</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Férias de Verão', 'https://embedder.net/e/movie?imdb=tt26756609')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mcMj1XhDPyxa0xuZ9aNrbPVs1CJ.jpg);"></div>
<a onclick="openMovie('Férias de Verão', 'https://embedder.net/e/movie?imdb=tt26756609')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Férias de Verão</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Baywatch: S.O.S. Malibu', 'https://embedder.net/e/movie?imdb=tt1469304')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7178I9T3a27Td5kyjrT207F3hwP.jpg);"></div>
<a onclick="openMovie('Baywatch: S.O.S. Malibu', 'https://embedder.net/e/movie?imdb=tt1469304')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Baywatch: S.O.S. Malibu</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Bons Companheiros', 'https://embedder.net/e/movie?imdb=tt0099685')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fnJcBTbNNUkcNmjqc7fF5ozzLDk.jpg);"></div>
<a onclick="openMovie('Os Bons Companheiros', 'https://embedder.net/e/movie?imdb=tt0099685')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Bons Companheiros</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Patrulha Canina: Um Filme Superpoderoso', 'https://embedder.net/e/movie?imdb=tt15837338')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uzqjYjnnA3fpXFvd4JfMEc1fBhj.jpg);"></div>
<a onclick="openMovie('Patrulha Canina: Um Filme Superpoderoso', 'https://embedder.net/e/movie?imdb=tt15837338')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Patrulha Canina: Um Filme Superpoderoso</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Agente Stone', 'https://embedder.net/e/movie?imdb=tt13603966')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9EpaPaKozP2b8L1hJekBFI75gCm.jpg);"></div>
<a onclick="openMovie('Agente Stone', 'https://embedder.net/e/movie?imdb=tt13603966')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Agente Stone</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Agente Infiltrado', 'https://embedder.net/e/movie?imdb=tt27197387')" class="full-click"></a>        
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mOP3FjJuOe38grWMgdtuVGNMFzZ.jpg);"></div>
<a onclick="openMovie('Agente Infiltrado', 'https://embedder.net/e/movie?imdb=tt27197387')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Agente Infiltrado</h5>
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
