
function init() {

    $("#spec").spectrum({
        flat:true,
        showInput: true,
        preferredFormat: "rgb",
        move: colorpickerMove,
        color: "orange"
    });

    console.log(1, 2, 3, ["This is an array", document.body]);
    console.log({
        "strong": ["b", "strong", "big"],
        "emphasized": ["em", "i"]
    });

    console.time("random timeout");
    setTimeout(function() {
        console.timeEnd("random timeout");
    }, Math.random() * 1000);
}

function colorpickerMove(color) {
    console.log("colorpicker moved", color);

    $(".palette-container").empty();

    drawPalette(tinycolor.analogous(color));

}

function drawPalette(colors) {
    var container = $("<ul />").appendTo(".palette-container");
    var html = [];
    for (var i = 0; i < colors.length; i++) {
        var hex = colors[i].toHexString();
        html.push("<li style='background-color:" + hex + ";'></li>");
    }

    container.html(html.join(""));
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

