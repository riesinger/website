---
title: Paper Tracker
summary: A system for tracking the location and workflow of documents
date: 2022-01-01
cover: paper-tracker.avif
---

[View on GitHub](https://github.com/glidingthroughspace/paper-tracker)

Paper Tracker is a system for tracking the location and the workflows of a physical document. It is comprised of a hardware device locating the documents via WiFi positioning, an app for tracking their workflows and a server managing everything. This was a university project.

## Stack

* ESP32 (TinyPICO), as the hardware device
* C++ for the firmware
* Go for the server code
* Flutter & Dart for the mobile App
* Python to create tooling, mainly the firmware updater
