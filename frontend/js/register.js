import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js'

new Vue({
    el: "#register",
    data() {
        return {
            form: {
                username: '',
                name: '',
                password: ''
            },
        }
    },
    computed: {                     // закрывает доступ к кнопке регистрации пока не будут заполнены все поля
        canRegister() {
            return this.form.username.trim() && this.form.name.trim() && this.form.password.trim()
        }
    },
    methods: {
        async createUser() {
            const {...data} = this.form

            const newUser = await request('/api/user', 'POST', data)     // отсылает json файл с данным ввода

            this.form.username = this.form.name = this.form.password = ''           // убирает значения в полях
        }
    }
    })
    async function request(url, method = 'GET', data = null) {
        try {
            const headers = {}
            let body

            if (data) {
                headers['Content-Type'] = 'application/json'
                body = JSON.stringify(data)
            }

            const response = await fetch(url, {
                method,
                headers,
                body
            })
            return await response.json()
        } catch (e) {
            console.warn('Error:', e.message)
        }
    }