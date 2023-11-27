from bs4 import BeautifulSoup
import re

html = """
<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('80 for Brady: Quatro Amigas e uma Paixão', 'https://embedder.net/e/movie?imdb=tt18079362')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/sZBOc7sXmK618zujlxaiyLTq2e0.jpg);"></div>
<a onclick="openMovie('80 for Brady: Quatro Amigas e uma Paixão', 'https://embedder.net/e/movie?imdb=tt18079362')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">80 for Brady: Quatro Amigas e uma Paixão</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Flauta Mágica', 'https://embedder.net/e/movie?imdb=tt8206398')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5cSgFlXAMTv8M1jbfkJ25lqaLC1.jpg);"></div>
<a onclick="openMovie('A Flauta Mágica', 'https://embedder.net/e/movie?imdb=tt8206398')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Flauta Mágica</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Vítima 3/19', 'https://embedder.net/e/movie?imdb=tt15715020')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/zr6CYGPRajDdcbXJreaUfJfqCOB.jpg);"></div>
<a onclick="openMovie('Vítima 3/19', 'https://embedder.net/e/movie?imdb=tt15715020')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Vítima 3/19</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Vida de Campeã', 'https://embedder.net/e/movie?imdb=tt12439508')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/e9M6XCr2YEJAu6LIE2IlLXOaXPX.jpg);"></div>
<a onclick="openMovie('Vida de Campeã', 'https://embedder.net/e/movie?imdb=tt12439508')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Vida de Campeã</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Boa Pessoa', 'https://embedder.net/e/movie?imdb=tt14153080')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/8hvgyHipLe26eOF8O9SSqQBw0tb.jpg);"></div>
<a onclick="openMovie('Uma Boa Pessoa', 'https://embedder.net/e/movie?imdb=tt14153080')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Boa Pessoa</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('De Volta à Ativa', 'https://embedder.net/e/movie?imdb=tt6048442')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/ssav9soOaIzXGbqrpt3jIbe1eI1.jpg);"></div>
<a onclick="openMovie('De Volta à Ativa', 'https://embedder.net/e/movie?imdb=tt6048442')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">De Volta à Ativa</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Doi Boy', 'https://embedder.net/e/movie?imdb=tt10235688')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/79Fpqtpw1bpnzAkqz2vcxplzI84.jpg);"></div>
<a onclick="openMovie('Doi Boy', 'https://embedder.net/e/movie?imdb=tt10235688')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Doi Boy</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Elena Sabe', 'https://embedder.net/e/movie?imdb=tt28081899')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nm90M4WPMXk9B4xjuaQQee4YvGF.jpg);"></div>
<a onclick="openMovie('Elena Sabe', 'https://embedder.net/e/movie?imdb=tt28081899')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Elena Sabe</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Elis & Tom - Só Tinha de Ser com Você', 'https://embedder.net/e/movie?imdb=tt26255088')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/uhrT7TXMOERTP20o7j1LvVStN73.jpg);"></div>
<a onclick="openMovie('Elis & Tom - Só Tinha de Ser com Você', 'https://embedder.net/e/movie?imdb=tt26255088')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Elis & Tom - Só Tinha de Ser com Você</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Good Burger 2', 'https://embedder.net/e/movie?imdb=tt25289836')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/pcwOHNTIy6pVOLj6Tjp8tSL9bwF.jpg);"></div>
<a onclick="openMovie('Good Burger 2', 'https://embedder.net/e/movie?imdb=tt25289836')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Good Burger 2</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Meu Novo Brinquedo', 'https://embedder.net/e/movie?imdb=tt13361648')" class="full-click"></a>       
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/veMy3OYfYnVi8G2R8q4w9ZN8k4d.jpg);"></div>
<a onclick="openMovie('Meu Novo Brinquedo', 'https://embedder.net/e/movie?imdb=tt13361648')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Meu Novo Brinquedo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Napoleão', 'https://embedder.net/e/movie?imdb=tt13287846')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5lkM8eyWLdzHwvhB1jBUxpCLmLR.jpg);"></div>
<a onclick="openMovie('Napoleão', 'https://embedder.net/e/movie?imdb=tt13287846')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Napoleão</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Coelhinho de Veludo', 'https://embedder.net/e/movie?imdb=tt9900816')" class="full-click"></a>     
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/aMOIiDPPAE6oHDQ3taaBtLQ21QF.jpg);"></div>
<a onclick="openMovie('O Coelhinho de Veludo', 'https://embedder.net/e/movie?imdb=tt9900816')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Coelhinho de Veludo</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('O Rei Piu-Piu', 'https://embedder.net/e/movie?imdb=tt18951472')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/jJatuRAVIsxAIszL3QTxrbIzxzc.jpg);"></div>
<a onclick="openMovie('O Rei Piu-Piu', 'https://embedder.net/e/movie?imdb=tt18951472')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">O Rei Piu-Piu</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Santuário', 'https://embedder.net/e/movie?imdb=tt15364972')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nSoqhQ10L3YoxASIuKOMlwYIda3.jpg);"></div>
<a onclick="openMovie('Santuário', 'https://embedder.net/e/movie?imdb=tt15364972')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Santuário</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('That Time I Get Reincarnated as a Slime: O Filme', 'https://embedder.net/e/movie?imdb=tt15467380')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/13SyU6DvAwgI5MZdYJPTjhk6N50.jpg);"></div>
<a onclick="openMovie('That Time I Get Reincarnated as a Slime: O Filme', 'https://embedder.net/e/movie?imdb=tt15467380')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">That Time I Get Reincarnated as a Slime: O Filme</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('A Queda', 'https://embedder.net/e/movie?imdb=tt19758112')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xLQ674ObzFnyxNb6vcofEEbLHZ4.jpg);"></div>
<a onclick="openMovie('A Queda', 'https://embedder.net/e/movie?imdb=tt19758112')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">A Queda</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Três Mulheres: Uma Esperança', 'https://embedder.net/e/movie?imdb=tt14852188')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/u6AIND02DUvtYUBHQSKu8ZAeFbo.jpg);"></div>
<a onclick="openMovie('Três Mulheres: Uma Esperança', 'https://embedder.net/e/movie?imdb=tt14852188')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Três Mulheres: Uma Esperança</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Última Chamada para Istambul', 'https://embedder.net/e/movie?imdb=tt23334616')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/2SUs5rHpId4bxiO0r8fXFZlDvUq.jpg);"></div>
<a onclick="openMovie('Última Chamada para Istambul', 'https://embedder.net/e/movie?imdb=tt23334616')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Última Chamada para Istambul</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Um Dia Cinco Estrelas', 'https://embedder.net/e/movie?imdb=tt21650856')" class="full-click"></a>    
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fbG5hNO9CsKcmIRzPyw8aN592MJ.jpg);"></div>
<a onclick="openMovie('Um Dia Cinco Estrelas', 'https://embedder.net/e/movie?imdb=tt21650856')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Um Dia Cinco Estrelas</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Uma Família Extraordinária', 'https://embedder.net/e/movie?imdb=tt12024308')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/nLhq8uU0gfYuNhefh8fqQXtfEno.jpg);"></div>
<a onclick="openMovie('Uma Família Extraordinária', 'https://embedder.net/e/movie?imdb=tt12024308')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Uma Família Extraordinária</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('União Instável', 'https://embedder.net/e/movie?imdb=tt27719673')" class="full-click"></a>
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/mAx0lwIlgGc2UtfR3VFaT25hu8R.jpg);"></div>
<a onclick="openMovie('União Instável', 'https://embedder.net/e/movie?imdb=tt27719673')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">União Instável</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Terra das Oportunidades', 'https://embedder.net/e/movie?imdb=tt14597532')" class="full-click"></a>  
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fpAbETuB9OtmIMCeYGFrIWItIKS.jpg);"></div>
<a onclick="openMovie('Terra das Oportunidades', 'https://embedder.net/e/movie?imdb=tt14597532')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Terra das Oportunidades</h5>
</div>
<!-- end media-box -->
</div>
</div>

<div class="col mt-3">
<!-- start media-box -->
<div class="media-box">
<a onclick="openMovie('Ruim pra Cachorro', 'https://embedder.net/e/movie?imdb=tt15153532')" class="full-click"></a>        
<div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/hfSkDDJiCf6cJpd4R9O9lM1T6hz.jpg);"></div>
<a onclick="openMovie('Ruim pra Cachorro', 'https://embedder.net/e/movie?imdb=tt15153532')" class="media-play"><i class="icofont-ui-play"></i></a>
<!-- Start rate-quality-info -->
<div class="media-info">
<h5 class="media-box-title">Ruim pra Cachorro</h5>
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
