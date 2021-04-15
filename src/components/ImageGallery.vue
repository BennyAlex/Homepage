<template>
    <div ref="imageGallery">
        <transition name="image-gallery-fade">
            <div
                class="image-gallery no-select"
                v-if="visible"
                @mousedown.stop="hide"
                @touchdown.stop="hide"
            >
                <icon-button
                    class="image-gallery-close"
                    @mousedown.stop="hide"
                    @touchdown.stop="hide"
                >
                    close
                </icon-button>

                <div
                    class="image-gallery-arrow image-gallery-arrow-left"
                    v-show="has_prev() && controlsVisible"
                    @mousedown.stop.prevent="prev"
                    @touchdown.stop.prevent="prev"
                >
                    <transition name="image-gallery-fade">
                        <icon-button>
                            chevron_left
                        </icon-button>
                    </transition>
                </div>
                <div
                    class="image-gallery-arrow image-gallery-arrow-right"
                    @mousedown.stop.prevent="next"
                    @touchdown.stop.prevent="next"
                    v-show="has_next() && controlsVisible"
                >
                    <transition name="image-gallery-fade">
                        <icon-button>
                            chevron_right
                        </icon-button>
                    </transition>
                </div>
                <transition name="image-gallery-fade">
					<span
                        class="image-gallery-caption mdc-elevation--z12"
                        v-show="controlsVisible && images[index].alt"
                        @mousedown.stop
                        @touchdown.stop
                    >
						<span>{{ images[index].alt }}</span>
					</span>
                </transition>
                <div
                    class="image-gallery-main"
                    @mousedown.stop="hide"
                    @touchdown.stop="hide"
                >
                    <div
                        class="image-gallery-image-container"
                        @mousedown.stop
                        @touchdown.stop
                    >
                        <transition :name="slideTransitionName" mode="out-in">
                            <div
                                class="image-gallery-image"
                                :key="index"
                                :style="imageStyle()"
                            ></div>
                        </transition>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import IconButton from './IconButton.vue'

export default {
    name: 'ImageGallery',
    components: {IconButton},
    props: {
        // images = [{ name:'image1.jpg', alt:'Redwoods'}, ...]
        images: {
            type: Array,
            required: true
        },
        // Used if images are located in a separate folder (e.g. '/images/')
        directory: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            timeoutDuration: 3300,
            visible: false, // image-gallery not visible by default
            controlsVisible: true, // image-gallery controls (arrows, caption, close button)
            index: 0, // Index indicates which photo to display. Default to 1st photo
            timer: null, // Timer to show/hide image-gallery controls
            slideTransitionName: 'image-gallery-slide-next' //Controls animation's transition direction (next or prev)
        }
    },
    mounted() {
        document
            .getElementById('app-container')
            .appendChild(this.$refs.imageGallery)

        window.addEventListener('keydown', this.keyEventListener)
        window.addEventListener('mousemove', this.mouseEventListener)
        window.addEventListener('touchmove', this.mouseEventListener)
        window.addEventListener('mouseup', this.mouseEventListener)
    },
    destroyed() {
        window.removeEventListener('keydown', this.keyEventListener)
        window.removeEventListener('mousemove', this.mouseEventListener)
        window.removeEventListener('touchmove', this.mouseEventListener)
        window.removeEventListener('mouseup', this.mouseEventListener)
    },
    methods: {
        show(imageName) {
            this.visible = true
            this.controlsVisible = true
            var that = this

            if (imageName) {
                // Find the index of the image passed to image-gallery
                for (var i = 0; i < this.images.length; i++) {
                    if (this.images[i].name == imageName) {
                        this.index = i
                        break
                    }
                }
            }

            clearTimeout(this.timer)
            this.timer = setTimeout(function () {
                that.controlsVisible = false
            }, that.timeoutDuration)
            this.preloadNeighbourImages()
        },
        imageStyle() {
            return {
                'background-image':
                    'url("' +
                    this.directory +
                    this.images[this.index].name +
                    '")'
            }
        },
        hide() {
            this.visible = false
            this.index = 0
            clearTimeout(this.timer)
        },
        has_next() {
            return this.index + 1 < this.images.length
        },
        has_prev() {
            return this.index - 1 >= 0
        },
        prev() {
            if (this.has_prev()) {
                this.slideTransitionName = 'image-gallery-slide-prev'
                this.index -= 1
                this.preloadNeighbourImages()
            }
        },
        next() {
            if (this.has_next()) {
                this.slideTransitionName = 'image-gallery-slide-next'
                this.index += 1
                this.preloadNeighbourImages()
            }
        },
        keyEventListener(e) {
            if (this.visible) {
                var that = this
                this.controlsVisible = true
                clearTimeout(this.timer)
                this.timer = setTimeout(function () {
                    that.controlsVisible = false
                }, that.timeoutDuration)

                switch (e.key) {
                case 'ArrowRight':
                    this.next()
                    break
                case 'ArrowLeft':
                    this.prev()
                    break
                case 'ArrowDown':
                case 'ArrowUp':
                case ' ':
                    e.preventDefault()
                    break
                case 'Escape':
                    this.hide()
                    break
                }
            }
        },
        // This event shows the arrows and caption on the image-gallery when the mouse is moved or clicked.
        // Also used for touch events on touchscreen devices. The elements are set to disappear
        // after a given duration via a timer.
        mouseEventListener() {
            if (this.visible) {
                var that = this
                this.controlsVisible = true
                clearTimeout(this.timer)
                this.timer = setTimeout(function () {
                    that.controlsVisible = false
                }, that.timeoutDuration)
            }
        },
        preloadNeighbourImages() {
            var _img = new Image()

            if (this.has_next()) {
                try {
                    _img.src =
                        this.directory + this.images[this.index + 1].name
                } catch (e) {
                    return
                }
            }
            if (this.has_prev()) {
                try {
                    _img.src =
                        this.directory + this.images[this.index - 1].name
                } catch (e) {
                    return
                }
            }
        }
    }
}
</script>

