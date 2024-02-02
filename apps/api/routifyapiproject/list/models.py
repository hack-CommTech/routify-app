from django.db import models


# Create your models here.
class Habit(models.Model):
    list_id = models.BigAutoField(primary_key=True)
    habit_id = models.IntegerField()
    habit_name = models.CharField(max_length=256)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    is_done = models.BooleanField()
    print("routine")


class Meta:
    db_table = 'habit_list'
