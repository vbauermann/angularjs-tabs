
# angularjsTabs

### Description
An angular directive for creating tabs

### Installation
* Get the angularjs-tabs.js, angularjs-tabs.css from bower ```angularjs-tabs```.

### Usage
* Make sure you include the  ```angularjsTabs``` module in you angular app:

```
angular.module('myApp', ['angularjsTabs']);
```

* once you've added the module in your app. Use the code below to get the tabs up and running:

```html
<ul class="tab-nav" tab-nav data-tab-group="tabs-demo">
      <li><a class="active"  data-target-tab="tab-1">Tab#1</a></li>
      <li><a data-target-tab="tab-2">Tab#2</a></li>
      <li><a data-target-tab="tab-3">Tab#3</a></li>
</ul>
<div class="tabs-panels">
	<div class="tab-panel" data-tab-group="tabs-demo" data-tab-name="tab-1">
		<!--  Tab 1 content -->
	</div>
	<div class="tab-panel" data-tab-group="tabs-demo" data-tab-name="tab-2">
		<!--  Tab 2 content -->
	</div>
	<div class="tab-panel" data-tab-group="tabs-demo" data-tab-name="tab-3">
		<!--  Tab 3 content -->
	</div>
</div>
```
### Demo
Visit <a href="http://vbauermann.github.io/angularjs-tabs/">http://vbauermann.github.io/angularjs-tabs/</a> to see the directive in action
