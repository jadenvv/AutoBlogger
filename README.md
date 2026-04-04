# AutoBlogger
# Getting Started 
First, you need to create a token in order for autoblogger to communicate with github api so go to 
``` 
```https://github.com/settings/tokens/new?scopes=repo ```
make sure that ```Admin:Repo_hook``` is checked off 

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

