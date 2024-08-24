from django.urls import path
from django.http import JsonResponse

# Inline views directly within urls.py
def get_data(request):
    data = {"message": "Hello from Django (inline)"}
    return JsonResponse(data)

def another_endpoint(request):
    data = {"message": "This is another endpoint (inline)"}
    return JsonResponse(data)

urlpatterns = [
    path('data/', get_data),
    path('another/', another_endpoint),
]

