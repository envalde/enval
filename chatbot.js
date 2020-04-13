var elements = [
  ["Ich möchte einen Service Termin vereinbaren", "/kontakt"],
  ["Wie sind die Öffnungszeiten in Heidenheim", "/heidenheim"],
  ["Ich möchte Neuigkeiten lesen", "#"],
  ["Ich interessiere mich für SEAT", "/lauingen"],
  [
    "Ich möchte für meinen Betrieb mich über Serviceleistungen informieren",
    "/grosskunden",
  ],
  [
    "Ich möchte mir Gebrauchtwagen ansehen",
    "https://www.autoscout24.de/haendler/autohaus-sing-gmbh-und-co-kg/fahrzeuge#atype=C&cid=16927&ustate=U,N,A&sort=price&results=20&page=1",
  ],
];

module.exports = {
  getRandomElements: (anzahlElemente) => {
    var result = [];
    var i = 0;
    while (i < anzahlElemente) {
      var singleElement = elements[Math.floor(Math.random() * elements.length)];
      if (!result.includes(singleElement)) {
        result.push(singleElement);
        i++;
      }
    }
    return result;
  },
};
