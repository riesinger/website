FROM alpine:latest as builder

RUN apk add --update --no-cache hugo git

WORKDIR /site
COPY . /site

RUN hugo

FROM nginx:1-alpine as runner

COPY --from=builder /site/public/ /usr/share/nginx/html
