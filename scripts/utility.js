function hideElementById(elementId){
      const element = document.getElementById(elementId)
      element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}
function getAlphabet(){
    //create alphabet array
    const alphabetString = 'abcdefghijklmnopqrstyvwxyz';
    const alphabets = alphabetString.split('');
    //console.log(alphabets);
    //get a random index from 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}
function setBackGroundColorCyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}