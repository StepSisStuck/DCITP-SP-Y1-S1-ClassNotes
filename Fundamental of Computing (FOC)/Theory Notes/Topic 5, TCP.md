# TCP/IP topic 5

Table of Contents:
- [TCP/IP topic 5](#tcpip-topic-5)
- [TCP/IP's Layered Architecture](#tcpips-layered-architecture)
- [TCP/IP is a layered architecture](#tcpip-is-a-layered-architecture)
- [To calculate IP addresses](#to-calculate-ip-addresses)
  - [Here is an example of how to calculate the network ID and host ID](#here-is-an-example-of-how-to-calculate-the-network-id-and-host-id)


-----------------
# TCP/IP's Layered Architecture
- **Protocols** are rules that govern the format and meaning of packets exchanged by communicating entities.
> Computers must "speak" the same language to communicate. The language is defined by a set of rules called a **protocol**. A protocol defines the syntax, semantics, and synchronization of communication and possible error recovery methods.


- When a set of protocols are used together, they are called a **protocol suite**.

- The most common protocol stack is Transmission Control Protocol/Internet Protocol (TCP/IP).

- TCP/IP is a layered architecture. It consists of 4 layers:
  - Application Layer
  - Transport Layer
  - Internet Layer
  - Network Access Layer


# TCP/IP is a layered architecture


| Layer | Protocol | Function |
|-------|----------|----------|
| Application | HTTP, FTP, SMTP, DNS, POP3, DHCP | Provides network services to the user |
| Transport | TCP, UDP | Provides end-to-end data delivery and error checking |
| Internetwork | IP, ARP, IPsec, ICMP, IPV4 and IPV6 | Routes data between networks |
| Network Access | Ethernet, Wi-Fi, PPP, Token Rings | Provides physical connectivity to the network |

-----------------



-----------------
# To calculate IP addresses

There different classes of IP addresses and their corresponding subnet masks. IP addresses are divided into five classes: A, B, C, D, and E. Classes A, B, and C are used for unicast addresses, while classes D and E are used for multicast and experimental purposes, respectively.

To calculate IP addresses, you need to determine the network ID and the host ID. The network ID identifies the network, while the host ID identifies the specific host within the network.

The subnet mask is used to determine the network ID and the host ID. The subnet mask is a 32-bit number that is used to divide the IP address into network and host portions. The subnet mask is represented in dotted decimal notation, just like an IP address.

To calculate the network ID, you perform a bitwise AND operation between the IP address and the subnet mask. The result is the network ID. To calculate the host ID, you perform a bitwise AND operation between the IP address and the inverse of the subnet mask. The result is the host ID.

Here is an example of how to calculate the network ID and host ID for an IP address:

IP address: 192.168.1.100
Subnet mask: 255.255.255.0

To calculate the network ID, you perform the following bitwise AND operation:

```
11000000.10101000.00000001.01100100 (192.168.1.100)
AND
11111111.11111111.11111111.00000000 (255.255.255.0)
=
11000000.10101000.00000001.00000000 (192.168.1.0)
```

The network ID is 192.168.1.0.

To calculate the host ID, you perform the following bitwise AND operation:

```
11000000.10101000.00000001.01100100 (192.168.1.100)
AND
00000000.00000000.00000000.11111111 (0.0.0.255)
=
00000000.00000000.00000000.01100100 (0.0.0.100)
```

The host ID is 0.0.0.100.

-----------------

## Here is an example of how to calculate the network ID and host ID
For the IP address 10.0.0.100 with a subnet mask of 255.255.255.128:

To calculate the network ID, you perform the following bitwise AND operation:

```
00001010.00000000.00000000.01100100 (10.0.0.100)
AND
11111111.11111111.11111111.10000000 (255.255.255.128)
=
00001010.00000000.00000000.00000000 (10.0.0.0)
```

The network ID is 10.0.0.0.

To calculate the host ID, you perform the following bitwise AND operation:

```
00001010.00000000.00000000.01100100 (10.0.0.100)
AND
00000000.00000000.00000000.01111111 (0.0.0.127)
=
00000000.00000000.00000000.01100100 (0.0.0.100)
```

The host ID is 0.0.0.100.

-----------------



