$(document).ready(function () {
  fetchCountries();
  $("#searchButton").on("click", function () {
    var inputText = $("#searchInput").val().trim();
    fetchCountries(inputText);
  });
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
                                    <a href="detalhes_pais.html?code=${country.ccn3}" class="btn btn-outline-secondary">Ver Detalhes</a>
                                    <small class="text-body-secondary">icone de favoritos</small>
                                </div>
                            </div>
                        </div>`;
    listapaises.append(paisCard);
  });
}
