from django.shortcuts import render
from rest_framework import generics
from common.models import Habit
from common.serializers import HabitSerializer


# Create your views here.
class HabitList(generics.ListAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer
