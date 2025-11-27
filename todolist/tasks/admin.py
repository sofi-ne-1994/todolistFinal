from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'completed', 'created_at')  # Columnas visibles en el admin
    list_filter = ('completed', 'created_at')                 # Filtros a la derecha
    search_fields = ('title', 'description')                  # Buscador
    ordering = ('-created_at',)                               # Orden por defecto
    list_editable = ('completed',)
    readonly_fields = ('created_at',)