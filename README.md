# eagle-ui
This is a used to develop the background management system based on the react to develop a set of UI framework.

## Install
```
		$ npm install eagle-ui --save
```

## Usage

```
		
		//Three methods introduced
		//var eagle_ui = require('eagle-ui');
		import {Panel,PanelContent,Grid,Row,Col,CalendarPanel} from 'eagle-ui';
		//import * as Eagleui from 'eagle-ui';
		
		//react
		<Panel>
			<PanelContent>
				<Grid>
					<Row>
						<Col sm={2}>
							日历：
						</Col>
						<Col sm={10} end>
							<CalendarPanel startDate="2015-11-11">
								<input placeholder="请选择日期" style={{width:'150px'}} />
							</CalendarPanel>
						</Col>
					</Row>
				</Grid>
			</PanelContent>
		</Panel>
```

## Documentation

Open the project in the doc directory index can refer to or link to [http://uedfamily.com/documents/eagle-ui/doc](http://uedfamily.com/documents/eagle-ui/doc)

## Examples

Download dependent package installation bower, start the server, static access eagle - UI examples directory file to view the demo； or link to [http://uedfamily.com/documents/eagle-ui/examples](http://uedfamily.com/documents/eagle-ui/examples)

```	
		$ cd eagle-ui
		$ npm install bower -g
		$ npm install anywhere -g
		$ bower install 
		$ anywhere
```

## Command

```
	$ npm run demo
	$ npm run build
	$ npm run doc
	$ npm run test
```


