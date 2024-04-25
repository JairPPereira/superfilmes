from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ghostbusters: Apocalipse de Gelo', 'https://embedder.net/e/movie?imdb=tt21235248')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/k7tbRCAsDZuefyL632iwMmIAlpw.jpg);"></div>
<a onclick="openMovie('Ghostbusters: Apocalipse de Gelo', 'https://embedder.net/e/movie?imdb=tt21235248')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ghostbusters: Apocalipse de Gelo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Imaculada', 'https://embedder.net/e/movie?imdb=tt23137390')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7bTGVenx0mUnuy4cx4vWtuYHY5Q.jpg);"></div>
<a onclick="openMovie('Imaculada', 'https://embedder.net/e/movie?imdb=tt23137390')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Imaculada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Impuratus: A Confissão do Diabo', 'https://embedder.net/e/movie?imdb=tt4945764')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uoxXcTlZTqNX3qiYaxUxLdM39nq.jpg);"></div>
<a onclick="openMovie('Impuratus: A Confissão do Diabo', 'https://embedder.net/e/movie?imdb=tt4945764')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Impuratus: A Confissão do Diabo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Mãe em Fúria', 'https://embedder.net/e/movie?imdb=tt10430850')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6ejm4Sx3rp44awUE0qyG1APBvpI.jpg);"></div>
<a onclick="openMovie('Mãe em Fúria', 'https://embedder.net/e/movie?imdb=tt10430850')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Mãe em Fúria</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Jogo do Elevador', 'https://embedder.net/e/movie?imdb=tt14013772')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zWfE8QVHRq0tEcgJlud394YQl2k.jpg);"></div>
<a onclick="openMovie('O Jogo do Elevador', 'https://embedder.net/e/movie?imdb=tt14013772')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Jogo do Elevador</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Caminho para o Coração', 'https://embedder.net/e/movie?imdb=tt14590480')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oZPl3U4Uxi2FifZCKiHsIZTxIFj.jpg);"></div>
<a onclick="openMovie('O Caminho para o Coração', 'https://embedder.net/e/movie?imdb=tt14590480')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Caminho para o Coração</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Capitão Soviético', 'https://embedder.net/e/movie?imdb=tt13322726')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ncVSZQn1fH0U4EB7kRzb4Pw53Mi.jpg);"></div>
<a onclick="openMovie('O Capitão Soviético', 'https://embedder.net/e/movie?imdb=tt13322726')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Capitão Soviético</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Plano de Aposentadoria', 'https://embedder.net/e/movie?imdb=tt14827638')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/svRPl0vKtvtIAV1baUTcTiRlzsZ.jpg);"></div>
<a onclick="openMovie('Plano de Aposentadoria', 'https://embedder.net/e/movie?imdb=tt14827638')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Plano de Aposentadoria</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Puppy Love', 'https://embedder.net/e/movie?imdb=tt28182736')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oTc03izWZ9UdD3y0HegVV2M0s0J.jpg);"></div>
<a onclick="openMovie('Puppy Love', 'https://embedder.net/e/movie?imdb=tt28182736')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Puppy Love</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Estritamente Confidencial', 'https://embedder.net/e/movie?imdb=tt22805652')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oRUusyQlKCfynGO1fIoCiLeNsY4.jpg);"></div>
<a onclick="openMovie('Estritamente Confidencial', 'https://embedder.net/e/movie?imdb=tt22805652')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Estritamente Confidencial</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Zona de Risco', 'https://embedder.net/e/movie?imdb=tt19864802')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cCRAMT530bTcZ4xs6E6pTUoAalE.jpg);"></div>
<a onclick="openMovie('Zona de Risco', 'https://embedder.net/e/movie?imdb=tt19864802')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Zona de Risco</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Guerra Civil', 'https://embedder.net/e/movie?imdb=tt17279496')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eh5OA35IjVeXVy0rHWmXvJBecMp.jpg);"></div>
<a onclick="openMovie('Guerra Civil', 'https://embedder.net/e/movie?imdb=tt17279496')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Guerra Civil</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Parede entre Nós', 'https://embedder.net/e/movie?imdb=tt20198716')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5P0KKvPwIFeQnIn9clAOCJBuRsj.jpg);"></div>
<a onclick="openMovie('Uma Parede entre Nós', 'https://embedder.net/e/movie?imdb=tt20198716')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Parede entre Nós</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Jornada Entre Amigos', 'https://embedder.net/e/movie?imdb=tt31805808')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hE9ToZRWcEd3jh96gbhKjWlUOQa.jpg);"></div>
<a onclick="openMovie('Uma Jornada Entre Amigos', 'https://embedder.net/e/movie?imdb=tt31805808')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Jornada Entre Amigos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sleep: O Mal Nunca Dorme', 'https://embedder.net/e/movie?imdb=tt8209702')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hPkKVF1txOCiYvhx0PZkQADvX3P.jpg);"></div>
<a onclick="openMovie('Sleep: O Mal Nunca Dorme', 'https://embedder.net/e/movie?imdb=tt8209702')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sleep: O Mal Nunca Dorme</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('SDL - A Batalha Musical', 'https://embedder.net/e/movie?imdb=tt31456767')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/iiYroOiA7PCwjmxRnMst6jfxXFY.jpg);"></div>
<a onclick="openMovie('SDL - A Batalha Musical', 'https://embedder.net/e/movie?imdb=tt31456767')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">SDL - A Batalha Musical</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Possessões', 'https://embedder.net/e/movie?imdb=tt14853700')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wbf1LkidorzXo2yI9pbjH23YJRr.jpg);"></div>
<a onclick="openMovie('Possessões', 'https://embedder.net/e/movie?imdb=tt14853700')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Possessões</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Pica-Pau: As Férias no Acampamento', 'https://embedder.net/e/movie?imdb=tt20221690')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2INtXKQGxQLT6MhztartxiammuC.jpg);"></div>
<a onclick="openMovie('Pica-Pau: As Férias no Acampamento', 'https://embedder.net/e/movie?imdb=tt20221690')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Pica-Pau: As Férias no Acampamento</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Paz e Chocolate', 'https://embedder.net/e/movie?imdb=tt11236228')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7SXPnOYZscdtyCwH8h2lInnSpGs.jpg);"></div>
<a onclick="openMovie('Paz e Chocolate', 'https://embedder.net/e/movie?imdb=tt11236228')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Paz e Chocolate</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Os Três Mosqueteiros: Milady', 'https://embedder.net/e/movie?imdb=tt12672620')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qsOK6mqsmddKmiEtLReV6nlbuW0.jpg);"></div>
<a onclick="openMovie('Os Três Mosqueteiros: Milady', 'https://embedder.net/e/movie?imdb=tt12672620')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Os Três Mosqueteiros: Milady</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Que Jennifer Fez?', 'https://embedder.net/e/movie?imdb=tt31747163')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6IY8XqXmABgT50bvUfJr1rbG1Sv.jpg);"></div>
<a onclick="openMovie('O Que Jennifer Fez?', 'https://embedder.net/e/movie?imdb=tt31747163')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Que Jennifer Fez?</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Mal que Nos Habita', 'https://embedder.net/e/movie?imdb=tt16300962')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/t6cWfm0o5TzCa3nHtHhXpzjBc8V.jpg);"></div>
<a onclick="openMovie('O Mal que Nos Habita', 'https://embedder.net/e/movie?imdb=tt16300962')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Mal que Nos Habita</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Herança Roubada', 'https://embedder.net/e/movie?imdb=tt21955196')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yGV8501LvjkCBEB8Reyq8m2dOdK.jpg);"></div>
<a onclick="openMovie('Herança Roubada', 'https://embedder.net/e/movie?imdb=tt21955196')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Herança Roubada</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Helldose', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/21IxtKTgAjUvGUTlfZo4iuopzxj.jpg);"></div>
<a onclick="openMovie('Helldose', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Helldose</h5>
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
