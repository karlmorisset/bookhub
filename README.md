# Bookhub

BookHub is a simple app to manage books and users in a library

## Installation

### Environment
```bash
  cp /packages/backend/.env.template .env
  cp /packages/frontend/.env.template .env
  cp .env.template .env
```
Then modify .env files with relevants infos

### Install Dependencies
**pnpm**
Use the package manager [pnpm](https://pnpm.io/installation) to install BookHub

```bash
npm i -g pnpm
```

**nestjs/cli**
```bash
pnpm add -g @nestjs/cli
```
**Project dependencies**
```bash
cd packages/frontend
pnpm i

cd ../backend
pnpm i
```

### Launch containers
```bash
cd ../..
docker-compose up
```

### Initialize Prisma
```bash
pnpm exec prisma migrate dev --name init
```

## Usage



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)