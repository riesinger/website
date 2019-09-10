FROM node:12-slim as builder
RUN mkdir /build
WORKDIR /build
RUN npm ci && \
		npm run build

FROM nginx:1-alpine as runner
COPY --from=builder /build/dist /usr/share/nginx/html
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
