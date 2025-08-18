FROM node:20
WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./

# npm 最新化
RUN npm install -g npm@latest

# node_modules 作成
RUN npm install

# Vite をグローバルに入れる
RUN npm install -g vite

COPY . .

CMD ["npm", "run", "dev"]
