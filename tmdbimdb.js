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
tt9682428
tt15476366
tt26943420
tt6864046
tt14998742
tt15007046
tt14230458
tt17009348
tt10275080
tt10047904
tt19770238
tt10994712
tt11176322
tt10611992
tt12547822
tt15115280
tt15428134
tt7978892
tt16021872
tt3380766
tt8521778
tt1660648
tt10514932
tt13575952
`;

obterIdsTmdbParaListaImdb(imdbCodes)
    .then((idsTmdb) => {
        console.log(idsTmdb);
    })
    .catch(() => {
        console.log('Não foi possível obter IDs do TMDb para a lista IMDb.');
    });
