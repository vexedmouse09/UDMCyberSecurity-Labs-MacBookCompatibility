---
layout: default
title: Metasploitable 2 Installation
nav_order: 3
---

# Metasploitable 2 Installation Guide for UTM

{% include vm-status.html 
   title="Metasploitable 2"
   status="IN PROGRESS"
   architecture="x86 (Emulated)"
   updated="April 2025"
   time="30-45 minutes"
   difficulty="Intermediate"
   compatibility="UTM 4.0+" %}

This guide covers the installation of Metasploitable 2 on Apple Silicon Macs using UTM with x86 emulation.

{: .warning }
> **Warning:** Due to its intentionally vulnerable nature, Metasploitable 2 should NEVER be exposed to the public internet or connected to production networks. Always use it in an isolated lab environment.

## Prerequisites

- UTM installed on your Mac [getutm.app](https://mac.getutm.app/)
- At least 20GB free storage space
- 4GB RAM or more
- Homebrew installed (for QEMU tools)
- Internet connection for downloads

{: .note }
> **Homebrew & QEMU Required**: This guide requires Homebrew and QEMU for converting the Metasploitable VM format. If you haven't installed these tools yet, please follow our [Homebrew Installation Guide]({{ site.baseurl }}/docs/tools/homebrew) first.

## Step 1: Download Metasploitable 2

{% include step-progress.html 
   steps="Download VM,Convert Image,Create VM,Configure VM,First Boot,Testing" 
   current=1 %}

1. Download the Metasploitable 2 virtual machine:
   - Visit [Rapid7's Metasploitable page](https://www.rapid7.com/products/metasploit/metasploitable/)
   - Alternatively, download directly from [SourceForge](https://sourceforge.net/projects/metasploitable/)

2. Once downloaded, extract the ZIP archive to access the VMDK disk image:
   ```bash
   unzip metasploitable-linux-2.0.0.zip
   ```

<div class="image-container">
  <a href="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/metasploitable/MS-1.png" target="_blank">
    <img src="/UDMCyberSecurity-Labs-MacBookCompatibility/assets/images/metasploitable/MS-1.png" alt="Metasploitable 2 download and extraction" class="clickable-image">
  </a>
</div>
