from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Sequestro', 'https://embedder.net/e/movie?imdb=tt10233954')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fnXemj2RVe4oIyiiapYmk1rAkAC.jpg);"></div>
                    <a onclick="openMovie('Sequestro', 'https://embedder.net/e/movie?imdb=tt10233954')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Sequestro</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Phineas e Ferb: O Filme: Candace Contra o Universo', 'https://embedder.net/e/movie?imdb=tt1817232')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xNYCXgfBZiFdPcSY5h1AGxly7W8.jpg);"></div>
                    <a onclick="openMovie('Phineas e Ferb: O Filme: Candace Contra o Universo', 'https://embedder.net/e/movie?imdb=tt1817232')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Phineas e Ferb: O Filme: Candace Contra o Universo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Eu, Robô', 'https://embedder.net/e/movie?imdb=tt0343818')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2I8b8SScgbVONX0LCURG8O184Dy.jpg);"></div>
                    <a onclick="openMovie('Eu, Robô', 'https://embedder.net/e/movie?imdb=tt0343818')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Eu, Robô</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Lenda do Cavaleiro Verde', 'https://embedder.net/e/movie?imdb=tt9243804')" class="full-click"></a>    
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uEBz75PgdWLZ6KvVyzYn4xKJnrK.jpg);"></div>
                    <a onclick="openMovie('A Lenda do Cavaleiro Verde', 'https://embedder.net/e/movie?imdb=tt9243804')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Lenda do Cavaleiro Verde</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Gigante de Ferro', 'https://embedder.net/e/movie?imdb=tt0129167')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/a8StQ8dmVQ94THFTrMVHuMp5QKw.jpg);"></div>
                    <a onclick="openMovie('O Gigante de Ferro', 'https://embedder.net/e/movie?imdb=tt0129167')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Gigante de Ferro</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Estranho Mundo de Jack', 'https://embedder.net/e/movie?imdb=tt0107688')" class="full-click"></a>      
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pyMGhuAWC7nYyolKJlFbT7pp02K.jpg);"></div>
                    <a onclick="openMovie('O Estranho Mundo de Jack', 'https://embedder.net/e/movie?imdb=tt0107688')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Estranho Mundo de Jack</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Cherry: Inocência Perdida', 'https://embedder.net/e/movie?imdb=tt9130508')" class="full-click"></a>     
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qbSsR0IfnxdXZqfRMpH2PgLAbPV.jpg);"></div>
                    <a onclick="openMovie('Cherry: Inocência Perdida', 'https://embedder.net/e/movie?imdb=tt9130508')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Cherry: Inocência Perdida</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Super Murali', 'https://embedder.net/e/movie?imdb=tt7268738')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/d66tZZvkbUrIUbqzF1LYdGUyCe3.jpg);"></div>
                    <a onclick="openMovie('Super Murali', 'https://embedder.net/e/movie?imdb=tt7268738')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Super Murali</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Lulli', 'https://embedder.net/e/movie?imdb=tt16282866')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ztJHKv6KSSgCTWAI2STrX2BeuJZ.jpg);"></div>
                    <a onclick="openMovie('Lulli', 'https://embedder.net/e/movie?imdb=tt16282866')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Lulli</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Fátima - A História de um Milagre', 'https://embedder.net/e/movie?imdb=tt2197936')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uhOvDIvkSrqkdFk8Bn6f8UNuntK.jpg);"></div>
                    <a onclick="openMovie('Fátima - A História de um Milagre', 'https://embedder.net/e/movie?imdb=tt2197936')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Fátima - A História de um Milagre</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Sooryavanshi', 'https://embedder.net/e/movie?imdb=tt9531772')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1vuix8r1CJ2M6IldR27Z95hWm7e.jpg);"></div>
                    <a onclick="openMovie('Sooryavanshi', 'https://embedder.net/e/movie?imdb=tt9531772')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Sooryavanshi</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Alvin e os Esquilos 2', 'https://embedder.net/e/movie?imdb=tt1231580')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9L9Cgl6VUlHrnjcJCBj0S338Kuo.jpg);"></div>
                    <a onclick="openMovie('Alvin e os Esquilos 2', 'https://embedder.net/e/movie?imdb=tt1231580')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Alvin e os Esquilos 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Alvin e os Esquilos', 'https://embedder.net/e/movie?imdb=tt0952640')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ljR8MtOGdHv7305ywq4K7hDUqIz.jpg);"></div>
                    <a onclick="openMovie('Alvin e os Esquilos', 'https://embedder.net/e/movie?imdb=tt0952640')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Alvin e os Esquilos</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Alvin e os Esquilos 3', 'https://embedder.net/e/movie?imdb=tt1615918')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1yk43x6M0PAq7tVsksOIcWi9k3Y.jpg);"></div>
                    <a onclick="openMovie('Alvin e os Esquilos 3', 'https://embedder.net/e/movie?imdb=tt1615918')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Alvin e os Esquilos 3</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Alvin e os Esquilos: Na Estrada', 'https://embedder.net/e/movie?imdb=tt2974918')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ehwqRB6x5gEpZRhQWS3ei8b7Fx8.jpg);"></div>
                    <a onclick="openMovie('Alvin e os Esquilos: Na Estrada', 'https://embedder.net/e/movie?imdb=tt2974918')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Alvin e os Esquilos: Na Estrada</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Forma da Água', 'https://embedder.net/e/movie?imdb=tt5580390')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hHPFq7myTjAVH6CwQjamAuUqhrr.jpg);"></div>
                    <a onclick="openMovie('A Forma da Água', 'https://embedder.net/e/movie?imdb=tt5580390')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Forma da Água</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Uma Voz Contra o Poder', 'https://embedder.net/e/movie?imdb=tt8976696')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/x4oETRlLNwtDJ73nDIk3eQ0NmMD.jpg);"></div>
                    <a onclick="openMovie('Uma Voz Contra o Poder', 'https://embedder.net/e/movie?imdb=tt8976696')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Uma Voz Contra o Poder</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Efeito Borboleta', 'https://embedder.net/e/movie?imdb=tt0289879')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ojyrQRIQ6f0hHFpJoXTAeUx0ynX.jpg);"></div>
                    <a onclick="openMovie('Efeito Borboleta', 'https://embedder.net/e/movie?imdb=tt0289879')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Efeito Borboleta</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Jumanji', 'https://embedder.net/e/movie?imdb=tt0113497')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/z46R8oShx61gXMrAmd7ptpVqNI0.jpg);"></div>
                    <a onclick="openMovie('Jumanji', 'https://embedder.net/e/movie?imdb=tt0113497')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Jumanji</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Jumanji: Próxima Fase', 'https://embedder.net/e/movie?imdb=tt7975244')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bBRDUTr6jgbD8I8A9DvVGrVbdfB.jpg);"></div>
                    <a onclick="openMovie('Jumanji: Próxima Fase', 'https://embedder.net/e/movie?imdb=tt7975244')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Jumanji: Próxima Fase</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('IT: Capítulo Dois', 'https://embedder.net/e/movie?imdb=tt7349950')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yVksBmUf2uwEruDttP3XtHamS8q.jpg);"></div>
                    <a onclick="openMovie('IT: Capítulo Dois', 'https://embedder.net/e/movie?imdb=tt7349950')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">IT: Capítulo Dois</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('It: A Coisa', 'https://embedder.net/e/movie?imdb=tt1396484')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uYxz0lIiNgErrPhQbSjUdwYxtFc.jpg);"></div>
                    <a onclick="openMovie('It: A Coisa', 'https://embedder.net/e/movie?imdb=tt1396484')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">It: A Coisa</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Anaconda', 'https://embedder.net/e/movie?imdb=tt0118615')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/huhasXFLrKfPHEqbz4ALadOnXZZ.jpg);"></div>
                    <a onclick="openMovie('Anaconda', 'https://embedder.net/e/movie?imdb=tt0118615')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Anaconda</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Anaconda 2: A Caçada pela Orquídea Sangrenta', 'https://embedder.net/e/movie?imdb=tt0366174')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yi3KRmJlEtRV090wgeEPiFQ6cxm.jpg);"></div>
                    <a onclick="openMovie('Anaconda 2: A Caçada pela Orquídea Sangrenta', 'https://embedder.net/e/movie?imdb=tt0366174')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Anaconda 2: A Caçada pela Orquídea Sangrenta</h5>
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
