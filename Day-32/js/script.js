var product_data = [
  {
    product_id: 1,
    product_name: "Sản phẩm 1",
    product_price: 1000,
  },
  {
    product_id: 2,
    product_name: "Sản phẩm 2",
    product_price: 2000,
  },
  {
    product_id: 3,
    product_name: "Sản phẩm 3",
    product_price: 3000,
  },
  {
    product_id: 4,
    product_name: "Sản phẩm 4",
    product_price: 4000,
  },
];

var tBody = document.querySelector("tbody");

product_data.forEach((item, index) => {
  tBody.innerHTML += `
  <tr>
    <td>${index + 1}</td>
    <td>${item.product_name}</td>
    <td>${item.product_price}</td>
    <td>
      <input id='quantity_${item.product_id
    }' type='number' value='1' style='width: 90%; display: block; margin: 0 auto;'/>
      <button id='add_to_cart_${item.product_id
    }' style='width: 100%;'>Thêm vào giỏ</button>
    </td>
  </tr>
`;
});

var addButtons = document.querySelectorAll("#product_table button");
if (addButtons.length > 0) {
  for (var i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function () {
      var product_id = this.id.replace("add_to_cart_", "");
      product_id = parseInt(product_id);

      var quantity_value = this.parentElement.querySelector("input").value;
      if (quantity_value < 1) {
        quantity_value = 1;
      }

      var cart_data = localStorage.getItem("cart");
      cart_data = JSON.parse(cart_data);
      if (cart_data === null) {
        cart_data = [];
        var cartObject = {
          product_id: product_id,
          quantity: quantity_value,
        };
        cart_data.push(cartObject);
      } else {
        var flag = false;

        cart_data.forEach(function (cartItem, cartIndex) {
          if (product_id === cartItem.product_id) {
            flag = true;
            var currentQuantity = parseInt(cartItem.quantity);
            currentQuantity += parseInt(quantity_value);
            cart_data[cartIndex] = {
              product_id: product_id,
              quantity: currentQuantity,
            };
          }
        });

        if (flag === false) {
          var cartObject = {
            product_id: product_id,
            quantity: quantity_value,
          };
          cart_data.push(cartObject);
        }
      }

      var cartJson = JSON.stringify(cart_data);
      localStorage.setItem("cart", cartJson);

      renderCart();
    });
  }
}

function getProduct(id) {
  var result;
  product_data.forEach(function (data) {
    if (data.product_id === id) {
      result = data;
    }
  });
  return result;
}

function renderCart() {
  var cartTable = document.querySelector("#cart_data");
  var cart_data = localStorage.getItem("cart");
  cart_data = JSON.parse(cart_data);
  if (cart_data !== null && cart_data.length > 0) {
    cartTable.innerHTML = `
    <table cellpadding="0" cellspacing="0" width="100%" border="1" id="cart_table">
      <thead>
        <tr>
          <th width='5%'>STT</th>
          <th>Tên sản phẩm</th>
          <th width="20%">Giá</th>
          <th width="20%">Số lượng</th>
          <th width="20%">Thành tiền</th>
          <th width="5%">Xoá</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <hr />
    <button type="button" id="update_cart">Cập nhật giỏ hàng</button>
    <button type="button" id="delete_cart">Xoá giỏ hàng</button>
  `;

    var count = 0;
    var totalQuantity = 0;
    var totalAmount = 0;

    cart_data.forEach(function (cartItem) {
      count++;
      var detail = getProduct(cartItem.product_id);
      var amount = parseInt(detail.product_price) * parseInt(cartItem.quantity);
      totalAmount += parseInt(amount);
      totalQuantity += parseInt(cartItem.quantity);

      var trData = `
        <tr>
          <td>${count}</td>
          <td>${detail.product_name}</td>
          <td>${detail.product_price}</td>
          <td>
            <input type='number' class='quantity' data-id='${cartItem.product_id}' value='${cartItem.quantity}' />
          </td>
          <td>${amount}</td>
          <td><button type="button" class="delete-item">Xoá</button></td>
        </tr>
      `;
      document.querySelector("#cart_table").innerHTML += trData;
    });

    if (count > 0) {
      var trTotal = `
        <tr>
          <td colspan='3'>Tổng</td>
          <td>${totalQuantity}</td>
          <td colspan='2'>${totalAmount}</td>
        </tr>
      `;
      document.querySelector("#cart_table").innerHTML += trTotal;
    }

    updateCart();
    deleteCart();
    deleteAll();
  } else {
    cartTable.innerHTML = "Giỏ hàng không có sản phẩm";
  }
}

function updateCart() {
  var btnUpdate = document.querySelector("#cart_data #update_cart");
  btnUpdate.addEventListener("click", function () {
    var cartArr = document.querySelectorAll("#cart_table tbody .quantity");
    if (cartArr !== null && cartArr.length > 0) {
      cartArr.forEach(function (cartItem) {
        var quantityValue = parseInt(cartItem.value);
        var product_id = parseInt(cartItem.getAttribute("data-id"));

        var cart_data = localStorage.getItem("cart");
        cart_data = JSON.parse(cart_data);

        cart_data.forEach(function (value, key) {
          if (product_id === value.product_id) {
            if (quantityValue > 0) {
              cart_data[key] = {
                product_id: product_id,
                quantity: parseInt(quantityValue),
              };
            } else {
              cart_data.splice(key, 1);
            }
          }
        });

        var cart_json = JSON.stringify(cart_data);
        localStorage.setItem("cart", cart_json);
      });
      alert("Cập nhật giỏ hàng thành công");

      renderCart();
    }
  });
}

function deleteCart() {
  var btnDelete = document.querySelectorAll(".delete-item");
  btnDelete.forEach(function (delItem) {
    delItem.addEventListener("click", function () {
      if (confirm("Are you sure?")) {
        var product_id = this.parentElement.parentElement
          .querySelector(".quantity")
          .getAttribute("data-id");
        product_id = parseInt(product_id);

        var cart_data = localStorage.getItem("cart");
        cart_data = JSON.parse(cart_data);

        cart_data.forEach(function (value, key) {
          if (product_id === value.product_id) {
            cart_data.splice(key, 1);
          }
        });

        var cart_json = JSON.stringify(cart_data);

        localStorage.setItem("cart", cart_json);
        alert("Xoá sản phẩm thành công");
        renderCart();
      }
    });
  });
}

function deleteAll() {
  document.querySelector("#delete_cart").onclick = function () {
    if (confirm("Are you sure?")) {
      localStorage.removeItem("cart");
      alert("Xoá giỏ hàng thành công");
      renderCart();
    }
  };
}

renderCart()