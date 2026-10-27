# Chocolat Infini

## Summary

**Context** - I started Chocolat Infini from scratch in 2024 after a trip to Costa Rica and Ecuador, and ran it solo until 2026.

**Problem** - Bean-to-bar chocolate is traditionally an intuition-driven craft, which makes it hard to iterate on recipes and hard to reproduce results batch after batch. Top quality chocolate is also rare and expensive.

**My role** - I built the whole thing myself: I modified every machine, designed the closed-loop temperature controllers and the PCBs they run on, and wrote the software integration between the website, payment processor, and ERPNext.

**Outcome** - I won gold medals at the [2025 Craft Chocolat Challenge](https://www.craftchocolatchallenge.com/season-four) on several bars. The production line was fully instrumented, so I could hit the same profile reliably from one batch to the next.

**Stack** - Home Assistant, custom 2-layer PCBs, closed-loop temperature control, ERPNext, WordPress/WooCommerce.

## The long story

![chocolat-infini-home](/images/chocolat_infini_home.jpg)

From 2024 to 2026 I ran Chocolat Infini, a bean-to-bar chocolate company I started from scratch after a trip to Costa Rica and Ecuador.

More than a chocolate factory, it was a lab where I could modify machines and optimize the process of making chocolate.

A few of my bars were awarded gold medals at the [2025 Craft Chocolat Challenge](https://www.craftchocolatchallenge.com/season-four).

Possibly one of the most unique features of my small-scale operation was that _every single machine_ was modified and remote-controlled through a clean Home Assistant dashboard. That brought industrial rigorousness to a traditionally artisanal craft that allowed me to quickly improve on the recipes.

![ha-dashboard](/images/ha_dashboard.png)

Among the fun projects related to chocolate I worked on to grow the business, we can find:
- A small closed-loop electric Behmor drum roaster, which perfectly roasted the cocoa beans in any weather.

![roasting-curve](/images/roasting_curve.png)

- Closed-loop temperature controllers for every machine, including the stone melangers that grind the cocoa nibs and sugar to chocolate liquor and the tempering machines, which allow the chocolate to crystallize into a dark brown, shiny and tasty bar. It is absolutely NOT a state-of-the-art circuit. It is, however, a nice demonstration of how a simple, 2-layer PCB can be an incredibly cost-efficient tool.

![chocolate-controller](/images/chocolate_controller.jpg)

- The packaging, which I printed and cut at the shop with a die cutter
- A full software integration between the website, payment processor, and accounting/inventory software (ERPNext), which saved a TON of time during tax season or when it's time to order new ingredients

Visit the official website to learn all about the chocolate: [chocolatinfini.com](https://chocolatinfini.com).
