FROM python:3.8-slim-buster

RUN apt-get update
RUN apt-get install -y gnupg1 apt-transport-https dirmngr
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 379CE192D401AB61
RUN echo "deb https://ookla.bintray.com/debian buster main" | tee /etc/apt/sources.list.d/speedtest.list
RUN apt-get update
RUN apt-get -y install speedtest
RUN mkdir -p ~/.config/ookla
RUN echo "{\n\t\"Settings\": {\n\t\t\"LicenseAccepted\": \"604ec27f828456331ebf441826292c49276bd3c1bee1a2f65a6452f505c4061c\"\n\t}\n}" > ~/.config/ookla/speedtest-cli.json
RUN rm -rf /tmp/* /var/lib/apt/lists/* /var/tmp/*
RUN pip install flask
COPY app /app
WORKDIR /app
ENTRYPOINT [ "/usr/local/bin/python3", "app.py" ]
