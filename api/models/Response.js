/**
* Response.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		votes: {
			type: 'int',
			defaultsTo: 0
		},
		solution: {
			type: 'boolean',
			defaultsTo: false
		},
		author: {
			model: 'user',
			required: true
		},
		date: {
			type: 'datetime',
			defaultsTo: new Date()
		},
		response: {
			type: 'string',
			required: true
		},
		replies: {
			collection: 'comment',
			via: 'id'
		}
	}
};
