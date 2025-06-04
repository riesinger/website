+++
date = '2025-01-12T15:47:47+01:00'
title = 'Building a RatRig V-Core 4'
subtitle = 'A build log of my new 3D printer'
tags = ['3dp']
+++

This is my build log for the [RatRig V-Core 4](https://ratrig.com/3d-printers/rat-rig-v-core-4.html), a high-end IDEX CoreXY 3D printer that I've been wanting to build for a while. I'm documenting the experience while it's still fresh in my mind, since there are definitely some things that could be improved in the build process.

Overall, I really like both the printer and the build experience. The engineering is solid and the end result is impressive, especially if you're coming from an Ender 3 S1 Pro like me. However, there are some issues with the instruction ordering and clarity that RatRig could address. The good news is that they actively listen to feedback and update their documentation regularly.

## Ordering Experience

The ordering process was very smooth. When the V-Core 4 was first released, RatRig only offered a "build your own" configuration, where you had to mix & match from a lot of component choices. I was pleased to see that they now also offer a "recommended configuration" option, which simplifies the selection process significantly. I chose to order this option with the IDEX kit.

The lead time was about 11 weeks, but RatRig was transparent about this upfront. They estimated delivery within a certain timeframe on their website, and they actually delivered 6 days earlier than promised, which was a pleasant surprise.

There was one hiccup: I received an email about the cast aluminum bed, which would differ from the spec they showed on their website when ordering. The new spec has different hole locations, which would still work completely fine. However, they'd still offer a voucher to use on next orders. The value of the voucher wasn't specified in the email, which was a bit unclear, but I appreciated the proactive communication about this "issue".

## Assembly Process

If you're building your own V-Core 4, I highly recommend using the [Dozuki documentation](https://ratrig.dozuki.com/c/01._V-Core_4) instead of following the documentation on their own website, specifically for one reason: **the comments**. Pay attention to them! I only found them quite late in the build process, but they contain a lot of useful tips and corrections that aren't in the official documentation.

### Part 1: The Frame (4h 15min)

This took longer than expected, mainly due to issues with the Quick Connectors. While these connectors worked perfectly in most extrusions, the 540mm long 3030 extrusions seemed to have improperly reamed holes. I had to hammer the quick connectors in with significant force, which made any misalignment extremely frustrating to correct.

The real problem with this approach is that once you've hammered a connector in crooked, you have to hammer it back out and start over. This happened to me several times and added considerable time to what should have been a straightforward assembly.

Despite the connector issues, the overall frame assembly was well-documented and logical. The manual was easy to follow, and nothing else presented any real challenges.

### Part 2: The Z Axis (2h 15min)

This section went smoothly overall, but I discovered an instruction error that might catch other builders. Looking at the assembly pictures, I noticed that the rear Z-axis arms were missing heated inserts. This sent me back to Part 0 of the instructions to double-check the heat-set insert installation steps.

The problem is that Part 0 only mentions one component needing inserts, not the rear Z-axis arms. This seems like a documentation oversight that I'll be reporting to RatRig. The good news is that if you catch this early, it's easy to fix with a soldering iron.

### Part 3: The Y Linear Rails (15min)

This was refreshingly straightforward after the previous hiccups. Everything fit perfectly, the instructions were clear, and I encountered no issues whatsoever.

### Part 4: Core XY Motion System (Skipped)

I opted for the IDEX (Independent Dual Extruder) configuration, so I skipped this section in favor of the hybrid motion system in Part 5.

### Part 5: Hybrid Motion System (2h)

This section involved installing a lot of bearings and aluminum spacers, but the process was well-documented and I didn't encounter any significant problems. The hybrid system is more complex than a standard CoreXY setup, but the instructions walked through each step clearly.

The main thing to note here is that you'll be handling a lot of small parts, so good organization and lighting are essential. Take your time with the bearing installation to avoid dropping anything into the frame.

### Part 6: X-Axis (1h 30min)

Most of this time was spent on belt routing, which is genuinely challenging. Two important points that could save you time:

First, yes, you do need to cut the long belt into two equal halves to create separate "upper" and "lower" CoreXY belts. This isn't completely obvious from the instructions, and I initially hesitated to cut the belt.

Second, routing the belts through the tensioners is much easier if you completely remove the tensioner arms from their housings first. Thread the belt through the removed arm, then reinstall the entire assembly. I can't imagine how difficult it would be to thread the belts through the tensioners while they're installed.

### Part 7: Bed Assembly (5min)

This should have been the quickest part, and it was mechanically simple. However, my bed came "out of spec" as mentioned in the pre-shipping email. The mounting instructions were slightly unclear on first reading, but nothing that couldn't be figured out with a bit of common sense.

### Part 9: RatRig V-Core 4 Toolhead - IDEX (3h 30min)

This was one of the more time-consuming sections, largely because of the heat-set insert installation. If you're not experienced with heated inserts, this process can be tedious and requires patience to get right.

I found a typo in step 14: the parts list calls for M3x35 countersink screws, but the correct size is M3x40. Also, the manual shows brass standoffs between the extruders and toolhead board mounts, but my kit came with aluminum or stainless steel standoffs. This discrepancy was confusing but didn't affect the build.

### Part 10: Gantry Alignment (10min)

This section was quick and straightforward. My only issue was a missing setscrew on one of the pulleys, but the kit included spare hardware so this was just a minor inconvenience. The alignment process itself was well-documented and easy to follow.

### Part 11: Accessories (2h)

This is where I encountered the heated insert issue again - the bed mount arms were missing their required inserts, which wasn't mentioned in the instructions. This seems to be a recurring documentation problem.

Another minor issue: the diffusers in the corner brackets don't stay in place on their own. I added a tiny amount of hot glue to keep them secure, which solved the problem completely.

### Part 12: Electronics (10h)

This was by far the most time-consuming and frustrating section. The combination of crimping, wiring, cable management, and constant backtracking to fix mistakes added up to a full day of work.

The instruction quality really suffered here. The documentation felt rushed and incomplete compared to the mechanical assembly sections. Fortunately, the community comments were incredibly helpful and filled in many gaps.

In step 10, I used M3x6 countersink screws instead of the M3x8 screws listed in the instructions, since that's what came in my kit. Later steps confirm that M3x6 is correct, so this appears to be another documentation error.

The biggest mistake I made was not reading the community comments earlier. JohnM's comment in Part 9 specifically recommends doing the fan wiring before mounting the toolheads, which would have saved me significant time and frustration. Crimping Molex connectors on fans that are already installed is unnecessarily difficult.

### Part 13: Enclosure (Skipped)

I didn't purchase an enclosure with my kit, so I skipped this section. I'm planning to add one in the future, but wanted to get the printer operational first.

### Part 14: Hybrid+IDEX Y Belts (30min)

This section was refreshingly simple after the electronics marathon. The instructions were clear and I didn't encounter any problems. However, the heated insert documentation issue appeared again - certain components needed inserts that weren't mentioned in the instructions.

### Part 15: IDEX Accessories (1h 30min)

The instructions for this section were much better than the electronics section, but we're still dealing with the recurring heated insert problem. This time, the coupler pieces for the X-axis ooze guards needed inserts that weren't documented.

Fortunately, these locations were easily accessible with my Pinecil soldering iron, so I could install the missing inserts without disassembling anything.

### Commissioning

I moved the bed heater attachment step to the very beginning of the commissioning process, which made more sense from a workflow perspective.

## Final Thoughts

The RatRig V-Core 4 is an impressive machine and the build process is mostly quite fun if you like tinkering (with some exceptions). The mechanical design is solid and most of the instructions are clear and detailed. However, there are definitely areas for improvement, especially in the electronics section.

If you're considering building a V-Core 4, I'd recommend reading through the community comments on each section before starting, and don't hesitate to reach out to the RatRig community for help when you get stuck.
