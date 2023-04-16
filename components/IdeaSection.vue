<template>
    <div>
        <div class="container">
            <div class="content">
                <h1>Have an Idea? Let's Build <br> and Scale It.</h1>
                <button>Book a demo</button>
            </div>
            <!-- <img src="@/assets/images/yellowthing.png" alt=""> -->
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
    position: relative;
    padding-bottom: 50px;
    & div.content {
        max-width: 1920px;
        box-sizing: border-box;
        padding: 0 100px;
        margin: auto;

        & h1 {
            font-family: 'Archivo';
            font-style: normal;
            font-weight: 600;
            font-size: 58px;
            line-height: 68px;
            /* or 117% */

            text-align: center;
            letter-spacing: -1px;

            color: #FFFFFF;

            @media (max-width:850px) {
                & br {
                    display: none;
                }
            }

            @media (max-width:600px) {
                font-weight: 600;
                font-size: 40px;
                line-height: 50px;
                /* or 125% */
                letter-spacing: -0.75px;
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

        @media only screen and (max-width: 600px) {
            padding: 0 20px;
        }
    }

    & img {
        position: absolute;
        bottom: -200%;
        left: 0px;
        width: 400px;
    }
}
</style>