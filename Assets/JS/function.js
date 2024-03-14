document.addEventListener("DOMContentLoaded", function() {
    var foodInfos = document.querySelectorAll('.food-info');
    var collapsedImages = document.querySelectorAll('.collapsed-image');

    foodInfos.forEach(function(foodInfo) {
        foodInfo.addEventListener('click', function() {
            var collapsedImage = this.parentElement.querySelector('.collapsed-image');
            collapsedImage.style.display = 'block'; 
            document.querySelectorAll('.food-img').forEach(function(foodImg) {
                foodImg.style.display = 'none'; 
            });
        });
    });

    document.querySelector('.main_menu').addEventListener('click', function() {
        collapsedImages.forEach(function(collapsedImage) {
            collapsedImage.style.display = 'none'; 
            document.querySelectorAll('.food-img').forEach(function(foodImg) {
                foodImg.style.display = 'block'; 
            });
        });
    });
});
