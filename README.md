# nu-blox
nuBlox - [vue.js](https://vuejs.org/) based content builder.  
Written primarily for [nuCms](https://github.com/nugato/nuCMS), but you can also integrate it with other software.

More specifically, it's not a typical content builder. nuBlox returns JSON file which contains information about the structure of HTML elements.

## Developing

install dependencies
``` bash
npm install
```

serve with hot reload at localhost:8080
``` bash
npm run dev
```

build for production with minification
``` bash
npm run build
```

## Integration

#### Dependencies
+ jQuery
+ Bootstrap
+ FontAwesome


#### Instalation

+ Insert nuBlox script: dist/build.js  
+ Display nuBlox

``` bash
<nublox></nublox>
```

+ Add textarea where JSON file will be stored

``` bash
<textarea v-model="mapString"></textarea>
```

#### Parameters

**:modules** - array of objects of available nuBlox modules

|               | Description                            |
| ------------- |----------------------------------------|
| type          | system module name                     |
| name          | display module name                    |
| icon          | module icon name from FontAwesome      |

``` bash
<nublox :modules="[{type: 'html', name: 'HTML', icon: 'code'}, {type: 'image', name: 'Image', icon: 'image'}, {type: 'button', name: 'Button', icon: 'hand-pointer-o'}]"></nublox>
```

#### Events
nuBlox sends events so that it can communicate with an external application.

On module edit:
``` bash
$( 'body' ).on( 'nuBlox.edit', function( event, moduleId ) {
    //
});
```

Add new module:
``` bash
$( 'body' ).on( 'nuBlox.add', function( event, moduleId, moduleType ) {
    //
});
```
