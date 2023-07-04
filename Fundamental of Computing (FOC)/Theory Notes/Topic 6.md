# File System with Linux/Ubuntu

Table of Contents:


--------------------

# Directories 
- The directory `.` refers to the current directory
- The directory `..` refers to the parent directory
- The directory `/` refers to the root directory

--------------------
# Important Directories



| Directory | Description |
|-----------|-------------|
| `/bin` | Essential command binaries |
| `/boot` | Boot loader files |
| `/dev` | Device files |
| `/etc` | System configuration files |
| `/home` | User home directories |
| `/lib` | Shared libraries |
| `/media` | Removable media |
| `/mnt` | Filesystem mount points |
| `/opt` | Optional software packages |
| `/proc` | Process information |
| `/root` | Home directory for the root user |
| `/run` | Runtime data |
| `/sbin` | System binaries |
| `/srv` | Service data |
| `/sys` | System information |
| `/tmp` | Temporary files |
| `/usr` | User programs and data |
| `/var` | Variable data |


--------------------
# Managing Files Commands 

| Command | Description |
|---------|-------------|
| `ls` | List the contents of a directory. |
| `cd` | Change the current working directory. |
| `mkdir` | Create a new directory. |
| `touch` | Create a new file or update the timestamp of an existing file. |
| `cp` | Copy a file or directory. |
| `mv` | Move or rename a file or directory. |
| `rm` | Remove a file or directory. |
| `chmod` | Change the permissions of a file or directory. |
| `chown` | Change the owner of a file or directory. |
| `cat` | Display the contents of a file. |
| `head` | Display the first few lines of a file. |
| `tail` | Display the last few lines of a file. |
| `grep` | Search for a pattern in a file. |
| `find` | Search for files or directories that match certain criteria. |
| `tar` | Create or extract a compressed archive. |

In this example, the first column lists the command names, and the second column provides a brief description of each command.

--------------------
# Editing Files with Vi

Vi is a text editor that is available on most Unix-based systems, including Linux. It is a powerful editor that can be used to create, edit, and manipulate text files. Here are some basic commands for editing files with Vi:

1. `vi filename`: Open a file in Vi.
2. `i`: Enter insert mode, which allows you to insert text into the file.
3. `Esc`: Exit insert mode and return to command mode.
4. `:w`: Save changes to the file.
5. `:q`: Quit Vi.
6. `:wq`: Save changes and quit Vi.
7. `:q!`: Quit Vi without saving changes.

In command mode, you can use various commands to navigate through the file, search for text, and perform other operations. Here are some common commands:

1. `h`, `j`, `k`, `l`: Move the cursor left, down, up, or right, respectively.
2. `G`: Move to the end of the file.
3. `gg`: Move to the beginning of the file.
4. `/pattern`: Search for a pattern in the file.
5. `n`: Move to the next occurrence of the pattern.
6. `N`: Move to the previous occurrence of the pattern.
7. `x`: Delete the character under the cursor.
8. `dd`: Delete the current line.
9. `u`: Undo the last command.
10. `Ctrl-r`: Redo the last undone command.

These are just a few examples of the many commands available in Vi. Vi has a steep learning curve, but it is a powerful tool for editing text files once you become familiar with it.


# File Permissions
In Linux/Ubuntu, file permissions regulate access to files and directories. Each file and directory has three sets of permissions: read (r), write (w), and execute (x). These permissions are assigned to three categories: the owner, the group, and others.

The owner refers to the user who owns the file or directory. The group represents a collection of users who have similar access requirements. The "others" category includes all other users who are not the owner or part of the group.

The ls -l command displays permissions along with other file information. The permission string consists of ten characters, divided into four parts:

```sql
drwxr-xr-x 2 user group 4096 Jul 1 10:24 documents
```
In the example above, the first character represents the file type: d for a directory, - for a regular file, and other characters for special file types.

The next nine characters are divided into three groups, each representing the permissions for the owner, group, and others, respectively. Each group consists of three characters: r for read, w for write, and x for execute.

For example, drwxr-xr-x represents read, write, and execute permissions for the owner (rwx), read and execute permissions for the group (r-x), and read and execute permissions for others (r-x).

Using the chmod command, you can change the permissions of a file or directory. The chown command allows you to change the ownership of a file or directory.

Understanding file permissions is crucial for maintaining the security and integrity of the system, as it enables you to control who can access and modify files and directories.

Conclusion
The Linux/Ubuntu file system follows a hierarchical structure, with directories organized under the root directory ("/"). Each directory serves a specific purpose and contains files and subdirectories relevant to that purpose.

Navigating through the file system involves using commands like cd, ls, and pwd. These commands allow you to change directories, list directory contents, and display the current working directory.

File permissions play a vital role in ensuring the security and privacy of files and directories. The permissions are set for the owner, group, and others, controlling read, write, and execute access. Commands like chmod and chown allow you to modify permissions and ownership.

By understanding the file system hierarchy, mastering navigation commands, and comprehending file permissions, you can effectively manage files and directories in Linux/Ubuntu and make the most of its powerful features.





