$(document).ready(function () {
  var homePageCountries =
    "https://restcountries.com/v3.1/alpha?codes=840,124,826";
  fetchCountry(homePageCountries);
});

function fetchCountry(urlCountries) {
  var api_url = urlCountries;

  $.ajax({
    url: api_url,
    method: "GET",
    success: function (data) {
      console.log("Sucesso na busca");
      displayCountries(data);
    },
    error: function () {
      alert("País não encontrado");
    },
  });
}

function displayCountries(arrayCountries) {
  var countries = $("#home-countries");
  countries.empty();

  arrayCountries.forEach((country) => {
    const countryNamePT = country.translations["por"];
    var countryCard = `<div class="col-md-4 pb-3">
                    <a href="detalhes_pais.html?code=${country.ccn3}" class="text-decoration-none text-dark">
                        <div class="card my-card p-3 rounded-0">
                            <img src="${country.flags["svg"]}" class="card-img-top rounded-0"
                                height="200px" alt="${countryNamePT.common}">
                            <div class="text-center pt-4">
                                <p class="card-title fw-bold">${countryNamePT.common}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
    countries.append(countryCard);
  });
}
