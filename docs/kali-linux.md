---
layout: default
title: Kali Linux ARM64 Installation
nav_order: 2
---

# Kali Linux ARM64 Installation Guide for UTM

This guide covers the installation of Kali Linux (ARM64) on Apple Silicon Macs using UTM.

## Prerequisites

- UTM installed on your Mac (available from [getutm.app](https://mac.getutm.app/))
- At least 40GB free storage
- 8GB RAM recommended
- Internet connection for downloads

## Step 1: Download Kali Linux ARM64

Download the latest Kali Linux ARM64 ISO from the official Kali Linux Website

![Kali Linux ARM64 Installer](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali//KL-1.png)

### Kali.org Site Link

Click Here: [Kali.org](https://www.kali.org/get-kali/#kali-installer-images/kali/)

> **Important**: Make sure to select the "Apple Silicon (ARM64)" image when downloading.

## Step 2: Create Your New Virtual Machine in UTM

1. Open UTM

   ![UTM Dashboard](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-2.png)

2. Select `Create a New Virtual Machine`

   ![UTM Start](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-3.png)

3. Select `Virtualize`

   ![UTM Virtualize](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-4.png)

4. Select `Other`, then select `Boot ISO Image:` and choose the Kali Linux ISO file you downloaded earlier.

   ![UTM Other Linux, BOOT ISO](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-5.png)

5. Select `Continue`

6. When prompted for Hardware Information, leave the default settings and select `Continue`

7. Change the Storage Size to `25-35 GiB` depending on your available storage

   ![UTM STORAGE](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-6.png)

8. When prompted for Shared Directory Information, you may leave these settings unchanged or configure a shared folder if needed

9. At the VM Summary, rename your VM to `Kali Linux` and select `Save`

   ![UTM Summary](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-7.png)

10. After naming your VM, click the VM Settings icon (highlighted in red in the image below)

![UTM VM Settings](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-8.png)

## Step 3: Modify VM Settings for Installation

Due to a current bug in UTM, we need to install Kali Linux in console-only mode:

1. In the VM settings, select "Display" under Devices and click "Remove"
   ![REMOVE DISPLAY](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-9.png)
2. Click "+ New..." and select "Serial" device
   ![Add Serial Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-10.png)
3. Click "Save" to apply these changes
   ![Add Serial Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-11.png)
## Step 4: Install Kali Linux

1. Start the VM by clicking the play button
   ![Add Serial Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-12.png)
2. A console window should open showing the Kali Linux boot menu
3. Use the arrow keys to select "Install" and press Enter
   ![Add Serial Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-13.png)
4. Follow the installation prompts:
   - Set your language, location, and keyboard layout
   - Configure network (hostname, domain, etc.)
   - Create a user account and password
   - For partitioning, select "Guided - use entire disk"
![Add Serial Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-14.png)
   - Click the default settings for partitioning
   - When asked about software selection, ensure you select the following items for the best VM performance:
        -- Xfce (default desktop environment, lightweight and fast)
        -- Collection of tools: Top 10 AND default
   - The software installation process may take a few minutes, depending on your internet speed.
   - When you reach the "Finish the installation" step, DO NOT select "Continue" yet!
![Add Serial Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-15.png)
5. Return to UTM's main window
6. Select your VM on the left, then scroll down to "CD/DVD" on the right side
7. Click "Clear" to remove the installation ISO (essential to boot from the installed system)
![Add Serial Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-16.png)
Prior to selecting continue, open up the settings window we used to install the serial device, and do the following tasks: 
 - Remove the "Serial" device
 - Add a new "Display" device, using the "virtio-gpu-pci" option
 - Save the settings
![Add display Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-17.png)
8. Now go back to the installation window and select "Continue" to complete the installation


## Step 5: First Boot and Optimization

1. Start the VM and log in with your username and password
![Add display Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-18.png)
2. For better integration with your Mac, install SPICE tools from the terminal:
   ```
   sudo apt update
   sudo apt install spice-vdagent
   ```
   ![Add display Device](/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-19.png)
## Step 6: Update and Upgrade
Run the following command to ensure all packages on the Kali Linux system are up to date:
```
sudo apt update && sudo apt upgrade -y
```
## Step 7: Enjoy Your Kali Linux Virtual Machine!

{: .warning }
> Remember that Kali Linux contains powerful security tools. Always use them ethically and legally.



