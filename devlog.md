# DEVLOG.md

Sales&Sause Bros

## 04.19.2025 12:00 CodingSession::BEGIN

Added devlog, readme, and files
front end, work continued w/ mock data
add more metrics?

## 04.20.2025 11:57 CodingSession::END

UI: 

have aggregate data for 2023-2025 [check boxes to see which sets to use for prediction and summmary] display
also have [check boxes] for 2026-2030 predicted data displayed

navibar: homepg[main - data visuals],    menu,      about (blurb, explanation of website functions), 
          \--> []prev data []predict data


Models:

inputs:
all food (pizza+) sales (sales breakdown)
whats no sales category??? stil pizza?

Trends:
seasonal by dates (dates)
peak hrs by time (times)
top 10 menu items by items lists (item sales + menu breakdown??? [optional])
avg net gains from total report

financial summary + suggestions??

- One with inputs Date of the year, and ouptuts total money made that date. Used to find expected money on a given day. We an either do this for all days of a new year lik 2026, or user selects a day of the year they want to check it for.

- Another with inputs time of day, and total money made on average at that time. Used to find most busy times during a typical day. We either do this for all 24 hours of a day, or user selects an hour of the day they want to check it for

- Another model where inputs are food, and outputs are the expected revenue. Then, gets their expectd revnue for the next years, like 2026. Gonna use a random forest for the foods (predicting their revenue in the next year), cause the sample size is small (only 3 years for each food), and less prone to overfitting. BUT THEN, user can define another food. Now, what we'll do is use some RAG tomfoolery to decide which current foods it's already closest to, and then gets its expected revenue that way.

- One for general food groups, like pizzas as a whole and their revenue, same as the food one but more broad foods.
