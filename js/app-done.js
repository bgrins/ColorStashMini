
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
        
        setColorpicker(val);
        setBackground(val);
        
    }, false);
    
    $(textbox).keydown(function(e) {
        if (e.keyCode == 13) {
            setColorpicker(this.value);
            setBackground(this.value);
        }
    });
    
    $("#get-random-color").click(function() {
        console.time("ajax");
        $.get("random.php", ajaxDone);
    });
    
}

function ajaxDone(response) {
    console.log(arguments);
    setTextbox(response);
    setColorpicker(response);
    setBackground(response);
    console.timeEnd("ajax");
}

function colorpickerMove(tinycolor) {
    console.log(tinycolor, tinycolor.toHexString());
    
    setBackground(tinycolor);
    setTextbox(tinycolor.toHexString());
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
