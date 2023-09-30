const apiKey = "fcfe44809de84129fab53e785124bb95";
const movieIds = [
  951491, 1167725, 1093349, 522526, 507903, 1130659, 814776, 1074034, 977592, 1146348, 923939, 818511, 25095, 299054, 983507, 977770, 575157, 1115128, 1151703, 763820, 729120, 945729, 860267, 804464, 1143190, 820525, 1073337, 1078862, 850871, 1172009, 763261, 1124624, 1072074, 1075969, 1018754, 790493, 950071, 968051, 353577, 1088812, 1113448, 1122634, 1152797, 1072371, 991708, 884184, 962279, 1093994, 753601, 885583, 1126418, 869523, 807023, 1165111, 1579, 844409, 892494, 1158385, 1088080, 983768, 960481, 1135229, 977246, 977223, 936952, 1032696, 540914, 970284, 1076487, 791295, 532408, 926393, 1126577, 1139819, 978783, 760099, 999644, 1151344, 1155458, 869641, 1121575, 823147, 1074262, 782044, 1150215, 1026542, 1010826, 1159086, 916386, 830896, 828898, 976553, 1064912, 1030987, 1064835, 1020532, 1142740, 1116848, 745391, 777245, 958340, 829774, 920654, 522925, 957445, 993867, 1146019, 647250, 568467, 300667, 547404, 520720, 631583, 893345, 22538, 1153222, 1158959, 87827, 635910, 27850, 63197, 1128604, 832502, 565770, 1140056, 930094, 1141202, 10677, 149, 259171, 457335, 614930, 1131444, 980489, 821890, 1149381, 8645, 1138603, 1126536, 1126543, 61348, 2098, 474392, 18254, 38884, 691422, 1008042, 913673, 615656, 496450, 38, 846961, 841, 391713, 881209, 457332, 2253, 10756, 52451, 834404, 1008392, 681986, 722778, 1082168, 646473, 636173, 1059638, 1128719, 1148969, 16859, 736769, 10515, 21057, 12429, 437109, 30143, 15371, 184313, 32873, 283378, 9655, 26688, 1024535, 14011, 17445, 381289, 45162, 376134, 500854, 24982, 785457, 822099, 1126844, 1128718, 890771, 177271, 324849, 747188, 805320, 11416, 1149947, 835786, 1058647, 1083862, 953371, 872585, 346698, 614479, 778814, 1075335, 1139162, 369557, 587092, 980078, 449992, 531122
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
        window.open(`single-movie3.html?iframeUrl=${encodeURIComponent(iframeUrl)}`, "_blank");
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
