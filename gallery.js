
document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the "add" icon
    document.getElementById('addImage').addEventListener('click', function () {
        // Show the new input field container
        document.getElementById('newImageInputContainer').style.display = 'block';

        // Add a click event listener to the new upload image button
        document.getElementById('uploadImageButton').addEventListener('click', function () {
            // Get the values from the input fields
            var imageUrl = URL.createObjectURL(document.getElementById('newImageInput').files[0]);

            // Check if an image is provided
            if (imageUrl) {
                // Create a new container for the image
                var newImageContainer = document.createElement('div');
                newImageContainer.className = 'col-lg-4 mb-4 mb-lg-0 image-container'; // Add image-container class

                // Create a new image element and append it to the new container
                var newImage = document.createElement('img');
                newImage.src = imageUrl;
                newImage.className = 'w-100 shadow-1-strong rounded mb-4';
                newImageContainer.appendChild(newImage);

                // Append the new container to the gallery
                document.getElementById('imageGallery').appendChild(newImageContainer);

                // Hide the new input field container after adding the image
                document.getElementById('newImageInputContainer').style.display = 'none';

                // Reset the input field to allow adding more images
                document.getElementById('newImageInput').value = null;
            } else {
                // Provide a message to the user indicating missing information
                alert('Please provide an image.');
            }
        });
    });
});
