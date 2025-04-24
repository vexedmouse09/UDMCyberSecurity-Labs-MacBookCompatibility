---
layout: default
title: Homebrew Installation
nav_order: 1
---

# Homebrew Installation Guide for macOS

{% include vm-status.html 
   title="Homebrew"
   status="FINALIZED"
   architecture="Apple Silicon (M1/M2/M3)"
   updated="April 2025"
   time="5-10 minutes"
   difficulty="Beginner"
   compatibility="macOS 11.0+" %}

This guide covers how to install Homebrew on Apple Silicon Macs and use it to set up essential tools for cybersecurity labs, including QEMU.

## Prerequisites

- Apple Silicon Mac (M1/M2/M3)
- macOS Big Sur (11.0) or later
- Admin access
- Internet connection
- Terminal application
<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-1.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-1.png" alt="Opening Terminal on macOS" class="clickable-image">
     </a>
</div>

## Step 1: Install Homebrew

{% include step-progress.html 
   steps="Install Homebrew,Configure PATH,Verify Installation,Install Tools,Update & Upgrade" 
   current=1 %}

In Your Terminal Run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-2.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-2.png" alt="Homebrew Installation Script" class="clickable-image">
     </a>
</div>

You'll be prompted for your Mac password. Enter it and press `RETURN` when asked for confirmation.

## Step 2: Configure Homebrew PATH

{% include step-progress.html steps="Install Homebrew,Configure PATH,Verify Installation,Install Tools,Update & Upgrade" current=2 %}

After installation you need to add Homebrew to your current terminal environment:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-3.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-3.png" alt="Configuring Homebrew PATH for Apple Silicon" class="clickable-image">
     </a>
</div>

## Step 3: Verify Your Installation

{% include step-progress.html steps="Install Homebrew,Configure PATH,Verify Installation,Install Tools,Update & Upgrade" current=3 %}

Run the following command in your terminal to verify Homebrew was installed properly:

```bash
brew --version
```
You should see a Homebrew version number outputted to your terminal window:

<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-4.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-4.png" alt="Verifying Homebrew Installation" class="clickable-image">
     </a>
</div>

## Install Tools For UTM Labs

{% include step-progress.html steps="Install Homebrew,Configure PATH,Verify Installation,Install Tools,Update & Upgrade" current=4 %}

### Install QEMU for VM Disk Conversion

```bash
brew install qemu
```
<div class="image-container">
     <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-5.png" target="_blank">
       <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/homebrew/HB-5.png" alt="Installing QEMU" class="clickable-image">
     </a>
</div>

### Other Recommended Utilities and Tools

The following utilities and tools can be easily installed using homebrew. They are not required, but will come in handy for labs.

### Network Utilities (`NMAP` and `WIRESHARK`)
```bash
brew install nmap wireshark
```

### FILE TRANSFER TOOLS (`WGET` and `CURL`)
```bash
brew install wget curl
```

### Development Tools (`GIT` and `PYTHON`)
```bash
brew install git python
```

### Disk Utilities
```bash
brew install coreutils
```

## Step 5: Update and Upgrade
{% include step-progress.html steps="Install Homebrew,Configure PATH,Verify Installation,Install Tools,Update & Upgrade" current=5 %}

To update and upgrade everything, use the following command:

```bash
brew update && brew upgrade
```
To updgrade one specific tool:

```bash
brew upgrade [package-name-here]
```

## Additional Resources

[Official Homebrew Documentation](https://docs.brew.sh/))
[Official Homebrew Troubleshooting Guide](https://docs.brew.sh/Troubleshooting))

