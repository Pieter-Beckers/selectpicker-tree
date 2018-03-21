# selectpicker-tree
A tree for a set of bootstrap selectpickers

## Requirements
- jquery
- bootstrap
- bootstrap-select

## Example
- See docs/index.html for the example

## Usage
- Put a `div` with a unique `id` in a `form`
- Call  `$( "#...id..." ).selectpickerTree( {data: [...], metadata: {...}});`
- data:

  - `array` of `object` with a property for the name and property for the items
  
- metadata:
  - `object` with properties:
  	- name `string`: name of the data to show in the selectpicker options: defaults to `name`
  	- label `string`: form label for the select picker
  	- children `string`: name of the children for the next selectpickers data, defaults to `items`
  	- child `object`: metadata of the child
  	- options `object`: selectpicker options, defaults to `{ liveSearch: true, title: 'Choose one...'}`. title is always set if none is given
