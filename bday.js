function HappyBirthday() {
    document.getElementById("birthdaySong").style.display = "block";
    document.getElementById('button').onclick = function () {
        document.getElementById('birthdaySong').play();
    };
}