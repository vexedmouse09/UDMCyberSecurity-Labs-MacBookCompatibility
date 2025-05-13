---
layout: default
title: Kali Linux ARM64 Installation
nav_order: 2
---

# Kali Linux ARM64 Installation Guide for UTM

{% include vm-status.html 
   title="Kali Linux"
   status="FINALIZED"
   architecture="ARM64 (Native)"
   updated="April 2025"
   time="45-60 minutes"
   difficulty="Beginner"
   compatibility="UTM 4.0+" %}

This guide covers the installation of Kali Linux (ARM64) on Apple Silicon Macs using UTM.

## Prerequisites

- UTM installed on your Mac (available from [getutm.app](https://mac.getutm.app/))
- At least 40GB free storage
- 8GB RAM recommended
- Internet connection for downloads

## Step 1: Download Kali Linux ARM64

{% include step-progress.html 
   steps="Download Kali,Create VM,Configure Settings,Install OS,First Boot,Optimization" 
   current=1 %}

1. Download the latest Kali Linux ARM64 ISO from the official Kali Linux Website

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-1.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-1.png" alt="Kali Linux ARM64 Download Page" class="clickable-image">
     </a>
   </div>

2. Visit the official site: [Kali.org Downloads](https://www.kali.org/get-kali/#kali-installer-images)

{: .warning }
> **Important**: Make sure to select the "Apple Silicon (ARM64)" image when downloading.

## Step 2: Create Your New Virtual Machine in UTM

{% include step-progress.html 
   steps="Download Kali,Create VM,Configure Settings,Install OS,First Boot,Optimization" 
   current=2 %}

1. Open UTM

 <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-2.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-2.png" alt="UTM Dashboard" class="clickable-image">
     </a>
   </div>

2. Select `Create a New Virtual Machine`

   <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-3.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-3.png" alt="UTM Create New VM Button" class="clickable-image">
     </a>
   </div>

3. Select `Virtualize`

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-4.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-4.png" alt="UTM Virtualize Option" class="clickable-image">
     </a>
   </div>

4. Select `Other`, then select `Boot ISO Image:` and choose the Kali Linux ISO file you downloaded earlier.

  <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-5.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-5.png" alt="UTM Other Linux, BOOT ISO Selection" class="clickable-image">
     </a>
   </div>

5. Select `Continue`

6. When prompted for Hardware Information, leave the default settings and select `Continue`

7. Change the Storage Size to `25-35 GiB` depending on your available storage

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-6.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-6.png" alt="UTM Storage Configuration" class="clickable-image">
     </a>
   </div>

8. When prompted for Shared Directory Information, you may leave these settings unchanged or configure a shared folder if needed

9. At the VM Summary, rename your VM to `Kali Linux` and select `Save`

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-7.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-7.png" alt="UTM VM Summary Screen" class="clickable-image">
     </a>
   </div>

10. After naming your VM, click the VM Settings icon (highlighted in red in the image below)

  <div class="image-container">
      <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-8.png" target="_blank">
        <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-8.png" alt="UTM VM Settings Button" class="clickable-image">
      </a>
    </div>

## Step 3: Modify VM Settings for Installation

{% include step-progress.html 
   steps="Download Kali,Create VM,Configure Settings,Install OS,First Boot,Optimization" 
   current=3 %}

Due to a current bug in UTM, we need to install Kali Linux in console-only mode:

1. In the VM settings, select `Display` under Devices and click `Remove`
    <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-9.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-9.png" alt="Remove Display Device" class="clickable-image">
     </a>
   </div>
2. Click `+ New...` and select `Serial` device
   <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-10.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-10.png" alt="Add Serial Device" class="clickable-image">
     </a>
   </div>
3. Click `Save` to apply these changes
   <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-11.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-11.png" alt="Save VM Settings" class="clickable-image">
     </a>
   </div>

## Step 4: Install Kali Linux

{% include step-progress.html 
   steps="Download Kali,Create VM,Configure Settings,Install OS,First Boot,Optimization" 
   current=4 %}

1. Start the VM by clicking the `Play` button
   <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-12.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-12.png" alt="Start VM Button" class="clickable-image">
     </a>
   </div>
2. A console window should open showing the Kali Linux boot menu

3. Use the arrow keys to select "Install" and press Enter
    <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-13.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-13.png" alt="Kali Linux Boot Menu" class="clickable-image">
     </a>
   </div>
4. Follow the installation prompts:
   - Set your `language`, `location`, and `keyboard layout`
   - Configure `network` (hostname, domain, etc.)
   - Create a `user account` and `password`
   - For partitioning, select `Guided - use entire disk`
<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-14.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-14.png" alt="Partitioning Options" class="clickable-image">
     </a>
   </div>
   - Click the default settings for partitioning
   - When asked about software selection, ensure you select the following items for the best VM performance:
        -- `Xfce (default desktop environment, lightweight and fast)`
        -- `Collection of tools: Top 10 AND default`
   - The software installation process may take a few minutes, depending on your internet speed.

{: .warning }
> **Important**: When you reach the `Finish the installation` step, DO NOT select `Continue` yet!

 <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-15.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-15.png" alt="Finish Installation Screen" class="clickable-image">
     </a>
   </div>

5. Return to UTM's main window

6. Select your VM on the left, then scroll down to `CD/DVD` on the right side

7. Click `Clear` to remove the installation ISO (essential to boot from the installed system)

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-16.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-16.png" alt="Clear ISO Image" class="clickable-image">
     </a>
   </div>
   
Prior to selecting continue, open up the settings window we used to install the serial device, and do the following tasks: 
 - Remove the `Serial` device
 - Add a new `Display` device, using the `virtio-gpu-pci` option
 - Save the settings
 
<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-17.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-17.png" alt="Add Display Device" class="clickable-image">
     </a>
   </div>

8. Now go back to the installation window and select `Continue` to complete the installation

## Step 5: First Boot and Optimization

{% include step-progress.html 
   steps="Download Kali,Create VM,Configure Settings,Install OS,First Boot,Optimization" 
   current=5 %}

1. Start the VM and log in with your username and password

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-18.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-18.png" alt="Kali Linux Login Screen" class="clickable-image">
     </a>
   </div>
   
2. For better integration with your Mac, install SPICE tools from the terminal:
   ```bash
   sudo apt update
   sudo apt install spice-vdagent
   ```
   <div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-19.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/kali/KL-19.png" alt="Installing SPICE Tools" class="clickable-image">
     </a>
   </div>

## Step 6: Update and Upgrade
{% include step-progress.html
steps="Download Kali,Create VM,Configure Settings,Install OS,First Boot,Optimization"
current=6 %}

Run the following command to ensure all packages on the Kali Linux system are up to date:
```bash
sudo apt update && sudo apt upgrade -y
```

## Step 7: Enjoy Your Kali Linux Virtual Machine!

Your Kali Linux installation is now complete and optimized for Apple Silicon. You can proceed to install additional tools or configure the environment to your needs.

{: .warning }
> Remember that Kali Linux contains powerful security tools. Always use them ethically and legally.

{% include pdf-download-button.html %}
