function biggerDecoration() {
    let size = (document.getElementById("txtArea").style.fontSize);
    size = parseInt(size);
    size += 2;
    document.getElementById("txtArea").style.fontSize = size + "pt";
}

function increaseBytime() {
    setInterval(biggerDecoration, 500);
}


function textToBold() {
    if (document.getElementById('Bling').checked) {
        document.getElementById('txtArea').style.fontWeight = 'bold';
        document.getElementById('txtArea').style.color = 'green';
        document.getElementById('txtArea').style.textDecoration = 'underline';
    } else {
        document.getElementById('txtArea').style.fontWeight = 'normal';
        document.getElementById('txtArea').style.color = 'black';
        document.getElementById('txtArea').style.textDecoration = 'none';
    }
}


function txtConverter() {
    let txtArea = document.getElementById('txtArea');
    let contentText = txtArea.textContent;
    let textConverted = contentText.split(" ").map(malkovitchWordConverter);
    contentText = "";
    textConverted.forEach(function (value, index, array) {
        contentText += (value) ;
        console.log(index);
        // contentText += (index > 0) ? " " : "" ;
    });
    txtArea.textContent = contentText;
}



function malkovitchTxtConverter() {
    let txtArea = document.getElementById('txtArea');
    let contentText = txtArea.textContent;
    let textConverted = contentText.split(" ").map(malkovitchWordConverter);
    contentText = "";
    textConverted.forEach(function (value, index) {
        contentText += (index > 0) ? " " : "" ;
        contentText += (value) ;
        console.log(index);
        contentText += (index > 0) ? " " : "" ;
    });
    txtArea.textContent = contentText;
}

function malkovitchWordConverter(word) {
    if (word.length >= 5) {
        return "Malkovitch";
    }
    return word;
}

function pigLatinEvaluation(word) {
    if(word === undefined || word === '' || word === ""){
        return word;
    }
    let isVowel = ('aeiou'.indexOf( word[0].toLowerCase() ) !== -1 ) ;
    console.log(word + " " + isVowel);
    if(isVowel){
        return word += "ay";
    }
    return word.substr(1, word.length - 1) + word[0] + "ay";
}


function pigLatinTxtConverter() {
    let txtArea = document.getElementById('txtArea');
    let contentText = txtArea.textContent;
    let textConverted = contentText.split(" ").map(pigLatinEvaluation);
    contentText = "";
    textConverted.forEach(function (value, index) {
        contentText += (index > 0) ? " " : "" ;
        contentText += (value) ;
    });
    txtArea.textContent = contentText;
}


