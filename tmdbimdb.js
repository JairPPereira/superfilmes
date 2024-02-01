const axios = require('axios');

async function obterInformacoesFilmeTmdb(imdbId) {
    const apiKey = 'fcfe44809de84129fab53e785124bb95';
    const url = `https://api.themoviedb.org/3/find/${imdbId}?api_key=${apiKey}&language=pt-BR&external_source=imdb_id`;

    try {
        const resposta = await axios.get(url);
        const dados = resposta.data;
        return dados.movie_results.length > 0 ? dados.movie_results[0].id : null;
    } catch (erro) {
        console.error(`Erro na solicitação para IMDb ${imdbId}: ${erro.message}`);
        return null;
    }
}

async function obterIdsTmdbParaListaImdb(listaImdb) {
    const codigosImdb = listaImdb.split('\n').filter(Boolean);
    const idsTmdbPromises = codigosImdb.map(async (imdbCode) => {
        return await obterInformacoesFilmeTmdb(imdbCode);
    });

    const idsTmdb = await Promise.all(idsTmdbPromises);
    return idsTmdb.filter((id) => id !== null).join(', ');
}

// Exemplo de uso
const imdbCodes = `
tt30431349
tt21230032
tt13786042
tt28582081
tt15245390
tt6846978
tt9898844
tt11353050
tt16970906
tt11252490
tt8191850
tt13006472
tt20561198
tt8109800
tt14589900
tt6002094
tt11908172
tt21967800
tt6851410
tt2798920
tt13923216
tt14438348
tt21979910
tt19887550
`;

obterIdsTmdbParaListaImdb(imdbCodes)
    .then((idsTmdb) => {
        console.log(idsTmdb);
    })
    .catch(() => {
        console.log('Não foi possível obter IDs do TMDb para a lista IMDb.');
    });
