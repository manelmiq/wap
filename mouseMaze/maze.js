let touchBondary = false;
let start = false;


$("#status").append('<p id = "result"> &nbsp;&nbsp;</p>');



$("div.boundary")
    .mouseover(function () {
        touchBondary = true;
        if (start) {
            $(".boundary").addClass("youlose");
            $("#result").html( 'You lose');
        }
    });


$("div#end")
    .mouseover(function () {
        if (!touchBondary) {
            $("#result").html('You Win!');
            start = false;
        }
    });


$("div#start")
    .click(function () {
        start = true;
        touchBondary = false;
        $(".boundary").removeClass("youlose");
        $("#result").html( '&nbsp;&nbsp;');
    });




$("#maze")
    .mouseleave(function () {
        if(start){
            $("#result").html( 'You cheated');
            $(".boundary").addClass("youlose");

        }

    });
