FROM ubuntu:16.04
MAINTAINER Luis Barbosa v1

WORKDIR /usr/src/app

COPY public_html/ /var/www/html/

RUN apt-get update
RUN apt-get -y dist-upgrade

RUN apt-get install -y apache2
RUN echo "" >> /etc/apache2/apache2.conf # append new line
RUN echo "ServerName server_domain_name" >> /etc/apache2/apache2.conf # FIX ME

RUN apt-get install -y php libapache2-mod-php php-mcrypt php-pgsql php-sqlite3 php-geoip

RUN apt-get -y install phppgadmin
RUN awk '{gsub("Require local","Allow from all")}1' /etc/apache2/conf-available/phppgadmin.conf > newphppgadmin.conf
RUN mv newphppgadmin.conf /etc/apache2/conf-available/phppgadmin.conf

RUN apt-get autoremove
RUN apt-get autoclean
RUN rm -rf /var/lib/apt/lists/*

EXPOSE 80

CMD /usr/sbin/apache2ctl -D FOREGROUND
