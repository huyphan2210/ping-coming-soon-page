$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        const email = $(this).find("input").val();
        if (!validateEmail(email)) {
            $(this).find("input").css("outline-color", "var(--secondary-lightRed)");
            $(this).find("input").attr("class", "inputError");
            $(this).find("p").css("display", "block");
        } else {
            $(this).find("input").css("outline-color", "");
            $(this).find("input").attr("class", "");
            $(this).find("p").css("display", "");
        }
    })
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
