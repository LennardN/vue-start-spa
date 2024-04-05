# Components
## Aufbau
```HTML
<template>
...
</template>
<script>
...
</script>
<style>
...
</style>
```
## Template
HTML mit Template Syntax `{{ }}` um einfach auf die Daten zuzugreifen.
Ermöglicht dies auch für Attribute von HTML Elementen mit einem `:` vor dem Attribut.
`:` ist die kurze Schreibweise von `v-bind:`.
### Beispiele
```HTML
<span>Message: {{ message }} </span>
<img :src="'image' + index + 'png'"> 
```
### Components einbinden
Components die man einbinden will, müssen vorher im Script unter components deklariert sein und importiert werden. DIese können wie ganz normale HTML Elemente behandelt werden und bieten die Möglichkeit eigene Logik, Struktur und Style zu bündeln, um somit modulare Apps zu schreiben.
## Script
Im Script werden verschiedene Options festgelegt. Diese bestehen aus einfachen Objekten die andere Resourcen deklarieren oder aus Funktionen, die zu verschiedenen Zeitpunkten ausgeführt werden. 


## Style
CSS Syntax kann mit scoped-Attribut auf das Component eingeschränkt werden
## Routing
Ermöglicht dnymisches Laden der Components