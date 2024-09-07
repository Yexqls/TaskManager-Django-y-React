from rest_framework import serializers
from .models import Task #esta transformando la solicitud en un json

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields =('id', 'tittle','description','done')

        fields = '__all__'