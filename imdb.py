from bs4 import BeautifulSoup
import re

html = """
 <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('O Resgate', 'https://embedder.net/e/movie?imdb=tt1656186')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/avSwXpzPfGfln7fhVHGoP9fiOEe.jpg);"></div>
                <a onclick="openMovie('O Resgate', 'https://embedder.net/e/movie?imdb=tt1656186')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">O Resgate</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('12 Horas', 'https://embedder.net/e/movie?imdb=tt1838544')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fESXNmZBy1jlKI4IZazK9JYWMxP.jpg);"></div>
                <a onclick="openMovie('12 Horas', 'https://embedder.net/e/movie?imdb=tt1838544')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">12 Horas</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Coach Carter: Treino para a Vida', 'https://embedder.net/e/movie?imdb=tt0393162')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5cC54gTj4BPMEA6BANSK3rLmc7Y.jpg);"></div>
                <a onclick="openMovie('Coach Carter: Treino para a Vida', 'https://embedder.net/e/movie?imdb=tt0393162')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Coach Carter: Treino para a Vida</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('DNA Assassino', 'https://embedder.net/e/movie?imdb=tt10696018')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/bak6EiWHJBvb0SYPt0tBspX5nq5.jpg);"></div>
                <a onclick="openMovie('DNA Assassino', 'https://embedder.net/e/movie?imdb=tt10696018')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">DNA Assassino</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Ela Dança, Eu Danço 6', 'https://embedder.net/e/movie?imdb=tt4060544')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eNzLlzZCrqK4fXmxTojTAk1jqnE.jpg);"></div>
                <a onclick="openMovie('Ela Dança, Eu Danço 6', 'https://embedder.net/e/movie?imdb=tt4060544')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Ela Dança, Eu Danço 6</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Ela Dança, Eu Danço 5: Tudo ou Nada', 'https://embedder.net/e/movie?imdb=tt2626350')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2eoioJdyQc51cHWYWRkLSXtfbr4.jpg);"></div>
                <a onclick="openMovie('Ela Dança, Eu Danço 5: Tudo ou Nada', 'https://embedder.net/e/movie?imdb=tt2626350')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Ela Dança, Eu Danço 5: Tudo ou Nada</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Ela Dança, Eu Danço 4', 'https://embedder.net/e/movie?imdb=tt1800741')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pqTxJfMVYEtz3LpGjf1hCxqiZ7V.jpg);"></div>
                <a onclick="openMovie('Ela Dança, Eu Danço 4', 'https://embedder.net/e/movie?imdb=tt1800741')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Ela Dança, Eu Danço 4</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Ela Dança, Eu Danço 3', 'https://embedder.net/e/movie?imdb=tt1193631')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/y9eOOfBdSqjeqDLUeX35Q825AzF.jpg);"></div>
                <a onclick="openMovie('Ela Dança, Eu Danço 3', 'https://embedder.net/e/movie?imdb=tt1193631')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Ela Dança, Eu Danço 3</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Ela Dança, Eu Danço 2', 'https://embedder.net/e/movie?imdb=tt1023481')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/A0IBQe9vPjd3CR14uYz9Lklxrfh.jpg);"></div>
                <a onclick="openMovie('Ela Dança, Eu Danço 2', 'https://embedder.net/e/movie?imdb=tt1023481')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Ela Dança, Eu Danço 2</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Ela Dança, Eu Danço', 'https://embedder.net/e/movie?imdb=tt0462590')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fdcpRdrEtvXINLCBv2lko7uxwVo.jpg);"></div>
                <a onclick="openMovie('Ela Dança, Eu Danço', 'https://embedder.net/e/movie?imdb=tt0462590')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Ela Dança, Eu Danço</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Sing - Quem Canta Seus Males Espanta', 'https://embedder.net/e/movie?imdb=tt3470600')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rkPf3AH4DPJC1T26T8CwAjBHHvc.jpg);"></div>
                <a onclick="openMovie('Sing - Quem Canta Seus Males Espanta', 'https://embedder.net/e/movie?imdb=tt3470600')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Sing - Quem Canta Seus Males Espanta</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Monstros vs Alienígenas', 'https://embedder.net/e/movie?imdb=tt0892782')" class="full-click"></a>       
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vs70zYYuEbBTAHxqz5AyUBxbYUR.jpg);"></div>
                <a onclick="openMovie('Monstros vs Alienígenas', 'https://embedder.net/e/movie?imdb=tt0892782')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Monstros vs Alienígenas</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('O Direito de Viver', 'https://embedder.net/e/movie?imdb=tt8639326')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sptlLkqsAPOC191pLw32uQwRY1e.jpg);"></div>
                <a onclick="openMovie('O Direito de Viver', 'https://embedder.net/e/movie?imdb=tt8639326')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">O Direito de Viver</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('É Proibido Amar', 'https://embedder.net/e/movie?imdb=tt15484488')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wQI7qX0doSCUQe605UkHuZlDrYh.jpg);"></div>
                <a onclick="openMovie('É Proibido Amar', 'https://embedder.net/e/movie?imdb=tt15484488')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">É Proibido Amar</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Contra o Relógio', 'https://embedder.net/e/movie?imdb=tt9419976')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hitZTgYwqGwKB7GsWDKOSJooNXw.jpg);"></div>
                <a onclick="openMovie('Contra o Relógio', 'https://embedder.net/e/movie?imdb=tt9419976')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Contra o Relógio</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Entre Tiros e Beijos', 'https://embedder.net/e/movie?imdb=tt1697800')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1ylyVg32Mt2zdOJCECG1voYny90.jpg);"></div>
                <a onclick="openMovie('Entre Tiros e Beijos', 'https://embedder.net/e/movie?imdb=tt1697800')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Entre Tiros e Beijos</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Sozinho com o Inimigo', 'https://embedder.net/e/movie?imdb=tt6284256')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/npkXkDfAVieQF4L1FE7oYLIhjFX.jpg);"></div>
                <a onclick="openMovie('Sozinho com o Inimigo', 'https://embedder.net/e/movie?imdb=tt6284256')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Sozinho com o Inimigo</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Conspiração Implacável', 'https://embedder.net/e/movie?imdb=tt13382698')" class="full-click"></a>       
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1xpRrP85czylMeMqoM0iHKoptey.jpg);"></div>
                <a onclick="openMovie('Conspiração Implacável', 'https://embedder.net/e/movie?imdb=tt13382698')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Conspiração Implacável</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Aya e a Bruxa', 'https://embedder.net/e/movie?imdb=tt12441478')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6YAUvfEE5a5T4uTvQdRjtQKJDuF.jpg);"></div>
                <a onclick="openMovie('Aya e a Bruxa', 'https://embedder.net/e/movie?imdb=tt12441478')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Aya e a Bruxa</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('A Princesa e a Plebeia: As Vilãs Também Amam', 'https://embedder.net/e/movie?imdb=tt14731142')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/eNOvGQ3rMPtHqQxXqKvHlQCwS3E.jpg);"></div>
                <a onclick="openMovie('A Princesa e a Plebeia: As Vilãs Também Amam', 'https://embedder.net/e/movie?imdb=tt14731142')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">A Princesa e a Plebeia: As Vilãs Também Amam</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('tick, tick... BOOM!', 'https://embedder.net/e/movie?imdb=tt8721424')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/DPmfcuR8fh8ROYXgdjrAjSGA0o.jpg);"></div> 
                <a onclick="openMovie('tick, tick... BOOM!', 'https://embedder.net/e/movie?imdb=tt8721424')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">tick, tick... BOOM!</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Amor Sem Medida', 'https://embedder.net/e/movie?imdb=tt15863594')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/glFwaNYHhzUa1pao25O2o2aFkxj.jpg);"></div>
                <a onclick="openMovie('Amor Sem Medida', 'https://embedder.net/e/movie?imdb=tt15863594')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Amor Sem Medida</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Cálculo Mortal', 'https://embedder.net/e/movie?imdb=tt4194558')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dA2dWjcHPeBORjErraO9cNrvG6G.jpg);"></div>
                <a onclick="openMovie('Cálculo Mortal', 'https://embedder.net/e/movie?imdb=tt4194558')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Cálculo Mortal</h5>
                </div>
                <!-- end media-box -->
                </div>
                </div>
                
                <div class="col mt-3">
                <!-- start media-box -->
                <div class="media-box">
                <a onclick="openMovie('Amor de Aluguel', 'https://embedder.net/e/movie?imdb=tt0337592')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gN70AFvskYNEWEa0AMQhT0aEjml.jpg);"></div>
                <a onclick="openMovie('Amor de Aluguel', 'https://embedder.net/e/movie?imdb=tt0337592')" class="media-play"><i class="icofont-ui-play"></i></a>
                <!-- Start rate-quality-info -->
                <div class="media-info">
                <h5 class="media-box-title">Amor de Aluguel</h5>
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
