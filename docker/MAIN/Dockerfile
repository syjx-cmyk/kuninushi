FROM alpine

LABEL maintainer="sy4may0 <sy4may0@gmail.com>"

RUN apk update && \
    apk add git && \
    apk add nodejs npm && \
    git clone https://github.com/sy4may0/kuninushi.git && \
    cd kuninushi && \
    npm install && \
    npm run build


