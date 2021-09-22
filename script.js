function generate(){

    var input_text = main_textfield.value;

    if (switch_fontsize.checked == true) {
        input_text = "<size="+size_bar.value+">"+input_text+"</size>"
    }
    if (switch_fontcolor.checked == true) {
        input_text = "<color="+color_picker.value+">"+input_text+"</color>"
    }
    if (switch_bold.checked == true) {
        input_text = "<b>"+input_text+"</b>"
    }
    if (switch_italic.checked == true) {
        input_text = "<i>"+input_text+"</i>"
    }
    
    clipstock.style.display = "block";
    clipstock.value = input_text;
    copy('clipstock');
    clipstock.style.display = "none";

    if (input_text.length >= 50){
        alert("50文字以上はペーストで問題が発生する恐れがあります。\n"+input_text.length+"文字")
    }
    alert("Cliped : "+input_text);
    
}




function switch_fontcolor_chenged(){

    if (switch_fontcolor.checked == true) {
        color_picker.style.display = "inline-block";
        fontcolor_display.style.display = "inline";
        main_textfield.style.color = color_picker.value
    }else{
        color_picker.style.display = "none";
        fontcolor_display.style.display = "none";
        main_textfield.style.color = "unset"
    }
}
function switch_fontsize_chenged(){

    if (switch_fontsize.checked == true) {
        size_bar_current.style.display = "block";
        fontsize_display.style.display = "inline";
    }else{
        size_bar_current.style.display = "none";
        fontsize_display.style.display = "none";
    }
}

function color_picker_chenged(){
    fontcolor_display.innerText = "- "+color_picker.value
    main_textfield.style.color = color_picker.value
}
function size_bar_chenged(){
    fontsize_display.innerText = "- "+size_bar.value
}
function switch_bold_chenged(){

    if (switch_bold.checked == true) {
        main_textfield.style.fontWeight = "bold";
    }else{
        main_textfield.style.fontWeight = "unset";
    }
}
function switch_italic_chenged(){

    if (switch_italic.checked == true) {
        main_textfield.style.fontStyle = "italic";
    }else{
        main_textfield.style.fontStyle = "unset";
    }
}


function copy(id) {
    var copyText = document.getElementById(id);
    var ua = navigator.userAgent;
    if (ua.match(/iphone|ipod|ipad|android/i)) {
        try {
            copyText.select();
        } catch (error) {}
        var range = document.createRange();
        range.selectNode(copyText);
        window.getSelection().addRange(range);
    }
    else {
        try {
            copyText.select(); // input field
        } catch (error) {
            document.getSelection().selectAllChildren(copyText);
        }
    }
    var result = document.execCommand("copy");
    return result
}