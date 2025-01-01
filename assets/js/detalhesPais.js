$(document).ready(function () {
  var params = new URLSearchParams(window.location.search);
  var countryCode = params.get("code");
  fetchCountryCode(countryCode);
});

function fetchCountryCode(country_code) {
  var api_url = "https://restcountries.com/v3.1/alpha/" + country_code;

  $.ajax({
    url: api_url,
    method: "GET",
    success: function (data) {
      console.log("Sucesso na busca");
      displayCountry(data);
    },
    error: function () {
      alert("País não encontrado");
    },
  });
}

function displayCountry(arrayCountry){
    var mostraDetalhes = $("#detalhe-pais");
    mostraDetalhes.empty();
    const country = arrayCountry[0];
    const currencyCode = Object.keys(country.currencies)[0];
    const languages = Object.values(country.languages);
    const countryNamePT = country.translations["por"];

    let independentCountry = country.independent;
    let independentCountryHTML;
    let onuMember = country.unMember;
    let onuMemberHtml;

    if(independentCountry == true){
        independentCountryHTML = `<span class="badge bg-success">Sim</span>`;
    } else {
        independentCountryHTML = `<span class="badge bg-danger">Não</span>`;
    }
    if(onuMember == true){
        onuMemberHtml = `<span class="badge bg-success">Sim</span>`;
    } else {
        onuMemberHtml = `<span class="badge bg-danger">Não</span>`;
    }

    var countryDetalhe = `<div class="table-responsive">
            <table class="table table-hover table-bordered table-striped align-middle">
                <thead class="table-dark text-center">
                    <tr>
                        <th colspan="2"><h2>${countryNamePT.common}</h2></th>
                    </tr>
                    <tr>
                        <th>Campo</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="fw-bold">Nome Comum</td>
                        <td>${countryNamePT.common}</td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Nome Oficial</td>
                        <td>${countryNamePT.official}</td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Independente</td>
                        <td>
                            ${independentCountryHTML}
                        </td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Membro das Nações Unidas</td>
                        <td>
                            ${onuMemberHtml}
                        </td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Moeda</td>
                        <td>
                            <ul class="list-unstyled mb-0">
                                <li><strong>Nome:</strong> ${country.currencies[currencyCode].name}</li>
                                <li><strong>Sigla:</strong> ${currencyCode}</li>
                                <li><strong>Símbolo:</strong> ${country.currencies[currencyCode].symbol}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Capital</td>
                        <td>${country.capital}</td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Continente</td>
                        <td>${country.continents}</td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Língua(s) Oficial(is)</td>
                        <td>${languages}</td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Bandeira</td>
                        <td class="text-center">
                            <img src="${country.flags["svg"]}" alt="${country.flags["alt"]}" class="img-fluid" style="max-width: 150px;">
                        </td>
                    </tr>
                    <tr>
                        <td class="fw-bold">População</td>
                        <td>${country.population}</td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Fuso Horário</td>
                        <td>${country.timezones}</td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    mostraDetalhes.append(countryDetalhe);
}
