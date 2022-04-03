// Harjoitukset 5 tehtävä 3
// Tee uusi tiedosto, joka sisältää kokonaislukuja pilkulla erotettuna. Voit käyttää esimerkiksi seuraavia numeroita: 1,3,4,6,10,12. Tee Node.js-sovellus, joka lukee ko. tiedoston luvut ja tulostaa näytölle lukujen summan.


const fs = require('fs')
//luetaan tiedosto
fs.readFile('nrot.txt', (error, data) => {
    if (error) console.error(error)
    else {
        var num=data.toString().split(",")   
    var summa=0
      num.forEach(numero => { 
          summa+=parseInt(numero)
   })}
      console.log(`Reading file and calculate a sum... ${summa.toString()}`)
 })

