import VueFloatingAlert, {floatingAlertService} from './floating-alert.vue'

export default {
    install(Vue) {
        Vue.prototype.$floatingAlert = {
            error(opts) {
                floatingAlertService.error(opts)
            },
            success(opts) {
                floatingAlertService.success(opts)
            },
            info(opts) {
                floatingAlertService.info(opts)
            },
            warn(opts) {
                floatingAlertService.warn(opts)
            },
            hide() {
                floatingAlertService.hide()
            }
        }

        Vue.component(VueFloatingAlert.name, VueFloatingAlert)
    }
}

export const floatingAlert = floatingAlertService
