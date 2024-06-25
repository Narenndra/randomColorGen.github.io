let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let count = 0;

function changeColor() {
    document.getElementById("bgContainer").style.backgroundColor = bgColorsArray[count];
    count += 1;
    if (count === bgColorsArray.length) {
        count = 0;
    }

}