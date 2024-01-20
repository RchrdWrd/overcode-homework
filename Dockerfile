FROM node:21
WORKDIR /apps
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm dev
EXPOSE 3001
CMD [ "pnpm" , "dev" ]