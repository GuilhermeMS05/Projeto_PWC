$(document).ready(function () {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  console.log(favorites);
  displayFavoritesCountries(favorites);
});

function displayFavoritesCountries(favoritesCountries) {
  var favoriteList = $("#favorite-countries");
  favoriteList.empty();

  favoritesCountries.forEach((country) => {
    var favoriteCountryCard = `<div class="col-md-4">
                        <div class="card mb-5">
                            <img src="${country.flag}" height="250px" class="card-img-top" alt="${country.name}">
                            <div class="card-body">
                                <h5 class="card-title">${country.name}</h5>
                                <div class="d-flex justify-content-between">
                                    <a href="${country.id}" class="btn btn-outline-primary">Ver detalhes</a>
                                    <small class="text-warning favorite " id="favorite"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                  </svg></small>
                                </div>
                            </div>
                        </div>
                    </div>`;
    favoriteList.append(favoriteCountryCard);
  });
}
