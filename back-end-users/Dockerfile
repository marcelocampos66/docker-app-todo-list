FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run compile
EXPOSE 3002:3002
CMD ["npm", "start"]