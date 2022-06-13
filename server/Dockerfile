FROM python:3

WORKDIR /app

COPY . .

RUN pip3 install -r requirements.txt

ENV FLASK_ENV production

EXPOSE 8080

CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:create_app()"]