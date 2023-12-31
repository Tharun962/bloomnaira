const toggleMenu = () => {
    const burgerMenu = document.querySelector('.menu-icon');
    const src = burgerMenu.getAttribute('src');
    const iconName = src === 'images/menu-4-fill.svg' ? 'images/close-line.svg' : 'images/menu-4-fill.svg';
    burgerMenu.setAttribute('src', iconName);
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle (
        'navigation--mobile'
    );
};