         $('button[type="submit"]').click(function () {

             let town = $("#town").val();
             let type = $("#type").val();
             let price = $("#price").val();
             let gender = $("#gender").val();

             let strings = '.wid';
             if (!town.includes("empty")) {
                 strings += '[town="' + town + '"]';
             }
             if (!gender.includes("empty")) {
                 strings += '[gender="' + gender + '"]';
             }
             if (!type.includes("empty")) {
                 strings += '[type="' + type + '"]';
             }
             if (!price.includes("empty")) {
                 strings += '[price="' + price + '"]';
             }
             console.log(price);



             console.log(strings);

             $('.wid').hide();
             $(strings).show();
         });
