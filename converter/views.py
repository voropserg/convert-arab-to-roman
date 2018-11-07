from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse
from .models import romNum, romLit
import re


# class IndexView(View):
#     def get(self, request, *args, **kwargs):
#         if request.method == "POST":
#             return JsonResponse(request.POST["raData"])
#         elif request.method == "GET":
#             return render(request, "converter/index.html")


def index(request):
    if request.method == "POST":
        return JsonResponse(convertRequest(request.POST["rData"]))
    elif request.method == "GET":
        return render(request, "converter/index.html")

def convertRequest(number):
    res = ""
    if number.isdigit():
        number = int(number)
        for num, lit in romNum:
            while number >= num:
                res += lit
                number -= num
    elif re.fullmatch("[IVXLCDM]+", number):
        res = int()
        maxNum = 1
        for ch in number[::-1]:
            curNum = romLit[ch]
            if curNum >= maxNum:
                res += curNum
                maxNum = curNum
            else:
                res -= curNum
    return {"res" : res}

def notFound(request):
    return render(request, "converter/notFound.html")