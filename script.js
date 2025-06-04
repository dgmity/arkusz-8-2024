function znizka() {
    var radios = document.getElementsByName("wlosy");

    var selectedValue = null;

    for (const radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }
    
    if (selectedValue == "Krótkie") {
        document.getElementById("wynik").innerHTML = "cena promocyjna: 15";
    }
    else if (selectedValue == "Średnie") {
        document.getElementById("wynik").innerHTML = "cena promocyjna: 20";
    }
    else if (selectedValue == "Półdługie") {
        document.getElementById("wynik").innerHTML = "cena promocyjna: 30";
    }
    else if (selectedValue == "Długie") {
        document.getElementById("wynik").innerHTML = "cena promocyjna: 40";
    }
}