document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const header = document.getElementById('main-header');
    const checkoutDrawer = document.getElementById('checkout-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const openDrawerBtns = document.querySelectorAll('.open-drawer-btn');
    const closeDrawerBtn = document.getElementById('drawer-close');
    const successCloseBtn = document.getElementById('success-close-btn');
    const orderForm = document.getElementById('order-form');
    const formPanel = document.getElementById('drawer-form-panel');
    const successPanel = document.getElementById('drawer-success-panel');
    const successClientName = document.getElementById('success-client-name');
    const successClientEmail = document.getElementById('success-client-email');

    // Sticky Header Scroll Event
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Drawer Open Logic
    const openDrawer = () => {
        checkoutDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable background scroll
    };

    // Drawer Close Logic
    const closeDrawer = () => {
        checkoutDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable background scroll
        
        // Reset panels back to form after animation finishes
        setTimeout(() => {
            formPanel.style.display = 'flex';
            successPanel.style.display = 'none';
        }, 400);
    };

    // Attach Listeners to Open Buttons
    openDrawerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openDrawer();
        });
    });

    // Attach Close Listeners
    closeDrawerBtn.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
    successCloseBtn.addEventListener('click', closeDrawer);

    // Form Submission Handler
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Fetch user data
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;

        // Set success messages dynamically
        successClientName.textContent = fullName;
        successClientEmail.textContent = email;

        // Transition panels
        formPanel.style.display = 'none';
        successPanel.style.display = 'flex';

        // Clear form fields
        orderForm.reset();
    });
});
