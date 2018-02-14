'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.delete = (event, context, callback) => {
	const data = JSON.parse(event.body);

	const params = {
		TableName: 'recipe',
		Key: {
			recipeid: event.pathParameters.recipeid
		}
	};

	dynamoDb.delete(params, (error, result) =>{
		if (error) {
			console.error(error);
			callback(new Error('Unable to remove the recipe.'));
			return;
		}

		const response = {
			statusCode: 200,
			body: JSON.stringify({})
		};

		callback(null, response);
	});
};
	