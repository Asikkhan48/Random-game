// function play() {
//  const homeScreen = document.getElementById("home-screen");
//  homeScreen.classList.add("hidden");

//  const playGroundSection = document.getElementById("play-ground");
//  playGroundSection.classList.remove("hidden");
// }

function continueGame() {
    const alphabet = getARandomAlphabet();

    const currentAlphabetByElement = document.getElementById("current-alphabet")
    currentAlphabetByElement.innerText= alphabet;

    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame()
}

