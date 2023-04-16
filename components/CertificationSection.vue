<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="card">
                    <div class="left">
                        <h2>Certification</h2>
                        <img src="@/assets/images/ill2.png" alt="">
                    </div>
                    <div class="right">
                        <div class="row">
                            <h3>Amazon</h3>
                            <p>We specialize in developing interactive, <br> scalable, brand-oriented.</p>
                        </div>
                        <div class="row">
                            <h3>Google</h3>
                            <p>We specialize in developing interactive, <br> scalable, brand-oriented.</p>
                        </div>
                        <div class="row">
                            <h3>Facebook</h3>
                            <p>We specialize in developing interactive, <br> scalable, brand-oriented.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img class="scribble" src="@/assets/images/scribble.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
    position: relative;

    & div.content {
        max-width: 1920px;
        margin: auto;
        box-sizing: border-box;
        padding: 0 100px;

        & div.card {
            box-sizing: border-box;
            background: linear-gradient(180deg, #7795FD 0%, #4958CC 100%);
            border: 10px solid #FFFFFF;
            border-radius: 40px;
            display: flex;
            justify-content: space-around;
            padding: 60px;
            align-items: center;
            max-width: 1100px;
            margin: auto;
            margin-top: -200px;
            z-index: 1;

            & div.left {
                & h2 {
                    margin-top: 0;
                    font-family: 'Archivo';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 58px;
                    line-height: 68px;
                    /* identical to box height, or 117% */

                    letter-spacing: -1px;

                    color: #FFFFFF;
                }

                & img {
                    width: 100%;
                    max-width: 400px;
                }
            }

            & div.right {
                & h3 {
                    margin: 0;
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
                    margin-top: 0px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    /* or 150% */


                    color: #FFFFFF;

                    opacity: 0.8;
                }
            }

            @media (max-width: 1100px) {
                flex-direction: column;
                gap: 50px;
                max-width: 600px;
                padding: 50px;
            }

            @media (max-width: 700px) {
                & div.left {
                    & h2 {
                        font-family: 'Archivo';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 40px;
                        line-height: 50px;
                        /* identical to box height, or 125% */

                        text-align: center;
                        letter-spacing: -0.75px;

                        color: #FFFFFF;

                    }
                }
            }
        }

        @media (max-width: 600px) {
            padding: 0 20px;
        }
    }

    & img.scribble {
        width: 350px;
        position: absolute;
        bottom: -50%;
        left: 0;
        z-index: 2;

        @media (max-width: 1100px) {
            display: none;
        }
    }
}
</style>