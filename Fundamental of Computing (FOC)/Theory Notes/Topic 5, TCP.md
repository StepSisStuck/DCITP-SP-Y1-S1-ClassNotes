# TCP/IP topic 5

Table of Contents:
- [TCP/IP topic 5](#tcpip-topic-5)
- [TCP/IP's Layered Architecture](#tcpips-layered-architecture)
- [TCP/IP is a layered architecture](#tcpip-is-a-layered-architecture)
- [OSI Layers](#osi-layers)
    - [How to remember the OSI layers easily](#how-to-remember-the-osi-layers-easily)
- [TCP/IP's Layered Architecture](#tcpips-layered-architecture-1)
  - [Example of how the layers work together](#example-of-how-the-layers-work-together)
- [Packet details](#packet-details)
- [Application Layer Protocols](#application-layer-protocols)
  - [Remote Desktop Protocol (RDP)](#remote-desktop-protocol-rdp)
  - [Telnet and SSH](#telnet-and-ssh)
- [DNS Domain Name Syetem](#dns-domain-name-syetem)
- [Transport-Layer Protocols](#transport-layer-protocols)
- [Role of the Transport Layer](#role-of-the-transport-layer)
- [Data protection with checksums](#data-protection-with-checksums)
- [TCP: The Reliable Protocol Layer](#tcp-the-reliable-protocol-layer)
- [Internetwork-Layer Protocols](#internetwork-layer-protocols)
  - [In summary, the Internetwork Layer Protocols are responsible for routing data packets between networks, and the IP protocol is a key component of this layer that provides addressing, fragmentation, reassembly, and routing of packets.](#in-summary-the-internetwork-layer-protocols-are-responsible-for-routing-data-packets-between-networks-and-the-ip-protocol-is-a-key-component-of-this-layer-that-provides-addressing-fragmentation-reassembly-and-routing-of-packets)
- [Data link layer](#data-link-layer)
- [Data Encapsulation](#data-encapsulation)
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
# OSI Layers
7 - Application
6 - Presentation
5 - Session
4 - Transport
3 - Network
2 - Data Link
1 - Physical

### How to remember the OSI layers easily
**Please Do Not Throw Singapore Passports Away**

-----------------
# TCP/IP's Layered Architecture
- **Protocols** are rules that govern the format and meaning of packets exchanged by communicating entities.

## Example of how the layers work together
- When you open a web browser and type in a URL, the browser sends a request to the server. The request is sent to the application layer. The application layer then sends the request to the transport layer. The transport layer then sends the request to the internet layer. The internet layer then sends the request to the network access layer. The network access layer then sends the request to the server.

- When the server receives the request, it sends a response back to the browser. The response is sent to the network access layer. The network access layer then sends the response to the internet layer. The internet layer then sends the response to the transport layer. The transport layer then sends the response to the application layer. The application layer then sends the response to the browser.

     - The request should look like this 
       - Application layer: GET / HTTP/1.1



-  IP places its own header in front of the TCP header. The IP header contains the source and destination IP addresses. The TCP header contains the source and destination port numbers. The IP header is used to route the packet to the destination. The TCP header is used to deliver the packet to the correct application.

- The unit of data at the transport layer is called a segment. The unit of data at the internet layer is called a packet. The unit of data at the network access layer is called a frame. 
- Packet is passed to the network access layer. The network access layer then sends the packet to the internet layer. The internet layer then sends the packet to the transport layer. The transport layer then sends the packet to the application layer. The application layer then sends the packet to the browser. Which is where NIC comes in.

- The network access layer is responsible for placing the packet on the network. The network access layer is also responsible for receiving the packet from the network. The network access layer is responsible for placing the packet on the network. The network access layer is also responsible for receiving the packet from the network.

-----------------
# Packet details
- The packet contains the source and destination IP addresses. The packet also contains the source and destination port numbers. The packet also contains the data that is being sent.
- The data part of an Ethernet frame can hold up to 1500 bytes. MAC addresses (48 bits) are 6 bytes long.

-----------------
# Application Layer Protocols
## Remote Desktop Protocol (RDP)
- RDP is a proto
- RDP is used to access a Windows compurter remotely by using windows GUI.
- They use port 3389
## Telnet and SSH
- Telnet and SSH are used to remotely access a computer.
- They are used to connect a device across a network via a command line interface (CLI).
- Telnet uses TCP port 23.
  - When you telnet to a device, you are using the telnet client to connect to the telnet server on the device.
  - This is not a secure connection because the data is sent in clear text.

- SSH uses TCP port 22.
  - When you SSH to a device, you are using the SSH client to connect to the SSH server on the device.
  - This is a secure connection because the data is encrypted.

-----------------

# DNS Domain Name Syetem 
- DNS is a name-to-name resolution system that is used to resolve host names to IP addresses.
- Using DNS a user can type in a host name and the DNS server will resolve the host name to an IP address.

- Example 
   - When you type in www.google.com, the DNS server will resolve the host name to an IP address.
   - Without DNS, you would have to type in the IP address of the website.

-----------------

# Transport-Layer Protocols
- The transport layer is responsible for end-to-end data delivery and error checking.
- The transport layer is responsible for breaking up the data into segments.
  - They supply a header field to identify the application that is sending the data.
  - Provide a reliable connection between the source and destination.

Example of transport layer protocols:
- Transmission Control Protocol (TCP)



| Field | Size (bytes) | Description |
|-------|-------------|-------------|
| Source Port | 2 | Identifies the sending port |
| Destination Port | 2 | Identifies the receiving port |
| Sequence Number | 4 | Used to ensure reliable data transfer |
| Acknowledgment Number | 4 | Used to acknowledge receipt of data |
| Data Offset | 4 bits | Specifies the size of the TCP header in 32-bit words |
| Reserved | 6 bits | Reserved for future use |
| Flags | 6 bits | Specifies the purpose of the TCP segment |
| Window Size | 2 | Specifies the number of bytes that can be sent before receiving an acknowledgment |
| Checksum | 2 | Used to detect errors in the TCP segment |
| Urgent Pointer | 2 | Indicates the end of urgent data |


-----------------
# Role of the Transport Layer
- Transport layer protocols have two main responsibilities:
  - Provide end-to-end data delivery
  - Provide error checking

- User Datagram Protocol (UDP)
  - UDP is a connectionless
  - Connectionless and designed for speed for small amounts of data.

- Transmission Control Protocol (TCP)
  - TCP is a connection-oriented protocol.
  - Connection-oriented and designed for reliability for large amounts of data.


 - Both:
    - UDP and TCP use port numbers to identify the application that is sending the data.
    - Work at the transport layer of the OSI model.
    - Protect data integrity by using checksums.

-----------------
# Data protection with checksums
- Checksums are used to detect errors in the data.
- They provide a data integrity check.

-----------------
# TCP: The Reliable Protocol Layer

- If an application requires reliable data delivery, it will use TCP.
- How does TCP guarantee reliable data delivery?
  - TCP uses sequence numbers and acknowledgments to guarantee reliable data delivery.
  - TCP uses a sliding window to guarantee reliable data delivery.
      - The sliding window is used to control the flow of data between the source and destination.
      - Establishes a window size that specifies the number of bytes that can be sent before receiving an acknowledgment.
      - Ensuring that the data is received in the correct order.

- TCP is a connection-oriented protocol.
  - A connection must be established before data can be sent.
  - A connection is established by using a three-way handshake.
  - A connection is terminated by using a four-way handshake.

-----------------
# Internetwork-Layer Protocols
- The internetwork layer is responsible for routing packets between networks.
- Where the IP protocol operates and is the heart of the internet.

The Internetwork Layer Protocols, also known as the Internet Layer, is the third layer in the TCP/IP protocol stack. This layer is responsible for routing packets between networks and is where the Internet Protocol (IP) operates.

The IP protocol is a connectionless protocol that provides best-effort delivery of packets between hosts on different networks. It is responsible for addressing, fragmentation, and reassembly of packets, as well as routing packets to their destination.

In summary, the Internetwork Layer Protocols are responsible for routing data packets between networks, and the IP protocol is a key component of this layer that provides addressing, fragmentation, reassembly, and routing of packets.
-----------------
# Data link layer

The Data Link Layer is the second layer in the TCP/IP protocol stack. This layer is responsible for placing packets on the network and receiving packets from the network. It is also responsible for error detection and flow control.

| Layer | Protocol | Function |
|-------|----------|----------|
| Data Link | Ethernet, Wi-Fi, PPP | Provides physical connectivity to the network |
| Logical Link Control (LLC) | 802.2 | Provides a common interface to the network layer |
| Media Access Control (MAC) | 802.3, 802.11 | Provides addressing and error detection for data frames |

-----------------
# Data Encapsulation

Data encapsulation is the process of adding headers and trailers to data as it moves down the layers of the OSI model. The headers and trailers are added at each layer of the OSI model.

The headers and trailers are removed as the data moves up the layers of the OSI model.



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



