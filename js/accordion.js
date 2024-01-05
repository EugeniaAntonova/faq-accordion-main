const faqList = document.querySelector('.accordion');
const accordeonControls = faqList.querySelectorAll('.acc-controls');

const PADDING = screen.width < 1024 ? 32 : 40;

const findMyPanel = (item) => {
    let id = item.getAttribute('aria-controls');
    let panel = faqList.querySelector(`#${id}`);
    return panel;
}

const closePanel = (panel) => {
    panel.style.maxHeight = '0';
    panel.style.paddingTop = '0';
    panel.style.paddingBottom = '0';
}

const openPanel = (panel) => {
    panel.style.maxHeight = `${panel.scrollHeight + PADDING}px`;
    panel.style.paddingTop = null;
    panel.style.paddingBottom = null;
}

faqList.addEventListener("click", (evt) => {
    let item = evt.target.classList.contains('acc-controls') ? evt.target : false;
    console.log(item);
    let opened = faqList.querySelector('.acc-opened');
    if (item) {
        if (opened) {
            if (opened != item) {
                let panel = findMyPanel(opened);
                opened.classList.add('acc-closed');
                opened.classList.remove('acc-opened');
                closePanel(panel);
            }
        }
        let panel = findMyPanel(item);
        item.classList.toggle('acc-closed');
        item.classList.toggle('acc-opened');
        if (item.classList.contains('acc-closed')) {
            closePanel(panel);
        } else {
            openPanel(panel);
        }
    }
})

// preparing default state for the page

accordeonControls.forEach((acc) => {
    acc.classList.add('acc-closed');
    let panel = findMyPanel(acc);
    closePanel(panel);
})

const firstPanel = findMyPanel(accordeonControls[0]);
openPanel(firstPanel);
accordeonControls[0].classList.remove('acc-closed');
accordeonControls[0].classList.add('acc-opened');
