<template>
    <button class="mdc-icon-button material-icons no-select" ref="iconButton">
        <slot></slot>
    </button>
</template>

<script>
import { MDCRipple } from '@material/ripple'

export default {
    name: 'IconButton',
    data: () => ({}),
    mounted() {
        const iconButtonRipple = new MDCRipple(this.$refs.iconButton)
        iconButtonRipple.unbounded = true
    }
}
</script>

<style scoped>
.mdc-icon-button {
    width: 36px;
    height: 36px;
    padding: 6px;
}
</style>
