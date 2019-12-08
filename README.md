# Module 5 NodeJS + ExpressJS (part 1)

## Tasks:
* Install NodeJS. Use npm to install express framework to your project folder.
* Implement and run simple web-server which will always return JSON of fixed news entities (any route, any request).
* Extend web-server functionality from #2. Use Rest API to implement CRUD operations endpoints for news articles. You can log on console all operations until part 2. Use postman, curl or any other tool to test your endpoints.
	#### Example of routes: 
	* GET /news
	* GET /news/{id}
	* POST /news
	* PUT /news/{id}
	* DELETE /news/{id}
* Implement error handling middleware (examples here) which will send an error   without stack trace to the client. Use any express view engine to wrap an error.

## Advanced: 
* All frameworks and libraries that used in project should be added to package.json.
* Application (node.js server) should launch with command “npm start”. 
* Add simple logging mechanism to write URL and Date info to file per each request (try https://github.com/winstonjs/winston or any other library)