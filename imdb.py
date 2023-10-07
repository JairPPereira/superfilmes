from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Táticas do Amor 2', 'https://embedder.net/e/movie?imdb=tt21308698')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fQTigx0WsCBdxeVZnaH6KqA8YoN.jpg);"></div>
<a onclick="openMovie('Táticas do Amor 2', 'https://embedder.net/e/movie?imdb=tt21308698')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Táticas do Amor 2</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Dirty Dancing 2 - Noites de Havana', 'https://embedder.net/e/movie?imdb=tt0338096')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/w0wPl3d1yvveInjV2kpO2NCZNMz.jpg);"></div>
<a onclick="openMovie('Dirty Dancing 2 - Noites de Havana', 'https://embedder.net/e/movie?imdb=tt0338096')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Dirty Dancing 2 - Noites de Havana</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Akira', 'https://embedder.net/e/movie?imdb=tt0094625')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/erQNsU5jCkWGPzDFwF5Qhuncv2K.jpg);"></div>
<a onclick="openMovie('Akira', 'https://embedder.net/e/movie?imdb=tt0094625')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Akira</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Por Toda a Minha Vida: Elis Regina', 'https://embedder.net/e/movie?imdb=None')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kSRkmWm02ySXE2gVL0OoekU5WMP.jpg);"></div>
<a onclick="openMovie('Por Toda a Minha Vida: Elis Regina', 'https://embedder.net/e/movie?imdb=None')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Por Toda a Minha Vida: Elis Regina</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Silêncio da Montanha', 'https://embedder.net/e/movie?imdb=tt2014295')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/d4dOQfb8BirpAy8m0r01xIGfGcN.jpg);"></div>
<a onclick="openMovie('O Silêncio da Montanha', 'https://embedder.net/e/movie?imdb=tt2014295')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Silêncio da Montanha</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Armas em Jogo', 'https://embedder.net/e/movie?imdb=tt6902676')" class="full-click"></a>      
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uSypWMagzI7jJ7cq2TStGnYyyfL.jpg);"></div>
<a onclick="openMovie('Armas em Jogo', 'https://embedder.net/e/movie?imdb=tt6902676')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Armas em Jogo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('As Tartarugas Ninjas: Caos Mutante', 'https://embedder.net/e/movie?imdb=tt8589698')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/x0naXPYoLxzTzRgwKhzAjQPngnw.jpg);"></div>
<a onclick="openMovie('As Tartarugas Ninjas: Caos Mutante', 'https://embedder.net/e/movie?imdb=tt8589698')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">As Tartarugas Ninjas: Caos Mutante</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Devilreaux', 'https://embedder.net/e/movie?imdb=tt8010548')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wKBMwKwKbICPXAjGVuGQ7CyQ4Qz.jpg);"></div>
<a onclick="openMovie('Devilreaux', 'https://embedder.net/e/movie?imdb=tt8010548')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Devilreaux</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Gran Turismo: De Jogador a Corredor', 'https://embedder.net/e/movie?imdb=tt4495098')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1FRIsFSl1AOpmpBIRnUFqO6U06A.jpg);"></div>
<a onclick="openMovie('Gran Turismo: De Jogador a Corredor', 'https://embedder.net/e/movie?imdb=tt4495098')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Gran Turismo: De Jogador a Corredor</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Paint', 'https://embedder.net/e/movie?imdb=tt14472156')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jZ1PhCyXEySYR7f9q52KYb62Bwp.jpg);"></div>
<a onclick="openMovie('Paint', 'https://embedder.net/e/movie?imdb=tt14472156')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Paint</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Operação: Arma Secreta', 'https://embedder.net/e/movie?imdb=tt28290233')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/lHRid7SIsqHAG8hlxbg2u5E9ouN.jpg);"></div>
<a onclick="openMovie('Operação: Arma Secreta', 'https://embedder.net/e/movie?imdb=tt28290233')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Operação: Arma Secreta</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Fim dos Tempos', 'https://embedder.net/e/movie?imdb=tt0949731')" class="full-click"></a>     
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4miUoIJADDOY4MXrnpoRxHX670Z.jpg);"></div>
<a onclick="openMovie('Fim dos Tempos', 'https://embedder.net/e/movie?imdb=tt0949731')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Fim dos Tempos</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Shark Below Zero', 'https://embedder.net/e/movie?imdb=tt27999920')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/c1UAwMeuBXVluMNCJ4EYqFfy52E.jpg);"></div>
<a onclick="openMovie('Shark Below Zero', 'https://embedder.net/e/movie?imdb=tt27999920')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Shark Below Zero</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Resgatados dos Tubarões', 'https://embedder.net/e/movie?imdb=tt27999682')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3df3FZ0q0DCTFUwmi7d43fuaIaQ.jpg);"></div>
<a onclick="openMovie('Resgatados dos Tubarões', 'https://embedder.net/e/movie?imdb=tt27999682')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Resgatados dos Tubarões</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Vulcões e Tubarões: Havaí', 'https://embedder.net/e/movie?imdb=tt27999923')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/q3N44XL6l1AHRyDgTN1BRTEfRvV.jpg);"></div>
<a onclick="openMovie('Vulcões e Tubarões: Havaí', 'https://embedder.net/e/movie?imdb=tt27999923')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Vulcões e Tubarões: Havaí</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Amor Desaparecido', 'https://embedder.net/e/movie?imdb=tt1709157')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/27dUAfHoW5rTGjgTxO8to88PvOR.jpg);"></div>
<a onclick="openMovie('Amor Desaparecido', 'https://embedder.net/e/movie?imdb=tt1709157')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Amor Desaparecido</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Amor à Toda Velocidade', 'https://embedder.net/e/movie?imdb=tt0058725')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/kxcEkFykPZ0IDjbVg9xQBrvv3tr.jpg);"></div>
<a onclick="openMovie('Amor à Toda Velocidade', 'https://embedder.net/e/movie?imdb=tt0058725')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Amor à Toda Velocidade</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Sansão', 'https://embedder.net/e/movie?imdb=tt6951892')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8FCkStF9Cy3o5TtV4jBAZqA2qYF.jpg);"></div>
<a onclick="openMovie('Sansão', 'https://embedder.net/e/movie?imdb=tt6951892')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Sansão</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Reds', 'https://embedder.net/e/movie?imdb=tt0082979')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/3jOs4aWI7XSVIEaF8KMojNre7A7.jpg);"></div>
<a onclick="openMovie('Reds', 'https://embedder.net/e/movie?imdb=tt0082979')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Reds</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Terra e Liberdade', 'https://embedder.net/e/movie?imdb=tt0114671')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/u5QRqW0vFYMHFzeQJ4oFgJtu5Xp.jpg);"></div>
<a onclick="openMovie('Terra e Liberdade', 'https://embedder.net/e/movie?imdb=tt0114671')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Terra e Liberdade</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Quando Você Terminar de Salvar o Mundo', 'https://embedder.net/e/movie?imdb=tt12121582')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pZyeoBDQJFPGfd0Mu8XIElGBjZz.jpg);"></div>
<a onclick="openMovie('Quando Você Terminar de Salvar o Mundo', 'https://embedder.net/e/movie?imdb=tt12121582')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Quando Você Terminar de Salvar o Mundo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Fale Comigo', 'https://embedder.net/e/movie?imdb=tt10638522')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6tIhfkc52XQnxzbMYeV9XK90NTG.jpg);"></div>
<a onclick="openMovie('Fale Comigo', 'https://embedder.net/e/movie?imdb=tt10638522')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Fale Comigo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Nefarious', 'https://embedder.net/e/movie?imdb=tt14537248')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xwjWUAajQJPj5aik1tounPguZbz.jpg);"></div>
<a onclick="openMovie('Nefarious', 'https://embedder.net/e/movie?imdb=tt14537248')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Nefarious</h5>
</div>
<!-- end media-box -->
</div>
</div>
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Megatubarão 2', 'https://embedder.net/e/movie?imdb=tt9224104')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg);"></div>

<a onclick="openMovie('Megatubarão 2', 'https://embedder.net/e/movie?imdb=tt9224104')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Megatubarão 2</h5>
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
