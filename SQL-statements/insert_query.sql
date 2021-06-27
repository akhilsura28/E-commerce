
insert into product_category(category_name) values ('BOOKS'); 

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES ('BOOK-TECH-1003', 'Java Script', 'Learn JavaScript',
'assets/images/products/placeholder.png'
,1,100,19.99,1, NOW());

