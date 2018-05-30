import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
	name: 'discourse-extra-group-flare-plugin',
	initialize(container) {
		const siteSettings = container.lookup('site-settings:main');
		withPluginApi('0.8.18', api => { initializePlugin(api, siteSettings); });
	}
}

function initializePlugin(api, siteSettings) {
	api.decorateWidget('post-avatar:after', (helper) => {
		var poster = helper.getModel();
		var groups = poster.get('groups-filtered');
		return helper.rawHtml(`<div class="gf-test gf-flair topic-avt"></div>`);
	});
};
