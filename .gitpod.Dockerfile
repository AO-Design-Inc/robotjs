# gitpod dev env dockerfiles
# uncomment the one to activate

# VNC
FROM gitpod/workspace-full-vnc
# Robot
RUN sudo apt-get update && \
    sudo DEBIAN_FRONTEND=noninteractive apt-get -y install --no-install-recommends \
    libxtst-dev \
    libpng++-dev
