function def() {
    var lt = document.getElementById("tempNum").value;
    var lt1 = document.getElementById("options").value;
    if (lt1 === "Celsius") {
        let y = 1.8 * lt;
        y+=32;
        let z = 273.15 + Number(lt);
        document.getElementById("result").value = y  +" "+ "Fahrenheit" ;
        document.getElementById("Kelvin").value = z+  " Kelvin"
    } else if(lt1==="Fahrenheit") {
        lt-=32;
        let y = lt / 1.8;
        document.getElementById("result").value = y + "  Celsius";
        let z = 273.15 + Number(y);
        document.getElementById("Kelvin").value =z +  " Kelvin"
    }
    else
    {
        let y = Number(lt);
        let c = y * (9/5) - 459.67
        document.getElementById("Kelvin").value = c  +" "+ "Fahrenheit" ;
        c-=32;
        c/=1.8;
        document.getElementById("result").value = c + "  Celsius";
    }
}