from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sisu', 'https://embedder.net/e/movie?imdb=tt14846026')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uCAaaAQEDrTllYR4dtsEsfQa8We.jpg);"></div>
<a onclick="openMovie('Sisu', 'https://embedder.net/e/movie?imdb=tt14846026')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sisu</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Filho da Mãe', 'https://embedder.net/e/movie?imdb=tt21339834')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/z8ZbaGCahlXwri66rPHjgw54jo1.jpg);"></div>
<a onclick="openMovie('Filho da Mãe', 'https://embedder.net/e/movie?imdb=tt21339834')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Filho da Mãe</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Pooka', 'https://embedder.net/e/movie?imdb=tt8870814')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/q6Rmmz5MYWHBqqdxhW6nsj0vgts.jpg);"></div>
<a onclick="openMovie('Pooka', 'https://embedder.net/e/movie?imdb=tt8870814')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Pooka</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Super Quem? Heróis Por Acidente', 'https://embedder.net/e/movie?imdb=tt13774454')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/b9XVAP8AWQ30uRkKNTvmER8OVMa.jpg);"></div>
<a onclick="openMovie('Super Quem? Heróis Por Acidente', 'https://embedder.net/e/movie?imdb=tt13774454')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Super Quem? Heróis Por Acidente</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Fazenda Maluca', 'https://embedder.net/e/movie?imdb=tt1308650')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5DV34HGjjRjMQoRRyMPjIoV9FdL.jpg);"></div>
<a onclick="openMovie('Uma Fazenda Maluca', 'https://embedder.net/e/movie?imdb=tt1308650')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Fazenda Maluca</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Mínimo Para Viver', 'https://embedder.net/e/movie?imdb=tt5541240')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jKbr1VbR0NKpuspJHh1qg3xz7FT.jpg);"></div>
<a onclick="openMovie('O Mínimo Para Viver', 'https://embedder.net/e/movie?imdb=tt5541240')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Mínimo Para Viver</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Doze Homens e Outro Segredo', 'https://embedder.net/e/movie?imdb=tt0349903')" class="full-click"></a>   
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jLt2z5Zg3lDHuWU0NabkLDSvfDy.jpg);"></div>
<a onclick="openMovie('Doze Homens e Outro Segredo', 'https://embedder.net/e/movie?imdb=tt0349903')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Doze Homens e Outro Segredo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Treze Homens e um Novo Segredo', 'https://embedder.net/e/movie?imdb=tt0496806')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hWmFe0A26TNmnfHrHdmKmN0N6QZ.jpg);"></div>
<a onclick="openMovie('Treze Homens e um Novo Segredo', 'https://embedder.net/e/movie?imdb=tt0496806')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Treze Homens e um Novo Segredo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Às Cegas', 'https://embedder.net/e/movie?imdb=tt10303430')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7UEqRremYl9cxCPAApYtvqRpcqW.jpg);"></div>
<a onclick="openMovie('Às Cegas', 'https://embedder.net/e/movie?imdb=tt10303430')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Às Cegas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Bela Vingança', 'https://embedder.net/e/movie?imdb=tt9620292')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/r7FwclLTWB8i6XfBNTtUsyONlgN.jpg);"></div>
<a onclick="openMovie('Bela Vingança', 'https://embedder.net/e/movie?imdb=tt9620292')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Bela Vingança</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Barbie e As Três Mosqueteiras', 'https://embedder.net/e/movie?imdb=tt1484922')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/aulv0DUM41tmEM9BoDVaczBojsz.jpg);"></div>
<a onclick="openMovie('Barbie e As Três Mosqueteiras', 'https://embedder.net/e/movie?imdb=tt1484922')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Barbie e As Três Mosqueteiras</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Nunca Fui Beijada', 'https://embedder.net/e/movie?imdb=tt0151738')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/txX1wXYysKGkDGi4EsHTcq1KwZz.jpg);"></div>
<a onclick="openMovie('Nunca Fui Beijada', 'https://embedder.net/e/movie?imdb=tt0151738')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Nunca Fui Beijada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Jogo de Amor – "Odio"', 'https://embedder.net/e/movie?imdb=tt8718158')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nWTeXUGWsSDoDLC4UucMeM07gA5.jpg);"></div>
<a onclick="openMovie('O Jogo de Amor – "Odio"', 'https://embedder.net/e/movie?imdb=tt8718158')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Jogo de Amor – "Odio"</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Dezesseis Luas', 'https://embedder.net/e/movie?imdb=tt1559547')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8BcxlJFLBk9DpDpcKYFExc4iubS.jpg);"></div>
<a onclick="openMovie('Dezesseis Luas', 'https://embedder.net/e/movie?imdb=tt1559547')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Dezesseis Luas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Louca Obsessão', 'https://embedder.net/e/movie?imdb=tt0100157')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3aANzopHLOlJLrq9LfbJI5zY2IP.jpg);"></div>
<a onclick="openMovie('Louca Obsessão', 'https://embedder.net/e/movie?imdb=tt0100157')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Louca Obsessão</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Batman: Ataque ao Arkham', 'https://embedder.net/e/movie?imdb=tt3139086')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gX2Uy1GnIB8bbeP7EfXBUxzGmqY.jpg);"></div>
<a onclick="openMovie('Batman: Ataque ao Arkham', 'https://embedder.net/e/movie?imdb=tt3139086')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Batman: Ataque ao Arkham</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Mulher Maravilha', 'https://embedder.net/e/movie?imdb=tt1186373')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wUhVYGSEWyb9xOl9kWspxLTpAxQ.jpg);"></div>
<a onclick="openMovie('Mulher Maravilha', 'https://embedder.net/e/movie?imdb=tt1186373')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Mulher Maravilha</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Apóstolo', 'https://embedder.net/e/movie?imdb=tt6217306')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/p7KGpuO13YUsRxFSPcANFs1MAx1.jpg);"></div>
<a onclick="openMovie('Apóstolo', 'https://embedder.net/e/movie?imdb=tt6217306')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Apóstolo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Viajantes - Instinto e Desejo', 'https://embedder.net/e/movie?imdb=tt9664108')" class="full-click"></a> 
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/50mYEEOiueKarAhlHAz5qOTuIzX.jpg);"></div>
<a onclick="openMovie('Viajantes - Instinto e Desejo', 'https://embedder.net/e/movie?imdb=tt9664108')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Viajantes - Instinto e Desejo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ligadas pelo Desejo', 'https://embedder.net/e/movie?imdb=tt0115736')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jvy0RFmTRJDlceqqF4bfbxfd7Dk.jpg);"></div>
<a onclick="openMovie('Ligadas pelo Desejo', 'https://embedder.net/e/movie?imdb=tt0115736')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ligadas pelo Desejo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Tesla: O Homem Elétrico', 'https://embedder.net/e/movie?imdb=tt5259822')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xD6ytmowMxYcrPCh4oYhcWyuTF0.jpg);"></div>
<a onclick="openMovie('Tesla: O Homem Elétrico', 'https://embedder.net/e/movie?imdb=tt5259822')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Tesla: O Homem Elétrico</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('iNumber Number: O Ouro de Joanesburgo', 'https://embedder.net/e/movie?imdb=tt27728519')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lfsbL4QcmMKJvdVYE36tPRmoaiv.jpg);"></div>
<a onclick="openMovie('iNumber Number: O Ouro de Joanesburgo', 'https://embedder.net/e/movie?imdb=tt27728519')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">iNumber Number: O Ouro de Joanesburgo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Descoberta Perfeita', 'https://embedder.net/e/movie?imdb=tt8400584')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xlN4vXWzvoZ2LCdhsyFv4zOZBY6.jpg);"></div>
<a onclick="openMovie('A Descoberta Perfeita', 'https://embedder.net/e/movie?imdb=tt8400584')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Descoberta Perfeita</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Amor em Foco', 'https://embedder.net/e/movie?imdb=tt21257152')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/iiKXokniuqAwhVZjLhIGJhXIKzk.jpg);"></div>
<a onclick="openMovie('Amor em Foco', 'https://embedder.net/e/movie?imdb=tt21257152')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Amor em Foco</h5>
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
