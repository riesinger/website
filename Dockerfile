FROM klakegg/hugo:ext-debian-onbuild AS builder

FROM nginx:1-alpine as runner

COPY --from=builder /target /usr/share/nginx/html
