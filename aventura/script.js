var filmes = [
    {
        titulo: 'Passageiro Acidental',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt9203694',
        imagem: 'https://image.tmdb.org/t/p/w300/n91IdvTOxogvs08HN0mYK7nY5T7.jpg'
    },
    {
        titulo: 'Esquadrão Suicida',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt1386697',
        imagem: 'https://image.tmdb.org/t/p/w300/4UNw4Z105Eke1b4Eb1zldym9R6.jpg'
    },
    {
        titulo: 'Aladdin - O Retorno de Jafar',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0107952',
        imagem: 'https://image.tmdb.org/t/p/w300/f7cOd8UI3QJepdIU26Pi300fjs3.jpg'
    },
    {
        titulo: 'Aladdin e os 40 Ladrões',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt0115491',
        imagem: 'https://image.tmdb.org/t/p/w300/eC1NCsOkbCmZOBHLgut8sDepZ52.jpg'
    },
    {
        titulo: 'Aladdin',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt6139732',
        imagem: 'https://image.tmdb.org/t/p/w300/1d8HShFOmSWDwvqtvPEZqzlZbYl.jpg'
    },
    {
        titulo: 'Aladdin',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0103639',
        imagem: 'https://image.tmdb.org/t/p/w300/oakAd8syy7jNQ4ZoaAGCQkTqcOV.jpg'
    },
    {
        titulo: 'Caçados',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0468536',
        imagem: 'https://image.tmdb.org/t/p/w300/hOuF1Egtx151TgJKuFetK9NkEHy.jpg'
    },
    {
        titulo: 'O Senhor dos Anéis',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0077869',
        imagem: 'https://image.tmdb.org/t/p/w300/3rSiabvjCGjkCTHSB3eYgDKKNv2.jpg'
    },
    {
        titulo: 'O Senhor dos Anéis: O Retorno do Rei',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0167260',
        imagem: 'https://image.tmdb.org/t/p/w300/izPNMzffsgZUvlbiYlPxjFr3TAa.jpg'
    },
    {
        titulo: 'O Senhor dos Anéis: As Duas Torres',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0167261',
        imagem: 'https://image.tmdb.org/t/p/w300/20eUL6eN89SM0U7KPDw8iR82mOT.jpg'
    },
    {
        titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0120737',
        imagem: 'https://image.tmdb.org/t/p/w300/omoMXT3Z7XrQwRZ2OGJGNWbdeEl.jpg'
    },
    {
        titulo: 'EncrenCão',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt6772524',
        imagem: 'https://image.tmdb.org/t/p/w300/i81gRwi056tQCjnLL9PKnZ6X3YW.jpg'
    },
    {
        titulo: 'Lendas da Paixão',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0110322',
        imagem: 'https://image.tmdb.org/t/p/w300/uVSUm5Ad0mDF2cASwFNM5AuBdZF.jpg'
    },
    {
        titulo: 'Marte Precisa de Mães',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt1305591',
        imagem: 'https://image.tmdb.org/t/p/w300/uCT6HwfN2xPvmrIT7OCxpKnNFtQ.jpg'
    },
    {
        titulo: 'Alice e Peter: Onde Nascem os Sonhos',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt5714470',
        imagem: 'https://image.tmdb.org/t/p/w300/pGTKgXQyJ1Tj1OUaUZVUWYoPVlQ.jpg'
    },
    {
        titulo: 'Goosebumps 2: Halloween Assombrado',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt5664636',
        imagem: 'https://image.tmdb.org/t/p/w300/iP5MbYaPiD5zIUmLGVEhIA83A9A.jpg'
    },
    {
        titulo: 'Goosebumps: Monstros e Arrepios',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt1051904',
        imagem: 'https://image.tmdb.org/t/p/w300/d1rkpUr64IY0ARTyWU6MrHJD2Wt.jpg'
    },
    {
        titulo: 'Trolls 2',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt6587640',
        imagem: 'https://image.tmdb.org/t/p/w300/4aOyZTiybSidipdjtv7xpeO4TZp.jpg'
    },
    {
        titulo: 'O Gato de Botas: Os Três Diabos',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt2268617',
        imagem: 'https://image.tmdb.org/t/p/w300/ptvbHUWpU8Nh6vrmSvjx4ESDgfC.jpg'
    },
    {
        titulo: 'Kung Fu Panda',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0441773',
        imagem: 'https://image.tmdb.org/t/p/w300/xCn3VOST64XpOA8x0gaQkQiZtZY.jpg'
    },
    {
        titulo: 'Kung Fu Panda 3',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt2267968',
        imagem: 'https://image.tmdb.org/t/p/w300/pXYJjUNtnLfXVKGmqi1nfGornri.jpg'
    },
    {
        titulo: 'Como Treinar o Seu Dragão',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0892769',
        imagem: 'https://image.tmdb.org/t/p/w300/spZbO7Ss6U9W5zSHjtH6FvXvCF7.jpg'
    },
    {
        titulo: 'Como Treinar o seu Dragão 2',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt1646971',
        imagem: 'https://image.tmdb.org/t/p/w300/brmRmSagvnQVgIw1lBF4CaKpaoU.jpg'
    },
    {
        titulo: 'Como Treinar o Seu Dragão 3',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt2386490',
        imagem: 'https://image.tmdb.org/t/p/w300/5uqxMHM7YLKk6yni4bOE0D6DVz8.jpg'
    },
    {
        titulo: 'Como Treinar o Seu Dragão: Homecoming',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt11112140',
        imagem: 'https://image.tmdb.org/t/p/w300/kXj2Qrfm994yLeuADqbOieU1mUH.jpg'
    },
    {
        titulo: 'Jungle Cruise',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0870154',
        imagem: 'https://image.tmdb.org/t/p/w300/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg'
    },
    {
        titulo: 'Vingadores: Ultimato',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt4154796',
        imagem: 'https://image.tmdb.org/t/p/w300/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg'
    },
    {
        titulo: 'Vingadores: Era de Ultron',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt2395427',
        imagem: 'https://image.tmdb.org/t/p/w300/vGIIl89vglo66yUfbuTxzNAs4y5.jpg'
    },
    {
        titulo: 'Os Vingadores: The Avengers',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0848228',
        imagem: 'https://image.tmdb.org/t/p/w300/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg'
    },
    {
        titulo: '007: Sem Tempo para Morrer',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt2382320',
        imagem: 'https://image.tmdb.org/t/p/w300/luE0KG1rWfUptbgNtlNtL5sihyd.jpg'
    },
    {
        titulo: 'O Auto da Compadecida',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0271383',
        imagem: 'https://image.tmdb.org/t/p/w300/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg'
    },
    {
        titulo: 'Harry Potter e as Relíquias da Morte - Parte 2',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt1201607',
        imagem: 'https://image.tmdb.org/t/p/w300/yD3VosOVW8WxPUzBDpEdzfv5pGx.jpg'
    },
    {
        titulo: 'Harry Potter e as Relíquias da Morte - Parte 1',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0926084',
        imagem: 'https://image.tmdb.org/t/p/w300/67FVFOTaeBUQnimhCWpUkDawDct.jpg'
    },
    {
        titulo: 'Harry Potter e o Enigma do Príncipe',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0417741',
        imagem: 'https://image.tmdb.org/t/p/w300/hTQQ5l9mxA3Rob8PTyvrNNGuj6y.jpg'
    },
    {
        titulo: 'Harry Potter e a Ordem da Fênix',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0373889',
        imagem: 'https://image.tmdb.org/t/p/w300/tIf9aUyNljda9MG1pjlOLHCZ3b0.jpg'
    },
    {
        titulo: 'Harry Potter e o Cálice de Fogo',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0330373',
        imagem: 'https://image.tmdb.org/t/p/w300/5oWB3hjzyECRBAjgWkmZinxl9qA.jpg'
    },
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0304141',
        imagem: 'https://image.tmdb.org/t/p/w300/1HdMUghqlgOIvbsU9ZtO40IPRzl.jpg'
    },
    {
        titulo: 'Harry Potter e a Câmara Secreta',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0295297',
        imagem: 'https://image.tmdb.org/t/p/w300/811j0Jf2D0mK1U6RxXJoZgOB29n.jpg'
    },
    {
        titulo: 'Harry Potter e a Pedra Filosofal',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0241527',
        imagem: 'https://image.tmdb.org/t/p/w300/l1FfRmKRNXRSqXT5GlMo16MX2LX.jpg'
    },
    {
        titulo: 'Amor e Monstros',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt2222042',
        imagem: 'https://image.tmdb.org/t/p/w300/hnz5wRqeYKlugGbC7RZxC7DAiED.jpg'
    },
    {
        titulo: 'Animais Fantásticos: Os Crimes de Grindelwald',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt4123430',
        imagem: 'https://image.tmdb.org/t/p/w300/oANEhQDQ3eB8tcqRPSzABim8oNg.jpg'
    },
    {
        titulo: 'Animais Fantásticos e Onde Habitam',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt3183660',
        imagem: 'https://image.tmdb.org/t/p/w300/sGkt9ekX5cgRYKRIiJM27Xp3piR.jpg'
    },
    {
        titulo: 'G.I. Joe: Retaliação',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt1583421',
        imagem: 'https://image.tmdb.org/t/p/w300/pMDcTdeuAtCPJKee8YdOP7Y8ElT.jpg'
    },
    {
        titulo: 'Finch',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt3420504',
        imagem: 'https://image.tmdb.org/t/p/w300/jKuDyqx7jrjiR9cDzB5pxzhJAdv.jpg'
    },
    {
        titulo: 'Trovão Tropical',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0942385',
        imagem: 'https://image.tmdb.org/t/p/w300/jCmzgf1SQ9eCpN6GloV64XtQKAK.jpg'
    },
    {
        titulo: 'Monstros vs Alienígenas',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0892782',
        imagem: 'https://image.tmdb.org/t/p/w300/vs70zYYuEbBTAHxqz5AyUBxbYUR.jpg'
    },
    {
        titulo: 'Liga da Justiça de Zack Snyder',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt12361974',
        imagem: 'https://image.tmdb.org/t/p/w300/ArWn6gCi61b3b3hclD2L0LOk66k.jpg'
    },
    {
        titulo: 'Ghostbusters: Mais Além',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt4513678',
        imagem: 'https://image.tmdb.org/t/p/w300/719aIhGrTrJ0yzkZ806Ea4rbonV.jpg'
    },
    {
        titulo: 'A Sabiá Sabiazinha',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt11332850',
        imagem: 'https://image.tmdb.org/t/p/w300/5xQuLvSpUhsa4NYzkA4yyOWwLL7.jpg'
    },
    {
        titulo: 'Homem-Aranha: Longe de Casa',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt6320628',
        imagem: 'https://image.tmdb.org/t/p/w300/tX0o4AdHpidgniTWwfzK0dNTKrc.jpg'
    },
    {
        titulo: 'Homem-Aranha: De Volta ao Lar',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt2250912',
        imagem: 'https://image.tmdb.org/t/p/w300/9Fgs1ewIZiBBTto1XDHeBN0D8ug.jpg'
    },
    {
        titulo: 'Shang-Chi e a Lenda dos Dez Anéis',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt9376612',
        imagem: 'https://image.tmdb.org/t/p/w300/ArrOBeio968bUuUOtEpKa1teIh4.jpg'
    },
    {
        titulo: 'MIB - Homens de Preto II',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0120912',
        imagem: 'https://image.tmdb.org/t/p/w300/1zoknLsDO3M3aYLzfs3wIvXDTfC.jpg'
    },
    {
        titulo: 'Piratas Pirados!',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt1430626',
        imagem: 'https://image.tmdb.org/t/p/w300/1GB1sV2EdfJSLTQ5z6P2jPBjb63.jpg'
    },
    {
        titulo: 'A Múmia - Tumba do Imperador Dragão',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0859163',
        imagem: 'https://image.tmdb.org/t/p/w300/lHv4SqGuQ6K9Z0H6E5fkU7yZlxD.jpg'
    },
    {
        titulo: 'O Retorno da Múmia',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0209163',
        imagem: 'https://image.tmdb.org/t/p/w300/trLVOBJxgq4K4Ei2OJFZgIeaPzB.jpg'
    },
    {
        titulo: 'A Múmia',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt2345759',
        imagem: 'https://image.tmdb.org/t/p/w300/vH9Hd7njePEe6xnRrYYaDmF2yqX.jpg'
    },
    {
        titulo: 'A Múmia',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0120616',
        imagem: 'https://image.tmdb.org/t/p/w300/x9WtRo3zf7p3K7ERdlpqlRgtYU6.jpg'
    },
    {
        titulo: 'Quarteto Fantástico',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt1502712',
        imagem: 'https://image.tmdb.org/t/p/w300/XJ8jZ4hGyusnN41NnxR0vv5ghS.jpg'
    },
    {
        titulo: 'A Gente Se Vê Ontem',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt8743064',
        imagem: 'https://image.tmdb.org/t/p/w300/sE2MSSjAHVU8gOz2SPQMaTQtO9c.jpg'
    },
    {
        titulo: 'Dora e a Cidade Perdida',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt7547410',
        imagem: 'https://image.tmdb.org/t/p/w300/zn6uvrCTymyl9dYkoU2XDODC8IC.jpg'
    },
    {
        titulo: 'Mentes Sombrias',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt4073790',
        imagem: 'https://image.tmdb.org/t/p/w300/qbh5F9mWPFbbNsdXkjHMYmjncqQ.jpg'
    },
    {
        titulo: 'A 5ª Onda',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt2304933',
        imagem: 'https://image.tmdb.org/t/p/w300/asPv5M6bUn270EcUXUnEnC8CkB7.jpg'
    },
    {
        titulo: 'Festa da Salsicha',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt1700841',
        imagem: 'https://image.tmdb.org/t/p/w300/d68dAHx4xA7AzLS0Zu2Zx6K6hJ.jpg'
    },
    {
        titulo: 'Jurassic World: Reino Ameaçado',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt4881806',
        imagem: 'https://image.tmdb.org/t/p/w300/5PWRDsozYR1VeExrFLqZ8Qpw07m.jpg'
    },
    {
        titulo: 'Jurassic World: O Mundo dos Dinossauros',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0369610',
        imagem: 'https://image.tmdb.org/t/p/w300/dsnQBbJ9FM68uibzVxlknFcyFYJ.jpg'
    },
    {
        titulo: 'Jurassic Park 3',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0163025',
        imagem: 'https://image.tmdb.org/t/p/w300/xpS4DbBVfu9WsQqzoSa81hOt4mu.jpg'
    },
    {
        titulo: 'O Mundo Perdido: Jurassic Park',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0119567',
        imagem: 'https://image.tmdb.org/t/p/w300/gkF6JPfru2FEIP9du7QyHVLSOzu.jpg'
    },
    {
        titulo: 'Jurassic Park: O Parque dos Dinossauros',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0107290',
        imagem: 'https://image.tmdb.org/t/p/w300/mgjJ7FH4V3exsmoHwXrmsUhn0h1.jpg'
    },
    {
        titulo: 'De Volta para o Futuro III',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0099088',
        imagem: 'https://image.tmdb.org/t/p/w300/yjSqXqdpaa6ECsiIQxW44ye0qAc.jpg'
    },
    {
        titulo: 'De Volta para o Futuro II',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0096874',
        imagem: 'https://image.tmdb.org/t/p/w300/g9xt4iL2DRzG6XHfYJtSEgzGFRC.jpg'
    },
    {
        titulo: 'De Volta para o Futuro',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt0088763',
        imagem: 'https://image.tmdb.org/t/p/w300/4BTW7PyEYFUFlNpuSeS9hAbpk9P.jpg'
    },
    {
        titulo: 'Assassin s Creed',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt2094766',
        imagem: 'https://image.tmdb.org/t/p/w300/1Cxn5MxH3dDBXauIq6XusR1ZUKJ.jpg'
    },
    {
        titulo: 'Homem-Formiga e a Vespa',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt5095030',
        imagem: 'https://image.tmdb.org/t/p/w300/smRrzh8W4PfIYiqAEqc6U1D6Ekl.jpg'
    },
    {
        titulo: 'Homem-Formiga',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0478970',
        imagem: 'https://image.tmdb.org/t/p/w300/yiLqv1gwBENjbqTAdPxW4LhX6aA.jpg'
    },
    {
        titulo: 'Capitão América: Guerra Civil',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt3498820',
        imagem: 'https://image.tmdb.org/t/p/w300/8IoDJYGMoo4nEkjGADW2TtZRoWF.jpg'
    },
    {
        titulo: 'Capitão América 2: O Soldado Invernal',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt1843866',
        imagem: 'https://image.tmdb.org/t/p/w300/iBFPjLLHXkBojKpWDluJxnpM24h.jpg'
    },
    {
        titulo: 'Capitão América: O Primeiro Vingador',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0458339',
        imagem: 'https://image.tmdb.org/t/p/w300/f976JQnjMhCTa1yLXz7UH1pV4DG.jpg'
    },
    {
        titulo: 'Capitã Marvel',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt4154664',
        imagem: 'https://image.tmdb.org/t/p/w300/hVgLHgnsO46oSHJy5I4ekhqtoYv.jpg'
    },
    {
        titulo: 'Liga da Justiça: Trono de Atlantis',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt3878542',
        imagem: 'https://image.tmdb.org/t/p/w300/t6hcyzdgpGBVlEzizCmg5CWY8Fv.jpg'
    },
    {
        titulo: 'Os Bad Boys II',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0172156',
        imagem: 'https://image.tmdb.org/t/p/w300/yCvB5fG5aEPqa1St7ihY6KEAsHD.jpg'
    },
    {
        titulo: 'Venom: Tempo de Carnificina',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt7097896',
        imagem: 'https://image.tmdb.org/t/p/w300/h5UzYZquMwO9FVn15R2eK2itmHu.jpg'
    },
    {
        titulo: 'A Série Divergente: Insurgente',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt2908446',
        imagem: 'https://image.tmdb.org/t/p/w300/l0i7VfG5HAQT49ZKZNcef2booIq.jpg'
    },
    {
        titulo: 'A Série Divergente: Convergente',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt3410834',
        imagem: 'https://image.tmdb.org/t/p/w300/cAYhVm44sofmqaEGuQl4j5RL62S.jpg'
    },
    {
        titulo: 'Divergente',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt1840309',
        imagem: 'https://image.tmdb.org/t/p/w300/gktEuhRYZrlinT3sLSt7Fvmqbe5.jpg'
    },
    {
        titulo: 'Bob Esponja: O Incrível Resgate',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt4823776',
        imagem: 'https://image.tmdb.org/t/p/w300/d88x4Jnyhr4xErOYeJCspcxI34h.jpg'
    },
    {
        titulo: 'Bob Esponja: Um Herói Fora Dágua',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt2279373',
        imagem: 'https://image.tmdb.org/t/p/w300/drP4J85UCoau7J2E9sANDSmD1rC.jpg'
    },
    {
        titulo: 'Os Piratas: Em Busca do Tesouro Perdido',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt17491040',
        imagem: 'https://image.tmdb.org/t/p/w300/7TxDi9DhUIo23eZftFQPk86ojtN.jpg'
    },
    {
        titulo: 'Shrek',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0126029',
        imagem: 'https://image.tmdb.org/t/p/w300/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg'
    },
    {
        titulo: 'O Fantasma do Lorde Farquaad',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0360985',
        imagem: 'https://image.tmdb.org/t/p/w300/6yyGjJ0Og9LrM9XQ35quIhZpZiQ.jpg'
    },
    {
        titulo: 'Shrek para Sempre: O Capítulo Final',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0892791',
        imagem: 'https://image.tmdb.org/t/p/w300/fxMK2UCjvB8hOFod3v2wQDXLGF3.jpg'
    },
    {
        titulo: 'FormiguinhaZ',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0120587',
        imagem: 'https://image.tmdb.org/t/p/w300/plM5vyLRiiVrVlLC7bQPVmjSwN2.jpg'
    },
    {
        titulo: 'O Caminho para El Dorado',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0138749',
        imagem: 'https://image.tmdb.org/t/p/w300/dqFhMb6zozOPaiXILKt0VC8n7y6.jpg'
    },
    {
        titulo: 'Por água Abaixo',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0424095',
        imagem: 'https://image.tmdb.org/t/p/w300/qzyUeoCg6fh8nSQD1LFiUiiOs8P.jpg'
    },
    {
        titulo: 'O Projeto Adam',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt2463208',
        imagem: 'https://image.tmdb.org/t/p/w300/11MJy6lkt7yTEIowEPIkaK4B7lM.jpg'
    },
    {
        titulo: 'Pedro Coelho 2: O Fugitivo',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt8376234',
        imagem: 'https://image.tmdb.org/t/p/w300/pxdSJCpqMOp3gakScrzHgGDEvVr.jpg'
    },
    {
        titulo: 'MIB - Homens de Preto',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt0119654',
        imagem: 'https://image.tmdb.org/t/p/w300/4Y4I5PhPuoFWiOr5NBstFWkhYjf.jpg'
    },
    {
        titulo: 'Scooby-Doo',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0267913',
        imagem: 'https://image.tmdb.org/t/p/w300/b6EpEYp1TALe4N71a5kf5WRiKAx.jpg'
    },
    {
        titulo: 'Scooby-Doo 2: Monstros à Solta',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0331632',
        imagem: 'https://image.tmdb.org/t/p/w300/x2K8t5nybJfoVOHulIq4ONyeSi0.jpg'
    },
    {
        titulo: 'Shrek 2',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt0298148',
        imagem: 'https://image.tmdb.org/t/p/w300/2SwrbqS8Tv40bHx4AGYpNJX1xDW.jpg'
    },
    {
        titulo: '007: Quantum of Solace',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0830515',
        imagem: 'https://image.tmdb.org/t/p/w300/fV0ejyUsnqd8BzHcK13C7ZJFEa1.jpg'
    },
    {
        titulo: '007: Operação Skyfall',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt1074638',
        imagem: 'https://image.tmdb.org/t/p/w300/1U1gkQynuQRNsZ8zm13zSCGOFAj.jpg'
    },
    {
        titulo: '007 Contra Spectre',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt2379713',
        imagem: 'https://image.tmdb.org/t/p/w300/ozwsRvKABRcF8VrNNvMkKt8KWyF.jpg'
    },
    {
        titulo: 'Contra o Gelo',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt13873302',
        imagem: 'https://image.tmdb.org/t/p/w300/Ak7vO8UJS32bOub3aWXCYl7YaQx.jpg'
    },
    {
        titulo: 'Thor: O Mundo Sombrio',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt1981115',
        imagem: 'https://image.tmdb.org/t/p/w300/oip30thvJBpJRveA13Rtd2am5Qg.jpg'
    },
    {
        titulo: 'Cruella',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt3228774',
        imagem: 'https://image.tmdb.org/t/p/w300/rRYNGhcAZlTfIUS7iFoF4H9iDbc.jpg'
    },
    {
        titulo: 'Riverdance: Uma Aventura Dançante',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt10841088',
        imagem: 'https://image.tmdb.org/t/p/w300/i6TRDlVuuEXMyLSlIkDd8YhBN0r.jpg'
    },
    {
        titulo: 'Mar de Fogo',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0317648',
        imagem: 'https://image.tmdb.org/t/p/w300/1xFLWSxUp28egthMzqdfEokYa3h.jpg'
    },
    {
        titulo: 'Carros 2',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt1216475',
        imagem: 'https://image.tmdb.org/t/p/w300/fIKaabvE40T39nOIngcZPcPJeYe.jpg'
    },
    {
        titulo: 'Carros 3',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt3606752',
        imagem: 'https://image.tmdb.org/t/p/w300/lVPFdORefTKXKFiSktrXbiFDNAK.jpg'
    },
    {
        titulo: 'Carros',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0317219',
        imagem: 'https://image.tmdb.org/t/p/w300/2nM2NRV8wt3n3ffoHQ3KdMkY3vR.jpg'
    },
    {
        titulo: 'Duna',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt1160419',
        imagem: 'https://image.tmdb.org/t/p/w300/uzERcfV2rSHNhW5eViQiO9hNiA7.jpg'
    },
    {
        titulo: 'Enola Holmes',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt7846844',
        imagem: 'https://image.tmdb.org/t/p/w300/mmRu2io9K21RioNDEWgE2eD88gR.jpg'
    },
    {
        titulo: 'A Lenda do Zorro',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0386140',
        imagem: 'https://image.tmdb.org/t/p/w300/dG28HziPyltTCpmMBLHmgGBbtRr.jpg'
    },
    {
        titulo: 'Clifford, o Gigante Cão Vermelho',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt2397461',
        imagem: 'https://image.tmdb.org/t/p/w300/g51VeVAIM7q9ZqpZRlPEqqhLThR.jpg'
    },
    {
        titulo: 'Doutor Estranho',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt1211837',
        imagem: 'https://image.tmdb.org/t/p/w300/iM1hlVGZ5Qwn3gO6ewTszY7OrLY.jpg'
    },
    {
        titulo: '3 Ninjas em Apuros',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0112255',
        imagem: 'https://image.tmdb.org/t/p/w300/grCDfYf3GNaiQ74plEGmvyKUFrF.jpg'
    },
    {
        titulo: '3 Ninjas Contra-Atacam',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0109015',
        imagem: 'https://image.tmdb.org/t/p/w300/yGCxSE67OVUcAQxdQajIKQDyHIH.jpg'
    },
    {
        titulo: '3 Ninjas',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0103596',
        imagem: 'https://image.tmdb.org/t/p/w300/KaUfT7TvsZt26OwBqmbPiMxvhO.jpg'
    },
    {
        titulo: 'Homem de Ferro 3',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt1300854',
        imagem: 'https://image.tmdb.org/t/p/w300/C7MZwRTjvEy7gkWcLJeBGZFE1w.jpg'
    },
    {
        titulo: 'Homem de Ferro 2',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt1228705',
        imagem: 'https://image.tmdb.org/t/p/w300/vzROjQbgKWMVf2EldXipCcjpuBL.jpg'
    },
    {
        titulo: 'Homem de Ferro',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0371746',
        imagem: 'https://image.tmdb.org/t/p/w300/adSJ0DpgOsMwrpUH78cZpLGOOAk.jpg'
    },
    {
        titulo: 'Free Guy: Assumindo o Controle',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt6264654',
        imagem: 'https://image.tmdb.org/t/p/w300/jXlGeLOg2RKHmV9CinVaIB4ijKU.jpg'
    },
    {
        titulo: 'Pokémon, o Filme: Segredos da Selva',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt11819890',
        imagem: 'https://image.tmdb.org/t/p/w300/szrcgoMk7BJeSFJS41lMiyNPnf3.jpg'
    },
    {
        titulo: 'Victoria e Mistério',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt10945274',
        imagem: 'https://image.tmdb.org/t/p/w300/dLPNyA7ijz3T3cu2tLSkSQajXwY.jpg'
    },
    {
        titulo: 'Invasão Cósmica',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt11762434',
        imagem: 'https://image.tmdb.org/t/p/w300/v5Jodmj8equxBklBlhZMHJtkp5J.jpg'
    },
    {
        titulo: 'Luca',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt12801262',
        imagem: 'https://image.tmdb.org/t/p/w300/9jPa6SlUYxPFMVZlEuceiPPAA15.jpg'
    },
    {
        titulo: 'A Lenda do Cavaleiro Verde',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt9243804',
        imagem: 'https://image.tmdb.org/t/p/w300/uEBz75PgdWLZ6KvVyzYn4xKJnrK.jpg'
    },
    {
        titulo: 'O Gigante de Ferro',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0129167',
        imagem: 'https://image.tmdb.org/t/p/w300/a8StQ8dmVQ94THFTrMVHuMp5QKw.jpg'
    },
    {
        titulo: 'Super Murali',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt7268738',
        imagem: 'https://image.tmdb.org/t/p/w300/d66tZZvkbUrIUbqzF1LYdGUyCe3.jpg'
    },
    {
        titulo: 'Alvin e os Esquilos: Na Estrada',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt2974918',
        imagem: 'https://image.tmdb.org/t/p/w300/ehwqRB6x5gEpZRhQWS3ei8b7Fx8.jpg'
    },
    {
        titulo: 'Jumanji',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0113497',
        imagem: 'https://image.tmdb.org/t/p/w300/z46R8oShx61gXMrAmd7ptpVqNI0.jpg'
    },
    {
        titulo: 'Jumanji: Próxima Fase',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt7975244',
        imagem: 'https://image.tmdb.org/t/p/w300/bBRDUTr6jgbD8I8A9DvVGrVbdfB.jpg'
    },
    {
        titulo: 'Anaconda',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0118615',
        imagem: 'https://image.tmdb.org/t/p/w300/huhasXFLrKfPHEqbz4ALadOnXZZ.jpg'
    },
    {
        titulo: 'Anaconda 2: A Caçada pela Orquídea Sangrenta',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0366174',
        imagem: 'https://image.tmdb.org/t/p/w300/yi3KRmJlEtRV090wgeEPiFQ6cxm.jpg'
    },
    {
        titulo: 'Indiana Jones e os Caçadores da Arca Perdida',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0082971',
        imagem: 'https://image.tmdb.org/t/p/w300/og4GvSmw3qwiBK8eJF2Txcncian.jpg'
    },
    {
        titulo: 'Indiana Jones e a última Cruzada',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0097576',
        imagem: 'https://image.tmdb.org/t/p/w300/vTBem2ZGmLKVgaD3EtJUfMQ9AH1.jpg'
    },
    {
        titulo: 'Indiana Jones e o Templo da Perdição',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0087469',
        imagem: 'https://image.tmdb.org/t/p/w300/rAAruJ0hAad7dgkamxh8sKTaiRs.jpg'
    },
    {
        titulo: 'Indiana Jones e o Reino da Caveira de Cristal',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0367882',
        imagem: 'https://image.tmdb.org/t/p/w300/y1gGYQ33CNVpo9mmxmkrUUmANwf.jpg'
    },
    {
        titulo: 'Jogos Vorazes: Em Chamas',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt1951264',
        imagem: 'https://image.tmdb.org/t/p/w300/m1lky5ftnhLRpkoYWKssH8qvlRU.jpg'
    },
    {
        titulo: 'Jogos Vorazes',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt1392170',
        imagem: 'https://image.tmdb.org/t/p/w300/xAmbI0D90t74Xeq6K9nGeTXkd1U.jpg'
    },
    {
        titulo: 'Jogos Vorazes: A Esperança - Parte 1',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt1951265',
        imagem: 'https://image.tmdb.org/t/p/w300/hekpVNWOROZm57RS4OLW0ySkxx9.jpg'
    },
    {
        titulo: 'Hilda e o Rei da Montanha',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt15777864',
        imagem: 'https://image.tmdb.org/t/p/w300/3vm7LOe7DhkiA7umBhslQy9MdkY.jpg'
    },
    {
        titulo: 'Ainbo: A Guerreira da Amazônia',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt6570098',
        imagem: 'https://image.tmdb.org/t/p/w300/xGkmm8YB1HzM3GaQ3FBv1NTwWxS.jpg'
    },
    {
        titulo: 'Quatro Amigas e um Jeans Viajante 2',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt1018785',
        imagem: 'https://image.tmdb.org/t/p/w300/8oHzMzUoD7GHuFOB5lWjkwzGsn5.jpg'
    },
    {
        titulo: 'O Cavaleiro do Dragão',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt7080422',
        imagem: 'https://image.tmdb.org/t/p/w300/v8O3Sk7xw50LMLpxYNhEY4gTZvd.jpg'
    },
    {
        titulo: 'O Lar das Crianças Peculiares',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt1935859',
        imagem: 'https://image.tmdb.org/t/p/w300/qFhaNRu7ZBKT6Iy7NY0prJmIwaK.jpg'
    },
    {
        titulo: 'Deadpool 2',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt5463162',
        imagem: 'https://image.tmdb.org/t/p/w300/6CABdPx68rYoLdvXhIJkilOj6XZ.jpg'
    },
    {
        titulo: 'Deadpool',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt1431045',
        imagem: 'https://image.tmdb.org/t/p/w300/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg'
    },
    {
        titulo: 'G.I. Joe Origens: Snake Eyes',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt8404256',
        imagem: 'https://image.tmdb.org/t/p/w300/uVwQxrSp9TVuNzrsh63U0reYX7O.jpg'
    },
    {
        titulo: 'Percy Jackson e o Mar de Monstros',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt1854564',
        imagem: 'https://image.tmdb.org/t/p/w300/1OdoNNO7u9GIXDEFCW17jP9E5qM.jpg'
    },
    {
        titulo: 'Percy Jackson e o Ladrão de Raios',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0814255',
        imagem: 'https://image.tmdb.org/t/p/w300/axG4aEejImUaLeFUOhBzETuUdPb.jpg'
    },
    {
        titulo: 'Scooby-Doo! em Cadê a minha Múmia',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0480461',
        imagem: 'https://image.tmdb.org/t/p/w300/4RcIwxZCB9QAEMXXkdAWbGDk9kX.jpg'
    },
    {
        titulo: 'Valente',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt1217209',
        imagem: 'https://image.tmdb.org/t/p/w300/jX9O3eyzfw937QOhRF4wz6nhxBM.jpg'
    },
    {
        titulo: 'Missão: Impossível - Efeito Fallout',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt4912910',
        imagem: 'https://image.tmdb.org/t/p/w300/i273qQubszItr11lQNMFWnYP4J1.jpg'
    },
    {
        titulo: 'Angry Birds 2: O Filme',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt6095472',
        imagem: 'https://image.tmdb.org/t/p/w300/pMqAjEyj234escPleCthcmh84ka.jpg'
    },
    {
        titulo: 'Missão: Impossível - Nação Secreta',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt2381249',
        imagem: 'https://image.tmdb.org/t/p/w300/fxL6ktSUDejDq9Ni6UsoY73DC2I.jpg'
    },
    {
        titulo: 'Angry Birds: O Filme',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt1985949',
        imagem: 'https://image.tmdb.org/t/p/w300/bFXFfxCZe1pCYWzcGGxsxqc1bc7.jpg'
    },
    {
        titulo: 'Missão: Impossível - Protocolo Fantasma',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt1229238',
        imagem: 'https://image.tmdb.org/t/p/w300/9Odva4vcrL6D7NRhIMlYf8Dg5nC.jpg'
    },
    {
        titulo: 'Missão: Impossível 3',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0317919',
        imagem: 'https://image.tmdb.org/t/p/w300/4DfRFWO4B3mD2gBXqWH6Rv0x0GX.jpg'
    },
    {
        titulo: 'Missão: Impossível 2',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0120755',
        imagem: 'https://image.tmdb.org/t/p/w300/sT5hbs7rmMk2Edup7Pw9MB02x9G.jpg'
    },
    {
        titulo: 'Missão: Impossível',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0117060',
        imagem: 'https://image.tmdb.org/t/p/w300/ymisRFnNz9DUiEKn4ViMGb91Gw9.jpg'
    },
    {
        titulo: 'O Poderoso Chefinho 2: Negócios da Família',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt6932874',
        imagem: 'https://image.tmdb.org/t/p/w300/p033k6k8V9USI0TWZavIxoYzsGi.jpg'
    },
    {
        titulo: 'Missão Resgate',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt3758814',
        imagem: 'https://image.tmdb.org/t/p/w300/4LHON8XgAfMSVG2Vv54caU6D1r5.jpg'
    },
    {
        titulo: 'Duck Tales, O Filme: O Tesouro da Lâmpada Perdida',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0099472',
        imagem: 'https://image.tmdb.org/t/p/w300/wsLP8ULSWhauYHynFn3n8zU03Io.jpg'
    },
    {
        titulo: 'A Era do Gelo: O Big Bang',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt3416828',
        imagem: 'https://image.tmdb.org/t/p/w300/gh9LEW4bzN2nuDfyViLqWSV67sa.jpg'
    },
    {
        titulo: 'Mickey, Donald e Pateta: Os Três Mosqueteiros',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0371823',
        imagem: 'https://image.tmdb.org/t/p/w300/euce4fzdZOLM0ytoQJv5ZJCorhy.jpg'
    },
    {
        titulo: 'Mary e a Flor da Feiticeira',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt6336356',
        imagem: 'https://image.tmdb.org/t/p/w300/rRVcNahAM4edrPhgldrz5Ac5td6.jpg'
    },
    {
        titulo: 'Descendentes 2',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt5117876',
        imagem: 'https://image.tmdb.org/t/p/w300/5jGEBYg13Sa1J3D6KOlQ2EH8Uxg.jpg'
    },
    {
        titulo: 'Descendentes',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt3440298',
        imagem: 'https://image.tmdb.org/t/p/w300/i36xiPRiRgy8x261fk80CyVcaYF.jpg'
    },
    {
        titulo: 'A Marca do Zorro',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0032762',
        imagem: 'https://image.tmdb.org/t/p/w300/ahmBBQHINkGpgnxnuBIfzUC9mkL.jpg'
    },
    {
        titulo: 'Heróis Muito Loucos',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt0132347',
        imagem: 'https://image.tmdb.org/t/p/w300/hUUt97GiCDugE8oTIbhiwTyNhD7.jpg'
    },
    {
        titulo: 'Quarteto Fantástico e o Surfista Prateado',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0486576',
        imagem: 'https://image.tmdb.org/t/p/w300/xMGHJnUovhF8BVRQFdMgwf99Q2g.jpg'
    },
    {
        titulo: 'Titanic II',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt1640571',
        imagem: 'https://image.tmdb.org/t/p/w300/3m12UeP1DMfhYZyvpLftaJGsyp3.jpg'
    },
    {
        titulo: 'Madagascar 3: Os Procurados',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt1277953',
        imagem: 'https://image.tmdb.org/t/p/w300/bPRvFj9MGeLeqidaTniUf8yQ0PW.jpg'
    },
    {
        titulo: 'Minions: O Filme',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt2293640',
        imagem: 'https://image.tmdb.org/t/p/w300/caq9Xi6b1sZNREfzFBO2tRIBzWn.jpg'
    },
    {
        titulo: 'Matrix Reloaded',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0234215',
        imagem: 'https://image.tmdb.org/t/p/w300/e7DdXOXP6mH2y7Fv7ujrk5tlsh7.jpg'
    },
    {
        titulo: 'Fúria de Titãs 2',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt1646987',
        imagem: 'https://image.tmdb.org/t/p/w300/9yyAOtBlWlMBOAUp2lWTRytVgOG.jpg'
    },
    {
        titulo: 'Fúria de Titãs',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0800320',
        imagem: 'https://image.tmdb.org/t/p/w300/R21t8SVfr6sQQ5mzjkecEU02YW.jpg'
    },
    {
        titulo: 'Fúria de Titãs',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0082186',
        imagem: 'https://image.tmdb.org/t/p/w300/5LObtR57MxWD7Me0tiRaqgrqKQD.jpg'
    },
    {
        titulo: 'Alerta Vermelho',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt11285908',
        imagem: 'https://image.tmdb.org/t/p/w300/lT6BaTnPc9Q7oPyLfiBtC6fNyep.jpg'
    },
    {
        titulo: 'Johnny English 3.0',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt6921996',
        imagem: 'https://image.tmdb.org/t/p/w300/cnchtu8rXPFAkvii9WC4htmt9CZ.jpg'
    },
    {
        titulo: 'O Retorno de Johnny English',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt1634122',
        imagem: 'https://image.tmdb.org/t/p/w300/nM0r4uUi1K3cIebwB9gfbohtSo5.jpg'
    },
    {
        titulo: 'Johnny English',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0274166',
        imagem: 'https://image.tmdb.org/t/p/w300/N4vioZ2pDBQWGBgTGxBmF82vwm.jpg'
    },
    {
        titulo: 'Bater ou Correr em Londres',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0300471',
        imagem: 'https://image.tmdb.org/t/p/w300/fVPZumNA50cSePKm56lEZ9G86f4.jpg'
    },
    {
        titulo: 'Aquaman',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt1477834',
        imagem: 'https://image.tmdb.org/t/p/w300/oB367uFcyU2uhGkFqo5RB4Evdji.jpg'
    },
    {
        titulo: 'Carga Explosiva 3',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt1129442',
        imagem: 'https://image.tmdb.org/t/p/w300/hC4lRSuZA29l4NbmQ8sdvkpRkO5.jpg'
    },
    {
        titulo: 'A Era do Gelo: As Aventuras de Buck',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt13634480',
        imagem: 'https://image.tmdb.org/t/p/w300/1iVjKCGHPVNj7IQVB1DdpL8U7Y8.jpg'
    },
    {
        titulo: 'O Mensageiro',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0119925',
        imagem: 'https://image.tmdb.org/t/p/w300/hfgJx9x0mT7kI9Vy80cwL9lt8TK.jpg'
    },
    {
        titulo: 'A Praia',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0163978',
        imagem: 'https://image.tmdb.org/t/p/w300/ctIgzwOUu8ttJzydsoFVWZ9s85I.jpg'
    },
    {
        titulo: 'Homem-Aranha 2',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0316654',
        imagem: 'https://image.tmdb.org/t/p/w300/y06FivvCfqapHB3iETOtbAqWdkD.jpg'
    },
    {
        titulo: 'Viagem 2: A Ilha Misteriosa',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt1397514',
        imagem: 'https://image.tmdb.org/t/p/w300/yfRONMxtQMGgxV8nv2BgIYYzm2O.jpg'
    },
    {
        titulo: 'O Filho do Batman',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt3139072',
        imagem: 'https://image.tmdb.org/t/p/w300/oPfc2Q0FZ1QObSLhGq9mAv7L2GV.jpg'
    },
    {
        titulo: 'Batman vs Superman: A Origem da Justiça',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt2975590',
        imagem: 'https://image.tmdb.org/t/p/w300/vh6pjeGH0GQupLepPCZn5PylcRg.jpg'
    },
    {
        titulo: 'Thor',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0800369',
        imagem: 'https://image.tmdb.org/t/p/w300/yI6jOYR9xDpxXPKAO17YuIBfROd.jpg'
    },
    {
        titulo: 'Kick-Ass 2',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt1650554',
        imagem: 'https://image.tmdb.org/t/p/w300/ch18ICcbiA5z089LrJH5Hed7ZJl.jpg'
    },
    {
        titulo: 'O Chamado da Floresta',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt7504726',
        imagem: 'https://image.tmdb.org/t/p/w300/1SIlV2p8355FAuKTGje9ZgtXujN.jpg'
    },
    {
        titulo: 'As Peripécias de um Ratinho Detetive',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0091149',
        imagem: 'https://image.tmdb.org/t/p/w300/fZc1k1rgsILmy2iXQoRHnjuNcGX.jpg'
    },
    {
        titulo: 'A Carga da Brigada Ligeira',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0027438',
        imagem: 'https://image.tmdb.org/t/p/w300/c1qLEgqNwlpSd0FRkUotFBX1x0r.jpg'
    },
    {
        titulo: 'Pets: A Vida Secreta dos Bichos 2',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt5113040',
        imagem: 'https://image.tmdb.org/t/p/w300/gs0iSjc9tbpbAElolwbDwPDpNXo.jpg'
    },
    {
        titulo: 'Pets: A Vida Secreta dos Bichos',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt2709768',
        imagem: 'https://image.tmdb.org/t/p/w300/xKpQ8fDDu1qCvBl5bF2vpsZPSUj.jpg'
    },
    {
        titulo: 'Como Virei Super-Herói',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt10345590',
        imagem: 'https://image.tmdb.org/t/p/w300/iYl4YJ1BnuJEKjn0dmKlMa1Bwuo.jpg'
    },
    {
        titulo: 'Velocidade Máxima',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0111257',
        imagem: 'https://image.tmdb.org/t/p/w300/d30AWcDezR0qM6OgXovulfA4z8N.jpg'
    },
    {
        titulo: 'O Grande Dave',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0765476',
        imagem: 'https://image.tmdb.org/t/p/w300/sEzO5ls8mjsUbgdcYEbg57FQr7v.jpg'
    },
    {
        titulo: 'Up: Altas Aventuras',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt1049413',
        imagem: 'https://image.tmdb.org/t/p/w300/kms7XVDS6v7ic2jEw6N4DslQrWx.jpg'
    },
    {
        titulo: 'Agentes Vanguard',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt9695722',
        imagem: 'https://image.tmdb.org/t/p/w300/slR16xWVy7kc3xr1GlSK41ZSjpa.jpg'
    },
    {
        titulo: 'Porco Rosso: O último Herói Romântico',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0104652',
        imagem: 'https://image.tmdb.org/t/p/w300/ts1oKmmSr2tM9qmzDUNzMWs9EDq.jpg'
    },
    {
        titulo: 'No Limite do Mundo',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt3006472',
        imagem: 'https://image.tmdb.org/t/p/w300/ans5FpsTvfhznxQdM297K3xy1kD.jpg'
    },
    {
        titulo: 'Joe Bell',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt4651466',
        imagem: 'https://image.tmdb.org/t/p/w300/9HfQD60w6f6PPkfdiI6ipJSw0bD.jpg'
    },
    {
        titulo: 'Divertida Mente',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt2096673',
        imagem: 'https://image.tmdb.org/t/p/w300/62SAZfLfzhxJWUFJvfIPMw6QUpE.jpg'
    },
    {
        titulo: 'Spawn: O Soldado do Inferno',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0120177',
        imagem: 'https://image.tmdb.org/t/p/w300/653tt7EeQZ2LqLMeiGApxkdsKB2.jpg'
    },
    {
        titulo: 'Sex Drive: Rumo ao Sexo',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt1135985',
        imagem: 'https://image.tmdb.org/t/p/w300/6D5FuwuZR7BEAbiyNfLKuV5KGN.jpg'
    },
    {
        titulo: '007: Cassino Royale',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0381061',
        imagem: 'https://image.tmdb.org/t/p/w300/7b3qmLlvm2lvJ2gxsKQ42S3RTKR.jpg'
    },
    {
        titulo: 'Top Gun - Ases Indomáveis',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0092099',
        imagem: 'https://image.tmdb.org/t/p/w300/dDrMtnVgtDeecIgNchb9F8JcO5w.jpg'
    },
    {
        titulo: 'Mr. Bean - O Filme',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0118689',
        imagem: 'https://image.tmdb.org/t/p/w300/yoFGuw59e1KPFSwzrQexBL5khMx.jpg'
    },
    {
        titulo: 'Chernobyl: O Filme',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt10648714',
        imagem: 'https://image.tmdb.org/t/p/w300/bnB2EkaY6HEdzwVkkH7dBHy6HmZ.jpg'
    },
    {
        titulo: 'Hotel Transilvânia: Transformonstrão',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt9848626',
        imagem: 'https://image.tmdb.org/t/p/w300/9PbtCo5IIkd26WPQfZUpPyn6fTz.jpg'
    },
    {
        titulo: 'Herbie: Meu Fusca Turbinado',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0400497',
        imagem: 'https://image.tmdb.org/t/p/w300/z3dDSU387L19TNEJkYhYAMjU4Sr.jpg'
    },
    {
        titulo: 'Hellboy',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt2274648',
        imagem: 'https://image.tmdb.org/t/p/w300/lmh8wXm6f3z7wcRqQ8NSXrB8tMQ.jpg'
    },
    {
        titulo: 'Hellboy II: O Exército Dourado',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt0411477',
        imagem: 'https://image.tmdb.org/t/p/w300/2ZFnYUkYDlwJQvODkQ0JyTRZDSO.jpg'
    },
    {
        titulo: 'Thor: Ragnarok',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt3501632',
        imagem: 'https://image.tmdb.org/t/p/w300/jrF3WW4lJkIFtIY3nIyapZ7q0N8.jpg'
    },
    {
        titulo: 'Malévola: Dona do Mal',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt4777008',
        imagem: 'https://image.tmdb.org/t/p/w300/llHTFUeUCWmkW5fR4J9kpa6Asep.jpg'
    },
    {
        titulo: 'Malévola',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt1587310',
        imagem: 'https://image.tmdb.org/t/p/w300/kqifqRhUWjx5WT0OJPxWbcnzc2O.jpg'
    },
    {
        titulo: 'Vira-Lata',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0467110',
        imagem: 'https://image.tmdb.org/t/p/w300/lcedkHKYYatdNrUE91CMDahxAg9.jpg'
    },
    {
        titulo: 'Encantado',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt4086018',
        imagem: 'https://image.tmdb.org/t/p/w300/3r4IXWsSCgNrONPn9RV99SpDsZP.jpg'
    },
    {
        titulo: 'Avatar',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0499549',
        imagem: 'https://image.tmdb.org/t/p/w300/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg'
    },
    {
        titulo: 'Mad Max: Além da Cúpula do Trovão',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0089530',
        imagem: 'https://image.tmdb.org/t/p/w300/tYF4AeArodeSHy9hGlPz5PdVF0T.jpg'
    },
    {
        titulo: 'Mad Max 2: A Caçada Continua',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0082694',
        imagem: 'https://image.tmdb.org/t/p/w300/5inW7xf2kRoZDojXWfXLXK0fZ9z.jpg'
    },
    {
        titulo: 'Mad Max',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0079501',
        imagem: 'https://image.tmdb.org/t/p/w300/hdQqa9ZfmEPbE4q62lntueI2CUM.jpg'
    },
    {
        titulo: 'Resident Evil 4: Recomeço',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt1220634',
        imagem: 'https://image.tmdb.org/t/p/w300/eLUc5to0p5LhbXJMXtgltg7P4g4.jpg'
    },
    {
        titulo: 'My Little Pony: Nova Geração',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt10101702',
        imagem: 'https://image.tmdb.org/t/p/w300/gsd8CzmWi4daZbEvuH4rgWbu5yT.jpg'
    },
    {
        titulo: 'O Espetacular Homem-Aranha 2: A Ameaça de Electro',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt1872181',
        imagem: 'https://image.tmdb.org/t/p/w300/lDbcaBs1IdBZccCM1R417XmPxKF.jpg'
    },
    {
        titulo: 'O Espetacular Homem-Aranha',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0948470',
        imagem: 'https://image.tmdb.org/t/p/w300/dODKvv9o9BOemWavnulutJBHM80.jpg'
    },
    {
        titulo: 'Homem-Aranha 3',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0413300',
        imagem: 'https://image.tmdb.org/t/p/w300/63O5iixxXSmyOaBas7ek1tkeVra.jpg'
    },
    {
        titulo: 'Interestelar',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0816692',
        imagem: 'https://image.tmdb.org/t/p/w300/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg'
    },
    {
        titulo: 'Turma da Mônica: Laços',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt8169552',
        imagem: 'https://image.tmdb.org/t/p/w300/1ksQfIiWmyu9x4FbNBW5aNclVqu.jpg'
    },
    {
        titulo: 'Quarteto Fantástico',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0120667',
        imagem: 'https://image.tmdb.org/t/p/w300/7LYL7iZMPWX1IR3ISiPR1FkjfP3.jpg'
    },
    {
        titulo: 'Viagem ao Centro da Terra: O Filme',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0373051',
        imagem: 'https://image.tmdb.org/t/p/w300/35AI4Bmo1JrEzgMOxOARRUT9Pn6.jpg'
    },
    {
        titulo: 'Warcraft - O Primeiro Encontro de Dois Mundos',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0803096',
        imagem: 'https://image.tmdb.org/t/p/w300/2cPJhbIwsmMXsV9vihoPEFBFFHm.jpg'
    },
    {
        titulo: 'X-Men Origens: Wolverine',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt0458525',
        imagem: 'https://image.tmdb.org/t/p/w300/3xjVVXVXWU8qt1umkeTJd8sImBC.jpg'
    },
    {
        titulo: 'Jujutsu Kaisen 0: O Filme',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt14331144',
        imagem: 'https://image.tmdb.org/t/p/w300/eiSlgyx7G61Ey69K9MmCw9OaHMA.jpg'
    },
    {
        titulo: 'Iceman: A Roda do Tempo',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt2557256',
        imagem: 'https://image.tmdb.org/t/p/w300/juAYTbpP05NR8co9GhDTPwEKqde.jpg'
    },
    {
        titulo: 'Eu Sou o Número Quatro',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt1464540',
        imagem: 'https://image.tmdb.org/t/p/w300/AnKKqP6pRZah0KayZMiT6ifZde4.jpg'
    },
    {
        titulo: 'Primitivo',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt0772193',
        imagem: 'https://image.tmdb.org/t/p/w300/90Ck5KYjfiyM7fyJPx7y5qZfYGm.jpg'
    },
    {
        titulo: 'Viagem a Darjeeling',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0838221',
        imagem: 'https://image.tmdb.org/t/p/w300/8oZ8lqD3hebzHb5SUz3eKb0Z01C.jpg'
    },
    {
        titulo: 'Mortdecai: A Arte da Trapaça',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt3045616',
        imagem: 'https://image.tmdb.org/t/p/w300/iNVmlhyvolonbsrWhwJPnjqievz.jpg'
    },
    {
        titulo: 'Mulan',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt4566758',
        imagem: 'https://image.tmdb.org/t/p/w300/72I82eKXCadZWEYygV9GkJOQNEq.jpg'
    },
    {
        titulo: 'Mulan',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0120762',
        imagem: 'https://image.tmdb.org/t/p/w300/nq4taYpb2PjN1Cwni23GOZJbOaR.jpg'
    },
    {
        titulo: 'O Gângster, o Policial e o Diabo',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt10208198',
        imagem: 'https://image.tmdb.org/t/p/w300/nLNKX18xxW6RpkARYrmxDZvuB8r.jpg'
    },
    {
        titulo: 'Kings Man: A Origem',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt6856242',
        imagem: 'https://image.tmdb.org/t/p/w300/pVL9AyKKLfUwrYD6jhdsI15gBQ7.jpg'
    },
    {
        titulo: 'X-Men: O Filme',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0120903',
        imagem: 'https://image.tmdb.org/t/p/w300/eTAK1gU8vTaHt0W9I6PFYQsdhKP.jpg'
    },
    {
        titulo: 'X-Men: Primeira Classe',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt1270798',
        imagem: 'https://image.tmdb.org/t/p/w300/AqTCbMhG9X93sly2fvyiu6sHPIS.jpg'
    },
    {
        titulo: 'O Incrível Hulk',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0800080',
        imagem: 'https://image.tmdb.org/t/p/w300/h2vB6OlhTA1jAazDXrr7PEgFPnV.jpg'
    },
    {
        titulo: 'O Homem de Aço',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0770828',
        imagem: 'https://image.tmdb.org/t/p/w300/c1k1N5rrA6NGhKUZ6hOYR0Am9Ss.jpg'
    },
    {
        titulo: 'Bumblebee',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt4701182',
        imagem: 'https://image.tmdb.org/t/p/w300/x9vAcoPsyFQ6m3Re5S9DQSbudyi.jpg'
    },
    {
        titulo: 'Bee Movie: A História de uma Abelha',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0389790',
        imagem: 'https://image.tmdb.org/t/p/w300/puW6ynGLcCowqiYvhPhdbNH8Zzj.jpg'
    },
    {
        titulo: 'Alita: Anjo de Combate',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0437086',
        imagem: 'https://image.tmdb.org/t/p/w300/xUOP8nSOcwymKeOS9L4iJbLXG74.jpg'
    },
    {
        titulo: 'As Aventuras de Sharkboy e Lavagirl',
        descricao: 'Descrição do filme 18',
        imdb: 'tt0424774',
        imagem: 'https://image.tmdb.org/t/p/w300/6WUV2wPCFDX2LRQY5Iv6ElxdDe6.jpg'
    },
    {
        titulo: 'As Tartarugas Ninja: Fora das Sombras',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt3949660',
        imagem: 'https://image.tmdb.org/t/p/w300/28CV4RE4BayVZnbw7FdXbcvzSQb.jpg'
    },
    {
        titulo: 'As Tartarugas Ninja',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt1291150',
        imagem: 'https://image.tmdb.org/t/p/w300/udkk1VQY9wgarV7xZ9qcraa7Qsd.jpg'
    },
    {
        titulo: 'No Coração do Mar',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt1390411',
        imagem: 'https://image.tmdb.org/t/p/w300/v0f6zLv2TwhscRFDRnbcw8McBeI.jpg'
    },
    {
        titulo: 'Garfield 2',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0455499',
        imagem: 'https://image.tmdb.org/t/p/w300/bXwKOr1LnYMetY7mROBQ3MFhb1a.jpg'
    },
    {
        titulo: 'Tróia',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0332452',
        imagem: 'https://image.tmdb.org/t/p/w300/2DCOh2hPdDtWxBSaanq80GFa2HN.jpg'
    },
    {
        titulo: 'Doze é Demais 2',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt0452598',
        imagem: 'https://image.tmdb.org/t/p/w300/pWycE2t6Vu4X8QWbJLzq4Wx0aO6.jpg'
    },
    {
        titulo: 'Valhalla: A Lenda de Thor',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt8956872',
        imagem: 'https://image.tmdb.org/t/p/w300/5oD7ujF444E6lMnqnf8MqwNIpyc.jpg'
    },
    {
        titulo: 'O Agente da U.N.C.L.E.',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt1638355',
        imagem: 'https://image.tmdb.org/t/p/w300/vwcO16PV78DLEcazIRVnSdbt3oD.jpg'
    },
    {
        titulo: 'Os Croods 2: Uma Nova Era',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt2850386',
        imagem: 'https://image.tmdb.org/t/p/w300/vRTScutueW9gLF3dSo2Za7o0v7n.jpg'
    },
    {
        titulo: 'Os Croods',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0481499',
        imagem: 'https://image.tmdb.org/t/p/w300/7k9w3RgKYoJ9MCwdBY0ZBxC323L.jpg'
    },
    {
        titulo: 'Os Incríveis 2',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt3606756',
        imagem: 'https://image.tmdb.org/t/p/w300/y3EEb7o6NxK0pl0WsOswCos663y.jpg'
    },
    {
        titulo: 'Abominável',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt6324278',
        imagem: 'https://image.tmdb.org/t/p/w300/oC89hsRFoF4OcrgYIKysDD7M6XO.jpg'
    },
    {
        titulo: 'Homem-Aranha no Aranhaverso',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt4633694',
        imagem: 'https://image.tmdb.org/t/p/w300/tv1MHGKwRNKXzuJsNH9aZqU2djI.jpg'
    },
    {
        titulo: 'Mortal Kombat',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0293429',
        imagem: 'https://image.tmdb.org/t/p/w300/44aCR6cjH0FbzW6PMw3Ega178iW.jpg'
    },
    {
        titulo: 'Artemis Fowl: O Mundo Secreto',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt3089630',
        imagem: 'https://image.tmdb.org/t/p/w300/avb3THg1FTxBc79h2QECsuwjujY.jpg'
    },
    {
        titulo: 'A Família Mitchell e a Revolta das Máquinas',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt7979580',
        imagem: 'https://image.tmdb.org/t/p/w300/k1p10mLm1uM1jqR7RlzB0SalD00.jpg'
    },
    {
        titulo: 'Velozes & Furiosos: Hobbs & Shaw',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt6806448',
        imagem: 'https://image.tmdb.org/t/p/w300/w5HWdAJyAbfpXbXDmEt5OIpf6kQ.jpg'
    },
    {
        titulo: 'Velozes & Furiosos 7',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt2820852',
        imagem: 'https://image.tmdb.org/t/p/w300/vK3EINuibdkBwUe9jOhVUXtLeb6.jpg'
    },
    {
        titulo: 'Alice no País das Maravilhas',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt1014759',
        imagem: 'https://image.tmdb.org/t/p/w300/fjaiHtykx4LcHJLzhKhn7tNPpAj.jpg'
    },
    {
        titulo: 'Motoqueiros Selvagens',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0486946',
        imagem: 'https://image.tmdb.org/t/p/w300/ziUx05m78Nil5CM90Yew5gFC8vB.jpg'
    },
    {
        titulo: 'X-Men: Apocalipse',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt3385516',
        imagem: 'https://image.tmdb.org/t/p/w300/a6OjCxF8DW9huIdAPshWJpO0ldx.jpg'
    },
    {
        titulo: 'X-Men: Fênix Negra',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt6565702',
        imagem: 'https://image.tmdb.org/t/p/w300/sKacZh7L9qR5jLpSnxgxung6D4Y.jpg'
    },
    {
        titulo: 'Rio 2',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt2357291',
        imagem: 'https://image.tmdb.org/t/p/w300/e0CKmNlKfWwc8LSgfyf4gYsTjjP.jpg'
    },
    {
        titulo: 'Rio',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt1436562',
        imagem: 'https://image.tmdb.org/t/p/w300/pPvCSyQCY6Xtl78Qo9o0YStUj6o.jpg'
    },
    {
        titulo: 'O Bicho Vai Pegar 4',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt4938374',
        imagem: 'https://image.tmdb.org/t/p/w300/z2dwEPtt8xBP6DSehwuwOGskokL.jpg'
    },
    {
        titulo: 'O Bicho Vai Pegar 3',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt1646926',
        imagem: 'https://image.tmdb.org/t/p/w300/cwPUGK0THXrgqaFf4QnG5pdmnJw.jpg'
    },
    {
        titulo: 'O Bicho Vai Pegar 2',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt1107365',
        imagem: 'https://image.tmdb.org/t/p/w300/wOlviAu1Bc8Xz9y4vG8gEZzpU2z.jpg'
    },
    {
        titulo: 'O Bicho Vai Pegar',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0400717',
        imagem: 'https://image.tmdb.org/t/p/w300/t6n81JDmbKnjjdagHmPx3gSGVNr.jpg'
    },
    {
        titulo: 'As Panteras',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt5033998',
        imagem: 'https://image.tmdb.org/t/p/w300/9jdMSIPbwK0wgjuOQz0AvkYQ4M3.jpg'
    },
    {
        titulo: 'Xtremo',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt11658120',
        imagem: 'https://image.tmdb.org/t/p/w300/5ghvx0Q5c57JoBNxFj4gSfXj6wK.jpg'
    },
    {
        titulo: 'Show Dogs: O Agente Canino',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt5691024',
        imagem: 'https://image.tmdb.org/t/p/w300/x7xXm9EDs5YTnGjczAATJ5jsown.jpg'
    },
    {
        titulo: 'Alien vs. Predador',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt0370263',
        imagem: 'https://image.tmdb.org/t/p/w300/xcz6Y1xlmDM5odLTLwqjX8mXeJ3.jpg'
    },
    {
        titulo: 'Batman vs Robin',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt4324274',
        imagem: 'https://image.tmdb.org/t/p/w300/aGp9XDXmVM5lCKHWtgBC15S7XLr.jpg'
    },
    {
        titulo: '300',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0416449',
        imagem: 'https://image.tmdb.org/t/p/w300/9W49fy5G7v9Ed3CXtvMi41YqZtt.jpg'
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
