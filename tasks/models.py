from django.db import models

# Create your models here.
class Task(models.Model):
    tittle = models.CharField(max_length=200) #el charfiels es un varchar o un texto
    description = models.TextField(blank=True) #el text field sirve para textos largos
    done = models.BooleanField(default=False)
#se pone el titulo a las tareas creadas
    def __str__(self):
        return self.tittle