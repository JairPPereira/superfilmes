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
    {
        titulo: 'Lupin III: O Ouro da Babilônia',
        descricao: 'Descrição do filme 1',
        imdb: 'tt0089943',
        imagem: 'https://image.tmdb.org/t/p/w300/q5CQfjWGcHemKXbYNfCDBcQsJfc.jpg'
    },
    {
        titulo: 'Liga da Justiça: A Nova Fronteira',
        descricao: 'Descrição do filme 2',
        imdb: 'tt0902272',
        imagem: 'https://image.tmdb.org/t/p/w300/pQjMxF8DBsLhFD9CJZUhA28Me1g.jpg'
    },
    {
        titulo: 'Lanterna Verde: Primeiro Vôo',
        descricao: 'Descrição do filme 3',
        imdb: 'tt1384590',
        imagem: 'https://image.tmdb.org/t/p/w300/745szFCV9ZGvBPvlwxcSKDqW6QK.jpg'
    },
    {
        titulo: 'Superman & Batman: Apocalipse',
        descricao: 'Descrição do filme 4',
        imdb: 'tt1673430',
        imagem: 'https://image.tmdb.org/t/p/w300/vZqD8QMXiZh977LipOsXQmaMM7l.jpg'
    },
    {
        titulo: 'Lego Batman: O Filme',
        descricao: 'Descrição do filme 5',
        imdb: 'tt4116284',
        imagem: 'https://image.tmdb.org/t/p/w300/qVf6lTFzDsBZUbYbk8m9dk9SipX.jpg'
    },
    {
        titulo: 'A Missão',
        descricao: 'Descrição do filme 6',
        imdb: 'tt0091530',
        imagem: 'https://image.tmdb.org/t/p/w300/itBZgfqQ6yHL7KN80M3BxO02Knp.jpg'
    },
    {
        titulo: 'Resident Evil: Ilha da Morte',
        descricao: 'Descrição do filme 7',
        imdb: 'tt26674627',
        imagem: 'https://image.tmdb.org/t/p/w300/nEWftodqakZu0RcfqhVr9f7ZdUH.jpg'
    },
    {
        titulo: 'Unicorn Wars',
        descricao: 'Descrição do filme 8',
        imdb: 'tt10483152',
        imagem: 'https://image.tmdb.org/t/p/w300/joOEYpfltqoqkaiQio24TUTntGM.jpg'
    },
    {
        titulo: 'A Noite nos Persegue',
        descricao: 'Descrição do filme 9',
        imdb: 'tt6116856',
        imagem: 'https://image.tmdb.org/t/p/w300/eh2e6feFLOmlQDcKSDCJCwXVsUd.jpg'
    },
    {
        titulo: 'Ben 10: Mutante Rex Heróis Unidos',
        descricao: 'Descrição do filme 10',
        imdb: 'tt2123516',
        imagem: 'https://image.tmdb.org/t/p/w300/iSPCeuGiN06540ZUCfcunc4hOm3.jpg'
    },
    {
        titulo: 'Sisu',
        descricao: 'Descrição do filme 11',
        imdb: 'tt14846026',
        imagem: 'https://image.tmdb.org/t/p/w300/uCAaaAQEDrTllYR4dtsEsfQa8We.jpg'
    },
    {
        titulo: 'Super Quem? Heróis Por Acidente',
        descricao: 'Descrição do filme 12',
        imdb: 'tt13774454',
        imagem: 'https://image.tmdb.org/t/p/w300/b9XVAP8AWQ30uRkKNTvmER8OVMa.jpg'
    },
    {
        titulo: 'Batman: Ataque ao Arkham',
        descricao: 'Descrição do filme 13',
        imdb: 'tt3139086',
        imagem: 'https://image.tmdb.org/t/p/w300/gX2Uy1GnIB8bbeP7EfXBUxzGmqY.jpg'
    },
    {
        titulo: 'Mulher Maravilha',
        descricao: 'Descrição do filme 14',
        imdb: 'tt1186373',
        imagem: 'https://image.tmdb.org/t/p/w300/wUhVYGSEWyb9xOl9kWspxLTpAxQ.jpg'
    },
    {
        titulo: 'iNumber Number: O Ouro de Joanesburgo',
        descricao: 'Descrição do filme 15',
        imdb: 'tt27728519',
        imagem: 'https://image.tmdb.org/t/p/w300/lfsbL4QcmMKJvdVYE36tPRmoaiv.jpg'
    },
    {
        titulo: 'O Pacto',
        descricao: 'Descrição do filme 16',
        imdb: 'tt4873118',
        imagem: 'https://image.tmdb.org/t/p/w300/pTQZT9R6YjKrweJ0llPtq57j1Z0.jpg'
    },
    {
        titulo: 'Indiana Jones e A Relíquia do Destino',
        descricao: 'Descrição do filme 17',
        imdb: 'tt1462764',
        imagem: 'https://image.tmdb.org/t/p/w300/9EnfMH0nTPCna87Mh3G8Q6W2wze.jpg'
    },
    {
        titulo: 'Nimona',
        descricao: 'Descrição do filme 18',
        imdb: 'tt19500164',
        imagem: 'https://image.tmdb.org/t/p/w300/dHFUte9BLYhihC9YqKWyxmWXnZu.jpg'
    },
    {
        titulo: 'A Mãe do Ano',
        descricao: 'Descrição do filme 19',
        imdb: 'tt19724192',
        imagem: 'https://image.tmdb.org/t/p/w300/3kTffR2pOxjwVP1qI5RwWnktI4y.jpg'
    },
    {
        titulo: 'Black Clover: A Espada do Rei Mago',
        descricao: 'Descrição do filme 20',
        imdb: 'tt22868844',
        imagem: 'https://image.tmdb.org/t/p/w300/5KK0FJGdZI7jMhfwyJTg1LGR2z8.jpg'
    },
    {
        titulo: 'Resgate 2',
        descricao: 'Descrição do filme 21',
        imdb: 'tt12263384',
        imagem: 'https://image.tmdb.org/t/p/w300/AfwqKLQwjgPu8bIL1mqhHTlnQv0.jpg'
    },
    {
        titulo: 'The Flash',
        descricao: 'Descrição do filme 22',
        imdb: 'tt0439572',
        imagem: 'https://image.tmdb.org/t/p/w300/gCp4ATDNhhZyxZiLYkpQlMEiWWG.jpg'
    },
    {
        titulo: 'Transformers: O Despertar das Feras',
        descricao: 'Descrição do filme 23',
        imdb: 'tt5090568',
        imagem: 'https://image.tmdb.org/t/p/w300/zEqwfO5R2LrrLgV61xm8M9TmNTG.jpg'
    },
    {
        titulo: 'Homem-Aranha: Através do Aranhaverso',
        descricao: 'Descrição do filme 24',
        imdb: 'tt9362722',
        imagem: 'https://image.tmdb.org/t/p/w300/6a7NItazspSV8Fl7u46ccxwPKk4.jpg'
    },
    {
        titulo: 'Os 800',
        descricao: 'Descrição do filme 1',
        imdb: 'tt7294150',
        imagem: 'https://image.tmdb.org/t/p/w300/mx0PP392PYCZ4x0xNryO5ry637X.jpg'
    },
    {
        titulo: 'Meu Nome é Vingança',
        descricao: 'Descrição do filme 2',
        imdb: 'tt15229674',
        imagem: 'https://image.tmdb.org/t/p/w300/tlZGDi8anF7Fcs5HGVaTEMnv1hp.jpg'
    },
    {
        titulo: 'Velozes & Furiosos 10',
        descricao: 'Descrição do filme 3',
        imdb: 'tt5433140',
        imagem: 'https://image.tmdb.org/t/p/w300/4CWoalqAsRzXD9AFbByD1KnH40E.jpg'
    },
    {
        titulo: 'Evangelion: 1.11 Você (Não) Está Sozinho',
        descricao: 'Descrição do filme 4',
        imdb: 'tt0923811',
        imagem: 'https://image.tmdb.org/t/p/w300/fc4yj5OpifBQJGHoLvcF2on5qW5.jpg'
    },
    {
        titulo: 'Guerra Mundial Z',
        descricao: 'Descrição do filme 5',
        imdb: 'tt0816711',
        imagem: 'https://image.tmdb.org/t/p/w300/5HImW2XT2oN001IzZ4aw2IOLC4j.jpg'
    },
    {
        titulo: 'O Destino de Júpiter',
        descricao: 'Descrição do filme 6',
        imdb: 'tt1617661',
        imagem: 'https://image.tmdb.org/t/p/w300/u1p4Fw1nqYOQcRgD63sJmX3ZjgU.jpg'
    },
    {
        titulo: 'Lendas da Guerra',
        descricao: 'Descrição do filme 7',
        imdb: 'tt15090814',
        imagem: 'https://image.tmdb.org/t/p/w300/aC0YLhS0K5JbONctAlIZVvxXO0c.jpg'
    },
    {
        titulo: 'Duas Pecadoras e Uma Mula',
        descricao: 'Descrição do filme 8',
        imdb: 'tt14940240',
        imagem: 'https://image.tmdb.org/t/p/w300/aRaO9OMNfsw03C04NHEgzBVWCiK.jpg'
    },
    {
        titulo: 'A Mãe',
        descricao: 'Descrição do filme 9',
        imdb: 'tt6968614',
        imagem: 'https://image.tmdb.org/t/p/w300/5OeWHBMifiRPMz6eS23miS5ttED.jpg'
    },
    {
        titulo: 'A Cratera',
        descricao: 'Descrição do filme 10',
        imdb: 'tt5264838',
        imagem: 'https://image.tmdb.org/t/p/w300/65CXDhp2Y0ro847Lzq9l1iQ9Hn6.jpg'
    },
    {
        titulo: 'Rebelião',
        descricao: 'Descrição do filme 11',
        imdb: 'tt4642044',
        imagem: 'https://image.tmdb.org/t/p/w300/5Q2pHzDfJ8QlUA2vx2yAXWJkof7.jpg'
    },
    {
        titulo: 'Guardiões da Galáxia: Volume 3',
        descricao: 'Descrição do filme 12',
        imdb: 'tt6791350',
        imagem: 'https://image.tmdb.org/t/p/w300/mgFdvrwlzYi6wLq3zgzOwkiT43k.jpg'
    },
    {
        titulo: 'Rainhas em Fuga',
        descricao: 'Descrição do filme 13',
        imdb: 'tt21736218',
        imagem: 'https://image.tmdb.org/t/p/w300/iL0hVqtK0NUa6B9UJXkoq5jSXAz.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco - Saint Seiya: O Começo',
        descricao: 'Descrição do filme 14',
        imdb: 'tt6528290',
        imagem: 'https://image.tmdb.org/t/p/w300/omPLRVEydDJdkXoBw87PWQ3heCY.jpg'
    },
    {
        titulo: 'Liga da Justiça x RWBY: Super-Heróis e Caçadores - Parte 1',
        descricao: 'Descrição do filme 15',
        imdb: 'tt24548912',
        imagem: 'https://image.tmdb.org/t/p/w300/gs9thnvpkf6HCx2lJZlY5YaLQ7s.jpg'
    },
    {
        titulo: 'Peter Pan & Wendy',
        descricao: 'Descrição do filme 16',
        imdb: 'tt5635026',
        imagem: 'https://image.tmdb.org/t/p/w300/AkWxiUsc32qJHLwt7vt5AvUFNlx.jpg'
    },
    {
        titulo: 'Ghosted: Sem Resposta',
        descricao: 'Descrição do filme 17',
        imdb: 'tt15326988',
        imagem: 'https://image.tmdb.org/t/p/w300/89p7MQ3I5wKzOEO0OCCXEdUqX9R.jpg'
    },
    {
        titulo: 'Caçador de Tormentas',
        descricao: 'Descrição do filme 18',
        imdb: 'tt10559102',
        imagem: 'https://image.tmdb.org/t/p/w300/g0UOstAfVWAK5FazCMfdWdkM38i.jpg'
    },
    {
        titulo: 'Power Rangers: Agora e Sempre',
        descricao: 'Descrição do filme 19',
        imdb: 'tt23219684',
        imagem: 'https://image.tmdb.org/t/p/w300/lB1psIWct40ZSJPLp8wsQ98y0dI.jpg'
    },
    {
        titulo: 'Alerta Máximo',
        descricao: 'Descrição do filme 20',
        imdb: 'tt5884796',
        imagem: 'https://image.tmdb.org/t/p/w300/6yuyOVARnEHZPBmaY1mDvF4woel.jpg'
    },
    {
        titulo: 'Uma Prece Antes do Amanhecer',
        descricao: 'Descrição do filme 21',
        imdb: 'tt4080956',
        imagem: 'https://image.tmdb.org/t/p/w300/pS7MWnE9jzKytQ101KbddnahRRZ.jpg'
    },
    {
        titulo: 'Vício Perfeito',
        descricao: 'Descrição do filme 22',
        imdb: 'tt12965390',
        imagem: 'https://image.tmdb.org/t/p/w300/1bFE8TlLU7r3IwwGHN7au8xPIds.jpg'
    },
    {
        titulo: 'Os Piratas da Rua Debaixo',
        descricao: 'Descrição do filme 23',
        imdb: 'tt10727214',
        imagem: 'https://image.tmdb.org/t/p/w300/9p0uScG0xssIrANgcYLcDiNSLCK.jpg'
    },
    {
        titulo: 'John Wick 4: Baba Yaga',
        descricao: 'Descrição do filme 24',
        imdb: 'tt10366206',
        imagem: 'https://image.tmdb.org/t/p/w300/rXTqhpkpj6E0YilQ49PK1SSqLhm.jpg'
    },
    {
        titulo: 'Batman: A Perdição Chegou a Gotham',
        descricao: 'Descrição do filme 1',
        imdb: 'tt24223450',
        imagem: 'https://image.tmdb.org/t/p/w300/ejHdsATVNWDIhuTgIKXmenFqGTc.jpg'
    },
    {
        titulo: 'Kill Boksoon',
        descricao: 'Descrição do filme 2',
        imdb: 'tt16900880',
        imagem: 'https://image.tmdb.org/t/p/w300/2eRQ55y4OWXZjmdwfBmyMEPTdyy.jpg'
    },
    {
        titulo: 'O Último Reino: Sete Reis Devem Morrer',
        descricao: 'Descrição do filme 3',
        imdb: 'tt15767808',
        imagem: 'https://image.tmdb.org/t/p/w300/xUvSeFhdsJbKFOaHnB9TeTZpJKs.jpg'
    },
    {
        titulo: 'Transformers',
        descricao: 'Descrição do filme 4',
        imdb: 'tt0418279',
        imagem: 'https://image.tmdb.org/t/p/w300/ev7IMfMXRbddGLVw7xPL2PHpkWR.jpg'
    },
    {
        titulo: 'Transformers: A Vingança dos Derrotados',
        descricao: 'Descrição do filme 5',
        imdb: 'tt1055369',
        imagem: 'https://image.tmdb.org/t/p/w300/wZRc6MekG9uD56VtRqQysmHjdeI.jpg'
    },
    {
        titulo: 'Transformers: A Era da Extinção',
        descricao: 'Descrição do filme 6',
        imdb: 'tt2109248',
        imagem: 'https://image.tmdb.org/t/p/w300/gyDVzU2A8bdK4fsS4rWTsDcPPEB.jpg'
    },
    {
        titulo: 'Transformers: O Lado Oculto da Lua',
        descricao: 'Descrição do filme 7',
        imdb: 'tt1399103',
        imagem: 'https://image.tmdb.org/t/p/w300/1B1o592zAr0pny4qPGceT56Ug2m.jpg'
    },
    {
        titulo: 'Transformers: O Último Cavaleiro',
        descricao: 'Descrição do filme 8',
        imdb: 'tt3371366',
        imagem: 'https://image.tmdb.org/t/p/w300/iQ3Ko9GuKmGUHe5gFVSoR5NyOPT.jpg'
    },
    {
        titulo: 'Batman: A Piada Mortal',
        descricao: 'Descrição do filme 9',
        imdb: 'tt4853102',
        imagem: 'https://image.tmdb.org/t/p/w300/coBGOvmAfSVC5nnmsSm6RO4YMXx.jpg'
    },
    {
        titulo: 'InuYasha 1: Sentimentos que Transcendem o Tempo',
        descricao: 'Descrição do filme 10',
        imdb: 'tt0322645',
        imagem: 'https://image.tmdb.org/t/p/w300/krSgIB3AD35sKh9iXT5x7Io1xHF.jpg'
    },
    {
        titulo: 'InuYasha 2: O Castelo das Ilusões Dentro do Espelho',
        descricao: 'Descrição do filme 11',
        imdb: 'tt0366621',
        imagem: 'https://image.tmdb.org/t/p/w300/u8zFbyQnIKRRPxRRweQ6ODtAUhc.jpg'
    },
    {
        titulo: 'A Espiã Que Sabia de Menos',
        descricao: 'Descrição do filme 12',
        imdb: 'tt3079380',
        imagem: 'https://image.tmdb.org/t/p/w300/bft6EuB96z0ureK832edqwAplDS.jpg'
    },
    {
        titulo: 'A Fuga do Planeta dos Macacos',
        descricao: 'Descrição do filme 13',
        imdb: 'tt0067065',
        imagem: 'https://image.tmdb.org/t/p/w300/bZt5dYtbIZ03apuexPHvjrOI6vI.jpg'
    },
    {
        titulo: 'A Conquista do Planeta dos Macacos',
        descricao: 'Descrição do filme 14',
        imdb: 'tt0068408',
        imagem: 'https://image.tmdb.org/t/p/w300/yDg8b2FgDQCVkLEkrUtqP6sdRew.jpg'
    },
    {
        titulo: 'O Planeta dos Macacos',
        descricao: 'Descrição do filme 15',
        imdb: 'tt0063442',
        imagem: 'https://image.tmdb.org/t/p/w300/wTYTjSUqdra9WKzp7w2aOwYDosS.jpg'
    },
    {
        titulo: 'Creed III',
        descricao: 'Descrição do filme 16',
        imdb: 'tt11145118',
        imagem: 'https://image.tmdb.org/t/p/w300/wDugyjvDQsuwm9j9hkmK4whCOti.jpg'
    },
    {
        titulo: 'Mistério em Paris',
        descricao: 'Descrição do filme 17',
        imdb: 'tt15255288',
        imagem: 'https://image.tmdb.org/t/p/w300/pf1dQDb55mJ13KQMEYa4O0fni64.jpg'
    },
    {
        titulo: '65: Ameaça Pré-Histórica',
        descricao: 'Descrição do filme 18',
        imdb: 'tt12261776',
        imagem: 'https://image.tmdb.org/t/p/w300/uMMIeMVk1TCG3CZilpxbzFh0JKT.jpg'
    },
    {
        titulo: 'Luther: O Cair da Noite',
        descricao: 'Descrição do filme 19',
        imdb: 'tt3155298',
        imagem: 'https://image.tmdb.org/t/p/w300/dX7vIS0HfCIJ4l1VEBoSLs9DnLe.jpg'
    },
    {
        titulo: 'Tubarão: Mar de Sangue',
        descricao: 'Descrição do filme 20',
        imdb: 'tt12550376',
        imagem: 'https://image.tmdb.org/t/p/w300/qUBOPVsMT9OgsUVqZWUBLkgYrb6.jpg'
    },
    {
        titulo: 'Tempestade',
        descricao: 'Descrição do filme 21',
        imdb: 'tt0120696',
        imagem: 'https://image.tmdb.org/t/p/w300/5JiVOVgzk99xLHiFYI2eJFEfUj3.jpg'
    },
    {
        titulo: 'A Árvore dos Desejos',
        descricao: 'Descrição do filme 22',
        imdb: 'tt9239422',
        imagem: 'https://image.tmdb.org/t/p/w300/jbNYpZoe1TMw2L78VGS8NTspAwj.jpg'
    },
    {
        titulo: 'McQuade: O Lobo Solitário',
        descricao: 'Descrição do filme 23',
        imdb: 'tt0085862',
        imagem: 'https://image.tmdb.org/t/p/w300/ddsKrcL7iiK66cJyj3JVyZKdm2q.jpg'
    },
    {
        titulo: 'O Exterminador do Futuro 3: A Rebelião das Máquinas',
        descricao: 'Descrição do filme 24',
        imdb: 'tt0181852',
        imagem: 'https://image.tmdb.org/t/p/w300/lzzuKhx8Ly6SZa8LxkT5Fvouc5z.jpg'
    },
    {
        titulo: 'O Exterminador do Futuro 4: A Salvação',
        descricao: 'Descrição do filme 1',
        imdb: 'tt0438488',
        imagem: 'https://image.tmdb.org/t/p/w300/tNKoEs9ovTLpJURT9WKJASUDktM.jpg'
    },
    {
        titulo: 'Trovão Azul',
        descricao: 'Descrição do filme 2',
        imdb: 'tt0085255',
        imagem: 'https://image.tmdb.org/t/p/w300/5ZVFskWRNXsOEdUXrfi3JX6ohNr.jpg'
    },
    {
        titulo: 'Pantera Negra',
        descricao: 'Descrição do filme 3',
        imdb: 'tt1825683',
        imagem: 'https://image.tmdb.org/t/p/w300/9D40jv8pi9uKnrVDPiN3JYYad72.jpg'
    },
    {
        titulo: 'A Guerra do Amanhã',
        descricao: 'Descrição do filme 4',
        imdb: 'tt9777666',
        imagem: 'https://image.tmdb.org/t/p/w300/lWQ3hI78Az2RHfzDpEuvougqUz7.jpg'
    },
    {
        titulo: 'Esquema de Risco: Operação Fortune',
        descricao: 'Descrição do filme 5',
        imdb: 'tt7985704',
        imagem: 'https://image.tmdb.org/t/p/w300/fLxXvMcpsK8fGKguP3wZ7Urb2ao.jpg'
    },
    {
        titulo: 'A Porteira',
        descricao: 'Descrição do filme 6',
        imdb: 'tt6222118',
        imagem: 'https://image.tmdb.org/t/p/w300/lh9jmB0FVXjjs4z9ehX6O5wN915.jpg'
    },
    {
        titulo: 'O Guardião dos Mundos',
        descricao: 'Descrição do filme 7',
        imdb: 'tt6270596',
        imagem: 'https://image.tmdb.org/t/p/w300/6McPx1oITdAFuaDlzl5NRCrcTOO.jpg'
    },
    {
        titulo: 'Bem-vindo à Selva',
        descricao: 'Descrição do filme 8',
        imdb: 'tt0327850',
        imagem: 'https://image.tmdb.org/t/p/w300/5CgCYCiObKgst1UIdqibU8ZeKAX.jpg'
    },
    {
        titulo: 'É o Fim',
        descricao: 'Descrição do filme 9',
        imdb: 'tt1245492',
        imagem: 'https://image.tmdb.org/t/p/w300/Lo4M5BETSchjGz5Mlm0Jh8QzDF.jpg'
    },
    {
        titulo: 'Vizinhos Imediatos de 3º Grau',
        descricao: 'Descrição do filme 10',
        imdb: 'tt1298649',
        imagem: 'https://image.tmdb.org/t/p/w300/s7ICZYFXI0h1EMfQ4ApJGtOar1m.jpg'
    },
    {
        titulo: 'O Guarda-Costas em Ação',
        descricao: 'Descrição do filme 11',
        imdb: 'tt0111835',
        imagem: 'https://image.tmdb.org/t/p/w300/eJOtGPybhBaMQyaJe0CGmkYBM28.jpg'
    },
    {
        titulo: 'O Confronto',
        descricao: 'Descrição do filme 12',
        imdb: 'tt0267804',
        imagem: 'https://image.tmdb.org/t/p/w300/74K8HmqhYv9RE97Buqt8N1NDvo3.jpg'
    },
    {
        titulo: 'Os Irmãos Grimm',
        descricao: 'Descrição do filme 13',
        imdb: 'tt0355295',
        imagem: 'https://image.tmdb.org/t/p/w300/jerDxzhAVtNGPtDV0n9ePWCLlyK.jpg'
    },
    {
        titulo: 'Limite Vertical',
        descricao: 'Descrição do filme 14',
        imdb: 'tt0190865',
        imagem: 'https://image.tmdb.org/t/p/w300/8c2qdHK0zzCf40ALc3KxIb0eFUO.jpg'
    },
    {
        titulo: 'Os Instrumentos Mortais: Cidade dos Ossos',
        descricao: 'Descrição do filme 15',
        imdb: 'tt1538403',
        imagem: 'https://image.tmdb.org/t/p/w300/glHqwsvFkQHFMFpA0FjFp8hPu6P.jpg'
    },
    {
        titulo: 'Me Tira da Mira',
        descricao: 'Descrição do filme 16',
        imdb: 'tt14257960',
        imagem: 'https://image.tmdb.org/t/p/w300/gxr04nWw0BuGVqdFNK8W4na4FYD.jpg'
    },
    {
        titulo: 'Ultravioleta',
        descricao: 'Descrição do filme 17',
        imdb: 'tt0370032',
        imagem: 'https://image.tmdb.org/t/p/w300/oUjrVXrASYin8N7kJZ3gqgxIeHp.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: A Lenda do Santuário',
        descricao: 'Descrição do filme 18',
        imdb: 'tt2231489',
        imagem: 'https://image.tmdb.org/t/p/w300/ozSUEsKgMNOdL4em13Xd7uKf9TW.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: Os Guerreiros do Armageddon',
        descricao: 'Descrição do filme 19',
        imdb: 'tt0326101',
        imagem: 'https://image.tmdb.org/t/p/w300/cXCWqtb7oRtkQfpxjdPS4G2c3RR.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: A Lenda dos Defensores de Atena',
        descricao: 'Descrição do filme 20',
        imdb: 'tt0326143',
        imagem: 'https://image.tmdb.org/t/p/w300/724kXHDFaSJw1WdYX2qi5XkYMLb.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: A Grande Batalha dos Deuses',
        descricao: 'Descrição do filme 21',
        imdb: 'tt0322918',
        imagem: 'https://image.tmdb.org/t/p/w300/1RsREkIc1t0oJLbYlz0tE8uZTbG.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: O Santo Guerreiro',
        descricao: 'Descrição do filme 22',
        imdb: 'tt0323869',
        imagem: 'https://image.tmdb.org/t/p/w300/nziTxFxx0l2hO7ZddZo903kVVU0.jpg'
    },
    {
        titulo: 'Jung_E',
        descricao: 'Descrição do filme 23',
        imdb: 'tt22352848',
        imagem: 'https://image.tmdb.org/t/p/w300/qEkatvFb6hrebLBAanb25ea26yh.jpg'
    },
    {
        titulo: 'Casamento Armado',
        descricao: 'Descrição do filme 24',
        imdb: 'tt9686790',
        imagem: 'https://image.tmdb.org/t/p/w300/i3OgPuen3vi7UkAQCMZou2NkPUm.jpg'
    },
    {
        titulo: 'Minority Report: A Nova Lei',
        descricao: 'Descrição do filme 1',
        imdb: 'tt0181689',
        imagem: 'https://image.tmdb.org/t/p/w300/zJhHMqaAKnIZ1egGTRk7jOH80xH.jpg'
    },
    {
        titulo: 'Junglee - Protegendo a Selva',
        descricao: 'Descrição do filme 2',
        imdb: 'tt7463730',
        imagem: 'https://image.tmdb.org/t/p/w300/8SX0Yd6D6YFR3EyXlJmDoaKRwbL.jpg'
    },
    {
        titulo: '400 Contra 1: Uma História do Crime Organizado',
        descricao: 'Descrição do filme 3',
        imdb: 'tt1781755',
        imagem: 'https://image.tmdb.org/t/p/w300/sMncURxEueGeBxdmx2gTFaNUgzF.jpg'
    },
    {
        titulo: 'Krull',
        descricao: 'Descrição do filme 4',
        imdb: 'tt0085811',
        imagem: 'https://image.tmdb.org/t/p/w300/b1anwwbh00R3iOgM88L5jf7qHBt.jpg'
    },
    {
        titulo: 'O Homem da Casa',
        descricao: 'Descrição do filme 5',
        imdb: 'tt0113755',
        imagem: 'https://image.tmdb.org/t/p/w300/uDf2IgyE7flYRAycliPw3LIcPfi.jpg'
    },
    {
        titulo: 'Limite da Honra',
        descricao: 'Descrição do filme 6',
        imdb: 'tt7223050',
        imagem: 'https://image.tmdb.org/t/p/w300/gv5NhsZfE9obeb1c3PXNOmQDtTg.jpg'
    },
    {
        titulo: 'Atentado em Paris',
        descricao: 'Descrição do filme 7',
        imdb: 'tt2368619',
        imagem: 'https://image.tmdb.org/t/p/w300/qIDP5eT4azlanpUJFQJq2ZYWw4Y.jpg'
    },
    {
        titulo: 'Escuridão Mortal',
        descricao: 'Descrição do filme 8',
        imdb: 'tt1194271',
        imagem: 'https://image.tmdb.org/t/p/w300/w4toWMBnPNvKtEb8cgodIKqS8Rh.jpg'
    },
    {
        titulo: 'Ligação Explosiva',
        descricao: 'Descrição do filme 9',
        imdb: 'tt14980972',
        imagem: 'https://image.tmdb.org/t/p/w300/9tvZdU8QleViosTImC9cdODuBPU.jpg'
    },
    {
        titulo: 'Cavalo de Guerra',
        descricao: 'Descrição do filme 10',
        imdb: 'tt1568911',
        imagem: 'https://image.tmdb.org/t/p/w300/8KCu49IhGK5IpqKRO1i2UGLQt6A.jpg'
    },
    {
        titulo: 'Karatê Kid: A Hora da Verdade',
        descricao: 'Descrição do filme 11',
        imdb: 'tt0087538',
        imagem: 'https://image.tmdb.org/t/p/w300/6qBjCK2ZzQUfdY1oxoHY7dSfCbb.jpg'
    },
    {
        titulo: 'Dragon Ball Z: O Renascimento de Freeza',
        descricao: 'Descrição do filme 12',
        imdb: 'tt3819668',
        imagem: 'https://image.tmdb.org/t/p/w300/oth0VBziwe25mDzkJ6XzwmUCCDC.jpg'
    },
    {
        titulo: 'Stuber: A Corrida Maluca',
        descricao: 'Descrição do filme 13',
        imdb: 'tt7734218',
        imagem: 'https://image.tmdb.org/t/p/w300/bopJPyP68dJEjO7i0gUrYMYC0Eh.jpg'
    },
    {
        titulo: 'Zohan: Um Agente Bom de Corte',
        descricao: 'Descrição do filme 14',
        imdb: 'tt0960144',
        imagem: 'https://image.tmdb.org/t/p/w300/mT81xdLGdexnLfPqiNjjZ2BR82u.jpg'
    },
    {
        titulo: '3 Ninjas do Barulho',
        descricao: 'Descrição do filme 15',
        imdb: 'tt0118539',
        imagem: 'https://image.tmdb.org/t/p/w300/hro6QSAQ9s8slnDtB7SzhjcmTet.jpg'
    },
    {
        titulo: 'Maze Runner: A Cura Mortal',
        descricao: 'Descrição do filme 16',
        imdb: 'tt4500922',
        imagem: 'https://image.tmdb.org/t/p/w300/uBEpWurzTOiz520d1tRNhBXN7h9.jpg'
    },
    {
        titulo: 'Maze Runner: Prova de Fogo',
        descricao: 'Descrição do filme 17',
        imdb: 'tt4046784',
        imagem: 'https://image.tmdb.org/t/p/w300/zpdGT57Rn3mAZsNOkeDeINB6L9v.jpg'
    },
    {
        titulo: 'Emancipation - Uma História de Liberdade',
        descricao: 'Descrição do filme 18',
        imdb: 'tt12530246',
        imagem: 'https://image.tmdb.org/t/p/w300/izTIOynukDcN9dp7uPlwBjHr8f5.jpg'
    },
    {
        titulo: 'Midway: Batalha em Alto Mar',
        descricao: 'Descrição do filme 19',
        imdb: 'tt6924650',
        imagem: 'https://image.tmdb.org/t/p/w300/f2x8lIh0olfwqe5Jbwsw4Ojc5ie.jpg'
    },
    {
        titulo: 'Congo',
        descricao: 'Descrição do filme 20',
        imdb: 'tt0112715',
        imagem: 'https://image.tmdb.org/t/p/w300/hPNSToNIIpRO6y5Rh973leqQqNr.jpg'
    },
    {
        titulo: 'Gato de Botas 2: O Último Pedido',
        descricao: 'Descrição do filme 21',
        imdb: 'tt3915174',
        imagem: 'https://image.tmdb.org/t/p/w300/65NBNqJiaHeCmqDqkCmrRplJXw.jpg'
    },
    {
        titulo: 'Oldboy',
        descricao: 'Descrição do filme 22',
        imdb: 'tt0364569',
        imagem: 'https://image.tmdb.org/t/p/w300/o4pkvVh8BPFOawIJ79dgoD5wvvZ.jpg'
    },
    {
        titulo: 'Exército do Amanhã',
        descricao: 'Descrição do filme 23',
        imdb: 'tt7375466',
        imagem: 'https://image.tmdb.org/t/p/w300/72f0kFmOutPhSaZkXs0oGDmfvRd.jpg'
    },
    {
        titulo: 'A Colônia',
        descricao: 'Descrição do filme 24',
        imdb: 'tt0119013',
        imagem: 'https://image.tmdb.org/t/p/w300/AqwtE8USreQ48Kv1S0mtMHMX957.jpg'
    },
    {
        titulo: 'Renegados Pela Justiça',
        descricao: 'Descrição do filme 1',
        imdb: 'tt0098188',
        imagem: 'https://image.tmdb.org/t/p/w300/3BTZifge3VPP6mI1JBHdkbXkxxA.jpg'
    },
    {
        titulo: 'Os Outros Caras',
        descricao: 'Descrição do filme 2',
        imdb: 'tt1386588',
        imagem: 'https://image.tmdb.org/t/p/w300/gHzt2VR585107h4E1f8yva0s2P0.jpg'
    },
    {
        titulo: 'Coração de Cavaleiro',
        descricao: 'Descrição do filme 3',
        imdb: 'tt0183790',
        imagem: 'https://image.tmdb.org/t/p/w300/zn0PeaYPzcTto29R9MEieXAyaQd.jpg'
    },
    {
        titulo: 'Loucas Por Amor, Viciadas em Dinheiro',
        descricao: 'Descrição do filme 4',
        imdb: 'tt0951216',
        imagem: 'https://image.tmdb.org/t/p/w300/pMaygAnovaDuwZCAPdKZEpyM8uQ.jpg'
    },
    {
        titulo: 'Um Novo Desafio para Callan e sua Equipe',
        descricao: 'Descrição do filme 5',
        imdb: 'tt3592904',
        imagem: 'https://image.tmdb.org/t/p/w300/oTru4TETVZ7j8qkX7HZj0wjnSm1.jpg'
    },
    {
        titulo: 'Superman: O Retorno',
        descricao: 'Descrição do filme 6',
        imdb: 'tt0348150',
        imagem: 'https://image.tmdb.org/t/p/w300/8ITZTyXh88ylGFEePoLfz8iex8e.jpg'
    },
    {
        titulo: 'Superman 4: Em Busca da Paz',
        descricao: 'Descrição do filme 7',
        imdb: 'tt0094074',
        imagem: 'https://image.tmdb.org/t/p/w300/rUBLocsfASNbVC2RueRGp1IPrmO.jpg'
    },
    {
        titulo: 'Superman 3',
        descricao: 'Descrição do filme 8',
        imdb: 'tt0086393',
        imagem: 'https://image.tmdb.org/t/p/w300/c4oR6qgZW2s5foGkQi2Dd86KuAS.jpg'
    },
    {
        titulo: 'Superman 2: A Aventura Continua',
        descricao: 'Descrição do filme 9',
        imdb: 'tt0081573',
        imagem: 'https://image.tmdb.org/t/p/w300/5oOpi5evcEfw5w9hn09Re1VWvI8.jpg'
    },
    {
        titulo: 'Superman: O Filme',
        descricao: 'Descrição do filme 10',
        imdb: 'tt0078346',
        imagem: 'https://image.tmdb.org/t/p/w300/sKK8syhz0sEoRVjb6OKULuMLCq3.jpg'
    },
    {
        titulo: 'Creed II',
        descricao: 'Descrição do filme 11',
        imdb: 'tt6343314',
        imagem: 'https://image.tmdb.org/t/p/w300/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg'
    },
    {
        titulo: 'Ava',
        descricao: 'Descrição do filme 12',
        imdb: 'tt8784956',
        imagem: 'https://image.tmdb.org/t/p/w300/6llUjNLsLiAcpIOer9LR631HPoU.jpg'
    },
    {
        titulo: 'O Patriota',
        descricao: 'Descrição do filme 13',
        imdb: 'tt0187393',
        imagem: 'https://image.tmdb.org/t/p/w300/oe26GVJTIEFLW8WjGMj1K0MbWUJ.jpg'
    },
    {
        titulo: 'Falcão Negro em Perigo',
        descricao: 'Descrição do filme 14',
        imdb: 'tt0265086',
        imagem: 'https://image.tmdb.org/t/p/w300/mwlZSgXxX0XrRGP7gMLdJxlrOTY.jpg'
    },
    {
        titulo: 'Homens de Coragem',
        descricao: 'Descrição do filme 15',
        imdb: 'tt3829920',
        imagem: 'https://image.tmdb.org/t/p/w300/llnIydfVBpZZ5rCfhzDonq5BIST.jpg'
    },
    {
        titulo: 'Um Homem Contra Wall Street',
        descricao: 'Descrição do filme 16',
        imdb: 'tt2368553',
        imagem: 'https://image.tmdb.org/t/p/w300/4dm5XEXIT73aB0g1nrplwYguaU9.jpg'
    },
    {
        titulo: 'Operação Fronteira',
        descricao: 'Descrição do filme 17',
        imdb: 'tt1488606',
        imagem: 'https://image.tmdb.org/t/p/w300/2KfhMmTMNAj3NehyhrYtadDO7yc.jpg'
    },
    {
        titulo: 'Pearl Harbor',
        descricao: 'Descrição do filme 18',
        imdb: 'tt0213149',
        imagem: 'https://image.tmdb.org/t/p/w300/y8A0Cvp8WQmZ3bjbnsL53lY0dsC.jpg'
    },
    {
        titulo: 'Ano Novo, Morte Nova',
        descricao: 'Descrição do filme 19',
        imdb: 'tt3079568',
        imagem: 'https://image.tmdb.org/t/p/w300/dcx3O2vSXUInpPuOe1EvYXIWS4a.jpg'
    },
    {
        titulo: 'Horas Decisivas',
        descricao: 'Descrição do filme 20',
        imdb: 'tt2025690',
        imagem: 'https://image.tmdb.org/t/p/w300/8VTYz8SkU8DcBgKNprMjqPNZBgt.jpg'
    },
    {
        titulo: 'Dragon Ball Z: O Homem Mais Forte do Mundo',
        descricao: 'Descrição do filme 21',
        imdb: 'tt0142240',
        imagem: 'https://image.tmdb.org/t/p/w300/aQyOTWpSQOyzLpHEOCpQwFFF0dJ.jpg'
    },
    {
        titulo: 'A Hora da Escuridão',
        descricao: 'Descrição do filme 22',
        imdb: 'tt1093357',
        imagem: 'https://image.tmdb.org/t/p/w300/j9WtE4yn5NkUKZ5FguUzisSgmlz.jpg'
    },
    {
        titulo: 'Maze Runner: Correr ou Morrer',
        descricao: 'Descrição do filme 23',
        imdb: 'tt1790864',
        imagem: 'https://image.tmdb.org/t/p/w300/uHnRw9Kccevck2KdmzJ8Xf7zczM.jpg'
    },
    {
        titulo: 'Gladiador',
        descricao: 'Descrição do filme 24',
        imdb: 'tt0172495',
        imagem: 'https://image.tmdb.org/t/p/w300/4DUClyGA6OqjXv6yC0Imf6THGfp.jpg'
    },
    {
        titulo: 'Um Crime para Dois',
        descricao: 'Descrição do filme 1',
        imdb: 'tt8851668',
        imagem: 'https://image.tmdb.org/t/p/w300/ywTSQfjmRe9DXLAgxXbFpjZJ2Yo.jpg'
    },
    {
        titulo: 'Academia de Vampiros: O Beijo das Sombras',
        descricao: 'Descrição do filme 2',
        imdb: 'tt1686821',
        imagem: 'https://image.tmdb.org/t/p/w300/o6vXekbF356LhfJY67KYPKZWxq5.jpg'
    },
    {
        titulo: 'Bilhete de Fuga',
        descricao: 'Descrição do filme 3',
        imdb: 'tt13075730',
        imagem: 'https://image.tmdb.org/t/p/w300/ihss7lYlG9xON9RnOIy2pwLbdLX.jpg'
    },
    {
        titulo: 'A Floresta Do Escalpe',
        descricao: 'Descrição do filme 4',
        imdb: 'tt13156200',
        imagem: 'https://image.tmdb.org/t/p/w300/2OG6YCYabCBNcmXv5w4AP9uTbsb.jpg'
    },
    {
        titulo: 'O Troll da Montanha',
        descricao: 'Descrição do filme 5',
        imdb: 'tt11116912',
        imagem: 'https://image.tmdb.org/t/p/w300/tyv3iU87q5IdTAUVLWJeILJ4Cyf.jpg'
    },
    {
        titulo: 'Esporte Sangrento',
        descricao: 'Descrição do filme 6',
        imdb: 'tt0107750',
        imagem: 'https://image.tmdb.org/t/p/w300/uTQ42xQ0dWMtppI1AvvNLSFrHMD.jpg'
    },
    {
        titulo: 'Dragão: A História de Bruce Lee',
        descricao: 'Descrição do filme 7',
        imdb: 'tt0106770',
        imagem: 'https://image.tmdb.org/t/p/w300/7vLXw8daw29C0JZ2aJWzYdOdclK.jpg'
    },
    {
        titulo: 'Invasão Zumbi 2: Península',
        descricao: 'Descrição do filme 8',
        imdb: 'tt8850222',
        imagem: 'https://image.tmdb.org/t/p/w300/dGVUiqnahQ4ZZRchGRpO2SyhtQY.jpg'
    },
    {
        titulo: 'Wolverine: Imortal',
        descricao: 'Descrição do filme 9',
        imdb: 'tt1430132',
        imagem: 'https://image.tmdb.org/t/p/w300/wCP2JfaRFdrFjxiXTUdNnfvyJ2K.jpg'
    },
    {
        titulo: 'Expresso para o Inferno',
        descricao: 'Descrição do filme 10',
        imdb: 'tt0089941',
        imagem: 'https://image.tmdb.org/t/p/w300/b7mLxQh4iEE1FKUv1f0iYi5I4tc.jpg'
    },
    {
        titulo: 'O Especialista',
        descricao: 'Descrição do filme 11',
        imdb: 'tt0111255',
        imagem: 'https://image.tmdb.org/t/p/w300/cZiruAWPqKzJQRhU9LQ9k5iGLbB.jpg'
    },
    {
        titulo: 'Rei Arthur: A Lenda da Espada',
        descricao: 'Descrição do filme 12',
        imdb: 'tt1972591',
        imagem: 'https://image.tmdb.org/t/p/w300/wI8OOeEIN8k9HD2HaBM8jOHm2LF.jpg'
    },
    {
        titulo: 'Stallone: Cobra',
        descricao: 'Descrição do filme 13',
        imdb: 'tt0090859',
        imagem: 'https://image.tmdb.org/t/p/w300/jxeEu3BqwRQKGutvo4Jhc3V3rk7.jpg'
    },
    {
        titulo: 'Gigantes de Aço',
        descricao: 'Descrição do filme 14',
        imdb: 'tt0433035',
        imagem: 'https://image.tmdb.org/t/p/w300/pp74uUjwQTknGPqNrerj4FvU0ce.jpg'
    },
    {
        titulo: 'Os Selvagens da Noite',
        descricao: 'Descrição do filme 15',
        imdb: 'tt0080120',
        imagem: 'https://image.tmdb.org/t/p/w300/u1EWKbXm1keeqXrNNsaGILKAcoF.jpg'
    },
    {
        titulo: 'Máquina Quase Mortífera',
        descricao: 'Descrição do filme 16',
        imdb: 'tt0107659',
        imagem: 'https://image.tmdb.org/t/p/w300/4Pci5gw2u7UT0YZC0md0UEYQUrf.jpg'
    },
    {
        titulo: 'Ultraman Tiga - A Odisséia Final',
        descricao: 'Descrição do filme 17',
        imdb: 'tt0228982',
        imagem: 'https://image.tmdb.org/t/p/w300/papDk5x8wmkamSpEm70Ssc6SqQG.jpg'
    },
    {
        titulo: 'ウルトラマン',
        descricao: 'Descrição do filme 18',
        imdb: 'tt0471414',
        imagem: 'https://image.tmdb.org/t/p/w300/rZP3TaxNM1bxyzWhYxhrpulLXQq.jpg'
    },
    {
        titulo: 'Caça Implacável',
        descricao: 'Descrição do filme 19',
        imdb: 'tt10242388',
        imagem: 'https://image.tmdb.org/t/p/w300/aUQ898w7faH39KpMA64v59PKRoV.jpg'
    },
    {
        titulo: 'Jogo da Morte',
        descricao: 'Descrição do filme 20',
        imdb: 'tt0077594',
        imagem: 'https://image.tmdb.org/t/p/w300/5z4s24ln8F2EDAzAlRv3cfdS4kO.jpg'
    },
    {
        titulo: 'João e Maria: Caçadores de Bruxas',
        descricao: 'Descrição do filme 21',
        imdb: 'tt1428538',
        imagem: 'https://image.tmdb.org/t/p/w300/pNAOG8mvstBhUE1jhbGkB87G2VV.jpg'
    },
    {
        titulo: 'Caçado',
        descricao: 'Descrição do filme 22',
        imdb: 'tt0269347',
        imagem: 'https://image.tmdb.org/t/p/w300/48b4zYcvT0RU3VxklGml7hf1KsY.jpg'
    },
    {
        titulo: 'A Morte Pede Carona',
        descricao: 'Descrição do filme 23',
        imdb: 'tt0455960',
        imagem: 'https://image.tmdb.org/t/p/w300/u45gV8LrTrpv0dnv1KhuPtnx5Io.jpg'
    },
    {
        titulo: 'Bala Perdida 2',
        descricao: 'Descrição do filme 24',
        imdb: 'tt14465706',
        imagem: 'https://image.tmdb.org/t/p/w300/mqSZ36rvitkDJdXIFIBmsbG2d1D.jpg'
    },
    {
        titulo: 'Corrective Measures – Fuga da Prisão',
        descricao: 'Descrição do filme 1',
        imdb: 'tt15391770',
        imagem: 'https://image.tmdb.org/t/p/w300/mIus2B83moSdfIkD4wD7tOaG5Y1.jpg'
    },
    {
        titulo: '怒火',
        descricao: 'Descrição do filme 2',
        imdb: 'tt8165192',
        imagem: 'https://image.tmdb.org/t/p/w300/fqhZOmHlARkWiHZmy6D2DRrrxlZ.jpg'
    },
    {
        titulo: 'Overdose',
        descricao: 'Descrição do filme 3',
        imdb: 'tt15713012',
        imagem: 'https://image.tmdb.org/t/p/w300/9RvM4wawLRlX608FgZr9kL8CLmy.jpg'
    },
    {
        titulo: 'Pantera Negra: Wakanda para Sempre',
        descricao: 'Descrição do filme 4',
        imdb: 'tt9114286',
        imagem: 'https://image.tmdb.org/t/p/w300/cryEN3sWlgB2wTzcUNVtDGI8bkM.jpg'
    },
    {
        titulo: 'Acusado',
        descricao: 'Descrição do filme 5',
        imdb: 'tt4205896',
        imagem: 'https://image.tmdb.org/t/p/w300/ocluspJbkJC0Z7Mn6WWDuqXtKJK.jpg'
    },
    {
        titulo: 'Contra Ataque',
        descricao: 'Descrição do filme 6',
        imdb: 'tt6547170',
        imagem: 'https://image.tmdb.org/t/p/w300/fRUhfGW4WSZ6XpJcMz6CwLgMAkS.jpg'
    },
    {
        titulo: 'Rogue',
        descricao: 'Descrição do filme 7',
        imdb: 'tt11576124',
        imagem: 'https://image.tmdb.org/t/p/w300/uOw5JD8IlD546feZ6oxbIjvN66P.jpg'
    },
    {
        titulo: 'Soldado Universal',
        descricao: 'Descrição do filme 8',
        imdb: 'tt0105698',
        imagem: 'https://image.tmdb.org/t/p/w300/3YvFMseLMzqmbFaFjo0Bt1W8j6B.jpg'
    },
    {
        titulo: 'Street Fighter: A Última Batalha',
        descricao: 'Descrição do filme 9',
        imdb: 'tt0111301',
        imagem: 'https://image.tmdb.org/t/p/w300/k7DOPUhlGLxRowC4VFY9n0wQTup.jpg'
    },
    {
        titulo: 'Maverick',
        descricao: 'Descrição do filme 10',
        imdb: 'tt0110478',
        imagem: 'https://image.tmdb.org/t/p/w300/cf4L3VW5nEHIaU3pOMZSIoBQmDP.jpg'
    },
    {
        titulo: 'Shadowboxer',
        descricao: 'Descrição do filme 11',
        imdb: 'tt0396857',
        imagem: 'https://image.tmdb.org/t/p/w300/eqXOZ5a3q8AAM8jvNaVQC8PAILk.jpg'
    },
    {
        titulo: 'Mar em Fúria',
        descricao: 'Descrição do filme 12',
        imdb: 'tt0177971',
        imagem: 'https://image.tmdb.org/t/p/w300/uFwxmphIAqnX8oDKhf3EOrvtW11.jpg'
    },
    {
        titulo: 'Diamante de Sangue',
        descricao: 'Descrição do filme 13',
        imdb: 'tt0450259',
        imagem: 'https://image.tmdb.org/t/p/w300/sy2EYPcxGJUBSdJdtMGBBarKG9c.jpg'
    },
    {
        titulo: 'John Carter: Entre Dois Mundos',
        descricao: 'Descrição do filme 14',
        imdb: 'tt0401729',
        imagem: 'https://image.tmdb.org/t/p/w300/jseasEaaWH3Dos7ph0NzpDj0INV.jpg'
    },
    {
        titulo: '2019: O Ano da Extinção',
        descricao: 'Descrição do filme 15',
        imdb: 'tt0433362',
        imagem: 'https://image.tmdb.org/t/p/w300/9o6VLpFWRyYkjQVSWJY4hWBTzrs.jpg'
    },
    {
        titulo: 'O Segredo do Abismo',
        descricao: 'Descrição do filme 16',
        imdb: 'tt0096754',
        imagem: 'https://image.tmdb.org/t/p/w300/iUmlHbK05F38QNnVDTDXa5qXFgF.jpg'
    },
    {
        titulo: 'Crocodilos: A Morte Te Espera',
        descricao: 'Descrição do filme 17',
        imdb: 'tt7978672',
        imagem: 'https://image.tmdb.org/t/p/w300/9I2ATBaOfwXo23vSBfEAQ3uZhGV.jpg'
    },
    {
        titulo: 'Queima de Arquivo',
        descricao: 'Descrição do filme 18',
        imdb: 'tt0116213',
        imagem: 'https://image.tmdb.org/t/p/w300/44MkE7h2Yx7QTN5uTCmx9Qo5Bzp.jpg'
    },
    {
        titulo: 'Independence Day',
        descricao: 'Descrição do filme 19',
        imdb: 'tt0116629',
        imagem: 'https://image.tmdb.org/t/p/w300/uXznnHJJ9sPSGkD1mtEZtblb9Nd.jpg'
    },
    {
        titulo: 'Ninja Assassino',
        descricao: 'Descrição do filme 20',
        imdb: 'tt1186367',
        imagem: 'https://image.tmdb.org/t/p/w300/h9brQOUyWROaa10HfG7wG2dDSB7.jpg'
    },
    {
        titulo: 'Jogo de Espiões',
        descricao: 'Descrição do filme 21',
        imdb: 'tt0266987',
        imagem: 'https://image.tmdb.org/t/p/w300/8eRA7GVsO3qvwu4sU0idFR0Qce3.jpg'
    },
    {
        titulo: 'Era Uma vez no México',
        descricao: 'Descrição do filme 22',
        imdb: 'tt0285823',
        imagem: 'https://image.tmdb.org/t/p/w300/cdSWDmDD7VVuBKlEar7H8abN1Ox.jpg'
    },
    {
        titulo: 'Um Tira da Pesada',
        descricao: 'Descrição do filme 23',
        imdb: 'tt0086960',
        imagem: 'https://image.tmdb.org/t/p/w300/4jInjxzwR14AulEFYB6x9c9oBKS.jpg'
    },
    {
        titulo: 'Um Tira da Pesada 2',
        descricao: 'Descrição do filme 24',
        imdb: 'tt0092644',
        imagem: 'https://image.tmdb.org/t/p/w300/rGG30UP6IYG7Lq0zSr6wRT2h3Ua.jpg'
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
