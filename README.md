#  Recipes API
Make API that can read all recipe, post, read, delete, and update a recipe.

## The purpose of this application
To learn how to use DynamoDB and the serverless framework.

### How can it be testesd? 

#### Use Curl or postman
<br/>

#### Create(Post) a recipe
1. Curl
Type..curl -X POST URL --data '{JSON data}'
2. Postman
Choose "POST", type URL in the box next to the http method and JSON data in the Body like
{"name": "Curry", 
"category": "India", 
"ingredient": "spices potatoes tomatoes", 
"cooktime": "70", 
"instruction": "sit amet."}
<br/>

#### Get all recipes
1. Curl
Type..curl -X GET URL
2. Postman
Choose "GET" and type URL in the box next to the http method
<br/>

#### Get a recipe
1. Curl
Type..curl -X GET URL/{id}
2. Postman
Choose "GET" and type URL/{id} in the box next to the http method
<br/>

#### Delete a recipe
1. Curl
Type..curl -X DELETE URL/{id}
2. Postman
Choose "DELETE" and type URL/{id} in the box next to the http method
<br/>

#### Update a recipe
1. Curl
Type..curl -X PUT URL --data '{JSON data}'
2. Postman
Choose "PUT", type URL in the box next to the http method and JSON data in the Body like
{"name": "Tomato Curry", 
"category": "India", 
"ingredient": "spices potatoes tomatoes", 
"cooktime": "70", 
"instruction": "sit amet."}
<br/>

### What I used
Javascript, AWS DynamoDB, Serverless Framework
