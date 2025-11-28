
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer

# Usamos ModelViewSet para implementar todas las consignas del CRUD:
# - Crear (POST)
# - Ver todas (GET list)
# - Eliminar (DELETE)
# - Actualizar (PUT/PATCH - para marcar como completada)
class TaskViewSet(viewsets.ModelViewSet):
    # La lista completa de objetos (Ver todas las tareas)
    queryset = Task.objects.all()
    # El serializador que usaremos
    serializer_class = TaskSerializer
    # ModelViewSet maneja el GET, POST, DELETE, etc., automáticamente.