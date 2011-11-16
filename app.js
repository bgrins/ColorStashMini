
function init() {
    $("#spec").spectrum({
        flat:true,
        move: colorpickerMove
    });
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
