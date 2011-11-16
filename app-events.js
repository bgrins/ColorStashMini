
function init() {

    $("#spec").spectrum({
        flat:true,
        move: colorpickerMove
    });
    
    //var textbox = document.getElementById("input-container");
    //var textbox = document.getElementById("Color");
    var textbox = document.getElementById("color");
    
    document.getElementById("set-color").addEventListener("click", function() {
    
        var val = textbox.value;
        var color = tinycolor(val);
        
        
        $("#spec").spectrum("set", color);
        setBackground(color);
        
    }, false);
    
}


function colorpickerMove(tinycolor) {
    console.log(tinycolor, tinycolor.toHexString());
    
    setBackground(tinycolor);
    $("#color").val(tinycolor.toHexString());
    
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
