# test/api

## Installation Local : Windows

```cmd
$ node -v
v18.15.0
```

```cmd
$ npm init -y
```

```cmd
$ npm i nodemon -D
```

```cmd
$ npm i express ip
```

## Usage

http://localhost

http://localhost/api/members
http://localhost/api/members/1

## Installation Server : Ubuntu

### git 소스 수동 다운로드

```cmd
$ git clone https://github.com/idealful/test.git
$ git checkout api
```

### node.js 재설치

```cmd
$ sudo apt-get remove nodejs -y
$ curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
$ sudo apt-get install nodejs -y
$ node -v
v18.16.0
$ npm -v
9.5.1
```
