FROM node:18

ARG WORK_DIR=/server
ENV PATH ${WORK_DIR}/node_modules/.bin:$PATH

RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}

COPY package.json ${WORK_DIR}
COPY pnpm-lock.yaml ${WORK_DIR}

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN pnpm install @nestjs/cli
RUN pnpm install
RUN npm install -g cross-env

COPY . ${WORK_DIR}

EXPOSE 3000

CMD pnpm run build && npm run seed && pnpm run start:dev