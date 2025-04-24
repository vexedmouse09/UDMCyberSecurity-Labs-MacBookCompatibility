---
layout: home
title: Home
nav_order: 1
permalink: /
---

# UTM Cybersecurity Labs for Apple Silicon Macs

A comprehensive collection of installation and configuration guides for setting up cybersecurity virtual machines on Apple Silicon (M1/M2/M3) Macs using UTM.

{: .warning }
> **Warning:** The virtual machines in these guides contain intentional vulnerabilities. Always keep them isolated from production networks and the internet.

## Purpose

This documentation helps cybersecurity students, educators, and professionals set up fully functional security lab environments on Apple Silicon Macs. Currently being developed to assist **University of Detroit Mercy** students in addressing the unique challenges of running security-focused VMs on ARM64 architecture while maximizing performance and compatibility.

## Virtual Machine Installation Guides

| Virtual Machine | Description | Architecture | Guide |
|----------------|-------------|--------------|-------|
| **Kali Linux** | `FINALIZED` Penetration testing distribution | ARM64 (Native) | [Installation Guide](./docs/kali-linux.html) |
| **Metasploitable 2** | `IN PROGRESS` Intentionally vulnerable Linux VM | x86 (Emulated) | [Installation Guide](./docs/metasploitable.html) |
| **De-ICE S1.100 & S1.110** | `COMING SOON` Penetration testing practice targets | x86 (Emulated) | [Installation Guide](./docs/deice.html) |
| **CyberOps Workstation** | `COMING SOON` Cisco's security lab environment | x86 (Emulated) | [Installation Guide](./docs/cyberops.html) |
| **Greenbone Vulnerability Scanner** | `COMING SOON` Network vulnerability scanning | ARM64 (Native) | [Installation Guide](./docs/greenbone.html) |

## Tools & Utilities

Setting up your lab environment requires various supporting tools. Check out our [Tools & Utilities](./docs/tools) section for guides on:

- [Homebrew](./docs/tools/homebrew.html) - Package manager for installing essential tools
- More Coming Soon...

## Performance Tips

Virtual Machine Performance on ARM64 systems can be enhanced b y keeping the following in mind:

1. **Native ARM64 VMs** will provide the best performance (e.g., Kali Linux ARM64)
2. **Emulated x86 VMs** will run slower but are sometimes necessary for specific tools
3. **Resource Allocation** - Assign appropriate memory and CPU resources based on each VM's needs (I.E: Do not max out your CPU cores!)
4. **VM Snapshots** - Create regular snapshots before making significant changes to prevent the need to reinstall

## Contributing

Contributions to this documentation are welcome and appreciated! With the rise of ARM64 based processors, the need to develop methodologies to virtualize x86-x64 operating systems on those processors has only grown. If you've found improvements, workarounds, or if you simply have suggestions for running security VMs on Apple Silicon, please submit a pull request or open an issue on our [GitHub repository](https://github.com/vexedmouse09/UDMCyberSecurity-Labs-MacBookCompatibility).

## License

This documentation is provided under the MIT License.
