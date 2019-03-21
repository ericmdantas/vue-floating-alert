import VueFloatingAlert, {floatingAlert} from './floating-alert.vue'

export default {
    install(Vue, options = {}) {
        Vue.prototype.$floatingAlert = {
            error(opts) {
                floatingAlert.success(opts)
            },
            success(opts) {
                floatingAlert.success(opts)
            },
            info(opts) {
                floatingAlert.info(opts)
            },
            warn(opts) {
                floatingAlert.success(opts)
            },
            hide() {
                floatingAlert.show(opts)
            }
        }

        Vue.component(VueFloatingAlert.name, VueFloatingAlert)
    }
}