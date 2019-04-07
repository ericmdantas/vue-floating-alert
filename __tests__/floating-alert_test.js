import Vue from 'vue'
import {createLocalVue} from '@vue/test-utils'
import VueFloatingAlertIndex from '../src/index'
import VueFloatingAlertVue, {floatingAlert} from '../src/floating-alert.vue'

describe("floatingAlert", () => {
    describe("external", () => {
        describe("install", () => {
            it("should have the methods setup correcly", () => {
                const localVue = createLocalVue()

                localVue.use(VueFloatingAlertIndex)

                expect(localVue.prototype.$floatingAlert).toBeDefined()
                expect(typeof localVue.prototype.$floatingAlert.error).toBe('function')
                expect(typeof localVue.prototype.$floatingAlert.warn).toBe('function')
                expect(typeof localVue.prototype.$floatingAlert.info).toBe('function')
                expect(typeof localVue.prototype.$floatingAlert.success).toBe('function')
                expect(typeof localVue.prototype.$floatingAlert.hide).toBe('function')
            })
        })
    })

    describe("internal", () => {
        describe("creation", () => {
            it("should have the right name", () => {
                expect(VueFloatingAlertVue.name).toBe('FloatingAlert')
            })

            it("should have the right data()", () => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.btnCloseName).toBe('Close')
                expect(vm.idTimeoutTimeVisible).toBe(0)
                expect(vm.cfgFloatingAlert).toEqual({
                    visible: false,
                    type: 0, // Error
                    title: 'Oops!',
                    message: '',
                })
            })

            it("should have the right returns for the computed props", () => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.isError).toBe(true)            
                expect(vm.isWarning).toBe(false)            
                expect(vm.isInfo).toBe(false)            
                expect(vm.isSuccess).toBe(false)            
                expect(vm.isVisible).toBe(false)
            })

            it("should have the right content for the props", () => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.language).toBe('en')
            })
        })

        describe("computed modification", () => {
            it("should change the state correctly", () => {
                const vm = new Vue(VueFloatingAlertVue).$mount()
                const testTable = [
                    {
                        newType: 0,
                        methodsReturn: [
                            {
                                isError: true,
                                isWarning: false,
                                isInfo: false,
                                isSuccess: false,
                                isVisible: false,
                            }
                        ]                    
                    },
                    {
                        newType: 1,
                        methodsReturn: [
                            {
                                isError: false,
                                isWarning: true,
                                isInfo: false,
                                isSuccess: false,
                                isVisible: false,
                            }
                        ]
                    },
                    {
                        newType: 2,
                        methodsReturn: [
                            {
                                isError: false,
                                isWarning: false,
                                isInfo: true,
                                isSuccess: false,
                                isVisible: false,
                            }
                        ]
                    },
                    {
                        newType: 3,
                        methodsReturn: [
                            {
                                isError: false,
                                isWarning: false,
                                isInfo: false,
                                isSuccess: true,
                                isVisible: false,
                            }
                        ]
                    },
                ]

                for (const t of testTable) {
                    vm.cfgFloatingAlert.type = t.newType

                    for (const mr of t.methodsReturn) {
                        Object.keys(mr).forEach((key) => {
                            if (vm[key] !== mr[key]) {
                                console.error(`Type ${t.newType}:\nExpected vm[${key}] to equal mr[${key}] - but got ${vm[key]} and ${mr[key]}, respectively`)
                            }

                            expect(vm[key]).toBe(mr[key])
                        })
                    }
                }
            })
        })

        describe("methods", () => {
            describe("hide", () => {
                it("should change the state correctly", () => {
                    const vm = new Vue(VueFloatingAlertVue).$mount()

                    vm.cfgFloatingAlert.visible = true

                    vm.hide()

                    expect(vm.cfgFloatingAlert.visible).toBe(false)
                })
            })            
        })

        describe("mounted", () => {
            it("should change cfgFloatingAlert accordingly - error", () => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.cfgFloatingAlert).toEqual({
                    visible: false,
                    type: 0, // Error
                    title: 'Oops!',
                    message: '',
                })

                floatingAlert.error({
                    title: 'Uh-oh',
                    message: 'something went wrong!'
                })

                expect(vm.cfgFloatingAlert).toEqual({
                    visible: true,
                    type: 0, // Error
                    timeVisible: 30000,
                    title: 'Uh-oh',
                    message: 'something went wrong!',
                })
            })

            it("should change the cfgFloaginAlert accordingly - warn", () => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.cfgFloatingAlert).toEqual({
                    visible: false,
                    type: 0, // Error
                    title: 'Oops!',
                    message: '',
                })

                floatingAlert.warn({
                    title: 'Hold on',
                    message: 'This could hurt you'
                })

                expect(vm.cfgFloatingAlert).toEqual({
                    visible: true,
                    type: 1, // Warning
                    timeVisible: 30000,
                    title: 'Hold on',
                    message: 'This could hurt you',
                })
            })

            it("should change the cfgFloaginAlert accordingly - info", () => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.cfgFloatingAlert).toEqual({
                    visible: false,
                    type: 0, // Error
                    title: 'Oops!',
                    message: '',
                })

                floatingAlert.info({
                    title: 'You can chill',
                    message: "We'll let you know when this is finished"
                })

                expect(vm.cfgFloatingAlert).toEqual({
                    visible: true,
                    type: 2, // Info
                    timeVisible: 30000,
                    title: 'You can chill',
                    message: "We'll let you know when this is finished",
                })
            })

            it("should change the cfgFloaginAlert accordingly - success", () => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.cfgFloatingAlert).toEqual({
                    visible: false,
                    type: 0, // Error
                    title: 'Oops!',
                    message: '',
                })

                floatingAlert.success({
                    title: 'Alright!',
                    message: "That's working as expected!"
                })

                expect(vm.cfgFloatingAlert).toEqual({
                    visible: true,
                    type: 3, // Success
                    timeVisible: 30000,
                    title: 'Alright!',
                    message: "That's working as expected!",
                })
            })
        })

        describe("watch", () => {
            it("should change the language correcly - pt-BR", (done) => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.language).toBe('en')
                expect(vm.btnCloseName).toBe('Close')

                vm.language = 'pt-BR'

                vm.$nextTick(() => {
                    expect(vm.btnCloseName).toBe('Fechar')
                    done()
                })
            })

            it("should change the language correcly - ca", (done) => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.language).toBe('en')
                expect(vm.btnCloseName).toBe('Close')

                vm.language = 'ca'

                vm.$nextTick(() => {
                    expect(vm.btnCloseName).toBe('Cerca')
                    done()
                })
            })

            it("should change the language correcly - fr", (done) => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.language).toBe('en')
                expect(vm.btnCloseName).toBe('Close')

                vm.language = 'fr'

                vm.$nextTick(() => {
                    expect(vm.btnCloseName).toBe('Proche')
                    done()
                })
            })

            it("should change the language correcly - en", (done) => {
                const vm = new Vue(VueFloatingAlertVue).$mount()

                expect(vm.language).toBe('en')
                expect(vm.btnCloseName).toBe('Close')

                vm.language = 'en'

                vm.$nextTick(() => {
                    expect(vm.btnCloseName).toBe('Close')
                    done()
                })
            })
        })
    })
})