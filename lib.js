(function() {
    'use strict';

    // Function to create and show notification with text
    function showNotification(message) {
        // Create notification container
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.style.fontSize = '14px';
        notification.style.zIndex = '10000';
        notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        notification.style.opacity = '1';
        notification.style.transition = 'opacity 0.5s ease-in-out';
        notification.innerText = message;

        // Create close button (X)
        const closeButton = document.createElement('span');
        closeButton.innerText = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.color = 'white';
        closeButton.style.fontSize = '12px';
        notification.appendChild(closeButton);

        // Add event listener to close the notification
        closeButton.addEventListener('click', () => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500); // Remove after fade out
        });

        // Append the notification to the body
        document.body.appendChild(notification);

        // Automatically fade out after 4 seconds if not closed
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500); // Remove after fade out
        }, 4000);
    }

    // Function to create and show image notification
    function showImageNotification(imageUrl) {
        // Create notification container
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '10000';
        notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        notification.style.opacity = '1';
        notification.style.transition = 'opacity 0.5s ease-in-out';

        // Create image element
        const image = document.createElement('img');
        image.src = imageUrl;
        image.style.width = '100px';  // Adjust size as needed
        image.style.height = '100px'; // Adjust size as needed
        image.style.borderRadius = '5px';
        notification.appendChild(image);

        // Create close button (X)
        const closeButton = document.createElement('span');
        closeButton.innerText = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.color = 'white';
        closeButton.style.fontSize = '12px';
        notification.appendChild(closeButton);

        // Add event listener to close the notification
        closeButton.addEventListener('click', () => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500); // Remove after fade out
        });

        // Append the notification to the body
        document.body.appendChild(notification);

        // Automatically fade out after 4 seconds if not closed
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500); // Remove after fade out
        }, 4000);
    }
})();
