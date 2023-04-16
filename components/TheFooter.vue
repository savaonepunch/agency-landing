<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="top">
                    <img src="@/assets/images/otherlogo.png" alt="">
                    <div class="email-container">
                        <span>Send us an email at</span>
                        <button>nevaeh@example.com</button>
                    </div>
                </div>
                <div class="bottom">
                    <div class="columns">
                        <div class="column">
                            <h2>About us</h2>
                            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                            <p>nevaeh@example.com</p>
                            <p>(316) 555-0116</p>
                        </div>
                        <div class="column">
                            <h2>Services</h2>
                            <p>Home</p>
                            <p>About</p>
                            <p>Services</p>
                            <p>Projects</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <h2>Web design</h2>
                            <p>E-commerce</p>
                            <p>SEO</p>
                            <p>Digital Marketing</p>
                            <p>Projects</p>
                        </div>
                        <div class="column">
                            <h2>Development</h2>
                            <p>Services</p>
                            <p>Projects</p>
                            <p>Shopify</p>
                            <p>About Us</p>
                            <p>Contacts</p>
                        </div>
                        <div class="column">
                            <h2>An odd bunch</h2>
                            <p>Cayman</p>
                            <p>Australia</p>
                            <p>USA</p>
                            <p>South Africa</p>
                            <p>UK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
div.container {
    padding-top: 150px;

    & div.content {
        box-sizing: border-box;
        max-width: 1920px;
        margin: auto;
        padding: 0 100px;

        & div.top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.427);
            padding-bottom: 40px;

            & div.email-container {
                display: flex;
                align-items: center;
                gap: 20px;

                & span {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    /* identical to box height, or 150% */

                    text-align: right;

                    color: #FFFFFF;
                }

                & button {
                    all: unset;
                    display: block;
                    width: 220px;
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

                    &:hover {
                        background-color: #FF9A63;
                        cursor: pointer;
                    }

                    @media only screen and (max-width: 450px) {
                        width: 100%;
                    }
                }

                @media only screen and (max-width: 600px) {
                    flex-direction: column;
                    align-items: flex-start;
                    width: 100%;
                }
            }

            & img {
                width: 82px;
            }

            @media only screen and (max-width: 600px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
        }

        & div.bottom {
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            gap: 60px;
            flex-wrap: wrap;
            & div.columns {
                display: flex;
                gap: 60px;
                flex-wrap: wrap;

                & h2 {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 30px;
                    /* identical to box height, or 150% */


                    color: #FFFFFF;
                }

                & p {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    /* or 150% */


                    color: #FFFFFF;

                    opacity: 0.6;
                }

                @media only screen and (max-width: 1200px) {
                gap: 20px;
                justify-content: space-between;

            }
            }

            @media only screen and (max-width: 1200px) {
                gap: 20px;
            }
        }

        @media only screen and (max-width: 600px) {
            padding: 0 20px;
        }
    }

    @media only screen and (max-width: 600px) {
        padding-top: 50px;
    }
}
</style>