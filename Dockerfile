# FROM node:latest as node
# WORKDIR /sneha_workspace
# COPY . .
# RUN npm install
# RUN npm run build --prod


# FROM nginx:1.16.0-alpine as prod-stage
# COPY --from=node /sneha_workspace/Project/eventmanagement-frontend /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

#FROM mhart/alpine-node:latest AS builder 
# //installs node in the container
#WORKDIR /app
#//work directory
#COPY . .
#//copy from local folder
#RUN npm run build --prod
#//builds package

#FROM mhart/alpine-node
#RUN npm -g add serve
#installs add se
#WORKDIR /app
#COPY --from=builder /app/build .
#CMD ["serve", "-p", "80", "-s", "."]

#  command to tag it to internnship--docker-app docker build -t internship-docker-app .

FROM nginx:1.16.0-alpine
COPY /dist/ProjectEMS /usr/share/nginx/html
