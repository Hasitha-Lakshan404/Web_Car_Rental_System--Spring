var carNames = sendVehicleNameToCart(); /*Benz, BMW, Premio */
console.log(carNames);


function loadCart() {
    $("#tblCartDetail").empty();

    for (let i = 0; i < carNames.length; i++) {
        let cRow = `<tr>
                        <th scope="row">${carNames[i].model}</th>
                        <td><a class="text-primary fw-bold" href="#">${carNames[i].dRate}</a></td>
                        <td>227,000</td>
                        <td class="fw-bold">${carNames[i].mRate}</td>
                        <td>${carNames[i].pickupD}</td>
                        <td>${carNames[i].returnD}</td>

                        <td>
                            <div class="input-group-text">
                                <input aria-label="Checkbox for following text input" class="form-check-input mt-0"
                                       type="checkbox"
                                       value="">&nbsp;Need
                            </div>
                        </td>

                        <td>
                            <div class="w-100">
                                <input class="form-control" id="register-form-NIC-image1" style="border: 1px solid gray"
                                       type="file">
                            </div>
                        </td>
                        <td><i class="fa-solid fa-xmark fa-2xl"></i></td>
                    </tr>`;

        $("#tblCartDetail").append(cRow);
    }
}
