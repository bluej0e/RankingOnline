
const langEs = {
  lang: "es",
  opLang: "ES",
  title: "Agencia Marketing Digital | Ranking Online",
  navBar: {
      home: "Bienvenido",
      about: "Nosotros",
      portfolio: "Portfolio",
      services: "Servicios",
      contact: "Contacto",
      lang: "Español"
  },
  services:{
    serv1:{
        title: "Diseño Web",
        text1: "",
        text2: "",
        text3: ""
    },
    serv2:{
        title: "SEO",
        text1: "",
        text2: "",
        text3: ""
    },
    serv3:{
        title: "Producción Audiovisual",
        text1: "",
        text2: "",
        text3: ""
    },
    serv4:{
        title: "Branding",
        text1: "",
        text2: "",
        text3: ""
    },
    serv5:{
        title: "Google My Business",
        text1: "",
        text2: "",
        text3: ""
    },
    serv6:{
        title: "Publicidad (SEM)",
        text1: "",
        text2: "",
        text3: ""
    },
    serv7:{
        title: "Redes Sociales",
        text1: "",
        text2: "",
        text3: ""
    },
    serv8:{
        title: "serv8.title",
        text1: "",
        text2: "",
        text3: ""
    },
    serv9:{
        title: "serv9.title",
        text1: "",
        text2: "",
        text3: ""
    },
    serv10:{
        title: "serv10.title",
        text1: "",
        text2: "",
        text3: ""
    }
  }
};


const langEn = {
  lang: "en",
  opLang: "EN",
  title: "Digital Marketing Agency | Ranking Online",
  navBar: {
      home: "Bienvenido",
      about: "Nosotros",
      portfolio: "Portfolio",
      services: "Servicios",
      contact: "Contacto",
      lang: "Español"
  },
  services:{
    serv1:{
        title: "Web Design",
        text1: "",
        text2: "",
        text3: ""
    },
    serv2:{
        title: "SEO",
        text1: "",
        text2: "",
        text3: ""
    },
    serv3:{
        title: "Multimedia Production",
        text1: "",
        text2: "",
        text3: ""
    },
    serv4:{
        title: "Branding",
        text1: "",
        text2: "",
        text3: ""
    },
    serv5:{
        title: "Google My Business",
        text1: "",
        text2: "",
        text3: ""
    },
    serv6:{
        title: "Advertising (SEM)",
        text1: "",
        text2: "",
        text3: ""
    },
    serv7:{
        title: "Social Media",
        text1: "",
        text2: "",
        text3: ""
    },
    serv8:{
        title: "serv8.title",
        text1: "",
        text2: "",
        text3: ""
    },
    serv9:{
        title: "serv9.title",
        text1: "",
        text2: "",
        text3: ""
    },
    serv10:{
        title: "serv10.title",
        text1: "",
        text2: "",
        text3: ""
    }
  }
}

var langBox = document.querySelector('.langBox');

langBox.addEventListener('click', chosenLang());

function textFillEn(e){
  var textStuff = e.getAttribute('data-lang').split(".");
  var tempObj = langEn;

  for (var i = 0; i < textStuff.length; i++) {
    tempObj = tempObj[textStuff[i]]
  }
  e.innerHTML = tempObj;
};

function textFillEs(e){
  var textStuff = e.getAttribute('data-lang').split(".");
  var tempObj = langEs;

  for (var i = 0; i < textStuff.length; i++) {
    tempObj = tempObj[textStuff[i]]
  }
  e.innerHTML = tempObj;
};

function chosenLang(){
  var curLang = langBox.getAttribute('lang');
  var elemsToChange = document.querySelectorAll("[data-lang]");

  if(curLang == 'en'){
    console.log('english');
    elemsToChange.forEach(textFillEn);
    langBox.lang = 'es';
  }else if (curLang == 'es') {
    console.log('spanish');
    elemsToChange.forEach(textFillEs);
    langBox.lang = 'en';
  }
};
