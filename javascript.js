//Danh sách các biến
let supplies = recipes.map((recipe) => {
    return { ...recipe, quantity: 0 };
});

let inStores = recipes.map((recipe) => {
    return { ...recipe, quantity: 0, maxQuantity: 0 };
});

let numberTicket = 0;
let expandCounter = 0;
let improveTurnoverRate = 0;

//Các hàm thay đổi giá trị của biến
function changeSupplies(newSupplies) {
    supplies = newSupplies;
    $('.event-holder').trigger('supplies-change');
}

function changeInStore(newInStore) {
    inStores = newInStore;
    $('.event-holder').trigger('inStore-change');
}

function changeNumberTicket(newNumberTicket) {
    numberTicket = newNumberTicket;
    $('.event-holder').trigger('numberTicket-change');
}

function changeExpandCounter(newExpandCounter) {
    expandCounter = newExpandCounter;
    $('.event-holder').trigger('expandCounter-change');
}

function changeImproveTurnoverRate(newImproveTurnoverRate) {
    improveTurnoverRate = newImproveTurnoverRate;
    $('.event-holder').trigger('improveTurnoverRate-change');
}

/**
 * Hàm tạo ra chuỗi chứa nội dung của một supply
 * @param supplie thông tin một recipe
 * @returns Chuỗi html
 */
function createSupplyHtml(supplie, index) {
    let supplyClassName = `recipe_${supplie.name}`.replace(/[^a-zA-Z0-9_]+/g, '');
    return `
<div class="supply ${supplyClassName}">
    <div class="supply-img"><img src="${supplie.imageURL}" alt="recipe ${supplie.name} image"></div>
    <div class="supply-vertical-border"></div>
    <div class="supply-number"><input type="text" value="${supplie.quantity ? supplie.quantity : ''}" placeholder="Num"></div>
</div>     
`.replace(/[\n]+|[ ]{2}/g, ' ');
}

/**
 * Hàm tạo ra chuỗi chứa nội dung của một supply
 * @param inStore thông tin một recipe
 * @returns Chuỗi html
 */
function creatInStoreHtml(inStore) {
    let inStoreClassName = `recipe_${inStore.name}`.replace(/[^a-zA-Z0-9_]+/g, '');
    return `
<div class="supply ${inStoreClassName}">
    <div class="supply-img"><img src="${inStore.imageURL}" alt="recipe ${inStore.name} image"></div>
    <div class="supply-vertical-border"></div>
    <div class="supply-number supply-quantity"><input type="text" value="${inStore.quantity ? inStore.quantity : ''}" placeholder="Num"></div>
    <div class="supply-vertical-border"></div>
    <div class="supply-number supply-max-number"><input type="text" value="${inStore.maxQuantity ? inStore.maxQuantity : ''}" placeholder="Max"></div>
</div>     
`.replace(/[\n]+|[ ]{2}/g, ' ');
}

/**
 * Hàm tạo ra chuỗi chứa nội dung của một ticket
 * @param numberTicket thông tin ticket
 * @returns Chuỗi html
 */
function createNumberTicket(numberTicket) {
    return `
<div class="supply number_ticket">
    <div class="supply-img"><img src="images/ticket.png" alt="recipe ticket image"></div>
    <div class="supply-vertical-border"></div>
    <div class="supply-number supply-quantity"><input type="text" value="${numberTicket ? numberTicket : ''}" placeholder="Num"></div>
</div>     
`.replace(/[\n]+|[ ]{2}/g, ' ');
}

/**
 * Hàm tạo ra chuỗi chứa nội dung của một expandCounter
 * @param thông tin expandCounter
 * @returns Chuỗi html
 */
function createExpandCounter(expandCounter) {
    return `
<div class="supply expand_counter">
    <div class="supply-img"><img src="images/expand_counter.png" alt="recipe expand counter image"></div>
    <div class="supply-vertical-border"></div>
    <div class="supply-number supply-quantity"><input type="text" value="${expandCounter ? expandCounter : ''}" placeholder="%"></div>
</div>     
`.replace(/[\n]+|[ ]{2}/g, ' ');
}

/**
 * Hàm tạo ra chuỗi chứa nội dung của một improveTurnoverRate
 * @param thông tin improveTurnoverRate
 * @returns Chuỗi html
 */
function createImproveTurnoverRate(improveTurnoverRate) {
    return `
<div class="supply improve_turning_rate">
    <div class="supply-img"><img src="images/improve_turnover_rate.png" alt="recipe improve turnover rate image"></div>
    <div class="supply-vertical-border"></div>
    <div class="supply-number supply-quantity"><input type="text" value="${improveTurnoverRate ? improveTurnoverRate : ''}" placeholder="%"></div>
</div>     
`.replace(/[\n]+|[ ]{2}/g, ' ');
}

/**
 * Hàm lặp qua từng phần tử của recipe và thêm chuỗi html vào danh sách nguồn hàng
 */
function updateSupplyList() {
    let supplyListHtml = ``;
    supplies.forEach((supplie, index) => (supplyListHtml += createSupplyHtml(supplie, index)));
    $('.supply-info .supply-list').html(supplyListHtml);
}

/**
 * Hàm lặp qua từng phần tử của recipe và thêm chuỗi html vào danh sách hàng có trong cửa hàng
 */
function updateInStore() {
    let inStoreListHtml = ``;
    inStores.forEach((inStore) => (inStoreListHtml += creatInStoreHtml(inStore)));
    $('.inStore-info .supply-list').html(inStoreListHtml);
}

/**
 * Hàm cập nhật numberTicket
 */
function updateNumberTicket() {
    if ($('.upgrade-info .number_ticket').length > 0) {
        $('.upgrade-info .number_ticket').find('input').val(numberTicket);
    } else {
        $('.upgrade-info .supply-list').append(createNumberTicket(numberTicket));
        $('.upgrade-info .supply-list .nothing-here').remove();
    }
}

/**
 * Hàm cập nhật expandCounter
 */
function updateExpandCounter() {
    if ($('.upgrade-info .expand_counter').length > 0) {
        $('.upgrade-info .expand_counter').find('input').val(expandCounter);
    } else {
        $('.upgrade-info .supply-list').append(createExpandCounter(expandCounter));
        $('.upgrade-info .supply-list .nothing-here').remove();
    }
}

/**
 * Hàm cập nhật improveTurnoverRate
 */
function updateImproveTurnoverRate() {
    if ($('.upgrade-info .improve_turn_over_rate').length > 0) {
        $('.upgrade-info .improve_turn_over_rate').find('input').val(improveTurnoverRate);
    } else {
        $('.upgrade-info .supply-list').append(createImproveTurnoverRate(improveTurnoverRate));
        $('.upgrade-info .supply-list .nothing-here').remove();
    }
}

$(document).ready(function () {
    //Khởi tạo các sự kiện
    $('.event-holder').on('supplies-change', () => updateSupplyList());
    $('.event-holder').on('inStore-change', () => updateInStore());
    $('.event-holder').on('numberTicket-change', () => updateNumberTicket());
    $('.event-holder').on('expandCounter-change', () => updateExpandCounter());
    $('.event-holder').on('improveTurnoverRate-change', () => updateImproveTurnoverRate());

    //

    //Kích hoạt các sự kiện
    $('.event-holder').trigger('supplies-change');
    $('.event-holder').trigger('inStore-change');
    $('.event-holder').trigger('numberTicket-change');
    $('.event-holder').trigger('expandCounter-change');
    $('.event-holder').trigger('improveTurnoverRate-change');
});
