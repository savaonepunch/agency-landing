<template>
    <div :class="{'mobile-menu': true, 'open': mobileMenuOpen}">
        <div class="nav-list">
            <div :class="{'nav-item': true, 'open': mobileMenuOpen}">Pricing</div>
            <div :class="{'nav-item': true, 'open': mobileMenuOpen}">Success</div>
            <div :class="{'nav-item': true, 'open': mobileMenuOpen}">Stories</div>
            <div :class="{'nav-item': true, 'open': mobileMenuOpen}">About Us</div>
            <div :class="{'nav-item': true, 'open': mobileMenuOpen}">Company</div>
        </div>
    </div>
    <div>
        <div class="header-container">
            <div class="header">
                <img class="logo" src="@/assets/images/logo.svg" alt="logo">
                <div class="nav-container">
                    <div class="nav-item">Pricing</div>
                    <div class="nav-item">Success</div>
                    <div class="nav-item">Stories</div>
                    <div class="nav-item">About Us</div>
                    <div class="nav-item">Company</div>
                </div>
                <button class="contact-cta">Contact Us</button>
            </div>
        </div>
        <div class="mobile-container">
            <div class="header">
                <img class="logo" src="@/assets/images/logo.svg" alt="logo">
                <div @click="mobileMenuOpen = !mobileMenuOpen" :class="{'menu-button': true}">
                    <div v-if="!mobileMenuOpen" class="open">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                    <div v-else class="close">
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

<style lang="scss" scoped>
div.header-container {
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    height: 100px;
    width: 100vw;
    background-color: #ECEADD;
    filter: blur(0);
    z-index: 99;

    & div.header {
        box-sizing: border-box;
        padding: 0 100px;
        height: 100%;
        // background-color: red;
        max-width: 1920px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & img.logo {
            scale: 1.2;
        }

        & div.nav-container {
            display: flex;
            gap: 32px;

            & div.nav-item {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                /* identical to box height, or 150% */
                color: #183282;
                opacity: 0.8;
                transition: .2s ease-in-out opacity;

                &:hover {
                    opacity: 1;
                    cursor: pointer;
                }
            }
        }

        & button.contact-cta {
            all: unset;
            width: 144px;
            height: 48px;
            border: 1px solid #FE804B;
            border-radius: 12px;
            text-align: center;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height, or 150% */
            text-align: center;
            color: #183282;
            transition: background-color .2s ease-in-out, color .2s ease-in-out;

            &:hover {
                cursor: pointer;
                background-color: #FE804B;
                color: white;
            }
        }
    }

    @media only screen and (max-width: 1100px) {
        display: none;
    }
}

div.mobile-container {
    display: none;
    z-index: 99;

    @media only screen and (max-width: 1100px) {
        display: block;

        box-sizing: border-box;
        padding: 0 20px;
        position: fixed;
        top: 0px;
        height: 80px;
        width: 100vw;
        background-color: #ECEADD;
        filter: blur(0);

        & div.header {

            position: relative;
            height: 100%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            & img.logo {
                scale: .9;
            }

            & div.menu-button {
                position: absolute;
                right: 0px;
                width: 30px;
                height: 30px;

                & div.bar {
                    background-color: rgb(132, 132, 132);
                    opacity: 1;
                    height: 4px;
                    width: 30px;
                    border-radius: 100px;
                    transition: background-color .2s ease-in-out;

                }

                & div.open {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                & div.close {
                    position: absolute;

                    & div.bar {
                        position: absolute;
                        top: 13px;
                        left: 0;

                        &:first-of-type {
                            rotate: -45deg;
                        }

                        &:last-of-type {
                            rotate: 45deg;
                        }
                    }
                }

                &:hover {
                    & div.bar {
                        background-color: black;
                    }

                    cursor: pointer;
                }
            }
        }
    }
}

div.mobile-menu {
    translate: -100% 0;

    @media only screen and (min-width: 1100px) {
        display: none;
    }

    position: fixed;
    z-index: 99;
    min-height: 100vh;
    width: 100vw;
    background-color: #ECEADD;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: blur(0);

    & div.nav-list {
        display: flex;
        flex-direction: column;
        gap: 30px;

        & div.nav-item {
            font-family: 'Archivo';
            font-style: normal;
            font-weight: 800;
            font-size: 48px;
            line-height: 58px;
            /* or 121% */
            letter-spacing: -2px;
            color: #183282;

            &:hover {
                cursor: pointer;
            }

            translate: -400px 0;
            opacity: 0;

            &:first-of-type {
                transition: translate .2s ease-in-out, opacity .2s ease-in-out;
            }
            &:nth-of-type(2) {
                transition: translate .3s ease-in-out, opacity .2s ease-in-out;
            }
            &:nth-of-type(3) {
                transition: translate .4s ease-in-out, opacity .4s ease-in-out;
            }
            &:nth-of-type(4) {
                transition: translate .5s ease-in-out, opacity .5s ease-in-out;
            }
            &:last-of-type {
                transition: translate .6s ease-in-out, opacity .6s ease-in-out;
            }

            &.open {
                translate: 0px 0;
                opacity: 1;
            }
        }
    }

    transition: translate .2s ease-in-out;

    &.open {
        translate: 0 0;
    }
}
</style>