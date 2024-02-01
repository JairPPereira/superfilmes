from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Estranho Acidente', 'https://embedder.net/e/movie?imdb=tt7358576')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oQofiWOVl5GqntIMVetdhY5GTvi.jpg);"></div>
<a onclick="openMovie('Um Estranho Acidente', 'https://embedder.net/e/movie?imdb=tt7358576')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Estranho Acidente</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Ver�o S� Para N�s', 'https://embedder.net/e/movie?imdb=tt17348934')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2WZs7fG3iMLWLPxcU8ux9Qc9omE.jpg);"></div>
<a onclick="openMovie('Um Ver�o S� Para N�s', 'https://embedder.net/e/movie?imdb=tt17348934')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Ver�o S� Para N�s</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Vai Ter Troco', 'https://embedder.net/e/movie?imdb=tt28184491')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5z7uFzBp30UFzOJPzsyZalr0GU0.jpg);"></div>
<a onclick="openMovie('Vai Ter Troco', 'https://embedder.net/e/movie?imdb=tt28184491')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Vai Ter Troco</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Sociedade da Neve', 'https://embedder.net/e/movie?imdb=tt16277242')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7fQTmvKgVGxifieVryqqlxohkoW.jpg);"></div>
<a onclick="openMovie('A Sociedade da Neve', 'https://embedder.net/e/movie?imdb=tt16277242')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Sociedade da Neve</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ferrari', 'https://embedder.net/e/movie?imdb=tt3758542')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xBFyJHvXCTgf9Vmq5uCnXRHrMQ4.jpg);"></div>
<a onclick="openMovie('Ferrari', 'https://embedder.net/e/movie?imdb=tt3758542')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ferrari</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Gatos no Museu', 'https://embedder.net/e/movie?imdb=tt24069962')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fzFkvkr8RBZfpgDNx65wxiZjnnU.jpg);"></div>
<a onclick="openMovie('Gatos no Museu', 'https://embedder.net/e/movie?imdb=tt24069962')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Gatos no Museu</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Patos!', 'https://embedder.net/e/movie?imdb=tt6495056')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2KPvdtGjeFT8IwxUkUWmifokXG0.jpg);"></div>
<a onclick="openMovie('Patos!', 'https://embedder.net/e/movie?imdb=tt6495056')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Patos!</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Minha Solid�o Tem Asas', 'https://embedder.net/e/movie?imdb=tt21964260')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6v1U61XbrCXVF7CVAjRBTslUmaA.jpg);"></div>
<a onclick="openMovie('Minha Solid�o Tem Asas', 'https://embedder.net/e/movie?imdb=tt21964260')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Minha Solid�o Tem Asas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Pris�o Domiciliar', 'https://embedder.net/e/movie?imdb=tt14323258')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vnFz9ky4Z5vQE5XAPcnt2qryFac.jpg);"></div>
<a onclick="openMovie('Pris�o Domiciliar', 'https://embedder.net/e/movie?imdb=tt14323258')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Pris�o Domiciliar</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Lobo Solit�rio', 'https://embedder.net/e/movie?imdb=tt14640358')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/o2BEjGcNxyNWu1BbQNcWIw8A4i0.jpg);"></div>
<a onclick="openMovie('O Lobo Solit�rio', 'https://embedder.net/e/movie?imdb=tt14640358')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Lobo Solit�rio</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Iron Claw', 'https://embedder.net/e/movie?imdb=tt21064584')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hRaEEt7wZN2Iyyh23Ge8Dqwzqlk.jpg);"></div>
<a onclick="openMovie('The Iron Claw', 'https://embedder.net/e/movie?imdb=tt21064584')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Iron Claw</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Beekeeper - Rede de Vingan�a', 'https://embedder.net/e/movie?imdb=tt15314262')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cCGFvoxzaBbYM3I68s6F939fybN.jpg);"></div>
<a onclick="openMovie('Beekeeper - Rede de Vingan�a', 'https://embedder.net/e/movie?imdb=tt15314262')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Beekeeper - Rede de Vingan�a</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('The Kitchen', 'https://embedder.net/e/movie?imdb=tt4460800')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tV0hK1BiqYrYlehChv4WJXIWgmZ.jpg);"></div>
<a onclick="openMovie('The Kitchen', 'https://embedder.net/e/movie?imdb=tt4460800')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">The Kitchen</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Underdoggs', 'https://embedder.net/e/movie?imdb=tt21434318')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4Eg4fntbZ6xOngbXta0irzqGM5N.jpg);"></div>
<a onclick="openMovie('Os Underdoggs', 'https://embedder.net/e/movie?imdb=tt21434318')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Underdoggs</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Porta-malas: Trancada', 'https://embedder.net/e/movie?imdb=tt27214365')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sQ2FqmB98T8bAjhYHa3DIf2TS4H.jpg);"></div>
<a onclick="openMovie('Porta-malas: Trancada', 'https://embedder.net/e/movie?imdb=tt27214365')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Porta-malas: Trancada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Em Ru�nas', 'https://embedder.net/e/movie?imdb=tt29722855')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vT3xahepzP796ei0NiZIZ6t8vsl.jpg);"></div>
<a onclick="openMovie('Em Ru�nas', 'https://embedder.net/e/movie?imdb=tt29722855')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Em Ru�nas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Capitu e o Cap�tulo', 'https://embedder.net/e/movie?imdb=tt14763720')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cTRJN5741gtMrd3WcTHg2Pfn2jQ.jpg);"></div>
<a onclick="openMovie('Capitu e o Cap�tulo', 'https://embedder.net/e/movie?imdb=tt14763720')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Capitu e o Cap�tulo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Bons Companheiros', 'https://embedder.net/e/movie?imdb=tt15430628')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mr36VdEQw2Un3hiQ8ozPzXnVRy7.jpg);"></div>
<a onclick="openMovie('Bons Companheiros', 'https://embedder.net/e/movie?imdb=tt15430628')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Bons Companheiros</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Todos Menos Voc�', 'https://embedder.net/e/movie?imdb=tt26047818')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/f5e8cT4vBQ1ZRSXC658CvUnzzkl.jpg);"></div>
<a onclick="openMovie('Todos Menos Voc�', 'https://embedder.net/e/movie?imdb=tt26047818')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Todos Menos Voc�</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Alarme de Inc�ndio', 'https://embedder.net/e/movie?imdb=tt30629563')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qXB0yZbECic73jLrqvCgcpL9dhU.jpg);"></div>
<a onclick="openMovie('Alarme de Inc�ndio', 'https://embedder.net/e/movie?imdb=tt30629563')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Alarme de Inc�ndio</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Vis�es Mortais', 'https://embedder.net/e/movie?imdb=tt7986046')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/aG68lR36HbEASelSpwK7PHi8N9H.jpg);"></div>
<a onclick="openMovie('Vis�es Mortais', 'https://embedder.net/e/movie?imdb=tt7986046')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Vis�es Mortais</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('60 Minutos', 'https://embedder.net/e/movie?imdb=tt29538571')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/n5wjsuYh954HLagCnqrLpPT8xi7.jpg);"></div>
<a onclick="openMovie('60 Minutos', 'https://embedder.net/e/movie?imdb=tt29538571')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">60 Minutos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Unit 262', 'https://embedder.net/e/movie?imdb=tt28567651')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/paXIdSUhvuFNgNUn6cz2N2HHq0V.jpg);"></div>
<a onclick="openMovie('Unit 262', 'https://embedder.net/e/movie?imdb=tt28567651')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Unit 262</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Noite Sem Limites', 'https://embedder.net/e/movie?imdb=tt4160608')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6z9utEbOSkXrSdvUugWUkj0sOUb.jpg);"></div>
<a onclick="openMovie('Uma Noite Sem Limites', 'https://embedder.net/e/movie?imdb=tt4160608')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Noite Sem Limites</h5>
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
