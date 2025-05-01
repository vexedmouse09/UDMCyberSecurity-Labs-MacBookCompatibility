---
layout: default
title: CyberOps Workstation Installation
nav_order: 4
---

# CyberOps Workstation Installation Guide for UTM

{% include vm-status.html 
   title="CyberOps Workstation"
   status="FINALIZED"
   architecture="x86 (Emulated)"
   updated="May 2025"
   time="45-60 minutes"
   difficulty="Intermediate"
   compatibility="UTM 4.0+" %}

This guide covers the installation of Cisco's CyberOps Workstation VM on Apple Silicon Macs using UTM with x86 emulation.

{: .warning }
> **Warning:** This VM contains tools intended for cybersecurity education and training. Always use these tools ethically and legally in a controlled environment.

## Prerequisites

- UTM installed on your Mac ([getutm.app](https://mac.getutm.app/))
- At least 40GB free storage space
- 8GB RAM recommended (4GB minimum)
- Homebrew and QEMU installed (for OVA conversion)
- CyberOps Workstation OVA file downloaded from Cisco NetAcad
- Internet connection for downloads

{: .note }
> **Homebrew & QEMU Required**: This guide requires Homebrew and QEMU for converting the CyberOps Workstation VM format. If you haven't installed these tools yet, please follow our [Homebrew Installation Guide]({{ site.baseurl }}/docs/tools/homebrew) first.

## Step 1: Obtain the CyberOps Workstation OVA

{% include step-progress.html 
   steps="Obtain OVA,Extract Files,Convert Image,Create VM,Configure VM,First Boot" 
   current=1 %}
   
navigate to [This Site](https://www.netacad.com/portal/content/ccna-cyberops-vms-legacy)
Log into your Cisco NetAcad account
Download the `cyberops_workstation.ova` file


## Step 2: Extract and Prepare the OVA File

{% include step-progress.html 
   steps="Obtain OVA,Extract Files,Convert Image,Create VM,Configure VM,First Boot" 
   current=2 %}

The OVA file is essentially an archive containing disk images and configuration files. We need to extract it first:

```bash
# Create a working directory
mkdir cyberops_workstation
cd cyberops_workstation

# Extract the OVA file
tar -xvf /path/to/cyberops_workstation.ova
```

After extraction, you should see several files, including two VMDK (Virtual Machine Disk) files, an OVF file, and an MF file.

<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-1.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-1.png" alt="Extracted OVA files" class="clickable-image">
  </a>
</div>

## Step 3: Convert VMDK to QCOW2 Format

{% include step-progress.html 
   steps="Obtain OVA,Extract Files,Convert Image,Create VM,Configure VM,First Boot" 
   current=3 %}

UTM works best with QCOW2 disk images. Use QEMU to convert the VMDK files to QCOW2 format:

```bash
# Locate the first VMDK disk file, "CyberOps Workstation-disk001.vmdk"
qemu-img convert -f vmdk -O qcow2 "CyberOps Workstation-disk001.vmdk" cyberops1.qcow2

# Locate the second VMDK disk file, "CyberOps Workstation-disk002.vmdk"
qemu-img convert -f vmdk -O qcow2 "Cyberops Workstation-disk002.vmdk" cyberops2.qcow2
```

The first VMDK is significantly larger than the second.

<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-2.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-2.png" alt="Converting VMDK to QCOW2" class="clickable-image">
  </a>
</div>

## Step 4: Create a New VM in UTM

{% include step-progress.html 
   steps="Obtain OVA,Extract Files,Convert Image,Create VM,Configure VM,First Boot" 
   current=4 %}

Now we'll create a new virtual machine in UTM that will use our converted disk image:

1. Open UTM and click on the `+` button or select `Create a New Virtual Machine`

2. Select `Emulate` (since we need x86 emulation)

<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-3.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-3.png" alt="UTM Emulate Selection" class="clickable-image">
  </a>
</div>

3. Select `Other` as the operating system

4. When asked for a boot device, select `None`

<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-4.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-4.png" alt="UTM No Boot" class="clickable-image">
  </a>
</div>

## Step 5: Configure VM Settings

{% include step-progress.html 
   steps="Obtain OVA,Extract Files,Convert Image,Create VM,Configure VM,First Boot" 
   current=5 %}

Configure the hardware settings for optimal performance:

1. Set the following parameters on the Hardware page:
   - Architecture: `x86_64`
   - System: `Standard PC (Q35 + ICH9, 2009)`
   - Memory: `4096 MB`
   - CPU Cores: `Default`

<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-5.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-5.png" alt="UTM Hardware Configuration" class="clickable-image">
  </a>
</div>

2. On the Storage screen, you can leave the default setting or reduce it as we'll be replacing this drive

3. For Shared Directory, you can optionally set up a shared folder for file exchange between your Mac and the VM

4. On the summary screen:
   - Name the VM `CyberOps Workstation`
   - Check the `Open VM Settings` box
   - Click `Save`

<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-6.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-6.png" alt="UTM VM Summary" class="clickable-image">
  </a>
</div>

5. In VM Settings:
   - Select `QEMU` from the sidebar and uncheck `UEFI Boot`
   
<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-7.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-7.png" alt="UTM Disable UEFI Boot" class="clickable-image">
  </a>
</div>

6. Still in VM Settings, under `Drives` we need to add our two new `qcow2` files:
   - Select and delete the default `IDE Drive`
   - Click `New...` > `Import` 
   - Select the `cyberops1.qcow2` file 
   - Click `New...` > `Import`
   - Select the `cyberops2.qcow2` file
   
<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-8.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-8.png" alt="UTM Import QCOW2 Disk" class="clickable-image">
  </a>
</div>

7. Configure the network:
   - Select `Network` under Devices
   - Set `Network Mode` to `Host Only` for an isolated lab environment
   - Alternatively, use `Shared Network` if you need the VM to access the internet
   
<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-9.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-9.png" alt="UTM Network Configuration" class="clickable-image">
  </a>
</div>

8. Click `Save` to apply all settings

## Step 6: First Boot and Login

{% include step-progress.html
steps="Obtain OVA,Extract Files,Convert Image,Create VM,Configure VM,First Boot"
current=6 %}

1. Start the VM by clicking the play button

2. If everything is configured correctly, the VM should boot to a login screen after a short delay
   
<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-10.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-10.png" alt="CyberOps Login Screen" class="clickable-image">
  </a>
</div>

3. Log in with the following credentials:
   - Username: `analyst`
   - Password: `cyberops`

4. Once logged in, you should see the CyberOps Workstation desktop environment

<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-11.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/cyberops/CO-11.png" alt="CyberOps Desktop" class="clickable-image">
  </a>
</div>

## Multi-VM Environment Setup

The CyberOps Workstation is designed to work in a lab environment with other security VMs. 

Configure all VMs to use the same UTM network mode (Host Only) to enable communication between them.

## Troubleshooting

{: .note }
> **Common Issues:**
> - **Boot Failure**: Ensure UEFI Boot is unchecked in the QEMU settings
> - **Network Issues**: Verify network settings are correctly configured
> - **Performance Problems**: Try allocating more RAM or CPU cores 
> - **VM Freezes**: UTM emulation of x86 on Apple Silicon can be resource-intensive; try closing other applications


## Conclusion

You have successfully set up the Cisco CyberOps Workstation VM on your Apple Silicon Mac. This VM provides an excellent platform for learning and practicing cybersecurity skills in a controlled environment.

{: .warning }
> Remember that security tools should only be used ethically and legally on systems you have permission to test.
