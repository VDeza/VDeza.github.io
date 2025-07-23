function converter(){
    let value = document.getElementById("inputnumber");
    let satuanAsal = document.getElementById("inputunit");
    let satuanakhir = document.getElementById("outputunit");
    if (satuanAsal.value == "meters" && satuanakhir.value == "kilometers"){
        document.getElementById("Result").innerHTML = value.value * 0.001 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "meters" && satuanakhir.value == "meters"){
        document.getElementById("Result").innerHTML = value.value * 1 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "meters" && satuanakhir.value == "feet"){
        document.getElementById("Result").innerHTML = value.value * 3.280839895 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "meters" && satuanakhir.value == "miles"){
        document.getElementById("Result").innerHTML = value.value * 0.0006213712 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "kilometers" && satuanakhir.value == "kilometers"){
        document.getElementById("Result").innerHTML = value.value * 1 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "kilometers" && satuanakhir.value == "meters"){
        document.getElementById("Result").innerHTML = value.value * 100 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "kilometers" && satuanakhir.value == "feet"){
        document.getElementById("Result").innerHTML = value.value * 3280.8398950131 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "kilometers" && satuanakhir.value == "miles"){
        document.getElementById("Result").innerHTML = value.value * 0.06213711922 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "feet" && satuanakhir.value == "kilometers"){
        document.getElementById("Result").innerHTML = value.value * 0.0003048 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "feet" && satuanakhir.value == "meters"){
        document.getElementById("Result").innerHTML = value.value * 0.03048 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "feet" && satuanakhir.value == "feet"){
        document.getElementById("Result").innerHTML = value.value * 1 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "feet" && satuanakhir.value == "miles"){
        document.getElementById("Result").innerHTML = value.value * 0.0001893939 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "miles" && satuanakhir.value == "kilometers"){
        document.getElementById("Result").innerHTML = value.value * 6.437376 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "miles" && satuanakhir.value == "meters"){
        document.getElementById("Result").innerHTML = value.value * 6437.376 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "miles" && satuanakhir.value == "feet"){
        document.getElementById("Result").innerHTML = value.value * 21120 + " " + satuanakhir.value;
    }
    else if (satuanAsal.value == "miles" && satuanakhir.value == "miles"){
        document.getElementById("Result").innerHTML = value.value * 1 + " " + satuanakhir.value;
    }
}