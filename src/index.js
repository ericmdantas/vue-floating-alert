import VueFloatingAlert, {floatingAlert} from './floating-alert.vue'

export default {
    install(Vue) {
        Vue.prototype.$floatingAlert = {
            error(opts) {
                floatingAlert.error(opts)
            },
            success(opts) {
                floatingAlert.success(opts)
            },
            info(opts) {
                floatingAlert.info(opts)
            },
            warn(opts) {
                floatingAlert.warn(opts)
            },
            hide() {
                floatingAlert.hide(opts)
            }
        }

        Vue.component(VueFloatingAlert.name, VueFloatingAlert)
    }
}
