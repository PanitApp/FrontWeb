FROM node:carbon-slim

# Create app directory
WORKDIR /panitapp-frontweb

COPY package*.json ./

# instalar dependencias del proyecto
RUN npm install

# copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . /panitapp-frontweb/

CMD [ "npm ", "run","build" ]