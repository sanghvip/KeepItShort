from django.db import models

# Create your models here.
class TextSummarized(models.Model):
    title = models.CharField(max_length=200000000)
    
    def __str__(self):
        return "Text summarized"