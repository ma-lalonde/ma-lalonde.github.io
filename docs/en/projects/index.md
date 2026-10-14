# Projects

A selection of the projects I've led or built, with context on what the work actually involved.

## Catena {#catena}

**Context** - I have been developing applications since 2013 and running my own businesses on self-hosted infrastructure since 2021. Catena is that experience turned into a product.

**Problem** - Small businesses want out of per-seat software. Almost none can operate the alternative. Installing the applications is the easy part. What sinks self-hosting for a fifteen-person company is the backup nobody verified, the update nobody dares apply, and the credential nobody knows how to revoke.

**My role** - Sole architect and engineer. Product design, the installer, the admin interface, backup and restore, the bilingual documentation, and the automated test bench that proves it all still works after every change.

**Outcome** - A bare server becomes a running suite of business applications, with sign-in, backups, monitoring and restore built in from the start rather than bolted on afterward. Every claim on the product site traces back to an automated scenario that ran and passed. That rule is enforced by the build, not by good intentions.

**Stack** - Ansible, Docker Swarm, Traefik, Keycloak with oauth2-proxy, Portainer, PostgreSQL, restic to S3 with Object Lock, Tailscale, Cloudflared, a Go admin panel, GitHub CI/CD, and 20+ curated applications covering ERP, CRM, chat, documents, invoicing, scheduling and workflow automation.

Each feature is declared in a registry that maps it to the files that implement it and the scenarios that verify it. A feature with no test fails the build. The test bench provisions real machines, installs the product, breaks it deliberately and restores it. Backup restores are drilled. Moving a client from one server to another is drilled. The negative cases are tested, not just the easy path where nothing gets in the way.

The compliance side is built the same way. Backups land on storage the client owns, in a form that cannot be silently altered or deleted. Who can reach what is managed in one place and revoked in one place. Administrative actions are logged, and what happened can be reconstructed after the fact. That is the technical half of what Quebec's personal information law asks for; the other half is procedure, and it is written down too.

Two pieces are deliberately public on GitHub: the installer and the application catalog. Anyone can read what will run on their server before it runs.

