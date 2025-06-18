"""Middleware de logging pour Agde Moto"""
import logging
import time
from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse

logger = logging.getLogger('agde_moto')

class LoggingMiddleware(MiddlewareMixin):
    """Middleware pour logger les requ�tes et r�ponses"""
    
    def __init__(self, get_response):
        self.get_response = get_response
        super().__init__(get_response)
    
    def __call__(self, request):
        # Marquer le d�but de la requ�te
        start_time = time.time()
        
        # Logger la requ�te entrante
        logger.info(
            f"Requ�te entrante: {request.method} {request.path} "
            f"de {self._get_client_ip(request)}"
        )
        
        # Traiter la requ�te
        response = self.get_response(request)
        
        # Calculer le temps de traitement
        processing_time = time.time() - start_time
        
        # Logger la r�ponse
        logger.info(
            f"R�ponse: {request.method} {request.path} "
            f"-> {response.status_code} ({processing_time:.3f}s)"
        )
        
        return response
    
    def process_exception(self, request, exception):
        """Logger les exceptions"""
        logger.error(
            f"Exception dans {request.method} {request.path}: "
            f"{type(exception).__name__}: {str(exception)}"
        )
        
        if hasattr(request, 'user_email'):
            logger.error(f"Utilisateur: {request.user_email}")
        
        return None  # Laisser Django g�rer l'exception
    
    def _get_client_ip(self, request):
        """R�cup�re l'IP du client"""
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip
