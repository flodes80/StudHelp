// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import WPNotice from 'vue-wp-notice'
import VModal from 'vue-js-modal'
import VueFormitFields from 'vue-formit-fields'
import MultiselectField from './components/fields/multiselect'

Vue.use(VueFormitFields)
Vue.use(WPNotice)
Vue.use(VModal, { dialog: true, dynamic: true })

Vue.component('formit-multiselect', MultiselectField)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#wpum-registration-forms-editor',
	router,
	components: { App },
	template: '<App/>'
})
