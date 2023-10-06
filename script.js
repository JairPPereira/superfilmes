var filmes = [
    {
        titulo: 'Do Not Disturb',
        descricao: 'Um homem de meia-idade consegue emprego em um hotel depois da pandemia, mas alguns hóspedes transformam sua primeira noite em uma aventura insana.',
        imdb: 'tt23049270',
        imagem: 'https://image.tmdb.org/t/p/w300/gyuMSazHAcTSZRhe17NFMXPXOgi.jpg'
    },
    {
        titulo: 'Flora e Filho: Música em Família',
        descricao: 'Flora, mãe solteira, não sabe o que fazer com Max, o filho adolescente rebelde. Quando a polícia sugere a Flora encontrar um hobby para Max, ela entrega a ele um violão surrado. Com a ajuda de um músico fracassado de LA, Flora e Max descobrem o poder de transformação da música.',
        imdb: 'tt25471950',
        imagem: 'https://image.tmdb.org/t/p/w300/i1Xv3pmIwEXmrbnMOwl6BExjV9a.jpg'
    },
    {
        titulo: 'Jovens Bruxas',
        descricao: 'Recém-chegada a Los Angeles, Sarah se sente como uma estranha na academia St. Benedict até que conhece Nancy, Bonnie e Rochelle. As quatro se unem para praticar magia e com seu poder se vingar de todos os que as humilharam.',
        imdb: 'tt0115963',
        imagem: 'https://image.tmdb.org/t/p/w300/yPZHvXmOBbkVKUHZO7gz1ho3TFP.jpg'
    },
    {
        titulo: 'Movimento de Jesus',
        descricao: 'A verdadeira história de um despertar espiritual nacional no início dos anos 1970 e suas origens dentro de uma comunidade de adolescentes hippies no sul da Califórnia.',
        imdb: 'tt10098448',
        imagem: 'https://image.tmdb.org/t/p/w300/m96gOrdyL5jC3u3Znaqq4AG1V8T.jpg'
    },
    {
        titulo: 'O Caçador de Ratos',
        descricao: 'Numa aldeia inglesa, um repórter e um mecânico ouvem um caçador de ratos explicar o seu plano inteligente para enganar a sua presa.',
        imdb: 'tt28912858',
        imagem: 'https://image.tmdb.org/t/p/w300/5fHwVtgJLeOiaKENJ2s8BPY6Rvv.jpg'
    },
    {
        titulo: 'O Engenheiro',
        descricao: 'Segue a maior caçada na história de Israel para encontrar Yahya Ayyash, o mentor da bomba que supervisionou um grupo de soldados suicidas em Israel em meados da década de 1990.',
        imdb: 'tt26450742',
        imagem: 'https://image.tmdb.org/t/p/w300/daEvqdnGCrbk5yMkYkxoDpNuCkP.jpg'
    },
    {
        titulo: 'O Monstro que vive em Mim',
        descricao: 'Após atingir seu limite, os pensamentos obscuros de Hannah se materializam como uma criatura monstruosa que ameaça destruir sua vida.',
        imdb: 'tt17202164',
        imagem: 'https://image.tmdb.org/t/p/w300/fDBAZRH4YiqtOrcTwmwbjz4KsXe.jpg'
    },
    {
        titulo: 'One Day as a Lion',
        descricao: 'Jackie Powers (Scott Caan) é um cara legal, mas um péssimo assassino de aluguel, e quando ele é enviado para matar um devedor astuto (J.K. Simmons), Jackie apenas o irrita. Fugindo de cena, Jackie leva a entediada garçonete Lola como refém. Quando Jackie revela que precisa de dinheiro para tirar o filho da prisão, Lola inventa um esquema para eles conseguirem dinheiro de sua mãe moribunda (Virginia Madsen). Enquanto isso, um bandido enviado para matá-lo está dormindo com a ex de Jackie. Também estrelado por Frank Grillo, esta comédia policial é uma homenagem espirituosa a Tarantino e aos irmãos Coen.',
        imdb: 'tt15783426',
        imagem: 'https://image.tmdb.org/t/p/w300/cxSKca4dNlk7O7PMiEYT203vlIw.jpg'
    },
    {
        titulo: 'Som da Liberdade',
        descricao: 'A história de Tim Ballard, um ex-agente do governo dos EUA, que largou seu emprego para dedicar sua vida a resgatar crianças de traficantes sexuais globais.',
        imdb: 'tt7599146',
        imagem: 'https://image.tmdb.org/t/p/w300/2BWhcrlPr6UvSJy5D044Ikq2QxH.jpg'
    },
    {
        titulo: '살수',
        descricao: 'Acompanha o maior assassino de Joseon durante sua jornada em sua última e mortal missão.',
        imdb: 'tt21109580',
        imagem: 'https://image.tmdb.org/t/p/w300/B1WdiNIa8qQNrZZ7pUXltZoFpr.jpg'
    },
    {
        titulo: 'Resistência',
        descricao: 'Em meio a uma futura guerra entre a raça humana e as forças da inteligência artificial, Joshua, um endurecido ex-agente das forças especiais que lamenta o desaparecimento de sua esposa, é recrutado para caçar e matar o Criador, o indescritível arquiteto da IA avançada que desenvolveu uma arma misteriosa com o poder de acabar com a guerra - e a própria humanidade.',
        imdb: 'tt11858890',
        imagem: 'https://image.tmdb.org/t/p/w300/187OBBT5oMQ2XPXgx9F8JhlycvK.jpg'
    },
    {
        titulo: 'Zerando a Vida',
        descricao: 'Dois caras azarados perdem todo seu dinheiro e decidem fingir a própria morte para começar tudo de novo com outras identidades e o dinheiro do seguro. No entanto, os novos nomes os colocam em apuros ainda maiores do que enfrentavam antes.',
        imdb: 'tt4769836',
        imagem: 'https://image.tmdb.org/t/p/w300/moWEJfrNnywDAJAiFZ1r2OfF5s4.jpg'
    },
    {
        titulo: 'Camaleões',
        descricao: 'Um detetive da Nova Inglaterra trabalha para solucionar o assassinato de um corretor de imóveis e, como resultado do caso, passa por uma reflexão sobre si mesmo.',
        imdb: 'tt13274016',
        imagem: 'https://image.tmdb.org/t/p/w300/2FKm87VF8VKkIFJtRoPsWiux4sr.jpg'
    },
    {
        titulo: 'Coração de Neon',
        descricao: 'Um jovem trabalha com o pai em um típico carro de telegrama cantante brasileiro chamado Coração de Neon. A bordo de um carro personalizado, eles são contratados para entregar mensagens românticas dadas como presentes para pessoas de toda a cidade. Após uma performance que terminou tragicamente, sua vida muda completamente e ele inicia uma jornada alucinante em busca de seus sonhos.',
        imdb: 'tt26776046',
        imagem: 'https://image.tmdb.org/t/p/w300/ucT1MBlwoA0cLvZvjLrZsMaWmBq.jpg'
    },
    {
        titulo: 'Discurso Oculto',
        descricao: 'Nesta comédia romântica politicamente incorreta, um assessor político usa seu poder de persuasão para ajudar seu candidato a vencer as eleições - mas perde o coração no processo.',
        imdb: 'tt28455910',
        imagem: 'https://image.tmdb.org/t/p/w300/a3mMwp42qXaA4DLNcXvNO0u01Pi.jpg'
    },
    {
        titulo: 'Jogos Mortais X',
        descricao: 'Entre os eventos de “Jogos Mortais” e “Jogos Mortais II”, um doente e desesperado John Kramer viaja para o México para um arriscado e experimental procedimento médico na esperança de uma cura milagrosa para seu câncer — apenas para descobrir que toda a operação é uma farsa para fraudar os mais vulneráveis. Armado com um propósito recém-descoberto, o infame assassino em série retorna ao seu trabalho, virando a mesa contra os vigaristas em sua maneira visceral característica por meio de armadilhas tortuosas, perturbadas e engenhosas.',
        imdb: 'tt21807222',
        imagem: 'https://image.tmdb.org/t/p/w300/8s2gd1BZbWLSKEnvYsM8xusbjMl.jpg'
    },
    {
        titulo: 'O Amor Está no Ar',
        descricao: 'Independente e destemida, uma piloto luta para manter a empresa da família, mas começa a se interessar pelo homem enviado para tirá-la do mercado de aviação.',
        imdb: 'tt28073548',
        imagem: 'https://image.tmdb.org/t/p/w300/wFZ0gxa9fxaA7gk6v5nH1hyYfDi.jpg'
    },
    {
        titulo: 'Barbie: Skipper e a Grande Aventura de Babás',
        descricao: 'As coisas não estão indo muito bem nos negócios, então Skipper decide usar sua experiência como babá para arrasar em seu novo emprego no parque aquático.',
        imdb: 'tt26931203',
        imagem: 'https://image.tmdb.org/t/p/w300/t8bt9rrcgK4K1G5VxeO8xkz9RQD.jpg'
    },
    {
        titulo: 'Mona Lisa e a Lua de Sangue',
        descricao: 'Uma garota com poderes incomuns está internada em um hospital psiquiátrico há mais de uma década até que, uma noite, a lua de sangue a libera e ela pode se reinserir na moderna cidade de Nova Orleans, onde enfrentará estranhos habitantes. Ele será capaz de encontrar seu lugar neste mundo?',
        imdb: 'tt8760670',
        imagem: 'https://image.tmdb.org/t/p/w300/jnszI3HhHQEs5VOprDaQU0j670J.jpg'
    },
    {
        titulo: 'Alerta de Spoiler',
        descricao: 'Baseado no livro de memórias Spoiler Alert: The Hero Dies, este filme conta uma história comovente e engraçada, que mostra como a relação de um casal se transforma e aprofunda quando um deles fica doente.',
        imdb: 'tt7775720',
        imagem: 'https://image.tmdb.org/t/p/w300/7VGcGcH8RPIQ6y9UrnNXbzXjMMv.jpg'
    },
    {
        titulo: 'Breaking Point: Paixão à Dança',
        descricao: 'Dois irmãos dançarinos desafiam o luto e suas diferenças para competir nas seletivas nacionais de breakdance da Grã-Bretanha e conseguir uma vaga na equipe que representará o país no Campeonato Mundial de Londres.',
        imdb: 'tt12053110',
        imagem: 'https://image.tmdb.org/t/p/w300/k7ijpc3yvoynohvUGzI9MOmFoOA.jpg'
    },
    {
        titulo: 'Passivonas',
        descricao: 'Em Bottoms, as melhores amigas impopulares PJ e Josie, iniciam um clube de luta no colégio para conhecer garotas e finalmente perder a virgindade. Mas elas logo se veem perdidas quando as alunas mais populares começam a espancar umas as outras em nome da legítima defesa.',
        imdb: 'tt17527468',
        imagem: 'https://image.tmdb.org/t/p/w300/avh6gL9XrRBErOQpmsNIj6TGS0a.jpg'
    },
    {
        titulo: 'À Espreita',
        descricao: 'Durante a Guerra do Vietnã, um posto avançado de soldados norte-americanos é alvo de uma emboscada. Para sua sobrevivência, um grupo de elite vai atrás de informações que podem mudar o curso da guerra.',
        imdb: 'tt8270664',
        imagem: 'https://image.tmdb.org/t/p/w300/qfglisVh5Nmo1nGYCoMzqyZUWcz.jpg'
    },
    {
        titulo: 'Perdida',
        descricao: 'A vida de Sofia dá uma guinada quando ela compra um celular novo e acaba sendo transportada para o século 19. Desesperada para voltar para casa e sua vida, ela é acolhida pela família Clarke, e encontra em Ian uma ajuda para resolver o mistério. No entanto, ela vai descobrir que seu coração tinha outros planos.',
        imdb: 'tt6415842',
        imagem: 'https://image.tmdb.org/t/p/w300/yYVLZgee1MpLGAB4YMneCdWLpEq.jpg'
    },

    {
        titulo: 'Scooby-Doo e Krypto - O Supercão',
        descricao: 'Quando a Liga da Justiça desaparece e os vilões invadem Metrópolis, há apenas uma equipe que pode resolver esse mistério: Scooby-Doo e sua turma!  Mas espere, há um novo cachorro na cidade – Krypto – o Supercão do Superman com Superpoderes.  A Mistérios S/A precisará de toda a ajuda possível quando fantasmas ameaçarem a sede da Liga da Justiça.  E Lex Luthor finalmente se endireitou?  Ou ele está em conluio com o Coringa e a Arlequina?  Os Super-Vilões da DC podem ter entrado em conflito com o Superman antes, mas agora eles estão enfrentando algo novo: uma gangue de garotos intrometidos!',
        imdb: 'tt28508231',
        imagem: 'https://image.tmdb.org/t/p/w300/ntMOnvlYYnio7Fx3xqBu9B1Sz7f.jpg'
    },
    {
        titulo: 'A Incrível História de Henry Sugar',
        descricao: 'Wes Anderson dirige esta adaptação do conto de Roald Dahl sobre um homem rico determinado a dominar uma técnica extraordinária para trapacear no jogo.',
        imdb: 'tt16968450',
        imagem: 'https://image.tmdb.org/t/p/w300/azRL9bmByicPRzP0ljDNzFCwyUX.jpg'
    },
    {
        titulo: 'Carga Máxima',
        descricao: 'Com muita velocidade, perseguições e explosões nas pistas, vem aí no pinote CARGA MÁXIMA!',
        imdb: 'tt16427938',
        imagem: 'https://image.tmdb.org/t/p/w300/ocKoEvCPX809gWsyEXRP2zTViY5.jpg'
    },
    {
        titulo: 'O Morro dos Ventos Uivantes',
        descricao: 'No final do século XVIII, em uma área rural da Inglaterra, surge com o tempo uma violenta paixão entre Catherine Earnshaw (Juliette Binoche) e o cigano Heathcliff (Ralph Fiennes), seu irmão adotivo. Criados juntos, eles são separados pela morte do pai de Catherine e a crueldade de como Hindley Earnshaw (Jeremy Northam), seu irmão, trata Heathcliff. Quando Heathcliff fica sabendo que ela vai casar com Edgar Linton (Simon Sheperd), um homem rico e gentil, Heathcliff foge para fazer fortuna, ignorando o fato de que Catherine o ama, e não o futuro marido. Dois anos depois, Heathchliff retorna para vingar-se de Hindley e Edgar e do abandono que Catherine lhe infligiu.',
        imdb: 'tt0104181',
        imagem: 'https://image.tmdb.org/t/p/w300/byaEMPkCvLDE7ZsrhH8w4KAIjH2.jpg'
    },
    {
        titulo: 'Os Mercenários 4',
        descricao: 'Os Mercenários enfrentam um traficante de armas que comanda o poder de um enorme exército privado.',
        imdb: 'tt3291150',
        imagem: 'https://image.tmdb.org/t/p/w300/dQxlUkhKGILgq9jbVEe3WPaiW2q.jpg'
    },
    {
        titulo: 'Good Boy',
        descricao: 'Christian - um herdeiro milionário, conhece Sigrid - uma jovem estudante, em um aplicativo de namoro. Eles se dão bem rapidamente, mas há apenas um problema: Christian vive com Frank, um homem que se veste e constantemente age como um cachorro.',
        imdb: 'tt19705884',
        imagem: 'https://image.tmdb.org/t/p/w300/9DPG1gxLwV2oyFdHq3SnISsWbse.jpg'
    },
    {
        titulo: 'The Lesson',
        descricao: 'Liam, um jovem escritor, aceita ansiosamente um cargo de tutor na propriedade familiar de seu ídolo, o renomado autor J.M. Sinclair. Mas logo Liam percebe que está preso em uma teia de segredos de família, ressentimento e retribuição.',
        imdb: 'tt20358284',
        imagem: 'https://image.tmdb.org/t/p/w300/ktB7bt09HRQT701hVS8C23tkN6N.jpg'
    },
    {
        titulo: 'O Compositor',
        descricao: 'Durante a Segunda Guerra Mundial, enquanto a cidade de Perm, na Rússia, é evacuada por causa do conflito, o renomado compositor Aram Khatchadourian é encarregado de criar uma última peça musical para o famoso balé Gayane. No decorrer de apenas 8 horas, apesar do caos da evacuação e da severa censura soviética, ele consegue criar o que se tornaria a obra mais famosa de sua carreira.',
        imdb: 'tt9724734',
        imagem: 'https://image.tmdb.org/t/p/w300/eTUmWjp7DhARIfJLbw5DuWrD0Lb.jpg'
    },
    {
        titulo: 'Lançando Segundas Chances',
        descricao: 'Uma dinastia do beisebol e um desastre envolvendo discos incendiados que quase acabou com tudo. Conheça a história do retorno de Mike Veeck.',
        imdb: 'tt27549543',
        imagem: 'https://image.tmdb.org/t/p/w300/4yGhktbhmLixEfpK3yrRFHXdL7W.jpg'
    },
    {
        titulo: 'Island Escape',
        descricao: 'Depois de um misterioso acidente em um campo de pesquisa na Ilha de Gran Manan, um CEO contrata uma equipe de mercenários de colarinho azul para resgatar sua filha, uma cientista do campo.',
        imdb: 'tt27564994',
        imagem: 'https://image.tmdb.org/t/p/w300/5TA3AmwWKasVMRFGXZk0gRv2Oz6.jpg'
    },
    {
        titulo: 'Desculpa, Mas Vou Te Matar',
        descricao: 'Em uma cabana isolada, um assassino em série planeja matar alguns funcionários de uma mesma empresa. Contudo, ele não contava com um grande azar: antes que possa eliminá-los, suas futuras vítimas começam a matar umas às outras em situações absurdas e inesperadas, frustrando o potencial maníaco.',
        imdb: 'tt3442126',
        imagem: 'https://image.tmdb.org/t/p/w300/qtViCHlPDZ4YXfIIiZKZefeao1Z.jpg'
    },
    {
        titulo: 'Cassandro',
        descricao: 'Saúl Armendáriz, um lutador gay de lucha libre de El Paso, alcança a fama internacional depois de criar o personagem Cassandro, o Liberace da Lucha Libre. Durante o processo, ele subverte não apenas o mundo macho da lucha libre, mas também sua própria vida.',
        imdb: 'tt14954534',
        imagem: 'https://image.tmdb.org/t/p/w300/hWHwWsKVr5GkmOI1hWgHZBYkRwi.jpg'
    },
    {
        titulo: 'A Noite das Bruxas',
        descricao: 'O célebre detetive Hercule Poirot, agora aposentado e vivendo em exílio auto imposto em Veneza, relutantemente participa de uma sessão de Halloween em um palazzo decadente e mal-assombrado. Quando um dos convidados é assassinado, o detetive é lançado em um mundo sinistro de sombras e segredos.',
        imdb: 'tt22687790',
        imagem: 'https://image.tmdb.org/t/p/w300/7dLQmoNjMBmLUIrn4ymLe4nQId8.jpg'
    },
    {
        titulo: 'Amor em South Beach',
        descricao: 'Sara e seu ex-namorado Tony são chefs de cozinha que competem para saber quem faz a maior e melhor quinceañera, tradicional festa de 15 anos. Eles são responsáveis pelo buffet das festas de suas sobrinhas que acontece no mesmo final de semana e ambos esperam conseguir um destaque na capa de uma revista local. A competição entre eles reacende os sentimentos que tinham um pelo outro e acaba aproximando as famílias.',
        imdb: 'tt15214710',
        imagem: 'https://image.tmdb.org/t/p/w300/h517jl5N8y6wHUdD4GUveLy58wI.jpg'
    },
    {
        titulo: 'A Aposta',
        descricao: 'Brucie perde sua aposta e é misteriosamente jogado de volta no tempo para ver a vida pelos olhos daqueles que ele feriu brutalmente - uma experiência que alterará para sempre sua vida destruída.',
        imdb: 'tt8806252',
        imagem: 'https://image.tmdb.org/t/p/w300/bMfnxFHXD5VBh6m0RBUkZoaYIYc.jpg'
    },
    {
        titulo: 'Noite Sangrenta',
        descricao: 'Oito mulheres participam de uma festa em uma fazenda remota nas colinas da Califórnia. Eles são interrompidos pela chegada de invasores mascarados que cercam o local e começam a atirar flechas na casa e nos convidados.',
        imdb: 'tt19848268',
        imagem: 'https://image.tmdb.org/t/p/w300/kgND5yAax4aT4UXEXrEsZavlHDx.jpg'
    },
    {
        titulo: 'After: Para Sempre',
        descricao: 'Hardin não para de pensar na sua relação conturbada com Tessa. Vítima de um bloqueio criativo, o jovem escritor resolve fazer as malas e partir para Lisboa, capital portuguesa, onde espera reencontrar a sua inspiração.',
        imdb: 'tt15334488',
        imagem: 'https://image.tmdb.org/t/p/w300/tRjzdNiFHda6lrXySOQPyY3OtCA.jpg'
    },
    {
        titulo: '10 Dias de um Homem Bom',
        descricao: 'Sadık (Nejat Isler) é um homem de grande integridade e força vital, além disso, sempre esteve muito empenhado em ajudar o próximo, por isso, começou a trabalhar como advogado. No entanto, com o tempo, ele decidiu se tornar um investigador particular em uma pequena cidade da Turquia. Lá ele tenta buscar justiça em um mundo cheio de bandidos, traficantes de pessoas e assassinos. Quando um caso sobre várias pessoas desaparecidas chega até ele, quatro mulheres muito diferentes cruzarão seu caminho. Todos eles têm muitos problemas que ele tentará resolver.',
        imdb: 'tt23334464',
        imagem: 'https://image.tmdb.org/t/p/w300/ihMCcc0vBQQyphiaoyoTvpJlTPi.jpg'
    },
    {
        titulo: 'Em Todas as Partes',
        descricao: 'Há mais de uma década separados, um casal de irmãos decide tentar uma reaproximação e realizar um sonho de infância: uma viagem de moto pelo México.',
        imdb: 'tt12616964',
        imagem: 'https://image.tmdb.org/t/p/w300/pJ0UlaKXi0yuAjPV4hgG5huJvFl.jpg'
    },
    {
        titulo: 'Sayen',
        descricao: 'Nas florestas do sul do Chile, Sayen, uma jovem mapuche, sai em busca dos mercenários que assassinaram sua avó. Usando seu treinamento, ela consegue sobreviver e virar o jogo contra esses intrusos. Ela deve escolher entre ir embora ou proteger não só sua gente, mas também outros grupos nativos, da tenebrosa empresa que ameaça suas terras e seus meios de subsistência.',
        imdb: 'tt19869024',
        imagem: 'https://image.tmdb.org/t/p/w300/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg'
    },
    {
        titulo: 'A Lista da Vingança',
        descricao: 'Para salvar o filho acusado injustamente de sequestro, um homem decide fazer justiça com as próprias mãos e enfrenta uma gangue de policiais corruptos.',
        imdb: 'tt24083908',
        imagem: 'https://image.tmdb.org/t/p/w300/r8vVQ0blfRsRth1rCjNt45pY293.jpg'
    },
    {
        titulo: 'Carmen',
        descricao: 'O longa apresenta uma releitura moderna de uma das histórias de amor e óperas mais famosas da história, Carmen.',
        imdb: 'tt6875952',
        imagem: 'https://image.tmdb.org/t/p/w300/oc07MMSumgytiBT1fVTuEMDjUQA.jpg'
    },
    {
        titulo: 'Como Superar um Coração em Pedaços',
        descricao: 'Sequência do filme peruano Soltera Codiciada.',
        imdb: 'tt28765467',
        imagem: 'https://image.tmdb.org/t/p/w300/1fI9VlE7pK0xZ7KtpG65vTG5c0p.jpg'
    },
    {
        titulo: 'Inquietação',
        descricao: 'Sam sofre um acidente de carro e acorda num hospital. Ele busca uma saída ao perceber que o lugar está abandonado, mas descobre que forças do mal o prendem lá.',
        imdb: 'tt25869142',
        imagem: 'https://image.tmdb.org/t/p/w300/j8FuUkC5doaNfmFq21HIhp0u3eJ.jpg'
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
