const show = document.querySelectorAll(".plus");

for (let i = 0; i < show.length; i++) {
    show[i].addEventListener("click", function () {
        document
            .querySelectorAll(".faq-body")
            [i].classList.toggle("show-answer");
        if (
            document
                .querySelectorAll(".faq-body")
                [i].classList.contains("show-answer")
        ) {
            show[i].innerText = "-";
        } else {
            show[i].innerText = "+";
        }
    });
}
