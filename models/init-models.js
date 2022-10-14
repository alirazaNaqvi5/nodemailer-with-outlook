var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _batch_job = require("./batch_job");
var _cart = require("./cart");
var _cart_discounts = require("./cart_discounts");
var _cart_gift_cards = require("./cart_gift_cards");
var _claim_image = require("./claim_image");
var _claim_item = require("./claim_item");
var _claim_item_tags = require("./claim_item_tags");
var _claim_order = require("./claim_order");
var _claim_tag = require("./claim_tag");
var _country = require("./country");
var _currency = require("./currency");
var _custom_shipping_option = require("./custom_shipping_option");
var _customer = require("./customer");
var _customer_group = require("./customer_group");
var _customer_group_customers = require("./customer_group_customers");
var _discount = require("./discount");
var _discount_condition = require("./discount_condition");
var _discount_condition_customer_group = require("./discount_condition_customer_group");
var _discount_condition_product = require("./discount_condition_product");
var _discount_condition_product_collection = require("./discount_condition_product_collection");
var _discount_condition_product_tag = require("./discount_condition_product_tag");
var _discount_condition_product_type = require("./discount_condition_product_type");
var _discount_regions = require("./discount_regions");
var _discount_rule = require("./discount_rule");
var _draft_order = require("./draft_order");
var _fulfillment = require("./fulfillment");
var _fulfillment_item = require("./fulfillment_item");
var _fulfillment_provider = require("./fulfillment_provider");
var _gift_card = require("./gift_card");
var _gift_card_transaction = require("./gift_card_transaction");
var _idempotency_key = require("./idempotency_key");
var _image = require("./image");
var _invite = require("./invite");
var _line_item = require("./line_item");
var _line_item_adjustment = require("./line_item_adjustment");
var _line_item_tax_line = require("./line_item_tax_line");
var _money_amount = require("./money_amount");
var _note = require("./note");
var _notification = require("./notification");
var _notification_provider = require("./notification_provider");
var _oauth = require("./oauth");
var _order = require("./order");
var _order_discounts = require("./order_discounts");
var _order_edit = require("./order_edit");
var _order_gift_cards = require("./order_gift_cards");
var _order_item_change = require("./order_item_change");
var _payment = require("./payment");
var _payment_collection = require("./payment_collection");
var _payment_collection_payments = require("./payment_collection_payments");
var _payment_collection_sessions = require("./payment_collection_sessions");
var _payment_provider = require("./payment_provider");
var _payment_session = require("./payment_session");
var _price_list = require("./price_list");
var _price_list_customer_groups = require("./price_list_customer_groups");
var _product = require("./product");
var _product_collection = require("./product_collection");
var _product_images = require("./product_images");
var _product_option = require("./product_option");
var _product_option_value = require("./product_option_value");
var _product_tag = require("./product_tag");
var _product_tags = require("./product_tags");
var _product_tax_rate = require("./product_tax_rate");
var _product_type = require("./product_type");
var _product_type_tax_rate = require("./product_type_tax_rate");
var _product_variant = require("./product_variant");
var _refund = require("./refund");
var _region = require("./region");
var _region_fulfillment_providers = require("./region_fulfillment_providers");
var _region_payment_providers = require("./region_payment_providers");
var _return_ = require("./return");
var _return_item = require("./return_item");
var _return_reason = require("./return_reason");
var _sales_channel = require("./sales_channel");
var _shipping_method = require("./shipping_method");
var _shipping_method_tax_line = require("./shipping_method_tax_line");
var _shipping_option = require("./shipping_option");
var _shipping_option_requirement = require("./shipping_option_requirement");
var _shipping_profile = require("./shipping_profile");
var _shipping_tax_rate = require("./shipping_tax_rate");
var _staged_job = require("./staged_job");
var _store = require("./store");
var _store_currencies = require("./store_currencies");
var _swap = require("./swap");
var _tax_provider = require("./tax_provider");
var _tax_rate = require("./tax_rate");
var _tracking_link = require("./tracking_link");
var _user = require("./user");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var batch_job = _batch_job(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cart_discounts = _cart_discounts(sequelize, DataTypes);
  var cart_gift_cards = _cart_gift_cards(sequelize, DataTypes);
  var claim_image = _claim_image(sequelize, DataTypes);
  var claim_item = _claim_item(sequelize, DataTypes);
  var claim_item_tags = _claim_item_tags(sequelize, DataTypes);
  var claim_order = _claim_order(sequelize, DataTypes);
  var claim_tag = _claim_tag(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var currency = _currency(sequelize, DataTypes);
  var custom_shipping_option = _custom_shipping_option(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var customer_group = _customer_group(sequelize, DataTypes);
  var customer_group_customers = _customer_group_customers(sequelize, DataTypes);
  var discount = _discount(sequelize, DataTypes);
  var discount_condition = _discount_condition(sequelize, DataTypes);
  var discount_condition_customer_group = _discount_condition_customer_group(sequelize, DataTypes);
  var discount_condition_product = _discount_condition_product(sequelize, DataTypes);
  var discount_condition_product_collection = _discount_condition_product_collection(sequelize, DataTypes);
  var discount_condition_product_tag = _discount_condition_product_tag(sequelize, DataTypes);
  var discount_condition_product_type = _discount_condition_product_type(sequelize, DataTypes);
  var discount_regions = _discount_regions(sequelize, DataTypes);
  var discount_rule = _discount_rule(sequelize, DataTypes);
  var draft_order = _draft_order(sequelize, DataTypes);
  var fulfillment = _fulfillment(sequelize, DataTypes);
  var fulfillment_item = _fulfillment_item(sequelize, DataTypes);
  var fulfillment_provider = _fulfillment_provider(sequelize, DataTypes);
  var gift_card = _gift_card(sequelize, DataTypes);
  var gift_card_transaction = _gift_card_transaction(sequelize, DataTypes);
  var idempotency_key = _idempotency_key(sequelize, DataTypes);
  var image = _image(sequelize, DataTypes);
  var invite = _invite(sequelize, DataTypes);
  var line_item = _line_item(sequelize, DataTypes);
  var line_item_adjustment = _line_item_adjustment(sequelize, DataTypes);
  var line_item_tax_line = _line_item_tax_line(sequelize, DataTypes);
  var money_amount = _money_amount(sequelize, DataTypes);
  var note = _note(sequelize, DataTypes);
  var notification = _notification(sequelize, DataTypes);
  var notification_provider = _notification_provider(sequelize, DataTypes);
  var oauth = _oauth(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var order_discounts = _order_discounts(sequelize, DataTypes);
  var order_edit = _order_edit(sequelize, DataTypes);
  var order_gift_cards = _order_gift_cards(sequelize, DataTypes);
  var order_item_change = _order_item_change(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var payment_collection = _payment_collection(sequelize, DataTypes);
  var payment_collection_payments = _payment_collection_payments(sequelize, DataTypes);
  var payment_collection_sessions = _payment_collection_sessions(sequelize, DataTypes);
  var payment_provider = _payment_provider(sequelize, DataTypes);
  var payment_session = _payment_session(sequelize, DataTypes);
  var price_list = _price_list(sequelize, DataTypes);
  var price_list_customer_groups = _price_list_customer_groups(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_collection = _product_collection(sequelize, DataTypes);
  var product_images = _product_images(sequelize, DataTypes);
  var product_option = _product_option(sequelize, DataTypes);
  var product_option_value = _product_option_value(sequelize, DataTypes);
  var product_tag = _product_tag(sequelize, DataTypes);
  var product_tags = _product_tags(sequelize, DataTypes);
  var product_tax_rate = _product_tax_rate(sequelize, DataTypes);
  var product_type = _product_type(sequelize, DataTypes);
  var product_type_tax_rate = _product_type_tax_rate(sequelize, DataTypes);
  var product_variant = _product_variant(sequelize, DataTypes);
  var refund = _refund(sequelize, DataTypes);
  var region = _region(sequelize, DataTypes);
  var region_fulfillment_providers = _region_fulfillment_providers(sequelize, DataTypes);
  var region_payment_providers = _region_payment_providers(sequelize, DataTypes);
  var return_ = _return_(sequelize, DataTypes);
  var return_item = _return_item(sequelize, DataTypes);
  var return_reason = _return_reason(sequelize, DataTypes);
  var sales_channel = _sales_channel(sequelize, DataTypes);
  var shipping_method = _shipping_method(sequelize, DataTypes);
  var shipping_method_tax_line = _shipping_method_tax_line(sequelize, DataTypes);
  var shipping_option = _shipping_option(sequelize, DataTypes);
  var shipping_option_requirement = _shipping_option_requirement(sequelize, DataTypes);
  var shipping_profile = _shipping_profile(sequelize, DataTypes);
  var shipping_tax_rate = _shipping_tax_rate(sequelize, DataTypes);
  var staged_job = _staged_job(sequelize, DataTypes);
  var store = _store(sequelize, DataTypes);
  var store_currencies = _store_currencies(sequelize, DataTypes);
  var swap = _swap(sequelize, DataTypes);
  var tax_provider = _tax_provider(sequelize, DataTypes);
  var tax_rate = _tax_rate(sequelize, DataTypes);
  var tracking_link = _tracking_link(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  cart.belongsTo(address, { as: "billing_address", foreignKey: "billing_address_id"});
  address.hasMany(cart, { as: "carts", foreignKey: "billing_address_id"});
  cart.belongsTo(address, { as: "shipping_address", foreignKey: "shipping_address_id"});
  address.hasMany(cart, { as: "shipping_address_carts", foreignKey: "shipping_address_id"});
  claim_order.belongsTo(address, { as: "shipping_address", foreignKey: "shipping_address_id"});
  address.hasMany(claim_order, { as: "claim_orders", foreignKey: "shipping_address_id"});
  customer.belongsTo(address, { as: "billing_address", foreignKey: "billing_address_id"});
  address.hasMany(customer, { as: "billing_address_customers", foreignKey: "billing_address_id"});
  order.belongsTo(address, { as: "billing_address", foreignKey: "billing_address_id"});
  address.hasMany(order, { as: "orders", foreignKey: "billing_address_id"});
  order.belongsTo(address, { as: "shipping_address", foreignKey: "shipping_address_id"});
  address.hasMany(order, { as: "shipping_address_orders", foreignKey: "shipping_address_id"});
  swap.belongsTo(address, { as: "shipping_address", foreignKey: "shipping_address_id"});
  address.hasMany(swap, { as: "swaps", foreignKey: "shipping_address_id"});
  cart_discounts.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(cart_discounts, { as: "cart_discounts", foreignKey: "cart_id"});
  cart_gift_cards.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(cart_gift_cards, { as: "cart_gift_cards", foreignKey: "cart_id"});
  custom_shipping_option.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(custom_shipping_option, { as: "custom_shipping_options", foreignKey: "cart_id"});
  draft_order.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(draft_order, { as: "draft_orders", foreignKey: "cart_id"});
  line_item.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(line_item, { as: "line_items", foreignKey: "cart_id"});
  order.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(order, { as: "orders", foreignKey: "cart_id"});
  payment.belongsTo(cart, { as: "cart_cart", foreignKey: "cart_id"});
  cart.hasMany(payment, { as: "cart_payments", foreignKey: "cart_id"});
  payment_session.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(payment_session, { as: "payment_sessions", foreignKey: "cart_id"});
  shipping_method.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(shipping_method, { as: "shipping_methods", foreignKey: "cart_id"});
  swap.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(swap, { as: "swaps", foreignKey: "cart_id"});
  claim_image.belongsTo(claim_item, { as: "claim_item", foreignKey: "claim_item_id"});
  claim_item.hasMany(claim_image, { as: "claim_images", foreignKey: "claim_item_id"});
  claim_item_tags.belongsTo(claim_item, { as: "item", foreignKey: "item_id"});
  claim_item.hasMany(claim_item_tags, { as: "claim_item_tags", foreignKey: "item_id"});
  claim_item.belongsTo(claim_order, { as: "claim_order", foreignKey: "claim_order_id"});
  claim_order.hasMany(claim_item, { as: "claim_items", foreignKey: "claim_order_id"});
  fulfillment.belongsTo(claim_order, { as: "claim_order", foreignKey: "claim_order_id"});
  claim_order.hasMany(fulfillment, { as: "fulfillments", foreignKey: "claim_order_id"});
  line_item.belongsTo(claim_order, { as: "claim_order", foreignKey: "claim_order_id"});
  claim_order.hasMany(line_item, { as: "line_items", foreignKey: "claim_order_id"});
  return_.belongsTo(claim_order, { as: "claim_order", foreignKey: "claim_order_id"});
  claim_order.hasMany(return_, { as: "returns", foreignKey: "claim_order_id"});
  shipping_method.belongsTo(claim_order, { as: "claim_order", foreignKey: "claim_order_id"});
  claim_order.hasMany(shipping_method, { as: "shipping_methods", foreignKey: "claim_order_id"});
  claim_item_tags.belongsTo(claim_tag, { as: "tag", foreignKey: "tag_id"});
  claim_tag.hasMany(claim_item_tags, { as: "claim_item_tags", foreignKey: "tag_id"});
  address.belongsTo(country, { as: "country_code_country", foreignKey: "country_code"});
  country.hasMany(address, { as: "addresses", foreignKey: "country_code"});
  money_amount.belongsTo(currency, { as: "currency_code_currency", foreignKey: "currency_code"});
  currency.hasMany(money_amount, { as: "money_amounts", foreignKey: "currency_code"});
  order.belongsTo(currency, { as: "currency_code_currency", foreignKey: "currency_code"});
  currency.hasMany(order, { as: "orders", foreignKey: "currency_code"});
  payment.belongsTo(currency, { as: "currency_code_currency", foreignKey: "currency_code"});
  currency.hasMany(payment, { as: "payments", foreignKey: "currency_code"});
  payment_collection.belongsTo(currency, { as: "currency_code_currency", foreignKey: "currency_code"});
  currency.hasMany(payment_collection, { as: "payment_collections", foreignKey: "currency_code"});
  region.belongsTo(currency, { as: "currency_code_currency", foreignKey: "currency_code"});
  currency.hasMany(region, { as: "regions", foreignKey: "currency_code"});
  store.belongsTo(currency, { as: "default_currency_code_currency", foreignKey: "default_currency_code"});
  currency.hasMany(store, { as: "stores", foreignKey: "default_currency_code"});
  store_currencies.belongsTo(currency, { as: "currency_code_currency", foreignKey: "currency_code"});
  currency.hasMany(store_currencies, { as: "store_currencies", foreignKey: "currency_code"});
  address.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(address, { as: "addresses", foreignKey: "customer_id"});
  cart.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(cart, { as: "carts", foreignKey: "customer_id"});
  customer_group_customers.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(customer_group_customers, { as: "customer_group_customers", foreignKey: "customer_id"});
  notification.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(notification, { as: "notifications", foreignKey: "customer_id"});
  order.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(order, { as: "orders", foreignKey: "customer_id"});
  customer_group_customers.belongsTo(customer_group, { as: "customer_group", foreignKey: "customer_group_id"});
  customer_group.hasMany(customer_group_customers, { as: "customer_group_customers", foreignKey: "customer_group_id"});
  discount_condition_customer_group.belongsTo(customer_group, { as: "customer_group", foreignKey: "customer_group_id"});
  customer_group.hasMany(discount_condition_customer_group, { as: "discount_condition_customer_groups", foreignKey: "customer_group_id"});
  price_list_customer_groups.belongsTo(customer_group, { as: "customer_group", foreignKey: "customer_group_id"});
  customer_group.hasMany(price_list_customer_groups, { as: "price_list_customer_groups", foreignKey: "customer_group_id"});
  cart_discounts.belongsTo(discount, { as: "discount", foreignKey: "discount_id"});
  discount.hasMany(cart_discounts, { as: "cart_discounts", foreignKey: "discount_id"});
  discount.belongsTo(discount, { as: "parent_discount", foreignKey: "parent_discount_id"});
  discount.hasMany(discount, { as: "discounts", foreignKey: "parent_discount_id"});
  discount_regions.belongsTo(discount, { as: "discount", foreignKey: "discount_id"});
  discount.hasMany(discount_regions, { as: "discount_regions", foreignKey: "discount_id"});
  line_item_adjustment.belongsTo(discount, { as: "discount", foreignKey: "discount_id"});
  discount.hasMany(line_item_adjustment, { as: "line_item_adjustments", foreignKey: "discount_id"});
  order_discounts.belongsTo(discount, { as: "discount", foreignKey: "discount_id"});
  discount.hasMany(order_discounts, { as: "order_discounts", foreignKey: "discount_id"});
  discount_condition_customer_group.belongsTo(discount_condition, { as: "condition", foreignKey: "condition_id"});
  discount_condition.hasMany(discount_condition_customer_group, { as: "discount_condition_customer_groups", foreignKey: "condition_id"});
  discount_condition_product.belongsTo(discount_condition, { as: "condition", foreignKey: "condition_id"});
  discount_condition.hasMany(discount_condition_product, { as: "discount_condition_products", foreignKey: "condition_id"});
  discount_condition_product_collection.belongsTo(discount_condition, { as: "condition", foreignKey: "condition_id"});
  discount_condition.hasMany(discount_condition_product_collection, { as: "discount_condition_product_collections", foreignKey: "condition_id"});
  discount_condition_product_tag.belongsTo(discount_condition, { as: "condition", foreignKey: "condition_id"});
  discount_condition.hasMany(discount_condition_product_tag, { as: "discount_condition_product_tags", foreignKey: "condition_id"});
  discount_condition_product_type.belongsTo(discount_condition, { as: "condition", foreignKey: "condition_id"});
  discount_condition.hasMany(discount_condition_product_type, { as: "discount_condition_product_types", foreignKey: "condition_id"});
  discount.belongsTo(discount_rule, { as: "rule", foreignKey: "rule_id"});
  discount_rule.hasMany(discount, { as: "discounts", foreignKey: "rule_id"});
  discount_condition.belongsTo(discount_rule, { as: "discount_rule", foreignKey: "discount_rule_id"});
  discount_rule.hasMany(discount_condition, { as: "discount_conditions", foreignKey: "discount_rule_id"});
  order.belongsTo(draft_order, { as: "draft_order_draft_order", foreignKey: "draft_order_id"});
  draft_order.hasMany(order, { as: "draft_order_orders", foreignKey: "draft_order_id"});
  fulfillment_item.belongsTo(fulfillment, { as: "fulfillment", foreignKey: "fulfillment_id"});
  fulfillment.hasMany(fulfillment_item, { as: "fulfillment_items", foreignKey: "fulfillment_id"});
  tracking_link.belongsTo(fulfillment, { as: "fulfillment", foreignKey: "fulfillment_id"});
  fulfillment.hasMany(tracking_link, { as: "tracking_links", foreignKey: "fulfillment_id"});
  fulfillment.belongsTo(fulfillment_provider, { as: "provider", foreignKey: "provider_id"});
  fulfillment_provider.hasMany(fulfillment, { as: "fulfillments", foreignKey: "provider_id"});
  region_fulfillment_providers.belongsTo(fulfillment_provider, { as: "provider", foreignKey: "provider_id"});
  fulfillment_provider.hasMany(region_fulfillment_providers, { as: "region_fulfillment_providers", foreignKey: "provider_id"});
  shipping_option.belongsTo(fulfillment_provider, { as: "provider", foreignKey: "provider_id"});
  fulfillment_provider.hasMany(shipping_option, { as: "shipping_options", foreignKey: "provider_id"});
  cart_gift_cards.belongsTo(gift_card, { as: "gift_card", foreignKey: "gift_card_id"});
  gift_card.hasMany(cart_gift_cards, { as: "cart_gift_cards", foreignKey: "gift_card_id"});
  gift_card_transaction.belongsTo(gift_card, { as: "gift_card", foreignKey: "gift_card_id"});
  gift_card.hasMany(gift_card_transaction, { as: "gift_card_transactions", foreignKey: "gift_card_id"});
  order_gift_cards.belongsTo(gift_card, { as: "gift_card", foreignKey: "gift_card_id"});
  gift_card.hasMany(order_gift_cards, { as: "order_gift_cards", foreignKey: "gift_card_id"});
  product_images.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(product_images, { as: "product_images", foreignKey: "image_id"});
  claim_item.belongsTo(line_item, { as: "item", foreignKey: "item_id"});
  line_item.hasMany(claim_item, { as: "claim_items", foreignKey: "item_id"});
  fulfillment_item.belongsTo(line_item, { as: "item", foreignKey: "item_id"});
  line_item.hasMany(fulfillment_item, { as: "fulfillment_items", foreignKey: "item_id"});
  line_item_adjustment.belongsTo(line_item, { as: "item", foreignKey: "item_id"});
  line_item.hasMany(line_item_adjustment, { as: "line_item_adjustments", foreignKey: "item_id"});
  line_item_tax_line.belongsTo(line_item, { as: "item", foreignKey: "item_id"});
  line_item.hasMany(line_item_tax_line, { as: "line_item_tax_lines", foreignKey: "item_id"});
  order_item_change.belongsTo(line_item, { as: "original_line_item", foreignKey: "original_line_item_id"});
  line_item.hasMany(order_item_change, { as: "order_item_changes", foreignKey: "original_line_item_id"});
  order_item_change.belongsTo(line_item, { as: "line_item", foreignKey: "line_item_id"});
  line_item.hasMany(order_item_change, { as: "line_item_order_item_changes", foreignKey: "line_item_id"});
  return_item.belongsTo(line_item, { as: "item", foreignKey: "item_id"});
  line_item.hasMany(return_item, { as: "return_items", foreignKey: "item_id"});
  notification.belongsTo(notification, { as: "parent", foreignKey: "parent_id"});
  notification.hasMany(notification, { as: "notifications", foreignKey: "parent_id"});
  notification.belongsTo(notification_provider, { as: "provider", foreignKey: "provider_id"});
  notification_provider.hasMany(notification, { as: "notifications", foreignKey: "provider_id"});
  claim_order.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(claim_order, { as: "claim_orders", foreignKey: "order_id"});
  draft_order.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(draft_order, { as: "draft_orders", foreignKey: "order_id"});
  fulfillment.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(fulfillment, { as: "fulfillments", foreignKey: "order_id"});
  gift_card.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(gift_card, { as: "gift_cards", foreignKey: "order_id"});
  gift_card_transaction.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(gift_card_transaction, { as: "gift_card_transactions", foreignKey: "order_id"});
  line_item.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(line_item, { as: "line_items", foreignKey: "order_id"});
  order_discounts.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(order_discounts, { as: "order_discounts", foreignKey: "order_id"});
  order_edit.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(order_edit, { as: "order_edits", foreignKey: "order_id"});
  order_gift_cards.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(order_gift_cards, { as: "order_gift_cards", foreignKey: "order_id"});
  payment.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(payment, { as: "payments", foreignKey: "order_id"});
  refund.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(refund, { as: "refunds", foreignKey: "order_id"});
  return_.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(return_, { as: "returns", foreignKey: "order_id"});
  shipping_method.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(shipping_method, { as: "shipping_methods", foreignKey: "order_id"});
  swap.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(swap, { as: "swaps", foreignKey: "order_id"});
  order_item_change.belongsTo(order_edit, { as: "order_edit", foreignKey: "order_edit_id"});
  order_edit.hasMany(order_item_change, { as: "order_item_changes", foreignKey: "order_edit_id"});
  cart.belongsTo(payment, { as: "payment", foreignKey: "payment_id"});
  payment.hasMany(cart, { as: "carts", foreignKey: "payment_id"});
  payment_collection_payments.belongsTo(payment, { as: "payment", foreignKey: "payment_id"});
  payment.hasMany(payment_collection_payments, { as: "payment_collection_payments", foreignKey: "payment_id"});
  order_edit.belongsTo(payment_collection, { as: "payment_collection", foreignKey: "payment_collection_id"});
  payment_collection.hasMany(order_edit, { as: "order_edits", foreignKey: "payment_collection_id"});
  payment_collection_payments.belongsTo(payment_collection, { as: "payment_collection", foreignKey: "payment_collection_id"});
  payment_collection.hasMany(payment_collection_payments, { as: "payment_collection_payments", foreignKey: "payment_collection_id"});
  payment_collection_sessions.belongsTo(payment_collection, { as: "payment_collection", foreignKey: "payment_collection_id"});
  payment_collection.hasMany(payment_collection_sessions, { as: "payment_collection_sessions", foreignKey: "payment_collection_id"});
  region_payment_providers.belongsTo(payment_provider, { as: "provider", foreignKey: "provider_id"});
  payment_provider.hasMany(region_payment_providers, { as: "region_payment_providers", foreignKey: "provider_id"});
  payment_collection_sessions.belongsTo(payment_session, { as: "payment_session", foreignKey: "payment_session_id"});
  payment_session.hasMany(payment_collection_sessions, { as: "payment_collection_sessions", foreignKey: "payment_session_id"});
  money_amount.belongsTo(price_list, { as: "price_list", foreignKey: "price_list_id"});
  price_list.hasMany(money_amount, { as: "money_amounts", foreignKey: "price_list_id"});
  price_list_customer_groups.belongsTo(price_list, { as: "price_list", foreignKey: "price_list_id"});
  price_list.hasMany(price_list_customer_groups, { as: "price_list_customer_groups", foreignKey: "price_list_id"});
  discount_condition_product.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(discount_condition_product, { as: "discount_condition_products", foreignKey: "product_id"});
  product_images.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_images, { as: "product_images", foreignKey: "product_id"});
  product_option.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_option, { as: "product_options", foreignKey: "product_id"});
  product_tags.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_tags, { as: "product_tags", foreignKey: "product_id"});
  product_tax_rate.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_tax_rate, { as: "product_tax_rates", foreignKey: "product_id"});
  product_variant.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_variant, { as: "product_variants", foreignKey: "product_id"});
  discount_condition_product_collection.belongsTo(product_collection, { as: "product_collection", foreignKey: "product_collection_id"});
  product_collection.hasMany(discount_condition_product_collection, { as: "discount_condition_product_collections", foreignKey: "product_collection_id"});
  product.belongsTo(product_collection, { as: "collection", foreignKey: "collection_id"});
  product_collection.hasMany(product, { as: "products", foreignKey: "collection_id"});
  product_option_value.belongsTo(product_option, { as: "option", foreignKey: "option_id"});
  product_option.hasMany(product_option_value, { as: "product_option_values", foreignKey: "option_id"});
  discount_condition_product_tag.belongsTo(product_tag, { as: "product_tag", foreignKey: "product_tag_id"});
  product_tag.hasMany(discount_condition_product_tag, { as: "discount_condition_product_tags", foreignKey: "product_tag_id"});
  product_tags.belongsTo(product_tag, { as: "product_tag", foreignKey: "product_tag_id"});
  product_tag.hasMany(product_tags, { as: "product_tags", foreignKey: "product_tag_id"});
  discount_condition_product_type.belongsTo(product_type, { as: "product_type", foreignKey: "product_type_id"});
  product_type.hasMany(discount_condition_product_type, { as: "discount_condition_product_types", foreignKey: "product_type_id"});
  product.belongsTo(product_type, { as: "type", foreignKey: "type_id"});
  product_type.hasMany(product, { as: "products", foreignKey: "type_id"});
  product_type_tax_rate.belongsTo(product_type, { as: "product_type", foreignKey: "product_type_id"});
  product_type.hasMany(product_type_tax_rate, { as: "product_type_tax_rates", foreignKey: "product_type_id"});
  claim_item.belongsTo(product_variant, { as: "variant", foreignKey: "variant_id"});
  product_variant.hasMany(claim_item, { as: "claim_items", foreignKey: "variant_id"});
  line_item.belongsTo(product_variant, { as: "variant", foreignKey: "variant_id"});
  product_variant.hasMany(line_item, { as: "line_items", foreignKey: "variant_id"});
  money_amount.belongsTo(product_variant, { as: "variant", foreignKey: "variant_id"});
  product_variant.hasMany(money_amount, { as: "money_amounts", foreignKey: "variant_id"});
  product_option_value.belongsTo(product_variant, { as: "variant", foreignKey: "variant_id"});
  product_variant.hasMany(product_option_value, { as: "product_option_values", foreignKey: "variant_id"});
  cart.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(cart, { as: "carts", foreignKey: "region_id"});
  country.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(country, { as: "countries", foreignKey: "region_id"});
  discount_regions.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(discount_regions, { as: "discount_regions", foreignKey: "region_id"});
  gift_card.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(gift_card, { as: "gift_cards", foreignKey: "region_id"});
  money_amount.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(money_amount, { as: "money_amounts", foreignKey: "region_id"});
  order.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(order, { as: "orders", foreignKey: "region_id"});
  payment_collection.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(payment_collection, { as: "payment_collections", foreignKey: "region_id"});
  region_fulfillment_providers.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(region_fulfillment_providers, { as: "region_fulfillment_providers", foreignKey: "region_id"});
  region_payment_providers.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(region_payment_providers, { as: "region_payment_providers", foreignKey: "region_id"});
  shipping_option.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(shipping_option, { as: "shipping_options", foreignKey: "region_id"});
  tax_rate.belongsTo(region, { as: "region", foreignKey: "region_id"});
  region.hasMany(tax_rate, { as: "tax_rates", foreignKey: "region_id"});
  return_item.belongsTo(return_, { as: "return", foreignKey: "return_id"});
  return_.hasMany(return_item, { as: "return_items", foreignKey: "return_id"});
  shipping_method.belongsTo(return_, { as: "return", foreignKey: "return_id"});
  return_.hasMany(shipping_method, { as: "shipping_methods", foreignKey: "return_id"});
  return_item.belongsTo(return_reason, { as: "reason", foreignKey: "reason_id"});
  return_reason.hasMany(return_item, { as: "return_items", foreignKey: "reason_id"});
  return_reason.belongsTo(return_reason, { as: "parent_return_reason", foreignKey: "parent_return_reason_id"});
  return_reason.hasMany(return_reason, { as: "return_reasons", foreignKey: "parent_return_reason_id"});
  shipping_method_tax_line.belongsTo(shipping_method, { as: "shipping_method", foreignKey: "shipping_method_id"});
  shipping_method.hasMany(shipping_method_tax_line, { as: "shipping_method_tax_lines", foreignKey: "shipping_method_id"});
  custom_shipping_option.belongsTo(shipping_option, { as: "shipping_option", foreignKey: "shipping_option_id"});
  shipping_option.hasMany(custom_shipping_option, { as: "custom_shipping_options", foreignKey: "shipping_option_id"});
  shipping_method.belongsTo(shipping_option, { as: "shipping_option", foreignKey: "shipping_option_id"});
  shipping_option.hasMany(shipping_method, { as: "shipping_methods", foreignKey: "shipping_option_id"});
  shipping_option_requirement.belongsTo(shipping_option, { as: "shipping_option", foreignKey: "shipping_option_id"});
  shipping_option.hasMany(shipping_option_requirement, { as: "shipping_option_requirements", foreignKey: "shipping_option_id"});
  shipping_tax_rate.belongsTo(shipping_option, { as: "shipping_option", foreignKey: "shipping_option_id"});
  shipping_option.hasMany(shipping_tax_rate, { as: "shipping_tax_rates", foreignKey: "shipping_option_id"});
  product.belongsTo(shipping_profile, { as: "profile", foreignKey: "profile_id"});
  shipping_profile.hasMany(product, { as: "products", foreignKey: "profile_id"});
  shipping_option.belongsTo(shipping_profile, { as: "profile", foreignKey: "profile_id"});
  shipping_profile.hasMany(shipping_option, { as: "shipping_options", foreignKey: "profile_id"});
  store_currencies.belongsTo(store, { as: "store", foreignKey: "store_id"});
  store.hasMany(store_currencies, { as: "store_currencies", foreignKey: "store_id"});
  fulfillment.belongsTo(swap, { as: "swap", foreignKey: "swap_id"});
  swap.hasMany(fulfillment, { as: "fulfillments", foreignKey: "swap_id"});
  line_item.belongsTo(swap, { as: "swap", foreignKey: "swap_id"});
  swap.hasMany(line_item, { as: "line_items", foreignKey: "swap_id"});
  payment.belongsTo(swap, { as: "swap", foreignKey: "swap_id"});
  swap.hasMany(payment, { as: "payments", foreignKey: "swap_id"});
  return_.belongsTo(swap, { as: "swap", foreignKey: "swap_id"});
  swap.hasMany(return_, { as: "returns", foreignKey: "swap_id"});
  shipping_method.belongsTo(swap, { as: "swap", foreignKey: "swap_id"});
  swap.hasMany(shipping_method, { as: "shipping_methods", foreignKey: "swap_id"});
  region.belongsTo(tax_provider, { as: "tax_provider", foreignKey: "tax_provider_id"});
  tax_provider.hasMany(region, { as: "regions", foreignKey: "tax_provider_id"});
  product_tax_rate.belongsTo(tax_rate, { as: "rate", foreignKey: "rate_id"});
  tax_rate.hasMany(product_tax_rate, { as: "product_tax_rates", foreignKey: "rate_id"});
  product_type_tax_rate.belongsTo(tax_rate, { as: "rate", foreignKey: "rate_id"});
  tax_rate.hasMany(product_type_tax_rate, { as: "product_type_tax_rates", foreignKey: "rate_id"});
  shipping_tax_rate.belongsTo(tax_rate, { as: "rate", foreignKey: "rate_id"});
  tax_rate.hasMany(shipping_tax_rate, { as: "shipping_tax_rates", foreignKey: "rate_id"});
  batch_job.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(batch_job, { as: "batch_jobs", foreignKey: "created_by"});
  note.belongsTo(user, { as: "author", foreignKey: "author_id"});
  user.hasMany(note, { as: "notes", foreignKey: "author_id"});

  return {
    address,
    batch_job,
    cart,
    cart_discounts,
    cart_gift_cards,
    claim_image,
    claim_item,
    claim_item_tags,
    claim_order,
    claim_tag,
    country,
    currency,
    custom_shipping_option,
    customer,
    customer_group,
    customer_group_customers,
    discount,
    discount_condition,
    discount_condition_customer_group,
    discount_condition_product,
    discount_condition_product_collection,
    discount_condition_product_tag,
    discount_condition_product_type,
    discount_regions,
    discount_rule,
    draft_order,
    fulfillment,
    fulfillment_item,
    fulfillment_provider,
    gift_card,
    gift_card_transaction,
    idempotency_key,
    image,
    invite,
    line_item,
    line_item_adjustment,
    line_item_tax_line,
    money_amount,
    note,
    notification,
    notification_provider,
    oauth,
    order,
    order_discounts,
    order_edit,
    order_gift_cards,
    order_item_change,
    payment,
    payment_collection,
    payment_collection_payments,
    payment_collection_sessions,
    payment_provider,
    payment_session,
    price_list,
    price_list_customer_groups,
    product,
    product_collection,
    product_images,
    product_option,
    product_option_value,
    product_tag,
    product_tags,
    product_tax_rate,
    product_type,
    product_type_tax_rate,
    product_variant,
    refund,
    region,
    region_fulfillment_providers,
    region_payment_providers,
    return_,
    return_item,
    return_reason,
    sales_channel,
    shipping_method,
    shipping_method_tax_line,
    shipping_option,
    shipping_option_requirement,
    shipping_profile,
    shipping_tax_rate,
    staged_job,
    store,
    store_currencies,
    swap,
    tax_provider,
    tax_rate,
    tracking_link,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
