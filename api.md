API Documentation

Endpoint: /api/message
Request Type: Post
Request Body:
sender{type: String, required: true}
receiver{type: String, required: true}
message{type: String, required: true}
Success: Http 200 OK
Response Body: New message
Error: HTTP 400 Bad Request or HTTP

Endpoint: /api/message
Request Type: Get
Request Query: {sender, reciever}
Success: HTTP 200 OK
Response Body: Retrieved Message
Error: HTTP 400 Bad Request or HTTP

Endpoint: /api/profile
Request Type: Post
Request Body:
firstname:{type: String, required: true}
lastname:{type: String, required: true}
age:{type: Number, required: true}
email:{type: Number, required: true}
password:{type: String, required: true}
Success: Http 200 OK
Response Body: New Profile
Error: HTTP 400 Bad Request or HTTP

Endpoint: /api/profile
Request Type: Get
Request params:/profileprofile?firstname=<email>
Success: Http 200 OK
Response Body: Retrieve available Profile.
Error: HTTP 400 Bad Request or HTTP

Endpoint: /api/profile/:username
Request Type: Put
Request params:/profileprofile?firstname=<name>
Success: Http 200 OK
Response Body: Update available Profile
Error: HTTP 400 Bad Request or HTTP
