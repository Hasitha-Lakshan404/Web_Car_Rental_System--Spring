/**@author : Hasitha Lakshan
Project :CarRentalSystem
Date :2/23/2023
Time :9:05 PM
*/

var customer;
var baseurl="http://localhost:8080/02_BackEnd_war_exploded/";



/*register Button*/
$('#signInRegister').click(function () {
       registerCustomer();
})

function registerCustomer() {
    let nicFileName = $("#nicImageSignInForm")[0].files[0].name;

    // let id =  $("").val();

    let id =  "C0012";
    let name= $("#nameSignInForm").val();
    let email= $("#emailSignInForm").val();
    let nic= $("#nicSignInForm").val();
    let address = $("#addressSignInForm").val();
    let contact =$("#contactSignInForm").val();
    let drivingLicenseNo= $("#drivingLicenseSignInForm").val();
    let userName= $("#userNameSignInForm").val();
    let password =$("#passwordSignInForm").val();


    var newDetails = {
        customerId: "C002",
        name: name,
        address: address,
        nic:nic,
        drivingLicenseNumber: drivingLicenseNo,
        contactNumber: contact,
        email: email,
        userName:userName,
        password:password,
        imageLocation: nicFileName
    }

    $.ajax({
        url: baseurl+"customer",
        method :"post",
        data : JSON.stringify(newDetails),
        contentType:"application/json",
        success: function (resp) {
            console.log(resp);
            alert(resp.message);
            navToLogIn(resp.data);
            // loadImage();
        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);
        }
    });

}

function navToLogIn(data) {
    $('#spaMainIndex').css('display','none');
    $('#spaMainCarStore').css('display','none');
    $('#spaMainCart').css('display','none');
    $('#spaMainOverview').css('display','none');
    $('#spaMainSignIn').css('display','none');
    $('#spaMainLogIn').css('display','block');
    $('#spaMainCarDetail').css('display','none');

    console.log(data.name,data.id,data.userName);

}
