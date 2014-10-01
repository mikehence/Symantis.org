angular.module('models.user', ['lodash', 'services', 'ngSails',])

.service('UserModel', function($q, lodash, utils, $sails) {
	this.getAll = function() {
		var deferred = $q.defer();
		var url = utils.prepareUrl('user');

		$sails.get(url, function(models) {
			return deferred.resolve(models);
		});

		return deferred.promise;
	};

	this.getOne = function(id) {
		var deferred = $q.defer();
		var url = utils.prepareUrl('user/' + id);

		$sails.get(url, function(model) {
			return deferred.resolve(model);
		});

		return deferred.promise;
	};

	/*
	this.getOneByHandle = function(handle) {
		
		//console.log(handle);

		var deferred = $q.defer();
		var url = utils.prepareUrl('user/handle/' + handle);
		//url = utils.prepareUrl('user/handle/Scottie');
		$sails.get(url, function(model) {
			//console.log("Getting User...");
			return deferred.resolve(model);
		});

		return deferred.promise;
	};
	*/


	this.getOneByHandle = function(handle) {
		var deferred = $q.defer();
		var url = utils.prepareUrl('user/handle/'+handle);

		$sails.get(url, function(models) {
			return deferred.resolve(models);
		});

		return deferred.promise;
	};


	this.create = function(newModel) {
		var deferred = $q.defer();
		var url = utils.prepareUrl('user');

		$sails.post(url, newModel, function(model) {
			return deferred.resolve(model);
		});

		return deferred.promise;
	};
	this.updateStatus = function(newModel) {
		var deferred = $q.defer();
		var url = utils.prepareUrl('user/status');

		$sails.post(url, newModel, function(model) {
			return deferred.resolve(model);
		});

		return deferred.promise;
	};
	this.update = function(newModel) {
		var deferred = $q.defer();
		var url = utils.prepareUrl('user/update');

		$sails.post(url, newModel, function(model) {
			return deferred.resolve(model);
		});

		return deferred.promise;
	};
});