'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.oneread = (event, context, callback) => {
	const data = JSON.parse(event.body);

	const params = {
		TableName: 'recipe',
		Key: {
			recipeid: event.pathParameters.recipeid
		}
	};

	dynamoDb.get(params, (error, result) =>{
		if (error) {
			console.error(error);
			callback(new Error('Unable to get the recipe.'));
			return;
		}

		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Item)
		};

		callback(null, response);
	});
};
	