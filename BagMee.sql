CREATE TYPE "orders_status" AS ENUM (
  'picked_up',
  'accepted',
  'out_for_delivery',
  'delivered'
);

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "mobile_no" int UNIQUE,
  "blocked" boolean
);

CREATE TABLE "user_address" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "first_name" varchar,
  "last_name" varchar,
  "street_address" varchar,
  "city" varchar,
  "state" varchar,
  "zip_code" int,
  "alias" varchar,
  "poc_no" int
);

CREATE TABLE "cart" (
  "id" SERIAL PRIMARY KEY,
  "product" int,
  "user_id" int NOT NULL,
  "total_cost" int,
  "shipping_cost" int,
  "total_discount" int,
  "vouchers" int
);

CREATE TABLE "category" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "grouped_under" varchar,
  "icon" varchar
);

CREATE TABLE "product_categories_junction" (
  "id" SERIAL PRIMARY KEY,
  "product_id" int NOT NULL,
  "category_id" int NOT NULL
);

CREATE TABLE "product_quantity" (
  "id" SERIAL PRIMARY KEY,
  "product_id" int NOT NULL,
  "product_qty" int
);

CREATE TABLE "wishlist" (
  "id" SERIAL PRIMARY KEY,
  "product" int,
  "user_id" int NOT NULL
);

CREATE TABLE "voucher" (
  "id" SERIAL PRIMARY KEY,
  "voucher_no" varchar UNIQUE,
  "cost" int,
  "user_id" int,
  "validity_date" date
);

CREATE TABLE "order" (
  "id" SERIAL PRIMARY KEY,
  "approved" boolean,
  "status" orders_status,
  "products" int NOT NULL,
  "store_ids" int NOT NULL,
  "total_cost" int,
  "total_discount" int,
  "shipping_cost" int,
  "total_tax" int,
  "user_id" int NOT NULL,
  "user_address" varchar,
  "driver_id" int NOT NULL,
  "shipping_ref_no" varchar,
  "order_date" timestamp,
  "shipping_provider" varchar
);

CREATE TABLE "driver" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "mobile_no" int UNIQUE,
  "blocked" boolean,
  "approved" boolean,
  "currently_delivering" boolean
);

CREATE TABLE "store" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "blocked" boolean,
  "approved" boolean,
  "lat" int,
  "lng" int,
  "address" varchar
);

CREATE TABLE "store_document" (
  "id" SERIAL PRIMARY KEY,
  "store_id" int NOT NULL,
  "document" varchar
);

CREATE TABLE "driver_document" (
  "id" SERIAL PRIMARY KEY,
  "driver_id" int NOT NULL,
  "document" varchar
);

CREATE TABLE "product" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar,
  "description" varchar,
  "cost" float,
  "mrp" float,
  "tax" float,
  "total_cost" float,
  "discount" float,
  "store_id" int NOT NULL,
  "discounted_cost" float
);

CREATE TABLE "product_image" (
  "id" SERIAL PRIMARY KEY,
  "product_id" int NOT NULL,
  "image" varchar
);

CREATE TABLE "product_type" (
  "id" SERIAL PRIMARY KEY,
  "type" varchar,
  "type_name" varchar
);

CREATE TABLE "product_types_junction" (
  "id" SERIAL PRIMARY KEY,
  "product_type_id" int NOT NULL,
  "product_id" int NOT NULL
);

CREATE TABLE "product_rating" (
  "id" SERIAL PRIMARY KEY,
  "product_id" int NOT NULL,
  "rating" float,
  "user_id" int
);

ALTER TABLE "cart" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "cart" ADD FOREIGN KEY ("vouchers") REFERENCES "voucher" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("products") REFERENCES "product" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("store_ids") REFERENCES "store" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "wishlist" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "product_quantity" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "cart" ADD FOREIGN KEY ("product") REFERENCES "product_quantity" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("store_id") REFERENCES "store" ("id");

ALTER TABLE "store_document" ADD FOREIGN KEY ("store_id") REFERENCES "store" ("id");

ALTER TABLE "driver_document" ADD FOREIGN KEY ("driver_id") REFERENCES "driver" ("id");

ALTER TABLE "user_address" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "product_image" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "product_types_junction" ADD FOREIGN KEY ("product_type_id") REFERENCES "product" ("id");

ALTER TABLE "product_types_junction" ADD FOREIGN KEY ("product_id") REFERENCES "product_type" ("id");

ALTER TABLE "product_categories_junction" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "product_categories_junction" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

ALTER TABLE "product_rating" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("driver_id") REFERENCES "driver" ("id");

ALTER TABLE "product_rating" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "voucher" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "wishlist" ADD FOREIGN KEY ("product") REFERENCES "product_quantity" ("id");
