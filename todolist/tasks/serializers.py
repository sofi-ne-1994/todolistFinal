from rest_framework import serializers
from .models import Task

# El Serializador traduce el objeto Task de Python a formato JSON y viceversa
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # Consigna: Debemos retornar los datos correctamente vía HTTP
        fields = ['id', 'title', 'description', 'completed', 'created_at']
        # Indicamos a Django que el 'id' y la fecha son de solo lectura
        read_only_fields = ['id', 'created_at']