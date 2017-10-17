odoo.define('pos_order_note.tour', function(require) {
    "use strict";

    var core = require('web.core');
    var tour = require('web_tour.tour');

    var _t = core._t;

    tour.register('pos_order_note_tour', {
        url: "/web",
    }, [{
        trigger: '.o_app[data-menu-xmlid="point_of_sale.menu_point_root"], .oe_menu_toggler[data-menu-xmlid="point_of_sale.menu_point_root"]',
        content: _t("Ready to launch your <b>point of sale</b>? <i>Click here</i>."),
        position: 'bottom',
    }, {
        trigger: ".o_pos_kanban button.oe_kanban_action_button",
        content: _t("<p>Click to start the point of sale interface. It <b>runs on tablets</b>, laptops, or industrial hardware.</p><p>Once the session launched, the system continues to run without an internet connection.</p>"),
        position: "bottom"
    }, {
        trigger: ".tables .table",
        content: _t("<p>Click <b>table</b></p>"),
        position: "bottom"
    }, {
        trigger: ".product-list .product",
        content: _t("<p>Click product 1</p>"),
        position: "bottom"
    },
    {
        trigger: ".control-button:has(.fa-tag)",
        content: _t("<p>Click <b>Note</b> button</p>"),
        position: "bottom"
    }, {
        trigger: ".product_note #1",
        content: _t("<p>Click to Predefine note"),
        position: "bottom"
    }, {
        trigger: ".product_note #2",
        content: _t("<p>Click to Predefine note"),
        position: "bottom"
    }, {
        trigger: ".popup-confirm-note .confirm",
        content: _t("<p>Click confirm button"),
        position: "bottom"
    }, {
        trigger: ".control-button:has(.fa-tag)",
        content: _t("<p>Click <b>Note</b> button</p>"),
        position: "bottom"
    }, {
        trigger: ".popup-confirm-note .order_type",
        content: _t("<p>Click <b>Order Note</b> type</p>"),
        position: "bottom"
    }, {
        trigger: ".product_note #3",
        content: _t("<p>Click to Predefine note"),
        position: "bottom"
    }, {
        trigger: ".popup-confirm-note .confirm",
        content: _t("<p>Click confirm button"),
        position: "bottom"
    }, {
        trigger: ".control-buttons .order-submit",
        content: _t("<p>Click <b>Order</b> button for printing in <b>Kitchen</b></p>"),
        position: "bottom"
    }
    ]);
});