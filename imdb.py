from bs4 import BeautifulSoup
import re

html = """
 <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Fera', 'https://embedder.net/e/movie?imdb=tt1152398')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ewZDnY33pLLsVJOsEQHYyibzc9H.jpg);"></div>
                    <a onclick="openMovie('A Fera', 'https://embedder.net/e/movie?imdb=tt1152398')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Fera</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Lenda do Tesouro Perdido: Livro dos Segredos', 'https://embedder.net/e/movie?imdb=tt0465234')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uieqgufMTYPIq5Zcs5rfJ0b1eMb.jpg);"></div>
                    <a onclick="openMovie('A Lenda do Tesouro Perdido: Livro dos Segredos', 'https://embedder.net/e/movie?imdb=tt0465234')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Lenda do Tesouro Perdido: Livro dos Segredos</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('The Deep House', 'https://embedder.net/e/movie?imdb=tt11686490')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5xhAPxRr64oQPEFnUOrttuI4ZEU.jpg);"></div>
                    <a onclick="openMovie('The Deep House', 'https://embedder.net/e/movie?imdb=tt11686490')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">The Deep House</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Pianista', 'https://embedder.net/e/movie?imdb=tt0253474')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/s0evYrftQZepUEaLPUFUdRvBG80.jpg);"></div>
                    <a onclick="openMovie('O Pianista', 'https://embedder.net/e/movie?imdb=tt0253474')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Pianista</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Imagine Eu e Você', 'https://embedder.net/e/movie?imdb=tt0421994')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2TmEsqxYLifopx8XfhgzLNO5oA7.jpg);"></div>
                    <a onclick="openMovie('Imagine Eu e Você', 'https://embedder.net/e/movie?imdb=tt0421994')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Imagine Eu e Você</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Click', 'https://embedder.net/e/movie?imdb=tt0389860')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oL0k5JA53PyoHSZqKb3cNkhwBCE.jpg);"></div>
                    <a onclick="openMovie('Click', 'https://embedder.net/e/movie?imdb=tt0389860')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Click</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Legião', 'https://embedder.net/e/movie?imdb=tt1038686')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4w83G68shLcuFcHaWfdPxPu1pUA.jpg);"></div>
                    <a onclick="openMovie('Legião', 'https://embedder.net/e/movie?imdb=tt1038686')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Legião</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Upgrade: Atualização', 'https://embedder.net/e/movie?imdb=tt6499752')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yVRDpj9wg6sYnBugfxUbnjBdHWo.jpg);"></div>
                    <a onclick="openMovie('Upgrade: Atualização', 'https://embedder.net/e/movie?imdb=tt6499752')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Upgrade: Atualização</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Stratton - Forças Especiais', 'https://embedder.net/e/movie?imdb=tt3567666')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ba6iOdlHUxlzRvJTq2akBuSlQdH.jpg);"></div>
                    <a onclick="openMovie('Stratton - Forças Especiais', 'https://embedder.net/e/movie?imdb=tt3567666')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Stratton - Forças Especiais</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Animal Cordial', 'https://embedder.net/e/movie?imdb=tt5126274')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5MKLyUWxri8ePW5wM1Wpdgqj5M7.jpg);"></div>
                    <a onclick="openMovie('O Animal Cordial', 'https://embedder.net/e/movie?imdb=tt5126274')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Animal Cordial</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Possessão de Deborah Logan', 'https://embedder.net/e/movie?imdb=tt3387648')" class="full-click"></a>  
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/77i7EBUyQKOUiZeYQ5tWDGQb0AI.jpg);"></div>
                    <a onclick="openMovie('A Possessão de Deborah Logan', 'https://embedder.net/e/movie?imdb=tt3387648')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Possessão de Deborah Logan</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Ouija: Origem do Mal', 'https://embedder.net/e/movie?imdb=tt4361050')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zTIAc7HvOrd1OMz0YFtzdfTUBlt.jpg);"></div>
                    <a onclick="openMovie('Ouija: Origem do Mal', 'https://embedder.net/e/movie?imdb=tt4361050')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Ouija: Origem do Mal</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Os Opostos Sempre Se Atraem', 'https://embedder.net/e/movie?imdb=tt13822738')" class="full-click"></a>  
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/o1KfmIKXZb3zXYWFKWt31G3w8DI.jpg);"></div>
                    <a onclick="openMovie('Os Opostos Sempre Se Atraem', 'https://embedder.net/e/movie?imdb=tt13822738')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Os Opostos Sempre Se Atraem</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Sentido da Vida', 'https://embedder.net/e/movie?imdb=tt13308110')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wHX3FRG85FBtaWxxFkDeYqsv5Sf.jpg);"></div>
                    <a onclick="openMovie('O Sentido da Vida', 'https://embedder.net/e/movie?imdb=tt13308110')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Sentido da Vida</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Massacre da Serra Elétrica: A Lenda Continua', 'https://embedder.net/e/movie?imdb=tt1572315')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/34y53bP3bWX4DTAr8cishqcyP4f.jpg);"></div>
                    <a onclick="openMovie('O Massacre da Serra Elétrica: A Lenda Continua', 'https://embedder.net/e/movie?imdb=tt1572315')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Massacre da Serra Elétrica: A Lenda Continua</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Massacre da Serra Elétrica', 'https://embedder.net/e/movie?imdb=tt0324216')" class="full-click"></a>  
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/peL5G7S7KER4y5fUAGgtGxRccbv.jpg);"></div>
                    <a onclick="openMovie('O Massacre da Serra Elétrica', 'https://embedder.net/e/movie?imdb=tt0324216')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Massacre da Serra Elétrica</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Massacre da Serra Elétrica: O Início', 'https://embedder.net/e/movie?imdb=tt0420294')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/a6oqQberLAI2KWkYEz6c4gP2nIk.jpg);"></div>
                    <a onclick="openMovie('O Massacre da Serra Elétrica: O Início', 'https://embedder.net/e/movie?imdb=tt0420294')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Massacre da Serra Elétrica: O Início</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Joy: O Nome do Sucesso', 'https://embedder.net/e/movie?imdb=tt2446980')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7icWz22RlPltHdIpR1iF95fuSrs.jpg);"></div>
                    <a onclick="openMovie('Joy: O Nome do Sucesso', 'https://embedder.net/e/movie?imdb=tt2446980')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Joy: O Nome do Sucesso</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Ace Ventura 2: Um Maluco na África', 'https://embedder.net/e/movie?imdb=tt0112281')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ai9kRyLHUIdmvWKHTl4NSi0Ghsw.jpg);"></div>
                    <a onclick="openMovie('Ace Ventura 2: Um Maluco na África', 'https://embedder.net/e/movie?imdb=tt0112281')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Ace Ventura 2: Um Maluco na África</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Ace Ventura: Um Detetive Diferente', 'https://embedder.net/e/movie?imdb=tt0109040')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xcxU6P1Yts1cugEKZg67IBtoh5J.jpg);"></div>
                    <a onclick="openMovie('Ace Ventura: Um Detetive Diferente', 'https://embedder.net/e/movie?imdb=tt0109040')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Ace Ventura: Um Detetive Diferente</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Alfa', 'https://embedder.net/e/movie?imdb=tt4244998')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wiofc2cbzZlLEgdxts1GmSoWEMM.jpg);"></div>
                    <a onclick="openMovie('Alfa', 'https://embedder.net/e/movie?imdb=tt4244998')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Alfa</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Assim na Terra Como no Inferno', 'https://embedder.net/e/movie?imdb=tt2870612')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/19K0a2bKxQsh6MCQOIGyV3xbv1F.jpg);"></div>
                    <a onclick="openMovie('Assim na Terra Como no Inferno', 'https://embedder.net/e/movie?imdb=tt2870612')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Assim na Terra Como no Inferno</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('As Viúvas', 'https://embedder.net/e/movie?imdb=tt4218572')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lTql8KyJYqcX49Lmdct7PMCgg63.jpg);"></div>
                    <a onclick="openMovie('As Viúvas', 'https://embedder.net/e/movie?imdb=tt4218572')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">As Viúvas</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Morte do Demônio', 'https://embedder.net/e/movie?imdb=tt1288558')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7b2oD1oxUxdDft486Q7oPNPzMlf.jpg);"></div>
                    <a onclick="openMovie('A Morte do Demônio', 'https://embedder.net/e/movie?imdb=tt1288558')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Morte do Demônio</h5>
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
