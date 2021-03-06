FROM node:16-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app
RUN npm install

# add app
COPY . /app

# start app
CMD ["ng","serve","--host", "0.0.0.0"]

EXPOSE 4200