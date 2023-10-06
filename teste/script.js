var filmes = [
    {
        titulo: 'Do Not Disturb',
        descricao: 'Descrição do filme 1',
        imdb: 'tt23049270',
        imagem: 'https://image.tmdb.org/t/p/w300/gyuMSazHAcTSZRhe17NFMXPXOgi.jpg'
    },
    {
        titulo: 'Flora e Filho: Música em Família',
        descricao: 'Descrição do filme 2',
        imdb: 'tt25471950',
        imagem: 'https://image.tmdb.org/t/p/w300/i1Xv3pmIwEXmrbnMOwl6BExjV9a.jpg'
    },
    {
        titulo: 'Jovens Bruxas',
        descricao: 'Descrição do filme 3',
        imdb: 'tt0115963',
        imagem: 'https://image.tmdb.org/t/p/w300/yPZHvXmOBbkVKUHZO7gz1ho3TFP.jpg'
    },
    {
        titulo: 'Movimento de Jesus',
        descricao: 'Descrição do filme 4',
        imdb: 'tt10098448',
        imagem: 'https://image.tmdb.org/t/p/w300/m96gOrdyL5jC3u3Znaqq4AG1V8T.jpg'
    },
    {
        titulo: 'O Caçador de Ratos',
        descricao: 'Descrição do filme 5',
        imdb: 'tt28912858',
        imagem: 'https://image.tmdb.org/t/p/w300/5fHwVtgJLeOiaKENJ2s8BPY6Rvv.jpg'
    },
    {
        titulo: 'O Engenheiro',
        descricao: 'Descrição do filme 6',
        imdb: 'tt26450742',
        imagem: 'https://image.tmdb.org/t/p/w300/daEvqdnGCrbk5yMkYkxoDpNuCkP.jpg'
    },
    {
        titulo: 'O Monstro que vive em Mim',
        descricao: 'Descrição do filme 7',
        imdb: 'tt17202164',
        imagem: 'https://image.tmdb.org/t/p/w300/fDBAZRH4YiqtOrcTwmwbjz4KsXe.jpg'
    },
    {
        titulo: 'One Day as a Lion',
        descricao: 'Descrição do filme 8',
        imdb: 'tt15783426',
        imagem: 'https://image.tmdb.org/t/p/w300/cxSKca4dNlk7O7PMiEYT203vlIw.jpg'
    },
    {
        titulo: 'Som da Liberdade',
        descricao: 'Descrição do filme 9',
        imdb: 'tt7599146',
        imagem: 'https://image.tmdb.org/t/p/w300/2BWhcrlPr6UvSJy5D044Ikq2QxH.jpg'
    },
    {
        titulo: '살수',
        descricao: 'Descrição do filme 10',
        imdb: 'tt21109580',
        imagem: 'https://image.tmdb.org/t/p/w300/B1WdiNIa8qQNrZZ7pUXltZoFpr.jpg'
    },
    {
        titulo: 'Resistência',
        descricao: 'Descrição do filme 11',
        imdb: 'tt11858890',
        imagem: 'https://image.tmdb.org/t/p/w300/187OBBT5oMQ2XPXgx9F8JhlycvK.jpg'
    },
    {
        titulo: 'Zerando a Vida',
        descricao: 'Descrição do filme 12',
        imdb: 'tt4769836',
        imagem: 'https://image.tmdb.org/t/p/w300/moWEJfrNnywDAJAiFZ1r2OfF5s4.jpg'
    },
    {
        titulo: 'Camaleões',
        descricao: 'Descrição do filme 13',
        imdb: 'tt13274016',
        imagem: 'https://image.tmdb.org/t/p/w300/2FKm87VF8VKkIFJtRoPsWiux4sr.jpg'
    },
    {
        titulo: 'Coração de Neon',
        descricao: 'Descrição do filme 14',
        imdb: 'tt26776046',
        imagem: 'https://image.tmdb.org/t/p/w300/ucT1MBlwoA0cLvZvjLrZsMaWmBq.jpg'
    },
    {
        titulo: 'Discurso Oculto',
        descricao: 'Descrição do filme 15',
        imdb: 'tt28455910',
        imagem: 'https://image.tmdb.org/t/p/w300/a3mMwp42qXaA4DLNcXvNO0u01Pi.jpg'
    },
    {
        titulo: 'Jogos Mortais X',
        descricao: 'Descrição do filme 16',
        imdb: 'tt21807222',
        imagem: 'https://image.tmdb.org/t/p/w300/8s2gd1BZbWLSKEnvYsM8xusbjMl.jpg'
    },
    {
        titulo: 'O Amor Está no Ar',
        descricao: 'Descrição do filme 17',
        imdb: 'tt28073548',
        imagem: 'https://image.tmdb.org/t/p/w300/wFZ0gxa9fxaA7gk6v5nH1hyYfDi.jpg'
    },
    {
        titulo: 'Barbie: Skipper e a Grande Aventura de Babás',
        descricao: 'Descrição do filme 18',
        imdb: 'tt26931203',
        imagem: 'https://image.tmdb.org/t/p/w300/t8bt9rrcgK4K1G5VxeO8xkz9RQD.jpg'
    },
    {
        titulo: 'Mona Lisa e a Lua de Sangue',
        descricao: 'Descrição do filme 19',
        imdb: 'tt8760670',
        imagem: 'https://image.tmdb.org/t/p/w300/jnszI3HhHQEs5VOprDaQU0j670J.jpg'
    },
    {
        titulo: 'Alerta de Spoiler',
        descricao: 'Descrição do filme 20',
        imdb: 'tt7775720',
        imagem: 'https://image.tmdb.org/t/p/w300/7VGcGcH8RPIQ6y9UrnNXbzXjMMv.jpg'
    },
    {
        titulo: 'Breaking Point: Paixão à Dança',
        descricao: 'Descrição do filme 21',
        imdb: 'tt12053110',
        imagem: 'https://image.tmdb.org/t/p/w300/k7ijpc3yvoynohvUGzI9MOmFoOA.jpg'
    },
    {
        titulo: 'Passivonas',
        descricao: 'Descrição do filme 22',
        imdb: 'tt17527468',
        imagem: 'https://image.tmdb.org/t/p/w300/avh6gL9XrRBErOQpmsNIj6TGS0a.jpg'
    },
    {
        titulo: 'À Espreita',
        descricao: 'Descrição do filme 23',
        imdb: 'tt8270664',
        imagem: 'https://image.tmdb.org/t/p/w300/qfglisVh5Nmo1nGYCoMzqyZUWcz.jpg'
    },
    {
        titulo: 'Perdida',
        descricao: 'Descrição do filme 24',
        imdb: 'tt6415842',
        imagem: 'https://image.tmdb.org/t/p/w300/yYVLZgee1MpLGAB4YMneCdWLpEq.jpg'
    },

    {
        titulo: 'Scooby-Doo e Krypto - O Supercão',
        descricao: 'Descrição do filme 1',
        imdb: 'tt28508231',
        imagem: 'https://image.tmdb.org/t/p/w300/ntMOnvlYYnio7Fx3xqBu9B1Sz7f.jpg'
    },
    {
        titulo: 'A Incrível História de Henry Sugar',
        descricao: 'Descrição do filme 2',
        imdb: 'tt16968450',
        imagem: 'https://image.tmdb.org/t/p/w300/azRL9bmByicPRzP0ljDNzFCwyUX.jpg'
    },
    {
        titulo: 'Carga Máxima',
        descricao: 'Descrição do filme 3',
        imdb: 'tt16427938',
        imagem: 'https://image.tmdb.org/t/p/w300/ocKoEvCPX809gWsyEXRP2zTViY5.jpg'
    },
    {
        titulo: 'O Morro dos Ventos Uivantes',
        descricao: 'Descrição do filme 4',
        imdb: 'tt0104181',
        imagem: 'https://image.tmdb.org/t/p/w300/byaEMPkCvLDE7ZsrhH8w4KAIjH2.jpg'
    },
    {
        titulo: 'Os Mercenários 4',
        descricao: 'Descrição do filme 5',
        imdb: 'tt3291150',
        imagem: 'https://image.tmdb.org/t/p/w300/dQxlUkhKGILgq9jbVEe3WPaiW2q.jpg'
    },
    {
        titulo: 'Good Boy',
        descricao: 'Descrição do filme 6',
        imdb: 'tt19705884',
        imagem: 'https://image.tmdb.org/t/p/w300/9DPG1gxLwV2oyFdHq3SnISsWbse.jpg'
    },
    {
        titulo: 'The Lesson',
        descricao: 'Descrição do filme 7',
        imdb: 'tt20358284',
        imagem: 'https://image.tmdb.org/t/p/w300/ktB7bt09HRQT701hVS8C23tkN6N.jpg'
    },
    {
        titulo: 'O Compositor',
        descricao: 'Descrição do filme 8',
        imdb: 'tt9724734',
        imagem: 'https://image.tmdb.org/t/p/w300/eTUmWjp7DhARIfJLbw5DuWrD0Lb.jpg'
    },
    {
        titulo: 'Lançando Segundas Chances',
        descricao: 'Descrição do filme 9',
        imdb: 'tt27549543',
        imagem: 'https://image.tmdb.org/t/p/w300/4yGhktbhmLixEfpK3yrRFHXdL7W.jpg'
    },
    {
        titulo: 'Island Escape',
        descricao: 'Descrição do filme 10',
        imdb: 'tt27564994',
        imagem: 'https://image.tmdb.org/t/p/w300/5TA3AmwWKasVMRFGXZk0gRv2Oz6.jpg'
    },
    {
        titulo: 'Desculpa, Mas Vou Te Matar',
        descricao: 'Descrição do filme 11',
        imdb: 'tt3442126',
        imagem: 'https://image.tmdb.org/t/p/w300/qtViCHlPDZ4YXfIIiZKZefeao1Z.jpg'
    },
    {
        titulo: 'Cassandro',
        descricao: 'Descrição do filme 12',
        imdb: 'tt14954534',
        imagem: 'https://image.tmdb.org/t/p/w300/hWHwWsKVr5GkmOI1hWgHZBYkRwi.jpg'
    },
    {
        titulo: 'A Noite das Bruxas',
        descricao: 'Descrição do filme 13',
        imdb: 'tt22687790',
        imagem: 'https://image.tmdb.org/t/p/w300/7dLQmoNjMBmLUIrn4ymLe4nQId8.jpg'
    },
    {
        titulo: 'Amor em South Beach',
        descricao: 'Descrição do filme 14',
        imdb: 'tt15214710',
        imagem: 'https://image.tmdb.org/t/p/w300/h517jl5N8y6wHUdD4GUveLy58wI.jpg'
    },
    {
        titulo: 'A Aposta',
        descricao: 'Descrição do filme 15',
        imdb: 'tt8806252',
        imagem: 'https://image.tmdb.org/t/p/w300/bMfnxFHXD5VBh6m0RBUkZoaYIYc.jpg'
    },
    {
        titulo: 'Noite Sangrenta',
        descricao: 'Descrição do filme 16',
        imdb: 'tt19848268',
        imagem: 'https://image.tmdb.org/t/p/w300/kgND5yAax4aT4UXEXrEsZavlHDx.jpg'
    },
    {
        titulo: 'After: Para Sempre',
        descricao: 'Descrição do filme 17',
        imdb: 'tt15334488',
        imagem: 'https://image.tmdb.org/t/p/w300/tRjzdNiFHda6lrXySOQPyY3OtCA.jpg'
    },
    {
        titulo: '10 Dias de um Homem Bom',
        descricao: 'Descrição do filme 18',
        imdb: 'tt23334464',
        imagem: 'https://image.tmdb.org/t/p/w300/ihMCcc0vBQQyphiaoyoTvpJlTPi.jpg'
    },
    {
        titulo: 'Em Todas as Partes',
        descricao: 'Descrição do filme 19',
        imdb: 'tt12616964',
        imagem: 'https://image.tmdb.org/t/p/w300/pJ0UlaKXi0yuAjPV4hgG5huJvFl.jpg'
    },
    {
        titulo: 'Sayen',
        descricao: 'Descrição do filme 20',
        imdb: 'tt19869024',
        imagem: 'https://image.tmdb.org/t/p/w300/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg'
    },
    {
        titulo: 'A Lista da Vingança',
        descricao: 'Descrição do filme 21',
        imdb: 'tt24083908',
        imagem: 'https://image.tmdb.org/t/p/w300/r8vVQ0blfRsRth1rCjNt45pY293.jpg'
    },
    {
        titulo: 'Carmen',
        descricao: 'Descrição do filme 22',
        imdb: 'tt6875952',
        imagem: 'https://image.tmdb.org/t/p/w300/oc07MMSumgytiBT1fVTuEMDjUQA.jpg'
    },
    {
        titulo: 'Como Superar um Coração em Pedaços',
        descricao: 'Descrição do filme 23',
        imdb: 'tt28765467',
        imagem: 'https://image.tmdb.org/t/p/w300/1fI9VlE7pK0xZ7KtpG65vTG5c0p.jpg'
    },
    {
        titulo: 'Inquietação',
        descricao: 'Descrição do filme 24',
        imdb: 'tt25869142',
        imagem: 'https://image.tmdb.org/t/p/w300/j8FuUkC5doaNfmFq21HIhp0u3eJ.jpg'
    },


    {
        titulo: 'A Justiceira 41',
        descricao: 'Neste thriller noir cheio de estilo, a talentosa e irreverente dançarina Mouse investiga o desaparecimento de suas amigas da boate e não vai descansar enquanto não encontrar justiça.',
        imdb: 'tt5859970',
        imagem: 'https://image.tmdb.org/t/p/w300/2FexbKMBnFgdeik5d3tF9hYtxtR.jpg'
    },
    {
        titulo: 'Arquivos da Perversão: Os Abusos na Boy Scouts of America 42',
        descricao: 'Sobreviventes, informantes e especialistas falam sobre os abusos sexuais ocultados por décadas pela Boy Scouts of America, e suas consequências.',
        imdb: 'tt28660814',
        imagem: 'https://image.tmdb.org/t/p/w300/dP6QJ62LQL8xPqBTueXRYILJKm0.jpg'
    },
    {
        titulo: 'Apocalypto 43',
        descricao: 'Jaguar Paw (Rudy Youngblood) levava uma vida tranquila, que foi interrompida devido à uma invasão. Os governantes de um império maia em declínio acreditavam que a chave para a prosperidade seria construir mais templos e realizar mais sacrifícios humanos. Jaguar é capturado para ser um destes sacrifícios, mas consegue escapar por acaso. Agora, guiado apenas pelo amor que sente por sua esposa e pela filha, ele realiza uma corrida desesperada para chegar em casa e salvar sua família.',
        imdb: 'tt0472043',
        imagem: 'https://image.tmdb.org/t/p/w300/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg'
    },
    {
        titulo: 'The Unlikely Pilgrimage of Harold Fry 44',
        descricao: 'Haroldo é um homem comum que passou pela vida, vivendo à margem, até que um dia vai postar uma carta e continua andando.',
        imdb: 'tt14097206',
        imagem: 'https://image.tmdb.org/t/p/w300/qTIa7e5NINQ2oIHY9UXCk7fyVIC.jpg'
    },

    {
        titulo: 'A Justiceira 45',
        descricao: 'Neste thriller noir cheio de estilo, a talentosa e irreverente dançarina Mouse investiga o desaparecimento de suas amigas da boate e não vai descansar enquanto não encontrar justiça.',
        imdb: 'tt5859970',
        imagem: 'https://image.tmdb.org/t/p/w300/2FexbKMBnFgdeik5d3tF9hYtxtR.jpg'
    },
    {
        titulo: 'Arquivos da Perversão: Os Abusos na Boy Scouts of America 46',
        descricao: 'Sobreviventes, informantes e especialistas falam sobre os abusos sexuais ocultados por décadas pela Boy Scouts of America, e suas consequências.',
        imdb: 'tt28660814',
        imagem: 'https://image.tmdb.org/t/p/w300/dP6QJ62LQL8xPqBTueXRYILJKm0.jpg'
    },
    {
        titulo: 'Apocalypto 47',
        descricao: 'Jaguar Paw (Rudy Youngblood) levava uma vida tranquila, que foi interrompida devido à uma invasão. Os governantes de um império maia em declínio acreditavam que a chave para a prosperidade seria construir mais templos e realizar mais sacrifícios humanos. Jaguar é capturado para ser um destes sacrifícios, mas consegue escapar por acaso. Agora, guiado apenas pelo amor que sente por sua esposa e pela filha, ele realiza uma corrida desesperada para chegar em casa e salvar sua família.',
        imdb: 'tt0472043',
        imagem: 'https://image.tmdb.org/t/p/w300/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg'
    },
    {
        titulo: 'The Unlikely Pilgrimage of Harold Fry 48',
        descricao: 'Haroldo é um homem comum que passou pela vida, vivendo à margem, até que um dia vai postar uma carta e continua andando.',
        imdb: 'tt14097206',
        imagem: 'https://image.tmdb.org/t/p/w300/qTIa7e5NINQ2oIHY9UXCk7fyVIC.jpg'
    },

    {
        titulo: 'A Justiceira 49',
        descricao: 'Neste thriller noir cheio de estilo, a talentosa e irreverente dançarina Mouse investiga o desaparecimento de suas amigas da boate e não vai descansar enquanto não encontrar justiça.',
        imdb: 'tt5859970',
        imagem: 'https://image.tmdb.org/t/p/w300/2FexbKMBnFgdeik5d3tF9hYtxtR.jpg'
    },
    {
        titulo: 'Arquivos da Perversão: Os Abusos na Boy Scouts of America 50',
        descricao: 'Sobreviventes, informantes e especialistas falam sobre os abusos sexuais ocultados por décadas pela Boy Scouts of America, e suas consequências.',
        imdb: 'tt28660814',
        imagem: 'https://image.tmdb.org/t/p/w300/dP6QJ62LQL8xPqBTueXRYILJKm0.jpg'
    },
    {
        titulo: 'Apocalypto 51',
        descricao: 'Jaguar Paw (Rudy Youngblood) levava uma vida tranquila, que foi interrompida devido à uma invasão. Os governantes de um império maia em declínio acreditavam que a chave para a prosperidade seria construir mais templos e realizar mais sacrifícios humanos. Jaguar é capturado para ser um destes sacrifícios, mas consegue escapar por acaso. Agora, guiado apenas pelo amor que sente por sua esposa e pela filha, ele realiza uma corrida desesperada para chegar em casa e salvar sua família.',
        imdb: 'tt0472043',
        imagem: 'https://image.tmdb.org/t/p/w300/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg'
    },
    {
        titulo: 'The Unlikely Pilgrimage of Harold Fry 52',
        descricao: 'Haroldo é um homem comum que passou pela vida, vivendo à margem, até que um dia vai postar uma carta e continua andando.',
        imdb: 'tt14097206',
        imagem: 'https://image.tmdb.org/t/p/w300/qTIa7e5NINQ2oIHY9UXCk7fyVIC.jpg'
    },

    {
        titulo: 'A Justiceira 53',
        descricao: 'Neste thriller noir cheio de estilo, a talentosa e irreverente dançarina Mouse investiga o desaparecimento de suas amigas da boate e não vai descansar enquanto não encontrar justiça.',
        imdb: 'tt5859970',
        imagem: 'https://image.tmdb.org/t/p/w300/2FexbKMBnFgdeik5d3tF9hYtxtR.jpg'
    },
    {
        titulo: 'Arquivos da Perversão: Os Abusos na Boy Scouts of America 54',
        descricao: 'Sobreviventes, informantes e especialistas falam sobre os abusos sexuais ocultados por décadas pela Boy Scouts of America, e suas consequências.',
        imdb: 'tt28660814',
        imagem: 'https://image.tmdb.org/t/p/w300/dP6QJ62LQL8xPqBTueXRYILJKm0.jpg'
    },
    {
        titulo: 'Apocalypto 55',
        descricao: 'Jaguar Paw (Rudy Youngblood) levava uma vida tranquila, que foi interrompida devido à uma invasão. Os governantes de um império maia em declínio acreditavam que a chave para a prosperidade seria construir mais templos e realizar mais sacrifícios humanos. Jaguar é capturado para ser um destes sacrifícios, mas consegue escapar por acaso. Agora, guiado apenas pelo amor que sente por sua esposa e pela filha, ele realiza uma corrida desesperada para chegar em casa e salvar sua família.',
        imdb: 'tt0472043',
        imagem: 'https://image.tmdb.org/t/p/w300/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg'
    },
    {
        titulo: 'The Unlikely Pilgrimage of Harold Fry 56',
        descricao: 'Haroldo é um homem comum que passou pela vida, vivendo à margem, até que um dia vai postar uma carta e continua andando.',
        imdb: 'tt14097206',
        imagem: 'https://image.tmdb.org/t/p/w300/qTIa7e5NINQ2oIHY9UXCk7fyVIC.jpg'
    },

    {
        titulo: 'A Justiceira 57',
        descricao: 'Neste thriller noir cheio de estilo, a talentosa e irreverente dançarina Mouse investiga o desaparecimento de suas amigas da boate e não vai descansar enquanto não encontrar justiça.',
        imdb: 'tt5859970',
        imagem: 'https://image.tmdb.org/t/p/w300/2FexbKMBnFgdeik5d3tF9hYtxtR.jpg'
    },
    {
        titulo: 'Arquivos da Perversão: Os Abusos na Boy Scouts of America 58',
        descricao: 'Sobreviventes, informantes e especialistas falam sobre os abusos sexuais ocultados por décadas pela Boy Scouts of America, e suas consequências.',
        imdb: 'tt28660814',
        imagem: 'https://image.tmdb.org/t/p/w300/dP6QJ62LQL8xPqBTueXRYILJKm0.jpg'
    },
    {
        titulo: 'Apocalypto 59',
        descricao: 'Jaguar Paw (Rudy Youngblood) levava uma vida tranquila, que foi interrompida devido à uma invasão. Os governantes de um império maia em declínio acreditavam que a chave para a prosperidade seria construir mais templos e realizar mais sacrifícios humanos. Jaguar é capturado para ser um destes sacrifícios, mas consegue escapar por acaso. Agora, guiado apenas pelo amor que sente por sua esposa e pela filha, ele realiza uma corrida desesperada para chegar em casa e salvar sua família.',
        imdb: 'tt0472043',
        imagem: 'https://image.tmdb.org/t/p/w300/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg'
    },
    {
        titulo: 'The Unlikely Pilgrimage of Harold Fry 60',
        descricao: 'Haroldo é um homem comum que passou pela vida, vivendo à margem, até que um dia vai postar uma carta e continua andando.',
        imdb: 'tt14097206',
        imagem: 'https://image.tmdb.org/t/p/w300/qTIa7e5NINQ2oIHY9UXCk7fyVIC.jpg'
    },

    {
        titulo: 'A Justiceira 61',
        descricao: 'Neste thriller noir cheio de estilo, a talentosa e irreverente dançarina Mouse investiga o desaparecimento de suas amigas da boate e não vai descansar enquanto não encontrar justiça.',
        imdb: 'tt5859970',
        imagem: 'https://image.tmdb.org/t/p/w300/2FexbKMBnFgdeik5d3tF9hYtxtR.jpg'
    },
    {
        titulo: 'Arquivos da Perversão: Os Abusos na Boy Scouts of America 62',
        descricao: 'Sobreviventes, informantes e especialistas falam sobre os abusos sexuais ocultados por décadas pela Boy Scouts of America, e suas consequências.',
        imdb: 'tt28660814',
        imagem: 'https://image.tmdb.org/t/p/w300/dP6QJ62LQL8xPqBTueXRYILJKm0.jpg'
    },
    {
        titulo: 'Apocalypto 63',
        descricao: 'Jaguar Paw (Rudy Youngblood) levava uma vida tranquila, que foi interrompida devido à uma invasão. Os governantes de um império maia em declínio acreditavam que a chave para a prosperidade seria construir mais templos e realizar mais sacrifícios humanos. Jaguar é capturado para ser um destes sacrifícios, mas consegue escapar por acaso. Agora, guiado apenas pelo amor que sente por sua esposa e pela filha, ele realiza uma corrida desesperada para chegar em casa e salvar sua família.',
        imdb: 'tt0472043',
        imagem: 'https://image.tmdb.org/t/p/w300/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg'
    },
    {
        titulo: 'The Unlikely Pilgrimage of Harold Fry 64',
        descricao: 'Haroldo é um homem comum que passou pela vida, vivendo à margem, até que um dia vai postar uma carta e continua andando.',
        imdb: 'tt14097206',
        imagem: 'https://image.tmdb.org/t/p/w300/qTIa7e5NINQ2oIHY9UXCk7fyVIC.jpg'
    },
   
];

// Função para adicionar filmes à página
function adicionarFilmesNaPagina(pagina) {
    var inicio = pagina * 20;
    var fim = Math.min(inicio + 20, filmes.length);
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
