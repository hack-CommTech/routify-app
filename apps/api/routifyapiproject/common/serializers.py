from rest_framework import serializers
from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = {'id', 'user_name', 'user_email', 'user_password'}
        read_only_fields = ('id')


class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Habit
        fields = {'id', 'habit_name', 'start_time', 'end_time', 'is_done', 'user'}
        read_only_fields = ('id')


class ScheduleSerializer(serializers.Model.Serializer):
    class Meta:
        model = models.Schedule
        fields = {'id', 'start_time', 'end_time', 'description', 'is_done', 'habit'}
        read_only_fields = ('id')
