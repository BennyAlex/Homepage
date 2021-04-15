<template>
    <glass-card title="Kontakt" showBackButton>
        <div
            class="row column-sm height-100 justify-space-between align-center"
            ref="container"
        >
            <div class="width-50 width-100-sm" id="contact">
                <div class="row align-center">
                    <i class="material-icons">
                        my_location
                    </i>
                    <div>
                        <span class="subline"> Adresse</span> <br/>
                        Wagnergäßchen 10 <br/>
                        97204 Höchberg
                    </div>
                </div>
                <div class="row align-center">
                    <i class="material-icons">
                        email
                    </i>
                    <div class="break-word">
                        <span class="subline"> Email</span> <br/>
                        <a
                            id="mail"
                            class="break-word"
                            href="mailto:benjamin.alexander.franz@gmail.com"
                        >benjamin.alexander.franz@gmail.com
                        </a>
                    </div>
                </div>
                <div class="row align-center">
                    <i class="material-icons">
                        phone
                    </i>
                    <div>
                        <span class="subline"> Telefon</span> <br/>
                        <a id="phone" href="tel:+4901714883330"
                        >+49 0171 4883330</a
                        >
                    </div>
                </div>
                <div class="row align-center">
                    <i class="material-icons">
                        cake
                    </i>
                    <div>
                        <span class="subline"> Geburtstag</span> <br/>
                        am 06.02.1998 <br/>
                        in Aschaffenburg
                    </div>
                </div>
            </div>

            <div
                id="map"
                class="width-50 width-100-sm"
                :style="{ height: mapHeight }"
            ></div>
        </div>
    </glass-card>
</template>

<script>
import GlassCard from '@/components/GlassCard.vue'
import L, { map, tileLayer, marker } from 'leaflet'
import icon from '@/images/marker.svg'

export default {
    name: 'Kontakt',
    components: {GlassCard},
    data: () => ({
        mapHeight: ''
    }),
    mounted() {
        window.addEventListener('resize', this.resizeMap)
        this.resizeMap()

        // fix L not defined
        window.L = window.L || L

        this.$nextTick(() => {
            const lng = 9.87759
            const lat = 49.78168
            const latlng = L.latLng(lat, lng)

            var mymap = map('map').setView(latlng, 18)

            tileLayer(
                'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
                {
                    attribution: '',
                    maxZoom: 21,
                    id: 'mapbox/streets-v11', // mapbox/dark-v10
                    accessToken:
                        'sk.eyJ1IjoiYmVubnlhbGV4IiwiYSI6ImNrNXdyZzhmejBvMGgza3J2cHNlcWtwM2wifQ.c4Iq6VYUmn3TY7G9wAOgdA'
                }
            ).addTo(mymap)

            marker(latlng, {
                icon: L.icon({
                    iconUrl: icon,
                    iconSize: [42, 42],
                    popupAnchor: [0, -22]
                }),
                keyboard: false,
                title: 'Benjamin Franz',
                alt: 'Benjamin Franz'
            })
                .addTo(mymap)
                .bindPopup('Benjamin Franz', {
                    closeButton: false,
                    autoClose: false,
                    closeOnClick: false,
                    closeOnEscapeKey: false
                })
                .openPopup()
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeMap)
    },
    methods: {
        resizeMap() {
            this.mapHeight = window.getComputedStyle(
                this.$refs.container
            ).height
        }
    }
}
</script>

<style scoped>
#contact {
    flex-shrink: 0;
    height: auto;
}

#contact a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.75);
}

#contact .row {
    margin-bottom: 30px;
}

#contact i {
    font-size: 29px;
    height: 29px;
    width: 29px;
    line-height: 29px;
    margin-right: 19px;
    color: rgba(0, 0, 0, 0.8);
}

#mail {
    font-size: 15px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
}

#contact a:hover {
    text-decoration: underline;
}

#map {
    min-height: 260px !important;
}

@media only screen and (max-width: 764px) {
    #contact {
        margin-bottom: 6px;
    }

    #contact i {
        font-size: 27px;
        height: 27px;
        width: 27px;
        line-height: 27px;
    }

    #map {
        max-height: 50% !important;
    }
}
</style>
