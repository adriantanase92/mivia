FROM node:18

ARG WORK_DIR=/admin
ENV PATH ${WORK_DIR}/node_modules/.bin:$PATH

RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}

COPY package.json ${WORK_DIR}
COPY package-lock.json ${WORK_DIR}
COPY pnpm-lock.yaml ${WORK_DIR}

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN pnpm install @angular/cli
RUN pnpm install

COPY . ${WORK_DIR}

EXPOSE 4200

CMD pnpm run config -- --environment=dev && ng serve --host 0.0.0.0