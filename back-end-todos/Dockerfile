FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run compile
EXPOSE 3001:3001
CMD ["npm", "start"]