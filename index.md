---
layout: home
title: Home
nav_order: 1
---

# UTM VM Installation Guides for M1/M2 Macs

This documentation provides detailed installation guides for security-focused virtual machines running on Apple Silicon Macs using UTM.

## Available VM Guides

- [Kali Linux ARM64](docs/kali-linux.html) - Security testing and penetration testing distribution
- [Metasploitable 2](docs/metasploitable.html) - Intentionally vulnerable Linux VM
- [De-ICE S1.100 & S1.110](docs/deice.html) - Penetration testing practice targets
- [CyberOps Workstation](docs/cyberops.html) - Cisco's security lab environment
- [Greenbone Vulnerability Scanner](docs/greenbone.html) - Network vulnerability scanning

## Prerequisites

Before beginning any installation:

1. Install UTM from [getutm.app](https://getutm.app/)
2. Ensure at least 100GB of free storage space
3. Have an internet connection to download VM images
4. Enable Rosetta 2 for x86 emulation

{: .warning }
> **Important**: Some of these VMs contain intentional vulnerabilities. Never expose them to the internet or untrusted networks.
