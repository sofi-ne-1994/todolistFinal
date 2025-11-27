from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

# Creamos un router para registrar el ViewSet automáticamente
router = DefaultRouter()

# Esto crea las siguientes rutas (CRUD):
# - GET /api/v1/tasks/ -> Lista de tareas
# - POST /api/v1/tasks/ -> Crear tarea
# - DELETE /api/v1/tasks/<id>/ -> Eliminar tarea
# - PUT/PATCH /api/v1/tasks/<id>/ -> Actualizar tarea
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    # Incluimos las rutas generadas por el router
    path('', include(router.urls)),
]