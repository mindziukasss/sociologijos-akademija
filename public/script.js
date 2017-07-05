var today = new Date();

$('#fromDate').datepicker('setDate', today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate());
$('#toDate').datepicker('setDate', today);

// $('[data-provide=datepicker]').datepicker({
//   language: 'lt'
// });
