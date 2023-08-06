
FROM nginx:alpine

# Install npm and node
RUN apk add --update npm
RUN #npm install -g pnpm

# Add bash
RUN apk add --no-cache bash

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .
RUN export NODE_OPTIONS="--max-old-space-size=8192"

RUN echo "start building ....."
RUN npm run build
RUN echo "Build finished...";

# # Make our shell script executable
RUN chmod +x start.sh

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN echo "Delete node_modules folder";
RUN rm -rf node_modules
RUN echo "START COPY";
RUN echo "app dist files:" && cd /app/dist/ && echo $(ls)
RUN cp -rf  /app/dist/. /usr/share/nginx/html/
RUN echo "END COPY";
RUN cd /usr/share/nginx/html/;
RUN echo "html dictionary files:"
RUN echo $(ls)

CMD ["nginx -g 'daemon off;'"]

