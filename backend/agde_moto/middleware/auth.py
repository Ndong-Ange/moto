"""Middleware d'authentification JWT pour Agde Moto"""
import jwt
from django.http import JsonResponse
from django.conf import settings
from django.contrib.auth.models import AnonymousUser
from django.utils.deprecation import MiddlewareMixin
import logging

logger = logging.getLogger('agde_moto')

class AuthMiddleware(MiddlewareMixin):
    """Middleware pour g�rer l'authentification JWT"""
    
    def __init__(self, get_response):
        self.get_response = get_response
        super().__init__(get_response)
        
        # Chemins qui ne n�cessitent pas d'authentification
        self.public_paths = [
            '/api/motorcycles/',
            '/api/blog/',
            '/api/parts/',
            '/admin/login/',
            '/health/',
            '/',
        ]
    
    def __call__(self, request):
        # V�rifier si le chemin n�cessite une authentification
        if not self._requires_auth(request.path):
            return self.get_response(request)
        
        # R�cup�rer le token depuis l'en-t�te Authorization
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        if not auth_header:
            logger.warning(f"Tentative d'acc�s sans token: {request.path}")
            return JsonResponse(
                {'error': 'Token d\'authentification requis'}, 
                status=401
            )
        
        try:
            # Extraire le token (format: "Bearer <token>")
            token = auth_header.split(' ')[1]
            payload = jwt.decode(
                token, 
                settings.JWT_SECRET_KEY, 
                algorithms=[settings.JWT_ALGORITHM]
            )
            
            # Ajouter les informations utilisateur � la requ�te
            request.user_id = payload.get('user_id')
            request.user_email = payload.get('email')
            
            logger.info(f"Utilisateur authentifi�: {request.user_email}")
            
        except jwt.ExpiredSignatureError:
            logger.warning("Token expir�")
            return JsonResponse(
                {'error': 'Token expir�'}, 
                status=401
            )
        except jwt.InvalidTokenError:
            logger.warning("Token invalide")
            return JsonResponse(
                {'error': 'Token invalide'}, 
                status=401
            )
        except (IndexError, KeyError):
            logger.warning("Format de token invalide")
            return JsonResponse(
                {'error': 'Format de token invalide'}, 
                status=401
            )
        
        return self.get_response(request)
    
    def _requires_auth(self, path):
        """V�rifie si un chemin n�cessite une authentification"""
        return not any(path.startswith(public_path) for public_path in self.public_paths)
