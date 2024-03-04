"use strict";(self.webpackChunkVaultDB_ai=self.webpackChunkVaultDB_ai||[]).push([[949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,v=d["".concat(i,".").concat(p)]||d[p]||m[p]||l;return a?r.createElement(v,o(o({ref:t},u),{},{components:a})):r.createElement(v,o({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={title:"Secure Data with Fortress, Tags and Roles",description:"Learn to Secure Data with Fortress, Tags and Roles in VaultDB.",categories:["getting started"],keywords:["quick start","usage"],menu:{docs:{parent:"getting-started",weight:20}},weight:20,toc:!0,aliases:["/quickstart7/","/overview/quickstart7/"],pagination_next:"coming-soon",pagination_prev:"quickstart6"},o="7. Secure Data with Fortress, Tags and Roles",s={unversionedId:"quickstart7",id:"quickstart7",title:"Secure Data with Fortress, Tags and Roles",description:"Learn to Secure Data with Fortress, Tags and Roles in VaultDB.",source:"@site/docs/quickstart7.md",sourceDirName:".",slug:"/quickstart7",permalink:"/quickstart7",draft:!1,editUrl:"https://github.dev/vaultdbai/vaultdb-docs/blob/master/docs/quickstart7.md",tags:[],version:"current",frontMatter:{title:"Secure Data with Fortress, Tags and Roles",description:"Learn to Secure Data with Fortress, Tags and Roles in VaultDB.",categories:["getting started"],keywords:["quick start","usage"],menu:{docs:{parent:"getting-started",weight:20}},weight:20,toc:!0,aliases:["/quickstart7/","/overview/quickstart7/"],pagination_next:"coming-soon",pagination_prev:"quickstart6"},previous:{title:"Query Local and Remote Data locally",permalink:"/quickstart6"},next:{title:"Coming Soon",permalink:"/coming-soon"}},i={},c=[{value:"Create Service Role",id:"create-service-role",level:2},{value:"Launch stack",id:"launch-stack",level:3},{value:"AWS CLI Commands",id:"aws-cli-commands",level:3},{value:"Create Cloud Formation Service Role with  to",id:"create-cloud-formation-service-role-with--to",level:4},{value:"Update Service Role",id:"update-service-role",level:4},{value:"Deploy VaultDB Instance",id:"deploy-vaultdb-instance",level:2},{value:"Note: Make sure to pick the vaultdb_cloudformation_service_role",id:"note-make-sure-to-pick-the-vaultdb_cloudformation_service_role",level:3},{value:"Launch stack",id:"launch-stack-1",level:3},{value:"AWS CLI Command to Create VaultDB Instance",id:"aws-cli-command-to-create-vaultdb-instance",level:3},{value:"Delete/ Uninstall",id:"delete-uninstall",level:2},{value:"Example",id:"example",level:2},{value:"create sample",id:"create-sample",level:3},{value:"Delete/ Uninstall sample",id:"delete-uninstall-sample",level:3},{value:"License",id:"license",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"7-secure-data-with-fortress-tags-and-roles"},"7. Secure Data with Fortress, Tags and Roles"),(0,n.kt)("h2",{id:"create-service-role"},"Create Service Role"),(0,n.kt)("p",null,"Click the link below to launch stack to create a service role that gets used to create vaultdb HUB in your aws account."),(0,n.kt)("h3",{id:"launch-stack"},(0,n.kt)("a",{parentName:"h3",href:"https://console.aws.amazon.com/cloudformation/home?#/stacks/new?stackName=vaultdb-service-role&templateURL=https://vaultdb-web.s3.us-east-2.amazonaws.com/awsquickstart/service-role.yaml"},(0,n.kt)("img",{parentName:"a",src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png",alt:"Launch stack"}))),(0,n.kt)("h3",{id:"aws-cli-commands"},"AWS CLI Commands"),(0,n.kt)("p",null,"you can also use aws cli commands to create and update the service role."),(0,n.kt)("h4",{id:"create-cloud-formation-service-role-with--to"},"Create Cloud Formation Service Role with  to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"awsv2 cloudformation create-stack --stack-name vaultdb-service-role --template-body https://s3.amazonaws.com/vaultdb-web/awsquickstart/service-role.yaml --capabilities CAPABILITY_NAMED_IAM\n")),(0,n.kt)("h4",{id:"update-service-role"},"Update Service Role"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"awsv2 cloudformation update-stack --stack-name vaultdb-service-role --template-body https://s3.amazonaws.com/vaultdb-web/awsquickstart/service-role.yaml --capabilities CAPABILITY_NAMED_IAM\n")),(0,n.kt)("h2",{id:"deploy-vaultdb-instance"},"Deploy VaultDB Instance"),(0,n.kt)("h3",{id:"note-make-sure-to-pick-the-vaultdb_cloudformation_service_role"},"Note: Make sure to pick the vaultdb_cloudformation_service_role"),(0,n.kt)("h3",{id:"launch-stack-1"},(0,n.kt)("a",{parentName:"h3",href:"https://console.aws.amazon.com/cloudformation/home?#/stacks/new?stackName=vaultdb-development-instance&templateURL=https://vaultdb-web.s3.us-east-2.amazonaws.com/awsquickstart/vaultdb.yaml"},(0,n.kt)("img",{parentName:"a",src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png",alt:"Launch stack"}))),(0,n.kt)("h3",{id:"aws-cli-command-to-create-vaultdb-instance"},"AWS CLI Command to Create VaultDB Instance"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'awsv2 cloudformation create-stack --stack-name [APPLICATION-STACK-NAME] --role-arn "arn:aws:iam::[AWS-ACCOUNT-NUMBER]:role/vaultdb_cloudformation_service_role" --template-url https://vaultdb-web.s3.us-east-2.amazonaws.com/awsquickstart/vaultdb.yaml --parameters ParameterKey="AdminEmail",ParameterValue="[APPLICATION-ADMIN-EMAIL-ADDRESS]" ParameterKey="PrimarySubnetAZ",ParameterValue="us-east-1a" ParameterKey="CidrBlock",ParameterValue="10.0.0.0/16" ParameterKey="PrivateSubnetCIDR",ParameterValue="10.0.20.0/24" ParameterKey="BucketName",ParameterValue="vaultdb-web" --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND\n\nValues you can use:--\n    APPLICATION-STACK-NAME\n        Pick a Uniquename for your installation and append test/dev/uat/prod etc to diffrentiate between different environments.\n    AWS-ACCOUNT-NUMBER\n        AWS Account number\n    APPLICATION-ADMIN-EMAIL-ADDRESS\n        this email will receive the user passwords and instructions on how to start using VAULTDB ai platform.\n    VPC-ID\n        Provide the VPC ID if you have one and wants to use that otherwise remove the parameter all together or provide empty value\n    VPC-CIDR-BLOCK\n        10.0.0.0/16\n')),(0,n.kt)("h2",{id:"delete-uninstall"},"Delete/ Uninstall"),(0,n.kt)("p",null,"awsv2 cloudformation delete-stack --stack-name ","[APPLICATION-STACK-NAME]"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"create-sample"},"create sample"),(0,n.kt)("p",null,'awsv2 cloudformation update-stack --stack-name dev --role-arn "arn:aws:iam::',"[AWS-ACCOUNT-NUMBER]",':role/vaultdb_cloudformation_service_role" --template-url ',(0,n.kt)("a",{parentName:"p",href:"https://vaultdb-web.s3.us-east-2.amazonaws.com/awsquickstart/vaultdb.yaml"},"https://vaultdb-web.s3.us-east-2.amazonaws.com/awsquickstart/vaultdb.yaml"),' --parameters ParameterKey="AdminEmail",ParameterValue="',(0,n.kt)("a",{parentName:"p",href:"mailto:vaultdb@outlook.com"},"vaultdb@outlook.com"),'" ParameterKey="PrimarySubnetAZ",ParameterValue="us-east-1a" ParameterKey="ExistingVpcID",ParameterValue="vpc-053032fa3ede15b8b" ParameterKey="PrivateSubnetCIDR",ParameterValue="172.31.200.0/20" ParameterKey="BucketName",ParameterValue="vaultdb-web" --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND'),(0,n.kt)("h3",{id:"delete-uninstall-sample"},"Delete/ Uninstall sample"),(0,n.kt)("p",null,"awsv2 cloudformation delete-stack --stack-name dev"),(0,n.kt)("h2",{id:"license"},"License"),(0,n.kt)("p",null,"All Images and Text copyright VaultDB.ai LLC"))}m.isMDXComponent=!0}}]);