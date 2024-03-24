import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
//sweet alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'animate.css';

createInertiaApp({
    resolve: name => {
        const pages =
            import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(VueSweetalert2)
            .use(plugin)
            .mount(el)
    },
})