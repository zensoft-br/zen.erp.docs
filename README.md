## References

https://help.sap.com/docs/SAP_S4HANA_CLOUD/6b39bd1d0e5e4099a5b65d835c29c696/c8e09756646a4e0ee10000000a4450e5.html
https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade

## Classes disponíveis

{.button}, botão
{.field}, campo de edição
{.menu}, menu
{.status}, status

## Technical info for the backend

This project runs a web server, converting markdown files at runtime.

This project is hosted in Bitbucket, which has a webhook that sends a POST to /api/refresh when a push is executed. This endpoint updates the local repository to keep it in sync with remote.

This service runs in the service as a unix systemd service (setup steps below).

### Running as a daemon on Linux

#### /etc/systemd/system/zen.docs.service

```bash
[Unit]
Description=zen.docs

[Service]
ExecStart=node index.js -i src -t src/template.html -s .content -p 8080
Restart=always
User=root
Group=root
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
WorkingDirectory=/opt/zen.docs

[Install]
WantedBy=multi-user.target
```

#### systemctl maintenance

```bash
systemctl enable zen.docs
systemctl start zen.docs
systemctl stop zen.docs
systemctl status zen.docs

systemctl daemon-reload
```
