---
title: Index
layout: "index.njk"
---

{% for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url | url }})

{% endfor %}
