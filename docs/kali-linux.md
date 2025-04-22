---
layout: default
title: Kali Linux ARM64 Installation
---

# Kali Linux ARM64 Installation Guide for UTM

This guide covers the installation of Kali Linux (ARM64) on Apple Silicon Macs using UTM.

### Prerequisites

- UTM installed on your Mac
- At least 40GB free storage
- 8GB RAM recommended
- Internet connection for downloads

## Step 1: Download Kali Linux ARM64

Download the latest Kali Linux ARM64 ISO from the official Kali Linux Website

![Kali Linux ARM64 Installer](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/KL-1.png)


### Kali.org Site Link

Click Here: [Kali.org](https://www.kali.org/get-kali/#kali-installer-images/).

## Step 2: Create Your New Virtual Machine in UTM

1. Open UTM

![UTM Dashboard](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/KL-2.png)

2. Select `Create a New Virtual Machine`
![UTM Start](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/KL-3.png)

3. Select `Virtualize`
![UTM Virtualize](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/KL-4.png)

4. Select `Other` , then select `Boot ISO Image:` and choose the Kali Linux ISO file we downloaded prior.

![UTM Other Linux, BOOT ISO ](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/KL-5.png)

5. Select `Continue`

6. When Prompted For Hardware Information, leave the settings default and select `Continue`

7. Change the Storage Size to `25-35 GiB` Depending on Available Storage
![UTM STORAGE ](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/KL-6.png)
8. When Prompted for Shared Directory Information, You May Leave These Settings Unchanged
9. At The VM Summary, Rename Your VM to `Kali Linux` and select `Save`
![UTM Summary ](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/KL-7.png)



