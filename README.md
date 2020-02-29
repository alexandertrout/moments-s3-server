# moments-s3 API

This api accepts an image and sends it to s3 bucket, returning an object with the URL. It is hosted on Heroku.

## Prerequisites

You will need an AWS access_key_id and secret_key.

## Getting started

Clone this repo and cd into it

```
git clone https://github.com/keirbetts/moments-s3-server/pull/4
cd moments-backend
```

Install the dependencies

```
npm i
```

In the root directory, create a .env file

```
touch .env
```

Add the following code to the .env file

```
ACCESS_KEY_ID=youraccesskeyid
SECRET_KEY=yoursecretkey
```

## API endpoints

The following endpoint is available:

```
POST /api/upload

```

## More specifically, the endpoint responds like this:

POST /api/upload

### Request accepts

- A multipart form with a fieldname of "image.jpeg"
- Headers

### Responds with

An object in the form
{
image: imageName,
location: imageLocation
}

---

### Built using

- Express.js
- Multer & Multer.s3
-
