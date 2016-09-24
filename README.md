# nuBlox

> A Vue.js Content Builder, that you can easily integrate with your content system. nuBlox returns a structure of modules in encoded JSON format, which you can display the way you want.

Project is still in development. [Temporary demo](http://kulczy.github.io/nu-blox/)

## Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Dependencies you must include in index
* jQuery
* jQuery UI (sortable, resizable)
* Bootstrap
* Font Awesome

## Init
1. Include nublox.min.js file
2. Init app by insert ```<nublox></nublox>``` tag

## Options
```<nublox></nublox>``` tag accepts various information. Example:

``` bash
<nublox testtemplate="nublox-createtemplate" output="nublox-data" imgpath="src/assets/" :input="{
    modules: [
        { name: 'Text', type: 'text', ico: 'fa fa-align-left' },
    ],
    templates: [
        { name: 'Icons = Text', image: './src/assets/row_12.svg', imageWidth: 70, template: 'STRINGIFY_NUBLOX_MAP' }
    ]
}"></nublox>
```

Explanation:

Option | Required | Description
------------- | ------------- | -------------
**output** | required | Id of textarea where nuBlox output encoded JSON
**testtemplate** | not required | Id of textarea where nuBlox output encoded JSON but starting from the first row. This option is useful for creating complex templates.
**imgpath** | required| Path to folder with images used in nuBlox
**:input** | required| Object with arrays of module types or templates

## Events
nuBlox calls several jQuery events:

Event | Description
------------- | -------------
**nublox.edit** | Sends information about the clicked module (id, type, title)

## Other
For some pages, you can turn on the pseudo read-only mode to prevent changing the arrangement of elements. You can do this by adding the CSS on the selected site:
```
.nublox-readonly, .ui-resizable-handle { display: none !important; }
```
