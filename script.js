var proList = [];
localStorage.setItem('totalPrice', 0);
localStorage.setItem('totalNum', 0);
function onToUrl(itemUrl){
    window.location.href = itemUrl;
}
function Total3(){
    var totalPrice = 0;
    var totalNum = 0;
    proList.forEach(element => {
    totalPrice += (Number(element.num) * Number(element.proPrice));
    totalNum += Number(element.num);
    });
    document.getElementById('mycartNum').innerText = totalNum;
    document.getElementById('mycartNum2').innerText = totalNum;
    document.getElementById('totalsl').innerHTML = '$'+ totalPrice;
    document.getElementById('subtitle').innerHTML = '$'+ totalPrice;
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('totalNum', totalNum);
    localStorage.setItem('cartArray', JSON.stringify(proList));
}
function add(item,id){
    let index = proList.findIndex(item => item.proId === Number(id));
    if (index !== -1) {
    proList[index].num += 1;
    }
    document.getElementById('shuliang' + id).innerText = proList[index].num;
    this.Total3();
}
function reduce(item,id){
    let index = proList.findIndex(item => item.proId === Number(id));
    if (index !== -1) {
    if(proList[index].num - 1 > 0){
        proList[index].num = proList[index].num - 1;
    }
    }
    document.getElementById('shuliang' + id).innerText = proList[index].num;
    this.Total3();
}
function add2(item){
    var proVal = document.getElementById(item).innerText;
    document.getElementById(item).innerText = (Number(proVal) + 1);
    this.Total2();
}
function reduce2(item){
    var proVal = document.getElementById(item).innerText;
    if((Number(proVal) - 1) > 0){
    document.getElementById(item).innerText = (Number(proVal) - 1);
    this.Total2();
    }
}
function Total(){
    var totalNum = 0;
    var totalPrice = 0;
    const element = document.getElementById("pro1");
    if (element) {
    var attributeValue = element.getAttribute("data-price");
    var shuliang = Number(document.getElementById('pro1').innerText);
    totalNum = shuliang;
    totalPrice = Number(attributeValue) * shuliang;
    }
    const element2 = document.getElementById("pro2");
    if (element2) {
    var attributeValue = element2.getAttribute("data-price");
    var shuliang = Number(document.getElementById('pro2').innerText);
    totalNum = totalNum + shuliang;
    totalPrice = (Number(attributeValue) * shuliang) + totalPrice;
    }
    document.getElementById('mycartNum').innerText = totalNum;
    document.getElementById('mycartNum2').innerText = totalNum;
    document.getElementById('totalsl').innerHTML = '$'+ totalPrice;
    document.getElementById('subtitle').innerHTML = '$'+ totalPrice;
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('totalNum', totalNum);
}
function Total2(){
    var totalNum = 0;
    var totalPrice = 0;
    const element = document.getElementById("pro3");
    if (element) {
    var attributeValue = element.getAttribute("data-price");
    var shuliang = Number(document.getElementById('pro3').innerText);
    totalNum = shuliang;
    totalPrice = Number(attributeValue) * shuliang;
    }
    const element2 = document.getElementById("pro4");
    if (element2) {
    var attributeValue = element2.getAttribute("data-price");
    var shuliang = Number(document.getElementById('pro4').innerText);
    totalNum = totalNum + shuliang;
    totalPrice = (Number(attributeValue) * shuliang) + totalPrice;
    }
    document.getElementById('mycartNum3').innerText = totalNum;
    // document.getElementById('mycartNum2').innerText = totalNum;
    document.getElementById('totalsl2').innerHTML = '$'+ totalPrice;
    document.getElementById('subtitle2').innerHTML = '$'+ totalPrice;
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('totalNum', totalNum);
}
function del(benlei,id){
    let index = proList.findIndex(item => item.proId === Number(id));
    if (index !== -1) {
    proList.splice(index,1);
    }
    this.Total3();
    document.getElementById('cartItem' + id).remove();
}
function del2(benlei,id){
    let index = proList.findIndex(item => item.proId === Number(id));
    if (index !== -1) {
    proList.splice(index,1);
    }
    this.Total3();
    document.getElementById('cartItem2' + id).remove();
}
function toCheckout() {
    window.location.href = 'checkout.html';
};

function lordJiaz(){
    var myArray = [];
    if(localStorage.getItem('cartArray') !== null){
    myArray = JSON.parse(localStorage.getItem('cartArray'));
    }
    proList = myArray;
    var shopListMobHtml = '';
    var shopListHtml = '';
    myArray.forEach(element => {
    shopListMobHtml += '<div class="cart-item" id="cartItem'+ element.proId +'">';
    shopListMobHtml += '  <div class="cart-info">';
    shopListMobHtml += '    <img src="'+ element.proImg +'" alt="Product 1" />';
    shopListMobHtml += '    <div style="height: 80px;">';
    shopListMobHtml += '      <div class="cart-name" style="line-height: 16px;">'+ element.proName +'</div>';
    shopListMobHtml += '      <div class="cart-price">$'+ element.proPrice +'</div>';
    shopListMobHtml += '      <div class="qty-controls" style="margin-top: 8px;">';
    shopListMobHtml += '        <button onclick="reduce(this,'+ element.proId +')" data-id="'+ element.proId +'">-</button>';
    shopListMobHtml += '        <span id="shuliang'+ element.proId +'" class="shuliang">'+ element.num +'</span>';
    shopListMobHtml += '        <button onclick="add(this,'+ element.proId +')" data-id="'+ element.proId +'">+</button>';
    shopListMobHtml += '      </div>';
    shopListMobHtml += '    </div>';
    shopListMobHtml += '  </div>';
    shopListMobHtml += '  <i class="fas fa-trash cart-delete" onclick="del(this,'+ element.proId +')" data-id="'+ element.proId +'"></i>';
    shopListMobHtml += '</div>';


    shopListHtml += '<div class="cart-item" id="cartItem2'+ element.proId +'" style=" width: 80%;">';
    shopListHtml += '  <div class="cart-info">';
    shopListHtml += '    <img src="'+ element.proImg +'" style="width: 150px; height: 112px;" alt="Product 1" />';
    shopListHtml += '    <div style="height: 112px;">';
    shopListHtml += '      <div class="cart-name" style="line-height: 16px;">'+ element.proName +'</div>';
    shopListHtml += '      <div class="cart-price">$'+ element.proPrice +'</div>';
    shopListHtml += '    </div>';
    shopListHtml += '  </div>';
    shopListHtml += '  <div style="display: flex; align-items: center;">';
    shopListHtml += '    <div class="qty-controls" style="margin-top: 0px; margin-right: 20px;">';
    shopListHtml += '      <button onclick="reduce2(this,'+ element.proId +')" data-id="'+ element.proId +'">-</button>';
    shopListHtml += '      <span class="shuliang2" style="padding: 0px 8px;">'+ element.num +'</span>';
    shopListHtml += '      <button onclick="add2(this,'+ element.proId +')" data-id="'+ element.proId +'">+</button>';
    shopListHtml += '    </div>';
    shopListHtml += '    <img src="images/zwimg/del.png" onclick="del2(this,'+ element.proId +')" data-id="'+ element.proId +'" style="width: 30px; height: 30px;" />';
    shopListHtml += '  </div>';
    shopListHtml += '</div>';
    
    });
    document.getElementById('shoppingListMobile').innerHTML = shopListMobHtml;
    document.getElementById('shoppingList').innerHTML = shopListHtml;
    this.Total3();

}

lordJiaz();