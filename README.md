# Namecheap - Dynamic DNS Updater

This is an implementation of [Namecheap Dynamic DNS](https://www.namecheap.com/support/knowledgebase/article.aspx/29/11/how-do-i-use-a-browser-to-dynamically-update-the-hosts-ip/) in Node.js.

## Installation
- Run:
```shell script
npm i -g namecheap-dynamic-dns
cp .env.example .env
```
- Fill the information in the .env file.
    - host: @ (or the subdomain that you want to update).
    - domain: yourdomain.tld.
    - password: Dynamic DNS password.
- Run:
```shell script
./dns.js
```
