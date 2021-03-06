<template>
  <div id="floating-alert" 
          class="alert"
          :class="{
              'floating-alert-invisible': !isVisible,
              'alert-danger': isError,
              'alert-warning': isWarning,
              'alert-info': isInfo,
              'alert-success': isSuccess,
          }" >
          <div class="floating-alert-icon-container">
              <span v-show="isError || isWarning">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
              </span>              

              <span v-show="isInfo">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>
              </span>

              <span v-show="isSuccess">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
          </div>
          <div class="floating-alert-message-container">
              <p class="floating-alert-spacing-bottom" v-show="!!cfgFloatingAlert.title">{{cfgFloatingAlert.title}}</p>
              <p class="floating-alert-message" v-html="cfgFloatingAlert.message"></p>
          </div>
          <hr>
          <div class="floating-alert-close-container">
              <button type="button" 
                      @click="hide()"
                      class="floating-alert-btn-close">{{btnCloseName}}</button>
          </div>
  </div>
</template>

<script>
import {Bus} from 'ubus'
import knownLanguages from './i18n'

const DEFAULT_TIME_VISIBLE = 30000 // 30s
const ubus = new Bus()
const floatingAlertTypes = {
  ERROR: 0,
  WARNING: 1,
  INFO: 2,
  SUCCESS: 3,
}
const busEvents = {
  show: 'floating-alert.show',
  hide: 'floating-alert.hide',
}

export const floatingAlertService = {
    error(opt = {}) {
      const baseObj = {
        title: 'Oops!', 
        message: '',
        timeVisible: DEFAULT_TIME_VISIBLE
      }

      this._show(Object.assign(baseObj, opt, {
        visible: true, 
        type: floatingAlertTypes.ERROR,
      }))
    },
    warn(opt = {}) {
      const baseObj = {
        title: '', 
        message: '',
        timeVisible: DEFAULT_TIME_VISIBLE
      }

      this._show(Object.assign(baseObj, opt, {
        visible: true, 
        type: floatingAlertTypes.WARNING,
      }))
    },
    info(opt = {}) {
      const baseObj = {
        title: '', 
        message: '',
        timeVisible: DEFAULT_TIME_VISIBLE
      }

      this._show(Object.assign(baseObj, opt, {
        visible: true, 
        type: floatingAlertTypes.INFO, 
      }))
    },
    success(opt = {}) {
      const baseObj = {
        title: '', 
        message: '',
        timeVisible: DEFAULT_TIME_VISIBLE
      }

      this._show(Object.assign(baseObj, opt, {
        visible: true, 
        type: floatingAlertTypes.SUCCESS, 
      }))
    },
    hide() {
      this._hide()
    },
    _show(opt) {
      ubus.emit(busEvents.show, opt)
    },
    _hide() {
      ubus.emit(busEvents.hide)
    },
}

export default {
  name: 'FloatingAlert',
  props: {
    language: {
      type: String,
      default: 'en',
    },
  },
  data() {
    return {
      btnCloseName: knownLanguages[this.language || 'en'].btnCloseName,
      idTimeoutTimeVisible: 0,
      cfgFloatingAlert: {
        visible: false,
        type: floatingAlertTypes.ERROR,
        title: '',
        message: '',
      },
    }
  },
  methods: {
    hide() {
      clearTimeout(this.idTimeoutTimeVisible)
      this.cfgFloatingAlert.visible = false
    },
    
  },
  mounted() {
    ubus.on(busEvents.show, (opt) => {
      Object.assign(this.cfgFloatingAlert, opt)

      this.idTimeoutTimeVisible = setTimeout(() => {
        this.hide()
      }, this.cfgFloatingAlert.timeVisible)
    })

    ubus.on(busEvents.hide, () => {
      this.hide()
    })
  },
  computed: {
    isError() {
      return this.cfgFloatingAlert.type === floatingAlertTypes.ERROR
    },
    isWarning() {
      return this.cfgFloatingAlert.type === floatingAlertTypes.WARNING
    },
    isInfo() {
      return this.cfgFloatingAlert.type === floatingAlertTypes.INFO
    },
    isSuccess() {
      return this.cfgFloatingAlert.type === floatingAlertTypes.SUCCESS
    },    
    isVisible() {
      return this.cfgFloatingAlert.visible
    },
  },
  watch: {
    language() {
      this.btnCloseName = knownLanguages[this.language || 'en'].btnCloseName
    },
  },
}
</script>

<style lang="scss" scoped>
$color-info: #1094D9;
$color-success: #25a949;
$color-warning: #FFAD46;
$color-danger: #FF4655;

$width-small-device: 576px;

#floating-alert {
  position: fixed;
  width: 98%;
  right: 1%;
  top: 94px;
  font-size: 1em;
  border: none;
  background-color: #fff;
  padding: 15px 15px 0 0;
  border-radius: 4px;
  z-index: 9999;
  transition: right .3s ease;
  will-change: right;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.2),
              0 3px 4px 0 rgba(0,0,0,.14), 
              0 3px 3px -2px rgba(0,0,0,.12);

  &.floating-alert-invisible {
      right: -999px;
  }

  &.alert-danger .floating-alert-icon-container {
    background-color: $color-danger;
  }

  &.alert-success .floating-alert-icon-container {
    background-color: $color-success;
  }

  &.alert-info .floating-alert-icon-container {
    background-color: $color-info;
  }

  &.alert-warning .floating-alert-icon-container {
    background-color: $color-warning;
  }

  hr {
    border-top-color: #eee;
    margin: 15px -15px 0 50px;
  }  

  .alert {
    padding: 15px 15px 20px 15px;
  }

  .floating-alert-icon-container {
    width: 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    text-align: center;
    padding-top: 16px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: #fff;
  }  

  .floating-alert-message-container {
    margin-left: 65px;
    color: #333;
  }

  .floating-alert-message {
    word-wrap: break-word;
  }

  .floating-alert-close-container {
    text-align: right;
    margin-right: -15px;
    margin-left: 50px;
    padding: 5px;

    .floating-alert-btn-close {
      border-radius: 0;
      padding: 7px 15px;
      text-transform: uppercase;
      font-weight: 500;
      background-color: transparent;
      color: #333;
      border: none;
    }
  } 

  @media(min-width: $width-small-device) {
    width: 500px;
    left: auto;
    right: 15px;
  }
}
</style>
