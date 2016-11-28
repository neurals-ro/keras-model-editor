var keras_conf = {
"Layer": [
	"Core Layers",
	"Convolution Layers",
	"Pooling Layers",
	"Locally-connected Layers", // not supported by keras-js yet
	"Recurrent Layers",
	"Embedding Layers",
	"Advanced Activation Layers",
	"Normalization Layers",
	"Noise Layers", // ---
	"Layer wrappers"
],

"Core Layers": [
	"InputLayer",
	"Dense",
	"Activation",
	"Dropout",
	"SpatialDropout2D",
	"SpatialDropout3D",
	"Flatten",
	"Reshape",
	"Permute",
	"RepeatVector",
	"Merge",
	"Lambda",  // ---
	"ActivityRegularization",
	"Masking",
	"Highway",
	"MaxoutDense",
	"TimeDistributedDense"
],

"Convolution Layers": [
	"Convolution1D",
	"AtrousConvolution1D", // ---
	"Convolution2D",
	"AtrousConvolution2D",
	"SeparableConvolution2D",
	"Deconvolution2D",
	"Convolution3D",
	"Cropping1D",
	"Cropping2D",
	"Cropping3D",
	"UpSampling1D",
	"UpSampling2D",
	"UpSampling3D",
	"ZeroPadding1D",
	"ZeroPadding2D",
	"ZeroPadding3D",
],

"Pooling Layers": [
	"MaxPooling1D",
	"MaxPooling2D",
	"MaxPooling3D",
	"AveragePooling1D",
	"AveragePooling2D",
	"AveragePooling3D",
	"GlobalMaxPooling1D",
	"GlobalAveragePooling1D",
	"GlobalMaxPooling2D",
	"GlobalAveragePooling2D",
	"GlobalMaxPooling3D",   // ---
	"GlobalAveragePooling3D"  // ---
],

"Locally-connected Layers": [
	"LocallyConnected1D",
	"LocallyConnected2D"
],

"Recurrent Layers": [
	"LSTM",
	"GRU",
	"SimpleRNN"
],


"Embedding Layers": [
	"Embedding"
],

"Advanced Activation Layers": [
	"LeakyReLU",
	"PReLU",
	"ELU",
	"ParametricSoftplus",
	"ThresholdedReLU",
	"SReLU"
],

"Normalization Layers": [
	"BatchNormalization"
],

"Noise Layers": [
	"GaussianNoise",
	"GaussianDropout"
],

"Layer wrappers": [
	"TimeDistributed",
	"Bidirectional"
],

"Optimizer":[
	"SGD",
	"RMSprop",
	"Adagrad",
	"Adadelta",
	"Adam",
	"Adamax",
	"Nadam",
	"TFOptimizer"
]
}

var keras_choices = {

loss: [
	"mean_squared_error",
	"mean_absolute_error",
	"mean_absolute_percentage_error",
	"mean_squared_logarithmic_error",
	"squared_hinge",
	"hinge",
	"binary_crossentropy",
	"categorical_crossentropy",
	"sparse_categorical_crossentropy",
	"kullback_leibler_divergence",
	"poisson",
	"cosine_proximity"
],

optimizer: [
	"sgd",
	"rmsprop",
	"adagrad",
	"adadelta",
	"adam",
	"adamax",
	"nadam",
	"custom"
],

"input_dtype": [
	"float32",
	"float64"
],

"sparse": {
	true: true,
	false: false
},

"activation": [
	"softmax",
	"softplus",
	"softsign",
	"relu",
	"tanh",
	"sigmoid",
	"hard_sigmoid",
	"linear"
],

inner_activation: [
	"softmax",
	"softplus",
	"softsign",
	"relu",
	"tanh",
	"sigmoid",
	"hard_sigmoid",
	"linear"
],

init: [
	"uniform",
	"lecun_uniform",
	"normal",
	"identity",
	"orthogonal",
	"zero",
	"glorot_normal",
	"glorot_uniform",
	"he_normal",
	"he_uniform"
],

inner_init: [
	"uniform",
	"lecun_uniform",
	"normal",
	"identity",
	"orthogonal",
	"zero",
	"glorot_normal",
	"glorot_uniform",
	"he_normal",
	"he_uniform"
],

forget_bias_init: [
	"uniform",
	"lecun_uniform",
	"normal",
	"identity",
	"orthogonal",
	"zero",
	"glorot_normal",
	"glorot_uniform",
	"he_normal",
	"he_uniform"
],

beta_init: [
	"uniform",
	"lecun_uniform",
	"normal",
	"identity",
	"orthogonal",
	"zero",
	"glorot_normal",
	"glorot_uniform",
	"he_normal",
	"he_uniform"
],

gamma_init: [
	"uniform",
	"lecun_uniform",
	"normal",
	"identity",
	"orthogonal",
	"zero",
	"glorot_normal",
	"glorot_uniform",
	"he_normal",
	"he_uniform"
],

t_left_init: [
	"uniform",
	"lecun_uniform",
	"normal",
	"identity",
	"orthogonal",
	"zero",
	"glorot_normal",
	"glorot_uniform",
	"he_normal",
	"he_uniform"
],

a_left_init: [
	"uniform",
	"lecun_uniform",
	"normal",
	"identity",
	"orthogonal",
	"zero",
	"glorot_normal",
	"glorot_uniform",
	"he_normal",
	"he_uniform"
],

t_right_init: [
	"uniform",
	"lecun_uniform",
	"normal",
	"identity",
	"orthogonal",
	"zero",
	"glorot_normal",
	"glorot_uniform",
	"he_normal",
	"he_uniform"
],

a_right_init: [
	"uniform",
	"lecun_uniform",
	"normal",
	"identity",
	"orthogonal",
	"zero",
	"glorot_normal",
	"glorot_uniform",
	"he_normal",
	"he_uniform"
],

/*
strides: [
	"None"
],
*/


border_mode: [
	"valid",
	"same"
],

dim_ordering: [
	"tf",
	"th",
	"default"
],

merge_mode:[
	'sum',
	'mul',
	'concat',
	'ave',
	"None"
]
}

var true_false = {

trainable: [
	true,
	false
],

sparse: [
	true,
	false
],

bias: [
	true,
	false
],

trainable: [
	true,
	false
],

stateful: [
	true,
	false
],

unroll: [
	true,
	false
],

mask_zero: [
	true,
	false
],

go_backwards: [
	true,
	false
],

return_sequences: [
	true,
	false
],







}

keras_conf.class_name = [];
for (i in keras_conf.Layer) {
	keras_conf.class_name = keras_conf.class_name.concat(keras_conf[keras_conf.Layer[i]])
}
