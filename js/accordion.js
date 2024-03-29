const faqList = document.querySelector('.accordion');
const accordeonControls = faqList.querySelectorAll('.acc-controls');

const PADDING_TOP = 12;
const PADDING_BOTTOM = 20;
const PADDING = PADDING_TOP + PADDING_BOTTOM;

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
    panel.style.maxHeight = `${panel.querySelector('.text').getBoundingClientRect().height + PADDING}px`;
    panel.style.paddingTop = `${PADDING_TOP}px`;
    panel.style.paddingBottom = `${PADDING_BOTTOM}px`;
}

faqList.addEventListener("click", (evt) => {
    let item = evt.target.classList.contains('acc-controls') ? evt.target : false;
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

for (let i = 1; i < accordeonControls.length; i++) {
    accordeonControls[i].classList.add('acc-closed');
    accordeonControls[i].classList.remove('acc-opened');
    let panel = findMyPanel(accordeonControls[i]);
    closePanel(panel);
}
