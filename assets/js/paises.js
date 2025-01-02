$(document).ready(function () {
  fetchCountries();
  $("#searchButton").on("click", function () {
    var inputText = $("#searchInput").val().trim();
    fetchCountries(inputText);
  });
});

$(document).on("click", "#favorite", function () {
  const starEmpty = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>`;

  const starFilled = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;

  const countryCard = $(this).closest(".card");
  const countryName = countryCard.find(".card-title").text();
  const countryFlag = countryCard.find("img").attr("src");

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  if ($(this).html().includes("bi-star-fill")) {
    $(this).html(starEmpty);

    const updatedFavorites = favorites.filter((fav) => fav.name !== countryName);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  } else {
    $(this).html(starFilled);

    favorites.push({ name: countryName, flag: countryFlag });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
});

function fetchCountries(inputText) {
  var api_url = "https://restcountries.com/v3.1/all";

  if (inputText) {
    // Alteração para filtrar a busca pelo nome do país.
    api_url = "https://restcountries.com/v3.1/name/" + inputText.toLowerCase();
  }

  $.ajax({
    url: api_url,
    method: "GET",
    success: function (data) {
      //dados vindos do servidor
      console.log(data);
      //estamos a passar o ARRAY dos países devolvidos pelo servidor
      //Se olhar mos para o object data é o search
      displaycountries(data);
    },
    error: function () {
      alert("Erro a tentar encontar países");
    },
  });
}

function displaycountries(arrayPaises) {
  var listapaises = $("#paisList");
  listapaises.empty();

  arrayPaises.forEach((country) => {
    const countryNamePT = country.translations["por"];
    var paisCard = `<div class="col-md-4 mb-3 card-movie">
                            <div class="card shadowbox">
                                <img src="${country.flags["svg"]}" height="250" class="card-img-top" alt="${countryNamePT.common}">
                                <div class="card-body">
                                <h5 class="card-title">${countryNamePT.common}</h5>
                                <div class="d-flex justify-content-between align-items-center">
                                    <a href="detalhes_pais.html?code=${country.ccn3}" class="btn btn-outline-primary">Ver Detalhes</a>
                                    <small class="text-warning favorite" id="favorite"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg></small>
                                </div>
                            </div>
                        </div>`;
    listapaises.append(paisCard);
  });
}
