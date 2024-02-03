from django.db import models


# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=64)
    user_email = models.EmailField()
    user_password = models.CharField(max_length=1024)

    def __str__(self):
        return self.user_name

    class Meta:
        db_table = 'user_table'


class Habit(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    habit_name = models.CharField(max_length=256)
    description = models.TextField(default='習慣に関する説明が入ります')
    clear_judge = models.CharField(max_length=256, default='None')
    is_require_elapsedtime = models.BooleanField(default=False)
    is_include_holiday = models.BooleanField(default=False)
    schedule_routine = models.JSONField(default={})

    def __str__(self):
        return self.habit_name

    class Meta:
        db_table = 'habit_table'


class Schedule(models.Model):
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    description = models.TextField()
    is_done = models.BooleanField()
    habit = models.ForeignKey(Habit, on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.start_time, self.end_time

    class Meta:
        db_table = 'schedule_table'
