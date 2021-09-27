## :busts_in_silhouette: Simple Twitter API

此 Simple Twitter 為前後分離協作專案，前端使用 Vue.js 框架，後端使用 Express.js + MySQL 開發，此 repo 為提供給前端串接開發之 API 服務。

[Live Demo](https://shijia22.github.io/twitter-front-end-vue-2020/#/admin/login)

```
前台 test account
email:  user2@example.com 
password: 12345678

後台 test account
email: root@example.com
password: 12345678
```

### API

HOST: https://good-simple-twitter.herokuapp.com/
Document: https://simpletwitterapi1.docs.apiary.io/#reference

## 🔧  Built With

* [Node.js](https://nodejs.org/en/) (^10.15.0)
* [Express](https://expressjs.com/)   (^4.17.1)
* [sequelize](https://sequelize.org/) (^4.44.4)
* [passport.js](http://www.passportjs.org/) (^0.4.1)

#### 相關套件
* bcryptjs
* cors
* validator
* faker
* jsonwebtoken
* multer

<!-- GETTING STARTED -->
## :bulb: Getting Started

#### Clone repository
```
$ git clone repo
```
#### Install by npm
```
$ npm install
```
#### DB Seed
```
npx sequelize db:migrate
npx sequelize db:seed:all
```

#### 
```
JWT_SECRET = JWT_SECRET;
IMGUR_CLIENT_ID = IMGUR_CLIENT_ID;
```

#### Execute
```
$ npm run dev
```
#### Browse the website on localhost
```
http://localhost:3000/
```

### 開發人員

> 後端
* [Wilson](https://github.com/wilson614)
* [Bobo](https://github.com/BoboLin945)

> 前端
* [Shijia](https://github.com/shijia22)
* [Jill](https://github.com/jilltu330)
