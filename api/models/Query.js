/**
* Query.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
  	
  		title: {
  			type: 'string',
			required: true
		},
		category: {
			collection: 'category',
			via: 'title'
		},
		tags: {
			type: 'array',
			defaultsTo: []
		},
		author:{
			model: 'user',
			required: true
		},
		bounty:{
			type: 'float',
			defaultsTo: 0.00
		},
		totalResponses: {
			type: 'int',
			defaultsTo: 0
		},
		totalView: {
			type: 'int',
			defaultsTo: 0
		},
		imgs: {
			type: 'array',
			defaultsTo: []
		},
		query: {
			type: 'string',
			required: true
		},
		date: {
			type: 'datetime',
			defaultsTo: new Date()
		},
		solved: {
			type: 'boolean',
			defaultsTo: false
		},
		responses: {
			collection: 'response',
			via: 'id'
		}

	}
};

