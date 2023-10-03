from bs4 import BeautifulSoup
import re

html = """
    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Sintonizada em Você', 'https://embedder.net/e/movie?imdb=tt10763618')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uPXkdOyEUBfYsLWTZ0KQEo3z7HB.jpg);"></div>
                    <a onclick="openMovie('Sintonizada em Você', 'https://embedder.net/e/movie?imdb=tt10763618')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Sintonizada em Você</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Ana', 'https://embedder.net/e/movie?imdb=tt6865630')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bYHxq8yNLTr7LZP2wBjpMPkW6EV.jpg);"></div>
                    <a onclick="openMovie('Ana', 'https://embedder.net/e/movie?imdb=tt6865630')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Ana</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Procurada', 'https://embedder.net/e/movie?imdb=tt3984356')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zftgIV8k5PzFfumIq79a7qMapoH.jpg);"></div>
                    <a onclick="openMovie('Procurada', 'https://embedder.net/e/movie?imdb=tt3984356')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Procurada</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Dr. Dolittle', 'https://embedder.net/e/movie?imdb=tt0118998')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/g84Os8iaDJNs51oNo1VtATGpbOV.jpg);"></div>
                    <a onclick="openMovie('Dr. Dolittle', 'https://embedder.net/e/movie?imdb=tt0118998')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Dr. Dolittle</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Guerra contra Aliens', 'https://embedder.net/e/movie?imdb=tt9562694')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ri3zFC4E70j321qNPnO3LWYqTDU.jpg);"></div>
                    <a onclick="openMovie('Guerra contra Aliens', 'https://embedder.net/e/movie?imdb=tt9562694')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Guerra contra Aliens</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Navio Fantasma', 'https://embedder.net/e/movie?imdb=tt0288477')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/urUo9sIRlFk8WfGkREZs9AEq3C3.jpg);"></div>
                    <a onclick="openMovie('Navio Fantasma', 'https://embedder.net/e/movie?imdb=tt0288477')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Navio Fantasma</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Face da Verdade', 'https://embedder.net/e/movie?imdb=tt9477066')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/JAShb31Bbn03ZluMvbfmCHLZcR.jpg);"></div> 
                    <a onclick="openMovie('A Face da Verdade', 'https://embedder.net/e/movie?imdb=tt9477066')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Face da Verdade</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Em Um Relacionamento Sério', 'https://embedder.net/e/movie?imdb=tt6676028')" class="full-click"></a>    
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/87AoWAqeW0DH6xbpJaVm7RA2MEa.jpg);"></div>
                    <a onclick="openMovie('Em Um Relacionamento Sério', 'https://embedder.net/e/movie?imdb=tt6676028')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Em Um Relacionamento Sério</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Aluguel de Pesadelo', 'https://embedder.net/e/movie?imdb=tt11844684')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8hzN2qCMShU8ZHp6DS3j1sOZtMu.jpg);"></div>
                    <a onclick="openMovie('Aluguel de Pesadelo', 'https://embedder.net/e/movie?imdb=tt11844684')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Aluguel de Pesadelo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Sou Sua Mulher', 'https://embedder.net/e/movie?imdb=tt10243992')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4mGyY20q4tI4N7PPet2M2SZPJi3.jpg);"></div>
                    <a onclick="openMovie('Sou Sua Mulher', 'https://embedder.net/e/movie?imdb=tt10243992')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Sou Sua Mulher</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Minha Querida Nora', 'https://embedder.net/e/movie?imdb=tt10965792')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lTNI66alw3kkOdwHMyDSbpc7J5f.jpg);"></div>
                    <a onclick="openMovie('Minha Querida Nora', 'https://embedder.net/e/movie?imdb=tt10965792')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Minha Querida Nora</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Homem Que Matou Dom Quixote', 'https://embedder.net/e/movie?imdb=tt1318517')" class="full-click"></a> 
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nZ93dEu9747rsSOTA82hKmtOrn5.jpg);"></div>
                    <a onclick="openMovie('O Homem Que Matou Dom Quixote', 'https://embedder.net/e/movie?imdb=tt1318517')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Homem Que Matou Dom Quixote</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Somente o Mar Sabe', 'https://embedder.net/e/movie?imdb=tt3319730')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dcDSl251jGqrvqPTMNKRJBkV309.jpg);"></div>
                    <a onclick="openMovie('Somente o Mar Sabe', 'https://embedder.net/e/movie?imdb=tt3319730')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Somente o Mar Sabe</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Rocky: Um Lutador', 'https://embedder.net/e/movie?imdb=tt0075148')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wJ5rLUltZALHgM0hPUcnfrJehA7.jpg);"></div>
                    <a onclick="openMovie('Rocky: Um Lutador', 'https://embedder.net/e/movie?imdb=tt0075148')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Rocky: Um Lutador</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Espada de Deus - A Última Cruzada', 'https://embedder.net/e/movie?imdb=tt7240616')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sasYy2Hl5uplpT7jwQflFDANZXm.jpg);"></div>
                    <a onclick="openMovie('Espada de Deus - A Última Cruzada', 'https://embedder.net/e/movie?imdb=tt7240616')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Espada de Deus - A Última Cruzada</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Segundo em Comando', 'https://embedder.net/e/movie?imdb=tt0458471')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yfClcix0iwBaAsm4QRPbmmFAcYk.jpg);"></div>
                    <a onclick="openMovie('Segundo em Comando', 'https://embedder.net/e/movie?imdb=tt0458471')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Segundo em Comando</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Amigos, Sempre Amigos', 'https://embedder.net/e/movie?imdb=tt0101587')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/six4Cj5CjsGmZLFWHvFF7b3wctB.jpg);"></div>
                    <a onclick="openMovie('Amigos, Sempre Amigos', 'https://embedder.net/e/movie?imdb=tt0101587')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Amigos, Sempre Amigos</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Olho do Demônio', 'https://embedder.net/e/movie?imdb=tt8028600')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/63w2O9hDcomg2M3M01yvVQn7IvW.jpg);"></div>
                    <a onclick="openMovie('O Olho do Demônio', 'https://embedder.net/e/movie?imdb=tt8028600')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Olho do Demônio</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Venom', 'https://embedder.net/e/movie?imdb=tt0428251')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1XczSA5o33LKl7bIvief1GONaN4.jpg);"></div>
                    <a onclick="openMovie('Venom', 'https://embedder.net/e/movie?imdb=tt0428251')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Venom</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Terror no Pântano 2', 'https://embedder.net/e/movie?imdb=tt1270835')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/x9homOq5Znodbz7P16JTzskA8j1.jpg);"></div>
                    <a onclick="openMovie('Terror no Pântano 2', 'https://embedder.net/e/movie?imdb=tt1270835')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Terror no Pântano 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Terror no Pântano', 'https://embedder.net/e/movie?imdb=tt0422401')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gGPLHHndaEqDWqN1aRkzXZzzLo4.jpg);"></div>
                    <a onclick="openMovie('Terror no Pântano', 'https://embedder.net/e/movie?imdb=tt0422401')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Terror no Pântano</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Dono da Festa', 'https://embedder.net/e/movie?imdb=tt0283111')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4rqZ0O4Rc6ckFYqx8ECD0LfchJj.jpg);"></div>
                    <a onclick="openMovie('O Dono da Festa', 'https://embedder.net/e/movie?imdb=tt0283111')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Dono da Festa</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Sexo, Música e Amor', 'https://embedder.net/e/movie?imdb=tt5926990')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2A0udDaAgWyJdZBYQC3aPZvjx9M.jpg);"></div>
                    <a onclick="openMovie('Sexo, Música e Amor', 'https://embedder.net/e/movie?imdb=tt5926990')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Sexo, Música e Amor</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Último Amor de Casanova', 'https://embedder.net/e/movie?imdb=tt9105628')" class="full-click"></a>     
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ggMja8I9ukADMNDZHQi9c9yfFtV.jpg);"></div>
                    <a onclick="openMovie('O Último Amor de Casanova', 'https://embedder.net/e/movie?imdb=tt9105628')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Último Amor de Casanova</h5>
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
