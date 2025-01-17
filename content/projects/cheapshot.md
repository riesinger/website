---
title: Cheapshot
summary: A "cheap" but fun camera rig
date: 2024-12-04
---

[View on GitHub](https://github.com/glidingthroughspace/cheapshot)

Cheapshot is a work-in-progress "bullet time" camera solution. It uses phones as cameras and a central server to synchronize them. The server sends a signal to all phones to take a picture at the same time. The pictures are then stitched together to create a "bullet time" effect.
This sort of thing is usually done with expensive cameras, but I wanted to see if I could do it for "cheap". The project is still in its early stages, but I'm excited to see where it goes.

## Stack

* TypeScript + Bun for the server, but considering switching to Go
* React Native for the app running on the phones