<style scoped lang="stylus">
.image-gallery {
    position fixed
    top 0
    left 0
    background rgba(0, 0, 0, 0.8)
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    z-index 99 !important
    color rgba(255, 255, 255, 0.85)
}

.image-gallery .mdc-icon-button {
    font-size 48px
    width 50px
    height 50px
    padding 0
}

.image-gallery .image-gallery-close {
    font-size 34px
}

.image-gallery-close {
    position fixed
    z-index 105
    right 0
    top 0
    margin 8px
}

.image-gallery-main {
    display flex
    width 100%
    height 100%
}

.image-gallery-arrow {
    cursor pointer
    display flex
    justify-content center
    align-items center
    position absolute
    padding 0 8px
    height 100%
    width auto
    z-index 100
}

.image-gallery-arrow .mdc-icon-button {
    background rgba(0, 0, 0, 0.25)
    border-radius: 50%;
}

.image-gallery-arrow-right {
    right 0
}

.image-gallery-arrow-left {
    left 0
}

.image-gallery-image-container {
    width 20%
    flex 1
    padding 60px
}

.image-gallery-image {
    width 100%
    height 100%
    background-size contain
    background-repeat no-repeat
    background-position 50% 50%
}

.image-gallery-caption {
    position absolute
    bottom 20px
    z-index 100
    text-align center
}

.image-gallery-caption span {
    border-radius 12px
    background-color rgba(0, 0, 0, 0.9)
    padding 2px 10px
}

.image-gallery-slide-next-enter-active,
.image-gallery-slide-next-leave-active,
.image-gallery-slide-prev-enter-active,
.image-gallery-slide-prev-leave-active {
    transition all 0.4s ease-in-out
}

.image-gallery-slide-next-enter {
    -webkit-transform translateX(100px)
    -ms-transform translateX(100px)
    transform translateX(100px)
    opacity 0
}

.image-gallery-slide-next-leave-to {
    -webkit-transform translateX(-100px)
    -ms-transform translateX(-100px)
    transform translateX(-100px)
    opacity 0
}

.image-gallery-slide-prev-enter {
    -webkit-transform translateX(-100px)
    -ms-transform translateX(-100px)
    transform translateX(-100px)
    opacity 0
}

.image-gallery-slide-prev-leave-to {
    -webkit-transform translateX(100px)
    -ms-transform translateX(100px)
    transform translateX(100px)
    opacity 0
}

.image-gallery-fade-enter-active,
.image-gallery-fade-leave-active {
    transition all 0.5s ease-in-out
}

.image-gallery-fade-enter,
.image-gallery-fade-leave-to {
    opacity 0
}

@media only screen and (max-width 470px) {
    .image-gallery-image-container {
        padding 10px
    }
}
</style>
