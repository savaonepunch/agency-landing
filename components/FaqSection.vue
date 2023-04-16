<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="left">
                    <h1>Frequently asked <br> questions</h1>
                    <img src="@/assets/images/stars.png" alt="">
                </div>

                <div class="right">
                    <ul>
                        <li v-for="item in accordion" @click="handleAccordionClick(item)">
                            <div class="title">{{ item.question }} <img :style="{ rotate: item.isOpen ? '180deg' : '0deg' }"
                                    src="@/assets/images/arrow.png" alt=""></div>
                            <p v-if="item.isOpen">{{ item.answer }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const accordion = ref([
    {
        question: "Tell me about your customer support?",
        answer: "Our customer support is known for its exceptional quality, with round-the-clock availability and support in multiple time zones.",
        isOpen: false
    },
    {
        question: "What does your reporting look like?",
        answer: "Our reporting is comprehensive and visually appealing, providing valuable insights for informed decision-making.",
        isOpen: false
    },
    {
        question: "What does training look like?",
        answer: "Our training programs are led by experienced trainers and designed to keep pace with your business, with support available across different time zones.",
        isOpen: false
    },
    {
        question: "What type of agencies do you work with?",
        answer: "We collaborate with diverse agency types, including advertising, digital marketing, PR, and creative agencies, providing support across different time zones.",
        isOpen: false
    },
    {
        question: "Is there any ongoing training?",
        answer: "Yes, we offer continuous training and support to ensure our clients stay up-to-date with the latest industry trends and best practices.",
        isOpen: false
    },
    {
        question: "What if my clients need technical help?",
        answer: "Our skilled technical support team is available 24/7 to promptly assist with any technical issues your clients may encounter, across different time zones.",
        isOpen: false
    }
]
)

const handleAccordionClick = (clickedQuestion) => {
    clickedQuestion.isOpen = !clickedQuestion.isOpen;

    accordion.value.forEach(question => {
        if (clickedQuestion !== question) {
            question.isOpen = false;
        }
    });
}
</script>

<style lang="scss" scoped>
div.container {
    & div.content {
        box-sizing: border-box;
        margin: auto;
        max-width: 1920px;
        padding: 0 100px;
        display: flex;
        gap: 20px;

        & div.left {
            width: 50%;
            display: flex;
            flex-direction: column;

            & h1 {
                margin-top: 0;
                font-family: 'Archivo';
                font-style: normal;
                font-weight: 600;
                font-size: 58px;
                line-height: 68px;
                /* or 117% */

                letter-spacing: -1px;

                color: #FFFFFF;

                @media (max-width:600px) {
                    font-weight: 600;
                    font-size: 40px;
                    line-height: 50px;
                    /* or 125% */

                    letter-spacing: -0.75px;
                }
            }

            & img {
                max-width: 300px;
                margin-left: auto;
                margin-right: auto;
            }

            @media (max-width:850px) {
                width: 100%;
            }
        }

        & div.right {
            width: 50%;

            & ul {
                list-style: none;
                margin-left: 0;
                padding-left: 0;
                margin: 0;

                & li {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.427);

                    & div.title {
                        align-items: center;
                        padding: 15px 0;
                        display: flex;
                        justify-content: space-between;
                        font-family: 'Archivo';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 28px;
                        line-height: 38px;
                        /* identical to box height, or 136% */

                        letter-spacing: -0.5px;

                        color: #FFFFFF;

                        & img {
                            width: 24px;
                            height: 24px;
                        }
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

                        opacity: 0.6;
                    }

                    &:last-of-type {
                        border: none;
                    }

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            @media (max-width:850px) {
                width: 100%;
            }
        }

        @media (max-width:850px) {
            flex-direction: column;
        }

        @media (max-width:600px) {
            padding: 0 20px;
        }
    }
}
</style>