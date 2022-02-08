# nest-ssr-redis-firebase

This template is for creating Angular project using SSR based on [NestJS][nestjs-url], [Redis OM][redis-om-url] for data storage and [Firebase][firebase-url] for authentication

## Configure

Before using the app some things should be configured first

### Environment variables

On the current working directory using a cli dependent on OS an environment variable `STAGE=dev/prod` should be set

#### ex.
For windows use `export STAGE=dev`

For linux/mac use `set STAGE=dev`

### Redis Database

Redis database is needed, preferably with [RediSearch][redisearch-url] and [RedisJSON][redis-json-url] installed. The easiest way to do this is to set up a free [Redis Cloud][redis-cloud-url] instance. But, you can also use Docker:

    $ docker run -p 6379:6379 redislabs/redismod:preview

On the file `env.stage.*` the property `REDIS_URL` should contain an url pointing to an running redis db

The basic format of an url is

    redis://username:password@host:port 
Or for your local docker instance the url is `redis://localhost:6379`

### Firebase Auth

## To use

```bash
npm run dev:ssr
```

## Deploy

Google cloud and firebase deploy

```bash
gcloud auth login

docker build . -t app-name

docker tag app-name gcr.io/project-name/app-name

docker push gcr.io/project-name/app-name

firebase deploy --only hosting
```


<!-- Links -->

[nestjs-url]: https://nestjs.com/
[redis-om-url]: https://github.com/redis/redis-om-node
[firebase-url]: https://firebase.google.com/
[redis-cloud-url]: https://redis.com/try-free/
[redisearch-url]: https://oss.redis.com/redisearch/
[redis-json-url]: https://oss.redis.com/redisjson/
