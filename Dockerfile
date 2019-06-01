FROM ruby:2.6
ENV LANG C.UTF-8

RUN apt-get update -qq && \
  apt-get install -y nodejs postgresql-client build-essential libpq-dev
RUN mkdir -p /myapp/backend
WORKDIR /myapp/backend
COPY backend/Gemfile /myapp/backend/Gemfile
COPY backend/Gemfile.lock /myapp/backend/Gemfile.lock
RUN gem install bundler -v 1.17.1
RUN bundle install
COPY ./backend/ /myapp/backend/

# Add a script to be executed every time the container starts.
COPY backend/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 5000
