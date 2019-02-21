FROM node:lts-alpine

WORKDIR /app

COPY . /app

RUN apk add --no-cache bash && \
    cd /app && \
    yarn install && \
    bash ./build.sh

EXPOSE 3000

CMD [ "node", "/app/server" ]
