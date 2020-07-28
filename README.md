# Sakok Ui

## Install

***Note: You should add Antd style (`import 'antd/dist/antd.css'`). In this component we don't import it to avoid css conflicts between Antd v3 and Antd v4.***

1. install package 
	1. Run `npm i sakok-ant4-component`

1. add component to your code
	1. import on top of your app `import {SearchUI, Button, Input, SearchInput, Alert} from 'sakok-ant4-component';`
	1. use in your jsx code:  

	```
	render () {
	  return (
	    <div className="App">
	      <SearchUI /> 
		  <Button type="primary" onClick={e => console.log('Clicked!')} />
	    </div>
      );
	}
	```


## dependence 
1. node: 8.10
2. npm: 6
3. antd: 4
5. less: last
6. react: 16.8.6




