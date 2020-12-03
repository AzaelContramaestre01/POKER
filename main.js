

window.onload = function () {

    let numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let icons = ['&spades;', '&clubs;', '&hearts;', '&diams;']
    


    let numbdo = Math.floor((Math.random() * numb.length));
    let iconsdo = Math.floor((Math.random() * icons.length));
    


    document.querySelector('#icontop').innerHTML = icons[iconsdo] 
    document.querySelector("#numb").innerHTML = numb[numbdo]
    document.querySelector('#iconbot').innerHTML = icons[iconsdo] 

}