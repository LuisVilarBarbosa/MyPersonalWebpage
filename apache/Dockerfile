FROM ubuntu:16.04
MAINTAINER Luis Barbosa v3

WORKDIR /usr/src/app

COPY public_html/ /var/www/html/

RUN apt-get update \
&& apt-get -y dist-upgrade \
&& apt-get install -y\
 wget\
 apache2\
 php\
 libapache2-mod-php\
 php-mcrypt\
 php-pgsql\
 php-geoip\
 phppgadmin \
&& apt-get autoremove \
&& apt-get autoclean \
&& rm -rf /var/lib/apt/lists/*

RUN echo "\nServerName server_domain_name" >> /etc/apache2/apache2.conf # FIX ME
RUN echo "" > /etc/apache2/mods-enabled/mpm_event.load # Creates an empty file that fixes the conflicts with MPMs that occurs when executing Apache on the Heroku platform.

RUN wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz \
&& gunzip GeoLiteCity.dat.gz \
&& mv -v GeoLiteCity.dat /usr/share/GeoIP/GeoIPCity.dat

RUN sed -i "s/Require local/Allow from all/g" /etc/apache2/conf-available/phppgadmin.conf

# $PORT is an environment variable necessary to execute on the Heroku platform.
EXPOSE $PORT

CMD sed -i "s/80/$PORT/g" /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf \
&& /usr/sbin/apache2ctl -D FOREGROUND
