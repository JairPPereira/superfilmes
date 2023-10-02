from bs4 import BeautifulSoup
import re

html = """
                <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Fale com Ela', 'https://embedder.net/e/movie?imdb=tt0287467')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yWigIdXSA6X3Iw8HRfnweXjETf.jpg);"></div>
                    <a onclick="openMovie('Fale com Ela', 'https://embedder.net/e/movie?imdb=tt0287467')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Fale com Ela</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Enfermeira Assassina', 'https://embedder.net/e/movie?imdb=tt1913166')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/k82jk8ZWy1W5NzI7NFnTvGUhrmF.jpg);"></div>
                    <a onclick="openMovie('A Enfermeira Assassina', 'https://embedder.net/e/movie?imdb=tt1913166')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Enfermeira Assassina</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Snoopy Apresenta: A Escola da Lucy', 'https://embedder.net/e/movie?imdb=tt21405896')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ikvLmYOsYjy5qoGS9Lpu092rO6z.jpg);"></div>
                    <a onclick="openMovie('Snoopy Apresenta: A Escola da Lucy', 'https://embedder.net/e/movie?imdb=tt21405896')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Snoopy Apresenta: A Escola da Lucy</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Chamado vs. O Grito', 'https://embedder.net/e/movie?imdb=tt5309954')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3tXKwe41EfBZs3uSWur9yhR48aA.jpg);"></div>
                    <a onclick="openMovie('O Chamado vs. O Grito', 'https://embedder.net/e/movie?imdb=tt5309954')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Chamado vs. O Grito</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('バイロケーション', 'https://embedder.net/e/movie?imdb=tt3029570')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wuUPEmMJqEJKuyMMqsqRTxeIlR1.jpg);"></div>
                    <a onclick="openMovie('バイロケーション', 'https://embedder.net/e/movie?imdb=tt3029570')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">バイロケーション</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Killer Toon', 'https://embedder.net/e/movie?imdb=tt2973516')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dNGdA2n1YAGnS3ozhXE9nZxwFZR.jpg);"></div>
                    <a onclick="openMovie('Killer Toon', 'https://embedder.net/e/movie?imdb=tt2973516')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Killer Toon</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Tito e os Pássaros', 'https://embedder.net/e/movie?imdb=tt8327492')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3ymTnRmZ9F7WICOAmYNMECF7bgQ.jpg);"></div>
                    <a onclick="openMovie('Tito e os Pássaros', 'https://embedder.net/e/movie?imdb=tt8327492')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Tito e os Pássaros</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Saga Crepúsculo: Amanhecer - Parte 2', 'https://embedder.net/e/movie?imdb=tt1673434')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pVNobbWwSM2xpv2rRejxwnHf4xH.jpg);"></div>
                    <a onclick="openMovie('A Saga Crepúsculo: Amanhecer - Parte 2', 'https://embedder.net/e/movie?imdb=tt1673434')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Saga Crepúsculo: Amanhecer - Parte 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Saga Crepúsculo: Amanhecer - Parte 1', 'https://embedder.net/e/movie?imdb=tt1324999')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/a6PexAo0jJRLlPNBfdiXXr0HYyz.jpg);"></div>
                    <a onclick="openMovie('A Saga Crepúsculo: Amanhecer - Parte 1', 'https://embedder.net/e/movie?imdb=tt1324999')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Saga Crepúsculo: Amanhecer - Parte 1</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Saga Crepúsculo: Eclipse', 'https://embedder.net/e/movie?imdb=tt1325004')" class="full-click"></a>    
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cAQsjxYdfkzhrDZwVDDtMksS34u.jpg);"></div>
                    <a onclick="openMovie('A Saga Crepúsculo: Eclipse', 'https://embedder.net/e/movie?imdb=tt1325004')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Saga Crepúsculo: Eclipse</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Saga Crepúsculo: Lua Nova', 'https://embedder.net/e/movie?imdb=tt1259571')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gF0TjnaoKqsYaSni1YN1snQ8q4z.jpg);"></div>
                    <a onclick="openMovie('A Saga Crepúsculo: Lua Nova', 'https://embedder.net/e/movie?imdb=tt1259571')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Saga Crepúsculo: Lua Nova</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Crepúsculo', 'https://embedder.net/e/movie?imdb=tt1099212')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/e33qJrkBGQHWc93FgIuyYWnmeBQ.jpg);"></div>
                    <a onclick="openMovie('Crepúsculo', 'https://embedder.net/e/movie?imdb=tt1099212')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Crepúsculo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Superlópez', 'https://embedder.net/e/movie?imdb=tt4110388')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7doCBDNnEITiRg4LPI7wK1jdb4p.jpg);"></div>
                    <a onclick="openMovie('Superlópez', 'https://embedder.net/e/movie?imdb=tt4110388')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Superlópez</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Dama e o Vagabundo', 'https://embedder.net/e/movie?imdb=tt8096832')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vnBl7huZPEPsxD2ZmqZqRBI3efr.jpg);"></div>
                    <a onclick="openMovie('A Dama e o Vagabundo', 'https://embedder.net/e/movie?imdb=tt8096832')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Dama e o Vagabundo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Enquanto Você Dormia', 'https://embedder.net/e/movie?imdb=tt0114924')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hid0NixxCPkoIxTisp82eq3xW7J.jpg);"></div>
                    <a onclick="openMovie('Enquanto Você Dormia', 'https://embedder.net/e/movie?imdb=tt0114924')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Enquanto Você Dormia</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Antes Só do que Mal Acompanhado', 'https://embedder.net/e/movie?imdb=tt0093748')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ulMbGa8XEz0zMXkDkIX4PN3a51.jpg);"></div> 
                    <a onclick="openMovie('Antes Só do que Mal Acompanhado', 'https://embedder.net/e/movie?imdb=tt0093748')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Antes Só do que Mal Acompanhado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Broad Peak', 'https://embedder.net/e/movie?imdb=tt8983230')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hssJ3koEXveKRDXb3r6ujEuySGF.jpg);"></div>
                    <a onclick="openMovie('Broad Peak', 'https://embedder.net/e/movie?imdb=tt8983230')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Broad Peak</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Tempo com Você', 'https://embedder.net/e/movie?imdb=tt9426210')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tdBhe9LVIBKMgfGYJSkY2dVqfaz.jpg);"></div>
                    <a onclick="openMovie('O Tempo com Você', 'https://embedder.net/e/movie?imdb=tt9426210')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Tempo com Você</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Agente Infiltrada', 'https://embedder.net/e/movie?imdb=tt8000718')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7PpgvIQlaYLL3HSNwidsppnpf3A.jpg);"></div>
                    <a onclick="openMovie('Agente Infiltrada', 'https://embedder.net/e/movie?imdb=tt8000718')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Agente Infiltrada</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Destinos Traçados', 'https://embedder.net/e/movie?imdb=tt14456350')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xfxdIBdNHhPhIVCWWDVfzsKG03Y.jpg);"></div>
                    <a onclick="openMovie('Destinos Traçados', 'https://embedder.net/e/movie?imdb=tt14456350')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Destinos Traçados</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('D.P.A. 3: O Filme - Uma Aventura no Fim do Mundo', 'https://embedder.net/e/movie?imdb=tt10805260')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/orXhDQCtC086ccqUdkwOwZqN0kQ.jpg);"></div>
                    <a onclick="openMovie('D.P.A. 3: O Filme - Uma Aventura no Fim do Mundo', 'https://embedder.net/e/movie?imdb=tt10805260')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">D.P.A. 3: O Filme - Uma Aventura no Fim do Mundo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Ligação Explosiva', 'https://embedder.net/e/movie?imdb=tt14980972')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9tvZdU8QleViosTImC9cdODuBPU.jpg);"></div>
                    <a onclick="openMovie('Ligação Explosiva', 'https://embedder.net/e/movie?imdb=tt14980972')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Ligação Explosiva</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('As Hereges', 'https://embedder.net/e/movie?imdb=tt3111516')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/or9QoOcHfsaypC7UiCEIFtls48N.jpg);"></div>
                    <a onclick="openMovie('As Hereges', 'https://embedder.net/e/movie?imdb=tt3111516')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">As Hereges</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Cavalo de Guerra', 'https://embedder.net/e/movie?imdb=tt1568911')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8KCu49IhGK5IpqKRO1i2UGLQt6A.jpg);"></div>
                    <a onclick="openMovie('Cavalo de Guerra', 'https://embedder.net/e/movie?imdb=tt1568911')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Cavalo de Guerra</h5>
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
