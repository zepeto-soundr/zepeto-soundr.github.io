function switch_fontcolor_chenged() {
    if (switch_fontcolor.checked == true) {
        picker_fontcolor.style.left = "0%";
        display_fontcolor.style.display = "inline";
    }else{
        picker_fontcolor.style.left = "-100%";
        display_fontcolor.style.display = "none";
        textfield.style.color = "unset"
    }
}

function switch_fontsize_chenged() {
    if (switch_fontsize.checked == true) {
        slider_fontsize_current.style.left = "0%";
        display_fontsize.style.display = "inline";
    }else{
        slider_fontsize_current.style.left = "-100%";
        display_fontsize.style.display = "none";
    }
}

function picker_fontcolor_chenged() {
    display_fontcolor.innerText = "- "+picker_fontcolor.value
    textfield.style.color = picker_fontcolor.value
}

function slider_fontsize_chenged() {
    display_fontsize.innerText = "- "+slider_fontsize.value
}

function switch_bold_chenged(){

    if (switch_bold.checked == true) {
        textfield.style.fontWeight = "bold";
    }else{
        textfield.style.fontWeight = "unset";
    }
}
function switch_italic_chenged(){

    if (switch_italic.checked == true) {
        textfield.style.fontStyle = "italic";
    }else{
        textfield.style.fontStyle = "unset";
    }
}






function generate(){

    var input_text = textfield.value;

    if (switch_fontsize.checked == true) {
        input_text = "<size="+slider_fontsize.value+">"+input_text+"</size>"
    }
    if (switch_fontcolor.checked == true) {
        input_text = "<color="+picker_fontcolor.value+">"+input_text+"</color>"
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