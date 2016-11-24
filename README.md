# keras-model-editor
Web editor for Keras models.

Use it at [neurals-ro](https://neurals-ro.github.io/keras-model-editor/) GitHub page.

## How to use
Copy your own models.json by pressing the upper-left button. Or just play with the loaded source. After changes copy the code to be imported with [Keras] (https://keras.io).

## Features
- Color coded: generally the red layers loose some data, green: bring add'l data, etc.
- User can edit the JSON for each layer by "Edit Source" in the menu
- Edit and copy for Keras of the model's JSON with the source button (upper-left corner)
- Add additional layers at the output of any layer (the arrow down icon in the right of each layer)


## Known Bugs
- Mixes default values with empty variables. But editing the source for each layer can be used as workaround.
- Cannot change the layer class from the menu yet. (same workaround as above)

## We would love to know how to improve this
This is in pre-pre-alpha stage but still usable. Let us know what features you would like to see in version 1.

## License
GPL v.3