More at [catena.run](https://catena.run).

## Chocolat Infini {#chocolate}

**Context** - I started Chocolat Infini from scratch in 2024 after a trip to Costa Rica and Ecuador, and I still run it solo today.

**Problem** - Bean-to-bar chocolate is traditionally an intuition-driven craft, which makes it hard to iterate on recipes and hard to reproduce results batch after batch. Top quality chocolate is also rare and expensive.

**My role** - I built the whole thing myself: I modified every machine, designed the closed-loop temperature controllers and the PCBs they run on, and wrote the software integration between the website, payment processor, and ERPNext.

**Outcome** - I won gold medals at the [2025 Craft Chocolat Challenge](https://www.craftchocolatchallenge.com/season-four) on several bars. The production line is fully instrumented, so I can hit the same profile reliably from one batch to the next.

**Stack** - Home Assistant, custom 2-layer PCBs, closed-loop temperature control, ERPNext, WordPress/WooCommerce.

![chocolat-infini-home](/images/chocolat_infini_home.jpg)

More than a chocolate factory, it is a lab where I can modify machines and optimize the process of making chocolate.

Possibly one of the most unique features of my small-scale operation is that _every single machine_ is modified and remote-controlled through a clean Home Assistant dashboard. That means bringing industrial rigorousness to a traditionally artisanal craft that allowed me to quickly improve on the recipes.

![ha-dashboard](/images/ha_dashboard.png)

Among the fun projects related to chocolate I worked on to grow the business, we can find:
- A small closed-loop electric Behmor drum roaster, which perfectly roasts the cocoa beans in any weather.

![roasting-curve](/images/roasting_curve.png)

- Closed-loop temperature controllers for every machine, including the stone melangers that grind the cocoa nibs and sugar to chocolate liquor and the tempering machines, which allow the chocolate to crystallize into a dark brown, shiny and tasty bar. It is absolutely NOT a state-of-the-art circuit. It is, however, a nice demonstration of how a simple, 2-layer PCB can be an incredibly cost-efficient tool.

![chocolate-controller](/images/chocolate_controller.jpg)

- The packaging, which I print and cut at the shop with a die cutter
- A full software integration between the website, payment processor, and accounting/inventory software (ERPNext), which saves a TON of time during tax season or when it's time to order new ingredients

Visit the official website to learn all about the chocolate: [chocolatinfini.com](https://chocolatinfini.com).

## Connaxio {#connaxio}

**Context** - Connaxio was my first business: a small electronics and software consulting and PCB shop that I founded and ran solo from 2021 to 2024.

**Problem** - Small teams, labs, and farms needed help shipping custom electronics, firmware, and automation without the overhead of a large supplier. The hard part: the same person had to be comfortable going from schematic to deployed system, because handoffs between specialists are exactly where small projects die.

**My role** - I did every part of the work myself, from schematic capture and PCB layout to in-house pick-and-place assembly, firmware, client engagement, and day-to-day operations.

**Outcome** - I took on paying engagements across automation, networking, and custom PCBs for a handful of repeat clients, published several open circuit designs on top of that, and built a working low-volume manufacturing capability entirely in-house.

**Stack** - KiCad, LitePlacer with OpenPnP, reflow soldering, computer vision, 3D printing.

After many revisions, I went from cramming as many pins as possible in a small space to actually making a usable circuit.

![board-history](/images/boards_overview.jpg)

Worth noting is that unlike most sane PCB designers, I made the boards myself using a LitePlacer Pick and Place machine, running the OpenPnP software. During that time, I thoroughly explored the limits of thermal flow, motor control, computer vision and 3D printing, as well as the importance of good lighting and ventilation.

![pick-and-place-zoom](/images/pick_and_place_zoom.jpg)

![pick-and-place-overview](/images/pick_and_place_overview.jpg)

![connaxio-boards](/images/connaxio_boards.jpg)

Connaxio's projects have their own GitHub page where you can learn all about them: [connaxio.github.io](https://connaxio.github.io).

## Quantum magnetometer {#quantum-magnetometer}

**Context** - I worked with [SBQuantum](https://sbquantum.com/) and Université de Sherbrooke from 2018 through 2020, first as an intern, then through my undergraduate capstone project, and finally on two funded proposals.

**Problem** - The goal was to miniaturize a modular lab magnetometer onto a single PCB, and then to qualify a space-grade version of it for a CubeSat mission measuring Earth's magnetic field.

**My role** - I contributed to the V2 single-board PCB, led project management and the Phase-Locked Loop RF subsystem on the space-grade capstone, and in 2019 and 2020 I led the writing of the [MagQuest](https://www.magquest.com) Phase 2 and 3 proposals while building test benches for the V3.

**Outcome** - The V2 was the first single-board magnetometer at the company, and the sensor lineage [launched into orbit in March 2026](https://sbquantum.com/sbquantum_space_pr/) aboard a Spire Global satellite, SBQuantum's first-ever space deployment, as part of the MagQuest Phase 4 program.

**Stack** - Mixed-signal PCB design, RF and PLL circuitry, laser and microwave control, NV-centre physics, technical proposal writing.

As an intern, I worked on the V2 prototype of a portable diamond-based quantum magnetometer, a miniaturized version of the previous V1 modular version.

This internship led to my bachelor's capstone project, where we worked on creating a new, space-grade version of the board for Université de Sherbrooke's Canadian CubeSat Project team. I worked mainly on project management and on the Phase-Locked Loop circuit (PLL), a pretty tough piece of RF circuitry that is used in pretty much every antenna communication system and which most electronics folks prefer to buy as a finished module, myself included.

![qmsat-magnetometer](/images/qmsat_magneto.jpg)

Magnetic fields are measured by shooting green light on a nitrogen-vacancy (NV) doped diamond to excite some of its electrons, applying a microwave field to spin them, then re-shooting the diamond with green light and reading the amplitude of the red light it emits. Yes, red light. A combination of the direction and strength of the magnetic field, as well as the microwave frequency, will change the amplitude of the red light output and allow for measurement of the ambient magnetic field.

Below are shown the 8x3 peaks of the calibration sequence. The peaks come in 4 pairs of 3 mini-peaks, split around a central 2.87 GHz frequency, one for each possible NV orientation in the diamond crystal lattice. The three mini-peaks come from a phenomenon called _hyperfine splitting_ which, in short, means that the circuit works well enough to get actual measurements from it and not just a bunch of noise. It's... a little complicated.

![resonance-calibration-sequence](/images/quantum_magnetometer_resonance_rays.png)

In 2019 and 2020, I worked on the [MagQuest](https://www.magquest.com) Phase 2 and 3 proposals, where I led the writing of the proposal describing the design of a satellite mission to measure Earth's magnetic field to update the World Magnetic Model and built a few test benches for the magnetometer (V3 at the time) and some of its parts.

The MagQuest Phase 4 mission, with partners that include the NGA, ESA, NASA Goddard, and the Canadian Department of National Defence, continues the same line of work the Phase 2 and 3 proposals described: using a diamond NV-centre sensor in orbit to continuously monitor Earth's magnetic field and enable GPS-independent navigation.

## VAMUdeS {#drones}

**Context** - I was part of VAMUdeS, Université de Sherbrooke's autonomous drone team, from 2016 to 2018, and we competed every year at [AUVSI-SUAS](https://suas-competition.org/).

**Problem** - The goal was to build a fully autonomous aerial surveillance system that could find, identify, and geolocate ground targets from a vibrating drone flying 60 m above the ground at 20 m/s, and to do it better than every other university team at the competition.

**My role** - I led the georeferenced surveillance system, the ground-station control GUI, the RF and antenna design (including managing interference between the manual pilot, autopilot, and camera links), and the network QoS for an often-terrible air-to-ground link. I also co-designed one of our hexacopter platforms.

**Outcome** - We won AUVSI-SUAS three years in a row (2016, 2017, and 2018) with a verified raw geolocation accuracy of 3 m under those flight conditions.

**Stack** - Embedded flight avionics, custom RF and antenna design, networking with QoS, a Python ground-station GUI, geofencing and obstacle-avoidance algorithms.

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

Check out our team's [2016](/auvsi_suas-2016-journals-universite_de_sherbrooke.pdf), [2017](/auvsi_suas-2017-journals-universite_de_sherbrooke.pdf) and [2018](/auvsi_suas-2018-journals-universite_de_sherbrooke.pdf) technical report papers to learn what this is all about.
