FROM postgres:9.6.6
MAINTAINER Luis Barbosa v1

WORKDIR /usr/src/app

COPY pg_dump.sql /usr/src/app/

ADD pg_dump.sql /docker-entrypoint-initdb.d

EXPOSE 5432
