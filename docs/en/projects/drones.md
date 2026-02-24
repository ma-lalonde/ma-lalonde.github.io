# VAMUdeS

## Summary

**Context** — I was part of VAMUdeS, Université de Sherbrooke's autonomous drone team, from 2016 to 2018, and we competed every year at [AUVSI-SUAS](https://suas-competition.org/).

**Problem** — The goal was to build a fully autonomous aerial surveillance system that could find, identify, and geolocate ground targets from a vibrating drone flying 60 m above the ground at 20 m/s — and to do it better than every other university team at the competition.

**My role** — I led the georeferenced surveillance system, the ground-station control GUI, the RF and antenna design (including managing interference between the manual pilot, autopilot, and camera links), and the network QoS for an often-terrible air-to-ground link. I also co-designed one of our hexacopter platforms.

**Outcome** — We won AUVSI-SUAS three years in a row — 2016, 2017, and 2018 — with a verified raw geolocation accuracy of 3 m under those flight conditions.

**Stack** — Embedded flight avionics, custom RF and antenna design, networking with QoS, a Python ground-station GUI, geofencing and obstacle-avoidance algorithms.

## The long story

![Artemis](/images/vamudes_artemis.jpg)

I joined [VAMUdeS](https://www.facebook.com/VAMUdeS/) as soon as I started my electrical engineering undergrad. It was a lot of fun and definitely the best part of my studies. The projects I led include:
- Create a georeferenced aerial surveillance system with a verified 3 metres raw accuracy (from a vibrating drone flying 60 metres above ground at 20 m/s)
- Design a control GUI to monitor and control said surveillance system, including filtering data based on geofences
- Upgrade the three antenna systems and manage RF interference between the manual pilot, autopilot, and camera antennas
- Design a hexacopter drone from the ground up (although the frame was adjusted with simulations from another mechanical engineering student)
- Implement network QoS for an aerial surveillance system with sometimes _very poor_ bandwidth
- Create obstacle avoidance algorithms
- Design a few power circuits to keep the drones flying
- Pass on the knowledge to the next generation of _Vamudiens_

![Orion](/images/vamudes_orion.jpg)

Our crowning achievements include winning the [AUVSI-SUAS competition](https://suas-competition.org/) three years in a row. Check out our team's [2016](/auvsi_suas-2016-journals-universite_de_sherbrooke.pdf), [2017](/auvsi_suas-2017-journals-universite_de_sherbrooke.pdf) and [2018](/auvsi_suas-2018-journals-universite_de_sherbrooke.pdf) technical report papers to learn what this is all about.
