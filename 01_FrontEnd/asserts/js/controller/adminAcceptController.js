




/*nav call*/
function pickups() {
    $("#adminReservationAccept").empty();

    $.ajax({
        url: baseurl + "reservation/detail",
        method: "GET",
        success: function (resp) {
            for (const rental of resp.data) {

                var row = `<tr style="border-bottom: 1px solid #d9d9d9">
                                <th scope="row">${rental.customer.customerId}</th>
                                <td>${rental.driverId}</td>
                                <td>${rental.car.registrationId}</td>
                                <td>${rental.pickupDate}</td>
                                <td>${rental.returnDate}</td>
                                <td>${rental.pickupLocation}</td>
                                <td>${rental.returnLocation}</td>
<!--                                <td><a class="text-primary fw-bold">View Image</a></td>-->
                                <td><img src=${"http://localhost:8080/02_BackEnd_war_exploded/" + resp.img} alt=""></td>
                                <td>
                                    <ul style="display: inline-block">
                                        <li>
                                            <span>Accept &nbsp;&nbsp;</span>
                                            <i class="bi bi-check-circle" style="color: limegreen; font-size: 20px"></i>

                                        </li>
                                        <li>
                                            <span>Deny &nbsp;&nbsp; &nbsp;</span>
                                            <i class="bi bi-x-circle" style="color: orangered; font-size: 20px"></i>

                                        </li>
                                    </ul>
                                </td>
                            </tr>

<!--                            <tr style="border-bottom: 1px solid #d9d9d9">-->
<!--                                <th scope="row">Sanath Nishantha</th>-->
<!--                                <td>D-001</td>-->
<!--                                <td>V-001</td>-->
<!--                                <td>01-02-2023</td>-->
<!--                                <td>05-02-2023</td>-->
<!--                                <td>Panadura</td>-->
<!--                                <td>Bandaragama</td>-->
<!--                                <td><a class="text-primary fw-bold">View Image</a></td>-->
<!--                                <td>-->
<!--                                    <ul style="display: inline-block">-->
<!--                                        <li>-->

<!--                                            <span>Accept &nbsp;&nbsp;</span>-->
<!--                                            <i class="bi bi-check-circle" style="color: limegreen; font-size: 20px"></i>-->

<!--                                        </li>-->
<!--                                        <li>-->
<!--                                            <span>Deny &nbsp;&nbsp; &nbsp;&nbsp;</span>-->
<!--                                            <i class="bi bi-x-circle" style="color: orangered; font-size: 20px"></i>-->

<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </td>-->

<!--                            </tr>-->

<!--                            <tr style="border-bottom: 1px solid #d9d9d9">-->
<!--                                <th scope="row">Sanath Nishantha</th>-->
<!--                                <td>D-001</td>-->
<!--                                <td>V-001</td>-->
<!--                                <td>01-02-2023</td>-->
<!--                                <td>05-02-2023</td>-->
<!--                                <td>Panadura</td>-->
<!--                                <td>Bandaragama</td>-->
<!--                                <td><a class="text-primary fw-bold">View Image</a></td>-->
<!--                                <td>-->
<!--                                    <ul style="display: inline-block">-->
<!--                                        <li>-->

<!--                                            <span>Accept &nbsp;&nbsp;</span>-->
<!--                                            <i class="bi bi-check-circle" style="color: limegreen; font-size: 20px"></i>-->

<!--                                        </li>-->
<!--                                        <li>-->
<!--                                            <span>Deny &nbsp;&nbsp; &nbsp;&nbsp;</span>-->
<!--                                            <i class="bi bi-x-circle" style="color: orangered; font-size: 20px"></i>-->

<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </td>-->

<!--                         </tr>-->`

                $("#adminReservationAccept").append(row);


            }




        }

    });




}