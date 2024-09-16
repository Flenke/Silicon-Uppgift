$(document).ready(function () {

    /* **** scrollIt ***** */
    $(function () {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: "linear",
            scrollTime: 600,
            activeClass: "active",
            onPageChange: null,
            topOffset: -115,
        });
    });
    /* **** End scrollIt ***** */
});
