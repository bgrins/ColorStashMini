
function init() {
    $("#spec").spectrum({
        flat:true,
        move: colorpickerMove
    });

    console.log(1, 2, 3, ["This is an array", document.body]);
    console.log({
        "strong": ["b", "strong", "big"],
        "emphasized": ["em", "i"]
    });
    
    console.time("random timeout");
    setTimeout(function() {
        console.timeEnd("random timeout")
    }, Math.random() * 1000);
}

function colorpickerMove(color) {
    console.log("colorpicker moved", color);
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

