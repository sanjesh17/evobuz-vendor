from django.db import models

class Product(models.Model):
    product_name = models.CharField(max_length=255)
    description = models.CharField(max_length=300)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    Business_name = models.CharField(max_length=255)
    

    def __str__(self):
        return self.product_name
