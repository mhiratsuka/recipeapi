'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.update = (event, context, callback) => {
	const data = JSON.parse(event.body);

	const params = {
		TableName: 'recipe',
		Item: {
			recipeid: event.pathParameters.recipeid,
			name: data.name,
			category: data.category,
			ingredient: data.ingredient,
			cooktime: data.cooktime,
			instruction: data.instruction
		}
	};

	dynamoDb.put(params, (error, result) =>{
		if (error) {
			console.error(error);
			callback(new Error('Unable to update the recipe.'));
			return;
		}

		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Item)
		};

		callback(null, response);
	});
};
	