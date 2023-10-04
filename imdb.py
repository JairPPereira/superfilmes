from bs4 import BeautifulSoup
import re

html = """
   <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Meu Amigo Totoro', 'https://embedder.net/e/movie?imdb=tt0096283')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/23KKTxDg6rxZVc66bloQQdPSr29.jpg);"></div>
                    <a onclick="openMovie('Meu Amigo Totoro', 'https://embedder.net/e/movie?imdb=tt0096283')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Meu Amigo Totoro</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Hannibal, a Origem do Mal', 'https://embedder.net/e/movie?imdb=tt0367959')" class="full-click"></a>     
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jWKqCIbsIazwClatV58ESuqNtf3.jpg);"></div>
                    <a onclick="openMovie('Hannibal, a Origem do Mal', 'https://embedder.net/e/movie?imdb=tt0367959')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Hannibal, a Origem do Mal</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Silêncio dos Inocentes', 'https://embedder.net/e/movie?imdb=tt0102926')" class="full-click"></a>      
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/paGUSTwcFrAxpGV1hSQ2wsI28id.jpg);"></div>
                    <a onclick="openMovie('O Silêncio dos Inocentes', 'https://embedder.net/e/movie?imdb=tt0102926')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Silêncio dos Inocentes</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Último Virgem', 'https://embedder.net/e/movie?imdb=tt3379372')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5yVqc1K0XWiJAf6YvRgfzlezvEr.jpg);"></div>
                    <a onclick="openMovie('O Último Virgem', 'https://embedder.net/e/movie?imdb=tt3379372')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Último Virgem</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Mainstream', 'https://embedder.net/e/movie?imdb=tt9224288')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/npepKBvIfyO16Kj5mrgjAixpPZf.jpg);"></div>
                    <a onclick="openMovie('Mainstream', 'https://embedder.net/e/movie?imdb=tt9224288')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Mainstream</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Fúria de Titãs 2', 'https://embedder.net/e/movie?imdb=tt1646987')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9yyAOtBlWlMBOAUp2lWTRytVgOG.jpg);"></div>
                    <a onclick="openMovie('Fúria de Titãs 2', 'https://embedder.net/e/movie?imdb=tt1646987')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Fúria de Titãs 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Fúria de Titãs', 'https://embedder.net/e/movie?imdb=tt0800320')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/R21t8SVfr6sQQ5mzjkecEU02YW.jpg);"></div> 
                    <a onclick="openMovie('Fúria de Titãs', 'https://embedder.net/e/movie?imdb=tt0800320')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Fúria de Titãs</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Abutre', 'https://embedder.net/e/movie?imdb=tt2872718')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4dJp8HOCyr7gwiBijhBG46qf7vU.jpg);"></div>
                    <a onclick="openMovie('O Abutre', 'https://embedder.net/e/movie?imdb=tt2872718')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Abutre</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Fúria de Titãs', 'https://embedder.net/e/movie?imdb=tt0082186')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5LObtR57MxWD7Me0tiRaqgrqKQD.jpg);"></div>
                    <a onclick="openMovie('Fúria de Titãs', 'https://embedder.net/e/movie?imdb=tt0082186')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Fúria de Titãs</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Labirinto do Fauno', 'https://embedder.net/e/movie?imdb=tt0457430')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/53ZMT8Y18gwLpInzRLMEebAZxew.jpg);"></div>
                    <a onclick="openMovie('O Labirinto do Fauno', 'https://embedder.net/e/movie?imdb=tt0457430')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Labirinto do Fauno</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Tony Robbins: I Am Not Your Guru', 'https://embedder.net/e/movie?imdb=tt5151716')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wmDvMAjePKhcxAfbNvVUDqld779.jpg);"></div>
                    <a onclick="openMovie('Tony Robbins: I Am Not Your Guru', 'https://embedder.net/e/movie?imdb=tt5151716')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Tony Robbins: I Am Not Your Guru</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Alerta Vermelho', 'https://embedder.net/e/movie?imdb=tt11285908')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lT6BaTnPc9Q7oPyLfiBtC6fNyep.jpg);"></div>
                    <a onclick="openMovie('Alerta Vermelho', 'https://embedder.net/e/movie?imdb=tt11285908')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Alerta Vermelho</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Deserto Particular', 'https://embedder.net/e/movie?imdb=tt15132028')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jEKDQnXdRG7wRjvPmJwXJJGLN8t.jpg);"></div>
                    <a onclick="openMovie('Deserto Particular', 'https://embedder.net/e/movie?imdb=tt15132028')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Deserto Particular</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Garoto da Casa ao Lado', 'https://embedder.net/e/movie?imdb=tt3181822')" class="full-click"></a>      
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/g0OZqX4i2NbFI6H3j1fkotZHAwM.jpg);"></div>
                    <a onclick="openMovie('O Garoto da Casa ao Lado', 'https://embedder.net/e/movie?imdb=tt3181822')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Garoto da Casa ao Lado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Vida Depois', 'https://embedder.net/e/movie?imdb=tt11847410')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/oFU6XQAQR6SidzNTnPLzNj9Xc4H.jpg);"></div>
                    <a onclick="openMovie('A Vida Depois', 'https://embedder.net/e/movie?imdb=tt11847410')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Vida Depois</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Triunfo: Lutar Para Vencer', 'https://embedder.net/e/movie?imdb=tt3859466')" class="full-click"></a>    
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gON67DHFdLPkxGDvIpBwdaaNMGW.jpg);"></div>
                    <a onclick="openMovie('Triunfo: Lutar Para Vencer', 'https://embedder.net/e/movie?imdb=tt3859466')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Triunfo: Lutar Para Vencer</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Terras Perigosas', 'https://embedder.net/e/movie?imdb=tt9286908')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5TupAiDFjDW2XjVgnIx1X1SdBG1.jpg);"></div>
                    <a onclick="openMovie('Terras Perigosas', 'https://embedder.net/e/movie?imdb=tt9286908')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Terras Perigosas</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Causalidade', 'https://embedder.net/e/movie?imdb=tt15909848')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vqPTx3z2RVOvrIO3aJYO7avSavC.jpg);"></div>
                    <a onclick="openMovie('Causalidade', 'https://embedder.net/e/movie?imdb=tt15909848')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Causalidade</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Warning', 'https://embedder.net/e/movie?imdb=tt8956324')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hY0JZLUiGEmuRLvXATisHM3tw1f.jpg);"></div>
                    <a onclick="openMovie('Warning', 'https://embedder.net/e/movie?imdb=tt8956324')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Warning</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Johnny English 3.0', 'https://embedder.net/e/movie?imdb=tt6921996')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cnchtu8rXPFAkvii9WC4htmt9CZ.jpg);"></div>
                    <a onclick="openMovie('Johnny English 3.0', 'https://embedder.net/e/movie?imdb=tt6921996')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Johnny English 3.0</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Retorno de Johnny English', 'https://embedder.net/e/movie?imdb=tt1634122')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nM0r4uUi1K3cIebwB9gfbohtSo5.jpg);"></div>
                    <a onclick="openMovie('O Retorno de Johnny English', 'https://embedder.net/e/movie?imdb=tt1634122')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Retorno de Johnny English</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Johnny English', 'https://embedder.net/e/movie?imdb=tt0274166')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/N4vioZ2pDBQWGBgTGxBmF82vwm.jpg);"></div> 
                    <a onclick="openMovie('Johnny English', 'https://embedder.net/e/movie?imdb=tt0274166')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Johnny English</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Bater ou Correr em Londres', 'https://embedder.net/e/movie?imdb=tt0300471')" class="full-click"></a>    
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fVPZumNA50cSePKm56lEZ9G86f4.jpg);"></div>
                    <a onclick="openMovie('Bater ou Correr em Londres', 'https://embedder.net/e/movie?imdb=tt0300471')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Bater ou Correr em Londres</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Fique Rico ou Morra Tentando', 'https://embedder.net/e/movie?imdb=tt0430308')" class="full-click"></a>  
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lfBLbNmZ71R0FPvIu1zShJ6mxt0.jpg);"></div>
                    <a onclick="openMovie('Fique Rico ou Morra Tentando', 'https://embedder.net/e/movie?imdb=tt0430308')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Fique Rico ou Morra Tentando</h5>
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
