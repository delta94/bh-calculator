/**
 * Hàm tạo ra chuỗi chứa nội dung của một supply
 * @param recipe thông tin một recipe
 * @returns Chuỗi html
 */
function createSupplyHtml(recipe) {
    let recipeClassName = `recipe_${recipe.name}`.replace(/[^a-zA-Z0-9_]+/g, '');
    return `
<div class="supply">
    <div class="supply-img ${recipeClassName}"><img src="${recipe.imageURL}" alt="recipe ${recipe.name} image"></div>
    <div class="supply-vertical-border"></div>
    <div class="supply-number"><input type="text" value="0"></div>
</div>     
`.replace(/[\n]+|[ ]{2}/g, ' ');
}

/**
 * Hàm lặp qua từng phần tử của recipe và thêm chuỗi html vào DOOM
 */
function updateSupplyList() {
    let supplyListHtml = ``;
    recipes.forEach((recipe) => (supplyListHtml += createSupplyHtml(recipe)));
    $('.supply-list').html(supplyListHtml);
}

$(document).ready(function () {
    //Khởi tạo các sự kiện
    $('.supply-list').on('update-supply-list', () => updateSupplyList());

    //Kích hoạt các sự kiện
    //Kích hoạt sự kiên cập nhật danh sách hàng hóa
    $('.supply-list').trigger('update-supply-list');
});
