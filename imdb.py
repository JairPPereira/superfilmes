from bs4 import BeautifulSoup
import re

html = """
              <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Kung Pow: O Mestre da Kung-Fu-São', 'https://embedder.net/e/movie?imdb=tt0240468')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8twRIXhh7EoLZWcihWRKJEgdAXq.jpg);"></div>
                    <a onclick="openMovie('Kung Pow: O Mestre da Kung-Fu-São', 'https://embedder.net/e/movie?imdb=tt0240468')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Kung Pow: O Mestre da Kung-Fu-São</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Autópsia de um Crime', 'https://embedder.net/e/movie?imdb=tt0964539')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ph6DHrAxbB1znMm53BrKKzwiQf9.jpg);"></div>
                    <a onclick="openMovie('Autópsia de um Crime', 'https://embedder.net/e/movie?imdb=tt0964539')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Autópsia de um Crime</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Enviado', 'https://embedder.net/e/movie?imdb=tt0335121')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/573orA06nQNNVTIUceNgQdGGc62.jpg);"></div>
                    <a onclick="openMovie('O Enviado', 'https://embedder.net/e/movie?imdb=tt0335121')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Enviado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Dicionário de Cama', 'https://embedder.net/e/movie?imdb=tt0242888')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/g60TBvRbw9HhOp5mJRmR8LFGrTF.jpg);"></div>
                    <a onclick="openMovie('Dicionário de Cama', 'https://embedder.net/e/movie?imdb=tt0242888')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Dicionário de Cama</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Tom e Jerry no Velho Oeste', 'https://embedder.net/e/movie?imdb=tt15831226')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/khy44zoKUqInUSWhdzzcQZKDU0P.jpg);"></div>
                    <a onclick="openMovie('Tom e Jerry no Velho Oeste', 'https://embedder.net/e/movie?imdb=tt15831226')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Tom e Jerry no Velho Oeste</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Malibu Crush', 'https://embedder.net/e/movie?imdb=tt3437892')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8TszCQUjievKmO0i8eMpXQIQQSz.jpg);"></div>
                    <a onclick="openMovie('Malibu Crush', 'https://embedder.net/e/movie?imdb=tt3437892')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Malibu Crush</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Bob s Burger: O Filme', 'https://embedder.net/e/movie?imdb=tt7466442')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/h4NtdQn1Gm6wNLZDcCuasVPv3Oh.jpg);"></div>
                    <a onclick="openMovie('Bob s Burger: O Filme', 'https://embedder.net/e/movie?imdb=tt7466442')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Bob's Burger: O Filme</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Uma Foto Antes de Morrer', 'https://embedder.net/e/movie?imdb=tt8006426')" class="full-click"></a>      
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tFV3QPG9NBjJChRWdBJWgtiTFLZ.jpg);"></div>
                    <a onclick="openMovie('Uma Foto Antes de Morrer', 'https://embedder.net/e/movie?imdb=tt8006426')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Uma Foto Antes de Morrer</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Viúva Negra', 'https://embedder.net/e/movie?imdb=tt9272572')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tGkpjxJ96EV0T7HiFkEt7C5h3ds.jpg);"></div>
                    <a onclick="openMovie('A Viúva Negra', 'https://embedder.net/e/movie?imdb=tt9272572')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Viúva Negra</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Tudo por Jojo', 'https://embedder.net/e/movie?imdb=tt21044524')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bwNP1sdvzpnoslaXqzSzxbCrL8d.jpg);"></div>
                    <a onclick="openMovie('Tudo por Jojo', 'https://embedder.net/e/movie?imdb=tt21044524')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Tudo por Jojo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Bastardoz', 'https://embedder.net/e/movie?imdb=tt10127708')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ac9cLKaSWBRtdOEFzOZkm2YnhUh.jpg);"></div>
                    <a onclick="openMovie('Bastardoz', 'https://embedder.net/e/movie?imdb=tt10127708')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Bastardoz</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Homem Ideal', 'https://embedder.net/e/movie?imdb=tt13087796')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/aKPLFkztU3aXMUJ3R8GsnKO1lG8.jpg);"></div>
                    <a onclick="openMovie('O Homem Ideal', 'https://embedder.net/e/movie?imdb=tt13087796')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Homem Ideal</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Torn Hearts', 'https://embedder.net/e/movie?imdb=tt15053518')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/w8dSAuMHUgx0lYSB6wAAURStcGM.jpg);"></div>
                    <a onclick="openMovie('Torn Hearts', 'https://embedder.net/e/movie?imdb=tt15053518')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Torn Hearts</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Doula', 'https://embedder.net/e/movie?imdb=tt14622542')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/j6cA486hZEEyqmy12D0YmOlJyqp.jpg);"></div>
                    <a onclick="openMovie('Doula', 'https://embedder.net/e/movie?imdb=tt14622542')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Doula</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Resistência', 'https://embedder.net/e/movie?imdb=tt6914122')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jMPSL9R3TyGZC1lSItTDWqah89G.jpg);"></div>
                    <a onclick="openMovie('Resistência', 'https://embedder.net/e/movie?imdb=tt6914122')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Resistência</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Elvis', 'https://embedder.net/e/movie?imdb=tt3704428')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4CYhJ9WNHIc1WRrQ5kYwBtmMvNB.jpg);"></div>
                    <a onclick="openMovie('Elvis', 'https://embedder.net/e/movie?imdb=tt3704428')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Elvis</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Parque dos Sonhos', 'https://embedder.net/e/movie?imdb=tt6428676')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sFZQeqiKvcqV45kTz3KDQV9tgAQ.jpg);"></div>
                    <a onclick="openMovie('O Parque dos Sonhos', 'https://embedder.net/e/movie?imdb=tt6428676')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Parque dos Sonhos</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Maria e João: O Conto das Bruxas', 'https://embedder.net/e/movie?imdb=tt9086228')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nxpfEaqtBmxisC7CKgCKYv6ST5m.jpg);"></div>
                    <a onclick="openMovie('Maria e João: O Conto das Bruxas', 'https://embedder.net/e/movie?imdb=tt9086228')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Maria e João: O Conto das Bruxas</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Agente Oculto', 'https://embedder.net/e/movie?imdb=tt1649418')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1f10KUKW7KyNt8bF8NHmwbBQ9fs.jpg);"></div>
                    <a onclick="openMovie('Agente Oculto', 'https://embedder.net/e/movie?imdb=tt1649418')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Agente Oculto</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Aventura em Duas Rodas', 'https://embedder.net/e/movie?imdb=tt9671918')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gVKYg7HseTtYFavutwC2mZJn8iO.jpg);"></div>
                    <a onclick="openMovie('Aventura em Duas Rodas', 'https://embedder.net/e/movie?imdb=tt9671918')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Aventura em Duas Rodas</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Preço da Sedução', 'https://embedder.net/e/movie?imdb=tt5056842')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5PhCJDL4jquPP23buc58vR9w1o2.jpg);"></div>
                    <a onclick="openMovie('O Preço da Sedução', 'https://embedder.net/e/movie?imdb=tt5056842')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Preço da Sedução</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Beavis e Butt-Head: Detonam o Universo', 'https://embedder.net/e/movie?imdb=tt14145426')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rVKMA2j8m8hWgsDyXOllXp8DsWI.jpg);"></div>
                    <a onclick="openMovie('Beavis e Butt-Head: Detonam o Universo', 'https://embedder.net/e/movie?imdb=tt14145426')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Beavis e Butt-Head: Detonam o Universo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Borrego - Saia Do Caminho', 'https://embedder.net/e/movie?imdb=tt12676006')" class="full-click"></a>    
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/iNSa1kwVsOsfAHwopMLM7PnrDhU.jpg);"></div>
                    <a onclick="openMovie('Borrego - Saia Do Caminho', 'https://embedder.net/e/movie?imdb=tt12676006')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Borrego - Saia Do Caminho</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Persuasão', 'https://embedder.net/e/movie?imdb=tt13456318')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2G6FSKMLlu2sZ9QfzsUWoLjBxgq.jpg);"></div>
                    <a onclick="openMovie('Persuasão', 'https://embedder.net/e/movie?imdb=tt13456318')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Persuasão</h5>
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
