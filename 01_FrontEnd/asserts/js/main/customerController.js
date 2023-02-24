/**@author : Hasitha Lakshan
Project :CarRentalSystem
Date :2/23/2023
Time :9:05 PM
*/

var customer;
var baseurl="http://localhost:8080/02_BackEnd_war_exploded/";

// Initialize the counter
var counter = 2;
var customerIds="C001";


/*register Button*/
$('#signInRegister').click(function () {
       registerCustomer();
})


// Function to generate the next id
function generateId() {
    var id = "C" + ("000" + counter).slice(-3); // add leading zeroes
    counter++; // increment the counter for the next id
    return id;
}


function registerCustomer() {
    let nicFileName = $("#nicImageSignInForm")[0].files[0].name;

    // let id =  $("").val();

    // let id =  customerIds;
    let name= $("#nameSignInForm").val();
    let email= $("#emailSignInForm").val();
    let nic= $("#nicSignInForm").val();
    let address = $("#addressSignInForm").val();
    let contact =$("#contactSignInForm").val();
    let drivingLicenseNo= $("#drivingLicenseSignInForm").val();
    let userName= $("#userNameSignInForm").val();
    let password =$("#passwordSignInForm").val();


    var newDetails = {
        customerId: customerIds,
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
            customerIds=generateId();
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
    $('#spaMainCustomerUpdate').css('display','none');

    console.log(data.name,data.id,data.userName);
}
