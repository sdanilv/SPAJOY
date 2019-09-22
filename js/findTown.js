        $(document).ready(function () {

            $.getJSON("https://api.sypexgeo.net/json", function (data) {


//                console.log((data.city.name_ru));
//                console.log((data.region.name_ru));
//                console.log((data));
                var region = data.region.name_ru;
                var cartCount = 0;
                console.log((region));


                if ((region).includes("Киев")) { $("#town").val('Kiev'); }
                else
                    if (region.includes("Запоро")) { $("#town").val('Zaporizha'); }
                    else if (region.includes("Одес")) { $("#town").val('Odesa'); }
                $('button[type="submit"]').click();
            });

        });
