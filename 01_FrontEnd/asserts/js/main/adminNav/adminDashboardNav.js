/*dashboard*/
$('#adDash').click(function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
})

/*Reservation*/
$('#adRes').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','block');
})

/*View Car*/
$('#adViewCar').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','block');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
})

/*car Schedule*/
$('#adCarSchedule').click(function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
})

/*customer*/
$('#adCustomer').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','block');
    $('#adminRentalVerification').css('display','none');
})

/*Driver*/
$('#adViewDriver').click(function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
})

/*Driver shedule*/
$('#adDriverSchedule').click(function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
})

/*payment*/
$('#adPayment').click(function () {
    $('#adminDashboard').css('display','block');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
})
