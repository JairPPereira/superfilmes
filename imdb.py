from bs4 import BeautifulSoup
import re

html = """
 <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Deserto do Ouro', 'https://embedder.net/e/movie?imdb=tt6020800')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mlnNX9pf3MgibwR89Tb40b17kJ9.jpg);"></div>
                    <a onclick="openMovie('Deserto do Ouro', 'https://embedder.net/e/movie?imdb=tt6020800')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Deserto do Ouro</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Emergência', 'https://embedder.net/e/movie?imdb=tt13650600')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gkXzcMt1WcAYvjJPnz6CcThRdxy.jpg);"></div>
                    <a onclick="openMovie('Emergência', 'https://embedder.net/e/movie?imdb=tt13650600')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Emergência</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Instinto Assassino', 'https://embedder.net/e/movie?imdb=tt3876910')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4Mynv1TcKx5AwCsv1wr5Y2hnm6S.jpg);"></div>
                    <a onclick="openMovie('Instinto Assassino', 'https://embedder.net/e/movie?imdb=tt3876910')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Instinto Assassino</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Rei das Fugas', 'https://embedder.net/e/movie?imdb=tt10516196')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7QpoARuHNYZdpUUd0YUIHCaOi9P.jpg);"></div>
                    <a onclick="openMovie('O Rei das Fugas', 'https://embedder.net/e/movie?imdb=tt10516196')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Rei das Fugas</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Soldado que Não Existiu', 'https://embedder.net/e/movie?imdb=tt1879016')" class="full-click"></a>     
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/twAoW3HSu0RpBLSwCsx2eY1fnMf.jpg);"></div>
                    <a onclick="openMovie('O Soldado que Não Existiu', 'https://embedder.net/e/movie?imdb=tt1879016')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Soldado que Não Existiu</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Os Tênis Encantados', 'https://embedder.net/e/movie?imdb=tt10160886')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ju8duC4TXVqRTePcEww9VVtXbxU.jpg);"></div>
                    <a onclick="openMovie('Os Tênis Encantados', 'https://embedder.net/e/movie?imdb=tt10160886')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Os Tênis Encantados</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Último Ritual', 'https://embedder.net/e/movie?imdb=tt8941380')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9WpuwUQdH9f0Iow2H6GR6bNqAof.jpg);"></div>
                    <a onclick="openMovie('O Último Ritual', 'https://embedder.net/e/movie?imdb=tt8941380')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Último Ritual</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Passado Violento', 'https://embedder.net/e/movie?imdb=tt10023022')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4cxFO7AlQOotgA45nuuej2DMyiw.jpg);"></div>
                    <a onclick="openMovie('Passado Violento', 'https://embedder.net/e/movie?imdb=tt10023022')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Passado Violento</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Psych 3: Este é o Gus', 'https://embedder.net/e/movie?imdb=tt14641648')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zWhKl8QmctB86pKwDUvhsySITBg.jpg);"></div>
                    <a onclick="openMovie('Psych 3: Este é o Gus', 'https://embedder.net/e/movie?imdb=tt14641648')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Psych 3: Este é o Gus</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Rodrigo Sant Anna: Cheguei', 'https://embedder.net/e/movie?imdb=tt19883622')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/t7ZkVFVoxDzbnAq3e3W9DWpy67Q.jpg);"></div>
                    <a onclick="openMovie('Rodrigo Sant Anna: Cheguei', 'https://embedder.net/e/movie?imdb=tt19883622')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Rodrigo Sant'Anna: Cheguei</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Sempre em Frente', 'https://embedder.net/e/movie?imdb=tt10986222')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/aXktvjotXObNdQdnYkyNNMJqNX0.jpg);"></div>
                    <a onclick="openMovie('Sempre em Frente', 'https://embedder.net/e/movie?imdb=tt10986222')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Sempre em Frente</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Small Engine Repair', 'https://embedder.net/e/movie?imdb=tt9789042')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8xYm5fZXT0DNuGRUHdkQJ1puNYH.jpg);"></div>
                    <a onclick="openMovie('Small Engine Repair', 'https://embedder.net/e/movie?imdb=tt9789042')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Small Engine Repair</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Toscana', 'https://embedder.net/e/movie?imdb=tt13276352')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/orOHMxqgZjnb1dOZGGrXO7xOn6z.jpg);"></div>
                    <a onclick="openMovie('Toscana', 'https://embedder.net/e/movie?imdb=tt13276352')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Toscana</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Uma Lição de Esperança', 'https://embedder.net/e/movie?imdb=tt9738784')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7EzVSW5F9Kbt8VIJJJ2G4x1hz5q.jpg);"></div>
                    <a onclick="openMovie('Uma Lição de Esperança', 'https://embedder.net/e/movie?imdb=tt9738784')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Uma Lição de Esperança</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Vai Dar Nada', 'https://embedder.net/e/movie?imdb=tt14926808')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jaXIoGMGsA1fCciQqkqIw6GmRgR.jpg);"></div>
                    <a onclick="openMovie('Vai Dar Nada', 'https://embedder.net/e/movie?imdb=tt14926808')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Vai Dar Nada</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Animais Fantásticos: Os Segredos de Dumbledore', 'https://embedder.net/e/movie?imdb=tt4123432')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gopGghuMtmdMviBcl9G0JfVB2RZ.jpg);"></div>
                    <a onclick="openMovie('Animais Fantásticos: Os Segredos de Dumbledore', 'https://embedder.net/e/movie?imdb=tt4123432')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Animais Fantásticos: Os Segredos de Dumbledore</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Top Gun: Maverick', 'https://embedder.net/e/movie?imdb=tt1745960')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/62HCnUTziyWcpDaBO2i1DX17ljH.jpg);"></div>
                    <a onclick="openMovie('Top Gun: Maverick', 'https://embedder.net/e/movie?imdb=tt1745960')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Top Gun: Maverick</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Morbius', 'https://embedder.net/e/movie?imdb=tt5108870')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg);"></div>
                    <a onclick="openMovie('Morbius', 'https://embedder.net/e/movie?imdb=tt5108870')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Morbius</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Sonic 2: O Filme', 'https://embedder.net/e/movie?imdb=tt12412888')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg);"></div>
                    <a onclick="openMovie('Sonic 2: O Filme', 'https://embedder.net/e/movie?imdb=tt12412888')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Sonic 2: O Filme</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Tico e Teco: Defensores da Lei', 'https://embedder.net/e/movie?imdb=tt3513500')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bOYRRVe9jhlwU8hAZ53Kg0vhIH4.jpg);"></div>
                    <a onclick="openMovie('Tico e Teco: Defensores da Lei', 'https://embedder.net/e/movie?imdb=tt3513500')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Tico e Teco: Defensores da Lei</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Acampamento do Pecado', 'https://embedder.net/e/movie?imdb=tt8949056')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1L07mlJ5Yhxm7OgZmnzIsROaX4m.jpg);"></div>
                    <a onclick="openMovie('Acampamento do Pecado', 'https://embedder.net/e/movie?imdb=tt8949056')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Acampamento do Pecado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Doutor Estranho no Multiverso da Loucura', 'https://embedder.net/e/movie?imdb=tt9419884')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vMD2BXVMXDbbmdjBNvCgcBzXlSD.jpg);"></div>
                    <a onclick="openMovie('Doutor Estranho no Multiverso da Loucura', 'https://embedder.net/e/movie?imdb=tt9419884')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Doutor Estranho no Multiverso da Loucura</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('The Gardener', 'https://embedder.net/e/movie?imdb=tt11217036')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1AGZvsod9d1PK8hTnv81F1QlGhR.jpg);"></div>
                    <a onclick="openMovie('The Gardener', 'https://embedder.net/e/movie?imdb=tt11217036')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">The Gardener</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Força para Viver', 'https://embedder.net/e/movie?imdb=tt1798243')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4ONoY4ElKF1lrRDBgkFDROXQPpS.jpg);"></div>
                    <a onclick="openMovie('Força para Viver', 'https://embedder.net/e/movie?imdb=tt1798243')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Força para Viver</h5>
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
