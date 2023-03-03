var carNames = sendVehicleNameToCart(); /*Benz, BMW, Premio */
// console.log(carNames);
var rentalAr = [];

var curDay = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
};

// console.log(curday('/'));
// console.log(curday('-'));

    function loadCart() {
    $("#tblCartDetail").empty();

    for (let i = 0; i < carNames.length; i++) {
        // console.log("RegId"+"==="+carNames[i].regId);
        let cRow = `<tr>
                        <th scope="row">${carNames[i].model}</th>
                        <td><a class="text-primary fw-bold" href="#">${carNames[i].dRate}</a></td>
                        <td>${carNames[i].mRate}</td>
                        <td class="fw-bold">${carNames[i].dWaiver}</td>
                        <td>${carNames[i].pickupD}</td>
                        <td>${carNames[i].returnD}</td>

                        <td>
                           <div class="input-group-text">
                                <input data-cartDriverCheckBoxRegId="${carNames[i].regId}"  aria-label="Checkbox for following text input" class="form-check-input mt-0 cartDriverCheck"
                                       type="checkbox"
                                       value="">&nbsp;Need
                            </div>
                        </td>

                        <td>
                            <div class="w-100">
                                <input class="form-control register-form-NIC-image1" id="" style="border: 1px solid gray"
                                       type="file">
                            </div>
                        </td>
                        <td><i data-crtClose="${carNames[i].model}"  class="fa-solid fa-xmark fa-2xl icnCartClose"></i></td>
                    </tr>`;

        $("#tblCartDetail").append(cRow);
    }
        addRentalTOTheRentAr();

        checkDriver();
    deleteCartItem();


}

function deleteCartItem() {
    $(".icnCartClose").click(function () {

        // console.log("CArt  Close"+"---"+$(this).attr("data-crtClose"));

        let boolCart=false;

        for(let i=0;i<vNameAr.length;i++){
            // console.log(vNameAr[i].model+"==="+$(this).attr("data-crtClose"));
            if(vNameAr[i].model===$(this).attr("data-crtClose")){
                btnColourRemover(vNameAr[i].btnR);
                //console.log(vNameAr[i]+"==="+$(param).attr("data-btnRentIt"));
                boolCart=true;
            }
        }

        if(boolCart){
            for (var i = 0; i < vNameAr.length; i++) {
                if (vNameAr[i].model === $(this).attr("data-crtClose")) {
                    vNameAr.splice(i, 1);
                    break;
                }
            }
        }
        loadCart();

    })

    // data-cartDriverCheckBox
}



function btnColourRemover(pr) {
    // console.log("Color Remover :"+"-=====-"+$(pr).attr("data-btnRentIt"));
    $(pr).text("Rent It");
    $(pr).css({
        "background":"#F7F7F7",
        "color":"#444444",
    });
}


function checkDriver() {
    $(".cartDriverCheck").click(function () {
        // console.log("CheckBox "+"===="+$('.cartDriverCheck').is(":checked"))

        console.log($(this).attr("data-cartDriverCheckBoxRegId"));
        // rentalAr.push()
        // console.log(carNames.length);



        for (let i = 0; i < rentalAr.length; i++) {
            console.log(rentalAr[i].rentalId + "==========================" + $(this).attr("data-cartDriverCheckBoxRegId"));

            if (rentalAr[i].rentalId === $(this).attr("data-cartDriverCheckBoxRegId")) {
                //console.log(vNameAr[i]+"==="+$(param).attr("data-btnRentIt"));
                // rentalAr[i].driver="Need"

                if(rentalAr[i].driver==="No"){
                    alert("if eke")
                    rentalAr[i].driver="Need";
                }else if(rentalAr[i].driver==="Need"){
                    alert("else of eke")
                    rentalAr[i].driver="No";
                }

            }
        }


    })
}

function addRentalTOTheRentAr() {
        rentalAr.length=0;
    for (let i = 0; i < carNames.length; i++) {
        console.log("Rent Id : "+carNames[i].regId);
        var rentalObj = {
            rentalId: carNames[i].regId,
            amount: 0,
            date: curDay("-"),
            pickupDate:carNames[i].pickupD,
            pickupLocation: $("#addressPickup").val(),
            rentalDate: carNames[i].returnD,
            returnLocation: $("#addressReturn").val(),
            totalDamageWaiwerPayment: 0,
            cusId:"C001",
            driver:"No",
        }
        rentalAr.push(rentalObj);
    }

}