import Vue from "vue";
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy, {
	directive: "tippy",
	interactive: true,
	arrow: true,
	arrowType: 'round',
	placement: 'bottom',
	theme: 'default',
	trigger: 'click'
});

Vue.component("tippy", TippyComponent);