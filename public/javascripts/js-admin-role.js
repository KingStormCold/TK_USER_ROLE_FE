$(document).ready(function(){
    var table = $('#example').DataTable( {
        "lengthChange": false,
        "pageLength": 12,
        "autoWidth" : false,
        "info": false,
        "paging": false,
        scrollY: '60vh',
        scrollCollapse: true,
    });

    $('.dataTables_filter input').prop("placeholder", "Search");

    $('#pagination-user').twbsPagination({
        totalPages: 10,
        visiblePages: 5,
        onPageClick: function (event, page) {
        }
    });
});