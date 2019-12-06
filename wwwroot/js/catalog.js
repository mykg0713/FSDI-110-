
function getCatalog(){
    //create AJAX req to getcatalog
    //print the catalog

    $.ajax({
        url: "/catalog/getCatalog",
        type: 'GET',
        success : function(res) {
            console.log("succeed", res);   
        },
        error: function(error){
            console.log("Error", error);
        }
    });
}

function init(){
    conosole.log("Catalog Page");

    getCatalog();
}



window.onload = init;

//VACATIONS:
// 21 DEC - 5 JAN