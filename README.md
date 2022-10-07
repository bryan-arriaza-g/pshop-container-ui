# Container App PetShop MFE

### Run local
`npm run start`

**Note:**

Running with docker (production) is not able to run mfes isolate (is not recommended)
So you need to run the mfe docker images but accessing from http://localhost:3000 (container/orchestrator)

Run the docker mfes separately
* [Auth UI](https://github.com/bryan-arriaza-g/pshop-auth-ui)
* [Users UI](https://github.com/bryan-arriaza-g/pshop-users-ui)
* [Users Service](https://github.com/bryan-arriaza-g/pshop-users-service)


### Run with Docker (WIP)
```
docker build . -t pshop-container-ui

docker run -p 3000:80 -d pshop-container-ui
```

### Using

* Webpack + module federation
* antd
* Trunk base development
