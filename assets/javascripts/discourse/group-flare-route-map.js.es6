export default {
	resource: "admin.adminPlugins",
	path: "/plugins",
	map() {
		this.route("group-flare-settings");
	}
}