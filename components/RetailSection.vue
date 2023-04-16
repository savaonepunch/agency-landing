<template>
    <div>
        <div class="container">
            <img class="bg" src="@/assets/images/background.png" alt="">

            <div class="content">                
                <img class="star" src="@/assets/images/Star.png" alt="">
                <h2>Retail franchise digital <br> marketing</h2>
                <div class="cards">
                    <div class="card">
                        <h3>Web Development</h3>
                        <p>We specialize in developing interactive</p>
                        <div class="features">
                            <div class="feature">
                                <span class="feature-number">01</span>
                                <span class="feature-name">Visibility</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">02</span>
                                <span class="feature-name">Identity</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">03</span>
                                <span class="feature-name">Messaging</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">04</span>
                                <span class="feature-name">Value Proposition</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">05</span>
                                <span class="feature-name">CRO</span>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3>Web Design</h3>
                        <p>We specialize in designing interactive websites</p>
                        <div class="features">
                            <div class="feature">
                                <span class="feature-number">01</span>
                                <span class="feature-name">UI/UX</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">02</span>
                                <span class="feature-name">Landing Pages</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">03</span>
                                <span class="feature-name">Redesigns</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">04</span>
                                <span class="feature-name">Functionality</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">05</span>
                                <span class="feature-name">Optimization</span>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3>E-commerce</h3>
                        <p>Developing interactive, scalable, brand-oriented.</p>
                        <div class="features">
                            <div class="feature">
                                <span class="feature-number">01</span>
                                <span class="feature-name">3D Animation</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">02</span>
                                <span class="feature-name">Socials</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">03</span>
                                <span class="feature-name">Paid Ads</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">04</span>
                                <span class="feature-name">On-Page</span>
                            </div>
                            <div class="feature">
                                <span class="feature-number">05</span>
                                <span class="feature-name">Technical</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button>Contact Us</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
    padding-top: 150px;
    position: relative;

    & div.content {
        position: relative;
        box-sizing: border-box;
        max-width: 1920px;
        padding: 0 100px;
        margin: auto;

        & h2 {
            font-family: 'Archivo';
            font-style: normal;
            font-weight: 600;
            font-size: 58px;
            line-height: 68px;
            /* or 117% */

            text-align: center;
            letter-spacing: -1px;

            color: #FFFFFF;
            margin-bottom: 100px;
            position: relative;
            z-index: 1;

            @media only screen and (max-width: 500px) {
                font-family: 'Archivo';
                font-style: normal;
                font-weight: 600;
                font-size: 40px;
                line-height: 50px;
                /* or 125% */

                text-align: center;
                letter-spacing: -0.75px;

                color: #FFFFFF;
            margin-bottom: 50px;
                & br {
                    display: none;
                }
            }
        }

        & div.cards {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 36px;
            margin-bottom: 50px;

            & div.card {
                width: 374px;
                background: #183282;
                border: 2px solid rgba(255, 255, 255, 0.2);
                border-radius: 20px;
                padding: 32px;
                height: 350px;

                & h3 {
                    margin-top: 0;
                    margin-bottom: 0px;
                    font-family: 'Archivo';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 28px;
                    line-height: 38px;
                    /* identical to box height, or 136% */

                    letter-spacing: -0.5px;

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
                }

                & div.features {
                    & div.feature {
                        padding: 10px;
                        padding-left: 0px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.212);

                        & span.feature-number {
                            font-family: 'Inter';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 24px;
                            /* identical to box height, or 150% */

                            color: #FFFFFF;

                            opacity: 0.6;
                        }

                        & span.feature-name {
                            font-family: 'Inter';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 24px;
                            /* identical to box height, or 150% */


                            color: #FFFFFF;
                            padding-left: 10px;
                        }

                        &:last-of-type {
                            border-bottom: none;
                        }
                    }
                }

                &:nth-of-type(2) {
                    height: 440px;
                    background: linear-gradient(180deg, #7796FD 0%, #4958CC 100%);
                    border: 2px solid #FFFFFF;
                    border-radius: 20px;

                    @media only screen and (max-width: 1100px) {
                        height: 350px;
                    }
                }
            }

            @media only screen and (max-width: 1100px) {
                flex-wrap: wrap;
                justify-content: center;
            }
        }

        & button {
            all: unset;
            display: block;
            margin: 0 auto;
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

        @media only screen and (max-width: 700px) {
            padding: 0 20px;
        }

        & img.star {
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            padding-right: inherit;
            z-index: 0;

            @media screen and (max-width: 1100px) {
                display: none;
            }
        }
    }

    @media only screen and (max-width: 700px) {
            padding-top: 60px;
    }

    & img.bg {
        position: absolute;
        left: 0px;
        top: 50%;
    }
}
</style>