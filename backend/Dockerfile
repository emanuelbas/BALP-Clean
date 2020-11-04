FROM node:12
#directorio donde va a estar la app
RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend
#instala librerias
COPY package.json /usr/src/app/backend
RUN npm install
#copia el proyecto
COPY . /usr/src/app/backend

#pasar variables de entorno
CMD ["/bin/sh",  "-c",  "envsubst < /usr/src/app/backend/client/assets/env.template.js > /usr/src/app/backend/client/assets/env.js"]
#puerto a publicar
EXPOSE 3000

CMD [ "npm", "start" ]