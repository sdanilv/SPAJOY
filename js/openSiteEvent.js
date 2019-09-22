        $(document).ready(function () {
            //Find panel
            if (window.innerWidth <= 700) {
        $('.find').removeClass("d-flex").hide();
        $('button[type="findButton"]').show();
        $('a[type="cartInForm"]').hide();
        $('a[type="findCart"]').show();

            }
            if (window.innerWidth >= 700) {
        $('button[type="findButton"]').hide();
        $('a[type="findCart"]').hide();
        $('a[type="cartInForm"]').show();
        $('.find').addClass("d-flex").show();
            }

            //            Search town
            $.getJSON("https://api.sypexgeo.net/json", function (data) {

                var region = data.region.name_ru;
                var cartCount = 0;

                if ((region).includes("Киев")) {
                    $("#town").val('Kiev');
                } else
                if (region.includes("Запоро")) {
                    $("#town").val('Zaporizha');
                } else if (region.includes("Одес")) {
                    $("#town").val('Odesa');
                }
                $('button[type="submit"]').click();
            });
            document.getElementsByTagName("html")[0].style.visibility = "visible";
        });

        //                console.log((data.city.name_ru));
        //                console.log((data.region.name_ru));
        //                console.log((data));
        //                console.log((region));
