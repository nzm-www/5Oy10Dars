const wrapper = document.querySelector(".wrapper");
fetch("https://restcountries.com/v3.1/all")
  .then((data) => {
    return data.json();
  })
  .then((davlatlar) => {
    davlatlar.forEach((davlat) => {
      wrapper.innerHTML += addcard(davlat);
    });
  });
function addcard(davlat) {
  return `<div class="box" id="box">
  <img class="img" id="img" src="${davlat.flags.png}" width="300" alt="" />
  <h2 class="davlatbname" id="davlatname">${davlat.name.common}</h2>
  <p class="populetion" id="populetion">Populetion:${davlat.population}</p>
  <p class="region" id="region">Region: ${davlat.region}</p>
  <p class="capital" id="capital">capital:${davlat.capital}</p>
</div>`;
}