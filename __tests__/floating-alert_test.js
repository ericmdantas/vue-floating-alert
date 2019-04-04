import {createLocalVue} from '@vue/test-utils'
import VueFloatingAlert from '../src/index'

describe("floatingAlert", () => {
    describe("creation", () => {
        it("should have the methods setup correcly", () => {
            const localVue = createLocalVue()

            localVue.use(VueFloatingAlert)

            expect(localVue.prototype.$floatingAlert).toBeDefined()
            expect(typeof localVue.prototype.$floatingAlert.error).toBe('function')
            expect(typeof localVue.prototype.$floatingAlert.warn).toBe('function')
            expect(typeof localVue.prototype.$floatingAlert.info).toBe('function')
            expect(typeof localVue.prototype.$floatingAlert.success).toBe('function')
            expect(typeof localVue.prototype.$floatingAlert.hide).toBe('function')
        })
    })
})