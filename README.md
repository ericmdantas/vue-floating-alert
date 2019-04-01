# vue-floating-alert

### Install

```shell
$ npm i --save vue-floating-alert
```

### Usage

```js
// app.vue

<template>
    <div>   
        <FloatingAlert language="pt-BR" />
    </div>
</template>

<script>
import Vue from 'vue'
import VueFloatingAlert from 'vue-floating-alert'

Vue.use(VueFloatingAlert)

export default {
    mounted() {
        setTimeout(() => {
            this.$floatingAlert.success({
                title: 'Success!',
                message: 'Woohoo! <i class="fa fa-fw fa-grin-wink"></i>',
            })
        }, 1000)
    },
}
</script>
```

### Methods

```js
this.$floatingAlert.error({
    message: "That's an error :(",
})

this.$floatingAlert.warn({
    title: "Hey you",
    message: "Be careful with that",
})

this.$floatingAlert.info({
    title: 'Just to let you know',
    message: "We'll send you an email when we're finished",
})

this.$floatingAlert.success({
    title: "Awesome!",
    message: "You've finished reading all your emails. Now go play outside.",
})

// if you don't want to wait, you can close it on your own
this.$floatingAlert.hide() 
```

### License

MIT