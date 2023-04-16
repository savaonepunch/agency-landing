<template>
    <div>
        <div class="container">
            <div class="content">
                <h2>Strategic design over <br> the years</h2>
                <div class="cards">
                    <div class="card">
                        <span class="value">400</span>
                        <span class="info">Talented people ready to being your vision</span>
                    </div>
                    <div class="card">
                        <span class="value">15</span>
                        <span class="info">Years of experience working with tech</span>
                    </div>
                    <div class="card">
                        <span class="value">40</span>
                        <span class="info">Offices in the United States</span>
                    </div>
                    <div class="card">
                        <span class="value">3K+</span>
                        <span class="info">Pixel perfect projects designed</span>
                    </div>
                </div>
                <button>Contact Us</button>
            </div>
            <img class="coin" src="@/assets/images/coin.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
    padding-top: 80px;
    position: relative;

    & div.content {
        box-sizing: border-box;
        max-width: 1920px;
        padding: 0 100px;
        margin: auto;

        & h2 {
            position: relative;
            z-index: 2;
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

            @media (max-width: 780px) {
                /* Update the breakpoint to the desired size */
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
            gap: 36px;
            flex-wrap: wrap;
            margin: auto;
            margin-bottom: 50px;

            @media (max-width: 1395px) {
                max-width: calc(273px*2 + 36px);
            }


            & div.card {
                width: 272px;
                background-color: #FFFFFF;
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                justify-content: center;
                padding: 30px;

                & span.value {
                    font-family: 'Archivo';
                    font-style: normal;
                    font-weight: 800;
                    font-size: 78px;
                    line-height: 88px;
                    /* identical to box height, or 113% */

                    letter-spacing: -3px;

                    color: #183282;
                }

                & span.info {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    /* or 150% */


                    color: #183282;

                    opacity: 0.8;
                }

                z-index: 2;

                @media (max-width: 450px) {
                    width: 90%;
                }
            }

            z-index: 2;
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

        @media (max-width: 780px) {
            padding: 0 20px;
        }
    }

    & img.coin {
        position: absolute;
        right: -10px;
        top: 0px;
        width: 188px;
        z-index: 1;

        @media (max-width: 800px) {
            display: none;
        }
    }

    @media (max-width: 780px) {
        padding-top: 0;
    }
}
</style>