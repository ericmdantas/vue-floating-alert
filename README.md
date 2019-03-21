# vue-floating-alert

```js
// app.vue

<template>
    <div>   
        <floating-alert></floating-alert>
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
                message: 'Woohoo! <i class="fa fa-fw fa-grin-wink"></i>'
            })
        }, 1000)
    }
}
</script>
```

### Disclaimer

This is a work in progress and as it stands today, it depends on the awesome `@fortawesome/fontawesome-free` and `bootstrap 4.x`. Next versions will probably use this: https://iconsvg.xyz/.


### License

MIT