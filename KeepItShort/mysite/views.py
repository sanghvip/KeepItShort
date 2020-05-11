from django.http import HttpResponse
from django.shortcuts import render as render
from django.template import loader
from Summarize import run_summarization
from django.middleware.csrf import get_token
import os
from rest_framework.decorators import api_view  
import json
from rest_framework.response import Response
from .serializer import SummarySerializer
from .Summary import Summary

def index(request):
    context={}
    print(get_token(request))
    return render(request,'MainPage.html',context)


@api_view(['GET', 'POST'])
def summarize(request):
    #call the run_summarization function to process text and return summary
    print("Call to summarize")
    inputValue = request.data['summarizeInput']
    output = run_summarization(inputValue)
    serializer = SummarySerializer(Summary(output))
    output=[]
    return Response(serializer.data)