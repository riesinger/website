FROM klakegg/hugo:latest as builder

WORKDIR /src
COPY . /src

RUN hugo

FROM nginx:1-alpine as runner

COPY --from=builder /src/public/ /usr/share/nginx/html
