"use strict";


/*
 * ALauncher Website
 * Client-side UI only.
 *
 * IMPORTANT:
 * Do not place passwords, API keys,
 * private tokens or other secrets here.
 */


document.addEventListener("DOMContentLoaded", () => {

    const mobileMenuButton =
        document.getElementById("mobile-menu-btn");

    const mobileMenu =
        document.getElementById("mobile-menu");


    /*
     * Mobile menu
     */

    if (mobileMenuButton && mobileMenu) {

        const icon =
            mobileMenuButton.querySelector("i");


        mobileMenuButton.addEventListener("click", () => {

            const isClosed =
                mobileMenu.classList.contains("hidden");


            if (isClosed) {

                mobileMenu.classList.remove("hidden");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

                if (icon) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                }

            } else {

                mobileMenu.classList.add("hidden");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });


        /*
         * Close mobile menu
         * after navigation
         */

        mobileMenu
            .querySelectorAll(".mobile-link")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.add("hidden");

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    if (icon) {

                        icon.classList.remove("fa-xmark");
                        icon.classList.add("fa-bars");

                    }

                });

            });

    }


    /*
     * FAQ icon animation
     */

    document
        .querySelectorAll("details")
        .forEach((details) => {

            details.addEventListener("toggle", () => {

                const icon =
                    details.querySelector("summary i");


                if (!icon) {
                    return;
                }


                if (details.open) {

                    icon.style.transform =
                        "rotate(180deg)";

                    icon.style.color =
                        "#10b981";

                } else {

                    icon.style.transform =
                        "rotate(0deg)";

                    icon.style.color =
                        "";

                }

            });

        });


    /*
     * Prevent accidental empty VK links.
     *
     * Replace the placeholder in index.html
     * with your real VK community URL.
     */

    document
        .querySelectorAll(
            'a[href="https://vk.com/ВАШЕ_СООБЩЕСТВО"]'
        )
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                event.preventDefault();

                alert(
                    "Укажите ссылку на сообщество VK в index.html."
                );

            });

        });

});
