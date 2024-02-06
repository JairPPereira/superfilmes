var filmes = [
    {
        titulo: 'Gatos no Museu',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt24069962',
        imagem: 'https://image.tmdb.org/t/p/w300/fzFkvkr8RBZfpgDNx65wxiZjnnU.jpg'
    },
    {
        titulo: 'Patos!',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt6495056',
        imagem: 'https://image.tmdb.org/t/p/w300/2KPvdtGjeFT8IwxUkUWmifokXG0.jpg'
    },
    {
        titulo: 'Águia e Jaguar: Os Guerreiros Lendários',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt21230032',
        imagem: 'https://image.tmdb.org/t/p/w300/1UnP6AtY3DHYjOVDEEF0Age7RKJ.jpg'
    },
    {
        titulo: 'maboroshi',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt14935892',
        imagem: 'https://image.tmdb.org/t/p/w300/piDXkSvBA56NTIC6D3uA1eECwtd.jpg'
    },
    {
        titulo: 'Nina: A Heroína dos Sete Mares',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt22360682',
        imagem: 'https://image.tmdb.org/t/p/w300/hCRZCkQScaK0cg2tfgqNZKYgff4.jpg'
    },
    {
        titulo: 'Liga da Justiça: Crise nas Infinitas Terras - Parte 1',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt29195117',
        imagem: 'https://image.tmdb.org/t/p/w300/vsiDOIO4APrPQQ4xx8vJW8N0uHV.jpg'
    },
    {
        titulo: 'Valentina Despertando Para Os Sonhos',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt16277374',
        imagem: 'https://image.tmdb.org/t/p/w300/lPslknj3CohVLrKwElVJwRvafPe.jpg'
    },
    {
        titulo: 'A Lenda da Serpente',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt9288776',
        imagem: 'https://image.tmdb.org/t/p/w300/lmJsSOQtuU7xwN48ATCPrI96ENM.jpg'
    },
    {
        titulo: 'Scrooge: Um Conto de Natal',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt20917338',
        imagem: 'https://image.tmdb.org/t/p/w300/2jR1JmDCOKbOIfTc3a9pQV36EpZ.jpg'
    },
    {
        titulo: 'Marcados: A História do Racismo nos EUA',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt13871094',
        imagem: 'https://image.tmdb.org/t/p/w300/zKr6pPEtvyc0wGiiFseLNPvYhz9.jpg'
    },
    {
        titulo: 'South Park (Não Recomendado Para Menores)',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt30505159',
        imagem: 'https://image.tmdb.org/t/p/w300/opc6DIkByOp9vOt14jzfu8oVjbM.jpg'
    },
    {
        titulo: 'A Fuga das Galinhas: A Ameaça dos Nuggets',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt8337264',
        imagem: 'https://image.tmdb.org/t/p/w300/3ZpbQ571GHAYIZl1zqZ3Non75Y7.jpg'
    },
    {
        titulo: 'A Princesa Encantada: Era Uma Vez?',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt26341934',
        imagem: 'https://image.tmdb.org/t/p/w300/pfMgyj2afebT8LVrDVYHniDk3XJ.jpg'
    },
    {
        titulo: 'Inspetor Aranha',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt6661616',
        imagem: 'https://image.tmdb.org/t/p/w300/2mRCD2Hn9eaeZszKc6AsFo0VAkM.jpg'
    },
    {
        titulo: 'Diário de um Banana no Natal: Casa dos Horrores',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt29033964',
        imagem: 'https://image.tmdb.org/t/p/w300/1tbFuwWZOcAXySQ2A1KpxExUirH.jpg'
    },
    {
        titulo: 'Mavka: Aventura na Floresta',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt6685538',
        imagem: 'https://image.tmdb.org/t/p/w300/adyriBXnBuhdRgAllYAurnDQtQb.jpg'
    },
    {
        titulo: 'Os Caras Malvados: Um Natal do Mal',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt28863512',
        imagem: 'https://image.tmdb.org/t/p/w300/tHTEgWMPg7AdeotObEUqdOo98Zx.jpg'
    },
    {
        titulo: 'O Coelhinho de Veludo',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt9900816',
        imagem: 'https://image.tmdb.org/t/p/w300/aMOIiDPPAE6oHDQ3taaBtLQ21QF.jpg'
    },
    {
        titulo: 'O Rei Piu-Piu',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt18951472',
        imagem: 'https://image.tmdb.org/t/p/w300/jJatuRAVIsxAIszL3QTxrbIzxzc.jpg'
    },
    {
        titulo: 'That Time I Get Reincarnated as a Slime: O Filme',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt15467380',
        imagem: 'https://image.tmdb.org/t/p/w300/13SyU6DvAwgI5MZdYJPTjhk6N50.jpg'
    },
    {
        titulo: 'Rock Dog: Uma Batida Animal',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt11207270',
        imagem: 'https://image.tmdb.org/t/p/w300/q69N7l4ioEqs5Tlz7lH61DL01eh.jpg'
    },
    {
        titulo: 'Liga da Justiça: Mundo Bélico',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt27687527',
        imagem: 'https://image.tmdb.org/t/p/w300/yxXOMGosmqgjFicfmde61wnwQQ4.jpg'
    },
    {
        titulo: 'Leo',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt5755238',
        imagem: 'https://image.tmdb.org/t/p/w300/gSOVog7ydsaF1YpgAqBqnKYFGY.jpg'
    },
    {
        titulo: 'Heróis da Máscara Dourada',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt6349210',
        imagem: 'https://image.tmdb.org/t/p/w300/wuuC2UVWsCSvAQNxvJiRJZLuYD3.jpg'
    },    
    {
        titulo: 'Aqua Teen Forever: Plantasm',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt14636190',
        imagem: 'https://image.tmdb.org/t/p/w300/dzMfgDxEOfFdw6WIaoC94CayYWL.jpg'
    },
    {
        titulo: 'Patrulha Canina: Um Filme Superpoderoso',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt15837338',
        imagem: 'https://image.tmdb.org/t/p/w300/uzqjYjnnA3fpXFvd4JfMEc1fBhj.jpg'
    },
    {
        titulo: 'A Fada do Dente',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt20199226',
        imagem: 'https://image.tmdb.org/t/p/w300/7Biyu5aP0o86GjxnffsHThYN4h1.jpg'
    },
    {
        titulo: 'LEGO Marvel Vingadores: Código Vermelho',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt28477867',
        imagem: 'https://image.tmdb.org/t/p/w300/bhs2CZWqoee3JFMvSZd1Vg7HLfL.jpg'
    },
    {
        titulo: 'South Park: Joining the Panderverse',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt29474455',
        imagem: 'https://image.tmdb.org/t/p/w300/6Tr6QdYMQTjmoM0NsZ5L6jM3Yhn.jpg'
    },
    {
        titulo: 'O Diário de um Banana: As Regras do Rodrick',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt15847828',
        imagem: 'https://image.tmdb.org/t/p/w300/zL7uRZfIguunWKQDWbOcOqYg1AX.jpg'
    },
    {
        titulo: 'Osmar, a Primeira Fatia do Pão de Forma',
        descricao: 'Descri��o do filme 7',
        imdb: 'None',
        imagem: 'https://image.tmdb.org/t/p/w300/oW9y28wcG6NApOEikKVRsMewThu.jpg'
    },
    {
        titulo: 'Os Peludos',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt15547806',
        imagem: 'https://image.tmdb.org/t/p/w300/q0poNkSayOtlwRzY6MKHTQcBauq.jpg'
    },
    {
        titulo: 'Inu-Oh',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt10540510',
        imagem: 'https://image.tmdb.org/t/p/w300/96mbrDL8CiCJSmNH6Fd1BP6IFhj.jpg'
    },
    {
        titulo: 'A Elefanta do Mágico',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt2560092',
        imagem: 'https://image.tmdb.org/t/p/w300/g7weieVLynnkcFqOWA5WAmjffNB.jpg'
    },
    {
        titulo: 'As Múmias e o Anel Perdido',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt23177868',
        imagem: 'https://image.tmdb.org/t/p/w300/olT9HuXfnMVFqDGjLhllKe5EuQP.jpg'
    },
    {
        titulo: 'Mortal Kombat Legends: Cage - Bom de Briga',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt22698070',
        imagem: 'https://image.tmdb.org/t/p/w300/1eKWqTHp4OgKdx1QX1O9LxKHr1M.jpg'
    },
    {
        titulo: 'Scarygirl',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt4556264',
        imagem: 'https://image.tmdb.org/t/p/w300/1tcLXVaXFG9OObnCN3a5KrymrQG.jpg'
    },
    {
        titulo: 'As Tartarugas Ninja: O Retorno',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0453556',
        imagem: 'https://image.tmdb.org/t/p/w300/vNSwMohSS0XMXXbcmw3RsBaE35q.jpg'
    },
    {
        titulo: 'Barbie: Skipper e a Grande Aventura de Babás',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt26931203',
        imagem: 'https://image.tmdb.org/t/p/w300/t8bt9rrcgK4K1G5VxeO8xkz9RQD.jpg'
    },
    {
        titulo: 'Scooby-Doo e Krypto - O Supercão',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt28508231',
        imagem: 'https://image.tmdb.org/t/p/w300/ntMOnvlYYnio7Fx3xqBu9B1Sz7f.jpg'
    },
    {
        titulo: 'Bob Esponja Calça Quadrada apresenta: Zona das Marés',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt22640250',
        imagem: 'https://image.tmdb.org/t/p/w300/rozwpOPiTEYnXygWGvUPST4lVQa.jpg'
    },
    {
        titulo: 'A Volta ao Mundo em 80 Dias',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt10341040',
        imagem: 'https://image.tmdb.org/t/p/w300/kuaBfUCrp1RBmdq1FsFHVe5eQO9.jpg'
    },
    {
        titulo: 'Babylon 5: O Caminho',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt27712788',
        imagem: 'https://image.tmdb.org/t/p/w300/zaXdRG8bCdK923JsmSej37j517C.jpg'
    },
    {
        titulo: 'Os Irmãos Aventura: O Filme',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt14636186',
        imagem: 'https://image.tmdb.org/t/p/w300/oGX6dBRHjO2FsQG5FaNpS7NOtFs.jpg'
    },
    {
        titulo: 'Pastacolypse',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt20247162',
        imagem: 'https://image.tmdb.org/t/p/w300/4skTPWLXrIpHh0BU6Rmi0a1y5hb.jpg'
    },
    {
        titulo: 'Os Sete Pecados Capitais: Fúria de Edimburgo - Parte 2',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt25010142',
        imagem: 'https://image.tmdb.org/t/p/w300/tCEFjPGeaQJldoDpqDiDBdOH8GA.jpg'
    },
    {
        titulo: 'LEGO Disney Princesa: Aventura no Castelo',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt28477869',
        imagem: 'https://image.tmdb.org/t/p/w300/tbPkvDVY06gdQlxgowQebOHQGGK.jpg'
    },
    {
        titulo: 'Snoopy Apresenta: A Inigualável Marcie',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt27865284',
        imagem: 'https://image.tmdb.org/t/p/w300/grzZxk9s9EruSc0zMbcif4FUCmz.jpg'
    },
    {
        titulo: 'O Rei Macaco',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt8637498',
        imagem: 'https://image.tmdb.org/t/p/w300/bmwK5QCznqUT8bcDR7qROrxqgov.jpg'
    },
    {
        titulo: 'Akira',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0094625',
        imagem: 'https://image.tmdb.org/t/p/w300/erQNsU5jCkWGPzDFwF5Qhuncv2K.jpg'
    },
    {
        titulo: 'As Tartarugas Ninjas: Caos Mutante',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt8589698',
        imagem: 'https://image.tmdb.org/t/p/w300/x0naXPYoLxzTzRgwKhzAjQPngnw.jpg'
    },
    {
        titulo: 'Miraculous: As Aventuras de Ladybug - O Filme',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt10364034',
        imagem: 'https://image.tmdb.org/t/p/w300/eZEKKCNW0vI7B7AZNdCAeq2mMAw.jpg'
    },
    {
        titulo: 'Os Jovens Titãs Assistem A Space Jam',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt14851194',
        imagem: 'https://image.tmdb.org/t/p/w300/7bdNPv3vsLXhUTrVhweTSGiqEwp.jpg'
    },
    {
        titulo: 'O Serviço de Entregas da Kiki',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0097814',
        imagem: 'https://image.tmdb.org/t/p/w300/eM4mDoXpOTwqMldmCy76cftok9m.jpg'
    },
    {
        titulo: 'O Castelo no Céu',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0092067',
        imagem: 'https://image.tmdb.org/t/p/w300/1yoI4FyiUamyWhZtnfH81se206f.jpg'
    },
    {
        titulo: 'Eu Posso Ouvir o Oceano',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0108432',
        imagem: 'https://image.tmdb.org/t/p/w300/7xNEkYR9EkcBG1EjiOwyl0oXLU7.jpg'
    },
    {
        titulo: 'Ponyo - Uma Amizade que Veio do Mar',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0876563',
        imagem: 'https://image.tmdb.org/t/p/w300/cvpsmNWc8nyePJMbyMc9X5lLN6L.jpg'
    },
    {
        titulo: 'Lupin III: O Segredo de Mamo',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0078187',
        imagem: 'https://image.tmdb.org/t/p/w300/fMLbX1RdVGDyJn9eraKa7HzaaEj.jpg'
    },
    {
        titulo: 'Lupin III: O Castelo de Cagliostro',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0079833',
        imagem: 'https://image.tmdb.org/t/p/w300/zQRfJDWbSh3C3bGw34QHJeUnlZF.jpg'
    },
    {
        titulo: 'Uma Fazenda Maluca 2: Queijo de Cabra',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt2491648',
        imagem: 'https://image.tmdb.org/t/p/w300/zbqvfoCo4q1DrMzzc4kdocyZcFo.jpg'
    },
    {
        titulo: 'Lupin III: O Ouro da Babilônia',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0089943',
        imagem: 'https://image.tmdb.org/t/p/w300/q5CQfjWGcHemKXbYNfCDBcQsJfc.jpg'
    },
    {
        titulo: 'Liga da Justiça: A Nova Fronteira',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0902272',
        imagem: 'https://image.tmdb.org/t/p/w300/pQjMxF8DBsLhFD9CJZUhA28Me1g.jpg'
    },
    {
        titulo: 'Lanterna Verde: Primeiro Vôo',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt1384590',
        imagem: 'https://image.tmdb.org/t/p/w300/745szFCV9ZGvBPvlwxcSKDqW6QK.jpg'
    },
    {
        titulo: 'Superman & Batman: Apocalipse',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt1673430',
        imagem: 'https://image.tmdb.org/t/p/w300/vZqD8QMXiZh977LipOsXQmaMM7l.jpg'
    },
    {
        titulo: 'Batman Lego: O Filme - Super Heróis Se Unem',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt2465238',
        imagem: 'https://image.tmdb.org/t/p/w300/kMULqTVLgbrjfcLzSsSWAjlc6Tj.jpg'
    },
    {
        titulo: 'Lego Batman: O Filme',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt4116284',
        imagem: 'https://image.tmdb.org/t/p/w300/qVf6lTFzDsBZUbYbk8m9dk9SipX.jpg'
    },
    {
        titulo: 'Resident Evil: Ilha da Morte',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt26674627',
        imagem: 'https://image.tmdb.org/t/p/w300/nEWftodqakZu0RcfqhVr9f7ZdUH.jpg'
    },
    {
        titulo: 'Daisy Quokka: O Animal Mais Feroz Do Mundo',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt11482894',
        imagem: 'https://image.tmdb.org/t/p/w300/p9dbwWKE8SQqyHoN3Vo8BHpt8fc.jpg'
    },
    {
        titulo: 'Unicorn Wars',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt10483152',
        imagem: 'https://image.tmdb.org/t/p/w300/joOEYpfltqoqkaiQio24TUTntGM.jpg'
    },
    {
        titulo: 'Ruby Marinho - Monstro Adolescente',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt27155038',
        imagem: 'https://image.tmdb.org/t/p/w300/nNcxpjCtcawf8wQmTwnA0u1jukC.jpg'
    },
    {
        titulo: 'Ben 10: Mutante Rex Heróis Unidos',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt2123516',
        imagem: 'https://image.tmdb.org/t/p/w300/iSPCeuGiN06540ZUCfcunc4hOm3.jpg'
    },
    {
        titulo: 'Uma Fazenda Maluca',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt1308650',
        imagem: 'https://image.tmdb.org/t/p/w300/5DV34HGjjRjMQoRRyMPjIoV9FdL.jpg'
    },
    {
        titulo: 'Barbie e As Três Mosqueteiras',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt1484922',
        imagem: 'https://image.tmdb.org/t/p/w300/aulv0DUM41tmEM9BoDVaczBojsz.jpg'
    },
    {
        titulo: 'Batman: Ataque ao Arkham',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt3139086',
        imagem: 'https://image.tmdb.org/t/p/w300/gX2Uy1GnIB8bbeP7EfXBUxzGmqY.jpg'
    },
    {
        titulo: 'Mulher Maravilha',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt1186373',
        imagem: 'https://image.tmdb.org/t/p/w300/wUhVYGSEWyb9xOl9kWspxLTpAxQ.jpg'
    },
    {
        titulo: 'Se Algo Acontecer... Te Amo',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt11768948',
        imagem: 'https://image.tmdb.org/t/p/w300/81sFRZluM59eRmvhNMSPQItRfOV.jpg'
    },
    {
        titulo: 'Nimona',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt19500164',
        imagem: 'https://image.tmdb.org/t/p/w300/dHFUte9BLYhihC9YqKWyxmWXnZu.jpg'
    },
    {
        titulo: 'Elementos',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt15789038',
        imagem: 'https://image.tmdb.org/t/p/w300/88OGFOcFI04CL4uucb6I7ZzUqD6.jpg'
    },
    {
        titulo: 'Black Clover: A Espada do Rei Mago',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt22868844',
        imagem: 'https://image.tmdb.org/t/p/w300/5KK0FJGdZI7jMhfwyJTg1LGR2z8.jpg'
    },
    {
        titulo: 'Chef Jack: O Cozinheiro Aventureiro',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt24067350',
        imagem: 'https://image.tmdb.org/t/p/w300/4gIHOuxO94QJ6Bg7e1kNuiHdKQ.jpg'
    },
    {
        titulo: 'Homem-Aranha: Através do Aranhaverso',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt9362722',
        imagem: 'https://image.tmdb.org/t/p/w300/6a7NItazspSV8Fl7u46ccxwPKk4.jpg'
    },
    {
        titulo: 'Hércules',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0119282',
        imagem: 'https://image.tmdb.org/t/p/w300/gKwBRP5o8t6BpUfSeIy09q9AiH0.jpg'
    },
    {
        titulo: 'Festa no Céu',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt2262227',
        imagem: 'https://image.tmdb.org/t/p/w300/l6luVQ9F7t7wErnSOq6Vd0SgDxV.jpg'
    },
    {
        titulo: 'Evangelion: 1.11 Você (Não) Está Sozinho',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0923811',
        imagem: 'https://image.tmdb.org/t/p/w300/fc4yj5OpifBQJGHoLvcF2on5qW5.jpg'
    },
    {
        titulo: 'Perfect Blue',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0156887',
        imagem: 'https://image.tmdb.org/t/p/w300/79vujbsWEbX4dzffBV541QXN6sf.jpg'
    },
    {
        titulo: 'Princesa Mononoke',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0119698',
        imagem: 'https://image.tmdb.org/t/p/w300/7EadOwHmyQgOnlghRiWBygNtnjl.jpg'
    },
    {
        titulo: 'Asagao to Kase-san.',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt7456468',
        imagem: 'https://image.tmdb.org/t/p/w300/69Fy0t0QWGk1xPh0f3qcboT2VUs.jpg'
    },
    {
        titulo: 'Violet Evergarden Gaiden: Eternidade e a Boneca de Automemória',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt10477558',
        imagem: 'https://image.tmdb.org/t/p/w300/hfUMPxcN9AGgOYRQNsN8tpVMExI.jpg'
    },
    {
        titulo: 'Ernest & Celestine',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt1816518',
        imagem: 'https://image.tmdb.org/t/p/w300/3pNUKmcLhix0qEXsOUEVN15risM.jpg'
    },
    {
        titulo: 'Re:ZERO -Starting Life in Another World- Laços Congelados',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt11285348',
        imagem: 'https://image.tmdb.org/t/p/w300/4fkROBkc3zHVRbmf65A4V46pznD.jpg'
    },
    {
        titulo: 'Ron Bugado',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt7504818',
        imagem: 'https://image.tmdb.org/t/p/w300/h8eqqC9KLoN8TUe1EXtIqwX8BpP.jpg'
    },
    {
        titulo: 'Pinóquio por Guillermo Del Toro',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt1488589',
        imagem: 'https://image.tmdb.org/t/p/w300/x3IkO2sW4rSSVluFDz8isr6YDm8.jpg'
    },
    {
        titulo: 'O Grande Mauricinho',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt10473036',
        imagem: 'https://image.tmdb.org/t/p/w300/qcCZnuFQv6faxbXUb9pa8Le5ujB.jpg'
    },
    {
        titulo: 'Liga da Justiça x RWBY: Super-Heróis e Caçadores - Parte 1',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt24548912',
        imagem: 'https://image.tmdb.org/t/p/w300/gs9thnvpkf6HCx2lJZlY5YaLQ7s.jpg'
    },
    {
        titulo: 'Batman: A Perdição Chegou a Gotham',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt24223450',
        imagem: 'https://image.tmdb.org/t/p/w300/ejHdsATVNWDIhuTgIKXmenFqGTc.jpg'
    },
    {
        titulo: 'Marcel, a Concha de Sapatos',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt15339456',
        imagem: 'https://image.tmdb.org/t/p/w300/8hIj0OJI6NDMqOQTt9miZlAVIQP.jpg'
    },
    {
        titulo: 'A Caminho da Lua',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt7488208',
        imagem: 'https://image.tmdb.org/t/p/w300/7jalZ1oVkuuVXek0B2BKrFWMUv9.jpg'
    },
    {
        titulo: 'Vida de Inseto',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0120623',
        imagem: 'https://image.tmdb.org/t/p/w300/twzLdfNxyAa5xQWLLVQyapSqJJP.jpg'
    },
    {
        titulo: 'Batman: A Piada Mortal',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt4853102',
        imagem: 'https://image.tmdb.org/t/p/w300/coBGOvmAfSVC5nnmsSm6RO4YMXx.jpg'
    },
    {
        titulo: 'InuYasha 1: Sentimentos que Transcendem o Tempo',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt0322645',
        imagem: 'https://image.tmdb.org/t/p/w300/krSgIB3AD35sKh9iXT5x7Io1xHF.jpg'
    },
    {
        titulo: 'InuYasha 2: O Castelo das Ilusões Dentro do Espelho',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt0366621',
        imagem: 'https://image.tmdb.org/t/p/w300/u8zFbyQnIKRRPxRRweQ6ODtAUhc.jpg'
    },
    {
        titulo: 'InuYasha 3: A Espada Dominadora do Mundo',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt0396659',
        imagem: 'https://image.tmdb.org/t/p/w300/kDN5vNEuNNvkNo4tSygGfGYHfDi.jpg'
    },
    {
        titulo: 'Super Mario Bros.: O Filme',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt6718170',
        imagem: 'https://image.tmdb.org/t/p/w300/i9XdxHsFrcqLkRWSF1coOHo4R39.jpg'
    },
    {
        titulo: 'O Touro Ferdinando',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt3411444',
        imagem: 'https://image.tmdb.org/t/p/w300/rnoYZvoSbS6uogrESSbKOpwg0sB.jpg'
    },
    {
        titulo: 'A árvore dos Desejos',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt9239422',
        imagem: 'https://image.tmdb.org/t/p/w300/jbNYpZoe1TMw2L78VGS8NTspAwj.jpg'
    },
    {
        titulo: 'O Céo e a Raposa',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt0082406',
        imagem: 'https://image.tmdb.org/t/p/w300/AgLaNr1DEEKUvBlWmfk3NiLdpJp.jpg'
    },
    {
        titulo: 'Valiant - Um Herói que Vale a Pena',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0361089',
        imagem: 'https://image.tmdb.org/t/p/w300/r9VNtY1qUflzWIWgOvPe3PUKMi0.jpg'
    },
    {
        titulo: 'Os Fantasmas de Scrooge',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt1067106',
        imagem: 'https://image.tmdb.org/t/p/w300/1qhU3VJo10sISkHIyANLsHioq0Y.jpg'
    },
    {
        titulo: 'Cinderela',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0042332',
        imagem: 'https://image.tmdb.org/t/p/w300/Acj5mmoZQ5lKLNpU2y0XQCt5rNb.jpg'
    },
    {
        titulo: 'A Pequena Sereia',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0097757',
        imagem: 'https://image.tmdb.org/t/p/w300/oBFAs9hMdSgHKMvW6VLnh5SOfof.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: A Lenda do Santuário',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt2231489',
        imagem: 'https://image.tmdb.org/t/p/w300/ozSUEsKgMNOdL4em13Xd7uKf9TW.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: Prólogo do Céu',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt0805605',
        imagem: 'https://image.tmdb.org/t/p/w300/rRJKrlFqW9nBh6UTkEexLXGazrH.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: Os Guerreiros do Armageddon',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0326101',
        imagem: 'https://image.tmdb.org/t/p/w300/cXCWqtb7oRtkQfpxjdPS4G2c3RR.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: A Lenda dos Defensores de Atena',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt0326143',
        imagem: 'https://image.tmdb.org/t/p/w300/724kXHDFaSJw1WdYX2qi5XkYMLb.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: A Grande Batalha dos Deuses',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0322918',
        imagem: 'https://image.tmdb.org/t/p/w300/1RsREkIc1t0oJLbYlz0tE8uZTbG.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco: O Santo Guerreiro',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0323869',
        imagem: 'https://image.tmdb.org/t/p/w300/nziTxFxx0l2hO7ZddZo903kVVU0.jpg'
    },
    {
        titulo: 'Wendell & Wild',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt5181830',
        imagem: 'https://image.tmdb.org/t/p/w300/5dsX6UAHqkQz1kiV8bs8SvjyVNa.jpg'
    },
    {
        titulo: 'Cinderela e o Príncipe Secreto',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt6241270',
        imagem: 'https://image.tmdb.org/t/p/w300/caMtietnPdDz8EHSgH3nzijhEws.jpg'
    },
    {
        titulo: 'Mundo Estranho',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt10298840',
        imagem: 'https://image.tmdb.org/t/p/w300/4KXsKY8j87jr1oX2uwO1tMbl4Px.jpg'
    },
    {
        titulo: 'O Menino, a Toupeira, a Raposa e o Cavalo',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt22667880',
        imagem: 'https://image.tmdb.org/t/p/w300/765XUik0cbyWHITgE22FhpA8elG.jpg'
    },
    {
        titulo: 'Snoopy Apresenta: A Escola da Lucy',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt21405896',
        imagem: 'https://image.tmdb.org/t/p/w300/ikvLmYOsYjy5qoGS9Lpu092rO6z.jpg'
    },
    {
        titulo: 'Tito e os Pássaros',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt8327492',
        imagem: 'https://image.tmdb.org/t/p/w300/3ymTnRmZ9F7WICOAmYNMECF7bgQ.jpg'
    },
    {
        titulo: 'O Tempo com Você',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt9426210',
        imagem: 'https://image.tmdb.org/t/p/w300/tdBhe9LVIBKMgfGYJSkY2dVqfaz.jpg'
    },
    {
        titulo: 'As Aventuras de Tadeo e a Tábua de Esmeralda',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt14941698',
        imagem: 'https://image.tmdb.org/t/p/w300/9KADuZT3KwmCYIrmarPuGyGTriw.jpg'
    },
    {
        titulo: 'Dragon Ball Z: O Renascimento de Freeza',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt3819668',
        imagem: 'https://image.tmdb.org/t/p/w300/oth0VBziwe25mDzkJ6XzwmUCCDC.jpg'
    },
    {
        titulo: 'Gato de Botas 2: O último Pedido',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt3915174',
        imagem: 'https://image.tmdb.org/t/p/w300/65NBNqJiaHeCmqDqkCmrRplJXw.jpg'
    },
    {
        titulo: 'Barbie Em Um Mundo de Video Game',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt6185658',
        imagem: 'https://image.tmdb.org/t/p/w300/rWQPf9Q8CAHIpBP8SVLE3uaSmf4.jpg'
    },
    {
        titulo: 'Fantasia',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt0032455',
        imagem: 'https://image.tmdb.org/t/p/w300/5m9njnidjR0syG2gpVPVgcEMB2X.jpg'
    },
    {
        titulo: 'Dragon Ball Z: O Homem Mais Forte do Mundo',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0142240',
        imagem: 'https://image.tmdb.org/t/p/w300/aQyOTWpSQOyzLpHEOCpQwFFF0dJ.jpg'
    },
    {
        titulo: 'Scooby-Doo! Gostosuras ou Travessuras',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt21919270',
        imagem: 'https://image.tmdb.org/t/p/w300/tkd1zT65LEFieZlIltNxcUnzGNr.jpg'
    },
    {
        titulo: 'ParaNorman',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt1623288',
        imagem: 'https://image.tmdb.org/t/p/w300/9DZPtuYTKYxt6vzHvZ5FLThG4fl.jpg'
    },
    {
        titulo: 'Asterix, o Gaulês',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt0061369',
        imagem: 'https://image.tmdb.org/t/p/w300/8K2yemr1pcmYe1DcJ0586SRLsEp.jpg'
    },
    {
        titulo: 'Asterix e Cleópatra',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0062687',
        imagem: 'https://image.tmdb.org/t/p/w300/fsvNagTYR9n8Edc60fdXffIU1rJ.jpg'
    },
    {
        titulo: 'Asterix e os Doze Trabalhos',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt0072901',
        imagem: 'https://image.tmdb.org/t/p/w300/ulhCzWTgE91jHB7o5lx5pAeBtxd.jpg'
    },
    {
        titulo: 'O Dragão do Meu Pai',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt9288748',
        imagem: 'https://image.tmdb.org/t/p/w300/bfhokk0aVLI6BRIomo2OsXwtmJl.jpg'
    },
    {
        titulo: 'A Grande Aventura de Blue na Cidade',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt15038118',
        imagem: 'https://image.tmdb.org/t/p/w300/gFyB6XHUrvd3FvgN7NQbS0gjYv7.jpg'
    },
    {
        titulo: 'Mogli: O Menino Lobo 2',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0283426',
        imagem: 'https://image.tmdb.org/t/p/w300/1xVK9gsLgGpDt6nJO7VjjTW2Uy5.jpg'
    },
    {
        titulo: 'Curtas dos Minions 2',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt23382644',
        imagem: 'https://image.tmdb.org/t/p/w300/jL2xuJkM4eO0L4jbVWkjHEt5Sp6.jpg'
    },
    {
        titulo: 'Futebol em Apuros',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt22774688',
        imagem: 'https://image.tmdb.org/t/p/w300/1WHeh743USzQoCrzPQYUKEDsTjZ.jpg'
    },
    {
        titulo: 'Zumbilânio: O Parque dos Monstros',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt5313906',
        imagem: 'https://image.tmdb.org/t/p/w300/w2HamcBWs8Uv2Xgt2nNPlOtyczU.jpg'
    },
    {
        titulo: 'Dois Irmãos: Uma Jornada Fantástica',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt7146812',
        imagem: 'https://image.tmdb.org/t/p/w300/jsi2UM64Mhr6NmY1LKeeCuZOaCo.jpg'
    },
    {
        titulo: 'Snoopy & Charlie Brown: Peanuts, o Filme',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt2452042',
        imagem: 'https://image.tmdb.org/t/p/w300/lnBbIL2gYex4aVomvZOg5ZGtOOa.jpg'
    },
    {
        titulo: 'O Ritmo da Selva: O Filme',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt12139700',
        imagem: 'https://image.tmdb.org/t/p/w300/eRCfJ7jItEnk0AnLUHTuWA2dT1U.jpg'
    },
    {
        titulo: 'Big Pai, Big Filho',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt5715410',
        imagem: 'https://image.tmdb.org/t/p/w300/f3NYvraDC5yZrfUn9PvTE0TbRnm.jpg'
    },
    {
        titulo: 'A Família Addams 2: Pé na Estrada',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt11125620',
        imagem: 'https://image.tmdb.org/t/p/w300/kGSZSlmJqshcxh6Usgx9Um0utK0.jpg'
    },
    {
        titulo: 'A Família Addams',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt1620981',
        imagem: 'https://image.tmdb.org/t/p/w300/mDCIHb6BJ27PhdAz36JWc4chKlb.jpg'
    },
    {
        titulo: 'A Lenda da Passagem Secreta',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0765465',
        imagem: 'https://image.tmdb.org/t/p/w300/q7aenz9ZERyL4EVZA4ieHnXQrjS.jpg'
    },
    {
        titulo: 'Pokêmon o Filme: O Poder de Todos',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt8108230',
        imagem: 'https://image.tmdb.org/t/p/w300/5JDpggW74NfM36e3vXV0aN5b7ZD.jpg'
    },
    {
        titulo: 'O Mundo de Mia: A Esperança de Centopia',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt5790684',
        imagem: 'https://image.tmdb.org/t/p/w300/czkzXAtaJ09DNvmSGjsIndrXZqa.jpg'
    },
    {
        titulo: 'Lanterna Verde: Cuidado Com Meu Poder',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt20192230',
        imagem: 'https://image.tmdb.org/t/p/w300/kjfcOlpNZocBB3lbw8KHMPT9Ov4.jpg'
    },
    {
        titulo: 'Curtas dos Minions Volume 1',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt22184976',
        imagem: 'https://image.tmdb.org/t/p/w300/wCQBzTOigP5eCyBAjQGlWYNo5DR.jpg'
    },
    {
        titulo: 'Drifting Home',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt15494038',
        imagem: 'https://image.tmdb.org/t/p/w300/zOkalOuwZl1KuOLIkBqVuOVpGKq.jpg'
    },
    {
        titulo: 'Pokêmon: As Crônicas de Arceus',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt21970564',
        imagem: 'https://image.tmdb.org/t/p/w300/r9AxrlhBgmFfipnYZ3UNUpsM8JZ.jpg'
    },
    {
        titulo: 'Dr. Stone Ryuusui',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt21254076',
        imagem: 'https://image.tmdb.org/t/p/w300/b26VogUnaofhsd7hYZXQjSsyyZX.jpg'
    },
    {
        titulo: 'Flummels: Extintos!',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt8241000',
        imagem: 'https://image.tmdb.org/t/p/w300/9AMJnitm4Kmw7ZrC7EnwXpYpwFK.jpg'
    },
    {
        titulo: 'Albert',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt6254874',
        imagem: 'https://image.tmdb.org/t/p/w300/6hEXYAJ88eQZFN3niaBsjn52os9.jpg'
    },
    {
        titulo: 'Elliot: Uma História de Natal',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt4177856',
        imagem: 'https://image.tmdb.org/t/p/w300/hic80IBkrc5ZnCcIx6Hyb9ovldl.jpg'
    },
    {
        titulo: 'Snoopy Apresenta: Feliz Ano Novo, Lucy!',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt15553258',
        imagem: 'https://image.tmdb.org/t/p/w300/bqx5WTWPX4H4g9LUCmnrtg9BIPZ.jpg'
    },
    {
        titulo: 'Mogli: O Menino Lobo',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt0061852',
        imagem: 'https://image.tmdb.org/t/p/w300/ikqAxUAEH4BloLjVgR8MWNX3qtU.jpg'
    },
    {
        titulo: 'A Bailarina',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt2261287',
        imagem: 'https://image.tmdb.org/t/p/w300/xKPMlQ3v6KJD3u6ik3urzGesh5g.jpg'
    },
    {
        titulo: 'O Corcunda de Notre Dame',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt0116583',
        imagem: 'https://image.tmdb.org/t/p/w300/n9xNDf12yl3h1KStSiOTMpn0nec.jpg'
    },
    {
        titulo: 'Moana: Um Mar de Aventuras',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt3521164',
        imagem: 'https://image.tmdb.org/t/p/w300/4jNbH7A9HGL4OCNQvzj98ksoa2f.jpg'
    },
    {
        titulo: 'One Piece Filme 01: O Grande Pirata do Ouro!',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt0814243',
        imagem: 'https://image.tmdb.org/t/p/w300/4ed1n7FBP6jUKxSguwQ89euSMGP.jpg'
    },
    {
        titulo: 'One Piece Filme 02: Aventura na Ilha Nejimaki',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt0832449',
        imagem: 'https://image.tmdb.org/t/p/w300/dCQSqo3eZGCvpViSrirfk6EU865.jpg'
    },
    {
        titulo: 'One Piece: Strong World',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt1485763',
        imagem: 'https://image.tmdb.org/t/p/w300/s5UuGv4LxDNkfVm3dG6GEIyGNFE.jpg'
    },
    {
        titulo: 'One Piece: Z',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt2375379',
        imagem: 'https://image.tmdb.org/t/p/w300/yVL6WuhJvY8sZyx2rOYcuFQ0RuX.jpg'
    },
    {
        titulo: 'One Piece Filme 11: A Perseguição ao Chapéu de Palha',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt1865467',
        imagem: 'https://image.tmdb.org/t/p/w300/cxA7j9wGNQCNyJcWjX43k5EC2WC.jpg'
    },
    {
        titulo: 'One Piece Gold: O Filme',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt5251328',
        imagem: 'https://image.tmdb.org/t/p/w300/pHuiZmj4aaThV8akzsA5zMcTtox.jpg'
    },
    {
        titulo: 'O Lendário Cão Guerreiro',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt4428398',
        imagem: 'https://image.tmdb.org/t/p/w300/rpK3dukkvCa3E7iOPphsBGTO2dS.jpg'
    },
    {
        titulo: 'O Despertar das Tartarugas Ninja: O Filme',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt9784708',
        imagem: 'https://image.tmdb.org/t/p/w300/1lJgQ0cTKsU4gVEVkNOc6jEJU0o.jpg'
    },
    {
        titulo: 'Tinker Bell e o Monstro da Terra do Nunca',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt3120408',
        imagem: 'https://image.tmdb.org/t/p/w300/vwv9AdjVlr0LBsNAPpk2LllJqAd.jpg'
    },
    {
        titulo: 'Tinker Bell: Fadas e Piratas',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt2483260',
        imagem: 'https://image.tmdb.org/t/p/w300/2wnJj5SPmR70o6YK3m31SnOT33.jpg'
    },
    {
        titulo: 'Tinker Bell: O Segredo das Fadas',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt1217213',
        imagem: 'https://image.tmdb.org/t/p/w300/a4XtmRHjpcN8r4ZUn7g3kGEE3F4.jpg'
    },
    {
        titulo: 'Os Jogos no Refúgio das Fadas',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt1450334',
        imagem: 'https://image.tmdb.org/t/p/w300/uAC5CuzOjfKbSmBoEmzYYWZjtnl.jpg'
    },
    {
        titulo: 'Tinker Bell e o Resgate da Fada',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt1216515',
        imagem: 'https://image.tmdb.org/t/p/w300/yY69Kxm9QP9mHL9Awswxgqr3q1C.jpg'
    },
    {
        titulo: 'Tinker Bell e O Tesouro Perdido',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt1216516',
        imagem: 'https://image.tmdb.org/t/p/w300/bKTfGR1ksZGusE1fsqr7WqzUGuw.jpg'
    },
    {
        titulo: 'Tinker Bell: Uma Aventura no Mundo das Fadas',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0823671',
        imagem: 'https://image.tmdb.org/t/p/w300/azgjMUMoUJB2yheVcN1Ae8lFNeD.jpg'
    },
    {
        titulo: 'Até os Ratos Merecem o Céu',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt3804810',
        imagem: 'https://image.tmdb.org/t/p/w300/mHGQgwbunagp0GwvyMJ2QDmkV6d.jpg'
    },
    {
        titulo: 'Selvagem',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt0405469',
        imagem: 'https://image.tmdb.org/t/p/w300/tDnDREbW2eNjd9KvjVKtnNf5A5Y.jpg'
    },
    {
        titulo: 'ONE PIECE FILM RED',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt16183464',
        imagem: 'https://image.tmdb.org/t/p/w300/cGsmel2XgRONJkpTaRmxqvpdUxw.jpg'
    },
    {
        titulo: 'O Expresso Polar',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt0338348',
        imagem: 'https://image.tmdb.org/t/p/w300/5JfuyhzCDxlBwmJnqLAoswshdLk.jpg'
    },
    {
        titulo: 'Liga da Justiça: Crise em Duas Terras',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt1494772',
        imagem: 'https://image.tmdb.org/t/p/w300/bdlmUeBn2k2LGADnJKsyzuegaXC.jpg'
    },
    {
        titulo: 'Os Primeiros Passos de Groot',
        descricao: 'Descri��o do filme 15',
        imdb: 'tt13820496',
        imagem: 'https://image.tmdb.org/t/p/w300/f3VaKVXJJIPgRDDvXKNSNIQkmec.jpg'
    },
    {
        titulo: 'Groot Toma Banho',
        descricao: 'Descri��o do filme 16',
        imdb: 'tt21316848',
        imagem: 'https://image.tmdb.org/t/p/w300/yUwcFbbeBPmzhWSA2uLNK9afNUZ.jpg'
    },
    {
        titulo: 'O Carinha',
        descricao: 'Descri��o do filme 17',
        imdb: 'tt14513152',
        imagem: 'https://image.tmdb.org/t/p/w300/nfixtLlkKg6D8aNTldBUWmvw20N.jpg'
    },
    {
        titulo: 'Obra Prima',
        descricao: 'Descri��o do filme 18',
        imdb: 'tt21316870',
        imagem: 'https://image.tmdb.org/t/p/w300/lOKTj65dQN92ghWho4Rn75dq6z6.jpg'
    },
    {
        titulo: 'A Busca de Groot',
        descricao: 'Descri��o do filme 19',
        imdb: 'tt21316834',
        imagem: 'https://image.tmdb.org/t/p/w300/oV3mUWylNaRsBkbul7BGilaxE9k.jpg'
    },
    {
        titulo: 'O Menino e o Mundo',
        descricao: 'Descri��o do filme 20',
        imdb: 'tt3183630',
        imagem: 'https://image.tmdb.org/t/p/w300/pNdqVuROes4tdWSbHPu4sKnmlaJ.jpg'
    },
    {
        titulo: 'Meu Malvado Favorito',
        descricao: 'Descri��o do filme 21',
        imdb: 'tt1323594',
        imagem: 'https://image.tmdb.org/t/p/w300/rYZzutMXxvirK9gK01iLo3Blaj3.jpg'
    },
    {
        titulo: 'Meu Malvado Favorito 2',
        descricao: 'Descri��o do filme 22',
        imdb: 'tt1690953',
        imagem: 'https://image.tmdb.org/t/p/w300/7mYMq6OQyum1wAiUI7i6w78YKEO.jpg'
    },
    {
        titulo: 'A Família do Futuro',
        descricao: 'Descri��o do filme 23',
        imdb: 'tt0396555',
        imagem: 'https://image.tmdb.org/t/p/w300/uR9rV69x4saB2vh9yfgQ5PA5E0r.jpg'
    },
    {
        titulo: 'Detona Ralph',
        descricao: 'Descri��o do filme 24',
        imdb: 'tt1772341',
        imagem: 'https://image.tmdb.org/t/p/w300/9OGpoSaGGwbWSFQVFaVGakLyaoK.jpg'
    },
    {
        titulo: 'O Galinho Chicken Little',
        descricao: 'Descri��o do filme 1',
        imdb: 'tt0371606',
        imagem: 'https://image.tmdb.org/t/p/w300/fUCBkuNWpAIfH6yhuRzujy5Zjv0.jpg'
    },
    {
        titulo: 'Os Incríveis',
        descricao: 'Descri��o do filme 2',
        imdb: 'tt0317705',
        imagem: 'https://image.tmdb.org/t/p/w300/z8k5EhZZTLsCRF8NWjSe6snWNZg.jpg'
    },
    {
        titulo: 'Ratatouille',
        descricao: 'Descri��o do filme 3',
        imdb: 'tt0382932',
        imagem: 'https://image.tmdb.org/t/p/w300/lpyqGZXjaPpr2dzkD9XD5DUGMkN.jpg'
    },
    {
        titulo: 'Nível Hard',
        descricao: 'Descri��o do filme 4',
        imdb: 'tt8675288',
        imagem: 'https://image.tmdb.org/t/p/w300/lwDNwvzXkPslQTRRCEoPNnNo76T.jpg'
    },
    {
        titulo: 'Kubo e as Cordas Mágicas',
        descricao: 'Descri��o do filme 5',
        imdb: 'tt4302938',
        imagem: 'https://image.tmdb.org/t/p/w300/g7QMdkgrqVJYyUoiTcAz27vzpVd.jpg'
    },
    {
        titulo: 'Exterminador: Cavaleiros e Dragões',
        descricao: 'Descri��o do filme 6',
        imdb: 'tt12876132',
        imagem: 'https://image.tmdb.org/t/p/w300/ykhI6BEEUG39Mrg47V1YpIrk5vy.jpg'
    },
    {
        titulo: 'Spirit: O Corcel Indomável',
        descricao: 'Descri��o do filme 7',
        imdb: 'tt0166813',
        imagem: 'https://image.tmdb.org/t/p/w300/jycgp5AdZFKj2Qh2VACG9ilK93l.jpg'
    },
    {
        titulo: 'DC Liga dos Superpets',
        descricao: 'Descri��o do filme 8',
        imdb: 'tt8912936',
        imagem: 'https://image.tmdb.org/t/p/w300/sexnQm1YEJMYo7hZgVP1Y6rEyWz.jpg'
    },
    {
        titulo: 'Procurando Nemo',
        descricao: 'Descri��o do filme 9',
        imdb: 'tt0266543',
        imagem: 'https://image.tmdb.org/t/p/w300/qx0EDGXslJvH4qU3DCTseNUL2wo.jpg'
    },
    {
        titulo: 'Barbie: Escola de Princesas',
        descricao: 'Descri��o do filme 10',
        imdb: 'tt2066832',
        imagem: 'https://image.tmdb.org/t/p/w300/3jNK0WP5qDewsdJQl88qFy3Xu8v.jpg'
    },
    {
        titulo: 'Universidade Monstros',
        descricao: 'Descri��o do filme 11',
        imdb: 'tt1453405',
        imagem: 'https://image.tmdb.org/t/p/w300/uHiklaxCoZcQqzsj5l1IgyieWgp.jpg'
    },
    {
        titulo: 'Sorte',
        descricao: 'Descri��o do filme 12',
        imdb: 'tt7214954',
        imagem: 'https://image.tmdb.org/t/p/w300/aeJHkkrDvbXPB25NghNbv5kUBVi.jpg'
    },
    {
        titulo: 'Dragon Ball Super: Super Hero',
        descricao: 'Descri��o do filme 13',
        imdb: 'tt14614892',
        imagem: 'https://image.tmdb.org/t/p/w300/FiqBRypTDyHzqcxdbpPb3ddFep.jpg'
    },
    {
        titulo: 'Agência Secreta de Controle de Magias',
        descricao: 'Descri��o do filme 14',
        imdb: 'tt13932162',
        imagem: 'https://image.tmdb.org/t/p/w300/B3Xz48iyIh9ejffVtfCxwzTO7n.jpg'
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
