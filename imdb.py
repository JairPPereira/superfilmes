from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Miraculous: As Aventuras de Ladybug - O Filme', 'https://embedder.net/e/movie?imdb=tt10364034')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eZEKKCNW0vI7B7AZNdCAeq2mMAw.jpg);"></div>
<a onclick="openMovie('Miraculous: As Aventuras de Ladybug - O Filme', 'https://embedder.net/e/movie?imdb=tt10364034')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Miraculous: As Aventuras de Ladybug - O Filme</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Brilho Eterno de uma Mente sem Lembranças', 'https://embedder.net/e/movie?imdb=tt0338013')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fQS6DsbA0T465kW2gz2WGmHXIh3.jpg);"></div>
<a onclick="openMovie('Brilho Eterno de uma Mente sem Lembranças', 'https://embedder.net/e/movie?imdb=tt0338013')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Brilho Eterno de uma Mente sem Lembranças</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Amor(es) Verdadeiro(s)', 'https://embedder.net/e/movie?imdb=tt14770620')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/q1FnsCD8H3p2YiYkWc1MZNspoLj.jpg);"></div>
<a onclick="openMovie('Amor(es) Verdadeiro(s)', 'https://embedder.net/e/movie?imdb=tt14770620')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Amor(es) Verdadeiro(s)</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Duna', 'https://embedder.net/e/movie?imdb=tt0087182')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3QOlGVuY2jeo0lX4XMMsTWkqmUg.jpg);"></div>
<a onclick="openMovie('Duna', 'https://embedder.net/e/movie?imdb=tt0087182')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Duna</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Lady Bird - A Hora de Voar', 'https://embedder.net/e/movie?imdb=tt4925292')" class="full-click"></a>    
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wxfKcpFPmK9isnxXyvCMbqmBtdg.jpg);"></div>
<a onclick="openMovie('Lady Bird - A Hora de Voar', 'https://embedder.net/e/movie?imdb=tt4925292')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Lady Bird - A Hora de Voar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Felicidade para Principiantes', 'https://embedder.net/e/movie?imdb=tt15509244')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sejOOSFyqNd2KHWo9s3FiP7JCTv.jpg);"></div>
<a onclick="openMovie('Felicidade para Principiantes', 'https://embedder.net/e/movie?imdb=tt15509244')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Felicidade para Principiantes</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Projeto Extração', 'https://embedder.net/e/movie?imdb=tt6879446')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/t3vZkkM5G40pUJxUzkz69H777Hm.jpg);"></div>
<a onclick="openMovie('Projeto Extração', 'https://embedder.net/e/movie?imdb=tt6879446')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Projeto Extração</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Operação Valquíria', 'https://embedder.net/e/movie?imdb=tt0985699')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5ugPC5Ch8JQc2yV1ZDWEuJ8yiTy.jpg);"></div>
<a onclick="openMovie('Operação Valquíria', 'https://embedder.net/e/movie?imdb=tt0985699')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Operação Valquíria</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Mansão Mal-Assombrada', 'https://embedder.net/e/movie?imdb=tt0338094')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fNQi49H609SEay0MjM6u0EOfqjG.jpg);"></div>
<a onclick="openMovie('Mansão Mal-Assombrada', 'https://embedder.net/e/movie?imdb=tt0338094')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Mansão Mal-Assombrada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Três Mosqueteiros', 'https://embedder.net/e/movie?imdb=tt1509767')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wJy0zURpPTi1TLC1PQOmLlTwDiH.jpg);"></div>
<a onclick="openMovie('Os Três Mosqueteiros', 'https://embedder.net/e/movie?imdb=tt1509767')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Três Mosqueteiros</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Jovens Titãs Assistem A Space Jam', 'https://embedder.net/e/movie?imdb=tt14851194')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7bdNPv3vsLXhUTrVhweTSGiqEwp.jpg);"></div>
<a onclick="openMovie('Os Jovens Titãs Assistem A Space Jam', 'https://embedder.net/e/movie?imdb=tt14851194')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Jovens Titãs Assistem A Space Jam</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Blackening', 'https://embedder.net/e/movie?imdb=tt11703244')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ooB4KSRRhp7XYRQUmsi82iFnMNC.jpg);"></div>
<a onclick="openMovie('The Blackening', 'https://embedder.net/e/movie?imdb=tt11703244')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Blackening</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Última Coisa que Mary Viu', 'https://embedder.net/e/movie?imdb=tt9741180')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gVFwfzPXfUcRI3mpb6rSX1LYtMj.jpg);"></div>
<a onclick="openMovie('A Última Coisa que Mary Viu', 'https://embedder.net/e/movie?imdb=tt9741180')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Última Coisa que Mary Viu</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Hand of God: A Mão de Deus', 'https://embedder.net/e/movie?imdb=tt12680684')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yRZrr8E12jEK07n6LCiVN6bsJUU.jpg);"></div>
<a onclick="openMovie('The Hand of God: A Mão de Deus', 'https://embedder.net/e/movie?imdb=tt12680684')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Hand of God: A Mão de Deus</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Desaparecida: O Caso Lucie Blackman', 'https://embedder.net/e/movie?imdb=tt19113292')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bz44Ug0pzMwV0kjNTeS4y1lxUar.jpg);"></div>
<a onclick="openMovie('Desaparecida: O Caso Lucie Blackman', 'https://embedder.net/e/movie?imdb=tt19113292')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Desaparecida: O Caso Lucie Blackman</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Querida Zoe', 'https://embedder.net/e/movie?imdb=tt1657865')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tLyKCXea2INdSCyOlGOvDnR3feO.jpg);"></div>
<a onclick="openMovie('Querida Zoe', 'https://embedder.net/e/movie?imdb=tt1657865')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Querida Zoe</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Campeonato dos Sonhos', 'https://embedder.net/e/movie?imdb=tt13814704')" class="full-click"></a>        
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2mVp9HGAudUZ1rv66tMC6kK22JM.jpg);"></div>
<a onclick="openMovie('Campeonato dos Sonhos', 'https://embedder.net/e/movie?imdb=tt13814704')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Campeonato dos Sonhos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sr. Carrinho e os Cavaleiros Templários', 'https://embedder.net/e/movie?imdb=tt27876411')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qWuCK5h5o7pQDILZgQYHSIc59TX.jpg);"></div>
<a onclick="openMovie('Sr. Carrinho e os Cavaleiros Templários', 'https://embedder.net/e/movie?imdb=tt27876411')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sr. Carrinho e os Cavaleiros Templários</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Explorando o Desconhecido: A Máquina do Tempo Cósmica', 'https://embedder.net/e/movie?imdb=tt27837488')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8mJkevQKSKyinWRa6XGVyluXJq8.jpg);"></div>
<a onclick="openMovie('Explorando o Desconhecido: A Máquina do Tempo Cósmica', 'https://embedder.net/e/movie?imdb=tt27837488')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Explorando o Desconhecido: A Máquina do Tempo Cósmica</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os (Quase) Ídolos da Bahía Colorada', 'https://embedder.net/e/movie?imdb=tt21737024')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/olT4pIcEwP3160jXETWP1zawaCe.jpg);"></div>
<a onclick="openMovie('Os (Quase) Ídolos da Bahía Colorada', 'https://embedder.net/e/movie?imdb=tt21737024')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os (Quase) Ídolos da Bahía Colorada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Serviço de Entregas da Kiki', 'https://embedder.net/e/movie?imdb=tt0097814')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eM4mDoXpOTwqMldmCy76cftok9m.jpg);"></div>
<a onclick="openMovie('O Serviço de Entregas da Kiki', 'https://embedder.net/e/movie?imdb=tt0097814')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Serviço de Entregas da Kiki</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Clonaram Tyrone!', 'https://embedder.net/e/movie?imdb=tt9873892')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uLYdX64xJVZEFRQJZQU4A2ueMyB.jpg);"></div>
<a onclick="openMovie('Clonaram Tyrone!', 'https://embedder.net/e/movie?imdb=tt9873892')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Clonaram Tyrone!</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Castelo no Céu', 'https://embedder.net/e/movie?imdb=tt0092067')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1yoI4FyiUamyWhZtnfH81se206f.jpg);"></div>
<a onclick="openMovie('O Castelo no Céu', 'https://embedder.net/e/movie?imdb=tt0092067')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Castelo no Céu</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Eu Posso Ouvir o Oceano', 'https://embedder.net/e/movie?imdb=tt0108432')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7xNEkYR9EkcBG1EjiOwyl0oXLU7.jpg);"></div>
<a onclick="openMovie('Eu Posso Ouvir o Oceano', 'https://embedder.net/e/movie?imdb=tt0108432')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Eu Posso Ouvir o Oceano</h5>
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
