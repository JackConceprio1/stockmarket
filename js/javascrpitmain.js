$( document ).ready(function() {
    
    $.ajax({
        type: 'GET',
        url: './js/apple.json',
        async:false,
        success: function (data) {
            data = data["data"]
            console.log(data);
            for (let counter = 0; counter < data["years"].length; counter++) {
                $( "#years" ).append( `<th class="px-4 py-2 font-normal">${data["years"][counter]}</th>` );
                $("#gross_profit_margin").append(`<th class="px-4 py-2 font-normal">${data["gross_profit_margin"][counter].toFixed(2)}</th>`)
                $("#cash_and_marketable_securities").append(`<th class="px-4 py-2 font-normal">${data["cash_and_marketable_securities"][counter].toFixed(2)}</th>`)       
            }
        }
    })
});