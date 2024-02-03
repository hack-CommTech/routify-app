FROM node:21.3.0

WORKDIR /app

COPY . /app

# 環境構築
RUN yarn

RUN cp .env.sample .env

EXPOSE 3000

CMD ["yarn", "dev"]
