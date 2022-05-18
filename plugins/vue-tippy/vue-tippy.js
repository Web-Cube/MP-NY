import Vue from "vue";
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy, {
	interactive: false,
	arrow: true,
	arrowType: 'round',
	placement: 'bottom',
	theme: 'default',
	trigger: 'click'
});