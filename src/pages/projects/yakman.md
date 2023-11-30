---
layout: "../../layouts/ProjectPost.astro"
title: "YakMan"
description: "A stats visualization tool for Japanese language learning platforms."
date: "Nov 30 2023"
repositoryLink: https://github.com/ranger-ross/yakman
---
<!-- Disable darkreader chrome extension: https://github.com/darkreader/darkreader/blob/main/CONTRIBUTING.md#disabling-dark-reader-on-your-site -->
<meta name="darkreader-lock">

# What and why

[YakMan](https://github.com/ranger-ross/nihongo-stats) is a config manager for applications. In modern software development its very common to need to abstract some configuration out of applications so that it can be quickly changed without rebuilding/deploying. 

There are already many solutions out there for managing config so why bother creating yet another?

Let me awnser this with a short story...

### Why

I recently joined a new project and most of our configurations were either:
1. Hardcoded in the app
2. Stored in Kubernetes manifest files

Both of these required an application restart which at the time was slow and required a lot of red tape cutting to do.

I thought surely there was some open source solution that would make this easy. But after researching for a few days, I felt that there was not a solution that I really loved. 

This lead me to create YakMan.

### Goals

What I really wanted was a config manager that is:

1. Language agnostic
2. Does not require a specific cloud (ie. AWS, GCP, Azure)
3. Ability to hotswap config with application restarts
4. Modular with the ability to extend if desired 
5. Some basic access control
6. Free and open source


# Tech Stack

- Rust 
- Actix
- SvelteKit
- Tailwind

### Why this tech stack

I started with the "core" config manager API. One of my goals is a modular design and being able to swap the UI for your own custom UI is important to the project. For that reason, I decided to go with Rust+Actix for the backend service to create a REST API. Rust is nice for its amazing DX and great type system.

For the UI, I originally tried to use [Leptos](https://leptos.dev/) to keep everything in a single language (Rust). However, I ran into some challenges with Leptos:

1. Leptos at the time was very new (like a few month old) and this might it was still very rough around the edges.
2. Lots of lifetime issues and fighting the borrow checker constantly. 

I think that Leptos has an awesome community and a bright future. The Discord was always very helpful for newcomers and there are a lot of smart people in it.
But with being relatively new to Rust and Leptos being so young I had to make the hard decision to move to another frontend framework.

I did some researching and considered my options, and finally landed on SvelteKit. I wanted YakMan to feel lightweight and very snappy, so I was hoping to avoid many V-Dom like React and Angular. I landed on Svelte because offers a very nice DX and makes state management very simple.

And after a very large PR to replace Leptos with SvelteKit, I was left with the current tech stack for YakMan.


# Lessons Learned

### OAuth and SSO can be tricky

### The Adapter pattern is awesome

https://en.wikipedia.org/wiki/Adapter_pattern

