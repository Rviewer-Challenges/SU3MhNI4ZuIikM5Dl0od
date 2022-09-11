"use strict";
$(document).ready(function () {
  var s = feather.icons["more-horizontal"].toSvg(),
    n =
      '\n        <div class="row-action">\n            <div class="dropdown is-spaced is-dots is-right dropdown-trigger">\n                <div class="is-trigger" aria-haspopup="true" >\n                    ' +
      s +
      '\n                </div>\n                <div class="dropdown-menu" role="menu">\n                    <div class="dropdown-content">\n                        <a href="#" class="dropdown-item is-media">\n                            <div class="icon">\n                                <i class="lnil lnil-user-alt"></i>\n                            </div>\n                            <div class="meta">\n                                <span>Profile</span>\n                                <span>View profile</span>\n                            </div>\n                        </a>\n                        <a href="#" class="dropdown-item is-media">\n                            <div class="icon">\n                                <i class="lnil lnil-bubble"></i>\n                            </div>\n                            <div class="meta">\n                                <span>Message</span>\n                                <span>Send Message</span>\n                            </div>\n                        </a>\n                        <a href="#" class="dropdown-item is-media">\n                            <div class="icon">\n                                <i class="lnil lnil-travel"></i>\n                            </div>\n                            <div class="meta">\n                                <span>Transfer</span>\n                                <span>Transfer to other list</span>\n                            </div>\n                        </a>\n                        <hr class="dropdown-divider">\n                        <a href="#" class="dropdown-item is-media">\n                            <div class="icon">\n                                <i class="lnil lnil-trash"></i>\n                            </div>\n                            <div class="meta">\n                                <span>Remove</span>\n                                <span>Remove from list</span>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ',
    a =
      '\n        <div class="row-action">\n            <div class="dropdown is-spaced is-dots is-right dropdown-trigger">\n                <div class="is-trigger" aria-haspopup="true" >\n                    ' +
      s +
      '\n                </div>\n                <div class="dropdown-menu" role="menu">\n                    <div class="dropdown-content">\n                        <a href="#" class="dropdown-item is-media">\n                            <div class="icon">\n                                <i class="lnil lnil-cloud-download"></i>\n                            </div>\n                            <div class="meta">\n                                <span>Download</span>\n                                <span>Download this file</span>\n                            </div>\n                        </a>\n                        <a href="#" class="dropdown-item is-media">\n                            <div class="icon">\n                                <i class="lnil lnil-cloud-upload"></i>\n                            </div>\n                            <div class="meta">\n                                <span>Update</span>\n                                <span>Upload a new version</span>\n                            </div>\n                        </a>\n                        <hr class="dropdown-divider">\n                        <a href="#" class="dropdown-item is-media">\n                            <div class="icon">\n                                <i class="lnil lnil-trash"></i>\n                            </div>\n                            <div class="meta">\n                                <span>Remove</span>\n                                <span>Remove from list</span>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ';
  if ($("#users-datatable").length) {
    new DataTable(document.querySelector("#users-datatable"), {
      pageSize: 10,
      sort: {
        checkbox: !1,
        picture: !1,
        name: !0,
        position: !1,
        status: !0,
        action: !1,
      },
      filters: {
        checkbox: !1,
        picture: !1,
        name: !0,
        position: "select",
        status: "select",
        action: !1,
      },
      filterText: "Type to Filter... ",
      filterInputClass: "input",
      counterText: function (s, n, a, t, i) {
        return "Showing " + a + " to " + t + " of " + i + " items.";
      },
      counterDivSelector: ".datatable-info span",
      pagingDivSelector: "#paging-first-datatable",
      firstPage: !1,
      lastPage: !1,
      nextPage: '<i class="fas fa-angle-right"></i>',
      prevPage: '<i class="fas fa-angle-left"></i>',
      afterRefresh: function () {
        "development" === env && changeDemoImages(), initDropdowns();
      },
      data: [
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/7.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Alice Carasca</span>',
          position: "Software Engineer",
          status:
            '\n                        <div class="status is-offline">\n                            <i class="fas fa-circle"></i>\n                            <span>Offline</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/13.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Tara Svenson</span>',
          position: "UI/UX Designer",
          status:
            '\n                        <div class="status is-offline">\n                            <i class="fas fa-circle"></i>\n                            <span>Offline</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/5.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Mary Lebowski</span>',
          position: "Project Manager",
          status:
            '\n                        <div class="status is-available">\n                            <i class="fas fa-circle"></i>\n                            <span>Available</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <span class="avatar is-fake is-info">\n                                <span>K</span>\n                            </span>\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Kaylee Jennings</span>',
          position: "Web Developer",
          status:
            '\n                        <div class="status is-available">\n                            <i class="fas fa-circle"></i>\n                            <span>Available</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/27.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Carmen Escudero</span>',
          position: "HR Manager",
          status:
            '\n                        <div class="status is-offline">\n                            <i class="fas fa-circle"></i>\n                            <span>Offline</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/22.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Dwayne Hicks</span>',
          position: "Product Manager",
          status:
            '\n                        <div class="status is-offline">\n                            <i class="fas fa-circle"></i>\n                            <span>Offline</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <span class="avatar is-fake is-success">\n                                <span>P</span>\n                            </span>\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Paul Morris</span>',
          position: "Backend Developer",
          status:
            '\n                        <div class="status is-available">\n                            <i class="fas fa-circle"></i>\n                            <span>Available</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/23.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Irina Vierbovsky</span>',
          position: "Project Manager",
          status:
            '\n                        <div class="status is-available">\n                            <i class="fas fa-circle"></i>\n                            <span>Available</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/28.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Edouard Falant</span>',
          position: "Web Developer",
          status:
            '\n                        <div class="status is-busy">\n                            <i class="fas fa-circle"></i>\n                            <span>Busy</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <span class="avatar is-fake is-warning">\n                                <span>S</span>\n                            </span>\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Shana Williams</span>',
          position: "Sales Manager",
          status:
            '\n                        <div class="status is-offline">\n                            <i class="fas fa-circle"></i>\n                            <span>Offline</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <span class="avatar is-fake is-info">\n                                <span>B</span>\n                            </span>\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Benjamin Hoffman</span>',
          position: "Product Manager",
          status:
            '\n                        <div class="status is-offline">\n                            <i class="fas fa-circle"></i>\n                            <span>Offline</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/39.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Alejandro Badajoz</span>',
          position: "Business Analyst",
          status:
            '\n                        <div class="status is-busy">\n                            <i class="fas fa-circle"></i>\n                            <span>Busy</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/21.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Elizabeth Fisher</span>',
          position: "Mobile Developer",
          status:
            '\n                        <div class="status is-available">\n                            <i class="fas fa-circle"></i>\n                            <span>Available</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/37.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Helmut Fritz</span>',
          position: "Product Manager",
          status:
            '\n                        <div class="status is-available">\n                            <i class="fas fa-circle"></i>\n                            <span>Available</span>\n                        </div>\n                    ',
          action: "" + n,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <div class="h-avatar">\n                            <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/31.jpg" alt="">\n                        </div>\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Yasseen Amzi</span>',
          position: "Business Analyst",
          status:
            '\n                        <div class="status is-offline">\n                            <i class="fas fa-circle"></i>\n                            <span>Offline</span>\n                        </div>\n                    ',
          action: "" + n,
        },
      ],
    });
    setTimeout(function () {
      "development" === env && changeDemoImages(),
        adjustDropdowns(),
        customizeDatatable();
    }, 1e3);
  }
  if ($("#products-datatable").length) {
    new DataTable(document.querySelector("#products-datatable"), {
      pageSize: 10,
      sort: {
        checkbox: !1,
        picture: !1,
        name: !0,
        sku: !0,
        unitPrice: !0,
        stock: !1,
        category: !1,
        action: !1,
      },
      filters: {
        checkbox: !1,
        picture: !1,
        name: !0,
        sku: !0,
        unitPrice: !1,
        stock: !1,
        category: "select",
        action: !1,
      },
      filterText: "Type to Filter... ",
      filterInputClass: "input",
      counterText: function (s, n, a, t, i) {
        return "Showing " + a + " to " + t + " of " + i + " items.";
      },
      counterDivSelector: ".datatable-info span",
      pagingDivSelector: "#paging-first-datatable",
      firstPage: !1,
      lastPage: !1,
      nextPage: '<i class="fas fa-angle-right"></i>',
      prevPage: '<i class="fas fa-angle-left"></i>',
      afterRefresh: function () {
        "development" === env && changeDemoImages(), initDropdowns();
      },
      data: [
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/1.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Yellow Couch</span>',
          sku: "FC-58-5564",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$190.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>51</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Couches</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/2.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Green Couch</span>',
          sku: "FC-58-1565",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$170.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>42</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Couches</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/4.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Turquoise Seat</span>',
          sku: "FS-12-4854",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$90.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>59</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Chairs</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/3.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Cyan Couch</span>',
          sku: "FC-58-6723",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$180.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>42</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Couches</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/7.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Coffee Table</span>',
          sku: "FT-45-4684",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$280.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>12</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Tables</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/5.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Red Couch</span>',
          sku: "FC-58-7565",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$190.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>31</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Couches</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/6.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Mustard Seat</span>',
          sku: "FS-11-1861",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$70.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>31</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Chairs</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/8.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Modern Sofa</span>',
          sku: "FC-58-3971",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$190.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>29</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Couches</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/9.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Table Triplets</span>',
          sku: "FT-22-2875",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$340.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>6</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Tables</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/10.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Wood Chair</span>',
          sku: "FS-11-2876",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$80.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>16</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Chairs</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/11.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Modern Table</span>',
          sku: "FT-14-6543",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$150.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>31</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Tables</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/12.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Hippie Sofa</span>',
          sku: "FC-58-7241",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$380.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>4</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Couches</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/13.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Wood Dresser</span>',
          sku: "FD-98-4654",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$270.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>31</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Dressers</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/14.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Walnut Chair</span>',
          sku: "FS-11-5873",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$110.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>37</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Chairs</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/15.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Purple Armchair</span>',
          sku: "FS-10-1948",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$130.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>24</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Chairs</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/16.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Round Chair</span>',
          sku: "FS-11-2857",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$60.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>31</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Chairs</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/17.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Modern Cabinet</span>',
          sku: "FB-58-25253",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$240.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>11</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Cabinets</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/18.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Chromed Cabinet</span>',
          sku: "FB-58-5673",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$350.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>31</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Cabinets</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/19.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Modern Lamp</span>',
          sku: "FL-19-7354",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$50.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>62</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Lamps</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/20.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Lamp Triplets</span>',
          sku: "FL-18-2846",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$180.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>44</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Lamps</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/21.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Wood Lamp</span>',
          sku: "FL-19-1947",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$60.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>82</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Lamps</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/22.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Carbone Fiber Lamp</span>',
          sku: "FL-19-3658",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$220.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>11</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Lamps</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          picture:
            '\n                        <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/23.png" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Multidirectional Spots</span>',
          sku: "FL-19-1731",
          unitPrice:
            '\n                        <div class="price has-text-centered light-text">\n                            <span>$160.00</span>\n                        </div>\n                    ',
          stock:
            '\n                        <div class="stock has-text-centered light-text">\n                            <span>17</span>\n                        </div>\n                    ',
          category:
            '\n                        <div class="category light-text">\n                            <span>Lamps</span>\n                        </div>\n                    ',
          action:
            '\n                        <button class="button h-button">\n                            <span class="icon">\n                                <i class="lnir lnir-pencil"></i>\n                            </span>\n                            <span>Edit</span>\n                        </button>\n                    ',
        },
      ],
    });
    setTimeout(function () {
      "development" === env && changeDemoImages(),
        adjustDropdowns(),
        customizeDatatable();
    }, 1e3);
  }
  if ($("#files-datatable").length) {
    new DataTable(document.querySelector("#files-datatable"), {
      pageSize: 10,
      sort: {
        checkbox: !1,
        type: !1,
        name: !1,
        size: !0,
        version: !0,
        updated: !1,
        action: !1,
      },
      filters: {
        checkbox: !1,
        type: !1,
        name: !0,
        size: !1,
        version: !1,
        updated: !1,
        action: !1,
      },
      filterText: "Type to Filter... ",
      filterInputClass: "input",
      counterText: function (s, n, a, t, i) {
        return "Showing " + a + " to " + t + " of " + i + " items.";
      },
      counterDivSelector: ".datatable-info span",
      pagingDivSelector: "#paging-first-datatable",
      firstPage: !1,
      lastPage: !1,
      nextPage: '<i class="fas fa-angle-right"></i>',
      prevPage: '<i class="fas fa-angle-left"></i>',
      afterRefresh: function () {
        "development" === env && changeDemoImages(), initDropdowns();
      },
      data: [
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/pdf.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Company UX Guide</span>',
          size: "4.7 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.5.2</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/8.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Erik K.</span>\n                                <span>2 weeks ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/sheet.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Tech Summit Expenses</span>',
          size: "34 kb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.1.3</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/7.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Alice C.</span>\n                                <span>3 days ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/doc-2.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Project Outline</span>',
          size: "77 kb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.0.0</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/18.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Esteban C.</span>\n                                <span>5 days ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/ppt.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">UX Presentation</span>',
          size: "2.3 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.0.0</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/13.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Tara S.</span>\n                                <span>2 weeks ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/ai.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Website Homepage Redesign</span>',
          size: "4.8 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.0.0</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/5.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>Mary L.</span>\n                                <span>2 weeks ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/doc-2.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">UX Ramp Up for Interns</span>',
          size: "1.8 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.2.0</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/8.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Erik K.</span>\n                                <span>2 months ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/pdf.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">2020 Projects Digest</span>',
          size: "8.9 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.3.4</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/27.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Carmen E.</span>\n                                <span>3 weeks ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/doc-2.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Financial Report - 2020</span>',
          size: "1.2 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.0.4</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/10.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Henry G.</span>\n                                <span>5 days ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/sheet.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">2020 Supplier Expenses</span>',
          size: "250 kb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.0.0</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/38.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Christie D.</span>\n                                <span>6 days ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/ai.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Website About Page Redesign</span>',
          size: "3.9 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.2.1</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/5.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>Mary L.</span>\n                                <span>4 days ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/ai.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Website Pricing Page Redesign</span>',
          size: "2.6 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.1.0</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/5.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>Mary L.</span>\n                                <span>3 days ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/doc-2.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Financial Report - 2019</span>',
          size: "1.1 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.3.2</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/10.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Henry G.</span>\n                                <span>1 year ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/sheet.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">2019 Supplier Expenses</span>',
          size: "34 kb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.2.1</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/38.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Christie D.</span>\n                                <span>1 year ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/ai.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Website Contact Page Redesign</span>',
          size: "5.8 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.4.1</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/5.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>Mary L.</span>\n                                <span>1 week ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/pdf.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">Company Brand Book</span>',
          size: "5.3 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.6.3</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/8.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Erik K.</span>\n                                <span>3 months ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
        {
          checkbox:
            '\n                        <div class="control">\n                            <label class="checkbox is-circle is-primary is-outlined">\n                                <input type="checkbox">\n                                <span></span>\n                            </label>\n                        </div>\n                    ',
          type: '\n                        <img class="file-icon" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/icons/files/pdf.svg" alt="">\n                    ',
          name: '<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">2019 Projects Digest</span>',
          size: "4.7 mb",
          version:
            '\n                        <div class="verion has-text-centered light-text">\n                            <span>1.2.1</span>\n                        </div>\n                    ',
          updated:
            '\n                        <div class="flex-media">\n                            <div class="h-avatar is-small">\n                                <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/27.jpg" alt="">\n                            </div>\n                            <div class="meta">\n                                <span>by Carmen E.</span>\n                                <span>1 year ago</span>\n                            </div>\n                        </div>\n                    ',
          action: "" + a,
        },
      ],
    });
    setTimeout(function () {
      "development" === env && changeDemoImages(),
        adjustDropdowns(),
        customizeDatatable();
    }, 1e3);
  }
  if ($("#empty-datatable").length) {
    new DataTable(document.querySelector("#empty-datatable"), {
      pageSize: 10,
      sort: {
        checkbox: !1,
        type: !1,
        name: !1,
        size: !0,
        version: !0,
        updated: !1,
        action: !1,
      },
      filters: {
        checkbox: !1,
        type: !1,
        name: !0,
        size: !1,
        version: !1,
        updated: !1,
        action: !1,
      },
      filterText: "Type to Filter... ",
      filterInputClass: "input",
      counterText: function (s, n, a, t, i) {
        return "Showing " + a + " to " + t + " of " + i + " items.";
      },
      counterDivSelector: ".datatable-info span",
      pagingDivSelector: "#paging-first-datatable",
      firstPage: !1,
      lastPage: !1,
      nextPage: '<i class="fas fa-angle-right"></i>',
      prevPage: '<i class="fas fa-angle-left"></i>',
      afterRefresh: function () {
        "development" === env && changeDemoImages(), initDropdowns();
      },
      data: [],
    });
    setTimeout(function () {
      "development" === env && changeDemoImages(),
        adjustDropdowns(),
        customizeDatatable();
    }, 1e3);
  }
});
