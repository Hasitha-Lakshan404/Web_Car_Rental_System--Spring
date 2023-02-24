
//for the Loading Window
$(window).on('load',function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
})

/*dashboard*/
$('#adDash').click(function () {

})

/*Reservation*/
$('#adRes').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','block');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
})

/*View Car*/
$('#adViewCar').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','block');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
})

/*car Schedule*/
$('#adCarSchedule').click(function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
})

/*customer*/
$('#adCustomer').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','block');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
})

/*Driver*/
$('#adViewDriver').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','block');
    $('#adminViewAllCustomer').css('display','none');
})

/*Driver shedule*/
$('#adDriverSchedule').click(function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
})

/*payment*/
$('#adPayment').click(function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
})

/*customer all view*/
$('#adViewAllCustomer').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','block');

    loadAllCustomers();

})
