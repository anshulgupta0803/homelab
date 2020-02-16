systemctl stop systemd-resolved.service
systemctl disable systemd-resolved.service
cp -f /etc/resolv.conf /etc/resolv.conf.bak
