const apiKey = "fcfe44809de84129fab53e785124bb95";
const movieIds = [950071, 968051, 353577, 1088812, 1113448, 1122634, 1152797, 1072371, 991708, 884184, 962279, 1093994, 753601, 885583, 1126418, 869523, 807023, 1165111, 1579, 844409, 892494, 1158385, 1088080, 983768,
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

      function openMovie(titulo, url) {
        window.location.href = 'single-movie.html?titulo=' + encodeURIComponent(titulo) + '&url=' + encodeURIComponent(url);
    }

      movieBackdrop.addEventListener("click", () => {
        const detailsUrl = `https://jp-app.netlify.app/details/${randomMovieId}`;
        window.open(detailsUrl, "_blank");
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