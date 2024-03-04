---
title: Frequently Asked Questions
description: Learn to create a VaultDB HUB site in minutes.
categories: [Frequently Asked Questions]
keywords: [quick start,faq]
menu:
  docs:
    parent: getting-started
    weight: 20
weight: 20
toc: true
aliases: [/faq/,/overview/faq/]
---

## What is VaultDB?

VaultDB is the in-process database that allows aany process to utilize local compute capability for query and data processing instead of relying on a centralized database server which becomes a bottleneck in distributed computing environments. VaultDB and VaultDB HUB data lakes are perfect for distributed cloud processes and on IoT devices.

Each processes uses VaultDB library (python, nodejs, odjbc, jdbc) for data access and processing and once ready pushes data to centralized VaultDB HUB.

VaultDB also has built In GRC capability that allows users to secure data and access. In short VaultDB frees models, business applications and Internet of Things (IoT) through in-process database with centralized VaultDB Hub data lake.

VaultDB is perfect tool for ETL using tools such as AWS glue as it supports different input formats such as CSV, parquet, json etc. Vectorization is used to support faster data processing for ETL type of work.

## How much does VaultDB Cost?

VaultDB is free to use. We do not charge anything. You pay for storage and compute you use to your cloud provider.

## Why should I consider using VaultDB for my IoT devices?

IoT devices generate vast amount of data real-time which is invaluable for the organizations and individuals. This data maybe a perfect source tyo train AI/AGI models.

VaultDB is perfect for this type of use cases as it provides local writes when device is disconnected and has push ability to send data to centralized VaultDB Data lake.

Your IoT devices can also use VaultDB to query merged local and centralized data at the speed.

VaultDB is highly cost effective as you only have to bear storage cost as there is no server running all the time.

## Why should I consider using VaultDB for Model training testing?

Machine Learning Model training and testing requires lot of data preparation, data engineering and security.

VaultDB is built on DuckDB which is built for big Data analytics and data engineering. VaultDB Python package is integrated with pandas and numpy and makes data processing multiple folds faster as it uses Vectorization. VaultDB also supports PyArrow and so many more extensions supported by DuckDB.

VaultDB Governance, Risk and Control capability such as Fortress, Column level security, Roles helps in preventing model bias and unnecessary PI or PII information during training.

VaultDB also allows you to partition tables for faster processing of data, which is paramount in the world where GPU and CPU compute costs are astronomical.

## What is Data Inheritance?

Your Local vaultDB instance works like a database server that returns merged results from remote and local dataset. this way you can develop like you are working in production. just enable data inheritance to true and see the magic. you can even hide remote rows you are inheriting from remote for your local testing.

## Why VaultDB?

Because of so many reasons but to list few VaultDB Does following:--

1) Written in C++ so it's very faster
2) Built in support to read and write parquet, csv, json etc files
3) Integrated with pandas, numpy, PyArrow
4) supports all extensions supported by DuckDB
5) Works on all platforms (Windows, Linux, Mac)
6) Allows you to use your laptop/desktop resources instead of using cloud for everything
7) Did I say it costs you pennies to run.
8) Allows you to develop like you are working in Production.

## License

All Images and Text copyright VaultDB.ai LLC
