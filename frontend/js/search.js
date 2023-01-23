import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js'

new Vue({
    el: "#search",
    data() {
        return {
            form: {
                query: ''
            }
        }
    },
    computed: {
        canSearch() {
            return this.form.search.trim()
        }
    },
})
