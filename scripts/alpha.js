// function play(){
//     //hidden the home screen
//     const homeScreen = document.getElementById('home-screen');
//     //console.log(homeScreen);
//     homeScreen.classList.add('hidden');
//     //show the playground
//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden');
// }
function continueGame(){
     const alphabet= getAlphabet();
     console.log(alphabet);
     
     //show the alphabet un the screen
     const currentAlphabet = document.getElementById('current-alphabet');
     currentAlphabet.innerText = alphabet;
     setBackGroundColorCyId(alphabet);
}

function play(){

    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

