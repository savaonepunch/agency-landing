<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="slider">
                    <div ref="reviewsRef" class="reviews">
                        <div v-for="review in reviews" ref="reviewRef" class="review">
                            <h1 v-html="review.title"></h1>
                            <p class="description">{{ review.description }}</p>
                            <p class="author">{{ review.author }}</p>
                            <p class="company">{{ review.company }}</p>
                        </div>
                    </div>
                    <div class="buttons">
                        <button :style="{ opacity: reviewIndex <= 0 ? .5 : 1 }" @click="prevReview"><img
                                src="@/assets/images/left-arrow.svg" alt=""></button>
                        <button :style="{ opacity: reviewIndex >= reviews.length - 1 ? .5 : 1 }" @click="nextReview"><img
                                src="@/assets/images/right-arrow.svg" alt=""></button>
                    </div>
                    <span class="quotes">
                        “
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const reviewsRef = ref(null);
const reviewRef = ref(null);

const reviews = ref(
    [
        {
            title: 'Passion for creating digital experiences',
            description: "I was very satisfied with my decision to work with Zorro on building the website for my brand, Gemini Skincare. They did a great job putting the site together in a timely fashion. Jon & team are extremely detail-oriented and were open to the feedback I provided them.",
            author: 'Floyd Miles',
            company: 'The Walt Disney Company'
        },

        {
            title: "Thrilled with Zorro's Digital Expertise",
            description: "Working with Zorro on my website was a pleasure. Jon and his team's passion for digital experiences was evident in every step. The website they built for Gemini Skincare exceeded my expectations in terms of design and functionality. Highly recommend!",
            author: 'Mark Zuckerberg',
            company: 'Facebook'
        },

        {
            title: 'Impressive Website Creation by Zorro',
            description: "Zorro's expertise in creating digital experiences shone in the website they developed for Gemini Skincare. Jon and his team were attentive to detail, incorporated my feedback, and delivered a visually appealing website that perfectly represents my brand. Very satisfied!",
            author: 'Steve Jobs',
            company: 'Microsoft'
        },
    ]
);

const reviewIndex = ref(0);

onMounted(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
});
onUnmounted(() => {
    window.removeEventListener("resize", handleWindowSizeChange);
});

const handleWindowSizeChange = () => {
    reviewsRef.value.style.translate = `${reviewRef.value[0].offsetWidth * (reviewIndex.value * -1)}px 0`;
};

const nextReview = () => {
    if (reviewIndex.value >= reviews.value.length - 1) return;
    reviewIndex.value += 1;
    reviewsRef.value.style.translate = `${reviewRef.value[0].offsetWidth * (reviewIndex.value * -1)}px 0`;
    console.log(reviewIndex.value);
}

const prevReview = () => {
    if (reviewIndex.value <= 0) return;
    reviewIndex.value -= 1;
    reviewsRef.value.style.translate = `${reviewRef.value[0].offsetWidth * (reviewIndex.value * -1)}px 0`;
}

</script>

<style lang="scss" scoped>
div.container {
    & div.content {
        box-sizing: border-box;
        max-width: 1920px;
        margin: auto;
        padding: 0 100px;

        & div.slider {
            position: relative;
            box-sizing: border-box;
            max-width: 1100px;
            background: linear-gradient(96.65deg, #FF9A63 0%, #FE804B 100%);
            border: 10px solid #FFFFFF;
            border-radius: 40px;
            margin: auto;
            overflow: hidden;
            translate: 0 -110px;

            & div.reviews {
                display: flex;
                transition: translate .2s ease-in-out;

                & div.review {
                    box-sizing: border-box;
                    padding: 50px;
                    flex: 1 0 100%;

                    & h1 {
                        max-width: 70%;
                        margin-top: 0;
                        font-family: 'Archivo';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 58px;
                        line-height: 68px;
                        /* or 117% */

                        letter-spacing: -1px;

                        color: #FFFFFF;

                        @media (max-width: 750px) {
                            max-width: 100%;
                            font-family: 'Archivo';
                            font-style: normal;
                            font-weight: 600;
                            font-size: 40px;
                            line-height: 50px;
                            /* or 125% */

                            letter-spacing: -0.75px;

                            color: #FFFFFF;
                            margin-top: 50px;
                        }
                    }

                    & p.description {
                        font-family: 'Archivo';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 25px;
                        line-height: 38px;
                        /* or 136% */

                        letter-spacing: -0.5px;

                        color: #FFFFFF;

                        opacity: 0.8;

                        @media (max-width: 750px) {
                            font-weight: 400;
                            font-size: 22px;
                            line-height: 38px;
                            /* or 173% */

                            letter-spacing: -0.5px;
                        }
                    }

                    & p.author {
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 30px;
                        /* identical to box height, or 150% */


                        color: #FFFFFF;
                        margin-bottom: 0;
                    }

                    & p.company {
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 24px;
                        /* identical to box height, or 150% */


                        color: #FFFFFF;

                        opacity: 0.8;
                        margin-bottom: 0;
                        margin-top: 0;
                    }

                    @media (max-width: 700px) {
                        padding-bottom: 70px;
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                }
            }

            & div.buttons {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 44px;
                position: absolute;
                bottom: 50px;
                right: 50px;

                & button {
                    all: unset;
                    padding: 10px 10px;

                    &:hover {
                        cursor: pointer;
                    }
                }

                @media (max-width: 700px) {
                    left: 0px;
                    right: 0px;
                    margin: auto;
                    bottom: 20px;
                }
            }

            & span.quotes {
                position: absolute;
                top: 50px;
                right: 50px;

                font-family: 'Archivo';
                font-style: normal;
                font-weight: 600;
                font-size: 200px;
                line-height: 0px;
                /* identical to box height */

                letter-spacing: -1px;

                color: #FFFFFF;

                transform: rotate(180deg);

                @media (max-width: 700px) {
                    font-size: 100px;
                }
            }
        }

        @media (max-width: 600px) {
            padding: 0 20px;
        }
    }
}
</style>