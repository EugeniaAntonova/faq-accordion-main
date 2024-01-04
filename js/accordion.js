const faqList = document.querySelector('.accordion');
const accordeonControls = faqList.querySelectorAll('.acc-controls');

const PADDING = screen.width < 1024 ? 32 : 40;

const findMyPanel = (item) => {
    let id = item.getAttribute('aria-controls');
    let panel = faqList.querySelector(`#${id}`);
    return panel;
}

accordeonControls.forEach((acc) => {
    acc.classList.add('acc-closed');
    let panel = findMyPanel(acc);
    panel.style.maxHeight = '0';
})

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
                panel.style.maxHeight = '0';
            }
        }
        let panel = findMyPanel(item);
        item.classList.toggle('acc-closed');
        item.classList.toggle('acc-opened');
        if (item.classList.contains('acc-closed')) {
            panel.style.maxHeight = '0';
        } else {
            panel.style.maxHeight = `${panel.scrollHeight + PADDING}px`;
        }
    }
})

