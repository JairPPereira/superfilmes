from bs4 import BeautifulSoup
import re

html = """
     <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Os Selvagens da Noite', 'https://embedder.net/e/movie?imdb=tt0080120')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/u1EWKbXm1keeqXrNNsaGILKAcoF.jpg);"></div>
                    <a onclick="openMovie('Os Selvagens da Noite', 'https://embedder.net/e/movie?imdb=tt0080120')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Os Selvagens da Noite</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Cassino', 'https://embedder.net/e/movie?imdb=tt0112641')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/fqk9XpThIR0tKnO1BE5AIh9DBQy.jpg);"></div>
                    <a onclick="openMovie('Cassino', 'https://embedder.net/e/movie?imdb=tt0112641')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Cassino</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Rainha de Katwe', 'https://embedder.net/e/movie?imdb=tt4341582')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dYOzbMAJ9xwS3OUDVVbKaBa5h7u.jpg);"></div>
                    <a onclick="openMovie('Rainha de Katwe', 'https://embedder.net/e/movie?imdb=tt4341582')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Rainha de Katwe</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('À Espera de um Milagre', 'https://embedder.net/e/movie?imdb=tt0120689')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/14hEqW67IiHlKpzKMLUXyktzZIV.jpg);"></div>
                    <a onclick="openMovie('À Espera de um Milagre', 'https://embedder.net/e/movie?imdb=tt0120689')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">À Espera de um Milagre</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Mogli: O Menino Lobo 2', 'https://embedder.net/e/movie?imdb=tt0283426')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/1xVK9gsLgGpDt6nJO7VjjTW2Uy5.jpg);"></div>
                    <a onclick="openMovie('Mogli: O Menino Lobo 2', 'https://embedder.net/e/movie?imdb=tt0283426')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Mogli: O Menino Lobo 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Temos Vagas', 'https://embedder.net/e/movie?imdb=tt0452702')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/RMR7SVU0tid2vVI89Ar79DVruu.jpg);"></div> 
                    <a onclick="openMovie('Temos Vagas', 'https://embedder.net/e/movie?imdb=tt0452702')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Temos Vagas</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Máquina Quase Mortífera', 'https://embedder.net/e/movie?imdb=tt0107659')" class="full-click"></a>       
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/4Pci5gw2u7UT0YZC0md0UEYQUrf.jpg);"></div>
                    <a onclick="openMovie('Máquina Quase Mortífera', 'https://embedder.net/e/movie?imdb=tt0107659')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Máquina Quase Mortífera</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Noite do Terror', 'https://embedder.net/e/movie?imdb=tt0437179')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wUo4Qxn346fSTq2dheLdLE1YyCf.jpg);"></div>
                    <a onclick="openMovie('Noite do Terror', 'https://embedder.net/e/movie?imdb=tt0437179')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Noite do Terror</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Garota, Interrompida', 'https://embedder.net/e/movie?imdb=tt0172493')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wUO6W6DVF5x5ppQ2X2YXi7HIm1.jpg);"></div> 
                    <a onclick="openMovie('Garota, Interrompida', 'https://embedder.net/e/movie?imdb=tt0172493')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Garota, Interrompida</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Um Tio Quase Perfeito 2', 'https://embedder.net/e/movie?imdb=tt11057882')" class="full-click"></a>      
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/7tsMon5xC1pJI8dbJ2NpWCq3CnC.jpg);"></div>
                    <a onclick="openMovie('Um Tio Quase Perfeito 2', 'https://embedder.net/e/movie?imdb=tt11057882')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Um Tio Quase Perfeito 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Ultraman Tiga - A Odisséia Final', 'https://embedder.net/e/movie?imdb=tt0228982')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/papDk5x8wmkamSpEm70Ssc6SqQG.jpg);"></div>
                    <a onclick="openMovie('Ultraman Tiga - A Odisséia Final', 'https://embedder.net/e/movie?imdb=tt0228982')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Ultraman Tiga - A Odisséia Final</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('ウルトラマン', 'https://embedder.net/e/movie?imdb=tt0471414')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/rZP3TaxNM1bxyzWhYxhrpulLXQq.jpg);"></div>
                    <a onclick="openMovie('ウルトラマン', 'https://embedder.net/e/movie?imdb=tt0471414')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">ウルトラマン</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Meu Policial', 'https://embedder.net/e/movie?imdb=tt13139228')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/wdbiMjXd4CxPfCx4r4Jfy8cGec0.jpg);"></div>
                    <a onclick="openMovie('Meu Policial', 'https://embedder.net/e/movie?imdb=tt13139228')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Meu Policial</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('O Passado', 'https://embedder.net/e/movie?imdb=tt6613958')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/dPvgiDbZ16wrB9CTaYtBBUuF4q8.jpg);"></div>
                    <a onclick="openMovie('O Passado', 'https://embedder.net/e/movie?imdb=tt6613958')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">O Passado</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Veja Como Eles Correm', 'https://embedder.net/e/movie?imdb=tt13640696')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/az5RKJb8qsILSUztRx0icVlnJWc.jpg);"></div>
                    <a onclick="openMovie('Veja Como Eles Correm', 'https://embedder.net/e/movie?imdb=tt13640696')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Veja Como Eles Correm</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Você Não Estará Só!', 'https://embedder.net/e/movie?imdb=tt8296030')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/Aqj4qpubd5GKfZho6KUBFEBzMtU.jpg);"></div>
                    <a onclick="openMovie('Você Não Estará Só!', 'https://embedder.net/e/movie?imdb=tt8296030')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Você Não Estará Só!</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('45 do Segundo Tempo', 'https://embedder.net/e/movie?imdb=tt8646254')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/xmUiGNvKTDwic273opiVednbQA8.jpg);"></div>
                    <a onclick="openMovie('45 do Segundo Tempo', 'https://embedder.net/e/movie?imdb=tt8646254')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">45 do Segundo Tempo</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Espera de Liz', 'https://embedder.net/e/movie?imdb=tt4546156')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/trAGoCXjkCpZUNHxzrFtMqLj8sN.jpg);"></div>
                    <a onclick="openMovie('A Espera de Liz', 'https://embedder.net/e/movie?imdb=tt4546156')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Espera de Liz</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Família Noel 2', 'https://embedder.net/e/movie?imdb=tt14384176')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/6EV8G1tESAjelFEvrdn1rEMz8Z0.jpg);"></div>
                    <a onclick="openMovie('A Família Noel 2', 'https://embedder.net/e/movie?imdb=tt14384176')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Família Noel 2</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('A Lenda da Befana: O Início', 'https://embedder.net/e/movie?imdb=tt13920702')" class="full-click"></a>  
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/5v98CBfkfBdgZFnMyX2z6tpbvg7.jpg);"></div>
                    <a onclick="openMovie('A Lenda da Befana: O Início', 'https://embedder.net/e/movie?imdb=tt13920702')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">A Lenda da Befana: O Início</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Ao Leste das Montanhas', 'https://embedder.net/e/movie?imdb=tt9038678')" class="full-click"></a>        
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/Oj2hUfkpiq4qLeQE6k4V2Xv4Is.jpg);"></div> 
                    <a onclick="openMovie('Ao Leste das Montanhas', 'https://embedder.net/e/movie?imdb=tt9038678')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Ao Leste das Montanhas</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Caça Implacável', 'https://embedder.net/e/movie?imdb=tt10242388')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/aUQ898w7faH39KpMA64v59PKRoV.jpg);"></div>
                    <a onclick="openMovie('Caça Implacável', 'https://embedder.net/e/movie?imdb=tt10242388')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Caça Implacável</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Mônica, O My Darling', 'https://embedder.net/e/movie?imdb=tt15128068')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/yq5zQAlxhNZvCaqdUcpGDnOZeQG.jpg);"></div>
                    <a onclick="openMovie('Mônica, O My Darling', 'https://embedder.net/e/movie?imdb=tt15128068')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Mônica, O My Darling</h5>
                    </div>
                    <!-- end media-box -->
                    </div>
                    </div>
                    
                    <div class="col mt-3">
                    <!-- start media-box -->
                    <div class="media-box">
                    <a onclick="openMovie('Predestinado: Arigó e o Espírito do Dr. Fritz', 'https://embedder.net/e/movie?imdb=tt0120589')" class="full-click"></a>
                    <div class="media-thumb" style="background-image: url(https://image.tmdb.org/t/p/w300/qx8v1E6t0GvUAUFdXjyE1L5D6qW.jpg);"></div>
                    <a onclick="openMovie('Predestinado: Arigó e o Espírito do Dr. Fritz', 'https://embedder.net/e/movie?imdb=tt0120589')" class="media-play"><i class="icofont-ui-play"></i></a>
                    <!-- Start rate-quality-info -->
                    <div class="media-info">
                    <h5 class="media-box-title">Predestinado: Arigó e o Espírito do Dr. Fritz</h5>
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
