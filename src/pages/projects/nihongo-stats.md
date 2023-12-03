---
layout: "../../layouts/ProjectPost.astro"
title: "Nihongo Stats"
description: "A stats visualization tool for Japanese language learning platforms."
date: "Jan 01 2023"
repositoryLink: https://github.com/ranger-ross/nihongo-stats
---

# What and why

[Nihongo Stats](https://nihongostats.com/) is an Open Source webapp I built while learning Japanese. Learning a second language is a long process, and it is difficult to see your progress. I wanted a way to see some progress... I use various language learning apps, that happen to provide APIs. So the programmer in my thought 
> I could use this data to visualize my progress

So I built a React app that fetches and displays graphs of various metrics.

![](/projects/nihongo-stats.png)

# Tech Stack

- React 
- Vite
- TanStack Query (aka React Query)
- React Chart
- Nginx
- Cloud Run (Google Cloud Platform)
- GitHub Actions

### Why I picked these

React/JSX is my preferred why to write UIs.
I started this project with "Create React App" but I migrated to Vite because the build/dev speed is so much better. I considered NextJS but currently, it does not offer much due to the API rate limiting forcing the data fetching to be done client side.

I use Cloud Run because, at the time GCP was what I was most familiar with. Cloud Run allows me to simply deploy a container and not worry about scaling. If I were to re-do this project, I would consider using Vercel due to its great CI/CD.

# Lessons Learned

### Typescript

My biggest lesson learned during this project was that Typescript is basically a requirement in 2023. I started this project in Javascript because I thought
> This will be a simple project and I'll be done quicker with Javascript since I won't have to worry about types.

I couldn't have been more wrong...

This project does a lot of data mapping and the lack of types quickly made the code a mess. So many bugs were due to a property not existing or being named slightly differently (ie. `reviewDate` vs `reviewTimestamp`).

Adding Typescript to this project fixed many of those types of bugs.

In my opinion, there are very few scenarios/projects where not using Typescript is the better choice.

### Caching is hard

Due to the rate-limiting restrictions on Wanikani's API, caching is data is very important for this app. When I started, this project I naively added my own cache... 🤦‍♂️

Caching seems simple on the surface but quickly becomes very complex. I have moved my caching from a custom solution to using the browsers' built-in cache and leveraging libraries like Tanstack Query.