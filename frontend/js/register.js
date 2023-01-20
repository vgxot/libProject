const vue = require('vue')

new vue({
    el: "#register",
    data() {
        return {
            form: {
                username: '',
                name: '',
                password: ''
            },
            users: []
        }
    },
    computed: {                     // закрывает доступ к кнопке регистрации пока не будут заполнены все поля
        canCreate() {
            return this.form.username.trim() && this.form.name.trim() && this.form.password.trim()
        }
    },
    methods: {
        async createUser() {
            const {user} = this.form                                             //

            const newUser = await request('/api/users', 'POST', user)               //

            this.users.push(newUser)                                                //

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