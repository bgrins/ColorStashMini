
function init() {
    $("#spec").spectrum({
        flat:true,
        move: colorpickerMove
    });
    
    $("#get-random-color").click(function() {
        console.time("ajax");
        $.get("random.php", ajaxDone);
    });
    
}


function ajaxDone(response) {
    $("#spec").spectrum("set", response);
    $("#color").val(response);
    setBackground(tinycolor(response));
    console.log(arguments);
    console.timeEnd("ajax");
}

function colorpickerMove(tinycolor) {
    console.log(tinycolor);
}



function setColorpicker(color) {
    $("#spec").spectrum("set", color);
}

function setTextbox(color) {
    $("#color").val(color);
}

function setBackground(color) {
    $(document.body).css("background-color", tinycolor(color).toRgbString())
}


$(init);

