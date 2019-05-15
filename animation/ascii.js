


function choseAnimation() {
    let animation = document.getElementById("animation").value;
    document.getElementById("txtArea").textContent = ANIMATIONS[animation];
    let anime = ANIMATIONS[animation].split("=====\n");

    console.log(anime[0]);
    console.log(anime[1]);

    //  setInterval(function () {
    //     anime.forEach(function (value) {
    //         console.log(value);
    //         document.getElementById("txtArea").textContent = value;
    //     })
    //
    // }, 1000);




}