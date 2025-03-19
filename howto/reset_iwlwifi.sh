$ cat /etc/modprobe.d/iwlwifi.conf
# PCIe reset device before loading the module.
#   Windows Hibernation/FastBoot may leave it in an unusable state
#   Replace 0000:00:14.3 below by the actual PCI address of the device
install iwlwifi echo 1 > /sys/bus/pci/devices/0000\:00\:14.3/reset ; \
        /sbin/modprobe --ignore-install iwlwifi
