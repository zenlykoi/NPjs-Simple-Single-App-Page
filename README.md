# NPjs - Simple Single App Page

## Online Demo
  - [router](https://simple-singal-app-page.herokuapp.com/)
  - [render data](https://playcode.io/443033)
  - [if](https://playcode.io/443004)
  - [loop](https://playcode.io/443035)

## install
```
npm install npjs
```
## script
```
https://simple-singal-app-page.herokuapp.com/np.min.js
https://simple-singal-app-page.herokuapp.com/np.js
```

## usage
```html
<html>
  <body>
    <div id="app"></div>
    <script src="https://simple-singal-app-page.herokuapp.com/np.min.js"></script>
    <script>
    	NP.init('app');
    </script>
  </body>
</html>
```
## router
```javascript
//client
NP.routes = [
  {
    path : '/your-path',
    template : {
      title : 'Your title',
      html : `Your HTML code`
    }
  }
];
//server
app.get('/your-path',function(request,response){
	response.render('client_file');
});
```

## render data
```
using {{your_data}} in HTML code -> NP.data.your_data
```

## if
```html
<h1 np-if="seen">Seen</h1>
<script>
  NP.data.if.seen = true;  //false to hide element
</script>
```

## for loop
```html
<ol>
 <li np-for="human">
  <p style="color:red">
    <np tag="text-for" data="name"></np>
  </p>
  <p style="color:yellow">
    - <np tag="text-for" data="sex"></np>
  </p>
 </li>
</ol>
<script>
  NP.data.for = {
     human : [
      { name : 'bob' , sex : 'male' },
      { name : 'alice' , sex : 'female' }
    ]
  };
</script>
```

## init css
```html
<np tag="style">
    <!--your style code -->
</np>
```

## init JS
```html
<np tag="script">
    <!--your JS code -->
</np>
```

## Proxy data
```javascript
NP.dataProxy.???  //change dataProxy -> change data and data rendered in HTML
```

## Components
```
you may refer offline demo using webpack
```
clone
```
git clone https://github.com/zenlykoi/NPjs-Simple-Single-App-Page.git
```
Install NPM
```
npm install
```
start server
```
node index
-> demo in http://localhost:3000/component-index
```
build
```
webpack
```
watch
```
webpack --watch
```

## advice
You may use coffeeScript syntax in VScode to code component(multiline string) !
