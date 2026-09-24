<div align="center">

# 🏸 Badminton Split

**Split court fees fairly. Keep score. All in one tap.**

A fast, modern web app that calculates exactly what each player owes based on the time they actually played, with a full-screen score counter built in.

![No backend](https://img.shields.io/badge/backend-none-1F6D4C?style=flat-square)
![Languages](https://img.shields.io/badge/language-Thai%20%7C%20English-3E6E8E?style=flat-square)
![Themes](https://img.shields.io/badge/themes-3-B8792A?style=flat-square)
![Offline data](https://img.shields.io/badge/data-stays%20on%20your%20device-175738?style=flat-square)

**[Live demo](https://your-username.github.io/your-repo/)**

</div>

---

## Overview

Splitting a court booking by "everyone pays the same" is rarely fair when people arrive late, leave early, or the price changes during the session. **Badminton Split** cuts the booking into time slices and charges each person only for the slices they were on court, at the rate that applied at that time.

Add your courts, add your players, and get an exact breakdown in seconds.

---

## Features

### 💸 Fair, time-based splitting
- Each player has their own **start and end time**, so late arrivals and early exits pay only for what they used.
- Cost is divided equally among the players on court during each time slice.
- Amounts are rounded to the satang and balanced so **everyone's shares add up exactly to the total**.
- Names are matched without regard to capitalisation ("Ann" and "ann" are the same person), even across multiple courts.

### 🕒 Flexible pricing
- Set **different hourly rates for different times of day**, for example ฿120/hr from 11:00 and ฿160/hr from 16:00.
- Bookings that span a price change are calculated slice by slice at the correct rate.
- Add, edit, or remove price tiers at any time.

### 🏟️ Multiple courts
- Add as many courts as you need, each with its own booking time and player list.
- Rename courts and **duplicate** one in a tap to reuse its setup.
- Combined totals and per-person totals are calculated across all courts.

### 📊 Clear results
- Live **grand total**, player count, and court count at the top.
- A per-person table sorted from highest to lowest.
- An expandable **breakdown per court** with a colour-coded timeline showing which price tier applied, and who paid for each interval.

### 📋 One-tap sharing
Copy a compact summary of any court, ready to paste into your group chat:

```
- Court 1: 18.00-20.00
A: 240 baht
B: 80 baht

  Total 320 baht
```

### ⚠️ Smart warnings
The app tells you when something looks off:
- A time slot that no player covers, so nobody is charged for it
- A time slot with no price configured
- The same player name entered twice on a court
- A player's time falling outside the court booking
- Invalid or reversed start and end times

### 🎯 Score counter
- Full-screen **landscape scoreboard** designed for use courtside.
- Big, readable scores with **+ / −** buttons for each side.
- Editable player names and directly editable scores.
- **Undo** your last changes and **reset** with a confirmation.
- Zoom is locked during scoring to prevent accidental pinches.

### 🎨 Personalisation
- **Languages:** Thai and English.
- **Themes:** White, Dark, and Minimal Dark.
- **Time format:** 24-hour or 12-hour.
- **Smart time entry:** type `1830`, `18:30`, `18.30`, `6.30pm`, or `6pm`, or use the clock picker.

### 🔒 Private by design
- No account, no sign-up, and no server.
- Your courts, players, and settings are **saved automatically on your device** (toggle auto-save in Settings).
- Nothing is uploaded or shared.
- One tap to reset settings or clear all data.

---

## How the split works

The booking is divided into slices wherever a player joins or leaves, or the price changes. Each slice's cost is shared equally among the players present.

**Example:** Court booked 18:00–20:00 at ฿160/hr (฿320 total)

| Player | On court | What they pay for | Total |
| --- | --- | --- | --- |
| **A** | 18:00–20:00 | 18–19 alone (฿160) + 19–20 shared (฿80) | **฿240** |
| **B** | 19:00–20:00 | 19–20 shared (฿80) | **฿80** |

---

## Quick start

1. Open **Settings** and set your court prices.
2. Tap **Add court** and choose the booking time.
3. Add players and adjust their times.
4. Read the split under **Results**, or copy it and send it to your group.

To keep score, tap the scoreboard icon in the top right and rotate your phone to landscape.

---

<div align="center">

Made with 🏸 by **@krakra_v**

</div>
