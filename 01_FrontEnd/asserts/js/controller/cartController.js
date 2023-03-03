var carNames = sendVehicleNameToCart(); /*Benz, BMW, Premio */
// console.log(carNames);

var rental = {
    rentalId: "",
    amount: 1,
    date: 1 - 1 - 2023,
    pickupDate: 1 - 1 - 2023,
    pickupLocation: "panadura",
    rentalDate: 1 - 1 - 2023,
    returnLocation: "Bandaragama",
    totalDamageWiewerPayment: 20000,
    cusId:"C001"
}

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

        console.log($(this).attr("data-cartDriverCheckBoxRegId"))


    })
}

