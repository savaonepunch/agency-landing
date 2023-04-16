<template>
    <div>
        <div class="hero-container">
            <div class="content">
                <h1 class="heading">We develop the <img class="mail" src="@/assets/images/mail.png" alt=""> eye <br> <img
                        src="@/assets/images/arrows.svg" alt=""> catching brands
                </h1>
                <p class="subheading">Empower your franchisees and locations to <br> grow with our intelligent dashboards
                    and <br>
                    tools.
                </p>
                <button class="contact-cta">Contact Us</button>
            </div>
            <img class="wave" src="@/assets/images/wave2.svg" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.hero-container {
    padding-top: 200px;
    padding-bottom: 60px;

    position: relative;

    & div.content {
        @media only screen and (max-width: 1100px) {
            padding: 0 20px;
            padding-bottom: 150px;
        }

        max-width: 1920px;
        margin: auto;
        padding: 0 100px;
        z-index: 1;
        box-sizing: border-box;


        & h1.heading {
            max-width: 80%;
            margin: 0px;
            font-family: 'Archivo';
            font-style: normal;
            font-weight: 800;
            font-size: 98px;
            line-height: 108px;
            /* or 110% */

            letter-spacing: -3px;

            color: #183282;

            & img {
                &.mail {
                    width: 90px;
                }
            }

            @media only screen and (max-width: 1460px) {
                & br {
                    display: none;
                }
            }

            @media only screen and (max-width: 1100px) {
                max-width: 70%;
                font-size: 68px;
                line-height: 100%;

                & img {
                    width: 68px !important;

                    &.mail {
                        translate: 0 10px;
                    }
                }
            }

            @media only screen and (max-width: 700px) {
                font-size: 48px;
                line-height: 140%;
                max-width: 90%;

                & img {
                    width: 48px !important;

                    &.mail {
                        translate: 0 5px;
                    }
                }
            }
        }

        & p.subheading {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            /* or 150% */
            color: #183282;
            opacity: 0.8;
            margin-top: 30px;
            margin-bottom: 60px;

            @media only screen and (max-width: 700px) {
                & br {
                    display: none;
                }
            }
        }

        & button.contact-cta {
            all: unset;
            width: 164px;
            height: 56px;
            text-align: center;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height, or 150% */

            text-align: center;

            color: #FFFFFF;
            background-color: #FE804B;
            border-radius: 12px;

            transition: background-color .2s ease-in-out;

            &:hover {
                background-color: #FF9A63;
                cursor: pointer;
            }

            &:active {
                background-color: #FE804B;
            }

            @media only screen and (max-width: 450px) {
                width: 100%;
            }
        }
    }

    & img.wave {
        position: absolute;
        top: 220px;
        right: 100px;
        z-index: -1;

        @media only screen and (max-width: 1100px) {
            scale: .8;
        }

        @media only screen and (max-width: 700px) {
            bottom: 0px;
            top: 75%;
            right: -150px;
        }
    }

    @media only screen and (max-width: 450px) {
        padding-top: 100px;
    }
}
</style>