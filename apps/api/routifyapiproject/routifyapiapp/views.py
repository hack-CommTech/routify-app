from django.shortcuts import render
from .models import Books
from rest_framework import viewsets
from .serializers import BooksSerializer

# Create your views here.
class BooksViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer 