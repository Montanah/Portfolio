const navigateToContact = () => {
    document.querySelector('#footer').scrollIntoView({
        behavior: 'smooth'
    });
};

const navigateToSkills = () => {
    document.querySelector('#skills').scrollIntoView({
        behavior: 'smooth'
    });
};

const navigateToProjects = () => {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
};

const navigateToExperience = () => {
    document.querySelector('#experience').scrollIntoView({
        behavior: 'smooth'
    });
};

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
            setTimeout(eraseCurrentItem, 1500);
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

var header = document.getElementById('top');
var body = document.getElementById('bottom');
var lastScrollTop = 0;

window.addEventListener(scroll, function () {
    var st = window.scrollY;

    // If scrolling down, increase z-index for body
    if (st > lastScrollTop || st === 0) {
        top.style.zIndex = 20;
        bottom.style.zIndex = 1;
    } else {
        top.style.zIndex = 20;
        bottom.style.zIndex = 1;
    }

    lastScrollTop = st;
});

document.addEventListener('DOMContentLoaded', function () {
    const swipeList = document.getElementById('projectsSwipe');
    const totalProjects = swipeList.childElementCount;
    let currentIndex = 0;
    
    const handlePrevList = () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSwipeList();
    };
    
    const handleNextList = () => {
        currentIndex = Math.min(currentIndex + 1, totalProjects - 1);
        updateSwipeList();
    };
    
    const updateSwipeList = () => {
        // Hide all list items
        Array.from(swipeList.children).forEach(item => {
            item.classList.add('hidden');
        });
    
        // Display the current list item
        swipeList.children[currentIndex].classList.remove('hidden');

        // Toggle visibility of arrows based on current index
        const leftArrow = document.getElementById('leftArrow');
        const rightArrow = document.getElementById('rightArrow');

        leftArrow.style.display = currentIndex === 0 ? 'none' : 'block';
        rightArrow.style.display = currentIndex === totalProjects - 1 ? 'none' : 'block';
    };
    
    // Initial setup
    updateSwipeList();
    
    // Expose functions to the global scope
    window.handlePrevList = handlePrevList;
    window.handleNextList = handleNextList;
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the animation
  function handleAnimation() {
    const animatedElement = document.getElementById('animatedElement');
  
    if (isElementInViewport(animatedElement)) {
      animatedElement.classList.add('animate-slideUp');
    }
  }
  
  // Use Intersection Observer to trigger the animation
  const observer = new IntersectionObserver(handleAnimation);
  observer.observe(document.getElementById('animatedElement'));
  
  // Trigger the animation on initial load
  handleAnimation();

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

  // Get reference to the images container
  const imagesSwipe = document.getElementById('imagesSwipe');

  // Initialize Hammer.js on the images container
    const hammer = new Hammer(imagesSwipe);

// Listen for swipe events on the images container
hammer.on('swipeleft', function () {
    // handle swipe left (show next image)
    const currentImage = document.querySelector('.image:not(.hidden)');
    const nextImage = currentImage.nextElementSibling;
    if (nextImage) {
        currentImage.classList.add('hidden');
        nextImage.classList.remove('hidden');
    }
});

hammer.on('swiperight', function () {
    // handle swipe right (show previous image)
    const currentImage = document.querySelector('.image:not(.hidden)');
    const previousImage = currentImage.previousElementSibling;
    if (previousImage) {
        currentImage.classList.add('hidden');
        previousImage.classList.remove('hidden');
    }
});