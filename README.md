# weapp-document-tracker

When weapp document changed, send me a notice for the diffs.


### Usage

```bash
crontab -e

0 0 * * * node /opt/weapp-document-tracker/index.js > /var/log/tracker.log
```

### Reference

[webwx-app-tracker](https://github.com/Chatie/webwx-app-tracker)
