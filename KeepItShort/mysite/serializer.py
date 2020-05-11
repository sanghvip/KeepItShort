from rest_framework import serializers

class SummarySerializer(serializers.Serializer):
    content = serializers.CharField(max_length=200000000)