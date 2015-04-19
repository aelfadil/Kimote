/*	Loading libraries	*/
basket.require(
	{url:'lib/ionic/js/ionic.bundle.js'},
	{url:'lib/angular-cookies/angular-cookies.min.js'},
	{url:'lib/videogular/videogular.min.js'},
	{url:'lib/videogular-controls/vg-controls.min.js'},
	{url:'lib/videogular-overlay-play/vg-overlay-play.min.js'},
	{url:'lib/videogular-poster/vg-poster.min.js'},
	{url:'lib/videogular-buffering/vg-buffering.min.js'},
	{url:'lib/videogular-dash/vg-dash.min.js'}
).then( function () {

	/*	Loading app.js	*/
	basket.require(
		{url:'js/app.js', skipcache : true}
	).then( function () {

		/*	Loading the controllers	*/
		basket.require(
			{url:'js/controllers/SideMenuCtrl.js', skipcache : true},
			{url:'js/controllers/RemoteCtrl.js', skipcache : true},
			{url:'js/controllers/MoviesCtrl.js', skipcache : true},
			{url:'js/controllers/MusicCtrl.js', skipcache : true},
			{url:'js/controllers/TVShowsCtrl.js', skipcache : true},
			{url:'js/controllers/PicsCtrl.js', skipcache : true},
			{url:'js/controllers/FilesCtrl.js', skipcache : true}
		).then ( function () {

			/*	Loading the factories	*/
			basket.require(
				{url:'js/factories/Logger.js', skipcache : true},
				{url:'js/factories/Sounder.js', skipcache : true},
				{url:'js/factories/Manager.js', skipcache : true},
				{url:'js/factories/Runtime.js', skipcache : true},
				{url:'js/factories/Loader.js', skipcache : true},
				{url:'js/factories/Requester.js', skipcache : true}
			);
		});
	});
});