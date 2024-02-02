var filmes = [
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
