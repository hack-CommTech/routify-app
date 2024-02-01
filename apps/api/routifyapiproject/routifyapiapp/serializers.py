from rest_framework import serializers
from routifyapiapp.models import Books
from datetime import datetime

class BooksSerializer(serializers.ModelSerializer):

    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)

    class Meta:
        model = Books
        fields = ['id', 'title', 'created_at', 'updated_at']