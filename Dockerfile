FROM node:12 as builder
RUN mkdir /build
WORKDIR /build
COPY . /build
RUN apt-get update && \
		apt-get install python && \
		npm ci && \
		npm run build

FROM nginx:1-alpine as runner
COPY --from=builder /build/dist /usr/share/nginx/html
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
