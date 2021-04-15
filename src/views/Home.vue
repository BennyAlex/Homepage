<template>
    <glass-card title="Willkommen!">
        <div class="row column-sm align-center height-100" id="container">
            <img src="../images/selfie2.jpg" class="height-100" id="image"/>

            <div
                class="column align-center justify-center center width-100-sm"
                id="me"
            >
				<span id="name" class="">
					Ich bin Benjamin Franz
				</span>
                <span class="subline center">
					Fullstack Entwickler <br>
					mit Leidenschaft für <br>
					JavaScript Frameworks
				</span>
                <md-button
                    class="mdc-button--raised mdc-elevation--z6"
                    href="https://bennyalex.github.io/Lebenslauf/"
                >
                    <div class="row">
                        <span class="mdc-button-label">Lebenslauf</span>
                        <i class="material-icons mdc-button__icon">
                            assignment
                        </i>
                    </div>
                </md-button>
            </div>
        </div>
    </glass-card>
</template>

<script>
import GlassCard from '@/components/GlassCard.vue'
import MdButton from '@/components/MdButton.vue'

export default {
    name: 'Home',
    components: {GlassCard, MdButton},
    data: () => ({})
}
</script>

<style scoped>
.mdc-button {
    margin-top: 56px;
    min-height: 62px;
    height: 62px;
    padding: 0 42px;
    font-size: 22px;
    transition: all 0.25s ease-in-out;
}

.mdc-button__icon {
    font-size: 22px;
    height: 22px;
    width: 22px;
    padding-top: 1px;
    margin-left: 14px;
    margin-right: 0;
}

.mdc-button-label {
    font-size: 19px;
    padding-bottom: 1px;
}

#container {
    min-height: 200px;
}

#me {
    margin-right: -13px;
    flex-grow: 1;
    flex-shrink: 0;
}

#name {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 22px;
}

body:not(.disable-hover) .mdc-button:hover {
    transform: scale(1.04);
}

@media only screen and (max-width: 764px) {
    .mdc-button {
        margin-top: 40px;
        margin-bottom: 46px;
        min-height: 52px;
        height: 52px;
        padding: 0 36px;
        font-size: 20px;
    }

    #image {
        order: 2;
        justify-content: center;
        height: auto;
        width: 100%;
        max-width: 380px;
    }

    #me {
        margin-right: 0;
        flex-shrink: 0;
    }

    #name {
        margin-top: 22px;
        font-size: 20px
    }
}
</style>
