const Seq = require('sequelize');

const models = require('./models/init-models.js');
const sequelize = new Seq('marketplace', 'postgres', 'greenage', {
    host: '192.168.100.17',
    dialect: 'postgres',
    dialectOptions: {
        encrypt: true
    }
});


// Object.values(models).forEach(model => {
//     model.init(sequelize);
// });

// sequelize.sync({ force: true }).then(() => {
//     console.log('Database & tables created!');
// });


var DataTypes = require("sequelize").DataTypes;
var _address = require("./models/address")(sequelize, DataTypes);
var _batch_job = require("./models/batch_job")(sequelize, DataTypes);
var _cart = require("./models/cart")(sequelize, DataTypes);
var _cart_discounts = require("./models/cart_discounts")(sequelize, DataTypes);
var _cart_gift_cards = require("./models/cart_gift_cards")(sequelize, DataTypes);
var _claim_image = require("./models/claim_image")(sequelize, DataTypes);
var _claim_item = require("./models/claim_item")(sequelize, DataTypes);
var _claim_item_tags = require("./models/claim_item_tags")(sequelize, DataTypes);
var _claim_order = require("./models/claim_order")(sequelize, DataTypes);
var _claim_tag = require("./models/claim_tag")(sequelize, DataTypes);
var _country = require("./models/country")(sequelize, DataTypes);
var _currency = require("./models/currency")(sequelize, DataTypes);
var _custom_shipping_option = require("./models/custom_shipping_option")(sequelize, DataTypes);
var _customer = require("./models/customer")(sequelize, DataTypes);
var _customer_group = require("./models/customer_group")(sequelize, DataTypes);
var _customer_group_customers = require("./models/customer_group_customers")(sequelize, DataTypes);
var _discount = require("./models/discount")(sequelize, DataTypes);
var _discount_condition = require("./models/discount_condition")(sequelize, DataTypes);
var _discount_condition_customer_group = require("./models/discount_condition_customer_group")(sequelize, DataTypes);
var _discount_condition_product = require("./models/discount_condition_product")(sequelize, DataTypes);
var _discount_condition_product_collection = require("./models/discount_condition_product_collection")(sequelize, DataTypes);
var _discount_condition_product_tag = require("./models/discount_condition_product_tag")(sequelize, DataTypes);
var _discount_condition_product_type = require("./models/discount_condition_product_type")(sequelize, DataTypes);
var _discount_regions = require("./models/discount_regions")(sequelize, DataTypes);
var _discount_rule = require("./models/discount_rule")(sequelize, DataTypes);
var _draft_order = require("./models/draft_order")(sequelize, DataTypes);
var _fulfillment = require("./models/fulfillment")(sequelize, DataTypes);
var _fulfillment_item = require("./models/fulfillment_item")(sequelize, DataTypes);
var _fulfillment_provider = require("./models/fulfillment_provider")(sequelize, DataTypes);
var _gift_card = require("./models/gift_card")(sequelize, DataTypes);
var _gift_card_transaction = require("./models/gift_card_transaction")(sequelize, DataTypes);
var _idempotency_key = require("./models/idempotency_key")(sequelize, DataTypes);
var _image = require("./models/image")(sequelize, DataTypes);
var _invite = require("./models/invite")(sequelize, DataTypes);
var _line_item = require("./models/line_item")(sequelize, DataTypes);
var _line_item_adjustment = require("./models/line_item_adjustment")(sequelize, DataTypes);
var _line_item_tax_line = require("./models/line_item_tax_line")(sequelize, DataTypes);
var _money_amount = require("./models/money_amount")(sequelize, DataTypes);
var _note = require("./models/note")(sequelize, DataTypes);
var _notification = require("./models/notification")(sequelize, DataTypes);
var _notification_provider = require("./models/notification_provider")(sequelize, DataTypes);
var _oauth = require("./models/oauth")(sequelize, DataTypes);
var _order = require("./models/order")(sequelize, DataTypes);
var _order_discounts = require("./models/order_discounts")(sequelize, DataTypes);
var _order_edit = require("./models/order_edit")(sequelize, DataTypes);
var _order_gift_cards = require("./models/order_gift_cards")(sequelize, DataTypes);
var _order_item_change = require("./models/order_item_change")(sequelize, DataTypes);
var _payment = require("./models/payment")(sequelize, DataTypes);
var _payment_collection = require("./models/payment_collection")(sequelize, DataTypes);
var _payment_collection_payments = require("./models/payment_collection_payments")(sequelize, DataTypes);
var _payment_collection_sessions = require("./models/payment_collection_sessions")(sequelize, DataTypes);
var _payment_provider = require("./models/payment_provider")(sequelize, DataTypes);
var _payment_session = require("./models/payment_session")(sequelize, DataTypes);
var _price_list = require("./models/price_list")(sequelize, DataTypes);
var _price_list_customer_groups = require("./models/price_list_customer_groups")(sequelize, DataTypes);
var _product = require("./models/product")(sequelize, DataTypes);
var _product_collection = require("./models/product_collection")(sequelize, DataTypes);
var _product_images = require("./models/product_images")(sequelize, DataTypes);
var _product_option = require("./models/product_option")(sequelize, DataTypes);
var _product_option_value = require("./models/product_option_value")(sequelize, DataTypes);
var _product_tag = require("./models/product_tag")(sequelize, DataTypes);
var _product_tags = require("./models/product_tags")(sequelize, DataTypes);
var _product_tax_rate = require("./models/product_tax_rate")(sequelize, DataTypes);
var _product_type = require("./models/product_type")(sequelize, DataTypes);
var _product_type_tax_rate = require("./models/product_type_tax_rate")(sequelize, DataTypes);
var _product_variant = require("./models/product_variant")(sequelize, DataTypes);
var _refund = require("./models/refund")(sequelize, DataTypes);
var _region = require("./models/region")(sequelize, DataTypes);
var _region_fulfillment_providers = require("./models/region_fulfillment_providers")(sequelize, DataTypes);
var _region_payment_providers = require("./models/region_payment_providers")(sequelize, DataTypes);
var _return_ = require("./models/return")(sequelize, DataTypes);
var _return_item = require("./models/return_item")(sequelize, DataTypes);
var _return_reason = require("./models/return_reason")(sequelize, DataTypes);
var _sales_channel = require("./models/sales_channel")(sequelize, DataTypes);
var _shipping_method = require("./models/shipping_method")(sequelize, DataTypes);
var _shipping_method_tax_line = require("./models/shipping_method_tax_line")(sequelize, DataTypes);
var _shipping_option = require("./models/shipping_option")(sequelize, DataTypes);
var _shipping_option_requirement = require("./models/shipping_option_requirement")(sequelize, DataTypes);
var _shipping_profile = require("./models/shipping_profile")(sequelize, DataTypes);
var _shipping_tax_rate = require("./models/shipping_tax_rate")(sequelize, DataTypes);
var _staged_job = require("./models/staged_job")(sequelize, DataTypes);
var _store = require("./models/store")(sequelize, DataTypes);
var _store_currencies = require("./models/store_currencies")(sequelize, DataTypes);
var _swap = require("./models/swap")(sequelize, DataTypes);
var _tax_provider = require("./models/tax_provider")(sequelize, DataTypes);
var _tax_rate = require("./models/tax_rate")(sequelize, DataTypes);
var _tracking_link = require("./models/tracking_link")(sequelize, DataTypes);
var _user = require("./models/user")(sequelize, DataTypes);

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
});