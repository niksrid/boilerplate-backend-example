CREATE TABLE "invoiceItem" (
  "id" SERIAL PRIMARY KEY,
  "itemDesc" varchar(50),
  "sacCode" int,
  "quantity" varchar(50),
  "rate" int,
  "discount" int
);

CREATE TABLE "invoices" (
  "id" SERIAL PRIMARY KEY,
  "companyName" varchar(50),
  "invoiceNo" varchar(50),
  "invoiceRefNo" varchar(50),
  "invoiceRefDesc" varchar(50),
  "invoiceAmt" integer,
  "invoiceItems" varchar(50),
  "generatedData" timestamp,
  "dueDate" timestamp,
  "paidFlag" boolean,
  "archiveFlag" boolean,
  "countryOfSupply" varchar(50),
  "placeOfSupply" varchar(50),
  "createdByUser" int
);

CREATE TABLE "contacts" (
  "nameId" int,
  "id" SERIAL PRIMARY KEY,
  "contactName" varchar(50),
  "contactGst" varchar(50),
  "contactBillingAddress" varchar(50),
  "contactShippingAddress" varchar(50),
  "contactCountry" varchar(50),
  "contactPlace" varchar(50),
  "contactLeadSource" varchar(50),
  "contactLeadStatus" varchar(50),
  "createdByUser" int
);

CREATE TABLE "notifications" (
  "id" SERIAL PRIMARY KEY,
  "notificationTitle" varchar(50),
  "notificationDate" timestamp,
  "notificationContext" varchar(50),
  "notificationIntent" int,
  "fromUser" int
);

CREATE TABLE "jarvisUsers" (
  "id" SERIAL PRIMARY KEY,
  "email" varchar(50),
  "password" varchar(50),
  "imageUrl" varchar(50)
);

ALTER TABLE "invoiceItem" ADD FOREIGN KEY ("id") REFERENCES "invoices" ("invoiceItems");

ALTER TABLE "invoices" ADD FOREIGN KEY ("createdByUser") REFERENCES "jarvisUsers" ("id");

ALTER TABLE "contacts" ADD FOREIGN KEY ("nameId") REFERENCES "invoices" ("id");

ALTER TABLE "contacts" ADD FOREIGN KEY ("contactLeadSource") REFERENCES "contacts" ("id");

ALTER TABLE "contacts" ADD FOREIGN KEY ("createdByUser") REFERENCES "jarvisUsers" ("id");

ALTER TABLE "notifications" ADD FOREIGN KEY ("fromUser") REFERENCES "jarvisUsers" ("id");
