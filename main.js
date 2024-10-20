new Vue({
    el: '#app',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            alert('Form submitted');
        }
    },
    mounted() {
        setTimeout(() => {
            const heroText = document.getElementById('heroText');
            heroText.classList.add('fade-out');
        }, 4000); // Исчезновение через 20 секунд
    }
});
