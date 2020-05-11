from django.urls import path

from . import views

urlpatterns = [
    path('index', views.index, name='index'),
    path('summarize',views.summarize,name='summarize'),
]

#/(?P<value>\s+)/$