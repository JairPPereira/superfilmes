from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Dalíland', 'https://embedder.net/e/movie?imdb=tt8399658')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4RE6PmgeE6Kz0fur2oiiYZ50R0c.jpg);"></div>
<a onclick="openMovie('Dalíland', 'https://embedder.net/e/movie?imdb=tt8399658')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Dalíland</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Clube dos Anjos Caídos: Assassinatos Misteriosos', 'https://embedder.net/e/movie?imdb=tt15506674')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mcG9oRbsI73rqin0l7px9Fkfv8n.jpg);"></div>
<a onclick="openMovie('Clube dos Anjos Caídos: Assassinatos Misteriosos', 'https://embedder.net/e/movie?imdb=tt15506674')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Clube dos Anjos Caídos: Assassinatos Misteriosos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Banidos', 'https://embedder.net/e/movie?imdb=tt20835552')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6TKhFSJW09z2k6WPxB10ey2GMuC.jpg);"></div>
<a onclick="openMovie('Banidos', 'https://embedder.net/e/movie?imdb=tt20835552')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Banidos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Amor, Sexo e 30 Velinhas', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gqUYMRFi5CZLJdM0OXzwetqFRux.jpg);"></div>
<a onclick="openMovie('Amor, Sexo e 30 Velinhas', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Amor, Sexo e 30 Velinhas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Noite das Vampiras', 'https://embedder.net/e/movie?imdb=tt17079862')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rfL90K38rs84C7CB89wM92hPv68.jpg);"></div>
<a onclick="openMovie('A Noite das Vampiras', 'https://embedder.net/e/movie?imdb=tt17079862')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Noite das Vampiras</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Máquina do Crime', 'https://embedder.net/e/movie?imdb=tt11040844')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/x9dGI7LIOMMlFzyIBUta1svft2Y.jpg);"></div>
<a onclick="openMovie('A Máquina do Crime', 'https://embedder.net/e/movie?imdb=tt11040844')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Máquina do Crime</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Amonite', 'https://embedder.net/e/movie?imdb=tt7983894')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ik7M9H9Gza8jqunbfmkfI2PoZHy.jpg);"></div>
<a onclick="openMovie('Amonite', 'https://embedder.net/e/movie?imdb=tt7983894')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Amonite</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Meu Nome é Ray', 'https://embedder.net/e/movie?imdb=tt4158624')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sIFLzRtFpYbSwv2rkXVDw2Zxhav.jpg);"></div>
<a onclick="openMovie('Meu Nome é Ray', 'https://embedder.net/e/movie?imdb=tt4158624')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Meu Nome é Ray</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Casa de Beija-Flor', 'https://embedder.net/e/movie?imdb=tt8951086')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eslNoyrFacHVuaOgiaczA04Y3FG.jpg);"></div>
<a onclick="openMovie('Casa de Beija-Flor', 'https://embedder.net/e/movie?imdb=tt8951086')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Casa de Beija-Flor</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Kim Possible', 'https://embedder.net/e/movie?imdb=tt7979492')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dmYNXdrYPZcQhR03oqE01TbvVL8.jpg);"></div>
<a onclick="openMovie('Kim Possible', 'https://embedder.net/e/movie?imdb=tt7979492')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Kim Possible</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sacrifício', 'https://embedder.net/e/movie?imdb=tt10004108')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xXI5Lg6mJLEesTggRJBrq50vrqU.jpg);"></div>
<a onclick="openMovie('Sacrifício', 'https://embedder.net/e/movie?imdb=tt10004108')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sacrifício</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Secret Kingdom', 'https://embedder.net/e/movie?imdb=tt14799576')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dteXMzVY53GBHUgrR7vigAartsP.jpg);"></div>
<a onclick="openMovie('The Secret Kingdom', 'https://embedder.net/e/movie?imdb=tt14799576')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Secret Kingdom</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Scott Pilgrim Contra o Mundo', 'https://embedder.net/e/movie?imdb=tt0446029')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pg4CBJZKcwW024xau5Wwt7riSH0.jpg);"></div>
<a onclick="openMovie('Scott Pilgrim Contra o Mundo', 'https://embedder.net/e/movie?imdb=tt0446029')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Scott Pilgrim Contra o Mundo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('LEGO Disney Princesa: Aventura no Castelo', 'https://embedder.net/e/movie?imdb=tt28477869')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tbPkvDVY06gdQlxgowQebOHQGGK.jpg);"></div>
<a onclick="openMovie('LEGO Disney Princesa: Aventura no Castelo', 'https://embedder.net/e/movie?imdb=tt28477869')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">LEGO Disney Princesa: Aventura no Castelo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Isabella: o Caso Nardoni', 'https://embedder.net/e/movie?imdb=tt28552695')" class="full-click"></a>     
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/53pmHd5XialRnoTXlLwwBaezEOs.jpg);"></div>
<a onclick="openMovie('Isabella: o Caso Nardoni', 'https://embedder.net/e/movie?imdb=tt28552695')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Isabella: o Caso Nardoni</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('As Aventuras de Pi', 'https://embedder.net/e/movie?imdb=tt0454876')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nAE3BCzE5S4NmUHSmO9mXVqZRUa.jpg);"></div>
<a onclick="openMovie('As Aventuras de Pi', 'https://embedder.net/e/movie?imdb=tt0454876')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">As Aventuras de Pi</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Última Viagem de Demeter', 'https://embedder.net/e/movie?imdb=tt1001520')" class="full-click"></a>    
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nrtbv6Cew7qC7k9GsYSf5uSmuKh.jpg);"></div>
<a onclick="openMovie('A Última Viagem de Demeter', 'https://embedder.net/e/movie?imdb=tt1001520')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Última Viagem de Demeter</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Cidade do Halloween', 'https://embedder.net/e/movie?imdb=tt0173886')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/axYFa20HjBhYFrSz5LHbWuATjGU.jpg);"></div>
<a onclick="openMovie('A Cidade do Halloween', 'https://embedder.net/e/movie?imdb=tt0173886')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Cidade do Halloween</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Megan Is Missing', 'https://embedder.net/e/movie?imdb=tt1087461')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/a7ndLikcqvX7dF7gsYx5iDe7qq1.jpg);"></div>
<a onclick="openMovie('Megan Is Missing', 'https://embedder.net/e/movie?imdb=tt1087461')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Megan Is Missing</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Snoopy Apresenta: A Inigualável Marcie', 'https://embedder.net/e/movie?imdb=tt27865284')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/grzZxk9s9EruSc0zMbcif4FUCmz.jpg);"></div>
<a onclick="openMovie('Snoopy Apresenta: A Inigualável Marcie', 'https://embedder.net/e/movie?imdb=tt27865284')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Snoopy Apresenta: A Inigualável Marcie</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Rei Macaco', 'https://embedder.net/e/movie?imdb=tt8637498')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bmwK5QCznqUT8bcDR7qROrxqgov.jpg);"></div>
<a onclick="openMovie('O Rei Macaco', 'https://embedder.net/e/movie?imdb=tt8637498')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Rei Macaco</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Besouro Azul', 'https://embedder.net/e/movie?imdb=tt9362930')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/AhmVkXerBVsuI6PejPeqaaW2wwT.jpg);"></div>
<a onclick="openMovie('Besouro Azul', 'https://embedder.net/e/movie?imdb=tt9362930')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Besouro Azul</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Cheiro do Ouro', 'https://embedder.net/e/movie?imdb=tt27987407')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qJohErYIn5ZHA7N9XlPRwFfMint.jpg);"></div>
<a onclick="openMovie('O Cheiro do Ouro', 'https://embedder.net/e/movie?imdb=tt27987407')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Cheiro do Ouro</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Vermelho, Branco e Sangue Azul', 'https://embedder.net/e/movie?imdb=tt10172266')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4f19r2t4gjbgMC6RbE8GYF2h46j.jpg);"></div>
<a onclick="openMovie('Vermelho, Branco e Sangue Azul', 'https://embedder.net/e/movie?imdb=tt10172266')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Vermelho, Branco e Sangue Azul</h5>
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
