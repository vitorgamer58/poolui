'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "Vitor BBRC pool",
		api_url : 'http://bbrc-pool.ddns.net',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});
