document.addEventListener('DOMContentLoaded', function() {
    var quantitySections = document.querySelectorAll('.quantitySection');

    quantitySections.forEach(function(section) {
        var minusButton = section.querySelector('.minus');
        var plusButton = section.querySelector('.plus');
        var quantityInput = section.querySelector('input[type="text"]');
        var unitPriceElement = section.parentElement.querySelector('.unitpriceSection .foodprice');
        var totalPriceElement = section.parentElement.querySelector('.totalpriceSection .sumtopay');

        function updateTotalPrice() {
            var quantity = parseInt(quantityInput.value);
            var unitPrice = parseFloat(unitPriceElement.textContent.replace(/[^\d.]/g, ''));
            var totalPrice = quantity * unitPrice;
            totalPriceElement.textContent = 'Rp' + totalPrice.toFixed(3);
        }

        minusButton.addEventListener('click', function() {
            var currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
                updateTotalPrice();
                updatePriceToPay();
            }
        });

        plusButton.addEventListener('click', function() {
            var currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
            updateTotalPrice();
            updatePriceToPay();
        });

        quantityInput.addEventListener('input', updateTotalPrice);

        updateTotalPrice();
        
        function updatePriceToPay() {
            var totalPriceToPay = 0;
            var selectedProducts = document.querySelectorAll('.cart-container input[type="checkbox"]:checked');
            selectedProducts.forEach(function(product) {
                var sumToPay = product.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('.sumtopay').textContent;
                totalPriceToPay += parseFloat(sumToPay.replace('Rp', ''));
            });
            document.querySelector('.price-to-pay').textContent = 'Rp' + totalPriceToPay.toFixed(3);
        }
        
        var checkboxes = document.querySelectorAll('.cart-container input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                updatePriceToPay();
            });
        });

        var selectAllCheckbox = document.getElementById('selectall');
        selectAllCheckbox.addEventListener('change', function() {
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = selectAllCheckbox.checked;
            });
            updatePriceToPay();
        });
       
        updatePriceToPay();
        
    });

});
