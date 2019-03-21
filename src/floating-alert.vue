<template>
  <div id="floating-alert" 
          class="alert"
          :class="{
              'floating-alert-invisible': !cfgFloatingAlert.visible,
              'alert-danger': cfgFloatingAlert.type === 'danger',
              'alert-success': cfgFloatingAlert.type === 'success',
              'alert-info': cfgFloatingAlert.type === 'info',
              'alert-warning': cfgFloatingAlert.type === 'warning',
          }" >
          <div class="floating-alert-icon-container">
              <span class="fa fa-fw"
                :class="{
                  'fa-check': cfgFloatingAlert.icon === 'check',
                  'fa-exclamation-triangle': cfgFloatingAlert.icon === 'warning',
                  'fa-info': cfgFloatingAlert.icon === 'info',
              }"></span>
          </div>
          <div class="floating-alert-message-container">
              <p class="floating-alert-spacing-bottom" v-show="!!cfgFloatingAlert.title">{{cfgFloatingAlert.title}}</p>
              <p class="floating-alert-message" v-html="cfgFloatingAlert.message"></p>
          </div>
          <hr>
          <div class="floating-alert-close-container">
              <button type="button" 
                      @click="hide()"
                      class="floating-alert-btn-close">Close</button>
          </div>
  </div>
</template>

<script>
const DEFAULT_TIME_VISIBLE = 30000

export const floatingAlert = {
    error(opt = {}) {
      this._exibe(Object.assign({title: "Oops!"}, opt, {
        visible: true, 
        timeVisible: DEFAULT_TIME_VISIBLE,
        type: "danger", 
        icon: "warning",
      }))
    },
    info(opt = {}) {
      this._exibe(Object.assign(opt, {
        visible: true, 
        timeVisible: DEFAULT_TIME_VISIBLE,
        type: "info", 
        icon: "info",
      }))
    },
    warn(opt = {}) {
      this._exibe(Object.assign(opt, {
        visible: true, 
        timeVisible: DEFAULT_TIME_VISIBLE,
        type: "warning", 
        icon: "warning",
      }))
    },
    success(opt = {}) {
      this._exibe(Object.assign(opt, {
        visible: true, 
        timeVisible: DEFAULT_TIME_VISIBLE,
        type: "success", 
        icon: "check",
      }))
    },
    hide() {
      this._hide()
    },
    _exibe(opt) {
      
    },
    _hide() {
      
    },
}

export default {
    name: 'FloatingAlert',
    methods: {
        hide() {
            floatingAlert.hide()
        },
    },
    data() {
      return {
        cfgFloatingAlert: {
          visible: false,
          type: 'danger',
          icone: 'warning',
          title: 'Oops!',
          message: '',
        },
      }
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
    border-top-left-radius: 2px;
    border-top-left-radius: 2px;
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
    }
  } 

  @media(min-width: $width-small-device) {
    width: 500px;
    left: auto;
    right: 15px;
  }
}
</style>
