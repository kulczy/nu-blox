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

## Dependencies
* vue.js
* jQuery
* Bootstrap
* Font Awesome

## Init
1. Include nuBlox build .js file
2. Init app by insert ```<nublox></nublox>``` tag

## Options
```<nublox></nublox>``` tag accepts various information. Example:

``` bash
<nublox testtemplate="nublox-createtemplate" output="nublox-data" :input="{
    modules: [
        { name: 'Modul specjalny', type: 'special_module' }
    ],
    templates: [
        { name: 'Templata specjalna', template: '' }
    ]
}"></nublox>
```

Option | Required | Description
------------- | -------------
**output** | required | Id of textarea where nuBlox output encoded JSON
**testtemplate** | not required | Id of textarea where nuBlox output encoded JSON but starting from the first row. This option is useful for creating complex templates.
**:input** | not required| Object with arrays of non-default module types or templates

## Events
nuBlox calls several jQuery events:

Event | Description
------------- | -------------
**nublox.edit** | Sends information about the clicked module (id, type, title)
