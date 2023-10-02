from bs4 import BeautifulSoup
import re

html = """
             <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('De Repente 70', 'https://embedder.net/e/movie?imdb=tt14330236')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fvPQQKCTbMRK4Mo6C91nPVcjFeA.jpg);"></div>
                    <a onclick="openMovie('De Repente 70', 'https://embedder.net/e/movie?imdb=tt14330236')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">De Repente 70</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Swindle', 'https://embedder.net/e/movie?imdb=tt2545440')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gccrJwdNv0roucBpG6Dus0gw4Xb.jpg);"></div>
                    <a onclick="openMovie('Swindle', 'https://embedder.net/e/movie?imdb=tt2545440')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Swindle</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Sorriso de Monalisa', 'https://embedder.net/e/movie?imdb=tt0304415')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ImjEyKaxAspC5TcUslkeTYveHv.jpg);"></div> 
                    <a onclick="openMovie('O Sorriso de Monalisa', 'https://embedder.net/e/movie?imdb=tt0304415')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Sorriso de Monalisa</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Delinquente Delicado', 'https://embedder.net/e/movie?imdb=tt0050301')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pDmoKAzRPH6wVE9ovZUmgd7w3I9.jpg);"></div>
                    <a onclick="openMovie('O Delinquente Delicado', 'https://embedder.net/e/movie?imdb=tt0050301')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Delinquente Delicado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('As Gatinhas do Sul', 'https://embedder.net/e/movie?imdb=tt0423238')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7KtUc4RmMEOFA5yq68FRH8OJHGA.jpg);"></div>
                    <a onclick="openMovie('As Gatinhas do Sul', 'https://embedder.net/e/movie?imdb=tt0423238')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">As Gatinhas do Sul</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('John Wick 4: Baba Yaga', 'https://embedder.net/e/movie?imdb=tt10366206')" class="full-click"></a>       
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rXTqhpkpj6E0YilQ49PK1SSqLhm.jpg);"></div>
                    <a onclick="openMovie('John Wick 4: Baba Yaga', 'https://embedder.net/e/movie?imdb=tt10366206')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">John Wick 4: Baba Yaga</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Renfield - Dando Sangue pelo Chefe', 'https://embedder.net/e/movie?imdb=tt11358390')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nnryxxmgS17IBKvu23Hpg1mimZU.jpg);"></div>
                    <a onclick="openMovie('Renfield - Dando Sangue pelo Chefe', 'https://embedder.net/e/movie?imdb=tt11358390')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Renfield - Dando Sangue pelo Chefe</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Batman: A Perdição Chegou a Gotham', 'https://embedder.net/e/movie?imdb=tt24223450')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ejHdsATVNWDIhuTgIKXmenFqGTc.jpg);"></div>
                    <a onclick="openMovie('Batman: A Perdição Chegou a Gotham', 'https://embedder.net/e/movie?imdb=tt24223450')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Batman: A Perdição Chegou a Gotham</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Inside', 'https://embedder.net/e/movie?imdb=tt14781036')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dXsiWJWwGwYwOQ6DfYFt5pPBMwT.jpg);"></div>
                    <a onclick="openMovie('Inside', 'https://embedder.net/e/movie?imdb=tt14781036')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Inside</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Kill Boksoon', 'https://embedder.net/e/movie?imdb=tt16900880')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2eRQ55y4OWXZjmdwfBmyMEPTdyy.jpg);"></div>
                    <a onclick="openMovie('Kill Boksoon', 'https://embedder.net/e/movie?imdb=tt16900880')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Kill Boksoon</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Meu Amigo Lutcha', 'https://embedder.net/e/movie?imdb=tt14923260')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9CbBbgftaC2fQYwHYMfrSXkKML0.jpg);"></div>
                    <a onclick="openMovie('Meu Amigo Lutcha', 'https://embedder.net/e/movie?imdb=tt14923260')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Meu Amigo Lutcha</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Baleia', 'https://embedder.net/e/movie?imdb=tt13833688')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4hhd8JuwsHTvpqW9wW9oebsHVu0.jpg);"></div>
                    <a onclick="openMovie('A Baleia', 'https://embedder.net/e/movie?imdb=tt13833688')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Baleia</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Exorcista do Papa', 'https://embedder.net/e/movie?imdb=tt13375076')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rBDAkmDdRv1bG996JPPNq0cMOVG.jpg);"></div>
                    <a onclick="openMovie('O Exorcista do Papa', 'https://embedder.net/e/movie?imdb=tt13375076')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Exorcista do Papa</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Tetris', 'https://embedder.net/e/movie?imdb=tt12758060')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4F2QwCOYHJJjecSvdOjStuVLkpu.jpg);"></div>
                    <a onclick="openMovie('Tetris', 'https://embedder.net/e/movie?imdb=tt12758060')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Tetris</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Dungeons & Dragons: Honra Entre Rebeldes', 'https://embedder.net/e/movie?imdb=tt2906216')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/85ivt7lJm3J5Mqybdh59m09eksV.jpg);"></div>
                    <a onclick="openMovie('Dungeons & Dragons: Honra Entre Rebeldes', 'https://embedder.net/e/movie?imdb=tt2906216')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Dungeons & Dragons: Honra Entre Rebeldes</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Um Pacto de Amizade', 'https://embedder.net/e/movie?imdb=tt17321230')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/f1NEx4lohw47WSuNqQife0GxWLv.jpg);"></div>
                    <a onclick="openMovie('Um Pacto de Amizade', 'https://embedder.net/e/movie?imdb=tt17321230')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Um Pacto de Amizade</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Corrosão', 'https://embedder.net/e/movie?imdb=tt27403906')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/9WIHpY4qVYVYyRq220K4LVQwpjt.jpg);"></div>
                    <a onclick="openMovie('Corrosão', 'https://embedder.net/e/movie?imdb=tt27403906')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Corrosão</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Último Reino: Sete Reis Devem Morrer', 'https://embedder.net/e/movie?imdb=tt15767808')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xUvSeFhdsJbKFOaHnB9TeTZpJKs.jpg);"></div>
                    <a onclick="openMovie('O Último Reino: Sete Reis Devem Morrer', 'https://embedder.net/e/movie?imdb=tt15767808')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Último Reino: Sete Reis Devem Morrer</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Marcel, a Concha de Sapatos', 'https://embedder.net/e/movie?imdb=tt15339456')" class="full-click"></a>  
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8hIj0OJI6NDMqOQTt9miZlAVIQP.jpg);"></div>
                    <a onclick="openMovie('Marcel, a Concha de Sapatos', 'https://embedder.net/e/movie?imdb=tt15339456')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Marcel, a Concha de Sapatos</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Till: A Busca por Justiça', 'https://embedder.net/e/movie?imdb=tt4960748')" class="full-click"></a>     
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ogb70EGzxqdbH5p8mmWJ5CEYSp3.jpg);"></div>
                    <a onclick="openMovie('Till: A Busca por Justiça', 'https://embedder.net/e/movie?imdb=tt4960748')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Till: A Busca por Justiça</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Transformers', 'https://embedder.net/e/movie?imdb=tt0418279')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ev7IMfMXRbddGLVw7xPL2PHpkWR.jpg);"></div>
                    <a onclick="openMovie('Transformers', 'https://embedder.net/e/movie?imdb=tt0418279')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Transformers</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Dança dos Vampiros', 'https://embedder.net/e/movie?imdb=tt0061655')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nh2lH0pwI3jef2Vm157ZsM9bWv.jpg);"></div> 
                    <a onclick="openMovie('A Dança dos Vampiros', 'https://embedder.net/e/movie?imdb=tt0061655')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Dança dos Vampiros</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Transformers: A Vingança dos Derrotados', 'https://embedder.net/e/movie?imdb=tt1055369')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wZRc6MekG9uD56VtRqQysmHjdeI.jpg);"></div>
                    <a onclick="openMovie('Transformers: A Vingança dos Derrotados', 'https://embedder.net/e/movie?imdb=tt1055369')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Transformers: A Vingança dos Derrotados</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Transformers: A Era da Extinção', 'https://embedder.net/e/movie?imdb=tt2109248')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gyDVzU2A8bdK4fsS4rWTsDcPPEB.jpg);"></div>
                    <a onclick="openMovie('Transformers: A Era da Extinção', 'https://embedder.net/e/movie?imdb=tt2109248')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Transformers: A Era da Extinção</h5>
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
