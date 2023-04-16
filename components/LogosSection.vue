<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="logos">
                    <img src="@/assets/images/Alphabet_Inc.-Logo.wine.svg" alt="">
                    <img src="@/assets/images/Amazon_(company)-Logo.wine.svg" alt="">
                    <img src="@/assets/images/Microsoft_Azure-Logo.wine.svg" alt="">
                    <img src="@/assets/images/Slack_Technologies-Logo.wine.svg" alt="">
                </div>
                <img src="@/assets/images/guy.svg" alt="" class="guy">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
    padding-top: 80px;

    & div.content {
        box-sizing: border-box;
        max-width: 1920px;
        margin: auto;
        padding: 0 100px;
        position: relative;

        & div.logos {
            display: flex;
            align-items: center;
            gap: 10px;

            @media only screen and (max-width: 1260px) {
                transform-origin: 0 -100%;
                scale: .8;
            }

            @media only screen and (max-width: 1100px) {
                // background-color: red;
                scale: 1;
                // width: 300px;
                flex-wrap: wrap;
                margin: auto;
                justify-content: center;
            }

            @media only screen and (max-width: 555px) {
                max-width: 300px;
            }
        }

        & img.guy {
            position: absolute;
            right: 0px;
            padding-right: inherit;
            bottom: -150%;

            @media only screen and (max-width: 1260px) {
                scale: .8;
            }

            @media only screen and (max-width: 1100px) {
                scale: 1;
                padding: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                transform-origin: 100%;
                top: -280px;
                width: 300px;
            }

            @media only screen and (max-width: 400px) {
                width: 300px;
            }
        }

        @media only screen and (max-width: 700px) {
            padding: 0 20px;
        }
    }

    @media only screen and (max-width: 1100px) {
        padding-top: 150px;

        & img.guy {
            top: -100%;
        }
    }
}
</style>