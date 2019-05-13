console.log("teste");


function biggerDecoration() {
    document.getElementById("txtArea").style.fontSize = '14pt';
    var size = (document.getElementById("txtArea").style.fontSize);
    size = parseInt(size);
    console.log(size);
    size += 2;
    document.getElementById("txtArea").style.fontSize = size + "pt";
}


function increaseBytime() {
    setInterval(biggerDecoration, 500);
}


function textTobold() {
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
