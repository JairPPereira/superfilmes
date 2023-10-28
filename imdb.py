from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('The Pod Generation', 'https://embedder.net/e/movie?imdb=tt15768848')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8A1gNoYBjmwcShNtxYCfkZkMKIj.jpg);"></div>
    <a onclick="openMovie('The Pod Generation', 'https://embedder.net/e/movie?imdb=tt15768848')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">The Pod Generation</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('A Médium', 'https://embedder.net/e/movie?imdb=tt13446168')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oCPAJFtmdjlMuye8hVI7LAjymgO.jpg);"></div>
    <a onclick="openMovie('A Médium', 'https://embedder.net/e/movie?imdb=tt13446168')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">A Médium</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Rua dos Pecados', 'https://embedder.net/e/movie?imdb=tt1964995')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/d3fsra3Sv0L59AlIAS3GRKLCVyf.jpg);"></div>
    <a onclick="openMovie('Rua dos Pecados', 'https://embedder.net/e/movie?imdb=tt1964995')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Rua dos Pecados</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Perseguição em Malta', 'https://embedder.net/e/movie?imdb=tt13515076')" class="full-click"></a>   
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oRgj0ZaCZxcRhRNMOnGwr495q4z.jpg);"></div>
    <a onclick="openMovie('Perseguição em Malta', 'https://embedder.net/e/movie?imdb=tt13515076')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Perseguição em Malta</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Paciente, 316', 'https://embedder.net/e/movie?imdb=tt6064744')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/x01VoKCsBMVERVm2OrnPLlykFCx.jpg);"></div>
    <a onclick="openMovie('Paciente, 316', 'https://embedder.net/e/movie?imdb=tt6064744')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Paciente, 316</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Outback', 'https://embedder.net/e/movie?imdb=tt7336182')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1eEaliCKndXuINMjcb2ATXUMYIa.jpg);"></div>
    <a onclick="openMovie('Outback', 'https://embedder.net/e/movie?imdb=tt7336182')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Outback</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Obrigada Por Tudo', 'https://embedder.net/e/movie?imdb=tt11349958')" class="full-click"></a>      
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kb6b8x44yqHIglI2aMLk15RBy65.jpg);"></div>
    <a onclick="openMovie('Obrigada Por Tudo', 'https://embedder.net/e/movie?imdb=tt11349958')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Obrigada Por Tudo</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Viajante do Tempo', 'https://embedder.net/e/movie?imdb=tt3484204')" class="full-click"></a>     
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/b6SZ2fme18X5EPj7zN6bxeNHjEP.jpg);"></div>
    <a onclick="openMovie('O Viajante do Tempo', 'https://embedder.net/e/movie?imdb=tt3484204')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Viajante do Tempo</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Tutor', 'https://embedder.net/e/movie?imdb=tt19637278')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wmTOuCeJnTPaAPMK19Y8Ixpi3Gl.jpg);"></div>
    <a onclick="openMovie('O Tutor', 'https://embedder.net/e/movie?imdb=tt19637278')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Tutor</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Hotel do Terror', 'https://embedder.net/e/movie?imdb=tt5343532')" class="full-click"></a>       
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ktV0aYTTwkqdQceEvAHl2vsA66u.jpg);"></div>
    <a onclick="openMovie('O Hotel do Terror', 'https://embedder.net/e/movie?imdb=tt5343532')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Hotel do Terror</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Estranho Caso de Cornelius Bloom', 'https://embedder.net/e/movie?imdb=tt6012684')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wCRk3NcQgZgsND8ZL5zBzzwTkzy.jpg);"></div>
    <a onclick="openMovie('O Estranho Caso de Cornelius Bloom', 'https://embedder.net/e/movie?imdb=tt6012684')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Estranho Caso de Cornelius Bloom</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Rei dos Clones', 'https://embedder.net/e/movie?imdb=tt27846314')" class="full-click"></a>       
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jJAF2h2iLLCpKUocEnoJz7wKtWq.jpg);"></div>
    <a onclick="openMovie('O Rei dos Clones', 'https://embedder.net/e/movie?imdb=tt27846314')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Rei dos Clones</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Matador: Missão Resgate', 'https://embedder.net/e/movie?imdb=tt19713090')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9aVY0w3q2bxZX9rcGOGSWiM7mH8.jpg);"></div>
    <a onclick="openMovie('O Matador: Missão Resgate', 'https://embedder.net/e/movie?imdb=tt19713090')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Matador: Missão Resgate</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Diário de um Banana: As Regras do Rodrick', 'https://embedder.net/e/movie?imdb=tt15847828')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zL7uRZfIguunWKQDWbOcOqYg1AX.jpg);"></div>
    <a onclick="openMovie('O Diário de um Banana: As Regras do Rodrick', 'https://embedder.net/e/movie?imdb=tt15847828')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Diário de um Banana: As Regras do Rodrick</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Não Saia de Casa', 'https://embedder.net/e/movie?imdb=tt6842126')" class="full-click"></a>        
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uVWuvy2lIMDmplgs51rSovZIhnW.jpg);"></div>
    <a onclick="openMovie('Não Saia de Casa', 'https://embedder.net/e/movie?imdb=tt6842126')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Não Saia de Casa</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Não Descanse em Paz', 'https://embedder.net/e/movie?imdb=tt10332690')" class="full-click"></a>    
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jx2zZmnofr8i1Tz9jA8rngpsfz4.jpg);"></div>
    <a onclick="openMovie('Não Descanse em Paz', 'https://embedder.net/e/movie?imdb=tt10332690')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Não Descanse em Paz</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Na Linha de Frente', 'https://embedder.net/e/movie?imdb=tt10405760')" class="full-click"></a>     
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/flMRy43ua8UQOkp555xZAQ9fYQn.jpg);"></div>
    <a onclick="openMovie('Na Linha de Frente', 'https://embedder.net/e/movie?imdb=tt10405760')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Na Linha de Frente</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Um Ato de Fé', 'https://embedder.net/e/movie?imdb=tt15321028')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uMTHUzecoJgAlekqBu6EQDFzZ8E.jpg);"></div>
    <a onclick="openMovie('Um Ato de Fé', 'https://embedder.net/e/movie?imdb=tt15321028')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Um Ato de Fé</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Um Jantar Quase Perfeito', 'https://embedder.net/e/movie?imdb=tt8563656')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/17J49tGsoIsBy0GIl7LcH9eR068.jpg);"></div>
    <a onclick="openMovie('Um Jantar Quase Perfeito', 'https://embedder.net/e/movie?imdb=tt8563656')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Um Jantar Quase Perfeito</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('The Unseen', 'https://embedder.net/e/movie?imdb=tt13304086')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gHkkHjygqfgLbC8ST3VTdGh2pwd.jpg);"></div>
    <a onclick="openMovie('The Unseen', 'https://embedder.net/e/movie?imdb=tt13304086')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">The Unseen</h5>
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
