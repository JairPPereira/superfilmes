
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
    {
        titulo: 'A Pequena Sereia',
        descricao: 'Descrição do filme 1',
        imdb: 'tt5971474',
        imagem: 'https://image.tmdb.org/t/p/w300/85u2q8iUBDq2gj5iJrdD4lzckRq.jpg'
    },
    {
        titulo: 'O Diário da Princesa',
        descricao: 'Descrição do filme 2',
        imdb: 'tt0247638',
        imagem: 'https://image.tmdb.org/t/p/w300/lT45oWEZVntdoibp4oEXE4ngTTa.jpg'
    },
    {
        titulo: 'O Diário da Princesa 2: Casamento Real',
        descricao: 'Descrição do filme 3',
        imdb: 'tt0368933',
        imagem: 'https://image.tmdb.org/t/p/w300/5MoDnvPW64Sfw3QZ6ADnCYopnTv.jpg'
    },
    {
        titulo: 'Garota vs. Monstro',
        descricao: 'Descrição do filme 4',
        imdb: 'tt2326087',
        imagem: 'https://image.tmdb.org/t/p/w300/nJxRRX2IaBF5tpzTrpPTRFXX2bY.jpg'
    },
    {
        titulo: 'Programa de Proteção para Princesas',
        descricao: 'Descrição do filme 5',
        imdb: 'tt1196339',
        imagem: 'https://image.tmdb.org/t/p/w300/zuQDHKbFgtBMtFqUMX0J8orEfAT.jpg'
    },
    {
        titulo: 'Lemonade Mouth: Uma Banda Diferente',
        descricao: 'Descrição do filme 6',
        imdb: 'tt1648204',
        imagem: 'https://image.tmdb.org/t/p/w300/q5OCL75RKk4D21u4QkGCJVYpEyH.jpg'
    },
    {
        titulo: 'Freaky Friday: Sexta-Feira Muito Louca',
        descricao: 'Descrição do filme 7',
        imdb: 'tt7631348',
        imagem: 'https://image.tmdb.org/t/p/w300/zhu2Qy6S7dX204NXsUxToY2Njv.jpg'
    },
    {
        titulo: 'Hércules',
        descricao: 'Descrição do filme 8',
        imdb: 'tt0119282',
        imagem: 'https://image.tmdb.org/t/p/w300/gKwBRP5o8t6BpUfSeIy09q9AiH0.jpg'
    },
    {
        titulo: 'Sexta-Feira Muito Louca',
        descricao: 'Descrição do filme 9',
        imdb: 'tt0322330',
        imagem: 'https://image.tmdb.org/t/p/w300/zcCZ7LaN6Ly20Tu6Hdw44RRiBEI.jpg'
    },
    {
        titulo: 'La La Land: Cantando Estações',
        descricao: 'Descrição do filme 10',
        imdb: 'tt3783958',
        imagem: 'https://image.tmdb.org/t/p/w300/AvMietG6xuobpSSdmVnKuTjv4bL.jpg'
    },
    {
        titulo: 'Festa no Céu',
        descricao: 'Descrição do filme 11',
        imdb: 'tt2262227',
        imagem: 'https://image.tmdb.org/t/p/w300/l6luVQ9F7t7wErnSOq6Vd0SgDxV.jpg'
    },
    {
        titulo: 'Confissões de uma Adolescente em Crise',
        descricao: 'Descrição do filme 12',
        imdb: 'tt0361467',
        imagem: 'https://image.tmdb.org/t/p/w300/fYE56DTY3jAVfb3dErEtyLu0YVa.jpg'
    },
    {
        titulo: 'Animais Noturnos',
        descricao: 'Descrição do filme 13',
        imdb: 'tt4550098',
        imagem: 'https://image.tmdb.org/t/p/w300/5T2t0m8VHofFxk2LhMmDYhMod6l.jpg'
    },
    {
        titulo: 'Velozes & Furiosos 10',
        descricao: 'Descrição do filme 14',
        imdb: 'tt5433140',
        imagem: 'https://image.tmdb.org/t/p/w300/4CWoalqAsRzXD9AFbByD1KnH40E.jpg'
    },
    {
        titulo: 'Evangelion: 1.11 Você (Não) Está Sozinho',
        descricao: 'Descrição do filme 15',
        imdb: 'tt0923811',
        imagem: 'https://image.tmdb.org/t/p/w300/fc4yj5OpifBQJGHoLvcF2on5qW5.jpg'
    },
    {
        titulo: 'Guerra Mundial Z',
        descricao: 'Descrição do filme 16',
        imdb: 'tt0816711',
        imagem: 'https://image.tmdb.org/t/p/w300/5HImW2XT2oN001IzZ4aw2IOLC4j.jpg'
    },
    {
        titulo: 'Perfect Blue',
        descricao: 'Descrição do filme 17',
        imdb: 'tt0156887',
        imagem: 'https://image.tmdb.org/t/p/w300/79vujbsWEbX4dzffBV541QXN6sf.jpg'
    },
    {
        titulo: 'Lembranças',
        descricao: 'Descrição do filme 18',
        imdb: 'tt1403981',
        imagem: 'https://image.tmdb.org/t/p/w300/pnmG02dRGXKeHSbzeCZxSGzaIBX.jpg'
    },
    {
        titulo: 'Garotos',
        descricao: 'Descrição do filme 19',
        imdb: 'tt3318220',
        imagem: 'https://image.tmdb.org/t/p/w300/gqDDvWsX179jQogj6kWxlHJKRiK.jpg'
    },
    {
        titulo: 'Na Palma da Mão',
        descricao: 'Descrição do filme 20',
        imdb: 'tt26160190',
        imagem: 'https://image.tmdb.org/t/p/w300/w6mwigYytOx5ksy1NLnEuq0mUAM.jpg'
    },
    {
        titulo: 'O Segredo de Brokeback Mountain',
        descricao: 'Descrição do filme 21',
        imdb: 'tt0388795',
        imagem: 'https://image.tmdb.org/t/p/w300/qZ7fvWbPABjdU8JciIS9f9jCRCb.jpg'
    },
    {
        titulo: 'Dança Comigo?',
        descricao: 'Descrição do filme 22',
        imdb: 'tt0358135',
        imagem: 'https://image.tmdb.org/t/p/w300/nBjSWrqs84g8fSbuCoU3WC0t8VX.jpg'
    },
    {
        titulo: 'Ghost: Do Outro Lado da Vida',
        descricao: 'Descrição do filme 23',
        imdb: 'tt0099653',
        imagem: 'https://image.tmdb.org/t/p/w300/nGSeOwr3XRP2M7bBjcOol8vi2jT.jpg'
    },
    {
        titulo: 'Procura-se Susan Desesperadamente',
        descricao: 'Descrição do filme 24',
        imdb: 'tt0089017',
        imagem: 'https://image.tmdb.org/t/p/w300/zCYwnbvtuR8wJt6MejUvolSuCow.jpg'
    }, 
    {
        titulo: 'O Pintassilgo',
        descricao: 'Descrição do filme 1',
        imdb: 'tt3864056',
        imagem: 'https://image.tmdb.org/t/p/w300/ilZwaOoNWPbsxAxc0B72IZExq8b.jpg'
    },
    {
        titulo: 'Princesa Mononoke',
        descricao: 'Descrição do filme 2',
        imdb: 'tt0119698',
        imagem: 'https://image.tmdb.org/t/p/w300/7EadOwHmyQgOnlghRiWBygNtnjl.jpg'
    },
    {
        titulo: 'Infinity Pool',
        descricao: 'Descrição do filme 3',
        imdb: 'tt10365998',
        imagem: 'https://image.tmdb.org/t/p/w300/5DNRr2juXdwtvktwXxwuk9Usk8O.jpg'
    },
    {
        titulo: 'Asagao to Kase-san.',
        descricao: 'Descrição do filme 4',
        imdb: 'tt7456468',
        imagem: 'https://image.tmdb.org/t/p/w300/69Fy0t0QWGk1xPh0f3qcboT2VUs.jpg'
    },
    {
        titulo: 'Um Geek Encantador',
        descricao: 'Descrição do filme 5',
        imdb: 'tt1835977',
        imagem: 'https://image.tmdb.org/t/p/w300/9k9Ky1iCxRLiEjYpgAtoxtVMa92.jpg'
    },
    {
        titulo: 'Violet Evergarden Gaiden: Eternidade e a Boneca de Automemória',
        descricao: 'Descrição do filme 6',
        imdb: 'tt10477558',
        imagem: 'https://image.tmdb.org/t/p/w300/hfUMPxcN9AGgOYRQNsN8tpVMExI.jpg'
    },
    {
        titulo: 'Ernest & Celestine',
        descricao: 'Descrição do filme 7',
        imdb: 'tt1816518',
        imagem: 'https://image.tmdb.org/t/p/w300/3pNUKmcLhix0qEXsOUEVN15risM.jpg'
    },
    {
        titulo: 'A Incrível História de Adaline',
        descricao: 'Descrição do filme 8',
        imdb: 'tt1655441',
        imagem: 'https://image.tmdb.org/t/p/w300/gU84OUm9c4R44Zx8U1YPbCzKqIo.jpg'
    },
    {
        titulo: 'Treinando o Papai',
        descricao: 'Descrição do filme 9',
        imdb: 'tt0492956',
        imagem: 'https://image.tmdb.org/t/p/w300/ikQBghrihLICc1E9CjvNkek0MQw.jpg'
    },
    {
        titulo: 'Sexy por Acidente',
        descricao: 'Descrição do filme 10',
        imdb: 'tt6791096',
        imagem: 'https://image.tmdb.org/t/p/w300/zAVxVGlxWFOV9ae4hPh9eau2PDk.jpg'
    },
    {
        titulo: 'O Destino de Júpiter',
        descricao: 'Descrição do filme 11',
        imdb: 'tt1617661',
        imagem: 'https://image.tmdb.org/t/p/w300/u1p4Fw1nqYOQcRgD63sJmX3ZjgU.jpg'
    },
    {
        titulo: 'Do Que os Homens Gostam',
        descricao: 'Descrição do filme 12',
        imdb: 'tt7634968',
        imagem: 'https://image.tmdb.org/t/p/w300/6UDohjhxprSjsnZfqbbpuwxDPSS.jpg'
    },
    {
        titulo: 'O Fada do Dente',
        descricao: 'Descrição do filme 13',
        imdb: 'tt0808510',
        imagem: 'https://image.tmdb.org/t/p/w300/hk67XO1Fa1TVU3hmdCMqsnil1Ox.jpg'
    },
    {
        titulo: 'Emicida: AmarElo - É Tudo Pra Ontem',
        descricao: 'Descrição do filme 14',
        imdb: 'tt13458600',
        imagem: 'https://image.tmdb.org/t/p/w300/Ac23UNPF7aNpxCRGdx9Aqfg4jsU.jpg'
    },
    {
        titulo: 'Let It Shine',
        descricao: 'Descrição do filme 15',
        imdb: 'tt2165933',
        imagem: 'https://image.tmdb.org/t/p/w300/h0tbtqdPPCe7gYSuNppOd066xBL.jpg'
    },
    {
        titulo: 'Re:ZERO -Starting Life in Another World- Laços Congelados',
        descricao: 'Descrição do filme 16',
        imdb: 'tt11285348',
        imagem: 'https://image.tmdb.org/t/p/w300/4fkROBkc3zHVRbmf65A4V46pznD.jpg'
    },
    {
        titulo: 'SUGA: Road to D-DAY',
        descricao: 'Descrição do filme 17',
        imdb: 'tt27410896',
        imagem: 'https://image.tmdb.org/t/p/w300/u2fkIhqMEUdoHeKIKym8yJ4W3p3.jpg'
    },
    {
        titulo: 'Ron Bugado',
        descricao: 'Descrição do filme 18',
        imdb: 'tt7504818',
        imagem: 'https://image.tmdb.org/t/p/w300/h8eqqC9KLoN8TUe1EXtIqwX8BpP.jpg'
    },
    {
        titulo: 'A Luz do Demônio',
        descricao: 'Descrição do filme 19',
        imdb: 'tt9271672',
        imagem: 'https://image.tmdb.org/t/p/w300/mYa1vhjTYakyNCB65lR8Y7jujBn.jpg'
    },
    {
        titulo: 'Belo Desastre',
        descricao: 'Descrição do filme 20',
        imdb: 'tt2316548',
        imagem: 'https://image.tmdb.org/t/p/w300/uNIadSJbxQ0p0DtJLUPfVW6TAEu.jpg'
    },
    {
        titulo: 'Vozes e Vultos',
        descricao: 'Descrição do filme 21',
        imdb: 'tt10962368',
        imagem: 'https://image.tmdb.org/t/p/w300/bsxQvbWiBa13Vsas5Sj0JhR73QF.jpg'
    },
    {
        titulo: 'Águas Rasas',
        descricao: 'Descrição do filme 22',
        imdb: 'tt4052882',
        imagem: 'https://image.tmdb.org/t/p/w300/eZxPtVGK4oix9BYCnD4EDKjKUnk.jpg'
    },
    {
        titulo: 'Um Contratempo',
        descricao: 'Descrição do filme 23',
        imdb: 'tt4857264',
        imagem: 'https://image.tmdb.org/t/p/w300/pOnbhr6DbPgKjvcNexbRdmR37De.jpg'
    },
    {
        titulo: 'Labirinto: A Magia do Tempo',
        descricao: 'Descrição do filme 24',
        imdb: 'tt0091369',
        imagem: 'https://image.tmdb.org/t/p/w300/yMybltHkdlQOuvhF3lJ7MSMRgVk.jpg'
    },
    {
        titulo: 'Mais que Amigos',
        descricao: 'Descrição do filme 1',
        imdb: 'tt9731598',
        imagem: 'https://image.tmdb.org/t/p/w300/fDwxAM6z1Igkwv7b4qobwf46xdM.jpg'
    },
    {
        titulo: 'A Roleta da Morte',
        descricao: 'Descrição do filme 2',
        imdb: 'tt21087452',
        imagem: 'https://image.tmdb.org/t/p/w300/yDziA0OTfZq19IBlQ6EUemraSfY.jpg'
    },
    {
        titulo: 'A Tr3s',
        descricao: 'Descrição do filme 3',
        imdb: 'tt19845038',
        imagem: 'https://image.tmdb.org/t/p/w300/qCIbW6ocszh1URnIS6ikw1BQCjV.jpg'
    },
    {
        titulo: 'Um Dia das Mães Nada Tradicional',
        descricao: 'Descrição do filme 4',
        imdb: 'tt27489169',
        imagem: 'https://image.tmdb.org/t/p/w300/j741ip55NOzabrllOXHJv2vpag7.jpg'
    },
    {
        titulo: 'Guia de Viagem para o Amor',
        descricao: 'Descrição do filme 5',
        imdb: 'tt20115096',
        imagem: 'https://image.tmdb.org/t/p/w300/2nhTfuDkks0MZgx0gncPvz1L59p.jpg'
    },
    {
        titulo: 'Air: A História Por Trás do Logo',
        descricao: 'Descrição do filme 6',
        imdb: 'tt16419074',
        imagem: 'https://image.tmdb.org/t/p/w300/8OGQCOp6BxwvekhZBQCzVd77Y6l.jpg'
    },
    {
        titulo: 'D.P.A. e a Biblioteca Banida',
        descricao: 'Descrição do filme 7',
        imdb: 'None',
        imagem: 'https://image.tmdb.org/t/p/w300/2jQ7Wtm6MNNn5J8rleBJrwSkedu.jpg'
    },
    {
        titulo: 'Asterix e Obelix no Reino do Meio',
        descricao: 'Descrição do filme 8',
        imdb: 'tt11210390',
        imagem: 'https://image.tmdb.org/t/p/w300/cc04u9rMTbT3SIZUTEbDp4OmcQy.jpg'
    },
    {
        titulo: 'Sombras de um Crime',
        descricao: 'Descrição do filme 9',
        imdb: 'tt6722802',
        imagem: 'https://image.tmdb.org/t/p/w300/vRSbYibtGcEYBFfCAkkvSCF9eES.jpg'
    },
    {
        titulo: 'Os Japão',
        descricao: 'Descrição do filme 10',
        imdb: 'tt7858496',
        imagem: 'https://image.tmdb.org/t/p/w300/sBiLI4x3fpNCpGAjc4Naeh7w3zz.jpg'
    },
    {
        titulo: 'Lendas da Guerra',
        descricao: 'Descrição do filme 11',
        imdb: 'tt15090814',
        imagem: 'https://image.tmdb.org/t/p/w300/aC0YLhS0K5JbONctAlIZVvxXO0c.jpg'
    },
    {
        titulo: 'Fanfic',
        descricao: 'Descrição do filme 12',
        imdb: 'tt27612422',
        imagem: 'https://image.tmdb.org/t/p/w300/6qgkVtpVabAzjQaJTgx3Vmqnmyj.jpg'
    },
    {
        titulo: 'Duas Pecadoras e Uma Mula',
        descricao: 'Descrição do filme 13',
        imdb: 'tt14940240',
        imagem: 'https://image.tmdb.org/t/p/w300/aRaO9OMNfsw03C04NHEgzBVWCiK.jpg'
    },
    {
        titulo: 'A Mãe',
        descricao: 'Descrição do filme 14',
        imdb: 'tt6968614',
        imagem: 'https://image.tmdb.org/t/p/w300/5OeWHBMifiRPMz6eS23miS5ttED.jpg'
    },
    {
        titulo: 'A Cratera',
        descricao: 'Descrição do filme 15',
        imdb: 'tt5264838',
        imagem: 'https://image.tmdb.org/t/p/w300/65CXDhp2Y0ro847Lzq9l1iQ9Hn6.jpg'
    },
    {
        titulo: 'O Urso do Pó Branco',
        descricao: 'Descrição do filme 16',
        imdb: 'tt14209916',
        imagem: 'https://image.tmdb.org/t/p/w300/h2tS3f9s386fitoHjDMvQGm2w8q.jpg'
    },
    {
        titulo: 'Madame X',
        descricao: 'Descrição do filme 17',
        imdb: 'tt0060645',
        imagem: 'https://image.tmdb.org/t/p/w300/pF9m0GruyTuC4H4cBROEzEaf42C.jpg'
    },
    {
        titulo: 'Trapaça',
        descricao: 'Descrição do filme 18',
        imdb: 'tt1800241',
        imagem: 'https://image.tmdb.org/t/p/w300/hDvBteFNrro6e4UdHBenC0hbDio.jpg'
    },
    {
        titulo: 'Pinóquio por Guillermo Del Toro',
        descricao: 'Descrição do filme 19',
        imdb: 'tt1488589',
        imagem: 'https://image.tmdb.org/t/p/w300/x3IkO2sW4rSSVluFDz8isr6YDm8.jpg'
    },
    {
        titulo: 'O Segredo de Marrowbone',
        descricao: 'Descrição do filme 20',
        imdb: 'tt5886440',
        imagem: 'https://image.tmdb.org/t/p/w300/94Uo1TNBKzA5iBl5zOOrdTuWV9f.jpg'
    },
    {
        titulo: 'Oferenda ao Demônio',
        descricao: 'Descrição do filme 21',
        imdb: 'tt13103732',
        imagem: 'https://image.tmdb.org/t/p/w300/lI8sI9pQuJmdYJgp6JuPIPg7Rqx.jpg'
    },
    {
        titulo: 'O Juízo',
        descricao: 'Descrição do filme 22',
        imdb: 'tt5269624',
        imagem: 'https://image.tmdb.org/t/p/w300/zVdOTQ7ioVKhIwEMxILfqTbqzsq.jpg'
    },
    {
        titulo: 'Malcolm X',
        descricao: 'Descrição do filme 23',
        imdb: 'tt0104797',
        imagem: 'https://image.tmdb.org/t/p/w300/ttcqfFRLsGxStkTd5YjfMD2uKv0.jpg'
    },
    {
        titulo: 'Rebelião',
        descricao: 'Descrição do filme 24',
        imdb: 'tt4642044',
        imagem: 'https://image.tmdb.org/t/p/w300/5Q2pHzDfJ8QlUA2vx2yAXWJkof7.jpg'
    },
    {
        titulo: 'Piedade',
        descricao: 'Descrição do filme 1',
        imdb: 'tt6566846',
        imagem: 'https://image.tmdb.org/t/p/w300/rUVrAAXXjGhYflRUtbyqgREABKD.jpg'
    },
    {
        titulo: 'Domingo',
        descricao: 'Descrição do filme 2',
        imdb: 'tt9025112',
        imagem: 'https://image.tmdb.org/t/p/w300/zIzySOMQhxfIfnc0t21Gih90uAn.jpg'
    },
    {
        titulo: 'Z: A Cidade Perdida',
        descricao: 'Descrição do filme 3',
        imdb: 'tt1212428',
        imagem: 'https://image.tmdb.org/t/p/w300/ms4UmEmc0cyK5AN2EGPfadkbXae.jpg'
    },
    {
        titulo: 'Nas Ondas da Fé',
        descricao: 'Descrição do filme 4',
        imdb: 'tt21994054',
        imagem: 'https://image.tmdb.org/t/p/w300/fddUEnP5pII7U1f09pQVjw9Gv4v.jpg'
    },
    {
        titulo: 'Manobras do Destino',
        descricao: 'Descrição do filme 5',
        imdb: 'tt6102104',
        imagem: 'https://image.tmdb.org/t/p/w300/29ZSBmqQfzSGNh8f1m2YkqljNZ9.jpg'
    },
    {
        titulo: 'O Menu',
        descricao: 'Descrição do filme 6',
        imdb: 'tt9764362',
        imagem: 'https://image.tmdb.org/t/p/w300/rxNelQvAjOmNGUUHRujmsHiPEIh.jpg'
    },
    {
        titulo: 'A Outra',
        descricao: 'Descrição do filme 7',
        imdb: 'tt0467200',
        imagem: 'https://image.tmdb.org/t/p/w300/kViXw0u8iAeaT8WFpPNfCRDdH9z.jpg'
    },
    {
        titulo: 'O Telefone do Sr. Harrigan',
        descricao: 'Descrição do filme 8',
        imdb: 'tt12908110',
        imagem: 'https://image.tmdb.org/t/p/w300/sFmQ7dpwSjVs7FVH0VqnAllftEX.jpg'
    },
    {
        titulo: 'Meninas Malvadas',
        descricao: 'Descrição do filme 9',
        imdb: 'tt0377092',
        imagem: 'https://image.tmdb.org/t/p/w300/crXx4pzKET0ZyhSJDYMR3lS0Xnk.jpg'
    },
    {
        titulo: 'Guardiões da Galáxia: Volume 3',
        descricao: 'Descrição do filme 10',
        imdb: 'tt6791350',
        imagem: 'https://image.tmdb.org/t/p/w300/mgFdvrwlzYi6wLq3zgzOwkiT43k.jpg'
    },
    {
        titulo: 'Você Vai Lembrar Meu Nome',
        descricao: 'Descrição do filme 11',
        imdb: 'tt9330648',
        imagem: 'https://image.tmdb.org/t/p/w300/zjZ8fmIRR4RDHSRsvobspaY1mi9.jpg'
    },
    {
        titulo: 'Golpe Baixo',
        descricao: 'Descrição do filme 12',
        imdb: 'tt0398165',
        imagem: 'https://image.tmdb.org/t/p/w300/9n7AN86mkPYNO8FcFMjkfbVuUSu.jpg'
    },
    {
        titulo: 'Colateral',
        descricao: 'Descrição do filme 13',
        imdb: 'tt0369339',
        imagem: 'https://image.tmdb.org/t/p/w300/xJ6dDSQYDZeEGgSu2b0NMif3UMX.jpg'
    },
    {
        titulo: 'Quem Vai Ficar com Mary?',
        descricao: 'Descrição do filme 14',
        imdb: 'tt0129387',
        imagem: 'https://image.tmdb.org/t/p/w300/nUi2j9Mp8HEE0r7Iq7nq4RIesO4.jpg'
    },
    {
        titulo: 'Quero Ficar Com Polly',
        descricao: 'Descrição do filme 15',
        imdb: 'tt0343135',
        imagem: 'https://image.tmdb.org/t/p/w300/tWe964ouAeuAmntQKn1rG8jMBre.jpg'
    },
    {
        titulo: 'Rainhas em Fuga',
        descricao: 'Descrição do filme 16',
        imdb: 'tt21736218',
        imagem: 'https://image.tmdb.org/t/p/w300/iL0hVqtK0NUa6B9UJXkoq5jSXAz.jpg'
    },
    {
        titulo: 'O Encontro Mais Longo de Todos',
        descricao: 'Descrição do filme 17',
        imdb: 'tt27218658',
        imagem: 'https://image.tmdb.org/t/p/w300/pzusJE1LqhG06S92IdPYlTu8N1p.jpg'
    },
    {
        titulo: 'Surpresa! Fiquei Noiva',
        descricao: 'Descrição do filme 18',
        imdb: 'tt5789944',
        imagem: 'https://image.tmdb.org/t/p/w300/qo6qDVHP8zxou3HXOXXfM5izf17.jpg'
    },
    {
        titulo: 'Quasimodo',
        descricao: 'Descrição do filme 19',
        imdb: 'tt1609497',
        imagem: 'https://image.tmdb.org/t/p/w300/yRitoZ1fVLhUsK7bzu84lJQMg1g.jpg'
    },
    {
        titulo: 'Os Esquecidos',
        descricao: 'Descrição do filme 20',
        imdb: 'tt0356618',
        imagem: 'https://image.tmdb.org/t/p/w300/uIoTlZf4NvSEXhAjQ1cn9tTvVQj.jpg'
    },
    {
        titulo: 'Os Cavaleiros do Zodíaco - Saint Seiya: O Começo',
        descricao: 'Descrição do filme 21',
        imdb: 'tt6528290',
        imagem: 'https://image.tmdb.org/t/p/w300/omPLRVEydDJdkXoBw87PWQ3heCY.jpg'
    },
    {
        titulo: 'O Chamado 4: Samara Ressurge',
        descricao: 'Descrição do filme 22',
        imdb: 'tt19815280',
        imagem: 'https://image.tmdb.org/t/p/w300/7IlDfL40rIe1bVERCxXUJJfx2en.jpg'
    },
    {
        titulo: 'O Grande Mauricinho',
        descricao: 'Descrição do filme 23',
        imdb: 'tt10473036',
        imagem: 'https://image.tmdb.org/t/p/w300/qcCZnuFQv6faxbXUb9pa8Le5ujB.jpg'
    },
    {
        titulo: 'Liga da Justiça x RWBY: Super-Heróis e Caçadores - Parte 1',
        descricao: 'Descrição do filme 24',
        imdb: 'tt24548912',
        imagem: 'https://image.tmdb.org/t/p/w300/gs9thnvpkf6HCx2lJZlY5YaLQ7s.jpg'
    },
    {
        titulo: 'Raquel 1:1',
        descricao: 'Descrição do filme 1',
        imdb: 'tt7466970',
        imagem: 'https://image.tmdb.org/t/p/w300/numZOhSuBd3qzJyjQ49wlBNOqce.jpg'
    },
    {
        titulo: 'Peter Pan & Wendy',
        descricao: 'Descrição do filme 2',
        imdb: 'tt5635026',
        imagem: 'https://image.tmdb.org/t/p/w300/AkWxiUsc32qJHLwt7vt5AvUFNlx.jpg'
    },
    {
        titulo: 'Tic-Tac: A Maternidade do Mal',
        descricao: 'Descrição do filme 3',
        imdb: 'tt17219484',
        imagem: 'https://image.tmdb.org/t/p/w300/dpKHaXmAeiVaV1FQVIWStyg0Cws.jpg'
    },
    {
        titulo: 'Monster High: O Filme',
        descricao: 'Descrição do filme 4',
        imdb: 'tt1447981',
        imagem: 'https://image.tmdb.org/t/p/w300/tn3GWm0Erehkpur8PUuYWxGpul5.jpg'
    },
    {
        titulo: 'Ghosted: Sem Resposta',
        descricao: 'Descrição do filme 5',
        imdb: 'tt15326988',
        imagem: 'https://image.tmdb.org/t/p/w300/89p7MQ3I5wKzOEO0OCCXEdUqX9R.jpg'
    },
    {
        titulo: 'Anos 90',
        descricao: 'Descrição do filme 6',
        imdb: 'tt5613484',
        imagem: 'https://image.tmdb.org/t/p/w300/gTKHNZT3ntvwN8Sy6DzbUzuTdpt.jpg'
    },
    {
        titulo: 'Os Três Mosqueteiros: D’Artagnan',
        descricao: 'Descrição do filme 7',
        imdb: 'tt12672536',
        imagem: 'https://image.tmdb.org/t/p/w300/lm0pfF0HSLsSpFlhGCmR6Bhl8EE.jpg'
    },
    {
        titulo: 'Caçador de Tormentas',
        descricao: 'Descrição do filme 8',
        imdb: 'tt10559102',
        imagem: 'https://image.tmdb.org/t/p/w300/g0UOstAfVWAK5FazCMfdWdkM38i.jpg'
    },
    {
        titulo: 'Power Rangers: Agora e Sempre',
        descricao: 'Descrição do filme 9',
        imdb: 'tt23219684',
        imagem: 'https://image.tmdb.org/t/p/w300/lB1psIWct40ZSJPLp8wsQ98y0dI.jpg'
    },
    {
        titulo: 'Olavo Tem Razão - O Filme',
        descricao: 'Descrição do filme 10',
        imdb: 'None',
        imagem: 'https://image.tmdb.org/t/p/w300/23znVCWbJ5HgthMzVxGHhz4PxYe.jpg'
    },
    {
        titulo: 'A Morte do Demônio: A Ascensão',
        descricao: 'Descrição do filme 11',
        imdb: 'tt13345606',
        imagem: 'https://image.tmdb.org/t/p/w300/5E4nVa3dXTHG2zx9iO7b0UIMsa7.jpg'
    },
    {
        titulo: 'A Vila',
        descricao: 'Descrição do filme 12',
        imdb: 'tt0368447',
        imagem: 'https://image.tmdb.org/t/p/w300/rKPMAssCxiioVrwQqMBJbsou9zN.jpg'
    },
    {
        titulo: 'O Nome da Rosa',
        descricao: 'Descrição do filme 13',
        imdb: 'tt0091605',
        imagem: 'https://image.tmdb.org/t/p/w300/8o6U4vBbAop4344tMnzdu8pN7Qy.jpg'
    },
    {
        titulo: 'Excluídos',
        descricao: 'Descrição do filme 14',
        imdb: 'tt16437278',
        imagem: 'https://image.tmdb.org/t/p/w300/w3nvKg5Ntog0VeWsBqCysxfNNFL.jpg'
    },
    {
        titulo: 'Desaparecida',
        descricao: 'Descrição do filme 15',
        imdb: 'tt10855768',
        imagem: 'https://image.tmdb.org/t/p/w300/zwAHIor0Yxn6VUnyVGIWk1fDYrv.jpg'
    },
    {
        titulo: 'Prova Final',
        descricao: 'Descrição do filme 16',
        imdb: 'tt0133751',
        imagem: 'https://image.tmdb.org/t/p/w300/leVEAb37sssYg8qLeo46Pc8IcH9.jpg'
    },
    {
        titulo: 'TÁR',
        descricao: 'Descrição do filme 17',
        imdb: 'tt14444726',
        imagem: 'https://image.tmdb.org/t/p/w300/dRVAlaU0vbG6hMf2K45NSiIyoUe.jpg'
    },
    {
        titulo: 'Desapega!',
        descricao: 'Descrição do filme 18',
        imdb: 'tt15489762',
        imagem: 'https://image.tmdb.org/t/p/w300/b0aRBdFnIi1MZbsW7QTZvRHcpo3.jpg'
    },
    {
        titulo: 'A Receita Fatal',
        descricao: 'Descrição do filme 19',
        imdb: 'tt5673202',
        imagem: 'https://image.tmdb.org/t/p/w300/y5YlUgaQ4Nq1Si61ALWteYbPUW9.jpg'
    },
    {
        titulo: 'Alerta Máximo',
        descricao: 'Descrição do filme 20',
        imdb: 'tt5884796',
        imagem: 'https://image.tmdb.org/t/p/w300/6yuyOVARnEHZPBmaY1mDvF4woel.jpg'
    },
    {
        titulo: 'Visitas Extraterrestres',
        descricao: 'Descrição do filme 21',
        imdb: 'tt19849214',
        imagem: 'https://image.tmdb.org/t/p/w300/mC0GjHcnrkQRVBmHEVd54dGV1m0.jpg'
    },
    {
        titulo: 'Uma Prece Antes do Amanhecer',
        descricao: 'Descrição do filme 22',
        imdb: 'tt4080956',
        imagem: 'https://image.tmdb.org/t/p/w300/pS7MWnE9jzKytQ101KbddnahRRZ.jpg'
    },
    {
        titulo: 'Vício Perfeito',
        descricao: 'Descrição do filme 23',
        imdb: 'tt12965390',
        imagem: 'https://image.tmdb.org/t/p/w300/1bFE8TlLU7r3IwwGHN7au8xPIds.jpg'
    },
    {
        titulo: 'Diários de Motocicleta',
        descricao: 'Descrição do filme 24',
        imdb: 'tt0318462',
        imagem: 'https://image.tmdb.org/t/p/w300/mylaAHi6yNibVqHoTj1SpCwY3zV.jpg'
    },
{
    titulo: 'Os Piratas da Rua Debaixo',
    descricao: 'Descrição do filme 1',
    imdb: 'tt10727214',
    imagem: 'https://image.tmdb.org/t/p/w300/9p0uScG0xssIrANgcYLcDiNSLCK.jpg'
},
{
    titulo: 'A História do Mundo em 2 Horas',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2086853',
    imagem: 'https://image.tmdb.org/t/p/w300/5eTbZASaBiafbaOhvxUMgVHUDlq.jpg'
},
{
    titulo: 'Sem Evidências',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0804463',
    imagem: 'https://image.tmdb.org/t/p/w300/xtfhSGn6hBE3m47CCmDKLoyf60U.jpg'
},
{
    titulo: 'Trabalhando para o Inimigo',
    descricao: 'Descrição do filme 4',
    imdb: 'tt2891174',
    imagem: 'https://image.tmdb.org/t/p/w300/35JR6OlN2VSt0hX6kvV7FH5nMmx.jpg'
},
{
    titulo: 'De Repente 70',
    descricao: 'Descrição do filme 5',
    imdb: 'tt14330236',
    imagem: 'https://image.tmdb.org/t/p/w300/fvPQQKCTbMRK4Mo6C91nPVcjFeA.jpg'
},
{
    titulo: 'Swindle',
    descricao: 'Descrição do filme 6',
    imdb: 'tt2545440',
    imagem: 'https://image.tmdb.org/t/p/w300/gccrJwdNv0roucBpG6Dus0gw4Xb.jpg'
},
{
    titulo: 'O Sorriso de Monalisa',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0304415',
    imagem: 'https://image.tmdb.org/t/p/w300/ImjEyKaxAspC5TcUslkeTYveHv.jpg'
},
{
    titulo: 'O Delinquente Delicado',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0050301',
    imagem: 'https://image.tmdb.org/t/p/w300/pDmoKAzRPH6wVE9ovZUmgd7w3I9.jpg'
},
{
    titulo: 'As Gatinhas do Sul',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0423238',
    imagem: 'https://image.tmdb.org/t/p/w300/7KtUc4RmMEOFA5yq68FRH8OJHGA.jpg'
},
{
    titulo: 'John Wick 4: Baba Yaga',
    descricao: 'Descrição do filme 10',
    imdb: 'tt10366206',
    imagem: 'https://image.tmdb.org/t/p/w300/rXTqhpkpj6E0YilQ49PK1SSqLhm.jpg'
},
{
    titulo: 'Renfield - Dando Sangue pelo Chefe',
    descricao: 'Descrição do filme 11',
    imdb: 'tt11358390',
    imagem: 'https://image.tmdb.org/t/p/w300/nnryxxmgS17IBKvu23Hpg1mimZU.jpg'
},
{
    titulo: 'Batman: A Perdição Chegou a Gotham',
    descricao: 'Descrição do filme 12',
    imdb: 'tt24223450',
    imagem: 'https://image.tmdb.org/t/p/w300/ejHdsATVNWDIhuTgIKXmenFqGTc.jpg'
},
{
    titulo: 'Inside',
    descricao: 'Descrição do filme 13',
    imdb: 'tt14781036',
    imagem: 'https://image.tmdb.org/t/p/w300/dXsiWJWwGwYwOQ6DfYFt5pPBMwT.jpg'
},
{
    titulo: 'Kill Boksoon',
    descricao: 'Descrição do filme 14',
    imdb: 'tt16900880',
    imagem: 'https://image.tmdb.org/t/p/w300/2eRQ55y4OWXZjmdwfBmyMEPTdyy.jpg'
},
{
    titulo: 'Meu Amigo Lutcha',
    descricao: 'Descrição do filme 15',
    imdb: 'tt14923260',
    imagem: 'https://image.tmdb.org/t/p/w300/9CbBbgftaC2fQYwHYMfrSXkKML0.jpg'
},

{
    titulo: 'A Baleia',
    descricao: 'Descrição do filme 16',
    imdb: 'tt13833688',
    imagem: 'https://image.tmdb.org/t/p/w300/4hhd8JuwsHTvpqW9wW9oebsHVu0.jpg'
},
{
    titulo: 'O Exorcista do Papa',
    descricao: 'Descrição do filme 17',
    imdb: 'tt13375076',
    imagem: 'https://image.tmdb.org/t/p/w300/rBDAkmDdRv1bG996JPPNq0cMOVG.jpg'
},
{
    titulo: 'Tetris',
    descricao: 'Descrição do filme 18',
    imdb: 'tt12758060',
    imagem: 'https://image.tmdb.org/t/p/w300/4F2QwCOYHJJjecSvdOjStuVLkpu.jpg'
},
{
    titulo: 'Dungeons & Dragons: Honra Entre Rebeldes',
    descricao: 'Descrição do filme 19',
    imdb: 'tt2906216',
    imagem: 'https://image.tmdb.org/t/p/w300/85ivt7lJm3J5Mqybdh59m09eksV.jpg'
},
{
    titulo: 'Um Pacto de Amizade',
    descricao: 'Descrição do filme 20',
    imdb: 'tt17321230',
    imagem: 'https://image.tmdb.org/t/p/w300/f1NEx4lohw47WSuNqQife0GxWLv.jpg'
},
{
    titulo: 'Corrosão',
    descricao: 'Descrição do filme 21',
    imdb: 'tt27403906',
    imagem: 'https://image.tmdb.org/t/p/w300/9WIHpY4qVYVYyRq220K4LVQwpjt.jpg'
},
{
    titulo: 'O Último Reino: Sete Reis Devem Morrer',
    descricao: 'Descrição do filme 22',
    imdb: 'tt15767808',
    imagem: 'https://image.tmdb.org/t/p/w300/xUvSeFhdsJbKFOaHnB9TeTZpJKs.jpg'
},
{
    titulo: 'Marcel, a Concha de Sapatos',
    descricao: 'Descrição do filme 23',
    imdb: 'tt15339456',
    imagem: 'https://image.tmdb.org/t/p/w300/8hIj0OJI6NDMqOQTt9miZlAVIQP.jpg'
},
{
    titulo: 'Till: A Busca por Justiça',
    descricao: 'Descrição do filme 24',
    imdb: 'tt4960748',
    imagem: 'https://image.tmdb.org/t/p/w300/ogb70EGzxqdbH5p8mmWJ5CEYSp3.jpg'
}, 
{
    titulo: 'Transformers',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0418279',
    imagem: 'https://image.tmdb.org/t/p/w300/ev7IMfMXRbddGLVw7xPL2PHpkWR.jpg'
},
{
    titulo: 'A Dança dos Vampiros',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0061655',
    imagem: 'https://image.tmdb.org/t/p/w300/nh2lH0pwI3jef2Vm157ZsM9bWv.jpg'
},
{
    titulo: 'Transformers: A Vingança dos Derrotados',
    descricao: 'Descrição do filme 3',
    imdb: 'tt1055369',
    imagem: 'https://image.tmdb.org/t/p/w300/wZRc6MekG9uD56VtRqQysmHjdeI.jpg'
},
{
    titulo: 'Transformers: A Era da Extinção',
    descricao: 'Descrição do filme 4',
    imdb: 'tt2109248',
    imagem: 'https://image.tmdb.org/t/p/w300/gyDVzU2A8bdK4fsS4rWTsDcPPEB.jpg'
},
{
    titulo: 'Transformers: O Lado Oculto da Lua',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1399103',
    imagem: 'https://image.tmdb.org/t/p/w300/1B1o592zAr0pny4qPGceT56Ug2m.jpg'
},
{
    titulo: 'Ponto Final: Match Point',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0416320',
    imagem: 'https://image.tmdb.org/t/p/w300/tefwQtylm6045V3jO5GJWdeQ0SQ.jpg'
},
{
    titulo: 'Transformers: O Último Cavaleiro',
    descricao: 'Descrição do filme 7',
    imdb: 'tt3371366',
    imagem: 'https://image.tmdb.org/t/p/w300/iQ3Ko9GuKmGUHe5gFVSoR5NyOPT.jpg'
},
{
    titulo: 'Bom Comportamento',
    descricao: 'Descrição do filme 8',
    imdb: 'tt4846232',
    imagem: 'https://image.tmdb.org/t/p/w300/lbuGKMPrnFa0xxukS8gk9jfyqpY.jpg'
},
{
    titulo: 'Cosmópolis',
    descricao: 'Descrição do filme 9',
    imdb: 'tt1480656',
    imagem: 'https://image.tmdb.org/t/p/w300/nWCaRAY5ihCBZQHRXh6yTnplWYB.jpg'
},
{
    titulo: 'King Cobra',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0138797',
    imagem: 'https://image.tmdb.org/t/p/w300/p5s5Vt1RLiqI3HQ9WaDm32e8zWH.jpg'
},
{
    titulo: 'Cinquenta Tons de Cinza',
    descricao: 'Descrição do filme 11',
    imdb: 'tt2322441',
    imagem: 'https://image.tmdb.org/t/p/w300/t4kR6H71anOV85qzjOLlr9uVdFJ.jpg'
},
{
    titulo: 'A Caminho da Lua',
    descricao: 'Descrição do filme 12',
    imdb: 'tt7488208',
    imagem: 'https://image.tmdb.org/t/p/w300/7jalZ1oVkuuVXek0B2BKrFWMUv9.jpg'
},
{
    titulo: 'Vida de Inseto',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0120623',
    imagem: 'https://image.tmdb.org/t/p/w300/twzLdfNxyAa5xQWLLVQyapSqJJP.jpg'
},
{
    titulo: 'O Zoológico de Varsóvia',
    descricao: 'Descrição do filme 14',
    imdb: 'tt1730768',
    imagem: 'https://image.tmdb.org/t/p/w300/6hM1XynlvPHvRD5dIKE883YXBS2.jpg'
},
{
    titulo: 'Os Fantasmas se Divertem',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0094721',
    imagem: 'https://image.tmdb.org/t/p/w300/yUBUbtdeUxFK8CWyuV3Ca37LpiQ.jpg'
},
{
    titulo: 'Batman: A Piada Mortal',
    descricao: 'Descrição do filme 16',
    imdb: 'tt4853102',
    imagem: 'https://image.tmdb.org/t/p/w300/coBGOvmAfSVC5nnmsSm6RO4YMXx.jpg'
},
{
    titulo: 'Casal Improvável',
    descricao: 'Descrição do filme 17',
    imdb: 'tt2139881',
    imagem: 'https://image.tmdb.org/t/p/w300/wt050OjvLsiP2pS39CvsKuNLwcp.jpg'
},
{
    titulo: 'InuYasha 1: Sentimentos que Transcendem o Tempo',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0322645',
    imagem: 'https://image.tmdb.org/t/p/w300/krSgIB3AD35sKh9iXT5x7Io1xHF.jpg'
},
{
    titulo: 'InuYasha 2: O Castelo das Ilusões Dentro do Espelho',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0366621',
    imagem: 'https://image.tmdb.org/t/p/w300/u8zFbyQnIKRRPxRRweQ6ODtAUhc.jpg'
},
{
    titulo: 'InuYasha 3: A Espada Dominadora do Mundo',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0396659',
    imagem: 'https://image.tmdb.org/t/p/w300/kDN5vNEuNNvkNo4tSygGfGYHfDi.jpg'
},
{
    titulo: 'Pavilhão 7',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0056903',
    imagem: 'https://image.tmdb.org/t/p/w300/ovXBWbk3YjOZB5cmiTvdNaDYGKu.jpg'
},
{
    titulo: 'A Espiã Que Sabia de Menos',
    descricao: 'Descrição do filme 22',
    imdb: 'tt3079380',
    imagem: 'https://image.tmdb.org/t/p/w300/bft6EuB96z0ureK832edqwAplDS.jpg'
},
{
    titulo: 'As Ruínas',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0963794',
    imagem: 'https://image.tmdb.org/t/p/w300/yZg6812ZI9MXWUI4NQMb1JyRYpk.jpg'
},
{
    titulo: 'Sangue Negro',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0469494',
    imagem: 'https://image.tmdb.org/t/p/w300/cOEbxHAm8CfbpAE9fKv9vTZaWeL.jpg'
},
{
    titulo: 'Um Cadáver para Sobreviver',
    descricao: 'Descrição do filme 1',
    imdb: 'tt4034354',
    imagem: 'https://image.tmdb.org/t/p/w300/oFhdGecjFcxZlo7VE2nyQLz0aAx.jpg'
},
{
    titulo: 'Uma Canção Para Ela',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2517044',
    imagem: 'https://image.tmdb.org/t/p/w300/19V63JLe7F5pW5tTrwaI05bVCXI.jpg'
},
{
    titulo: 'Sempre ao Seu Lado',
    descricao: 'Descrição do filme 3',
    imdb: 'tt1028532',
    imagem: 'https://image.tmdb.org/t/p/w300/rJnXkbYPJoX76Q9D91iKVJaItyL.jpg'
},
{
    titulo: 'A Ilha do Dr Moreau',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0076210',
    imagem: 'https://image.tmdb.org/t/p/w300/JGeUd5jtzgeKR9SqAD8FXbA3VS.jpg'
},
{
    titulo: 'Deixe-o Partir',
    descricao: 'Descrição do filme 5',
    imdb: 'tt9340860',
    imagem: 'https://image.tmdb.org/t/p/w300/fDVKqWgljauo1Frc1CbdeKr2G8O.jpg'
},
{
    titulo: 'O Grande Ditador',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0032553',
    imagem: 'https://image.tmdb.org/t/p/w300/ypiEVkeQd8NxI7AabS8eGkjNBf6.jpg'
},
{
    titulo: 'Eu Só Posso Imaginar',
    descricao: 'Descrição do filme 7',
    imdb: 'tt6450186',
    imagem: 'https://image.tmdb.org/t/p/w300/7ZGJdRHNlVXApD4RzlTzwR25j3c.jpg'
},
{
    titulo: 'Distrito 9',
    descricao: 'Descrição do filme 8',
    imdb: 'tt1136608',
    imagem: 'https://image.tmdb.org/t/p/w300/ngDzpIMeVlwv0B3JNWqNVTRNfcU.jpg'
},
{
    titulo: 'A Fuga do Planeta dos Macacos',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0067065',
    imagem: 'https://image.tmdb.org/t/p/w300/bZt5dYtbIZ03apuexPHvjrOI6vI.jpg'
},
{
    titulo: 'A Conquista do Planeta dos Macacos',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0068408',
    imagem: 'https://image.tmdb.org/t/p/w300/yDg8b2FgDQCVkLEkrUtqP6sdRew.jpg'
},
{
    titulo: 'O Planeta dos Macacos',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0063442',
    imagem: 'https://image.tmdb.org/t/p/w300/wTYTjSUqdra9WKzp7w2aOwYDosS.jpg'
},
{
    titulo: 'Babilônia',
    descricao: 'Descrição do filme 12',
    imdb: 'tt10640346',
    imagem: 'https://image.tmdb.org/t/p/w300/qZUmMxJbGmkIYwnS7qRfSOREmvC.jpg'
},
{
    titulo: 'Creed III',
    descricao: 'Descrição do filme 13',
    imdb: 'tt11145118',
    imagem: 'https://image.tmdb.org/t/p/w300/wDugyjvDQsuwm9j9hkmK4whCOti.jpg'
},
{
    titulo: 'Fantasma e CIA',
    descricao: 'Descrição do filme 14',
    imdb: 'tt7798604',
    imagem: 'https://image.tmdb.org/t/p/w300/8tGZbqePTre2AnpMeC1nqAHhLhZ.jpg'
},
{
    titulo: 'Mistério em Paris',
    descricao: 'Descrição do filme 15',
    imdb: 'tt15255288',
    imagem: 'https://image.tmdb.org/t/p/w300/pf1dQDb55mJ13KQMEYa4O0fni64.jpg'
},
{
    titulo: 'Super Mario Bros.: O Filme',
    descricao: 'Descrição do filme 16',
    imdb: 'tt6718170',
    imagem: 'https://image.tmdb.org/t/p/w300/i9XdxHsFrcqLkRWSF1coOHo4R39.jpg'
},
{
    titulo: 'Lar Doce Lar... Ou Não',
    descricao: 'Descrição do filme 17',
    imdb: 'tt9636630',
    imagem: 'https://image.tmdb.org/t/p/w300/wJ110kmsRTjM50DHoKmCtLheHDh.jpg'
},
{
    titulo: 'Eu Vi o Diabo',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1588170',
    imagem: 'https://image.tmdb.org/t/p/w300/ebODPzkfekZ9aXH6TMlXg7YzJM2.jpg'
},
{
    titulo: 'Espiral: O Legado de Jogos Mortais',
    descricao: 'Descrição do filme 19',
    imdb: 'tt10342730',
    imagem: 'https://image.tmdb.org/t/p/w300/jJ7eIqsVLtRwLCX6KeJNeQYjPar.jpg'
},
{
    titulo: 'O Céu é de Verdade',
    descricao: 'Descrição do filme 20',
    imdb: 'tt1929263',
    imagem: 'https://image.tmdb.org/t/p/w300/3V1S3j05kV5YqDEL2qyVFIy1x3m.jpg'
},
{
    titulo: 'Olhos Famintos 4: Renascimento',
    descricao: 'Descrição do filme 21',
    imdb: 'tt14121726',
    imagem: 'https://image.tmdb.org/t/p/w300/p3JX4YPcJOCPp8MSjL6mg7ZhHgA.jpg'
},
{
    titulo: 'Até os Ossos',
    descricao: 'Descrição do filme 22',
    imdb: 'tt10168670',
    imagem: 'https://image.tmdb.org/t/p/w300/w0dCPc9J2R6wnoO9Joxz6ot703g.jpg'
},
{
    titulo: 'Amor Além da Vida',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0120889',
    imagem: 'https://image.tmdb.org/t/p/w300/tnuZypYMGme4wK6wSSNt79awmp3.jpg'
},
{
    titulo: 'O Casamento dos Meus Sonhos',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0209475',
    imagem: 'https://image.tmdb.org/t/p/w300/afrqngvnCJk50KkIAdb9NN5mMhi.jpg'
},
{
    titulo: 'O Fazendeiro e Deus',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0850667',
    imagem: 'https://image.tmdb.org/t/p/w300/ffedCjjDzOYTafremGfkwAuDflM.jpg'
},
{
    titulo: 'Gremlins 2: A Nova Geração',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0099700',
    imagem: 'https://image.tmdb.org/t/p/w300/hDVXvZoNz6o00I6JCJ99KkLIjmS.jpg'
},
{
    titulo: 'Antes do Pôr do Sol',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0381681',
    imagem: 'https://image.tmdb.org/t/p/w300/6ERp6bGQ9HjfuJqgGkhSljelDCr.jpg'
},
{
    titulo: 'Deu a Louca nos Bichos',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0492389',
    imagem: 'https://image.tmdb.org/t/p/w300/zX95nyovPV4vV8UHR25IfnpjSSw.jpg'
},
{
    titulo: 'O Touro Ferdinando',
    descricao: 'Descrição do filme 5',
    imdb: 'tt3411444',
    imagem: 'https://image.tmdb.org/t/p/w300/rnoYZvoSbS6uogrESSbKOpwg0sB.jpg'
},
{
    titulo: 'A Maldição do Peregrino',
    descricao: 'Descrição do filme 6',
    imdb: 'tt11045340',
    imagem: 'https://image.tmdb.org/t/p/w300/xRmGjXnUvhszhOkABqEHfWQ7IDk.jpg'
},
{
    titulo: 'Pânico VI',
    descricao: 'Descrição do filme 7',
    imdb: 'tt17663992',
    imagem: 'https://image.tmdb.org/t/p/w300/oWPBXgmRxFIeo9Ad4EUye8JWs7v.jpg'
},
{
    titulo: '65: Ameaça Pré-Histórica',
    descricao: 'Descrição do filme 8',
    imdb: 'tt12261776',
    imagem: 'https://image.tmdb.org/t/p/w300/uMMIeMVk1TCG3CZilpxbzFh0JKT.jpg'
},
{
    titulo: 'Luther: O Cair da Noite',
    descricao: 'Descrição do filme 9',
    imdb: 'tt3155298',
    imagem: 'https://image.tmdb.org/t/p/w300/dX7vIS0HfCIJ4l1VEBoSLs9DnLe.jpg'
},
{
    titulo: 'Tubarão: Mar de Sangue',
    descricao: 'Descrição do filme 10',
    imdb: 'tt12550376',
    imagem: 'https://image.tmdb.org/t/p/w300/qUBOPVsMT9OgsUVqZWUBLkgYrb6.jpg'
},
{
    titulo: 'O Babadook',
    descricao: 'Descrição do filme 11',
    imdb: 'tt2321549',
    imagem: 'https://image.tmdb.org/t/p/w300/3dnkHdiyvdUK3oHkxTnjjnNXaq.jpg'
},
{
    titulo: 'Os Batutinhas: Uma Nova Aventura',
    descricao: 'Descrição do filme 12',
    imdb: 'tt2490004',
    imagem: 'https://image.tmdb.org/t/p/w300/cc4BnONgtqt7FzZbCLh5IqOKHcA.jpg'
},
{
    titulo: 'Tempestade',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0120696',
    imagem: 'https://image.tmdb.org/t/p/w300/5JiVOVgzk99xLHiFYI2eJFEfUj3.jpg'
},
{
    titulo: 'Loucuras de Verão',
    descricao: 'Descrição do filme 14',
    imdb: 'tt10492998',
    imagem: 'https://image.tmdb.org/t/p/w300/hjAZkGVEh1SlJ0hWfANPYf1GPOh.jpg'
},
{
    titulo: 'O Caminho de Volta',
    descricao: 'Descrição do filme 15',
    imdb: 'tt8544498',
    imagem: 'https://image.tmdb.org/t/p/w300/htwqnN0zyM1zpY9DgO7dWwq4m2S.jpg'
},
{
    titulo: 'A Árvore dos Desejos',
    descricao: 'Descrição do filme 16',
    imdb: 'tt9239422',
    imagem: 'https://image.tmdb.org/t/p/w300/jbNYpZoe1TMw2L78VGS8NTspAwj.jpg'
},
{
    titulo: 'Grease: Nos Tempos da Brilhantina',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0077631',
    imagem: 'https://image.tmdb.org/t/p/w300/r0IDTh1zrhxSZKYRQZjewvsrvUS.jpg'
},
{
    titulo: 'O Juiz',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0113492',
    imagem: 'https://image.tmdb.org/t/p/w300/wVLxNo53QniZxxRaYPB3vY7PRFN.jpg'
},
{
    titulo: 'Anelka - O incompreendido',
    descricao: 'Descrição do filme 19',
    imdb: 'tt12724622',
    imagem: 'https://image.tmdb.org/t/p/w300/q6mk7JtdWu2cUZV7vk6VN7cJNen.jpg'
},
{
    titulo: 'McQuade: O Lobo Solitário',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0085862',
    imagem: 'https://image.tmdb.org/t/p/w300/ddsKrcL7iiK66cJyj3JVyZKdm2q.jpg'
},
{
    titulo: 'O Pai que Move Montanhas',
    descricao: 'Descrição do filme 21',
    imdb: 'tt8886670',
    imagem: 'https://image.tmdb.org/t/p/w300/mFuFgPVuPmcYw0QtTub7HVj77AW.jpg'
},
{
    titulo: 'Perfume de Mulher',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0105323',
    imagem: 'https://image.tmdb.org/t/p/w300/7vYWmKziZCfuXuIesRdVHUtXaLY.jpg'
},
{
    titulo: 'Um Crime Americano',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0802948',
    imagem: 'https://image.tmdb.org/t/p/w300/vJx8tA2JtEQeEg6wR3uwEgf18hv.jpg'
},
{
    titulo: 'O Incrível Homem que Derreteu',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0076191',
    imagem: 'https://image.tmdb.org/t/p/w300/thXkryX2V1A2PkLIR6xkGQpwUgT.jpg'
},
{
    titulo: 'Quarto de Guerra',
    descricao: 'Descrição do filme 1',
    imdb: 'tt3832914',
    imagem: 'https://image.tmdb.org/t/p/w300/kyssvvCXc13c9VC7QTWjRo12FyE.jpg'
},
{
    titulo: 'Um Grande Garoto',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0276751',
    imagem: 'https://image.tmdb.org/t/p/w300/38idKGSXqTUUMy0gqbUfmNOBhwh.jpg'
},
{
    titulo: 'Banzé no Oeste',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0071230',
    imagem: 'https://image.tmdb.org/t/p/w300/tgPPqdMgOutIGmUnnhJi4uXgtrg.jpg'
},
{
    titulo: 'O Exterminador do Futuro 3: A Rebelião das Máquinas',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0181852',
    imagem: 'https://image.tmdb.org/t/p/w300/lzzuKhx8Ly6SZa8LxkT5Fvouc5z.jpg'
},
{
    titulo: 'O Exterminador do Futuro 4: A Salvação',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0438488',
    imagem: 'https://image.tmdb.org/t/p/w300/tNKoEs9ovTLpJURT9WKJASUDktM.jpg'
},
{
    titulo: 'Re/Member',
    descricao: 'Descrição do filme 6',
    imdb: 'tt21250176',
    imagem: 'https://image.tmdb.org/t/p/w300/pRNSIJyGM7cR8xAHee0obKXpzIl.jpg'
},
{
    titulo: 'O Preço da Traição',
    descricao: 'Descrição do filme 7',
    imdb: 'tt1352824',
    imagem: 'https://image.tmdb.org/t/p/w300/u0zwbjG47lPFK0dnIajMVUvbNRK.jpg'
},
{
    titulo: 'Trovão Azul',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0085255',
    imagem: 'https://image.tmdb.org/t/p/w300/5ZVFskWRNXsOEdUXrfi3JX6ohNr.jpg'
},
{
    titulo: 'O Menino que Descobriu o Vento',
    descricao: 'Descrição do filme 9',
    imdb: 'tt7533152',
    imagem: 'https://image.tmdb.org/t/p/w300/jZofpz4gmiH7MQAYWrgvTtdIq3l.jpg'
},
{
    titulo: 'Pantera Negra',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1825683',
    imagem: 'https://image.tmdb.org/t/p/w300/9D40jv8pi9uKnrVDPiN3JYYad72.jpg'
},
{
    titulo: 'A Guerra do Amanhã',
    descricao: 'Descrição do filme 11',
    imdb: 'tt9777666',
    imagem: 'https://image.tmdb.org/t/p/w300/lWQ3hI78Az2RHfzDpEuvougqUz7.jpg'
},
{
    titulo: 'Esquema de Risco: Operação Fortune',
    descricao: 'Descrição do filme 12',
    imdb: 'tt7985704',
    imagem: 'https://image.tmdb.org/t/p/w300/fLxXvMcpsK8fGKguP3wZ7Urb2ao.jpg'
},
{
    titulo: 'O Homem da Meia Noite',
    descricao: 'Descrição do filme 13',
    imdb: 'tt3685586',
    imagem: 'https://image.tmdb.org/t/p/w300/mNdzxgctIds9uLDbwGGmFj7kd2F.jpg'
},
{
    titulo: 'Vestida Para Matar',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0080661',
    imagem: 'https://image.tmdb.org/t/p/w300/3wlVVkyxACA2yB4mxZZYS05kXnH.jpg'
},
{
    titulo: 'Tony Parker - Entre os Maiores',
    descricao: 'Descrição do filme 15',
    imdb: 'tt13696668',
    imagem: 'https://image.tmdb.org/t/p/w300/p4lqK6xugHQNXmhKkoDHbi9a7BD.jpg'
},
{
    titulo: 'O Crime de Georgetown',
    descricao: 'Descrição do filme 16',
    imdb: 'tt4669252',
    imagem: 'https://image.tmdb.org/t/p/w300/iOWbf5oPwCpUznpXJD2snOODprk.jpg'
},
{
    titulo: 'A Porteira',
    descricao: 'Descrição do filme 17',
    imdb: 'tt6222118',
    imagem: 'https://image.tmdb.org/t/p/w300/lh9jmB0FVXjjs4z9ehX6O5wN915.jpg'
},
{
    titulo: 'Jogos Entre Amigos',
    descricao: 'Descrição do filme 18',
    imdb: 'tt7070818',
    imagem: 'https://image.tmdb.org/t/p/w300/qrFr8NVI5EuHbCn5dDpO2fNPhSg.jpg'
},
{
    titulo: 'Em Busca da Fama',
    descricao: 'Descrição do filme 19',
    imdb: 'tt7703924',
    imagem: 'https://image.tmdb.org/t/p/w300/rsC7KMIRVCyCfDhogZm8Ovg9war.jpg'
},
{
    titulo: 'O Guardião dos Mundos',
    descricao: 'Descrição do filme 20',
    imdb: 'tt6270596',
    imagem: 'https://image.tmdb.org/t/p/w300/6McPx1oITdAFuaDlzl5NRCrcTOO.jpg'
},
{
    titulo: 'Até as Últimas Consequências',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0117603',
    imagem: 'https://image.tmdb.org/t/p/w300/g6v8HNLCw03b0y022czoPOyww8C.jpg'
},
{
    titulo: 'Destemida',
    descricao: 'Descrição do filme 22',
    imdb: 'tt11692986',
    imagem: 'https://image.tmdb.org/t/p/w300/sYZafUrWu2Oj6gOMa4b6mzg0blp.jpg'
},
{
    titulo: 'Mank',
    descricao: 'Descrição do filme 23',
    imdb: 'tt10618286',
    imagem: 'https://image.tmdb.org/t/p/w300/4yzTcAtvzyZLLto4z04xobUK9el.jpg'
},
{
    titulo: 'Pode Guardar um Segredo?',
    descricao: 'Descrição do filme 24',
    imdb: 'tt8707922',
    imagem: 'https://image.tmdb.org/t/p/w300/ohVc9Y5cFLGyEf4941U1ox2l2Dp.jpg'
},
{
    titulo: 'Acredite em Mim: A História de Lisa Mcvey',
    descricao: 'Descrição do filme 1',
    imdb: 'tt9072202',
    imagem: 'https://image.tmdb.org/t/p/w300/uvHhYA3dpSX13KB0rtr1awgHT1r.jpg'
},
{
    titulo: 'The Minute You Wake Up Dead',
    descricao: 'Descrição do filme 2',
    imdb: 'tt11833408',
    imagem: 'https://image.tmdb.org/t/p/w300/pUPwTbnAqfm95BZjNBnMMf39ChT.jpg'
},
{
    titulo: 'O Cão e a Raposa',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0082406',
    imagem: 'https://image.tmdb.org/t/p/w300/AgLaNr1DEEKUvBlWmfk3NiLdpJp.jpg'
},
{
    titulo: 'Cidade dos Sonhos',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0166924',
    imagem: 'https://image.tmdb.org/t/p/w300/bqsgFIMKsWyba6XDaZLKoaeNk7r.jpg'
},
{
    titulo: 'Uma Garota Encantada',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0327679',
    imagem: 'https://image.tmdb.org/t/p/w300/z8erzsD2aMQwo6W309oM19g7qMF.jpg'
},
{
    titulo: 'O Misterioso Assassinato de Uma Família',
    descricao: 'Descrição do filme 6',
    imdb: 'tt1734067',
    imagem: 'https://image.tmdb.org/t/p/w300/oaDnDWYendYQ8peqplOOE1V3keS.jpg'
},
{
    titulo: 'Pequena Grande Vida',
    descricao: 'Descrição do filme 7',
    imdb: 'tt1389072',
    imagem: 'https://image.tmdb.org/t/p/w300/8P3Z0UEvx03Iqh8yHD54Tr16Dcv.jpg'
},
{
    titulo: 'Na Selva',
    descricao: 'Descrição do filme 8',
    imdb: 'tt3758172',
    imagem: 'https://image.tmdb.org/t/p/w300/ztVMXVNCIYK0CgXOjEmJlWupn95.jpg'
},
{
    titulo: 'O Pior Vizinho do Mundo',
    descricao: 'Descrição do filme 9',
    imdb: 'tt7405458',
    imagem: 'https://image.tmdb.org/t/p/w300/oXHNdN1hjg6RFQ5NP618KSAIrdE.jpg'
},
{
    titulo: 'No Ritmo do Coração',
    descricao: 'Descrição do filme 10',
    imdb: 'tt10366460',
    imagem: 'https://image.tmdb.org/t/p/w300/rnEcFnQYgZ6mmxeeaEeLNSZdgD8.jpg'
},
{
    titulo: 'Extraordinário',
    descricao: 'Descrição do filme 11',
    imdb: 'tt2543472',
    imagem: 'https://image.tmdb.org/t/p/w300/eB1vhoNrN2oR82fxsHp7vvLgMhz.jpg'
},
{
    titulo: 'A Cor Púrpura',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0088939',
    imagem: 'https://image.tmdb.org/t/p/w300/xMiXnyVOIM8ZXr1DlnsKKcwHuil.jpg'
},
{
    titulo: 'Bem-vindo à Selva',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0327850',
    imagem: 'https://image.tmdb.org/t/p/w300/5CgCYCiObKgst1UIdqibU8ZeKAX.jpg'
},
{
    titulo: 'Comer, Rezar, Amar',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0879870',
    imagem: 'https://image.tmdb.org/t/p/w300/5CMhiQnnLsKx5bgtndz6C5vhgRr.jpg'
},
{
    titulo: 'A Vizinhança Assombrada',
    descricao: 'Descrição do filme 15',
    imdb: 'tt5113086',
    imagem: 'https://image.tmdb.org/t/p/w300/kBpvdyMx7hD0zuTf1XrbHyxMx1Q.jpg'
},
{
    titulo: 'La Bamba',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0093378',
    imagem: 'https://image.tmdb.org/t/p/w300/jsEB1d2NspwskoovkUqLAPA1YZE.jpg'
},
{
    titulo: 'Os Estagiários',
    descricao: 'Descrição do filme 17',
    imdb: 'tt2234155',
    imagem: 'https://image.tmdb.org/t/p/w300/eJ2yNRyP3QJ36lO81f19ep98eWw.jpg'
},
{
    titulo: 'É o Fim',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1245492',
    imagem: 'https://image.tmdb.org/t/p/w300/Lo4M5BETSchjGz5Mlm0Jh8QzDF.jpg'
},
{
    titulo: 'Vizinhos Imediatos de 3º Grau',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1298649',
    imagem: 'https://image.tmdb.org/t/p/w300/s7ICZYFXI0h1EMfQ4ApJGtOar1m.jpg'
},
{
    titulo: 'Bom Dia, Vietnã',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0093105',
    imagem: 'https://image.tmdb.org/t/p/w300/nCGK7GwtjCu2gvdfyvxLX3JkxE9.jpg'
},
{
    titulo: 'Sete Noivas Para Sete Irmãos',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0047472',
    imagem: 'https://image.tmdb.org/t/p/w300/eExiNiIMAQ6ArzudNG3G3ehPTc.jpg'
},
{
    titulo: 'O Guarda-Costas em Ação',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0111835',
    imagem: 'https://image.tmdb.org/t/p/w300/eJOtGPybhBaMQyaJe0CGmkYBM28.jpg'
},
{
    titulo: 'O Confronto',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0267804',
    imagem: 'https://image.tmdb.org/t/p/w300/74K8HmqhYv9RE97Buqt8N1NDvo3.jpg'
},
{
    titulo: 'Janela Indiscreta',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0047396',
    imagem: 'https://image.tmdb.org/t/p/w300/smxs9rGSTvBOQryBi2DF7xAuuRr.jpg'
},
{
    titulo: 'A Lenda de Golem',
    descricao: 'Descrição do filme 1',
    imdb: 'tt8329290',
    imagem: 'https://image.tmdb.org/t/p/w300/rQ8Nk709kWuMMk0IMQmbJbZe7pa.jpg'
},
{
    titulo: 'Até Que A Fuga Os Separe',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0123964',
    imagem: 'https://image.tmdb.org/t/p/w300/nzkqudQHddBc4pOfJzjwHW2Me96.jpg'
},
{
    titulo: 'Raymond & Ray',
    descricao: 'Descrição do filme 3',
    imdb: 'tt15334032',
    imagem: 'https://image.tmdb.org/t/p/w300/fdKZmSQHD17JjGUYkluhpttgJRi.jpg'
},
{
    titulo: 'Cascavel',
    descricao: 'Descrição do filme 4',
    imdb: 'tt9257484',
    imagem: 'https://image.tmdb.org/t/p/w300/ca9IhQ2H72TRmnHf2ZDJXbffIdX.jpg'
},
{
    titulo: 'Madame Satã',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0317887',
    imagem: 'https://image.tmdb.org/t/p/w300/wbbEBwXxt51rVblXMWkgT0xFyBc.jpg'
},
{
    titulo: 'Valiant - Um Herói que Vale a Pena',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0361089',
    imagem: 'https://image.tmdb.org/t/p/w300/r9VNtY1qUflzWIWgOvPe3PUKMi0.jpg'
},
{
    titulo: 'Os Fantasmas de Scrooge',
    descricao: 'Descrição do filme 7',
    imdb: 'tt1067106',
    imagem: 'https://image.tmdb.org/t/p/w300/1qhU3VJo10sISkHIyANLsHioq0Y.jpg'
},
{
    titulo: 'Os Irmãos Grimm',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0355295',
    imagem: 'https://image.tmdb.org/t/p/w300/jerDxzhAVtNGPtDV0n9ePWCLlyK.jpg'
},
{
    titulo: 'Um Crush para o Natal',
    descricao: 'Descrição do filme 9',
    imdb: 'tt14315756',
    imagem: 'https://image.tmdb.org/t/p/w300/pv7QI2fQOZIG0QSbHv7Ot65O8YN.jpg'
},
{
    titulo: 'Certas Pessoas',
    descricao: 'Descrição do filme 10',
    imdb: 'tt14826022',
    imagem: 'https://image.tmdb.org/t/p/w300/49Km62y53mW1eOWSVzmPnWN01vY.jpg'
},
{
    titulo: 'Os Goonies',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0089218',
    imagem: 'https://image.tmdb.org/t/p/w300/6YGlQxEzEqQ5VYj64NvzbItXKPX.jpg'
},
{
    titulo: 'John e o Potrinho Mágico',
    descricao: 'Descrição do filme 12',
    imdb: 'tt11390180',
    imagem: 'https://image.tmdb.org/t/p/w300/t66a8QPn7V8NzxoDEA7IANc4ixI.jpg'
},
{
    titulo: 'Estou Me Guardando para Quando o Carnaval Chegar',
    descricao: 'Descrição do filme 13',
    imdb: 'tt9786006',
    imagem: 'https://image.tmdb.org/t/p/w300/pePGCu7krrUcg4EDgV6Wi9hiSYP.jpg'
},
{
    titulo: 'Limite Vertical',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0190865',
    imagem: 'https://image.tmdb.org/t/p/w300/8c2qdHK0zzCf40ALc3KxIb0eFUO.jpg'
},
{
    titulo: 'Cinderela',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0042332',
    imagem: 'https://image.tmdb.org/t/p/w300/Acj5mmoZQ5lKLNpU2y0XQCt5rNb.jpg'
},
{
    titulo: 'A Pequena Sereia',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0097757',
    imagem: 'https://image.tmdb.org/t/p/w300/oBFAs9hMdSgHKMvW6VLnh5SOfof.jpg'
},
{
    titulo: 'Os Instrumentos Mortais: Cidade dos Ossos',
    descricao: 'Descrição do filme 17',
    imdb: 'tt1538403',
    imagem: 'https://image.tmdb.org/t/p/w300/glHqwsvFkQHFMFpA0FjFp8hPu6P.jpg'
},
{
    titulo: 'Purity Falls',
    descricao: 'Descrição do filme 18',
    imdb: 'tt8589474',
    imagem: 'https://image.tmdb.org/t/p/w300/7zjKdP6mXzpeATxsbDUfMyenbJe.jpg'
},
{
    titulo: 'O Pai da Rita',
    descricao: 'Descrição do filme 19',
    imdb: 'tt11153132',
    imagem: 'https://image.tmdb.org/t/p/w300/t1Xs4xqE7pk3A6cbq5ohJagoNt2.jpg'
},
{
    titulo: 'O Contador',
    descricao: 'Descrição do filme 20',
    imdb: 'tt2140479',
    imagem: 'https://image.tmdb.org/t/p/w300/vgJt4ADIjm5U2y3oPLu6kXEXOCY.jpg'
},
{
    titulo: 'Me Tira da Mira',
    descricao: 'Descrição do filme 21',
    imdb: 'tt14257960',
    imagem: 'https://image.tmdb.org/t/p/w300/gxr04nWw0BuGVqdFNK8W4na4FYD.jpg'
},
{
    titulo: 'Ultravioleta',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0370032',
    imagem: 'https://image.tmdb.org/t/p/w300/oUjrVXrASYin8N7kJZ3gqgxIeHp.jpg'
},
{
    titulo: 'Quase Deuses',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0386792',
    imagem: 'https://image.tmdb.org/t/p/w300/ab6Wmvhn1zyXz16hSicwjAqBAsS.jpg'
},
{
    titulo: 'Nas Profundezas',
    descricao: 'Descrição do filme 24',
    imdb: 'tt11005128',
    imagem: 'https://image.tmdb.org/t/p/w300/b2IGeffDTCje0sEJdjBVwBPMUoW.jpg'
},
{
    titulo: 'O Mágico de Oz',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0032138',
    imagem: 'https://image.tmdb.org/t/p/w300/7sYIjWRzqClPK6hiqpOJOnaGUcO.jpg'
},
{
    titulo: 'Os Cavaleiros do Zodíaco: A Lenda do Santuário',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2231489',
    imagem: 'https://image.tmdb.org/t/p/w300/ozSUEsKgMNOdL4em13Xd7uKf9TW.jpg'
},
{
    titulo: 'Os Cavaleiros do Zodíaco: Prólogo do Céu',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0805605',
    imagem: 'https://image.tmdb.org/t/p/w300/rRJKrlFqW9nBh6UTkEexLXGazrH.jpg'
},
{
    titulo: 'Os Cavaleiros do Zodíaco: Os Guerreiros do Armageddon',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0326101',
    imagem: 'https://image.tmdb.org/t/p/w300/cXCWqtb7oRtkQfpxjdPS4G2c3RR.jpg'
},
{
    titulo: 'Os Cavaleiros do Zodíaco: A Lenda dos Defensores de Atena',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0326143',
    imagem: 'https://image.tmdb.org/t/p/w300/724kXHDFaSJw1WdYX2qi5XkYMLb.jpg'
},
{
    titulo: 'Os Cavaleiros do Zodíaco: A Grande Batalha dos Deuses',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0322918',
    imagem: 'https://image.tmdb.org/t/p/w300/1RsREkIc1t0oJLbYlz0tE8uZTbG.jpg'
},
{
    titulo: 'Os Cavaleiros do Zodíaco: O Santo Guerreiro',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0323869',
    imagem: 'https://image.tmdb.org/t/p/w300/nziTxFxx0l2hO7ZddZo903kVVU0.jpg'
},
{
    titulo: 'Invasores',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0427392',
    imagem: 'https://image.tmdb.org/t/p/w300/3zDDAOIi8fTnWsqkwfRCYGT3l0s.jpg'
},
{
    titulo: 'Os Banshees de Inisherin',
    descricao: 'Descrição do filme 9',
    imdb: 'tt11813216',
    imagem: 'https://image.tmdb.org/t/p/w300/rakuuNLbDX0OdQ9QQjnVH6YwVzt.jpg'
},
{
    titulo: 'O Plano Perfeito',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0454848',
    imagem: 'https://image.tmdb.org/t/p/w300/76z8q24vMul7IPguc0QUODF3THk.jpg'
},
{
    titulo: 'Matilda: O Musical',
    descricao: 'Descrição do filme 11',
    imdb: 'tt3447590',
    imagem: 'https://image.tmdb.org/t/p/w300/x5GR75CM0FbATtHjnAaE7WwUXkX.jpg'
},
{
    titulo: 'Wendell & Wild',
    descricao: 'Descrição do filme 12',
    imdb: 'tt5181830',
    imagem: 'https://image.tmdb.org/t/p/w300/5dsX6UAHqkQz1kiV8bs8SvjyVNa.jpg'
},
{
    titulo: 'Sharper: Uma Vida de Trapaças',
    descricao: 'Descrição do filme 13',
    imdb: 'tt12573454',
    imagem: 'https://image.tmdb.org/t/p/w300/nkvg5RbmDcLMfu5gfJHhMqdWBpK.jpg'
},
{
    titulo: 'Amnésia',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0209144',
    imagem: 'https://image.tmdb.org/t/p/w300/7leBWM27Q0TUnvmhw6WnFNgGn4G.jpg'
},
{
    titulo: 'Alex Strangelove',
    descricao: 'Descrição do filme 15',
    imdb: 'tt5688996',
    imagem: 'https://image.tmdb.org/t/p/w300/6OemqmvthXswt5KFmtXBCMMloJ4.jpg'
},
{
    titulo: 'Glass Onion: Um Mistério Knives Out',
    descricao: 'Descrição do filme 16',
    imdb: 'tt11564570',
    imagem: 'https://image.tmdb.org/t/p/w300/zQJcENHbZUpLQ8RKYt9wTzcXCwv.jpg'
},
{
    titulo: 'Bem-Vinda a Quixeramobim',
    descricao: 'Descrição do filme 17',
    imdb: 'tt18573106',
    imagem: 'https://image.tmdb.org/t/p/w300/7vdr6W7bs8LJMOGgwIJiAQUfG3Q.jpg'
},
{
    titulo: 'Amor Além do Tempo',
    descricao: 'Descrição do filme 18',
    imdb: 'tt10418680',
    imagem: 'https://image.tmdb.org/t/p/w300/qb2esYfCjkz2RhXDQCPz1evsQfY.jpg'
},
{
    titulo: 'Jung_E',
    descricao: 'Descrição do filme 19',
    imdb: 'tt22352848',
    imagem: 'https://image.tmdb.org/t/p/w300/qEkatvFb6hrebLBAanb25ea26yh.jpg'
},
{
    titulo: 'Na Sua Casa ou na Minha?',
    descricao: 'Descrição do filme 20',
    imdb: 'tt12823454',
    imagem: 'https://image.tmdb.org/t/p/w300/m7OCBWL0CngPMwe4b0iEsGxrlYg.jpg'
},
{
    titulo: 'Amor² Outra Vez',
    descricao: 'Descrição do filme 21',
    imdb: 'tt26369131',
    imagem: 'https://image.tmdb.org/t/p/w300/dxor2vaqkXLA6Z2VoJnqZWUTCKe.jpg'
},
{
    titulo: 'Casamento Armado',
    descricao: 'Descrição do filme 22',
    imdb: 'tt9686790',
    imagem: 'https://image.tmdb.org/t/p/w300/i3OgPuen3vi7UkAQCMZou2NkPUm.jpg'
},
{
    titulo: 'Mais Cedo Morto do que Casado',
    descricao: 'Descrição do filme 23',
    imdb: 'tt26448700',
    imagem: 'https://image.tmdb.org/t/p/w300/ewS8BeUqoNmzF7JQm07CiukwONb.jpg'
},
{
    titulo: 'O Lobo Viking',
    descricao: 'Descrição do filme 24',
    imdb: 'tt13051810',
    imagem: 'https://image.tmdb.org/t/p/w300/gWfa1uahpIXlNkv7AMEvQt4VMde.jpg'
},
{
    titulo: 'Whindersson Nunes: Isso não é um culto',
    descricao: 'Descrição do filme 1',
    imdb: 'tt26440342',
    imagem: 'https://image.tmdb.org/t/p/w300/om3ojwYvXOkEifztuSIFKqUruly.jpg'
},
{
    titulo: 'Até a Morte: Sobreviver é a Melhor Vingança',
    descricao: 'Descrição do filme 2',
    imdb: 'tt11804152',
    imagem: 'https://image.tmdb.org/t/p/w300/blWUQPSyv4vWJ8S8MS9lU9BD9Mf.jpg'
},
{
    titulo: 'Minority Report: A Nova Lei',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0181689',
    imagem: 'https://image.tmdb.org/t/p/w300/zJhHMqaAKnIZ1egGTRk7jOH80xH.jpg'
},
{
    titulo: 'Imersão',
    descricao: 'Descrição do filme 4',
    imdb: 'tt13845792',
    imagem: 'https://image.tmdb.org/t/p/w300/gTa2Vt5PSYRbOKG7WygvA6yiTuF.jpg'
},
{
    titulo: 'Junglee - Protegendo a Selva',
    descricao: 'Descrição do filme 5',
    imdb: 'tt7463730',
    imagem: 'https://image.tmdb.org/t/p/w300/8SX0Yd6D6YFR3EyXlJmDoaKRwbL.jpg'
},
{
    titulo: 'Beijos Escondidos',
    descricao: 'Descrição do filme 6',
    imdb: 'tt5572566',
    imagem: 'https://image.tmdb.org/t/p/w300/o1MYewl9UfEKJBNYneeJJG1CDGA.jpg'
},
{
    titulo: 'A Dama de Vermelho',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0088414',
    imagem: 'https://image.tmdb.org/t/p/w300/9CCvGclc8YmOmdoAqjCUda0LnQK.jpg'
},
{
    titulo: 'Roberto Carlos em Ritmo de Aventura',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0188180',
    imagem: 'https://image.tmdb.org/t/p/w300/jPfxsd7agja7tYJV76LahR3mfko.jpg'
},
{
    titulo: 'O Franco Atirador',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0077416',
    imagem: 'https://image.tmdb.org/t/p/w300/xjeaIyoZOWnPCX5E1JvzmkNv4QC.jpg'
},
{
    titulo: 'Cinderela e o Príncipe Secreto',
    descricao: 'Descrição do filme 10',
    imdb: 'tt6241270',
    imagem: 'https://image.tmdb.org/t/p/w300/caMtietnPdDz8EHSgH3nzijhEws.jpg'
},
{
    titulo: '400 Contra 1: Uma História do Crime Organizado',
    descricao: 'Descrição do filme 11',
    imdb: 'tt1781755',
    imagem: 'https://image.tmdb.org/t/p/w300/sMncURxEueGeBxdmx2gTFaNUgzF.jpg'
},
{
    titulo: 'Mundo Estranho',
    descricao: 'Descrição do filme 12',
    imdb: 'tt10298840',
    imagem: 'https://image.tmdb.org/t/p/w300/4KXsKY8j87jr1oX2uwO1tMbl4Px.jpg'
},
{
    titulo: 'A Bolha Assassina',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0094761',
    imagem: 'https://image.tmdb.org/t/p/w300/qHVFeoVN0UvzjpDnGNWx9f2scUZ.jpg'
},
{
    titulo: 'Python: A Cobra Assassina',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0209264',
    imagem: 'https://image.tmdb.org/t/p/w300/lDbTpRHTRFWBK4j0FAWpE4M5WT2.jpg'
},
{
    titulo: 'A Maldição: Despertar dos Mortos',
    descricao: 'Descrição do filme 15',
    imdb: 'tt17640714',
    imagem: 'https://image.tmdb.org/t/p/w300/k3IgF9W8ZD6BBdz2bljQAHydFCe.jpg'
},
{
    titulo: 'A Madrasta',
    descricao: 'Descrição do filme 16',
    imdb: 'tt4788734',
    imagem: 'https://image.tmdb.org/t/p/w300/xx3s9HORABYz3F3ZVPtomSANpYu.jpg'
},
{
    titulo: 'Homem-Formiga e a Vespa: Quantumania',
    descricao: 'Descrição do filme 17',
    imdb: 'tt10954600',
    imagem: 'https://image.tmdb.org/t/p/w300/mZBO9lcWAYEZ5F15xPQOQfA3Dm4.jpg'
},
{
    titulo: 'Krull',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0085811',
    imagem: 'https://image.tmdb.org/t/p/w300/b1anwwbh00R3iOgM88L5jf7qHBt.jpg'
},
{
    titulo: 'O Mundo de Andy',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0125664',
    imagem: 'https://image.tmdb.org/t/p/w300/qwabM2f4OHtm2c6PT2yd9qBw0TZ.jpg'
},
{
    titulo: 'O Homem da Califórnia',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0104187',
    imagem: 'https://image.tmdb.org/t/p/w300/fnyUrMLaaCGoZiqDhzy8xxTnJpw.jpg'
},
{
    titulo: 'O Milagre de Anne Sullivan',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0056241',
    imagem: 'https://image.tmdb.org/t/p/w300/3dI6UVM5W1sz3MU9gNK5nVDcAyQ.jpg'
},
{
    titulo: 'Esta Noite Encarnarei no Teu Cadáver',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0060380',
    imagem: 'https://image.tmdb.org/t/p/w300/kph6N2xuTUSCjrSCSnecrkf9WZs.jpg'
},
{
    titulo: 'Mac and Me',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0095560',
    imagem: 'https://image.tmdb.org/t/p/w300/gZsIgK2W9K6e1ebNro3WT7u5yGX.jpg'
},
{
    titulo: 'Furyo: Em Nome da Honra',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0085933',
    imagem: 'https://image.tmdb.org/t/p/w300/wsHWDTn8dcdKNzxAMZm0gEwxmIr.jpg'
},
{
    titulo: 'Uma Cidade Contra o Xerife',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0065051',
    imagem: 'https://image.tmdb.org/t/p/w300/o0o188F7ZuplQI171sbBxVn4kYu.jpg'
},
{
    titulo: 'Atração Fatal',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0093010',
    imagem: 'https://image.tmdb.org/t/p/w300/tSfJwVpXW1QqUV4ldAQScv5gmjj.jpg'
},
{
    titulo: 'O Homem da Casa',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0113755',
    imagem: 'https://image.tmdb.org/t/p/w300/uDf2IgyE7flYRAycliPw3LIcPfi.jpg'
},
{
    titulo: 'Elvis É Assim',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0065687',
    imagem: 'https://image.tmdb.org/t/p/w300/8qwwp5fOPNXDfaqta5x34nDXEDI.jpg'
},
{
    titulo: 'De Volta pra Casa',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0101786',
    imagem: 'https://image.tmdb.org/t/p/w300/waNhDcxcZGBSbpo1mW6C5jHafBD.jpg'
},
{
    titulo: 'Um Limite Entre Nós',
    descricao: 'Descrição do filme 6',
    imdb: 'tt2671706',
    imagem: 'https://image.tmdb.org/t/p/w300/4ymzdsNVg0NhXB72nfWHXE2TShq.jpg'
},
{
    titulo: 'Kondom des Grauens',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0116791',
    imagem: 'https://image.tmdb.org/t/p/w300/rgSa6G8PeslNvF73P0tWMBJoj5M.jpg'
},
{
    titulo: 'M3GAN',
    descricao: 'Descrição do filme 8',
    imdb: 'tt8760708',
    imagem: 'https://image.tmdb.org/t/p/w300/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg'
},
{
    titulo: 'Julgamento em Nuremberg',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0055031',
    imagem: 'https://image.tmdb.org/t/p/w300/3ollXGoWPfbZZrNCLH6Y7o3ufoU.jpg'
},
{
    titulo: 'O Pássaro Pintado',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1667354',
    imagem: 'https://image.tmdb.org/t/p/w300/h5E5kqVGH5DYic95C6EQMFqFbc6.jpg'
},
{
    titulo: 'Sete Anos em Maio',
    descricao: 'Descrição do filme 11',
    imdb: 'tt11327962',
    imagem: 'https://image.tmdb.org/t/p/w300/qMo8I1knXmhkKf0xINTAYJqBdaf.jpg'
},
{
    titulo: 'Limite da Honra',
    descricao: 'Descrição do filme 12',
    imdb: 'tt7223050',
    imagem: 'https://image.tmdb.org/t/p/w300/gv5NhsZfE9obeb1c3PXNOmQDtTg.jpg'
},
{
    titulo: 'Errementari: O Ferreiro e o Diabo',
    descricao: 'Descrição do filme 13',
    imdb: 'tt5592878',
    imagem: 'https://image.tmdb.org/t/p/w300/bedYbbNKNbQFWWJ2lHTC1rSXFUy.jpg'
},
{
    titulo: 'O Chefe',
    descricao: 'Descrição do filme 14',
    imdb: 'tt7527538',
    imagem: 'https://image.tmdb.org/t/p/w300/jvHzkK0VvKQ3noByKaRnKB2VYYt.jpg'
},
{
    titulo: 'Garotos de Lugar Nenhum: O Livro das Sombras',
    descricao: 'Descrição do filme 15',
    imdb: 'tt4836736',
    imagem: 'https://image.tmdb.org/t/p/w300/l2kSOBNefdnecApywIZV8EnuJuR.jpg'
},
{
    titulo: 'Apartamento 212 - A Infestação',
    descricao: 'Descrição do filme 16',
    imdb: 'tt5641542',
    imagem: 'https://image.tmdb.org/t/p/w300/fnFWKwdkuiZ9OU2ZoyEmxQdFUyT.jpg'
},
{
    titulo: 'Um Pequeno Favor',
    descricao: 'Descrição do filme 17',
    imdb: 'tt7040874',
    imagem: 'https://image.tmdb.org/t/p/w300/13vGKhA7Y3XWXSRwl43Z8HoTNnI.jpg'
},
{
    titulo: 'Matador de Aluguel',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1726669',
    imagem: 'https://image.tmdb.org/t/p/w300/vr470u3L5govXLpoqtUe8S9GyxE.jpg'
},
{
    titulo: 'A Invasora',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0856288',
    imagem: 'https://image.tmdb.org/t/p/w300/O4ignaPtoqBTsaF6h7JWuduzCg.jpg'
},
{
    titulo: 'O Menino, a Toupeira, a Raposa e o Cavalo',
    descricao: 'Descrição do filme 20',
    imdb: 'tt22667880',
    imagem: 'https://image.tmdb.org/t/p/w300/765XUik0cbyWHITgE22FhpA8elG.jpg'
},
{
    titulo: 'A Noiva de Frankenstein',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0026138',
    imagem: 'https://image.tmdb.org/t/p/w300/459XH176R35BwUhdjvAT7oBfoJL.jpg'
},
{
    titulo: 'Teen Wolf: O Filme',
    descricao: 'Descrição do filme 22',
    imdb: 'tt15486810',
    imagem: 'https://image.tmdb.org/t/p/w300/e4M1YCKc07PeBoUs7ST2QgCiZFB.jpg'
},
{
    titulo: 'Ad Astra - Rumo às Estrelas',
    descricao: 'Descrição do filme 23',
    imdb: 'tt2935510',
    imagem: 'https://image.tmdb.org/t/p/w300/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg'
},
{
    titulo: 'O Homem Que Fazia Chover',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0119978',
    imagem: 'https://image.tmdb.org/t/p/w300/iP6GUNprqvyKyQawiiBv426FVXG.jpg'
},
{
    titulo: 'A Morte lhe Cai Bem',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0104070',
    imagem: 'https://image.tmdb.org/t/p/w300/fuQOOSx0SkPH6yw1sCvRItWXPUQ.jpg'
},
{
    titulo: 'Atentado em Paris',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2368619',
    imagem: 'https://image.tmdb.org/t/p/w300/qIDP5eT4azlanpUJFQJq2ZYWw4Y.jpg'
},
{
    titulo: 'Perdas e Danos',
    descricao: 'Descrição do filme 3',
    imdb: 'tt8829830',
    imagem: 'https://image.tmdb.org/t/p/w300/tGFXEyESXIuei5tZWXRkSRSFSxi.jpg'
},
{
    titulo: 'Escuridão Mortal',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1194271',
    imagem: 'https://image.tmdb.org/t/p/w300/w4toWMBnPNvKtEb8cgodIKqS8Rh.jpg'
},
{
    titulo: 'Fale com Ela',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0287467',
    imagem: 'https://image.tmdb.org/t/p/w300/yWigIdXSA6X3Iw8HRfnweXjETf.jpg'
},
{
    titulo: 'A Enfermeira Assassina',
    descricao: 'Descrição do filme 6',
    imdb: 'tt1913166',
    imagem: 'https://image.tmdb.org/t/p/w300/k82jk8ZWy1W5NzI7NFnTvGUhrmF.jpg'
},
{
    titulo: 'Snoopy Apresenta: A Escola da Lucy',
    descricao: 'Descrição do filme 7',
    imdb: 'tt21405896',
    imagem: 'https://image.tmdb.org/t/p/w300/ikvLmYOsYjy5qoGS9Lpu092rO6z.jpg'
},
{
    titulo: 'O Chamado vs. O Grito',
    descricao: 'Descrição do filme 8',
    imdb: 'tt5309954',
    imagem: 'https://image.tmdb.org/t/p/w300/3tXKwe41EfBZs3uSWur9yhR48aA.jpg'
},
{
    titulo: 'バイロケーション',
    descricao: 'Descrição do filme 9',
    imdb: 'tt3029570',
    imagem: 'https://image.tmdb.org/t/p/w300/wuUPEmMJqEJKuyMMqsqRTxeIlR1.jpg'
},
{
    titulo: 'Killer Toon',
    descricao: 'Descrição do filme 10',
    imdb: 'tt2973516',
    imagem: 'https://image.tmdb.org/t/p/w300/dNGdA2n1YAGnS3ozhXE9nZxwFZR.jpg'
},
{
    titulo: 'Tito e os Pássaros',
    descricao: 'Descrição do filme 11',
    imdb: 'tt8327492',
    imagem: 'https://image.tmdb.org/t/p/w300/3ymTnRmZ9F7WICOAmYNMECF7bgQ.jpg'
},
{
    titulo: 'A Saga Crepúsculo: Amanhecer - Parte 2',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1673434',
    imagem: 'https://image.tmdb.org/t/p/w300/pVNobbWwSM2xpv2rRejxwnHf4xH.jpg'
},
{
    titulo: 'A Saga Crepúsculo: Amanhecer - Parte 1',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1324999',
    imagem: 'https://image.tmdb.org/t/p/w300/a6PexAo0jJRLlPNBfdiXXr0HYyz.jpg'
},
{
    titulo: 'A Saga Crepúsculo: Eclipse',
    descricao: 'Descrição do filme 14',
    imdb: 'tt1325004',
    imagem: 'https://image.tmdb.org/t/p/w300/cAQsjxYdfkzhrDZwVDDtMksS34u.jpg'
},
{
    titulo: 'A Saga Crepúsculo: Lua Nova',
    descricao: 'Descrição do filme 15',
    imdb: 'tt1259571',
    imagem: 'https://image.tmdb.org/t/p/w300/gF0TjnaoKqsYaSni1YN1snQ8q4z.jpg'
},
{
    titulo: 'Crepúsculo',
    descricao: 'Descrição do filme 16',
    imdb: 'tt1099212',
    imagem: 'https://image.tmdb.org/t/p/w300/e33qJrkBGQHWc93FgIuyYWnmeBQ.jpg'
},
{
    titulo: 'Superlópez',
    descricao: 'Descrição do filme 17',
    imdb: 'tt4110388',
    imagem: 'https://image.tmdb.org/t/p/w300/7doCBDNnEITiRg4LPI7wK1jdb4p.jpg'
},
{
    titulo: 'A Dama e o Vagabundo',
    descricao: 'Descrição do filme 18',
    imdb: 'tt8096832',
    imagem: 'https://image.tmdb.org/t/p/w300/vnBl7huZPEPsxD2ZmqZqRBI3efr.jpg'
},
{
    titulo: 'Enquanto Você Dormia',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0114924',
    imagem: 'https://image.tmdb.org/t/p/w300/hid0NixxCPkoIxTisp82eq3xW7J.jpg'
},
{
    titulo: 'Antes Só do que Mal Acompanhado',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0093748',
    imagem: 'https://image.tmdb.org/t/p/w300/ulMbGa8XEz0zMXkDkIX4PN3a51.jpg'
},
{
    titulo: 'Broad Peak',
    descricao: 'Descrição do filme 21',
    imdb: 'tt8983230',
    imagem: 'https://image.tmdb.org/t/p/w300/hssJ3koEXveKRDXb3r6ujEuySGF.jpg'
},
{
    titulo: 'O Tempo com Você',
    descricao: 'Descrição do filme 22',
    imdb: 'tt9426210',
    imagem: 'https://image.tmdb.org/t/p/w300/tdBhe9LVIBKMgfGYJSkY2dVqfaz.jpg'
},
{
    titulo: 'Agente Infiltrada',
    descricao: 'Descrição do filme 23',
    imdb: 'tt8000718',
    imagem: 'https://image.tmdb.org/t/p/w300/7PpgvIQlaYLL3HSNwidsppnpf3A.jpg'
},
{
    titulo: 'Destinos Traçados',
    descricao: 'Descrição do filme 24',
    imdb: 'tt14456350',
    imagem: 'https://image.tmdb.org/t/p/w300/xfxdIBdNHhPhIVCWWDVfzsKG03Y.jpg'
},
{
    titulo: 'D.P.A. 3: O Filme - Uma Aventura no Fim do Mundo',
    descricao: 'Descrição do filme 1',
    imdb: 'tt10805260',
    imagem: 'https://image.tmdb.org/t/p/w300/orXhDQCtC086ccqUdkwOwZqN0kQ.jpg'
},
{
    titulo: 'Ligação Explosiva',
    descricao: 'Descrição do filme 2',
    imdb: 'tt14980972',
    imagem: 'https://image.tmdb.org/t/p/w300/9tvZdU8QleViosTImC9cdODuBPU.jpg'
},
{
    titulo: 'As Hereges',
    descricao: 'Descrição do filme 3',
    imdb: 'tt3111516',
    imagem: 'https://image.tmdb.org/t/p/w300/or9QoOcHfsaypC7UiCEIFtls48N.jpg'
},
{
    titulo: 'Cavalo de Guerra',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1568911',
    imagem: 'https://image.tmdb.org/t/p/w300/8KCu49IhGK5IpqKRO1i2UGLQt6A.jpg'
},
{
    titulo: 'Corajosos',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1630036',
    imagem: 'https://image.tmdb.org/t/p/w300/gvp6uecYSWQn8cV0fGZ6j1g1Kvx.jpg'
},
{
    titulo: 'Karatê Kid: A Hora da Verdade',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0087538',
    imagem: 'https://image.tmdb.org/t/p/w300/6qBjCK2ZzQUfdY1oxoHY7dSfCbb.jpg'
},
{
    titulo: 'A Casa',
    descricao: 'Descrição do filme 7',
    imdb: 'tt9345754',
    imagem: 'https://image.tmdb.org/t/p/w300/xp2UO1n3LmeS0sXc7iUtROeeOuY.jpg'
},
{
    titulo: 'As Aventuras de Tadeo e a Tábua de Esmeralda',
    descricao: 'Descrição do filme 8',
    imdb: 'tt14941698',
    imagem: 'https://image.tmdb.org/t/p/w300/9KADuZT3KwmCYIrmarPuGyGTriw.jpg'
},
{
    titulo: 'Luccas Neto em: O Mapa do Tesouro',
    descricao: 'Descrição do filme 9',
    imdb: 'tt13649214',
    imagem: 'https://image.tmdb.org/t/p/w300/4RDxMKvGGqNElnHpjPenlHEJUg.jpg'
},
{
    titulo: 'Minari: Em Busca da Felicidade',
    descricao: 'Descrição do filme 10',
    imdb: 'tt10633456',
    imagem: 'https://image.tmdb.org/t/p/w300/aQxf2xZjMoerIAqR8grFzPFNDaO.jpg'
},
{
    titulo: 'Dragon Ball Z: O Renascimento de Freeza',
    descricao: 'Descrição do filme 11',
    imdb: 'tt3819668',
    imagem: 'https://image.tmdb.org/t/p/w300/oth0VBziwe25mDzkJ6XzwmUCCDC.jpg'
},
{
    titulo: 'No Balanço das Coisas',
    descricao: 'Descrição do filme 12',
    imdb: 'tt6833470',
    imagem: 'https://image.tmdb.org/t/p/w300/n18Nnjyl4GUJx2paLNZASRppLkb.jpg'
},
{
    titulo: 'Quella villa in fondo al parco',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0095942',
    imagem: 'https://image.tmdb.org/t/p/w300/k3Z22iR1Ik0NcFHzixULuYYFZHS.jpg'
},
{
    titulo: 'Sangue de Pantera',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0034587',
    imagem: 'https://image.tmdb.org/t/p/w300/7KOcYgJ7r8DUjpldsvNzUyEQKz4.jpg'
},
{
    titulo: 'Uma Gota de Esperança',
    descricao: 'Descrição do filme 15',
    imdb: 'tt14604410',
    imagem: 'https://image.tmdb.org/t/p/w300/43PfIx3oQVsVJIQM6pdCBKTyBNu.jpg'
},
{
    titulo: 'Partida Fria',
    descricao: 'Descrição do filme 16',
    imdb: 'tt6445414',
    imagem: 'https://image.tmdb.org/t/p/w300/7YRO2Jamqb6ck5vJqrwWgMFWuPW.jpg'
},
{
    titulo: 'Gia: Fama e Destruição',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0123865',
    imagem: 'https://image.tmdb.org/t/p/w300/nvGZ4jKd7Y3CD8Cps1m8wr1PMTo.jpg'
},
{
    titulo: 'Topázio',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0065112',
    imagem: 'https://image.tmdb.org/t/p/w300/4AuYKW9X9Utjtxyh1hgy8DL2leb.jpg'
},
{
    titulo: 'Stuber: A Corrida Maluca',
    descricao: 'Descrição do filme 19',
    imdb: 'tt7734218',
    imagem: 'https://image.tmdb.org/t/p/w300/bopJPyP68dJEjO7i0gUrYMYC0Eh.jpg'
},
{
    titulo: 'Trocando os Pés',
    descricao: 'Descrição do filme 20',
    imdb: 'tt3203616',
    imagem: 'https://image.tmdb.org/t/p/w300/o0OL6zpJepJW5C6yPsAFRTGqGCg.jpg'
},
{
    titulo: 'Este é o Meu Garoto',
    descricao: 'Descrição do filme 21',
    imdb: 'tt1232200',
    imagem: 'https://image.tmdb.org/t/p/w300/avc0QOU93qnpH9b9ocDGBwL68Qr.jpg'
},
{
    titulo: 'Zohan: Um Agente Bom de Corte',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0960144',
    imagem: 'https://image.tmdb.org/t/p/w300/mT81xdLGdexnLfPqiNjjZ2BR82u.jpg'
},
{
    titulo: 'Eu os Declaro Marido... e Larry',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0762107',
    imagem: 'https://image.tmdb.org/t/p/w300/aIlsFdoLkSixeqwqcSKi19xAT2w.jpg'
},
{
    titulo: '3 Ninjas do Barulho',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0118539',
    imagem: 'https://image.tmdb.org/t/p/w300/hro6QSAQ9s8slnDtB7SzhjcmTet.jpg'
},
{
    titulo: 'Skinamarink',
    descricao: 'Descrição do filme 1',
    imdb: 'tt21307994',
    imagem: 'https://image.tmdb.org/t/p/w300/o942912KFh89SGhqWuKXuT0SXzN.jpg'
},
{
    titulo: 'Guerra Alienígena',
    descricao: 'Descrição do filme 2',
    imdb: 'tt4566780',
    imagem: 'https://image.tmdb.org/t/p/w300/4trb7VI220GFVUvFlO0cj11SWyi.jpg'
},
{
    titulo: 'A Pedra da Serpente',
    descricao: 'Descrição do filme 3',
    imdb: 'tt8356674',
    imagem: 'https://image.tmdb.org/t/p/w300/8c8pMd6M6zBsOqF82lG7niLB9xt.jpg'
},
{
    titulo: 'Rosa Amarela',
    descricao: 'Descrição do filme 4',
    imdb: 'tt6862538',
    imagem: 'https://image.tmdb.org/t/p/w300/9LCmW7y8796PDKjMFEi8snYFIWQ.jpg'
},
{
    titulo: 'Ensaio Sobre a Cegueira',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0861689',
    imagem: 'https://image.tmdb.org/t/p/w300/ipBaKBbeeFtYiZzvZmEIeiuNFem.jpg'
},
{
    titulo: 'Eu, Eu Mesmo & Irene',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0183505',
    imagem: 'https://image.tmdb.org/t/p/w300/gzoeXKICGubWgdQ0EYRNZceVpPs.jpg'
},
{
    titulo: 'Maze Runner: A Cura Mortal',
    descricao: 'Descrição do filme 7',
    imdb: 'tt4500922',
    imagem: 'https://image.tmdb.org/t/p/w300/uBEpWurzTOiz520d1tRNhBXN7h9.jpg'
},
{
    titulo: 'O Amante de Lady Chatterley',
    descricao: 'Descrição do filme 8',
    imdb: 'tt14369780',
    imagem: 'https://image.tmdb.org/t/p/w300/hydNtbpr8Ryahb7HzdkeSicBGQo.jpg'
},
{
    titulo: 'Maze Runner: Prova de Fogo',
    descricao: 'Descrição do filme 9',
    imdb: 'tt4046784',
    imagem: 'https://image.tmdb.org/t/p/w300/zpdGT57Rn3mAZsNOkeDeINB6L9v.jpg'
},
{
    titulo: 'Emancipation - Uma História de Liberdade',
    descricao: 'Descrição do filme 10',
    imdb: 'tt12530246',
    imagem: 'https://image.tmdb.org/t/p/w300/izTIOynukDcN9dp7uPlwBjHr8f5.jpg'
},
{
    titulo: 'Midway: Batalha em Alto Mar',
    descricao: 'Descrição do filme 11',
    imdb: 'tt6924650',
    imagem: 'https://image.tmdb.org/t/p/w300/f2x8lIh0olfwqe5Jbwsw4Ojc5ie.jpg'
},
{
    titulo: 'A 100 Passos de Um Sonho',
    descricao: 'Descrição do filme 12',
    imdb: 'tt2980648',
    imagem: 'https://image.tmdb.org/t/p/w300/y0vh5ybPZAYTVw1FWndgQyXAeeP.jpg'
},
{
    titulo: 'Foxcatcher: Uma História Que Chocou o Mundo',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1100089',
    imagem: 'https://image.tmdb.org/t/p/w300/bim6tB3N5xB7wXjanWPIV14Qq53.jpg'
},
{
    titulo: 'Congo',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0112715',
    imagem: 'https://image.tmdb.org/t/p/w300/hPNSToNIIpRO6y5Rh973leqQqNr.jpg'
},
{
    titulo: 'Paixão de Aluguel',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0380623',
    imagem: 'https://image.tmdb.org/t/p/w300/lM6ighYx3GBqtlnLFhDV9JQRJ1A.jpg'
},
{
    titulo: 'Demônio',
    descricao: 'Descrição do filme 16',
    imdb: 'tt1314655',
    imagem: 'https://image.tmdb.org/t/p/w300/tl6MrepOdoT12wYDf2bqULN3DRO.jpg'
},
{
    titulo: 'A Mão que Balança o Berço',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0104389',
    imagem: 'https://image.tmdb.org/t/p/w300/iGajknLCU3m3caSU8f6W03OMnr2.jpg'
},
{
    titulo: 'Espinhos',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1031280',
    imagem: 'https://image.tmdb.org/t/p/w300/tFNReQlU92jmN7uuR1HHLiFkEua.jpg'
},
{
    titulo: 'Gato de Botas 2: O Último Pedido',
    descricao: 'Descrição do filme 19',
    imdb: 'tt3915174',
    imagem: 'https://image.tmdb.org/t/p/w300/65NBNqJiaHeCmqDqkCmrRplJXw.jpg'
},
{
    titulo: 'Oldboy',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0364569',
    imagem: 'https://image.tmdb.org/t/p/w300/o4pkvVh8BPFOawIJ79dgoD5wvvZ.jpg'
},
{
    titulo: 'Exército do Amanhã',
    descricao: 'Descrição do filme 21',
    imdb: 'tt7375466',
    imagem: 'https://image.tmdb.org/t/p/w300/72f0kFmOutPhSaZkXs0oGDmfvRd.jpg'
},
{
    titulo: 'A Guerra do Fogo',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0082484',
    imagem: 'https://image.tmdb.org/t/p/w300/hLjAzIQQLHYrgzT4PuT8pLgqeV3.jpg'
},
{
    titulo: 'Camille: Um Amor de Outro Mundo',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0462219',
    imagem: 'https://image.tmdb.org/t/p/w300/4YtQP4w1PJ1vcCvod4M55obC7h0.jpg'
},
{
    titulo: 'Dennis, o Pimentinha',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0106701',
    imagem: 'https://image.tmdb.org/t/p/w300/A9zJyQvF8yXC5HPTMB24hMeQFq1.jpg'
},
{
    titulo: 'Footloose: Ritmo Louco',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0087277',
    imagem: 'https://image.tmdb.org/t/p/w300/75VyWleaOlLhoh275uRQgOcoI6J.jpg'
},
{
    titulo: 'Quem com Ferro Fere',
    descricao: 'Descrição do filme 2',
    imdb: 'tt7967412',
    imagem: 'https://image.tmdb.org/t/p/w300/qRIA3Pug05jrfFZ7CvuiS7U7hx.jpg'
},
{
    titulo: 'A Colônia',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0119013',
    imagem: 'https://image.tmdb.org/t/p/w300/AqwtE8USreQ48Kv1S0mtMHMX957.jpg'
},
{
    titulo: 'Surpresas do Amor',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0369436',
    imagem: 'https://image.tmdb.org/t/p/w300/j237FZEU0K96o01nIihgABvN4qy.jpg'
},
{
    titulo: 'Um Mistério de Aurora Teagarden: O Jogo do Desaparecimento',
    descricao: 'Descrição do filme 5',
    imdb: 'tt8490686',
    imagem: 'https://image.tmdb.org/t/p/w300/8kEpjBSCllgo2tCPPE8hxym208p.jpg'
},
{
    titulo: 'Renegados Pela Justiça',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0098188',
    imagem: 'https://image.tmdb.org/t/p/w300/3BTZifge3VPP6mI1JBHdkbXkxxA.jpg'
},
{
    titulo: 'Hellraiser: Renascido do Inferno',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0887261',
    imagem: 'https://image.tmdb.org/t/p/w300/f9ZAIUxTTk23vo1BC9Ur1Rx5c2E.jpg'
},
{
    titulo: 'Os Crimes de Limehouse',
    descricao: 'Descrição do filme 8',
    imdb: 'tt4733640',
    imagem: 'https://image.tmdb.org/t/p/w300/53HgFUeoDoe99kQ1LwF9fytUZAl.jpg'
},
{
    titulo: 'Sombra Ardente',
    descricao: 'Descrição do filme 9',
    imdb: 'tt6923858',
    imagem: 'https://image.tmdb.org/t/p/w300/dCht1R80JpEr6F3Xj2j1f7uL6bW.jpg'
},
{
    titulo: 'eHero',
    descricao: 'Descrição do filme 10',
    imdb: 'tt3615952',
    imagem: 'https://image.tmdb.org/t/p/w300/44o3BCX1Pvc9zamNnEFFWLddu2G.jpg'
},
{
    titulo: 'La llamada',
    descricao: 'Descrição do filme 11',
    imdb: 'tt5176252',
    imagem: 'https://image.tmdb.org/t/p/w300/dREhwLHI49ffsOx40XXBfYlmiFK.jpg'
},
{
    titulo: 'Barbie Em Um Mundo de Video Game',
    descricao: 'Descrição do filme 12',
    imdb: 'tt6185658',
    imagem: 'https://image.tmdb.org/t/p/w300/rWQPf9Q8CAHIpBP8SVLE3uaSmf4.jpg'
},
{
    titulo: 'Encontro de Casais',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1078940',
    imagem: 'https://image.tmdb.org/t/p/w300/hR52K4R1eGAj2VYno6t6pCTlphA.jpg'
},
{
    titulo: 'Os Outros Caras',
    descricao: 'Descrição do filme 14',
    imdb: 'tt1386588',
    imagem: 'https://image.tmdb.org/t/p/w300/gHzt2VR585107h4E1f8yva0s2P0.jpg'
},
{
    titulo: 'Lutando Pela Família',
    descricao: 'Descrição do filme 15',
    imdb: 'tt6513120',
    imagem: 'https://image.tmdb.org/t/p/w300/8w8LcQAG2Yo8EQUjNyNPiBZ442B.jpg'
},
{
    titulo: 'Coração de Cavaleiro',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0183790',
    imagem: 'https://image.tmdb.org/t/p/w300/zn0PeaYPzcTto29R9MEieXAyaQd.jpg'
},
{
    titulo: 'Moonwalker',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0095655',
    imagem: 'https://image.tmdb.org/t/p/w300/3GwTPQkAcgDeAirRpEuJG8HDdRz.jpg'
},
{
    titulo: 'Loucas Por Amor, Viciadas em Dinheiro',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0951216',
    imagem: 'https://image.tmdb.org/t/p/w300/pMaygAnovaDuwZCAPdKZEpyM8uQ.jpg'
},
{
    titulo: 'Um Sonho Distante',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0104231',
    imagem: 'https://image.tmdb.org/t/p/w300/1INZsj5unvyvpaetQvl2JOmiiej.jpg'
},
{
    titulo: 'A Música do Silêncio',
    descricao: 'Descrição do filme 20',
    imdb: 'tt3244786',
    imagem: 'https://image.tmdb.org/t/p/w300/xFLxGQ7YhH5Oc6XgHa2fXAfJTSE.jpg'
},
{
    titulo: 'O Mundo é Seu',
    descricao: 'Descrição do filme 21',
    imdb: 'tt6892462',
    imagem: 'https://image.tmdb.org/t/p/w300/wL9fOXMKlT6TaDhCQw7SfYgC0Lf.jpg'
},
{
    titulo: 'Um Novo Desafio para Callan e sua Equipe',
    descricao: 'Descrição do filme 22',
    imdb: 'tt3592904',
    imagem: 'https://image.tmdb.org/t/p/w300/oTru4TETVZ7j8qkX7HZj0wjnSm1.jpg'
},
{
    titulo: 'Superman: O Retorno',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0348150',
    imagem: 'https://image.tmdb.org/t/p/w300/8ITZTyXh88ylGFEePoLfz8iex8e.jpg'
},
{
    titulo: 'Superman 4: Em Busca da Paz',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0094074',
    imagem: 'https://image.tmdb.org/t/p/w300/rUBLocsfASNbVC2RueRGp1IPrmO.jpg'
},
{
    titulo: 'Superman 3',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0086393',
    imagem: 'https://image.tmdb.org/t/p/w300/c4oR6qgZW2s5foGkQi2Dd86KuAS.jpg'
},
{
    titulo: 'Superman 2: A Aventura Continua',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0081573',
    imagem: 'https://image.tmdb.org/t/p/w300/5oOpi5evcEfw5w9hn09Re1VWvI8.jpg'
},
{
    titulo: 'Superman: O Filme',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0078346',
    imagem: 'https://image.tmdb.org/t/p/w300/sKK8syhz0sEoRVjb6OKULuMLCq3.jpg'
},
{
    titulo: 'Creed II',
    descricao: 'Descrição do filme 4',
    imdb: 'tt6343314',
    imagem: 'https://image.tmdb.org/t/p/w300/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg'
},
{
    titulo: 'Casa da Mãe Joana 2',
    descricao: 'Descrição do filme 5',
    imdb: 'tt3158456',
    imagem: 'https://image.tmdb.org/t/p/w300/9jpaOJq1SZeABRRyXYFpL7VO7Cs.jpg'
},
{
    titulo: 'Close',
    descricao: 'Descrição do filme 6',
    imdb: 'tt9660502',
    imagem: 'https://image.tmdb.org/t/p/w300/eZmDdKeggleJhMJwW2SFocbc2Cg.jpg'
},
{
    titulo: 'Compramos um Zoológico',
    descricao: 'Descrição do filme 7',
    imdb: 'tt1389137',
    imagem: 'https://image.tmdb.org/t/p/w300/iuAa3Kju0FgYLOFiF3jPGJJN7lg.jpg'
},
{
    titulo: 'Crime e Desejo',
    descricao: 'Descrição do filme 8',
    imdb: 'tt5688068',
    imagem: 'https://image.tmdb.org/t/p/w300/h41DZREsYkm9Nq0HZ9YMP2pWlJg.jpg'
},
{
    titulo: 'Estranho Mas Verdade',
    descricao: 'Descrição do filme 9',
    imdb: 'tt2866708',
    imagem: 'https://image.tmdb.org/t/p/w300/uLONkqT3TGUJHN6enTSiQGRuViz.jpg'
},
{
    titulo: 'Quando Você Chegou',
    descricao: 'Descrição do filme 10',
    imdb: 'tt4859168',
    imagem: 'https://image.tmdb.org/t/p/w300/xBqfDbOiKV4Y6ejB9oj0rwMWSi.jpg'
},
{
    titulo: 'Ava',
    descricao: 'Descrição do filme 11',
    imdb: 'tt8784956',
    imagem: 'https://image.tmdb.org/t/p/w300/6llUjNLsLiAcpIOer9LR631HPoU.jpg'
},
{
    titulo: 'Virei um Gato',
    descricao: 'Descrição do filme 12',
    imdb: 'tt4383594',
    imagem: 'https://image.tmdb.org/t/p/w300/fZXms7VBxpRZlJbunf2CRMW0hyJ.jpg'
},
{
    titulo: 'Curtindo a Vida Adoidado',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0091042',
    imagem: 'https://image.tmdb.org/t/p/w300/kUqhcfr5IoaE76NOIQl53gn3y3Q.jpg'
},
{
    titulo: 'Dirty Dancing: Ritmo Quente',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0092890',
    imagem: 'https://image.tmdb.org/t/p/w300/diYAEG9hqtxnjCwkClwY2zkCtun.jpg'
},
{
    titulo: 'Mudança de Hábito 2: Mais Loucuras no Convento',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0108147',
    imagem: 'https://image.tmdb.org/t/p/w300/Zl3wQzgqG4lnA4TfFRU7W7bpMA.jpg'
},
{
    titulo: 'Mudança de Hábito',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0105417',
    imagem: 'https://image.tmdb.org/t/p/w300/kUOX7ATkXq1R5QpmIXZ5rXT9NOX.jpg'
},
{
    titulo: 'Com Deus no Caminho',
    descricao: 'Descrição do filme 17',
    imdb: 'tt5702446',
    imagem: 'https://image.tmdb.org/t/p/w300/gf8UorHYHxTR8hZAgElXGHLWMDF.jpg'
},
{
    titulo: 'Por um Fio',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0183649',
    imagem: 'https://image.tmdb.org/t/p/w300/fxP5upLdioZUCMrSDXl0QjalVMx.jpg'
},
{
    titulo: 'Quatro Casamentos e um Funeral',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0109831',
    imagem: 'https://image.tmdb.org/t/p/w300/45SnCikWqQVCK3LZbUMtqwusqpW.jpg'
},
{
    titulo: 'Encontro Marcado com a Morte',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0094669',
    imagem: 'https://image.tmdb.org/t/p/w300/nuDrFcDAK7TdUWlTcgOrE3cvqXL.jpg'
},
{
    titulo: 'Moça com Brinco de Pérola',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0335119',
    imagem: 'https://image.tmdb.org/t/p/w300/3qbaqDBfU1RQKvoXojCCWTQfwCA.jpg'
},
{
    titulo: 'Cazuza: O Tempo Não Pára',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0318590',
    imagem: 'https://image.tmdb.org/t/p/w300/ws9bdPeIE4Oq8JT4zsvC0BDmX9z.jpg'
},
{
    titulo: 'Sem Saída',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0093640',
    imagem: 'https://image.tmdb.org/t/p/w300/da0fPnC5UQxf3OzUIODMcBZpi7V.jpg'
},
{
    titulo: 'Hoje Eu Quero Voltar Sozinho',
    descricao: 'Descrição do filme 24',
    imdb: 'tt1702014',
    imagem: 'https://image.tmdb.org/t/p/w300/z9XmBSclAvoWgZ1AUKWLr5ej619.jpg'
},
{
    titulo: 'O Patriota',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0187393',
    imagem: 'https://image.tmdb.org/t/p/w300/oe26GVJTIEFLW8WjGMj1K0MbWUJ.jpg'
},
{
    titulo: 'Falcão Negro em Perigo',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0265086',
    imagem: 'https://image.tmdb.org/t/p/w300/mwlZSgXxX0XrRGP7gMLdJxlrOTY.jpg'
},
{
    titulo: 'Homens de Coragem',
    descricao: 'Descrição do filme 3',
    imdb: 'tt3829920',
    imagem: 'https://image.tmdb.org/t/p/w300/llnIydfVBpZZ5rCfhzDonq5BIST.jpg'
},
{
    titulo: 'Tolkien',
    descricao: 'Descrição do filme 4',
    imdb: 'tt3361792',
    imagem: 'https://image.tmdb.org/t/p/w300/A7eYO3t7oZQdfJj5KlJBI7GhT9H.jpg'
},
{
    titulo: 'Um Homem Contra Wall Street',
    descricao: 'Descrição do filme 5',
    imdb: 'tt2368553',
    imagem: 'https://image.tmdb.org/t/p/w300/4dm5XEXIT73aB0g1nrplwYguaU9.jpg'
},
{
    titulo: 'Operação Fronteira',
    descricao: 'Descrição do filme 6',
    imdb: 'tt1488606',
    imagem: 'https://image.tmdb.org/t/p/w300/2KfhMmTMNAj3NehyhrYtadDO7yc.jpg'
},
{
    titulo: 'Romeu e Julieta',
    descricao: 'Descrição do filme 7',
    imdb: 'tt1645131',
    imagem: 'https://image.tmdb.org/t/p/w300/8Y1upcI46HeL3z3iySrVMhfNk63.jpg'
},
{
    titulo: 'Castigados',
    descricao: 'Descrição do filme 8',
    imdb: 'tt7023354',
    imagem: 'https://image.tmdb.org/t/p/w300/cnEe0qMKGoEqdmQduFou4f8l54y.jpg'
},
{
    titulo: 'Bones e os Anjos das Trevas',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0166110',
    imagem: 'https://image.tmdb.org/t/p/w300/7UOHEPTQMaiwaI14CGxd5yFAPMZ.jpg'
},
{
    titulo: 'Fantasia',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0032455',
    imagem: 'https://image.tmdb.org/t/p/w300/5m9njnidjR0syG2gpVPVgcEMB2X.jpg'
},
{
    titulo: 'O Desaparecimento',
    descricao: 'Descrição do filme 11',
    imdb: 'tt4789618',
    imagem: 'https://image.tmdb.org/t/p/w300/l0MZ91joBg0p69VPUz5S03AlnYq.jpg'
},
{
    titulo: 'Aracnofobia',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0099052',
    imagem: 'https://image.tmdb.org/t/p/w300/7ZjEvK9gD51ghxqkTJrTX6ZIAF0.jpg'
},
{
    titulo: 'Pearl Harbor',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0213149',
    imagem: 'https://image.tmdb.org/t/p/w300/y8A0Cvp8WQmZ3bjbnsL53lY0dsC.jpg'
},
{
    titulo: 'Dead Girl',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0896534',
    imagem: 'https://image.tmdb.org/t/p/w300/ff00BtvdnSHO8qoblBhiXmJKvCm.jpg'
},
{
    titulo: 'Ninfomaniaca: Volume 1',
    descricao: 'Descrição do filme 15',
    imdb: 'tt1937390',
    imagem: 'https://image.tmdb.org/t/p/w300/xt0EQJ86SUWAn5pbdnl7wwGTHdL.jpg'
},
{
    titulo: 'Selena',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0120094',
    imagem: 'https://image.tmdb.org/t/p/w300/j8xX3yBAFOayfSaImgLZPnAcdWz.jpg'
},
{
    titulo: 'Ano Novo, Morte Nova',
    descricao: 'Descrição do filme 17',
    imdb: 'tt3079568',
    imagem: 'https://image.tmdb.org/t/p/w300/dcx3O2vSXUInpPuOe1EvYXIWS4a.jpg'
},
{
    titulo: 'Stardust: O Mistério da Estrela',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0486655',
    imagem: 'https://image.tmdb.org/t/p/w300/A4SVyLxB7WGzW8GGiKs3pizTUte.jpg'
},
{
    titulo: 'Horas Decisivas',
    descricao: 'Descrição do filme 19',
    imdb: 'tt2025690',
    imagem: 'https://image.tmdb.org/t/p/w300/8VTYz8SkU8DcBgKNprMjqPNZBgt.jpg'
},
{
    titulo: 'A Dama do Espelho: O Ritual das Trevas',
    descricao: 'Descrição do filme 20',
    imdb: 'tt4901756',
    imagem: 'https://image.tmdb.org/t/p/w300/r9kTsSbkBBFYMFuqZZux70fyzne.jpg'
},
{
    titulo: 'Dragon Ball Z: O Homem Mais Forte do Mundo',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0142240',
    imagem: 'https://image.tmdb.org/t/p/w300/aQyOTWpSQOyzLpHEOCpQwFFF0dJ.jpg'
},
{
    titulo: 'Assassinos Sádicos',
    descricao: 'Descrição do filme 22',
    imdb: 'tt8764358',
    imagem: 'https://image.tmdb.org/t/p/w300/xhz4MtfEIFnx9yh1pqIYuGEcSxm.jpg'
},
{
    titulo: 'A Hora da Escuridão',
    descricao: 'Descrição do filme 23',
    imdb: 'tt1093357',
    imagem: 'https://image.tmdb.org/t/p/w300/j9WtE4yn5NkUKZ5FguUzisSgmlz.jpg'
},
{
    titulo: 'Natal Negro',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0454082',
    imagem: 'https://image.tmdb.org/t/p/w300/mz7Kc7dheapuf5PYgCCW4KZbxE4.jpg'
},
{
    titulo: 'Tudo Bem no Natal Que Vem',
    descricao: 'Descrição do filme 1',
    imdb: 'tt13354204',
    imagem: 'https://image.tmdb.org/t/p/w300/7gCwW0My3JCjhXeqHnBrfZK3bbk.jpg'
},
{
    titulo: 'Maze Runner: Correr ou Morrer',
    descricao: 'Descrição do filme 2',
    imdb: 'tt1790864',
    imagem: 'https://image.tmdb.org/t/p/w300/uHnRw9Kccevck2KdmzJ8Xf7zczM.jpg'
},
{
    titulo: 'Gladiador',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0172495',
    imagem: 'https://image.tmdb.org/t/p/w300/4DUClyGA6OqjXv6yC0Imf6THGfp.jpg'
},
{
    titulo: 'Espelhos do Medo',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0790686',
    imagem: 'https://image.tmdb.org/t/p/w300/1hnjHdVSsfnblSK1Q40cHpEumUa.jpg'
},
{
    titulo: 'Mamma Mia!: Lá Vamos Nós de Novo',
    descricao: 'Descrição do filme 5',
    imdb: 'tt6911608',
    imagem: 'https://image.tmdb.org/t/p/w300/fSGSpDPVfyp4OiSOqxQp0TUs5BH.jpg'
},
{
    titulo: 'Christine: O Carro Assassino',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0085333',
    imagem: 'https://image.tmdb.org/t/p/w300/lQgflKBffMBXkOsM0PpLl2nWFyn.jpg'
},
{
    titulo: 'A Caminho de Casa',
    descricao: 'Descrição do filme 7',
    imdb: 'tt7616798',
    imagem: 'https://image.tmdb.org/t/p/w300/qWUTDVedmpG4RTFZ8oTy5IyG1jh.jpg'
},
{
    titulo: 'Vingança FM',
    descricao: 'Descrição do filme 8',
    imdb: 'tt7857374',
    imagem: 'https://image.tmdb.org/t/p/w300/4oyrL3j3sj6G05Ew7mXTsQokeVP.jpg'
},
{
    titulo: 'Desejos Ocultos',
    descricao: 'Descrição do filme 9',
    imdb: 'tt6547786',
    imagem: 'https://image.tmdb.org/t/p/w300/jM3pv9GEe137fdOzMgu3j7r2e0k.jpg'
},
{
    titulo: 'Banho de Sangue',
    descricao: 'Descrição do filme 10',
    imdb: 'tt5843780',
    imagem: 'https://image.tmdb.org/t/p/w300/pGBGBgqqHf8UpuwSpwpHNeAmRct.jpg'
},
{
    titulo: 'Sintonia de Amor',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0108160',
    imagem: 'https://image.tmdb.org/t/p/w300/gbdCqAc3Xsg5RhgOJZtUikqMa8m.jpg'
},
{
    titulo: 'Status Update: Perfil dos Sonhos',
    descricao: 'Descrição do filme 12',
    imdb: 'tt5692390',
    imagem: 'https://image.tmdb.org/t/p/w300/htMuH2YHr6tOWghIMo3lO0QgfwY.jpg'
},
{
    titulo: 'O Conto dos Contos',
    descricao: 'Descrição do filme 13',
    imdb: 'tt3278330',
    imagem: 'https://image.tmdb.org/t/p/w300/cj6r23X8wny24OZbEkZJxwVr4OZ.jpg'
},
{
    titulo: 'Paixão Mortal',
    descricao: 'Descrição do filme 14',
    imdb: 'tt2093977',
    imagem: 'https://image.tmdb.org/t/p/w300/wmWwdSNezhrC5OFjugUQ8utwPlP.jpg'
},
{
    titulo: 'Ventos da Liberdade',
    descricao: 'Descrição do filme 15',
    imdb: 'tt7125774',
    imagem: 'https://image.tmdb.org/t/p/w300/5LTqnQf9Hj4o0izLeennonXqq5A.jpg'
},
{
    titulo: 'Um Crime para Dois',
    descricao: 'Descrição do filme 16',
    imdb: 'tt8851668',
    imagem: 'https://image.tmdb.org/t/p/w300/ywTSQfjmRe9DXLAgxXbFpjZJ2Yo.jpg'
},
{
    titulo: 'Presságio',
    descricao: 'Descrição do filme 17',
    imdb: 'tt12282598',
    imagem: 'https://image.tmdb.org/t/p/w300/7fI1qeXSOB1j2JTclt5nuEddgXj.jpg'
},
{
    titulo: 'Desencantada',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1596342',
    imagem: 'https://image.tmdb.org/t/p/w300/8tuvxhScKT6qs8Js7ghLCLG5gxD.jpg'
},
{
    titulo: 'Um Crime Entre Amigas',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0155776',
    imagem: 'https://image.tmdb.org/t/p/w300/zSJlVwORx4nuwntMqNVpiqDKmxN.jpg'
},
{
    titulo: 'Academia de Vampiros: O Beijo das Sombras',
    descricao: 'Descrição do filme 20',
    imdb: 'tt1686821',
    imagem: 'https://image.tmdb.org/t/p/w300/o6vXekbF356LhfJY67KYPKZWxq5.jpg'
},
{
    titulo: 'Verdade e Honra',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0783640',
    imagem: 'https://image.tmdb.org/t/p/w300/wiWxWuOoWKpygNHR5q3sciuvC1U.jpg'
},
{
    titulo: 'Infiltrado Na Klan',
    descricao: 'Descrição do filme 22',
    imdb: 'tt7349662',
    imagem: 'https://image.tmdb.org/t/p/w300/iqP3m9EdoDvSzi6lPMmpjOX6vLY.jpg'
},
{
    titulo: 'Bilhete de Fuga',
    descricao: 'Descrição do filme 23',
    imdb: 'tt13075730',
    imagem: 'https://image.tmdb.org/t/p/w300/ihss7lYlG9xON9RnOIy2pwLbdLX.jpg'
},
{
    titulo: 'Meu Admirador Secreto',
    descricao: 'Descrição do filme 24',
    imdb: 'tt7905880',
    imagem: 'https://image.tmdb.org/t/p/w300/A0Y6fPxYmf2QvPEny56h67bluyM.jpg'
},
{
    titulo: 'Em Busca do Bilhete Premiado',
    descricao: 'Descrição do filme 1',
    imdb: 'tt22695198',
    imagem: 'https://image.tmdb.org/t/p/w300/x0FBgHdLW4PTEhybUTDrsWasahS.jpg'
},
{
    titulo: 'La Verónica',
    descricao: 'Descrição do filme 2',
    imdb: 'tt12728584',
    imagem: 'https://image.tmdb.org/t/p/w300/6AanGRkCoYN6Ae3hSYR3o0cvbi2.jpg'
},
{
    titulo: 'O Melhor da Neve',
    descricao: 'Descrição do filme 3',
    imdb: 'tt22028876',
    imagem: 'https://image.tmdb.org/t/p/w300/g8yTNX5aaDZdpg5FG73cLWSWA1y.jpg'
},
{
    titulo: 'Os Odiados do Casamento',
    descricao: 'Descrição do filme 4',
    imdb: 'tt9071456',
    imagem: 'https://image.tmdb.org/t/p/w300/kQZKw9jetOInPPdSZgbKFxJALHc.jpg'
},
{
    titulo: 'Plano de Aula',
    descricao: 'Descrição do filme 5',
    imdb: 'tt23343786',
    imagem: 'https://image.tmdb.org/t/p/w300/akK0REohti8YWwGZGD1MHPZvBRh.jpg'
},
{
    titulo: 'Scooby-Doo! Gostosuras ou Travessuras',
    descricao: 'Descrição do filme 6',
    imdb: 'tt21919270',
    imagem: 'https://image.tmdb.org/t/p/w300/tkd1zT65LEFieZlIltNxcUnzGNr.jpg'
},
{
    titulo: 'The Phantom of the Open',
    descricao: 'Descrição do filme 7',
    imdb: 'tt12572040',
    imagem: 'https://image.tmdb.org/t/p/w300/6bcrhJQLoLNsYX4UGTOMQkCiACA.jpg'
},
{
    titulo: 'Zoya',
    descricao: 'Descrição do filme 8',
    imdb: 'tt13946146',
    imagem: 'https://image.tmdb.org/t/p/w300/hJVApAzbi159h1uj4o3aFuNFMp0.jpg'
},
{
    titulo: 'A Camisa Mais Pesada do Mundo',
    descricao: 'Descrição do filme 9',
    imdb: 'tt23770926',
    imagem: 'https://image.tmdb.org/t/p/w300/iKKB3S6FUi1NYjfok1SOyYieSBs.jpg'
},
{
    titulo: 'A Floresta Do Escalpe',
    descricao: 'Descrição do filme 10',
    imdb: 'tt13156200',
    imagem: 'https://image.tmdb.org/t/p/w300/2OG6YCYabCBNcmXv5w4AP9uTbsb.jpg'
},
{
    titulo: 'As Nadadoras',
    descricao: 'Descrição do filme 11',
    imdb: 'tt8745676',
    imagem: 'https://image.tmdb.org/t/p/w300/l0s6z3GTRMyBs7ZBh8mKMP6QZ6V.jpg'
},
{
    titulo: 'O Livro de Floyd',
    descricao: 'Descrição do filme 12',
    imdb: 'tt10308878',
    imagem: 'https://image.tmdb.org/t/p/w300/pioc0HaWG2Cf3zoDEGjTgJOSBvv.jpg'
},
{
    titulo: 'Conspiração Fatal',
    descricao: 'Descrição do filme 13',
    imdb: 'tt18305922',
    imagem: 'https://image.tmdb.org/t/p/w300/zpj3nNoc5xaUZTIdnuhwXwUcRag.jpg'
},
{
    titulo: 'Em Confinamento',
    descricao: 'Descrição do filme 14',
    imdb: 'tt14394620',
    imagem: 'https://image.tmdb.org/t/p/w300/qV5vEMXsCKakk2usQ4QLhiJa00h.jpg'
},
{
    titulo: 'Eike: Tudo ou Nada',
    descricao: 'Descrição do filme 15',
    imdb: 'tt21182882',
    imagem: 'https://image.tmdb.org/t/p/w300/dmE2NwVAt6AczscW0lapuuCTghg.jpg'
},
{
    titulo: 'Guardiões da Galáxia: Especial de Festas',
    descricao: 'Descrição do filme 16',
    imdb: 'tt13623136',
    imagem: 'https://image.tmdb.org/t/p/w300/c5v6VCc7bdxWDkKc5ilYsxhOeUp.jpg'
},
{
    titulo: 'Caixa de Memórias',
    descricao: 'Descrição do filme 17',
    imdb: 'tt7265490',
    imagem: 'https://image.tmdb.org/t/p/w300/1q7SNPmr3EsX4wODFQDfRYR0NUf.jpg'
},
{
    titulo: 'Lilo, Lilo, Crocodilo',
    descricao: 'Descrição do filme 18',
    imdb: 'tt14668630',
    imagem: 'https://image.tmdb.org/t/p/w300/huG0x4GMBHiUeHDsBrv7il5XbkX.jpg'
},
{
    titulo: 'Mr. Malcolm s List',
    descricao: 'Descrição do filme 19',
    imdb: 'tt12545566',
    imagem: 'https://image.tmdb.org/t/p/w300/76SeGCukVxqZFAJkke4fkk4uVN9.jpg'
},
{
    titulo: 'Procura-se',
    descricao: 'Descrição do filme 20',
    imdb: 'None',
    imagem: 'https://image.tmdb.org/t/p/w300/5S10EC500Gy0jSP2RJsiVNLamrP.jpg'
},
{
    titulo: 'O Milagre',
    descricao: 'Descrição do filme 21',
    imdb: 'tt9288822',
    imagem: 'https://image.tmdb.org/t/p/w300/qD9E23xFvZ5KjTmEiYf3DuMTNlC.jpg'
},
{
    titulo: 'Racionais: Das Ruas de São Paulo Pro Mundo',
    descricao: 'Descrição do filme 22',
    imdb: 'tt22988228',
    imagem: 'https://image.tmdb.org/t/p/w300/mRsRonH875t4CU7wFpDCqCPQ9Qz.jpg'
},
{
    titulo: 'Reefa: O Artista',
    descricao: 'Descrição do filme 23',
    imdb: 'tt8184568',
    imagem: 'https://image.tmdb.org/t/p/w300/zxnPKCGWLIZDfQe4Je4SlWeUtdS.jpg'
},
{
    titulo: 'Resurrection',
    descricao: 'Descrição do filme 24',
    imdb: 'tt11540726',
    imagem: 'https://image.tmdb.org/t/p/w300/kfRr8Jm1gaEnLTXCIfHkSw8QW6t.jpg'
},
{
    titulo: 'Trancafiadas',
    descricao: 'Descrição do filme 1',
    imdb: 'tt6439792',
    imagem: 'https://image.tmdb.org/t/p/w300/jyw7lSu0bm71jAykAbVwchyVTkR.jpg'
},
{
    titulo: 'O Troll da Montanha',
    descricao: 'Descrição do filme 2',
    imdb: 'tt11116912',
    imagem: 'https://image.tmdb.org/t/p/w300/tyv3iU87q5IdTAUVLWJeILJ4Cyf.jpg'
},
{
    titulo: 'Um Estranho em Nossa Cama',
    descricao: 'Descrição do filme 3',
    imdb: 'tt13661368',
    imagem: 'https://image.tmdb.org/t/p/w300/vTw9NlecsL5LYM6JQLogjC1sypD.jpg'
},
{
    titulo: 'O Dia do Terror',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0242998',
    imagem: 'https://image.tmdb.org/t/p/w300/rIkq7p64L7lYazR0ukTcIqG54pn.jpg'
},
{
    titulo: 'O Som do Silêncio',
    descricao: 'Descrição do filme 5',
    imdb: 'tt5363618',
    imagem: 'https://image.tmdb.org/t/p/w300/gjKlQJlWtP61ZN4WKbcSVHzjqq8.jpg'
},
{
    titulo: 'A Prisioneira',
    descricao: 'Descrição do filme 6',
    imdb: 'tt1104006',
    imagem: 'https://image.tmdb.org/t/p/w300/whGg2IuCqXV7zbaGcdi5CgQo81f.jpg'
},
{
    titulo: 'Insanidade',
    descricao: 'Descrição do filme 7',
    imdb: 'tt8332666',
    imagem: 'https://image.tmdb.org/t/p/w300/1yHOLVfLHnbAHYqxV2PwtE32kBm.jpg'
},
{
    titulo: 'Cadáveres',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0453533',
    imagem: 'https://image.tmdb.org/t/p/w300/mQhSNeAZaYpVn2CJwKSnqvM1Ek5.jpg'
},
{
    titulo: 'Advogado do Diabo',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0118971',
    imagem: 'https://image.tmdb.org/t/p/w300/qL17FxDhLDeTdgZxOg2MQrY8PMv.jpg'
},
{
    titulo: 'Esporte Sangrento',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0107750',
    imagem: 'https://image.tmdb.org/t/p/w300/uTQ42xQ0dWMtppI1AvvNLSFrHMD.jpg'
},
{
    titulo: 'Dragão: A História de Bruce Lee',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0106770',
    imagem: 'https://image.tmdb.org/t/p/w300/7vLXw8daw29C0JZ2aJWzYdOdclK.jpg'
},
{
    titulo: 'ParaNorman',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1623288',
    imagem: 'https://image.tmdb.org/t/p/w300/9DZPtuYTKYxt6vzHvZ5FLThG4fl.jpg'
},
{
    titulo: 'Jogada Decisiva',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0124718',
    imagem: 'https://image.tmdb.org/t/p/w300/7OMD0iXpc0ut09YYuRwjt326nr2.jpg'
},
{
    titulo: 'Medo',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0116287',
    imagem: 'https://image.tmdb.org/t/p/w300/em472HyVQcSxKTgxeHOAf3BYgLi.jpg'
},
{
    titulo: 'Paciente Zero',
    descricao: 'Descrição do filme 15',
    imdb: 'tt8406660',
    imagem: 'https://image.tmdb.org/t/p/w300/qefYo5f9bunDkqA28NxS77VzW25.jpg'
},
{
    titulo: 'A Casa dos Pássaros Mortos',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0377749',
    imagem: 'https://image.tmdb.org/t/p/w300/xB1qpndocvnS23qIv0F7OqYZLpj.jpg'
},
{
    titulo: 'Invasão Zumbi 2: Península',
    descricao: 'Descrição do filme 17',
    imdb: 'tt8850222',
    imagem: 'https://image.tmdb.org/t/p/w300/dGVUiqnahQ4ZZRchGRpO2SyhtQY.jpg'
},
{
    titulo: 'Wolverine: Imortal',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1430132',
    imagem: 'https://image.tmdb.org/t/p/w300/wCP2JfaRFdrFjxiXTUdNnfvyJ2K.jpg'
},
{
    titulo: 'Asterix, o Gaulês',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0061369',
    imagem: 'https://image.tmdb.org/t/p/w300/8K2yemr1pcmYe1DcJ0586SRLsEp.jpg'
},
{
    titulo: 'Asterix e Cleópatra',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0062687',
    imagem: 'https://image.tmdb.org/t/p/w300/fsvNagTYR9n8Edc60fdXffIU1rJ.jpg'
},
{
    titulo: 'Cleópatra',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0056937',
    imagem: 'https://image.tmdb.org/t/p/w300/zGz6N0Gj9LWvrRrUTgkGqmxqr5s.jpg'
},
{
    titulo: 'Asterix e os Doze Trabalhos',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0072901',
    imagem: 'https://image.tmdb.org/t/p/w300/ulhCzWTgE91jHB7o5lx5pAeBtxd.jpg'
},
{
    titulo: 'Em Cada Sonho um Amor',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0055992',
    imagem: 'https://image.tmdb.org/t/p/w300/hRkuGlcmBVS6ShgdlolSG8Q6Ye3.jpg'
},
{
    titulo: 'O Homem Que Queria Ser Rei',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0073341',
    imagem: 'https://image.tmdb.org/t/p/w300/21BANIzXEKyZDUFOr9NdUEgP4EA.jpg'
},
{
    titulo: 'César e Cleópatra',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0038390',
    imagem: 'https://image.tmdb.org/t/p/w300/sZHFk8miCUDzSloPn919ODqlWEA.jpg'
},
{
    titulo: 'Expresso para o Inferno',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0089941',
    imagem: 'https://image.tmdb.org/t/p/w300/b7mLxQh4iEE1FKUv1f0iYi5I4tc.jpg'
},
{
    titulo: 'Fantasmas de Guerra',
    descricao: 'Descrição do filme 3',
    imdb: 'tt6508228',
    imagem: 'https://image.tmdb.org/t/p/w300/5Ofcmv3WHbQlK4tdjB9JJ0P4qIS.jpg'
},
{
    titulo: 'O Especialista',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0111255',
    imagem: 'https://image.tmdb.org/t/p/w300/cZiruAWPqKzJQRhU9LQ9k5iGLbB.jpg'
},
{
    titulo: 'O Buraco da Agulha',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0082351',
    imagem: 'https://image.tmdb.org/t/p/w300/nDPnfXCuh280WHPk7xTfG7cDlAh.jpg'
},
{
    titulo: 'A Pele Que Habito',
    descricao: 'Descrição do filme 6',
    imdb: 'tt1189073',
    imagem: 'https://image.tmdb.org/t/p/w300/xGiaUmq2O3lkPlNxJ468Raz7Xek.jpg'
},
{
    titulo: 'Maratona da Morte',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0074860',
    imagem: 'https://image.tmdb.org/t/p/w300/uPNgubSiri2yvBQRPtP77ViYjN.jpg'
},
{
    titulo: 'Duetto',
    descricao: 'Descrição do filme 8',
    imdb: 'tt4303322',
    imagem: 'https://image.tmdb.org/t/p/w300/sbzUiyexmnCaCpu3RKWVwUNXIJ.jpg'
},
{
    titulo: 'Não Vá',
    descricao: 'Descrição do filme 9',
    imdb: 'tt18450548',
    imagem: 'https://image.tmdb.org/t/p/w300/zVbVX28f6MvtlbwDknAUXfJjXZK.jpg'
},
{
    titulo: 'Jogos Psicológicos',
    descricao: 'Descrição do filme 10',
    imdb: 'tt14453030',
    imagem: 'https://image.tmdb.org/t/p/w300/pDxXp6LyqN41F1U07Yw9inP3UPN.jpg'
},
{
    titulo: 'O Dragão do Meu Pai',
    descricao: 'Descrição do filme 11',
    imdb: 'tt9288748',
    imagem: 'https://image.tmdb.org/t/p/w300/bfhokk0aVLI6BRIomo2OsXwtmJl.jpg'
},
{
    titulo: 'O Método de Stutz',
    descricao: 'Descrição do filme 12',
    imdb: 'tt21819228',
    imagem: 'https://image.tmdb.org/t/p/w300/uOiJmotRM12wsgfwiEXsp3AErdU.jpg'
},
{
    titulo: 'Um Lugar Bem Longe Daqui',
    descricao: 'Descrição do filme 13',
    imdb: 'tt9411972',
    imagem: 'https://image.tmdb.org/t/p/w300/sXvn2D7a9nBwTdUSNj97rUwqMmx.jpg'
},
{
    titulo: 'Uma Pitada de Sorte',
    descricao: 'Descrição do filme 14',
    imdb: 'tt8147518',
    imagem: 'https://image.tmdb.org/t/p/w300/4SKHuc6D9ru9qJiAPr9xS04w2Um.jpg'
},
{
    titulo: 'Herança Maldita',
    descricao: 'Descrição do filme 15',
    imdb: 'tt11454320',
    imagem: 'https://image.tmdb.org/t/p/w300/uUwIfpIxPUQnETRRqb17lzBWj84.jpg'
},
{
    titulo: 'A Grande Aventura de Blue na Cidade',
    descricao: 'Descrição do filme 16',
    imdb: 'tt15038118',
    imagem: 'https://image.tmdb.org/t/p/w300/gFyB6XHUrvd3FvgN7NQbS0gjYv7.jpg'
},
{
    titulo: 'Moxie: Quando as Garotas Vão À Luta',
    descricao: 'Descrição do filme 17',
    imdb: 'tt6432466',
    imagem: 'https://image.tmdb.org/t/p/w300/odxiLTEkI7QacNcEpajJbXKzZPT.jpg'
},
{
    titulo: 'Uma Quedinha de Natal',
    descricao: 'Descrição do filme 18',
    imdb: 'tt14715170',
    imagem: 'https://image.tmdb.org/t/p/w300/p9wwj23RF3Nqjj0EzxsDx0s2aV7.jpg'
},
{
    titulo: 'Rei Arthur: A Lenda da Espada',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1972591',
    imagem: 'https://image.tmdb.org/t/p/w300/wI8OOeEIN8k9HD2HaBM8jOHm2LF.jpg'
},
{
    titulo: 'Onde os Fracos Não Têm Vez',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0477348',
    imagem: 'https://image.tmdb.org/t/p/w300/jdlY8Bhcb4Qzfldr1JaexYBgyW3.jpg'
},
{
    titulo: 'Crash Pad: Dando o Troco',
    descricao: 'Descrição do filme 21',
    imdb: 'tt4557956',
    imagem: 'https://image.tmdb.org/t/p/w300/tz36oaM0QIUzxiBvufDZ91UHzHO.jpg'
},
{
    titulo: 'Decision To Leave',
    descricao: 'Descrição do filme 22',
    imdb: 'tt12477480',
    imagem: 'https://image.tmdb.org/t/p/w300/yGXMia1VNEovB7014ldTHwT1r50.jpg'
},
{
    titulo: 'Stallone: Cobra',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0090859',
    imagem: 'https://image.tmdb.org/t/p/w300/jxeEu3BqwRQKGutvo4Jhc3V3rk7.jpg'
},
{
    titulo: 'Cartões de Natal',
    descricao: 'Descrição do filme 24',
    imdb: 'tt10345008',
    imagem: 'https://image.tmdb.org/t/p/w300/7flqAGmYvZArxgNNfD3HNJ4Yur1.jpg'
},
{
    titulo: 'Carandiru',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0293007',
    imagem: 'https://image.tmdb.org/t/p/w300/bkq8RsbCb7ugW0ZmsD8SYEvQWSp.jpg'
},
{
    titulo: 'A Lenda',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0089469',
    imagem: 'https://image.tmdb.org/t/p/w300/Ak0qvr5DFBOjnG891f7PooCT6qJ.jpg'
},
{
    titulo: 'Feel the Beat',
    descricao: 'Descrição do filme 3',
    imdb: 'tt10714856',
    imagem: 'https://image.tmdb.org/t/p/w300/Af2jt7m9GLFpR4V11xOsFmT8OKD.jpg'
},
{
    titulo: 'Gigantes de Aço',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0433035',
    imagem: 'https://image.tmdb.org/t/p/w300/pp74uUjwQTknGPqNrerj4FvU0ce.jpg'
},
{
    titulo: 'Os Selvagens da Noite',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0080120',
    imagem: 'https://image.tmdb.org/t/p/w300/u1EWKbXm1keeqXrNNsaGILKAcoF.jpg'
},
{
    titulo: 'Cassino',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0112641',
    imagem: 'https://image.tmdb.org/t/p/w300/fqk9XpThIR0tKnO1BE5AIh9DBQy.jpg'
},
{
    titulo: 'Rainha de Katwe',
    descricao: 'Descrição do filme 7',
    imdb: 'tt4341582',
    imagem: 'https://image.tmdb.org/t/p/w300/dYOzbMAJ9xwS3OUDVVbKaBa5h7u.jpg'
},
{
    titulo: 'À Espera de um Milagre',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0120689',
    imagem: 'https://image.tmdb.org/t/p/w300/14hEqW67IiHlKpzKMLUXyktzZIV.jpg'
},
{
    titulo: 'Mogli: O Menino Lobo 2',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0283426',
    imagem: 'https://image.tmdb.org/t/p/w300/1xVK9gsLgGpDt6nJO7VjjTW2Uy5.jpg'
},
{
    titulo: 'Temos Vagas',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0452702',
    imagem: 'https://image.tmdb.org/t/p/w300/RMR7SVU0tid2vVI89Ar79DVruu.jpg'
},
{
    titulo: 'Máquina Quase Mortífera',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0107659',
    imagem: 'https://image.tmdb.org/t/p/w300/4Pci5gw2u7UT0YZC0md0UEYQUrf.jpg'
},
{
    titulo: 'Noite do Terror',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0437179',
    imagem: 'https://image.tmdb.org/t/p/w300/wUo4Qxn346fSTq2dheLdLE1YyCf.jpg'
},
{
    titulo: 'Garota, Interrompida',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0172493',
    imagem: 'https://image.tmdb.org/t/p/w300/wUO6W6DVF5x5ppQ2X2YXi7HIm1.jpg'
},
{
    titulo: 'Um Tio Quase Perfeito 2',
    descricao: 'Descrição do filme 14',
    imdb: 'tt11057882',
    imagem: 'https://image.tmdb.org/t/p/w300/7tsMon5xC1pJI8dbJ2NpWCq3CnC.jpg'
},
{
    titulo: 'Ultraman Tiga - A Odisséia Final',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0228982',
    imagem: 'https://image.tmdb.org/t/p/w300/papDk5x8wmkamSpEm70Ssc6SqQG.jpg'
},
{
    titulo: 'ウルトラマン',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0471414',
    imagem: 'https://image.tmdb.org/t/p/w300/rZP3TaxNM1bxyzWhYxhrpulLXQq.jpg'
},
{
    titulo: 'Meu Policial',
    descricao: 'Descrição do filme 17',
    imdb: 'tt13139228',
    imagem: 'https://image.tmdb.org/t/p/w300/wdbiMjXd4CxPfCx4r4Jfy8cGec0.jpg'
},
{
    titulo: 'O Passado',
    descricao: 'Descrição do filme 18',
    imdb: 'tt6613958',
    imagem: 'https://image.tmdb.org/t/p/w300/dPvgiDbZ16wrB9CTaYtBBUuF4q8.jpg'
},
{
    titulo: 'Veja Como Eles Correm',
    descricao: 'Descrição do filme 19',
    imdb: 'tt13640696',
    imagem: 'https://image.tmdb.org/t/p/w300/az5RKJb8qsILSUztRx0icVlnJWc.jpg'
},
{
    titulo: 'Você Não Estará Só!',
    descricao: 'Descrição do filme 20',
    imdb: 'tt8296030',
    imagem: 'https://image.tmdb.org/t/p/w300/Aqj4qpubd5GKfZho6KUBFEBzMtU.jpg'
},
{
    titulo: '45 do Segundo Tempo',
    descricao: 'Descrição do filme 21',
    imdb: 'tt8646254',
    imagem: 'https://image.tmdb.org/t/p/w300/xmUiGNvKTDwic273opiVednbQA8.jpg'
},
{
    titulo: 'A Espera de Liz',
    descricao: 'Descrição do filme 22',
    imdb: 'tt4546156',
    imagem: 'https://image.tmdb.org/t/p/w300/trAGoCXjkCpZUNHxzrFtMqLj8sN.jpg'
},
{
    titulo: 'A Família Noel 2',
    descricao: 'Descrição do filme 23',
    imdb: 'tt14384176',
    imagem: 'https://image.tmdb.org/t/p/w300/6EV8G1tESAjelFEvrdn1rEMz8Z0.jpg'
},
{
    titulo: 'A Lenda da Befana: O Início',
    descricao: 'Descrição do filme 24',
    imdb: 'tt13920702',
    imagem: 'https://image.tmdb.org/t/p/w300/5v98CBfkfBdgZFnMyX2z6tpbvg7.jpg'
},
{
    titulo: 'Ao Leste das Montanhas',
    descricao: 'Descrição do filme 1',
    imdb: 'tt9038678',
    imagem: 'https://image.tmdb.org/t/p/w300/Oj2hUfkpiq4qLeQE6k4V2Xv4Is.jpg'
},
{
    titulo: 'Caça Implacável',
    descricao: 'Descrição do filme 2',
    imdb: 'tt10242388',
    imagem: 'https://image.tmdb.org/t/p/w300/aUQ898w7faH39KpMA64v59PKRoV.jpg'
},
{
    titulo: 'Mônica, O My Darling',
    descricao: 'Descrição do filme 3',
    imdb: 'tt15128068',
    imagem: 'https://image.tmdb.org/t/p/w300/yq5zQAlxhNZvCaqdUcpGDnOZeQG.jpg'
},
{
    titulo: 'Predestinado: Arigó e o Espírito do Dr. Fritz',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0120589',
    imagem: 'https://image.tmdb.org/t/p/w300/qx8v1E6t0GvUAUFdXjyE1L5D6qW.jpg'
},
{
    titulo: 'O Cavaleiro do Rei',
    descricao: 'Descrição do filme 5',
    imdb: 'tt15374214',
    imagem: 'https://image.tmdb.org/t/p/w300/9AjIDqNC37ML6fPidheFBYG2xVF.jpg'
},
{
    titulo: 'Lenda Urbana',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0146336',
    imagem: 'https://image.tmdb.org/t/p/w300/sF9BMe4ZvpEKARVPOzvlB5zi8Fx.jpg'
},
{
    titulo: 'Brinquedos do Terror',
    descricao: 'Descrição do filme 7',
    imdb: 'tt13316062',
    imagem: 'https://image.tmdb.org/t/p/w300/yXJqgPX98cR4FtzLNTcaEEkhlSS.jpg'
},
{
    titulo: 'Jogo da Morte',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0077594',
    imagem: 'https://image.tmdb.org/t/p/w300/5z4s24ln8F2EDAzAlRv3cfdS4kO.jpg'
},
{
    titulo: 'Jem e as Hologramas',
    descricao: 'Descrição do filme 9',
    imdb: 'tt3614530',
    imagem: 'https://image.tmdb.org/t/p/w300/7UiDWxXzpZSh8e3EJKYWyM88qb6.jpg'
},
{
    titulo: 'A Jaula',
    descricao: 'Descrição do filme 10',
    imdb: 'tt17003896',
    imagem: 'https://image.tmdb.org/t/p/w300/4hl4vdf2QdKRMg5cU0CIO3eydg.jpg'
},
{
    titulo: 'João e Maria: Caçadores de Bruxas',
    descricao: 'Descrição do filme 11',
    imdb: 'tt1428538',
    imagem: 'https://image.tmdb.org/t/p/w300/pNAOG8mvstBhUE1jhbGkB87G2VV.jpg'
},
{
    titulo: 'Amigo Imaginário',
    descricao: 'Descrição do filme 12',
    imdb: 'tt2171735',
    imagem: 'https://image.tmdb.org/t/p/w300/vbmrlLOSdx9n0DTtN5CaWL1uDgn.jpg'
},
{
    titulo: 'Querida, Encolhi as Crianças',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0097523',
    imagem: 'https://image.tmdb.org/t/p/w300/9Jlqv5VpNxEzgcdm5jNHEDqOKdt.jpg'
},
{
    titulo: 'Cidades de Papel',
    descricao: 'Descrição do filme 14',
    imdb: 'tt3622592',
    imagem: 'https://image.tmdb.org/t/p/w300/4th6QFCdko42nuAVK9yu2d9ikFQ.jpg'
},
{
    titulo: 'A Vida em Preto e Branco',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0120789',
    imagem: 'https://image.tmdb.org/t/p/w300/2HacTvkLUSwW7VAiElr8fr9pSsv.jpg'
},
{
    titulo: 'Razão e Sensibilidade',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0114388',
    imagem: 'https://image.tmdb.org/t/p/w300/b8c64FU6VrOCcpX1UctpTfwMWfe.jpg'
},
{
    titulo: 'Procura-se uma Noiva',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0120596',
    imagem: 'https://image.tmdb.org/t/p/w300/lhDn0yzCDkVCzHEtoLdASSLDHxn.jpg'
},
{
    titulo: 'Caçado',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0269347',
    imagem: 'https://image.tmdb.org/t/p/w300/48b4zYcvT0RU3VxklGml7hf1KsY.jpg'
},
{
    titulo: 'Território Hostil',
    descricao: 'Descrição do filme 19',
    imdb: 'tt8859236',
    imagem: 'https://image.tmdb.org/t/p/w300/nJTzX2LmbRlsH2rnWYZCyigTdUd.jpg'
},
{
    titulo: 'O Martelo das Bruxas',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0064546',
    imagem: 'https://image.tmdb.org/t/p/w300/7Hl7iEMwqAeugCfiAKYt8P3KuDy.jpg'
},
{
    titulo: 'Ligeiramente Grávidos',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0478311',
    imagem: 'https://image.tmdb.org/t/p/w300/jhkTBgBMOaB5BbP57kVfKrZodUQ.jpg'
},
{
    titulo: 'Laura Hasn t Slept',
    descricao: 'Descrição do filme 22',
    imdb: 'tt11650610',
    imagem: 'https://image.tmdb.org/t/p/w300/asCeo391bM2wIq3g47Yl4KPFiur.jpg'
},
{
    titulo: 'A Bravura de Molly',
    descricao: 'Descrição do filme 23',
    imdb: 'tt11162490',
    imagem: 'https://image.tmdb.org/t/p/w300/kHHNF0jHpHgPU7JhrLDql5NMGRG.jpg'
},
{
    titulo: 'Todo Mundo Quase Morto',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0365748',
    imagem: 'https://image.tmdb.org/t/p/w300/cu9CgaxcJ3UG1Up3l5bsG2wNtfY.jpg'
},
{
    titulo: 'A Noviça Rebelde',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0059742',
    imagem: 'https://image.tmdb.org/t/p/w300/anNfNOIQJygypWWFiQQnSXuqsba.jpg'
},
{
    titulo: 'Free Willy',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0106965',
    imagem: 'https://image.tmdb.org/t/p/w300/9iBgd9gi9ztWiVcYSG6zl8wDFBN.jpg'
},
{
    titulo: 'Onze Homens e um Segredo',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0240772',
    imagem: 'https://image.tmdb.org/t/p/w300/8NbSiE9xnymrcMEfiUbSM9it7hq.jpg'
},
{
    titulo: 'A Morte Pede Carona',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0455960',
    imagem: 'https://image.tmdb.org/t/p/w300/u45gV8LrTrpv0dnv1KhuPtnx5Io.jpg'
},
{
    titulo: 'Matilda',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0117008',
    imagem: 'https://image.tmdb.org/t/p/w300/qeZlWxfItQZD1qGCqbcKYKqQM8n.jpg'
},
{
    titulo: 'Madeline',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0123987',
    imagem: 'https://image.tmdb.org/t/p/w300/nAGRLwJC0jv7QlfJR6y32xRZqcF.jpg'
},
{
    titulo: 'Juanita',
    descricao: 'Descrição do filme 7',
    imdb: 'tt6155456',
    imagem: 'https://image.tmdb.org/t/p/w300/yKq6LErlgWizCtl3DcdYv86xn2e.jpg'
},
{
    titulo: 'Alice',
    descricao: 'Descrição do filme 8',
    imdb: 'tt11040762',
    imagem: 'https://image.tmdb.org/t/p/w300/7akDcAHfp7Lkmuq2ygzNzOhWq8M.jpg'
},
{
    titulo: 'Ao 3º Dia',
    descricao: 'Descrição do filme 9',
    imdb: 'tt10984206',
    imagem: 'https://image.tmdb.org/t/p/w300/uLmr2q3ZcQ8pqSUxUkekcRbpuAz.jpg'
},
{
    titulo: 'Beleza',
    descricao: 'Descrição do filme 10',
    imdb: 'tt12194006',
    imagem: 'https://image.tmdb.org/t/p/w300/iA5GZWM1NmXtESsXxtXxoK8Pjtx.jpg'
},
{
    titulo: 'Bala Perdida 2',
    descricao: 'Descrição do filme 11',
    imdb: 'tt14465706',
    imagem: 'https://image.tmdb.org/t/p/w300/mqSZ36rvitkDJdXIFIBmsbG2d1D.jpg'
},
{
    titulo: 'Corrective Measures – Fuga da Prisão',
    descricao: 'Descrição do filme 12',
    imdb: 'tt15391770',
    imagem: 'https://image.tmdb.org/t/p/w300/mIus2B83moSdfIkD4wD7tOaG5Y1.jpg'
},
{
    titulo: 'Curtas dos Minions 2',
    descricao: 'Descrição do filme 13',
    imdb: 'tt23382644',
    imagem: 'https://image.tmdb.org/t/p/w300/jL2xuJkM4eO0L4jbVWkjHEt5Sp6.jpg'
},
{
    titulo: 'Em Busca do Enfermeiro da Noite',
    descricao: 'Descrição do filme 14',
    imdb: 'tt22010586',
    imagem: 'https://image.tmdb.org/t/p/w300/1LyrqFX0yHVutUt1U5SsefF0i7A.jpg'
},
{
    titulo: 'Entre Rosas',
    descricao: 'Descrição do filme 15',
    imdb: 'tt11190652',
    imagem: 'https://image.tmdb.org/t/p/w300/w9nP4DisTtdynffsRAzXdXyvsCo.jpg'
},
{
    titulo: '怒火',
    descricao: 'Descrição do filme 16',
    imdb: 'tt8165192',
    imagem: 'https://image.tmdb.org/t/p/w300/fqhZOmHlARkWiHZmy6D2DRrrxlZ.jpg'
},
{
    titulo: 'Futebol em Apuros',
    descricao: 'Descrição do filme 17',
    imdb: 'tt22774688',
    imagem: 'https://image.tmdb.org/t/p/w300/1WHeh743USzQoCrzPQYUKEDsTjZ.jpg'
},
{
    titulo: 'Overdose',
    descricao: 'Descrição do filme 18',
    imdb: 'tt15713012',
    imagem: 'https://image.tmdb.org/t/p/w300/9RvM4wawLRlX608FgZr9kL8CLmy.jpg'
},
{
    titulo: 'Passagem',
    descricao: 'Descrição do filme 19',
    imdb: 'tt10192406',
    imagem: 'https://image.tmdb.org/t/p/w300/81eQIYIR7i5W0XsB2PtvZAt4I9w.jpg'
},
{
    titulo: 'Pantera Negra: Wakanda para Sempre',
    descricao: 'Descrição do filme 20',
    imdb: 'tt9114286',
    imagem: 'https://image.tmdb.org/t/p/w300/cryEN3sWlgB2wTzcUNVtDGI8bkM.jpg'
},
{
    titulo: 'Acusado',
    descricao: 'Descrição do filme 21',
    imdb: 'tt4205896',
    imagem: 'https://image.tmdb.org/t/p/w300/ocluspJbkJC0Z7Mn6WWDuqXtKJK.jpg'
},
{
    titulo: 'O Ninho',
    descricao: 'Descrição do filme 22',
    imdb: 'tt4925340',
    imagem: 'https://image.tmdb.org/t/p/w300/5USB32iM6b2gMCio0RLs1X53UMK.jpg'
},
{
    titulo: 'Uma Chamada Perdida',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0366292',
    imagem: 'https://image.tmdb.org/t/p/w300/yqjzyu3RZ9yIUpIPd2djSCsh2ay.jpg'
},
{
    titulo: 'Zumbilênio: O Parque dos Monstros',
    descricao: 'Descrição do filme 24',
    imdb: 'tt5313906',
    imagem: 'https://image.tmdb.org/t/p/w300/w2HamcBWs8Uv2Xgt2nNPlOtyczU.jpg'
},
{
    titulo: 'Contra Ataque',
    descricao: 'Descrição do filme 1',
    imdb: 'tt6547170',
    imagem: 'https://image.tmdb.org/t/p/w300/fRUhfGW4WSZ6XpJcMz6CwLgMAkS.jpg'
},
{
    titulo: 'Top Secret! Superconfidencial',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0088286',
    imagem: 'https://image.tmdb.org/t/p/w300/mzWUEkw1vN13ztIfkxIBygrbwwp.jpg'
},
{
    titulo: 'Dois Irmãos: Uma Jornada Fantástica',
    descricao: 'Descrição do filme 3',
    imdb: 'tt7146812',
    imagem: 'https://image.tmdb.org/t/p/w300/jsi2UM64Mhr6NmY1LKeeCuZOaCo.jpg'
},
{
    titulo: 'Rogue',
    descricao: 'Descrição do filme 4',
    imdb: 'tt11576124',
    imagem: 'https://image.tmdb.org/t/p/w300/uOw5JD8IlD546feZ6oxbIjvN66P.jpg'
},
{
    titulo: 'Tirando a Maior Onda: O Filme',
    descricao: 'Descrição do filme 5',
    imdb: 'tt9208444',
    imagem: 'https://image.tmdb.org/t/p/w300/9dLFygbJK8SCcBG355xDjcNIb4l.jpg'
},
{
    titulo: 'Má Educação',
    descricao: 'Descrição do filme 6',
    imdb: 'tt8206668',
    imagem: 'https://image.tmdb.org/t/p/w300/j7V9owkUk6mi8iPAYy5LPmLYG49.jpg'
},
{
    titulo: 'Quase uma Rockstar',
    descricao: 'Descrição do filme 7',
    imdb: 'tt3155342',
    imagem: 'https://image.tmdb.org/t/p/w300/4QIpIHoYdlt9ekD6mSIxe0FylpR.jpg'
},
{
    titulo: 'Perseguição Zumbi',
    descricao: 'Descrição do filme 8',
    imdb: 'tt8551868',
    imagem: 'https://image.tmdb.org/t/p/w300/pW2JRasm1o3nz9Nyg7YOtKOKWW0.jpg'
},
{
    titulo: 'Chat: A Sala Negra',
    descricao: 'Descrição do filme 9',
    imdb: 'tt1319704',
    imagem: 'https://image.tmdb.org/t/p/w300/q2CODhvQOJtIYvIsypDEEGcXLvL.jpg'
},
{
    titulo: 'Snoopy & Charlie Brown: Peanuts, o Filme',
    descricao: 'Descrição do filme 10',
    imdb: 'tt2452042',
    imagem: 'https://image.tmdb.org/t/p/w300/lnBbIL2gYex4aVomvZOg5ZGtOOa.jpg'
},
{
    titulo: 'Soldado Universal',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0105698',
    imagem: 'https://image.tmdb.org/t/p/w300/3YvFMseLMzqmbFaFjo0Bt1W8j6B.jpg'
},
{
    titulo: 'Romance nas Alturas',
    descricao: 'Descrição do filme 12',
    imdb: 'tt12587514',
    imagem: 'https://image.tmdb.org/t/p/w300/a6iv7xx0nbIqUzTFJwqHMB4xFXd.jpg'
},
{
    titulo: 'Branca de Neve',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0255605',
    imagem: 'https://image.tmdb.org/t/p/w300/r9gjrwJasvel2yPxz2CMst99THj.jpg'
},
{
    titulo: 'Camisa de Força',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0366627',
    imagem: 'https://image.tmdb.org/t/p/w300/7Y431Z4lwEqBT0rY59AXEhyHFfc.jpg'
},
{
    titulo: 'Desumano',
    descricao: 'Descrição do filme 15',
    imdb: 'tt17221298',
    imagem: 'https://image.tmdb.org/t/p/w300/nOmdssTweQTOceD6HbSkqMRP5NX.jpg'
},
{
    titulo: 'Quando um Estranho Chama',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0455857',
    imagem: 'https://image.tmdb.org/t/p/w300/53LzSw15olAkNW48GkrPkxCbJBx.jpg'
},
{
    titulo: 'A Cidade dos Amaldiçoados',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0114852',
    imagem: 'https://image.tmdb.org/t/p/w300/eNPnSDXxrd2psC3jer9nxKvwbOQ.jpg'
},
{
    titulo: 'Forças Malignas',
    descricao: 'Descrição do filme 18',
    imdb: 'tt6143782',
    imagem: 'https://image.tmdb.org/t/p/w300/28eUhtgJEFj4KrBXsrt3VaYhZ4E.jpg'
},
{
    titulo: 'Street Fighter: A Última Batalha',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0111301',
    imagem: 'https://image.tmdb.org/t/p/w300/k7DOPUhlGLxRowC4VFY9n0wQTup.jpg'
},
{
    titulo: 'Maverick',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0110478',
    imagem: 'https://image.tmdb.org/t/p/w300/cf4L3VW5nEHIaU3pOMZSIoBQmDP.jpg'
},
{
    titulo: 'Acusada e Foragida',
    descricao: 'Descrição do filme 21',
    imdb: 'tt14501740',
    imagem: 'https://image.tmdb.org/t/p/w300/2C6DDVBmNgcgAjfHlSfGH0HZIE9.jpg'
},
{
    titulo: 'As Ondas',
    descricao: 'Descrição do filme 22',
    imdb: 'tt8652728',
    imagem: 'https://image.tmdb.org/t/p/w300/dXHO1tPfv5rXQQOfu9Ji6EcAFbE.jpg'
},
{
    titulo: 'Pura Paixão',
    descricao: 'Descrição do filme 23',
    imdb: 'tt10023172',
    imagem: 'https://image.tmdb.org/t/p/w300/1K9YQaeshrBHLSnsw0a88peolVc.jpg'
},
{
    titulo: 'O Príncipe e Eu',
    descricao: 'Descrição do filme 24',
    imdb: 'tt1083448',
    imagem: 'https://image.tmdb.org/t/p/w300/mIqIvR1cawMkAAIn9xDv6GaDgHx.jpg'
},
{
    titulo: 'Awake: A Vida Por um Fio',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0211933',
    imagem: 'https://image.tmdb.org/t/p/w300/vLNJy3OHyjlbdpBxPAbjpRU0Gsy.jpg'
},
{
    titulo: 'Shadowboxer',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0396857',
    imagem: 'https://image.tmdb.org/t/p/w300/eqXOZ5a3q8AAM8jvNaVQC8PAILk.jpg'
},
{
    titulo: 'Mar em Fúria',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0177971',
    imagem: 'https://image.tmdb.org/t/p/w300/uFwxmphIAqnX8oDKhf3EOrvtW11.jpg'
},
{
    titulo: 'Cúmplices de um Segredo',
    descricao: 'Descrição do filme 4',
    imdb: 'tt2027231',
    imagem: 'https://image.tmdb.org/t/p/w300/ovcS5E39C58O30psTaK0SvLKmu8.jpg'
},
{
    titulo: 'Um Lugar Sombrio',
    descricao: 'Descrição do filme 5',
    imdb: 'tt5936866',
    imagem: 'https://image.tmdb.org/t/p/w300/qFarosDRwXQHiP2ZzApvjwdW0zH.jpg'
},
{
    titulo: 'Diamante de Sangue',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0450259',
    imagem: 'https://image.tmdb.org/t/p/w300/sy2EYPcxGJUBSdJdtMGBBarKG9c.jpg'
},
{
    titulo: 'John Carter: Entre Dois Mundos',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0401729',
    imagem: 'https://image.tmdb.org/t/p/w300/jseasEaaWH3Dos7ph0NzpDj0INV.jpg'
},
{
    titulo: 'A Estranha Perfeita',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0457433',
    imagem: 'https://image.tmdb.org/t/p/w300/2Tdqn9DaKpUzlubrkdvy6tCM9Qq.jpg'
},
{
    titulo: 'O Que é Isso, Companheiro?',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0119815',
    imagem: 'https://image.tmdb.org/t/p/w300/g3sCdDCD2IFMHX07a3XpekaqwQf.jpg'
},
{
    titulo: 'O Beijo no Asfalto',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0088784',
    imagem: 'https://image.tmdb.org/t/p/w300/iI9Fi4YUAVpBHIbgGz0sEWyMczm.jpg'
},
{
    titulo: 'Sinais',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0286106',
    imagem: 'https://image.tmdb.org/t/p/w300/d5AV8UQEd7y7VZ4ZdiRTkC5TLTj.jpg'
},
{
    titulo: '3096 Dias de Cativeiro',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1667355',
    imagem: 'https://image.tmdb.org/t/p/w300/cV5BPqLxe1BynyexKZar3KOnYV.jpg'
},
{
    titulo: 'Já Estou Com Saudades',
    descricao: 'Descrição do filme 13',
    imdb: 'tt2245003',
    imagem: 'https://image.tmdb.org/t/p/w300/6VaXmG0K8evOJ09vRevT7Aj16jY.jpg'
},
{
    titulo: 'Na Trilha da Fama',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0361696',
    imagem: 'https://image.tmdb.org/t/p/w300/fH33MyjG59ps9Kli0mHiOiP98Ti.jpg'
},
{
    titulo: 'Oficina do Diabo',
    descricao: 'Descrição do filme 15',
    imdb: 'tt12444934',
    imagem: 'https://image.tmdb.org/t/p/w300/rowUyokuj4xb17eWvghIry6nLgN.jpg'
},
{
    titulo: 'O Enfermeiro da Noite',
    descricao: 'Descrição do filme 16',
    imdb: 'tt4273800',
    imagem: 'https://image.tmdb.org/t/p/w300/cTp35hVdiVFEVOTSO7HLhmiXx8f.jpg'
},
{
    titulo: 'Gêmeo Maligno',
    descricao: 'Descrição do filme 17',
    imdb: 'tt12390572',
    imagem: 'https://image.tmdb.org/t/p/w300/pNbExNsfqTs8pXJs05yBRW0nNHg.jpg'
},
{
    titulo: '2019: O Ano da Extinção',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0433362',
    imagem: 'https://image.tmdb.org/t/p/w300/9o6VLpFWRyYkjQVSWJY4hWBTzrs.jpg'
},
{
    titulo: 'O Ritmo da Selva: O Filme',
    descricao: 'Descrição do filme 19',
    imdb: 'tt12139700',
    imagem: 'https://image.tmdb.org/t/p/w300/eRCfJ7jItEnk0AnLUHTuWA2dT1U.jpg'
},
{
    titulo: 'O Homem das Sombras',
    descricao: 'Descrição do filme 20',
    imdb: 'tt1658837',
    imagem: 'https://image.tmdb.org/t/p/w300/dMX0JwFggsMKbl3StoNF3uqExuB.jpg'
},
{
    titulo: 'O Segredo do Abismo',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0096754',
    imagem: 'https://image.tmdb.org/t/p/w300/iUmlHbK05F38QNnVDTDXa5qXFgF.jpg'
},
{
    titulo: 'Não Olhe Para o Berço',
    descricao: 'Descrição do filme 22',
    imdb: 'tt5903358',
    imagem: 'https://image.tmdb.org/t/p/w300/2jRKaVAqFI5lAz6VXb0UQKQQRND.jpg'
},
{
    titulo: 'Crocodilos: A Morte Te Espera',
    descricao: 'Descrição do filme 23',
    imdb: 'tt7978672',
    imagem: 'https://image.tmdb.org/t/p/w300/9I2ATBaOfwXo23vSBfEAQ3uZhGV.jpg'
},
{
    titulo: 'Cut: Cenas de Horror',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0189456',
    imagem: 'https://image.tmdb.org/t/p/w300/bMlqCowMu2ICYpFn3OJvOtDwFzg.jpg'
},
{
    titulo: 'Estranho Passageiro - Sputnik',
    descricao: 'Descrição do filme 1',
    imdb: 'tt11905962',
    imagem: 'https://image.tmdb.org/t/p/w300/cPQveAuNitVN9N1zG56t1mM4KxF.jpg'
},
{
    titulo: 'Linha Reta',
    descricao: 'Descrição do filme 2',
    imdb: 'tt6866224',
    imagem: 'https://image.tmdb.org/t/p/w300/co43RxflrWS5OqdhdxYPaCPWiWk.jpg'
},
{
    titulo: 'Queima de Arquivo',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0116213',
    imagem: 'https://image.tmdb.org/t/p/w300/44MkE7h2Yx7QTN5uTCmx9Qo5Bzp.jpg'
},
{
    titulo: 'Ali',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0248667',
    imagem: 'https://image.tmdb.org/t/p/w300/aBphVTRYpJS028Of2Ctho1mYgcF.jpg'
},
{
    titulo: 'Independence Day',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0116629',
    imagem: 'https://image.tmdb.org/t/p/w300/uXznnHJJ9sPSGkD1mtEZtblb9Nd.jpg'
},
{
    titulo: 'Atração Perigosa',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0840361',
    imagem: 'https://image.tmdb.org/t/p/w300/2sydggFX60NjIePHI2mQHdLpB4N.jpg'
},
{
    titulo: 'Mulheres ao Ataque',
    descricao: 'Descrição do filme 7',
    imdb: 'tt2203939',
    imagem: 'https://image.tmdb.org/t/p/w300/dWWkDxsOnHnl6vP2wQiENwdTLHr.jpg'
},
{
    titulo: 'Sob a Luz da Fama: Acampamento de Dança',
    descricao: 'Descrição do filme 8',
    imdb: 'tt5176536',
    imagem: 'https://image.tmdb.org/t/p/w300/ifA8P2Jx9pQM5rQLi335GKeQfj2.jpg'
},
{
    titulo: 'O Presente',
    descricao: 'Descrição do filme 9',
    imdb: 'tt4178092',
    imagem: 'https://image.tmdb.org/t/p/w300/juVqhrqmq3APmkVZDex8vMq1KZD.jpg'
},
{
    titulo: 'A Garota Na Caixa',
    descricao: 'Descrição do filme 10',
    imdb: 'tt5957584',
    imagem: 'https://image.tmdb.org/t/p/w300/1GwGESCZ34kaulttLwSBRj7h1vY.jpg'
},
{
    titulo: 'Honkytonk Man: A Última Canção',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0084088',
    imagem: 'https://image.tmdb.org/t/p/w300/aRTtUYJrg53jhK8DiHu4SC31yfp.jpg'
},
{
    titulo: 'Jack: A Caixa Maldita',
    descricao: 'Descrição do filme 12',
    imdb: 'tt10645682',
    imagem: 'https://image.tmdb.org/t/p/w300/8kejSfDi4eM9JcjdX1mEbMXDzju.jpg'
},
{
    titulo: 'Ninja Assassino',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1186367',
    imagem: 'https://image.tmdb.org/t/p/w300/h9brQOUyWROaa10HfG7wG2dDSB7.jpg'
},
{
    titulo: 'Vampiros do Deserto',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0245120',
    imagem: 'https://image.tmdb.org/t/p/w300/4cuKMa73hyL0dHuir3puO2YfiwE.jpg'
},
{
    titulo: 'Jogo de Espiões',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0266987',
    imagem: 'https://image.tmdb.org/t/p/w300/8eRA7GVsO3qvwu4sU0idFR0Qce3.jpg'
},
{
    titulo: 'Belfast',
    descricao: 'Descrição do filme 16',
    imdb: 'tt12789558',
    imagem: 'https://image.tmdb.org/t/p/w300/3mInLZyPOVLsZRsBwNHi3UJXXnm.jpg'
},
{
    titulo: 'O Espaços Entre Nós',
    descricao: 'Descrição do filme 17',
    imdb: 'tt8740898',
    imagem: 'https://image.tmdb.org/t/p/w300/n4WoakCL3lA1aLroXcc1MFNOQ8p.jpg'
},
{
    titulo: 'Trocados Antes do Nascimento',
    descricao: 'Descrição do filme 18',
    imdb: 'tt15353166',
    imagem: 'https://image.tmdb.org/t/p/w300/219z4DMY7oPFoC3mGVgP2lpQtmj.jpg'
},
{
    titulo: 'Boy Erased: Uma Verdade Anulada',
    descricao: 'Descrição do filme 19',
    imdb: 'tt7008872',
    imagem: 'https://image.tmdb.org/t/p/w300/aMGE7URu5EDZhwhgzP52pGZ8Gkb.jpg'
},
{
    titulo: 'Ted Bundy: A Confissão Final',
    descricao: 'Descrição do filme 20',
    imdb: 'tt13507778',
    imagem: 'https://image.tmdb.org/t/p/w300/c1diSEnYzofbGFnWmYt2qTh5YuI.jpg'
},
{
    titulo: 'Despedida em Las Vegas',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0113627',
    imagem: 'https://image.tmdb.org/t/p/w300/tKt65ySaTfxtFQyXJt6y9Pjl6xZ.jpg'
},
{
    titulo: 'Encontro com um Anjo',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0092834',
    imagem: 'https://image.tmdb.org/t/p/w300/g9CjIIyZdCybuCRkn4Ad8uWBclu.jpg'
},
{
    titulo: 'Um Sonho Possível',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0878804',
    imagem: 'https://image.tmdb.org/t/p/w300/7YkeIFriVpYPqOQkK1KnrrTSTuY.jpg'
},
{
    titulo: 'Borat - O Segundo Melhor Repórter do Glorioso País Cazaquistão Viaja à América',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0443453',
    imagem: 'https://image.tmdb.org/t/p/w300/6miekswU0Nw5nXqMp1tPJgQ4vmj.jpg'
},
{
    titulo: 'Borat: Fita de Cinema Seguinte',
    descricao: 'Descrição do filme 1',
    imdb: 'tt13143964',
    imagem: 'https://image.tmdb.org/t/p/w300/h4ciG34AaQLfk38ltBGMDdxLeF5.jpg'
},
{
    titulo: 'Operação Overlord',
    descricao: 'Descrição do filme 2',
    imdb: 'tt4530422',
    imagem: 'https://image.tmdb.org/t/p/w300/jnkxGuVgA9B9Hy9kbHdhS9VVK9g.jpg'
},
{
    titulo: 'Eu Sou Todas as Meninas',
    descricao: 'Descrição do filme 3',
    imdb: 'tt9013182',
    imagem: 'https://image.tmdb.org/t/p/w300/gWBXydaQ9vX3OIf0f1wNQ9Z0ElQ.jpg'
},
{
    titulo: 'Paulo, Apóstolo de Cristo',
    descricao: 'Descrição do filme 4',
    imdb: 'tt7388562',
    imagem: 'https://image.tmdb.org/t/p/w300/6J8IDXJlURmOwX3KnfYitSr7QbR.jpg'
},
{
    titulo: 'VIPs',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1235548',
    imagem: 'https://image.tmdb.org/t/p/w300/mzx9nTFA1nWVUsbV76hhT1hNQpu.jpg'
},
{
    titulo: 'Era Uma vez no México',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0285823',
    imagem: 'https://image.tmdb.org/t/p/w300/cdSWDmDD7VVuBKlEar7H8abN1Ox.jpg'
},
{
    titulo: 'Bad Trip',
    descricao: 'Descrição do filme 7',
    imdb: 'tt9684220',
    imagem: 'https://image.tmdb.org/t/p/w300/kgHX8SsFTlYVmz3WJ8Ji0fgv1Yn.jpg'
},
{
    titulo: 'Dia do Sim',
    descricao: 'Descrição do filme 8',
    imdb: 'tt8521876',
    imagem: 'https://image.tmdb.org/t/p/w300/wiluKb3NgB6QmuN8hWLKIUxBxxU.jpg'
},
{
    titulo: 'Um Tira da Pesada',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0086960',
    imagem: 'https://image.tmdb.org/t/p/w300/4jInjxzwR14AulEFYB6x9c9oBKS.jpg'
},
{
    titulo: 'Um Tira da Pesada 2',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0092644',
    imagem: 'https://image.tmdb.org/t/p/w300/rGG30UP6IYG7Lq0zSr6wRT2h3Ua.jpg'
},
{
    titulo: 'Yuri Marçal: Ledo Engano',
    descricao: 'Descrição do filme 11',
    imdb: 'tt20597344',
    imagem: 'https://image.tmdb.org/t/p/w300/ss5LuWcxnHFBJ3hPXJgNY5lcf8o.jpg'
},
{
    titulo: 'Namoro ou Liberdade',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1800246',
    imagem: 'https://image.tmdb.org/t/p/w300/cxin8yPKsLpbnJ7wx8Wxkwouk4.jpg'
},
{
    titulo: 'Dark Web: Cicada 3301',
    descricao: 'Descrição do filme 13',
    imdb: 'tt8110246',
    imagem: 'https://image.tmdb.org/t/p/w300/tJlLfuvIBBn5aFoyW1IQWeFHl6v.jpg'
},
{
    titulo: 'Big Pai, Big Filho',
    descricao: 'Descrição do filme 14',
    imdb: 'tt5715410',
    imagem: 'https://image.tmdb.org/t/p/w300/f3NYvraDC5yZrfUn9PvTE0TbRnm.jpg'
},
{
    titulo: 'O Grande Truque',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0482571',
    imagem: 'https://image.tmdb.org/t/p/w300/9QxqZI7ssVzyKEBwdUvOt3AUWzA.jpg'
},
{
    titulo: 'Mostra-Me O Pai',
    descricao: 'Descrição do filme 16',
    imdb: 'tt14769324',
    imagem: 'https://image.tmdb.org/t/p/w300/r3jXvhrgTi2jhliXtGLWTQfZFij.jpg'
},
{
    titulo: 'O Sétimo Dia',
    descricao: 'Descrição do filme 17',
    imdb: 'tt11263022',
    imagem: 'https://image.tmdb.org/t/p/w300/2NBiv0mpQJppmm5U912XXnokjnN.jpg'
},
{
    titulo: 'Anjos e Demônios',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0808151',
    imagem: 'https://image.tmdb.org/t/p/w300/pVhKBn8HTJVksw3Msk76MgMogiy.jpg'
},
{
    titulo: 'Desce?',
    descricao: 'Descrição do filme 19',
    imdb: 'tt9061402',
    imagem: 'https://image.tmdb.org/t/p/w300/npFa8Z1LgBZAzJc6cNhSY9VOHMw.jpg'
},
{
    titulo: 'No Lugar Errado',
    descricao: 'Descrição do filme 20',
    imdb: 'tt15837458',
    imagem: 'https://image.tmdb.org/t/p/w300/cFlGsQVzmzBei9D95RtSLCyZS6D.jpg'
},
{
    titulo: 'Um Mistério de Aurora Teagarden: O Segredo da Caveira',
    descricao: 'Descrição do filme 21',
    imdb: 'tt4200442',
    imagem: 'https://image.tmdb.org/t/p/w300/wj2IZSQxrEN06cUNASsSqrSio1K.jpg'
},
{
    titulo: 'Oeste Sem Lei',
    descricao: 'Descrição do filme 22',
    imdb: 'tt3205376',
    imagem: 'https://image.tmdb.org/t/p/w300/4eU9wJ9kaksqZZMewnbgpzJyxgm.jpg'
},
{
    titulo: 'O Lagosta',
    descricao: 'Descrição do filme 23',
    imdb: 'tt3464902',
    imagem: 'https://image.tmdb.org/t/p/w300/cUiXj9cGE7xjAm9L23jSKPnxs8g.jpg'
},
{
    titulo: 'Fé Corrompida',
    descricao: 'Descrição do filme 24',
    imdb: 'tt6053438',
    imagem: 'https://image.tmdb.org/t/p/w300/AvmhdAZESEqdxTB1Vg5pxwdyn9c.jpg'
},
{
    titulo: 'A Noite dos Mortos Vivos',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0100258',
    imagem: 'https://image.tmdb.org/t/p/w300/uVCEqpoppWJyLO2dZNAZAEcyplw.jpg'
},
{
    titulo: 'Inspetor Bugiganga',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0141369',
    imagem: 'https://image.tmdb.org/t/p/w300/qYPR9K2TUqdK7G1jYbKwIsx1JMB.jpg'
},
{
    titulo: 'Jerry & Marge Tiram a Sorte Grande',
    descricao: 'Descrição do filme 3',
    imdb: 'tt8323668',
    imagem: 'https://image.tmdb.org/t/p/w300/bbBGSm1kjgmZ0O3bPUQIbA0xlKQ.jpg'
},
{
    titulo: 'Na Batida do Coração',
    descricao: 'Descrição do filme 4',
    imdb: 'tt10662234',
    imagem: 'https://image.tmdb.org/t/p/w300/rMezVjxjNu7lb7AShUqx6Y1uPqM.jpg'
},
{
    titulo: 'Ingresso Para o Paraíso',
    descricao: 'Descrição do filme 5',
    imdb: 'tt14109724',
    imagem: 'https://image.tmdb.org/t/p/w300/kN3WwFUTvhYsLudncZlEgeh1fCu.jpg'
},
{
    titulo: 'Enola Holmes 2',
    descricao: 'Descrição do filme 6',
    imdb: 'tt14641788',
    imagem: 'https://image.tmdb.org/t/p/w300/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg'
},
{
    titulo: 'O Segredo: Ouse Sonhar',
    descricao: 'Descrição do filme 7',
    imdb: 'tt4411584',
    imagem: 'https://image.tmdb.org/t/p/w300/raTxkQlp150JAbJC62hbmHdX6MN.jpg'
},
{
    titulo: 'Juntos Pelo Acaso',
    descricao: 'Descrição do filme 8',
    imdb: 'tt1055292',
    imagem: 'https://image.tmdb.org/t/p/w300/iPNVHYV3OmhONO3GGNGQb4R3QLP.jpg'
},
{
    titulo: 'Banana Splits - O Filme',
    descricao: 'Descrição do filme 9',
    imdb: 'tt9831136',
    imagem: 'https://image.tmdb.org/t/p/w300/3ut1Ji6mEkO3bHW4xUEazNOb32W.jpg'
},
{
    titulo: 'Especialista em Crise',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1018765',
    imagem: 'https://image.tmdb.org/t/p/w300/m5UUZiCXEfaMAHIHb3ZfbvFYYi7.jpg'
},
{
    titulo: 'O Turista',
    descricao: 'Descrição do filme 11',
    imdb: 'tt1243957',
    imagem: 'https://image.tmdb.org/t/p/w300/q3VomS6Rj0J1S1xBdQy92LQ8b7k.jpg'
},
{
    titulo: 'Gravidez Monstruosa',
    descricao: 'Descrição do filme 12',
    imdb: 'tt10009030',
    imagem: 'https://image.tmdb.org/t/p/w300/lamHjIpX3IA3wKEa8X8358UqcAW.jpg'
},
{
    titulo: 'Monster Hunter',
    descricao: 'Descrição do filme 13',
    imdb: 'tt6475714',
    imagem: 'https://image.tmdb.org/t/p/w300/2QhhILPAv7MKFd1q57ssQeEV2su.jpg'
},
{
    titulo: 'Um Convidado Bem Trapalhão',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0063415',
    imagem: 'https://image.tmdb.org/t/p/w300/r9QYAGPXLWrLQZICts7Bd6MSdF0.jpg'
},
{
    titulo: 'Meu Novo Amor',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0319524',
    imagem: 'https://image.tmdb.org/t/p/w300/cvAgcPkEs2ZzhQW6Qqi2tG2az06.jpg'
},
{
    titulo: 'O 3º Andar: Terror na Rua Malasaña',
    descricao: 'Descrição do filme 16',
    imdb: 'tt10952782',
    imagem: 'https://image.tmdb.org/t/p/w300/kbrmCEZDDd19x9vZxtpROUBCFzy.jpg'
},
{
    titulo: 'Minha Vida',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0107630',
    imagem: 'https://image.tmdb.org/t/p/w300/uptzFTOz5nk7hPE7dUT54hflu9f.jpg'
},
{
    titulo: 'Minha Namorada Fora de Controle',
    descricao: 'Descrição do filme 18',
    imdb: 'tt3173758',
    imagem: 'https://image.tmdb.org/t/p/w300/iHhaXT0ujDRPxWSwsLCBgf2eimL.jpg'
},
{
    titulo: 'Um Assassino à Solta',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0119210',
    imagem: 'https://image.tmdb.org/t/p/w300/mJYfvl1TpcE3PxbAKTM1Gplag9o.jpg'
},
{
    titulo: 'O Meme do Mal',
    descricao: 'Descrição do filme 20',
    imdb: 'tt17196124',
    imagem: 'https://image.tmdb.org/t/p/w300/wAjwcIUMOM5ADGvzrqwTtrZhKYy.jpg'
},
{
    titulo: 'Meu Romance Perfeito',
    descricao: 'Descrição do filme 21',
    imdb: 'tt7358936',
    imagem: 'https://image.tmdb.org/t/p/w300/QIR5hQMQNGqUeZbouqT9w5mYfn.jpg'
},
{
    titulo: 'A Volta do Juízo Final',
    descricao: 'Descrição do filme 22',
    imdb: 'tt5742568',
    imagem: 'https://image.tmdb.org/t/p/w300/lQOrFfaFTtSSmOtDCSM2EzHguOq.jpg'
},
{
    titulo: 'Vivos',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0106246',
    imagem: 'https://image.tmdb.org/t/p/w300/spMtU8IxJN2JAmXKEP4WBAZdZrk.jpg'
},
{
    titulo: 'Os Suspeitos',
    descricao: 'Descrição do filme 24',
    imdb: 'tt1392214',
    imagem: 'https://image.tmdb.org/t/p/w300/30YtzPOimO7eG30r8K8rUkqTGNj.jpg'
},
{
    titulo: 'A Família Addams 2: Pé na Estrada',
    descricao: 'Descrição do filme 1',
    imdb: 'tt11125620',
    imagem: 'https://image.tmdb.org/t/p/w300/kGSZSlmJqshcxh6Usgx9Um0utK0.jpg'
},
{
    titulo: 'A Família Addams',
    descricao: 'Descrição do filme 2',
    imdb: 'tt1620981',
    imagem: 'https://image.tmdb.org/t/p/w300/mDCIHb6BJ27PhdAz36JWc4chKlb.jpg'
},
{
    titulo: 'Alien: A Ressurreição',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0118583',
    imagem: 'https://image.tmdb.org/t/p/w300/amyRbmL84H9m8wk0g46ZHhpMJTE.jpg'
},
{
    titulo: 'Alien: O Oitavo Passageiro',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0078748',
    imagem: 'https://image.tmdb.org/t/p/w300/t0VpOjqwobTpQK2SEZpXlqt5cqY.jpg'
},
{
    titulo: 'Aliens: O Resgate',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0090605',
    imagem: 'https://image.tmdb.org/t/p/w300/kUNcoTjBvnnO4tMu9rCR9cQrhWy.jpg'
},
{
    titulo: 'Alien: Covenant',
    descricao: 'Descrição do filme 6',
    imdb: 'tt2316204',
    imagem: 'https://image.tmdb.org/t/p/w300/dNJqsL3ekBPUXsSDu6oABGZkJMM.jpg'
},
{
    titulo: 'Caso 39',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0795351',
    imagem: 'https://image.tmdb.org/t/p/w300/m54jwkaULMrTmSNr6C1yeMZh46U.jpg'
},
{
    titulo: 'Mistérios de Amor: A Arte do Assassinato',
    descricao: 'Descrição do filme 8',
    imdb: 'tt14192916',
    imagem: 'https://image.tmdb.org/t/p/w300/64Etf6OvzJQ2cg1zgLo70VN5qmB.jpg'
},
{
    titulo: 'Oração Diabólica',
    descricao: 'Descrição do filme 9',
    imdb: 'tt8426182',
    imagem: 'https://image.tmdb.org/t/p/w300/9LcOsiSqeR94knLnpJ0ktnOx7OQ.jpg'
},
{
    titulo: 'Caçadora de Gigantes',
    descricao: 'Descrição do filme 10',
    imdb: 'tt4547194',
    imagem: 'https://image.tmdb.org/t/p/w300/1llJ6a7P4JShSqJtNGnmY8J6YC8.jpg'
},
{
    titulo: 'O Chalé',
    descricao: 'Descrição do filme 11',
    imdb: 'tt7347846',
    imagem: 'https://image.tmdb.org/t/p/w300/zlH9KGqzPcwXYebKcp97noELJwd.jpg'
},
{
    titulo: 'Paixão Sem Limites',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1648216',
    imagem: 'https://image.tmdb.org/t/p/w300/zwOLz8EhBMUqqVYSXj8Pf5NqjO9.jpg'
},
{
    titulo: 'Lua de Júpiter',
    descricao: 'Descrição do filme 13',
    imdb: 'tt5842890',
    imagem: 'https://image.tmdb.org/t/p/w300/2yq55TlXbksYInqpWvDf7QckG9V.jpg'
},
{
    titulo: 'Doces ou Travessuras',
    descricao: 'Descrição do filme 14',
    imdb: 'tt7830428',
    imagem: 'https://image.tmdb.org/t/p/w300/fV58h19dy7Swa3oU5eY8AQCznsJ.jpg'
},
{
    titulo: 'Nosso Ex-Marido',
    descricao: 'Descrição do filme 15',
    imdb: 'tt5373854',
    imagem: 'https://image.tmdb.org/t/p/w300/6xpdwyko6HUqWw090UvLYSsbVqy.jpg'
},
{
    titulo: 'A Lenda da Passagem Secreta',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0765465',
    imagem: 'https://image.tmdb.org/t/p/w300/q7aenz9ZERyL4EVZA4ieHnXQrjS.jpg'
},
{
    titulo: 'Born Racer',
    descricao: 'Descrição do filme 17',
    imdb: 'tt6936350',
    imagem: 'https://image.tmdb.org/t/p/w300/ArytU7HSgxNfqOW5rdRgp9jMm2m.jpg'
},
{
    titulo: 'Fuga de Auschwitz',
    descricao: 'Descrição do filme 18',
    imdb: 'tt10944744',
    imagem: 'https://image.tmdb.org/t/p/w300/lKYxhG1Y7pse4kFMaz754gWAjrQ.jpg'
},
{
    titulo: 'Pokémon o Filme: O Poder de Todos',
    descricao: 'Descrição do filme 19',
    imdb: 'tt8108230',
    imagem: 'https://image.tmdb.org/t/p/w300/5JDpggW74NfM36e3vXV0aN5b7ZD.jpg'
},
{
    titulo: 'Noites Brutais',
    descricao: 'Descrição do filme 20',
    imdb: 'tt15791034',
    imagem: 'https://image.tmdb.org/t/p/w300/tA5OE1P8GAEuASNtus5zhJrooI4.jpg'
},
{
    titulo: 'O Monastério',
    descricao: 'Descrição do filme 21',
    imdb: 'tt19724142',
    imagem: 'https://image.tmdb.org/t/p/w300/3retN9fNG3fXJlUjasDsyfZqT7T.jpg'
},
{
    titulo: 'O Mundo de Mia: A Esperança de Centopia',
    descricao: 'Descrição do filme 22',
    imdb: 'tt5790684',
    imagem: 'https://image.tmdb.org/t/p/w300/czkzXAtaJ09DNvmSGjsIndrXZqa.jpg'
},
{
    titulo: 'Os Céus do Norte sobre o Vazio',
    descricao: 'Descrição do filme 23',
    imdb: 'tt14030846',
    imagem: 'https://image.tmdb.org/t/p/w300/5Y9h7BNjm3PgR0mk6XjGszaRoWa.jpg'
},
{
    titulo: 'Quatro Gerações',
    descricao: 'Descrição do filme 24',
    imdb: 'tt22227936',
    imagem: 'https://image.tmdb.org/t/p/w300/tmbpeBp9qeCFj94f6NtMd7Sssge.jpg'
},
{
    titulo: 'Retorno da Lenda',
    descricao: 'Descrição do filme 1',
    imdb: 'tt12731980',
    imagem: 'https://image.tmdb.org/t/p/w300/a5TMox6zYw686BbVS8D1UTPUYGI.jpg'
},
{
    titulo: 'Roubando Mussolini',
    descricao: 'Descrição do filme 2',
    imdb: 'tt14270848',
    imagem: 'https://image.tmdb.org/t/p/w300/mo4JxW3rWsOF87XNeAoeewESrMY.jpg'
},
{
    titulo: 'Sala de Espionagem',
    descricao: 'Descrição do filme 3',
    imdb: 'tt16527290',
    imagem: 'https://image.tmdb.org/t/p/w300/bIIlLOfJiqR9O1N5RJcHI1MmIFK.jpg'
},
{
    titulo: 'The Power: Horror na Escuridão',
    descricao: 'Descrição do filme 4',
    imdb: 'tt9314984',
    imagem: 'https://image.tmdb.org/t/p/w300/lZ4x0TqcUulNfqqNbe9YWW2gTd1.jpg'
},
{
    titulo: 'Um Rio Muito Frio',
    descricao: 'Descrição do filme 5',
    imdb: 'tt2184390',
    imagem: 'https://image.tmdb.org/t/p/w300/8jSGDVXQmEhLL4A1vrUCFG2Xmtd.jpg'
},
{
    titulo: 'Vento Selvagem',
    descricao: 'Descrição do filme 6',
    imdb: 'tt22437050',
    imagem: 'https://image.tmdb.org/t/p/w300/suTCgEyS9KWexoaO1XJuzdgC7IQ.jpg'
},
{
    titulo: 'Corra, Querida, Corra',
    descricao: 'Descrição do filme 7',
    imdb: 'tt8656686',
    imagem: 'https://image.tmdb.org/t/p/w300/9xf3aiAxjx2H34EwwVFFlOrr0nt.jpg'
},
{
    titulo: 'Depois do Universo',
    descricao: 'Descrição do filme 8',
    imdb: 'tt16027944',
    imagem: 'https://image.tmdb.org/t/p/w300/jv8PbopI3r3p0HrQJbLYcOzFHle.jpg'
},
{
    titulo: 'A Lenda de Lantern’s Lane',
    descricao: 'Descrição do filme 9',
    imdb: 'tt11880264',
    imagem: 'https://image.tmdb.org/t/p/w300/4xJXC8tRAUKZeS7YoFK9UvEx8hb.jpg'
},
{
    titulo: 'Cloverfield: Monstro',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1060277',
    imagem: 'https://image.tmdb.org/t/p/w300/6FDbOI1AAMtvb6QkKkxnKTm7NiI.jpg'
},
{
    titulo: 'Aterrorizante 2',
    descricao: 'Descrição do filme 11',
    imdb: 'tt10403420',
    imagem: 'https://image.tmdb.org/t/p/w300/yw8NQyvbeNXoZO6v4SEXrgQ27Ll.jpg'
},
{
    titulo: 'Ronaldo, O Fenômeno',
    descricao: 'Descrição do filme 12',
    imdb: 'None',
    imagem: 'https://image.tmdb.org/t/p/w300/vNlwArDpdG60HCtmjxMEpVu0WLO.jpg'
},
{
    titulo: 'Perigo no Grupo de Mães',
    descricao: 'Descrição do filme 13',
    imdb: 'tt15693760',
    imagem: 'https://image.tmdb.org/t/p/w300/fzd6YA9sWePtMElRDEcAQzUSv3I.jpg'
},
{
    titulo: 'De Agora Em Diante',
    descricao: 'Descrição do filme 14',
    imdb: 'tt8466482',
    imagem: 'https://image.tmdb.org/t/p/w300/sl7uXQhX8IM5rdiHbRWHdv4pKKB.jpg'
},
{
    titulo: 'Assalto na Paulista',
    descricao: 'Descrição do filme 15',
    imdb: 'tt20417610',
    imagem: 'https://image.tmdb.org/t/p/w300/g4j5D2lCue9gIDvYg89VdSBXq1y.jpg'
},
{
    titulo: 'A Viagem de Pedro',
    descricao: 'Descrição do filme 16',
    imdb: 'tt9225812',
    imagem: 'https://image.tmdb.org/t/p/w300/rAeRtuhOYLCslGRkbfJlf1XaJ29.jpg'
},
{
    titulo: 'A Escola do Bem e do Mal',
    descricao: 'Descrição do filme 17',
    imdb: 'tt2935622',
    imagem: 'https://image.tmdb.org/t/p/w300/fbo6sHohCSQDOY6RYPQX3zO886y.jpg'
},
{
    titulo: 'A Luta de uma Vida',
    descricao: 'Descrição do filme 18',
    imdb: 'tt9242528',
    imagem: 'https://image.tmdb.org/t/p/w300/maTuBPCOMEHCUHg1ytgZvsjU7kt.jpg'
},
{
    titulo: 'Argentina, 1985',
    descricao: 'Descrição do filme 19',
    imdb: 'tt15301048',
    imagem: 'https://image.tmdb.org/t/p/w300/isLWtcB9TK3wLlTzEny2dPH6beh.jpg'
},
{
    titulo: 'Bender: O Início',
    descricao: 'Descrição do filme 20',
    imdb: 'tt15060248',
    imagem: 'https://image.tmdb.org/t/p/w300/z6gN1mxIS87nmDBaRc2gahTY2C4.jpg'
},
{
    titulo: 'Garota do Século 20',
    descricao: 'Descrição do filme 21',
    imdb: 'tt15340724',
    imagem: 'https://image.tmdb.org/t/p/w300/uy3NhZq5IMw9c7vSoP2Z1GsQOJo.jpg'
},
{
    titulo: 'Jaula',
    descricao: 'Descrição do filme 22',
    imdb: 'tt12683756',
    imagem: 'https://image.tmdb.org/t/p/w300/z0iZuYNM0hUyHZeldIdXf4aSrPy.jpg'
},
{
    titulo: 'Lanterna Verde: Cuidado Com Meu Poder',
    descricao: 'Descrição do filme 23',
    imdb: 'tt20192230',
    imagem: 'https://image.tmdb.org/t/p/w300/kjfcOlpNZocBB3lbw8KHMPT9Ov4.jpg'
},
{
    titulo: 'Mary Kay Letourneau: Faces de Um Escândalo',
    descricao: 'Descrição do filme 24',
    imdb: 'None',
    imagem: 'https://image.tmdb.org/t/p/w300/sANGKAf4FTz5FxRgTqNt9HzAw7N.jpg'
},
{
    titulo: 'Não Se Preocupe, Querida',
    descricao: 'Descrição do filme 1',
    imdb: 'tt10731256',
    imagem: 'https://image.tmdb.org/t/p/w300/wkEuGtrwmQwk7U3FYzIYhmAwDhG.jpg'
},
{
    titulo: 'O Desconhecido',
    descricao: 'Descrição do filme 2',
    imdb: 'tt11897478',
    imagem: 'https://image.tmdb.org/t/p/w300/pt4Ukp5FzN3PFFiG14E6phEV2rZ.jpg'
},
{
    titulo: 'O Palestrante',
    descricao: 'Descrição do filme 3',
    imdb: 'tt10558652',
    imagem: 'https://image.tmdb.org/t/p/w300/pMuCfqBlaHaxTD2eIK1IyhQlXUx.jpg'
},
{
    titulo: 'Panamá',
    descricao: 'Descrição do filme 4',
    imdb: 'tt4029412',
    imagem: 'https://image.tmdb.org/t/p/w300/u9DzgsmssidygWuORgYzhi317vj.jpg'
},
{
    titulo: 'Rosalina',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1777606',
    imagem: 'https://image.tmdb.org/t/p/w300/Ad51mrs3azZMzHE6cLrCv9uSztP.jpg'
},
{
    titulo: 'Rubikon',
    descricao: 'Descrição do filme 6',
    imdb: 'tt13829262',
    imagem: 'https://image.tmdb.org/t/p/w300/8i2uZmhVk6lkqierZLFnBHnL24q.jpg'
},
{
    titulo: 'Esposa de Aluguel',
    descricao: 'Descrição do filme 7',
    imdb: 'tt22091698',
    imagem: 'https://image.tmdb.org/t/p/w300/28E42Ea3Ml3cjvUMHaSqeGYXBfI.jpg'
},
{
    titulo: 'A Maldição de Bridge Hollow',
    descricao: 'Descrição do filme 8',
    imdb: 'tt15289240',
    imagem: 'https://image.tmdb.org/t/p/w300/f4hdxB3gErjNJtfWBU9rMdhiNbU.jpg'
},
{
    titulo: 'Phobias',
    descricao: 'Descrição do filme 9',
    imdb: 'tt8129682',
    imagem: 'https://image.tmdb.org/t/p/w300/zpecci4IooFiwMVGknhm8Jz2FHo.jpg'
},
{
    titulo: 'Psicopata Americano 2',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0283877',
    imagem: 'https://image.tmdb.org/t/p/w300/5d3C3ur7lahibP5PyUkvtsD8AOn.jpg'
},
{
    titulo: 'Psicopata Americano',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0144084',
    imagem: 'https://image.tmdb.org/t/p/w300/9YEZ1LrHNbk3LEwwIAljulcEV3H.jpg'
},
{
    titulo: 'Adão Negro',
    descricao: 'Descrição do filme 12',
    imdb: 'tt6443346',
    imagem: 'https://image.tmdb.org/t/p/w300/gE1KNghdInNh0VDcfFQlAy4PTEL.jpg'
},
{
    titulo: 'O Cobrador de Impostos',
    descricao: 'Descrição do filme 13',
    imdb: 'tt8461224',
    imagem: 'https://image.tmdb.org/t/p/w300/43fdO16uhawDtpVvNXnUNhlzOEt.jpg'
},
{
    titulo: 'O Destino de Haffmann',
    descricao: 'Descrição do filme 14',
    imdb: 'tt10545704',
    imagem: 'https://image.tmdb.org/t/p/w300/yQ2s9RoFDJO6qFnv736aG6VbY7c.jpg'
},
{
    titulo: 'Rainbow',
    descricao: 'Descrição do filme 15',
    imdb: 'tt14722598',
    imagem: 'https://image.tmdb.org/t/p/w300/pFg29SbNbXkcuSgbnwnTz4wie4x.jpg'
},
{
    titulo: 'Pânico: A História por Trás do Filme',
    descricao: 'Descrição do filme 16',
    imdb: 'tt16491738',
    imagem: 'https://image.tmdb.org/t/p/w300/l2vm6wdXjkxxTQSWOoquVUEz4Qo.jpg'
},
{
    titulo: 'RRR: Revolta, Rebelião, Revolução',
    descricao: 'Descrição do filme 17',
    imdb: 'tt8178634',
    imagem: 'https://image.tmdb.org/t/p/w300/d0W61w08KPAxO63uuM0Xspxb27l.jpg'
},
{
    titulo: 'Você Não é Um Soldado',
    descricao: 'Descrição do filme 18',
    imdb: 'tt10889948',
    imagem: 'https://image.tmdb.org/t/p/w300/lVndyIFjeEf2kZVYuZ25DTtaWYX.jpg'
},
{
    titulo: 'O Exorcismo da Minha Melhor Amiga',
    descricao: 'Descrição do filme 19',
    imdb: 'tt7830806',
    imagem: 'https://image.tmdb.org/t/p/w300/vAmkfhNzINNoaWkE70927FCpBX2.jpg'
},
{
    titulo: 'Eu, Traidor',
    descricao: 'Descrição do filme 20',
    imdb: 'tt16477412',
    imagem: 'https://image.tmdb.org/t/p/w300/u0MbKWieMwVDZl0eJdNt7Z6pbKU.jpg'
},
{
    titulo: 'Caçadores de Vampiros',
    descricao: 'Descrição do filme 21',
    imdb: 'tt18290670',
    imagem: 'https://image.tmdb.org/t/p/w300/tgTslXlyDloCDCaAZUptaR1Pt5k.jpg'
},
{
    titulo: 'Brasil 2002: Os Bastidores do Penta',
    descricao: 'Descrição do filme 22',
    imdb: 'None',
    imagem: 'https://image.tmdb.org/t/p/w300/uvrRBAkKyVHfWOvqAvgmDasgAGU.jpg'
},
{
    titulo: 'Amor Doentio',
    descricao: 'Descrição do filme 23',
    imdb: 'tt11009646',
    imagem: 'https://image.tmdb.org/t/p/w300/b2v6R4V4vk3dGApTt42sdR2JjoB.jpg'
},
{
    titulo: 'A Vida de Togo',
    descricao: 'Descrição do filme 24',
    imdb: 'tt15686024',
    imagem: 'https://image.tmdb.org/t/p/w300/9qkl34olpFVM9nAuYeveO6uKpaA.jpg'
},
{
    titulo: '100 Medos',
    descricao: 'Descrição do filme 1',
    imdb: 'tt22071864',
    imagem: 'https://image.tmdb.org/t/p/w300/o3YitLNoZsucoGrcjehaR9p45Ip.jpg'
},
{
    titulo: 'Sorria',
    descricao: 'Descrição do filme 2',
    imdb: 'tt15474916',
    imagem: 'https://image.tmdb.org/t/p/w300/gJbMkl9e2NZcjlKpXuK9QaExobN.jpg'
},
{
    titulo: 'Curtas dos Minions Volume 1',
    descricao: 'Descrição do filme 3',
    imdb: 'tt22184976',
    imagem: 'https://image.tmdb.org/t/p/w300/wCQBzTOigP5eCyBAjQGlWYNo5DR.jpg'
},
{
    titulo: 'Invasão Bolchevique',
    descricao: 'Descrição do filme 4',
    imdb: 'tt21650070',
    imagem: 'https://image.tmdb.org/t/p/w300/k445VilKhdBeKQyLprJsyPEpkoV.jpg'
},
{
    titulo: 'Drifting Home',
    descricao: 'Descrição do filme 5',
    imdb: 'tt15494038',
    imagem: 'https://image.tmdb.org/t/p/w300/zOkalOuwZl1KuOLIkBqVuOVpGKq.jpg'
},
{
    titulo: 'Paixão Sufocante',
    descricao: 'Descrição do filme 6',
    imdb: 'tt14995258',
    imagem: 'https://image.tmdb.org/t/p/w300/kYIPV5vcZOKWiKleJCmZvHAjnBk.jpg'
},
{
    titulo: 'Amor de Redenção',
    descricao: 'Descrição do filme 7',
    imdb: 'tt11365186',
    imagem: 'https://image.tmdb.org/t/p/w300/o5qpPwlaAbOH2teRowl9ThzEF2r.jpg'
},
{
    titulo: 'A Estação da Alegria',
    descricao: 'Descrição do filme 8',
    imdb: 'tt15739902',
    imagem: 'https://image.tmdb.org/t/p/w300/8QkNOItJNy0mFwpMJIac9VGbgt9.jpg'
},
{
    titulo: 'Encurralados em Veneza',
    descricao: 'Descrição do filme 9',
    imdb: 'tt12412166',
    imagem: 'https://image.tmdb.org/t/p/w300/bjT1tfmW5HblRFsQNZRkx8XwrTp.jpg'
},
{
    titulo: 'Fim da Estrada',
    descricao: 'Descrição do filme 10',
    imdb: 'tt13655328',
    imagem: 'https://image.tmdb.org/t/p/w300/aqUTMmzAmNgmr55U1dezPVTQAHP.jpg'
},
{
    titulo: 'HollyBlood',
    descricao: 'Descrição do filme 11',
    imdb: 'tt14210720',
    imagem: 'https://image.tmdb.org/t/p/w300/Wcm5wTiD94u6WpiUZ4958w8ac2.jpg'
},
{
    titulo: 'Mar em Chamas',
    descricao: 'Descrição do filme 12',
    imdb: 'tt12753120',
    imagem: 'https://image.tmdb.org/t/p/w300/znrMRCeim6z8BVdCh9NdBuLFxi2.jpg'
},
{
    titulo: 'Trancada',
    descricao: 'Descrição do filme 13',
    imdb: 'tt10131024',
    imagem: 'https://image.tmdb.org/t/p/w300/cWBCMiORHEfXWf6AreeDzkczyTy.jpg'
},
{
    titulo: 'Abracadabra 2',
    descricao: 'Descrição do filme 14',
    imdb: 'tt11909878',
    imagem: 'https://image.tmdb.org/t/p/w300/8G7EaPTocE0ok3YNxo972woo9EP.jpg'
},
{
    titulo: 'UNTOLD: A Regata do Século',
    descricao: 'Descrição do filme 15',
    imdb: 'tt21811526',
    imagem: 'https://image.tmdb.org/t/p/w300/uiGi7OAaukIUlZbgracBi9FiIFE.jpg'
},
{
    titulo: 'Minta Para Mim',
    descricao: 'Descrição do filme 16',
    imdb: 'tt13568814',
    imagem: 'https://image.tmdb.org/t/p/w300/s3NoPF6LAKDl3KUGkZsYPX9ionc.jpg'
},
{
    titulo: 'O Perfumista',
    descricao: 'Descrição do filme 17',
    imdb: 'tt21916206',
    imagem: 'https://image.tmdb.org/t/p/w300/9scjnoZYrkNaOmIlpI1hm9LOMJL.jpg'
},
{
    titulo: 'Blonde',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1655389',
    imagem: 'https://image.tmdb.org/t/p/w300/jOgbnL5FB30pprEjZaY1E1iPtPM.jpg'
},
{
    titulo: 'Uma Viagem ao Infinito',
    descricao: 'Descrição do filme 19',
    imdb: 'tt21929356',
    imagem: 'https://image.tmdb.org/t/p/w300/38KllKVpeTLvirHvuLWWy5I71rX.jpg'
},
{
    titulo: 'A Fera',
    descricao: 'Descrição do filme 20',
    imdb: 'tt13223398',
    imagem: 'https://image.tmdb.org/t/p/w300/p7t66z5zQnSmn1ezTdHm0PQmf5q.jpg'
},
{
    titulo: 'As Confissões de Félix Krull: Cavalheiro de Indústria',
    descricao: 'Descrição do filme 21',
    imdb: 'tt13256256',
    imagem: 'https://image.tmdb.org/t/p/w300/inIWJnx0vuJCiXBt4DxnbgSBwQ.jpg'
},
{
    titulo: 'Esquadrão Secreto',
    descricao: 'Descrição do filme 22',
    imdb: 'tt14001894',
    imagem: 'https://image.tmdb.org/t/p/w300/pCl8JaMDkibswcNuEFLoDVNmO4k.jpg'
},
{
    titulo: 'A Máquina Infernal',
    descricao: 'Descrição do filme 23',
    imdb: 'tt15275256',
    imagem: 'https://image.tmdb.org/t/p/w300/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg'
},
{
    titulo: 'O Homem do Jazz',
    descricao: 'Descrição do filme 24',
    imdb: 'tt14307536',
    imagem: 'https://image.tmdb.org/t/p/w300/juvKmySdoCFmjuPeokOtEK3jGHx.jpg'
},
{
    titulo: '#PartiuFama: Cancelado no Amor',
    descricao: 'Descrição do filme 1',
    imdb: 'tt21844020',
    imagem: 'https://image.tmdb.org/t/p/w300/24eEIEi7bgGmNDnsfkC6FAQTF8.jpg'
},
{
    titulo: 'Pokémon: As Crônicas de Arceus',
    descricao: 'Descrição do filme 2',
    imdb: 'tt21970564',
    imagem: 'https://image.tmdb.org/t/p/w300/r9AxrlhBgmFfipnYZ3UNUpsM8JZ.jpg'
},
{
    titulo: 'Reflexões no Espelho',
    descricao: 'Descrição do filme 3',
    imdb: 'tt12358208',
    imagem: 'https://image.tmdb.org/t/p/w300/98z7FKvuqT4YmqEUQo5JTEbUTzY.jpg'
},
{
    titulo: 'Trem-Bala',
    descricao: 'Descrição do filme 4',
    imdb: 'tt12593682',
    imagem: 'https://image.tmdb.org/t/p/w300/77zENVKgbc4bhmlLfHRUbVZ99N5.jpg'
},
{
    titulo: 'O Alfaiate',
    descricao: 'Descrição do filme 5',
    imdb: 'tt14114802',
    imagem: 'https://image.tmdb.org/t/p/w300/hKu1P98TtARG8wz5VSXIe28vfrG.jpg'
},
{
    titulo: 'Lou',
    descricao: 'Descrição do filme 6',
    imdb: 'tt5315210',
    imagem: 'https://image.tmdb.org/t/p/w300/djM2s4wSaATn4jVB33cV05PEbV7.jpg'
},
{
    titulo: 'Já Fui Famoso',
    descricao: 'Descrição do filme 7',
    imdb: 'tt15807910',
    imagem: 'https://image.tmdb.org/t/p/w300/hvqHMh0DBVRMmfeRxTPlk5Fcu8f.jpg'
},
{
    titulo: 'Garotos de Bem',
    descricao: 'Descrição do filme 8',
    imdb: 'tt10345782',
    imagem: 'https://image.tmdb.org/t/p/w300/h9keoAAS1RSxgKSUDO97MWl1DHq.jpg'
},
{
    titulo: 'Athena',
    descricao: 'Descrição do filme 9',
    imdb: 'tt15445056',
    imagem: 'https://image.tmdb.org/t/p/w300/66hefmZ1ZVLO1Hb57sZVGSlDAmM.jpg'
},
{
    titulo: 'A Queda',
    descricao: 'Descrição do filme 10',
    imdb: 'tt15325794',
    imagem: 'https://image.tmdb.org/t/p/w300/68SX7S9lisehbuZLNX4CrVMxV1v.jpg'
},
{
    titulo: 'Tudo por Ela',
    descricao: 'Descrição do filme 11',
    imdb: 'tt14164234',
    imagem: 'https://image.tmdb.org/t/p/w300/81QJ2Xq4Os95A7dnZbElNI6OoLz.jpg'
},
{
    titulo: 'Órfã 2: A Origem',
    descricao: 'Descrição do filme 12',
    imdb: 'tt11851548',
    imagem: 'https://image.tmdb.org/t/p/w300/uRdpVgEufzYNVnDPTXEjt0mpD99.jpg'
},
{
    titulo: 'Boa Noite, Mamãe!',
    descricao: 'Descrição do filme 13',
    imdb: 'tt9000184',
    imagem: 'https://image.tmdb.org/t/p/w300/lwq6ct0AeroUxlXwr49QJiMzf4k.jpg'
},
{
    titulo: 'Colonização Espacial: A Última Esperança',
    descricao: 'Descrição do filme 14',
    imdb: 'tt14960976',
    imagem: 'https://image.tmdb.org/t/p/w300/U3MjTphhzpX7I6UrSCmQrOiMnl.jpg'
},
{
    titulo: 'Honor Society',
    descricao: 'Descrição do filme 15',
    imdb: 'tt16491324',
    imagem: 'https://image.tmdb.org/t/p/w300/61CZ4JxyaI462sFfLPhtyzRg4vv.jpg'
},
{
    titulo: 'Justiceiras',
    descricao: 'Descrição do filme 16',
    imdb: 'tt13327038',
    imagem: 'https://image.tmdb.org/t/p/w300/rF0ItNyvhMIavqcuVtHFPhbW6Yf.jpg'
},
{
    titulo: 'Plano B',
    descricao: 'Descrição do filme 17',
    imdb: 'tt1212436',
    imagem: 'https://image.tmdb.org/t/p/w300/5oYVyLDfdIVoXhDHgo6WBwU9KMw.jpg'
},
{
    titulo: 'Nerve: Um Jogo Sem Regras',
    descricao: 'Descrição do filme 18',
    imdb: 'tt3531824',
    imagem: 'https://image.tmdb.org/t/p/w300/gzW57bccJv79IbUuQh8Bwf3Qnmi.jpg'
},
{
    titulo: 'O Exorcismo de Emily Rose',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0404032',
    imagem: 'https://image.tmdb.org/t/p/w300/3tE6r2IaABY08EcIKF51qACri8H.jpg'
},
{
    titulo: 'Vingança e Redenção',
    descricao: 'Descrição do filme 20',
    imdb: 'tt14686544',
    imagem: 'https://image.tmdb.org/t/p/w300/6hLaPB3OFcRZMFQT6skxLnnErpF.jpg'
},
{
    titulo: 'A Mulher Rei',
    descricao: 'Descrição do filme 21',
    imdb: 'tt8093700',
    imagem: 'https://image.tmdb.org/t/p/w300/ml7Ypdeev7s1MK38dQN0OXoZ8p9.jpg'
},
{
    titulo: 'V/H/S/94',
    descricao: 'Descrição do filme 22',
    imdb: 'tt14867006',
    imagem: 'https://image.tmdb.org/t/p/w300/9fSogEkqDfJQTuGHsTFloQz3Tw8.jpg'
},
{
    titulo: 'Clube dos Cinco',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0088847',
    imagem: 'https://image.tmdb.org/t/p/w300/iV7F7cOzNnibAfnJ0bRGVxRkp6s.jpg'
},
{
    titulo: 'Dr. Stone Ryuusui',
    descricao: 'Descrição do filme 24',
    imdb: 'tt21254076',
    imagem: 'https://image.tmdb.org/t/p/w300/b26VogUnaofhsd7hYZXQjSsyyZX.jpg'
},
{
    titulo: 'After: Depois da Promessa',
    descricao: 'Descrição do filme 1',
    imdb: 'tt13070038',
    imagem: 'https://image.tmdb.org/t/p/w300/lflvA9oQ3sTfiVttvjSbf6lS9X5.jpg'
},
{
    titulo: 'Todo Dia',
    descricao: 'Descrição do filme 2',
    imdb: 'tt7026672',
    imagem: 'https://image.tmdb.org/t/p/w300/4oGwEZS1QkZTxn2eyjH49rcHs6y.jpg'
},
{
    titulo: 'Valerian e a Cidade dos Mil Planetas',
    descricao: 'Descrição do filme 3',
    imdb: 'tt2239822',
    imagem: 'https://image.tmdb.org/t/p/w300/x69DC2NnchOhNykhbkjgpuqC2SD.jpg'
},
{
    titulo: 'Você Nem Imagina',
    descricao: 'Descrição do filme 4',
    imdb: 'tt9683478',
    imagem: 'https://image.tmdb.org/t/p/w300/wkmqFsEPH8Ly2eotlL5WRToAJ2f.jpg'
},
{
    titulo: 'Um Dia',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1563738',
    imagem: 'https://image.tmdb.org/t/p/w300/jgEZqFqQgM81nVyHKtXDV0UxKGa.jpg'
},
{
    titulo: 'Uma Segunda Chance Para Amar',
    descricao: 'Descrição do filme 6',
    imdb: 'tt8623904',
    imagem: 'https://image.tmdb.org/t/p/w300/1vqkt1bZF5gDmID60jzhEip2WrL.jpg'
},
{
    titulo: 'Vizinhos',
    descricao: 'Descrição do filme 7',
    imdb: 'tt21742248',
    imagem: 'https://image.tmdb.org/t/p/w300/oT7388wlquvpGN3LPxVeD849QAI.jpg'
},
{
    titulo: 'Diorama',
    descricao: 'Descrição do filme 8',
    imdb: 'tt10851466',
    imagem: 'https://image.tmdb.org/t/p/w300/gOXTTRXjSo2Lk9LO6oxLL6lMP7U.jpg'
},
{
    titulo: 'Muito Bem Acompanhada',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0372532',
    imagem: 'https://image.tmdb.org/t/p/w300/pGMjgXFGfbCFiAlfPrfevGoPyfs.jpg'
},
{
    titulo: '[REC] 4: Apocalipse',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1649443',
    imagem: 'https://image.tmdb.org/t/p/w300/uUGdIdCl8Fy4TRcXLizRCDPQJ5R.jpg'
},
{
    titulo: 'Independence Day: O Ressurgimento',
    descricao: 'Descrição do filme 11',
    imdb: 'tt1628841',
    imagem: 'https://image.tmdb.org/t/p/w300/fpQEX5OrVfI6KftsuqpGTapKYpT.jpg'
},
{
    titulo: '[REC]',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1038988',
    imagem: 'https://image.tmdb.org/t/p/w300/vIoBgFBJuqcIzudkFyagJuCxHZ7.jpg'
},
{
    titulo: 'A Família Noel',
    descricao: 'Descrição do filme 13',
    imdb: 'tt12459520',
    imagem: 'https://image.tmdb.org/t/p/w300/xOkrJgY9oHl0FMkR8VqOgYEmp7f.jpg'
},
{
    titulo: 'Um Menino Chamado Natal',
    descricao: 'Descrição do filme 14',
    imdb: 'tt10187208',
    imagem: 'https://image.tmdb.org/t/p/w300/ik7x3QS4LVfZPMV4lAIFtoh7ASS.jpg'
},
{
    titulo: 'Uma Invenção de Natal',
    descricao: 'Descrição do filme 15',
    imdb: 'tt7736496',
    imagem: 'https://image.tmdb.org/t/p/w300/wdqdvFt0AIwnX1spxVwaOOc9p4A.jpg'
},
{
    titulo: '24 Horas para o Natal',
    descricao: 'Descrição do filme 16',
    imdb: 'tt9168384',
    imagem: 'https://image.tmdb.org/t/p/w300/qtwhbcbG9N7yR9Wq5e0UZVAJqUy.jpg'
},
{
    titulo: 'Flummels: Extintos!',
    descricao: 'Descrição do filme 17',
    imdb: 'tt8241000',
    imagem: 'https://image.tmdb.org/t/p/w300/9AMJnitm4Kmw7ZrC7EnwXpYpwFK.jpg'
},
{
    titulo: 'Albert',
    descricao: 'Descrição do filme 18',
    imdb: 'tt6254874',
    imagem: 'https://image.tmdb.org/t/p/w300/6hEXYAJ88eQZFN3niaBsjn52os9.jpg'
},
{
    titulo: 'Elliot: Uma História de Natal',
    descricao: 'Descrição do filme 19',
    imdb: 'tt4177856',
    imagem: 'https://image.tmdb.org/t/p/w300/hic80IBkrc5ZnCcIx6Hyb9ovldl.jpg'
},
{
    titulo: 'As Panteras',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0160127',
    imagem: 'https://image.tmdb.org/t/p/w300/2Tsl98OKwckXZzCvfOiTMAXZIEz.jpg'
},
{
    titulo: 'Snoopy Apresenta: Feliz Ano Novo, Lucy!',
    descricao: 'Descrição do filme 21',
    imdb: 'tt15553258',
    imagem: 'https://image.tmdb.org/t/p/w300/bqx5WTWPX4H4g9LUCmnrtg9BIPZ.jpg'
},
{
    titulo: 'As Panteras: Detonando',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0305357',
    imagem: 'https://image.tmdb.org/t/p/w300/4GZLHlKuvQCqNnKfT3GNZYnlFFc.jpg'
},
{
    titulo: 'O Advogado dos 5 Crimes',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0133985',
    imagem: 'https://image.tmdb.org/t/p/w300/eTta5YVnhcbhn0C8uDmP3Lp9BcB.jpg'
},
{
    titulo: 'Mogli: O Menino Lobo',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0061852',
    imagem: 'https://image.tmdb.org/t/p/w300/ikqAxUAEH4BloLjVgR8MWNX3qtU.jpg'
},
{
    titulo: 'Rodrigo Marques: O Inimigo do Nível',
    descricao: 'Descrição do filme 1',
    imdb: 'tt21742294',
    imagem: 'https://image.tmdb.org/t/p/w300/miA6VI6fUANcvlQ4avvM7mCCldT.jpg'
},
{
    titulo: 'Calígula',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0080491',
    imagem: 'https://image.tmdb.org/t/p/w300/4N4l873TVreuaR4FVpvaL2gfQ0N.jpg'
},
{
    titulo: 'Marcas da Maldição',
    descricao: 'Descrição do filme 3',
    imdb: 'tt18968540',
    imagem: 'https://image.tmdb.org/t/p/w300/a2EBrVUZTPp3Y9YMnCy5JfMaxQu.jpg'
},
{
    titulo: 'Está Tudo Bem',
    descricao: 'Descrição do filme 4',
    imdb: 'tt12847812',
    imagem: 'https://image.tmdb.org/t/p/w300/zHhRx6t96UlClbgygDK5upHr68t.jpg'
},
{
    titulo: 'Seul em Alta Velocidade',
    descricao: 'Descrição do filme 5',
    imdb: 'tt13611770',
    imagem: 'https://image.tmdb.org/t/p/w300/gJlannhekQTz6jzBojWHMNdDbEu.jpg'
},
{
    titulo: 'Cam Girls - Garotas da Web',
    descricao: 'Descrição do filme 6',
    imdb: 'tt12319706',
    imagem: 'https://image.tmdb.org/t/p/w300/e1kBNXNYG1CG2i4oC7ZAJyYxM5u.jpg'
},
{
    titulo: 'A Bailarina',
    descricao: 'Descrição do filme 7',
    imdb: 'tt2261287',
    imagem: 'https://image.tmdb.org/t/p/w300/xKPMlQ3v6KJD3u6ik3urzGesh5g.jpg'
},
{
    titulo: 'A Filha Perdida',
    descricao: 'Descrição do filme 8',
    imdb: 'tt9100054',
    imagem: 'https://image.tmdb.org/t/p/w300/w5ZyodD6md3mmPWO3nSPGXklxLk.jpg'
},
{
    titulo: 'I Am Mother',
    descricao: 'Descrição do filme 9',
    imdb: 'tt6292852',
    imagem: 'https://image.tmdb.org/t/p/w300/b3jWxwWRFqvNDJTvBcmKJVHnzKK.jpg'
},
{
    titulo: 'Um Marido Fiel',
    descricao: 'Descrição do filme 10',
    imdb: 'tt14592948',
    imagem: 'https://image.tmdb.org/t/p/w300/gzU5keUQEyXbQ8XVG1XKZkul4qe.jpg'
},
{
    titulo: 'That s Amor',
    descricao: 'Descrição do filme 11',
    imdb: 'tt21388556',
    imagem: 'https://image.tmdb.org/t/p/w300/iyYibVfi8q0zwsX1evl7mxTZJp1.jpg'
},
{
    titulo: 'Não! Não Olhe',
    descricao: 'Descrição do filme 12',
    imdb: 'tt10954984',
    imagem: 'https://image.tmdb.org/t/p/w300/jDNkXOzqdffE5LIO4Nv4a2VxFCq.jpg'
},
{
    titulo: 'Kaamelott: Parte 1',
    descricao: 'Descrição do filme 13',
    imdb: 'tt9844322',
    imagem: 'https://image.tmdb.org/t/p/w300/4mcovnajaLoy7dbv5arykJjDFFC.jpg'
},
{
    titulo: 'De Férias da Família',
    descricao: 'Descrição do filme 14',
    imdb: 'tt14309446',
    imagem: 'https://image.tmdb.org/t/p/w300/mGPFbEmWdaDVxO5V64xYwv6v8j.jpg'
},
{
    titulo: 'Tron: O Legado',
    descricao: 'Descrição do filme 15',
    imdb: 'tt1104001',
    imagem: 'https://image.tmdb.org/t/p/w300/wlHzvzXE9AvMgrVsKHg2PweC3aC.jpg'
},
{
    titulo: 'O Corcunda de Notre Dame',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0116583',
    imagem: 'https://image.tmdb.org/t/p/w300/n9xNDf12yl3h1KStSiOTMpn0nec.jpg'
},
{
    titulo: 'Mamma Mia! O Filme',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0795421',
    imagem: 'https://image.tmdb.org/t/p/w300/wNPY8LdzRCkD9B86mhp4DFh8uG9.jpg'
},
{
    titulo: 'Os Delírios de Consumo de Becky Bloom',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1093908',
    imagem: 'https://image.tmdb.org/t/p/w300/vAKq7AS4CZVZDlgfLR2fLO38Lng.jpg'
},
{
    titulo: 'Anjos da Noite: Underworld',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0320691',
    imagem: 'https://image.tmdb.org/t/p/w300/rz9oAnjaHV8Mbsneyv13xt72k2F.jpg'
},
{
    titulo: 'Anjos da Noite: A Rebelião',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0834001',
    imagem: 'https://image.tmdb.org/t/p/w300/atPv2WJzlD76ZQP3wjaixZooR1l.jpg'
},
{
    titulo: 'Anjos da Noite: O Despertar',
    descricao: 'Descrição do filme 21',
    imdb: 'tt1496025',
    imagem: 'https://image.tmdb.org/t/p/w300/u6GY91MCrmUdMeUIxbw9JXvblES.jpg'
},
{
    titulo: 'Anjos da Noite: Guerras de Sangue',
    descricao: 'Descrição do filme 22',
    imdb: 'tt3717252',
    imagem: 'https://image.tmdb.org/t/p/w300/mNqzSbagMFI3BbF1SPCRjqHLYlk.jpg'
},
{
    titulo: 'Moana: Um Mar de Aventuras',
    descricao: 'Descrição do filme 23',
    imdb: 'tt3521164',
    imagem: 'https://image.tmdb.org/t/p/w300/4jNbH7A9HGL4OCNQvzj98ksoa2f.jpg'
},
{
    titulo: 'Jackass 3',
    descricao: 'Descrição do filme 24',
    imdb: 'tt1116184',
    imagem: 'https://image.tmdb.org/t/p/w300/j29DmvYVzrC268s6zI0gP8Kz8nB.jpg'
},
{
    titulo: 'Armageddon',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0120591',
    imagem: 'https://image.tmdb.org/t/p/w300/czJoGeLEGF1lLxyAj8u3HMxBy7o.jpg'
},
{
    titulo: 'Sucker Punch: Mundo Surreal',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0978764',
    imagem: 'https://image.tmdb.org/t/p/w300/uUDZWIOUxtVhU1YwlOxvNlnZM5h.jpg'
},
{
    titulo: 'Garota Veneno',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0302640',
    imagem: 'https://image.tmdb.org/t/p/w300/645ztWyBFO7voOuhtkEutTUCIwJ.jpg'
},
{
    titulo: 'Máquina Mortífera',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0093409',
    imagem: 'https://image.tmdb.org/t/p/w300/mE6PI7AR9GYCOu7M0zmTuzJGGCa.jpg'
},
{
    titulo: 'Sobrenatural: A Última Chave',
    descricao: 'Descrição do filme 5',
    imdb: 'tt5726086',
    imagem: 'https://image.tmdb.org/t/p/w300/v3RYZGwImjBUF18RV57J5QuOa31.jpg'
},
{
    titulo: 'Me Chame Pelo Seu Nome',
    descricao: 'Descrição do filme 6',
    imdb: 'tt5726616',
    imagem: 'https://image.tmdb.org/t/p/w300/qnf5Onsk236CdE5Lff93IX69gHf.jpg'
},
{
    titulo: 'Cinquenta Tons Mais Escuros',
    descricao: 'Descrição do filme 7',
    imdb: 'tt4465564',
    imagem: 'https://image.tmdb.org/t/p/w300/nj5KTm3WAQt4rN748djvCkKYq0b.jpg'
},
{
    titulo: 'One Piece Filme 01: O Grande Pirata do Ouro!',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0814243',
    imagem: 'https://image.tmdb.org/t/p/w300/4ed1n7FBP6jUKxSguwQ89euSMGP.jpg'
},
{
    titulo: 'One Piece Filme 02: Aventura na Ilha Nejimaki',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0832449',
    imagem: 'https://image.tmdb.org/t/p/w300/dCQSqo3eZGCvpViSrirfk6EU865.jpg'
},
{
    titulo: 'One Piece: Strong World',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1485763',
    imagem: 'https://image.tmdb.org/t/p/w300/s5UuGv4LxDNkfVm3dG6GEIyGNFE.jpg'
},
{
    titulo: 'One Piece: Z',
    descricao: 'Descrição do filme 11',
    imdb: 'tt2375379',
    imagem: 'https://image.tmdb.org/t/p/w300/yVL6WuhJvY8sZyx2rOYcuFQ0RuX.jpg'
},
{
    titulo: 'One Piece Filme 11: A Perseguição ao Chapéu de Palha',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1865467',
    imagem: 'https://image.tmdb.org/t/p/w300/cxA7j9wGNQCNyJcWjX43k5EC2WC.jpg'
},
{
    titulo: 'One Piece Gold: O Filme',
    descricao: 'Descrição do filme 13',
    imdb: 'tt5251328',
    imagem: 'https://image.tmdb.org/t/p/w300/pHuiZmj4aaThV8akzsA5zMcTtox.jpg'
},
{
    titulo: 'O Lendário Cão Guerreiro',
    descricao: 'Descrição do filme 14',
    imdb: 'tt4428398',
    imagem: 'https://image.tmdb.org/t/p/w300/rpK3dukkvCa3E7iOPphsBGTO2dS.jpg'
},
{
    titulo: 'A Garota da Foto',
    descricao: 'Descrição do filme 15',
    imdb: 'tt21059520',
    imagem: 'https://image.tmdb.org/t/p/w300/gpSCTm48XkH6npoioVqaUjmcJfM.jpg'
},
{
    titulo: 'Código: Imperador',
    descricao: 'Descrição do filme 16',
    imdb: 'tt13660916',
    imagem: 'https://image.tmdb.org/t/p/w300/74HVV4JR2rT01S9NDZie4YWBLUD.jpg'
},
{
    titulo: 'Como Seria se...?',
    descricao: 'Descrição do filme 17',
    imdb: 'tt14298328',
    imagem: 'https://image.tmdb.org/t/p/w300/dtniFUyaodUtiyRExqBUp0Cyai8.jpg'
},
{
    titulo: 'A Balada de Buster Scruggs',
    descricao: 'Descrição do filme 18',
    imdb: 'tt6412452',
    imagem: 'https://image.tmdb.org/t/p/w300/nb4crpD43qLIlNj3k5mqC0izPCk.jpg'
},
{
    titulo: 'Milagre na Cela 7',
    descricao: 'Descrição do filme 19',
    imdb: 'tt10431500',
    imagem: 'https://image.tmdb.org/t/p/w300/q5Sj4pMaKpdMyywQIJhexNvCZYz.jpg'
},
{
    titulo: 'As Crônicas de Spiderwick',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0416236',
    imagem: 'https://image.tmdb.org/t/p/w300/7YABWxerZXH705J34qaUbvJLXVz.jpg'
},
{
    titulo: 'O Homem Que Mudou o Jogo',
    descricao: 'Descrição do filme 21',
    imdb: 'tt1210166',
    imagem: 'https://image.tmdb.org/t/p/w300/kNloN3TqTBDd1Fcl980LzpWDhzY.jpg'
},
{
    titulo: 'Dupla Jornada',
    descricao: 'Descrição do filme 22',
    imdb: 'tt13314558',
    imagem: 'https://image.tmdb.org/t/p/w300/gmY6yEyvLlkqrgqYNXPp1llPZeT.jpg'
},
{
    titulo: 'Samaritano',
    descricao: 'Descrição do filme 23',
    imdb: 'tt5500218',
    imagem: 'https://image.tmdb.org/t/p/w300/z0de9eo5QznG9KEijDvROHrYSfo.jpg'
},
{
    titulo: '365 Dias: Hoje',
    descricao: 'Descrição do filme 24',
    imdb: 'tt12996154',
    imagem: 'https://image.tmdb.org/t/p/w300/67vb4sQxJ06o4LvgoxB8Fj6mGqk.jpg'
},
{
    titulo: '365 Dias Finais',
    descricao: 'Descrição do filme 1',
    imdb: 'tt21106646',
    imagem: 'https://image.tmdb.org/t/p/w300/2pxKwxMbd5l3BxK5fBgVCWYweH2.jpg'
},
{
    titulo: 'Look At Me: XXXTENTACION',
    descricao: 'Descrição do filme 2',
    imdb: 'tt10723416',
    imagem: 'https://image.tmdb.org/t/p/w300/3BUCbEMFdizaBrNbH6lEfDdNtku.jpg'
},
{
    titulo: 'Birdman ou (A Inesperada Virtude da Ignorância)',
    descricao: 'Descrição do filme 3',
    imdb: 'tt2562232',
    imagem: 'https://image.tmdb.org/t/p/w300/7gwtDnEJ39QarOyzt9bSxEj3SkD.jpg'
},
{
    titulo: 'Água para Elefantes',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1067583',
    imagem: 'https://image.tmdb.org/t/p/w300/mzt9jRgMs5WLkKTwHTvUJuPApbx.jpg'
},
{
    titulo: 'O Despertar das Tartarugas Ninja: O Filme',
    descricao: 'Descrição do filme 5',
    imdb: 'tt9784708',
    imagem: 'https://image.tmdb.org/t/p/w300/1lJgQ0cTKsU4gVEVkNOc6jEJU0o.jpg'
},
{
    titulo: 'O Fantasma Vermelho',
    descricao: 'Descrição do filme 6',
    imdb: 'tt10508258',
    imagem: 'https://image.tmdb.org/t/p/w300/7OpcrpuTSYOXd5IGfcPPPjbzNhm.jpg'
},
{
    titulo: 'Pequenos Espiões 3: Game Over',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0338459',
    imagem: 'https://image.tmdb.org/t/p/w300/1LlK2KfVSkz1ALDtV0jwfYbSVX4.jpg'
},
{
    titulo: 'Pequenos Espiões 2: A Ilha dos Sonhos Perdidos',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0287717',
    imagem: 'https://image.tmdb.org/t/p/w300/okbpLqjaUmtYfLlpnNq1vMuLz1w.jpg'
},
{
    titulo: 'Pequenos Espiões',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0227538',
    imagem: 'https://image.tmdb.org/t/p/w300/h7GC3f0YBKw6DrLXxdFNMZ1BhwR.jpg'
},
{
    titulo: 'Lendas da Vida',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0146984',
    imagem: 'https://image.tmdb.org/t/p/w300/nTVLPngFKrGwugB2S4ShzerxzLR.jpg'
},
{
    titulo: 'Tinker Bell e o Monstro da Terra do Nunca',
    descricao: 'Descrição do filme 11',
    imdb: 'tt3120408',
    imagem: 'https://image.tmdb.org/t/p/w300/vwv9AdjVlr0LBsNAPpk2LllJqAd.jpg'
},
{
    titulo: 'Tinker Bell: Fadas e Piratas',
    descricao: 'Descrição do filme 12',
    imdb: 'tt2483260',
    imagem: 'https://image.tmdb.org/t/p/w300/2wnJj5SPmR70o6YK3m31SnOT33.jpg'
},
{
    titulo: 'Tinker Bell: O Segredo das Fadas',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1217213',
    imagem: 'https://image.tmdb.org/t/p/w300/a4XtmRHjpcN8r4ZUn7g3kGEE3F4.jpg'
},
{
    titulo: 'Os Jogos no Refúgio das Fadas',
    descricao: 'Descrição do filme 14',
    imdb: 'tt1450334',
    imagem: 'https://image.tmdb.org/t/p/w300/uAC5CuzOjfKbSmBoEmzYYWZjtnl.jpg'
},
{
    titulo: 'Tinker Bell e o Resgate da Fada',
    descricao: 'Descrição do filme 15',
    imdb: 'tt1216515',
    imagem: 'https://image.tmdb.org/t/p/w300/yY69Kxm9QP9mHL9Awswxgqr3q1C.jpg'
},
{
    titulo: 'Tinker Bell e O Tesouro Perdido',
    descricao: 'Descrição do filme 16',
    imdb: 'tt1216516',
    imagem: 'https://image.tmdb.org/t/p/w300/bKTfGR1ksZGusE1fsqr7WqzUGuw.jpg'
},
{
    titulo: 'Tinker Bell: Uma Aventura no Mundo das Fadas',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0823671',
    imagem: 'https://image.tmdb.org/t/p/w300/azgjMUMoUJB2yheVcN1Ae8lFNeD.jpg'
},
{
    titulo: 'Juntos para Sempre',
    descricao: 'Descrição do filme 18',
    imdb: 'tt8385474',
    imagem: 'https://image.tmdb.org/t/p/w300/xG5JqCNR90WIjbGUfQNMDNMuRQl.jpg'
},
{
    titulo: 'Queen e Slim',
    descricao: 'Descrição do filme 19',
    imdb: 'tt8722346',
    imagem: 'https://image.tmdb.org/t/p/w300/qfIJOmsiBcum6EGosiy5gTF6ihk.jpg'
},
{
    titulo: 'O Cliente',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0109446',
    imagem: 'https://image.tmdb.org/t/p/w300/qs2Bacljc1ihbB2gpjsWK3EKshd.jpg'
},
{
    titulo: 'Fuga de Los Angeles',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0116225',
    imagem: 'https://image.tmdb.org/t/p/w300/5P6dMv6FrQGCqy8707Pg1mliiAk.jpg'
},
{
    titulo: 'Central do Brasil',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0140888',
    imagem: 'https://image.tmdb.org/t/p/w300/20gvOww3EDFaDZyNowVGAHtXo0H.jpg'
},
{
    titulo: 'Ó Paí, Ó',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0895777',
    imagem: 'https://image.tmdb.org/t/p/w300/5xmBBt6NvPs4sbQWxqd0UrGVcn8.jpg'
},
{
    titulo: 'Nascido em 4 de Julho',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0096969',
    imagem: 'https://image.tmdb.org/t/p/w300/maOzwkSpP27p6xmGBXLjSbRKHQj.jpg'
},
{
    titulo: 'A Proposta',
    descricao: 'Descrição do filme 1',
    imdb: 'tt1041829',
    imagem: 'https://image.tmdb.org/t/p/w300/uIhags0jXoe78JJjCDZbByciesQ.jpg'
},
{
    titulo: 'Os Últimos Cavaleiros',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2493486',
    imagem: 'https://image.tmdb.org/t/p/w300/znKE6rRND5dkrR8MO8yQsWKCJj2.jpg'
},
{
    titulo: 'Jesus - A História do Nascimento',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0762121',
    imagem: 'https://image.tmdb.org/t/p/w300/sqi3r1zvzhvDdxwwh4XnPEzos0m.jpg'
},
{
    titulo: 'Triângulo do Medo',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1187064',
    imagem: 'https://image.tmdb.org/t/p/w300/rH2VuwTwhISorOVllsDaMCGR7N0.jpg'
},
{
    titulo: 'A Bruxa de Blair 2: O Livro das Sombras',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0229260',
    imagem: 'https://image.tmdb.org/t/p/w300/k8UT6J9GedRoYhKLcbQVuXCZ9SS.jpg'
},
{
    titulo: 'A Bruxa de Blair',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0185937',
    imagem: 'https://image.tmdb.org/t/p/w300/jAKX4midH0vSm2XT54g5TWluQqw.jpg'
},
{
    titulo: 'A Vida em um Ano',
    descricao: 'Descrição do filme 7',
    imdb: 'tt6598238',
    imagem: 'https://image.tmdb.org/t/p/w300/dfmbwqkalJRfYqFSwNhRn4QYK30.jpg'
},
{
    titulo: 'V de Vingança',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0434409',
    imagem: 'https://image.tmdb.org/t/p/w300/rvrFkBKTrVCT1nVRuCaemQFRn0.jpg'
},
{
    titulo: 'O Grande Ivan',
    descricao: 'Descrição do filme 9',
    imdb: 'tt3661394',
    imagem: 'https://image.tmdb.org/t/p/w300/iLqOH0SSJ1hy3Y1POl5cr6H1RtL.jpg'
},
{
    titulo: 'O Homem Sem Sombra',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0164052',
    imagem: 'https://image.tmdb.org/t/p/w300/wmQHFXEQztzcEbR1ap2vmeJuc4R.jpg'
},
{
    titulo: 'Desafiando Gigantes',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0805526',
    imagem: 'https://image.tmdb.org/t/p/w300/sb59Xr3ckkUH7r6EtCZC9EBV5JB.jpg'
},
{
    titulo: 'Soldado Anônimo 3: O Cerco',
    descricao: 'Descrição do filme 12',
    imdb: 'tt4616014',
    imagem: 'https://image.tmdb.org/t/p/w300/bc9BHYmTjkiPpr3xISgIz0ssgPv.jpg'
},
{
    titulo: 'Soldado Anônimo 2: Campo Em Chamas',
    descricao: 'Descrição do filme 13',
    imdb: 'tt3699508',
    imagem: 'https://image.tmdb.org/t/p/w300/nqPumNNafnqUyk9DNuxTSrisq6X.jpg'
},
{
    titulo: 'Soldado Anônimo',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0418763',
    imagem: 'https://image.tmdb.org/t/p/w300/dvTRt108bXFypyDQ12pG9K5jwGd.jpg'
},
{
    titulo: 'Sou Louco Por Você',
    descricao: 'Descrição do filme 15',
    imdb: 'tt1797504',
    imagem: 'https://image.tmdb.org/t/p/w300/l9rWQkr58PNOjYjhgZ6VoXT9tQt.jpg'
},
{
    titulo: 'Nanny McPhee 2: E as Lições Mágicas',
    descricao: 'Descrição do filme 16',
    imdb: 'tt1415283',
    imagem: 'https://image.tmdb.org/t/p/w300/cS5VhYcpa74KcResDTrCsI5C4Ro.jpg'
},
{
    titulo: 'Nanny McPhee: A Babá Encantada',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0396752',
    imagem: 'https://image.tmdb.org/t/p/w300/eUMsZbnhquxIpr7lV5w78P2P7CH.jpg'
},
{
    titulo: 'Uma Comédia Nada Romântica',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0466342',
    imagem: 'https://image.tmdb.org/t/p/w300/jrvJo2OquBYOguftz3ZFmhaA9jG.jpg'
},
{
    titulo: 'Caramuru: A Invenção do Brasil',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0298786',
    imagem: 'https://image.tmdb.org/t/p/w300/5xgs9skiYyB8QdT7aWRJBQaqvnJ.jpg'
},
{
    titulo: 'Viva! A Babá Morreu',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0101757',
    imagem: 'https://image.tmdb.org/t/p/w300/m7ZvOPLY0S641JaBuVuwdIaWyJB.jpg'
},
{
    titulo: 'Horror Sangrento',
    descricao: 'Descrição do filme 21',
    imdb: 'tt7394674',
    imagem: 'https://image.tmdb.org/t/p/w300/oijfCGUjtLogKpcOyK7KZnxaKXi.jpg'
},
{
    titulo: 'A Pior Pessoa do Mundo',
    descricao: 'Descrição do filme 22',
    imdb: 'tt10370710',
    imagem: 'https://image.tmdb.org/t/p/w300/k2Uvqj0oiwjEprdIL6YDt06v7UQ.jpg'
},
{
    titulo: 'Sertânia',
    descricao: 'Descrição do filme 23',
    imdb: 'tt11275354',
    imagem: 'https://image.tmdb.org/t/p/w300/kjyM34ftabA9wXZxnVezxLqjcA.jpg'
},
{
    titulo: 'Hora de Brilhar',
    descricao: 'Descrição do filme 24',
    imdb: 'tt18397208',
    imagem: 'https://image.tmdb.org/t/p/w300/r2pBQidMHRu4xP6Jafd8PBDqy05.jpg'
},
{
    titulo: 'Marco e Nonno',
    descricao: 'Descrição do filme 1',
    imdb: 'tt8589210',
    imagem: 'https://image.tmdb.org/t/p/w300/lgEnZXUE2U6dqXZPU8fZbuBkViB.jpg'
},
{
    titulo: 'Os 23: Prisioneiros no Iraque',
    descricao: 'Descrição do filme 2',
    imdb: 'tt9755608',
    imagem: 'https://image.tmdb.org/t/p/w300/xe9nBRtAuJdcIQpGJcxNrF8T6KO.jpg'
},
{
    titulo: 'Até os Ratos Merecem o Céu',
    descricao: 'Descrição do filme 3',
    imdb: 'tt3804810',
    imagem: 'https://image.tmdb.org/t/p/w300/mHGQgwbunagp0GwvyMJ2QDmkV6d.jpg'
},
{
    titulo: 'O Bom Vizinho',
    descricao: 'Descrição do filme 4',
    imdb: 'tt14349032',
    imagem: 'https://image.tmdb.org/t/p/w300/omFn8Qkl5EPhT9h96Yp6EYNVBeK.jpg'
},
{
    titulo: 'O Justiceiro: Estrada do Caos',
    descricao: 'Descrição do filme 5',
    imdb: 'tt3505812',
    imagem: 'https://image.tmdb.org/t/p/w300/2YYxSzOq66PEOppuQ2XxWm0QRDf.jpg'
},
{
    titulo: 'Prometheus',
    descricao: 'Descrição do filme 6',
    imdb: 'tt1446714',
    imagem: 'https://image.tmdb.org/t/p/w300/k1GZVllOORTiN0XTPdumt9CSAcc.jpg'
},
{
    titulo: '2012',
    descricao: 'Descrição do filme 7',
    imdb: 'tt1190080',
    imagem: 'https://image.tmdb.org/t/p/w300/6ZwQWTKeLfmGyaCxKWEqEM7Ewtq.jpg'
},
{
    titulo: 'Music',
    descricao: 'Descrição do filme 8',
    imdb: 'tt7541720',
    imagem: 'https://image.tmdb.org/t/p/w300/xzDXq7ofNkvIovB6Vb8KZpjqkK0.jpg'
},
{
    titulo: 'Castle Falls',
    descricao: 'Descrição do filme 9',
    imdb: 'tt11377298',
    imagem: 'https://image.tmdb.org/t/p/w300/hcmtEns8LZdkztVz5kX3cirugaa.jpg'
},
{
    titulo: 'O Paizão',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0142342',
    imagem: 'https://image.tmdb.org/t/p/w300/qsz4Z7Cy4gUTOmpPRc9Go788gYS.jpg'
},
{
    titulo: 'Prenda-me Se for Capaz',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0264464',
    imagem: 'https://image.tmdb.org/t/p/w300/pSaqcj3pwTKt34cyn6NrBE7V4eH.jpg'
},
{
    titulo: 'Uma Noite Alucinante 3',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0106308',
    imagem: 'https://image.tmdb.org/t/p/w300/45ZqwOsINwknEc3HKtnGErvZhjR.jpg'
},
{
    titulo: 'Uma Noite Alucinante 2',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0092991',
    imagem: 'https://image.tmdb.org/t/p/w300/8ffKuUsqjgW5DQMLGzDFmQgZexf.jpg'
},
{
    titulo: 'No Cair da Noite',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0282209',
    imagem: 'https://image.tmdb.org/t/p/w300/xtqAhW5KGnzorBWEF4RCUmFg6Mp.jpg'
},
{
    titulo: 'O Resgate do Soldado Ryan',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0120815',
    imagem: 'https://image.tmdb.org/t/p/w300/iZ3jDTycla1JasNg6h7Gg1sEIys.jpg'
},
{
    titulo: 'Selvagem',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0405469',
    imagem: 'https://image.tmdb.org/t/p/w300/tDnDREbW2eNjd9KvjVKtnNf5A5Y.jpg'
},
{
    titulo: 'Buba',
    descricao: 'Descrição do filme 17',
    imdb: 'tt21195548',
    imagem: 'https://image.tmdb.org/t/p/w300/7iRMwdNzXFnOKMhVoodj0zhvFYY.jpg'
},
{
    titulo: 'Dual',
    descricao: 'Descrição do filme 18',
    imdb: 'tt9005184',
    imagem: 'https://image.tmdb.org/t/p/w300/wDEse2TQRiyfhdlusSXBdkDOQRj.jpg'
},
{
    titulo: 'Temporada de Casamentos',
    descricao: 'Descrição do filme 19',
    imdb: 'tt11426572',
    imagem: 'https://image.tmdb.org/t/p/w300/wW2hCkNTRbZ8GrP4P7CMStmhOdd.jpg'
},
{
    titulo: 'People Just Do Nothing: Big in Japan',
    descricao: 'Descrição do filme 20',
    imdb: 'tt11376010',
    imagem: 'https://image.tmdb.org/t/p/w300/d2wft3qQX1fCqPTUdujwxhj9S23.jpg'
},
{
    titulo: 'Carro Rei',
    descricao: 'Descrição do filme 21',
    imdb: 'tt13886712',
    imagem: 'https://image.tmdb.org/t/p/w300/51f9b3Om3vlKYEChC8XwI4lDfqB.jpg'
},
{
    titulo: 'A Última Vítima',
    descricao: 'Descrição do filme 22',
    imdb: 'tt12773826',
    imagem: 'https://image.tmdb.org/t/p/w300/hoJ4G6JVJL8OEB37mRr4t1jn8l0.jpg'
},
{
    titulo: 'Garota Exemplar',
    descricao: 'Descrição do filme 23',
    imdb: 'tt2267998',
    imagem: 'https://image.tmdb.org/t/p/w300/aw6gmQecY6rR0UvtoqLUy7WsXTW.jpg'
},
{
    titulo: 'ONE PIECE FILM RED',
    descricao: 'Descrição do filme 24',
    imdb: 'tt16183464',
    imagem: 'https://image.tmdb.org/t/p/w300/cGsmel2XgRONJkpTaRmxqvpdUxw.jpg'
},
{
    titulo: 'O Fantasma da Ópera',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0016220',
    imagem: 'https://image.tmdb.org/t/p/w300/itfhSxbIgsan85iY1NrquIx7qxo.jpg'
},
{
    titulo: 'Pânico na Cabana',
    descricao: 'Descrição do filme 2',
    imdb: 'tt3923004',
    imagem: 'https://image.tmdb.org/t/p/w300/8WnaqDNwFsC0SxeqlN7q3Y36AvO.jpg'
},
{
    titulo: 'Além da Vida',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0838247',
    imagem: 'https://image.tmdb.org/t/p/w300/miEZN9iocT8K7baPg8DR2492rm3.jpg'
},
{
    titulo: 'Ben 10: Corrida Contra o Tempo',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1037011',
    imagem: 'https://image.tmdb.org/t/p/w300/zTdYoROAO5T8IsUodUgrnceT3Y1.jpg'
},
{
    titulo: 'Lacuna',
    descricao: 'Descrição do filme 5',
    imdb: 'tt7165300',
    imagem: 'https://image.tmdb.org/t/p/w300/qe1sB6fYCieSbWaSEa7ijf4oAp1.jpg'
},
{
    titulo: 'Carnivore: O Lobisomem de Londres',
    descricao: 'Descrição do filme 6',
    imdb: 'tt5715234',
    imagem: 'https://image.tmdb.org/t/p/w300/8NMUF8ofBGCiH5Udpjn1GbtsXoP.jpg'
},
{
    titulo: 'Mestre dos Mares: O Lado Mais Distante do Mundo',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0311113',
    imagem: 'https://image.tmdb.org/t/p/w300/3v61179ciXMpmyiJZmpqyCoV5us.jpg'
},
{
    titulo: 'O Expresso Polar',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0338348',
    imagem: 'https://image.tmdb.org/t/p/w300/5JfuyhzCDxlBwmJnqLAoswshdLk.jpg'
},
{
    titulo: 'O Albergue',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0450278',
    imagem: 'https://image.tmdb.org/t/p/w300/dOpGaWfM9k46fzG3B5PfgSun5Om.jpg'
},
{
    titulo: 'O Albergue 2',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0498353',
    imagem: 'https://image.tmdb.org/t/p/w300/29gW9tzIcKrJ0hpfJRHzpp48VCS.jpg'
},
{
    titulo: 'O Albergue 3',
    descricao: 'Descrição do filme 11',
    imdb: 'tt1255916',
    imagem: 'https://image.tmdb.org/t/p/w300/1U5Eu5hZ9ztDXdXCKnuAMqVmajE.jpg'
},
{
    titulo: 'Os Oito Odiados',
    descricao: 'Descrição do filme 12',
    imdb: 'tt3460252',
    imagem: 'https://image.tmdb.org/t/p/w300/jfTo9U9OgOXODEEspNnYFuZdR1q.jpg'
},
{
    titulo: 'Bacurau',
    descricao: 'Descrição do filme 13',
    imdb: 'tt2762506',
    imagem: 'https://image.tmdb.org/t/p/w300/hu5RpvEdLjJ2sLGkAMzRjoNWbMj.jpg'
},
{
    titulo: 'O Aviador',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0338751',
    imagem: 'https://image.tmdb.org/t/p/w300/h5nnmaOarWIC4RRqf77VkiOdYt9.jpg'
},
{
    titulo: 'O Dia em Que a Terra Parou',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0970416',
    imagem: 'https://image.tmdb.org/t/p/w300/mFT6PNXqDpYwE0Zgsqard9nvrke.jpg'
},
{
    titulo: 'O Mercador de Veneza',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0379889',
    imagem: 'https://image.tmdb.org/t/p/w300/cTmC6hArXY2jKYaTLt0PCkZhJ1d.jpg'
},
{
    titulo: 'A Sentinela',
    descricao: 'Descrição do filme 17',
    imdb: 'tt11734264',
    imagem: 'https://image.tmdb.org/t/p/w300/56Z9eh4k9pzR6Yhy201nq2Qoa0n.jpg'
},
{
    titulo: 'Liga da Justiça: Crise em Duas Terras',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1494772',
    imagem: 'https://image.tmdb.org/t/p/w300/bdlmUeBn2k2LGADnJKsyzuegaXC.jpg'
},
{
    titulo: 'Escola da Morte',
    descricao: 'Descrição do filme 19',
    imdb: 'tt6905696',
    imagem: 'https://image.tmdb.org/t/p/w300/dInT3pJxb4fViZgTIpVSjTCf5eL.jpg'
},
{
    titulo: 'Os Primeiros Passos de Groot',
    descricao: 'Descrição do filme 20',
    imdb: 'tt13820496',
    imagem: 'https://image.tmdb.org/t/p/w300/f3VaKVXJJIPgRDDvXKNSNIQkmec.jpg'
},
{
    titulo: 'Groot Toma Banho',
    descricao: 'Descrição do filme 21',
    imdb: 'tt21316848',
    imagem: 'https://image.tmdb.org/t/p/w300/yUwcFbbeBPmzhWSA2uLNK9afNUZ.jpg'
},
{
    titulo: 'O Carinha',
    descricao: 'Descrição do filme 22',
    imdb: 'tt14513152',
    imagem: 'https://image.tmdb.org/t/p/w300/nfixtLlkKg6D8aNTldBUWmvw20N.jpg'
},
{
    titulo: 'Obra Prima',
    descricao: 'Descrição do filme 23',
    imdb: 'tt21316870',
    imagem: 'https://image.tmdb.org/t/p/w300/lOKTj65dQN92ghWho4Rn75dq6z6.jpg'
},
{
    titulo: 'A Busca de Groot',
    descricao: 'Descrição do filme 24',
    imdb: 'tt21316834',
    imagem: 'https://image.tmdb.org/t/p/w300/oV3mUWylNaRsBkbul7BGilaxE9k.jpg'
},
{
    titulo: 'Lagoa Azul: O Despertar',
    descricao: 'Descrição do filme 1',
    imdb: 'tt2287663',
    imagem: 'https://image.tmdb.org/t/p/w300/3lEWhh95w3x1J2XYn869sine6kc.jpg'
},
{
    titulo: 'Amor, Felicidade ou Casamento',
    descricao: 'Descrição do filme 2',
    imdb: 'tt1436559',
    imagem: 'https://image.tmdb.org/t/p/w300/1NrzuMavrCTh0j2CNs44BEWGg4C.jpg'
},
{
    titulo: 'O Menino e o Mundo',
    descricao: 'Descrição do filme 3',
    imdb: 'tt3183630',
    imagem: 'https://image.tmdb.org/t/p/w300/pNdqVuROes4tdWSbHPu4sKnmlaJ.jpg'
},
{
    titulo: 'A Chave Mestra',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0397101',
    imagem: 'https://image.tmdb.org/t/p/w300/yTJVjJX5KyBccMSx6lUjPahr26r.jpg'
},
{
    titulo: 'O Som ao Redor',
    descricao: 'Descrição do filme 5',
    imdb: 'tt2190367',
    imagem: 'https://image.tmdb.org/t/p/w300/qVSxFFAv7IoTccP7MTk5L92Gfon.jpg'
},
{
    titulo: 'Praia do Futuro',
    descricao: 'Descrição do filme 6',
    imdb: 'tt2199543',
    imagem: 'https://image.tmdb.org/t/p/w300/uDyrxgzaCCv0LWNEzsrQ3MT3vnt.jpg'
},
{
    titulo: 'Paraísos Artificiais',
    descricao: 'Descrição do filme 7',
    imdb: 'tt2102396',
    imagem: 'https://image.tmdb.org/t/p/w300/v4jVEhbQ0dbBFFWOlaPUhOYhDOf.jpg'
},
{
    titulo: 'Redemoinho',
    descricao: 'Descrição do filme 8',
    imdb: 'tt3108658',
    imagem: 'https://image.tmdb.org/t/p/w300/2CKKVhJq1Qu83HWeG4s3B8cRIIm.jpg'
},
{
    titulo: 'Speed Racer',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0811080',
    imagem: 'https://image.tmdb.org/t/p/w300/arJV6ypZidAn4qiJXrvow3KbBqZ.jpg'
},
{
    titulo: 'Meu Malvado Favorito',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1323594',
    imagem: 'https://image.tmdb.org/t/p/w300/rYZzutMXxvirK9gK01iLo3Blaj3.jpg'
},
{
    titulo: 'Meu Malvado Favorito 2',
    descricao: 'Descrição do filme 11',
    imdb: 'tt1690953',
    imagem: 'https://image.tmdb.org/t/p/w300/7mYMq6OQyum1wAiUI7i6w78YKEO.jpg'
},
{
    titulo: 'Carter',
    descricao: 'Descrição do filme 12',
    imdb: 'tt21237030',
    imagem: 'https://image.tmdb.org/t/p/w300/cPKmoSTrPjvSjvKHvnMm1qs0Upa.jpg'
},
{
    titulo: 'Campo do Medo',
    descricao: 'Descrição do filme 13',
    imdb: 'tt4687108',
    imagem: 'https://image.tmdb.org/t/p/w300/wG0tORn6XqSwjN2tBAZJrFTh7n0.jpg'
},
{
    titulo: 'A Família do Futuro',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0396555',
    imagem: 'https://image.tmdb.org/t/p/w300/uR9rV69x4saB2vh9yfgQ5PA5E0r.jpg'
},
{
    titulo: 'Detona Ralph',
    descricao: 'Descrição do filme 15',
    imdb: 'tt1772341',
    imagem: 'https://image.tmdb.org/t/p/w300/9OGpoSaGGwbWSFQVFaVGakLyaoK.jpg'
},
{
    titulo: 'O Galinho Chicken Little',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0371606',
    imagem: 'https://image.tmdb.org/t/p/w300/fUCBkuNWpAIfH6yhuRzujy5Zjv0.jpg'
},
{
    titulo: 'Os Incríveis',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0317705',
    imagem: 'https://image.tmdb.org/t/p/w300/z8k5EhZZTLsCRF8NWjSe6snWNZg.jpg'
},
{
    titulo: 'Ratatouille',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0382932',
    imagem: 'https://image.tmdb.org/t/p/w300/lpyqGZXjaPpr2dzkD9XD5DUGMkN.jpg'
},
{
    titulo: 'Círculo de Fogo',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1663662',
    imagem: 'https://image.tmdb.org/t/p/w300/uFaWzdxzITZxHKaKwyG26QfzHiG.jpg'
},
{
    titulo: 'Instinto Secreto',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0780571',
    imagem: 'https://image.tmdb.org/t/p/w300/uwgrln1BB1KZqvktSO6HtpW62Qk.jpg'
},
{
    titulo: 'O Assassinato de Nicole Brown Simpson',
    descricao: 'Descrição do filme 21',
    imdb: 'tt8415352',
    imagem: 'https://image.tmdb.org/t/p/w300/sUOvmVshnmz13Qa0uWvkAeYnejp.jpg'
},
{
    titulo: 'O Que Ficou Perdido',
    descricao: 'Descrição do filme 22',
    imdb: 'tt8226892',
    imagem: 'https://image.tmdb.org/t/p/w300/3rj5Oky3akGa6f0IGTk4o9ATrrL.jpg'
},
{
    titulo: 'Nível Hard',
    descricao: 'Descrição do filme 23',
    imdb: 'tt8675288',
    imagem: 'https://image.tmdb.org/t/p/w300/lwDNwvzXkPslQTRRCEoPNnNo76T.jpg'
},
{
    titulo: 'Os Mercenários 3',
    descricao: 'Descrição do filme 24',
    imdb: 'tt2333784',
    imagem: 'https://image.tmdb.org/t/p/w300/vd22faXhHRCr8d1FSiXuFfnpSKv.jpg'
},
{
    titulo: 'Os Mercenários 2',
    descricao: 'Descrição do filme 1',
    imdb: 'tt1764651',
    imagem: 'https://image.tmdb.org/t/p/w300/gEDpD6l2CJ8aLbtYLL2ecQ3yk09.jpg'
},
{
    titulo: 'Os Mercenários',
    descricao: 'Descrição do filme 2',
    imdb: 'tt1320253',
    imagem: 'https://image.tmdb.org/t/p/w300/tTfRV9lOBi3YDJpYXqbj4Ai04g2.jpg'
},
{
    titulo: 'Sol da Meia-noite',
    descricao: 'Descrição do filme 3',
    imdb: 'tt4799066',
    imagem: 'https://image.tmdb.org/t/p/w300/1x8tN7XMxWgnJQnjZRxwMeiEWtF.jpg'
},
{
    titulo: 'Kubo e as Cordas Mágicas',
    descricao: 'Descrição do filme 4',
    imdb: 'tt4302938',
    imagem: 'https://image.tmdb.org/t/p/w300/g7QMdkgrqVJYyUoiTcAz27vzpVd.jpg'
},
{
    titulo: 'Por Trás dos Seus Olhos',
    descricao: 'Descrição do filme 5',
    imdb: 'tt4486986',
    imagem: 'https://image.tmdb.org/t/p/w300/gtgO45WXipjmh7YeiCibmofz8hd.jpg'
},
{
    titulo: 'Quase Amigos',
    descricao: 'Descrição do filme 6',
    imdb: 'tt4955566',
    imagem: 'https://image.tmdb.org/t/p/w300/ffkK1QnQ95JiYomBJms1NIWep8N.jpg'
},
{
    titulo: 'Oportunistas',
    descricao: 'Descrição do filme 7',
    imdb: 'tt7063210',
    imagem: 'https://image.tmdb.org/t/p/w300/tZwo3I5QyrPxbnSF4foW6rwkgvw.jpg'
},
{
    titulo: 'Caos',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0402910',
    imagem: 'https://image.tmdb.org/t/p/w300/wSZYVssIv4kjRJuyimzc1gBJC2e.jpg'
},
{
    titulo: 'Aprisionados',
    descricao: 'Descrição do filme 9',
    imdb: 'tt3148348',
    imagem: 'https://image.tmdb.org/t/p/w300/lVVv2ULxGrzxtXHVIkFIXoMWgCb.jpg'
},
{
    titulo: 'Melanie: A Última Esperança',
    descricao: 'Descrição do filme 10',
    imdb: 'tt4547056',
    imagem: 'https://image.tmdb.org/t/p/w300/poEJtp7riNN7skIMY9e2DBiaYnN.jpg'
},
{
    titulo: 'Até o Final',
    descricao: 'Descrição do filme 11',
    imdb: 'tt7411112',
    imagem: 'https://image.tmdb.org/t/p/w300/e0wgAHmcB2BlNU2lShLdej01EEh.jpg'
},
{
    titulo: 'Exterminador: Cavaleiros e Dragões',
    descricao: 'Descrição do filme 12',
    imdb: 'tt12876132',
    imagem: 'https://image.tmdb.org/t/p/w300/ykhI6BEEUG39Mrg47V1YpIrk5vy.jpg'
},
{
    titulo: 'Just Henry A Verdade de Uma Vida',
    descricao: 'Descrição do filme 13',
    imdb: 'tt2144753',
    imagem: 'https://image.tmdb.org/t/p/w300/ZAWeb34TF9W3Mm9Ha9QvE5GdsN.jpg'
},
{
    titulo: 'Spirit: O Corcel Indomável',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0166813',
    imagem: 'https://image.tmdb.org/t/p/w300/jycgp5AdZFKj2Qh2VACG9ilK93l.jpg'
},
{
    titulo: 'Limbo: Entre o Céu e o Inferno',
    descricao: 'Descrição do filme 15',
    imdb: 'tt7935392',
    imagem: 'https://image.tmdb.org/t/p/w300/lj14p4nQZy4oU45nG4jPtGlPnxs.jpg'
},
{
    titulo: 'As Crônicas de Nárnia: A Viagem do Peregrino da Alvorada',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0980970',
    imagem: 'https://image.tmdb.org/t/p/w300/vcAYeNXMJoywxccPQLrESaBJane.jpg'
},
{
    titulo: 'As Crônicas de Nárnia: Príncipe Caspian',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0499448',
    imagem: 'https://image.tmdb.org/t/p/w300/wg0k1v6BwgqYzKhLmT3JMMPNaQo.jpg'
},
{
    titulo: 'DC Liga dos Superpets',
    descricao: 'Descrição do filme 18',
    imdb: 'tt8912936',
    imagem: 'https://image.tmdb.org/t/p/w300/sexnQm1YEJMYo7hZgVP1Y6rEyWz.jpg'
},
{
    titulo: 'O Regresso',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1663202',
    imagem: 'https://image.tmdb.org/t/p/w300/x1jViuXsm5ZmrR6uFmxU6AVdXzs.jpg'
},
{
    titulo: 'Tudo em Todo o Lugar ao Mesmo Tempo',
    descricao: 'Descrição do filme 20',
    imdb: 'tt6710474',
    imagem: 'https://image.tmdb.org/t/p/w300/bW21kbvqAt2kMGlaU8qY86C8kQE.jpg'
},
{
    titulo: 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0363771',
    imagem: 'https://image.tmdb.org/t/p/w300/2rElTfcZ09mfiDtD1wdE9EyXcUs.jpg'
},
{
    titulo: 'Procurando Nemo',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0266543',
    imagem: 'https://image.tmdb.org/t/p/w300/qx0EDGXslJvH4qU3DCTseNUL2wo.jpg'
},
{
    titulo: 'O Homem Duplicado',
    descricao: 'Descrição do filme 23',
    imdb: 'tt2316411',
    imagem: 'https://image.tmdb.org/t/p/w300/32tEUb7nDETYKmYUoXLNzG8LpFJ.jpg'
},
{
    titulo: 'A Rainha dos Condenados',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0238546',
    imagem: 'https://image.tmdb.org/t/p/w300/jGkYV6Fk9GBWuccCitRatlXL3FC.jpg'
},
{
    titulo: 'Colinas de Sangue',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0907676',
    imagem: 'https://image.tmdb.org/t/p/w300/23KP5NlINlYTL2hISrZ6C7gYvxV.jpg'
},
{
    titulo: 'Os Bad Boys',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0112442',
    imagem: 'https://image.tmdb.org/t/p/w300/tMhMdsz9KFSh4ZrJQ8KWPksd305.jpg'
},
{
    titulo: 'Barbie: Escola de Princesas',
    descricao: 'Descrição do filme 3',
    imdb: 'tt2066832',
    imagem: 'https://image.tmdb.org/t/p/w300/3jNK0WP5qDewsdJQl88qFy3Xu8v.jpg'
},
{
    titulo: 'Socorro, Virei uma Garota!',
    descricao: 'Descrição do filme 4',
    imdb: 'tt10839434',
    imagem: 'https://image.tmdb.org/t/p/w300/jYnLQknm25NbKjfnzIc00BQIV8Z.jpg'
},
{
    titulo: 'Universidade Monstros',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1453405',
    imagem: 'https://image.tmdb.org/t/p/w300/uHiklaxCoZcQqzsj5l1IgyieWgp.jpg'
},
{
    titulo: 'O Substituto 2',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0120847',
    imagem: 'https://image.tmdb.org/t/p/w300/3aycfYtvd4RmTNG8lqkD4PhSUB3.jpg'
},
{
    titulo: 'O Tigre e o Dragão',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0190332',
    imagem: 'https://image.tmdb.org/t/p/w300/6ZPfaWGAir5qgGK0VfBOzOqB3yF.jpg'
},
{
    titulo: 'O Assassino: O Primeiro Alvo',
    descricao: 'Descrição do filme 8',
    imdb: 'tt1961175',
    imagem: 'https://image.tmdb.org/t/p/w300/juJrnDHS8kIDzdjtLkP9329bmah.jpg'
},
{
    titulo: 'Em Defesa de Cristo',
    descricao: 'Descrição do filme 9',
    imdb: 'tt6113488',
    imagem: 'https://image.tmdb.org/t/p/w300/pyxN3LztDtPus5JSOv1HiRHkSco.jpg'
},
{
    titulo: 'Encontro Explosivo',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1013743',
    imagem: 'https://image.tmdb.org/t/p/w300/6qKLKSfvYYGFLP9qubm2eXoaV9X.jpg'
},
{
    titulo: 'Por Lugares Incríveis',
    descricao: 'Descrição do filme 11',
    imdb: 'tt3907584',
    imagem: 'https://image.tmdb.org/t/p/w300/xhQ3s1kdq1rVzq3xQNcOzvhwzTG.jpg'
},
{
    titulo: 'Fora de Série',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1489887',
    imagem: 'https://image.tmdb.org/t/p/w300/yfIAkRcPUbbfSGR2JOuUppAAMLV.jpg'
},
{
    titulo: 'Ninja 2: A Vingança',
    descricao: 'Descrição do filme 13',
    imdb: 'tt2458106',
    imagem: 'https://image.tmdb.org/t/p/w300/bdPk58U7rNYzXfvvvm3buVhMRIx.jpg'
},
{
    titulo: 'Ninja',
    descricao: 'Descrição do filme 14',
    imdb: 'tt1182921',
    imagem: 'https://image.tmdb.org/t/p/w300/tKjH1IQVeUmHOlxZinQdjFHkFVG.jpg'
},
{
    titulo: 'Do Outro Lado da Linha',
    descricao: 'Descrição do filme 15',
    imdb: 'tt1049405',
    imagem: 'https://image.tmdb.org/t/p/w300/u0h8jtnDLQFhWRPezgGo5HWEjzT.jpg'
},
{
    titulo: 'Kadaver',
    descricao: 'Descrição do filme 16',
    imdb: 'tt11284280',
    imagem: 'https://image.tmdb.org/t/p/w300/jbYvBVXbNW3eVZqKNB4FxMpSvci.jpg'
},
{
    titulo: 'Tracers: Nos Limites',
    descricao: 'Descrição do filme 17',
    imdb: 'tt2401097',
    imagem: 'https://image.tmdb.org/t/p/w300/yGedOHE4uy4onbvTp8xsIVd41Hx.jpg'
},
{
    titulo: 'Guerreira De Sangue',
    descricao: 'Descrição do filme 18',
    imdb: 'tt4327752',
    imagem: 'https://image.tmdb.org/t/p/w300/bGB1rSwpw2wio96htGODLe9Ptfc.jpg'
},
{
    titulo: 'Inquietos',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1498569',
    imagem: 'https://image.tmdb.org/t/p/w300/sB8wn9EYMcxXXMhfoXTEap8ggN6.jpg'
},
{
    titulo: 'Aminimigos',
    descricao: 'Descrição do filme 20',
    imdb: 'tt1865368',
    imagem: 'https://image.tmdb.org/t/p/w300/v0jVmmTjnKUpP5GKKJQzpiV87IE.jpg'
},
{
    titulo: 'Ultraman R&B: O Filme - O Cristal da União',
    descricao: 'Descrição do filme 21',
    imdb: 'tt9890758',
    imagem: 'https://image.tmdb.org/t/p/w300/8xSRDVb7lyXlarTbqmwhkS027KH.jpg'
},
{
    titulo: 'Cabras da Peste',
    descricao: 'Descrição do filme 22',
    imdb: 'tt14111726',
    imagem: 'https://image.tmdb.org/t/p/w300/uBo98gD5feDSh24DWpw3NStXjpz.jpg'
},
{
    titulo: 'Platoon',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0091763',
    imagem: 'https://image.tmdb.org/t/p/w300/lTwR2lFlU9MITmornRYbihksyLt.jpg'
},
{
    titulo: 'Sorte',
    descricao: 'Descrição do filme 24',
    imdb: 'tt7214954',
    imagem: 'https://image.tmdb.org/t/p/w300/aeJHkkrDvbXPB25NghNbv5kUBVi.jpg'
},
{
    titulo: 'X: A Marca da Morte',
    descricao: 'Descrição do filme 1',
    imdb: 'tt13560574',
    imagem: 'https://image.tmdb.org/t/p/w300/As5dKK7fLOlCyVwjqoW5pyiDz6D.jpg'
},
{
    titulo: 'Treze Vidas: O Resgate',
    descricao: 'Descrição do filme 2',
    imdb: 'tt12262116',
    imagem: 'https://image.tmdb.org/t/p/w300/8sO4gjzLhxndxLtMrohGV2DD2Rw.jpg'
},
{
    titulo: 'Dragon Ball Super: Super Hero',
    descricao: 'Descrição do filme 3',
    imdb: 'tt14614892',
    imagem: 'https://image.tmdb.org/t/p/w300/FiqBRypTDyHzqcxdbpPb3ddFep.jpg'
},
{
    titulo: 'A Bruxa - Parte 1: A Subversão',
    descricao: 'Descrição do filme 4',
    imdb: 'tt8574252',
    imagem: 'https://image.tmdb.org/t/p/w300/979reU4oeyHuqQn8D8zHrmUUq6P.jpg'
},
{
    titulo: 'A Bruxa - Parte 2: A Colisão',
    descricao: 'Descrição do filme 5',
    imdb: 'tt13721828',
    imagem: 'https://image.tmdb.org/t/p/w300/cah6iIYQBctvCmBjsKGb1NCiygr.jpg'
},
{
    titulo: 'Chamas da Vingança',
    descricao: 'Descrição do filme 6',
    imdb: 'tt1798632',
    imagem: 'https://image.tmdb.org/t/p/w300/4qU8xM8nFsXvUYSZsRQOdIti267.jpg'
},
{
    titulo: 'Dois Amigos e uma Ameaça Alienígena',
    descricao: 'Descrição do filme 7',
    imdb: 'tt14866710',
    imagem: 'https://image.tmdb.org/t/p/w300/jDCuTGYlZChQ1acAVbXHJnAxiF7.jpg'
},
{
    titulo: 'Agência Secreta de Controle de Magias',
    descricao: 'Descrição do filme 8',
    imdb: 'tt13932162',
    imagem: 'https://image.tmdb.org/t/p/w300/B3Xz48iyIh9ejffVtfCxwzTO7n.jpg'
},
{
    titulo: 'O Jardim Secreto',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0108071',
    imagem: 'https://image.tmdb.org/t/p/w300/fVeMN35BExINaKiO78ThVTwn1xS.jpg'
},
{
    titulo: 'O Jardim Secreto',
    descricao: 'Descrição do filme 10',
    imdb: 'tt2702920',
    imagem: 'https://image.tmdb.org/t/p/w300/pXufpZD0LvThqlAljov6UOXcS68.jpg'
},
{
    titulo: 'Pinóquio',
    descricao: 'Descrição do filme 11',
    imdb: 'tt8333746',
    imagem: 'https://image.tmdb.org/t/p/w300/9EuGKjsYegO58RaMYWGvnurHo7u.jpg'
},
{
    titulo: 'Downhill',
    descricao: 'Descrição do filme 12',
    imdb: 'tt4558376',
    imagem: 'https://image.tmdb.org/t/p/w300/ruLqLb2bfWKykckxVlVZayuBOgW.jpg'
},
{
    titulo: 'A Suspeita',
    descricao: 'Descrição do filme 13',
    imdb: 'tt8150228',
    imagem: 'https://image.tmdb.org/t/p/w300/kCMljmR6qS0LdtUEyA8sdahCWmC.jpg'
},
{
    titulo: 'No Rastro do Tráfico',
    descricao: 'Descrição do filme 14',
    imdb: 'tt10427010',
    imagem: 'https://image.tmdb.org/t/p/w300/dB5vP9rfJqhM8lGreEABbqIKTMD.jpg'
},
{
    titulo: 'A Lenda do Cavaleiro Negro',
    descricao: 'Descrição do filme 15',
    imdb: 'tt17686944',
    imagem: 'https://image.tmdb.org/t/p/w300/q4lnEYzPdvgvxFWlPGsdnDdbxEn.jpg'
},
{
    titulo: 'Ex Casados',
    descricao: 'Descrição do filme 16',
    imdb: 'tt15790768',
    imagem: 'https://image.tmdb.org/t/p/w300/4nxqqtsXsOI7KcFnqqE25eW0Rul.jpg'
},
{
    titulo: 'Endgame: Roubo de Identidade',
    descricao: 'Descrição do filme 17',
    imdb: 'tt11564214',
    imagem: 'https://image.tmdb.org/t/p/w300/euoonsQCowBYYqI1ztvonNjxibM.jpg'
},
{
    titulo: 'Doutor Sono',
    descricao: 'Descrição do filme 18',
    imdb: 'tt5606664',
    imagem: 'https://image.tmdb.org/t/p/w300/huDLFxqWZkIdlaiRpkEA3YifV64.jpg'
},
{
    titulo: 'O Predador: A Caçada',
    descricao: 'Descrição do filme 19',
    imdb: 'tt11866324',
    imagem: 'https://image.tmdb.org/t/p/w300/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg'
},
{
    titulo: 'O Chamado do Mal',
    descricao: 'Descrição do filme 20',
    imdb: 'tt6197494',
    imagem: 'https://image.tmdb.org/t/p/w300/sSMz9j9oeydYLviGNYoro7Zk8Uc.jpg'
},
{
    titulo: 'Não Olhe',
    descricao: 'Descrição do filme 21',
    imdb: 'tt5834760',
    imagem: 'https://image.tmdb.org/t/p/w300/9YTo6qopN0ACZ1dDSWnN6A743mi.jpg'
},
{
    titulo: 'Cidade dos Anjos',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0120632',
    imagem: 'https://image.tmdb.org/t/p/w300/iUcDXPGWNLqKkFmmcoK3uri6BjE.jpg'
},
{
    titulo: 'King Richard: Criando Campeãs',
    descricao: 'Descrição do filme 23',
    imdb: 'tt9620288',
    imagem: 'https://image.tmdb.org/t/p/w300/1GzzYMqCUbx0RMY3yAdrKdKVonh.jpg'
},
{
    titulo: 'O Diário de Bridget Jones',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0243155',
    imagem: 'https://image.tmdb.org/t/p/w300/oRjRgdUuSelBEOmYn5Ha6bIIxR8.jpg'
},
{
    titulo: 'Influencer de Mentira',
    descricao: 'Descrição do filme 1',
    imdb: 'tt14814040',
    imagem: 'https://image.tmdb.org/t/p/w300/dJKVZFS61uqFrTdyu0bo57ExX3Y.jpg'
},
{
    titulo: 'Suspiria',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0076786',
    imagem: 'https://image.tmdb.org/t/p/w300/sy6jbJ3pr1bI8yfG8PgEKMAunLS.jpg'
},
{
    titulo: 'Abracadabra',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0107120',
    imagem: 'https://image.tmdb.org/t/p/w300/kIzKIA43hE26HRV77RTYtZwjOSM.jpg'
},
{
    titulo: 'O Homem Que Desafiou o Diabo',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0933033',
    imagem: 'https://image.tmdb.org/t/p/w300/eXIlXNqqSTusKiJqPbdn4LHqFJ0.jpg'
},
{
    titulo: 'Os Outros',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0230600',
    imagem: 'https://image.tmdb.org/t/p/w300/5dEa7JRjc5BuJPVQKsn9FpDZSIt.jpg'
},
{
    titulo: 'Atômica',
    descricao: 'Descrição do filme 6',
    imdb: 'tt2406566',
    imagem: 'https://image.tmdb.org/t/p/w300/oNPmUi8sADtGNwSGk5qTxxUMlUy.jpg'
},
{
    titulo: 'Um Passado de Presente',
    descricao: 'Descrição do filme 7',
    imdb: 'tt10060094',
    imagem: 'https://image.tmdb.org/t/p/w300/ozz2rvpOLm17rtYP6pTZ634dOc4.jpg'
},
{
    titulo: 'A Liga Extraordinária',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0311429',
    imagem: 'https://image.tmdb.org/t/p/w300/xQXs7u7ApBDMkChO0xjw8Sw0YfN.jpg'
},
{
    titulo: 'Yesterday',
    descricao: 'Descrição do filme 9',
    imdb: 'tt8079248',
    imagem: 'https://image.tmdb.org/t/p/w300/1rjaRIAqFPQNnMtqSMLtg0VEABi.jpg'
},
{
    titulo: 'A Chave Mágica',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0113419',
    imagem: 'https://image.tmdb.org/t/p/w300/rVuxIueKF9cSH0lGudC0H1Kdh1Y.jpg'
},
{
    titulo: 'Perfeita é a Mãe!',
    descricao: 'Descrição do filme 11',
    imdb: 'tt4651520',
    imagem: 'https://image.tmdb.org/t/p/w300/mbLhrGT6eci3mL6uPcnRqcVGWGN.jpg'
},
{
    titulo: 'Perfeita é a Mãe 2',
    descricao: 'Descrição do filme 12',
    imdb: 'tt6359956',
    imagem: 'https://image.tmdb.org/t/p/w300/eOt3nKRqJNbd8M6mHSUQRTYIQou.jpg'
},
{
    titulo: 'A Oitava Noite',
    descricao: 'Descrição do filme 13',
    imdb: 'tt14781176',
    imagem: 'https://image.tmdb.org/t/p/w300/a11TdGOWqASvbeMs7q0a1YLa5K.jpg'
},
{
    titulo: 'Rogue - O Assassino',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0499556',
    imagem: 'https://image.tmdb.org/t/p/w300/68Bu8QIYcpv3XZZkrUoqQFfwfHx.jpg'
},
{
    titulo: 'A Chegada',
    descricao: 'Descrição do filme 15',
    imdb: 'tt2543164',
    imagem: 'https://image.tmdb.org/t/p/w300/4av3oWqgZ8QOl96xitvEovcu8jm.jpg'
},
{
    titulo: 'Cálculo Mortal',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0264935',
    imagem: 'https://image.tmdb.org/t/p/w300/pGNzvmkpRtRJe1NwPYtA3vz7MKl.jpg'
},
{
    titulo: 'Cinderela',
    descricao: 'Descrição do filme 17',
    imdb: 'tt1661199',
    imagem: 'https://image.tmdb.org/t/p/w300/4DsfRsCxrhkHQHGLeY9m8oi9q46.jpg'
},
{
    titulo: 'A Autópsia',
    descricao: 'Descrição do filme 18',
    imdb: 'tt3289956',
    imagem: 'https://image.tmdb.org/t/p/w300/wFiOQDl037qYICAn4RExrwbgCEF.jpg'
},
{
    titulo: 'Privacidade Hackeada',
    descricao: 'Descrição do filme 19',
    imdb: 'tt4736550',
    imagem: 'https://image.tmdb.org/t/p/w300/20KWEm4IJ6M6IoE77NFaqwkkJpk.jpg'
},
{
    titulo: 'Matadores de Vampiras Lésbicas',
    descricao: 'Descrição do filme 20',
    imdb: 'tt1020885',
    imagem: 'https://image.tmdb.org/t/p/w300/1PrCRxFOs18EKxy2FrqN3tmubA4.jpg'
},
{
    titulo: 'Cadete Kelly',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0294425',
    imagem: 'https://image.tmdb.org/t/p/w300/leeIXPxv3qtU7KKwwATBuELP0kv.jpg'
},
{
    titulo: 'Palm Springs',
    descricao: 'Descrição do filme 22',
    imdb: 'tt9484998',
    imagem: 'https://image.tmdb.org/t/p/w300/yf5IuMW6GHghu39kxA0oFx7Bxmj.jpg'
},
{
    titulo: 'Mãe e Muito Mais',
    descricao: 'Descrição do filme 23',
    imdb: 'tt4180560',
    imagem: 'https://image.tmdb.org/t/p/w300/zmxpmxuxHCPAKo3anxdFuyu294I.jpg'
},
{
    titulo: 'Estrada Maldita',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0486051',
    imagem: 'https://image.tmdb.org/t/p/w300/bBswA6tDoCapCXj8PFlFk8IFZQh.jpg'
},
{
    titulo: 'As Aventuras de Gulliver',
    descricao: 'Descrição do filme 1',
    imdb: 'tt11238518',
    imagem: 'https://image.tmdb.org/t/p/w300/hEOsByOxmcY5VexXTwqLs9fygYA.jpg'
},
{
    titulo: 'Fantástica - Uma Aventura no Mundo Boonie Bears',
    descricao: 'Descrição do filme 2',
    imdb: 'tt6857250',
    imagem: 'https://image.tmdb.org/t/p/w300/tg2ixwNGT1FHsKpGVWSBw49aF8y.jpg'
},
{
    titulo: 'As Aventuras de Errol Flynn',
    descricao: 'Descrição do filme 3',
    imdb: 'tt5303442',
    imagem: 'https://image.tmdb.org/t/p/w300/oPMEpcDlZVGa8xBhUUHteaPrvHw.jpg'
},
{
    titulo: 'As Fantásticas Aventuras de Spirou e Fantasio',
    descricao: 'Descrição do filme 4',
    imdb: 'tt6465308',
    imagem: 'https://image.tmdb.org/t/p/w300/oiAbUWmxH6C5o9pvhBSbkwOnhnu.jpg'
},
{
    titulo: 'Acampamento Sinistro',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0086320',
    imagem: 'https://image.tmdb.org/t/p/w300/qCQo7okJCHYMMagt6kC0YfhoVVt.jpg'
},
{
    titulo: 'Lancelot: O Primeiro Cavaleiro',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0113071',
    imagem: 'https://image.tmdb.org/t/p/w300/hRV2J7FZvYvBcM9vWEAeCBAGkTA.jpg'
},
{
    titulo: 'Romeu Tem Que Morrer',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0165929',
    imagem: 'https://image.tmdb.org/t/p/w300/wwCuBA58NukJIqx81sD785RGh0i.jpg'
},
{
    titulo: 'Desespero',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0129871',
    imagem: 'https://image.tmdb.org/t/p/w300/bjELwweoUlLSk9DtOS3MXBJVLTX.jpg'
},
{
    titulo: 'A Força da Natureza',
    descricao: 'Descrição do filme 9',
    imdb: 'tt10308928',
    imagem: 'https://image.tmdb.org/t/p/w300/aCbYUY1xuyaxbp5F1KuyH7AIvHg.jpg'
},
{
    titulo: 'Identidade Paranormal',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1179069',
    imagem: 'https://image.tmdb.org/t/p/w300/3jekGSLQmIjT8q51V3OMoXPO8Pr.jpg'
},
{
    titulo: 'Lembranças de Outra Vida',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0113089',
    imagem: 'https://image.tmdb.org/t/p/w300/kCBAmH4K5hgL2H8hpQ8wHRwMAwI.jpg'
},
{
    titulo: 'O Buraco',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1085779',
    imagem: 'https://image.tmdb.org/t/p/w300/6xPWz2eJM4Yodmw8TmyZGe1VWYk.jpg'
},
{
    titulo: 'Sombras da Noite',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1077368',
    imagem: 'https://image.tmdb.org/t/p/w300/1O7eAmFxv2O078x8wvT8EY5Dgwo.jpg'
},
{
    titulo: 'Mortal',
    descricao: 'Descrição do filme 14',
    imdb: 'tt5715066',
    imagem: 'https://image.tmdb.org/t/p/w300/aVbqhqYtlxwEGihTEhewZAgDOCX.jpg'
},
{
    titulo: 'Mudança Mortal',
    descricao: 'Descrição do filme 15',
    imdb: 'tt10691162',
    imagem: 'https://image.tmdb.org/t/p/w300/w51iXRxuOcyhgcibywkZRgYDLQO.jpg'
},
{
    titulo: 'Carga Mortal',
    descricao: 'Descrição do filme 16',
    imdb: 'tt6170506',
    imagem: 'https://image.tmdb.org/t/p/w300/cjxMMKnuULfVyQ5EE0PbBYiMtuB.jpg'
},
{
    titulo: 'Mortal Kombat: A Aniquilação',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0119707',
    imagem: 'https://image.tmdb.org/t/p/w300/jnqPIhG2nn0cGZujaSG9ojIGgq.jpg'
},
{
    titulo: 'Entrega Mortal',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1884457',
    imagem: 'https://image.tmdb.org/t/p/w300/yYjjE7FPO2nZA13dBzVcYXwFaIH.jpg'
},
{
    titulo: 'Aliança Mortal',
    descricao: 'Descrição do filme 19',
    imdb: 'tt2395199',
    imagem: 'https://image.tmdb.org/t/p/w300/AhDJFm4pZ3Wdlq7IKmvpRXEWqbf.jpg'
},
{
    titulo: 'Sim, Eu Aceito',
    descricao: 'Descrição do filme 20',
    imdb: 'tt8319098',
    imagem: 'https://image.tmdb.org/t/p/w300/7NSvRd283jIIma2zvftFFZB4P7D.jpg'
},
{
    titulo: 'Godzilla II: Rei dos Monstros',
    descricao: 'Descrição do filme 21',
    imdb: 'tt3741700',
    imagem: 'https://image.tmdb.org/t/p/w300/2umU3r6V4V2gTmSnZJmH61nTorF.jpg'
},
{
    titulo: 'Godzilla',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0831387',
    imagem: 'https://image.tmdb.org/t/p/w300/9dyFXQwmFHI1gMn2JEczgKD1hwO.jpg'
},
{
    titulo: 'A Maldição da Chorona',
    descricao: 'Descrição do filme 23',
    imdb: 'tt4913966',
    imagem: 'https://image.tmdb.org/t/p/w300/2D8MtUYt9ojKmKvyeXpsfZtDDgw.jpg'
},
{
    titulo: 'À Prova de Fogo',
    descricao: 'Descrição do filme 24',
    imdb: 'tt1129423',
    imagem: 'https://image.tmdb.org/t/p/w300/fX1n097j6l7Y47jtph8Z4SwJkbR.jpg'
},
{
    titulo: 'Lutador Misterioso',
    descricao: 'Descrição do filme 1',
    imdb: 'tt11201180',
    imagem: 'https://image.tmdb.org/t/p/w300/kYZmkpiBWL2TuPbbvV5cwa6fdqP.jpg'
},
{
    titulo: 'O Amanhecer Mais Escuro',
    descricao: 'Descrição do filme 2',
    imdb: 'tt6017594',
    imagem: 'https://image.tmdb.org/t/p/w300/cCMNQdHiFvjGfEgtpFARyZuoNwh.jpg'
},
{
    titulo: 'Fanático',
    descricao: 'Descrição do filme 3',
    imdb: 'tt7869070',
    imagem: 'https://image.tmdb.org/t/p/w300/qaSbNW4jfGhxiBJM4BOEqkDwIrG.jpg'
},
{
    titulo: 'Uma Noite no Museu',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0477347',
    imagem: 'https://image.tmdb.org/t/p/w300/4b7dG2IHcu4s9BoAqXIMrzf832H.jpg'
},
{
    titulo: 'Uma Noite no Museu 2',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1078912',
    imagem: 'https://image.tmdb.org/t/p/w300/9nybhG2tnYNl2a8MpKFWml9SHl5.jpg'
},
{
    titulo: 'Uma Noite no Museu 3: O Segredo da Tumba',
    descricao: 'Descrição do filme 6',
    imdb: 'tt2692250',
    imagem: 'https://image.tmdb.org/t/p/w300/pXUy4komfGJGAjc1JTAS7zaTK1.jpg'
},
{
    titulo: 'Resgate em Malibu: A Próxima Onda',
    descricao: 'Descrição do filme 7',
    imdb: 'tt11032990',
    imagem: 'https://image.tmdb.org/t/p/w300/zVtU4HpZz3qPID5bFqnCoVmINud.jpg'
},
{
    titulo: 'Era Uma Vez Brasília',
    descricao: 'Descrição do filme 8',
    imdb: 'tt7173890',
    imagem: 'https://image.tmdb.org/t/p/w300/7ZtX4VkGHN8BhQDGkffJn2i45Hq.jpg'
},
{
    titulo: 'A Profecia',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0466909',
    imagem: 'https://image.tmdb.org/t/p/w300/rN61lR87sthJKEewINVfijPLp04.jpg'
},
{
    titulo: 'A Profecia IV: O Despertar',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0102585',
    imagem: 'https://image.tmdb.org/t/p/w300/bs42hbXgMGjfzqI3SWSFZuml92G.jpg'
},
{
    titulo: 'A Profecia III: O Conflito Final',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0082377',
    imagem: 'https://image.tmdb.org/t/p/w300/ziRicazl5R5LgalKWT8aNjnu7CX.jpg'
},
{
    titulo: 'Damien: A Profecia II',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0077394',
    imagem: 'https://image.tmdb.org/t/p/w300/xmwDByGXMs0NByKwL2IAIqe9fIh.jpg'
},
{
    titulo: 'A Profecia',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0075005',
    imagem: 'https://image.tmdb.org/t/p/w300/6k8m2ckucTUq0h8Lm9d8OgNIIXu.jpg'
},
{
    titulo: 'Uma Sereia em Paris',
    descricao: 'Descrição do filme 14',
    imdb: 'tt9209312',
    imagem: 'https://image.tmdb.org/t/p/w300/gLumn0yQu3TrHKazP40TDGYpNqi.jpg'
},
{
    titulo: 'A Casa do Lago',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0410297',
    imagem: 'https://image.tmdb.org/t/p/w300/niavrwLXMY09O5x3mrlE4OrMN6O.jpg'
},
{
    titulo: 'O Homem do Tai Chi',
    descricao: 'Descrição do filme 16',
    imdb: 'tt2016940',
    imagem: 'https://image.tmdb.org/t/p/w300/7Jvo3Uf4yRIXPfKz4md4fgPQ5fD.jpg'
},
{
    titulo: 'O Guerreiro do Futuro',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0322651',
    imagem: 'https://image.tmdb.org/t/p/w300/hthAaRa4tqrIr2IeEvARYQzpjh7.jpg'
},
{
    titulo: 'Silent Hill: Revelação',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0938330',
    imagem: 'https://image.tmdb.org/t/p/w300/7936Tglq1tM3eMXpssyrn0CxjeD.jpg'
},
{
    titulo: 'Terror em Silent Hill',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0384537',
    imagem: 'https://image.tmdb.org/t/p/w300/pg39SwqpfSXiC6dVl6leFpFmJML.jpg'
},
{
    titulo: 'O Mistério das Palavras Cruzadas: Enigma Mortal',
    descricao: 'Descrição do filme 20',
    imdb: 'tt11686354',
    imagem: 'https://image.tmdb.org/t/p/w300/vE5BiUSVKiSiDiFMvsgDa0qCQLT.jpg'
},
{
    titulo: 'Uma Cilada para Roger Rabbit',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0096438',
    imagem: 'https://image.tmdb.org/t/p/w300/1sNM9NOJrdVhJUkWQkbcekoLiic.jpg'
},
{
    titulo: 'Um Reencontro Inesperado',
    descricao: 'Descrição do filme 22',
    imdb: 'tt8045592',
    imagem: 'https://image.tmdb.org/t/p/w300/elrXo5uMCI8cI8idpblQPT3QwDS.jpg'
},
{
    titulo: 'Tudo é Possível',
    descricao: 'Descrição do filme 23',
    imdb: 'tt11464446',
    imagem: 'https://image.tmdb.org/t/p/w300/fi3CpngKPgTXLfW6XgvXLuTNslk.jpg'
},
{
    titulo: 'Herói da Liberdade',
    descricao: 'Descrição do filme 24',
    imdb: 'tt8354752',
    imagem: 'https://image.tmdb.org/t/p/w300/nD3eegYICfOZmQTENopz8NXu4Ci.jpg'
},
{
    titulo: 'Passagem Secreta',
    descricao: 'Descrição do filme 1',
    imdb: 'tt8178798',
    imagem: 'https://image.tmdb.org/t/p/w300/1NB89sWY4coysIN9xyKMmJ3H7s0.jpg'
},
{
    titulo: '100 Dias para o Natal',
    descricao: 'Descrição do filme 2',
    imdb: 'tt14586176',
    imagem: 'https://image.tmdb.org/t/p/w300/1qkUG6UcUXwkrobQOtWfjcPQr76.jpg'
},
{
    titulo: 'Fúria',
    descricao: 'Descrição do filme 3',
    imdb: 'tt5628902',
    imagem: 'https://image.tmdb.org/t/p/w300/peOmxRTPfGTRJx8NgAaAnLkiaLM.jpg'
},
{
    titulo: 'O Pacto',
    descricao: 'Descrição do filme 4',
    imdb: 'tt11204060',
    imagem: 'https://image.tmdb.org/t/p/w300/ipZ1EoENjq2yOCdNWSwZZHcPOBY.jpg'
},
{
    titulo: 'Esse Ano Vai',
    descricao: 'Descrição do filme 5',
    imdb: 'tt8231202',
    imagem: 'https://image.tmdb.org/t/p/w300/jbi3g4fQ3yXIkFtKpXXn8eRTdIy.jpg'
},
{
    titulo: 'Red Rocket',
    descricao: 'Descrição do filme 6',
    imdb: 'tt13453006',
    imagem: 'https://image.tmdb.org/t/p/w300/345gLhiNpItU1ICx8OxJQwjgPmH.jpg'
},
{
    titulo: 'Herança',
    descricao: 'Descrição do filme 7',
    imdb: 'tt7923220',
    imagem: 'https://image.tmdb.org/t/p/w300/zXPjfu3ONgUMmN73Ot0d2RXLJbp.jpg'
},
{
    titulo: 'Retorno',
    descricao: 'Descrição do filme 8',
    imdb: 'tt15943258',
    imagem: 'https://image.tmdb.org/t/p/w300/8Eh0SF6tEBNiaAP2pNTj9kMLDH8.jpg'
},
{
    titulo: 'Continência ao Amor',
    descricao: 'Descrição do filme 9',
    imdb: 'tt4614584',
    imagem: 'https://image.tmdb.org/t/p/w300/ncBNV5G7EBLPK2X6cO55krYrPRw.jpg'
},
{
    titulo: 'Donnybrook - Luta Pela Redenção',
    descricao: 'Descrição do filme 10',
    imdb: 'tt7087210',
    imagem: 'https://image.tmdb.org/t/p/w300/jbw7jGT9PFLJQqyoxuXLqbhQmWQ.jpg'
},
{
    titulo: 'Invencível: Caminho da Redenção',
    descricao: 'Descrição do filme 11',
    imdb: 'tt7339792',
    imagem: 'https://image.tmdb.org/t/p/w300/lVcvhoW2SINW0hNDSkKeAsGDZ1Y.jpg'
},
{
    titulo: 'Maus Momentos no Hotel Royale',
    descricao: 'Descrição do filme 12',
    imdb: 'tt6628394',
    imagem: 'https://image.tmdb.org/t/p/w300/4rIbKUGQV5gqXT37lmhmG7P0YIt.jpg'
},
{
    titulo: 'Super Tiras 2',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0859635',
    imagem: 'https://image.tmdb.org/t/p/w300/8k6mMtIfP9SyG5OfCzv7oFuT5br.jpg'
},
{
    titulo: 'A Oração Não Falha',
    descricao: 'Descrição do filme 14',
    imdb: 'tt4575782',
    imagem: 'https://image.tmdb.org/t/p/w300/pP4c1hBnWFbjEOLsHtzCdi1sCWW.jpg'
},
{
    titulo: 'O Passado de Alice',
    descricao: 'Descrição do filme 15',
    imdb: 'tt5609004',
    imagem: 'https://image.tmdb.org/t/p/w300/cvnFCK7IJUXe3oKuZ5s2XX61lcs.jpg'
},
{
    titulo: 'Rápida e Mortal',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0114214',
    imagem: 'https://image.tmdb.org/t/p/w300/3Wj0oiuoAmVgSceDXl7sSR1muq1.jpg'
},
{
    titulo: 'Pedro: A Redenção',
    descricao: 'Descrição do filme 17',
    imdb: 'tt5206170',
    imagem: 'https://image.tmdb.org/t/p/w300/gW6hVcJAI4mCYvGhERDBK4PHsjn.jpg'
},
{
    titulo: 'Abraão',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0109036',
    imagem: 'https://image.tmdb.org/t/p/w300/yk5UsZGx1lZq3b8r7TfujpaLCL2.jpg'
},
{
    titulo: 'Agente C – Dupla Identidade',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1770734',
    imagem: 'https://image.tmdb.org/t/p/w300/z8J1xIqob3Uj70ABARtgaFcnIs5.jpg'
},
{
    titulo: 'O Último Mestre do Ar',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0938283',
    imagem: 'https://image.tmdb.org/t/p/w300/fIlnPOGWqtRQj7vQdO7iAGAQ1uJ.jpg'
},
{
    titulo: 'Tal Pai, Tal Filha',
    descricao: 'Descrição do filme 21',
    imdb: 'tt7170950',
    imagem: 'https://image.tmdb.org/t/p/w300/myIqVgGUEgIMFdD752azAak8rQ3.jpg'
},
{
    titulo: 'Han Solo: Uma História Star Wars',
    descricao: 'Descrição do filme 22',
    imdb: 'tt3778644',
    imagem: 'https://image.tmdb.org/t/p/w300/jAMEX0syUh6sbjBiysibzrFpbo.jpg'
},
{
    titulo: 'Star Wars: O Despertar da Força',
    descricao: 'Descrição do filme 23',
    imdb: 'tt2488496',
    imagem: 'https://image.tmdb.org/t/p/w300/lqMDbo4rXnakFgc4C6LzPv6pG7F.jpg'
},
{
    titulo: 'Star Wars: Episódio IX - A Ascensão Skywalker',
    descricao: 'Descrição do filme 24',
    imdb: 'tt2527338',
    imagem: 'https://image.tmdb.org/t/p/w300/uLlrDUtFG2tKtDcJN6kBznlqqsp.jpg'
},
{
    titulo: 'Rogue One: Uma História Star Wars',
    descricao: 'Descrição do filme 1',
    imdb: 'tt3748528',
    imagem: 'https://image.tmdb.org/t/p/w300/74C2YX0NLWnozVMRS56d5CKDdEv.jpg'
},
{
    titulo: 'Whiplash: Em Busca da Perfeição',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2582802',
    imagem: 'https://image.tmdb.org/t/p/w300/dtnzzmGOy2Ni89Ir4I1FTO40FJQ.jpg'
},
{
    titulo: 'A Casa de Areia',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0373747',
    imagem: 'https://image.tmdb.org/t/p/w300/uQ7DEb60Nultcp2lBIWapW1mAoU.jpg'
},
{
    titulo: 'Cilada.com',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1988573',
    imagem: 'https://image.tmdb.org/t/p/w300/jCTh6jL9fd39Zu65Af5lnlHg0uw.jpg'
},
{
    titulo: 'A Redenção',
    descricao: 'Descrição do filme 5',
    imdb: 'tt10218674',
    imagem: 'https://image.tmdb.org/t/p/w300/epbyGz8drJMTL2f8absrO1RHH6G.jpg'
},
{
    titulo: 'Guerra nas Estrelas: O Império Contra-Ataca',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0080684',
    imagem: 'https://image.tmdb.org/t/p/w300/dLGT8b4Ut10z44uYLaip4QiwKta.jpg'
},
{
    titulo: 'Guerra nas Estrelas',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0076759',
    imagem: 'https://image.tmdb.org/t/p/w300/dw7X9YPjjAfIxKHW04V64Bb9TB0.jpg'
},
{
    titulo: 'Star Wars: Episódio III - A Vingança dos Sith',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0121766',
    imagem: 'https://image.tmdb.org/t/p/w300/nuF5yWtTJEEAd4Qa6cVkYz1XCST.jpg'
},
{
    titulo: 'Star Wars: Episódio II - Ataque dos Clones',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0121765',
    imagem: 'https://image.tmdb.org/t/p/w300/9m1nJ2MfTG5QEmjOCg0b4YCo4W8.jpg'
},
{
    titulo: 'Hacker',
    descricao: 'Descrição do filme 10',
    imdb: 'tt6393306',
    imagem: 'https://image.tmdb.org/t/p/w300/wwPYF3PqYXa9tcR8sBNPLgsUIYL.jpg'
},
{
    titulo: 'O Homem de Palha',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0070917',
    imagem: 'https://image.tmdb.org/t/p/w300/zma6Tb20CbcD4EtbWKC2yOzkjQT.jpg'
},
{
    titulo: 'O Hobbit',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0077687',
    imagem: 'https://image.tmdb.org/t/p/w300/pyWF1RC1gfJayNyDuD5F53LMDy9.jpg'
},
{
    titulo: 'O Dragão e o Feiticeiro',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0082288',
    imagem: 'https://image.tmdb.org/t/p/w300/zCWSMavOruKE11nWGOw5CtB61pK.jpg'
},
{
    titulo: 'Abandonada: O Mal Foi Eleito',
    descricao: 'Descrição do filme 14',
    imdb: 'tt5127300',
    imagem: 'https://image.tmdb.org/t/p/w300/1YhIAq1LkdCd4V7C4ciBaBXWCln.jpg'
},
{
    titulo: 'Estranha Presença',
    descricao: 'Descrição do filme 15',
    imdb: 'tt6859762',
    imagem: 'https://image.tmdb.org/t/p/w300/9Om7atCqjdAOJ1zXQUg4QYFwlJd.jpg'
},
{
    titulo: 'A Última Nota',
    descricao: 'Descrição do filme 16',
    imdb: 'tt7090140',
    imagem: 'https://image.tmdb.org/t/p/w300/hyuW6OVIvRhHClAdGkdycc7uis7.jpg'
},
{
    titulo: 'Marcado para Morrer',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0113360',
    imagem: 'https://image.tmdb.org/t/p/w300/fLCGLAGWwnBxEJQFSNvfzn7BlQ5.jpg'
},
{
    titulo: 'Sobibor: A Revolta que Mudou os Rumos da Humanidade',
    descricao: 'Descrição do filme 18',
    imdb: 'tt6324614',
    imagem: 'https://image.tmdb.org/t/p/w300/ggX7hyJr3toYvNzu8FtcYNUQlME.jpg'
},
{
    titulo: 'Lambada, A Dança Proibida',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0099595',
    imagem: 'https://image.tmdb.org/t/p/w300/54clJUEUV2cKRLJP8YUfQMZvfon.jpg'
},
{
    titulo: 'Wolfwalkers',
    descricao: 'Descrição do filme 20',
    imdb: 'tt5198068',
    imagem: 'https://image.tmdb.org/t/p/w300/gCa0yDjBb6zHgy2dhbud9mfsTLK.jpg'
},
{
    titulo: 'Kronos: O Fim Da Humanidade?',
    descricao: 'Descrição do filme 21',
    imdb: 'tt7312940',
    imagem: 'https://image.tmdb.org/t/p/w300/tAlGYFGssx7BoWtAPsz76uYCPWG.jpg'
},
{
    titulo: '24 Horas: A Redenção',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0813980',
    imagem: 'https://image.tmdb.org/t/p/w300/tcKmFtVPgQMO6W21pqtEloY28Bj.jpg'
},
{
    titulo: 'Não Me Diga Adeus',
    descricao: 'Descrição do filme 23',
    imdb: 'tt2597804',
    imagem: 'https://image.tmdb.org/t/p/w300/lUPrLn7g5x0jrPP5pZWMVGlQy2s.jpg'
},
{
    titulo: 'A Última Noite',
    descricao: 'Descrição do filme 24',
    imdb: 'tt11628854',
    imagem: 'https://image.tmdb.org/t/p/w300/fMY66O0O74iPMWSvFA6vNge7Nzz.jpg'
},
{
    titulo: 'Sedenta de Sangue',
    descricao: 'Descrição do filme 1',
    imdb: 'tt12399056',
    imagem: 'https://image.tmdb.org/t/p/w300/pXoijqun4n8QtcVT4KW9BIOUOpG.jpg'
},
{
    titulo: 'Sombra',
    descricao: 'Descrição do filme 2',
    imdb: 'tt10062628',
    imagem: 'https://image.tmdb.org/t/p/w300/mD3dU2f0InjpfIgmlXvtNRPtYrV.jpg'
},
{
    titulo: 'Live Is Life',
    descricao: 'Descrição do filme 3',
    imdb: 'tt12923028',
    imagem: 'https://image.tmdb.org/t/p/w300/cHIn2VHEdZ30KyL60yPzD8KqL1M.jpg'
},
{
    titulo: 'Crescer Não é Brincadeira',
    descricao: 'Descrição do filme 4',
    imdb: 'tt15575356',
    imagem: 'https://image.tmdb.org/t/p/w300/c8HEdeEEp9KL30t4ws7dz6npakc.jpg'
},
{
    titulo: 'Caçada Selvagem',
    descricao: 'Descrição do filme 5',
    imdb: 'tt7615052',
    imagem: 'https://image.tmdb.org/t/p/w300/paclnjtBlAcEh1ddUbCbT1azPIc.jpg'
},
{
    titulo: 'Robin Hood: O Príncipe dos Ladrões',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0102798',
    imagem: 'https://image.tmdb.org/t/p/w300/e7iNpwTsxKGnKHdxPVWghD0Av7j.jpg'
},
{
    titulo: 'Mark, Mary + Some Other People',
    descricao: 'Descrição do filme 7',
    imdb: 'tt11832624',
    imagem: 'https://image.tmdb.org/t/p/w300/3kbBVx5MRaPq7sN01CR4dF6quqj.jpg'
},
{
    titulo: 'Concorrência Oficial',
    descricao: 'Descrição do filme 8',
    imdb: 'tt11700260',
    imagem: 'https://image.tmdb.org/t/p/w300/fey5dXqHTc4SUJs96Hv1Li9ezpD.jpg'
},
{
    titulo: 'Você Radical com Ranveer Singh e Bear Grylls',
    descricao: 'Descrição do filme 9',
    imdb: 'tt19315924',
    imagem: 'https://image.tmdb.org/t/p/w300/pZ7cLgKNF9g3B7z1TXlGYQwClPH.jpg'
},
{
    titulo: 'Minions 2: A Origem de Gru',
    descricao: 'Descrição do filme 10',
    imdb: 'tt5113044',
    imagem: 'https://image.tmdb.org/t/p/w300/tzFAboMUGJKoPQEtlxfxbbYsSWa.jpg'
},
{
    titulo: 'Quando Chega a Calmaria',
    descricao: 'Descrição do filme 11',
    imdb: 'tt13073374',
    imagem: 'https://image.tmdb.org/t/p/w300/bGVQK3vuidHYey8MMyIvVnoh2zp.jpg'
},
{
    titulo: 'O Último Passageiro',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1858481',
    imagem: 'https://image.tmdb.org/t/p/w300/s28PZ0XDIjgRTAmJlBvvQLBmvwJ.jpg'
},
{
    titulo: 'Obsessão Secreta',
    descricao: 'Descrição do filme 13',
    imdb: 'tt9419834',
    imagem: 'https://image.tmdb.org/t/p/w300/uQRwtMCDKVqNm88A1CMg0Tj7dpq.jpg'
},
{
    titulo: '40 Dias - O Milagre da Vida',
    descricao: 'Descrição do filme 14',
    imdb: 'tt9024106',
    imagem: 'https://image.tmdb.org/t/p/w300/kyoSXlgV8OMGyAfBHwyDECp1m5f.jpg'
},
{
    titulo: 'A Hora do Acerto',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0386005',
    imagem: 'https://image.tmdb.org/t/p/w300/d4a3r24yLya4Lq0EszxrwzODyzX.jpg'
},
{
    titulo: 'Risco Total',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0106582',
    imagem: 'https://image.tmdb.org/t/p/w300/2neSG07q03vM5jVA70LC3MB9dnE.jpg'
},
{
    titulo: 'A Lenda de Kamui',
    descricao: 'Descrição do filme 17',
    imdb: 'tt1156479',
    imagem: 'https://image.tmdb.org/t/p/w300/ygpQwR5D9q4sug4lj1EBV0acqid.jpg'
},
{
    titulo: 'Círculo de Fogo: A Revolta',
    descricao: 'Descrição do filme 18',
    imdb: 'tt2557478',
    imagem: 'https://image.tmdb.org/t/p/w300/qIWM0wgkmUlrEnYYkZ73EdNL0aX.jpg'
},
{
    titulo: 'Bright: Alma de Samurai',
    descricao: 'Descrição do filme 19',
    imdb: 'tt14837960',
    imagem: 'https://image.tmdb.org/t/p/w300/3TWRvY9XkDiFFcr72n0vs0oc0Vg.jpg'
},
{
    titulo: 'Um Colégio Muito Maluco',
    descricao: 'Descrição do filme 20',
    imdb: 'tt1247667',
    imagem: 'https://image.tmdb.org/t/p/w300/3pZzS9R1r6qHvstMxmGq54JkFDR.jpg'
},
{
    titulo: 'Curvas da Vida',
    descricao: 'Descrição do filme 21',
    imdb: 'tt2083383',
    imagem: 'https://image.tmdb.org/t/p/w300/yMR3cAOdzLiyshiuBPI5io32XQV.jpg'
},
{
    titulo: 'O Melhor está por vir',
    descricao: 'Descrição do filme 22',
    imdb: 'tt9284430',
    imagem: 'https://image.tmdb.org/t/p/w300/scjDcAaxscXJeRUkBjNFOwqc7W.jpg'
},
{
    titulo: 'Darken – O Universo Paralelo',
    descricao: 'Descrição do filme 23',
    imdb: 'tt6472742',
    imagem: 'https://image.tmdb.org/t/p/w300/NiAom7x6McYHZxGHi3r8fUgH1F.jpg'
},
{
    titulo: 'Acampamento Selvagem',
    descricao: 'Descrição do filme 24',
    imdb: 'tt7091162',
    imagem: 'https://image.tmdb.org/t/p/w300/eso1vWzeIII52BXnUKJwTo8Kc0M.jpg'
},
{
    titulo: 'Bons Meninos',
    descricao: 'Descrição do filme 1',
    imdb: 'tt6977338',
    imagem: 'https://image.tmdb.org/t/p/w300/dg6RRpk0W1N8NWMmdLvPRgTsstD.jpg'
},
{
    titulo: 'Se a Rua Beale Falasse',
    descricao: 'Descrição do filme 2',
    imdb: 'tt7125860',
    imagem: 'https://image.tmdb.org/t/p/w300/4gbiabIdvVv3iZcpdZEqHtbe0aU.jpg'
},
{
    titulo: 'Rastros de um Sequestro',
    descricao: 'Descrição do filme 3',
    imdb: 'tt7057496',
    imagem: 'https://image.tmdb.org/t/p/w300/atlY2UITvWyHjATMZb8QEWX7Zas.jpg'
},
{
    titulo: 'Na Natureza Selvagem',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0758758',
    imagem: 'https://image.tmdb.org/t/p/w300/bv2od9QMVaojT9lI02Uk47Z40Ue.jpg'
},
{
    titulo: 'Kung Pow: O Mestre da Kung-Fu-São',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0240468',
    imagem: 'https://image.tmdb.org/t/p/w300/8twRIXhh7EoLZWcihWRKJEgdAXq.jpg'
},
{
    titulo: 'Autópsia de um Crime',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0964539',
    imagem: 'https://image.tmdb.org/t/p/w300/ph6DHrAxbB1znMm53BrKKzwiQf9.jpg'
},
{
    titulo: 'O Enviado',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0335121',
    imagem: 'https://image.tmdb.org/t/p/w300/573orA06nQNNVTIUceNgQdGGc62.jpg'
},
{
    titulo: 'Dicionário de Cama',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0242888',
    imagem: 'https://image.tmdb.org/t/p/w300/g60TBvRbw9HhOp5mJRmR8LFGrTF.jpg'
},
{
    titulo: 'Tom e Jerry no Velho Oeste',
    descricao: 'Descrição do filme 9',
    imdb: 'tt15831226',
    imagem: 'https://image.tmdb.org/t/p/w300/khy44zoKUqInUSWhdzzcQZKDU0P.jpg'
},
{
    titulo: 'Malibu Crush',
    descricao: 'Descrição do filme 10',
    imdb: 'tt3437892',
    imagem: 'https://image.tmdb.org/t/p/w300/8TszCQUjievKmO0i8eMpXQIQQSz.jpg'
},
{
    titulo: 'Bob s Burger: O Filme',
    descricao: 'Descrição do filme 11',
    imdb: 'tt7466442',
    imagem: 'https://image.tmdb.org/t/p/w300/h4NtdQn1Gm6wNLZDcCuasVPv3Oh.jpg'
},
{
    titulo: 'Uma Foto Antes de Morrer',
    descricao: 'Descrição do filme 12',
    imdb: 'tt8006426',
    imagem: 'https://image.tmdb.org/t/p/w300/tFV3QPG9NBjJChRWdBJWgtiTFLZ.jpg'
},
{
    titulo: 'A Viúva Negra',
    descricao: 'Descrição do filme 13',
    imdb: 'tt9272572',
    imagem: 'https://image.tmdb.org/t/p/w300/tGkpjxJ96EV0T7HiFkEt7C5h3ds.jpg'
},
{
    titulo: 'Tudo por Jojo',
    descricao: 'Descrição do filme 14',
    imdb: 'tt21044524',
    imagem: 'https://image.tmdb.org/t/p/w300/bwNP1sdvzpnoslaXqzSzxbCrL8d.jpg'
},
{
    titulo: 'Bastardoz',
    descricao: 'Descrição do filme 15',
    imdb: 'tt10127708',
    imagem: 'https://image.tmdb.org/t/p/w300/ac9cLKaSWBRtdOEFzOZkm2YnhUh.jpg'
},
{
    titulo: 'O Homem Ideal',
    descricao: 'Descrição do filme 16',
    imdb: 'tt13087796',
    imagem: 'https://image.tmdb.org/t/p/w300/aKPLFkztU3aXMUJ3R8GsnKO1lG8.jpg'
},
{
    titulo: 'Torn Hearts',
    descricao: 'Descrição do filme 17',
    imdb: 'tt15053518',
    imagem: 'https://image.tmdb.org/t/p/w300/w8dSAuMHUgx0lYSB6wAAURStcGM.jpg'
},
{
    titulo: 'Doula',
    descricao: 'Descrição do filme 18',
    imdb: 'tt14622542',
    imagem: 'https://image.tmdb.org/t/p/w300/j6cA486hZEEyqmy12D0YmOlJyqp.jpg'
},
{
    titulo: 'Resistência',
    descricao: 'Descrição do filme 19',
    imdb: 'tt6914122',
    imagem: 'https://image.tmdb.org/t/p/w300/jMPSL9R3TyGZC1lSItTDWqah89G.jpg'
},
{
    titulo: 'Elvis',
    descricao: 'Descrição do filme 20',
    imdb: 'tt3704428',
    imagem: 'https://image.tmdb.org/t/p/w300/4CYhJ9WNHIc1WRrQ5kYwBtmMvNB.jpg'
},
{
    titulo: 'O Parque dos Sonhos',
    descricao: 'Descrição do filme 21',
    imdb: 'tt6428676',
    imagem: 'https://image.tmdb.org/t/p/w300/sFZQeqiKvcqV45kTz3KDQV9tgAQ.jpg'
},
{
    titulo: 'Maria e João: O Conto das Bruxas',
    descricao: 'Descrição do filme 22',
    imdb: 'tt9086228',
    imagem: 'https://image.tmdb.org/t/p/w300/nxpfEaqtBmxisC7CKgCKYv6ST5m.jpg'
},
{
    titulo: 'Agente Oculto',
    descricao: 'Descrição do filme 23',
    imdb: 'tt1649418',
    imagem: 'https://image.tmdb.org/t/p/w300/1f10KUKW7KyNt8bF8NHmwbBQ9fs.jpg'
},
{
    titulo: 'Aventura em Duas Rodas',
    descricao: 'Descrição do filme 24',
    imdb: 'tt9671918',
    imagem: 'https://image.tmdb.org/t/p/w300/gVKYg7HseTtYFavutwC2mZJn8iO.jpg'
},
{
    titulo: 'O Preço da Sedução',
    descricao: 'Descrição do filme 1',
    imdb: 'tt5056842',
    imagem: 'https://image.tmdb.org/t/p/w300/5PhCJDL4jquPP23buc58vR9w1o2.jpg'
},
{
    titulo: 'Beavis e Butt-Head: Detonam o Universo',
    descricao: 'Descrição do filme 2',
    imdb: 'tt14145426',
    imagem: 'https://image.tmdb.org/t/p/w300/rVKMA2j8m8hWgsDyXOllXp8DsWI.jpg'
},
{
    titulo: 'Borrego - Saia Do Caminho',
    descricao: 'Descrição do filme 3',
    imdb: 'tt12676006',
    imagem: 'https://image.tmdb.org/t/p/w300/iNSa1kwVsOsfAHwopMLM7PnrDhU.jpg'
},
{
    titulo: 'Persuasão',
    descricao: 'Descrição do filme 4',
    imdb: 'tt13456318',
    imagem: 'https://image.tmdb.org/t/p/w300/2G6FSKMLlu2sZ9QfzsUWoLjBxgq.jpg'
},
{
    titulo: 'Z-O-M-B-I-E-S 3',
    descricao: 'Descrição do filme 5',
    imdb: 'tt14301252',
    imagem: 'https://image.tmdb.org/t/p/w300/vqzdv4nArhuZxd7il0boKaVxQMF.jpg'
},
{
    titulo: 'Che: O Argentino',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0892255',
    imagem: 'https://image.tmdb.org/t/p/w300/ekUpkM5tStkZuzpIzg77PbkG6SM.jpg'
},
{
    titulo: 'O Sol de Amalfi',
    descricao: 'Descrição do filme 7',
    imdb: 'tt15311262',
    imagem: 'https://image.tmdb.org/t/p/w300/6XmVuAanq5ZxYSz1WlWT9nnRLQI.jpg'
},
{
    titulo: 'Pitbull - Força Bruta',
    descricao: 'Descrição do filme 8',
    imdb: 'tt15205194',
    imagem: 'https://image.tmdb.org/t/p/w300/hwbw4Ng7dV9EBA136a3sNiFwVZw.jpg'
},
{
    titulo: 'Turma da Mônica: Lições',
    descricao: 'Descrição do filme 9',
    imdb: 'tt11674072',
    imagem: 'https://image.tmdb.org/t/p/w300/gzaLnQ2CctXaHqatSlRbSVp8Bh4.jpg'
},
{
    titulo: 'Vingadores: Guerra Infinita',
    descricao: 'Descrição do filme 10',
    imdb: 'tt4154756',
    imagem: 'https://image.tmdb.org/t/p/w300/89QTZmn34iwXYeCpVxhC9UrT8sX.jpg'
},
{
    titulo: 'As Namoradas do Papai',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0113442',
    imagem: 'https://image.tmdb.org/t/p/w300/riWtHDgE57j51mXQMFh6yUTd8xF.jpg'
},
{
    titulo: 'Flashpoint',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0992911',
    imagem: 'https://image.tmdb.org/t/p/w300/gc5bgm9RMl0XGF8BNVHqMwKSgx3.jpg'
},
{
    titulo: 'Lá Vem os Pais',
    descricao: 'Descrição do filme 13',
    imdb: 'tt6821012',
    imagem: 'https://image.tmdb.org/t/p/w300/rUWXKRKsbInckc8h5k6Tte8V8Zl.jpg'
},
{
    titulo: 'Pronto, Falei!',
    descricao: 'Descrição do filme 14',
    imdb: 'tt6948600',
    imagem: 'https://image.tmdb.org/t/p/w300/q5JErRcwd5BwhftO86U5OzLFpga.jpg'
},
{
    titulo: 'O Heroi',
    descricao: 'Descrição do filme 15',
    imdb: 'tt5655222',
    imagem: 'https://image.tmdb.org/t/p/w300/aFrws9jzXYG7Ezp6vh9dPjXO9AB.jpg'
},
{
    titulo: 'Doce Argumento',
    descricao: 'Descrição do filme 16',
    imdb: 'tt6744044',
    imagem: 'https://image.tmdb.org/t/p/w300/u9PG1LG0zLnl6QQxw4WoRJEroXF.jpg'
},
{
    titulo: 'Quase 18',
    descricao: 'Descrição do filme 17',
    imdb: 'tt1878870',
    imagem: 'https://image.tmdb.org/t/p/w300/sPm7pVVvTw8QYNbvnWU61tJvJZ6.jpg'
},
{
    titulo: 'A Espada Era a Lei',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0057546',
    imagem: 'https://image.tmdb.org/t/p/w300/d5rtXHSx4sXJKMJsLR7OUjryCHl.jpg'
},
{
    titulo: 'Uma Questão de Respeito',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0104573',
    imagem: 'https://image.tmdb.org/t/p/w300/eMCDtLlU62c7jXMJRD7TYKois6L.jpg'
},
{
    titulo: 'Os Garotos nas Árvores',
    descricao: 'Descrição do filme 20',
    imdb: 'tt3445580',
    imagem: 'https://image.tmdb.org/t/p/w300/nZzSxliBkqVqRaXKCnQVr59VcNt.jpg'
},
{
    titulo: 'Santo Time',
    descricao: 'Descrição do filme 21',
    imdb: 'tt6197484',
    imagem: 'https://image.tmdb.org/t/p/w300/8cDCr8rtQzshAXgxKOn1LdKNwQP.jpg'
},
{
    titulo: 'Perigo Para a Sociedade',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0107554',
    imagem: 'https://image.tmdb.org/t/p/w300/7KkHiZMvEdEZq2qrQX3kzYA7Off.jpg'
},
{
    titulo: 'Bruce Lee: A Jornada de um Guerreiro',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0297814',
    imagem: 'https://image.tmdb.org/t/p/w300/yvm10wHnOQaGl9a4X9KnDHaoJ8W.jpg'
},
{
    titulo: 'O Filme Looney, Looney, Looney do Pernalonga',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0082679',
    imagem: 'https://image.tmdb.org/t/p/w300/jLClJrQiJDr5997n5cAXmLSV9av.jpg'
},
{
    titulo: 'Ruas de Fogo',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0088194',
    imagem: 'https://image.tmdb.org/t/p/w300/kyZGS5fsfZgfk6aQMYcX4HodZ1z.jpg'
},
{
    titulo: 'Jogos de Guerra',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0086567',
    imagem: 'https://image.tmdb.org/t/p/w300/wp0pKfyNhAE2EgWapYWNl5Zm4v5.jpg'
},
{
    titulo: 'Quase Igual aos Outros',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0089393',
    imagem: 'https://image.tmdb.org/t/p/w300/tuIEasJEEJ25vuTTyTlYBcMvVhN.jpg'
},
{
    titulo: 'Asterix entre os Bretões',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0090667',
    imagem: 'https://image.tmdb.org/t/p/w300/stgc9FgwWQWpSD4HGr98O9ru3bc.jpg'
},
{
    titulo: 'Céu em Chamas',
    descricao: 'Descrição do filme 5',
    imdb: 'tt6157600',
    imagem: 'https://image.tmdb.org/t/p/w300/63mTxkeY9hsb9nFIUEiR2yBopuz.jpg'
},
{
    titulo: 'À Prova de Balas',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0115783',
    imagem: 'https://image.tmdb.org/t/p/w300/9Jdz2Kekifx5fFipZRDroPfmpyi.jpg'
},
{
    titulo: 'Nova York Sitiada',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0133952',
    imagem: 'https://image.tmdb.org/t/p/w300/hwRH4eeIA09RLaKo8F6LIBttQdn.jpg'
},
{
    titulo: 'Luna: Em Busca da Verdade',
    descricao: 'Descrição do filme 8',
    imdb: 'tt5089068',
    imagem: 'https://image.tmdb.org/t/p/w300/u8EAqDfUXzWsrx2QkHskuWjfL1Z.jpg'
},
{
    titulo: 'Amor à Distância',
    descricao: 'Descrição do filme 9',
    imdb: 'tt1322312',
    imagem: 'https://image.tmdb.org/t/p/w300/akg5i15Z0Q2Oxera5nKk9oycyIj.jpg'
},
{
    titulo: 'Sua Alteza',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1240982',
    imagem: 'https://image.tmdb.org/t/p/w300/uZjc2rrO62zsiNWJptPlLcHdXk8.jpg'
},
{
    titulo: 'A Culpa Não É do Carma',
    descricao: 'Descrição do filme 11',
    imdb: 'tt5433520',
    imagem: 'https://image.tmdb.org/t/p/w300/wIoZVRHq45toPmrUqzJoBGw4gLB.jpg'
},
{
    titulo: 'Mudbound: Lágrimas Sobre o Mississipi',
    descricao: 'Descrição do filme 12',
    imdb: 'tt2396589',
    imagem: 'https://image.tmdb.org/t/p/w300/2qEz0Jhc63DKoiJXY4SJh0ISQ5Q.jpg'
},
{
    titulo: 'Um Tira e Meio – A Nova Recruta',
    descricao: 'Descrição do filme 13',
    imdb: 'tt6212210',
    imagem: 'https://image.tmdb.org/t/p/w300/7oxV17djCcUE2xFgrL5YE7RedX.jpg'
},
{
    titulo: 'Conflitos Em Família',
    descricao: 'Descrição do filme 14',
    imdb: 'tt5737862',
    imagem: 'https://image.tmdb.org/t/p/w300/2J8VR4OecoqdCqjT3A9f01h6fZZ.jpg'
},
{
    titulo: 'Os Estranhos: Caçada Noturna',
    descricao: 'Descrição do filme 15',
    imdb: 'tt1285009',
    imagem: 'https://image.tmdb.org/t/p/w300/w81oy2uftuBwGb1Ncx0V4OOO27G.jpg'
},
{
    titulo: 'Tráfico de Mulheres',
    descricao: 'Descrição do filme 16',
    imdb: 'tt1720621',
    imagem: 'https://image.tmdb.org/t/p/w300/8aK2J9k73gUw0DcbO6RiCh3vHVE.jpg'
},
{
    titulo: 'Acrimônia',
    descricao: 'Descrição do filme 17',
    imdb: 'tt6063050',
    imagem: 'https://image.tmdb.org/t/p/w300/jsY1jFetFR5YgHfbejIAiRx65uT.jpg'
},
{
    titulo: 'O Grande Desafio',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0184526',
    imagem: 'https://image.tmdb.org/t/p/w300/8sSQVFmKhPq6wuArxY4u6yjNAqf.jpg'
},
{
    titulo: 'Gostos e Cores',
    descricao: 'Descrição do filme 19',
    imdb: 'tt6290418',
    imagem: 'https://image.tmdb.org/t/p/w300/yv1R5PQRXN87e10F3RARysFAQg0.jpg'
},
{
    titulo: 'Além das Águas',
    descricao: 'Descrição do filme 20',
    imdb: 'tt4838486',
    imagem: 'https://image.tmdb.org/t/p/w300/gs7YE1aQRQLPl1U4EyLcAOiKhZK.jpg'
},
{
    titulo: 'Free Willy 3 - O Resgate',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0119152',
    imagem: 'https://image.tmdb.org/t/p/w300/9ohHn7XETI1stieBJ8MHsYsJYZs.jpg'
},
{
    titulo: 'Free Willy 2 - A Aventura Continua',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0113114',
    imagem: 'https://image.tmdb.org/t/p/w300/44l5WNsywfEaZVz7JbcRYUXTpr6.jpg'
},
{
    titulo: 'Busca Frenética',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0095174',
    imagem: 'https://image.tmdb.org/t/p/w300/aghOMI09eDrfOoZhcaTp3uNl5l9.jpg'
},
{
    titulo: 'A Casa Amaldiçoada',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0171363',
    imagem: 'https://image.tmdb.org/t/p/w300/mCLRN9c3n4OAxmKxucZLDpeFB2Y.jpg'
},
{
    titulo: 'Uma Escola Muito Doida',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0116531',
    imagem: 'https://image.tmdb.org/t/p/w300/zIYTFqcgjA9z3xH5HC9HtfgpYSP.jpg'
},
{
    titulo: 'Um Filho que Caiu do Céu',
    descricao: 'Descrição do filme 2',
    imdb: 'tt6556552',
    imagem: 'https://image.tmdb.org/t/p/w300/3e27vZy2nGzB5Yt0hLBMhN0cPv7.jpg'
},
{
    titulo: 'Duro de Espiar',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0117723',
    imagem: 'https://image.tmdb.org/t/p/w300/vXC16Yo38e0v3G34cxSk2fzRG2L.jpg'
},
{
    titulo: 'Drácula 2000',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0219653',
    imagem: 'https://image.tmdb.org/t/p/w300/4Jo94Hps0iKI4T94Sf3kCHxSV5O.jpg'
},
{
    titulo: 'Mais Que o Acaso',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0186894',
    imagem: 'https://image.tmdb.org/t/p/w300/kA2MhMSwcXQLll54UGH2mC8mTAc.jpg'
},
{
    titulo: 'Aterrissagem de Alto Risco',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0127557',
    imagem: 'https://image.tmdb.org/t/p/w300/rpGE3rSkRdojThvzBXHq7Efknvr.jpg'
},
{
    titulo: 'Terror Profundo',
    descricao: 'Descrição do filme 7',
    imdb: 'tt4126568',
    imagem: 'https://image.tmdb.org/t/p/w300/zdHXRQbVJvG20EWWwwLRH5MElnN.jpg'
},
{
    titulo: 'No Amor e na Guerra',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0116621',
    imagem: 'https://image.tmdb.org/t/p/w300/6qd24LqKSXdQVjzJpZiSbR35U61.jpg'
},
{
    titulo: 'Planos Diabólicos',
    descricao: 'Descrição do filme 9',
    imdb: 'tt5589212',
    imagem: 'https://image.tmdb.org/t/p/w300/p52n7VdIhB7TlPDBL9FEBZ6cjc3.jpg'
},
{
    titulo: 'Hot Seat',
    descricao: 'Descrição do filme 10',
    imdb: 'tt15690300',
    imagem: 'https://image.tmdb.org/t/p/w300/TUmSO5EPIZAfRSOEjmbrgbTw8i.jpg'
},
{
    titulo: 'Ligações Perigosas',
    descricao: 'Descrição do filme 11',
    imdb: 'tt15548032',
    imagem: 'https://image.tmdb.org/t/p/w300/aXgXTdylM27Fq2N0IYhHXA4wI8b.jpg'
},
{
    titulo: 'The Colour Room',
    descricao: 'Descrição do filme 12',
    imdb: 'tt13468436',
    imagem: 'https://image.tmdb.org/t/p/w300/i87PyzMOpYYLVtrcFWzErcOOPZT.jpg'
},
{
    titulo: 'Não Tenha Medo do Escuro',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1270761',
    imagem: 'https://image.tmdb.org/t/p/w300/c7uCVXn8DSGYUapLDlYuBLlGs7S.jpg'
},
{
    titulo: 'Os Escravos de Satanás',
    descricao: 'Descrição do filme 14',
    imdb: 'tt7076834',
    imagem: 'https://image.tmdb.org/t/p/w300/obTigUyIJwpgRU4kDpKyzVde0fs.jpg'
},
{
    titulo: 'O Sacrifício',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0450345',
    imagem: 'https://image.tmdb.org/t/p/w300/oDBDJFkia6nhWLk8y5JNiS45ybw.jpg'
},
{
    titulo: 'Pânico na Ilha',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0331953',
    imagem: 'https://image.tmdb.org/t/p/w300/pJ4Zli3BgJc8gWETHDdaEwkjLbj.jpg'
},
{
    titulo: 'As Incríveis Histórias de Max e Léon',
    descricao: 'Descrição do filme 17',
    imdb: 'tt5091538',
    imagem: 'https://image.tmdb.org/t/p/w300/hilUQdHZXAOumnWHidQ4LDHtvh3.jpg'
},
{
    titulo: 'Pai do Ano',
    descricao: 'Descrição do filme 18',
    imdb: 'tt7256866',
    imagem: 'https://image.tmdb.org/t/p/w300/gSzFZXfSrszRwqhBmyjWif8Bhm5.jpg'
},
{
    titulo: 'Pato Pato Ganso',
    descricao: 'Descrição do filme 19',
    imdb: 'tt4940416',
    imagem: 'https://image.tmdb.org/t/p/w300/lDk0dvwjBi6bGBOqgOXc5W5T7Qk.jpg'
},
{
    titulo: 'As Meninas Superpoderosas: O Filme',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0289408',
    imagem: 'https://image.tmdb.org/t/p/w300/fYQIXrPHtYSSBm9IQkCuWaWEBVo.jpg'
},
{
    titulo: 'Komodo vs. Cobra',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0455583',
    imagem: 'https://image.tmdb.org/t/p/w300/fbFJADwCzELCEzz4IbY4Rox4tDs.jpg'
},
{
    titulo: 'Despertar de um Pesadelo',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0116908',
    imagem: 'https://image.tmdb.org/t/p/w300/vLHtlBAVC633xbII1fpBF23Kykx.jpg'
},
{
    titulo: 'Vingança',
    descricao: 'Descrição do filme 23',
    imdb: 'tt6738136',
    imagem: 'https://image.tmdb.org/t/p/w300/tUMY2i0e0KUfslvjBBnRYGBxhL4.jpg'
},
{
    titulo: 'Sobrevivente',
    descricao: 'Descrição do filme 24',
    imdb: 'tt2944198',
    imagem: 'https://image.tmdb.org/t/p/w300/i87ZhhIXO4Z15np1lhGNQXLzwBS.jpg'
},
{
    titulo: 'As Aventuras de Brigsby Bear',
    descricao: 'Descrição do filme 1',
    imdb: 'tt5805752',
    imagem: 'https://image.tmdb.org/t/p/w300/xIPgbuGcorPbOs2l3dVyaQbDboW.jpg'
},
{
    titulo: 'Cyborg X',
    descricao: 'Descrição do filme 2',
    imdb: 'tt3899262',
    imagem: 'https://image.tmdb.org/t/p/w300/83hXrNOZTnEEhDnHorjDBowWvxd.jpg'
},
{
    titulo: 'Olá, Adeus e Tudo Mais',
    descricao: 'Descrição do filme 3',
    imdb: 'tt4181158',
    imagem: 'https://image.tmdb.org/t/p/w300/5ylwAm72InwqOcr32nwk9hlNz05.jpg'
},
{
    titulo: 'Pecados Intímos',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0404203',
    imagem: 'https://image.tmdb.org/t/p/w300/d3cmHZs0J7Cen8N1vVdCjUjew4k.jpg'
},
{
    titulo: 'Invasão de Domicílio',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0443456',
    imagem: 'https://image.tmdb.org/t/p/w300/tlgwcmX2hWmOfBzMiWdmtpsL5fc.jpg'
},
{
    titulo: 'Magnólia',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0175880',
    imagem: 'https://image.tmdb.org/t/p/w300/uq2u8HgtLFJkjNq2kHb2jvipIPT.jpg'
},
{
    titulo: 'A Mansão',
    descricao: 'Descrição do filme 7',
    imdb: 'tt7029854',
    imagem: 'https://image.tmdb.org/t/p/w300/sWLByXVaPaxxqX0wnCPAm9AccIq.jpg'
},
{
    titulo: 'Eu Aceito... Até Desistir',
    descricao: 'Descrição do filme 8',
    imdb: 'tt3234084',
    imagem: 'https://image.tmdb.org/t/p/w300/fF1ezP8NSxApAI97JUcMDwfNSn5.jpg'
},
{
    titulo: 'Um Espírito Baixou em Mim',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0086873',
    imagem: 'https://image.tmdb.org/t/p/w300/psPV28pJfFXN3RNxPe2CPkZwUMl.jpg'
},
{
    titulo: 'O Segredo do Céu',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0460883',
    imagem: 'https://image.tmdb.org/t/p/w300/7fnH73K2Do53AfArYlqNm5YQlht.jpg'
},
{
    titulo: 'Memórias de um Assassino',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0353969',
    imagem: 'https://image.tmdb.org/t/p/w300/at0y2qjWdxUzIGTjN6Juqx8zcYU.jpg'
},
{
    titulo: 'Zoando na Escola',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0462346',
    imagem: 'https://image.tmdb.org/t/p/w300/65bU89G21WunKHpHXTX8erJt6tx.jpg'
},
{
    titulo: 'Apenas um Show: O Filme',
    descricao: 'Descrição do filme 13',
    imdb: 'tt4920274',
    imagem: 'https://image.tmdb.org/t/p/w300/p44RoW4naoE1nlSGOqqT0J2pc09.jpg'
},
{
    titulo: 'Toque de Mestre',
    descricao: 'Descrição do filme 14',
    imdb: 'tt2039345',
    imagem: 'https://image.tmdb.org/t/p/w300/1nKeU25td7aKK65KRnCS7zaqTDu.jpg'
},
{
    titulo: 'Sem Ar',
    descricao: 'Descrição do filme 15',
    imdb: 'tt2091478',
    imagem: 'https://image.tmdb.org/t/p/w300/gu401onHuiZlp4ZTD4Fzj9d80zU.jpg'
},
{
    titulo: 'Prazeres Mortais',
    descricao: 'Descrição do filme 16',
    imdb: 'tt1850397',
    imagem: 'https://image.tmdb.org/t/p/w300/k3LcA2rr3mHWpqZlUezClPnvpoO.jpg'
},
{
    titulo: 'Hacker',
    descricao: 'Descrição do filme 17',
    imdb: 'tt2717822',
    imagem: 'https://image.tmdb.org/t/p/w300/20M7sHjKS0MvuJEMV66tJFdz8YC.jpg'
},
{
    titulo: 'Força Maior',
    descricao: 'Descrição do filme 18',
    imdb: 'tt2121382',
    imagem: 'https://image.tmdb.org/t/p/w300/zNmdJn2A8V9UOUk6FLpK8yMxZjD.jpg'
},
{
    titulo: 'Irmãos Desastre',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1571249',
    imagem: 'https://image.tmdb.org/t/p/w300/lDygTdg1KlrVJVzqsFL515uGzSe.jpg'
},
{
    titulo: 'A Criança Escondida',
    descricao: 'Descrição do filme 20',
    imdb: 'tt2216856',
    imagem: 'https://image.tmdb.org/t/p/w300/weNwaa6GYC2UKUnggzEdNidQi7X.jpg'
},
{
    titulo: 'Tio Drew',
    descricao: 'Descrição do filme 21',
    imdb: 'tt7334528',
    imagem: 'https://image.tmdb.org/t/p/w300/3CDV8aXmYyxI5kUtQXMdBvQKNvp.jpg'
},
{
    titulo: 'O Massacre do Moinho de Vento',
    descricao: 'Descrição do filme 22',
    imdb: 'tt2923088',
    imagem: 'https://image.tmdb.org/t/p/w300/jlmbMnrzxkFaSa8UnHefY4tNuOp.jpg'
},
{
    titulo: 'A Guerra de Hart',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0251114',
    imagem: 'https://image.tmdb.org/t/p/w300/hePkUbOc3d0uV6Nt576Hvs9m8kK.jpg'
},
{
    titulo: 'A Sétima Alma',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0872230',
    imagem: 'https://image.tmdb.org/t/p/w300/8tAJocbUDJduVv0G3wcbERtG7ys.jpg'
},
{
    titulo: 'Você Já Esteve Na Lua?',
    descricao: 'Descrição do filme 1',
    imdb: 'tt3907858',
    imagem: 'https://image.tmdb.org/t/p/w300/oeGGfRWek8NE5hJ1GShnWM8mQ0M.jpg'
},
{
    titulo: 'Animal',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2996684',
    imagem: 'https://image.tmdb.org/t/p/w300/jR1nY5Cn4lpFpbsteGRTJtGDaVS.jpg'
},
{
    titulo: 'Rota Mortal: Não Olhe Para Trás',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0995863',
    imagem: 'https://image.tmdb.org/t/p/w300/kXe8PPETH134KOWYW50OrwG6nPH.jpg'
},
{
    titulo: 'Casa Escura',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1385543',
    imagem: 'https://image.tmdb.org/t/p/w300/Y0WxJCKH2Hgr7yrGtN97kgo9ne.jpg'
},
{
    titulo: 'Paixão',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1658816',
    imagem: 'https://image.tmdb.org/t/p/w300/pNmMKUsdS8OqaTMNtKINYLIkIvj.jpg'
},
{
    titulo: 'O Guardião de Lincoln',
    descricao: 'Descrição do filme 6',
    imdb: 'tt2034098',
    imagem: 'https://image.tmdb.org/t/p/w300/cTIhaH0hkazEsnoy22QFKLbGrGc.jpg'
},
{
    titulo: 'Antes do Amanhecer',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0112471',
    imagem: 'https://image.tmdb.org/t/p/w300/fbVO1qBOt3jiWQTJpwHvSMUT0lf.jpg'
},
{
    titulo: 'O Cerco de Jadotville',
    descricao: 'Descrição do filme 8',
    imdb: 'tt3922798',
    imagem: 'https://image.tmdb.org/t/p/w300/9ifoXOheTmTinRB3Gotwbc3zF1X.jpg'
},
{
    titulo: 'Bad Ass 3: Dois Durões em Bayou',
    descricao: 'Descrição do filme 9',
    imdb: 'tt3525346',
    imagem: 'https://image.tmdb.org/t/p/w300/q65L3VruvaRDNJQHcQw8w4488ov.jpg'
},
{
    titulo: 'Divórcio',
    descricao: 'Descrição do filme 10',
    imdb: 'tt5813948',
    imagem: 'https://image.tmdb.org/t/p/w300/zOI81CTgr1ZkDR62RFOTu6mtFrv.jpg'
},
{
    titulo: 'Eu Te Amo, Beth Cooper',
    descricao: 'Descrição do filme 11',
    imdb: 'tt1032815',
    imagem: 'https://image.tmdb.org/t/p/w300/pzn7Dud5qTZitgd03XUTw0YB6Lp.jpg'
},
{
    titulo: 'Lar Doce Inferno',
    descricao: 'Descrição do filme 12',
    imdb: 'tt2802136',
    imagem: 'https://image.tmdb.org/t/p/w300/fpBzu5ekoaDlzr1I6LO5ertxJkn.jpg'
},
{
    titulo: 'A Árvore da Maldição',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0099710',
    imagem: 'https://image.tmdb.org/t/p/w300/b43ttjvm9chvwMVloLR9mDVOLAu.jpg'
},
{
    titulo: 'A Criatura do Cemitério',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0099697',
    imagem: 'https://image.tmdb.org/t/p/w300/sTba2c5bRMzAxmLEE8qyNq3jUvG.jpg'
},
{
    titulo: 'Ligados Pelo Amor',
    descricao: 'Descrição do filme 15',
    imdb: 'tt2205697',
    imagem: 'https://image.tmdb.org/t/p/w300/gB7LZHirRX8VbDixkmk32uXxZSN.jpg'
},
{
    titulo: 'O Silêncio de Melinda',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0378793',
    imagem: 'https://image.tmdb.org/t/p/w300/jb8dNqSM2Cwpf5Tv6SbRv6WbXAW.jpg'
},
{
    titulo: 'Justiça Vermelha',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0119994',
    imagem: 'https://image.tmdb.org/t/p/w300/eWpjUaiXy12TyPNWcF4NnMFQNTP.jpg'
},
{
    titulo: 'Anjos Rebeldes',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0114194',
    imagem: 'https://image.tmdb.org/t/p/w300/4KJs2jViXLEjlGcqB9xZSfHzVCJ.jpg'
},
{
    titulo: 'Anjos Rebeldes 2',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0118643',
    imagem: 'https://image.tmdb.org/t/p/w300/3bgUG9Lf4FcTpia93qu5oS9XzK6.jpg'
},
{
    titulo: 'Anjos Rebeldes 3: O Ascendente',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0183678',
    imagem: 'https://image.tmdb.org/t/p/w300/iY1b9JXPGuPvXyIlLnnj3fWUxnK.jpg'
},
{
    titulo: 'Profecia: A Guardiã do Destino',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0365658',
    imagem: 'https://image.tmdb.org/t/p/w300/oqctDFTbDW1Df8Mb3dQ0Wt85Ho3.jpg'
},
{
    titulo: 'Profecia: Renegados',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0439771',
    imagem: 'https://image.tmdb.org/t/p/w300/afw0gOt9akTGnMA69fSIpxHUq1Q.jpg'
},
{
    titulo: 'Um Fim de Semana Diferente',
    descricao: 'Descrição do filme 23',
    imdb: 'tt4210080',
    imagem: 'https://image.tmdb.org/t/p/w300/dpbMAriV0NX97L4GpeKVBG30ZCZ.jpg'
},
{
    titulo: 'A Marca da Pantera',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0083722',
    imagem: 'https://image.tmdb.org/t/p/w300/2sT0uybIe6m0mOLo7GyMTtNjVPO.jpg'
},
{
    titulo: 'O Natal de Dennis o Pimentinha',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0918511',
    imagem: 'https://image.tmdb.org/t/p/w300/1MEnonlDjYqgOkq2x8eONQBNsYT.jpg'
},
{
    titulo: 'Minotauro',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0415160',
    imagem: 'https://image.tmdb.org/t/p/w300/4IKsKXJwtX4JhoGu0zbrA5ZQuWY.jpg'
},
{
    titulo: '96 minutos',
    descricao: 'Descrição do filme 3',
    imdb: 'tt1641385',
    imagem: 'https://image.tmdb.org/t/p/w300/39FwN8IVp8y46KJ6VjA8oFY8e1o.jpg'
},
{
    titulo: 'A Visita',
    descricao: 'Descrição do filme 4',
    imdb: 'tt3567288',
    imagem: 'https://image.tmdb.org/t/p/w300/zRjwHqHG36ZZ96PAuDNFWwaFVQy.jpg'
},
{
    titulo: 'O Garoto Sombrio',
    descricao: 'Descrição do filme 5',
    imdb: 'tt2443822',
    imagem: 'https://image.tmdb.org/t/p/w300/g3dg7cblyTTx7gam6pk559z3IXs.jpg'
},
{
    titulo: 'Tara Maldita',
    descricao: 'Descrição do filme 6',
    imdb: 'tt4823992',
    imagem: 'https://image.tmdb.org/t/p/w300/mag40mAog0snZhqdXmCIn0Fgg0s.jpg'
},
{
    titulo: 'Cujo',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0085382',
    imagem: 'https://image.tmdb.org/t/p/w300/9YB6GOozuJpDqlBR1kLEnwAILm9.jpg'
},
{
    titulo: 'Festival Sangrento',
    descricao: 'Descrição do filme 8',
    imdb: 'tt7208564',
    imagem: 'https://image.tmdb.org/t/p/w300/oglP0iKN7PXXzPny7jEuPqHIczg.jpg'
},
{
    titulo: 'Capitão Orgazmo',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0124819',
    imagem: 'https://image.tmdb.org/t/p/w300/irvFBOc33CHsioU6hqcu8ExymEa.jpg'
},
{
    titulo: 'Zeroville: A Vida em Hollywood',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1881109',
    imagem: 'https://image.tmdb.org/t/p/w300/o1tA9jpbjPLSCuIipJj6PLg0oGG.jpg'
},
{
    titulo: 'Cooties: A Epidemia',
    descricao: 'Descrição do filme 11',
    imdb: 'tt2490326',
    imagem: 'https://image.tmdb.org/t/p/w300/cDbclzPox0H0dn5nq1O9rcJQcEM.jpg'
},
{
    titulo: 'Tripla Ameaça',
    descricao: 'Descrição do filme 12',
    imdb: 'tt6643972',
    imagem: 'https://image.tmdb.org/t/p/w300/kRbg3j9VDTjVIYt73f8IfjzxMyk.jpg'
},
{
    titulo: 'A Fera do Mar',
    descricao: 'Descrição do filme 13',
    imdb: 'tt9288046',
    imagem: 'https://image.tmdb.org/t/p/w300/5KBOy36wOAkAorpvHwvzEwQdJeR.jpg'
},
{
    titulo: 'O Dia Depois de Amanhã',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0319262',
    imagem: 'https://image.tmdb.org/t/p/w300/AeTqUixVRlB0oS6JVgjCxLGvwls.jpg'
},
{
    titulo: 'Duro na Queda',
    descricao: 'Descrição do filme 15',
    imdb: 'tt10022974',
    imagem: 'https://image.tmdb.org/t/p/w300/qvzcwPg6ukHugArAp9XeBvaz58.jpg'
},
{
    titulo: 'Adeus, Idiotas',
    descricao: 'Descrição do filme 16',
    imdb: 'tt10196398',
    imagem: 'https://image.tmdb.org/t/p/w300/gCd2QrRblOqAynklIjKskDenv8J.jpg'
},
{
    titulo: 'Te Peguei!',
    descricao: 'Descrição do filme 17',
    imdb: 'tt2854926',
    imagem: 'https://image.tmdb.org/t/p/w300/gI6zwlVk1Bu3FnkcDkCYYHsBhTz.jpg'
},
{
    titulo: 'Orca: A Baleia Assassina',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0076504',
    imagem: 'https://image.tmdb.org/t/p/w300/sPPE5rdxtv3yF4a9HkIyRVHV8Gp.jpg'
},
{
    titulo: 'Natureza Assassina',
    descricao: 'Descrição do filme 19',
    imdb: 'tt7458872',
    imagem: 'https://image.tmdb.org/t/p/w300/2lOVsC49XHBehKgvCq4BnvGwjFZ.jpg'
},
{
    titulo: 'A Rota de Colisão',
    descricao: 'Descrição do filme 20',
    imdb: 'tt2012011',
    imagem: 'https://image.tmdb.org/t/p/w300/fLR1XII83u0zMPcW5sSR3XBxwYC.jpg'
},
{
    titulo: 'Contaminação',
    descricao: 'Descrição do filme 21',
    imdb: 'tt1235448',
    imagem: 'https://image.tmdb.org/t/p/w300/7IRsVCzpDHtrwY4VCdlTj5hHyJR.jpg'
},
{
    titulo: 'Crônicas da Tribo Fantasma',
    descricao: 'Descrição do filme 22',
    imdb: 'tt4819498',
    imagem: 'https://image.tmdb.org/t/p/w300/sWuVJpOWNM0UVD0bGwbLZTzu294.jpg'
},
{
    titulo: 'Duro de Matar: Um Bom Dia para Morrer',
    descricao: 'Descrição do filme 23',
    imdb: 'tt1606378',
    imagem: 'https://image.tmdb.org/t/p/w300/qlBdUUjm7Q5CMyv5yRNNhfnydVd.jpg'
},
{
    titulo: 'Duro de Matar 4.0',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0337978',
    imagem: 'https://image.tmdb.org/t/p/w300/fjvKqLHjnUm2PxVHjhQ8FLbInbl.jpg'
},
{
    titulo: 'Duro de Matar: A Vingança',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0112864',
    imagem: 'https://image.tmdb.org/t/p/w300/j9Gdu7UEMLDnobLTKybARFVOvDh.jpg'
},
{
    titulo: 'Duro de Matar',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0095016',
    imagem: 'https://image.tmdb.org/t/p/w300/rauTKnFle1sp4aXjtYgx4tCWNiK.jpg'
},
{
    titulo: 'Duro de Matar 2',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0099423',
    imagem: 'https://image.tmdb.org/t/p/w300/z5uiLFzjgeYhnpHmBlFg7s1YHwp.jpg'
},
{
    titulo: 'Boneco do Mal',
    descricao: 'Descrição do filme 4',
    imdb: 'tt3882082',
    imagem: 'https://image.tmdb.org/t/p/w300/q4T7U5uhuNsHQBpFF2iSfKOuhgX.jpg'
},
{
    titulo: 'Brahms: Boneco do Mal II',
    descricao: 'Descrição do filme 5',
    imdb: 'tt9173418',
    imagem: 'https://image.tmdb.org/t/p/w300/nIv88OjKOw7tLMTpjAS2HsZZU1X.jpg'
},
{
    titulo: 'Doce Vingança 3: A Vingança é Minha',
    descricao: 'Descrição do filme 6',
    imdb: 'tt4530884',
    imagem: 'https://image.tmdb.org/t/p/w300/2cqLnsT4yDWBSGte02iYkFNB009.jpg'
},
{
    titulo: 'Apenas Amigos',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0433400',
    imagem: 'https://image.tmdb.org/t/p/w300/7WaVwmwdRFvvaMpLN0oOrwx1Jyc.jpg'
},
{
    titulo: 'Apenas Diga Sim',
    descricao: 'Descrição do filme 8',
    imdb: 'tt12154638',
    imagem: 'https://image.tmdb.org/t/p/w300/mww6dIUvcyoaiIRJ6883jixJVPU.jpg'
},
{
    titulo: 'Apenas Nós',
    descricao: 'Descrição do filme 9',
    imdb: 'tt6493292',
    imagem: 'https://image.tmdb.org/t/p/w300/atdiJehj7P7tBL6Chk9J4dTbHe.jpg'
},
{
    titulo: 'Caça às Bruxas',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0479997',
    imagem: 'https://image.tmdb.org/t/p/w300/oNyEYVm295JdZXbRi40XcqjOs7G.jpg'
},
{
    titulo: 'O Elevador da Morte',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0247303',
    imagem: 'https://image.tmdb.org/t/p/w300/iFq2Jp3MQefzRPrMzUlLMa0vkDO.jpg'
},
{
    titulo: 'Pets Unidos',
    descricao: 'Descrição do filme 12',
    imdb: 'tt11276598',
    imagem: 'https://image.tmdb.org/t/p/w300/fPhPXOL1wN1OPTqoCCcLJnHbgyn.jpg'
},
{
    titulo: 'Um Espião e Meio',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1489889',
    imagem: 'https://image.tmdb.org/t/p/w300/4IG7rUmzM3pdZvWwBBLIwDfFVim.jpg'
},
{
    titulo: '71 Fragmentos de uma Cronologia do Acaso',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0109020',
    imagem: 'https://image.tmdb.org/t/p/w300/58ExwIi7DXnga2GzlLvZBEnzMlZ.jpg'
},
{
    titulo: 'O Arrebatamento',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0240732',
    imagem: 'https://image.tmdb.org/t/p/w300/3HIR38oxdp4Q3bRPn9VWPSBM3F9.jpg'
},
{
    titulo: 'Blade Runner: O Caçador de Andróides',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0083658',
    imagem: 'https://image.tmdb.org/t/p/w300/mNg0TQ0SGxtYSmqR9FkI2wHtC8Y.jpg'
},
{
    titulo: 'O Rei da Festa',
    descricao: 'Descrição do filme 17',
    imdb: 'tt11062632',
    imagem: 'https://image.tmdb.org/t/p/w300/58wdFd013l6bRjpViTv5PYy2EQ4.jpg'
},
{
    titulo: '7th & Union',
    descricao: 'Descrição do filme 18',
    imdb: 'tt12023002',
    imagem: 'https://image.tmdb.org/t/p/w300/14AKMCxtF11UlYXLyjmTP22vDtl.jpg'
},
{
    titulo: 'Beauty',
    descricao: 'Descrição do filme 19',
    imdb: 'tt11364112',
    imagem: 'https://image.tmdb.org/t/p/w300/yjAXHyMz0JZzYiQP7q1fT5kXLif.jpg'
},
{
    titulo: 'Unabomber: Terrorista',
    descricao: 'Descrição do filme 20',
    imdb: 'tt8128276',
    imagem: 'https://image.tmdb.org/t/p/w300/vuQorCeoBtR2hShbe8ECz0Oc3ad.jpg'
},
{
    titulo: 'Diversão a Três',
    descricao: 'Descrição do filme 21',
    imdb: 'tt7149336',
    imagem: 'https://image.tmdb.org/t/p/w300/tQqcjb3rNKvtltvtzihUQcg05XQ.jpg'
},
{
    titulo: 'Spree',
    descricao: 'Descrição do filme 22',
    imdb: 'tt11394332',
    imagem: 'https://image.tmdb.org/t/p/w300/m59Getcl7B2N9Na0XHHxpRza1go.jpg'
},
{
    titulo: 'A Princesa',
    descricao: 'Descrição do filme 23',
    imdb: 'tt13406136',
    imagem: 'https://image.tmdb.org/t/p/w300/kp6SsW7uwDYRxkqUysIHJYTZ3hV.jpg'
},
{
    titulo: 'Um Jogo Entre Amigos',
    descricao: 'Descrição do filme 24',
    imdb: 'tt11615616',
    imagem: 'https://image.tmdb.org/t/p/w300/fnu6j6uHctVJuGKIt3z3Dk7cWhI.jpg'
},
{
    titulo: 'Minha Vingança',
    descricao: 'Descrição do filme 1',
    imdb: 'tt11650226',
    imagem: 'https://image.tmdb.org/t/p/w300/yCc3nAORSMTOpIk2qAKLQA7gAVg.jpg'
},
{
    titulo: 'Beans - A Pequena Guerreira',
    descricao: 'Descrição do filme 2',
    imdb: 'tt11735544',
    imagem: 'https://image.tmdb.org/t/p/w300/ff2s9KdHxLGNj32ad7Fsy4eDMVl.jpg'
},
{
    titulo: 'Souvenir',
    descricao: 'Descrição do filme 3',
    imdb: 'tt6473982',
    imagem: 'https://image.tmdb.org/t/p/w300/5hkjitlE1m5a75UhURQUVCdMlN0.jpg'
},
{
    titulo: 'King Kong',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0024216',
    imagem: 'https://image.tmdb.org/t/p/w300/f7xKwGrG8iwhW2IzNJ5eL0mI7J7.jpg'
},
{
    titulo: 'Sob o Domínio do Mal',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0368008',
    imagem: 'https://image.tmdb.org/t/p/w300/2un9WXrDwhcsyhu5Y5VreyFz9Ot.jpg'
},
{
    titulo: 'Antes Que Eu Me Esqueça',
    descricao: 'Descrição do filme 6',
    imdb: 'tt6544318',
    imagem: 'https://image.tmdb.org/t/p/w300/dmqyKqjZIA6LpXTVOSCnWUIVGZh.jpg'
},
{
    titulo: 'Encontro de Amor',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0252076',
    imagem: 'https://image.tmdb.org/t/p/w300/4uK9nvLDNf2B9QZdaJIhWFJ60as.jpg'
},
{
    titulo: 'King Kong',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0074751',
    imagem: 'https://image.tmdb.org/t/p/w300/paYKhEwUaxKA05vmOfU7FlleTln.jpg'
},
{
    titulo: 'Ameaça Profunda',
    descricao: 'Descrição do filme 9',
    imdb: 'tt5774060',
    imagem: 'https://image.tmdb.org/t/p/w300/k56yNPnwRj2vLGV9os3h26Gii8P.jpg'
},
{
    titulo: 'Les Savates du bon Dieu',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0234663',
    imagem: 'https://image.tmdb.org/t/p/w300/zL30jakVOAip51JL5JV03zRmJWX.jpg'
},
{
    titulo: 'O Caçador e a Rainha do Gelo',
    descricao: 'Descrição do filme 11',
    imdb: 'tt2381991',
    imagem: 'https://image.tmdb.org/t/p/w300/zIkesM1c2MxRuGitGiGZ9pmis7g.jpg'
},
{
    titulo: 'Pai Nosso?',
    descricao: 'Descrição do filme 12',
    imdb: 'tt19704638',
    imagem: 'https://image.tmdb.org/t/p/w300/ezb0Sej5wZ4T0eJtj3eyxovVil8.jpg'
},
{
    titulo: 'A Mosca 2',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0097368',
    imagem: 'https://image.tmdb.org/t/p/w300/6HpZIDsTvYiDBvBQwfn2UXhAojd.jpg'
},
{
    titulo: 'A Mosca',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0091064',
    imagem: 'https://image.tmdb.org/t/p/w300/iItA02bR1oBFlI7w5qi7AndVvmt.jpg'
},
{
    titulo: 'Jogos Virtuais: O Início',
    descricao: 'Descrição do filme 15',
    imdb: 'tt8510324',
    imagem: 'https://image.tmdb.org/t/p/w300/maDJlKxWrf5xtzBMG6x31sI5yVH.jpg'
},
{
    titulo: 'O Mistério da Libélula',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0259288',
    imagem: 'https://image.tmdb.org/t/p/w300/vbe2lBON4rBa8Ph7RJDBEvUqD90.jpg'
},
{
    titulo: 'O Lago da Mort‪e‬',
    descricao: 'Descrição do filme 17',
    imdb: 'tt9272198',
    imagem: 'https://image.tmdb.org/t/p/w300/pcTq1gst6NH2RQZy5t8iWRIkvcD.jpg'
},
{
    titulo: 'E.T.: O Extraterrestre',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0083866',
    imagem: 'https://image.tmdb.org/t/p/w300/8j5igb0iuV9TYudw9SuMV5GT9K9.jpg'
},
{
    titulo: 'Carruagens de Fogo',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0082158',
    imagem: 'https://image.tmdb.org/t/p/w300/vMKanhAUoiH5s7UFHO1sIWyzJBY.jpg'
},
{
    titulo: 'Fica Comigo',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0164114',
    imagem: 'https://image.tmdb.org/t/p/w300/2POSaoZEyiPoT2wzALNjX8hFxT2.jpg'
},
{
    titulo: 'Brigada 49',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0349710',
    imagem: 'https://image.tmdb.org/t/p/w300/4NhoLDXG87WYMTL9uqVydRGGhmH.jpg'
},
{
    titulo: 'Hitchcock',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0975645',
    imagem: 'https://image.tmdb.org/t/p/w300/zlG4QzB00VM6QHUmRkKaboCOgat.jpg'
},
{
    titulo: 'O Sacrifício do Cervo Sagrado',
    descricao: 'Descrição do filme 23',
    imdb: 'tt5715874',
    imagem: 'https://image.tmdb.org/t/p/w300/xb52s7YrVQEusl4azCI3ItyWDIW.jpg'
},
{
    titulo: 'Tubarão-Piranha',
    descricao: 'Descrição do filme 24',
    imdb: 'tt3400060',
    imagem: 'https://image.tmdb.org/t/p/w300/3Xc4Z9b2tKCw7PAneXm5LcUxLB5.jpg'
},
{
    titulo: 'Conan, o Destruidor',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0087078',
    imagem: 'https://image.tmdb.org/t/p/w300/v7oGgmntwi8ZwVN0wId7yH1wmFT.jpg'
},
{
    titulo: 'Deixe-me Entrar',
    descricao: 'Descrição do filme 2',
    imdb: 'tt1228987',
    imagem: 'https://image.tmdb.org/t/p/w300/nLtskZmHPLRVRazLGXS7DWY5wtN.jpg'
},
{
    titulo: 'Paixão Bandida',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0116289',
    imagem: 'https://image.tmdb.org/t/p/w300/dFAdipnPo1LHWlZsHBiksg1Na5H.jpg'
},
{
    titulo: 'Encontro Marcado',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0119643',
    imagem: 'https://image.tmdb.org/t/p/w300/yWkHHaX04yCnmNBwHilh3jm0v9o.jpg'
},
{
    titulo: 'O Mestre Invencível',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0080179',
    imagem: 'https://image.tmdb.org/t/p/w300/5lc23qh7F0MWQJweFaUfk6rdLQE.jpg'
},
{
    titulo: 'Abraço',
    descricao: 'Descrição do filme 6',
    imdb: 'tt14177550',
    imagem: 'https://image.tmdb.org/t/p/w300/jCG7mH7RsJCGQVpPaCUzmpJhUgD.jpg'
},
{
    titulo: 'Estrelas Além do Tempo',
    descricao: 'Descrição do filme 7',
    imdb: 'tt4846340',
    imagem: 'https://image.tmdb.org/t/p/w300/6A1Jn0tooQYgi2C8sNz5OaIW98C.jpg'
},
{
    titulo: 'A Rede',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0113957',
    imagem: 'https://image.tmdb.org/t/p/w300/cRb3PYrt3YvCsi9FsGpq61FeDZt.jpg'
},
{
    titulo: 'Contrabando',
    descricao: 'Descrição do filme 9',
    imdb: 'tt1524137',
    imagem: 'https://image.tmdb.org/t/p/w300/bk39VBQJC1fPoN33wBeAtziYa0h.jpg'
},
{
    titulo: 'Greyhound - Na Mira do Inimigo',
    descricao: 'Descrição do filme 10',
    imdb: 'tt6048922',
    imagem: 'https://image.tmdb.org/t/p/w300/el7iWlogQ4Mv6A0qvBn4ZyxHGiW.jpg'
},
{
    titulo: 'A Rosa Venenosa',
    descricao: 'Descrição do filme 11',
    imdb: 'tt5862166',
    imagem: 'https://image.tmdb.org/t/p/w300/g0yhg61JGBjoWlqj9Lus3XiQA3i.jpg'
},
{
    titulo: 'O Preço do Talento',
    descricao: 'Descrição do filme 12',
    imdb: 'tt8151874',
    imagem: 'https://image.tmdb.org/t/p/w300/7YWcnsFPLqINqBtrAJDpbZEULbT.jpg'
},
{
    titulo: 'Amor²',
    descricao: 'Descrição do filme 13',
    imdb: 'tt13846542',
    imagem: 'https://image.tmdb.org/t/p/w300/9WaHDLUB8p03Cd6pYGnW4jZDYVX.jpg'
},
{
    titulo: 'Super Urso: Um Resgate na Cidade Grande',
    descricao: 'Descrição do filme 14',
    imdb: 'tt9074406',
    imagem: 'https://image.tmdb.org/t/p/w300/mOQEn51mD518IXuILNWezEwyOAE.jpg'
},
{
    titulo: 'Doutor Gama',
    descricao: 'Descrição do filme 15',
    imdb: 'tt9815156',
    imagem: 'https://image.tmdb.org/t/p/w300/rnQZz5SAHMB6DSEhM9bSZ6DdSw6.jpg'
},
{
    titulo: 'Vovó... Zona',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0208003',
    imagem: 'https://image.tmdb.org/t/p/w300/sHQZPIKgePGNWO8Sj41OfAvGx11.jpg'
},
{
    titulo: 'Vovó... Zona 2',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0421729',
    imagem: 'https://image.tmdb.org/t/p/w300/20dnQ6NRLFYOCldykWBMJRtRL19.jpg'
},
{
    titulo: 'Vovó... Zona 3: Tal Pai, Tal Filho',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1464174',
    imagem: 'https://image.tmdb.org/t/p/w300/cpGNXhl0zLAd8zeVIbtRPvDoNQm.jpg'
},
{
    titulo: 'O Menino Que Matou Meus Pais',
    descricao: 'Descrição do filme 19',
    imdb: 'tt10975604',
    imagem: 'https://image.tmdb.org/t/p/w300/rZDEY4IztUVky6hEjGFfqKE4hiu.jpg'
},
{
    titulo: 'Starman - O Homem das Estrelas',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0088172',
    imagem: 'https://image.tmdb.org/t/p/w300/s6Ha8we9UyPr1bC9raH8LGWuVHA.jpg'
},
{
    titulo: 'O Inferno de Dante',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0118928',
    imagem: 'https://image.tmdb.org/t/p/w300/cXUuR4KhrmNsux41ju31rQ3EBmh.jpg'
},
{
    titulo: 'A Centopéia Humana',
    descricao: 'Descrição do filme 22',
    imdb: 'tt1467304',
    imagem: 'https://image.tmdb.org/t/p/w300/f969yH5iuSAh2IuKLik9c2iFdHp.jpg'
},
{
    titulo: 'A Centopéia Humana 2',
    descricao: 'Descrição do filme 23',
    imdb: 'tt1530509',
    imagem: 'https://image.tmdb.org/t/p/w300/2cMTX2BQVJDZfFlnPL5dDstmLfz.jpg'
},
{
    titulo: 'A Centopéia Humana 3 (Sequência Final)',
    descricao: 'Descrição do filme 24',
    imdb: 'tt1883367',
    imagem: 'https://image.tmdb.org/t/p/w300/xUk5AGcGvybPBvvMqrDPbAFAknD.jpg'
},
{
    titulo: 'Robin Hood: A Origem',
    descricao: 'Descrição do filme 1',
    imdb: 'tt4532826',
    imagem: 'https://image.tmdb.org/t/p/w300/aGkgDTOfgiXUIWC52tjFUZnzrWZ.jpg'
},
{
    titulo: 'A Marca da Forca',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0061747',
    imagem: 'https://image.tmdb.org/t/p/w300/nASOz9NuLD3hHoB0ku9shjFal78.jpg'
},
{
    titulo: 'Um Milhão de Maneiras de Pegar na Pistola',
    descricao: 'Descrição do filme 3',
    imdb: 'tt2557490',
    imagem: 'https://image.tmdb.org/t/p/w300/h6TkeOXTOPecHk7E59Lk3SqENp0.jpg'
},
{
    titulo: 'A Noite Amarela',
    descricao: 'Descrição do filme 4',
    imdb: 'tt10297530',
    imagem: 'https://image.tmdb.org/t/p/w300/ybemQDHeF12nlbBFUvIK2yUcBeU.jpg'
},
{
    titulo: 'Sintonizada em Você',
    descricao: 'Descrição do filme 5',
    imdb: 'tt10763618',
    imagem: 'https://image.tmdb.org/t/p/w300/uPXkdOyEUBfYsLWTZ0KQEo3z7HB.jpg'
},
{
    titulo: 'Ana',
    descricao: 'Descrição do filme 6',
    imdb: 'tt6865630',
    imagem: 'https://image.tmdb.org/t/p/w300/bYHxq8yNLTr7LZP2wBjpMPkW6EV.jpg'
},
{
    titulo: 'Procurada',
    descricao: 'Descrição do filme 7',
    imdb: 'tt3984356',
    imagem: 'https://image.tmdb.org/t/p/w300/zftgIV8k5PzFfumIq79a7qMapoH.jpg'
},
{
    titulo: 'Dr. Dolittle',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0118998',
    imagem: 'https://image.tmdb.org/t/p/w300/g84Os8iaDJNs51oNo1VtATGpbOV.jpg'
},
{
    titulo: 'Guerra contra Aliens',
    descricao: 'Descrição do filme 9',
    imdb: 'tt9562694',
    imagem: 'https://image.tmdb.org/t/p/w300/ri3zFC4E70j321qNPnO3LWYqTDU.jpg'
},
{
    titulo: 'Navio Fantasma',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0288477',
    imagem: 'https://image.tmdb.org/t/p/w300/urUo9sIRlFk8WfGkREZs9AEq3C3.jpg'
},
{
    titulo: 'A Face da Verdade',
    descricao: 'Descrição do filme 11',
    imdb: 'tt9477066',
    imagem: 'https://image.tmdb.org/t/p/w300/JAShb31Bbn03ZluMvbfmCHLZcR.jpg'
},
{
    titulo: 'Em Um Relacionamento Sério',
    descricao: 'Descrição do filme 12',
    imdb: 'tt6676028',
    imagem: 'https://image.tmdb.org/t/p/w300/87AoWAqeW0DH6xbpJaVm7RA2MEa.jpg'
},
{
    titulo: 'Aluguel de Pesadelo',
    descricao: 'Descrição do filme 13',
    imdb: 'tt11844684',
    imagem: 'https://image.tmdb.org/t/p/w300/8hzN2qCMShU8ZHp6DS3j1sOZtMu.jpg'
},
{
    titulo: 'Sou Sua Mulher',
    descricao: 'Descrição do filme 14',
    imdb: 'tt10243992',
    imagem: 'https://image.tmdb.org/t/p/w300/4mGyY20q4tI4N7PPet2M2SZPJi3.jpg'
},
{
    titulo: 'Minha Querida Nora',
    descricao: 'Descrição do filme 15',
    imdb: 'tt10965792',
    imagem: 'https://image.tmdb.org/t/p/w300/lTNI66alw3kkOdwHMyDSbpc7J5f.jpg'
},
{
    titulo: 'O Homem Que Matou Dom Quixote',
    descricao: 'Descrição do filme 16',
    imdb: 'tt1318517',
    imagem: 'https://image.tmdb.org/t/p/w300/nZ93dEu9747rsSOTA82hKmtOrn5.jpg'
},
{
    titulo: 'Somente o Mar Sabe',
    descricao: 'Descrição do filme 17',
    imdb: 'tt3319730',
    imagem: 'https://image.tmdb.org/t/p/w300/dcDSl251jGqrvqPTMNKRJBkV309.jpg'
},
{
    titulo: 'Rocky: Um Lutador',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0075148',
    imagem: 'https://image.tmdb.org/t/p/w300/wJ5rLUltZALHgM0hPUcnfrJehA7.jpg'
},
{
    titulo: 'Espada de Deus - A Última Cruzada',
    descricao: 'Descrição do filme 19',
    imdb: 'tt7240616',
    imagem: 'https://image.tmdb.org/t/p/w300/sasYy2Hl5uplpT7jwQflFDANZXm.jpg'
},
{
    titulo: 'Segundo em Comando',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0458471',
    imagem: 'https://image.tmdb.org/t/p/w300/yfClcix0iwBaAsm4QRPbmmFAcYk.jpg'
},
{
    titulo: 'Amigos, Sempre Amigos',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0101587',
    imagem: 'https://image.tmdb.org/t/p/w300/six4Cj5CjsGmZLFWHvFF7b3wctB.jpg'
},
{
    titulo: 'O Olho do Demônio',
    descricao: 'Descrição do filme 22',
    imdb: 'tt8028600',
    imagem: 'https://image.tmdb.org/t/p/w300/63w2O9hDcomg2M3M01yvVQn7IvW.jpg'
},
{
    titulo: 'Venom',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0428251',
    imagem: 'https://image.tmdb.org/t/p/w300/1XczSA5o33LKl7bIvief1GONaN4.jpg'
},
{
    titulo: 'Terror no Pântano 2',
    descricao: 'Descrição do filme 24',
    imdb: 'tt1270835',
    imagem: 'https://image.tmdb.org/t/p/w300/x9homOq5Znodbz7P16JTzskA8j1.jpg'
},
{
    titulo: 'Terror no Pântano',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0422401',
    imagem: 'https://image.tmdb.org/t/p/w300/gGPLHHndaEqDWqN1aRkzXZzzLo4.jpg'
},
{
    titulo: 'O Dono da Festa',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0283111',
    imagem: 'https://image.tmdb.org/t/p/w300/4rqZ0O4Rc6ckFYqx8ECD0LfchJj.jpg'
},
{
    titulo: 'Sexo, Música e Amor',
    descricao: 'Descrição do filme 3',
    imdb: 'tt5926990',
    imagem: 'https://image.tmdb.org/t/p/w300/2A0udDaAgWyJdZBYQC3aPZvjx9M.jpg'
},
{
    titulo: 'O Último Amor de Casanova',
    descricao: 'Descrição do filme 4',
    imdb: 'tt9105628',
    imagem: 'https://image.tmdb.org/t/p/w300/ggMja8I9ukADMNDZHQi9c9yfFtV.jpg'
},
{
    titulo: 'Do Fundo do Mar 3',
    descricao: 'Descrição do filme 5',
    imdb: 'tt11946300',
    imagem: 'https://image.tmdb.org/t/p/w300/azvgqitNO0kConxAP0TUjMlpBUI.jpg'
},
{
    titulo: 'Invasão Zumbi',
    descricao: 'Descrição do filme 6',
    imdb: 'tt5700672',
    imagem: 'https://image.tmdb.org/t/p/w300/QqHtwk0oHYed26zra9WGQGyBSm.jpg'
},
{
    titulo: 'Mentira Nada Inocente',
    descricao: 'Descrição do filme 7',
    imdb: 'tt9169036',
    imagem: 'https://image.tmdb.org/t/p/w300/csdwuOh4JoyE2IDrWERlar1cyev.jpg'
},
{
    titulo: 'O Demolidor',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0106697',
    imagem: 'https://image.tmdb.org/t/p/w300/2BjAYQNwmdIZF6XQQ2rLOrios1Q.jpg'
},
{
    titulo: 'Sob a Pele do Lobo',
    descricao: 'Descrição do filme 9',
    imdb: 'tt6347150',
    imagem: 'https://image.tmdb.org/t/p/w300/mPZbDQJ69OF5kCCxfFq9gyAOO7L.jpg'
},
{
    titulo: 'Garotas Selvagens',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0120890',
    imagem: 'https://image.tmdb.org/t/p/w300/g7S0bTOLcPDhQSX5MFIJ2znbvD6.jpg'
},
{
    titulo: 'Campo dos Sonhos',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0097351',
    imagem: 'https://image.tmdb.org/t/p/w300/dKMDWgdOVCMR11lH3RYB2VnR8YV.jpg'
},
{
    titulo: 'Sem Medo no Coração',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0107840',
    imagem: 'https://image.tmdb.org/t/p/w300/u3jDgXLcbYH5EfrzghJGwsZRVnZ.jpg'
},
{
    titulo: 'Relação Explosiva',
    descricao: 'Descrição do filme 13',
    imdb: 'tt2097307',
    imagem: 'https://image.tmdb.org/t/p/w300/kW7B4ZkfICmIONtfoMu2CJoFgzp.jpg'
},
{
    titulo: 'A Entrega',
    descricao: 'Descrição do filme 14',
    imdb: 'tt1600196',
    imagem: 'https://image.tmdb.org/t/p/w300/4Ne8Kjt2UGJkOABhs1LopDVAAju.jpg'
},
{
    titulo: 'Perseguido pelo Destino',
    descricao: 'Descrição do filme 15',
    imdb: 'tt2586120',
    imagem: 'https://image.tmdb.org/t/p/w300/5gNpMJW3zzYGsd3RZ3lHd1CUR3b.jpg'
},
{
    titulo: 'Os Intocáveis',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0094226',
    imagem: 'https://image.tmdb.org/t/p/w300/l0Xqmj5zW5QIw3437VkP1bFHMfr.jpg'
},
{
    titulo: 'Timecop: O Guardião do Tempo',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0111438',
    imagem: 'https://image.tmdb.org/t/p/w300/9icQABTwqS67xz6GCMaBOzBM1uX.jpg'
},
{
    titulo: 'O Caderno de Tomy',
    descricao: 'Descrição do filme 18',
    imdb: 'tt13353486',
    imagem: 'https://image.tmdb.org/t/p/w300/pNID1IWgWqEX1WF1X2N2wKb1le.jpg'
},
{
    titulo: 'Inimigo do Estado',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0120660',
    imagem: 'https://image.tmdb.org/t/p/w300/eRIi2QdEaG5UgguUALg8AiWX8Uh.jpg'
},
{
    titulo: 'Alma Perdida',
    descricao: 'Descrição do filme 20',
    imdb: 'tt1139668',
    imagem: 'https://image.tmdb.org/t/p/w300/6JOPIljha63K3PvSDUKKHubg8B5.jpg'
},
{
    titulo: 'A Hora do Descarrego',
    descricao: 'Descrição do filme 21',
    imdb: 'tt8009906',
    imagem: 'https://image.tmdb.org/t/p/w300/cxd2as1dyaO9845ic5PhC2l1EVZ.jpg'
},
{
    titulo: 'Chumbo Grosso',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0425112',
    imagem: 'https://image.tmdb.org/t/p/w300/bqT6jMz8J7vhZo7lMd6q5d8ijjd.jpg'
},
{
    titulo: 'Quatro Mulheres e Um Destino',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0109198',
    imagem: 'https://image.tmdb.org/t/p/w300/yGistxa7JImU9VXhVPclDzgoEeE.jpg'
},
{
    titulo: 'A Fúria do Justiceiro',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0102984',
    imagem: 'https://image.tmdb.org/t/p/w300/ebKQARbBprjhXHjYFbWmtRozMce.jpg'
},
{
    titulo: 'Fúria Silenciosa',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0084684',
    imagem: 'https://image.tmdb.org/t/p/w300/gxJm7yFKkbp5UojwOi71nNr3cmE.jpg'
},
{
    titulo: 'Fúria Sobre Rodas',
    descricao: 'Descrição do filme 2',
    imdb: 'tt1502404',
    imagem: 'https://image.tmdb.org/t/p/w300/tufE5dzOEnhygnhQQGy89uYOHzj.jpg'
},
{
    titulo: 'Um Dia de Fúria',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0106856',
    imagem: 'https://image.tmdb.org/t/p/w300/nPoVS7bic7MvWNTjBktml6B307S.jpg'
},
{
    titulo: 'Um Dia de Chuva em Nova York',
    descricao: 'Descrição do filme 4',
    imdb: 'tt7139936',
    imagem: 'https://image.tmdb.org/t/p/w300/qePheB15kmdODD85MVdmpztcABo.jpg'
},
{
    titulo: 'O Corvo: A Cidade dos Anjos',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0115986',
    imagem: 'https://image.tmdb.org/t/p/w300/ogT6xmdZKyRtPYf2IorWamuqaas.jpg'
},
{
    titulo: 'A Batalha das Ardenas - A Última Ofensiva de Hitler',
    descricao: 'Descrição do filme 6',
    imdb: 'tt5815078',
    imagem: 'https://image.tmdb.org/t/p/w300/brVPZyqIdTAScO8vg1Au8fbsd0b.jpg'
},
{
    titulo: 'Silverton: Cerco Fechado',
    descricao: 'Descrição do filme 7',
    imdb: 'tt18563148',
    imagem: 'https://image.tmdb.org/t/p/w300/mp2GAIoW9czkSlyZHlqii9Bc6i6.jpg'
},
{
    titulo: 'O Último Portal',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0142688',
    imagem: 'https://image.tmdb.org/t/p/w300/rQNb2PH4AbqOlwvK0KVpTAXmbJf.jpg'
},
{
    titulo: 'Devorados Vivos',
    descricao: 'Descrição do filme 9',
    imdb: 'tt1870527',
    imagem: 'https://image.tmdb.org/t/p/w300/4OLcbailKWlB0li18iD6fy6k5TL.jpg'
},
{
    titulo: 'O Sobrevivente',
    descricao: 'Descrição do filme 10',
    imdb: 'tt13694706',
    imagem: 'https://image.tmdb.org/t/p/w300/eGasiClJNhuQa80IZwwlV1Mb0Qm.jpg'
},
{
    titulo: 'A Casa Assombrada',
    descricao: 'Descrição do filme 11',
    imdb: 'tt3444206',
    imagem: 'https://image.tmdb.org/t/p/w300/l44fEd2NBJGhTTxZXv6ssVtQHqz.jpg'
},
{
    titulo: 'A Tribo II',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0811124',
    imagem: 'https://image.tmdb.org/t/p/w300/8unm1Ui0ypBLnsCwtiQvyK7CIQX.jpg'
},
{
    titulo: 'A Tribo',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1308169',
    imagem: 'https://image.tmdb.org/t/p/w300/aHwJWh2fuGkpCvQ4ca1KADMKmxw.jpg'
},
{
    titulo: 'Halloween',
    descricao: 'Descrição do filme 14',
    imdb: 'tt1502407',
    imagem: 'https://image.tmdb.org/t/p/w300/bXs0zkv2iGVViZEy78teg2ycDBm.jpg'
},
{
    titulo: 'Falcons em Jogo',
    descricao: 'Descrição do filme 15',
    imdb: 'tt4725842',
    imagem: 'https://image.tmdb.org/t/p/w300/2kaR8kqA0R9JAWkk8wMpIDWkiAi.jpg'
},
{
    titulo: 'Assim é a Vida',
    descricao: 'Descrição do filme 16',
    imdb: 'tt5699154',
    imagem: 'https://image.tmdb.org/t/p/w300/dJZpwgtQpy86s6TnUd6rGTDNUbU.jpg'
},
{
    titulo: 'O Grito da Morte',
    descricao: 'Descrição do filme 17',
    imdb: 'tt4282872',
    imagem: 'https://image.tmdb.org/t/p/w300/6GZpneQLCjbu7adbCXb1t3QeBNK.jpg'
},
{
    titulo: 'O Enviado Do Mal',
    descricao: 'Descrição do filme 18',
    imdb: 'tt6087426',
    imagem: 'https://image.tmdb.org/t/p/w300/dUHZRSD38BV5y0SSlpdRMfIxYHm.jpg'
},
{
    titulo: 'O Abrigo',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1535616',
    imagem: 'https://image.tmdb.org/t/p/w300/h3bXDyOEAze2BHbN68LlV3Z5kqS.jpg'
},
{
    titulo: 'Blackwood',
    descricao: 'Descrição do filme 20',
    imdb: 'tt2570414',
    imagem: 'https://image.tmdb.org/t/p/w300/uqQT68BJ2Skiuk5S2elmvAijmfJ.jpg'
},
{
    titulo: 'Praça Pública',
    descricao: 'Descrição do filme 21',
    imdb: 'tt6972372',
    imagem: 'https://image.tmdb.org/t/p/w300/xoOCw0fhOrZINnot9jHEonHYQch.jpg'
},
{
    titulo: 'Primeiro Ano',
    descricao: 'Descrição do filme 22',
    imdb: 'tt6690004',
    imagem: 'https://image.tmdb.org/t/p/w300/gsWLhZoCv31fSqB8rldFYs4t3Lc.jpg'
},
{
    titulo: 'Depois da Escuridão',
    descricao: 'Descrição do filme 23',
    imdb: 'tt2728784',
    imagem: 'https://image.tmdb.org/t/p/w300/v5pZrA9q4RM9KpLMen4WiM9MmKG.jpg'
},
{
    titulo: 'Sapatinho Vermelho e os Sete Anões',
    descricao: 'Descrição do filme 24',
    imdb: 'tt4429160',
    imagem: 'https://image.tmdb.org/t/p/w300/eqrSjDbIN4beOs7BwpZJNM3OpBr.jpg'
},
{
    titulo: 'O Rebanho',
    descricao: 'Descrição do filme 1',
    imdb: 'tt7737734',
    imagem: 'https://image.tmdb.org/t/p/w300/2ZZeSKqhbteQ7lDZnse9DmpIQDC.jpg'
},
{
    titulo: 'O Segredo de Jekyll & Hyde',
    descricao: 'Descrição do filme 2',
    imdb: 'tt15321376',
    imagem: 'https://image.tmdb.org/t/p/w300/ftHF12rFYlniimU0BqAbDzLxFbJ.jpg'
},
{
    titulo: 'Meu Nome é Bagdá',
    descricao: 'Descrição do filme 3',
    imdb: 'tt11783108',
    imagem: 'https://image.tmdb.org/t/p/w300/fRAPoeG3di2WKBlwNipPruNrSZS.jpg'
},
{
    titulo: 'Marmaduke',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1392197',
    imagem: 'https://image.tmdb.org/t/p/w300/7jCp6hu93bd0swn0MhJ9JJHOhez.jpg'
},
{
    titulo: 'Dezessete',
    descricao: 'Descrição do filme 5',
    imdb: 'tt8988748',
    imagem: 'https://image.tmdb.org/t/p/w300/lxtK0OemfcOH6DfusR5ZT4C7Afd.jpg'
},
{
    titulo: 'Billy The Kid: O Fora da Lei',
    descricao: 'Descrição do filme 6',
    imdb: 'tt4975920',
    imagem: 'https://image.tmdb.org/t/p/w300/2vlhQKwzEPoZC5cTfzLHrmKjbsk.jpg'
},
{
    titulo: 'A Mulher na Janela',
    descricao: 'Descrição do filme 7',
    imdb: 'tt6111574',
    imagem: 'https://image.tmdb.org/t/p/w300/8BasMP1hUZtDx0khdbHBkVZhKjJ.jpg'
},
{
    titulo: 'Guardiões do Tempo',
    descricao: 'Descrição do filme 8',
    imdb: 'tt12872350',
    imagem: 'https://image.tmdb.org/t/p/w300/iYkzHd81ZsLQHa12oUhBVIS7ToY.jpg'
},
{
    titulo: 'Highlander 2: A Ressurreição',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0102034',
    imagem: 'https://image.tmdb.org/t/p/w300/eiQLVWlKU26IeEjWw08um0gTQOg.jpg'
},
{
    titulo: 'Highlander 3: O Feiticeiro',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0110027',
    imagem: 'https://image.tmdb.org/t/p/w300/9wPvpoLU6KJLEbMwhh4K25QvvTn.jpg'
},
{
    titulo: 'Highlander 4: A Batalha Final',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0144964',
    imagem: 'https://image.tmdb.org/t/p/w300/rYmzsjiKb30yBqegRCbOREAZJrj.jpg'
},
{
    titulo: 'Evocando Espíritos',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0492044',
    imagem: 'https://image.tmdb.org/t/p/w300/h8YctT9uEOv2iOIF4TKDMGSg3GT.jpg'
},
{
    titulo: 'Um Amor do Passado',
    descricao: 'Descrição do filme 13',
    imdb: 'tt6185692',
    imagem: 'https://image.tmdb.org/t/p/w300/rDQ1iuu3zFrTRUdZjzMt72nHclU.jpg'
},
{
    titulo: 'Todos os Mortos',
    descricao: 'Descrição do filme 14',
    imdb: 'tt8845322',
    imagem: 'https://image.tmdb.org/t/p/w300/t84JN0QfTxnYqyaYzgkYDbXSie8.jpg'
},
{
    titulo: 'Amizade Maldita',
    descricao: 'Descrição do filme 15',
    imdb: 'tt8995218',
    imagem: 'https://image.tmdb.org/t/p/w300/dp1L8ifSSKnkXMGLCMUvXjKdxQk.jpg'
},
{
    titulo: 'Uma Noite Alucinante: A Morte do Demônio',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0083907',
    imagem: 'https://image.tmdb.org/t/p/w300/5CXNDTwS1Gqw7bbKDO3mREN1nAF.jpg'
},
{
    titulo: 'O Caçador de Recompensas',
    descricao: 'Descrição do filme 17',
    imdb: 'tt9302994',
    imagem: 'https://image.tmdb.org/t/p/w300/td0uLMhr67ateeoUZRQZYIqzp2B.jpg'
},
{
    titulo: 'Maligno',
    descricao: 'Descrição do filme 18',
    imdb: 'tt4504044',
    imagem: 'https://image.tmdb.org/t/p/w300/iIAIlKKk0r0GCFeDo2SNFzW8sbS.jpg'
},
{
    titulo: 'Sombras do Terror',
    descricao: 'Descrição do filme 19',
    imdb: 'tt8236366',
    imagem: 'https://image.tmdb.org/t/p/w300/k3pSd1JzV3oIFkgcnYm68Thw4VH.jpg'
},
{
    titulo: 'Pânico em Alto Mar',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0470055',
    imagem: 'https://image.tmdb.org/t/p/w300/t5VhpASpUwnX3meWPYLSBMORl4e.jpg'
},
{
    titulo: 'Em Busca de Ohana',
    descricao: 'Descrição do filme 21',
    imdb: 'tt10332588',
    imagem: 'https://image.tmdb.org/t/p/w300/vcQY8T1owyMMRmp9dZiUTUQVxKW.jpg'
},
{
    titulo: 'A Última Jornada',
    descricao: 'Descrição do filme 22',
    imdb: 'tt4157728',
    imagem: 'https://image.tmdb.org/t/p/w300/c7s53hE2y44OIwpITPkcGBp2qet.jpg'
},
{
    titulo: 'O Último Paraíso',
    descricao: 'Descrição do filme 23',
    imdb: 'tt11428926',
    imagem: 'https://image.tmdb.org/t/p/w300/iJFc9CUT7v1S3UmsEEaubG2Gcf5.jpg'
},
{
    titulo: 'Amor & Gelato',
    descricao: 'Descrição do filme 24',
    imdb: 'tt15521050',
    imagem: 'https://image.tmdb.org/t/p/w300/2qXCNa3w1rOZ4w7VXivVxXK4s0l.jpg'
},
{
    titulo: 'Epa! Cadê o Noé? 2',
    descricao: 'Descrição do filme 1',
    imdb: 'tt12615474',
    imagem: 'https://image.tmdb.org/t/p/w300/ukfzshUEvxX81X199zx3xItOk1h.jpg'
},
{
    titulo: 'Post Mortem - Fotos do Além',
    descricao: 'Descrição do filme 2',
    imdb: 'tt9834506',
    imagem: 'https://image.tmdb.org/t/p/w300/yslSqpWq1bOHkwELIrirfOZXNWT.jpg'
},
{
    titulo: 'Em Fuga',
    descricao: 'Descrição do filme 3',
    imdb: 'tt13680520',
    imagem: 'https://image.tmdb.org/t/p/w300/dkZAsGX4xXsy6rhTnvi5EdbB0Qx.jpg'
},
{
    titulo: 'Ela é Demais',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0160862',
    imagem: 'https://image.tmdb.org/t/p/w300/mo6KM7wxkxEeNGJmNsiANMP1jfK.jpg'
},
{
    titulo: 'Um Drink no Inferno',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0116367',
    imagem: 'https://image.tmdb.org/t/p/w300/vVO9dJdZwXJfiqesM2TFp5jrw92.jpg'
},
{
    titulo: 'Um Lugar Chamado Notting Hill',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0125439',
    imagem: 'https://image.tmdb.org/t/p/w300/9yFgNvFK870icK6SvTdeVyEjXN4.jpg'
},
{
    titulo: 'A Colina Escarlate',
    descricao: 'Descrição do filme 7',
    imdb: 'tt2554274',
    imagem: 'https://image.tmdb.org/t/p/w300/blDoxeetdq1n9n9RbXCoNIV3hzV.jpg'
},
{
    titulo: 'Os Pinguins do Papai',
    descricao: 'Descrição do filme 8',
    imdb: 'tt1396218',
    imagem: 'https://image.tmdb.org/t/p/w300/m5CQex1Y1OAidPIhd3HJAxA5PPY.jpg'
},
{
    titulo: 'Cheque em Branco',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0109287',
    imagem: 'https://image.tmdb.org/t/p/w300/kjoLpAN1MtU4rzfiGgMGsCGm0Oa.jpg'
},
{
    titulo: 'E Se Fosse Verdade',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0425123',
    imagem: 'https://image.tmdb.org/t/p/w300/wKerNhg6rr0XlEEwpVBG065Wn7f.jpg'
},
{
    titulo: 'Acusados',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0094608',
    imagem: 'https://image.tmdb.org/t/p/w300/kEpHGhM2fyzY20Ff9lhfm4Poif9.jpg'
},
{
    titulo: 'Justiça em Família',
    descricao: 'Descrição do filme 12',
    imdb: 'tt10731768',
    imagem: 'https://image.tmdb.org/t/p/w300/cygRJp2OQKsiGbJxKq5TbvzW9QR.jpg'
},
{
    titulo: 'Vem com o Papai',
    descricao: 'Descrição do filme 13',
    imdb: 'tt8816194',
    imagem: 'https://image.tmdb.org/t/p/w300/tlc8G9KJiTDDWUFTaWRqWeL1LkN.jpg'
},
{
    titulo: 'Grito Silencioso',
    descricao: 'Descrição do filme 14',
    imdb: 'tt10590458',
    imagem: 'https://image.tmdb.org/t/p/w300/cSaHpeEfAgxoqAo09aoYWc63dYF.jpg'
},
{
    titulo: 'Michael Collins: O Preço da Liberdade',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0117039',
    imagem: 'https://image.tmdb.org/t/p/w300/brIBbU6t9glEGAKRTJ4PMj9OiDC.jpg'
},
{
    titulo: 'A Abelhinha Maya: O Filme',
    descricao: 'Descrição do filme 16',
    imdb: 'tt6685596',
    imagem: 'https://image.tmdb.org/t/p/w300/68ot38BwgfZjkIYRiuvXCtKDxCL.jpg'
},
{
    titulo: 'Gatinhas e Gatões',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0088128',
    imagem: 'https://image.tmdb.org/t/p/w300/gMkkTKiVrOrW9HVEo7n5n4DQn4l.jpg'
},
{
    titulo: 'Rambo: Até o Fim',
    descricao: 'Descrição do filme 18',
    imdb: 'tt1206885',
    imagem: 'https://image.tmdb.org/t/p/w300/vaoCd6iZ6xmBTvsiuWjcMWY6wdm.jpg'
},
{
    titulo: 'Elvira: A Rainha das Trevas',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0095088',
    imagem: 'https://image.tmdb.org/t/p/w300/aMUFrkf3eNipkPQRp8GzqTzmLdG.jpg'
},
{
    titulo: 'Vestida para Casar',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0988595',
    imagem: 'https://image.tmdb.org/t/p/w300/8ojSQ3BLHVORyOxYmNJROonWivX.jpg'
},
{
    titulo: 'O Despertar de um Homem',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0108330',
    imagem: 'https://image.tmdb.org/t/p/w300/kn0fg6Kx9rZ5fktCBQbnigYEuYf.jpg'
},
{
    titulo: 'As Faces do Demônio',
    descricao: 'Descrição do filme 22',
    imdb: 'tt10800758',
    imagem: 'https://image.tmdb.org/t/p/w300/m55ioQVA0x9Vluqn9KQTiaCvvYW.jpg'
},
{
    titulo: 'Homens de Honra',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0203019',
    imagem: 'https://image.tmdb.org/t/p/w300/7AAnC2rr3bec7OUxH9Iy0b2QTOD.jpg'
},
{
    titulo: 'Os Novos Mutantes',
    descricao: 'Descrição do filme 24',
    imdb: 'tt4682266',
    imagem: 'https://image.tmdb.org/t/p/w300/6RcWaW43UWIJzhIp6bcmui2efd.jpg'
},
{
    titulo: 'E Amanhã... O Mundo Todo',
    descricao: 'Descrição do filme 1',
    imdb: 'tt7716120',
    imagem: 'https://image.tmdb.org/t/p/w300/qid8NlS6dbD5UXc6Ysaq8YUnGwr.jpg'
},
{
    titulo: 'Serra Pelada',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2140381',
    imagem: 'https://image.tmdb.org/t/p/w300/jjAJqve8qj4dVbO7kJXTpsojXSv.jpg'
},
{
    titulo: 'Loja de Unicórnios',
    descricao: 'Descrição do filme 3',
    imdb: 'tt2338454',
    imagem: 'https://image.tmdb.org/t/p/w300/sPi4SFZceSRD3Il9QiIDG6niTcT.jpg'
},
{
    titulo: 'Rise',
    descricao: 'Descrição do filme 4',
    imdb: 'tt11242162',
    imagem: 'https://image.tmdb.org/t/p/w300/czXyMcmiulyZjhYAnnMwVhFCvN.jpg'
},
{
    titulo: 'O Homem de Toronto',
    descricao: 'Descrição do filme 5',
    imdb: 'tt11671006',
    imagem: 'https://image.tmdb.org/t/p/w300/8lpUE9YaNWMGueBxg6n8IvrjnSL.jpg'
},
{
    titulo: 'Mistério das Palavras Cruzadas: A Queda Fatal',
    descricao: 'Descrição do filme 6',
    imdb: 'tt9759902',
    imagem: 'https://image.tmdb.org/t/p/w300/v4TdY6KGuIUb4OgeAIxZAYP1XCx.jpg'
},
{
    titulo: 'Um Mundo Encantado',
    descricao: 'Descrição do filme 7',
    imdb: 'tt13130662',
    imagem: 'https://image.tmdb.org/t/p/w300/f5gcKiYMC42fRMy0MPQ3R3bqDbe.jpg'
},
{
    titulo: 'Ainda Estou Aqui',
    descricao: 'Descrição do filme 8',
    imdb: 'tt8851148',
    imagem: 'https://image.tmdb.org/t/p/w300/a5XkAX8k4UO3I1YIx1nW32F3EBk.jpg'
},
{
    titulo: 'A Casa dos Sonhos',
    descricao: 'Descrição do filme 9',
    imdb: 'tt1462041',
    imagem: 'https://image.tmdb.org/t/p/w300/bq9MPwnTC9bwYYwxhld8fmqLJni.jpg'
},
{
    titulo: 'Esperando por Você',
    descricao: 'Descrição do filme 10',
    imdb: 'tt5545862',
    imagem: 'https://image.tmdb.org/t/p/w300/uBluwU54W9XTmhMFBWsXupkpbjv.jpg'
},
{
    titulo: 'Fuga da Meia-Noite',
    descricao: 'Descrição do filme 11',
    imdb: 'tt14757872',
    imagem: 'https://image.tmdb.org/t/p/w300/3ze2g40UT00kR0mvGWdzUNkTjsz.jpg'
},
{
    titulo: 'Metal Lords',
    descricao: 'Descrição do filme 12',
    imdb: 'tt12141112',
    imagem: 'https://image.tmdb.org/t/p/w300/r97txZRmBb75SGsIAWqmplWJnO3.jpg'
},
{
    titulo: 'Correr Atirando',
    descricao: 'Descrição do filme 13',
    imdb: 'tt14039086',
    imagem: 'https://image.tmdb.org/t/p/w300/j252tH00eMyANiqhaLkemlkO16v.jpg'
},
{
    titulo: 'Apollo 10 e Meio: Aventura na Era Espacial',
    descricao: 'Descrição do filme 14',
    imdb: 'tt7978758',
    imagem: 'https://image.tmdb.org/t/p/w300/2OkOOZN5aGj7LjbRdHazGPfGejJ.jpg'
},
{
    titulo: 'Pequena Mamãe',
    descricao: 'Descrição do filme 15',
    imdb: 'tt13204490',
    imagem: 'https://image.tmdb.org/t/p/w300/dCh06z8p0rZxLmEET1li1kDIVXX.jpg'
},
{
    titulo: 'A Megera Domada',
    descricao: 'Descrição do filme 16',
    imdb: 'tt18970380',
    imagem: 'https://image.tmdb.org/t/p/w300/murrfrqgaetHayjBmA0V1SMFFyh.jpg'
},
{
    titulo: 'As Garotas de Cristal',
    descricao: 'Descrição do filme 17',
    imdb: 'tt14118046',
    imagem: 'https://image.tmdb.org/t/p/w300/eAmpIPhtvsgWVoMG1ta0DS1tftd.jpg'
},
{
    titulo: 'Granizo',
    descricao: 'Descrição do filme 18',
    imdb: 'tt16427718',
    imagem: 'https://image.tmdb.org/t/p/w300/pnTp17HCwQ6EhsWfqzgwnUfhSym.jpg'
},
{
    titulo: 'A Sombra de Stalin',
    descricao: 'Descrição do filme 19',
    imdb: 'tt6828390',
    imagem: 'https://image.tmdb.org/t/p/w300/gtzri2oD8C5h36nBvOJN9SAXqlA.jpg'
},
{
    titulo: 'Refugiado Americano',
    descricao: 'Descrição do filme 20',
    imdb: 'tt14556184',
    imagem: 'https://image.tmdb.org/t/p/w300/k84Xo4EHSi7SgRHZ4hdlMvSk6NH.jpg'
},
{
    titulo: 'Nossas Meninas',
    descricao: 'Descrição do filme 21',
    imdb: 'tt9489598',
    imagem: 'https://image.tmdb.org/t/p/w300/9QHA9UXs34jB1IxeitCgOdWmr5Z.jpg'
},
{
    titulo: 'Caindo em Pé',
    descricao: 'Descrição do filme 22',
    imdb: 'tt6173484',
    imagem: 'https://image.tmdb.org/t/p/w300/dElx7G7dUsFQaIL5CWE1ASVVrS.jpg'
},
{
    titulo: '100 Coisas',
    descricao: 'Descrição do filme 23',
    imdb: 'tt8129794',
    imagem: 'https://image.tmdb.org/t/p/w300/9PWSRATzT9Bu27BhqsIqMp7LcqS.jpg'
},
{
    titulo: 'Pimp - Rainha do Gueto',
    descricao: 'Descrição do filme 24',
    imdb: 'tt3107166',
    imagem: 'https://image.tmdb.org/t/p/w300/90h7Gmi1QShMBQJWtAoFA2y8Q58.jpg'
},
{
    titulo: 'Sicario - Perigo no Abrigo',
    descricao: 'Descrição do filme 1',
    imdb: 'tt10375916',
    imagem: 'https://image.tmdb.org/t/p/w300/tqHoz9tdsQJ3US1Pb7eZdBDi8op.jpg'
},
{
    titulo: 'Escolha ou Morra',
    descricao: 'Descrição do filme 2',
    imdb: 'tt11514780',
    imagem: 'https://image.tmdb.org/t/p/w300/f3zQhtFn8EzHgdPXoDPAtcGQnSf.jpg'
},
{
    titulo: 'Homem de Deus',
    descricao: 'Descrição do filme 3',
    imdb: 'tt14990030',
    imagem: 'https://image.tmdb.org/t/p/w300/rFHAGnTbtkJUiqDNmlkgBuYdky.jpg'
},
{
    titulo: 'Coração de Campeão',
    descricao: 'Descrição do filme 4',
    imdb: 'tt10314548',
    imagem: 'https://image.tmdb.org/t/p/w300/cTayZvZzIqHPihU86ei7XhJ8JkD.jpg'
},
{
    titulo: 'Terra Sem Lei',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1158939',
    imagem: 'https://image.tmdb.org/t/p/w300/dYBWgaJwQ5RXk9I4S6gN0LGq0P9.jpg'
},
{
    titulo: 'Hurricane – Livre como o Vento',
    descricao: 'Descrição do filme 6',
    imdb: 'tt11560730',
    imagem: 'https://image.tmdb.org/t/p/w300/r3ch0DYa5cKdavne8bMZiR0Wq1S.jpg'
},
{
    titulo: 'Vozes na Escuridão',
    descricao: 'Descrição do filme 7',
    imdb: 'tt8640928',
    imagem: 'https://image.tmdb.org/t/p/w300/oawvK7MlAtKIkeOfgKjhhJ7pYD9.jpg'
},
{
    titulo: 'A Família Perfeita',
    descricao: 'Descrição do filme 8',
    imdb: 'tt11924738',
    imagem: 'https://image.tmdb.org/t/p/w300/4EWtby5Sb1JKxwqVfpLLybmJK6E.jpg'
},
{
    titulo: 'Profile',
    descricao: 'Descrição do filme 9',
    imdb: 'tt7826276',
    imagem: 'https://image.tmdb.org/t/p/w300/mQUVU5fX7QBRUeCjzeiZLGn5D5s.jpg'
},
{
    titulo: 'As Duas Mortes de Henry Baker',
    descricao: 'Descrição do filme 10',
    imdb: 'tt6687720',
    imagem: 'https://image.tmdb.org/t/p/w300/8rFxEx60Ns0pBZtDnrNSOhkpHxz.jpg'
},
{
    titulo: 'Onda de Calor',
    descricao: 'Descrição do filme 11',
    imdb: 'tt17291716',
    imagem: 'https://image.tmdb.org/t/p/w300/6SG9gR1DPukdCCRkx0WXe6LxOch.jpg'
},
{
    titulo: 'Prazeres Secretos',
    descricao: 'Descrição do filme 12',
    imdb: 'tt7243754',
    imagem: 'https://image.tmdb.org/t/p/w300/crhwucqk5DLk4jYHhpzOPbD09tc.jpg'
},
{
    titulo: 'Boa Viagem',
    descricao: 'Descrição do filme 13',
    imdb: 'tt14766956',
    imagem: 'https://image.tmdb.org/t/p/w300/7w94FteEPPW5QiaYDMDy74NJ9vz.jpg'
},
{
    titulo: 'No Fio da Navalha',
    descricao: 'Descrição do filme 14',
    imdb: 'tt9574922',
    imagem: 'https://image.tmdb.org/t/p/w300/qrMFU6nAGJBjWRyvXlgNGHYOavT.jpg'
},
{
    titulo: 'O Lobo entre Nós',
    descricao: 'Descrição do filme 15',
    imdb: 'tt10399760',
    imagem: 'https://image.tmdb.org/t/p/w300/43RUnOBA7VgEXzXw6Gx3lifullJ.jpg'
},
{
    titulo: 'O Peso do Talento',
    descricao: 'Descrição do filme 16',
    imdb: 'tt11291274',
    imagem: 'https://image.tmdb.org/t/p/w300/4KahLgGArTECtUJWN9ACGR6l1S.jpg'
},
{
    titulo: 'Colisão',
    descricao: 'Descrição do filme 17',
    imdb: 'tt10809742',
    imagem: 'https://image.tmdb.org/t/p/w300/we29hZxAupvAOkmceHTUkos8RmS.jpg'
},
{
    titulo: 'Entre Irmãos',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0765010',
    imagem: 'https://image.tmdb.org/t/p/w300/buKRRR6Z6TztAuMUw7DUXCwn4hs.jpg'
},
{
    titulo: 'O Radicão',
    descricao: 'Descrição do filme 19',
    imdb: 'tt7188058',
    imagem: 'https://image.tmdb.org/t/p/w300/AqH1hjH7sAmPGuFoK9zugLmPsr9.jpg'
},
{
    titulo: 'Lua de Mel com a Minha Mãe',
    descricao: 'Descrição do filme 20',
    imdb: 'tt11269026',
    imagem: 'https://image.tmdb.org/t/p/w300/j2uwa64qm3hSOBAd5XAgIWodhHD.jpg'
},
{
    titulo: 'Juntos e Enrolados',
    descricao: 'Descrição do filme 21',
    imdb: 'tt12473774',
    imagem: 'https://image.tmdb.org/t/p/w300/ciOCqvJiMQ3PkTEYLBv8q72QT9J.jpg'
},
{
    titulo: 'O Golpe',
    descricao: 'Descrição do filme 22',
    imdb: 'tt6838918',
    imagem: 'https://image.tmdb.org/t/p/w300/rOIWNpTDUfIqBJI87vCDqGkCY0h.jpg'
},
{
    titulo: 'Até o Fim!',
    descricao: 'Descrição do filme 23',
    imdb: 'tt13454228',
    imagem: 'https://image.tmdb.org/t/p/w300/qmTwhD0N2IA5SzN1xxVK70UYiy2.jpg'
},
{
    titulo: 'Crush: Amor Colorido',
    descricao: 'Descrição do filme 24',
    imdb: 'tt15096128',
    imagem: 'https://image.tmdb.org/t/p/w300/yET3VJN40au485aOUbmJ1cUuaps.jpg'
},
{
    titulo: 'King - Meu Melhor Amigo',
    descricao: 'Descrição do filme 1',
    imdb: 'tt14073780',
    imagem: 'https://image.tmdb.org/t/p/w300/jfypKseXKHEqRVXoXHBWeppA1hn.jpg'
},
{
    titulo: 'Belle',
    descricao: 'Descrição do filme 2',
    imdb: 'tt13651628',
    imagem: 'https://image.tmdb.org/t/p/w300/71rkp4WTtQJBLfJGLbJkb33H3vO.jpg'
},
{
    titulo: 'Ao Infinito e Além: Buzz e sua Jornada para ser Lightyear',
    descricao: 'Descrição do filme 3',
    imdb: 'tt16026684',
    imagem: 'https://image.tmdb.org/t/p/w300/kvlULW0N25e7jVeGyYMTWrGWNzq.jpg'
},
{
    titulo: 'Elektra',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0357277',
    imagem: 'https://image.tmdb.org/t/p/w300/gC6s6NKHneSrOKyQZnUMb443RKU.jpg'
},
{
    titulo: '12 Heróis',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1413492',
    imagem: 'https://image.tmdb.org/t/p/w300/mBgAJeIx1d5kxU8nR748o9qnAUK.jpg'
},
{
    titulo: 'A Bela Adormecida',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0053285',
    imagem: 'https://image.tmdb.org/t/p/w300/iRYRBWKhwPI5lBT4DPhmNpmBOMU.jpg'
},
{
    titulo: 'Cowboy Bebop - O Filme',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0275277',
    imagem: 'https://image.tmdb.org/t/p/w300/zgI6Th73JRwATaD0bA3FVVDjUow.jpg'
},
{
    titulo: 'Ei Arnold! Na Selva: O Filme',
    descricao: 'Descrição do filme 8',
    imdb: 'tt5257726',
    imagem: 'https://image.tmdb.org/t/p/w300/fxz5Y0ZjAfpkMSWr78u4ZkWeOs5.jpg'
},
{
    titulo: 'Hey Arnold! O Filme',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0314166',
    imagem: 'https://image.tmdb.org/t/p/w300/etxcq4qiFNi5p0q71APw8MNzPPT.jpg'
},
{
    titulo: 'Dormindo com o Inimigo',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0102945',
    imagem: 'https://image.tmdb.org/t/p/w300/MDHMzwa1xkTZDhed68kviLIIj2.jpg'
},
{
    titulo: 'A Última Testemunha',
    descricao: 'Descrição do filme 11',
    imdb: 'tt3709552',
    imagem: 'https://image.tmdb.org/t/p/w300/e4AcC9CqCJeWXcswUoS3uGdw37F.jpg'
},
{
    titulo: 'Plano de Voo',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0408790',
    imagem: 'https://image.tmdb.org/t/p/w300/pmiuoYVyV1YxxZ1EjwIuHIgtXPt.jpg'
},
{
    titulo: 'AK-47: A Arma Que Mudou o Mundo',
    descricao: 'Descrição do filme 13',
    imdb: 'tt11547520',
    imagem: 'https://image.tmdb.org/t/p/w300/4djODIhP8TZtjkG6w2xZjOuLk6.jpg'
},
{
    titulo: 'O Segredo de Alcatraz',
    descricao: 'Descrição do filme 14',
    imdb: 'tt11199514',
    imagem: 'https://image.tmdb.org/t/p/w300/jGjUonjH7VsDYPeLQKOMAudDAsI.jpg'
},
{
    titulo: 'Coração de Tinta: O Livro Mágico',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0494238',
    imagem: 'https://image.tmdb.org/t/p/w300/pnhT9AwW4OiFkFoHF9gj1dSLcfj.jpg'
},
{
    titulo: 'O Virgem de 40 Anos',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0405422',
    imagem: 'https://image.tmdb.org/t/p/w300/e2qfitm4lm1g3mGc7nGmnnnQa3c.jpg'
},
{
    titulo: 'A Assassina',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0107843',
    imagem: 'https://image.tmdb.org/t/p/w300/zxS0PgB9ngEQUGqLSf8QKoQAq9V.jpg'
},
{
    titulo: 'The Lego Movie 7',
    descricao: 'Descrição do filme 18',
    imdb: 'tt3513498',
    imagem: 'https://image.tmdb.org/t/p/w300/naoItRpLWdEPe8CJUNy4r04HHSa.jpg'
},
{
    titulo: 'Uma Aventura Lego',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1490017',
    imagem: 'https://image.tmdb.org/t/p/w300/Akt1i1g47sS4Bhz5bR43U371E0k.jpg'
},
{
    titulo: 'A Mansão',
    descricao: 'Descrição do filme 20',
    imdb: 'tt13372794',
    imagem: 'https://image.tmdb.org/t/p/w300/dpz5hyD5YhNMgqnVSvdtMuWmxr4.jpg'
},
{
    titulo: 'Comando para Matar',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0088944',
    imagem: 'https://image.tmdb.org/t/p/w300/c02d619U138A3eBt3ZhMPrlwiaM.jpg'
},
{
    titulo: 'Death Note: O Primeiro Nome',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0758742',
    imagem: 'https://image.tmdb.org/t/p/w300/jx6E3bufNYBdzPNkVLEvEKOLwq5.jpg'
},
{
    titulo: 'Van Helsing: O Caçador de Monstros',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0338526',
    imagem: 'https://image.tmdb.org/t/p/w300/s8fhGCLWbFDbBAOitRzVlMPk5pd.jpg'
},
{
    titulo: 'Uma Luz na Escuridão',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0105391',
    imagem: 'https://image.tmdb.org/t/p/w300/w4T6ZymBYU8dilQi2tUKOhgSAIM.jpg'
},
{
    titulo: 'A Primeira Transa de Jonathan',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0089601',
    imagem: 'https://image.tmdb.org/t/p/w300/9GUh7LB67uknyyYWNWHqumnfzY6.jpg'
},
{
    titulo: 'A Última Tentação de Cristo',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0095497',
    imagem: 'https://image.tmdb.org/t/p/w300/zAyCulPkOHA4AB4d4dK3XzUVwjt.jpg'
},
{
    titulo: 'Lost Girls: Os Crimes de Long Island',
    descricao: 'Descrição do filme 3',
    imdb: 'tt3111426',
    imagem: 'https://image.tmdb.org/t/p/w300/pDas4DwURlRzjD9xEhSdtkcl1ZV.jpg'
},
{
    titulo: 'A Moça da Limpeza',
    descricao: 'Descrição do filme 4',
    imdb: 'tt7044076',
    imagem: 'https://image.tmdb.org/t/p/w300/44afwxQiJb2qwy0EHE8dVyif3dL.jpg'
},
{
    titulo: 'A Fera das Neves',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0076731',
    imagem: 'https://image.tmdb.org/t/p/w300/4gInqbka2DIc34Z5bsczWRTRcjc.jpg'
},
{
    titulo: 'A Noiva Cadáver',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0121164',
    imagem: 'https://image.tmdb.org/t/p/w300/89B6W9mlTfSxeMEFMSyRBViXy83.jpg'
},
{
    titulo: 'O Castelo Animado',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0347149',
    imagem: 'https://image.tmdb.org/t/p/w300/1hTfaEWktMJPxCk5nZNtK7F86C9.jpg'
},
{
    titulo: 'Dumbo',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0033563',
    imagem: 'https://image.tmdb.org/t/p/w300/4x9FmvdJ464Fg7A9XcbYSmxfVw3.jpg'
},
{
    titulo: 'Miss Simpatia',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0212346',
    imagem: 'https://image.tmdb.org/t/p/w300/9oae5r1ATLwVY7yJyTXhMaZSGGq.jpg'
},
{
    titulo: 'Fala Sério, Mãe!',
    descricao: 'Descrição do filme 10',
    imdb: 'tt7744802',
    imagem: 'https://image.tmdb.org/t/p/w300/p4YiseA6zPrXQMAJ7dj9GxCTHmo.jpg'
},
{
    titulo: 'Pérola no Paraíso',
    descricao: 'Descrição do filme 11',
    imdb: 'tt8466726',
    imagem: 'https://image.tmdb.org/t/p/w300/8tudQhTuHnhpoGx9dRnOPWYIGsM.jpg'
},
{
    titulo: 'Uma Nova Vida',
    descricao: 'Descrição do filme 12',
    imdb: 'tt5319656',
    imagem: 'https://image.tmdb.org/t/p/w300/5gxLZUUX0ySHa5eNjhtl322y5Yo.jpg'
},
{
    titulo: 'Play the Game',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1124388',
    imagem: 'https://image.tmdb.org/t/p/w300/zVgAAYUdV6iIDa0LJYPBrLjJPWk.jpg'
},
{
    titulo: 'Meu Marciano Favorito',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0120764',
    imagem: 'https://image.tmdb.org/t/p/w300/JWIvaIlSnzeLUquOdQrqNiJl5F.jpg'
},
{
    titulo: 'Operação Supletivo: Agora Vai!',
    descricao: 'Descrição do filme 15',
    imdb: 'tt6781982',
    imagem: 'https://image.tmdb.org/t/p/w300/I1jDPWDC3DvnZTViTaOPKCF1YU.jpg'
},
{
    titulo: 'Amuleto',
    descricao: 'Descrição do filme 16',
    imdb: 'tt8332802',
    imagem: 'https://image.tmdb.org/t/p/w300/uxpA5PxgvsqGOrNMwiL4RheFa0T.jpg'
},
{
    titulo: 'Bloody Hell',
    descricao: 'Descrição do filme 17',
    imdb: 'tt9772374',
    imagem: 'https://image.tmdb.org/t/p/w300/h9xcYfPZ19qAeJf0RmPnWf7pgAQ.jpg'
},
{
    titulo: 'Frangoelho e o Hamster das Trevas',
    descricao: 'Descrição do filme 18',
    imdb: 'tt12532368',
    imagem: 'https://image.tmdb.org/t/p/w300/aIzqgCqKh69G95HDB9LWTLnLT8H.jpg'
},
{
    titulo: 'Rastros de um Crime',
    descricao: 'Descrição do filme 19',
    imdb: 'tt6550808',
    imagem: 'https://image.tmdb.org/t/p/w300/bT90ikAfeBHDkijtNbtLA7vq6st.jpg'
},
{
    titulo: 'Sonhos S.A.',
    descricao: 'Descrição do filme 20',
    imdb: 'tt9855978',
    imagem: 'https://image.tmdb.org/t/p/w300/atlvvY0QnnW5WrW0UEWfcpdIIX9.jpg'
},
{
    titulo: 'Cinquenta Tons de Liberdade',
    descricao: 'Descrição do filme 21',
    imdb: 'tt4477536',
    imagem: 'https://image.tmdb.org/t/p/w300/aQ9J66C5UwHy3YUIi1Hm34ISnk7.jpg'
},
{
    titulo: 'A Lenda do Tesouro Perdido',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0368891',
    imagem: 'https://image.tmdb.org/t/p/w300/5TAQBqvokRt2qHEgi7ipeX1Bif9.jpg'
},
{
    titulo: 'A Vila do Medo',
    descricao: 'Descrição do filme 23',
    imdb: 'tt1840388',
    imagem: 'https://image.tmdb.org/t/p/w300/msg883vxqhjq2DysVjEiEeT1S6x.jpg'
},
{
    titulo: 'Tenet',
    descricao: 'Descrição do filme 24',
    imdb: 'tt6723592',
    imagem: 'https://image.tmdb.org/t/p/w300/oh8XmxWlySHgGLlx8QOBmq9k72j.jpg'
},
{
    titulo: 'Uma Noite Mágica',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0141109',
    imagem: 'https://image.tmdb.org/t/p/w300/uY4BsLttYu4AZ9rBH1EmHps15aK.jpg'
},
{
    titulo: 'Casal de Fachada',
    descricao: 'Descrição do filme 2',
    imdb: 'tt4081630',
    imagem: 'https://image.tmdb.org/t/p/w300/prYUfVvnq9tAMP4LRduyoQtQIjQ.jpg'
},
{
    titulo: 'Contrato Perigoso',
    descricao: 'Descrição do filme 3',
    imdb: 'tt10323676',
    imagem: 'https://image.tmdb.org/t/p/w300/dq9r4v9yWkSmMvffTMiNy3heTZ6.jpg'
},
{
    titulo: 'Heróis de Guerra',
    descricao: 'Descrição do filme 4',
    imdb: 'tt5951188',
    imagem: 'https://image.tmdb.org/t/p/w300/AttAWFTg1K4Qxjo12nMhu8NQIFR.jpg'
},
{
    titulo: 'Meu Amigo Vampiro',
    descricao: 'Descrição do filme 5',
    imdb: 'tt4729560',
    imagem: 'https://image.tmdb.org/t/p/w300/zhsPZXCBwt2fL8GoQtmLIomVRpA.jpg'
},
{
    titulo: 'Perdido em Marte',
    descricao: 'Descrição do filme 6',
    imdb: 'tt3659388',
    imagem: 'https://image.tmdb.org/t/p/w300/e6Uo3QAaUesiduyNX9hDLbaT9P8.jpg'
},
{
    titulo: 'Procura-se Um Pai',
    descricao: 'Descrição do filme 7',
    imdb: 'tt12721188',
    imagem: 'https://image.tmdb.org/t/p/w300/xCDqdYxkSIgSJYOTwXGWunquWxf.jpg'
},
{
    titulo: 'Agora Estamos Sozinhos',
    descricao: 'Descrição do filme 8',
    imdb: 'tt6169694',
    imagem: 'https://image.tmdb.org/t/p/w300/dnW8wWx1xulYgHqXuVn9Pj7HnCX.jpg'
},
{
    titulo: 'A Ligação',
    descricao: 'Descrição do filme 9',
    imdb: 'tt10530176',
    imagem: 'https://image.tmdb.org/t/p/w300/pytXGwLsP07ngaFJM94Md3Q9SIl.jpg'
},
{
    titulo: 'No Limite do Perigo',
    descricao: 'Descrição do filme 10',
    imdb: 'tt8858494',
    imagem: 'https://image.tmdb.org/t/p/w300/zDIf8Dna6tMobLb1bSBsrPAK8LP.jpg'
},
{
    titulo: 'Os Donos da Rua',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0101507',
    imagem: 'https://image.tmdb.org/t/p/w300/fcXysYyOqgsyrtHSoKLT73Gmu51.jpg'
},
{
    titulo: 'Histórias de Além-Túmulo',
    descricao: 'Descrição do filme 12',
    imdb: 'tt5516328',
    imagem: 'https://image.tmdb.org/t/p/w300/58P2hX7cocbY1Koep9ZAblsfxVt.jpg'
},
{
    titulo: 'Fúria Incontrolável',
    descricao: 'Descrição do filme 13',
    imdb: 'tt10059518',
    imagem: 'https://image.tmdb.org/t/p/w300/kDt37orVVcJ4tbB2azkMc4nqn1U.jpg'
},
{
    titulo: 'Mais Que Demais Pra Mim',
    descricao: 'Descrição do filme 14',
    imdb: 'tt14361314',
    imagem: 'https://image.tmdb.org/t/p/w300/lJqV17wSjaTLvI9czGQlP5sRgiA.jpg'
},
{
    titulo: 'Apresentando os Ricardos',
    descricao: 'Descrição do filme 15',
    imdb: 'tt4995540',
    imagem: 'https://image.tmdb.org/t/p/w300/5zh7btwM8px4991ZMl5k1NQUHaI.jpg'
},
{
    titulo: 'Curiosa',
    descricao: 'Descrição do filme 16',
    imdb: 'tt7598076',
    imagem: 'https://image.tmdb.org/t/p/w300/eyJgh0oh73YZ63nJHOJxHkLatgb.jpg'
},
{
    titulo: 'Um Por Todos',
    descricao: 'Descrição do filme 17',
    imdb: 'tt9717498',
    imagem: 'https://image.tmdb.org/t/p/w300/etsooG5MBGSTwQ6WzRRf0lZNbYZ.jpg'
},
{
    titulo: 'Spiderhead',
    descricao: 'Descrição do filme 18',
    imdb: 'tt9783600',
    imagem: 'https://image.tmdb.org/t/p/w300/7COPO5B9AOKIB4sEkvNu0wfve3c.jpg'
},
{
    titulo: 'Renascida das Trevas',
    descricao: 'Descrição do filme 19',
    imdb: 'tt7975674',
    imagem: 'https://image.tmdb.org/t/p/w300/gx6eZTOV6fQ7H49muQOwAZegc28.jpg'
},
{
    titulo: 'O Pai da Noiva',
    descricao: 'Descrição do filme 20',
    imdb: 'tt13249596',
    imagem: 'https://image.tmdb.org/t/p/w300/6605qfGpSGqNcUNY0nUgeE5z01v.jpg'
},
{
    titulo: 'Medida Provisória',
    descricao: 'Descrição do filme 21',
    imdb: 'tt10395866',
    imagem: 'https://image.tmdb.org/t/p/w300/oLfjccUqxsAG7pbCgs5rC6SEUWr.jpg'
},
{
    titulo: 'Tomorrowland: Um Lugar Onde Nada é Impossível',
    descricao: 'Descrição do filme 22',
    imdb: 'tt1964418',
    imagem: 'https://image.tmdb.org/t/p/w300/aULFubx32WbnCIx2jaYxGnIfD56.jpg'
},
{
    titulo: 'Um Hotel Bom pra Cachorro',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0785006',
    imagem: 'https://image.tmdb.org/t/p/w300/yuwIVcVpTp6GtJ1YZOy1HEMcfMz.jpg'
},
{
    titulo: 'Um Anjo em Nossas Vidas',
    descricao: 'Descrição do filme 24',
    imdb: 'tt11916254',
    imagem: 'https://image.tmdb.org/t/p/w300/mN40ZW5Fw9oMUaVfYcqcvqQ49bu.jpg'
},
{
    titulo: 'Ex_Machina: Instinto Artificial',
    descricao: 'Descrição do filme 1',
    imdb: 'tt0470752',
    imagem: 'https://image.tmdb.org/t/p/w300/hfpnFtgcYom9Gk9s1IyWiovpZYg.jpg'
},
{
    titulo: 'Lightyear',
    descricao: 'Descrição do filme 2',
    imdb: 'tt10298810',
    imagem: 'https://image.tmdb.org/t/p/w300/wc3cGQUF4P2Jetawf7YqzaWQsNc.jpg'
},
{
    titulo: 'Agentes Selvagens',
    descricao: 'Descrição do filme 3',
    imdb: 'tt8028842',
    imagem: 'https://image.tmdb.org/t/p/w300/tRbKCQxQ6PF9GWMWknN3LVm9sCZ.jpg'
},
{
    titulo: 'A Vigilante do Amanhã: Ghost in the Shell',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1219827',
    imagem: 'https://image.tmdb.org/t/p/w300/4KTaQLYRuac12gdPAYhXGHLSOW4.jpg'
},
{
    titulo: 'A Fera',
    descricao: 'Descrição do filme 5',
    imdb: 'tt1152398',
    imagem: 'https://image.tmdb.org/t/p/w300/ewZDnY33pLLsVJOsEQHYyibzc9H.jpg'
},
{
    titulo: 'A Lenda do Tesouro Perdido: Livro dos Segredos',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0465234',
    imagem: 'https://image.tmdb.org/t/p/w300/uieqgufMTYPIq5Zcs5rfJ0b1eMb.jpg'
},
{
    titulo: 'The Deep House',
    descricao: 'Descrição do filme 7',
    imdb: 'tt11686490',
    imagem: 'https://image.tmdb.org/t/p/w300/5xhAPxRr64oQPEFnUOrttuI4ZEU.jpg'
},
{
    titulo: 'O Pianista',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0253474',
    imagem: 'https://image.tmdb.org/t/p/w300/s0evYrftQZepUEaLPUFUdRvBG80.jpg'
},
{
    titulo: 'Imagine Eu e Você',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0421994',
    imagem: 'https://image.tmdb.org/t/p/w300/2TmEsqxYLifopx8XfhgzLNO5oA7.jpg'
},
{
    titulo: 'Click',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0389860',
    imagem: 'https://image.tmdb.org/t/p/w300/oL0k5JA53PyoHSZqKb3cNkhwBCE.jpg'
},
{
    titulo: 'Legião',
    descricao: 'Descrição do filme 11',
    imdb: 'tt1038686',
    imagem: 'https://image.tmdb.org/t/p/w300/4w83G68shLcuFcHaWfdPxPu1pUA.jpg'
},
{
    titulo: 'Upgrade: Atualização',
    descricao: 'Descrição do filme 12',
    imdb: 'tt6499752',
    imagem: 'https://image.tmdb.org/t/p/w300/yVRDpj9wg6sYnBugfxUbnjBdHWo.jpg'
},
{
    titulo: 'Stratton - Forças Especiais',
    descricao: 'Descrição do filme 13',
    imdb: 'tt3567666',
    imagem: 'https://image.tmdb.org/t/p/w300/ba6iOdlHUxlzRvJTq2akBuSlQdH.jpg'
},
{
    titulo: 'O Animal Cordial',
    descricao: 'Descrição do filme 14',
    imdb: 'tt5126274',
    imagem: 'https://image.tmdb.org/t/p/w300/5MKLyUWxri8ePW5wM1Wpdgqj5M7.jpg'
},
{
    titulo: 'A Possessão de Deborah Logan',
    descricao: 'Descrição do filme 15',
    imdb: 'tt3387648',
    imagem: 'https://image.tmdb.org/t/p/w300/77i7EBUyQKOUiZeYQ5tWDGQb0AI.jpg'
},
{
    titulo: 'Ouija: Origem do Mal',
    descricao: 'Descrição do filme 16',
    imdb: 'tt4361050',
    imagem: 'https://image.tmdb.org/t/p/w300/zTIAc7HvOrd1OMz0YFtzdfTUBlt.jpg'
},
{
    titulo: 'Os Opostos Sempre Se Atraem',
    descricao: 'Descrição do filme 17',
    imdb: 'tt13822738',
    imagem: 'https://image.tmdb.org/t/p/w300/o1KfmIKXZb3zXYWFKWt31G3w8DI.jpg'
},
{
    titulo: 'O Sentido da Vida',
    descricao: 'Descrição do filme 18',
    imdb: 'tt13308110',
    imagem: 'https://image.tmdb.org/t/p/w300/wHX3FRG85FBtaWxxFkDeYqsv5Sf.jpg'
},
{
    titulo: 'O Massacre da Serra Elétrica: A Lenda Continua',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1572315',
    imagem: 'https://image.tmdb.org/t/p/w300/34y53bP3bWX4DTAr8cishqcyP4f.jpg'
},
{
    titulo: 'O Massacre da Serra Elétrica',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0324216',
    imagem: 'https://image.tmdb.org/t/p/w300/peL5G7S7KER4y5fUAGgtGxRccbv.jpg'
},
{
    titulo: 'O Massacre da Serra Elétrica: O Início',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0420294',
    imagem: 'https://image.tmdb.org/t/p/w300/a6oqQberLAI2KWkYEz6c4gP2nIk.jpg'
},
{
    titulo: 'Joy: O Nome do Sucesso',
    descricao: 'Descrição do filme 22',
    imdb: 'tt2446980',
    imagem: 'https://image.tmdb.org/t/p/w300/7icWz22RlPltHdIpR1iF95fuSrs.jpg'
},
{
    titulo: 'Ace Ventura 2: Um Maluco na África',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0112281',
    imagem: 'https://image.tmdb.org/t/p/w300/ai9kRyLHUIdmvWKHTl4NSi0Ghsw.jpg'
},
{
    titulo: 'Ace Ventura: Um Detetive Diferente',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0109040',
    imagem: 'https://image.tmdb.org/t/p/w300/xcxU6P1Yts1cugEKZg67IBtoh5J.jpg'
},
{
    titulo: 'Alfa',
    descricao: 'Descrição do filme 1',
    imdb: 'tt4244998',
    imagem: 'https://image.tmdb.org/t/p/w300/wiofc2cbzZlLEgdxts1GmSoWEMM.jpg'
},
{
    titulo: 'Assim na Terra Como no Inferno',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2870612',
    imagem: 'https://image.tmdb.org/t/p/w300/19K0a2bKxQsh6MCQOIGyV3xbv1F.jpg'
},
{
    titulo: 'As Viúvas',
    descricao: 'Descrição do filme 3',
    imdb: 'tt4218572',
    imagem: 'https://image.tmdb.org/t/p/w300/lTql8KyJYqcX49Lmdct7PMCgg63.jpg'
},
{
    titulo: 'A Morte do Demônio',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1288558',
    imagem: 'https://image.tmdb.org/t/p/w300/7b2oD1oxUxdDft486Q7oPNPzMlf.jpg'
},
{
    titulo: 'Implacável',
    descricao: 'Descrição do filme 5',
    imdb: 'tt8836988',
    imagem: 'https://image.tmdb.org/t/p/w300/kgbDomQPeLpgl6vB6Ehi8dYhQGQ.jpg'
},
{
    titulo: 'O Roubo do Século',
    descricao: 'Descrição do filme 6',
    imdb: 'tt10948718',
    imagem: 'https://image.tmdb.org/t/p/w300/8uAwFcUqBpxe4hMCnFwhHCOk3Qt.jpg'
},
{
    titulo: 'A Ira de Deus',
    descricao: 'Descrição do filme 7',
    imdb: 'tt15189534',
    imagem: 'https://image.tmdb.org/t/p/w300/3fdh5M8Vt6PkS31bxLXMIn1GsaU.jpg'
},
{
    titulo: 'Arthur & Merlin: Cavaleiros de Camelot',
    descricao: 'Descrição do filme 8',
    imdb: 'tt7052270',
    imagem: 'https://image.tmdb.org/t/p/w300/9ERu4fmY6N0J7NaTGPU0boJcy3X.jpg'
},
{
    titulo: 'Exorcismo Sagrado',
    descricao: 'Descrição do filme 9',
    imdb: 'tt10362566',
    imagem: 'https://image.tmdb.org/t/p/w300/7y181pPW5P6xhcEbAVTv01bVJov.jpg'
},
{
    titulo: 'Aceleração Máxima',
    descricao: 'Descrição do filme 10',
    imdb: 'tt9534808',
    imagem: 'https://image.tmdb.org/t/p/w300/uQbfgS1E9IFclOlBQsYkfRbuqp9.jpg'
},
{
    titulo: 'Eu Sou a Vingança: Retaliação',
    descricao: 'Descrição do filme 11',
    imdb: 'tt8972556',
    imagem: 'https://image.tmdb.org/t/p/w300/rXalEpxCQNusX23rMsPZrPayVoz.jpg'
},
{
    titulo: 'Seis Minutos para Meia-Noite',
    descricao: 'Descrição do filme 12',
    imdb: 'tt5114840',
    imagem: 'https://image.tmdb.org/t/p/w300/w07xHq8aJwXNmymaYNkT8sNMSSs.jpg'
},
{
    titulo: 'Escrito nas Estrelas',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0240890',
    imagem: 'https://image.tmdb.org/t/p/w300/kD0U1dENdFpbTm6cIWIkZOqKMkB.jpg'
},
{
    titulo: 'Drive',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0780504',
    imagem: 'https://image.tmdb.org/t/p/w300/1dREXakGbByZ1kti8vfVX3I8Dc.jpg'
},
{
    titulo: 'Construindo uma Carreira',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0101545',
    imagem: 'https://image.tmdb.org/t/p/w300/rOu0of5OpgeTVOTVfn1anyYoeyU.jpg'
},
{
    titulo: 'Respire Fundo',
    descricao: 'Descrição do filme 16',
    imdb: 'tt10925852',
    imagem: 'https://image.tmdb.org/t/p/w300/1oW3bRlOIOScpXfqZpWPjVG6OhL.jpg'
},
{
    titulo: 'Supergirl',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0088206',
    imagem: 'https://image.tmdb.org/t/p/w300/6OfuKKCPFclHOj4SSRRpLzF1lfP.jpg'
},
{
    titulo: 'Matrix Resurrections',
    descricao: 'Descrição do filme 18',
    imdb: 'tt10838180',
    imagem: 'https://image.tmdb.org/t/p/w300/9DT4WVqZqBEI9Kub18gZ3m1D89m.jpg'
},
{
    titulo: 'Era Uma Vez Um Conto de Fadas',
    descricao: 'Descrição do filme 19',
    imdb: 'tt7813294',
    imagem: 'https://image.tmdb.org/t/p/w300/rBNX6kXx9ojBGLHTTqmC0z4QhSG.jpg'
},
{
    titulo: 'Mamãe',
    descricao: 'Descrição do filme 20',
    imdb: 'tt13235822',
    imagem: 'https://image.tmdb.org/t/p/w300/vgONeDoY02WPjCw4ApDaPohxqrv.jpg'
},
{
    titulo: 'Nas Garras do Terror',
    descricao: 'Descrição do filme 21',
    imdb: 'tt11760236',
    imagem: 'https://image.tmdb.org/t/p/w300/hwkD4byCLCWIyi6uA6Zm5XTr9WK.jpg'
},
{
    titulo: 'Jennifer Lopez: Halftime',
    descricao: 'Descrição do filme 22',
    imdb: 'tt19637852',
    imagem: 'https://image.tmdb.org/t/p/w300/kigfBGQKTI0cLV6t10DeDQGVBFr.jpg'
},
{
    titulo: 'Centauro',
    descricao: 'Descrição do filme 23',
    imdb: 'tt13479592',
    imagem: 'https://image.tmdb.org/t/p/w300/41NRm22nZkWCx9XP09etSxd2HRD.jpg'
},
{
    titulo: 'Desfile de Corações',
    descricao: 'Descrição do filme 24',
    imdb: 'tt20597408',
    imagem: 'https://image.tmdb.org/t/p/w300/A48bE3SKZKdaEXYXgOM9jYusp4I.jpg'
},
{
    titulo: 'O Despertar do Tigre',
    descricao: 'Descrição do filme 1',
    imdb: 'tt1596557',
    imagem: 'https://image.tmdb.org/t/p/w300/x2GFHvPMhSiCTmCVrdYGPU5SfH3.jpg'
},
{
    titulo: 'Um Dia para Morrer',
    descricao: 'Descrição do filme 2',
    imdb: 'tt14412366',
    imagem: 'https://image.tmdb.org/t/p/w300/dzDEob3PyiGY25TxmeDx1yfifEP.jpg'
},
{
    titulo: 'Meu Namorado Fake',
    descricao: 'Descrição do filme 3',
    imdb: 'tt15143222',
    imagem: 'https://image.tmdb.org/t/p/w300/zGDMNqWTtkWL6So4yM3ewNCtYY1.jpg'
},
{
    titulo: 'Spencer',
    descricao: 'Descrição do filme 4',
    imdb: 'tt12536294',
    imagem: 'https://image.tmdb.org/t/p/w300/7GcqdBKaMM9BWXWN07BirBMkcBF.jpg'
},
{
    titulo: 'O Escorpião Rei 4: Na Busca Pelo Poder',
    descricao: 'Descrição do filme 5',
    imdb: 'tt3086386',
    imagem: 'https://image.tmdb.org/t/p/w300/8orlJgONS4FR16s1SoTFYGP1hRS.jpg'
},
{
    titulo: 'O Escorpião Rei 3: Batalha Pela Redenção',
    descricao: 'Descrição do filme 6',
    imdb: 'tt1781896',
    imagem: 'https://image.tmdb.org/t/p/w300/g4Y2kKZEAH5wt9lhd9pvkP8rZYu.jpg'
},
{
    titulo: 'O Escorpião Rei 2: A Saga de um Guerreiro',
    descricao: 'Descrição do filme 7',
    imdb: 'tt1104123',
    imagem: 'https://image.tmdb.org/t/p/w300/ghiVoSY1FmInI6Xyr95KauGgzoh.jpg'
},
{
    titulo: 'O Escorpião Rei',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0277296',
    imagem: 'https://image.tmdb.org/t/p/w300/b5oKF7dehApnWdbZsCtPAQgtT0M.jpg'
},
{
    titulo: 'Mandando Bala',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0465602',
    imagem: 'https://image.tmdb.org/t/p/w300/51C6obcHBjFF6ISmxnIavI4DZaT.jpg'
},
{
    titulo: 'Abraham Lincoln: Caçador de Vampiros',
    descricao: 'Descrição do filme 10',
    imdb: 'tt1611224',
    imagem: 'https://image.tmdb.org/t/p/w300/8Rli2nwRdQ1ZFdIXk54XjtKoL4a.jpg'
},
{
    titulo: 'O Mestre das Armas',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0446059',
    imagem: 'https://image.tmdb.org/t/p/w300/gJqsKqmQoDJKUEQoHq6I0cj9hJy.jpg'
},
{
    titulo: 'Ong-Bak 3',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1653690',
    imagem: 'https://image.tmdb.org/t/p/w300/gE0ouuxZ5NaM5nbL9xgJC1Hq1lf.jpg'
},
{
    titulo: 'Ong-Bak 2: O Guerreiro Sagrado Voltou',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0785035',
    imagem: 'https://image.tmdb.org/t/p/w300/qryAt2xNRxxjJZGwFMGvJKbCNvp.jpg'
},
{
    titulo: 'Batalha de Honra',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0108281',
    imagem: 'https://image.tmdb.org/t/p/w300/tIC9FGD5L7tAb2JHesVFLySTN7G.jpg'
},
{
    titulo: 'Ong-Bak: Guerreiro Sagrado',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0368909',
    imagem: 'https://image.tmdb.org/t/p/w300/giScNN1AdVEEZ1G6TLlxx4sZBb.jpg'
},
{
    titulo: 'Cão de Briga',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0342258',
    imagem: 'https://image.tmdb.org/t/p/w300/2LCejE5Hkg5g5KvhnT8hBYJwZ8G.jpg'
},
{
    titulo: 'O Grande Mestre 4',
    descricao: 'Descrição do filme 17',
    imdb: 'tt2076298',
    imagem: 'https://image.tmdb.org/t/p/w300/7o7jvOGAIzu7nitHFGzoDjPqIJo.jpg'
},
{
    titulo: 'O Grande Mestre 3',
    descricao: 'Descrição do filme 18',
    imdb: 'tt2888046',
    imagem: 'https://image.tmdb.org/t/p/w300/24E7IAfZsmQIBVydzw994navV5b.jpg'
},
{
    titulo: 'O Grande Mestre 2',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1386932',
    imagem: 'https://image.tmdb.org/t/p/w300/ik2fNhSATobUCukor4pKjT82Tvb.jpg'
},
{
    titulo: 'O Grande Mestre',
    descricao: 'Descrição do filme 20',
    imdb: 'tt1220719',
    imagem: 'https://image.tmdb.org/t/p/w300/3v06xJfco8hMDaMYOdUaxquh7hx.jpg'
},
{
    titulo: 'A Voz Suprema do Blues',
    descricao: 'Descrição do filme 21',
    imdb: 'tt10514222',
    imagem: 'https://image.tmdb.org/t/p/w300/qAHr52Tzmn2Nywsj9bPb1V18jdm.jpg'
},
{
    titulo: 'Adoráveis Mulheres',
    descricao: 'Descrição do filme 22',
    imdb: 'tt3281548',
    imagem: 'https://image.tmdb.org/t/p/w300/1dwhsiuvNyQmA9ytp3T40uz4MOv.jpg'
},
{
    titulo: 'Cidade Perdida',
    descricao: 'Descrição do filme 23',
    imdb: 'tt13320622',
    imagem: 'https://image.tmdb.org/t/p/w300/vsX9gj7t56ZlMYKNYccskeW5adT.jpg'
},
{
    titulo: 'Somente Você',
    descricao: 'Descrição do filme 24',
    imdb: 'tt8689270',
    imagem: 'https://image.tmdb.org/t/p/w300/rMVITUa2UmPtBWtLAnxtYqSsAuv.jpg'
},
{
    titulo: 'Árvores da Paz',
    descricao: 'Descrição do filme 1',
    imdb: 'tt11316680',
    imagem: 'https://image.tmdb.org/t/p/w300/afMQQrv7np2IycgkpymhOjqCsrs.jpg'
},
{
    titulo: 'A Hora do Desespero',
    descricao: 'Descrição do filme 2',
    imdb: 'tt13133936',
    imagem: 'https://image.tmdb.org/t/p/w300/xt3sIBS3Fy39JewUWJi9itj66pw.jpg'
},
{
    titulo: 'Coração de Fogo',
    descricao: 'Descrição do filme 3',
    imdb: 'tt8354218',
    imagem: 'https://image.tmdb.org/t/p/w300/bBYfhuIOld8UafUF5rDScxroLit.jpg'
},
{
    titulo: 'O Mal Está ao Seu Lado',
    descricao: 'Descrição do filme 4',
    imdb: 'tt12739994',
    imagem: 'https://image.tmdb.org/t/p/w300/a8jC9WbWS7LBrJhpCnoTkD67Mo.jpg'
},
{
    titulo: 'A Máscara de Ferro',
    descricao: 'Descrição do filme 5',
    imdb: 'tt6218010',
    imagem: 'https://image.tmdb.org/t/p/w300/f4TV8H3kQQdzXtAXPRDCzLILKIy.jpg'
},
{
    titulo: 'Fresh',
    descricao: 'Descrição do filme 6',
    imdb: 'tt13403046',
    imagem: 'https://image.tmdb.org/t/p/w300/tlu71AgaL3EQBBCNGsAwZLPbV5D.jpg'
},
{
    titulo: 'Um Casal Inseparável',
    descricao: 'Descrição do filme 7',
    imdb: 'tt12003826',
    imagem: 'https://image.tmdb.org/t/p/w300/pJj7RenAAZ97GJpd9UYVC8Oj45H.jpg'
},
{
    titulo: 'Inferno na Fronteira',
    descricao: 'Descrição do filme 8',
    imdb: 'tt8652584',
    imagem: 'https://image.tmdb.org/t/p/w300/lp9yaPNrdz1cck6qLcMZNQ27wsd.jpg'
},
{
    titulo: 'A Caverna',
    descricao: 'Descrição do filme 9',
    imdb: 'tt4815122',
    imagem: 'https://image.tmdb.org/t/p/w300/jO2DM1VhAnCwkf9C7R0aBCQUXLH.jpg'
},
{
    titulo: 'Os Jovens Titãs em Ação! e DC Super Hero Girls: Caos no Multiverso',
    descricao: 'Descrição do filme 10',
    imdb: 'tt18250460',
    imagem: 'https://image.tmdb.org/t/p/w300/jx6Bgp55TadD0NoFJ8QnAdnfYX.jpg'
},
{
    titulo: 'Meu Ex é Noivo da Minha Amiga',
    descricao: 'Descrição do filme 11',
    imdb: 'tt3512900',
    imagem: 'https://image.tmdb.org/t/p/w300/q0wlfkipg5bySrqRdaRkhfd66au.jpg'
},
{
    titulo: 'A Torre Negra',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1648190',
    imagem: 'https://image.tmdb.org/t/p/w300/t4IeczvPNloj3IrDm2NjALKMV01.jpg'
},
{
    titulo: 'O Mauritano',
    descricao: 'Descrição do filme 13',
    imdb: 'tt4761112',
    imagem: 'https://image.tmdb.org/t/p/w300/W5Keg8TT9hYfEpIWCawh9dXjXf.jpg'
},
{
    titulo: 'Arremessando Alto',
    descricao: 'Descrição do filme 14',
    imdb: 'tt8009428',
    imagem: 'https://image.tmdb.org/t/p/w300/25aPHMlZNP5F3fgxUo4XB7xUVz7.jpg'
},
{
    titulo: 'Capitão América',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0103923',
    imagem: 'https://image.tmdb.org/t/p/w300/j9Jq4feBhAJTjEj4CvNuMgRwUjW.jpg'
},
{
    titulo: 'A Vila dos Suicídios',
    descricao: 'Descrição do filme 16',
    imdb: 'tt12740648',
    imagem: 'https://image.tmdb.org/t/p/w300/2ArHhi0AzjSFYrp1m0xZVjdhws5.jpg'
},
{
    titulo: 'O Rei da Paquera',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0093737',
    imagem: 'https://image.tmdb.org/t/p/w300/2BM1sBZkmpxL1qPSVj9YnDtXULA.jpg'
},
{
    titulo: 'O Grinch',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0170016',
    imagem: 'https://image.tmdb.org/t/p/w300/vDtJA6DdwLpwoV60rKLWOCt63gK.jpg'
},
{
    titulo: 'A Maldição da Casa Winchester',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1072748',
    imagem: 'https://image.tmdb.org/t/p/w300/oMS8uz4DrQoP2OU0MHr7KGFdpww.jpg'
},
{
    titulo: 'Le notti del terrore',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0081248',
    imagem: 'https://image.tmdb.org/t/p/w300/d3CGqACHPD3YXfhOR3IKsWl2f7v.jpg'
},
{
    titulo: 'Fim dos Dias',
    descricao: 'Descrição do filme 21',
    imdb: 'tt0146675',
    imagem: 'https://image.tmdb.org/t/p/w300/31wishCRJiAQzWCv4Xl6MOmID8X.jpg'
},
{
    titulo: 'De Volta para o Presente',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0124298',
    imagem: 'https://image.tmdb.org/t/p/w300/uagAZJ5Uo0UUqk2nn8Geom42Mdh.jpg'
},
{
    titulo: 'Eles Vivem',
    descricao: 'Descrição do filme 23',
    imdb: 'tt0096256',
    imagem: 'https://image.tmdb.org/t/p/w300/eaItFukc7nG2NGz3ZzpTrKSrhgw.jpg'
},
{
    titulo: 'Equilibrium',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0238380',
    imagem: 'https://image.tmdb.org/t/p/w300/rHXNrxpi1hx39zy4nNz0tX9eeD0.jpg'
},
{
    titulo: 'A Vida Gira',
    descricao: 'Descrição do filme 1',
    imdb: 'tt9248888',
    imagem: 'https://image.tmdb.org/t/p/w300/dOIb7faqFhXJwvG5jPO0yT3KkzK.jpg'
},
{
    titulo: 'Kung Fu Mortal',
    descricao: 'Descrição do filme 2',
    imdb: 'tt2952602',
    imagem: 'https://image.tmdb.org/t/p/w300/xNhfwyCc8VbNihckTTwOC2bsjtG.jpg'
},
{
    titulo: 'LEAL Só Existe Uma Maneira de Viver',
    descricao: 'Descrição do filme 3',
    imdb: 'tt7606620',
    imagem: 'https://image.tmdb.org/t/p/w300/uY23jloBJ0EzCa7gvs1u5HVnYf0.jpg'
},
{
    titulo: 'Fratura',
    descricao: 'Descrição do filme 4',
    imdb: 'tt4332232',
    imagem: 'https://image.tmdb.org/t/p/w300/vsvmurub7aShF1PIFJS2l2D5ArS.jpg'
},
{
    titulo: 'Um Amor para Recordar',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0281358',
    imagem: 'https://image.tmdb.org/t/p/w300/bHGy880CLtV5u7xjUdwMxUmWSHu.jpg'
},
{
    titulo: 'Vidas à Deriva',
    descricao: 'Descrição do filme 6',
    imdb: 'tt6306064',
    imagem: 'https://image.tmdb.org/t/p/w300/cejjvrBhIgnUx1RJQaKG0T3c1sG.jpg'
},
{
    titulo: 'A Nuvem Rosa',
    descricao: 'Descrição do filme 7',
    imdb: 'tt3548874',
    imagem: 'https://image.tmdb.org/t/p/w300/cMebkU27UYVoPg1FA12uHp6ilkM.jpg'
},
{
    titulo: 'Epa! Cadê o Noé?',
    descricao: 'Descrição do filme 8',
    imdb: 'tt3411432',
    imagem: 'https://image.tmdb.org/t/p/w300/tWQgAbAWp1Iu0f3dTQnTYnEEpUW.jpg'
},
{
    titulo: 'Por Amor ou Por Dinheiro',
    descricao: 'Descrição do filme 9',
    imdb: 'tt7051624',
    imagem: 'https://image.tmdb.org/t/p/w300/u1UrUpOjTJJmkzCuQcNOzJX33I9.jpg'
},
{
    titulo: 'Quem é Essa Garota?',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0094321',
    imagem: 'https://image.tmdb.org/t/p/w300/y45tshg5BB1kkPzK6Vi5aeGcolN.jpg'
},
{
    titulo: 'Em Nome do Pai',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0107207',
    imagem: 'https://image.tmdb.org/t/p/w300/ctBYNytD8qwxHyKYHDGsrYvCXu2.jpg'
},
{
    titulo: 'Amor à Flor da Pele',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0118694',
    imagem: 'https://image.tmdb.org/t/p/w300/eFqBkLBS8KLnGLXT8uHO2m362GS.jpg'
},
{
    titulo: 'Jogador N° 1',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1677720',
    imagem: 'https://image.tmdb.org/t/p/w300/sN46sgCsWqwgHMu4mEtKJ19knVr.jpg'
},
{
    titulo: 'Branca de Neve e os Sete Anões',
    descricao: 'Descrição do filme 14',
    imdb: 'tt0029583',
    imagem: 'https://image.tmdb.org/t/p/w300/5l0dsoLXP2eifLQ0lFCYNC5Lcv0.jpg'
},
{
    titulo: 'Cuidado Com As Gêmeas',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0094739',
    imagem: 'https://image.tmdb.org/t/p/w300/bII9aifgZkxvJFGVYDqRLcyRJLz.jpg'
},
{
    titulo: 'Eu, Tonya',
    descricao: 'Descrição do filme 16',
    imdb: 'tt5580036',
    imagem: 'https://image.tmdb.org/t/p/w300/1awJ19hydmplGNib38L8solMBHY.jpg'
},
{
    titulo: 'Yaksha: Operação Implacável',
    descricao: 'Descrição do filme 17',
    imdb: 'tt12663250',
    imagem: 'https://image.tmdb.org/t/p/w300/zL8KPd8Rw6KXgdcgytMbzNNrHmc.jpg'
},
{
    titulo: 'Um Jantar Entre Espiões',
    descricao: 'Descrição do filme 18',
    imdb: 'tt3706352',
    imagem: 'https://image.tmdb.org/t/p/w300/bfHTsg7YpUd7YkLSXEeTKjeg7BE.jpg'
},
{
    titulo: 'A Ressurreição de Jesus',
    descricao: 'Descrição do filme 19',
    imdb: 'tt14169248',
    imagem: 'https://image.tmdb.org/t/p/w300/f2ZkDH1ajAdgcMtsVXBeyS7twSf.jpg'
},
{
    titulo: 'Regras do Jogo',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0160797',
    imagem: 'https://image.tmdb.org/t/p/w300/8qU4Df4PXZUO8rYgEXlFkb5BBSs.jpg'
},
{
    titulo: 'Quando as Luzes Se Apagam',
    descricao: 'Descrição do filme 21',
    imdb: 'tt4786282',
    imagem: 'https://image.tmdb.org/t/p/w300/dwcXOX4p0Wecvw3jzEe9GjlRI5Y.jpg'
},
{
    titulo: 'Hospedagem Mortal',
    descricao: 'Descrição do filme 22',
    imdb: 'tt6747818',
    imagem: 'https://image.tmdb.org/t/p/w300/71utG6eQWDkvVm07d0m3afBpeeT.jpg'
},
{
    titulo: 'O Imperador de Paris',
    descricao: 'Descrição do filme 23',
    imdb: 'tt7025976',
    imagem: 'https://image.tmdb.org/t/p/w300/eXbRJiYpQgzcxRmjjHXJVeUxyFQ.jpg'
},
{
    titulo: 'Antes que Termine o Dia',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0332136',
    imagem: 'https://image.tmdb.org/t/p/w300/mRduoGq6vIeNQjsxc60OmF3gqip.jpg'
},
{
    titulo: 'Páginas da Morte',
    descricao: 'Descrição do filme 1',
    imdb: 'tt7222228',
    imagem: 'https://image.tmdb.org/t/p/w300/kUUP3rKim1myvIlv2vmTlRQl8qL.jpg'
},
{
    titulo: 'Assédio Mortal',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0107178',
    imagem: 'https://image.tmdb.org/t/p/w300/7AP8Zthv8QyKnEQ1tMpJwaojkna.jpg'
},
{
    titulo: 'Crimes em Primeiro Grau',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0257756',
    imagem: 'https://image.tmdb.org/t/p/w300/cYkeRtVTw01AoQMCdAkRlAsd6oE.jpg'
},
{
    titulo: 'Fração de Segundos',
    descricao: 'Descrição do filme 4',
    imdb: 'tt8809652',
    imagem: 'https://image.tmdb.org/t/p/w300/om9LLjsNgwE36OEnIbFxlXK3YDn.jpg'
},
{
    titulo: 'Playmobil: O Filme',
    descricao: 'Descrição do filme 5',
    imdb: 'tt4199898',
    imagem: 'https://image.tmdb.org/t/p/w300/iOtzxWZbveKez2wUGLlH9QkIA5E.jpg'
},
{
    titulo: 'Corina, Uma Babá Perfeita',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0109484',
    imagem: 'https://image.tmdb.org/t/p/w300/pYZOe1JWOSsXdczMn4ssZSBULPo.jpg'
},
{
    titulo: 'Segurança em Risco',
    descricao: 'Descrição do filme 7',
    imdb: 'tt3501112',
    imagem: 'https://image.tmdb.org/t/p/w300/crGliGBsymh6qQTM876pSyKsoZs.jpg'
},
{
    titulo: 'Olhos de Gato',
    descricao: 'Descrição do filme 8',
    imdb: 'tt0088889',
    imagem: 'https://image.tmdb.org/t/p/w300/3UKPrcUdMedexjOKAfcDoJreoZO.jpg'
},
{
    titulo: 'O Enigma de Outro Mundo',
    descricao: 'Descrição do filme 9',
    imdb: 'tt0084787',
    imagem: 'https://image.tmdb.org/t/p/w300/jCEiFLzzmFw1Ijfs3YRy8yqHs9U.jpg'
},
{
    titulo: 'Sequestros em Cleveland',
    descricao: 'Descrição do filme 10',
    imdb: 'tt4262142',
    imagem: 'https://image.tmdb.org/t/p/w300/pzpH9VDFAFw2qOnY1ZZaHg6AaJA.jpg'
},
{
    titulo: 'Marcado',
    descricao: 'Descrição do filme 11',
    imdb: 'tt1368440',
    imagem: 'https://image.tmdb.org/t/p/w300/3QsiKQpYLztrv6udSXviHO72Eqo.jpg'
},
{
    titulo: 'Oliver Grafite',
    descricao: 'Descrição do filme 12',
    imdb: 'tt10077034',
    imagem: 'https://image.tmdb.org/t/p/w300/7sXthW46RwmPBdacGHnhOzLv40d.jpg'
},
{
    titulo: 'As Pontes de Madison',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0112579',
    imagem: 'https://image.tmdb.org/t/p/w300/ahC9ZWvPMXnQhKY8prrS1eq8Gpl.jpg'
},
{
    titulo: 'Caçador de Mutantes',
    descricao: 'Descrição do filme 14',
    imdb: 'tt9458062',
    imagem: 'https://image.tmdb.org/t/p/w300/wCxfoNHBQ8Pqrmnx5B0sYZMKt0j.jpg'
},
{
    titulo: 'A Fortaleza',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0091069',
    imagem: 'https://image.tmdb.org/t/p/w300/3Gun7X4CbfdzsLDhc0jFPO61gFt.jpg'
},
{
    titulo: 'Um Laço de Amor',
    descricao: 'Descrição do filme 16',
    imdb: 'tt4481414',
    imagem: 'https://image.tmdb.org/t/p/w300/21uwPrntyCV9Z0LW7pZcVfbrqWo.jpg'
},
{
    titulo: 'The Doctor',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0101746',
    imagem: 'https://image.tmdb.org/t/p/w300/rExMpi701EIvEGu49FlOS8I0Kag.jpg'
},
{
    titulo: 'Um Dia Perfeito',
    descricao: 'Descrição do filme 18',
    imdb: 'tt3577624',
    imagem: 'https://image.tmdb.org/t/p/w300/93Rr5c1zx6viEDzoRCdk0SEbTzo.jpg'
},
{
    titulo: 'O Grande Circo Místico',
    descricao: 'Descrição do filme 19',
    imdb: 'tt3096782',
    imagem: 'https://image.tmdb.org/t/p/w300/mGb7dmGFIWSigLou8FYq8zlqF45.jpg'
},
{
    titulo: 'O Palhaço',
    descricao: 'Descrição do filme 20',
    imdb: 'tt1921043',
    imagem: 'https://image.tmdb.org/t/p/w300/mXSdKbBa2k1qIXmtDAszMYy49jH.jpg'
},
{
    titulo: 'Morte no Paraíso',
    descricao: 'Descrição do filme 21',
    imdb: 'tt3758738',
    imagem: 'https://image.tmdb.org/t/p/w300/u0zxSrBywFkAXzcd5JLI6VCdxCy.jpg'
},
{
    titulo: 'A Batida Perfeita',
    descricao: 'Descrição do filme 22',
    imdb: 'tt9308382',
    imagem: 'https://image.tmdb.org/t/p/w300/bmBTeTQFVLrhqErx8Nen0QiL3Mm.jpg'
},
{
    titulo: 'Kite - Anjo da Vingança',
    descricao: 'Descrição do filme 23',
    imdb: 'tt2044801',
    imagem: 'https://image.tmdb.org/t/p/w300/pCOHumIAdy2RWIH5098zb7Dpj4H.jpg'
},
{
    titulo: 'Bonequinha de Luxo',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0054698',
    imagem: 'https://image.tmdb.org/t/p/w300/iBdn6jkwOKnJ02W8pdljYyCkYch.jpg'
},
{
    titulo: 'Os Jovens Titãs em Ação! Nos Cinemas',
    descricao: 'Descrição do filme 1',
    imdb: 'tt7424200',
    imagem: 'https://image.tmdb.org/t/p/w300/y8sTpoYcjvFut9DtemQcppAQr9s.jpg'
},
{
    titulo: 'Sociedade dos Poetas Mortos',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0097165',
    imagem: 'https://image.tmdb.org/t/p/w300/ufmT4SaTd0vfTRIsUIVpgckridb.jpg'
},
{
    titulo: 'Uma Babá Quase Perfeita',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0107614',
    imagem: 'https://image.tmdb.org/t/p/w300/pr972Gc9G84Kt48UVaBOfqgBhbg.jpg'
},
{
    titulo: 'O Homem Bicentenário',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0182789',
    imagem: 'https://image.tmdb.org/t/p/w300/9WEqZFMqi92KyweBbbNCwV8fDzp.jpg'
},
{
    titulo: 'A Nova Onda do Imperador',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0120917',
    imagem: 'https://image.tmdb.org/t/p/w300/iN4nsXWzASSjYUIHUkwSJQ6b2UW.jpg'
},
{
    titulo: 'O Herói Cuco',
    descricao: 'Descrição do filme 6',
    imdb: 'tt3181400',
    imagem: 'https://image.tmdb.org/t/p/w300/y6yeAsB2Ynw0cPUc9yj62eJQXnN.jpg'
},
{
    titulo: 'Condorito: O Filme',
    descricao: 'Descrição do filme 7',
    imdb: 'tt4494382',
    imagem: 'https://image.tmdb.org/t/p/w300/7S09UY3W0EW1Txb8FirnTORqSdm.jpg'
},
{
    titulo: 'Operação Big Hero',
    descricao: 'Descrição do filme 8',
    imdb: 'tt2245084',
    imagem: 'https://image.tmdb.org/t/p/w300/5EodFesjReSDlX1c0I5ANZijBFy.jpg'
},
{
    titulo: 'O Mistério do Relógio na Parede',
    descricao: 'Descrição do filme 9',
    imdb: 'tt2119543',
    imagem: 'https://image.tmdb.org/t/p/w300/nu63HA3CkIq245FphWi2zCObLVJ.jpg'
},
{
    titulo: 'Manchester à Beira-Mar',
    descricao: 'Descrição do filme 10',
    imdb: 'tt4034228',
    imagem: 'https://image.tmdb.org/t/p/w300/cy7fOIXX0MO2HXnTE3Lf0NwjQfN.jpg'
},
{
    titulo: 'O Maníaco',
    descricao: 'Descrição do filme 11',
    imdb: 'tt0081114',
    imagem: 'https://image.tmdb.org/t/p/w300/aKIBqbUZAEwOML4oMMjZS7m4Gvj.jpg'
},
{
    titulo: 'O Impossível',
    descricao: 'Descrição do filme 12',
    imdb: 'tt1649419',
    imagem: 'https://image.tmdb.org/t/p/w300/sLSQBkyrn2r7UfZxefZNrIMNmhP.jpg'
},
{
    titulo: 'A Fantástica Fábrica de Chocolate',
    descricao: 'Descrição do filme 13',
    imdb: 'tt0067992',
    imagem: 'https://image.tmdb.org/t/p/w300/noanwChjqswpEz5FTaqdbztfSsB.jpg'
},
{
    titulo: 'O Segredo de Nora',
    descricao: 'Descrição do filme 14',
    imdb: 'tt7474914',
    imagem: 'https://image.tmdb.org/t/p/w300/p1oJa67yEFtSC2fuB3b9cvF2fyi.jpg'
},
{
    titulo: 'Viva: A Vida é uma Festa',
    descricao: 'Descrição do filme 15',
    imdb: 'tt2380307',
    imagem: 'https://image.tmdb.org/t/p/w300/6oNm06TPz2vGiPc2I52oXW3JwPS.jpg'
},
{
    titulo: 'Luta Pela Honra',
    descricao: 'Descrição do filme 16',
    imdb: 'tt0457355',
    imagem: 'https://image.tmdb.org/t/p/w300/jlewU6hlsxG9fSKjGgtMUrwdeqo.jpg'
},
{
    titulo: 'Miami Vice',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0430357',
    imagem: 'https://image.tmdb.org/t/p/w300/iJPSls4taB09EUKtLj6FjFSprb3.jpg'
},
{
    titulo: 'O Sol Também é Uma Estrela',
    descricao: 'Descrição do filme 18',
    imdb: 'tt6423362',
    imagem: 'https://image.tmdb.org/t/p/w300/1pK9dsRzWQpLyG8XGAbEICKSadn.jpg'
},
{
    titulo: 'La regina dei Cannibali',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0079788',
    imagem: 'https://image.tmdb.org/t/p/w300/g7dY5rbiKrXDBz7uCSrLMcIgjtC.jpg'
},
{
    titulo: 'O Desejo Final',
    descricao: 'Descrição do filme 20',
    imdb: 'tt9109306',
    imagem: 'https://image.tmdb.org/t/p/w300/mp2QTfbfLqydptBf5E2tmHYXosb.jpg'
},
{
    titulo: 'Precisamos Falar Sobre o Kevin',
    descricao: 'Descrição do filme 21',
    imdb: 'tt1242460',
    imagem: 'https://image.tmdb.org/t/p/w300/k13tASemEhEDMV089QOlImesdBq.jpg'
},
{
    titulo: 'Tiro às Cegas',
    descricao: 'Descrição do filme 22',
    imdb: 'tt10103028',
    imagem: 'https://image.tmdb.org/t/p/w300/n7DubA0XNioTnfw3AedrCTxDMPN.jpg'
},
{
    titulo: 'Amundsen: O Explorador',
    descricao: 'Descrição do filme 23',
    imdb: 'tt6054846',
    imagem: 'https://image.tmdb.org/t/p/w300/eOsYNGY9xdRe99jADqIyAp5QbBS.jpg'
},
{
    titulo: 'O Mundo dos Pequeninos',
    descricao: 'Descrição do filme 24',
    imdb: 'tt1568921',
    imagem: 'https://image.tmdb.org/t/p/w300/yovlgDFP53N7IW7O4irM6INBxmp.jpg'
},
{
    titulo: 'Jurassic World: Domínio',
    descricao: 'Descrição do filme 1',
    imdb: 'tt8041270',
    imagem: 'https://image.tmdb.org/t/p/w300/rvX8f3QuUkYtirO0hL9CoeXMzkv.jpg'
},
{
    titulo: 'Marley & Eu',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0822832',
    imagem: 'https://image.tmdb.org/t/p/w300/4P9L5dFWz8q79YJ9mdAQ5BcQBTG.jpg'
},
{
    titulo: 'O Comando',
    descricao: 'Descrição do filme 3',
    imdb: 'tt12689248',
    imagem: 'https://image.tmdb.org/t/p/w300/gZuWBZVRJFvczvLUtdh9auGV1Nb.jpg'
},
{
    titulo: 'A Testemunha',
    descricao: 'Descrição do filme 4',
    imdb: 'tt0090329',
    imagem: 'https://image.tmdb.org/t/p/w300/bDqe1Peqo1VouU9tJPFyvzAvxHy.jpg'
},
{
    titulo: 'Até Que Enfim é Sexta-feira',
    descricao: 'Descrição do filme 5',
    imdb: 'tt0078382',
    imagem: 'https://image.tmdb.org/t/p/w300/l6CIlG6SULS5TJ4ite2CX10gRlf.jpg'
},
{
    titulo: 'O Caderno de Sara',
    descricao: 'Descrição do filme 6',
    imdb: 'tt6599742',
    imagem: 'https://image.tmdb.org/t/p/w300/l0UTCila9xN5XqYVDHafHClskKW.jpg'
},
{
    titulo: 'A Montanha Sagrada',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0071615',
    imagem: 'https://image.tmdb.org/t/p/w300/cZemtR2mXzqu4zLSMEzLbOQYMQp.jpg'
},
{
    titulo: 'Terra Selvagem',
    descricao: 'Descrição do filme 8',
    imdb: 'tt5362988',
    imagem: 'https://image.tmdb.org/t/p/w300/8sAYFKKYCfG8WaGYjUT15viDzax.jpg'
},
{
    titulo: 'Suspíria: A Dança do Medo',
    descricao: 'Descrição do filme 9',
    imdb: 'tt1034415',
    imagem: 'https://image.tmdb.org/t/p/w300/qklGv6ZvmIpEP7RTInbngyKUT5V.jpg'
},
{
    titulo: 'O Que Ficou para Trás',
    descricao: 'Descrição do filme 10',
    imdb: 'tt8508734',
    imagem: 'https://image.tmdb.org/t/p/w300/5JvbgcbYIzOgOPVFGsPlSWBG89m.jpg'
},
{
    titulo: 'Aileen Wuornos: Mente Assassina',
    descricao: 'Descrição do filme 11',
    imdb: 'tt14265992',
    imagem: 'https://image.tmdb.org/t/p/w300/7JqtbHj6TecZzC6JEbgTLFrYCto.jpg'
},
{
    titulo: 'Uma Linda Mulher',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0100405',
    imagem: 'https://image.tmdb.org/t/p/w300/biKuy0cj1ABfitVwMgnRqIPRfPB.jpg'
},
{
    titulo: 'O Estranho Thomas',
    descricao: 'Descrição do filme 13',
    imdb: 'tt1767354',
    imagem: 'https://image.tmdb.org/t/p/w300/9AjBJMDVYVI97i0JN3Opkj9Eskj.jpg'
},
{
    titulo: 'Cam',
    descricao: 'Descrição do filme 14',
    imdb: 'tt8361028',
    imagem: 'https://image.tmdb.org/t/p/w300/hA2zgMyHGOUSf8iO7atblBvKuVt.jpg'
},
{
    titulo: 'O Castelo de Vidro',
    descricao: 'Descrição do filme 15',
    imdb: 'tt2378507',
    imagem: 'https://image.tmdb.org/t/p/w300/tta2KVopH0TN1dEdlCIqWR4AR1k.jpg'
},
{
    titulo: 'A Vida é Agora',
    descricao: 'Descrição do filme 16',
    imdb: 'tt13438734',
    imagem: 'https://image.tmdb.org/t/p/w300/neKaddWZOH6elKQRjI49avgSGfY.jpg'
},
{
    titulo: 'O Farol',
    descricao: 'Descrição do filme 17',
    imdb: 'tt7984734',
    imagem: 'https://image.tmdb.org/t/p/w300/lgz39BfP0T6GO828Ymyku5kBxui.jpg'
},
{
    titulo: 'Zathura: Uma Aventura Espacial',
    descricao: 'Descrição do filme 18',
    imdb: 'tt0406375',
    imagem: 'https://image.tmdb.org/t/p/w300/fyfsHYE7WuncbPvcu6AsiI9YRit.jpg'
},
{
    titulo: '16 Desejos',
    descricao: 'Descrição do filme 19',
    imdb: 'tt1646876',
    imagem: 'https://image.tmdb.org/t/p/w300/cl8nemnK7RZ9U9wxOTEGnzKiU4t.jpg'
},
{
    titulo: 'Luta Pela Fé: A História do Padre Stu',
    descricao: 'Descrição do filme 20',
    imdb: 'tt14439896',
    imagem: 'https://image.tmdb.org/t/p/w300/cz8zbePAot9kRAlABXdlNfVv6CL.jpg'
},
{
    titulo: 'Os Sete Pecados Capitais: Prisioneiros do Céu',
    descricao: 'Descrição do filme 21',
    imdb: 'tt9089294',
    imagem: 'https://image.tmdb.org/t/p/w300/r6pPUVUKU5eIpYj4oEzidk5ZibB.jpg'
},
{
    titulo: 'Lu Está Livre',
    descricao: 'Descrição do filme 22',
    imdb: 'tt6452332',
    imagem: 'https://image.tmdb.org/t/p/w300/9Y4tUabjr4uftipKKwu6wOQQBOU.jpg'
},
{
    titulo: 'Sword Art Online: Ordinal Scale',
    descricao: 'Descrição do filme 23',
    imdb: 'tt5544384',
    imagem: 'https://image.tmdb.org/t/p/w300/Alntdcf829Cv115No44KOJb23IA.jpg'
},
{
    titulo: 'Street Fighter II: O Filme',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0114563',
    imagem: 'https://image.tmdb.org/t/p/w300/d0WmVroW23YVFB4uLFUqfqiHsYr.jpg'
},
{
    titulo: 'Re:Zero kara Hajimeru Isekai Seikatsu - Memory Snow',
    descricao: 'Descrição do filme 1',
    imdb: 'tt8565186',
    imagem: 'https://image.tmdb.org/t/p/w300/bscSUr4nS0Kn5vY1Bj0NGhHGnb.jpg'
},
{
    titulo: 'Neon Genesis Evangelion: O Fim do Evangelho',
    descricao: 'Descrição do filme 2',
    imdb: 'tt0169858',
    imagem: 'https://image.tmdb.org/t/p/w300/txDIbdn7p6eYdFMVoHbd4wwrNkM.jpg'
},
{
    titulo: 'The Seven Deadly Sins: Cursed by Light',
    descricao: 'Descrição do filme 3',
    imdb: 'tt13884144',
    imagem: 'https://image.tmdb.org/t/p/w300/8AnML0t6LreZyiQ1kVkJVzoGltZ.jpg'
},
{
    titulo: 'Além do Céu',
    descricao: 'Descrição do filme 4',
    imdb: 'tt13139218',
    imagem: 'https://image.tmdb.org/t/p/w300/rkqPaAJESYdQtCS9EjKkllLcYRJ.jpg'
},
{
    titulo: 'Evangelion: 3.0+1.01 A Esperança',
    descricao: 'Descrição do filme 5',
    imdb: 'tt2458948',
    imagem: 'https://image.tmdb.org/t/p/w300/tQ6P7q6vrH8ym7knYmuA6SKmfFZ.jpg'
},
{
    titulo: 'A Árvore da Vida',
    descricao: 'Descrição do filme 6',
    imdb: 'tt0478304',
    imagem: 'https://image.tmdb.org/t/p/w300/iDt5nvv2TdZsFFuF5JvnEZr6RGB.jpg'
},
{
    titulo: 'Mulheres à Beira de um Ataque de Nervos',
    descricao: 'Descrição do filme 7',
    imdb: 'tt0095675',
    imagem: 'https://image.tmdb.org/t/p/w300/2Z7yw7dvMnxiJMazaDg5IcHuQ0m.jpg'
},
{
    titulo: 'Passageiro 666',
    descricao: 'Descrição do filme 8',
    imdb: 'tt12036270',
    imagem: 'https://image.tmdb.org/t/p/w300/lUwStG9I5MXpLkV0yV1HYRCwxB9.jpg'
},
{
    titulo: 'A Favorita',
    descricao: 'Descrição do filme 9',
    imdb: 'tt5083738',
    imagem: 'https://image.tmdb.org/t/p/w300/uBOytbDGmdiUVt3NNXx5HaoL3fn.jpg'
},
{
    titulo: 'A Mexicana',
    descricao: 'Descrição do filme 10',
    imdb: 'tt0236493',
    imagem: 'https://image.tmdb.org/t/p/w300/gp81OzJEQb0OHrrcQPvGJajAKTr.jpg'
},
{
    titulo: 'A Gripe',
    descricao: 'Descrição do filme 11',
    imdb: 'tt2351310',
    imagem: 'https://image.tmdb.org/t/p/w300/x5RJvivnXItnJOFP3fJfuu8wt8M.jpg'
},
{
    titulo: 'A Fantástica Fábrica de Chocolate',
    descricao: 'Descrição do filme 12',
    imdb: 'tt0367594',
    imagem: 'https://image.tmdb.org/t/p/w300/vSl1u0z4TCKL4VPVyr6KDtZibYT.jpg'
},
{
    titulo: 'A Família Bélier',
    descricao: 'Descrição do filme 13',
    imdb: 'tt3547740',
    imagem: 'https://image.tmdb.org/t/p/w300/HpcHsq3XXcCBjb7pNQzZcslvgH.jpg'
},
{
    titulo: 'Bubble',
    descricao: 'Descrição do filme 14',
    imdb: 'tt16360006',
    imagem: 'https://image.tmdb.org/t/p/w300/mIeQQgXxPyX2VwRLMl6jsvD2KOR.jpg'
},
{
    titulo: 'As Aventuras de Peter Pan',
    descricao: 'Descrição do filme 15',
    imdb: 'tt0046183',
    imagem: 'https://image.tmdb.org/t/p/w300/moixbncq5YyZ2dKkbFoclv4f7SG.jpg'
},
{
    titulo: 'A Extraordinária Garota Chamada Estrela em Hollywood',
    descricao: 'Descrição do filme 16',
    imdb: 'tt14109994',
    imagem: 'https://image.tmdb.org/t/p/w300/2h5C9SDYM3hk2xDJQZP0SKSVVZT.jpg'
},
{
    titulo: 'Interceptor',
    descricao: 'Descrição do filme 17',
    imdb: 'tt14174940',
    imagem: 'https://image.tmdb.org/t/p/w300/7FUbSUzn07dudjbwW1Skicj17nS.jpg'
},
{
    titulo: 'Fire Island: Orgulho & Sedução',
    descricao: 'Descrição do filme 18',
    imdb: 'tt15218000',
    imagem: 'https://image.tmdb.org/t/p/w300/1CbO5NixfMKCLXTqSr3hsfBLXM3.jpg'
},
{
    titulo: 'Morte ao Verão',
    descricao: 'Descrição do filme 19',
    imdb: 'tt8235120',
    imagem: 'https://image.tmdb.org/t/p/w300/w9QODeryktRQktmfZuxGNinna7M.jpg'
},
{
    titulo: 'O Castelo do Lobisomem',
    descricao: 'Descrição do filme 20',
    imdb: 'tt14996254',
    imagem: 'https://image.tmdb.org/t/p/w300/PsjLfJ0tdePq1whoSne7bddobp.jpg'
},
{
    titulo: 'O Ritual: Presença Maligna',
    descricao: 'Descrição do filme 21',
    imdb: 'tt7329642',
    imagem: 'https://image.tmdb.org/t/p/w300/lRB9wWqOGk6LexsDb6VXMsQBdE2.jpg'
},
{
    titulo: 'This Is the Night',
    descricao: 'Descrição do filme 22',
    imdb: 'tt7743120',
    imagem: 'https://image.tmdb.org/t/p/w300/mZPyZ22kzcmfyt1dQapaSiQenvI.jpg'
},
{
    titulo: 'South Park: Guerras do Streaming',
    descricao: 'Descrição do filme 23',
    imdb: 'tt20215904',
    imagem: 'https://image.tmdb.org/t/p/w300/dfgZJlKYg5xm6dBl05bOKhfunXb.jpg'
},
{
    titulo: 'Avatar: O Caminho da Água',
    descricao: 'Descrição do filme 24',
    imdb: 'tt1630029',
    imagem: 'https://image.tmdb.org/t/p/w300/tnmdUnztAYbfJ0jhjpN6oxwP2sb.jpg'
},
{
    titulo: 'Thor: Amor e Trovão',
    descricao: 'Descrição do filme 1',
    imdb: 'tt10648342',
    imagem: 'https://image.tmdb.org/t/p/w300/nib6Eyx8o1fS1awwfVYLALIayF7.jpg'
},
{
    titulo: 'Pinóquio',
    descricao: 'Descrição do filme 2',
    imdb: 'tt4593060',
    imagem: 'https://image.tmdb.org/t/p/w300/wlENRN5rq24qjr40Cd7fUWe7DwI.jpg'
},
{
    titulo: 'Contos do Dia das Bruxas',
    descricao: 'Descrição do filme 3',
    imdb: 'tt0862856',
    imagem: 'https://image.tmdb.org/t/p/w300/1wr3hBGt8oqpwJENmtXHYW40h5E.jpg'
},
{
    titulo: 'Splice - A Nova Espécie',
    descricao: 'Descrição do filme 4',
    imdb: 'tt1017460',
    imagem: 'https://image.tmdb.org/t/p/w300/lxZibGnPJJTq47J63RUSxG2vDf5.jpg'
},
{
    titulo: 'Os Caras Malvados',
    descricao: 'Descrição do filme 5',
    imdb: 'tt8115900',
    imagem: 'https://image.tmdb.org/t/p/w300/syKg3OmdtSYmkA7nNdtPUYdSFGL.jpg'
},
{
    titulo: 'As Aventuras de Robinson Crusoé',
    descricao: 'Descrição do filme 6',
    imdb: 'tt4731008',
    imagem: 'https://image.tmdb.org/t/p/w300/hDd30gFdkZh3U3pf6m4yEFtX41U.jpg'
},
{
    titulo: 'O Contador de Cartas',
    descricao: 'Descrição do filme 7',
    imdb: 'tt11196036',
    imagem: 'https://image.tmdb.org/t/p/w300/lZzWINLDNkhYn6B3IW8jZuqNllG.jpg'
},
{
    titulo: 'O Marinheiro das Montanhas',
    descricao: 'Descrição do filme 8',
    imdb: 'tt9619234',
    imagem: 'https://image.tmdb.org/t/p/w300/yiugwRIPkUEbxKKknrkp35LlcCu.jpg'
},
{
    titulo: 'Luccas Neto em: O Plano dos Vilões',
    descricao: 'Descrição do filme 9',
    imdb: 'tt19768812',
    imagem: 'https://image.tmdb.org/t/p/w300/p4ck2CY4r01FXkOXz4TwJcaSiPf.jpg'
},
{
    titulo: 'Fortaleza: O Olhar Do Sniper',
    descricao: 'Descrição do filme 10',
    imdb: 'tt14577304',
    imagem: 'https://image.tmdb.org/t/p/w300/o9qPBeuLCWT3s8KdfnjKqeQDlzS.jpg'
},
{
    titulo: 'Cyber Hell: Exposing an Internet Horror',
    descricao: 'Descrição do filme 11',
    imdb: 'tt19768508',
    imagem: 'https://image.tmdb.org/t/p/w300/iWI05wWFZvPKCgEqXihjUQLar7r.jpg'
},
{
    titulo: 'Combinação Perfeita',
    descricao: 'Descrição do filme 12',
    imdb: 'tt15215512',
    imagem: 'https://image.tmdb.org/t/p/w300/xBdOs8RqlOAhhgVuqvDDCv4xzsU.jpg'
},
{
    titulo: 'Ambulância: Um Dia de Crime',
    descricao: 'Descrição do filme 13',
    imdb: 'tt4998632',
    imagem: 'https://image.tmdb.org/t/p/w300/k62v5oVhQ0e1sJWJ9nFpiTfcNoD.jpg'
},
{
    titulo: 'A Colmeia',
    descricao: 'Descrição do filme 14',
    imdb: 'tt13648212',
    imagem: 'https://image.tmdb.org/t/p/w300/wkycvzLbq4lAvXQo06GcSa8iGXm.jpg'
},
{
    titulo: 'Destruição Final: O Último Refúgio',
    descricao: 'Descrição do filme 15',
    imdb: 'tt7737786',
    imagem: 'https://image.tmdb.org/t/p/w300/hAUUVBGprFQXaHuhOFDMKELkH4W.jpg'
},
{
    titulo: 'Ghost in the Shell: SAC_2045 – Guerra Sustentável',
    descricao: 'Descrição do filme 16',
    imdb: 'tt15392166',
    imagem: 'https://image.tmdb.org/t/p/w300/mZgikgvgQfzSIop2oQvwuLlHRP2.jpg'
},
{
    titulo: 'Dinossauro',
    descricao: 'Descrição do filme 17',
    imdb: 'tt0130623',
    imagem: 'https://image.tmdb.org/t/p/w300/9aYipPdXLJO2d7Aoa9gnLXHlQfz.jpg'
},
{
    titulo: 'Marmaduke',
    descricao: 'Descrição do filme 18',
    imdb: 'tt8746404',
    imagem: 'https://image.tmdb.org/t/p/w300/bMUhBeMp0vLQzaPBX0izFdnFvh0.jpg'
},
{
    titulo: 'A Casa de Vidro 2',
    descricao: 'Descrição do filme 19',
    imdb: 'tt0498348',
    imagem: 'https://image.tmdb.org/t/p/w300/bgCvpdaNayGWjfxhIQGzpjg9tFt.jpg'
},
{
    titulo: 'Caçador de Almas',
    descricao: 'Descrição do filme 20',
    imdb: 'tt0829176',
    imagem: 'https://image.tmdb.org/t/p/w300/cGBmTiNomYCk6Lr4Gkhbssg0m82.jpg'
},
{
    titulo: 'O Homem do Norte',
    descricao: 'Descrição do filme 21',
    imdb: 'tt11138512',
    imagem: 'https://image.tmdb.org/t/p/w300/mqCLGi2YxlqwWeGN7NRILYQOhm.jpg'
},
{
    titulo: 'Os Flintstones em Viva Rock Vegas',
    descricao: 'Descrição do filme 22',
    imdb: 'tt0158622',
    imagem: 'https://image.tmdb.org/t/p/w300/glaxFaAVF1fekZXttOlWB1VomYY.jpg'
},
{
    titulo: '神さまの言うとおり',
    descricao: 'Descrição do filme 23',
    imdb: 'tt3354222',
    imagem: 'https://image.tmdb.org/t/p/w300/yz31HqnPsjd7Rd0PgDeE2avUJKa.jpg'
},
{
    titulo: 'A Casa Caiu',
    descricao: 'Descrição do filme 24',
    imdb: 'tt0305669',
    imagem: 'https://image.tmdb.org/t/p/w300/i80FjKCtfMKNhH119uoc2E5gDwY.jpg'
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
