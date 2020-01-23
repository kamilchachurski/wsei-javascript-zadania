window.addEventListener('DOMContentLoaded', () => {
    let firstElement = document.querySelector('.first');
    let firstElementFirstChild = firstElement.children[0];
    let firstElementFirstChildThirdChild = firstElementFirstChild.children[2];

    console.log(firstElement);
    console.log(firstElementFirstChild);
    console.log(firstElementFirstChildThirdChild);

    let secondElement = document.querySelector('#second');
    let secondElementParent = secondElement.parentElement;
    let secondElementParentFourthChild = secondElementParent.children[3];

    console.log(secondElement);
    console.log(secondElementParent);
    console.log(secondElementParentFourthChild);

    let dataExElement;

    for(let element of document.querySelectorAll('[data-ex]')) {
        (element.getAttribute('data-ex') === 'third')
            && (dataExElement = element);
    }

    let dataExElementGrandpa = dataExElement.parentElement.parentElement;
    let dataExElementGrandpaLastChild = dataExElementGrandpa.lastElementChild;
    let dataExElementGrandpaLastChildFirstChild = dataExElementGrandpaLastChild.firstElementChild;
    let dataExElementGrandpaLastChildFirstChildMidChild = dataExElementGrandpaLastChildFirstChild.children[Math.floor(dataExElementGrandpaLastChildFirstChild.children.length / 2)];

    console.log(dataExElement);
    console.log(dataExElementGrandpa);
    console.log(dataExElementGrandpaLastChild);
    console.log(dataExElementGrandpaLastChildFirstChild);
    console.log(dataExElementGrandpaLastChildFirstChildMidChild);

    let forthElement = document.querySelector('div.forth');
    let forthElementParent = forthElement.parentElement;
    let forthElementParentFirstChild = forthElementParent.querySelector('article');
    let forthElementParentFirstChildSecondChild = forthElementParentFirstChild.querySelectorAll('p')[1];

    console.log(forthElement);
    console.log(forthElementParent);
    console.log(forthElementParentFirstChild);
    console.log(forthElementParentFirstChildSecondChild);
});