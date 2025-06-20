from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse

def api_health(request):
    """Endpoint de santé de l'API"""
    return JsonResponse({
        'status': 'healthy',
        'message': 'Agde Moto API is running',
        'version': '1.0.0'
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/health/', api_health, name='api_health'),
    path('api/motorcycles/', include('motorcycles.urls')),
    path('api/parts/', include('parts.urls')),
    path('api/blog/', include('blog.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)