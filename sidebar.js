$(document).ready(function () {
    $('.open-sidebar').click(function () {
        // mở sidebar
        $('.sidebar').removeClass('active');
        // ẩn/hiện các nút
        $('.open-sidebar').removeClass('active');
        //hiện cover
        $('.sidebar-cover').addClass('active');
    });

    $('.close-sidebar').click(function () {
        // đóng side
        $('.sidebar').addClass('active');
        // đóng các dropdown
        $('.collapse.in').toggleClass('in');
        // đóng các mũi tên trong dropdown
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        // ẩn/hiện các nút
        $('.open-sidebar').addClass('active');
        //ẩn cover
        $('.sidebar-cover').removeClass('active');
    });

    $('.sidebar-cover').click(function () {
        $('.close-sidebar').trigger('click');
    });
});
