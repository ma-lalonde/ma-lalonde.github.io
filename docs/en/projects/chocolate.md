# Chocolat Infini

## Summary

**Context** — I started Chocolat Infini from scratch in 2024 after a trip to Costa Rica and Ecuador, and I still run it solo today.

**Problem** — Bean-to-bar chocolate is traditionally an intuition-driven craft, which makes it hard to iterate on recipes and hard to reproduce results batch after batch. Top quality chocolate is also rare and expensive.

**My role** — I built the whole thing myself: I modified every machine, designed the closed-loop temperature controllers and the PCBs they run on, and wrote the software integration between the website, payment processor, and ERPNext.

**Outcome** — I won gold medals at the [2025 Craft Chocolat Challenge](https://www.craftchocolatchallenge.com/season-four) on several bars. The production line is fully instrumented, so I can hit the same profile reliably from one batch to the next.

**Stack** — Home Assistant, custom 2-layer PCBs, closed-loop temperature control, ERPNext, WordPress/WooCommerce.

## The long story

![chocolat-infini-home](/images/chocolat_infini_home.jpg)

I currently run Chocolat Infini, a bean-to-bar chocolate company I started from scratch in 2024 after a trip to Costa Rica and Ecuador.

More than a chocolate factory, it is a lab where I can modify machines and optimize the process of making chocolate.

A few of my bars were awarded gold medals at the [2025 Craft Chocolat Challenge](https://www.craftchocolatchallenge.com/season-four).

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
