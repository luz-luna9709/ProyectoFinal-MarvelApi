const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=86aa3a6d6d7c594fcfc93f624bbd6ca4&hash=922e4503ae81ad93578deb1bd4221dce';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(respuesta => respuesta.json())
        .then((json) => {
            for (const hero of json.data.results) {
                let urlHero = hero.urls[0].url;
                contentHTML += `
                  <div class="col-md-4">
                      <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                      </a>
                      <h3 class="title">${hero.name}</h3>
                  </div>`;
              }
              container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();

function search_series(title){

  const container = document.querySelector('#series');
  let seriesm = map.get(title);
  let urlSerie = seriesm.urls[0].url;
  container.innerHTML ='';
    container.innerHTML =`
    <div class="col-md-4">
    <a href="${urlSerie}" target="_blank">
    <img src="${seriesm.thumbnail.path}.${seriesm.thumbnail.extension}" alt="${seriesm.title}" class="img-thumbnail">
    </a>
    <h3 class="title">${seriesm.title}</h3>
    <span>Año: ${seriesm.startYear}</span>
</div>`;
} 


  const map = new Map();
  const Seriesmarvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=86aa3a6d6d7c594fcfc93f624bbd6ca4&hash=922e4503ae81ad93578deb1bd4221dce';
      
      const container = document.querySelector('#series');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(respuesta => respuesta.json())
        .then((json) => {

            for (const seriesm of json.data.results) {
              map.set(seriesm.title.trim(), seriesm);
                let urlSerie = seriesm.urls[0].url;
                contentHTML += `
                  <div class="col-md-4">
                      <a href="${urlSerie}" target="_blank">
                        <img src="${seriesm.thumbnail.path}.${seriesm.thumbnail.extension}" alt="${seriesm.title}" class="img-thumbnail">
                      </a>
                      <h3 class="title">${seriesm.title}</h3>
                  </div>`;
              }
              container.innerHTML = contentHTML;
        })
    }
  };
  Seriesmarvel.render();



function search_series(title){

  const container = document.querySelector('#series');
  let seriesm = map.get(title);
  let urlSerie = seriesm.urls[0].url;
  container.innerHTML ='';
    container.innerHTML =`
    <div class="col-md-4">
    <a href="${urlSerie}" target="_blank">
    <img src="${seriesm.thumbnail.path}.${seriesm.thumbnail.extension}" alt="${seriesm.title}" class="img-thumbnail">
    </a>
    <h3 class="title">${seriesm.title}</h3>
    <span>Año: ${seriesm.startYear}</span>
</div>`;
} 

document.getElementById("searchs").addEventListener("click",function(evt){
 let title=document.getElementById("buscadorP").value;
 search_series(title);
});

  function limpiarFormulario() {
    document.getElementById("buscadorP").value="";
  }
