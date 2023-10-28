from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Five Nights at Freddy's - O Pesadelo Sem Fim', 'https://embedder.net/e/movie?imdb=tt4589218')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1yUbmAiw2cUSpyXNIaiST7JzCtG.jpg);"></div>
<a onclick="openMovie('Five Nights at Freddy's - O Pesadelo Sem Fim', 'https://embedder.net/e/movie?imdb=tt4589218')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Five Nights at Freddy's - O Pesadelo Sem Fim</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Desvio de Conduta', 'https://embedder.net/e/movie?imdb=tt5915444')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1dJuX3YlWxfK54r6GbTaxoEwgGA.jpg);"></div>
<a onclick="openMovie('Desvio de Conduta', 'https://embedder.net/e/movie?imdb=tt5915444')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Desvio de Conduta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Dignitate', 'https://embedder.net/e/movie?imdb=tt10816420')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gatofk9nify9JpBBURFbjLqpIpV.jpg);"></div>
<a onclick="openMovie('Dignitate', 'https://embedder.net/e/movie?imdb=tt10816420')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Dignitate</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Do Outro Lado da Fronteira', 'https://embedder.net/e/movie?imdb=tt4072296')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1z8PDr9hiM4LHmOSU26fibuSer5.jpg);"></div>
<a onclick="openMovie('Do Outro Lado da Fronteira', 'https://embedder.net/e/movie?imdb=tt4072296')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Do Outro Lado da Fronteira</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('É Culpa da Alegria', 'https://embedder.net/e/movie?imdb=tt3009772')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sp2JMBYeOAPf38zAGSF0cNyEhtW.jpg);"></div>
<a onclick="openMovie('É Culpa da Alegria', 'https://embedder.net/e/movie?imdb=tt3009772')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">É Culpa da Alegria</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Encontrando o Caminho', 'https://embedder.net/e/movie?imdb=tt7838654')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fTfac1Oy6gm0jWEsxzH94fMRi8l.jpg);"></div>
<a onclick="openMovie('Encontrando o Caminho', 'https://embedder.net/e/movie?imdb=tt7838654')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Encontrando o Caminho</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Era Uma Vez em Londres', 'https://embedder.net/e/movie?imdb=tt4444956')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8SSEYwqCYNJDjhRbXR93DNEEKWX.jpg);"></div>
<a onclick="openMovie('Era Uma Vez em Londres', 'https://embedder.net/e/movie?imdb=tt4444956')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Era Uma Vez em Londres</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Everything Is Both', 'https://embedder.net/e/movie?imdb=tt14783444')" class="full-click"></a>     
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7U4nNHX1PQjSto9XMIAucv83TmF.jpg);"></div>
<a onclick="openMovie('Everything Is Both', 'https://embedder.net/e/movie?imdb=tt14783444')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Everything Is Both</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Family History Mysteries: Buried Past', 'https://embedder.net/e/movie?imdb=tt23870962')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tNLKLnpu5byyekxPsV0Lbpr1GTG.jpg);"></div>
<a onclick="openMovie('Family History Mysteries: Buried Past', 'https://embedder.net/e/movie?imdb=tt23870962')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Family History Mysteries: Buried Past</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Guerreiro Virtual', 'https://embedder.net/e/movie?imdb=tt18933046')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5ITRvcMqKUETNskzw2mcU6C9k6d.jpg);"></div>
<a onclick="openMovie('Guerreiro Virtual', 'https://embedder.net/e/movie?imdb=tt18933046')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Guerreiro Virtual</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Histórias de Meninas', 'https://embedder.net/e/movie?imdb=tt10434142')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/aGeud4Kor6RKhx2jXWyDo7Dyryy.jpg);"></div>
<a onclick="openMovie('Histórias de Meninas', 'https://embedder.net/e/movie?imdb=tt10434142')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Histórias de Meninas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Hudson – Os Altos e Baixos da Vida', 'https://embedder.net/e/movie?imdb=tt7391126')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/50srGK3wzqcKz7po5OQ7fn43CLf.jpg);"></div>
<a onclick="openMovie('Hudson – Os Altos e Baixos da Vida', 'https://embedder.net/e/movie?imdb=tt7391126')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Hudson – Os Altos e Baixos da Vida</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Impuros: O Filme', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9UFRFJ8PoXdy1OA6XW0i1hGjyFF.jpg);"></div>
<a onclick="openMovie('Impuros: O Filme', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Impuros: O Filme</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('纹身', 'https://embedder.net/e/movie?imdb=tt8619856')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/o9KJmNTMM9wlWFZ8yTEgewxS2sE.jpg);"></div>
<a onclick="openMovie('纹身', 'https://embedder.net/e/movie?imdb=tt8619856')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">纹身</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Já Estou Te Vendo', 'https://embedder.net/e/movie?imdb=tt21938086')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wOPgbD5xTjbRCcGAJ6k3rQJk11O.jpg);"></div>
<a onclick="openMovie('Já Estou Te Vendo', 'https://embedder.net/e/movie?imdb=tt21938086')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Já Estou Te Vendo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Kursk: A Última Missão', 'https://embedder.net/e/movie?imdb=tt4951982')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/e2IfN9oSfu7n1raLplXx4hjRdUc.jpg);"></div>
<a onclick="openMovie('Kursk: A Última Missão', 'https://embedder.net/e/movie?imdb=tt4951982')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Kursk: A Última Missão</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Maior que o Mundo', 'https://embedder.net/e/movie?imdb=tt7265272')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4kBYriZGKavfk27qg2IBsVO6Xan.jpg);"></div>
<a onclick="openMovie('Maior que o Mundo', 'https://embedder.net/e/movie?imdb=tt7265272')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Maior que o Mundo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Luciferina', 'https://embedder.net/e/movie?imdb=tt8072078')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jDjiT5dVwL0B3CgBHhBQo9yB1Yv.jpg);"></div>
<a onclick="openMovie('Luciferina', 'https://embedder.net/e/movie?imdb=tt8072078')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Luciferina</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Missão Despedida de Solteira', 'https://embedder.net/e/movie?imdb=tt13250314')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3u8wB2GbfwLfmsN0Ihta7YZdb9T.jpg);"></div>
<a onclick="openMovie('Missão Despedida de Solteira', 'https://embedder.net/e/movie?imdb=tt13250314')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Missão Despedida de Solteira</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('落魄保镖之危机疑云', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gGP1goqJGGPD2YMp6YLxtmHW1WX.jpg);"></div>
<a onclick="openMovie('落魄保镖之危机疑云', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">落魄保镖之危机疑云</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Desencontros Amorosos', 'https://embedder.net/e/movie?imdb=tt9011040')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/43PGEGYAvgpUE9EvET2YkfITWU7.jpg);"></div>
<a onclick="openMovie('Desencontros Amorosos', 'https://embedder.net/e/movie?imdb=tt9011040')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Desencontros Amorosos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Verão 2003', 'https://embedder.net/e/movie?imdb=tt7284204')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yGWszbTJRmQVJv98abEyfdLOsHh.jpg);"></div>
<a onclick="openMovie('Verão 2003', 'https://embedder.net/e/movie?imdb=tt7284204')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Verão 2003</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Vingança em Duas Rodas', 'https://embedder.net/e/movie?imdb=tt13930868')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/essd7DICfIsaE5iJgwdDr03vygy.jpg);"></div>
<a onclick="openMovie('Vingança em Duas Rodas', 'https://embedder.net/e/movie?imdb=tt13930868')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Vingança em Duas Rodas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Você Não Está Sozinha', 'https://embedder.net/e/movie?imdb=tt6332158')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/m2IJvRrBm3oxdL0vCvSZsgkWEHC.jpg);"></div>
<a onclick="openMovie('Você Não Está Sozinha', 'https://embedder.net/e/movie?imdb=tt6332158')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Você Não Está Sozinha</h5>
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
