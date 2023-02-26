
$("#btnAdminAddCar").click(function () {
    addCar();
})

function addCar() {
    let registrationNum = $("#save-car-registration").val();
    let brand = $("#new_car_brand").val();
    let type = $("#save-car-type").val();
    let model = $("#save-car-model").val();
    let fuelType = $("#save-car-fuelType").val();
    let transmission = $("#save-car-transmission").val();
    let colour = $("#save-car-color").val();
    let noOfPassengers = $("#save-car-passengers").val();

    let description = $("#save-car-Description").val();
    let lastServiceMileage = $("#save-car-lastService-mileage").val();

    let freeKmDay = $("#save-car-freeKm-Day").val();
    let freeKmMonth = $("#save-car-freeKm-Month").val();

    let dailyRate = $("#save-car-daily").val();
    let monthlyRate = $("#save-car-monthly").val();
    let prizeForExtraKm = $("#save-car-extraKm-price").val();
    let wavier = $("#save-car-waiver-payment").val();
    let status = $("#save-car-status").val();

    var car = {
        registrationId: registrationNum,
        brand: brand,
        type: type,
        model: model,
        fuelType: fuelType,
        transmissionType: transmission,
        colour: colour,
        noOfPassenger: noOfPassengers,
        VehicleDescription:description,
        lastServiceMileage: lastServiceMileage,
        freeKmDay: freeKmDay,
        freeKmMonth: freeKmMonth,
        dailyRate: dailyRate,
        monthlyRate: monthlyRate,
        priceForExtraKm: prizeForExtraKm,
        waiver_payment: wavier,
        availability: status,
    }

    $.ajax({
        url: baseurl + "car",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(car),
        success: function (resp) {
            alert("Add Susses");
            uploadCarImages(registrationNum);
            loadAllCars();

            /*Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "car Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/

        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            /*Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "car Not Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/
        }
    })
}


function uploadCarImages(registrationNum) {
    alert("save Image eke")

    let frontViewFile = $("#save-car-frontView")[0].files[0];
    let backViewFile = $("#save-car-backView")[0].files[0];
    let sideViewFile = $("#save-car-sideView")[0].files[0];
    let interiorViewFile = $("#save-car-interior")[0].files[0];

    let frontFileName = registrationNum + "-image_1-" + $("#save-car-frontView")[0].files[0].name;
    let backFileName = registrationNum + "-image_2-" + $("#save-car-backView")[0].files[0].name;
    let sideFileName = registrationNum + "-image_3-" + $("#save-car-sideView")[0].files[0].name;
    let interiorFileName = registrationNum + "-image_4-" + $("#save-car-interior")[0].files[0].name;


    var data = new FormData();

    data.append("image_1", frontViewFile, frontFileName);
    data.append("image_2", backViewFile, backFileName);
    data.append("image_3", sideViewFile, sideFileName);
    data.append("image_4", interiorViewFile, interiorFileName);

    $.ajax({
        url: baseurl + "car/uploadImg/" + registrationNum,
        method: "PUT",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
            /*Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Images Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/
        },
        error: function (error) {
            // let errorReason = JSON.parse(error.responseText);
            console.log(error);
            /*Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Images Not Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/
        }
    });
}

/*====================RENTAL=========================*/

function loadAllCars(path) {
    $("#cusLuxCarContainer").empty();

    $.ajax({
        url: baseurl + "car/" + path,
        method: "GET",
        success: function (resp) {
            for (const car of resp.data) {
                let div=`<div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div class="icon-box">

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <div class="icon"><img class="carCardMainImg" alt="" src="asserts/image/ToyotaPremi.png "
                                                           style="width: 250px;height: 175px"></i></div>
                                </div>
                            </div>

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <h4><a href="">${car.brand}</a></h4>
                                </div>
                            </div>


                            <!--Type-->
                            <div class="row">
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    Hybrid</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    Manual</h6>
                            </div>

                            <!--Line-->
                            <div id="lineHome"></div>

                            <div class="row">
                                <div class="d-flex ">
                                    <p class="mt-5 mb-3 ps-4 justify-content-center">The Toyota Premio is a
                                        compact
                                        sedan known for comfort,
                                        technology, and efficiency</p>
                                </div>
                            </div>


                            <!--Price-->
                            <div class="row">
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">10,000
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">227,000
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">20,000
                                </div>
                            </div>
                            <div class="row">
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">Per Day
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">Per Month
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">On Hold
                                </div>
                            </div>


                            <!--Button-->
                            <div class="row mt-3">
                                <div class="d-flex align-items-sm-stretch col-xl-8 justify-content-around">
                                    <button class="btn_RentIt">RENT IT</button>
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center">
                                    <img alt="" class="carStoreIndexCarDetailIcon" height="35" src="asserts/image/icons8-popup-50.png" width="35">
                                </div>
                            </div>
                        </div>
                    </div>`;

                if (car.type==="Luxury"){
                    $("#cusLuxCarContainer").append(div);
                }else if(car.type==="Premium"){
                    $("#cusPremiumCarContainer").append(div);
                }else if(car.type==="General"){
                    $("#cusCarGeneralContainer").append(div);
                }

                /*---SET IMG----*/

            }
            /*Event in this Car Card*/
            carStoreCarDetailsIcon();
            rentItClick();
        }
    });
}


function rentItClick() {
    $(".btn_RentIt").click(function () {
        var bgColor = $(this).css("background-color");
        console.log(bgColor)

        // "rgb("+ 68 +","+ 68 +","+ 68 +")"

        // carController.js:243
        console.log(this.bgColor==="rgb("+ 255 +","+ 0 +","+ 0 +")");

        if(colorsAreEqual(bgColor, "rgb(68, 68, 68)")){ //firstTime With hover
            $(this).text("Added");
            $(this).css({
                "background":"#D50137",
                "color":"#ffffff"
            });
        }else if(colorsAreEqual(bgColor, "rgb(213, 1, 55)")){ //red
            $(this).text("Rent It");
            $(this).css({
                "background":"#F7F7F7",
                "color":"#444444",

            });
        }else if(colorsAreEqual(bgColor, "rgb(247, 247, 247)")){ //red turn to past value
            $(this).text("Added");
            $(this).css({
                "background":"#D50137",
                "color":"#ffffff"
            });
        }





    })
}



function colorsAreEqual(color1, color2) {
    var rgb1 = color1.match(/\d+/g);  // Get the RGB values of color1
    var rgb2 = color2.match(/\d+/g);  // Get the RGB values of color2
    if (rgb1.length !== 3 || rgb2.length !== 3) {
        return false;  // Invalid input - not a valid color
    }
    for (var i = 0; i < 3; i++) {
        if (parseInt(rgb1[i]) !== parseInt(rgb2[i])) {
            return false;  // The colors are not equal
        }
    }
    return true;  // The colors are equal
}

// Example usage:
var color1 = "rgb(255, 0, 0)";
var color2 = "rgb(255, 0, 0)";
console.log(colorsAreEqual(color1, color2));  // true

var color3 = "rgb(255, 255, 0)";
var color4 = "rgb(255, 0, 0)";
console.log(colorsAreEqual(color3, color4));  // false