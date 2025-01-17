+++
date = '2025-01-12T15:47:47+01:00'
draft = true
title = 'Building a Ratrig V-Core 4'
subtitle = 'A build log of my new 3D printer'
tags = ['3dp']
+++

This is basically a build log for my new 3D printer, a Ratrig V-Core 4.

## Order experience

- They came up with a "this is our selection we'd recommend" set, which made choosing the parts way easier.
- Earlier, there were _a lot_ of options to choose from, which was quite overwhelming

## Pre-Shipping

- Long lead time, but that was known before ordering
- The lead time they had on the website was right on spot, they were 6 days quicker than what they estimated
- Bed issues, I've gotten a mail and a voucher code of unknown value

## Assembly

### Part 1: The frame

This part took me 4h 15min. That's a lot. I've mostly got issues with the "Quick Connectors". While they did work super well in most extrusions, in the 540mm long 3030 extrusion, they might have forgotten to ream the bores? Somehow I had to hammer in the quick connectors with _a lot_ of force. This made getting them just even slightly misaligned a **pain**, since I'd have to hammer them back out and in again.
Overall assembly went smoothly, nothing was hard and the manual was super easy to follow.

### Part 2: The Z Axis

This took me about 2h 15min. While almost everything was smooth sailing, I noticed (just from the pictures!) that the rear Z axis arm is missing heated inserts. In fact, I've completely skipped over the heat set insert installation instructions in part 0. Whoops... However, going back, there it only mentions one part needing inserts. Not this one. I think that's an issue in the instructions and I will report it to Ratrig.

### Part 3: The Y Linear Rails

This part only took me about 15min. It was super straight forward and I encountered no issues.

### Part 4: Core XY Motion System

I didn't need to do this part, since I opted for the IDEX kit, meaning I'll have to do the next part.

### Part 5: Hybrid Motion System

This took me the better part of 2h. I don't recall any hickups, it was smooth sailing, with _a lot_ of bearings and aluminium spacers.

### Part 6: X-Axis

This took about 1h 30min, most of which was spent on belt routing. It's a pain. Two things that stuck out: Yes, you need to cut the long belt into two halves to have one "upper" and one "lower" Core XY belt. The instructions aren't 100% obvious here. The easiest way I found for routing the belts through the tensioners is to completely remove the tensioner arms from their housing. Then stick the belt through and re-install the arm. I don't know how routing them through would even be possible otherwise.

### Part 7: Bed Assembly

This only took 5min. My bed came "out of spec", as mentioned in [Pre-Shipping](#pre-shipping). The instructions were a tiny bit unclear to read at first, but nothing that can't be managed.

### Part 9: RatRig V-Core 4 Toolhead - IDEX

This part took me about 3h 30min, of which quite a bit of time was spent inserting heat set inserts. This is relatively tedious.

There's a typo in step 14: Where the parts list says M3x35 Countersink Screw, what they mean is M3x40.
The standoffs between the extruders and the mounts for the toolhead boards are brass in the manual, but are aluminium or stainless steel in the kit. That's a bit confusing.

### Part 10: Gantry Alignment

This was super quick and took about 10min. And that's only because one of my pulleys was missing a setscrew, so I had to dig though the extra parts bag to find a spare. Luckily there was one, so the missing setscrew was just a minor nuisance.

### Part 11: Accessories

This took 2h.
Now was the time that I've noticed that I'm missing heated inserts in the bed mount arms.
Also, the diffusors in the corner brackets don't hold on, so I added a miniscule amount of hot glue to keep them in place. 

### Part 12: Electronics

This was a mess of instructions. Somehow they got lazy apparently. Luckily there are comments on douzuki!

In [Step 10](https://ratrig.dozuki.com/Guide/12.+Electronics/250#s2957) I've used M3x6 countersink screws, since that's what I got in the kit. I think those are correct instead of the M3x8 they mention.
