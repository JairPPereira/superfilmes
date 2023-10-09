
function searchMovies(event) {
    // Restante do código permanece o mesmo

}

// Seu array de filmes
var filmes = [
    {
        titulo: 'A Arte da Sobrevivência',
        descricao: 'Durante a Segunda Guerra Mundial, Antonio é um clarinetista italiano, que se apaixona por Martina, uma violinista tcheca. Ambos são levados ao campo de concentração de Terezín, onde sua história de amor é intercalada com a de outros artistas judeus que, ao promovem uma série de atividades culturais, descobrem que a arte é uma importante aliada da sobrevivência.',
        imdb: 'tt15053106',
        imagem: 'https://image.tmdb.org/t/p/w300/lxRlS1EN0ByrhqkisV41l0havin.jpg'
    },
    {
        titulo: 'Angela',
        descricao: 'Após uma tumultuada separação e ter que ceder a guarda dos seus três filhos, a famosa socialite Angela Diniz conhece Raul, e acredita ter encontrado alguém que ama seu espírito livre tanto quanto ela. A atração avassaladora fez o casal largar tudo e viver o sonho de reconstruir suas vidas na casa de praia. Mas a vida tranquila rapidamente se transforma quando Raul começa a se mostrar um homem agressivo, violento e controlador. A relação declina para o abuso e a violência, dando origem a um dos casos de assassinato mais famosos de todos os tempos no Brasil.',
        imdb: 'tt28118695',
        imagem: 'https://image.tmdb.org/t/p/w300/qIRRUoeJPXJQ0lSuW3OI9NYLb10.jpg'
    },
    {
        titulo: 'A Bailarina',
        descricao: 'Sofrendo com a morte da melhor amiga após não conseguir protegê-la, uma antiga guarda-costas vai fazer de tudo para realizar seu último pedido: vingança.',
        imdb: 'tt26350277',
        imagem: 'https://image.tmdb.org/t/p/w300/5BEYUwi4PCTfCaoGCL17DD9h7sM.jpg'
    },
    {
        titulo: 'Círculo de Espiões',
        descricao: 'Quando uma traição na unidade de inteligência tem consequências fatais, uma agente implacável sai em busca de vingança.',
        imdb: 'tt15433600',
        imagem: 'https://image.tmdb.org/t/p/w300/jGUcSkXhBpgqIjSW5f5QKAmi2SQ.jpg'
    },
    {
        titulo: 'Dezesseis Facadas',
        descricao: 'Trinta e cinco anos após o chocante assassinato de três adolescentes, o infame "Sweet Sixteen Killer" retorna na noite de Halloween para fazer uma quarta vítima. Jamie, de dezessete anos, ignora o aviso de sua mãe superprotetora e fica cara a cara com o maníaco mascarado e, fugindo para salvar sua vida, acidentalmente viaja no tempo de volta para 1987, o ano do assassinatos originais. Forçada a navegar na cultura desconhecida e ultrajante dos anos 1980, Jamie se une a sua mãe adolescente para derrubar o assassino de uma vez por todas, antes que ela fique presa no passado para sempre.',
        imdb: 'tt11426232',
        imagem: 'https://image.tmdb.org/t/p/w300/o5tWAiHfxEvu2z1qkJKU4gW1uPY.jpg'
    },
    {
        titulo: 'Jogo Justo',
        descricao: 'Uma promoção inesperada em um fundo de investimentos competitivo leva o relacionamento de um jovem casal ao limite, ameaçando muito mais do que o recente noivado deles.',
        imdb: 'tt16304446',
        imagem: 'https://image.tmdb.org/t/p/w300/AteINDGu2VqyI1M8mBZXYMA7Yhs.jpg'
    },
    {
        titulo: 'Loucas em Apuros',
        descricao: 'Esta comédia acompanha quatro amigas asiáticas e seus processos de descoberta interior e da vida. Enquanto viajam para a Ásia a procura da mãe biológica de umas delas, elas enfrentam situações inusitadas e fortalecem ainda mais o laço entre elas.',
        imdb: 'tt15268244',
        imagem: 'https://image.tmdb.org/t/p/w300/kjFuCcTiTTmFbaNWIMcwrnZpMpr.jpg'
    },
    {
        titulo: 'Mate-me se Puder',
        descricao: 'A excêntrica milionária Olivia envia à meia-irmã Agatha e a um grupo de velhos conhecidos um misterioso convite para um fim de semana em seu iate, onde descobrirão o verdadeiro motivo da comemoração: um... assassinato? Pega de surpresa por uma morte inesperada, e com ajuda da polícia, Agatha tentará descobrir se foi apenas um acidente ou um elaborado plano de vingança.',
        imdb: 'tt13022120',
        imagem: 'https://image.tmdb.org/t/p/w300/e2ghk75hCIu7N2Xk7baIJtvwMPP.jpg'
    },
    {
        titulo: 'O Rei dos Assassinos',
        descricao: 'Os maiores assassinos do mundo são contratados simultaneamente para matar Jorge Drakos, auto-declarado como Rei dos Assassinos, porém eles descobrem estão presos em uma competição para ver quem é o verdadeiro Rei dos Assassinos.',
        imdb: 'tt14057604',
        imagem: 'https://image.tmdb.org/t/p/w300/tHA2wltMBWuaTzOzSf7P2bzhmIy.jpg'
    },
    {
        titulo: 'Uma Bela Manhã',
        descricao: 'Sandra é uma jovem mãe viúva que equilibra as tarefas de criar sua filha enquanto cuida de seu pai doente, que está batalhando contra uma condição neurológica degenerativa. O velho amigo Clément entra em sua vida, e em uma época de estresse familiar, ela começa um caso ardente.',
        imdb: 'tt13482828',
        imagem: 'https://image.tmdb.org/t/p/w300/f0zZGfxM6GOuOuZY61m0JcfGi4S.jpg'
    },
    {
        titulo: 'Vidas em Jogo',
        descricao: 'Na Hungria, durante o período da Guerra Fria, um oficial de segurança parece levar a vida perfeita, mas tudo muda quando surge um lendário espião querendo reviver uma antiga história do passado. Começa um duelo onde nada é o que parece e até o mais simples gesto humano pode custar a sua vida.',
        imdb: 'tt13400142',
        imagem: 'https://image.tmdb.org/t/p/w300/1ohnWjUgVrJVK8tLpG1MHotgJMk.jpg'
    },
    {
        titulo: 'O Exorcista: O Devoto',
        descricao: 'Quando sua filha e sua melhor amiga são possuídas por um espírito demoníaco, um pai desesperado procura a ajuda de Chris MacNeil (Ellen Burstyn), cuja filha Regan sobreviveu a uma possessão semelhante na década de 1970.',
        imdb: 'tt12921446',
        imagem: 'https://image.tmdb.org/t/p/w300/l6nMIFfpkL5cQz4ulSV0llwOWoh.jpg'
    },
    {
        titulo: 'Virando o Jogo',
        descricao: 'Depois de sofrer uma derrota esmagadora, todos pensavam que o Abilene Eagles, um time de futebol americano do Ensino Médio, não teria a menor chance de competir pelo título na temporada seguinte. No entanto, a liderança de Chad Mitchell e a figura paterna de Harold Christian incentivarão os jogadores a enfrentar desafios dentro e fora de campo e transformarão a história do clube e do esporte americano para sempre.',
        imdb: 'tt6384920',
        imagem: 'https://image.tmdb.org/t/p/w300/ybWVBbq9W2MCzjL2UMBmqrc8eEc.jpg'
    },
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
    {
        titulo: 'Asteroid City',
        descricao: 'O roteiro de uma convenção dos Astrônomos Júnior/Cadetes do Espaço, organizada para reunir estudantes de todo o país, e suas famílias, para uma competição escolar de bolsas de estudos é espetacularmente interrompido por eventos que podem impactar e transformar o mundo.',
        imdb: 'tt14230388',
        imagem: 'https://image.tmdb.org/t/p/w300/4BYYVj8mFDAgeQBz89eJRCpMEYI.jpg'
    },
    {
        titulo: 'Bird Box Barcelona',
        descricao: 'Depois que uma força misteriosa dizima a população do mundo, Sebastian precisa enfrentar uma jornada de sobrevivência pelas ruas desoladas de Barcelona. Mas, ao se aliar a outros sobreviventes em busca de um lugar seguro, eles descobrem uma ameaça ainda mais sinistra que não para de crescer.',
        imdb: 'tt14400246',
        imagem: 'https://image.tmdb.org/t/p/w300/iTGBHdL12QEpLyRVlykDuiYxzAG.jpg'
    },
    {
        titulo: 'A Missão',
        descricao: 'No final do século XVIII Mendoza (Robert De Niro), um mercador de escravos, fica com crise de consciência por ter matado Felipe (Aidan Quinn), seu irmão, num duelo, pois Felipe se envolveu com Carlotta (Cherie Lunghi). Ela havia se apaixonado por Felipe e Mendoza não aceitou isto, pois ela tinha um relacionamento com ele. Para tentar se penitenciar Mendoza se torna um padre e se une a Gabriel (Jeremy Irons), um jesuíta bem intencionado que luta para defender os índios, mas se depara com interesses econômicos.',
        imdb: 'tt0091530',
        imagem: 'https://image.tmdb.org/t/p/w300/itBZgfqQ6yHL7KN80M3BxO02Knp.jpg'
    },
    {
        titulo: 'To End All War: Oppenheimer & the Atomic Bomb',
        descricao: 'Explore como o impulso implacável de um homem e a invenção da bomba atômica mudaram a natureza da guerra para sempre, levaram à morte de centenas de milhares de pessoas e desencadearam a histeria em massa.',
        imdb: 'tt28240284',
        imagem: 'https://image.tmdb.org/t/p/w300/xwkYWcs8aypUtk3xDRUh0ndo4GA.jpg'
    },
    {
        titulo: 'Aranhas! Um Experimento Que Deu Errado',
        descricao: 'Em um misterioso laboratório localizado no deserto, as aranhas experimentais usadas para pesquisa genética se transformam em monstros gigantes e o laboratório é reduzido a um ninho infestado de insetos. Alguns dias depois, uma equipe especial de operações liderada pelo capitão Gao Qiang escolta o Dr. Chen, um cientista do Grupo Kwon Plant, para resgatar as pessoas presas e tentar recuperar os dados científicos relevantes, mas o Dr. Chen esconde a situação real que está acontecendo dentro do laboratório...',
        imdb: 'tt18298604',
        imagem: 'https://image.tmdb.org/t/p/w300/uwWKxXedTIqWQ1bPXE4kkbjIjv8.jpg'
    },
    {
        titulo: 'De Tirar o Fôlego',
        descricao: 'Mesmo em caminhos diferentes no esporte, uma premiada mergulhadora e um especialista em segurança pareciam destinados a se encontrar. Esta obra retrata as emocionantes conquistas e os riscos inevitáveis da jornada em busca de um sonho nas profundezas do oceano.',
        imdb: 'tt24132732',
        imagem: 'https://image.tmdb.org/t/p/w300/pmIXPqjZl50UP2dbglEKDfOOBZV.jpg'
    },
    {
        titulo: 'Resident Evil: Ilha da Morte',
        descricao: 'Em San Francisco, Jill Valentine está lidando com um surto de zumbis e um novo T-Virus, Leon Kennedy está no encalço de um cientista DARPA sequestrado e Claire Redfield está investigando um peixe monstruoso que está matando baleias na baía. Acompanhados por Chris Redfield e Rebecca Chambers, eles descobrem que as pistas de seus casos separados convergem para o mesmo local, a Ilha de Alcatraz, onde um novo mal se estabeleceu e aguarda sua chegada.',
        imdb: 'tt26674627',
        imagem: 'https://image.tmdb.org/t/p/w300/nEWftodqakZu0RcfqhVr9f7ZdUH.jpg'
    },
    {
        titulo: 'Abercrombie & Fitch: Ascensão e Queda',
        descricao: 'Este documentário explora o reinado da A&F na cultura pop na virada do milênio e mostra como a marca prosperou através da exclusão.',
        imdb: 'tt19034522',
        imagem: 'https://image.tmdb.org/t/p/w300/8Zi3lyy7hOw2VGeLJ0A813oSGis.jpg'
    },
    {
        titulo: 'Oppenheimer',
        descricao: 'A história do físico americano J. Robert Oppenheimer, seu papel no Projeto Manhattan e no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial, e o quanto isso mudaria a história do mundo para sempre.',
        imdb: 'tt15398776',
        imagem: 'https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
    },
    {
        titulo: 'Barbie',
        descricao: 'No mundo mágico das Barbies, "Barbieland", uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no "mundo real", onde descobre que a beleza está no interior de cada um.',
        imdb: 'tt1517268',
        imagem: 'https://image.tmdb.org/t/p/w300/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg'
    },
    {
        titulo: 'Sobrenatural: A Porta Vermelha',
        descricao: 'Josh Lambert segue para o leste para deixar seu filho, Dalton, na faculdade. Mas demônios reprimidos do passado voltam repentinamente para assombrar os dois.',
        imdb: 'tt13405778',
        imagem: 'https://image.tmdb.org/t/p/w300/A2XloB9BYZtMzWOR78uguOoCfH5.jpg'
    },
    {
        titulo: 'Daisy Quokka: O Animal Mais Feroz Do Mundo',
        descricao: 'A otimista quokka Daisy sonha em ganhar os "Jogos Mais Assustadores do Mundo". Ela contará com a ajuda de um ex-campeão, um crocodilo rabugento, que a ajudará a provar que os verdadeiros campeões podem ter qualquer tamanho.',
        imdb: 'tt11482894',
        imagem: 'https://image.tmdb.org/t/p/w300/p9dbwWKE8SQqyHoN3Vo8BHpt8fc.jpg'
    },
    {
        titulo: 'Frio nos Ossos',
        descricao: 'Uma mãe, seu marido deficiente e sua filha adolescente têm seu cotidiano simples e isolado perturbado quando dois criminosos em fuga tentam se refugiar em sua casa. Mas mal sabem eles dos segredos escondidos nesta casa.',
        imdb: 'tt19858164',
        imagem: 'https://image.tmdb.org/t/p/w300/ttPNKyqXv3kK92tCw4zI7tjOaOn.jpg'
    },
    {
        titulo: 'Irmãos Por Escolha',
        descricao: 'Este documentário traz uma visão de dentro das Agulhas Negras, a maior academia militar do Brasil, e mostra o caminho de jovens ao se tornarem oficiais militares.',
        imdb: 'tt28022751',
        imagem: 'https://image.tmdb.org/t/p/w300/fN8SBoDHYT2zO1x80GhhX605WuX.jpg'
    },
    {
        titulo: 'Sing Street: Música e Sonho',
        descricao: 'Um jovem, que cresce nas efervescentes ruas da Dublin da década de 80, foge de casa e da nova escola mudando-se para Londres e começando uma banda para tentar conquistar o coração de uma garota misteriosa.',
        imdb: 'tt3544112',
        imagem: 'https://image.tmdb.org/t/p/w300/jihKpntyd6G1nOJsW2VjMa9jgSU.jpg'
    },
    {
        titulo: 'Unicorn Wars',
        descricao: 'Esta história acompanha dois soldados ursinhos de pelúcia: Azulín, que deseja que o sangue de unicórnio seja bonito para sempre; e Gordi, que só quer ser aceito e querido.',
        imdb: 'tt10483152',
        imagem: 'https://image.tmdb.org/t/p/w300/joOEYpfltqoqkaiQio24TUTntGM.jpg'
    },
    {
        titulo: 'Ursinho Pooh: Sangue e Mel',
        descricao: 'Depois de serem abandonados por Christopher Robin, que foi para a faculdade, Pooh e Leitão matam qualquer um que se atreva a se aventurar na Floresta dos Sonhos Azuis.',
        imdb: 'tt19623240',
        imagem: 'https://image.tmdb.org/t/p/w300/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg'
    },
    {
        titulo: 'A Noite nos Persegue',
        descricao: 'Após poupar a vida de uma garota durante um massacre, um assassino de elite se torna o alvo do ataque de criminosos.',
        imdb: 'tt6116856',
        imagem: 'https://image.tmdb.org/t/p/w300/eh2e6feFLOmlQDcKSDCJCwXVsUd.jpg'
    },
    {
        titulo: 'Ana e Vitória',
        descricao: 'Ana e Vitória se conhecem em uma festa e decidem cantar juntas. São descobertas por um empresário carioca e chegam ao estrelato, recebendo um disco de platina. Ana está em busca do amor de sua vida e Vitória em busca de um amor livre e sem amarras. Será que conseguirão viver um grande amor?',
        imdb: 'tt8583378',
        imagem: 'https://image.tmdb.org/t/p/w300/cgpI8BlXW5OWWUQc1A1zFrMRrBG.jpg'
    },
    {
        titulo: 'Ele é Demais',
        descricao: 'Neste remake do clássico adolescente "Ela é Demais", uma influenciadora aceita o desafio de transformar um garoto pouco popular em rei do baile.',
        imdb: 'tt4590256',
        imagem: 'https://image.tmdb.org/t/p/w300/dR5s6KTvHFBzVMiSiFFHkOhEbbJ.jpg'
    },
    {
        titulo: 'Tammy: Fora de Controle',
        descricao: 'Tammy é uma mulher que perde seu emprego na mesmo época em que descobre que estava sendo traída pelo marido. A partir daí, ela pega a estrada para uma longa viagem com sua avó, que abusa de bebidas e de palavrões.',
        imdb: 'tt2103254',
        imagem: 'https://image.tmdb.org/t/p/w300/xF1fM9RwCCCmFi8z7lvl2eBSvJ.jpg'
    },
    {
        titulo: 'Moloch',
        descricao: 'Betriek vive à beira de uma turfeira no norte da Holanda. Quando ela e sua família são atacados por um estranho aleatório uma noite, Betriek sai em busca de uma explicação. Quanto mais ela procura, mais ela se convence de que está sendo caçada por algo obscuro.',
        imdb: 'tt14412446',
        imagem: 'https://image.tmdb.org/t/p/w300/3jVzYOnylmvo7ZnGerjfoRj2wFz.jpg'
    },
    {
        titulo: 'Ruby Marinho - Monstro Adolescente',
        descricao: 'Uma adolescente tímida descobre que faz parte de uma lendária linhagem real dos míticos krakens do mar e que seu destino, nas profundezas dos oceanos, é maior do que ela jamais sonhou.',
        imdb: 'tt27155038',
        imagem: 'https://image.tmdb.org/t/p/w300/nNcxpjCtcawf8wQmTwnA0u1jukC.jpg'
    },
    {
        titulo: 'Ben 10: Mutante Rex Heróis Unidos',
        descricao: ' ',
        imdb: 'tt2123516',
        imagem: 'https://image.tmdb.org/t/p/w300/iSPCeuGiN06540ZUCfcunc4hOm3.jpg'
    }, 
    {
        titulo: 'Sisu',
        descricao: 'Nas profundezas do deserto da Lapônia, Aatami Korpi está em busca de ouro. De vez em quando, o sobrevoo de bombardeiros e os sons distantes da guerra podem ser ouvidos na noite de outono. Finalmente, o trabalho árduo é recompensado e o pó de ouro na panela se transforma em pedaços de ouro, e Aatami sai para levar seu tesouro de ouro para a cidade mais próxima. Depois que ele se depara com a patrulha nazista liderada pelo SS Obersturmführer Bruno Helldorf, começa uma perseguição de tirar o fôlego e faminta por ouro através do deserto destruído e minado da Lapônia.',
        imdb: 'tt14846026',
        imagem: 'https://image.tmdb.org/t/p/w300/uCAaaAQEDrTllYR4dtsEsfQa8We.jpg'
    },
    {
        titulo: 'Filho da Mãe',
        descricao: 'O documentário mostra a deliciosa intimidade do ator com Dona Déa, sua inspiração para criar a Dona Hermínia. Com imagens inéditas, o filme acompanha os bastidores divertidos e emocionantes da última turnê do artista.',
        imdb: 'tt21339834',
        imagem: 'https://image.tmdb.org/t/p/w300/z8ZbaGCahlXwri66rPHjgw54jo1.jpg'
    },
    {
        titulo: 'Pooka',
        descricao: 'Um ator relutante consegue um trabalho para as épocas festivas como o mascote do brinquedo mais vendido do ano, Pooka. Mas, aos poucos ele desenvolve duas personalidades - uma quando está com a fantasia e outra quando não está.',
        imdb: 'tt8870814',
        imagem: 'https://image.tmdb.org/t/p/w300/q6Rmmz5MYWHBqqdxhW6nsj0vgts.jpg'
    },
    {
        titulo: 'Super Quem? Heróis Por Acidente',
        descricao: 'Cedric é um ator que, após anos tendo sua carreira vista como chacota, encontra uma oportunidade que promete mudar sua vida: dar vida ao personagem super-herói Badman! Nome familiar, não? Só que um acidente de carro não estava nos planos de Cedric. Assim que o ator desperta da batida, sua vida real se torna um apagão, e ele passa a acreditar que é legitimamente Badman, o super-herói.',
        imdb: 'tt13774454',
        imagem: 'https://image.tmdb.org/t/p/w300/b9XVAP8AWQ30uRkKNTvmER8OVMa.jpg'
    },
    {
        titulo: 'Uma Fazenda Maluca',
        descricao: 'Baseado em um clássico conto da literatura checa. Esta história fala sobre a amizade do relojoeiro Jemmy, um pequeno rapaz de uma vila que chega a Praga Medieval com sua cabra. Lá, Jemmy acaba se apaixonando por Katy, uma jovem de Praga. A cabra acaba ficando com ciúmes e passa a odiar Katy. A dupla, porém, tem como missão salvar o relógio Astronômico de Praga dos gananciosos vereadores que estão impedindo a criação de outros relógios.',
        imdb: 'tt1308650',
        imagem: 'https://image.tmdb.org/t/p/w300/5DV34HGjjRjMQoRRyMPjIoV9FdL.jpg'
    },
    {
        titulo: 'O Mínimo Para Viver',
        descricao: 'Uma jovem (Lily Collins) está lidando com um problema que afeta muitos jovens no mundo: a anorexia. Sem perspectivas de se livrar da doença e ter uma vida feliz e saudável, a moça passa os dias sem esperança. Porém, quando ela encontra um médico (Keanu Reeves) não convencional que a desafia a enfrentar sua condição e abraçar a vida, tudo pode mudar.',
        imdb: 'tt5541240',
        imagem: 'https://image.tmdb.org/t/p/w300/jKbr1VbR0NKpuspJHh1qg3xz7FT.jpg'
    },
    {
        titulo: 'Doze Homens e Outro Segredo',
        descricao: 'Após o sucesso do roubo e de conseguir de volta sua esposa, Danny Ocean (George Clooney) reparte o dinheiro e cada um da equipe vai viver de forma discreta. No entanto, Terry Benedict, o dono do cassino assaltado, reaparece e exige a quantia roubada de volta com juros, mas os membros da gangue já gastaram grande parte do dinheiro. Danny e sua equipe concluem que a melhor opção é roubar uma raríssima obra que está sendo exibido em um museu de Roma, no valor que eles precisam.',
        imdb: 'tt0349903',
        imagem: 'https://image.tmdb.org/t/p/w300/jLt2z5Zg3lDHuWU0NabkLDSvfDy.jpg'
    },
    {
        titulo: 'Treze Homens e um Novo Segredo',
        descricao: 'Reuben Tischkoff, o homem que bancou financeiramente o assalto triplo aos cassinos de Terry Benedict, foi traído por Willie Bank, um inescrupuloso dono de cassinos. Com Reuben no hospital, Danny Ocean, Rusty Ryan e sua trupe mais uma vez se reúnem para iniciar um plano de vingança. O objetivo é derrotar Bank na noite de inauguração de seu mais luxuoso cassino, chamado The Bank, derrotando-o financeiramente e também atingindo sua reputação.',
        imdb: 'tt0496806',
        imagem: 'https://image.tmdb.org/t/p/w300/hWmFe0A26TNmnfHrHdmKmN0N6QZ.jpg'
    },
    {
        titulo: 'Às Cegas',
        descricao: 'Após um ataque violento, Ellen se tornou reclusa em seu apartamento para se recuperar. Mas logo ela mergulha na paranóia, incapaz de convencer ninguém de que seu agressor voltou para aterrorizá-la, escondendo-se à vista de todos.',
        imdb: 'tt10303430',
        imagem: 'https://image.tmdb.org/t/p/w300/7UEqRremYl9cxCPAApYtvqRpcqW.jpg'
    },
    {
        titulo: 'Bela Vingança',
        descricao: 'Uma jovem mulher assombrada por uma tragédia em seu passado se vinga nos homens predadores que cruzam seu caminho.',
        imdb: 'tt9620292',
        imagem: 'https://image.tmdb.org/t/p/w300/r7FwclLTWB8i6XfBNTtUsyONlgN.jpg'
    },
    {
        titulo: 'Barbie e As Três Mosqueteiras',
        descricao: 'A jovem Corinne tem um grande sonho - ser uma mosqueteira! O problema é que esse é um trabalho só para homens. Mas, mesmo assim, Corinne decide ir para Paris e lutar por aquilo que quer. Lá, ela conhece Viveca, Aramina e Reneé, três moças que têm o mesmo objetivo. Juntas, elas vão treinar muito para, um dia, provar seu valor. E essa oportunidade está mais perto do que elas imaginam. O malvado regente Felipe está conspirando contra o príncipe Louis para tomar poder. Agora, para desmascarar esse terrível vilão e salvar a vida de Louis, as quatro corajosas guerreiras vão precisar de todas as suas habilidades. E, quem sabe, ainda provar para o príncipe que são dignas de se juntar aos soldados do reino.',
        imdb: 'tt1484922',
        imagem: 'https://image.tmdb.org/t/p/w300/aulv0DUM41tmEM9BoDVaczBojsz.jpg'
    },
    {
        titulo: 'Nunca Fui Beijada',
        descricao: 'Josie Geller (Drew Barrymore) está pronta para uma mudança radical. Ela é a mais jovem editora de um grande jornal, mas nunca foi levada a sério como jornalista, apesar de ser uma profissional supercompetente. Dedica todo o seu tempo exclusivamente ao trabalho, já sua vida pessoal é uma outra história.  Ainda marcada pela sua reputação de adolescente babaca, Josie é uma garota de 25 anos que nunca namorou e nunca foi beijada... até agora! Contra tudo e todos, Josie consegue sua primeira missão como repórter. Ela precisa fingir que é uma estudante e entrar numa escola para descobrir a intimidade dos jovens alunos. A situação torna-se hilariante quando Josie revive sua própria história conhece um amor em potencial e sente na própria pelo os dramas da adolescência.',
        imdb: 'tt0151738',
        imagem: 'https://image.tmdb.org/t/p/w300/txX1wXYysKGkDGi4EsHTcq1KwZz.jpg'
    },
    {
        titulo: 'O Jogo de Amor – "Odio"',
        descricao: 'Resolvendo alcançar o sucesso profissional sem comprometer sua ética, Lucy embarca em um jogo implacável de luta contra o frio e eficiente inimigo Joshua, uma rivalidade que é complicada por sua crescente atração por ele.',
        imdb: 'tt8718158',
        imagem: 'https://image.tmdb.org/t/p/w300/nWTeXUGWsSDoDLC4UucMeM07gA5.jpg'
    },
    {
        titulo: 'Dezesseis Luas',
        descricao: 'Ethan conhece a mulher dos seus sonhos quando Lena aparece em sua cidade, e os dois acabam se apaixonando. Mas, para salvar o romance, eles precisam descobrir os segredos obscuros de suas famílias, guardados a sete chaves.',
        imdb: 'tt1559547',
        imagem: 'https://image.tmdb.org/t/p/w300/8BcxlJFLBk9DpDpcKYFExc4iubS.jpg'
    },
    {
        titulo: 'Louca Obsessão',
        descricao: 'Depois de terminar seu mais novo manuscrito, o escritor de sucesso, Paul Sheldon, decide sair para comemorar. O problema é que está nevando demais e Paul acaba sofrendo um terrível acidente. Ele é salvo e abrigado por uma ex-enfermeira chamada Annie Wilkes, que se auto-intitula sua fã número um. Aparentemente uma simpática e doce senhora, Annie, aos poucos, vai se revelando uma sádica psicótica, que começa a torturar Paul quando descobre que ele matou sua personagem favorita em seu último livro publicado. Agora, Paul Sheldon terá de usar suas artimanhas de escritor para ganhar tempo, enganar Annie e, com sorte, escapar deste pesadelo.',
        imdb: 'tt0100157',
        imagem: 'https://image.tmdb.org/t/p/w300/3aANzopHLOlJLrq9LfbJI5zY2IP.jpg'
    },
    {
        titulo: 'Batman: Ataque ao Arkham',
        descricao: 'Bem-vindo ao coração sombrio de Gotham City. Do centro das sombras surge o Asilo Arkham, um depósito purulento de tudo que é vil, perigoso e delirante, com uma população que cresce exponencialmente graças ao Cavaleiro das Trevas. Mas quando Batman frustra o mais recente plano do Charada e uma importante parte de uma evidência precisa ser secretamente recuperada no Arkham, a solução vem de uma inesperada fonte: uma equipe secreta de ataque do governo montada no submundo de Gotham City. O assassino Pistoleiro lidera o Esquadrão Suicida: Arlequina, Nevasca, Capitão Bumerangue, Tubarão Rei e Aranha Negra, um bando de desonestos que conhecem o Asilo Arkham e seus residentes muitíssimo bem.',
        imdb: 'tt3139086',
        imagem: 'https://image.tmdb.org/t/p/w300/gX2Uy1GnIB8bbeP7EfXBUxzGmqY.jpg'
    },
    {
        titulo: 'Mulher Maravilha',
        descricao: 'Mulher Maravilha contará a origem da amazona na mísitca ilha grega de Temíscera e sua inevitável jornada pelo mundo dos homens, onde ela se estabelce como heroína que segue suas próprias regras. Entretanto, o conflito se estabelece quando o deus da guerra, Ares, escapa da sua prisão e jura vingança contra o mundo dos mortais e dos deuses. Cabe à Mulher-Maravilha impedi-lo.',
        imdb: 'tt1186373',
        imagem: 'https://image.tmdb.org/t/p/w300/wUhVYGSEWyb9xOl9kWspxLTpAxQ.jpg'
    },
    {
        titulo: 'Apóstolo',
        descricao: 'Um homem misterioso viaja para uma ilha remota em busca de sua irmã desaparecida. Ele tenta resgatar sua irmã depois que ela foi sequestrada por um culto religioso, que está exigindo um resgate por seu retorno. Mas logo se torna claro que o culto vai lamentar o dia que ceifou este homem, que escava cada vez mais profundamente nos segredos e mentiras sobre os quais a comunidade está construída.',
        imdb: 'tt6217306',
        imagem: 'https://image.tmdb.org/t/p/w300/p7KGpuO13YUsRxFSPcANFs1MAx1.jpg'
    },
    {
        titulo: 'Viajantes - Instinto e Desejo',
        descricao: 'Um grupo de jovens é enviado ao espaço numa missão para povoar um planeta recém descoberto. Depois que o capitão da missão é misteriosamente morto, a jovem tripulação vai ao caos, revertendo para um estado primitivo, tribal, e cedendo aos seus desejos mais selvagens.',
        imdb: 'tt9664108',
        imagem: 'https://image.tmdb.org/t/p/w300/50mYEEOiueKarAhlHAz5qOTuIzX.jpg'
    },
    {
        titulo: 'Ligadas pelo Desejo',
        descricao: 'Corky é uma ex-presidiária lésbica que arranja um emprego como encanadora em um prédio. Lá ela conhece Caesar, que trabalha fazendo lavagem de dinheiro para a Máfia, e sua namorada, Violet. As duas mulheres começam, então, um romance, e planejam roubar dois milhões de dólares que estão sob os cuidados de Caesar, antes que ele os devolva para seu chefe. Mas o plano começa a dar errado quando ele tem uma reação inesperada.',
        imdb: 'tt0115736',
        imagem: 'https://image.tmdb.org/t/p/w300/jvy0RFmTRJDlceqqF4bfbxfd7Dk.jpg'
    },
    {
        titulo: 'Tesla: O Homem Elétrico',
        descricao: 'A história real do gênio revolucionário Nikola Tesla. De sua relação com Thomas Edison a seus experimentos com a eletricidade e a criação de um novo sistema mundial de transmissão de energia sem fio.',
        imdb: 'tt5259822',
        imagem: 'https://image.tmdb.org/t/p/w300/xD6ytmowMxYcrPCh4oYhcWyuTF0.jpg'
    },
    {
        titulo: 'iNumber Number: O Ouro de Joanesburgo',
        descricao: 'Encarregado de investigar um histórico roubo de ouro em Joanesburgo, um policial infiltrado precisa escolher entre a lei e a própria consciência.',
        imdb: 'tt27728519',
        imagem: 'https://image.tmdb.org/t/p/w300/lfsbL4QcmMKJvdVYE36tPRmoaiv.jpg'
    },
    {
        titulo: 'A Descoberta Perfeita',
        descricao: 'Uma editora de moda vê seu retorno profissional ameaçado ao descobrir que o rapaz que ela beijou em uma festa é um colega de trabalho e, pior, filho da nova chefe! ',
        imdb: 'tt8400584',
        imagem: 'https://image.tmdb.org/t/p/w300/xlN4vXWzvoZ2LCdhsyFv4zOZBY6.jpg'
    },
    {
        titulo: 'Amor em Foco',
        descricao: 'Duas avós intrometidas fazem os netos se reencontrarem e reacendem uma paixão da infância, além de desentendimentos do passado.',
        imdb: 'tt21257152',
        imagem: 'https://image.tmdb.org/t/p/w300/iiKXokniuqAwhVZjLhIGJhXIKzk.jpg'
    },
    {
        titulo: 'Que Horas Eu Te Pego?',
        descricao: 'Uma jovem falida é contratada para namorar um adolescente introvertido e socialmente desajeitado, que está se preparando para a faculdade.',
        imdb: 'tt15671028',
        imagem: 'https://image.tmdb.org/t/p/w300/en47PkDX8IhtQA3i1MYslx8eH91.jpg'
    },
    {
        titulo: 'Barraco de Família',
        descricao: 'Cleide recebe a visita de sua filha Kellen, uma funkeira de sucesso que, depois de um ano sem dar notícias, reaparece na vila onde a família mora. Como toda mãe que se preze, Cleide sabe que onde há fumaça, há fogo, e desconfia da mudança repentina de atitude da filha. Vai rolar muita confusão nesse barraco de família.',
        imdb: 'tt19408362',
        imagem: 'https://image.tmdb.org/t/p/w300/f5IqNMb4IVdijcaHI3oXyM6sEhE.jpg'
    },
    {
        titulo: 'Mafia Mamma: De Repente Criminosa',
        descricao: 'Uma mãe suburbana herda o império da máfia de seu falecido avô na Itália. Guiada pelo consigliere de confiança da empresa, ela desafia de forma hilária as expectativas de todos ao se ver presa no meio de uma guerra mortal de máfia',
        imdb: 'tt13923456',
        imagem: 'https://image.tmdb.org/t/p/w300/ldMp0tTPzlcjdoAJI1jfnDXRrfX.jpg'
    },
    {
        titulo: 'Monstros do Homem',
        descricao: 'Uma empresa de robótica que tenta ganhar um lucrativo contrato militar se alia a um agente corrupto da CIA para conduzir um teste ilegal de campo ao vivo. Eles lançam quatro protótipos de robôs armados em um campo suspeito de fabricação de drogas no Triângulo Dourado, presumindo que estariam matando traficantes de drogas que ninguém perderia. Seis médicos em uma missão humanitária testemunham o massacre brutal e se tornam os principais alvos.',
        imdb: 'tt6456326',
        imagem: 'https://image.tmdb.org/t/p/w300/uoYHGazS5wLQFJe7tqZ39M8dA7Q.jpg'
    },
    {
        titulo: 'Royalteen: Princesa Margrethe',
        descricao: 'Após o escândalo no baile de formatura, a princesa Margrethe só quer levar uma vida normal. Mas, por trás da imagem de perfeição, ela lida com problemas familiares.',
        imdb: 'tt22488414',
        imagem: 'https://image.tmdb.org/t/p/w300/oWmcC2RENbkdS3BuPor530KzKDc.jpg'
    },
    {
        titulo: 'Royalteen',
        descricao: 'Ela começou um romance inesperado com o príncipe herdeiro, mas vai ter que fazer de tudo para impedir que seu passado escandaloso (e um grande segredo) sejam revelados.',
        imdb: 'tt15022184',
        imagem: 'https://image.tmdb.org/t/p/w300/n7ptP3khuhWHrTvFO0VCVPs6EVY.jpg'
    },
    {
        titulo: 'Amor Não Tem Idade',
        descricao: 'Maggie Delaney é uma mãe divorciada que se aventura no mundo do namoro com a ajuda de Michael, o pai solteiro do amigo de seu filho. Ao mesmo tempo, a mãe de Maggie e sua filha adolescente começam seus próprios romances.',
        imdb: 'tt20859028',
        imagem: 'https://image.tmdb.org/t/p/w300/4FaXdT2g7jOOpCT2vgXDkfIMEKv.jpg'
    },
    {
        titulo: 'Amor Sem Limites',
        descricao: 'O sofisticado traficante de drogas Sev e sua sensual namorada Maddie levam uma vida sem limites. De festas loucas a aventuras movidas a drogas, a vida é boa para o casal até que um amigo de infância aparece do nada e pede ajuda. Esse evento desencadeia uma sequência de acontecimentos irreversíveis que colocam seu amor e suas vidas em risco.',
        imdb: 'tt5212808',
        imagem: 'https://image.tmdb.org/t/p/w300/rsnZmL3oW0XUU9tICw7JB1zLa4m.jpg'
    },
    {
        titulo: 'O Mistério de Maya',
        descricao: 'Neste documentário, um casal acusado de abuso infantil enfrenta as autoridades da Flórida para recuperar a guarda da filha doente.',
        imdb: 'tt27542448',
        imagem: 'https://image.tmdb.org/t/p/w300/9niJrWHUCnPnDTrnYmVki663Esf.jpg'
    },
    {
        titulo: 'O Pacto',
        descricao: 'Um sargento do Exército é resgatado de uma missão no Afeganistão pelo seu intérprete. Naquela que seria a sua última missão no estrangeiro, Kinley fica à beira da morte mas sobrevive graças a Ahmed, que o protege e o carrega por quilometros a fim de garantir a sua segurança. Sem se lembrar muito bem do que aconteceu, o sargento apenas sabe que quando o homem se encontra em risco de vida, como a sua família, é a sua verdadeira missão retribuir o favor e ajudá-lo a sobreviver.',
        imdb: 'tt4873118',
        imagem: 'https://image.tmdb.org/t/p/w300/pTQZT9R6YjKrweJ0llPtq57j1Z0.jpg'
    },
    {
        titulo: 'Demônio de Neon',
        descricao: 'Jesse (Elle Fannng) é uma jovem de 18 anos que acaba de chegar a Los Angeles. Dona de uma beleza natural impressionante, ela tenta a sorte como modelo profissional. Após tirar algumas fotos mórbidas para um jovem fotógrafo, é contratada por uma conceituada agência de modelos. Bastante ingênua, ela passa a lidar com o ego sempre inflado das demais modelos e também com a maquiadora Ruby (Jena Malone), que possui intenções ocultas com a jovem.',
        imdb: 'tt1974419',
        imagem: 'https://image.tmdb.org/t/p/w300/tZzE1utUG5psYaT58cZbrrx7nyx.jpg'
    },
    {
        titulo: 'Beau Tem Medo',
        descricao: 'Um homem paranoico embarca em uma odisseia épica para voltar para casa e encontrar sua mãe.',
        imdb: 'tt13521006',
        imagem: 'https://image.tmdb.org/t/p/w300/vPZnGnrLok0S5ZHPL5H8RG4PmEK.jpg'
    },
    {
        titulo: 'Cães de Guerra',
        descricao: 'Após uma experiência mal sucedida em fazer negócios com o governo, dois amigos moradores de Miami Beach, que levam uma vida tranquila e que só queriam dinheiro para sustentar seu vício em maconha, descobrem que existe um mercado ilícito em expansão com a venda de armas para o exterior. Ao fechar um contrato de 300 milhões de dólares, eles terão de ir para o Afeganistão acompanhar a explosiva transação pessoalmente',
        imdb: 'tt2005151',
        imagem: 'https://image.tmdb.org/t/p/w300/uv9g0yF3z10tWWq24OQewQf6r5e.jpg'
    },
    {
        titulo: 'Enquanto Estivermos Juntos',
        descricao: 'A história real de Jeremy Camp, famoso cantor de rock cristão e indicado ao Grammy. A obra deseja focar como a religião foi essencial para o artista superar dores de sua vida, principalmente quando sua esposa Melissa é vítima de câncer.',
        imdb: 'tt9779516',
        imagem: 'https://image.tmdb.org/t/p/w300/FyxWixSh2EHN44SbbC640NcaUF.jpg'
    },
    {
        titulo: 'A Janela Secreta',
        descricao: 'Mort Rainey é um escritor em crise, que acaba de se separar de sua esposa após tê-la flagrado com outro homem. Mort decide se isolar em uma cabana à beira do lago Tashmore, em busca de tranquilidade. Porém lá aparece John Shooter, que começa a atormentá-lo ao acusá-lo seguidamente de plágio',
        imdb: 'tt0363988',
        imagem: 'https://image.tmdb.org/t/p/w300/dJ2XE9EQVixJVLfMUSF85E4TiaA.jpg'
    },
    {
        titulo: 'Alexandre e o Dia Terrível, Horrível, Espantoso e Horroroso',
        descricao: 'Alexandre é um garoto de 11 anos que enfrenta o pior dia de sua vida. Primeiro, ele acorda com chiclete grudado em seu cabelo. Na hora de se vestir, ele tropeça e deixa cair sua malha na pia cheia de água. No café da manhã, seus irmãos encontram belos prêmios na caixa de cereal, mas Alexander não encontra nada. O resto do dia reserva muitas outras más notícias e acontecimentos ruins.',
        imdb: 'tt1698641',
        imagem: 'https://image.tmdb.org/t/p/w300/7DhdFeIxE9zCnjF7qGkjNxHQIr9.jpg'
    },
    {
        titulo: 'Se Algo Acontecer... Te Amo',
        descricao: 'Pais enlutados lutam com a perda de sua filha após um tiroteio na escola. Uma elegia ao luto.  O filme foi produzido pela Gilbert Films e Oh Good Productions.',
        imdb: 'tt11768948',
        imagem: 'https://image.tmdb.org/t/p/w300/81sFRZluM59eRmvhNMSPQItRfOV.jpg'
    },
    {
        titulo: 'Indiana Jones e A Relíquia do Destino',
        descricao: 'Encontrando-se em uma nova era, aproximando-se da aposentadoria, Indy luta para se encaixar em um mundo que parece tê-lo superado. Mas quando os tentáculos de um mal muito familiar retornam na forma de um antigo rival, Indy deve colocar seu chapéu e pegar seu chicote mais uma vez para garantir que um antigo e poderoso artefato não caia nas mãos erradas.',
        imdb: 'tt1462764',
        imagem: 'https://image.tmdb.org/t/p/w300/9EnfMH0nTPCna87Mh3G8Q6W2wze.jpg'
    },
    {
        titulo: 'O Nascimento do Mal',
        descricao: 'Depois de anos tentando desesperadamente criar uma família, Julie (Melissa Barrera) está finalmente grávida de novo e se mudando para uma nova casa com seu marido Daniel (Guy Burnet). Ambos estão ansiosos para um novo começo. Quando Julie é colocada em repouso absoluto na cama, ela lentamente começa ser consumida pela monotonia e a ansiedade de suas novas compulsões. Experiências horríveis e assustadoras no apartamento logo começam a cair sobre Julie, despertando demônios de seu passado e fazendo com que outras pessoas questionem sua sanidade. Presa e forçada a enfrentar seu passado e o sobrenatural, Julie luta para proteger a si mesma e a seu bebê ainda não nascido.',
        imdb: 'tt4896168',
        imagem: 'https://image.tmdb.org/t/p/w300/dyZF3BqHD24J4UTdwK8OMuK5mfI.jpg'
    },
    {
        titulo: 'Nimona',
        descricao: 'Um cavaleiro acusado de um crime terrível recorre a uma adolescente que muda de forma para provar sua inocência.  Mas e se ela for o monstro que ele jurou destruir?',
        imdb: 'tt19500164',
        imagem: 'https://image.tmdb.org/t/p/w300/dHFUte9BLYhihC9YqKWyxmWXnZu.jpg'
    },
    {
        titulo: 'O Amor Mandou Mensagem',
        descricao: 'Mira Ray, ainda tentando superar a morte de seu noivo, manda uma série de mensagens para seu número antigo, não sabendo que o mesmo foi transferido para Rob Burns, um jornalista. Ele acaba ficando intrigado e cativado pelas mensagens românticas. Quando é designado a escrever um perfil da cantora Celine Dion, ele pede conselhos a artista em como pode conhecer Mira pessoalmente (sem ser esquisito) e conquistar seu coração.',
        imdb: 'tt10276482',
        imagem: 'https://image.tmdb.org/t/p/w300/s3SntheUQWJysPSZGcegQj473Pq.jpg'
    },
    {
        titulo: 'Awake',
        descricao: 'O caos se instala no planeta depois que um acontecimento global neutraliza todos os equipamentos eletrônicos e acaba com a capacidade humana de dormir. Mas Jill (Gina Rodriguez), uma ex-militar com um passado problemático, pode ter a chave para a cura: sua própria filha.',
        imdb: 'tt10418662',
        imagem: 'https://image.tmdb.org/t/p/w300/uZkNbB8isWXHMDNoIbqXvmslBMC.jpg'
    },
    {
        titulo: 'Através da Minha Janela: Além-mar',
        descricao: 'Raquel e Ares enfrentam mais desafios em seu relacionamento agora que moram e estudam em países diferentes.',
        imdb: 'tt21245882',
        imagem: 'https://image.tmdb.org/t/p/w300/252wEUZ6lr4a5sF7DUzRRH3iGEO.jpg'
    },
    {
        titulo: 'Elementos',
        descricao: 'Em uma cidade onde moradores do fogo, da água, da terra e do ar vivem juntos, uma jovem impetuosa e um homem tranquilo estão prestes a descobrir algo elementar: o quanto realmente têm em comum.',
        imdb: 'tt15789038',
        imagem: 'https://image.tmdb.org/t/p/w300/88OGFOcFI04CL4uucb6I7ZzUqD6.jpg'
    },
    {
        titulo: 'Rye Lane: Um Amor Inesperado',
        descricao: 'Dois jovens, na casa dos vinte, abalados com seus términos e que se conectam em um dia agitado no sul de Londres, se ajudando a lidar com o pesadelo que são seus ex enquanto recuperam a fé no romance."',
        imdb: 'tt15893750',
        imagem: 'https://image.tmdb.org/t/p/w300/ljqrimXtkF47gSKcDyVLZ03ctYG.jpg'
    },
    {
        titulo: 'Viva o México!',
        descricao: 'Pancho volta à sua cidade natal com a esposa e os filhos para receber a herança deixada pelo avô. Mas seus parentes não vão deixar barato.',
        imdb: 'tt22185848',
        imagem: 'https://image.tmdb.org/t/p/w300/mZWLkJQeVy990LMFGlFJphOaioh.jpg'
    },
    {
        titulo: 'Pray Away',
        descricao: 'Sobreviventes e ex-líderes do movimento da "terapia de conversão" falam sobre seus efeitos nocivos sobre a comunidade LGBTQIAP+ e a terrível persistência da prática.',
        imdb: 'tt11224358',
        imagem: 'https://image.tmdb.org/t/p/w300/1wikrtZZZoThwnHulB7klQek4Ai.jpg'
    },
    {
        titulo: 'Um Ano Inesquecível - Outono',
        descricao: 'Anna Júlia e João Paulo são o típico casal improvável: ela odeia música e tudo que mais quer é um estágio e estabilidade para ajudar o pai em casa. Ele é um jovem músico de rua que sonha em viver da sua arte. Mesmo assim, a paixão entre os dois acontece, e em um dos lugares mais simbólicos de São Paulo: a Avenida Paulista. A movimentada capital é o cenário ideal para a desafiadora jornada que ambos terão que enfrentar para ficar juntos.',
        imdb: 'tt27856735',
        imagem: 'https://image.tmdb.org/t/p/w300/bIco5SOsxCHiLVOIVxKwV3axT1K.jpg'
    },
    {
        titulo: 'Por Que Você Me Matou?',
        descricao: 'Em busca de justiça e vingança, uma família usa as redes sociais para encontrar as pessoas que mataram a filha de 24 anos.',
        imdb: 'tt14318430',
        imagem: 'https://image.tmdb.org/t/p/w300/u2eBUmtBLTzb0M2BDxuNqB9trlz.jpg'
    },
    {
        titulo: 'No Caminho da Cura',
        descricao: 'Homens que sofreram abusos sexuais por membros da igreja católica buscam a cura para seus traumas.',
        imdb: 'tt14300912',
        imagem: 'https://image.tmdb.org/t/p/w300/1t1bf7upwyEDq0OGpz0DvNhk7Ki.jpg'
    },
    {
        titulo: 'Hipnótico',
        descricao: 'Enquanto busca incansavelmente por sua filha desaparecida, o detetive Danny Rourke se vê envolvido em uma conspiração criminosa que desafia a realidade.',
        imdb: 'tt8080204',
        imagem: 'https://image.tmdb.org/t/p/w300/3IhGkkalwXguTlceGSl8XUJZOVI.jpg'
    },
    {
        titulo: 'A Mãe do Ano',
        descricao: 'A ex-agente especial Nina volta para a ativa depois que o filho que ela nunca teve a chance de conhecer é sequestrado.',
        imdb: 'tt19724192',
        imagem: 'https://image.tmdb.org/t/p/w300/3kTffR2pOxjwVP1qI5RwWnktI4y.jpg'
    },
    {
        titulo: 'Levo Você Comigo',
        descricao: 'Baseado em uma história real, este romance de décadas entre um aspirante a chef e um professor segue sua jornada traiçoeira do México a Nova York com sonhos, esperanças e memórias a reboque.',
        imdb: 'tt11388990',
        imagem: 'https://image.tmdb.org/t/p/w300/4AiQsYiuqaxAIjXqfJImGnLjEA3.jpg'
    },
    {
        titulo: 'Black Clover: A Espada do Rei Mago',
        descricao: 'Um garoto destemido e sem poderes mágicos luta pelo título de Rei Mago – enfrentando quatro rivais que foram banidos e agora ameaçam destruir o Reino Clover.',
        imdb: 'tt22868844',
        imagem: 'https://image.tmdb.org/t/p/w300/5KK0FJGdZI7jMhfwyJTg1LGR2z8.jpg'
    },
    {
        titulo: 'Minha Culpa',
        descricao: 'Noah é obrigada a mudar de cidade, deixando seus amigos e namorado para trás, após sua mãe se casar com um novo marido rico. Lá ela conhece Nick, seu novo meio-irmão, e os dois se apaixonam loucamente, vivendo um grande romance proibido.',
        imdb: 'tt21909764',
        imagem: 'https://image.tmdb.org/t/p/w300/a59iGvF609yAZ5tfZUoQ3XipeQH.jpg'
    }, 
    {
        titulo: 'Resgate 2',
        descricao: 'Depois de escapar da morte por um triz, o mercenário Tyler Rake encara mais uma missão perigosa: resgatar a família de um criminoso implacável.',
        imdb: 'tt12263384',
        imagem: 'https://image.tmdb.org/t/p/w300/AfwqKLQwjgPu8bIL1mqhHTlnQv0.jpg'
    },
    {
        titulo: 'Chef Jack: O Cozinheiro Aventureiro',
        descricao: 'Chef jack e Leonard irão cruzar as Ilhas Culinárias para completar as provas da “Convergência de Sabores”, a maior competição gastronômica do mundo e tentar vencer seus concorrentes.',
        imdb: 'tt24067350',
        imagem: 'https://image.tmdb.org/t/p/w300/4gIHOuxO94QJ6Bg7e1kNuiHdKQ.jpg'
    },
    {
        titulo: 'Seja Você Mesma',
        descricao: 'Merve se apaixonou pela vida boêmia, mas não foi correspondida. Prestes a ser despejada, ela tem que trabalhar e se envolve em uma situação complicada com o chefe.',
        imdb: 'tt19121700',
        imagem: 'https://image.tmdb.org/t/p/w300/7J4cEAWO5tI4UaSDXU7VVFWXZ4.jpg'
    },
    {
        titulo: 'Ilusões Perdidas',
        descricao: 'Lucien é um jovem poeta desconhecido da França do século XIX. Ele tem grandes esperanças e quer escolher seu destino. Ele larga a gráfica de sua província natal para tentar a sorte em Paris, nos braços de sua protetora. Logo deixado por conta própria na fabulosa vila, o jovem rapaz vai descobrir os bastidores de um mundo condenado à lei do lucro e das falsidades. Uma comédia humana na qual tudo se compra e se vende, da literatura à imprensa, da política aos sentimentos, das reputações às almas. Ele vai amar, sofrer, e sobreviver às suas ilusões.',
        imdb: 'tt10505316',
        imagem: 'https://image.tmdb.org/t/p/w300/6ovwvY0NajegyC2xtwxD9GEhdFp.jpg'
    },
    {
        titulo: 'Black Friday',
        descricao: 'Um grupo de empregados de uma loja de brinquedos deve proteger-se mutuamente de uma horda de compradores infectados por parasitas.',
        imdb: 'tt11649338',
        imagem: 'https://image.tmdb.org/t/p/w300/vf9Ex4EwSPlwbva4ZJdljsQQOML.jpg'
    },
    {
        titulo: 'Barba, Cabelo & Bigode',
        descricao: 'Na tentativa de salvar o salão da mãe da falência, um filho dedicado descobre que tem muito talento para ser barbeiro e atrai clientes de toda a periferia',
        imdb: 'tt21265550',
        imagem: 'https://image.tmdb.org/t/p/w300/jvLZHjiJRj2uefPoBlBaF0ohxsL.jpg'
    },
    {
        titulo: 'Dois Doidões em Harvard 2',
        descricao: 'Dois viciados preguiçosos embarcam em uma aventura alucinante para encontrar sua reserva roubada e a bíblia da erva com a receita do melhor broto.',
        imdb: 'tt8861802',
        imagem: 'https://image.tmdb.org/t/p/w300/z9NjhugUtE0Fm2TCEU6wk1rjYqu.jpg'
    },
    {
        titulo: 'Dois Doidões em Harvard',
        descricao: 'Silas (Method Man) e Jamal (Redman) estão bastante tensos na hora de fazer um exame que irá decidir em qual faculdade eles poderão ingressar. Para “relaxar” um pouco, os dois colegas decidem puxar um fumo antes da prova. A fumaça mágica que sai de seus baseados evoca o fantasma de Ivory (Chuck Davis), um outro colega de fumo que havia morrido recentemente. Bem relacionado com todos os espíritos inteligentes “do outro lado”, Ivory ajuda os amigos na hora do exame, e ambos são aprovados com nota máxima. Como prêmio, eles são convidados a entrar na prestigiada Universidade de Harvard, um lugar repleto de ricaços, brancos e mauricinhos. Silas e Jamal, sempre auxiliados pelo fantasma de Ivory, vão deixar a Universidade de cabeça para baixo.',
        imdb: 'tt0278488',
        imagem: 'https://image.tmdb.org/t/p/w300/lRWYv3GhHPz9ONTnLuGx790vKE8.jpg'
    },
    {
        titulo: 'Uma Linda Vida',
        descricao: 'Um jovem pescador se transforma em uma revelação musical, mas seu passado é um obstáculo. Será que ele consegue superar seus traumas e conquistar a fama e o amor?',
        imdb: 'tt15282148',
        imagem: 'https://image.tmdb.org/t/p/w300/oBnrrPcR6W4i58Ke9uZGWpiIl4G.jpg'
    },
    {
        titulo: 'A Festa de Formatura',
        descricao: 'Um grupo de atores veteranos da Broadway vão sem aviso a uma festa de final de ano de uma escola que não permitiu que uma de suas alunas fosse ao baile acompanhada de sua namorada.',
        imdb: 'tt10161886',
        imagem: 'https://image.tmdb.org/t/p/w300/A5P45oHuKIuMD1YYtksPuJ7sveQ.jpg'
    },
    {
        titulo: 'The Flash',
        descricao: 'Acompanhe as aventuras do homem mais veloz do planeta, o cientista da Central City Police Barry Allen, que após um trágico acidente adquire o poder da velocidade.',
        imdb: 'tt0439572',
        imagem: 'https://image.tmdb.org/t/p/w300/gCp4ATDNhhZyxZiLYkpQlMEiWWG.jpg'
    },
    {
        titulo: 'Transformers: O Despertar das Feras',
        descricao: 'Transformers: O Despertar das Feras traz mais uma aventura épica pelo universo dos transformers. Ambientada nos anos 1990, o filme apresentará os Maximals, Predacons e Terrorcons à batalha existente na Terra entre Autobots e Decepticons.',
        imdb: 'tt5090568',
        imagem: 'https://image.tmdb.org/t/p/w300/zEqwfO5R2LrrLgV61xm8M9TmNTG.jpg'
    },
    {
        titulo: 'Homem-Aranha: Através do Aranhaverso',
        descricao: 'Miles Morales retorna para o próximo capítulo da saga do Aranhaverso, uma aventura épica que transportará o Homem-Aranha em tempo integral e amigável do bairro do Brooklyn através do Multiverso para unir forças com Gwen Stacy e uma nova equipe de Homens-Aranha para enfrentar com um vilão mais poderoso do que qualquer coisa que eles já encontraram.',
        imdb: 'tt9362722',
        imagem: 'https://image.tmdb.org/t/p/w300/6a7NItazspSV8Fl7u46ccxwPKk4.jpg'
    },
    {
        titulo: 'Terra dos Sonhos',
        descricao: 'Uma destemida jovem órfã embarca em uma jornada pela terra dos sonhos para encontrar uma pérola mágica e realizar seu maior desejo.',
        imdb: 'tt13320662',
        imagem: 'https://image.tmdb.org/t/p/w300/pKul2I03FI6QYxHnhMOkQ72EDPE.jpg'
    },
    {
        titulo: 'A Última Festa',
        descricao: 'Um grupo de quatro amigos em sua festa de formatura do Ensino Médio. Cada protagonista com seu dilema amoroso para resolver ao longo da noite, todos conectados pelas questões dessa geração. É a última noite enquanto adolescentes. A última noite com os amigos antes da separação por diferentes faculdades. A última noite antes do resto de suas vidas.',
        imdb: 'tt22012140',
        imagem: 'https://image.tmdb.org/t/p/w300/hIu8sxTz6YPRI30do9ZkTZ9JV00.jpg'
    },
    {
        titulo: 'A Extorsão',
        descricao: 'Guillermo Francella é Alejandro, um experiente piloto à beira da aposentadoria, chantageado e forçado a levar uma misteriosa carga de Buenos Aires a Madri para não ser penalizado por um grave erro que cometeu no trabalho.',
        imdb: 'tt14803538',
        imagem: 'https://image.tmdb.org/t/p/w300/wAQvIuLJRFo0LCr0gLQTng9KRco.jpg'
    },
    {
        titulo: 'Homens Brancos Não Sabem Enterrar',
        descricao: 'Neste remake moderno do filme icônico, Jeremy, ex-astro do basquete cujas lesões paralisaram sua carreira, junta-se a Kamal, um jogador promissor que estragou seu próprio futuro no esporte. Equilibrando relacionamentos delicados, pressões financeiras e conflitos internos, esses jogadores de basquete de rua aparentemente opostos se unem numa última tentativa de viver seus sonhos.',
        imdb: 'tt6436620',
        imagem: 'https://image.tmdb.org/t/p/w300/jK3nu1ZvjmQXOVhNz2OcdmF9nE9.jpg'
    },
    {
        titulo: 'Fiéis',
        descricao: 'Duas amigas criam uma complicada rede de mentiras, mas tudo vem à tona depois que uma delas desaparece.',
        imdb: 'tt20119468',
        imagem: 'https://image.tmdb.org/t/p/w300/tRIiyvty7h6d9F5Al2nxcxwI09f.jpg'
    },
    {
        titulo: 'Nina Para Sempre',
        descricao: 'Depois que o amor de sua vida, Nina, morre tragicamente em um acidente de carro, Rob tenta sem sucesso tirar a própria vida. Conforme ele aprende a lidar com sua dor, ele acaba se apaixonando por uma colega de trabalho, Holly. O relacionamento deles fica complicado quando Nina, incapaz de encontrar descanso na vida após a morte, volta para atormentá-los sempre que fazem sexo. Rob e Holly procuram desesperadamente uma maneira de lidar com seu estranho trio para que Nina possa finalmente descansar para sempre.',
        imdb: 'tt2885628',
        imagem: 'https://image.tmdb.org/t/p/w300/l6fIaMjMx4bCHLvgCcnNfWctfm2.jpg'
    },
    {
        titulo: 'Noites Alienígenas',
        descricao: '"Noites Alienígenas" expõe uma Amazônia urbana, onde a ancestralidade dos povos tradicionais resiste à contemporaneidade que insiste em negar a floresta. Com elementos narrativos fantasiosos, o longa apresenta a história de três personagens da periferia de Rio Branco, impactados pelo conflito entre facções criminosas e pela violência urbana, que, nos últimos dez anos, quase triplicou o assassinato de crianças e jovens no Estado do Acre.',
        imdb: 'tt17370648',
        imagem: 'https://image.tmdb.org/t/p/w300/ersvxPWpGg92UNjaeqoZ70znevK.jpg'
    },
    {
        titulo: 'Tempestade Infinita',
        descricao: 'Ao subir o Monte Washington em Nova Hampshire, uma experiente alpinista decide voltar antes de chegar ao cume enquanto uma nevasca se aproxima. Mas ao descer, ela encontra um homem sozinho e desamparado, e se encarrega de tirar os dois da montanha antes que anoiteça e eles sucumbam à tempestade. Baseado em uma história real.',
        imdb: 'tt14060232',
        imagem: 'https://image.tmdb.org/t/p/w300/jYN6Ezx8jm8BI6g2PANVvmUST3p.jpg'
    },
    {
        titulo: 'Quem Fica com o Bar?',
        descricao: 'Depois do seu término, Nina e Allen dividiram amigavelmente todos os seus pertences, exceto pelo seu bar preferido. Com a ajuda de amigos e dos funcionários, o ex-casal faz uma competição ridícula para decidir quem ficará com o lugar.',
        imdb: 'tt15250656',
        imagem: 'https://image.tmdb.org/t/p/w300/sicJmpsyetX00Bpu8UmoSawxyel.jpg'
    },
    {
        titulo: 'Meu Nome é Chihiro',
        descricao: 'Uma ex-acompanhante irreverente começa a trabalhar no restaurante de uma cidadezinha do litoral e alegra a todos que cruzam o seu caminho.',
        imdb: 'tt21825858',
        imagem: 'https://image.tmdb.org/t/p/w300/hkvq6vqz6j1gSojBYkpTjSauFZD.jpg'
    },
    {
        titulo: 'Uma Garota de Muita Sorte',
        descricao: 'Uma mulher de sucesso na cidade de Nova York vê sua vida virada de cabeça para baixo quando é forçada a enfrentar uma verdade sombria que ameaça desvendar sua vida meticulosamente trabalhada.',
        imdb: 'tt4595186',
        imagem: 'https://image.tmdb.org/t/p/w300/9qJOLqZ7Gcx8HeCkt5iYqEyMjJs.jpg'
    },
    {
        titulo: 'Viagem Entre Estranhos',
        descricao: 'Quatro desconhecidos se encontram no centro de Madri para ir de carro a Cieza graças a um aplicativo de compartilhamento de caronas. Tudo transcorre normalmente, mas o motorista parece estar escondendo alguma coisa e se comporta de forma estranha.',
        imdb: 'tt11645056',
        imagem: 'https://image.tmdb.org/t/p/w300/ooTkGnu4P6fc4mlxtA8JXP4U2OV.jpg'
    },
    {
        titulo: 'Um Homem de Ação',
        descricao: 'Inspirado na vida de Lucio Urtubia, Um Homem de Ação explora a figura do anarquista espanhol que colocou em prática uma lucrativa operação de falsificação de cheques de viagem e entrou na mira do maior banco dos Estados Unidos.',
        imdb: 'tt12703292',
        imagem: 'https://image.tmdb.org/t/p/w300/lMNgLp0LdUO6tLIUy43aSoIayxV.jpg'
    },
    {
        titulo: 'Tudo Sobre Sexo',
        descricao: 'Sage, Morgan e Casey, três amigas na casa dos vinte e poucos anos, lutam para equilibrar suas vidas profissionais e pessoais. Com muito bom humor e um toque de sexo, elas enfrentam as dores crescentes, confusas, hilárias e terríveis da idade adulta.',
        imdb: 'tt9730822',
        imagem: 'https://image.tmdb.org/t/p/w300/jctlbKSXur5YRF7VpM1Jfla6AwY.jpg'
    },
    {
        titulo: 'They/Them: O Acampamento',
        descricao: 'Vários campistas queer e trans se reúnem em um acampamento para uma semana de programação destinada a ajudá-los a encontrar ‘uma nova sensação de liberdade’. À medida que os métodos do acampamento se tornam cada vez mais psicologicamente perturbadores, os campistas devem trabalhar juntos para se proteger. Quando um misterioso assassino começa a fazer vítimas, as coisas ficam ainda mais perigosas.',
        imdb: 'tt14502344',
        imagem: 'https://image.tmdb.org/t/p/w300/n6QwqjxAu4ly5PB4IHVFJ5CHPbS.jpg'
    },
    {
        titulo: 'O Livro dos Prazeres',
        descricao: 'Lóri é uma professora na casa dos 30 anos que não se aprofunda nas suas relações. Conhece e deseja Ulisses, professor de filosofia mais velho que lhe ensina a viver o amor, dizendo que aguardará até que ela esteja pronta.',
        imdb: 'tt13350988',
        imagem: 'https://image.tmdb.org/t/p/w300/ahQ7b9yJzSpxlPGLYhwZuYctvb8.jpg'
    },
    {
        titulo: 'Hormônios à Flor da Pele',
        descricao: 'Enquanto tentam sobreviver ao ensino médio, Charly e Paula vivem os hormônios à flor da pele e o medo de perder a amizade se revelarem o que sentem um pelo outro.',
        imdb: 'tt20256412',
        imagem: 'https://image.tmdb.org/t/p/w300/xpDndQSw95YOIq5a3RSTo9ZZavw.jpg'
    },
    {
        titulo: 'O Time da Redenção',
        descricao: 'Após o fiasco nos Jogos Olímpicos de 2004, o time de basquete masculino dos EUA busca a redenção e parte para a briga pelo ouro nos Jogos de Pequim de 2008.',
        imdb: 'tt21837726',
        imagem: 'https://image.tmdb.org/t/p/w300/8G9XOb9bO9LusWEI2dOAyaCf8Bb.jpg'
    },
    {
        titulo: 'Os 800',
        descricao: 'Durante a Batalha de Xangai em 1937, quando um grupo de soldados chineses lutaram para defender o armazém de Sihang, ondas de forças japonesas avançavam, cercando oitocentos soldados chineses.',
        imdb: 'tt7294150',
        imagem: 'https://image.tmdb.org/t/p/w300/mx0PP392PYCZ4x0xNryO5ry637X.jpg'
    },
    {
        titulo: 'Perseguição às Bruxas',
        descricao: 'Em uma América moderna onde as bruxas são reais e a bruxaria ilegal, uma adolescente deve enfrentar seus demônios, pois ela ajuda duas bruxas jovens a evitar a aplicação da lei e cruzar a fronteira sul para obter asilo no México.',
        imdb: 'tt10160974',
        imagem: 'https://image.tmdb.org/t/p/w300/8L7u2Bh0y9QCf0bO0K0y7gzytaK.jpg'
    },
    {
        titulo: 'Meu Nome é Vingança',
        descricao: 'Sofia era uma adolescente como qualquer outra, que gostava de dividir seu tempo livre entre partidas de hóquei e aulas de direção off-road — até o dia em que ela desobedece às ordens do pai e posta, em segredo, uma foto dele no Instagram. Mal sabia ela que aquele post mudaria as vidas deles para sempre. Seguindo as pistas no mundo online, dois criminosos conseguem encontrar a casa da família e acabam assassinando, a sangue frio, a mãe e o tio da jovem. A tragédia vai dar início a um acerto de contas que estava dormente por quase vinte anos.',
        imdb: 'tt15229674',
        imagem: 'https://image.tmdb.org/t/p/w300/tlZGDi8anF7Fcs5HGVaTEMnv1hp.jpg'
    },
    {
        titulo: 'Os Suburbanos: O Filme',
        descricao: 'O suburbano Jeferson de Souza dos Santos faz de tudo para encontrar o sucesso como cantor em uma banda de pagode. Tendo que se dividir entre limpar a piscina do dono de uma gravadora, ter um caso tórrido com a esposa dele, se ver envolvido num golpe e ainda aceitar as novidades na família, Jefinho ainda arranja tempo para compor a canção que alavancará definitivamente sua carreira musical, o hit instantâneo “Xavasca Guerreira”.',
        imdb: 'tt21990918',
        imagem: 'https://image.tmdb.org/t/p/w300/wosEdGvBzt8nVLHAJ9cljfo0AEG.jpg'
    },
    {
        titulo: 'Os 13 Sobreviventes da Caverna',
        descricao: 'Neste documentário cativante, os jovens de uma equipe juvenil de futebol contam como conseguiram sobreviver depois de ficarem presos na caverna Tham Luang em 2018.',
        imdb: 'tt22029210',
        imagem: 'https://image.tmdb.org/t/p/w300/xF55KYpT70qho6PkJf4NQpgjNdL.jpg'
    },
    {
        titulo: 'O Skate Me Levou',
        descricao: 'O Documentário conta a trajetória de vida de Roger Mancha, que hoje é técnico da Seleção Brasileira de Skate. Mancha é um dos skatista mais importantes do Skate Brasileiro, responsável por elevar o nível do carrinho em terras tupiniquins, andando em transições, ruas, de base ou de switchstance. Mancha fez parte de equipes icônicas como a internacional City Stars.',
        imdb: 'None',
        imagem: 'https://image.tmdb.org/t/p/w300/9Rckj6QGD9eadX8VSsOM2lD4gT3.jpg'
    },
    {
        titulo: 'O Perdoado',
        descricao: 'Viajando pelo deserto marroquino para participar da luxuosa festa de fim de semana de um velho amigo, os ricos londrinos David (Ralph Fiennes) e Jo (Jessica Chastain) se envolvem em um trágico acidente com um adolescente local. Chegando tarde na grande vila, o casal tenta encobrir o incidente com a polícia local. Mas quando o pai do garoto chega em busca de justiça, um confronto tenso forçará David e Jo a aceitar seu ato e enfrentar as consequências.',
        imdb: 'tt3696180',
        imagem: 'https://image.tmdb.org/t/p/w300/6qDIG0G0ARjgej8pOoazZqzi3Uz.jpg'
    },
    {
        titulo: 'O Assassino da Internet',
        descricao: 'Baseado em uma história real, este suspense acompanha a história de um estudante de medicina cuja vida perfeita é um disfarce para sua obsessão assassina por mulheres.',
        imdb: 'tt1772373',
        imagem: 'https://image.tmdb.org/t/p/w300/nIqPClkwweKvqfFU6xsP3L2pxuT.jpg'
    },
    {
        titulo: 'Nove Dias',
        descricao: 'Em uma casa distante da realidade que conhecemos, um homem recluso entrevista possíveis almas humanas, candidatas para renascer.',
        imdb: 'tt10451852',
        imagem: 'https://image.tmdb.org/t/p/w300/oMlyNKkdBCJX2t1zKy8dl8t2BXS.jpg'
    },
    {
        titulo: 'Natureza Selvagem',
        descricao: 'Oito adolescentes mantidos em campos de concentração nazistas são libertados por russos. Eles são entregues aos cuidados de Jadwiga num local abandonado na floresta polonesa e, além de carregarem diversos traumas, terão que enfrentar fome, sede e um grupo de violentos lobos.',
        imdb: 'tt7203520',
        imagem: 'https://image.tmdb.org/t/p/w300/89vDPAvu2a02spYKrXxEv45IL6i.jpg'
    },
    {
        titulo: 'Nossa Mãe é Para Sempre',
        descricao: 'Um ano após a sua morte, uma mãe superprotetora visita seus três filhos durante as festividades do Día de Muertos. Decepcionada com o que vê, ela decide testar os limites da vida após a morte para colocá-los de volta nos trilhos.',
        imdb: 'tt17371682',
        imagem: 'https://image.tmdb.org/t/p/w300/coPl2pKqOtwiq7HttcUlrkYe1y3.jpg'
    },
    {
        titulo: 'Noite de Sustos',
        descricao: 'Quando uma loja de Halloween abre em um shopping deserto deserto, três amigos, pensando que já superaram as gostosuras ou travessuras, decidem passar a noite trancados lá dentro. Mas sua noite de diversão cheia de sustos logo se transforma em sobrevivência bizarra.',
        imdb: 'tt11426228',
        imagem: 'https://image.tmdb.org/t/p/w300/jaMEBAjQpJdbBZzORtr92E5Rldd.jpg'
    },
    {
        titulo: 'Milagre na Caverna',
        descricao: 'Quando um time de futebol juvenil de 12 meninos, de 11 a 16 anos, e seu técnico de 25 anos estão presos no fundo de uma caverna no norte da Tailândia, milhares de voluntários e soldados de todo o mundo se unem em uma corrida contra o tempo para encontrá-los . Uma vez que os meninos são encontrados vivos dez dias depois, a única saída é um mergulho-mergulho impossível de cinco horas que apenas mergulhadores de caverna experientes poderiam sobreviver. Na Irlanda, Jim Warny, eletricista de fábrica de aviões e mergulhador recreativo de cavernas, recebe a ligação: "Quando você pode estar aqui?" Chegando à Tailândia, Jim sai do avião e entra na caverna - uma missão de três dias no fio da navalha está em andamento. Baseado em eventos reais.',
        imdb: 'tt8726180',
        imagem: 'https://image.tmdb.org/t/p/w300/7GbYdBcgn0RxRkEesZ1H3f6xI2z.jpg'
    },
    {
        titulo: 'Amor Em Grande Estilo',
        descricao: 'Ella trabalha como costureira freelancer em uma revista de moda de alto perfil, e conhece o belo e charmoso Derek, que está prestes a assumir o negócio de revistas de seu pai.',
        imdb: 'tt21653744',
        imagem: 'https://image.tmdb.org/t/p/w300/5gXKzzbIEast05swrejhQu4J5rz.jpg'
    },
    {
        titulo: 'Tin & Tina',
        descricao: 'Um casal que sofreu um aborto traumático decide adotar dois gêmeos que viviam em um convento. Só que a obsessão das crianças pela religião começa a incomodar.',
        imdb: 'tt7354440',
        imagem: 'https://image.tmdb.org/t/p/w300/gwVAb3hMYl5F68mvKGl2eqDOj0G.jpg'
    },
    {
        titulo: 'Orgulho e Preconceito: Tornando-se Elizabeth Bennet',
        descricao: 'A aspirante a atriz Kate Miller é uma popular celebridade da internet nos Estados Unidos, fazendo vídeos para seus milhares de seguidores. Após conseguir o papel de sua vida ao ser escalada para interpretar Elizabeth Bennet em uma nova adaptação cinematográfica do famoso romance "Orgulho e Preconceito", Kate tem dificuldade em aprender o sotaque britânico necessário para o sucesso de sua atuação. Até que ela conhece Will, o ator britânico com formação clássica que interpreta seu par no filme.',
        imdb: 'tt7919184',
        imagem: 'https://image.tmdb.org/t/p/w300/sxznJhZRFvxDMzy8tLGv5Eitdw9.jpg'
    },
    {
        titulo: 'La Situación',
        descricao: 'Três amigas em busca de uma misteriosa herança na Argentina. Elas passam por uma sequência de perrengues e situações perigosas e ao mesmo tempo hilárias, ao se envolverem sem saber com traficantes locais.',
        imdb: 'tt22651782',
        imagem: 'https://image.tmdb.org/t/p/w300/3BNqD7CtGlEjwbSshW5cPAc3Qec.jpg'
    },     
];

// Função para buscar filmes
function searchMovies() {
    var searchTerm = document.getElementById('search-box').value.toLowerCase();
    var results = filmes.filter(function (filme) {
        return filme.titulo.toLowerCase().includes(searchTerm) || filme.descricao.toLowerCase().includes(searchTerm);
    });

    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Limpa os resultados anteriores

    results.forEach(function (filme) {
        var movieBox = document.createElement('div');
        movieBox.classList.add('col', 'mt-3');
        movieBox.innerHTML = `
            <div class="media-box">
                <a onclick="openMovie('${filme.titulo}', 'https://embedder.net/e/movie?imdb=${filme.imdb}')" class="full-click"></a>
                <div class="media-thumb" style="background-image: url(${filme.imagem});"></div>
                <a onclick="openMovie('${filme.titulo}', 'https://embedder.net/e/movie?imdb=${filme.imdb}')" class="media-play"><i class="icofont-ui-play"></i></a>
                <div class="media-info">
                    <h5 class="media-box-title">${filme.titulo}</h5>
                </div>
            </div>
        `;
        searchResults.appendChild(movieBox);
    });
}

// Chama a função de busca quando o conteúdo da caixa de texto muda
document.getElementById('search-box').addEventListener('input', searchMovies);
