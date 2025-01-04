$(document).ready(function () {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favorites.length === 0) {
    var errorDiv = document.getElementById("favorite-error");
    errorDiv.style.display = "block";
  }
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
                                    <a href="${country.url}" class="btn btn-outline-primary">Ver detalhes</a>
                                    <small class="text-warning favorite " id="favorite"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></small>
                                </div>
                            </div>
                        </div>
                    </div>`;
    favoriteList.append(favoriteCountryCard);
  });
}
