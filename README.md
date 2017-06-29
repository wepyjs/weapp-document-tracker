# weapp-document-tracker

When weapp document changed, send me a notice for the diffs.


### Screenshot

![image](https://user-images.githubusercontent.com/2182004/27670110-6616e46e-5cbd-11e7-9d50-9de437788bc6.png)



### Usage

```bash
crontab -e

0 0 * * * node /opt/weapp-document-tracker/index.js > /var/log/tracker.log
```

### Reference

[webwx-app-tracker](https://github.com/Chatie/webwx-app-tracker)
