<template>
    <div>
        <div class="container">
            <div class="content">
                <h2>Comprised of diverse <br> minds</h2>
                <div class="projects">
                    <div class="row">
                        <div class="project">
                            <img src="@/assets/images/gemini.png" alt="" class="thumbnail">
                            <h3>GEMINI SKINCARE</h3>
                            <div class="tags">
                                <span class="tag">COPYWRITING</span>
                                <span class="tag">BRAND CONTENT</span>
                                <span class="tag">E-COMMERCE</span>
                            </div>
                        </div>
                        <div class="project">
                            <img src="@/assets/images/silv.png" alt="" class="thumbnail">
                            <h3>SILV PEANUT BUTTER</h3>
                            <div class="tags">
                                <span class="tag">COPYWRITING</span>
                                <span class="tag">BRAND CONTENT</span>
                                <span class="tag">E-COMMERCE</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="project">
                            <img src="@/assets/images/goodroot.png" alt="" class="thumbnail">
                            <h3>GOODROOT PIZZA</h3>
                            <div class="tags">
                                <span class="tag">COPYWRITING</span>
                                <span class="tag">BRAND CONTENT</span>
                                <span class="tag">E-COMMERCE</span>
                            </div>
                        </div>
                        <div class="project">
                            <img src="@/assets/images/olipop.png" alt="" class="thumbnail">
                            <h3>OLIPOP DRINKS</h3>
                            <div class="tags">
                                <span class="tag">COPYWRITING</span>
                                <span class="tag">BRAND CONTENT</span>
                                <span class="tag">E-COMMERCE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button>See all projects</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
    padding-top: 170px;

    & div.content {
        box-sizing: border-box;
        max-width: 1920px;
        padding: 0 100px;
        margin: auto;
        padding-bottom: 150px;

        & h2 {
            margin-top: 0;
            font-family: 'Archivo';
            font-style: normal;
            font-weight: 600;
            font-size: 58px;
            line-height: 68px;
            /* or 117% */

            text-align: center;
            letter-spacing: -1px;

            color: #183282;

            @media (max-width: 600px) {
                font-size: 40px;
                line-height: 50px;
                letter-spacing: -0.75px;
                & br {
                    display: none;
                }
            }

            @media (max-width: 750px) {
                & br {
                    display: none;
                }
            }
        }

        & div.projects {
            display: flex;
            flex-direction: column;
            gap: 88px;

            & div.row {
                display: flex;
                justify-content: center;
                gap: 40px;

                & div.project {
                    & img {
                        width: 100%;
                        transition: scale .2s ease-in-out, box-shadow .2s ease-in-out;
                        cursor: pointer;

                        &:hover {
                            scale: 1.05;
                        }
                    }

                    & div.tags {
                        display: flex;
                        gap: 5px;
                        flex-wrap: wrap;

                        & span.tag {
                            padding: 8px 20px;
                            background: #282857;
                            border-radius: 24px;
                            font-family: 'Inter';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 12px;
                            line-height: 18px;
                            /* identical to box height, or 150% */

                            text-align: center;
                            text-transform: uppercase;

                            color: #FFFFFF;

                            @media (max-width: 600px) {
                                padding: 4px 10px;
                            }
                        }
                    }

                    & h3 {
                        font-family: 'Archivo';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 28px;
                        line-height: 38px;
                        /* identical to box height, or 136% */

                        letter-spacing: -0.5px;

                        color: #183282;
                        margin-bottom: 10px;

                        &:hover {
                            text-decoration: underline;
                            cursor: pointer;
                        }

                        @media (max-width: 600px) {
                            font-family: 'Archivo';
                            font-style: normal;
                            font-weight: 600;
                            font-size: 24px;
                            line-height: 34px;
                            /* identical to box height, or 142% */

                            letter-spacing: -0.5px;

                            color: #183282;
                        }
                    }
                }

                &:first-of-type {
                    & div.project {

                        &:first-of-type {
                            max-width: 646px;

                            @media (max-width: 1000px) {
                                max-width: 100%;
                            }
                        }

                        &:last-of-type {
                            max-width: 484px;

                            @media (max-width: 1000px) {
                                max-width: 100%;
                            }
                        }
                    }
                }

                &:last-of-type {
                    & div.project {

                        &:first-of-type {
                            max-width: 484px;

                            @media (max-width: 1000px) {
                                max-width: 100%;
                            }
                        }

                        &:last-of-type {
                            max-width: 646px;

                            @media (max-width: 1000px) {
                                max-width: 100%;
                            }
                        }
                    }
                }

                @media (max-width: 1000px) {
                    flex-direction: column;
                }
            }

            @media (max-width: 1000px) {
                gap: 40px;
            }

            padding-bottom: 60px;
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

        @media (max-width: 600px) {
            padding: 0 20px;
        }
    }

    @media (max-width: 600px) {
        padding-top: 80px;
        padding-bottom: 100px;
    }
}
</style>