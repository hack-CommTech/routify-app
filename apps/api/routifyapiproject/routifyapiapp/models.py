from django.db import models


# Create your models here.
class Device(models.Model):
    name = models.CharField(max_length=256)

    place = models.CharField(max_length=256)

    type = models.CharField(max_length=256)


# Create your models here.
class Books(models.Model):
    # 書籍のタイトル
    title = models.CharField(max_length=100)
    # 登録時の日付/時刻を登録する
    # auto_now_add: 登録時のみ
    created_at = models.DateTimeField(auto_now_add=True)
    # 更新時の日付/時刻を更新する
    updated_at = models.DateTimeField(auto_now=True)

    # 管理者画面で表示するデータをtitleの値を返す
    def __str__(self):
        return self.title
