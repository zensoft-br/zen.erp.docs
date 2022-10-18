# Running as a daemon on Linux

## /etc/systemd/system/zen.docs.service

```
[Unit]
Description=zen.docs

[Service]
ExecStart=node express.js -i src -t src/template.html -s .content -p 8080
Restart=always
User=nobody
Group=nogroup
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
WorkingDirectory=/opt/zen.docs

[Install]
WantedBy=multi-user.target
```

## systemctl

```
systemctl enable zen.docs
systemctl start zen.docs
systemctl stop zen.docs
systemctl status zen.docs
```
