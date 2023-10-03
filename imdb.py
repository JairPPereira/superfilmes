from bs4 import BeautifulSoup
import re

html = """
                <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Rosalina', 'https://embedder.net/e/movie?imdb=tt1777606')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/Ad51mrs3azZMzHE6cLrCv9uSztP.jpg);"></div>
                    <a onclick="openMovie('Rosalina', 'https://embedder.net/e/movie?imdb=tt1777606')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Rosalina</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Rubikon', 'https://embedder.net/e/movie?imdb=tt13829262')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8i2uZmhVk6lkqierZLFnBHnL24q.jpg);"></div>
                    <a onclick="openMovie('Rubikon', 'https://embedder.net/e/movie?imdb=tt13829262')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Rubikon</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Esposa de Aluguel', 'https://embedder.net/e/movie?imdb=tt22091698')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/28E42Ea3Ml3cjvUMHaSqeGYXBfI.jpg);"></div>
                    <a onclick="openMovie('Esposa de Aluguel', 'https://embedder.net/e/movie?imdb=tt22091698')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Esposa de Aluguel</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Maldição de Bridge Hollow', 'https://embedder.net/e/movie?imdb=tt15289240')" class="full-click"></a>  
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/f4hdxB3gErjNJtfWBU9rMdhiNbU.jpg);"></div>
                    <a onclick="openMovie('A Maldição de Bridge Hollow', 'https://embedder.net/e/movie?imdb=tt15289240')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Maldição de Bridge Hollow</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Phobias', 'https://embedder.net/e/movie?imdb=tt8129682')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zpecci4IooFiwMVGknhm8Jz2FHo.jpg);"></div>
                    <a onclick="openMovie('Phobias', 'https://embedder.net/e/movie?imdb=tt8129682')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Phobias</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Psicopata Americano 2', 'https://embedder.net/e/movie?imdb=tt0283877')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5d3C3ur7lahibP5PyUkvtsD8AOn.jpg);"></div>
                    <a onclick="openMovie('Psicopata Americano 2', 'https://embedder.net/e/movie?imdb=tt0283877')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Psicopata Americano 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Psicopata Americano', 'https://embedder.net/e/movie?imdb=tt0144084')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9YEZ1LrHNbk3LEwwIAljulcEV3H.jpg);"></div>
                    <a onclick="openMovie('Psicopata Americano', 'https://embedder.net/e/movie?imdb=tt0144084')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Psicopata Americano</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Adão Negro', 'https://embedder.net/e/movie?imdb=tt6443346')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gE1KNghdInNh0VDcfFQlAy4PTEL.jpg);"></div>
                    <a onclick="openMovie('Adão Negro', 'https://embedder.net/e/movie?imdb=tt6443346')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Adão Negro</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Cobrador de Impostos', 'https://embedder.net/e/movie?imdb=tt8461224')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/43fdO16uhawDtpVvNXnUNhlzOEt.jpg);"></div>
                    <a onclick="openMovie('O Cobrador de Impostos', 'https://embedder.net/e/movie?imdb=tt8461224')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Cobrador de Impostos</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Destino de Haffmann', 'https://embedder.net/e/movie?imdb=tt10545704')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yQ2s9RoFDJO6qFnv736aG6VbY7c.jpg);"></div>
                    <a onclick="openMovie('O Destino de Haffmann', 'https://embedder.net/e/movie?imdb=tt10545704')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Destino de Haffmann</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Rainbow', 'https://embedder.net/e/movie?imdb=tt14722598')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pFg29SbNbXkcuSgbnwnTz4wie4x.jpg);"></div>
                    <a onclick="openMovie('Rainbow', 'https://embedder.net/e/movie?imdb=tt14722598')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Rainbow</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Pânico: A História por Trás do Filme', 'https://embedder.net/e/movie?imdb=tt16491738')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/l2vm6wdXjkxxTQSWOoquVUEz4Qo.jpg);"></div>
                    <a onclick="openMovie('Pânico: A História por Trás do Filme', 'https://embedder.net/e/movie?imdb=tt16491738')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Pânico: A História por Trás do Filme</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('RRR: Revolta, Rebelião, Revolução', 'https://embedder.net/e/movie?imdb=tt8178634')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/d0W61w08KPAxO63uuM0Xspxb27l.jpg);"></div>
                    <a onclick="openMovie('RRR: Revolta, Rebelião, Revolução', 'https://embedder.net/e/movie?imdb=tt8178634')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">RRR: Revolta, Rebelião, Revolução</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Você Não é Um Soldado', 'https://embedder.net/e/movie?imdb=tt10889948')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lVndyIFjeEf2kZVYuZ25DTtaWYX.jpg);"></div>
                    <a onclick="openMovie('Você Não é Um Soldado', 'https://embedder.net/e/movie?imdb=tt10889948')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Você Não é Um Soldado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Exorcismo da Minha Melhor Amiga', 'https://embedder.net/e/movie?imdb=tt7830806')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vAmkfhNzINNoaWkE70927FCpBX2.jpg);"></div>
                    <a onclick="openMovie('O Exorcismo da Minha Melhor Amiga', 'https://embedder.net/e/movie?imdb=tt7830806')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Exorcismo da Minha Melhor Amiga</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Eu, Traidor', 'https://embedder.net/e/movie?imdb=tt16477412')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/u0MbKWieMwVDZl0eJdNt7Z6pbKU.jpg);"></div>
                    <a onclick="openMovie('Eu, Traidor', 'https://embedder.net/e/movie?imdb=tt16477412')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Eu, Traidor</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Caçadores de Vampiros', 'https://embedder.net/e/movie?imdb=tt18290670')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tgTslXlyDloCDCaAZUptaR1Pt5k.jpg);"></div>
                    <a onclick="openMovie('Caçadores de Vampiros', 'https://embedder.net/e/movie?imdb=tt18290670')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Caçadores de Vampiros</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Brasil 2002: Os Bastidores do Penta', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uvrRBAkKyVHfWOvqAvgmDasgAGU.jpg);"></div>
                    <a onclick="openMovie('Brasil 2002: Os Bastidores do Penta', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Brasil 2002: Os Bastidores do Penta</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Amor Doentio', 'https://embedder.net/e/movie?imdb=tt11009646')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/b2v6R4V4vk3dGApTt42sdR2JjoB.jpg);"></div>
                    <a onclick="openMovie('Amor Doentio', 'https://embedder.net/e/movie?imdb=tt11009646')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Amor Doentio</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Vida de Togo', 'https://embedder.net/e/movie?imdb=tt15686024')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9qkl34olpFVM9nAuYeveO6uKpaA.jpg);"></div>
                    <a onclick="openMovie('A Vida de Togo', 'https://embedder.net/e/movie?imdb=tt15686024')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Vida de Togo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('100 Medos', 'https://embedder.net/e/movie?imdb=tt22071864')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/o3YitLNoZsucoGrcjehaR9p45Ip.jpg);"></div>
                    <a onclick="openMovie('100 Medos', 'https://embedder.net/e/movie?imdb=tt22071864')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">100 Medos</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Sorria', 'https://embedder.net/e/movie?imdb=tt15474916')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gJbMkl9e2NZcjlKpXuK9QaExobN.jpg);"></div>
                    <a onclick="openMovie('Sorria', 'https://embedder.net/e/movie?imdb=tt15474916')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Sorria</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Curtas dos Minions Volume 1', 'https://embedder.net/e/movie?imdb=tt22184976')" class="full-click"></a>  
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wCQBzTOigP5eCyBAjQGlWYNo5DR.jpg);"></div>
                    <a onclick="openMovie('Curtas dos Minions Volume 1', 'https://embedder.net/e/movie?imdb=tt22184976')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Curtas dos Minions Volume 1</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Invasão Bolchevique', 'https://embedder.net/e/movie?imdb=tt21650070')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/k445VilKhdBeKQyLprJsyPEpkoV.jpg);"></div>
                    <a onclick="openMovie('Invasão Bolchevique', 'https://embedder.net/e/movie?imdb=tt21650070')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Invasão Bolchevique</h5>
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
