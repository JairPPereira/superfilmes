var filmes = [
    {
        titulo: 'O último Duelo',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt4244994',
        imagem: 'https://image.tmdb.org/t/p/w300/mhrzzNauB1PKrwnqVbLQODNNTJN.jpg'
    },
    {
        titulo: 'Arranha-Céu: Coragem Sem Limite',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt5758778',
        imagem: 'https://image.tmdb.org/t/p/w300/fvwR00VUW2yFtSdYr8F3NUmusf6.jpg'
    },
    {
        titulo: 'Jungle Cruise',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0870154',
        imagem: 'https://image.tmdb.org/t/p/w300/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg'
    },
    {
        titulo: 'Vingadores: Ultimato',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt4154796',
        imagem: 'https://image.tmdb.org/t/p/w300/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg'
    },
    {
        titulo: 'Vingadores: Era de Ultron',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt2395427',
        imagem: 'https://image.tmdb.org/t/p/w300/vGIIl89vglo66yUfbuTxzNAs4y5.jpg'
    },
    {
        titulo: 'Os Vingadores: The Avengers',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0848228',
        imagem: 'https://image.tmdb.org/t/p/w300/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg'
    },
    {
        titulo: '007: Sem Tempo para Morrer',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt2382320',
        imagem: 'https://image.tmdb.org/t/p/w300/luE0KG1rWfUptbgNtlNtL5sihyd.jpg'
    },
    {
        titulo: 'Infiltrado',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt11083552',
        imagem: 'https://image.tmdb.org/t/p/w300/rNz8wy63GAabztAUkO4xMGk3upx.jpg'
    },
    {
        titulo: 'O Protetor 2',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt3766354',
        imagem: 'https://image.tmdb.org/t/p/w300/3arTw3WKvPAiaIq9gWORJjYFTC5.jpg'
    },
    {
        titulo: 'O Protetor',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0455944',
        imagem: 'https://image.tmdb.org/t/p/w300/xTSOdJ0Ljs439lnKB7NsWlTibZN.jpg'
    },
    {
        titulo: 'Blade: Trinity',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0359013',
        imagem: 'https://image.tmdb.org/t/p/w300/nTTQYwvhM0pJLJV9Z78TK9R4lZM.jpg'
    },
    {
        titulo: 'Blade II: O Caçador de Vampiros',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0187738',
        imagem: 'https://image.tmdb.org/t/p/w300/3dK0SgvApvrboOTfm7FZc4wAITk.jpg'
    },
    {
        titulo: 'Amor e Monstros',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt2222042',
        imagem: 'https://image.tmdb.org/t/p/w300/hnz5wRqeYKlugGbC7RZxC7DAiED.jpg'
    },
    {
        titulo: 'G.I. Joe: Retaliação',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt1583421',
        imagem: 'https://image.tmdb.org/t/p/w300/pMDcTdeuAtCPJKee8YdOP7Y8ElT.jpg'
    },
    {
        titulo: '13º Distrito - Ultimato',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt1247640',
        imagem: 'https://image.tmdb.org/t/p/w300/97eKX9vZeHk6ugHO8jFToaNVkQY.jpg'
    },
    {
        titulo: 'B13: 13º Distrito',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0414852',
        imagem: 'https://image.tmdb.org/t/p/w300/AoWK4Y4m3bBRmW1XXcQqXyo9gAj.jpg'
    },
    {
        titulo: 'Eternos',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt9032400',
        imagem: 'https://image.tmdb.org/t/p/w300/mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg'
    },
    {
        titulo: 'A Morte do Superman',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt7167658',
        imagem: 'https://image.tmdb.org/t/p/w300/ecPlsaYUnBfFt01cTqhpPFtcxem.jpg'
    },
    {
        titulo: 'A Morte do Superman',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0934706',
        imagem: 'https://image.tmdb.org/t/p/w300/wcF16pLROx0MVxVqcCMX2SRmdv3.jpg'
    },
    {
        titulo: 'Alerta Vermelho',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt7991608',
        imagem: 'https://image.tmdb.org/t/p/w300/pe17f8VDfzbvbHSAKAlcORtBHmW.jpg'
    },
    {
        titulo: 'O Profissional',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0110413',
        imagem: 'https://image.tmdb.org/t/p/w300/eThcNkIpmPYUVYZ5PMs7o5Fts1D.jpg'
    },
    {
        titulo: 'Quebrando Regras 3: Não Se Rendam',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt4790268',
        imagem: 'https://image.tmdb.org/t/p/w300/zxASjkP5seyJ261mNqbGPajHjQf.jpg'
    },
    {
        titulo: 'Quebrando Regras 2',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt1754264',
        imagem: 'https://image.tmdb.org/t/p/w300/dCTsgWyQKmrMopvtMHtnGA2tghW.jpg'
    },
    {
        titulo: 'Duelo no Asfalto',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt6527456',
        imagem: 'https://image.tmdb.org/t/p/w300/a7QZdgQpyelhlehIyT6fiwSblAl.jpg'
    },
    {
        titulo: 'Trovão Tropical',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt0942385',
        imagem: 'https://image.tmdb.org/t/p/w300/jCmzgf1SQ9eCpN6GloV64XtQKAK.jpg'
    },
    {
        titulo: 'O Código',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt1656190',
        imagem: 'https://image.tmdb.org/t/p/w300/oAW1cpxsJh4QS5nsS18VpVBeaKI.jpg'
    },
    {
        titulo: 'O Resgate',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt1656186',
        imagem: 'https://image.tmdb.org/t/p/w300/avSwXpzPfGfln7fhVHGoP9fiOEe.jpg'
    },
    {
        titulo: 'Entre Tiros e Beijos',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt1697800',
        imagem: 'https://image.tmdb.org/t/p/w300/1ylyVg32Mt2zdOJCECG1voYny90.jpg'
    },
    {
        titulo: 'Conspiração Implacável',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt13382698',
        imagem: 'https://image.tmdb.org/t/p/w300/1xpRrP85czylMeMqoM0iHKoptey.jpg'
    },
    {
        titulo: 'Liga da Justiça de Zack Snyder',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt12361974',
        imagem: 'https://image.tmdb.org/t/p/w300/ArWn6gCi61b3b3hclD2L0LOk66k.jpg'
    },
    {
        titulo: 'Quebrando as Regras 4',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt13470094',
        imagem: 'https://image.tmdb.org/t/p/w300/saL9WwmfVoaoeg1tVjyetnF1FEk.jpg'
    },
    {
        titulo: 'Miami Heat',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt8170998',
        imagem: 'https://image.tmdb.org/t/p/w300/kKFi6BPbXlhvsaywOWg0SvvaKR8.jpg'
    },
    {
        titulo: 'Homem-Aranha: Longe de Casa',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt6320628',
        imagem: 'https://image.tmdb.org/t/p/w300/tX0o4AdHpidgniTWwfzK0dNTKrc.jpg'
    },
    {
        titulo: 'Homem-Aranha: De Volta ao Lar',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt2250912',
        imagem: 'https://image.tmdb.org/t/p/w300/9Fgs1ewIZiBBTto1XDHeBN0D8ug.jpg'
    },
    {
        titulo: 'Garota da Moto',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt12802724',
        imagem: 'https://image.tmdb.org/t/p/w300/sYoWjGSW4XQRWwFDHf3kdMqtCLr.jpg'
    },
    {
        titulo: 'Shang-Chi e a Lenda dos Dez Anéis',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt9376612',
        imagem: 'https://image.tmdb.org/t/p/w300/ArrOBeio968bUuUOtEpKa1teIh4.jpg'
    },
    {
        titulo: 'Uma Saída de Mestre',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0317740',
        imagem: 'https://image.tmdb.org/t/p/w300/qJ3kCbJ19LHXtVWuWMpy88mFnSO.jpg'
    },
    {
        titulo: 'MIB: Homens de Preto 3',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt1409024',
        imagem: 'https://image.tmdb.org/t/p/w300/g3DyE2sU4Xr14XR1ZXirCn2lt7e.jpg'
    },
    {
        titulo: 'MIB - Homens de Preto II',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0120912',
        imagem: 'https://image.tmdb.org/t/p/w300/1zoknLsDO3M3aYLzfs3wIvXDTfC.jpg'
    },
    {
        titulo: 'A Múmia - Tumba do Imperador Dragão',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0859163',
        imagem: 'https://image.tmdb.org/t/p/w300/lHv4SqGuQ6K9Z0H6E5fkU7yZlxD.jpg'
    },
    {
        titulo: 'O Retorno da Múmia',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0209163',
        imagem: 'https://image.tmdb.org/t/p/w300/trLVOBJxgq4K4Ei2OJFZgIeaPzB.jpg'
    },
    {
        titulo: 'A Múmia',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt2345759',
        imagem: 'https://image.tmdb.org/t/p/w300/vH9Hd7njePEe6xnRrYYaDmF2yqX.jpg'
    },
    {
        titulo: 'A Múmia',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0120616',
        imagem: 'https://image.tmdb.org/t/p/w300/x9WtRo3zf7p3K7ERdlpqlRgtYU6.jpg'
    },
    {
        titulo: 'Quarteto Fantástico',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt1502712',
        imagem: 'https://image.tmdb.org/t/p/w300/XJ8jZ4hGyusnN41NnxR0vv5ghS.jpg'
    },
    {
        titulo: 'A Gente Se Vê Ontem',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt8743064',
        imagem: 'https://image.tmdb.org/t/p/w300/sE2MSSjAHVU8gOz2SPQMaTQtO9c.jpg'
    },
    {
        titulo: 'Mentes Sombrias',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt4073790',
        imagem: 'https://image.tmdb.org/t/p/w300/qbh5F9mWPFbbNsdXkjHMYmjncqQ.jpg'
    },
    {
        titulo: 'A 5ª Onda',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt2304933',
        imagem: 'https://image.tmdb.org/t/p/w300/asPv5M6bUn270EcUXUnEnC8CkB7.jpg'
    },
    {
        titulo: 'Busca Implacável 3',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt2446042',
        imagem: 'https://image.tmdb.org/t/p/w300/4lAnC2BU7VhUG9wxHSOai67Tiqg.jpg'
    },
    {
        titulo: 'Busca Implacável 2',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt1397280',
        imagem: 'https://image.tmdb.org/t/p/w300/laLGcxl36GAxahL5PbUC8qvabzO.jpg'
    },
    {
        titulo: 'Busca Implacável',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0936501',
        imagem: 'https://image.tmdb.org/t/p/w300/pubLTvUi3K6Jx8DZ42CeepVikWK.jpg'
    },
    {
        titulo: 'Jurassic World: Reino Ameaçado',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt4881806',
        imagem: 'https://image.tmdb.org/t/p/w300/5PWRDsozYR1VeExrFLqZ8Qpw07m.jpg'
    },
    {
        titulo: 'Jurassic World: O Mundo dos Dinossauros',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt0369610',
        imagem: 'https://image.tmdb.org/t/p/w300/dsnQBbJ9FM68uibzVxlknFcyFYJ.jpg'
    },
    {
        titulo: 'Jurassic Park 3',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0163025',
        imagem: 'https://image.tmdb.org/t/p/w300/xpS4DbBVfu9WsQqzoSa81hOt4mu.jpg'
    },
    {
        titulo: 'O Mundo Perdido: Jurassic Park',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0119567',
        imagem: 'https://image.tmdb.org/t/p/w300/gkF6JPfru2FEIP9du7QyHVLSOzu.jpg'
    },
    {
        titulo: 'Madrugada dos Mortos',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0363547',
        imagem: 'https://image.tmdb.org/t/p/w300/1ZwFI4EA9xGo3aJV9Ulqx7Y37Rz.jpg'
    },
    {
        titulo: '(A) Fronteira',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0814685',
        imagem: 'https://image.tmdb.org/t/p/w300/4vjOTv1FPf6B4Rcxu78ywf2glmd.jpg'
    },
    {
        titulo: 'Assassin s Creed',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt2094766',
        imagem: 'https://image.tmdb.org/t/p/w300/1Cxn5MxH3dDBXauIq6XusR1ZUKJ.jpg'
    },
    {
        titulo: 'Homem-Formiga e a Vespa',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt5095030',
        imagem: 'https://image.tmdb.org/t/p/w300/smRrzh8W4PfIYiqAEqc6U1D6Ekl.jpg'
    },
    {
        titulo: 'Homem-Formiga',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0478970',
        imagem: 'https://image.tmdb.org/t/p/w300/yiLqv1gwBENjbqTAdPxW4LhX6aA.jpg'
    },
    {
        titulo: 'Capitão América: Guerra Civil',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt3498820',
        imagem: 'https://image.tmdb.org/t/p/w300/8IoDJYGMoo4nEkjGADW2TtZRoWF.jpg'
    },
    {
        titulo: 'Capitão América 2: O Soldado Invernal',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt1843866',
        imagem: 'https://image.tmdb.org/t/p/w300/iBFPjLLHXkBojKpWDluJxnpM24h.jpg'
    },
    {
        titulo: 'Capitão América: O Primeiro Vingador',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0458339',
        imagem: 'https://image.tmdb.org/t/p/w300/f976JQnjMhCTa1yLXz7UH1pV4DG.jpg'
    },
    {
        titulo: 'Capitã Marvel',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt4154664',
        imagem: 'https://image.tmdb.org/t/p/w300/hVgLHgnsO46oSHJy5I4ekhqtoYv.jpg'
    },
    {
        titulo: 'Liga da Justiça: Trono de Atlantis',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt3878542',
        imagem: 'https://image.tmdb.org/t/p/w300/t6hcyzdgpGBVlEzizCmg5CWY8Fv.jpg'
    },
    {
        titulo: 'Bad Boys Para Sempre',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt1502397',
        imagem: 'https://image.tmdb.org/t/p/w300/lkWYrzLIclGj56r4NJxuWeisK9R.jpg'
    },
    {
        titulo: 'Os Bad Boys II',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0172156',
        imagem: 'https://image.tmdb.org/t/p/w300/yCvB5fG5aEPqa1St7ihY6KEAsHD.jpg'
    },
    {
        titulo: 'Venom: Tempo de Carnificina',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt7097896',
        imagem: 'https://image.tmdb.org/t/p/w300/h5UzYZquMwO9FVn15R2eK2itmHu.jpg'
    },
    {
        titulo: 'A Série Divergente: Insurgente',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt2908446',
        imagem: 'https://image.tmdb.org/t/p/w300/l0i7VfG5HAQT49ZKZNcef2booIq.jpg'
    },
    {
        titulo: 'A Série Divergente: Convergente',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt3410834',
        imagem: 'https://image.tmdb.org/t/p/w300/cAYhVm44sofmqaEGuQl4j5RL62S.jpg'
    },
    {
        titulo: 'Divergente',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt1840309',
        imagem: 'https://image.tmdb.org/t/p/w300/gktEuhRYZrlinT3sLSt7Fvmqbe5.jpg'
    },
    {
        titulo: 'Alemão',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt3527550',
        imagem: 'https://image.tmdb.org/t/p/w300/5q9wVeY0uGvpwEc3Z7lnhnZdROt.jpg'
    },
    {
        titulo: 'Os Piratas: Em Busca do Tesouro Perdido',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt17491040',
        imagem: 'https://image.tmdb.org/t/p/w300/7TxDi9DhUIo23eZftFQPk86ojtN.jpg'
    },
    {
        titulo: 'O Caminho para El Dorado',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt0138749',
        imagem: 'https://image.tmdb.org/t/p/w300/dqFhMb6zozOPaiXILKt0VC8n7y6.jpg'
    },
    {
        titulo: '13 Minutos de Tormenta',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt9274670',
        imagem: 'https://image.tmdb.org/t/p/w300/c0Y2aNGSPlF7y926n2uHvPfo5TF.jpg'
    },
    {
        titulo: 'O Projeto Adam',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt2463208',
        imagem: 'https://image.tmdb.org/t/p/w300/11MJy6lkt7yTEIowEPIkaK4B7lM.jpg'
    },
    {
        titulo: 'Celular: Um Grito de Socorro',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt0337921',
        imagem: 'https://image.tmdb.org/t/p/w300/zd5AwX7hWNcSnceDuT5dAh1mVap.jpg'
    },
    {
        titulo: 'O Preço do Amanhã',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt1637688',
        imagem: 'https://image.tmdb.org/t/p/w300/xuFZVPVebRrRwiH14uST8m4ulXj.jpg'
    },
    {
        titulo: 'Sniper Americano',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt2179136',
        imagem: 'https://image.tmdb.org/t/p/w300/mAXzc2oDTTYcnn6IGHlSXvmXloG.jpg'
    },
    {
        titulo: 'MIB - Homens de Preto',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0119654',
        imagem: 'https://image.tmdb.org/t/p/w300/4Y4I5PhPuoFWiOr5NBstFWkhYjf.jpg'
    },
    {
        titulo: 'Truque de Mestre: O 2º Ato',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt3110958',
        imagem: 'https://image.tmdb.org/t/p/w300/9uCUHxN5MD4vX6q1YEnpL6bQLiw.jpg'
    },
    {
        titulo: '48 Horas, Parte 2',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0099044',
        imagem: 'https://image.tmdb.org/t/p/w300/xFQlof9zvOgqTaoMZ2HQogzid2n.jpg'
    },
    {
        titulo: '48 Horas',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0083511',
        imagem: 'https://image.tmdb.org/t/p/w300/eQuTYwSnsYAZYaVbArPxlTlRbtX.jpg'
    },
    {
        titulo: '007: Quantum of Solace',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0830515',
        imagem: 'https://image.tmdb.org/t/p/w300/fV0ejyUsnqd8BzHcK13C7ZJFEa1.jpg'
    },
    {
        titulo: '007: Operação Skyfall',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt1074638',
        imagem: 'https://image.tmdb.org/t/p/w300/1U1gkQynuQRNsZ8zm13zSCGOFAj.jpg'
    },
    {
        titulo: '007 Contra Spectre',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt2379713',
        imagem: 'https://image.tmdb.org/t/p/w300/ozwsRvKABRcF8VrNNvMkKt8KWyF.jpg'
    },
    {
        titulo: '6 Balas',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt1975249',
        imagem: 'https://image.tmdb.org/t/p/w300/sMSYOBClCr8cQDxbYQaikqi5YG7.jpg'
    },
    {
        titulo: '#Alive',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt10620868',
        imagem: 'https://image.tmdb.org/t/p/w300/fUEv9INjh1HEdbD9BAExioSO65a.jpg'
    },
    {
        titulo: 'Thor: O Mundo Sombrio',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt1981115',
        imagem: 'https://image.tmdb.org/t/p/w300/oip30thvJBpJRveA13Rtd2am5Qg.jpg'
    },
    {
        titulo: 'Logan',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt3315342',
        imagem: 'https://image.tmdb.org/t/p/w300/f0CtZbae9cXj8bkWdCHzUHx5lsR.jpg'
    },
    {
        titulo: 'Mar de Fogo',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0317648',
        imagem: 'https://image.tmdb.org/t/p/w300/1xFLWSxUp28egthMzqdfEokYa3h.jpg'
    },
    {
        titulo: 'Injustiça: Deuses Entre Nós',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt5012504',
        imagem: 'https://image.tmdb.org/t/p/w300/rzrSeqqpm1BwJ3tcTznztBtLLSD.jpg'
    },
    {
        titulo: 'Venom',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt1270797',
        imagem: 'https://image.tmdb.org/t/p/w300/bURIWlkMbzT8RdpemzCmQECo2Uh.jpg'
    },
    {
        titulo: 'Assassino a Preço Fixo 2 - A Ressurreição',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt3522806',
        imagem: 'https://image.tmdb.org/t/p/w300/uNdYyWMMpEHWsMALjko1QCpAZVM.jpg'
    },
    {
        titulo: 'Assassino a Preço Fixo',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0472399',
        imagem: 'https://image.tmdb.org/t/p/w300/AbO2OzFiWt9cEjgZfSOnp75ihGE.jpg'
    },
    {
        titulo: 'Linha de Frente',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt2312718',
        imagem: 'https://image.tmdb.org/t/p/w300/3o0rqlEtF04y4atsc9VaH7DDvCq.jpg'
    },
    {
        titulo: 'Megatubarão',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt4779682',
        imagem: 'https://image.tmdb.org/t/p/w300/wrJkShDPK4TcV0nHix3HASEmkul.jpg'
    },
    {
        titulo: 'A Lenda do Zorro',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt0386140',
        imagem: 'https://image.tmdb.org/t/p/w300/dG28HziPyltTCpmMBLHmgGBbtRr.jpg'
    },
    {
        titulo: 'Assalto ao Banco da Espanha',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt9742794',
        imagem: 'https://image.tmdb.org/t/p/w300/AhRSv4npEaE8ZvuJh4CmQpsXDZg.jpg'
    },
    {
        titulo: 'Terror na Síria',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt7897478',
        imagem: 'https://image.tmdb.org/t/p/w300/dby3MpllNvWjOqccys01214xl2n.jpg'
    },
    {
        titulo: 'The Witcher: Lenda do Lobo',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt11657662',
        imagem: 'https://image.tmdb.org/t/p/w300/kPry1BAfJtYNyQEpKdV4cYan6MB.jpg'
    },
    {
        titulo: 'Tolerância Zero',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt3727690',
        imagem: 'https://image.tmdb.org/t/p/w300/psnx0FmNwAzTwDmR3nRSq6yutby.jpg'
    },
    {
        titulo: 'The Old Guard',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt7556122',
        imagem: 'https://image.tmdb.org/t/p/w300/knfExByNW2jCwtmIuwYYxzPKpkm.jpg'
    },
    {
        titulo: 'Batman: Morte em Família',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt12794046',
        imagem: 'https://image.tmdb.org/t/p/w300/97zKwVhOLyTnFbnuLZHbOboLyrM.jpg'
    },
    {
        titulo: 'Pânico no metrô',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt2649128',
        imagem: 'https://image.tmdb.org/t/p/w300/VLsj6U0b03nIz39iCf3NJhtj85.jpg'
    },
    {
        titulo: 'Elysium',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt1535108',
        imagem: 'https://image.tmdb.org/t/p/w300/2QxAzqKf56IMHMMbPkaIkb3Ul6S.jpg'
    },
    {
        titulo: 'Á Beira do Abismo',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt1568338',
        imagem: 'https://image.tmdb.org/t/p/w300/s7kxuu7tLVQJsLdZhhXRfGXpWBa.jpg'
    },
    {
        titulo: 'A Hora do Rush 3',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0293564',
        imagem: 'https://image.tmdb.org/t/p/w300/7sqXl2yNWv1roe3LN3hNrhozJvn.jpg'
    },
    {
        titulo: 'A Hora do Rush 2',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0266915',
        imagem: 'https://image.tmdb.org/t/p/w300/5DNVpS1gzEgaoPIW5HuPbKa1dnT.jpg'
    },
    {
        titulo: 'A Hora do Rush',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0120812',
        imagem: 'https://image.tmdb.org/t/p/w300/wVWrIJ18BnBuwd9cVjxju5a2Wtl.jpg'
    },
    {
        titulo: 'Doutor Estranho',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt1211837',
        imagem: 'https://image.tmdb.org/t/p/w300/iM1hlVGZ5Qwn3gO6ewTszY7OrLY.jpg'
    },
    {
        titulo: '3 Ninjas em Apuros',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0112255',
        imagem: 'https://image.tmdb.org/t/p/w300/grCDfYf3GNaiQ74plEGmvyKUFrF.jpg'
    },
    {
        titulo: '3 Ninjas Contra-Atacam',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0109015',
        imagem: 'https://image.tmdb.org/t/p/w300/yGCxSE67OVUcAQxdQajIKQDyHIH.jpg'
    },
    {
        titulo: '3 Ninjas',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0103596',
        imagem: 'https://image.tmdb.org/t/p/w300/KaUfT7TvsZt26OwBqmbPiMxvhO.jpg'
    },
    {
        titulo: 'Dog Soldiers - Cães de Caça',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0280609',
        imagem: 'https://image.tmdb.org/t/p/w300/izAoRaMvxWgTBfVFgbHV4LVu0vW.jpg'
    },
    {
        titulo: 'Homem de Ferro 3',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt1300854',
        imagem: 'https://image.tmdb.org/t/p/w300/C7MZwRTjvEy7gkWcLJeBGZFE1w.jpg'
    },
    {
        titulo: 'Homem de Ferro 2',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt1228705',
        imagem: 'https://image.tmdb.org/t/p/w300/vzROjQbgKWMVf2EldXipCcjpuBL.jpg'
    },
    {
        titulo: 'Homem de Ferro',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0371746',
        imagem: 'https://image.tmdb.org/t/p/w300/adSJ0DpgOsMwrpUH78cZpLGOOAk.jpg'
    },
    {
        titulo: 'John Wick 3: Parabellum',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt6146586',
        imagem: 'https://image.tmdb.org/t/p/w300/mOoERCQCGrgFHOrco7wLy6CAYfp.jpg'
    },
    {
        titulo: 'John Wick: Um Novo Dia para Matar',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt4425200',
        imagem: 'https://image.tmdb.org/t/p/w300/k36UzsRQaY6E055cdYPdYbyREer.jpg'
    },
    {
        titulo: 'John Wick: De Volta ao Jogo',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt2911666',
        imagem: 'https://image.tmdb.org/t/p/w300/41I5E0L6eLtqfWQ4D6ix2dbarzo.jpg'
    },
    {
        titulo: 'Free Guy: Assumindo o Controle',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt6264654',
        imagem: 'https://image.tmdb.org/t/p/w300/jXlGeLOg2RKHmV9CinVaIB4ijKU.jpg'
    },
    {
        titulo: 'Anjos da Lei 2',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt2294449',
        imagem: 'https://image.tmdb.org/t/p/w300/zuObAfwTarh2OqzxRjT3mhK1xWh.jpg'
    },
    {
        titulo: 'Anjos da Lei',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt1232829',
        imagem: 'https://image.tmdb.org/t/p/w300/y3rFfmfBmjClMIXjJb80DBUwFQh.jpg'
    },
    {
        titulo: 'As Passageiras',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt10763820',
        imagem: 'https://image.tmdb.org/t/p/w300/3DUvDoBOiaCXKw1JX09USlfXjkM.jpg'
    },
    {
        titulo: 'Invasão Cósmica',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt11762434',
        imagem: 'https://image.tmdb.org/t/p/w300/v5Jodmj8equxBklBlhZMHJtkp5J.jpg'
    },
    {
        titulo: 'Pegue a Bala',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt11833710',
        imagem: 'https://image.tmdb.org/t/p/w300/m3DUe1cpiBsLg0caIO2JDr7HK5Z.jpg'
    },
    {
        titulo: 'Ruas em Guerra',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt7903530',
        imagem: 'https://image.tmdb.org/t/p/w300/jk5DpTJeksKfS6NN5xK4iNGCCvN.jpg'
    },
    {
        titulo: 'Os Fora Da Lei',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt7468056',
        imagem: 'https://image.tmdb.org/t/p/w300/wbeS6PkCsi6UbRYzHBOauzqKXjO.jpg'
    },
    {
        titulo: 'O Vidente',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0435705',
        imagem: 'https://image.tmdb.org/t/p/w300/hF2pgtetdZ1VseXvVcy92s5lf5l.jpg'
    },
    {
        titulo: 'A Nova Fúria do Dragão',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0075439',
        imagem: 'https://image.tmdb.org/t/p/w300/wAxu7VYgBtrGF14GtwxQ7Vk3S8K.jpg'
    },
    {
        titulo: 'O Rei das Drogas',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt6914542',
        imagem: 'https://image.tmdb.org/t/p/w300/zLuOVMApk1zQq1T4lsoygdwGjFY.jpg'
    },
    {
        titulo: 'Eu, Robô',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0343818',
        imagem: 'https://image.tmdb.org/t/p/w300/2I8b8SScgbVONX0LCURG8O184Dy.jpg'
    },
    {
        titulo: 'Super Murali',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt7268738',
        imagem: 'https://image.tmdb.org/t/p/w300/d66tZZvkbUrIUbqzF1LYdGUyCe3.jpg'
    },
    {
        titulo: 'Sooryavanshi',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt9531772',
        imagem: 'https://image.tmdb.org/t/p/w300/1vuix8r1CJ2M6IldR27Z95hWm7e.jpg'
    },
    {
        titulo: 'Anaconda 2: A Caçada pela Orquídea Sangrenta',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0366174',
        imagem: 'https://image.tmdb.org/t/p/w300/yi3KRmJlEtRV090wgeEPiFQ6cxm.jpg'
    },
    {
        titulo: 'Anaconda 4',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt1150934',
        imagem: 'https://image.tmdb.org/t/p/w300/rCp9VYqvBphiETtC86fGZFSXc63.jpg'
    },
    {
        titulo: 'Indiana Jones e os Caçadores da Arca Perdida',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0082971',
        imagem: 'https://image.tmdb.org/t/p/w300/og4GvSmw3qwiBK8eJF2Txcncian.jpg'
    },
    {
        titulo: 'Indiana Jones e a última Cruzada',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0097576',
        imagem: 'https://image.tmdb.org/t/p/w300/vTBem2ZGmLKVgaD3EtJUfMQ9AH1.jpg'
    },
    {
        titulo: 'Indiana Jones e o Templo da Perdição',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0087469',
        imagem: 'https://image.tmdb.org/t/p/w300/rAAruJ0hAad7dgkamxh8sKTaiRs.jpg'
    },
    {
        titulo: 'Indiana Jones e o Reino da Caveira de Cristal',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0367882',
        imagem: 'https://image.tmdb.org/t/p/w300/y1gGYQ33CNVpo9mmxmkrUUmANwf.jpg'
    },
    {
        titulo: 'Jogos Vorazes: Em Chamas',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt1951264',
        imagem: 'https://image.tmdb.org/t/p/w300/m1lky5ftnhLRpkoYWKssH8qvlRU.jpg'
    },
    {
        titulo: 'A Invasão',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt6774786',
        imagem: 'https://image.tmdb.org/t/p/w300/6wq8H7AZRdQZcc9VE6oVjRvDkAG.jpg'
    },
    {
        titulo: 'Cidade Virtual',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt6399158',
        imagem: 'https://image.tmdb.org/t/p/w300/v2TRu7tQ8LKHOwfusckYjHvXiya.jpg'
    },
    {
        titulo: 'Missão Secreta',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt5606538',
        imagem: 'https://image.tmdb.org/t/p/w300/k2G4kcp6vg5jMUaT2g4URphV4fb.jpg'
    },
    {
        titulo: 'Intervenção',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt14368728',
        imagem: 'https://image.tmdb.org/t/p/w300/h7BAdxykcXu702wpmKTYSnnr670.jpg'
    },
    {
        titulo: 'Procurar e Destruir',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt11791146',
        imagem: 'https://image.tmdb.org/t/p/w300/uLurpF4Ay29oTnfsJJBXwWNuCmS.jpg'
    },
    {
        titulo: 'Como Assaltar Um Banco',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt5420870',
        imagem: 'https://image.tmdb.org/t/p/w300/5qElteE5duGiTNeGZIRRjIHGY5p.jpg'
    },
    {
        titulo: 'Virando a Mesa',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt7390548',
        imagem: 'https://image.tmdb.org/t/p/w300/qTRLUBV2VVfqHmeWA5B3zj7nwdw.jpg'
    },
    {
        titulo: 'Colombiana: Em Busca de Vingança',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt1657507',
        imagem: 'https://image.tmdb.org/t/p/w300/yfocdCwsdaJQNOpXacHet1S3QEN.jpg'
    },
    {
        titulo: 'O Homem Que Luta Só',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0053220',
        imagem: 'https://image.tmdb.org/t/p/w300/1uZ7rlmKhM5kJ3su7CiIlzQS3Df.jpg'
    },
    {
        titulo: 'Inferno',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt3062096',
        imagem: 'https://image.tmdb.org/t/p/w300/cnqvFvjAaV28F1tU7986VVg0WP7.jpg'
    },
    {
        titulo: 'Deadpool 2',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt5463162',
        imagem: 'https://image.tmdb.org/t/p/w300/6CABdPx68rYoLdvXhIJkilOj6XZ.jpg'
    },
    {
        titulo: 'Deadpool',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt1431045',
        imagem: 'https://image.tmdb.org/t/p/w300/swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg'
    },
    {
        titulo: 'G.I. Joe Origens: Snake Eyes',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt8404256',
        imagem: 'https://image.tmdb.org/t/p/w300/uVwQxrSp9TVuNzrsh63U0reYX7O.jpg'
    },
    {
        titulo: 'Quebrando Regras',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt1023111',
        imagem: 'https://image.tmdb.org/t/p/w300/4xKCipkzg3xnGbkOUxU3xByRZAv.jpg'
    },
    {
        titulo: 'Kill Bill: Volume 2',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0378194',
        imagem: 'https://image.tmdb.org/t/p/w300/4niMDDzBOR1jf4jRshLRaG0Cuaz.jpg'
    },
    {
        titulo: 'Kill Bill: Volume 1',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0266697',
        imagem: 'https://image.tmdb.org/t/p/w300/oj0ibkqKGJ3CvSTb3Pkx299P0SK.jpg'
    },
    {
        titulo: 'Valente',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt1217209',
        imagem: 'https://image.tmdb.org/t/p/w300/jX9O3eyzfw937QOhRF4wz6nhxBM.jpg'
    },
    {
        titulo: 'Missão: Impossível - Efeito Fallout',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt4912910',
        imagem: 'https://image.tmdb.org/t/p/w300/i273qQubszItr11lQNMFWnYP4J1.jpg'
    },
    {
        titulo: 'Missão: Impossível - Nação Secreta',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt2381249',
        imagem: 'https://image.tmdb.org/t/p/w300/fxL6ktSUDejDq9Ni6UsoY73DC2I.jpg'
    },
    {
        titulo: 'Missão: Impossível - Protocolo Fantasma',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt1229238',
        imagem: 'https://image.tmdb.org/t/p/w300/9Odva4vcrL6D7NRhIMlYf8Dg5nC.jpg'
    },
    {
        titulo: 'Missão: Impossível 3',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0317919',
        imagem: 'https://image.tmdb.org/t/p/w300/4DfRFWO4B3mD2gBXqWH6Rv0x0GX.jpg'
    },
    {
        titulo: 'Missão: Impossível 2',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0120755',
        imagem: 'https://image.tmdb.org/t/p/w300/sT5hbs7rmMk2Edup7Pw9MB02x9G.jpg'
    },
    {
        titulo: 'Missão: Impossível',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0117060',
        imagem: 'https://image.tmdb.org/t/p/w300/ymisRFnNz9DUiEKn4ViMGb91Gw9.jpg'
    },
    {
        titulo: 'Blade: O Caçador de Vampiros',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0120611',
        imagem: 'https://image.tmdb.org/t/p/w300/zyivyoXd6zP09tS1PP7b35sB84h.jpg'
    },
    {
        titulo: 'Fantasmas de Marte',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0228333',
        imagem: 'https://image.tmdb.org/t/p/w300/35Bg0I2aTB1j3Ugcw02y9T5nTQx.jpg'
    },
    {
        titulo: 'O Espanta Tubarões',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0307453',
        imagem: 'https://image.tmdb.org/t/p/w300/1tPhFqGScPYbaLuczBnlFGjNUqj.jpg'
    },
    {
        titulo: 'A Outra Face',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt0119094',
        imagem: 'https://image.tmdb.org/t/p/w300/loR8prjWhkOdufD1rfREpXQsrNJ.jpg'
    },
    {
        titulo: 'Missão Resgate',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt3758814',
        imagem: 'https://image.tmdb.org/t/p/w300/4LHON8XgAfMSVG2Vv54caU6D1r5.jpg'
    },
    {
        titulo: 'Descendentes 2',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt5117876',
        imagem: 'https://image.tmdb.org/t/p/w300/5jGEBYg13Sa1J3D6KOlQ2EH8Uxg.jpg'
    },
    {
        titulo: 'A Marca do Zorro',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0032762',
        imagem: 'https://image.tmdb.org/t/p/w300/ahmBBQHINkGpgnxnuBIfzUC9mkL.jpg'
    },
    {
        titulo: 'Posto de Combate',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt3833480',
        imagem: 'https://image.tmdb.org/t/p/w300/b1LYcrHuYGUGFZwhOiAitapWHfl.jpg'
    },
    {
        titulo: 'Heróis Muito Loucos',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0132347',
        imagem: 'https://image.tmdb.org/t/p/w300/hUUt97GiCDugE8oTIbhiwTyNhD7.jpg'
    },
    {
        titulo: 'Sobreviva ao Jogo',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt12861508',
        imagem: 'https://image.tmdb.org/t/p/w300/o3QnhGeG4Kx9dkSRTbDx4OSw6cr.jpg'
    },
    {
        titulo: 'A última Resistência',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt7691572',
        imagem: 'https://image.tmdb.org/t/p/w300/iSOmOm5PlJ3kEhkQJxtqMSeuWpQ.jpg'
    },
    {
        titulo: 'A última Missão',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt6012244',
        imagem: 'https://image.tmdb.org/t/p/w300/8LkR5gI0254viUgG1G7Cp8VpXjN.jpg'
    },
    {
        titulo: 'Quarteto Fantástico e o Surfista Prateado',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0486576',
        imagem: 'https://image.tmdb.org/t/p/w300/xMGHJnUovhF8BVRQFdMgwf99Q2g.jpg'
    },
    {
        titulo: 'Fuga da Morte',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt12528166',
        imagem: 'https://image.tmdb.org/t/p/w300/dOC9vx5PHc9ibRAG96rDQwr1TBW.jpg'
    },
    {
        titulo: 'Titanic II',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt1640571',
        imagem: 'https://image.tmdb.org/t/p/w300/3m12UeP1DMfhYZyvpLftaJGsyp3.jpg'
    },
    {
        titulo: 'Sonic: O Filme',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt3794354',
        imagem: 'https://image.tmdb.org/t/p/w300/eOC0FSGqyzcnnx7XFgLazI9nACT.jpg'
    },
    {
        titulo: 'Matrix Reloaded',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0234215',
        imagem: 'https://image.tmdb.org/t/p/w300/e7DdXOXP6mH2y7Fv7ujrk5tlsh7.jpg'
    },
    {
        titulo: 'Matrix',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0133093',
        imagem: 'https://image.tmdb.org/t/p/w300/lDqMDI3xpbB9UQRyeXfei0MXhqb.jpg'
    },
    {
        titulo: 'O Legado',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt6439748',
        imagem: 'https://image.tmdb.org/t/p/w300/fhU40W8ryuDAPKTbUgxIwOCKJbZ.jpg'
    },
    {
        titulo: 'Lua Cheia',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt5351576',
        imagem: 'https://image.tmdb.org/t/p/w300/rNYWjCvK4m6WQeJwiF7wZTIXTu9.jpg'
    },
    {
        titulo: 'Perseguição',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt15106860',
        imagem: 'https://image.tmdb.org/t/p/w300/iEmwNY1s9BUJ2KguAkMuAhlq3cE.jpg'
    },
    {
        titulo: 'Fúria de Titãs',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0800320',
        imagem: 'https://image.tmdb.org/t/p/w300/R21t8SVfr6sQQ5mzjkecEU02YW.jpg'
    },
    {
        titulo: 'Fúria de Titãs',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0082186',
        imagem: 'https://image.tmdb.org/t/p/w300/5LObtR57MxWD7Me0tiRaqgrqKQD.jpg'
    },
    {
        titulo: 'Alerta Vermelho',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt11285908',
        imagem: 'https://image.tmdb.org/t/p/w300/lT6BaTnPc9Q7oPyLfiBtC6fNyep.jpg'
    },
    {
        titulo: 'Johnny English 3.0',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt6921996',
        imagem: 'https://image.tmdb.org/t/p/w300/cnchtu8rXPFAkvii9WC4htmt9CZ.jpg'
    },
    {
        titulo: 'O Retorno de Johnny English',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt1634122',
        imagem: 'https://image.tmdb.org/t/p/w300/nM0r4uUi1K3cIebwB9gfbohtSo5.jpg'
    },
    {
        titulo: 'Johnny English',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0274166',
        imagem: 'https://image.tmdb.org/t/p/w300/N4vioZ2pDBQWGBgTGxBmF82vwm.jpg'
    },
    {
        titulo: 'Bater ou Correr em Londres',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt0300471',
        imagem: 'https://image.tmdb.org/t/p/w300/fVPZumNA50cSePKm56lEZ9G86f4.jpg'
    },
    {
        titulo: 'Aquaman',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt1477834',
        imagem: 'https://image.tmdb.org/t/p/w300/oB367uFcyU2uhGkFqo5RB4Evdji.jpg'
    },
    {
        titulo: 'Emboscada',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt13496236',
        imagem: 'https://image.tmdb.org/t/p/w300/zYduknwFBYYChOCyWZLhAMhagr6.jpg'
    },
    {
        titulo: 'Carga Explosiva: O Legado',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt2938956',
        imagem: 'https://image.tmdb.org/t/p/w300/iti0ub1R6JBCfwJarLktNL47HC.jpg'
    },
    {
        titulo: 'Carga Explosiva 3',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt1129442',
        imagem: 'https://image.tmdb.org/t/p/w300/hC4lRSuZA29l4NbmQ8sdvkpRkO5.jpg'
    },
    {
        titulo: 'Carga Explosiva 2',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0388482',
        imagem: 'https://image.tmdb.org/t/p/w300/nNMJ8d5ZUTFxwP00DqxhqczB8z.jpg'
    },
    {
        titulo: 'Carga Explosiva',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0293662',
        imagem: 'https://image.tmdb.org/t/p/w300/4VfuE1wgsL9jIrmuI4AF6zEnDbb.jpg'
    },
    {
        titulo: 'O Sequestro',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt11799110',
        imagem: 'https://image.tmdb.org/t/p/w300/xf9dcjz6cyJJEKzSQG1wiFD61dh.jpg'
    },
    {
        titulo: 'Demolidor: O Homem Sem Medo',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0287978',
        imagem: 'https://image.tmdb.org/t/p/w300/yGXFYtKTH3hhNzUtLkL6l6HkMnJ.jpg'
    },
    {
        titulo: 'Pandemia: A Guerra Final',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt12335692',
        imagem: 'https://image.tmdb.org/t/p/w300/zBQFWjOIE3hoYCG67Y3VVaSnLyc.jpg'
    },
    {
        titulo: 'Vírus',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0806203',
        imagem: 'https://image.tmdb.org/t/p/w300/sXwshSzVsMvpJpGxvuPGsRxGzpV.jpg'
    },
    {
        titulo: 'O Mensageiro',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0119925',
        imagem: 'https://image.tmdb.org/t/p/w300/hfgJx9x0mT7kI9Vy80cwL9lt8TK.jpg'
    },
    {
        titulo: 'Batman Ninja',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt7451284',
        imagem: 'https://image.tmdb.org/t/p/w300/zaw7PQ7GvTliBVmfg2o8OJfhWjU.jpg'
    },
    {
        titulo: 'Cruzando a Linha',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt10207710',
        imagem: 'https://image.tmdb.org/t/p/w300/pm1sZsTjZ5e9buaxlbk4jYOjjUA.jpg'
    },
    {
        titulo: 'Á Queima-Roupa',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt2499472',
        imagem: 'https://image.tmdb.org/t/p/w300/zFN9c739JHBoLXr3MBjGwrsR7ys.jpg'
    },
    {
        titulo: 'Os Condenados',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0443473',
        imagem: 'https://image.tmdb.org/t/p/w300/ti2s7DhiurLvONSygW97AzzsGHR.jpg'
    },
    {
        titulo: 'Epidemia',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0114069',
        imagem: 'https://image.tmdb.org/t/p/w300/lZ3NPASzLET3tp1RnEMvakN0mic.jpg'
    },
    {
        titulo: 'Ford vs Ferrari',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt1950186',
        imagem: 'https://image.tmdb.org/t/p/w300/t8L9dqNMclXJHP0TesPsPS2RvB1.jpg'
    },
    {
        titulo: 'Resident Evil 6: O Capítulo Final',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt2592614',
        imagem: 'https://image.tmdb.org/t/p/w300/kgkPkKPjDOfBjlUyWBg3GQNwBer.jpg'
    },
    {
        titulo: 'Homem-Aranha 2',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0316654',
        imagem: 'https://image.tmdb.org/t/p/w300/y06FivvCfqapHB3iETOtbAqWdkD.jpg'
    },
    {
        titulo: 'Viagem 2: A Ilha Misteriosa',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt1397514',
        imagem: 'https://image.tmdb.org/t/p/w300/yfRONMxtQMGgxV8nv2BgIYYzm2O.jpg'
    },
    {
        titulo: 'O Filho do Batman',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt3139072',
        imagem: 'https://image.tmdb.org/t/p/w300/oPfc2Q0FZ1QObSLhGq9mAv7L2GV.jpg'
    },
    {
        titulo: 'Batman vs Superman: A Origem da Justiça',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt2975590',
        imagem: 'https://image.tmdb.org/t/p/w300/vh6pjeGH0GQupLepPCZn5PylcRg.jpg'
    },
    {
        titulo: 'Kick-Ass 2',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt1650554',
        imagem: 'https://image.tmdb.org/t/p/w300/ch18ICcbiA5z089LrJH5Hed7ZJl.jpg'
    },
    {
        titulo: 'Um Dia Difícil',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt14465894',
        imagem: 'https://image.tmdb.org/t/p/w300/bktIW44oeurTptHLdkj7ayc4zbH.jpg'
    },
    {
        titulo: 'Cavaleiros Desesperados',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt11833692',
        imagem: 'https://image.tmdb.org/t/p/w300/vMfcyQAb1YybrQEazNPZlPiG1ag.jpg'
    },
    {
        titulo: 'Anna - O Perigo Tem Nome',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt7456310',
        imagem: 'https://image.tmdb.org/t/p/w300/itUXQRTYJYDM5vwJFDWKb0uxqoC.jpg'
    },
    {
        titulo: 'As Bem-Armadas',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt2404463',
        imagem: 'https://image.tmdb.org/t/p/w300/2SMBBtsVYCTIDpJPSw4oFzXkQy6.jpg'
    },
    {
        titulo: 'O Contra-Ataque',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt13784650',
        imagem: 'https://image.tmdb.org/t/p/w300/3ujIQNdwWpKOqEGIrtCWUTwW8ux.jpg'
    },
    {
        titulo: 'A Caçada',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt8244784',
        imagem: 'https://image.tmdb.org/t/p/w300/mDt3GkephI5yrRsEgLfdo3MYxyj.jpg'
    },
    {
        titulo: 'Como Virei Super-Herói',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt10345590',
        imagem: 'https://image.tmdb.org/t/p/w300/iYl4YJ1BnuJEKjn0dmKlMa1Bwuo.jpg'
    },
    {
        titulo: 'Velocidade Máxima',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0111257',
        imagem: 'https://image.tmdb.org/t/p/w300/d30AWcDezR0qM6OgXovulfA4z8N.jpg'
    },
    {
        titulo: 'Agentes Vanguard',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt9695722',
        imagem: 'https://image.tmdb.org/t/p/w300/slR16xWVy7kc3xr1GlSK41ZSjpa.jpg'
    },
    {
        titulo: 'Impasse',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt10957044',
        imagem: 'https://image.tmdb.org/t/p/w300/9lYAj14i5SDY0HvZ21EhXVi8A4E.jpg'
    },
    {
        titulo: 'Superfly: Crime e Poder',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt7690670',
        imagem: 'https://image.tmdb.org/t/p/w300/3gooCZPkWvosSIlLJSSiJSzS5jL.jpg'
    },
    {
        titulo: 'Godzilla',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0120685',
        imagem: 'https://image.tmdb.org/t/p/w300/8M5teD4jLX3sKgzszaFdwq6zYJv.jpg'
    },
    {
        titulo: 'Preso no Tempo',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt3399078',
        imagem: 'https://image.tmdb.org/t/p/w300/t3gtmladqzynRyyDIHtEaSNPoz4.jpg'
    },
    {
        titulo: 'A Colônia',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt1160996',
        imagem: 'https://image.tmdb.org/t/p/w300/Acc3skjs4TGxF6G7VxG3WvVvbRr.jpg'
    },
    {
        titulo: 'Loucos e Perigosos',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt4694544',
        imagem: 'https://image.tmdb.org/t/p/w300/zQw4fSps9BJbr5bneQGrv36ADrX.jpg'
    },
    {
        titulo: '6 Dias',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt4703048',
        imagem: 'https://image.tmdb.org/t/p/w300/tlyx6WtaO6QtFFGAAxQL2K403Pe.jpg'
    },
    {
        titulo: 'Jogo Bruto',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0091828',
        imagem: 'https://image.tmdb.org/t/p/w300/1s5yAP5Se4FKO2tvNzgo0gCgJ7P.jpg'
    },
    {
        titulo: 'Os Chacais do Oeste',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0070825',
        imagem: 'https://image.tmdb.org/t/p/w300/k9TWEDuvENME9m5SK9OQR9FaSiX.jpg'
    },
    {
        titulo: 'Spawn: O Soldado do Inferno',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0120177',
        imagem: 'https://image.tmdb.org/t/p/w300/653tt7EeQZ2LqLMeiGApxkdsKB2.jpg'
    },
    {
        titulo: 'Agente das Sombras',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt14060094',
        imagem: 'https://image.tmdb.org/t/p/w300/qgW5iIe6QUn170omG6tdGS4BB9U.jpg'
    },
    {
        titulo: 'Jack Reacher: O último Tiro',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0790724',
        imagem: 'https://image.tmdb.org/t/p/w300/14Wj4HZOdPmN2DXNbXXvJH2DwIf.jpg'
    },
    {
        titulo: 'A Profissional',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt6079772',
        imagem: 'https://image.tmdb.org/t/p/w300/u0jGhri9AjtX3s9ldyyG6MGJfS0.jpg'
    },
    {
        titulo: '007: Cassino Royale',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0381061',
        imagem: 'https://image.tmdb.org/t/p/w300/7b3qmLlvm2lvJ2gxsKQ42S3RTKR.jpg'
    },
    {
        titulo: 'Top Gun - Ases Indomáveis',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0092099',
        imagem: 'https://image.tmdb.org/t/p/w300/dDrMtnVgtDeecIgNchb9F8JcO5w.jpg'
    },
    {
        titulo: 'O Procurado',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt0493464',
        imagem: 'https://image.tmdb.org/t/p/w300/333wOuNUXcxIFDGZogj8nuyXoBH.jpg'
    },    
    {
        titulo: 'Invasão ao Serviço Secreto',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt6189022',
        imagem: 'https://image.tmdb.org/t/p/w300/qinFqfMF2HrjplEK5uQliLyryAk.jpg'
    },
    {
        titulo: 'Invasão a Londres',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt3300542',
        imagem: 'https://image.tmdb.org/t/p/w300/wazDH9pNQxLzBKCZvN2iMduXxGb.jpg'
    },
    {
        titulo: 'Punhos da Vingança',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt8096844',
        imagem: 'https://image.tmdb.org/t/p/w300/8vRdCB9nzZaYqh6nZ9HUFFSxKIW.jpg'
    },
    {
        titulo: 'Fogo Cruzado',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt5748448',
        imagem: 'https://image.tmdb.org/t/p/w300/5tKdjKZT1oUG16n5jefPD4XObZw.jpg'
    },
    {
        titulo: 'Tiro Certo',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt14199590',
        imagem: 'https://image.tmdb.org/t/p/w300/2LSwzrdj7ljnFhiqIgfp9rd46fU.jpg'
    },
    {
        titulo: 'Watchmen: O Filme',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0409459',
        imagem: 'https://image.tmdb.org/t/p/w300/oYEF02pi6goGRAXgfL0MZq5jFEo.jpg'
    },
    {
        titulo: 'Code 8: Renegados',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt6259380',
        imagem: 'https://image.tmdb.org/t/p/w300/yOj7bYYyMMqiqgh7Bu7qxLwtbsz.jpg'
    },
    {
        titulo: 'Atirador',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0822854',
        imagem: 'https://image.tmdb.org/t/p/w300/qluvMxXA2p15s7egazJn9vhX5Gi.jpg'
    },
    {
        titulo: 'THX 1138',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0066434',
        imagem: 'https://image.tmdb.org/t/p/w300/25cQH5gZ60BiA5Y91HxoPpnFiY0.jpg'
    },
    {
        titulo: 'Hellboy',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt2274648',
        imagem: 'https://image.tmdb.org/t/p/w300/lmh8wXm6f3z7wcRqQ8NSXrB8tMQ.jpg'
    },
    {
        titulo: 'Hellboy II: O Exército Dourado',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0411477',
        imagem: 'https://image.tmdb.org/t/p/w300/2ZFnYUkYDlwJQvODkQ0JyTRZDSO.jpg'
    },
    {
        titulo: 'Hellboy',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0167190',
        imagem: 'https://image.tmdb.org/t/p/w300/aqSzF4WqCDVphxiOlpLGufqJc6j.jpg'
    },
    {
        titulo: 'Espécies em Perigo',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt13863334',
        imagem: 'https://image.tmdb.org/t/p/w300/irlz2mCcTUZXMLTUGtHTs1JwnFx.jpg'
    },
    {
        titulo: 'Thor: Ragnarok',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt3501632',
        imagem: 'https://image.tmdb.org/t/p/w300/jrF3WW4lJkIFtIY3nIyapZ7q0N8.jpg'
    },
    {
        titulo: 'Malévola',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt1587310',
        imagem: 'https://image.tmdb.org/t/p/w300/kqifqRhUWjx5WT0OJPxWbcnzc2O.jpg'
    },
    {
        titulo: 'Vira-Lata',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0467110',
        imagem: 'https://image.tmdb.org/t/p/w300/lcedkHKYYatdNrUE91CMDahxAg9.jpg'
    },
    {
        titulo: 'Avatar',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0499549',
        imagem: 'https://image.tmdb.org/t/p/w300/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg'
    },
    {
        titulo: 'O Guarda-Costas',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0103855',
        imagem: 'https://image.tmdb.org/t/p/w300/z9sDwQcCBYjA5DvNqmd8m5rkBqh.jpg'
    },
    {
        titulo: 'Infinito',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt6654210',
        imagem: 'https://image.tmdb.org/t/p/w300/q3yAegenSHZgkMceNAzXTlBJYPg.jpg'
    },
    {
        titulo: 'Ferry',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt14217100',
        imagem: 'https://image.tmdb.org/t/p/w300/w6n1pu9thpCVHILejsuhKf3tNCV.jpg'
    },
    {
        titulo: 'O último Samurai',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt0325710',
        imagem: 'https://image.tmdb.org/t/p/w300/ybt7v6M74KwnffPOB88VDCwc5Fw.jpg'
    },
    {
        titulo: 'Mad Max: Além da Cúpula do Trovão',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0089530',
        imagem: 'https://image.tmdb.org/t/p/w300/tYF4AeArodeSHy9hGlPz5PdVF0T.jpg'
    },
    {
        titulo: 'Mad Max 2: A Caçada Continua',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0082694',
        imagem: 'https://image.tmdb.org/t/p/w300/5inW7xf2kRoZDojXWfXLXK0fZ9z.jpg'
    },
    {
        titulo: 'Mad Max',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt0079501',
        imagem: 'https://image.tmdb.org/t/p/w300/hdQqa9ZfmEPbE4q62lntueI2CUM.jpg'
    },
    {
        titulo: 'Resident Evil 5: Retribuição',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt1855325',
        imagem: 'https://image.tmdb.org/t/p/w300/8Hd7OTdX1Q3pccZn2TUsU9isJpz.jpg'
    },
    {
        titulo: 'Resident Evil 4: Recomeço',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt1220634',
        imagem: 'https://image.tmdb.org/t/p/w300/eLUc5to0p5LhbXJMXtgltg7P4g4.jpg'
    },
    {
        titulo: 'Resident Evil 2: Apocalipse',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0318627',
        imagem: 'https://image.tmdb.org/t/p/w300/v8RRzNoNJqkhuwCIct46a8FBFw6.jpg'
    },
    {
        titulo: 'O Espetacular Homem-Aranha 2: A Ameaça de Electro',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt1872181',
        imagem: 'https://image.tmdb.org/t/p/w300/lDbcaBs1IdBZccCM1R417XmPxKF.jpg'
    },
    {
        titulo: 'O Espetacular Homem-Aranha',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0948470',
        imagem: 'https://image.tmdb.org/t/p/w300/dODKvv9o9BOemWavnulutJBHM80.jpg'
    },
    {
        titulo: 'Homem-Aranha 3',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0413300',
        imagem: 'https://image.tmdb.org/t/p/w300/63O5iixxXSmyOaBas7ek1tkeVra.jpg'
    },
    {
        titulo: 'Homem-Aranha',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0145487',
        imagem: 'https://image.tmdb.org/t/p/w300/2WIwz0qJpnVAiofTAhrmhbKxuvE.jpg'
    },
    {
        titulo: 'Chocolate',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt1183252',
        imagem: 'https://image.tmdb.org/t/p/w300/k0pV6Kkd7rp6TPzlxN1xoItFvCm.jpg'
    },
    {
        titulo: 'Refém Rebelde',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt13067292',
        imagem: 'https://image.tmdb.org/t/p/w300/61hoGhY0khqOolZyfxqv4zrde8M.jpg'
    },
    {
        titulo: 'Dracula: A História Nunca Contada',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0829150',
        imagem: 'https://image.tmdb.org/t/p/w300/cCq6nnwIki2HGg6DjjtFSxxgCUY.jpg'
    },
    {
        titulo: 'Esquadrão 6',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt8106534',
        imagem: 'https://image.tmdb.org/t/p/w300/f35zQlRTkEO9LBWDWaikiXzQrmD.jpg'
    },
    {
        titulo: 'Quarteto Fantástico',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0120667',
        imagem: 'https://image.tmdb.org/t/p/w300/7LYL7iZMPWX1IR3ISiPR1FkjfP3.jpg'
    },
    {
        titulo: 'Super-Herói: O Filme',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0426592',
        imagem: 'https://image.tmdb.org/t/p/w300/slyJHnhfs2rP6KmCwm0EbKq3hoz.jpg'
    },
    {
        titulo: 'Viagem ao Centro da Terra: O Filme',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0373051',
        imagem: 'https://image.tmdb.org/t/p/w300/35AI4Bmo1JrEzgMOxOARRUT9Pn6.jpg'
    },
    {
        titulo: 'Warcraft - O Primeiro Encontro de Dois Mundos',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0803096',
        imagem: 'https://image.tmdb.org/t/p/w300/2cPJhbIwsmMXsV9vihoPEFBFFHm.jpg'
    },
    {
        titulo: 'X-Men Origens: Wolverine',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0458525',
        imagem: 'https://image.tmdb.org/t/p/w300/3xjVVXVXWU8qt1umkeTJd8sImBC.jpg'
    },
    {
        titulo: 'Perseguição Radical',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt4579914',
        imagem: 'https://image.tmdb.org/t/p/w300/gQXkJmlv9PhNLFK5HELT2MUW51k.jpg'
    },
    {
        titulo: 'Um Looop Eterno',
        descricao: 'Descri�o do filme 18',
        imdb: 'tt8907974',
        imagem: 'https://image.tmdb.org/t/p/w300/b0cR03jYbO2hTrKnLVKQNRP8r6y.jpg'
    },
    {
        titulo: 'Jujutsu Kaisen 0: O Filme',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt14331144',
        imagem: 'https://image.tmdb.org/t/p/w300/eiSlgyx7G61Ey69K9MmCw9OaHMA.jpg'
    },
    {
        titulo: 'Golpes de Vingança',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt14158554',
        imagem: 'https://image.tmdb.org/t/p/w300/AbSz0ygA92OpwiYDTBVFA8Cf4Aw.jpg'
    },
    {
        titulo: 'Dupla Explosiva',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt1959563',
        imagem: 'https://image.tmdb.org/t/p/w300/x4VSZIJq9vCzcubz1PYOap5Zp15.jpg'
    },
    {
        titulo: 'Bastardos Inglórios',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0361748',
        imagem: 'https://image.tmdb.org/t/p/w300/6UjYycIR6VLYgggfNpmSPJHmFS0.jpg'
    },
    {
        titulo: 'Iceman: A Roda do Tempo',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt2557256',
        imagem: 'https://image.tmdb.org/t/p/w300/juAYTbpP05NR8co9GhDTPwEKqde.jpg'
    },
    {
        titulo: 'Eu Sou o Número Quatro',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt1464540',
        imagem: 'https://image.tmdb.org/t/p/w300/AnKKqP6pRZah0KayZMiT6ifZde4.jpg'
    },
    {
        titulo: 'Corrida Mortal: Anarquia',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt3807900',
        imagem: 'https://image.tmdb.org/t/p/w300/licxEAA2QYy4zLrd6N03vvrBtzo.jpg'
    },
    {
        titulo: 'Corrida Mortal 3: Inferno',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt1988591',
        imagem: 'https://image.tmdb.org/t/p/w300/egDHHUofifBhvjqmCxIe4RueE3a.jpg'
    },
    {
        titulo: 'Corrida Mortal 2',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt1500491',
        imagem: 'https://image.tmdb.org/t/p/w300/9m6x9613wnpeC1DiNg1RUji0U50.jpg'
    },
    {
        titulo: 'Corrida Mortal',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt0452608',
        imagem: 'https://image.tmdb.org/t/p/w300/a58L5z5LyADGVfAYfYmf5VaEk3y.jpg'
    },
    {
        titulo: 'Mulan 2: A Lenda Continua',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0279967',
        imagem: 'https://image.tmdb.org/t/p/w300/lWcoRhckk3F1v1HvaMvIyc9faZA.jpg'
    },
    {
        titulo: 'O Gângster, o Policial e o Diabo',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt10208198',
        imagem: 'https://image.tmdb.org/t/p/w300/nLNKX18xxW6RpkARYrmxDZvuB8r.jpg'
    },
    {
        titulo: 'O Atirador: O Fim de um Assassino',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt12305696',
        imagem: 'https://image.tmdb.org/t/p/w300/v6joFIShgkQ40Tti3DagEbdvHwp.jpg'
    },
    {
        titulo: 'Em Ritmo de Fuga',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt3890160',
        imagem: 'https://image.tmdb.org/t/p/w300/1rYTtQ14rPB3KOgk5TjkUqiQFch.jpg'
    },
    {
        titulo: 'King s Man: A Origem',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt6856242',
        imagem: 'https://image.tmdb.org/t/p/w300/pVL9AyKKLfUwrYD6jhdsI15gBQ7.jpg'
    },
    {
        titulo: 'X-Men: O Filme',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0120903',
        imagem: 'https://image.tmdb.org/t/p/w300/eTAK1gU8vTaHt0W9I6PFYQsdhKP.jpg'
    },
    {
        titulo: 'X-Men: Primeira Classe',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt1270798',
        imagem: 'https://image.tmdb.org/t/p/w300/AqTCbMhG9X93sly2fvyiu6sHPIS.jpg'
    },
    {
        titulo: 'Esquadrão Suicida: Acerto de Contas',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt7167602',
        imagem: 'https://image.tmdb.org/t/p/w300/3yN0FcOB2AljeaqeA8UOz0PQDuC.jpg'
    },
    {
        titulo: 'Reino do Superman',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt7167686',
        imagem: 'https://image.tmdb.org/t/p/w300/u4rWHJLzM8CrsdtcTOLGY58ef4j.jpg'
    },
    {
        titulo: 'Constantine: Cidade dos Demônios - O Filme',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt9177882',
        imagem: 'https://image.tmdb.org/t/p/w300/el92WyplBfo6yFtOTmkoYeauLrf.jpg'
    },
    {
        titulo: 'Batman: O Cavaleiro das Trevas Ressurge',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt1345836',
        imagem: 'https://image.tmdb.org/t/p/w300/zRwO5BPPgkTNo1PoomZPE7wkKvQ.jpg'
    },
    {
        titulo: 'Batman: O Cavaleiro das Trevas',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0468569',
        imagem: 'https://image.tmdb.org/t/p/w300/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg'
    },
    {
        titulo: 'Batman Begins',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0372784',
        imagem: 'https://image.tmdb.org/t/p/w300/8RW2runSEc34IwKN2D1aPcJd2UL.jpg'
    },
    {
        titulo: 'O Incrível Hulk',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0800080',
        imagem: 'https://image.tmdb.org/t/p/w300/h2vB6OlhTA1jAazDXrr7PEgFPnV.jpg'
    },
    {
        titulo: 'O Homem de Aço',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0770828',
        imagem: 'https://image.tmdb.org/t/p/w300/c1k1N5rrA6NGhKUZ6hOYR0Am9Ss.jpg'
    },
    {
        titulo: '60 Segundos',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0187078',
        imagem: 'https://image.tmdb.org/t/p/w300/1OUMxMVTPgQCyxB4DzIm63MDgT5.jpg'
    },
    {
        titulo: 'Bumblebee',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt4701182',
        imagem: 'https://image.tmdb.org/t/p/w300/x9vAcoPsyFQ6m3Re5S9DQSbudyi.jpg'
    },
    {
        titulo: 'Sr. & Sra. Smith',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0356910',
        imagem: 'https://image.tmdb.org/t/p/w300/xpBYICwTOy67ne4fT3rHvtVBtCe.jpg'
    },
    {
        titulo: 'Alita: Anjo de Combate',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0437086',
        imagem: 'https://image.tmdb.org/t/p/w300/xUOP8nSOcwymKeOS9L4iJbLXG74.jpg'
    },
    {
        titulo: 'As Tartarugas Ninja: Fora das Sombras',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt3949660',
        imagem: 'https://image.tmdb.org/t/p/w300/28CV4RE4BayVZnbw7FdXbcvzSQb.jpg'
    },
    {
        titulo: 'As Tartarugas Ninja',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt1291150',
        imagem: 'https://image.tmdb.org/t/p/w300/udkk1VQY9wgarV7xZ9qcraa7Qsd.jpg'
    },
    {
        titulo: 'No Coração do Mar',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt1390411',
        imagem: 'https://image.tmdb.org/t/p/w300/v0f6zLv2TwhscRFDRnbcw8McBeI.jpg'
    },
    {
        titulo: 'Tróia',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0332452',
        imagem: 'https://image.tmdb.org/t/p/w300/2DCOh2hPdDtWxBSaanq80GFa2HN.jpg'
    },
    {
        titulo: 'Buffalo Boys',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt6917210',
        imagem: 'https://image.tmdb.org/t/p/w300/o1Bn2zlIDJSnM5aOljbOPTM6Kf9.jpg'
    },
    {
        titulo: '1917',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt8579674',
        imagem: 'https://image.tmdb.org/t/p/w300/qi7PCLXNhHnJZBljI3xwF1G0g4i.jpg'
    },
    {
        titulo: 'Uma Noite Fora de Série',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt1279935',
        imagem: 'https://image.tmdb.org/t/p/w300/9yu4WtYuHtjrDxfZZaY26xluktZ.jpg'
    },
    {
        titulo: 'Moonfall: Ameaça Lunar',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt5834426',
        imagem: 'https://image.tmdb.org/t/p/w300/ACl5NQBHeEvypdVlaaE868bwFs.jpg'
    },
    {
        titulo: 'Mulher-Gato: A Caçada',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt15248702',
        imagem: 'https://image.tmdb.org/t/p/w300/iqcoz5xQx6UTKHrqrMyiGiJY4jQ.jpg'
    },
    {
        titulo: 'Tropa de Elite 2: O Inimigo Agora é Outro',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt1555149',
        imagem: 'https://image.tmdb.org/t/p/w300/v39TyEFfzPUaj7uZlV6Xr5HD9tu.jpg'
    },
    {
        titulo: 'Tropa de Elite',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0861739',
        imagem: 'https://image.tmdb.org/t/p/w300/7STSm4dSnUxq0HoPtydj3k9MMPV.jpg'
    },
    {
        titulo: 'Chamas da Vingança',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0328107',
        imagem: 'https://image.tmdb.org/t/p/w300/w9BZFaK8MEwKjLtyFUS5zoPIYo1.jpg'
    },
    {
        titulo: 'Stargate: A Chave para o Futuro da Humanidade',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0111282',
        imagem: 'https://image.tmdb.org/t/p/w300/8jt0L4TunEvH4KwN13hDuJgCsa4.jpg'
    },
    {
        titulo: 'Dia de Treinamento',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0139654',
        imagem: 'https://image.tmdb.org/t/p/w300/5X4zeznwORmk3c7al9G86fwzkSq.jpg'
    },
    {
        titulo: 'Centro de Trauma',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt9625664',
        imagem: 'https://image.tmdb.org/t/p/w300/p1WwFPliT9jG63YlEz8E5v3fsGQ.jpg'
    },
    {
        titulo: 'Uncharted: Fora do Mapa',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt1464335',
        imagem: 'https://image.tmdb.org/t/p/w300/soD18uucENplI81kUErvMzdb5Lm.jpg'
    },
    {
        titulo: 'O Livro de Eli',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt1037705',
        imagem: 'https://image.tmdb.org/t/p/w300/hUS4hknUZGJKqdFWf04eNSaaRfC.jpg'
    },
    {
        titulo: 'Ghostland: Terra Sem Lei',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt6372694',
        imagem: 'https://image.tmdb.org/t/p/w300/7BziQ3NHe18pD1hNPXjQZ4rKaMU.jpg'
    },
    {
        titulo: 'Resident Evil: Bem-Vindo a Raccoon City',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt6920084',
        imagem: 'https://image.tmdb.org/t/p/w300/tnKi8Vx9mRvOGrmzBOOh5wHEbQI.jpg'
    },
    {
        titulo: 'Breaking Bad: El Camino',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt9243946',
        imagem: 'https://image.tmdb.org/t/p/w300/p4Il6gsDrOvrW5vi1ndTDR98UmS.jpg'
    },
    {
        titulo: 'Kingsman: O Círculo Dourado',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt4649466',
        imagem: 'https://image.tmdb.org/t/p/w300/k8lduAlGOXDYYKSlBeJ0CDyra0x.jpg'
    },
    {
        titulo: 'Kingsman: Serviço Secreto',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt2802144',
        imagem: 'https://image.tmdb.org/t/p/w300/wDhy1Ga9BoLwkHOI0jJISQem28v.jpg'
    },
    {
        titulo: 'Max Payne',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt0467197',
        imagem: 'https://image.tmdb.org/t/p/w300/w1Hq5B2wXsbv7G8mA3MIWbjDpQh.jpg'
    },
    {
        titulo: 'Dragon Ball Z: O Resgate de Gohan',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0142235',
        imagem: 'https://image.tmdb.org/t/p/w300/bgSKtVLW8RPSQc4ovtXLrpReCAT.jpg'
    },
    {
        titulo: 'Mulher-Maravilha 1984',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt7126948',
        imagem: 'https://image.tmdb.org/t/p/w300/AweDlIiohqw4sjC7gCsPVd1zo77.jpg'
    },
    {
        titulo: 'Demon Slayer - Mugen Train: O Filme',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt11032374',
        imagem: 'https://image.tmdb.org/t/p/w300/m9cn5mhW519QKr1YGpGxNWi98VJ.jpg'
    },
    {
        titulo: 'O Ataque dos Vermes Malditos 7: Ilha dos Shriekers',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt8322060',
        imagem: 'https://image.tmdb.org/t/p/w300/e6SuSfsgZMV4B5IYqiBxeXljxhq.jpg'
    },
    {
        titulo: 'O Esquadrão Suicida',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt6334354',
        imagem: 'https://image.tmdb.org/t/p/w300/wTS3dS2DJiMFFgqKDz5fxMTri.jpg'
    },
    {
        titulo: 'Trovão Negro',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt1569364',
        imagem: 'https://image.tmdb.org/t/p/w300/aL0dpOCjNPXGzGn6uMlsunxFPd9.jpg'
    },
    {
        titulo: 'Velozes & Furiosos 9',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt5433138',
        imagem: 'https://image.tmdb.org/t/p/w300/fnAzaxRSiveFafudJtByxA7I2xT.jpg'
    },
    {
        titulo: 'Guardiões da Galáxia',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt2015381',
        imagem: 'https://image.tmdb.org/t/p/w300/gyhICZLe3wSCCy0vjFfiVlhYsfu.jpg'
    },
    {
        titulo: 'Guardiões da Galáxia - Vol. 2',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt3896198',
        imagem: 'https://image.tmdb.org/t/p/w300/hXi3ExbRXnZCPbdHQkppQdcdMUF.jpg'
    },
    {
        titulo: 'Viúva Negra',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt3480822',
        imagem: 'https://image.tmdb.org/t/p/w300/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg'
    },
    {
        titulo: 'Ben 10 Contra o Universo: O Filme',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt13186528',
        imagem: 'https://image.tmdb.org/t/p/w300/eWSPQSIZqc38SYRCvbIU0j5HFqj.jpg'
    },
    {
        titulo: 'Os Croods',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0481499',
        imagem: 'https://image.tmdb.org/t/p/w300/7k9w3RgKYoJ9MCwdBY0ZBxC323L.jpg'
    },
    {
        titulo: 'Os Incr�veis 2',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt3606756',
        imagem: 'https://image.tmdb.org/t/p/w300/y3EEb7o6NxK0pl0WsOswCos663y.jpg'
    },
    {
        titulo: 'Expresso do Amanhã',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt1706620',
        imagem: 'https://image.tmdb.org/t/p/w300/9rtJNrpDuxHJiRormrY5S3GXwEu.jpg'
    },
    {
        titulo: 'Homem-Aranha no Aranhaverso',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt4633694',
        imagem: 'https://image.tmdb.org/t/p/w300/tv1MHGKwRNKXzuJsNH9aZqU2djI.jpg'
    },
    {
        titulo: 'Mortal Kombat',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0293429',
        imagem: 'https://image.tmdb.org/t/p/w300/44aCR6cjH0FbzW6PMw3Ega178iW.jpg'
    },
    {
        titulo: 'Conquista',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt5932368',
        imagem: 'https://image.tmdb.org/t/p/w300/AoWY1gkcNzabh229Icboa1Ff0BM.jpg'
    },
    {
        titulo: 'Artemis Fowl: O Mundo Secreto',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt3089630',
        imagem: 'https://image.tmdb.org/t/p/w300/avb3THg1FTxBc79h2QECsuwjujY.jpg'
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
