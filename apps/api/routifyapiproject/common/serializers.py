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
        fields = {'id', 'habit_name', 'description', 'clear_judge', 'is_require_elapsedtime','is_include_holiday', 'schedule_routine', 'user'}
        read_only_fields = ('id')


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Schedule
        fields = {'id', 'start_time', 'end_time', 'description', 'is_done', 'habit'}
        read_only_fields = ('id')
