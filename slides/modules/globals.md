### Hooking to Globals

```coffee
window.Namespace.Module =
  ...
```
<ul>
  <li class='fragment' data-fragment-index='1'><p>Hard to test in isolation (implicit dependencies)</p></li>
  <li class='fragment' data-fragment-index='2'><p>Unusable outside of the browser</p></li>
</ul>
