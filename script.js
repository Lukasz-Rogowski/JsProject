       
        var tablica = [];
        function calculate() {
            var wzrost = document.getElementById("wzrost").value;
            if (wzrost < 120 || wzrost > 240) {
                document.getElementById("status").innerHTML = "Wzrost nie jest poprawny! Wpisz wartość w przedziale od 120 do 240 centymetrów.";
                //alert("Poprawny zakres wzrostu to 120cm- 240cm");
                return;
            };

            var waga = document.getElementById("waga").value;
            if (waga < 40 || waga > 200) {
                document.getElementById("status").innerHTML = "Waga nie jest poprawna! Wpisz wartość w przdziale od 40 do 200 kilogramów.";
                //alert("Poprawny zakres wagi to 40kg - 200kg");
                return;
            };
            
            var result = (waga * 10000) / (wzrost * wzrost);
            var roundedValue = result.toFixed(2);
            document.getElementById("wynik").innerHTML = roundedValue;

            
            function storeSrednia() {
            tablica.push(roundedValue);


             var sum = 0;
                for (var i = 0; i < tablica.length; i++) {
                 sum += parseFloat(tablica[i]);
             }
             
             var avg = sum / tablica.length;
             var roundedAvg = avg.toFixed(2);
            document.getElementById("srednia").innerHTML = roundedAvg;
            }

        if (roundedValue < 18) {
            
            document.getElementById("status").innerHTML = "Masz niedowagę";
        } else if(roundedValue >= 18 && roundedValue < 25) {
            document.getElementById("wynik").style.color = "green";
            document.getElementById("status").innerHTML = "Twoja waga jest w normie";
        } else if(roundedValue >= 25 && roundedValue < 30) {
            document.getElementById("wynik").style.color = "red";
            document.getElementById("status").innerHTML = "Masz nadwagę";
        } else if(roundedValue >= 30 && roundedValue < 39) {
            document.getElementById("wynik").style.color = "red";
            document.getElementById("status").innerHTML = "Jesteś otyły";
        } else if(roundedValue >= 39) {
            document.getElementById("wynik").style.color = "red";
            document.getElementById("status").innerHTML = "Jesteś poważnie otyły";
        }
        else{
            document.getElementById("wynik").style.color = "green";
            document.getElementById("status").innerHTML = "Twoja waga jest w normie";
        } 
            storeValue(roundedValue);
            displayValues();
            storeSrednia();
      }
      

      var values = [];
      function storeValue(roundedValue) {
          var wzrost = document.getElementById("wzrost").value;
          var waga = document.getElementById("waga").value;
          var data = new Date().toLocaleDateString();
          values.push({ roundedValue: roundedValue, wzrost: wzrost, waga: waga, data });
        }
        
        function displayValues() {
            var output = "";
            for (var i = 0; i < values.length; i++) {
                output += "Data: " + values[i].data + " BMI: " + values[i].roundedValue + " Wzrost: " + values[i].wzrost + " Waga: " + values[i].waga;
        
                if (i > 0 && values[i].roundedValue < values[i - 1].roundedValue) {
                    output += ' <span class="green">Twoje BMI spadło!</span>';
                }
                else if (i > 0 && values[i].roundedValue > values[i - 1].roundedValue) {
                    output += ' <span class="red">Twoje BMI wzrosło!</span>';
                }
                output += "<br>";
            }
            document.getElementById("historia").innerHTML = output;     
        }

       