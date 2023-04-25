# Topic 01B


## [Document to refer](../School%20Notes/Topic%2001B%20Fetch,%20Execution%20and%20IO(1).pdf)


Table of content: <br>
[1. Binary](#1)

[2. Data is Stored in Bits](#2)



[3. Bits and Bytes](#3)

[4. Funtional Units](#4)

[5. Cache Memory](#5)

[6. Secondary Memory](#6)

[7. Functional Units](#7)



-----------------

<h2 id="1"> Binary
<h4>

- What is binary? <br>

    - They are 1s and 0s. <br>


ASCII <br>

and ASCII table is a table that contains all the characters and their binary representation. <br>

- How to convert binary to decimal? <br>

    - 1. Multiply each digit by 2 to the power of its position. <br>
    - 2. Add all the results together. <br>

- How to convert decimal to binary? <br>

    - 1. Divide the number by 2. <br>
    - 2. Write down the remainder. <br>
    - 3. Divide the quotient by 2. <br>
    - 4. Write down the remainder. <br>
    - 5. Repeat until the quotient is 0. <br>
    - 6. The binary number is the sequence of remainders written in reverse order. <br>
-----------------
<h2 id="2"> Data is Stored in Bits

<h4>

- What is a bit? <br>

    - A bit is the smallest unit of data. <br>  

- Fiber Optics <br>

    - Fiber optics is a method of transmitting data as pulses of light through thin, transparent fibers. <br>

A pulse of light is a single bit of data. <br>

A pulse of 5 volts is a single bit of data. <br>

and 0 volts is a single bit of data. <br>

-----------------
<h2 id="3"> Bits and Bytes

![Alt text](Image%20Files/18.png)

<h4>

- This is a ASCII table. <br>
     - AKA, American Standard Code for Information Interchange. <br>


- What is a Unicode? <br>

    - Unicode is a standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems. <br>
-----------------
<h2 id="4"> Funtional Units

<h4>
Primary Memory (Also called main memory)    <br>

1. They are Organized into words of typically 32 bits. <br>
2. A 32-bit word can contain four 8-bit bytes. <br>
3. A personal computer has 4 GB of memory or more. <br>
-----------------
<h2 id="5"> Cache Memory

<h4>

- What is cache memory? <br>

    - Cache memory is a small amount of high-speed memory that is used to store copies of data that are currently being used. <br>

- What is the purpose of cache memory? <br>

    - The purpose of cache memory is to speed up the access to data. <br>

They are smaller and faster than main memory. <br>

Holds sections of main memory that are currently being used. <br>

-----------------
<h2 id="6"> Secondary Memory

<h4>

- What is secondary memory? <br>

    - Secondary memory is a large amount of slower memory that is used to store data that is not currently being used. <br>

- What is the purpose of secondary memory? <br>

    - The purpose of secondary memory is to store data that is not currently being used. <br>

They are larger and slower than main memory. <br>   
-----------------
<h2 id="7"> Functional units

<h4>

Processor <br>

1. Logic circuits for performing arithmetic and logical operations on word-size data. <br>

2. Timning and control circuits for sequencing the execution of instructions. <br>

3. Registers for storing data and instructions. <br>

4. A bus for communicating with main memory and I/O devices.  (typically 16 or 32 bits wide)<br>
-----------------
<h2 id="8"> Processor  - Arithmetic Logic Unit (ALU)

<h4>

- What is Arithmetic Logic Unit (ALU)? <br>

    - Arithmetic Logic Unit (ALU) is a part of the processor that performs arithmetic and logical operations. <br>

- What is the purpose of Arithmetic Logic Unit (ALU)? <br>

    - The purpose of Arithmetic Logic Unit (ALU) is to perform arithmetic and logical operations. <br>

    Most of the time, the ALU is used to perform arithmetic operations. <br>

    The ALU is also used to perform logical operations. <br>
-----------------
<h2 id="9"> Processor  - Control Unit

<h4>

- What is Control Unit? <br>

    - Control Unit is a part of the processor that controls the operation of the processor. <br>

- What is the purpose of Control Unit? <br>

    - The purpose of Control Unit is to control the operation of the processor. <br> <br>

    The control unit is responsible for sequencing the execution of instructions. <br>

    The control unit is responsible for fetching instructions from memory. <br>

    The control unit is responsible for decoding instructions. <br>

    The control unit is responsible for executing instructions. <br>

    The control unit is responsible for communicating with I/O devices. <br>

![Alt text](Image%20Files/19.png)


-----------------

<h2 id="10"> Intel CPU 8086

<h4>


![Alt text](Image%20Files/20.png)


What is a "segmentation"

- Segmentation is a method of dividing a program into segments. <br>

- Each segment is a contiguous block of memory. <br>

- Each segment has a base address and a limit. <br>

- The base address is the starting address of the segment. <br>

- The limit is the size of the segment. <br>

- The base address and the limit are stored in the segment registers. <br>

- The segment registers are used to calculate the effective address of a memory location. <br>




-----------------

<h2 id="11"> Computer

<h4>
<br>

1. Computer accepts information in the form of programs and data through an input unit and stores it in the memory

2. Information stored in the memory is fetched under program control into an ALU, where it is processed

3. Processed information leaves the computer through an output unit

4. All activities in the computer are directed by the Control Unit


-----------------

<h2 id="12"> Instruction Cycle

<h4>

- What is an instruction cycle? <br>

    - An instruction cycle is a sequence of steps that the processor goes through to execute an instruction. <br>
    
- What is the purpose of an instruction cycle? <br>

    - The purpose of an instruction cycle is to execute an instruction. <br>

- What are the steps of an instruction cycle? <br>
    
     - 1. Fetch the instruction from memory. <br>
    - 2. Decode the instruction. <br>
     - 3. Execute the instruction. <br>
     - 4. Store the result. <br> <br>    

- What is the Fetch stage? <br>

    - The Fetch stage is the first stage of an instruction cycle. <br>

    - The Fetch stage is the stage where the instruction is fetched from memory. <br>   
-----------------

<h2 id="13"> Instructions and Programs

<h4>

An instruction is a single operation that the processor can perform. <br>

A 32-bit instruction can contain four 8-bit bytes. <br>


-----------------

<h2 id="14"> Instruction types

<h4>

- Load 
    
     - Load instructions are used to load data from memory into a register. <br>

- Store

    - Store instructions are used to store data from a register into memory. <br>


- Operate
    
    - Operate instructions are used to perform arithmetic and logical operations on data in registers. <br> 


![Alt text](Image%20Files/21.png)

-----------------   

<h2 id="15"> Processor Components

<h4>

- What is a processor? <br>

    - A processor is a device that performs arithmetic and logical operations on data. <br>

- What is the purpose of a processor? <br>

    - The purpose of a processor is to perform arithmetic and logical operations on data. <br>

- What are the components of a processor? <br>  

    - The components of a processor are the ALU, the control unit, and the registers. <br>

- What is the Arithmetic Logic Unit (ALU)? <br>

    - The Arithmetic Logic Unit (ALU) is a part of the processor that performs arithmetic and logical operations. <br>

- What is the purpose of the Arithmetic Logic Unit (ALU)? <br>

    - The purpose of the Arithmetic Logic Unit (ALU) is to perform arithmetic and logical operations. <br>

- What is the Control Unit? <br>    
    
    - The Control Unit is a part of the processor that controls the operation of the processor. <br>    

- What is the purpose of the Control Unit? <br>

    - The purpose of the Control Unit is to control the operation of the processor. <br>

- What are registers? <br>

    - Registers are small amounts of fast memory that are used to store data and instructions. <br>

- What is the purpose of registers? <br>

    - The purpose of registers is to store data and instructions. <br>

![Alt text](Image%20Files/22.png)


-----------------




