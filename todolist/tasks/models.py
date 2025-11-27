from django.db import models

# Create your models here.
from django.db import models

# Define el modelo de la base de datos para almacenar cada tarea
class Task(models.Model):
    # Consigna: Necesitamos un nombre (title)
    title = models.CharField(max_length=200, verbose_name="Título")
    
    # Consigna: Añadimos una descripción (opcional)
    description = models.TextField(blank=True, null=True, verbose_name="Descripción")
    
    # Campo para marcar si la tarea está completada
    completed = models.BooleanField(default=False, verbose_name="Completada")
    
    # Campo de fecha de creación (auto_now_add=True lo establece al crear)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Creación")

    def __str__(self):
        return self.title

    class Meta:
        # Ordenamos las tareas por la más reciente primero
        ordering = ['-created_at'] 
        verbose_name = "Tarea"
        verbose_name_plural = "Tareas"