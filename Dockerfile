FROM node:8.3.0-alpine
RUN mkdir ./app
WORKDIR /app
ADD ./dist/app.bundle.js /app
EXPOSE 8118
CMD node ./app.bundle.js
