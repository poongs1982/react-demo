# base image
FROM nginx:1.17.7-alpine
# force remove of all the files of th html folder of the nginx server
RUN rm -rf /usr/share/nginx/html/*
# copy the dist folder's contents(source folder) into the ngix html folder(destination folder)
COPY /build /usr/share/nginx/html
# start the ngix server
CMD ["nginx", "-g", "daemon off;"]

# run these commands in terminal

# this build an image
# docker build -t react-session-image .

# this runs the image to create container
# docker run -d -p 7777:80 react-session-image