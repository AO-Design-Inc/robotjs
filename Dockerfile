FROM node:latest

RUN apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt-get -y install --no-install-recommends \
	libxtst-dev libpng++-dev \
	python \
	&& apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .
RUN chown -R node /app

USER node
RUN npm install

CMD bash
