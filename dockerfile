FROM ubuntu:22.04

ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update && apt-get install -y \
    git \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# nodejs
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt install -y nodejs
