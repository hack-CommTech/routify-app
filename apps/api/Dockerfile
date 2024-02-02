FROM python:3.11.0

WORKDIR /app

COPY . /app

# 環境構築
RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "routifyapiproject/manage.py", "runserver", "0.0.0.0:8000"]