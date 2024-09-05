# charts/views.py

from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    return Response(data)

@api_view(['GET'])
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return Response(data)

@api_view(['GET'])
def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }
    return Response(data)

@api_view(['GET'])
def candlestick_data(request):
    data = {
        "data": [
            {"x": "2023-01-01", "y": [30, 40, 25, 35]},  # Correct format: [open, high, low, close]
            {"x": "2023-01-02", "y": [35, 45, 30, 40]},
            {"x": "2023-01-03", "y": [40, 50, 35, 45]},
        ]
    }
    return Response(data)