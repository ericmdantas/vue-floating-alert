# vue-floating-alert

```js
// app.vue

<template>
    <div>   
        <FloatingAlert />
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

Deps: `@fortawesome/fontawesome-free` and `bootstrap 4.x`.


### License

MIT