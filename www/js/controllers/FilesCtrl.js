app.controller('FilesCtrl', function($scope, $http, $ionicLoading) {

	var path = "";
	$scope.title = "Mon titre";

	$scope.getStart = function() {
		// $scope.files = {};

		method = "Files.GetSources";
		params = '{"media":"files"}';

		param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + ',"id":2}';
		complete_url = window.base_url + param_url;

        $ionicLoading.show();
		$http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
		.success(function(data, status, headers, config) {
            $scope.files = data.result.sources;
            $ionicLoading.hide();
		})
		.error(function(data, status, headers, config) {
            $ionicLoading.hide();
            alert("Impossible de récupérer les sources");
		});
	}

	$scope.getDir = function(dir) {
		method = "Files.GetDirectory";
		params = '{"directory":"'+dir+'","media":"files"}}';

		param_url = '/jsonrpc?request={"jsonrpc":"2.0","id":1,"method":"' + method + '", "params":' + params + ',"id":1}';
		complete_url = window.base_url + param_url;

        $ionicLoading.show();
		$http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
		.success(function(data, status, headers, config) {
            $ionicLoading.hide();
            
            if ( !('result' in data)) {
	            // La destination est trop proche de / : accès interdit. Revenir au début
	            $scope.getStart();
            } else {
				$scope.files = data.result.files;
				path = dir;
			}
		})
		.error(function(data, status, headers, config) {
            $ionicLoading.hide();
		});
	}

	$scope.getFile = function(file) {
		if (file.filetype == "file") {
			getFileType(file.file, function (type) {
				if (type == "" ) {

				}
			})

		} else {
			$scope.getDir(file.file);
		}

	}

	// Reconstruit le chemin du parent puis lance getDirectory
	$scope.getParent = function() {
		var reg = new RegExp("/", "g");
		var tmp = path.split(reg);
		var dir = "";
		for (var i = 1; i < tmp.length -2; i++) {
			dir = dir+'/'+tmp[i];
		}
		$scope.getDir(dir+"/");
	}

	$scope.rmFile = function (file) {
		console.log("Attemp to remove a file")
	}


	var getFileType = function (file, callback) {
		var music = ["mp3","m3u","wma",""];
		
		var reg = new RegExp(".","g");
		var ext = path.split(reg);
		console.log(ext);
		// Test si c'est un film

	}

});