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
tt0095626
tt0062690
tt26067432
tt29639785
tt28260733
tt31037863
tt1527186
tt27503384
tt29259099
tt0183678
tt0082886
tt15009428
tt28066777
tt21335356
tt21387514
tt30833459
tt28015371
tt0113449
tt13429870
tt0076578
tt10311018
tt21379060
tt22749662
tt28078052
tt13009174
tt3704352
tt1254322
tt3104062
tt7670212
tt4262174
`;

obterIdsTmdbParaListaImdb(imdbCodes)
    .then((idsTmdb) => {
        console.log(idsTmdb);
    })
    .catch(() => {
        console.log('Não foi possível obter IDs do TMDb para a lista IMDb.');
    });
