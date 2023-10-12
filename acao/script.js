var filmes = [
    {
        titulo: 'A Bailarina',
        descricao: 'Descrição do filme 1',
        imdb: 'tt26350277',
        imagem: 'https://image.tmdb.org/t/p/w300/5BEYUwi4PCTfCaoGCL17DD9h7sM.jpg'
    },
    {
        titulo: 'O Rei dos Assassinos',
        descricao: 'Descrição do filme 2',
        imdb: 'tt14057604',
        imagem: 'https://image.tmdb.org/t/p/w300/tHA2wltMBWuaTzOzSf7P2bzhmIy.jpg'
    },
    {
        titulo: 'O Engenheiro',
        descricao: 'Descrição do filme 3',
        imdb: 'tt26450742',
        imagem: 'https://image.tmdb.org/t/p/w300/daEvqdnGCrbk5yMkYkxoDpNuCkP.jpg'
    },
    {
        titulo: 'One Day as a Lion',
        descricao: 'Descrição do filme 4',
        imdb: 'tt15783426',
        imagem: 'https://image.tmdb.org/t/p/w300/cxSKca4dNlk7O7PMiEYT203vlIw.jpg'
    },
    {
        titulo: 'Som da Liberdade',
        descricao: 'Descrição do filme 5',
        imdb: 'tt7599146',
        imagem: 'https://image.tmdb.org/t/p/w300/2BWhcrlPr6UvSJy5D044Ikq2QxH.jpg'
    },
    {
        titulo: '살수',
        descricao: 'Descrição do filme 6',
        imdb: 'tt21109580',
        imagem: 'https://image.tmdb.org/t/p/w300/B1WdiNIa8qQNrZZ7pUXltZoFpr.jpg'
    },
    {
        titulo: 'Resistência',
        descricao: 'Descrição do filme 7',
        imdb: 'tt11858890',
        imagem: 'https://image.tmdb.org/t/p/w300/187OBBT5oMQ2XPXgx9F8JhlycvK.jpg'
    },
    {
        titulo: 'Zerando a Vida',
        descricao: 'Descrição do filme 8',
        imdb: 'tt4769836',
        imagem: 'https://image.tmdb.org/t/p/w300/moWEJfrNnywDAJAiFZ1r2OfF5s4.jpg'
    },
    {
        titulo: 'À Espreita',
        descricao: 'Descrição do filme 9',
        imdb: 'tt8270664',
        imagem: 'https://image.tmdb.org/t/p/w300/qfglisVh5Nmo1nGYCoMzqyZUWcz.jpg'
    },
    {
        titulo: 'Carga Máxima',
        descricao: 'Descrição do filme 10',
        imdb: 'tt16427938',
        imagem: 'https://image.tmdb.org/t/p/w300/ocKoEvCPX809gWsyEXRP2zTViY5.jpg'
    },
    {
        titulo: 'Os Mercenários 4',
        descricao: 'Descrição do filme 11',
        imdb: 'tt3291150',
        imagem: 'https://image.tmdb.org/t/p/w300/dQxlUkhKGILgq9jbVEe3WPaiW2q.jpg'
    },
    {
        titulo: 'Island Escape',
        descricao: 'Descrição do filme 12',
        imdb: 'tt27564994',
        imagem: 'https://image.tmdb.org/t/p/w300/5TA3AmwWKasVMRFGXZk0gRv2Oz6.jpg'
    },
    {
        titulo: 'Noite Sangrenta',
        descricao: 'Descrição do filme 13',
        imdb: 'tt19848268',
        imagem: 'https://image.tmdb.org/t/p/w300/kgND5yAax4aT4UXEXrEsZavlHDx.jpg'
    },
    {
        titulo: 'Sayen',
        descricao: 'Descrição do filme 14',
        imdb: 'tt19869024',
        imagem: 'https://image.tmdb.org/t/p/w300/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg'
    },
    {
        titulo: 'A Lista da Vingança',
        descricao: 'Descrição do filme 15',
        imdb: 'tt24083908',
        imagem: 'https://image.tmdb.org/t/p/w300/r8vVQ0blfRsRth1rCjNt45pY293.jpg'
    },
    {
        titulo: 'Pequenos Espiões: Apocalipse',
        descricao: 'Descrição do filme 16',
        imdb: 'tt13978520',
        imagem: 'https://image.tmdb.org/t/p/w300/cwCKYjIPXapuBtO51S81GNhoGxV.jpg'
    },
    {
        titulo: 'Freestyle',
        descricao: 'Descrição do filme 17',
        imdb: 'tt28366647',
        imagem: 'https://image.tmdb.org/t/p/w300/frvpF7wyXVxb78wp39c3bSSRslp.jpg'
    },
    {
        titulo: 'Um Guarda-Florestal',
        descricao: 'Descrição do filme 18',
        imdb: 'tt23037488',
        imagem: 'https://image.tmdb.org/t/p/w300/dE1VakahNpdAI7xYF2ia6ryEkL5.jpg'
    },
    {
        titulo: 'Apocalypto',
        descricao: 'Descrição do filme 19',
        imdb: 'tt0472043',
        imagem: 'https://image.tmdb.org/t/p/w300/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg'
    },
    {
        titulo: 'Missão Clandestina',
        descricao: 'Descrição do filme 20',
        imdb: 'tt11696342',
        imagem: 'https://image.tmdb.org/t/p/w300/4SD3g1emJlCGpAJ6yaVQHAh37To.jpg'
    },
    {
        titulo: 'Khutulun: A Princesa Guerreira',
        descricao: 'Descrição do filme 21',
        imdb: 'tt15238852',
        imagem: 'https://image.tmdb.org/t/p/w300/h1tgT77aMRnMstr3soizs0ALir.jpg'
    },
    {
        titulo: 'I Am Rage',
        descricao: 'Descrição do filme 22',
        imdb: 'tt18284880',
        imagem: 'https://image.tmdb.org/t/p/w300/iclmQs4O5dy7EAkbykI1qkowfK2.jpg'
    },
    {
        titulo: 'Belas e Recatadas',
        descricao: 'Descrição do filme 23',
        imdb: 'tt18257464',
        imagem: 'https://image.tmdb.org/t/p/w300/4fZdOTs8Jn2SXF6DEmcQoIl1rO5.jpg'
    },
    {
        titulo: 'A Cidade Dourada',
        descricao: 'Descrição do filme 24',
        imdb: 'tt4113346',
        imagem: 'https://image.tmdb.org/t/p/w300/fbcuQoaHYcapCnAKgHy8r9rZq7E.jpg'
    },
    {
        titulo: 'O Protetor: Capitulo Final',
        descricao: 'Descrição do filme 1',
        imdb: 'tt17024450',
        imagem: 'https://image.tmdb.org/t/p/w300/p4Qn2hhKoz8My9ysN1RK223iVM5.jpg'
    },
    {
        titulo: 'Til Death Do Us Part',
        descricao: 'Descrição do filme 2',
        imdb: 'tt27047448',
        imagem: 'https://image.tmdb.org/t/p/w300/fq6mc9dXrKQLvfas00mk31f84NC.jpg'
    },
    {
        titulo: 'Babylon 5: O Caminho',
        descricao: 'Descrição do filme 3',
        imdb: 'tt27712788',
        imagem: 'https://image.tmdb.org/t/p/w300/zaXdRG8bCdK923JsmSej37j517C.jpg'
    },
    {
        titulo: 'Os Irmãos Aventura: O Filme',
        descricao: 'Descrição do filme 4',
        imdb: 'tt14636186',
        imagem: 'https://image.tmdb.org/t/p/w300/oGX6dBRHjO2FsQG5FaNpS7NOtFs.jpg'
    },
    {
        titulo: 'The Tomorrow Job',
        descricao: 'Descrição do filme 5',
        imdb: 'tt14672882',
        imagem: 'https://image.tmdb.org/t/p/w300/Ah3pJ3iuX28PKHjGLyIrEsFVq5q.jpg'
    },
    {
        titulo: 'Os Sete Pecados Capitais: Fúria de Edimburgo – Parte 2',
        descricao: 'Descrição do filme 6',
        imdb: 'tt25010142',
        imagem: 'https://image.tmdb.org/t/p/w300/tCEFjPGeaQJldoDpqDiDBdOH8GA.jpg'
    },
    {
        titulo: 'Murder City',
        descricao: 'Descrição do filme 7',
        imdb: 'tt2583014',
        imagem: 'https://image.tmdb.org/t/p/w300/1hFtSsYryX2dTGXWHSynGPsASOD.jpg'
    },
    {
        titulo: 'A Máquina do Crime',
        descricao: 'Descrição do filme 8',
        imdb: 'tt11040844',
        imagem: 'https://image.tmdb.org/t/p/w300/x9dGI7LIOMMlFzyIBUta1svft2Y.jpg'
    },
    {
        titulo: 'Kim Possible',
        descricao: 'Descrição do filme 9',
        imdb: 'tt7979492',
        imagem: 'https://image.tmdb.org/t/p/w300/dmYNXdrYPZcQhR03oqE01TbvVL8.jpg'
    },
    {
        titulo: 'Scott Pilgrim Contra o Mundo',
        descricao: 'Descrição do filme 10',
        imdb: 'tt0446029',
        imagem: 'https://image.tmdb.org/t/p/w300/pg4CBJZKcwW024xau5Wwt7riSH0.jpg'
    },
    {
        titulo: 'Besouro Azul',
        descricao: 'Descrição do filme 11',
        imdb: 'tt9362930',
        imagem: 'https://image.tmdb.org/t/p/w300/AhmVkXerBVsuI6PejPeqaaW2wwT.jpg'
    },
    {
        titulo: 'Akira',
        descricao: 'Descrição do filme 12',
        imdb: 'tt0094625',
        imagem: 'https://image.tmdb.org/t/p/w300/erQNsU5jCkWGPzDFwF5Qhuncv2K.jpg'
    },
    {
        titulo: 'Armas em Jogo',
        descricao: 'Descrição do filme 13',
        imdb: 'tt6902676',
        imagem: 'https://image.tmdb.org/t/p/w300/uSypWMagzI7jJ7cq2TStGnYyyfL.jpg'
    },
    {
        titulo: 'As Tartarugas Ninjas: Caos Mutante',
        descricao: 'Descrição do filme 14',
        imdb: 'tt8589698',
        imagem: 'https://image.tmdb.org/t/p/w300/x0naXPYoLxzTzRgwKhzAjQPngnw.jpg'
    },
    {
        titulo: 'Gran Turismo: De Jogador a Corredor',
        descricao: 'Descrição do filme 15',
        imdb: 'tt4495098',
        imagem: 'https://image.tmdb.org/t/p/w300/1FRIsFSl1AOpmpBIRnUFqO6U06A.jpg'
    },
    {
        titulo: 'Operação: Arma Secreta',
        descricao: 'Descrição do filme 16',
        imdb: 'tt28290233',
        imagem: 'https://image.tmdb.org/t/p/w300/lHRid7SIsqHAG8hlxbg2u5E9ouN.jpg'
    },
    {
        titulo: 'Sansão',
        descricao: 'Descrição do filme 17',
        imdb: 'tt6951892',
        imagem: 'https://image.tmdb.org/t/p/w300/8FCkStF9Cy3o5TtV4jBAZqA2qYF.jpg'
    },
    {
        titulo: 'Megatubarão 2',
        descricao: 'Descrição do filme 18',
        imdb: 'tt9224104',
        imagem: 'https://image.tmdb.org/t/p/w300/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg'
    },
    {
        titulo: 'Miraculous: As Aventuras de Ladybug - O Filme',
        descricao: 'Descrição do filme 19',
        imdb: 'tt10364034',
        imagem: 'https://image.tmdb.org/t/p/w300/eZEKKCNW0vI7B7AZNdCAeq2mMAw.jpg'
    },
    {
        titulo: 'Duna',
        descricao: 'Descrição do filme 20',
        imdb: 'tt0087182',
        imagem: 'https://image.tmdb.org/t/p/w300/3QOlGVuY2jeo0lX4XMMsTWkqmUg.jpg'
    },
    {
        titulo: 'Projeto Extração',
        descricao: 'Descrição do filme 21',
        imdb: 'tt6879446',
        imagem: 'https://image.tmdb.org/t/p/w300/t3vZkkM5G40pUJxUzkz69H777Hm.jpg'
    },
    {
        titulo: 'Os Três Mosqueteiros',
        descricao: 'Descrição do filme 22',
        imdb: 'tt1509767',
        imagem: 'https://image.tmdb.org/t/p/w300/wJy0zURpPTi1TLC1PQOmLlTwDiH.jpg'
    },
    {
        titulo: 'O Castelo no Céu',
        descricao: 'Descrição do filme 23',
        imdb: 'tt0092067',
        imagem: 'https://image.tmdb.org/t/p/w300/1yoI4FyiUamyWhZtnfH81se206f.jpg'
    },
    {
        titulo: 'A Vilã',
        descricao: 'Descrição do filme 24',
        imdb: 'tt6777338',
        imagem: 'https://image.tmdb.org/t/p/w300/sU2fQEZ6paXXxJ4CKiUa0hbOIx0.jpg'
    },
];

// Função para adicionar filmes à página
function adicionarFilmesNaPagina(pagina) {
    var inicio = pagina * 25;
    var fim = Math.min(inicio + 25, filmes.length);
    var listaHTML = '';

    for (var i = inicio; i < fim; i++) {
        var filme = filmes[i];
        listaHTML += '<div class="col mt-3"><!-- start media-box --><div class="media-box">';
        listaHTML += '<a onclick="openMovie(\'' + filme.descricao + '\', \'https://embedder.net/e/movie?imdb=' + filme.imdb + '\')" class="full-click"></a>';
        listaHTML += '<div class="media-thumb" style="background-image: url(' + filme.imagem + ');"></div>';
        listaHTML += '<a onclick="openMovie(\'' + filme.descricao + '\', \'https://embedder.net/e/movie?imdb=' + filme.imdb + '\')" class="media-play"><i class="icofont-ui-play"></i></a>';
        listaHTML += '<div class="media-info"><h5 class="media-box-title">' + filme.titulo + '</h5></div></div></div>';
    }


    return listaHTML;
}
