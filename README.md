# NoomaPress
A framework for building moderm WordPress interfaces. Traditional WordPress themes are cumbersome and difficult to build, and force the developer to used archaic technologies, i.e. PHP templates. NoomaPress is framkework that uses modern technologies to facilitate building WordPress interfaces.
> **NOTE**: This project is in the very early stages of development, use at your own risk.

# Technologies
[![WordPress](/img/wordpress.png)](https://wordpress.org/)
[![React](/img/react.png)](https://facebook.github.io/react/)
[![Apollo](/img/apollo.png)](https://www.apollographql.com/)
[![GraphQL](/img/graphql.png)](http://graphql.org/)
[![React Router](/img/react-router.png)](https://github.com/ReactTraining/react-router)
[![Reactstrap](/img/reactstrap.png)](http://reactstrap.github.io/)
[![Docker](/img/docker.png)](https://docker.com)
[![Webpack](/img/webpack.png)](https://webpack.github.io/)

# Requirements
* Node 8+
* Docker
* Docker Compose

# Getting Started
Install dependencies
```
npm install
```
The following commands will build the necessary containers to run the project. There will be three containers in total:
1. UI Container - node based app to build the interface
2. WordPress Admin Container - WordPress admin interface
3. WordPress Database Container - Database

Build containers
```
# at project root
make
```
```
# inside wordpress folder
./wordpres/make
```

Stand up all containers
```
docker-compose up
```
Initialize WordPress
```
# inside the wordpress directory
bash wp-init.sh
```

Start project
```
npm run dev
```

UI can be reached at ```localhost:3000```

# Project Structure
```
├── build                   # Built files
├── src                     
│   ├── api                 # GraphQL endpoint
│   ├── client              # Client bundle
│   ├── components          # React components
│   ├── graphql             # GraphQL queries
│   ├── layouts             # Page layouts
│   ├── pages               # Pages
│   ├── routes              # React Router routes
│   ├── server              # Express server
│   ├── shared              # Shared components
│   └── static              # Styles, images etc...
└── wordpress               # WordPress initalization script, Dockerfile
```
# Demo

# Running in Production
Build and run project
```
npm run build
```
```
npm start
```

Build containers
```
# at project root
make

# inside wordpress folder
./wordpres/make
```
```
docker-compose -f docker-compose.yuml -f docker-compose.prod.yml up
```

Initialize WordPress
```
# inside the wordpress directory
bash wp-init.sh -e prod
```

# Docker and Docker Compose Integration
### Docker

Docker images are built using two different Dockerfiles.

```Dockerfile``` - builds the image for the UI

```Dockerfile-wp``` builds a custom image to run WordPress

### Docker Compose
Three docker-compose files are used to facilitate running the project in different environments.

```docker-compose.yml``` - base configuration

```docker-compose.override.yml``` - developement environment overrides. These values are automatically applied when ```docker-compose up``` is executed.

```docker-compose.prod.yml``` - prodcuction configuration values.
