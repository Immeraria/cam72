// import("cams.json");

var cams = [
  {
      "mestopolojeniya": "Цветной бульвар",
      "streams": "https://streams.cam72.su/Gorsad/embed.html",
      "screenshots": "https://content.cam72.su/thumbnails/Gorsad-small.jpg"
  },{
      "mestopolojeniya": "Солнечный",
      "streams": "https://streams.cam72.su/Permyakova/embed.html",  
      "screenshots": "https://content.cam72.su/thumbnails/Permyakova-small.jpg"
  },{
      "mestopolojeniya": "Цирк",
      "streams": "https://streams.cam72.su/Gertsena-Pervomayskaya/embed.html",
      "screenshots": "https://content.cam72.su/thumbnails/Gertsena-Pervomayskaya-small.jpg"
  },{
      "mestopolojeniya": "ТК Тюменский",
      "streams": "https://streams.cam72.su/Melnikayte-Gnarovskaya/embed.html",
      "screenshots": "https://content.cam72.su/thumbnails/Melnikayte-Gnarovskaya-small.jpg"
  },{
      "mestopolojeniya": "ЖК Плеханово",
      "streams": "https://streams.cam72.su/Plehanovo/embed.html",
      "screenshots": "https://content.cam72.su/thumbnails/Plehanovo-small.jpg"
  },{
      "mestopolojeniya": "Сквер Комсомольский",
      "streams": "https://streams.cam72.su/Skver_Komsomolskii/embed.html",
      "screenshots": "https://content.cam72.su/thumbnails/Skver_Komsomolskii-small.jpg"
  }  
]

// объявление переменных
let element, img, text, p, main = document.querySelector('main');

// цикл создания html элементов 
for(let i = 0; i < cams.length; i++){

  element = document.createElement('div');
  element.setAttribute('class', 'modal-open element');
  element.setAttribute('id', cams[i].streams);
  
  img = document.createElement('img');
  img.setAttribute('src', cams[i].screenshots);
  
  p = document.createElement('p');
  text = document.createTextNode(cams[i].mestopolojeniya);
  p.append(text);

  element.appendChild(img);
  element.appendChild(p);
  main.appendChild(element);  

}