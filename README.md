# AutoBlogger



## NOTES ## 
If you are on Ubuntu, if you are given the error 
```No usable sandbox! If you are running on Ubuntu 23.10+ or another Linux distro that has disabled unprivileged user namespaces with AppArmor ```
solution:
```
sudo nano /etc/sysctl.d/60-apparmor-namespace.conf
```
add:
```
kernel.apparmor_restrict_unprivileged_userns = 0
```
apply changes: 
```
sudo sysctl -p /etc/sysctl.d/60-apparmor-namespace.conf
```

