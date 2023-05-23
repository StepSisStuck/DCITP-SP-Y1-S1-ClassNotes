# Topic 01B


## [Document to refer](../School%20Notes/Topic%2001B%20Fetch,%20Execution%20and%20IO(1).pdf)


Table of content: <br>
- [Topic 01B](#topic-01b)
  - [Document to refer](#document-to-refer)
- [Binary](#binary)
  - [ASCII ](#ascii-)
  - [Data is Stored in Bits](#data-is-stored-in-bits)
  - [Bits and Bytes](#bits-and-bytes)
- [Funtional Units](#funtional-units)
  - [Cache Memory](#cache-memory)
  - [Secondary Memory](#secondary-memory)
  - [They are larger and slower than main memory. ](#they-are-larger-and-slower-than-main-memory-)
  - [Functional units](#functional-units)
  - [Processor  - Arithmetic Logic Unit (ALU)](#processor----arithmetic-logic-unit-alu)
- [Processor  - Control Unit](#processor----control-unit)
  - [Intel CPU 8086](#intel-cpu-8086)
  - [What is a "segmentation"](#what-is-a-segmentation)
- [Computer](#computer)
  - [Instruction Cycle (CPU)](#instruction-cycle-cpu)
    - [Easier way to know how CPU works](#easier-way-to-know-how-cpu-works)
  - [Instructions and Programs](#instructions-and-programs)
  - [Instruction types](#instruction-types)
  - [Processor Components](#processor-components)
- [Technology Trends](#technology-trends)
  - [Parallelism](#parallelism)




-----------------

# Binary


- What is binary? <br>

    - They are 1s and 0s. <br>


## ASCII <br>

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
## Data is Stored in Bits



- What is a bit? <br>

    - A bit is the smallest unit of data. <br>  

- Fiber Optics <br>

    - Fiber optics is a method of transmitting data as pulses of light through thin, transparent fibers. <br>

A pulse of light is a single bit of data. <br>

A pulse of 5 volts is a single bit of data. <br>

and 0 volts is a single bit of data. <br>

-----------------
 ## Bits and Bytes

![Alt text](Image%20Files/18.png)

<h4>

- This is a ASCII table. <br>
     - AKA, American Standard Code for Information Interchange. <br>


- What is a Unicode? <br>

    - Unicode is a standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems. <br>
-----------------
# Funtional Units


Primary Memory (Also called main memory)    <br>

1. They are Organized into words of typically 32 bits. <br>
2. A 32-bit word can contain four 8-bit bytes. <br>
3. A personal computer has 4 GB of memory or more. <br>
-----------------
## Cache Memory



- What is cache memory? <br>

    - Cache memory is a small amount of high-speed memory that is used to store copies of data that are currently being used. <br>

- What is the purpose of cache memory? <br>

    - The purpose of cache memory is to speed up the access to data. <br>

They are smaller and faster than main memory. <br>

Holds sections of main memory that are currently being used. <br>

-----------------
## Secondary Memory



- What is secondary memory? <br>

    - Secondary memory is a large amount of slower memory that is used to store data that is not currently being used. <br>

- What is the purpose of secondary memory? <br>

    - The purpose of secondary memory is to store data that is not currently being used. <br>

They are larger and slower than main memory. <br>   
-----------------
## Functional units



Processor <br>

1. Logic circuits for performing arithmetic and logical operations on word-size data. <br>

2. Timning and control circuits for sequencing the execution of instructions. <br>

3. Registers for storing data and instructions. <br>

4. A bus for communicating with main memory and I/O devices.  (typically 16 or 32 bits wide)<br>
-----------------
## Processor  - Arithmetic Logic Unit (ALU)



- What is Arithmetic Logic Unit (ALU)? <br>

    - Arithmetic Logic Unit (ALU) is a part of the processor that performs arithmetic and logical operations. <br>

- What is the purpose of Arithmetic Logic Unit (ALU)? <br>

    - The purpose of Arithmetic Logic Unit (ALU) is to perform arithmetic and logical operations. <br>

    Most of the time, the ALU is used to perform arithmetic operations. <br>

    The ALU is also used to perform logical operations. <br>
-----------------
# Processor  - Control Unit



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

## Intel CPU 8086




![Alt text](Image%20Files/20.png)


## What is a "segmentation"

- Segmentation is a method of dividing a program into segments. <br>

- Each segment is a contiguous block of memory. <br>

- Each segment has a base address and a limit. <br>

- The base address is the starting address of the segment. <br>

- The limit is the size of the segment. <br>

- The base address and the limit are stored in the segment registers. <br>

- The segment registers are used to calculate the effective address of a memory location. <br>




-----------------

# Computer



1. Computer accepts information in the form of programs and data through an input unit and stores it in the memory

2. Information stored in the memory is fetched under program control into an ALU, where it is processed

3. Processed information leaves the computer through an output unit

4. All activities in the computer are directed by the Control Unit


-----------------

## Instruction Cycle (CPU)


- What is an instruction cycle? <br>

    - An instruction cycle is a sequence of steps that the processor goes through to execute an instruction. <br>
    
- What is the purpose of an instruction cycle? <br>

    - The purpose of an instruction cycle is to execute an instruction. <br>

- What are the steps of an instruction cycle? <br>
    
     1. Fetch the instruction from memory. <br>
         - The CPU retrieves the next instruction from memory based on the program counter (PC) value. This instruction is fetched and brought into the CPU for further processing.<br><br>
     2. Decode the instruction. <br>
      -  The fetched instruction is decoded to determine the specific operation or instructions to be executed. The CPU interprets the opcode and any associated operands to understand what needs to be done. <br><br>
      3. Execute the instruction. <br>
         - The CPU performs the specific operation specified by the decoded instruction. This could involve data transfer, arithmetic or logical computations, or control operations such as branching or jumping. <br><br>
     4. Store the result. <br>     
        - After executing the instruction, the CPU may store the result back into memory or update the value in registers as required by the instruction. This ensures that the changes made during the execution are properly recorded and preserved. <br><br>


### Easier way to know how CPU works

- "load," "store," and "add" are also common examples of basic instruction types performed by the Central Processing Unit (CPU). These instructions are commonly used in many instruction set architectures and represent fundamental operations in computer programs. <br>

  - Load: The "load" instruction is used to transfer data from memory into a register. It fetches a value from a specific memory location and places it in a register for further processing.

   - Store: The "store" instruction is used to transfer data from a register into memory. It takes the value stored in a register and writes it to a specified memory location.

   - Add: The "add" instruction performs addition on two operands, typically stored in registers or memory locations. It adds the values of the operands together and stores the result in a specified register or memory location.

- What is the Fetch stage? <br>

    - The Fetch stage is the first stage of an instruction cycle. <br>

    - The Fetch stage is the stage where the instruction is fetched from memory. <br>   
-----------------

## Instructions and Programs



An instruction is a single operation that the processor can perform. <br>

A 32-bit instruction can contain four 8-bit bytes. <br>


-----------------

## Instruction types



- Load 
    
     - Load instructions are used to load data from memory into a register. <br>

- Store

    - Store instructions are used to store data from a register into memory. <br>


- Operate
    
    - Operate instructions are used to perform arithmetic and logical operations on data in registers. <br> 


![Alt text](Image%20Files/21.png)

-----------------   

## Processor Components



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

# Technology Trends



Improvements in technology have led to the development of faster and more powerful processors. <br>

Improvements in processor technology have led to the development of smaller and more powerful processors. <br>

There are the list of the processor technology trends. <br>

- 1. Transistors <br>
- 2. Integrated Circuits <br>
- 3. Microprocessors <br>
- 4. Microcontrollers <br>
- 5. Supercomputers <br>
- 6. Multiprocessors <br>
- 7. Multicore Processors <br>

-----------------

## Parallelism 



- What is parallelism? <br>

    - Parallelism is the ability of a processor to execute multiple instructions at the same time. <br>

- What is the purpose of parallelism? <br>

    - The purpose of parallelism is to increase the speed of the processor. <br>

- What are the types of parallelism? <br>

    - The types of parallelism are instruction-level parallelism and data-level parallelism. <br>

    ![Alt text](Image%20Files/23.png)


-----------------




