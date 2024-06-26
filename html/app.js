const { ref } = Vue

const load = Vue.createApp({
  setup () {
    return {
      CarouselText1: 'Benvenuto su AfterLife!',
      CarouselSubText1: 'Preparati per entrare al di fuori della realtà!',
      CarouselText2: 'Auto reali aggiunte!',
      CarouselSubText2: 'Hai mai sognato di girare su GTA in un Alfa Romeo 4C? Adesso puoi farlo!',
    //   CarouselText3: 'All server-specific adjustments can be made in the config.lua files throughout the build.',
    //   CarouselSubText3: 'Photo captured by: FLAPZ[INACTIV]#9925',
    //   CarouselText4: 'For additional support please join our community at discord.gg/qbcore',
    //   CarouselSubText4: 'Photo captured by: Robinerino#1312',
    //   CarouselText5: 'For additional support please join our community at discord.gg/qbcore',
    //   CarouselSubText5: 'Photo captured by: Robinerino#1312',

      DownloadTitle: 'Download risorse AfterLife RP',
      DownloadDesc: "Attendi durante il download di AfterLife.\nQuando il download sarà terminato potrai giocare.\nBuona permanenza nel server! ",

      SettingsTitle: 'Impostazioni',
      AudioTrackDesc1: 'Quando disabilitato, la traccia audio verrà interrotto.',
      AutoPlayDesc2: 'Quando disabilitato, le immagini smetteranno di scorrere e rimarranno su quella mostrata.',
      //PlayVideoDesc3: 'When disabled video will stop playing and remain paused.',

      KeybindTitle: 'Tasti Predefiniti',
      Keybind1: 'Apri Inventario',
      Keybind2: 'Prossimità Ciclabile',
      Keybind3: 'Telefono',
      Keybind4: 'Cintura',
      Keybind5: 'Menu Target',
      Keybind6: 'Menu Radiale',
      Keybind7: 'Menu Hud',
      Keybind8: 'Parla Via Radio',
      Keybind9: 'Apri Segnapunti',
      Keybind10: 'Antifurto Veicolo',
      Keybind11: 'Motore',
      Keybind12: 'Emote',
      Keybind13: 'Slot Tasti',
      Keybind14: 'Mani in Alto',
      Keybind15: 'Usa Item',
      Keybind16: 'Cruise Control',

      firstap: ref(true),
      secondap: ref(true),
      thirdap: ref(true),
      firstslide: ref(1),
      secondslide: ref('1'),
      thirdslide: ref('5'),
      audioplay: ref(true),
      playvideo: ref(true),
      download: ref(true),
      settings: ref(false),
    }
  }
})

load.use(Quasar, { config: {} })
load.mount('#loading-main')

var audio = document.getElementById("audio");
audio.volume = 0.5;

function audiotoggle() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function videotoggle() {
    var video = document.getElementById("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

let count = 0;
let thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (data.idx / count) * 100 + "%";
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (thisCount / count) * 100 + "%";
    },
};

window.addEventListener("message", function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});
