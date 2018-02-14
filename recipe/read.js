'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
	TableName: 'recipe'
};

module.exports.read = (event, context, callback) => {
	dynamoDb.scan(params, (error, result) =>{
		if (error) {
			console.error(error);
			callback(new Error('Unable to get all recipes.'));
			return;
		}

		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Items)
		};

		callback(null, response);
	});
};
	