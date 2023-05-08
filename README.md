
# NFTPerp Funding Executor

A basic utility that anyone can run to execute public funding functions every hour

## Setup
Create a .env containing the following details:

> PRIV_KEY=""
> RPC_PROVIDER=""

Then run the script using the following:

> node execute.js

Note that the funding calls are supposed to be run during the first minute of every hour. It is only recommended to run this script after verifying that the calls are not being run normally. You can test this script locally by setting the node as an arbitrum fork at block 85970217.
