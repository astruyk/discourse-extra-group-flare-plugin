# name: discourse-extra-group-flare-plugin
# about: Adds extra flare to users based on groups.
# version: 1.0
# authors: Anton Struyk
# url: https://github.com/astruyk/discourse-extra-group-flare-plugin

register_asset "styles.css"

enabled_site_setting :group_flare_enabled

add_admin_route 'group_flare_plugin.title', 'group-flare-settings'

Discourse::Application.routes.append do
	get '/admin/plugins/group-flare-settings' => 'admin/plugins#index', constraints: StaffConstraint.new
end
