FROM node:latest


RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get -y install --no-install-recommends \
    xorg \
    openbox \
    libnss3 \
    libasound2 \ 
    libatk-adaptor \ 
    libgtk-3-0 \
    libxtst-dev \
    wmctrl \
    libx11-dev \
    libx11-xcb-dev \ 
    libxkbcommon-dev \
    libxkbcommon-x11-dev \
    libpng++-dev \
    mesa-utils \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .
RUN chown -R node /app

USER node
RUN npm install
RUN npx electron-rebuild

USER root
RUN chown root /app/node_modules/electron/dist/chrome-sandbox
RUN chmod 4755 /app/node_modules/electron/dist/chrome-sandbox

USER node
#CMD bash
CMD npm run start
