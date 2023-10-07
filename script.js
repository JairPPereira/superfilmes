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

    {
        titulo: 'Guiado pelo Luar',
        descricao: 'Depois que a esposa do cantor country Will Brown falece, sua dor o afasta tanto de sua carreira quanto de sua filha. Sua vida tem uma reviravolta quando um talentoso treinador de cavalos mostra a ele força, perdão e graça.',
        imdb: 'tt15481802',
        imagem: 'https://image.tmdb.org/t/p/w300/6FDQWH4n3CbdXy6okehSVVenX02.jpg'
    },
    {
        titulo: 'Shortcomings',
        descricao: 'Ben Tanaka, Miko Hayashi e Alice Kim, um trio de jovens da Bay Area, navegam em uma série de relacionamentos interpessoais, atravessando o país em busca da conexão ideal.',
        imdb: 'tt14483774',
        imagem: 'https://image.tmdb.org/t/p/w300/1Lc4IzfHtMY9kKB8N0LVDQ56v03.jpg'
    },
    {
        titulo: 'Pequenos Espiões: Apocalipse',
        descricao: 'Quando os filhos dos maiores agentes secretos do mundo, involuntariamente, ajudam um poderoso desenvolvedor de jogos a liberar um vírus de computador que lhe dá o controle de toda a tecnologia, eles próprios devem se tornar espiões para salvar seus pais e o mundo.',
        imdb: 'tt13978520',
        imagem: 'https://image.tmdb.org/t/p/w300/cwCKYjIPXapuBtO51S81GNhoGxV.jpg'
    },
    {
        titulo: 'Suspeito X',
        descricao: 'Um talentoso professor de matemática tenta ajudar uma mãe solo envolvida em um crime. Mas um policial insistente pode atrapalhar.',
        imdb: 'tt15748830',
        imagem: 'https://image.tmdb.org/t/p/w300/sJqObd9wfW5EhCvnpzJuOar5fR1.jpg'
    },
    {
        titulo: 'A Freira 2',
        descricao: 'Quatro anos após os acontecimentos na abadia de St. Carta, a Irmã Irene (Taissa Farmiga) regressa mais uma vez e depara-se com a força demoníaca de Valak, a Freira (Bonnie Aarons).',
        imdb: 'tt10160976',
        imagem: 'https://image.tmdb.org/t/p/w300/jv7lyPfBC1heRWtQUd1gX7Q0wSo.jpg'
    },
    {
        titulo: 'Amor à Primeira Vista',
        descricao: 'Em um voo para Londres, dois estranhos sentem uma conexão, mas logo se perdem no aeroporto. O reencontro parece impossível, só que o amor desafia todas as probabilidades.',
        imdb: 'tt13444014',
        imagem: 'https://image.tmdb.org/t/p/w300/3a13ifmIiOsgKoQpOpDfsWCx4Qh.jpg'
    },
    {
        titulo: 'Bob Esponja Calça Quadrada apresenta: Zona das Marés',
        descricao: 'Vovô Pat viaja por dimensões e linhas do tempo alternativas',
        imdb: 'tt22640250',
        imagem: 'https://image.tmdb.org/t/p/w300/rozwpOPiTEYnXygWGvUPST4lVQa.jpg'
    },
    {
        titulo: 'Ehrengard: A Ninfa do Lago',
        descricao: 'Contratado para ensinar os truques da sedução ao tímido filho da Grã-Duquesa, um especialista em amor se envolve em um romance inesperado... e em um escândalo.',
        imdb: 'tt27727074',
        imagem: 'https://image.tmdb.org/t/p/w300/eZwkqc75XDMy35keKJkk2rh3Jhf.jpg'
    },
    {
        titulo: 'Em uma Terra Muito Distante… Havia um Crime',
        descricao: 'No baile da Cinderela, Chapeuzinho Vermelho se envolve em um mistério. Será que ela consegue resolver esse caso antes da meia-noite?',
        imdb: 'tt15944018',
        imagem: 'https://image.tmdb.org/t/p/w300/8r9yZ6cmZ6bxIhqfo69X1m9jYNJ.jpg'
    },
    {
        titulo: 'Freestyle',
        descricao: 'Precisando de grana para pagar o estúdio de gravação, um rapper com um passado criminoso se mete com o tráfico de drogas. Agora, ele pode perder tudo.',
        imdb: 'tt28366647',
        imagem: 'https://image.tmdb.org/t/p/w300/frvpF7wyXVxb78wp39c3bSSRslp.jpg'
    },
    {
        titulo: 'Nosso Amigo Extraordinário',
        descricao: 'Milton vive uma vida tranquila e rotineira em uma pequena cidade no oeste da Pensilvânia, mas tem seu dia virado de cabeça para baixo quando um OVNI e seu passageiro extraterrestre fazem um pouso forçado em seu quintal.',
        imdb: 'tt15428940',
        imagem: 'https://image.tmdb.org/t/p/w300/wM2mraYh30CGBikQcmhgcl1uTds.jpg'
    },
    {
        titulo: 'O Conde',
        descricao: 'Augusto Pinochet é vampiro e está pronto para morrer, mas os abutres que o rodeiam ainda esperam uma última mordida.',
        imdb: 'tt21113540',
        imagem: 'https://image.tmdb.org/t/p/w300/2j8QZBSw22JRCfVgZrteu7BaYsE.jpg'
    },
    {
        titulo: 'O Convento',
        descricao: 'Após o suposto suicídio de seu irmão padre, Grace viaja para o remoto convento escocês onde ele morreu. Desconfiando do relato da Igreja, ela descobre assassinato, sacrilégio e uma verdade perturbadora sobre si mesma.',
        imdb: 'tt14993352',
        imagem: 'https://image.tmdb.org/t/p/w300/sGNVrW2TWMz4pWHayrRinZyCZ01.jpg'
    },
    {
        titulo: 'O Trajeto',
        descricao: 'Em 1974, o sistema de ensino público de Boston passa por um processo de dessegregação, disponibilizando ônibus escolares para transportarem os alunos das regiões mais pobres até as escolas dos bairros mais ricos da cidade.',
        imdb: 'tt11278608',
        imagem: 'https://image.tmdb.org/t/p/w300/ducffbn4tq3WS1mrULO5qNuLdL0.jpg'
    },
    {
        titulo: 'Um Guarda-Florestal',
        descricao: 'Neste thriller de ação emocionante, um pistoleiro Texas Ranger pretende impedir um terrorista internacional de detonar uma bomba no coração de Londres.',
        imdb: 'tt23037488',
        imagem: 'https://image.tmdb.org/t/p/w300/dE1VakahNpdAI7xYF2ia6ryEkL5.jpg'
    },
    {
        titulo: 'A Volta ao Mundo em 80 Dias',
        descricao: 'Um sagüi estudioso sonha em conhecer o mundo. Ao lado de um sapo malandro, eles tentarão viajar ao redor da Terra em 80 dias.',
        imdb: 'tt10341040',
        imagem: 'https://image.tmdb.org/t/p/w300/kuaBfUCrp1RBmdq1FsFHVe5eQO9.jpg'
    },
    {
        titulo: 'Madre Teresa & Eu',
        descricao: 'Separadas por anos, a jovem Kavita e Madre Teresa compartilham sentimentos conflitantes. Uma decide se segue uma gravidez e a outra luta para manter a fé e servir aos pobres.',
        imdb: 'tt11228826',
        imagem: 'https://image.tmdb.org/t/p/w300/8iPYXvAeUfuWU1bxgly02qmhwR7.jpg'
    },
    {
        titulo: 'Locked In',
        descricao: 'Quatro mulheres, que não se conhecem, acordam em um porão trancado sem nenhuma lembrança de quem são ou como chegaram lá. À medida que se lembram lentamente dos acontecimentos recentes das suas vidas, rapidamente percebem que estão todos em grave perigo. Eles têm que fazer o que puderem para descobrir como escapar antes que seus captores retornem. No entanto, nem todos são honestos sobre quem são e o que sabem.',
        imdb: 'tt26314963',
        imagem: 'https://image.tmdb.org/t/p/w300/ioaP4SCzYhtK9H5g1TrAOhMzqeU.jpg'
    },
    {
        titulo: 'Koputus',
        descricao: 'Três irmãos adultos retornam à casa de sua infância, onde seus pais foram supostamente assassinados há muitos anos. O plano é deixar a casa e a propriedade prontas para serem vendidas, mas acontece que há algo maligno.',
        imdb: 'tt12851130',
        imagem: 'https://image.tmdb.org/t/p/w300/A4uzqmeimrNIknLQ3V6583LwaUG.jpg'
    },
    {
        titulo: 'A Justiceira',
        descricao: 'Neste thriller noir cheio de estilo, a talentosa e irreverente dançarina Mouse investiga o desaparecimento de suas amigas da boate e não vai descansar enquanto não encontrar justiça.',
        imdb: 'tt5859970',
        imagem: 'https://image.tmdb.org/t/p/w300/2FexbKMBnFgdeik5d3tF9hYtxtR.jpg'
    },
    {
        titulo: 'Arquivos da Perversão: Os Abusos na Boy Scouts of America',
        descricao: 'Sobreviventes, informantes e especialistas falam sobre os abusos sexuais ocultados por décadas pela Boy Scouts of America, e suas consequências.',
        imdb: 'tt28660814',
        imagem: 'https://image.tmdb.org/t/p/w300/dP6QJ62LQL8xPqBTueXRYILJKm0.jpg'
    },
    {
        titulo: 'Apocalypto',
        descricao: 'Jaguar Paw (Rudy Youngblood) levava uma vida tranquila, que foi interrompida devido à uma invasão. Os governantes de um império maia em declínio acreditavam que a chave para a prosperidade seria construir mais templos e realizar mais sacrifícios humanos. Jaguar é capturado para ser um destes sacrifícios, mas consegue escapar por acaso. Agora, guiado apenas pelo amor que sente por sua esposa e pela filha, ele realiza uma corrida desesperada para chegar em casa e salvar sua família.',
        imdb: 'tt0472043',
        imagem: 'https://image.tmdb.org/t/p/w300/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg'
    },
    {
        titulo: 'The Unlikely Pilgrimage of Harold Fry',
        descricao: 'Haroldo é um homem comum que passou pela vida, vivendo à margem, até que um dia vai postar uma carta e continua andando.',
        imdb: 'tt14097206',
        imagem: 'https://image.tmdb.org/t/p/w300/qTIa7e5NINQ2oIHY9UXCk7fyVIC.jpg'
    },
    {
        titulo: 'Tudo Sob Descontrole',
        descricao: 'Louise tem um ataque de pânico e não consegue sair de seu carro. Quando a noite chega, o bandido Paul invade o veículo para roubá-lo. Ele acha que ela é louca, e ela acha que ele é um idiota, mas os dois são forçados a viajar juntos.',
        imdb: 'tt15484716',
        imagem: 'https://image.tmdb.org/t/p/w300/AcWVVhcN1FfUG9zZw9fIoWWGDzt.jpg'
    },

    {
        titulo: 'Spirit of Fear',
        descricao: 'Um homem acorda em uma casa vazia no subúrbio sem memória e com sangue manchado no braço.',
        imdb: 'tt22410094',
        imagem: 'https://image.tmdb.org/t/p/w300/v7htXVrfq9CXhlRXIVofuLUkc7M.jpg'
    },
    {
        titulo: 'Older Gods',
        descricao: 'Após o desaparecimento de seu amigo problemático, Chris Rivers investiga um culto apocalíptico sombrio.',
        imdb: 'tt14817952',
        imagem: 'https://image.tmdb.org/t/p/w300/tCL4U4nySiijUF2wTuB247KJbmT.jpg'
    },
    {
        titulo: 'Missão Clandestina',
        descricao: 'Um assassino de operações especiais e um agente de combate ao narcotráfico se cruzam em missões para deter uma organização terrorista cibernética. Eles unirão forças para impedir um ataque à rede elétrica e uma catástrofe mudial.',
        imdb: 'tt11696342',
        imagem: 'https://image.tmdb.org/t/p/w300/4SD3g1emJlCGpAJ6yaVQHAh37To.jpg'
    },
    {
        titulo: 'Khutulun: A Princesa Guerreira',
        descricao: 'Baseado em uma história real, o filme mostra a lendária princesa Khutulun da Mongólia, filha de Kaidu, que governou a Ásia Central no século XIII, usando toda a sua coragem e habilidades de luta para recuperar um sagrado texto budista, o Sutra da Luz Dourada.',
        imdb: 'tt15238852',
        imagem: 'https://image.tmdb.org/t/p/w300/h1tgT77aMRnMstr3soizs0ALir.jpg'
    },
    {
        titulo: 'I Am Rage',
        descricao: 'Um antigo culto envolvido em um sinistro comércio de sangue comete o erro mortal de sequestrar uma jovem com um passado violento e chocante.',
        imdb: 'tt18284880',
        imagem: 'https://image.tmdb.org/t/p/w300/iclmQs4O5dy7EAkbykI1qkowfK2.jpg'
    },
    {
        titulo: 'Feitiçaria',
        descricao: 'Chiloé, 1880. Rosa é uma garota huilliche que, depois do assassinato de seu pai, chega em busca de justiça junto a Mateo Coñuecar, que é líder de uma organização de bruxos e rapidamente se torna seu avô adotivo. Quando Mateo é preso, acusado de ser uma autoridade paralela na República do Chile, Rosa assumirá o desafio de libertá-lo, mesmo que isso a inicie nos caminhos da bruxaria.',
        imdb: 'tt20395798',
        imagem: 'https://image.tmdb.org/t/p/w300/99wdStgFDTnrPbgpBt29lI87vai.jpg'
    },
    {
        titulo: 'Belas e Recatadas',
        descricao: 'Uma alegre combinação de afeto entre irmãs, decepções parentais e ação pura. Belas e Recatadas segue a artista marcial em formação Ria Khan, que acredita que deve salvar sua irmã mais velha, Lena, de seu casamento iminente. Ao recrutar seus amigos, Ria tenta executar o assalto a casamento mais ambicioso de todos em nome da independência e da sororidade.',
        imdb: 'tt18257464',
        imagem: 'https://image.tmdb.org/t/p/w300/4fZdOTs8Jn2SXF6DEmcQoIl1rO5.jpg'
    },
    {
        titulo: 'Bares, Bolos e Amizades',
        descricao: 'Inspirado em uma história real, este filme acompanha duas melhores amigas na casa dos 20 anos vivendo em Los Angeles. A extrovertida Corinne, convence a tímida Jane, a levar bolos para os bares durante um ano, para ajudá-la a conhecer pessoas. Mas quando Corinne recebe um diagnóstico que altera sua vida, essa dupla vai enfrentar um grande desafio.',
        imdb: 'tt8452344',
        imagem: 'https://image.tmdb.org/t/p/w300/98trDKdoX997KOF4i3xJL6vuXKl.jpg'
    },
    {
        titulo: 'A Sutil Arte de Ligar o F*da-se',
        descricao: 'Um documentário cinematográfico feito para nos ajudar a nos tornar pessoas menos horríveis. O próprio autor, Mark Manson, vai direto ao assunto para ensinar a filosofia dele de ligar o f*da-se: uma dose de sinceridade nua e crua que nos mostra como viver uma vida mais contente e fundamentada.',
        imdb: 'tt12380422',
        imagem: 'https://image.tmdb.org/t/p/w300/jRRXELIL5G2L8SqrpZEEQF6MfwZ.jpg'
    },
    {
        titulo: 'A Cidade Dourada',
        descricao: 'Assombrado pela morte do pai, um homem se junta a sua ex-namorada para procurar por um artista vivendo em uma ocupação rebelde no meio da floresta amazônica do Peru, onde espíritos demoníacos protegem a lendária cidade de El Dorado.',
        imdb: 'tt4113346',
        imagem: 'https://image.tmdb.org/t/p/w300/fbcuQoaHYcapCnAKgHy8r9rZq7E.jpg'
    },
    {
        titulo: 'Shooting Stars: A Vida de Lebron James',
        descricao: 'Sonhando em viver do basquete, o jovem LeBron James começa sua trajetória com o time de sua escola. Com seus amigos e colegas de time, ele alcança o posto entre os melhores jogadores do mundo.',
        imdb: 'tt3715152',
        imagem: 'https://image.tmdb.org/t/p/w300/rzOxUgqkQeKyhyuKZqIj87VqFUg.jpg'
    },
    {
        titulo: 'Warhorse One',
        descricao: 'Durante uma missão de resgate para evacuar um grupo de missionários, durante a retirada militar dos EUA em 2021 do Afeganistão, um helicóptero da equipe SEAL é abatido por um grupo de insurgentes. Um dos operadores da equipe SEAL, Master Chief Richard Mirko, é jogado dos destroços, sobrevivendo milagrosamente ao acidente. Com o resto de sua equipe morta em ação, Mirko continua sua busca pelos missionários, mas encontra seu veículo emboscado e o único sobrevivente: uma criança traumatizada de 5 anos. Mirko deve agora guiar a criança com segurança, através do confronto com insurgentes, e sobrevivendo ao brutal deserto afegão.',
        imdb: 'tt16527824',
        imagem: 'https://image.tmdb.org/t/p/w300/jP2ik17jvKiV5sGEknMFbZv7WAe.jpg'
    },
    {
        titulo: 'Quase Morta',
        descricao: 'María e Javi, amigos de longa data, estão afastados há anos. Até que Javi recebe a notícia de que Maria tem apenas um mês de vida, ai ele deixa tudo em Montevidéu para vê-la uma última vez em Buenos Aires, pois a sua “data de validade” vence no Ano Novo.',
        imdb: 'tt10749816',
        imagem: 'https://image.tmdb.org/t/p/w300/gSezYOBs7H3RG8rDcjsK3MqluxN.jpg'
    },
    {
        titulo: 'Boogeyman: Seu Medo é Real',
        descricao: 'Uma jovem de 16 anos e sua irmã mais nova ainda em luto pela morte da mãe, são alvo de uma criatura sobrenatural depois que o pai de ambas atende um paciente desesperado em casa.',
        imdb: 'tt3427252',
        imagem: 'https://image.tmdb.org/t/p/w300/uFXGofUsMFEoNiBvzuyX9KbHMLA.jpg'
    },
    {
        titulo: 'O Protetor: Capitulo Final',
        descricao: 'Sentindo-se em casa no sul da Itália, o ex-agente Robert McCall logo descobre que seus novos amigos estão sob o controle dos chefes do crime local.  À medida que os acontecimentos se tornam mortais, McCall sabe o que tem de fazer: tornar-se o protetor dos seus amigos, enfrentando a máfia.',
        imdb: 'tt17024450',
        imagem: 'https://image.tmdb.org/t/p/w300/p4Qn2hhKoz8My9ysN1RK223iVM5.jpg'
    },
    {
        titulo: 'Til Death Do Us Part',
        descricao: 'Depois de desistir de seu casamento, uma ex-noiva deve lutar contra seu ex-noivo e sete padrinhos assassinos furiosos para sobreviver à noite.',
        imdb: 'tt27047448',
        imagem: 'https://image.tmdb.org/t/p/w300/fq6mc9dXrKQLvfas00mk31f84NC.jpg'
    },
    {
        titulo: 'Um Clímax Entre Nós',
        descricao: 'O relacionamento de Luna e Mink segue firme e forte, mas a situação vai dar uma enrolada agora que Luna sugeriu incluir outra pessoa na intimidade do casal.',
        imdb: 'tt21087084',
        imagem: 'https://image.tmdb.org/t/p/w300/uWqExsoTbKijAV85lsFyARTGGiW.jpg'
    },
    {
        titulo: 'Um Dia e Meio',
        descricao: 'Desesperado para rever a filha, um homem armado invade um centro médico e sequestra a ex-mulher que trabalha lá.',
        imdb: 'tt20414642',
        imagem: 'https://image.tmdb.org/t/p/w300/sDKLmW41pemkahdPFbxkyxOIx34.jpg'
    },
    {
        titulo: 'Viver',
        descricao: 'Na Londres dos anos 1950, um funcionário público mau humorado decide tirar uma folga do trabalho para experimentar a vida depois de receber um diagnóstico sombrio.',
        imdb: 'tt9051908',
        imagem: 'https://image.tmdb.org/t/p/w300/sujkFvw29C1cvwBHbToPnWnvBcV.jpg'
    },
    {
        titulo: 'Você Não Tá Convidada pro Meu Bat Mitzvá!',
        descricao: 'As amigas Stacy e Lydia estão planejando bat mitzvahs épicos, mas as coisas se complicam quando um garoto popular e muito drama ameaçam mandar tudo por água abaixo.',
        imdb: 'tt21276878',
        imagem: 'https://image.tmdb.org/t/p/w300/fQmlvC4AQrH6tZIrnaK4n6EidGW.jpg'
    },
    {
        titulo: 'A Lista',
        descricao: 'Depois que seu noivo, Matt, dorme com uma celebridade da sua lista de passe livre, Abby vê sua vida perfeita em queda livre e a única maneira de superar essa traição é dormir com uma celebridade da sua própria lista. Com a ajuda de sua melhor amiga Chloe e nada mais que cinco nomes e uma fantasia compartilhada por milhões, Abby voa através do país até o lugar perfeito para conhecer o protagonista dos seus sonhos... Hollywood! Mas quando Abby conhece Jake , um garçom dali com grandes sonhos, ela começa a reconsiderar o que ela está buscando. Está na hora de reescrever a lista?',
        imdb: 'tt12917050',
        imagem: 'https://image.tmdb.org/t/p/w300/i0MdxxoNAzuANVnZkZcD15W1d5d.jpg'
    },
    {
        titulo: 'O Estranho Caso do Fantasma Claustrofóbico',
        descricao: 'Os irmãos Nikolaj (12) e Emil (8) descobrem o fantasma de um menino que habita o quarto de sua nova casa. Com a ajuda da amiga Ximena (12), eles vão tentar ajudar o fantasma a resolver sua pendência: entregar uma carta de amor a uma garota que ele deixou de ver há mais de 30 anos.',
        imdb: 'tt22048932',
        imagem: 'https://image.tmdb.org/t/p/w300/mxl2XF0Qnmig21w4btbQjxxcIq.jpg'
    },
    {
        titulo: 'Amizade de Férias 2',
        descricao: 'Marcus e Emily, recém-casados convidam Ron e Kyla que também são recém-casados e tem um bebê, para uma viajem para um resort no Caribe, onde Marcus vai se encontrar com os proprietários para discutir um contrato de construção de um hotel em Chicago. Mas quando a festa começa, as férias relaxantes dos casais rapidamente se tornam uma aventura selvagem.',
        imdb: 'tt15351980',
        imagem: 'https://image.tmdb.org/t/p/w300/wRfkaDKu7YK5htNIvkHtxdplAvG.jpg'
    },

    {
        titulo: 'Babylon 5: O Caminho',
        descricao: 'Volte para Babylon 5 e acompanhe a épica saga interestelar em The Road Home. Viaje pela galáxia com John Sheridan, que se vê transportado por várias linhas do tempo e realidades alternativas na missão de encontrar seu caminho de volta para casa. Ao longo da jornada, ele encontra alguns rostos familiares e descobre novas revelações cósmicas sobre a história, propósito e significado do Universo.',
        imdb: 'tt27712788',
        imagem: 'https://image.tmdb.org/t/p/w300/zaXdRG8bCdK923JsmSej37j517C.jpg'
    },
    {
        titulo: 'A Sorte Grande',
        descricao: 'A história de Leslie, uma mulher alcoólatra que se tornou uma celebridade quando ganhou $ 190.000 na loteria local, mas acabou esbanjando os ganhos com drogas e álcool.  Atualmente, Leslie vive na miséria, mas após ser expulsa de um motel, ela decide se reunir com seu filho de vinte anos. Mas a mulher não consegue cumprir sua promessa.  Quando sua vida chega ao fundo do poço, a presença de um estranho a fará reavaliar as coisas e tentar reconstruir sua vida.',
        imdb: 'tt8129806',
        imagem: 'https://image.tmdb.org/t/p/w300/e2DiRIkVUURXD40JxcrO1D1i8Og.jpg'
    },
    {
        titulo: '10 Dias de um Homem Mau',
        descricao: 'Um detetive privado desgastado, destroçado e enlutado tem de desenredar à força um emaranhado de mentiras para descobrir a verdade por detrás de um homicídio numa mansão.',
        imdb: 'tt24852002',
        imagem: 'https://image.tmdb.org/t/p/w300/fl0vUwiKyxEauecs9UCh8cGRzZH.jpg'
    },
    {
        titulo: 'A Geração do Mal',
        descricao: 'Gintas é chefe de polícia e está prestes a se aposentar em uma pacata cidade do interior. Ele é amado e respeitado por todos. Ele também faz parte da elite local que governa a cidade há muitos anos. Mas no dia em que um assassino começa a semear a morte entre este grupo unido, Gintas deve não apenas liderar a investigação, mas também proteger sua vida.',
        imdb: 'tt13419036',
        imagem: 'https://image.tmdb.org/t/p/w300/xcHUuWAUHT7aAoV6IddtgD0qUVI.jpg'
    },
    {
        titulo: 'Amor² para Sempre',
        descricao: 'Neste terceiro filme da franquia Amor², o romance conturbado de Monika e Enzo está prometendo um final de conto de fadas. Só que uma revelação bombástica vai mudar tudo.',
        imdb: 'tt28496500',
        imagem: 'https://image.tmdb.org/t/p/w300/cD67jLjJcPKFyIRlyLmECyENrz6.jpg'
    },
    {
        titulo: 'Baby Blue',
        descricao: 'Um grupo de adolescentes se depara com a história do agora morto serial killer BABY BLUE e decide que ele seria o tema perfeito para um vodcast de crime verdadeiro. Mas quando eles começam a cavar, descobrem rapidamente que sua onda de assassinatos nunca parou. Agora eles estão sendo alvos do além-túmulo.',
        imdb: 'tt18376800',
        imagem: 'https://image.tmdb.org/t/p/w300/pC6j3tSoneNbe4pjjtGOcWWxGMU.jpg'
    },
   
    {
        titulo: 'O Clube de Leitores Assassinos',
        descricao: 'Oito amigos fãs de terror lutam para sobreviver à perseguição de um palhaço assassino que conhece o maior segredo deles.',
        imdb: 'tt18260564',
        imagem: 'https://image.tmdb.org/t/p/w300/rn7PFMpdUUEPxaf6AYMVF91DUfJ.jpg'
    },
    {
        titulo: 'O Melhor Lugar da Terra',
        descricao: 'Em uma cidadezinha de pescadores, surge uma oportunidade de melhorar a economia e os moradores fazem de tudo para aproveitar.',
        imdb: 'tt14542504',
        imagem: 'https://image.tmdb.org/t/p/w300/sL44B6R6yjuWWqUQENQRQUsHFfI.jpg'
    },
    {
        titulo: 'O Falsificador',
        descricao: 'O jovem judeu Cioma, 21 anos, não deixa ninguém tirar sua alegria de viver, muito menos os nazistas. Em 1942, ele precisa encontrar novas maneiras de ganhar a vida em Berlim e descobre seu talento para a falsificação: não apenas passaportes, mas também com sua própria identidade.',
        imdb: 'tt15403362',
        imagem: 'https://image.tmdb.org/t/p/w300/2Es52cS0Cu44UxpeICzN1GxFmnF.jpg'
    },
    {
        titulo: 'O Portal Secreto',
        descricao: 'Paul Carpenter é estagiário em uma misteriosa empresa de Londres com empregadores não convencionais, incluindo um CEO que quer romper o antigo mundo mágico com práticas corporativas modernas.',
        imdb: 'tt11820950',
        imagem: 'https://image.tmdb.org/t/p/w300/3mu3olAbPYTm4GkEdsr6Bk1MU5.jpg'
    },
    {
        titulo: 'Os Irmãos Aventura: O Filme',
        descricao: 'A última invenção do doutor vai levar os Aventura à falência ou lançá-los a novas alturas, e uma mulher misteriosa ameaça acabar com o mundo de Marcelo, Maurício e O Monarca.',
        imdb: 'tt14636186',
        imagem: 'https://image.tmdb.org/t/p/w300/oGX6dBRHjO2FsQG5FaNpS7NOtFs.jpg'
    },
    {
        titulo: 'Pastacolypse',
        descricao: 'Após a proibição do glúten arruinar a sua vida, um chef famoso procura vingança contra toda a humanidade e a sua filha tem de fazer o maior sacrifício para salvar o mundo da destruição iminente.',
        imdb: 'tt20247162',
        imagem: 'https://image.tmdb.org/t/p/w300/4skTPWLXrIpHh0BU6Rmi0a1y5hb.jpg'
    },
    {
        titulo: 'The Tomorrow Job',
        descricao: 'Uma equipe de ladrões usa uma droga de viagem no tempo para trocar de lugar com o seu eu futuro e executar o maior assalto possível. Quando interrompida em um trabalho, a equipe precisa corrigir os erros do passado.',
        imdb: 'tt14672882',
        imagem: 'https://image.tmdb.org/t/p/w300/Ah3pJ3iuX28PKHjGLyIrEsFVq5q.jpg'
    },
    {
        titulo: 'Sympathy for the Devil',
        descricao: 'Após ser forçado a dirigir para um passageiro misterioso com uma arma apontada, um homem se vê em um jogo de gato e rato.',
        imdb: 'tt21991654',
        imagem: 'https://image.tmdb.org/t/p/w300/afGdVMa80LMs6ibLP22CwM5uI4e.jpg'
    },
    {
        titulo: 'Os Sete Pecados Capitais: Fúria de Edimburgo – Parte 2',
        descricao: 'Tristan reencontra Lancelot pela primeira vez após um trágico acidente. Agora, ele precisa aprender a controlar seus demônios internos para salvar a vida da mãe.',
        imdb: 'tt25010142',
        imagem: 'https://image.tmdb.org/t/p/w300/tCEFjPGeaQJldoDpqDiDBdOH8GA.jpg'
    },
    {
        titulo: 'Nikki e Nora: Gêmeas em Ação',
        descricao: 'As gêmeas Nikki e Nora são forçadas a se reencontrar quando herdam uma agência de detetives. Enquanto resolvem um assassinato, elas percebem que suas diferenças podem ser seu maior trunfo.',
        imdb: 'tt21969174',
        imagem: 'https://image.tmdb.org/t/p/w300/8bcg5Xtzj8Sg5ivEdjt0DOe3WSR.jpg'
    },
    {
        titulo: 'Murder City',
        descricao: 'Um ex-policial desgraçado é forçado a trabalhar para um chefão implacável para pagar a dívida de seu pai e proteger sua família.',
        imdb: 'tt2583014',
        imagem: 'https://image.tmdb.org/t/p/w300/1hFtSsYryX2dTGXWHSynGPsASOD.jpg'
    },
    {
        titulo: 'Murder at the Murder Mystery Party',
        descricao: 'Uma aspirante a atriz acha que uma festa misteriosa de assassinato será a maneira perfeita de entrar na cena de Los Angeles - até que ela percebe que o assassinato é real e que ela está sendo acusada por isso.',
        imdb: 'tt26828542',
        imagem: 'https://image.tmdb.org/t/p/w300/grZfIESG5f4hQhcsC7LKYljCghl.jpg'
    },
    {
        titulo: 'Férias em Taipei',
        descricao: 'O programa de imersão cultural de uma jovem em Taiwan acaba sendo um libertador alvoroço conhecido como Loveboat, onde um romance inesperado a leva a questionar seu futuro. Baseado no livro best-seller Loveboat, Taipei de Abigail Hing Wen.',
        imdb: 'tt11947100',
        imagem: 'https://image.tmdb.org/t/p/w300/o6TMfQn6RsWmJVtCoCKk04sQcID.jpg'
    },
    {
        titulo: 'Entre Mulheres',
        descricao: 'Um grupo de mulheres em uma comunidade menonita isolada luta para reconciliar sua realidade com sua fé após uma série de agressões sexuais cometidas pelos homens da colônia.',
        imdb: 'tt13669038',
        imagem: 'https://image.tmdb.org/t/p/w300/lH5qPokImvjzg18DxURFS3Clmyw.jpg'
    },
    {
        titulo: 'Em Outros Tempos',
        descricao: 'Durante o verão de 1999, o imigrante sérvio Kol está se preparando para a final do concurso australiano de dança quando recebe uma ligação de emergência de Ebony, sua parceira na dança. Com a ajuda de Adam, o irmão mais velho de Ebony, ele tenta chegar a tempo de se apresentar na final, mas quando Kol e Adam ficam presos num congestionamento a caminho do resgate de Ebony, ambos acabam descobrindo que têm muito mais em comum do que imaginavam e no curso das próximas 24 horas um romance intenso e inesperado acontece.',
        imdb: 'tt14967472',
        imagem: 'https://image.tmdb.org/t/p/w300/hM1WknAN6uOeH2YxTQ9RaI0C3Uj.jpg'
    },
    {
        titulo: 'Em Algum Lugar do Queens',
        descricao: 'Leo e Angela Russo vivem uma vida simples no Queens, cercados por sua arrogante família ítalo-americana. Quando o filho deles obtém sucesso no time de basquete do colégio, Leo separa a família tentando fazer isso acontecer.',
        imdb: 'tt14097180',
        imagem: 'https://image.tmdb.org/t/p/w300/AenJ68E9z4IeasZs72jUgwO4Fo5.jpg'
    },
    {
        titulo: 'Devil s Peak',
        descricao: 'Nas montanhas Apalaches da Carolina do Norte, Jacob McNeely, de dezoito anos, está dividido entre apaziguar seu pai traficante de metanfetamina e deixar as montanhas para sempre com a garota que ama.',
        imdb: 'tt10980638',
        imagem: 'https://image.tmdb.org/t/p/w300/1zMicGEwmGJTcxKT6h7mORVmORL.jpg'
    },

    {
        titulo: 'Dalíland',
        descricao: 'Segue o assistente de galeria James enquanto ele ajuda Dali a se preparar para um grande show. Em vez de aprender arte de um dos maiores pintores do século 20, James se apaixona por um mundo repleto de dinheiro, festas e intrigas.',
        imdb: 'tt8399658',
        imagem: 'https://image.tmdb.org/t/p/w300/4RE6PmgeE6Kz0fur2oiiYZ50R0c.jpg'
    },
    {
        titulo: 'Clube dos Anjos Caídos: Assassinatos Misteriosos',
        descricao: 'Os membros do clube de assassinos dos Anjos Caídos devem ter duas coisas em comum: amor pelos livros e ficha criminal. Hollis Morgan cumpre ambos requisitos.',
        imdb: 'tt15506674',
        imagem: 'https://image.tmdb.org/t/p/w300/mcG9oRbsI73rqin0l7px9Fkfv8n.jpg'
    },
    {
        titulo: 'Banidos',
        descricao: 'Quando uma doença desconhecida dizima a maior parte da população mundial, um homem com sangue único é isolado para estudo. Temendo pela segurança de sua esposa, ele quebra sua quarentena para ajudá-la',
        imdb: 'tt20835552',
        imagem: 'https://image.tmdb.org/t/p/w300/6TKhFSJW09z2k6WPxB10ey2GMuC.jpg'
    },
    {
        titulo: 'A Noite das Vampiras',
        descricao: 'Justine, uma famosa atriz de TV, criada por pais adotivos, é convidada para conhecer sua família biológica. O encontro se dá às vésperas de uma festa, que acontece anualmente, para celebrar o sucesso do açougue gerido pela sua família.  Mas, o que era para ser apenas uma reaproximação com sua verdadeira família, se torna algo sinistro, onde coisas absurdas acontecem, levando Justine a conhecer o verdadeiro segredo do sucesso dos negócios da família.',
        imdb: 'tt17079862',
        imagem: 'https://image.tmdb.org/t/p/w300/rfL90K38rs84C7CB89wM92hPv68.jpg'
    },
    {
        titulo: 'A Máquina do Crime',
        descricao: 'O passado de bebedeiras de Bert o alcança 20 anos depois, quando ele e seu pai são sequestrados por aqueles que Bert ofendeu há 20 anos enquanto estava em uma excursão de faculdade na Rússia.',
        imdb: 'tt11040844',
        imagem: 'https://image.tmdb.org/t/p/w300/x9dGI7LIOMMlFzyIBUta1svft2Y.jpg'
    },
    {
        titulo: 'Amonite',
        descricao: 'Ammonite se passa em 1840 e é a história da caçadora de fósseis Mary Anning (Kate Winslet), que trabalha sozinha para uma companhia. Com seus dias de fama ficados para trás, ela agora procura por fósseis comuns para vender para turistas, com intuito de sustentar a si mesma e a sua mãe doente. Quando um homem rico lhe oferece um trabalho, Mary passa a criar laços com sua esposa, obrigando as duas mulheres a determinar a verdadeira natureza de seu relacionamento.',
        imdb: 'tt7983894',
        imagem: 'https://image.tmdb.org/t/p/w300/ik7M9H9Gza8jqunbfmkfI2PoZHy.jpg'
    },
    {
        titulo: 'Meu Nome é Ray',
        descricao: 'Ray (Elle Fanning) nasceu mulher, mas nunca se identificou com o gênero e se prepara para fazer a cirurgia de transgenitalização. Sua mãe, Maggie (Naomi Watts), tenta encontrar a melhor forma de lidar com a questão, mas a avó homossexual de Ray, Dolly (Susan Sarandon), recusa-se a aceitar a resolução e cria um conflito familiar.',
        imdb: 'tt4158624',
        imagem: 'https://image.tmdb.org/t/p/w300/sIFLzRtFpYbSwv2rkXVDw2Zxhav.jpg'
    },
    {
        titulo: 'Casa de Beija-Flor',
        descricao: '"House of Hummingbird" é um filme coreano de drama que se passa em Seul, no final dos anos 90. A história acompanha a vida de Eun-hee, uma adolescente solitária e introspectiva que está tentando encontrar seu lugar no mundo. Enquanto lida com conflitos familiares, problemas escolares e incertezas sobre seu futuro, Eun-hee conhece pessoas importantes em sua vida, como seu melhor amigo, sua professora de chinês e um garoto mais velho que trabalha em uma loja de música. Através dessas relações, ela começa a aprender mais sobre si mesma e sobre o mundo ao seu redor, em uma jornada emocionante e reveladora de autodescoberta.',
        imdb: 'tt8951086',
        imagem: 'https://image.tmdb.org/t/p/w300/eslNoyrFacHVuaOgiaczA04Y3FG.jpg'
    },
    {
        titulo: 'Kim Possible',
        descricao: 'Kim Possible poderia ser só mais uma garota comum cursando o ensino médio, mas na verdade, o que ela gosta de mesmo de fazer é salvar o mundo das mãos de terríveis vilões. Para isso, Kim conta com a ajuda de seu melhor amigo do colégio, Ron Stoppable, seu animal de estimação, uma toupeira chamada Rufus e Wade, um super gênio do computador.',
        imdb: 'tt7979492',
        imagem: 'https://image.tmdb.org/t/p/w300/dmYNXdrYPZcQhR03oqE01TbvVL8.jpg'
    },
    {
        titulo: 'Sacrifício',
        descricao: 'Isaac e sua esposa grávida visitam uma remota vila norueguesa para reivindicar uma herança inesperada. O casal se vê preso em um pesadelo quando se deparam com um culto sinistro que adora uma diádade que habita o mar.',
        imdb: 'tt10004108',
        imagem: 'https://image.tmdb.org/t/p/w300/xXI5Lg6mJLEesTggRJBrq50vrqU.jpg'
    },
    {
        titulo: 'The Secret Kingdom',
        descricao: 'A viagem de Verity e Peter para a antiga mansão da família sofre uma reviravolta quando o chão de seu quarto de repente cede e eles caem em uma câmara subterrânea onde se deparam com uma civilização de criaturas.',
        imdb: 'tt14799576',
        imagem: 'https://image.tmdb.org/t/p/w300/dteXMzVY53GBHUgrR7vigAartsP.jpg'
    },
    {
        titulo: 'Scott Pilgrim Contra o Mundo',
        descricao: 'Scott Pilgrim (Michael Cera) tem 23 anos, integra uma banda de colégio, vive trocando de emprego e tem um namoro firme. Sua vida está maravilhosa, até conhecer Ramona V. Flowers (Mary Elizabeth Winestead). Ele logo se apaixona perdidamente por ela, só que não será fácil conquistar seu amor. Para tanto ele precisa enfrentar os sete ex-namorados dela, que estão dispostos a tudo para impedir sua felicidade com outra pessoa.',
        imdb: 'tt0446029',
        imagem: 'https://image.tmdb.org/t/p/w300/pg4CBJZKcwW024xau5Wwt7riSH0.jpg'
    },
    {
        titulo: 'LEGO Disney Princesa: Aventura no Castelo',
        descricao: 'Tiana, Moana, Branca de Neve, Rapunzel e Ariel acabam entrando em uma aventura ao serem inesperadamente transportadas para um castelo misterioso, mas, assim que chegam no castelo, elas descobrem que Gaston bolou um plano maligno para dominar todos os reinos. Portanto, as princesas precisarão trabalhar em conjunto para resolver os desafios escondidos pelo castelo e salvar os reinos das mãos do Gaston. Será que a coragem, o raciocínio rápido e o trabalho em equipe serão o suficiente para completarem os desafios?',
        imdb: 'tt28477869',
        imagem: 'https://image.tmdb.org/t/p/w300/tbPkvDVY06gdQlxgowQebOHQGGK.jpg'
    },
    {
        titulo: 'Isabella: o Caso Nardoni',
        descricao: 'O caso do assassinato de Isabella Nardoni, o crime que parou o Brasil em 2008, quando a menina de 5 anos de idade foi atirada pela janela do apartamento de seu pai e da madrasta, em São Paulo.',
        imdb: 'tt28552695',
        imagem: 'https://image.tmdb.org/t/p/w300/53pmHd5XialRnoTXlLwwBaezEOs.jpg'
    },
    {
        titulo: 'As Aventuras de Pi',
        descricao: 'Pi Patel é filho do dono de um zoológico localizado em Pondicherry, na Índia. Após anos cuidando do negócio, a família decide vender o empreendimento devido à retirada do incentivo dado pela prefeitura local. A ideia é se mudar para o Canadá, onde poderiam vender os animais para reiniciar a vida. Entretanto, o cargueiro onde todos viajam acaba naufragando devido a uma terrível tempestade. Pi consegue sobreviver em um bote salva-vidas, mas precisa dividir o pouco espaço disponível com uma zebra, um orangotango, uma hiena e um tigre de bengala chamado Richard Parker.',
        imdb: 'tt0454876',
        imagem: 'https://image.tmdb.org/t/p/w300/nAE3BCzE5S4NmUHSmO9mXVqZRUa.jpg'
    },
    {
        titulo: 'Drácula: A Última Viagem do Deméter',
        descricao: 'O navio mercante Deméter é fretado para transportar cargas particulares para Londres. Estranhos eventos acontecem à tripulação enquanto tentam sobreviver à viagem oceânica, perseguidos todas as noites por uma presença a bordo do navio.',
        imdb: 'tt1001520',
        imagem: 'https://image.tmdb.org/t/p/w300/nrtbv6Cew7qC7k9GsYSf5uSmuKh.jpg'
    },
    {
        titulo: 'A Cidade do Halloween',
        descricao: 'Aos 13 anos, Marnie descobre que vem de uma longa linhagem de bruxas e deve praticar para não perder seus poderes. Ao visitar a avó, que vive afastada em sua casa de Halloweentown, um misterioso lugar onde feiticeiras, duendes e outros habitantes fantásticos, Marnie descobre que uma força maligna planeja se apoderar do lugar. Ela tem que lutar para salvar o futuro da magia.',
        imdb: 'tt0173886',
        imagem: 'https://image.tmdb.org/t/p/w300/axYFa20HjBhYFrSz5LHbWuATjGU.jpg'
    },
    {
        titulo: 'Megan Is Missing',
        descricao: 'Drama ficcional baseado em eventos reais, sobre duas adolescentes que encontram um predador da internet.',
        imdb: 'tt1087461',
        imagem: 'https://image.tmdb.org/t/p/w300/a7ndLikcqvX7dF7gsYx5iDe7qq1.jpg'
    },
    {
        titulo: 'Snoopy Apresenta: A Inigualável Marcie',
        descricao: 'Marcie, quietinha, gentil e introvertida, pensa em ideias geniais para ajudar os amigos a atingir seus objetivos e resolver seus problemas. Mas quando o mundo todo para pra olhar e ela vira o centro das atenções, compartilhar essas ideias se torna um desafio.',
        imdb: 'tt27865284',
        imagem: 'https://image.tmdb.org/t/p/w300/grzZxk9s9EruSc0zMbcif4FUCmz.jpg'
    },
    {
        titulo: 'O Rei Macaco',
        descricao: 'O Rei Macaco é uma comédia de ação para toda a família sobre um Macaco cheio de carisma e seu Bastão mágico que embarcam em uma aventura épica contra cem demônios, um excêntrico Rei Dragão e o maior inimigo do Macaco: seu próprio ego! No caminho, uma jovem desafia o egocentrismo dele e mostra que até a menor pedrinha de todas pode ter um grande efeito no mundo.',
        imdb: 'tt8637498',
        imagem: 'https://image.tmdb.org/t/p/w300/bmwK5QCznqUT8bcDR7qROrxqgov.jpg'
    },
    {
        titulo: 'Besouro Azul',
        descricao: 'Jaime Reyes, um adolescente de origem mexicana que encontra um artefato alienígena que lhe dá um exoesqueleto mecanizado e poderes, tornando-o no Besouro Azul.',
        imdb: 'tt9362930',
        imagem: 'https://image.tmdb.org/t/p/w300/AhmVkXerBVsuI6PejPeqaaW2wwT.jpg'
    },
    {
        titulo: 'O Cheiro do Ouro',
        descricao: 'Determinado a mudar a situação ingrata que enfrenta no trabalho, um homem planeja contrabandear perfumes de luxo bem debaixo do nariz dos donos da empresa.',
        imdb: 'tt27987407',
        imagem: 'https://image.tmdb.org/t/p/w300/qJohErYIn5ZHA7N9XlPRwFfMint.jpg'
    },
    {
        titulo: 'Vermelho, Branco e Sangue Azul',
        descricao: 'Depois que uma altercação entre Alex, o filho do presidente, e o príncipe Henry da Grã-Bretanha em um evento real se torna assunto de tabloide, sua rivalidade de longa data agora ameaça abrir uma brecha nas relações EUA/Britânica. Quando os rivais são forçados a uma trégua encenada, seu relacionamento gelado começa a derreter e o atrito entre eles desencadeia algo mais profundo do que jamais esperaram.',
        imdb: 'tt10172266',
        imagem: 'https://image.tmdb.org/t/p/w300/4f19r2t4gjbgMC6RbE8GYF2h46j.jpg'
    },

    {
        titulo: 'Táticas do Amor 2',
        descricao: 'Asli nunca acreditou no casamento. Mas agora que ela descobriu que seu amado Kerem também pensa assim, ela vai fazer de tudo para convencê-lo a fazer o pedido.',
        imdb: 'tt21308698',
        imagem: 'https://image.tmdb.org/t/p/w300/fQTigx0WsCBdxeVZnaH6KqA8YoN.jpg'
    },
    {
        titulo: 'Dirty Dancing 2 - Noites de Havana',
        descricao: 'Em 1958, logo após a mudança para Cuba com seus pais, Katey Mille (Romola Garai), uma garota 18 anos, desafia seu círculo social ao encontrar-se com Javier (Diego Luna), um garçom cubano apaixonado pela dança.',
        imdb: 'tt0338096',
        imagem: 'https://image.tmdb.org/t/p/w300/w0wPl3d1yvveInjV2kpO2NCZNMz.jpg'
    },
    {
        titulo: 'Akira',
        descricao: 'Uma grande explosão fez com que Tóquio fosse destruída em 1988. Em seu lugar, foi construída Neo-Tóquio, que, em 2019, sofre com atentados terroristas por toda a cidade. Kaneda e Tetsuo são amigos que integram uma gangue de motoqueiros. Eles disputam rachas violentos com uma gangue rival, os Palhaços, até que um dia, Tetsuo encontra Takashi, uma estranha criança com poderes que fugiu do hospital onde era mantido como cobaia. Tetsuo é ferido no encontro e, antes de receber a ajuda dos amigos, é levado por integrantes do exército, liderados pelo coronel Shikishima. A partir de então, Tetsuo passa a desenvolver poderes inimagináveis, o que faz com que seja comparado ao lendário Akira, responsável pela explosão de 1988. Paralelamente, Kaneda se interessa por Kei, uma garota envolvida com espiões, que tenta decifrar o enigma por trás das cobaias controladas pelo exército.',
        imdb: 'tt0094625',
        imagem: 'https://image.tmdb.org/t/p/w300/erQNsU5jCkWGPzDFwF5Qhuncv2K.jpg'
    },

    {
        titulo: 'O Silêncio da Montanha',
        descricao: 'Itália, 1915. Os jovens Andreas (William Moseley) e Francesca (Eugenia Costantini) se conhecem no casamento da irmã dele e logo se apaixonam perdidamente. Na mesma época, a Itália declara guerra a Áustria-Hungria e a Primeira Guerra Mundial eclode. Andreas é chamado a lutar no fronte, nas montanhas Dolomitri, localizadas no norte da Itália, mas deixa com Francesca um sinalizador para que ela acenda caso esteja em perigo. Quando o conflito se agrava, o batalhão do rapaz descobre que o seu vilarejo está sendo atacado, e no momento em que a moça pede ajuda, ele precisa decidir entre lutar pelo seu país ou por sua amada.',
        imdb: 'tt2014295',
        imagem: 'https://image.tmdb.org/t/p/w300/d4dOQfb8BirpAy8m0r01xIGfGcN.jpg'
    },
    {
        titulo: 'Armas em Jogo',
        descricao: 'Miles se sente empacado em sua vida: seu emprego não tem futuro e ele continua apaixonado por sua ex-namorada. Um dia, ele se vê forçado a participar de uma perigosa competição realizada pela gangue Skizm. O torneio é transmitido online por um sombrio site e as pessoas da cidade se juntam para ver qual dos participantes consegue mais espectadores online. Ao descobrir que sua ex-namorada foi sequestrada por um grupo armado que participa da disputa, Miles decide deixar para trás seus medos e enfrentá-los.',
        imdb: 'tt6902676',
        imagem: 'https://image.tmdb.org/t/p/w300/uSypWMagzI7jJ7cq2TStGnYyyfL.jpg'
    },
    {
        titulo: 'As Tartarugas Ninjas: Caos Mutante',
        descricao: 'Depois de anos sendo protegidos do mundo humano, os irmãos tartarugas saem para ganhar os corações dos nova yorkinos e serem aceitos como adolescentes normais através de seus atos heroicos. Sua nova amiga, April O’Neil, vai ajudá-los a derrotar um misterioso sindicado do crime, mas eles logo se veem em maus lençóis quando um exército de mutantes vai atrás deles.',
        imdb: 'tt8589698',
        imagem: 'https://image.tmdb.org/t/p/w300/x0naXPYoLxzTzRgwKhzAjQPngnw.jpg'
    },
    {
        titulo: 'Devilreaux',
        descricao: 'Uma série de assassinatos ocorridos em 1800 será vingada por um vodu proibido, despertado acidentalmente por um grupo de adolescentes.',
        imdb: 'tt8010548',
        imagem: 'https://image.tmdb.org/t/p/w300/wKBMwKwKbICPXAjGVuGQ7CyQ4Qz.jpg'
    },
    {
        titulo: 'Gran Turismo: De Jogador a Corredor',
        descricao: 'Baseado na história de Jann Mardenborough, e relata a trajetória de um jogador de videogame que utilizou suas habilidades nos simuladores para se tornar um piloto profissional de verdade.',
        imdb: 'tt4495098',
        imagem: 'https://image.tmdb.org/t/p/w300/1FRIsFSl1AOpmpBIRnUFqO6U06A.jpg'
    },
    {
        titulo: 'Paint',
        descricao: 'Carl Nargle, o pintor da televisão pública n.º 1 de Vermont, está convencido de que tem tudo, uma van personalizada e seguidores pendurados em todas as suas fotos até que um artista mais jovem e melhor rouba tudo o que Carl ama.',
        imdb: 'tt14472156',
        imagem: 'https://image.tmdb.org/t/p/w300/jZ1PhCyXEySYR7f9q52KYb62Bwp.jpg'
    },
    {
        titulo: 'Operação: Arma Secreta',
        descricao: 'Um agente militar contratado para apreender uma arma que transforma pessoas em assassinos está em busca de vingança após seu irmão se tornar uma vítima.',
        imdb: 'tt28290233',
        imagem: 'https://image.tmdb.org/t/p/w300/lHRid7SIsqHAG8hlxbg2u5E9ouN.jpg'
    },
    {
        titulo: 'Fim dos Tempos',
        descricao: 'Uma ameaça apocalíptica chega do céu trazendo uma série de mortes violentas e inexplicáveis que se espalham pelo país. A causa do fenômeno estarrecente permanece desconhecida. O professor de ciências, Elliot Moore, ao lado de sua esposa Alma e seu colega Julian, tenta escapar do assassino invisível indo para a Pensilvânia, mas logo torna-se evidente que ninguém está fora de perigo.',
        imdb: 'tt0949731',
        imagem: 'https://image.tmdb.org/t/p/w300/4miUoIJADDOY4MXrnpoRxHX670Z.jpg'
    },
    {
        titulo: 'Shark Below Zero',
        descricao: 'Tubarões brancos foram vistos em todo o Canadá até a costa da Terra Nova. Após a primeira suspeita de ataque de tubarão branco no Canadá em mais de 150 anos, os especialistas Greg Skomal, Heather Bowlby, Megan Winton e Warren Joyce investigam o que leva a jornada do tubarão branco ao limite mais ao norte de seu alcance.',
        imdb: 'tt27999920',
        imagem: 'https://image.tmdb.org/t/p/w300/c1UAwMeuBXVluMNCJ4EYqFfy52E.jpg'
    },
    {
        titulo: 'Resgatados dos Tubarões',
        descricao: 'A comunidade científica continua dividida com relação à possibilidade de golfinhos e baleias intencionalmente salvarem humanos de ataques de tubarões. Mas para as pessoas que passaram por essa situação estarrecedora, a resposta é clara.',
        imdb: 'tt27999682',
        imagem: 'https://image.tmdb.org/t/p/w300/3df3FZ0q0DCTFUwmi7d43fuaIaQ.jpg'
    },
    {
        titulo: 'Vulcões e Tubarões: Havaí',
        descricao: 'Para descobrir por que os tubarões são atraídos pelos vulcões do Havaí, o Dr. Mike Heithaus e a Dra. Frances Farabaugh mergulham com uma das espécies mais perigosas do mundo.',
        imdb: 'tt27999923',
        imagem: 'https://image.tmdb.org/t/p/w300/q3N44XL6l1AHRyDgTN1BRTEfRvV.jpg'
    },
    {
        titulo: 'Amor Desaparecido',
        descricao: 'Uma jornalista busca a verdade sobre o marido de uma mulher, um piloto que desapareceu em combate durante a Segunda Guerra Mundial.',
        imdb: 'tt1709157',
        imagem: 'https://image.tmdb.org/t/p/w300/27dUAfHoW5rTGjgTxO8to88PvOR.jpg'
    },
    {
        titulo: 'Amor à Toda Velocidade',
        descricao: 'Em Las Vegas, um piloto de corrida (Elvis Presley) quer participar do 1º Grande Prêmio da cidade, mas perde o dinheiro que usaria para comprar um motor. Ele então passa a trabalhar como garçom e se envolve com uma professora de natação (Ann-Margret), que sente-se incomodada pela obsessão que ele tem por corridas, pois teme que algo lhe aconteça. Ela fica então dividida quando é cortejada por um nobre italiano (Cesare Danova), que adora carros, mas diz que largaria tudo se encontrasse a mulher ideal.',
        imdb: 'tt0058725',
        imagem: 'https://image.tmdb.org/t/p/w300/kxcEkFykPZ0IDjbVg9xQBrvv3tr.jpg'
    },
    {
        titulo: 'Sansão',
        descricao: 'Sansão (Taylor James) é um homem com uma força sobrenatural que recebeu um chamado divino para libertar seu povo da escravidão. Quando ele perde seu amor para um cruel príncipe filisteu, o jovem hebreu parte em uma jornada para defender seu povo, sacrificando o que for preciso para vingar seu amor, seu povo e seu Deus.',
        imdb: 'tt6951892',
        imagem: 'https://image.tmdb.org/t/p/w300/8FCkStF9Cy3o5TtV4jBAZqA2qYF.jpg'
    },
    {
        titulo: 'Reds',
        descricao: 'Um pouco antes da Primeira Guerra Mundial John Reed (Warren Beatty), um jornalista americano, conhece Louise Bryant (Diane Keaton), uma mulher casada, que larga o marido para ficar com Reed e se torna uma importante feminista. Eles se envolvem em disputas políticas e trabalhistas nos Estados Unidos, e vão para a Rússia a tempo de participarem da Revolução de outubro de 1917, quando os comunistas assumiram o poder. Este acontecimento inspira o casal, que volta aos Estados Unidos esperando liderar uma revolução semelhante.',
        imdb: 'tt0082979',
        imagem: 'https://image.tmdb.org/t/p/w300/3jOs4aWI7XSVIEaF8KMojNre7A7.jpg'
    },
    {
        titulo: 'Terra e Liberdade',
        descricao: 'Primavera de 1936, um jovem comunista desempregado, David, deixa sua cidade natal Liverpool para se juntar à luta contra o fascismo na Espanha. Ele se junta a um grupo internacional de milícia, homens e mulheres, o POUM (Partido Obrero de Unificación Marxista). Depois de ser ferido, ele vai para Barcelona, ​​onde decide se juntar a outro grupo de milícia. Eles permanecem em Barc celona e acabam brigando outros grupos antifascistas. David está decepcionado e decide voltar para sua antiga milícia.',
        imdb: 'tt0114671',
        imagem: 'https://image.tmdb.org/t/p/w300/u5QRqW0vFYMHFzeQJ4oFgJtu5Xp.jpg'
    },
    {
        titulo: 'Quando Você Terminar de Salvar o Mundo',
        descricao: 'Evelyn e seu filho alheio Ziggy procuram substitutos um para o outro. Enquanto Evelyn tenta ser mãe de uma adolescente despretensiosa em seu abrigo, Ziggy se atrapalha em sua busca por uma jovem brilhante na escola.',
        imdb: 'tt12121582',
        imagem: 'https://image.tmdb.org/t/p/w300/pZyeoBDQJFPGfd0Mu8XIElGBjZz.jpg'
    },
    {
        titulo: 'Fale Comigo',
        descricao: 'Quando um grupo de amigos descobre como conjurar espíritos usando uma antiga mão embalsamada, eles ficam viciados na nova emoção. Até que um deles vai longe demais e abre a porta para o mundo espiritual.',
        imdb: 'tt10638522',
        imagem: 'https://image.tmdb.org/t/p/w300/6tIhfkc52XQnxzbMYeV9XK90NTG.jpg'
    },
    {
        titulo: 'Nefarious',
        descricao: 'No dia de sua execução, um assassino em série passa por uma avaliação psiquiátrica na qual ele afirma ser um demônio, e ainda alega que antes de seu tempo acabar, o psiquiatra cometerá três assassinatos.',
        imdb: 'tt14537248',
        imagem: 'https://image.tmdb.org/t/p/w300/xwjWUAajQJPj5aik1tounPguZbz.jpg'
    },
    {
        titulo: 'Megatubarão 2',
        descricao: 'Um mergulho exploratório nas profundezas do oceano de uma ousada equipe de pesquisa se transforma em caos quando uma operação de mineração malévola ameaça sua missão e os força a uma batalha de alto risco pela sobrevivência.',
        imdb: 'tt9224104',
        imagem: 'https://image.tmdb.org/t/p/w300/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg'
    },
    {
        titulo: 'Miraculous: As Aventuras de Ladybug - O Filme',
        descricao: 'Marinette Dupain-Cheng, de dezesseis anos, está temendo o primeiro dia de aula, onde ela sofre bullying, não tem amigos e não se encaixa, mas seu mundo vira de cabeça para baixo quando ela é escolhida para se tornar a super-heroína Ladybug e ela conhece seu parceiro Cat Noir.',
        imdb: 'tt10364034',
        imagem: 'https://image.tmdb.org/t/p/w300/eZEKKCNW0vI7B7AZNdCAeq2mMAw.jpg'
    },
    {
        titulo: 'Brilho Eterno de uma Mente sem Lembranças',
        descricao: 'Joel se surpreende ao saber que seu amor verdadeiro, Clementine, o apagou completamente de sua memória. Ele decide fazer o mesmo, mas muda de ideia. Preso dentro da própria mente enquanto os especialistas se mantêm ocupados em seu apartamento, Joel precisa avisá-los para parar.',
        imdb: 'tt0338013',
        imagem: 'https://image.tmdb.org/t/p/w300/fQS6DsbA0T465kW2gz2WGmHXIh3.jpg'
    },
    {
        titulo: 'Amor(es) Verdadeiro(s)',
        descricao: 'Uma mulher é inesperadamente forçada a escolher entre o marido que há muito pensava estar morto e o noivo que finalmente a trouxe de volta à vida.',
        imdb: 'tt14770620',
        imagem: 'https://image.tmdb.org/t/p/w300/q1FnsCD8H3p2YiYkWc1MZNspoLj.jpg'
    },
    {
        titulo: 'Duna',
        descricao: 'Em 10.190 D.C., um duque e sua família são mandados pelo Imperador para Arrakis, um árido planeta conhecido como Duna, que tem uma matéria essencial às viagens interplanetárias: a Especiaria. O motivo desta mudança é que o Imperador planeja destruir o duque e sua família, mas seu filho escapa e procura se vingar usando a ecologia deste mundo como uma de suas armas.',
        imdb: 'tt0087182',
        imagem: 'https://image.tmdb.org/t/p/w300/3QOlGVuY2jeo0lX4XMMsTWkqmUg.jpg'
    },
    {
        titulo: 'Lady Bird - A Hora de Voar',
        descricao: 'Christine McPherson está no último ano do colégio e o que mais deseja é ir fazer faculdade longe de Sacramento, Califórnia, ideia rejeitada por sua mãe. Lady Bird, como a garota de forte personalidade exige ser chamada, não se dá por vencida e leva o plano de ir embora adiante mesmo assim. Enquanto a hora não chega, ela se divide entre as obrigações estudantis no colégio católico, o primeiro namoro, típicos rituais de passagem para a vida adulta e inúmeros desentendimentos com a progenitora.',
        imdb: 'tt4925292',
        imagem: 'https://image.tmdb.org/t/p/w300/wxfKcpFPmK9isnxXyvCMbqmBtdg.jpg'
    },
    {
        titulo: 'Felicidade para Principiantes',
        descricao: 'Após o divórcio, uma professora se aventura a recomeçar na vida e no amor quando decide fazer uma reveladora caminhada de longa distância.',
        imdb: 'tt15509244',
        imagem: 'https://image.tmdb.org/t/p/w300/sejOOSFyqNd2KHWo9s3FiP7JCTv.jpg'
    },
    {
        titulo: 'Projeto Extração',
        descricao: 'Quando uma refinaria de petróleo administrada pela China é atacada em Mosul, no Iraque, um empreiteiro de segurança privada chinês é chamado para resgatar os trabalhadores do petróleo.  Ele descobre, no entanto, que o verdadeiro plano dos atacantes é roubar uma fortuna em petróleo e se une a um ex-fuzileiro naval americano para detê-los.',
        imdb: 'tt6879446',
        imagem: 'https://image.tmdb.org/t/p/w300/t3vZkkM5G40pUJxUzkz69H777Hm.jpg'
    },
    {
        titulo: 'Operação Valquíria',
        descricao: 'A história é sobre uma das histórias mais heróicas da Segunda Guerra Mundial, mas também uma das mais desconhecidas. Gravemente ferido em combate, o coronel alemão Claus von Stauffenberg (Tom Cruise) retorna para a África para se juntar à resistência alemã e ajudar a criar a Operação Valkyrie, um complexo plano que irá permitir a substituição de Hitler no poder assim que ele estiver morto. O destino e as circunstâncias fazem com que Stauffenberg se torne uma peça central na missão. Ele não só tem que liderar o golpe e tomar o controle do governo de seu país, como fica encarregado de matar Hitler com as próprias mãos.',
        imdb: 'tt0985699',
        imagem: 'https://image.tmdb.org/t/p/w300/5ugPC5Ch8JQc2yV1ZDWEuJ8yiTy.jpg'
    },
    {
        titulo: 'Mansão Mal-Assombrada',
        descricao: 'A confusão começa quando Jim Evers, um agente imobiliário viciado em trabalho, interrompe uma viagem de família para tentar fechar um negócio em uma mansão. Chegando lá, Jim descobre não só que a casa é mal-assombrada, mas também que tem poucas horas para quebrar uma terrível maldição!',
        imdb: 'tt0338094',
        imagem: 'https://image.tmdb.org/t/p/w300/fNQi49H609SEay0MjM6u0EOfqjG.jpg'
    },
    {
        titulo: 'Os Três Mosqueteiros',
        descricao: 'O jovem D Artagnan, depois de sair da Gasconha e viajar para Paris, conhece os mosqueteiros Athos, Aramis e Porthos, e tentam impedir que o Cardeal Richelieu e sua agente Milady de Winter causem uma guerra entre a França e a Inglaterra.',
        imdb: 'tt1509767',
        imagem: 'https://image.tmdb.org/t/p/w300/wJy0zURpPTi1TLC1PQOmLlTwDiH.jpg'
    },
    {
        titulo: 'Os Jovens Titãs Assistem A Space Jam',
        descricao: 'Os Teen Titans são visitados pelos Nerdlucks, os vilões do Space Jam que tentaram capturar Michael Jordan e os Looney Tunes. Surpreso ao descobrir que seus companheiros Titãs nunca viram o Space Jam, Cyborg organiza uma festa exclusiva para assistir ao filme.',
        imdb: 'tt14851194',
        imagem: 'https://image.tmdb.org/t/p/w300/7bdNPv3vsLXhUTrVhweTSGiqEwp.jpg'
    },
    {
        titulo: 'The Blackening',
        descricao: 'Sete amigos vão embora no fim de semana e acabam presos em uma cabana com um assassino que quer vingança. Será que sua esperteza e conhecimento de filmes de terror os ajudarão a sobreviver? Provavelmente não.',
        imdb: 'tt11703244',
        imagem: 'https://image.tmdb.org/t/p/w300/ooB4KSRRhp7XYRQUmsi82iFnMNC.jpg'
    },
    {
        titulo: 'A Última Coisa que Mary Viu',
        descricao: 'Inverno de 1843. Uma jovem está sob investigação após a misteriosa morte da matriarca de sua família. Sua lembrança dos eventos lança uma nova luz sobre as forças atemporais por trás da tragédia.',
        imdb: 'tt9741180',
        imagem: 'https://image.tmdb.org/t/p/w300/gVFwfzPXfUcRI3mpb6rSX1LYtMj.jpg'
    },
    {
        titulo: 'The Hand of God: A Mão de Deus',
        descricao: 'Na Nápoles dos anos 80, um jovem louco por futebol se vê diante de uma tragédia familiar que define seu futuro incerto, porém promissor, como cineasta.',
        imdb: 'tt12680684',
        imagem: 'https://image.tmdb.org/t/p/w300/yRZrr8E12jEK07n6LCiVN6bsJUU.jpg'
    },
    {
        titulo: 'Desaparecida: O Caso Lucie Blackman',
        descricao: 'Segue a turbulenta e complexa investigação sobre o assassinato da turista britânica Lucie Blackman.',
        imdb: 'tt19113292',
        imagem: 'https://image.tmdb.org/t/p/w300/bz44Ug0pzMwV0kjNTeS4y1lxUar.jpg'
    },
    {
        titulo: 'Querida Zoe',
        descricao: 'Quando Tess sofre uma terrível perda em sua família, ela se aproxima de seu pai biológico e encontra nele um inesperado apoio.',
        imdb: 'tt1657865',
        imagem: 'https://image.tmdb.org/t/p/w300/tLyKCXea2INdSCyOlGOvDnR3feO.jpg'
    },
    {
        titulo: 'Campeonato dos Sonhos',
        descricao: 'Passando por um baque na carreira, um jogador de futebol aceita ser técnico de um time de moradores de rua. Nesse processo, ele encontra o crescimento pessoal.',
        imdb: 'tt13814704',
        imagem: 'https://image.tmdb.org/t/p/w300/2mVp9HGAudUZ1rv66tMC6kK22JM.jpg'
    },
    {
        titulo: 'Sr. Carrinho e os Cavaleiros Templários',
        descricao: 'Um historiador de arte encontra uma cruz templária e precisa se unir a um grupo nada convencional de aventureiros para conseguir desvendar os segredos dessa relíquia.',
        imdb: 'tt27876411',
        imagem: 'https://image.tmdb.org/t/p/w300/qWuCK5h5o7pQDILZgQYHSIc59TX.jpg'
    },
    {
        titulo: 'Explorando o Desconhecido: A Máquina do Tempo Cósmica',
        descricao: 'Siga uma equipe de engenheiros e cientistas em uma missão ambiciosa para lançar o Telescópio Espacial James Webb e dar o próximo salto gigantesco na compreensão do universo.',
        imdb: 'tt27837488',
        imagem: 'https://image.tmdb.org/t/p/w300/8mJkevQKSKyinWRa6XGVyluXJq8.jpg'
    },
    {
        titulo: 'Os (Quase) Ídolos da Bahía Colorada',
        descricao: 'Romeo e Preciado são dois meios-irmãos que se reencontram para honrar a memória do pai em uma corrida de carros cheia de adrenalina e música mexicana.',
        imdb: 'tt21737024',
        imagem: 'https://image.tmdb.org/t/p/w300/olT4pIcEwP3160jXETWP1zawaCe.jpg'
    },
    {
        titulo: 'O Serviço de Entregas da Kiki',
        descricao: 'Kiki é uma jovem bruxa que acabou de completar 13 anos. Segundo a tradição, quando atingem essa idade, todas as bruxas devem sair de casa por um ano para aprender a viver por conta própria. Ela se muda para a cidade de Korico, junto com Jiji, seu gato falante. Lá ela aprende a seguir em frente com sua vida, apesar de todas as dificuldades que possam surgir.',
        imdb: 'tt0097814',
        imagem: 'https://image.tmdb.org/t/p/w300/eM4mDoXpOTwqMldmCy76cftok9m.jpg'
    },
    {
        titulo: 'Clonaram Tyrone!',
        descricao: 'Uma série de incidentes sinistros coloca um trio inusitado no rastro de uma grande conspiração.',
        imdb: 'tt9873892',
        imagem: 'https://image.tmdb.org/t/p/w300/uLYdX64xJVZEFRQJZQU4A2ueMyB.jpg'
    },
    {
        titulo: 'O Castelo no Céu',
        descricao: 'Pazu, um aprendiz de engenheiro, conhece uma jovem garota dona de um colar brilhante, Sheeta, e descobrem que ambos estão procurando pelo legendário castelo flutuante. Assim começa uma aventura com piratas gananciosos dos céus, agentes secretos e obstáculos que tentam esconder a verdade e resgatar o misterioso colar.',
        imdb: 'tt0092067',
        imagem: 'https://image.tmdb.org/t/p/w300/1yoI4FyiUamyWhZtnfH81se206f.jpg'
    },
    {
        titulo: 'Eu Posso Ouvir o Oceano',
        descricao: 'O estudante universitário Taku recorda a chegada da aluna Rikako, dois anos atrás, e o fatídico verão que colocou à prova sua amizade com Yutaka.',
        imdb: 'tt0108432',
        imagem: 'https://image.tmdb.org/t/p/w300/7xNEkYR9EkcBG1EjiOwyl0oXLU7.jpg'
    },
    {
        titulo: 'Ponyo - Uma Amizade que Veio do Mar',
        descricao: 'Sosuke é um garoto de cinco anos que mora em um penhasco com vista para o Mar Interior. Um dia, ao brincar na praia, encontra Ponyo, um peixinho dourado cuja cabeça está presa em um pote de geleia. Ele salva a peixinho e a coloca em um balde verde. Trata-se de amor à primeira vista, já que Sosuke promete que irá cuidar dela. Só que Fujimoto, que um dia foi humano e hoje é feiticeiro no fundo do mar, exige que Ponyo retorne às profundezas do oceano. Para ficar ao lado de Sosuke, Ponyo toma a decisão de tornar-se humana.',
        imdb: 'tt0876563',
        imagem: 'https://image.tmdb.org/t/p/w300/cvpsmNWc8nyePJMbyMc9X5lLN6L.jpg'
    },
    {
        titulo: 'A Vilã',
        descricao: 'Treinada desde criança para ser uma assassina de elite, Sook-hee embarca em uma onda de violência e vingança para finalmente ganhar sua liberdade e escapar de seu passado.',
        imdb: 'tt6777338',
        imagem: 'https://image.tmdb.org/t/p/w300/sU2fQEZ6paXXxJ4CKiUa0hbOIx0.jpg'
    },
    {
        titulo: 'Lupin III: O Segredo de Mamo',
        descricao: 'Embarcado em mais uma incrível peripécia, o ladrão Arsène Lupin III e seus comparsas, Daisuke Jigen e Goemon Ishikawa, buscam uma misteriosa pedra encontrada numa pirâmide do Egito. Atraída pela promessa de uma eternidade de beleza e juventude, a aventureira Fujiko Mine une-se a um sinistro sábio conhecido com Mamo para trair Lupin e roubar o artefato. Com o inspetor Zenigata em seu encalço, a busca por Fujiko leva Lupin e seus amigos à misteriosa ilha de Mamo, onde descobrem os obscuros segredos que representam uma ameaça ao mundo inteiro. Agora, depende de Lupin impedir que o cientista coloque em prática o seu melhor plano para dominar a humanidade.',
        imdb: 'tt0078187',
        imagem: 'https://image.tmdb.org/t/p/w300/fMLbX1RdVGDyJn9eraKa7HzaaEj.jpg'
    },
    {
        titulo: 'Lupin III: O Castelo de Cagliostro',
        descricao: 'Lupin é um famoso ladrão  e, após um roubo bem sucedido, percebe que foi enganado e roubou notas falsas. Disposto a encontrar a origem do dinheiro falso, ele descobre que ele vem de um país distante e esquecido, já famoso pela fabricação de dinheiro falso no mundo todo e encontra Clarisse, a herdeira da Família Real de Cagliostro. Clarisse está em perigo devido ao segredo que sua família esconde.',
        imdb: 'tt0079833',
        imagem: 'https://image.tmdb.org/t/p/w300/zQRfJDWbSh3C3bGw34QHJeUnlZF.jpg'
    },
    {
        titulo: 'Uma Fazenda Maluca 2: Queijo de Cabra',
        descricao: 'O jovem Zuzanka, Honzik e Goat procuram os pais das crianças, que o diabo aparentemente sequestrou para puni-los por produzirem queijo de cabra diabolicamente bom. No entanto, as crianças encontram seus pais não no inferno, mas no castelo, onde devem fazer queijo para Kobyl, o conselheiro do rei. Kobyl ganhou as boas graças do rei graças ao queijo. Após uma aventura perigosa e cafona, Kobyl acaba no inferno e os membros da família se reencontram.',
        imdb: 'tt2491648',
        imagem: 'https://image.tmdb.org/t/p/w300/zbqvfoCo4q1DrMzzc4kdocyZcFo.jpg'
    },
    {
        titulo: 'Lupin III: O Ouro da Babilônia',
        descricao: 'Na cidade de Nova York, várias tábuas de pedra foram desenterradas que contam uma história sobre o ouro da Babilônia. Duas famílias da máfia estão atrás dele, assim como o próprio Lupin III. Uma velha bêbada chamada Rosetta parece saber muito sobre este tesouro do que aparenta. Enquanto Zenigata fez um grupo de parceiras que vão algemar Lupin o 3º, a corrida pelo ouro de Babel já começou.',
        imdb: 'tt0089943',
        imagem: 'https://image.tmdb.org/t/p/w300/q5CQfjWGcHemKXbYNfCDBcQsJfc.jpg'
    },
    {
        titulo: 'Fallen',
        descricao: 'Após ser responsabilizada pela misteriosa morte do namorado, Lucinda Price é mandada para o reformatório Sword & Cross, onde se aproxima de Daniel Grigori, sem saber que ele é um anjo apaixonado por ela há milênios. Ao mesmo tempo, Lucinda não consegue se afastar de Cam Briel, que também é um anjo e há tempos luta pelo seu amor. Por viver isolada do mundo exterior e assombrada por estranhas visões, ela começa a desvendar aos poucos os segredos de seu passado e descobre a verdadeira identidade dos anjos caídos, bem como o amor que nutriram por ela ao longo de séculos. Lucinda deve, então, fazer sua escolha.',
        imdb: 'tt1564777',
        imagem: 'https://image.tmdb.org/t/p/w300/t4wfwph9hvvrtLcQdNf0JwK3fVR.jpg'
    },
    {
        titulo: 'Ela é o Cara',
        descricao: 'Viola (Amanda Bynes) é uma boa jogadora de futebol, mas sempre é impedida de jogar com os garotos de sua escola devido ao preconceito de que mulher não pode ser tão boa no esporte quanto um homem. Furiosa, Viola aproveita a viagem de seu irmão Sebastian (James Kirk) e decide se passar por ele em sua escola, jogando no time masculino de futebol. Ela tem apenas duas semanas para mostrar que sabe jogar futebol, mas acaba se apaixonando por Duke (Channing Tatum), seu companheiro de quarto, que acredita que ela é um homem.',
        imdb: 'tt0454945',
        imagem: 'https://image.tmdb.org/t/p/w300/ooZWyBiibhT8il0MGjOYQYYJcsT.jpg'
    },
    {
        titulo: 'Pacto Secreto',
        descricao: 'Cassidy (Briana Evigan), Ellie (Rumer Willis), Megan (Audrina Patridge), Jessica (Leah Pipes) e Claire (Jamie Chung) são irmãs de fraternidade em uma faculdade. Elas juraram manter entre elas sigilo, companheirismo e solidariedade, independentemente do que aconteça. A lealdade entre elas é testada quando uma brincadeira dá errado e Megan é brutalmente assassinada. Com medo de que seus futuros sejam destruídos, elas decidem não confessar o crime e esconder o cadáver. Um ano depois, na época da formatura, as amigas decidem realizar uma festa de despedida na casa da fraternidade. No decorrer da festa as garotas recebem vídeos no celular, com cenas da noite do assassinato de Megan, enviadas por um remetente anônimo.',
        imdb: 'tt1232783',
        imagem: 'https://image.tmdb.org/t/p/w300/p6ljEqL37ZV8OOQsI8LOGHjPsmS.jpg'
    },
    {
        titulo: 'A Matriarca',
        descricao: 'Após sobreviver a uma overdose, uma mulher retorna à casa onde cresceu para enfrentar seus demônios interiores, mas descobre a presença de uma entidade real.',
        imdb: 'tt17202326',
        imagem: 'https://image.tmdb.org/t/p/w300/o57VVZImE6RcZAffPepZyuwNLKs.jpg'
    },
    {
        titulo: 'Liga da Justiça: A Nova Fronteira',
        descricao: 'Neste épico de origem, uma descrição virtual dos super-heróis incluindo não só o Superman, Batman e a Mulher Maravilha, mas também o Lanterna Verde, Martian Manhunter e Flash, estes heróis bem diferentes devem superar seus medos e superstições um dos outros para forjar uma aliança contra uma criatura tão formidável que será preciso todos os poderes combinados para prevalecer!',
        imdb: 'tt0902272',
        imagem: 'https://image.tmdb.org/t/p/w300/pQjMxF8DBsLhFD9CJZUhA28Me1g.jpg'
    },
    {
        titulo: 'Lanterna Verde: Primeiro Vôo',
        descricao: 'Depois de receber das mãos de uma lienígena um anel eu lhe dá poderes sobre-humanos, o piloto Hal Jordan entra para a Tropa dos Lanternas Verdes, onde é supervisionado pelo respeitado Sinestro, Quando Jordan descobre que seu supervisor é na verdade o cabeça de uma conspiração que ameaça a filosofia e as tradições da Tropa, ele busca dominar rapidamente seus novos poderes para combater os traidores e manter a ordem no universo.',
        imdb: 'tt1384590',
        imagem: 'https://image.tmdb.org/t/p/w300/745szFCV9ZGvBPvlwxcSKDqW6QK.jpg'
    },
    {
        titulo: 'Quatro Vidas de um Cachorro',
        descricao: 'Um cachorro morre e reencarna várias vezes na Terra. Embora encontre novas pessoas e viva muitas aventuras, ele mantém o sonho de reencontrar Ethan, o seu primeiro dono, que sempre foi seu maior amigo.',
        imdb: 'tt1753383',
        imagem: 'https://image.tmdb.org/t/p/w300/3W5jF8z5GkOHEslaIv89Ncp06J4.jpg'
    },
    {
        titulo: 'Superman & Batman: Apocalipse',
        descricao: 'Semanas depois dos eventos que levaram à prisão de Lex Luthor após o Impeachment na presidência dos Estados Unidos, e do sucesso de Batman em salvar o mundo do impacto de um meteoro, uma nave espacial cai na Baía de Gotham City. Estava a bordo uma jovem de aparência adolescente e que manifesta super-poderes idênticos ao do Superman ao ser perseguida por policiais e assustar a população.',
        imdb: 'tt1673430',
        imagem: 'https://image.tmdb.org/t/p/w300/vZqD8QMXiZh977LipOsXQmaMM7l.jpg'
    },
    {
        titulo: 'A Descoberta',
        descricao: 'Um ano após a existência da vida após a morte ser comprovada cientificamente, milhões de pessoas recorrem ao suicídio para chegar lá. Um homem e uma mulher se apaixonam nesse cenário nada propício ao amor enquanto tentam aceitar as suas próprias tragédias pessoais e descobrir a verdadeira natureza do pós-vida. The Discovery é mais um filme original Netflix, e estreia em 31 de março.',
        imdb: 'tt5155780',
        imagem: 'https://image.tmdb.org/t/p/w300/lgLyPfWHkmt8v8ulz04NL2FFHQ4.jpg'
    },
    {
        titulo: 'Tinta Bruta',
        descricao: 'Pedro é um jovem que tenta sobreviver em meio a um processo criminal, à partida da irmã e aos olhares que recebe sempre que sai na rua. Sob o codinome GarotoNeon, Pedro se apresenta no escuro do seu quarto para milhares de anônimos ao redor do mundo, pela internet. Com o corpo coberto de tinta, ele realiza performances eróticas na frente da webcam. Ao descobrir que outro rapaz de sua cidade está copiando sua técnica, Pedro decide ir atrás do mesmo.',
        imdb: 'tt7925066',
        imagem: 'https://image.tmdb.org/t/p/w300/6zW8OKgJKaO5JHzZe6geZd2vpgT.jpg'
    },
    {
        titulo: 'Fantasmas do Abismo',
        descricao: 'Neste documentário, James Cameron e Bill Paxton mergulham para capturar imagens do Titanic.',
        imdb: 'tt0297144',
        imagem: 'https://image.tmdb.org/t/p/w300/4iJG3uN4DvtX9vZ5kE5XUdqfB6b.jpg'
    },
    {
        titulo: 'Esticando a Festa',
        descricao: 'A vida de Cassie é uma grande festa, até que ela morre em um acidente. Agora, essa jovem popular tem a chance de voltar à Terra e consertar seus erros.',
        imdb: 'tt11742798',
        imagem: 'https://image.tmdb.org/t/p/w300/1bkcOEt4zvc5tBl6xFxTbkSqhEQ.jpg'
    },
    {
        titulo: 'O Leonardo Perdido',
        descricao: 'O filme narra o mistério em torno de "Salvator Mundi", a primeira pintura de Leonardo da Vinci a ser descoberta há mais de um século, que agora aparentemente desapareceu.',
        imdb: 'tt11225756',
        imagem: 'https://image.tmdb.org/t/p/w300/8CCtH4klPFUOtW6sO17fJUnEIhj.jpg'
    },
    {
        titulo: 'As Semanas Mágicas',
        descricao: 'Três casais modernos tentam conciliar relacionamentos e carreiras com os desafios da vida com filhos.',
        imdb: 'tt22506746',
        imagem: 'https://image.tmdb.org/t/p/w300/4G83nVZiPyFTQ6KBnWhEdKr3mX2.jpg'
    },
    {
        titulo: 'Explorando o Desconhecido: Robôs Assassinos',
        descricao: 'O que acontece quando uma máquina passa a tomar decisões de vida ou morte? Este documentário explora os perigos da inteligência artificial em aplicações militares.',
        imdb: 'tt27837442',
        imagem: 'https://image.tmdb.org/t/p/w300/hjvYHMOmeO5AQyFTymgYlSYrHdO.jpg'
    },
    {
        titulo: 'O Demônio dos Mares',
        descricao: 'O petroleiro Paul Sturges leva sua família de férias para a Bahia Azul. Lá, ele percebe que a cidade costeira desmoronou misteriosamente. Paul começa o dia com uma visita de rotina, com sua família, para inspecionar uma plataforma de petróleo nas proximidades. A situação se torna um pesadelo quando, das profundezas do oceano, um tubarão gigante surge: o demônio negro. Sob a ameaça constante do tubarão primitivo, Paul terá que encontrar um jeito de levar sua família de volta para a costa de forma segura.',
        imdb: 'tt10279472',
        imagem: 'https://image.tmdb.org/t/p/w300/873A55IZrwEP98hn82EGdS0xv0N.jpg'
    },
    {
        titulo: 'Batman Lego: O Filme - Super Heróis Se Unem',
        descricao: 'Esta adaptação do videogame apresenta Batman, Flash, Mulher Maravilha, Lanterna Verde, Coringa e mesmo Yoda e Indiana Jones em uma aventura cômica, parodiando os filmes de super-heróis. Esta Liga da Justiça deve combater os vilões Lex Luthor e Coringa, que pretendem destruir a cidade de Gotham.',
        imdb: 'tt2465238',
        imagem: 'https://image.tmdb.org/t/p/w300/kMULqTVLgbrjfcLzSsSWAjlc6Tj.jpg'
    },
    {
        titulo: 'Lego Batman: O Filme',
        descricao: 'No spin-off de Uma Aventura Lego, Batman (Will Arnett) descobre que adotou acidentalmente um garoto órfão. Ele se torna ninguém menos que seu ajudante Robin (Michael Cera). A dupla formada pelo arrogante Homem-Morcego e o seu empolgado ajudante deve combater o crime e prender o Coringa (Zach Galifianakis).',
        imdb: 'tt4116284',
        imagem: 'https://image.tmdb.org/t/p/w300/qVf6lTFzDsBZUbYbk8m9dk9SipX.jpg'
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
