


function addCar() {

    let registrationNum = $("#txtRNber").val();
    let transmission = $("#txtTrnsm").val();
    let type = $("#txtType").val();
    let noOfPassengers = $("#txtNoOPass").val();
    let fuelType = $("#txtFuel").val();
    let monthlyRate = $("#txtMRt").val();
    let dailyRate = $("#txtMnthlyR").val();
    let prizeForExtrakm = $("#txtPfExk").val();
    let freeMileage = $("#txtFmlg").val();
    let lastServiceMileage = $("#txtLSrm").val();
    let brand = $("#txtCbrnd").val();
    let colour = $("#txtClr").val();
    let model = $("#txtMdl").val();
    let availability = $("#selectAvailable").val();

    var car = {
        registrationId: registrationNum,
        brand: brand,
        type: type,
        model: model,
        fuelType: fuelType,
        transmissionType: transmission,
        colour: colour,
        noOfPassengers: noOfPassengers,
        lastServiceMileage: lastServiceMileage,
        freeMileage: freeMileage,
        dailyRate: dailyRate,
        monthlyRate: monthlyRate,
        priceForExtraKm: prizeForExtrakm,
        availability: availability,
    }

    $.ajax({
        url: baseURL + "car",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(car),
        success: function (resp) {
            uploadCarImages(registrationNum);
            loadAllCars();
            bindCarRowClickEvents();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "car Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            clearCarTextFields();
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "car Not Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}


function uploadCarImages(registrationNum) {

    let frontViewFile = $("#uploadFVI")[0].files[0];
    let backViewFile = $("#uploadBV")[0].files[0];
    let sideViewFile = $("#uploadUSV")[0].files[0];
    let interiorViewFile = $("#uploadUIV")[0].files[0];

    let frontFileName = registrationNum + "-image_1-" + $("#uploadFVI")[0].files[0].name;
    let backFileName = registrationNum + "-image_2-" + $("#uploadBV")[0].files[0].name;
    let sideFileName = registrationNum + "-image_3-" + $("#uploadUSV")[0].files[0].name;
    let interiorFileName = registrationNum + "-image_4-" + $("#uploadUIV")[0].files[0].name;


    var data = new FormData();

    data.append("image_1", frontViewFile, frontFileName);
    data.append("image_2", backViewFile, backFileName);
    data.append("image_3", sideViewFile, sideFileName);
    data.append("image_4", interiorViewFile, interiorFileName);

    $.ajax({
        url: baseURL + "car/uploadImg/" + registrationNum,
        method: "PUT",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Images Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Images Not Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });
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
                // let row = `<tr><td>${car.registrationId}</td><td>${car.brand}</td><td>${car.type}</td><td>${car.transmissionType}</td><td>${car.fuelType}</td></tr>`;

                let div=`<div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div class="icon-box">

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <div class="icon"><img alt="" src="file:///F://image.jpg"
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
                $("#cusLuxCarContainer").append(div);

                // $("#admin-cars-table>tr").off("click");
                // $("#admin-cars-table>tr").click(function () {
                //     vehicle_no = $(this).children(":eq(0)").text();
                //     $("#viewButton").prop('disabled', false);

            }

        }
    });
}