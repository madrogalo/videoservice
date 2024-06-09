# Videoservice Project Setup Documentation

## Prerequisites
- Ensure you have Git, Node.js, and Docker installed on your computer.
## Getting Started

### 1. Clone the Repository
```
git clone git@github.com:madrogalo/videoservice.git
```

### 2. Install Dependencies
```
cd [cloned-directory]/packages/server

npm install
```

```
cd [cloned-directory]/packages/web

npm install
```

## Running the Application

### Start the Docker Application on your computer

### Start the Application Using Docker


```
docker-compose up --build -d  
```
### Upate only web

```
docker-compose up --build -d web
```
### Upate only server

```
docker-compose up --build -d server
```

### Stop the Application

```
docker-compose down
```

### Stop only server

```
docker-compose stop server

```

### Stop only web

```
docker-compose stop web

```
### Delete container server

```
docker-compose rm -f server

```
### Delete container web

```
docker-compose rm -f web

```