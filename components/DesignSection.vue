<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="info">
                    <h2>Design beautiful <br> websites</h2>
                    <p>Empower your franchisees and locations to grow <br> with our intelligent dashboards and tools.</p>
                    <button>Contact Us</button>
                    <div class="people">
                        <img src="@/assets/images/peoplea.png" alt="">
                    </div>
                    <p class="feedback-info">10,000+</p>
                    <p class="feedback">Positive reviews</p>
                </div>
                <div class="illustration">
                    <img src="@/assets/images/design3.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
    padding-top: 200px;

    & div.content {
        box-sizing: border-box;
        max-width: 1920px;
        margin: auto;
        padding: 0 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & div.info {
            width: 50%;

            & h2 {
                margin-top: 0;
                margin-bottom: 40px;
                font-family: 'Archivo';
                font-style: normal;
                font-weight: 600;
                font-size: 58px;
                line-height: 68px;
                /* or 117% */

                letter-spacing: -1px;

                color: #FFFFFF;

                @media only screen and (max-width: 450px) {
                    font-family: 'Archivo';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 40px;
                    line-height: 50px;
                    /* or 125% */

                    letter-spacing: -0.75px;

                    color: #FFFFFF;

                }
            }

            & p {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                /* or 150% */


                color: #FFFFFF;
                margin-bottom: 42px;
            }

            & button {
                all: unset;
                width: 164px;
                height: 56px;
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
                margin-bottom: 80px;

                &:hover {
                    background-color: #FF9A63;
                    cursor: pointer;
                }

                @media only screen and (max-width: 450px) {
                    width: 100%;
                }
            }

            & div.people {
                width: 200px;

                & img {
                    width: 100%;
                }
            }

            & p.feedback-info {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 28px;
                line-height: 30px;
                /* or 107% */


                color: #FFFFFF;
                margin-bottom: 0;
            }

            & p.feedback {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 30px;
                /* or 150% */


                color: rgba(255, 255, 255, 0.6);
                margin-top: 0px;
            }

            @media only screen and (max-width: 1100px) {
                width: 100%;
            }
        }

        & div.illustration {
            width: 50%;
            max-width: 1000px;

            & img {
                width: 100%;
            }

            @media only screen and (max-width: 1100px) {
                width: 100%;
            }
        }

        @media only screen and (max-width: 1100px) {
            flex-direction: column;
        }

        @media only screen and (max-width: 700px) {
            padding: 0 20px;
        }
    }

    @media only screen and (max-width: 700px) {
        padding-top: 100px;
    }
}
</style>