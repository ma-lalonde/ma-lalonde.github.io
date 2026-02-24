# Quantum magnetometer

## Summary

**Context** — I worked with [SBQuantum](https://sbquantum.com/) and Université de Sherbrooke from 2018 through 2020, first as an intern, then through my undergraduate capstone project, and finally on two funded proposals.

**Problem** — The goal was to miniaturize a modular lab magnetometer onto a single PCB, and then to qualify a space-grade version of it for a CubeSat mission measuring Earth's magnetic field.

**My role** — I contributed to the V2 single-board PCB, led project management and the Phase-Locked Loop RF subsystem on the space-grade capstone, and in 2019 and 2020 I led the writing of the [MagQuest](https://www.magquest.com) Phase 2 and 3 proposals while building test benches for the V3.

**Outcome** — The V2 was the first single-board magnetometer at the company, and the sensor lineage [launched into orbit in March 2026](https://sbquantum.com/sbquantum_space_pr/) aboard a Spire Global satellite — SBQuantum's first-ever space deployment, as part of the MagQuest Phase 4 program.

**Stack** — Mixed-signal PCB design, RF and PLL circuitry, laser and microwave control, NV-centre physics, technical proposal writing.

## The long story

I started working with [SBQuantum](https://sbquantum.com/) and their team in 2018 on a portable diamond-based quantum magnetometer, a device that uses a nitrogen-vacancy (NV) doped diamond, green lasers and microwaves to measure the ambient magnetic field. At the time, we were working on the V2 prototype, which was a miniaturized version of the previous V1 modular version. This new PCB was the first single-board magnetometer at the company.

This internship led to my bachelor's capstone project, where we worked on creating a new, space-grade version of the board for Université de Sherbrooke's Canadian CubeSat Project team. I worked mainly on project management and on the Phase-Locked Loop circuit (PLL), a pretty tough piece of RF circuitry that is used in pretty much every antenna communication system and which most electronics folks prefer to buy as a finished module, myself included.

![qmsat-magnetometer](/images/qmsat_magneto.jpg)

Magnetic fields are measured by shooting green light on a doped diamond to excite some of its electrons, applying a microwave field to spin them, then re-shooting the diamond with green light and reading the amplitude of the red light it emits. Yes, red light. A combination of the direction and strength of the magnetic field, as well as the microwave frequency, will change the amplitude of the red light output and allow for measurement of the ambient magnetic field.

Below are shown the 8x3 peaks of the calibration sequence. The peaks come in 4 pairs of 3 mini-peaks, split around a central 2.87 GHz frequency, one for each possible NV orientation in the diamond crystal lattice. The three mini-peaks come from a phenomenon called _hyperfine splitting_ which, in short, means that the circuit works well enough to get actual measurements from it and not just a bunch of noise. It's... a little complicated.

![resonance-calibration-sequence](/images/quantum_magnetometer_resonance_rays.png)

In 2019 and 2020, I worked on the [MagQuest](https://www.magquest.com) Phase 2 and 3 proposals, where I led the writing of the proposal describing the design of a satellite mission to measure Earth's magnetic field to update the World Magnetic Model and built a few test benches for the magnetometer (V3 at the time) and some of its parts.

In [March 2026](https://sbquantum.com/sbquantum_space_pr/), SBQuantum launched their first quantum magnetometer into orbit aboard a Spire Global satellite — part of the MagQuest Phase 4 deployment, with partners that include the NGA, ESA, NASA Goddard, and the Canadian Department of National Defence. The mission continues the same line of work the Phase 2 and 3 proposals described: using a diamond NV-centre sensor in orbit to continuously monitor Earth's magnetic field and enable GPS-independent navigation.


