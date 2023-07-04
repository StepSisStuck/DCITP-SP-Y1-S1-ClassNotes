# Topic 08: Network Applications and Configuration

Table of Contents:
- [Topic 08: Network Applications and Configuration](#topic-08-network-applications-and-configuration)
  - [TCP/IP and Network Commands](#tcpip-and-network-commands)
    - [Well-known Services](#well-known-services)
    - [netstat Command](#netstat-command)
    - [ifconfig Command](#ifconfig-command)
    - [hostname Command](#hostname-command)
  - [Netplan](#netplan)
    - [Introduction](#introduction)
    - [Configuration File](#configuration-file)
    - [Netplan YAML Configuration](#netplan-yaml-configuration)
    - [Netplan Examples](#netplan-examples)
  - [Managing Network Interfaces](#managing-network-interfaces)
    - [ifconfig Command](#ifconfig-command-1)
    - [Netplan Configuration](#netplan-configuration)
    - [Example Netplan Configuration](#example-netplan-configuration)
    - [Verifying Network Interfaces](#verifying-network-interfaces)
  - [Basic IP Routing and Gateways](#basic-ip-routing-and-gateways)
    - [The route Command](#the-route-command)
    - [Netplan Configuration for Gateways](#netplan-configuration-for-gateways)
  - [Address Resolution Protocol (ARP)](#address-resolution-protocol-arp)
    - [Introduction](#introduction-1)
    - [Displaying the ARP Cache](#displaying-the-arp-cache)
  - [Email Overview](#email-overview)
    - [Installing Mail Utilities](#installing-mail-utilities)
    - [Incoming Mail Location](#incoming-mail-location)
    - [The mail Command](#the-mail-command)
    - [Mail Storage](#mail-storage)
  - [Summary](#summary)


## TCP/IP and Network Commands

### Well-known Services
- Well-known services are listed in the `/etc/services` file. This file maps port numbers to service names, making it easier to identify the purpose of a particular port.

### netstat Command
- The `netstat` command is a powerful tool for displaying various network-related information, including open ports, active network connections, and network statistics.
- It provides details such as the local and remote addresses, state of the connection, process ID associated with the connection, and the protocol being used.
- Commonly used options with `netstat` include:
  - `-t` to display TCP connections
  - `-u` to display UDP connections
  - `-l` to show listening ports
  - `-p` to show the process using the port
- Example usage: `netstat -tuln` to display all listening TCP and UDP ports with their associated process information.

### ifconfig Command
- The `ifconfig` command is used to configure and display information about network interfaces.
- It allows you to view and set IP addresses, netmasks, broadcast addresses, MTU (Maximum Transmission Unit), and other network interface parameters.
- Example usage:
  - `ifconfig` to display the current configuration of all network interfaces.
  - `ifconfig eth0` to display the configuration of a specific network interface (e.g., `eth0`).
  - `ifconfig eth0 192.168.1.10 netmask 255.255.255.0` to set the IP address and netmask for `eth0`.
- Note: In recent Ubuntu versions, the `ip` command is recommended over `ifconfig` for network interface configuration.

### hostname Command
- The `hostname` command is used to display the hostname of the machine.
- Running `hostname` without any options will display the current hostname assigned to the system.

## Netplan

### Introduction
- Netplan is a command-line network configuration utility introduced in Ubuntu 17.10 to simplify the management and configuration of network settings.
- It provides a higher-level, YAML-based configuration format that can be easily understood and modified.
- Netplan works in conjunction with the NetworkManager and systemd-networkd networking daemons.

### Configuration File
- The Netplan configuration file is located at `/etc/netplan/50-cloud-init.yaml`.
- This file uses a YAML (Yet Another Markup Language) format to define network interfaces and their settings.
- To configure a network interface, you need to create or modify the appropriate YAML file in the `/etc/netplan/` directory.

### Netplan YAML Configuration
- The Netplan YAML configuration file consists of a set of configuration stanzas for each network interface.
- A basic configuration stanza includes:
  - `network` as the root element
  - `version` specifying the Netplan configuration version (e.g., `2`)
  - `ethernets` section where you define network interfaces and their settings
- Example configuration for a static IP address on `eth0`:
  ```yaml
  network:
    version: 2
    ethernets:
      eth0:
        addresses: [192.168.1.10/24]
        gateway4: 192.168.1.1
        nameservers:
          addresses: [8.8.8.8, 8.8.4.4]
  ```
- Once you have modified the Netplan configuration file, you can apply the changes by running `sudo netplan apply`.

### Netplan Examples
- To configure a static IP address on

 `eth0`:
  ```yaml
  network:
    version: 2
    ethernets:
      eth0:
        addresses: [192.168.1.10/24]
        gateway4: 192.168.1.1
        nameservers:
          addresses: [8.8.8.8, 8.8.4.4]
  ```
- To configure DHCP on `eth0`:
  ```yaml
  network:
    version: 2
    ethernets:
      eth0:
        dhcp4: true
  ```
- To configure a bridge interface:
  ```yaml
  network:
    version: 2
    ethernets:
      eth0:
        dhcp4: false
    bridges:
      br0:
        interfaces: [eth0]
        addresses: [192.168.1.10/24]
        gateway4: 192.168.1.1
        nameservers:
          addresses: [8.8.8.8, 8.8.4.4]
  ```

## Managing Network Interfaces

### ifconfig Command
- The `ifconfig` command can be used to set the IP address, netmask, and other parameters of a network interface temporarily.
- However, any changes made using `ifconfig` will be lost upon the next reboot.

### Netplan Configuration
- To make network interface changes persistent across reboots, you need to edit the Netplan configuration file.
- The default Netplan configuration file is located at `/etc/netplan/50-cloud-init.yaml`.
- Use a text editor to modify the file and save the changes.
- Once you have edited the Netplan configuration file, apply the changes by running `sudo netplan apply`.

### Example Netplan Configuration
- To configure a static IP address on `eth0`:
  ```yaml
  network:
    version: 2
    ethernets:
      eth0:
        addresses: [192.168.1.10/24]
        gateway4: 192.168.1.1
        nameservers:
          addresses: [8.8.8.8, 8.8.4.4]
  ```

### Verifying Network Interfaces
- To verify the configuration of network interfaces, use the `ifconfig -a` command.
- This command displays information about all available network interfaces, including their IP addresses, netmasks, and other settings.

## Basic IP Routing and Gateways

### The route Command
- The `route` command is used to manage the IP routing table and set up network gateways.
- It allows you to view, add, delete, or modify entries in the routing table.
- Any changes made with the `route` command will be lost upon the next reboot.

### Netplan Configuration for Gateways
- To define a gateway for a particular network interface, you can modify the Netplan configuration file.
- Open the Netplan configuration file located at `/etc/netplan/50-cloud-init.yaml` and add the following lines:
  ```yaml
  network:
    version: 2
    ethernets:
      eth0:
        gateway4: 192.168.1.1
  ```

## Address Resolution Protocol (ARP)

### Introduction
- In order to communicate with other machines on a network, your system needs to know the hardware address (MAC address) of the destination machines.
- Address Resolution Protocol (ARP) is responsible for resolving IP addresses to MAC addresses.
- Your system maintains an ARP cache, which stores IP-to-MAC address mappings to facilitate efficient communication.

### Displaying the ARP Cache
- The `arp` command is used to display the ARP

 cache on your system.
- Running `arp -a` will show the IP addresses and corresponding MAC addresses stored in the ARP cache.

## Email Overview

### Installing Mail Utilities
- To enable email functionality on Ubuntu, you can install the `mailutils` package by running `sudo apt install mailutils`.
- This package provides various command-line utilities for sending and receiving emails.

### Incoming Mail Location
- In Linux, incoming mail is typically delivered to the user's mailbox located at `/var/spool/mail/username`.
- To access incoming mail, you can use a Mail User Agent (MUA) like the `mail` command.

### The mail Command
- The `mail` command allows you to read and create emails from the command line.
- Commonly used switches for the `mail` command include:
  - `-v` for verbose mode
  - `-s` to specify a subject for the email
  - `-c` to send carbon copies to specified addresses
  - `-b` to send blind carbon copies (not supported in some versions)
- Example usage:
  - `mail -s "Subject" recipient@example.com` to send an email with a subject to a recipient.
  - `mail -s "Subject" -c cc@example.com recipient@example.com` to send an email with a carbon copy.

### Mail Storage
- Mails that have been read and saved using the `mail` command are stored in the `~/mbox` file.

## Summary
- TCP/IP and Network Commands:
  - Well-known services listed in `/etc/services`.
  - `netstat` command for displaying network information.
  - `ifconfig` command for configuring and displaying network interfaces.
  - `hostname` command for displaying the machine's hostname.
- Managing Network Interfaces:
  - Temporary configuration using `ifconfig` command.
  - Persistent configuration using Netplan and editing the Netplan configuration file.
- Address Resolution Protocol (ARP):
  - Resolving IP addresses to MAC addresses using the ARP cache.
- Basic IP Routing and Gateways:
  - The `route` command for managing gateways and displaying the routing table.
- Email Overview:
  - Installing `mailutils` package for mail functionality.
  - Using the `mail` command for reading and creating emails.

