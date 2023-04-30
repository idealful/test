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

## Usage - Local

http://localhost:3000

http://localhost:3000/api/members
http://localhost:3000/api/members/1

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
$ sudo npm i forever -g
$ cd /app/test
$ forever start -c "npm start" ./
```

### OCI 설정

```cmd
# iptables 룰 정책 저장을 위한 패키지 설치
$ sudo apt-get install iptables-persistent netfilter-persistent

# 특정 포트 오픈 규칙 추가( -I : 가장 먼저 추가)
$ sudo iptables -I INPUT -p tcp -m tcp --dport 3000 -j ACCEPT

# 정책 영구 저장
$ sudo netfilter-persistent save

# 설정된 정책 확인
$ sudo iptables -nL
```

## Usage - Server

150.230.250.32 = idealful.kro.kr

http://idealful.kro.kr:3000

http://idealful.kro.kr:3000/api/members
http://idealful.kro.kr:3000/api/members/1
