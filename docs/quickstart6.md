---
title: Query Local and Remote Data locally
description: Learn to Query Local and Remote Data locally.
categories: [getting started]
keywords: [quick start,usage]
menu:
  docs:
    parent: getting-started
    weight: 20
weight: 20
toc: true
aliases: [/quickstart6/,/overview/quickstart6/]
pagination_next: quickstart7
pagination_prev: quickstart5
---

# 6. Query Local and Remote Data locally

7. Secure Data with Fortress, Tags and Roles

## Prerequisites

You must also be comfortable working with relational databases and aws.

You must also be comfortable working from the command line.

This repository contains the VaultDB ai platform aws quickstart templates.

## 1. Create VaultDB HUB

### Create Service Role

Click the link below to launch stack to create a service role that gets used to create vaultdb HUB in your aws account.

#### [![Launch stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?#/stacks/new?stackName=vaultdb-service-role&templateURL=https://vaultdb-web.s3.us-east-2.amazonaws.com/awsquickstart/service-role.yaml)

#### AWS CLI Commands

you can also use aws cli commands to create and update the service role.

##### Create Cloud Formation Service Role with  to

    awsv2 cloudformation create-stack --stack-name vaultdb-service-role --template-body https://s3.amazonaws.com/vaultdb-web/awsquickstart/service-role.yaml --capabilities CAPABILITY_NAMED_IAM

##### Update Service Role

    awsv2 cloudformation update-stack --stack-name vaultdb-service-role --template-body https://s3.amazonaws.com/vaultdb-web/awsquickstart/service-role.yaml --capabilities CAPABILITY_NAMED_IAM

### Deploy VaultDB Instance

### Note: Make sure to pick the vaultdb_cloudformation_service_role

### [![Launch stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?#/stacks/new?stackName=vaultdb-development-instance&templateURL=https://vaultdb-web.s3.us-east-2.amazonaws.com/awsquickstart/vaultdb.yaml)

### AWS CLI Command to Create VaultDB Instance

    awsv2 cloudformation create-stack --stack-name [APPLICATION-STACK-NAME] --role-arn "arn:aws:iam::[AWS-ACCOUNT-NUMBER]:role/vaultdb_cloudformation_service_role" --template-url https://vaultdb-web.s3.us-east-2.amazonaws.com/awsquickstart/vaultdb.yaml --parameters ParameterKey="AdminEmail",ParameterValue="[APPLICATION-ADMIN-EMAIL-ADDRESS]" ParameterKey="PrimarySubnetAZ",ParameterValue="us-east-1a" ParameterKey="CidrBlock",ParameterValue="10.0.0.0/16" ParameterKey="PrivateSubnetCIDR",ParameterValue="10.0.20.0/24" ParameterKey="BucketName",ParameterValue="vaultdb-web" --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND

    Values you can use:--
        APPLICATION-STACK-NAME
            Pick a Uniquename for your installation and append test/dev/uat/prod etc to diffrentiate between different environments.
        AWS-ACCOUNT-NUMBER
            AWS Account number
        APPLICATION-ADMIN-EMAIL-ADDRESS
            this email will receive the user passwords and instructions on how to start using VAULTDB ai platform.
        VPC-ID
            Provide the VPC ID if you have one and wants to use that otherwise remove the parameter all together or provide empty value
        VPC-CIDR-BLOCK
            10.0.0.0/16

## Delete/ Uninstall

awsv2 cloudformation delete-stack --stack-name [APPLICATION-STACK-NAME]

## Example

### create sample

awsv2 cloudformation update-stack --stack-name dev --role-arn "arn:aws:iam::[AWS-ACCOUNT-NUMBER]:role/vaultdb_cloudformation_service_role" --template-url <https://vaultdb-web.s3.us-east-2.amazonaws.com/awsquickstart/vaultdb.yaml> --parameters ParameterKey="AdminEmail",ParameterValue="<vaultdb@outlook.com>" ParameterKey="PrimarySubnetAZ",ParameterValue="us-east-1a" ParameterKey="ExistingVpcID",ParameterValue="vpc-053032fa3ede15b8b" ParameterKey="PrivateSubnetCIDR",ParameterValue="172.31.200.0/20" ParameterKey="BucketName",ParameterValue="vaultdb-web" --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND

### Delete/ Uninstall sample

awsv2 cloudformation delete-stack --stack-name dev

## License

All Images and Text copyright VaultDB.ai LLC
