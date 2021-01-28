$(document).ready(() => {
    // NAVBAR
    // Collpased navbar behaviour
    let menuClosed = true;
    $(".cnav_toggler-content").on("click", (e) => {
        if (menuClosed) {
            $("#cnav_toggler-icon").addClass("cnav_rotate");
            $(".cnav_list").addClass("cnav_list-opened");
            $(".cnav_list").addClass("cnav_slide");

            menuClosed = false;
        } else {
            $("#cnav_toggler-icon").removeClass("cnav_rotate");
            $(".cnav_list").removeClass("cnav_list-opened");

            menuClosed = true;
        }
    });

    // Closes menu when menu item is clicked
    $(".cnav_item").on("click", (e) => {
        $("#cnav_toggler-icon").removeClass("cnav_rotate");
        $(".cnav_list").removeClass("cnav_list-opened");

        menuClosed = true;
    });


    // CAROUSELL

    const ccar_numberOfslides = 3; /* ENTER HERE THE NUMBER OF SLIDES OF THE CAROUSEL */
    let slideToDisplay = 1;

    // Slide behaviour
    // prev click
    $("#ccar_prev__button").on("click", () => {
        if (slideToDisplay > 1) {
            slideToDisplay--;
        } else {
            slideToDisplay = ccar_numberOfslides;
        }
        $(".ccar_slide__container").addClass("ccar_slide-in-left");
        displayBg(slideToDisplay);
        displayDiv(slideToDisplay);
        setTimeout(() => {
            $(".ccar_slide__container").removeClass("ccar_slide-in-left");
            $(".ccar_slide__container").removeClass("ccar_slide-in-right");
        }, 400);
    });

    // next click
    $("#ccar_next__button").on("click", () => {
        if (slideToDisplay < ccar_numberOfslides) {
            slideToDisplay++;
        } else {
            slideToDisplay = 1;
        }
        $(".ccar_slide__container").addClass("ccar_slide-in-right");
        displayBg(slideToDisplay);
        displayDiv(slideToDisplay);
        setTimeout(() => {
            $(".ccar_slide__container").removeClass("ccar_slide-in-left");
            $(".ccar_slide__container").removeClass("ccar_slide-in-right");
        }, 400);
    });

    // background
    function displayBg(number) {
        $("#ccar_carousel").removeClass();
        $("#ccar_carousel").addClass(createClassId(number));
    }
    // Div
    function displayDiv(number) {
        let slideId = `#${createClassId(number)}`;
        $(".ccar_slide").removeClass("ccar__active");
        $(slideId).addClass("ccar__active");
    }

    function createClassId(number) {
        return (classIdOfslideToDisplay = "ccar_slide" + number);
    }
});
