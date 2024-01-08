from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Batalha de Natal', 'https://embedder.net/e/movie?imdb=tt21328106')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7xz7evAsp4wqwSBSZLnNd13wBZt.jpg);"></div>
<a onclick="openMovie('A Batalha de Natal', 'https://embedder.net/e/movie?imdb=tt21328106')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Batalha de Natal</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('15 Cameras', 'https://embedder.net/e/movie?imdb=tt28255598')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/muQrASlFPg4Hx0BEDwXjUsBMSHM.jpg);"></div>
<a onclick="openMovie('15 Cameras', 'https://embedder.net/e/movie?imdb=tt28255598')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">15 Cameras</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('3 Days in Malay', 'https://embedder.net/e/movie?imdb=tt21158192')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hqnfqeCILvgKGWKOut5lVdxdeJh.jpg);"></div>
<a onclick="openMovie('3 Days in Malay', 'https://embedder.net/e/movie?imdb=tt21158192')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">3 Days in Malay</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Todas as Formas de Amor', 'https://embedder.net/e/movie?imdb=tt7686376')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/r5tZx6s8vrkBVjuJO5UNnrZEdxO.jpg);"></div>
<a onclick="openMovie('Todas as Formas de Amor', 'https://embedder.net/e/movie?imdb=tt7686376')" class="media-play"><i class="icofont-ui-play"></i></a>       
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Todas as Formas de Amor</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Primeira Dama', 'https://embedder.net/e/movie?imdb=tt9068272')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gNqDtZ6GP1lOttUC7wSnEH7vpAq.jpg);"></div>
<a onclick="openMovie('A Primeira Dama', 'https://embedder.net/e/movie?imdb=tt9068272')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Primeira Dama</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ângela: O Anjo da Morte', 'https://embedder.net/e/movie?imdb=tt14631460')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ayF40WBDkCrwO8821LnUbES1Keg.jpg);"></div>
<a onclick="openMovie('Ângela: O Anjo da Morte', 'https://embedder.net/e/movie?imdb=tt14631460')" class="media-play"><i class="icofont-ui-play"></i></a>      
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ângela: O Anjo da Morte</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Coincidências da Vida e Grandes Amores', 'https://embedder.net/e/movie?imdb=tt12453124')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/h2rOrmUqsdFoMQjKb93UPw6i9Gv.jpg);"></div>
<a onclick="openMovie('Coincidências da Vida e Grandes Amores', 'https://embedder.net/e/movie?imdb=tt12453124')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Coincidências da Vida e Grandes Amores</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Criaturas do Senhor', 'https://embedder.net/e/movie?imdb=tt10375396')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rrlBIHAZ8yvqbhgzrMMGtMG9mO5.jpg);"></div>
<a onclick="openMovie('Criaturas do Senhor', 'https://embedder.net/e/movie?imdb=tt10375396')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Criaturas do Senhor</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Crescendo Juntas', 'https://embedder.net/e/movie?imdb=tt9185206')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7dmr6Pl9XWDzQNWTjtq118Gkfd9.jpg);"></div>
<a onclick="openMovie('Crescendo Juntas', 'https://embedder.net/e/movie?imdb=tt9185206')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Crescendo Juntas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Do Outro Lado do Espelho', 'https://embedder.net/e/movie?imdb=tt5585272')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tMwVRJ0LG9kFDjFoXAT5lKT2Zc8.jpg);"></div>
<a onclick="openMovie('Do Outro Lado do Espelho', 'https://embedder.net/e/movie?imdb=tt5585272')" class="media-play"><i class="icofont-ui-play"></i></a>      
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Do Outro Lado do Espelho</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Dois Amigos Bem Chapados', 'https://embedder.net/e/movie?imdb=tt5673432')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/q2VYpYxarNwErLI5fcwApDtLuUP.jpg);"></div>
<a onclick="openMovie('Dois Amigos Bem Chapados', 'https://embedder.net/e/movie?imdb=tt5673432')" class="media-play"><i class="icofont-ui-play"></i></a>      
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Dois Amigos Bem Chapados</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Eu, Eu Mesma e Diana', 'https://embedder.net/e/movie?imdb=tt10565666')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/amK92ja6UVjQVAtNefh4JiLGesW.jpg);"></div>
<a onclick="openMovie('Eu, Eu Mesma e Diana', 'https://embedder.net/e/movie?imdb=tt10565666')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Eu, Eu Mesma e Diana</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Guerra Entre Herdeiros', 'https://embedder.net/e/movie?imdb=tt16302202')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mQQvSozFKxJZmWrmnnrE5LV8CKG.jpg);"></div>
<a onclick="openMovie('Guerra Entre Herdeiros', 'https://embedder.net/e/movie?imdb=tt16302202')" class="media-play"><i class="icofont-ui-play"></i></a>       
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Guerra Entre Herdeiros</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Jim Knopf e os 13 Piratas', 'https://embedder.net/e/movie?imdb=tt9839038')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/x759qHxGAd8PzKj0dugJom3BheT.jpg);"></div>
<a onclick="openMovie('Jim Knopf e os 13 Piratas', 'https://embedder.net/e/movie?imdb=tt9839038')" class="media-play"><i class="icofont-ui-play"></i></a>     
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Jim Knopf e os 13 Piratas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Maigret e a Jovem Morta', 'https://embedder.net/e/movie?imdb=tt10545696')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zG17L04rdnD5PFgOEzpAViEAqX0.jpg);"></div>
<a onclick="openMovie('Maigret e a Jovem Morta', 'https://embedder.net/e/movie?imdb=tt10545696')" class="media-play"><i class="icofont-ui-play"></i></a>      
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Maigret e a Jovem Morta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Meus Irmãos', 'https://embedder.net/e/movie?imdb=tt7724516')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/f2ou2HVjMOCDRhbd6tjzGMBHXry.jpg);"></div>
<a onclick="openMovie('Meus Irmãos', 'https://embedder.net/e/movie?imdb=tt7724516')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Meus Irmãos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ninguém Precisa Acreditar em Mim', 'https://embedder.net/e/movie?imdb=tt21738294')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jS8YfaaGFiqimhph4VCrsRaF42l.jpg);"></div>
<a onclick="openMovie('Ninguém Precisa Acreditar em Mim', 'https://embedder.net/e/movie?imdb=tt21738294')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ninguém Precisa Acreditar em Mim</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Espaço Infinito', 'https://embedder.net/e/movie?imdb=tt29174442')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vypsKlYXaTX7LBlBOq5EsjXvZ4U.jpg);"></div>
<a onclick="openMovie('O Espaço Infinito', 'https://embedder.net/e/movie?imdb=tt29174442')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Espaço Infinito</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Pequena Solange', 'https://embedder.net/e/movie?imdb=tt10376800')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jwvmKs9zzzNdR0v6UGuAgpuXHXt.jpg);"></div>
<a onclick="openMovie('Pequena Solange', 'https://embedder.net/e/movie?imdb=tt10376800')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Pequena Solange</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Padeiro', 'https://embedder.net/e/movie?imdb=tt3917710')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2deqSt3Z3OXgBfLvUn9jASrKa1c.jpg);"></div>
<a onclick="openMovie('O Padeiro', 'https://embedder.net/e/movie?imdb=tt3917710')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Padeiro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ritual das Bruxas', 'https://embedder.net/e/movie?imdb=tt6844138')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/k62yO2mrZys4h6atx955kr3GoHv.jpg);"></div>
<a onclick="openMovie('Ritual das Bruxas', 'https://embedder.net/e/movie?imdb=tt6844138')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ritual das Bruxas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Templo do Perigo', 'https://embedder.net/e/movie?imdb=tt10974674')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bqwFMsRPTXIBCnFj82EIpCjDO85.jpg);"></div>
<a onclick="openMovie('Templo do Perigo', 'https://embedder.net/e/movie?imdb=tt10974674')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Templo do Perigo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Última Esperança Soviética', 'https://embedder.net/e/movie?imdb=tt17074644')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dYAIG6RxtSRPcge3Rzw9fxPSUzE.jpg);"></div>
<a onclick="openMovie('A Última Esperança Soviética', 'https://embedder.net/e/movie?imdb=tt17074644')" class="media-play"><i class="icofont-ui-play"></i></a> 
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Última Esperança Soviética</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Versão Persa', 'https://embedder.net/e/movie?imdb=tt24076146')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fmHNcjt08oWz9Q619ZSXqQxLgMT.jpg);"></div>
<a onclick="openMovie('A Versão Persa', 'https://embedder.net/e/movie?imdb=tt24076146')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Versão Persa</h5>
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
