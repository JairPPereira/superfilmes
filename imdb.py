from bs4 import BeautifulSoup
import re

html = """
  <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Capitão América: Guerra Civil', 'https://embedder.net/e/movie?imdb=tt3498820')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8IoDJYGMoo4nEkjGADW2TtZRoWF.jpg);"></div>
                    <a onclick="openMovie('Capitão América: Guerra Civil', 'https://embedder.net/e/movie?imdb=tt3498820')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Capitão América: Guerra Civil</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Capitão América 2: O Soldado Invernal', 'https://embedder.net/e/movie?imdb=tt1843866')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/iBFPjLLHXkBojKpWDluJxnpM24h.jpg);"></div>
                    <a onclick="openMovie('Capitão América 2: O Soldado Invernal', 'https://embedder.net/e/movie?imdb=tt1843866')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Capitão América 2: O Soldado Invernal</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Capitão América: O Primeiro Vingador', 'https://embedder.net/e/movie?imdb=tt0458339')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/f976JQnjMhCTa1yLXz7UH1pV4DG.jpg);"></div>
                    <a onclick="openMovie('Capitão América: O Primeiro Vingador', 'https://embedder.net/e/movie?imdb=tt0458339')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Capitão América: O Primeiro Vingador</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Capitã Marvel', 'https://embedder.net/e/movie?imdb=tt4154664')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hVgLHgnsO46oSHJy5I4ekhqtoYv.jpg);"></div>
                    <a onclick="openMovie('Capitã Marvel', 'https://embedder.net/e/movie?imdb=tt4154664')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Capitã Marvel</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('17 Outra Vez', 'https://embedder.net/e/movie?imdb=tt0974661')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1nYYLgmwm4yK29ircaEGKXwXNj3.jpg);"></div>
                    <a onclick="openMovie('17 Outra Vez', 'https://embedder.net/e/movie?imdb=tt0974661')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">17 Outra Vez</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Under Wraps: Uma Múmia no Halloween', 'https://embedder.net/e/movie?imdb=tt13464350')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yLnC8LxHyGEhZ1xnqxgjZhzYH7q.jpg);"></div>
                    <a onclick="openMovie('Under Wraps: Uma Múmia no Halloween', 'https://embedder.net/e/movie?imdb=tt13464350')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Under Wraps: Uma Múmia no Halloween</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Liga da Justiça: Trono de Atlantis', 'https://embedder.net/e/movie?imdb=tt3878542')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/t6hcyzdgpGBVlEzizCmg5CWY8Fv.jpg);"></div>
                    <a onclick="openMovie('Liga da Justiça: Trono de Atlantis', 'https://embedder.net/e/movie?imdb=tt3878542')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Liga da Justiça: Trono de Atlantis</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Bad Boys Para Sempre', 'https://embedder.net/e/movie?imdb=tt1502397')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lkWYrzLIclGj56r4NJxuWeisK9R.jpg);"></div>
                    <a onclick="openMovie('Bad Boys Para Sempre', 'https://embedder.net/e/movie?imdb=tt1502397')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Bad Boys Para Sempre</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Os Bad Boys II', 'https://embedder.net/e/movie?imdb=tt0172156')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yCvB5fG5aEPqa1St7ihY6KEAsHD.jpg);"></div>
                    <a onclick="openMovie('Os Bad Boys II', 'https://embedder.net/e/movie?imdb=tt0172156')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Os Bad Boys II</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Lucky: Uma Mulher de Sorte', 'https://embedder.net/e/movie?imdb=tt11701774')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/tLeg58YcLbJIDbLeEMYvQlcUmC6.jpg);"></div>
                    <a onclick="openMovie('Lucky: Uma Mulher de Sorte', 'https://embedder.net/e/movie?imdb=tt11701774')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Lucky: Uma Mulher de Sorte</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Venom: Tempo de Carnificina', 'https://embedder.net/e/movie?imdb=tt7097896')" class="full-click"></a>   
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/h5UzYZquMwO9FVn15R2eK2itmHu.jpg);"></div>
                    <a onclick="openMovie('Venom: Tempo de Carnificina', 'https://embedder.net/e/movie?imdb=tt7097896')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Venom: Tempo de Carnificina</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Violet Evergarden: O Filme', 'https://embedder.net/e/movie?imdb=tt8652818')" class="full-click"></a>    
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mpNG6z33xOtUWuOU83BE0bvorxi.jpg);"></div>
                    <a onclick="openMovie('Violet Evergarden: O Filme', 'https://embedder.net/e/movie?imdb=tt8652818')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Violet Evergarden: O Filme</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Série Divergente: Insurgente', 'https://embedder.net/e/movie?imdb=tt2908446')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/l0i7VfG5HAQT49ZKZNcef2booIq.jpg);"></div>
                    <a onclick="openMovie('A Série Divergente: Insurgente', 'https://embedder.net/e/movie?imdb=tt2908446')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Série Divergente: Insurgente</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Série Divergente: Convergente', 'https://embedder.net/e/movie?imdb=tt3410834')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/cAYhVm44sofmqaEGuQl4j5RL62S.jpg);"></div>
                    <a onclick="openMovie('A Série Divergente: Convergente', 'https://embedder.net/e/movie?imdb=tt3410834')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Série Divergente: Convergente</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Divergente', 'https://embedder.net/e/movie?imdb=tt1840309')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/gktEuhRYZrlinT3sLSt7Fvmqbe5.jpg);"></div>
                    <a onclick="openMovie('Divergente', 'https://embedder.net/e/movie?imdb=tt1840309')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Divergente</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Corpo Fechado', 'https://embedder.net/e/movie?imdb=tt0217869')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/t0NieBaFxHuHr692RkjccBAnU9X.jpg);"></div>
                    <a onclick="openMovie('Corpo Fechado', 'https://embedder.net/e/movie?imdb=tt0217869')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Corpo Fechado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Fragmentado', 'https://embedder.net/e/movie?imdb=tt4972582')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ztYvYWpSpFtzM2w5MwsmNzzQbJg.jpg);"></div>
                    <a onclick="openMovie('Fragmentado', 'https://embedder.net/e/movie?imdb=tt4972582')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Fragmentado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Vidro', 'https://embedder.net/e/movie?imdb=tt6823368')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/d8rvXqqZ3hzrWfFGS47jU7sCx69.jpg);"></div>
                    <a onclick="openMovie('Vidro', 'https://embedder.net/e/movie?imdb=tt6823368')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Vidro</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Ray Donovan - O Filme', 'https://embedder.net/e/movie?imdb=tt14124268')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5sw1EvOeXMGRZGWr18R4EiZs036.jpg);"></div>
                    <a onclick="openMovie('Ray Donovan - O Filme', 'https://embedder.net/e/movie?imdb=tt14124268')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Ray Donovan - O Filme</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Whindersson Nunes: É de Mim Mesmo', 'https://embedder.net/e/movie?imdb=tt17887288')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1Dk3lqCcOesF4Qr9ptHDB1zjIX1.jpg);"></div>
                    <a onclick="openMovie('Whindersson Nunes: É de Mim Mesmo', 'https://embedder.net/e/movie?imdb=tt17887288')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Whindersson Nunes: É de Mim Mesmo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Caixa', 'https://embedder.net/e/movie?imdb=tt0362478')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jVZFQ8V8XBiIgFpWGlG5qyW5z15.jpg);"></div>
                    <a onclick="openMovie('A Caixa', 'https://embedder.net/e/movie?imdb=tt0362478')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Caixa</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('South Park: Pós-Covid - A Volta Da Covid', 'https://embedder.net/e/movie?imdb=tt16375288')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xD88mrJ8hsqYVqQ6kinNNGQLdg1.jpg);"></div>
                    <a onclick="openMovie('South Park: Pós-Covid - A Volta Da Covid', 'https://embedder.net/e/movie?imdb=tt16375288')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">South Park: Pós-Covid - A Volta Da Covid</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Pânico na Floresta 6: Último Resort', 'https://embedder.net/e/movie?imdb=tt3612032')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/z9JMIja6UYHwK6fFw0RR5w3pGVR.jpg);"></div>
                    <a onclick="openMovie('Pânico na Floresta 6: Último Resort', 'https://embedder.net/e/movie?imdb=tt3612032')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Pânico na Floresta 6: Último Resort</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Pânico na Floresta 5: Linha de Sangue', 'https://embedder.net/e/movie?imdb=tt2375779')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/vsH0zwELHvVSKCyQlEZfDxjMSaP.jpg);"></div>
                    <a onclick="openMovie('Pânico na Floresta 5: Linha de Sangue', 'https://embedder.net/e/movie?imdb=tt2375779')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Pânico na Floresta 5: Linha de Sangue</h5>
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
