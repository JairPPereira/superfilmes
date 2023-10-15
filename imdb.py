from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Cemitério Maldito: A Origem', 'https://embedder.net/e/movie?imdb=tt14145436')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cTtrFUxMKUX4ZGfMfydym2AZQba.jpg);"></div>
    <a onclick="openMovie('Cemitério Maldito: A Origem', 'https://embedder.net/e/movie?imdb=tt14145436')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Cemitério Maldito: A Origem</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Medusa: Rainha das Serpentes', 'https://embedder.net/e/movie?imdb=tt12060154')" class="full-click"></a> 
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fs8RXnnJkYKo53R8A6eakzcTTHj.jpg);"></div>
    <a onclick="openMovie('Medusa: Rainha das Serpentes', 'https://embedder.net/e/movie?imdb=tt12060154')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Medusa: Rainha das Serpentes</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Sala Verde', 'https://embedder.net/e/movie?imdb=tt4062536')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4W6TeOnwAyNq3Zp8NP9gwYPZ1pK.jpg);"></div>
    <a onclick="openMovie('Sala Verde', 'https://embedder.net/e/movie?imdb=tt4062536')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Sala Verde</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Diário de um Adolescente', 'https://embedder.net/e/movie?imdb=tt0112461')" class="full-click"></a>      
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mdQoyPS3QICr3texSpvNqkdmqD.jpg);"></div> 
    <a onclick="openMovie('Diário de um Adolescente', 'https://embedder.net/e/movie?imdb=tt0112461')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Diário de um Adolescente</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Não Abra!', 'https://embedder.net/e/movie?imdb=tt15683734')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8CZWjmF154BOrzgsvtdwgzlqyKh.jpg);"></div>
    <a onclick="openMovie('Não Abra!', 'https://embedder.net/e/movie?imdb=tt15683734')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Não Abra!</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Retratos Fantasmas', 'https://embedder.net/e/movie?imdb=tt27502227')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/akVsEkPbb41DQ0vODFZRtzXjuyy.jpg);"></div>
    <a onclick="openMovie('Retratos Fantasmas', 'https://embedder.net/e/movie?imdb=tt27502227')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Retratos Fantasmas</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('The Loud House: Uma Verdadeira Família Assombrada', 'https://embedder.net/e/movie?imdb=tt27428598')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/30we4NrF5F1FcBDklBGXvCDn1pG.jpg);"></div>
    <a onclick="openMovie('The Loud House: Uma Verdadeira Família Assombrada', 'https://embedder.net/e/movie?imdb=tt27428598')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">The Loud House: Uma Verdadeira Família Assombrada</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Perigo no Recife', 'https://embedder.net/e/movie?imdb=tt12735282')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1W8IGuXEUrAYHaR0wQn3MyZiQFo.jpg);"></div>
    <a onclick="openMovie('Perigo no Recife', 'https://embedder.net/e/movie?imdb=tt12735282')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Perigo no Recife</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Muti: Crime e Poder', 'https://embedder.net/e/movie?imdb=tt13141250')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/z2fgGa0B5Bk8Ak3ScaTEEnO7qCZ.jpg);"></div>
    <a onclick="openMovie('Muti: Crime e Poder', 'https://embedder.net/e/movie?imdb=tt13141250')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Muti: Crime e Poder</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Homens à beira de um ataque de nervos', 'https://embedder.net/e/movie?imdb=tt10945232')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1xHzWFq0TLaFLWw4J6h44rZmZJ2.jpg);"></div>
    <a onclick="openMovie('Homens à beira de um ataque de nervos', 'https://embedder.net/e/movie?imdb=tt10945232')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Homens à beira de um ataque de nervos</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Awareness: A Realidade é Uma Ilusão', 'https://embedder.net/e/movie?imdb=tt18556326')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/msgWkL23ZslTVZJRYJIng83mYny.jpg);"></div>
    <a onclick="openMovie('Awareness: A Realidade é Uma Ilusão', 'https://embedder.net/e/movie?imdb=tt18556326')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Awareness: A Realidade é Uma Ilusão</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Era uma Vez uma Estrela', 'https://embedder.net/e/movie?imdb=tt22696288')" class="full-click"></a>      
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9CELDhMAq2rbQsSqJYotWGCkeRO.jpg);"></div>
    <a onclick="openMovie('Era uma Vez uma Estrela', 'https://embedder.net/e/movie?imdb=tt22696288')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Era uma Vez uma Estrela</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('A Porta ao Lado', 'https://embedder.net/e/movie?imdb=tt21186266')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8pYsfzwI20pzzwVeEIPS2Sb0zFA.jpg);"></div>
    <a onclick="openMovie('A Porta ao Lado', 'https://embedder.net/e/movie?imdb=tt21186266')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">A Porta ao Lado</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('A Era de Ouro', 'https://embedder.net/e/movie?imdb=tt2071590')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/p7HiwisHEP9l1bF3LMnoF3R63nn.jpg);"></div>
    <a onclick="openMovie('A Era de Ouro', 'https://embedder.net/e/movie?imdb=tt2071590')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">A Era de Ouro</h5>
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
