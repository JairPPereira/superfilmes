const apiKey = "fcfe44809de84129fab53e785124bb95";
const movieIds = [
  25095, 299054, 983507, 977770, 575157, 1115128, 1151703, 763820, 729120,
  945729, 860267, 804464, 1143190, 820525, 1073337, 1078862, 850871, 1172009,
  763261, 1124624, 1072074, 1075969, 1018754, 790493
];

function displayRandomMovie() {
  const randomMovieId = movieIds[Math.floor(Math.random() * movieIds.length)];
  const apiUrl = `https://api.themoviedb.org/3/movie/${randomMovieId}?api_key=${apiKey}&language=pt-BR`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const backdropPath = data.backdrop_path;
      const movieTitle = data.title;
      const movieOverview = data.overview;

      const movieBackdrop = document.getElementById("movie-backdrop");
      movieBackdrop.src = `https://image.tmdb.org/t/p/original/${backdropPath}`;

      movieBackdrop.addEventListener("click", () => {
        const iframeUrl = `https://embedder.net/e/${randomMovieId}`;
        window.open(`single-movie2.html?iframeUrl=${encodeURIComponent(iframeUrl)}`, "_blank");
      });

      const movieTitleElement = document.getElementById("movie-title");
      movieTitleElement.textContent = movieTitle;

      const movieOverviewElement = document.getElementById("movie-overview");
      movieOverviewElement.textContent = movieOverview;
    })
    .catch(error => {
      console.error(`Erro ao obter informações do filme ${randomMovieId}: ${error}`);
    });
}

displayRandomMovie();
