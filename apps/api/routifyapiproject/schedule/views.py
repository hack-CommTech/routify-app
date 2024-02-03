from django.shortcuts import render
from rest_framework import generics
from common.models import Schedule
from common.serializers import ScheduleSerializer

class PostListAPIView(generics.ListAPIView):

    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
