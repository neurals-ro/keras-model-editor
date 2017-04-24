# keras-model-editor
Web editor for Keras models.

Test it at https://neurals-ro.github.io/keras-model-editor/examples/index.html

Click on the model's layers (rectangles) and change the settings from the GUI or click on `Edit Source` and change the source directly.

Copy your own models.json by clicking on the leftmost rectangle -> `Edit Source`.

After changes copy the code to be imported with [Keras] (https://keras.io).

## Features
- Color coded: generally the red layers loose some data, green: bring add'l data, etc.
- User can edit the JSON for each layer by "Edit Source" in the menu
- Edit and copy for Keras of the model's JSON with the source button (upper-left corner)
- Add additional layers at the output of any layer (the arrow icon in the corner of each layer)
- Diagram direction change: from left-to-right to up-to-down


## How to use

See `examples` folder.

```
npm i keras-model-editor

```

```
new KerasModelEditor( kerasModelObject, elementId);

new KerasModelEditor( kerasModelObject, document.getElementById(elementId));

new KerasModelEditor( kerasModelObject, document.getElementById(elementId), {
  "rankdir": "LR", // "LR"  "UD"
  "nodesep": 20,
  "edgesep": 20,
  "ranksep": 40,
  "marginx": 0,
  "marginy": 0
});

```

### Example

```
<div id="kerasmodel"></div>
```

```
let model = new KerasModelEditor( kerasModelObject, 'kerasmodel', {
    "rankdir": "LR", // "LR"  "UD"
    "nodesep": 20,
    "edgesep": 20,
    "ranksep": 40,
    "marginx": 0,
    "marginy": 0
  });
model.show();

```


## Known Bugs
- Mixes default values with empty variables. But editing the source for each layer can be used as workaround.

## We would love to know how to improve this
This is in pre-alpha stage but still usable. Let us know what features you would like to see in version 1.

## License
MIT
