//your JS code here. If required.
function toggleDarkMode() {
        const container = document.getElementById('name');
        container.classList.toggle('dark-mode');

        // Check if dark mode is enabled and store the preference in Local Storage
        const isDarkModeEnabled = container.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkModeEnabled);
    }

    // Check for dark mode preference in Local Storage on page load
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('name');
        const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';

        if (isDarkModeEnabled) {
            container.classList.add('dark-mode');
        }
    });