from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Ardente Paciência', 'https://embedder.net/e/movie?imdb=tt15939090')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/plSUrCv17GRqFph7qSKfhT0jwcH.jpg);"></div>
    <a onclick="openMovie('Ardente Paciência', 'https://embedder.net/e/movie?imdb=tt15939090')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Ardente Paciência</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Como Agradar Uma Mulher', 'https://embedder.net/e/movie?imdb=tt10530838')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9PONfgIdAx01DJ0Ld93PVXxoU9r.jpg);"></div>
    <a onclick="openMovie('Como Agradar Uma Mulher', 'https://embedder.net/e/movie?imdb=tt10530838')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Como Agradar Uma Mulher</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Amante de Júlia', 'https://embedder.net/e/movie?imdb=tt17127518')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qcXamFmCTlSybSvyboN6PaS1bJG.jpg);"></div>
    <a onclick="openMovie('O Amante de Júlia', 'https://embedder.net/e/movie?imdb=tt17127518')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Amante de Júlia</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('The Flood', 'https://embedder.net/e/movie?imdb=tt15670222')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg);"></div>
    <a onclick="openMovie('The Flood', 'https://embedder.net/e/movie?imdb=tt15670222')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">The Flood</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Duro de Atuar', 'https://embedder.net/e/movie?imdb=tt27116016')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hcuZ68ymJgohTerR8Oo1mb76SJv.jpg);"></div>
    <a onclick="openMovie('Duro de Atuar', 'https://embedder.net/e/movie?imdb=tt27116016')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Duro de Atuar</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Missão de Sobrevivência', 'https://embedder.net/e/movie?imdb=tt5761544')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xsmNNU5UbnurOnCOdUHbpv2XyFI.jpg);"></div>
    <a onclick="openMovie('Missão de Sobrevivência', 'https://embedder.net/e/movie?imdb=tt5761544')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Missão de Sobrevivência</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Inverno', 'https://embedder.net/e/movie?imdb=tt17043138')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sXtEMHqIJ1CQ1EagoPofA2KUpek.jpg);"></div>
    <a onclick="openMovie('Inverno', 'https://embedder.net/e/movie?imdb=tt17043138')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Inverno</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Os Reis do Mundo', 'https://embedder.net/e/movie?imdb=tt15399372')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/s4QmLssxhPS9BlUvUQFvyZnv91a.jpg);"></div>
    <a onclick="openMovie('Os Reis do Mundo', 'https://embedder.net/e/movie?imdb=tt15399372')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Os Reis do Mundo</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Pretendente', 'https://embedder.net/e/movie?imdb=tt14958172')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bPlPJn8ruIwovyYeKjghbnYJs5Y.jpg);"></div>
    <a onclick="openMovie('O Pretendente', 'https://embedder.net/e/movie?imdb=tt14958172')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Pretendente</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Como Pétalas que Caem', 'https://embedder.net/e/movie?imdb=tt14227972')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/24kV2SUWZN1GTsoEIg6Y90CO8v.jpg);"></div>
    <a onclick="openMovie('Como Pétalas que Caem', 'https://embedder.net/e/movie?imdb=tt14227972')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Como Pétalas que Caem</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Rio do Desejo', 'https://embedder.net/e/movie?imdb=tt19855324')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eg3ECsQNNrch7NFRpOYZMKsmWk9.jpg);"></div>
    <a onclick="openMovie('O Rio do Desejo', 'https://embedder.net/e/movie?imdb=tt19855324')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Rio do Desejo</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Padre Pio', 'https://embedder.net/e/movie?imdb=tt18272884')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hRrCrLtbhIPelONxL8MEFif1JZC.jpg);"></div>
    <a onclick="openMovie('Padre Pio', 'https://embedder.net/e/movie?imdb=tt18272884')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Padre Pio</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('O Vilarejo', 'https://embedder.net/e/movie?imdb=tt27506951')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4v3XqPkRZyVuIijbvrl5GHOHw7B.jpg);"></div>
    <a onclick="openMovie('O Vilarejo', 'https://embedder.net/e/movie?imdb=tt27506951')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">O Vilarejo</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Correndo Contra o Vento', 'https://embedder.net/e/movie?imdb=tt9723240')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qCH1BFZ98GzYBm3tJb23ELpHGLm.jpg);"></div>
    <a onclick="openMovie('Correndo Contra o Vento', 'https://embedder.net/e/movie?imdb=tt9723240')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Correndo Contra o Vento</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('A Princesa Encantada: Era Uma Vez…', 'https://embedder.net/e/movie?imdb=tt26341934')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pfMgyj2afebT8LVrDVYHniDk3XJ.jpg);"></div>
    <a onclick="openMovie('A Princesa Encantada: Era Uma Vez…', 'https://embedder.net/e/movie?imdb=tt26341934')" class="media-play"><i class="icofont-ui-play"></i></a>  
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">A Princesa Encantada: Era Uma Vez…</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Detetive Knight: Vilão', 'https://embedder.net/e/movie?imdb=tt21435436')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/deuqT4q8GS0hXvaSqi97tq3VvTc.jpg);"></div>
    <a onclick="openMovie('Detetive Knight: Vilão', 'https://embedder.net/e/movie?imdb=tt21435436')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Detetive Knight: Vilão</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('曼谷风云', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9SOMw90TxkqdZ2N5LehWtBkMwJN.jpg);"></div>
    <a onclick="openMovie('曼谷风云', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">曼谷风云</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('掃毒3︰人在天涯', 'https://embedder.net/e/movie?imdb=tt26929966')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kPjZsEni0KF0IXGXh0kaxNESdGE.jpg);"></div>
    <a onclick="openMovie('掃毒3︰人在天涯', 'https://embedder.net/e/movie?imdb=tt26929966')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">掃毒3︰人在天涯</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Jagun Jagun: O Guerreiro', 'https://embedder.net/e/movie?imdb=tt28546464')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2NrM70jJ4NPST409wHER8ZVZiKo.jpg);"></div>
    <a onclick="openMovie('Jagun Jagun: O Guerreiro', 'https://embedder.net/e/movie?imdb=tt28546464')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Jagun Jagun: O Guerreiro</h5>
    </div>
    <!-- end media-box -->
    </div>
    </div>
    
    <div class="col mt-3">
    <!-- start media-box -->
    <div class="media-box">
    <a onclick="openMovie('Sede Assassina', 'https://embedder.net/e/movie?imdb=tt10275534')" class="full-click"></a>
    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kVGrAqS2C0tEWyuZ7kf7sFLA3CQ.jpg);"></div>
    <a onclick="openMovie('Sede Assassina', 'https://embedder.net/e/movie?imdb=tt10275534')" class="media-play"><i class="icofont-ui-play"></i></a>
    <!-- Start rate-quality-info -->
    <div class="media-info">
    <h5 class="media-box-title">Sede Assassina</h5>
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
