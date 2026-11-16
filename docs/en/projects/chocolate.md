---
description: "Chocolat Infini, my own manufacturing business (2024-2026): store, payments, accounting and inventory synced, roasting and tempering automated, hours won back every week."
---

# Chocolat Infini (2024-2026)

## Summary

**Context** - I founded and ran alone a food manufacturing small business (2024-2026): production, online store, accounting, inventory.

**Problem** - Three sources of lost time. Between the online store, payments and accounting, the same data was retyped by hand. Roasting was watched by hand. Badly tempered batches of chocolate had to be redone.

**What I did** - I synced the online store (WooCommerce), payments, accounting and inventory (ERPNext). I automated roasting in a closed loop. I added temperature control to the tempering machines.

**Result** -

- Store, payments, accounting and inventory synced: at least 1 hour won back every week, and one annoying task gone.
- Closed-loop automated roasting: 3 to 5 hours won back every week, and more consistent quality.
- Temperature control on the tempering machines: hours every week of redoing bad batches eliminated, and better quality.
- Gold medals at the [Craft Chocolat Challenge 2025](https://www.craftchocolatchallenge.com/season-four).

**Tools** - Home Assistant, custom 2-layer PCBs, closed-loop temperature control, ERPNext, WordPress/WooCommerce.

## The long story

![chocolat-infini-home](/images/chocolat_infini_home.jpg)

I started Chocolat Infini from scratch in 2024 after a trip to Costa Rica and Ecuador, and ran it solo until 2026. It was a bean-to-bar chocolate company, a craft driven by intuition, where it is hard to iterate on recipes and to reproduce results batch after batch. It was also a lab where I could modify machines and optimize the process of making chocolate.

A few of my bars were awarded gold medals at the [Craft Chocolat Challenge 2025](https://www.craftchocolatchallenge.com/season-four).

I built the whole thing myself: I modified every machine, designed the closed-loop temperature controllers and the PCBs they run on, and wrote the software integration between the website, payment processor, and ERPNext.

Possibly one of the most unique features of my small-scale operation was that _every single machine_ was modified and remote-controlled through a clean Home Assistant dashboard. That brought industrial rigorousness to a traditionally artisanal craft that allowed me to quickly improve on the recipes.

![ha-dashboard](/images/ha_dashboard.png)

Among the fun projects related to chocolate I worked on to grow the business, we can find:
- A small closed-loop electric Behmor drum roaster, which perfectly roasted the cocoa beans in any weather.

![roasting-curve](/images/roasting_curve.png)

- Closed-loop temperature controllers for every machine, including the stone melangers that grind the cocoa nibs and sugar to chocolate liquor and the tempering machines, which allow the chocolate to crystallize into a dark brown, shiny and tasty bar. A simple 2-layer PCB can be a very cost-efficient tool.

![chocolate-controller](/images/chocolate_controller.jpg)

- The packaging, which I printed and cut at the shop with a die cutter
- A full software integration between the website, payment processor, and accounting/inventory software (ERPNext), which saved a lot of time during tax season or when it's time to order new ingredients

Visit the official website to learn all about the chocolate: [chocolatinfini.com](https://chocolatinfini.com).
