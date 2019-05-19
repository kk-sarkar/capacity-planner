Capacity Planner Webapp with Create React App and Spring Boot
===

Clone the repository, download both front end and Spring boot dependencies, build the project, and run the application as follows:

## Run the entire application, both front end and back end, in the Spring boot artifact:-


1. Using command line: Navigate to the project root and run the Maven command: 
```
$ mvn spring-boot:run 
```

2. Using Eclipse/STS: Right-click on the Project -> Run As -> Maven build.. -> Main -> Goals -> `spring-boot:run` -> Run.

3. Using JDK jar utility:

```
$ mvn clean install
$ cd target
$ java -jar target/capacity-planner-0.0.1-SNAPSHOT.jar
```

Open your web browser, and navigate to http://localhost:8080.

## Run the front end and back end separately:-

The steps mentioned earlier will can be followed to run the Spring boot back end.

During development, you can now run the front end application individually using `React-scripts` by running 
```
cd frontend
npm install
npm start
```
The front end can be accessed at http://localhost:3000


## Packaging the React app with Spring Boot
We'd like to be able to publish *one* jar file to production, and that jar file should
contain both the backend and the frontend.

To accomplish this, we have to do the following: 
 
   1. create a production build of the frontend 
   2. copy the production build into `${target/classes/public}`

```
$ mvn clean install
```




