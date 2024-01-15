document.addEventListener('DOMContentLoaded', function () {
    // Get the span element
    var typedSpan = document.getElementById('typed');

    // Get the data-typed-items attribute value and split it into an array
    var typedItems = typedSpan.dataset.typedItems.split(', ');

    // Start the typing animation
    startTypingAnimation(typedSpan, typedItems);
});

function startTypingAnimation(spanElement, typedItems) {
    var currentIndex = 0;
    var initialText = ''; // Initial text content

    function typeNextLetter() {
        // Set the next letter in the current item as the text content
        initialText += typedItems[currentIndex][initialText.length];

        // Wrap the text and cursor in a container
        spanElement.innerHTML = '<span class="text-7xl font-bold">' + initialText + '<span class="cursor">|</span></span>';

        // Check if the current item is fully typed
        if (initialText.length < typedItems[currentIndex].length) {
            // Schedule typing the next letter after a delay (e.g., 100 milliseconds)
            setTimeout(typeNextLetter, 100);
        } else {
            // Schedule erasing the current item after a delay (e.g., 1000 milliseconds)
            setTimeout(eraseCurrentItem, 2000);
        }
    }

    function eraseCurrentItem() {
        // Remove the cursor
        spanElement.innerHTML = '<span class="text-7xl font-bold">' + initialText + '</span>';

        // Schedule typing the next item after a delay (e.g., 500 milliseconds)
        setTimeout(typeNextItem, 500);
    }

    function typeNextItem() {
        currentIndex = (currentIndex + 1) % typedItems.length;
        initialText = ''; // Reset initial text
        typeNextLetter(); // Start typing the next item
    }

    // Start the typing animation
    typeNextLetter();
}
