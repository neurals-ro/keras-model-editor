var KerasModelConf = {}

KerasModelConf.keras_conf = {
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

KerasModelConf.keras_choices = {

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

KerasModelConf.true_false = {

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

KerasModelConf.keras_help = {
	optimizer: "str (name of optimizer) or optimizer object. See optimizers.",
	loss: "str (name of objective function) or objective function. See objectives.",
	metrics: "list of metrics to be evaluated by the model during training and testing. Typically you will use  metrics=['accuracy']. See metrics.",
	sample_weight_mode: "if you need to do timestep-wise sample weighting (2D weights), set this to 'temporal'. 'None' defaults to sample-wise weights (1D).",

	lr: "float >= 0. Learning rate.",
	beta_1: "float, 0 < beta < 1. Generally close to 1.",
	beta_2: "float, 0 < beta < 1. Generally close to 1.",
	epsilon: "float >= 0. Fuzz factor.",
	rho: "float >= 0.",
	decay: "float >= 0. Learning rate decay over each update.",
	momentum: "float >= 0. Parameter updates momentum.",
	nesterov: "boolean. Whether to apply Nesterov momentum.",

	input_length: "Length of input sequences, when it is constant. This argument is required if you are going to connect  Flatten then Dense layers upstream (without it, the shape of the dense outputs cannot be computed).",
	padding: "int, or tuple of int (length 2), or dictionary.\n-If int: How many zeros to add at the beginning and end of the padding dimension (axis 1).\n-If tuple of int (length 2) How many zeros to add at the beginning and at the end of the padding dimension, in order '(left_pad, right_pad)'.\n-If dictionary: should contain the keys {'left_pad', 'right_pad'}. If any key is missing, default value of 0 will be used for the missing key.",
	length: "integer. Upsampling factor.",
	cropping: "tuple of int (length 2) How many units should be trimmed off at the beginning and end of the cropping dimension (axis 1).",
	kernel_dim1: "Length of the first dimension in the convolution kernel.",
	kernel_dim2: "Length of the second dimension in the convolution kernel.",
	kernel_dim3: "Length of the third dimension in the convolution kernel.",
	sigma: "float, standard deviation of the noise distribution",
	t_left_init: "initialization function for the left part intercept",
	a_left_init: "initialization function for the left part slope",
	t_right_init: "initialization function for the right part intercept",
	a_right_init: "initialization function for the right part slope",
	output_dim: "int > 0.",
	alpha: "float >= 0. Negative slope coefficient.",
	theta: "float >= 0. Threshold location of activation.",
	init: "name of initialization function for the weights of the layer (see initializations), or alternatively, Theano function to use for weights initialization. This parameter is only relevant if you don't pass a weights argument.",
	activation: "name of activation function to use (see activations), or alternatively, elementwise Theano function. If you don't specify anything, no activation is applied (ie. 'linear' activation: a(x) = x).",
	weights: "list of Numpy arrays to set as initial weights. The list should have 2 elements, of shape (input_dim, output_dim) and (output_dim,) for weights and biases respectively.",
	W_regularizer: "instance of WeightRegularizer (eg. L1 or L2 regularization), applied to the main weights matrix.",
	b_regularizer: "instance of WeightRegularizer, applied to the bias.",
	activity_regularizer: "instance of ActivityRegularizer, applied to the network output.",
	W_constraint: "instance of the constraints module (eg. maxnorm, nonneg), applied to the main weights matrix.",
	b_constraint: "instance of the constraints module, applied to the bias.",
	bias: "whether to include a bias (i.e. make the layer affine rather than linear).",
	input_shape: "2D tensor with shape: ((nb_samples, input_dim)",
	input_dim: "dimensionality of the input (integer). This argument (or alternatively, the keyword argument input_shape) is required when using this layer as the first layer in a model.",

	p: "float between 0 and 1. Fraction of the input units to drop.",


	dim_ordering: "'th' or 'tf'. In 'th' mode, the channels dimension (the depth) is at index 1, in 'tf' mode is it at index 3. It defaults to the image_dim_ordering value found in your Keras config file at ~/.keras/keras.json. If you never set it, then it will be 'tf'.",


	dims: "Tuple of integers. Permutation pattern, does not include the samples dimension. Indexing starts at 1. For instance,  (2, 1) permutes the first and second dimension of the input.",

	n: "integer, repetition factor.",


	layers: "can be a list of Keras tensors or a list of layer instances. Must be more than one layer/tensor.",
	mode: "string or lambda/function. If string, must be one of: 'sum', 'mul', 'concat', 'ave', 'cos', 'dot', 'max'. If lambda/function, it should take as input a list of tensors and return a single tensor.",
	concat_axis: "integer, axis to use in mode concat.",
	dot_axes: "integer or tuple of integers, axes to use in mode dot or cos.",
	output_shape: "either a shape tuple (tuple of integers), or a lambda/function to compute output_shape (only if merge mode is a lambda/function). If the argument is a tuple, it should be expected output shape, not including the batch size (same convention as the input_shape argument in layers). If the argument is callable, it should take as input a list of shape tuples (1:1 mapping to input tensors) and return a single shape tuple, including the batch size (same convention as the  get_output_shape_for method of layers).",
	node_indices: "optional list of integers containing the output node index for each input layer (in case some input layers have multiple output nodes). will default to an array of 0s if not provided.",
	tensor_indices: "optional list of indices of output tensors to consider for merging (in case some input layer node returns multiple tensors).",
	output_mask: "mask or lambda/function to compute the output mask (only if merge mode is a lambda/function). If the latter case, it should take as input a list of masks and return a single mask.",
	"function": "The function to be evaluated. Takes input tensor as first argument.",



	output_shape: "Expected output shape from function. Can be a tuple or function. If a tuple, it only specifies the first dimension onward; sample dimension is assumed either the same as the input: output_shape = (input_shape[0], ) + output_shape or, the input is None and the sample dimension is also None: output_shape = (None, ) + output_shape If a function, it specifies the entire shape as a function of the input shape:  output_shape = f(input_shape)",
	arguments: "optional dictionary of keyword arguments to be passed to the function.",


	l1: "L1 regularization factor (positive float).",
	l2: "L2 regularization factor (positive float).",


	mask_value: "For each timestep in the input tensor (dimension #1 in the tensor), if all values in the input tensor at that timestep are equal to mask_value, then the timestep will masked (skipped) in all downstream layers (as long as they support masking).",


	nb_feature: "number of Dense layers to use internally.",




	nb_filter: "Number of convolution kernels to use (dimensionality of the output).",
	filter_length: "The extension (spatial or temporal) of each filter.",
	border_mode: "'valid' or 'same'.",
	subsample_length: "factor by which to subsample output.",

	layer: "Recurrent instance.",
	merge_mode: "Mode by which outputs of the forward and backward RNNs will be combined. One of {'sum', 'mul', 'concat', 'ave', None}. If None, the outputs will not be combined, they will be returned as a list.",

	mask_zero: "Whether or not the input value 0 is a special 'padding' value that should be masked out. This is useful for recurrent layers which may take variable length input. If this is True then all subsequent layers in the model need to support masking or an exception will be raised. If mask_zero is set to True, as a consequence, index 0 cannot be used in the vocabulary (input_dim should equal |vocabulary| + 2).",
	dropout: "float between 0 and 1. Fraction of the embeddings to drop.",

	pool_size: "tuple of D integers, factors by which to downscale (vertical, horizontal). (2, 2) will halve the image in each dimension.",
	strides: "tuple of D integers, or None. Strides values. If None, it will default to pool_size.",
	return_sequences: "Boolean. Whether to return the last output in the output sequence, or the full sequence.",
	go_backwards: "Boolean (default False). If True, process the input sequence backwards.",
	stateful: "Boolean (default False). If True, the last state for each sample at index i in a batch will be used as initial state for the sample of index i in the following batch.",
	unroll: "Boolean (default False). If True, the network will be unrolled, else a symbolic loop will be used. When using TensorFlow, the network is always unrolled, so this argument does not do anything. Unrolling can speed-up a RNN, although it tends to be more memory-intensive. Unrolling is only suitable for short sequences.",
	consume_less: "one of 'cpu', 'mem', or 'gpu' (LSTM/GRU only). If set to 'cpu', the RNN will use an implementation that uses fewer, larger matrix products, thus running faster on CPU but consuming more memory. If set to 'mem', the RNN will use more matrix products, but smaller ones, thus running slower (may actually be faster on GPU) while consuming less memory. If set to 'gpu' (LSTM/GRU only), the RNN will combine the input gate, the forget gate and the output gate into a single matrix, enabling more time-efficient parallelization on the GPU. Note: RNN dropout must be shared for all gates, resulting in a slightly reduced regularization.",

	inner_init: "initialization function of the inner cells.",
	W_regularizer: "instance of WeightRegularizer (eg. L1 or L2 regularization), applied to the input weights matrices.",
	U_regularizer: "instance of WeightRegularizer (eg. L1 or L2 regularization), applied to the recurrent weights matrices.",
	b_regularizer: "instance of WeightRegularizer, applied to the bias.",
	dropout_W: "float between 0 and 1. Fraction of the input units to drop for input gates.",
	dropout_U: "float between 0 and 1. Fraction of the input units to drop for recurrent connections.",

	epsilon: "small float > 0. Fuzz parameter.",
	mode: "integer, 0, 1 or 2.\n 0: feature-wise normalization. Each feature map in the input will be normalized separately. The axis on which to normalize is specified by the axis argument. Note that if the input is a 4D image tensor using Theano conventions (samples, channels, rows, cols) then you should set axis to 1 to normalize along the channels axis. During training we use per-batch statistics to normalize the data, and during testing we use running averages computed during the training phase. \n 1: sample-wise normalization. This mode assumes a 2D input. \n 2: feature-wise normalization, like mode 0, but using per-batch statistics to normalize the data during both testing and training.",
	axis: "integer, axis along which to normalize in mode 0. For instance, if your input tensor has shape (samples, channels, rows, cols), set axis to 1 to normalize per feature map (channels axis).",
	momentum: "momentum in the computation of the exponential average of the mean and standard deviation of the data, for feature-wise normalization.",
	weights: "Initialization weights. List of 2 Numpy arrays, with shapes:  [(input_shape,), (input_shape,)] Note that the order of this list is [gamma, beta, mean, std]",
	beta_init: "name of initialization function for shift parameter (see initializations), or alternatively, Theano/TensorFlow function to use for weights initialization. This parameter is only relevant if you don't pass a weights argument.",
	gamma_init: "name of initialization function for scale parameter (see initializations), or alternatively, Theano/TensorFlow function to use for weights initialization. This parameter is only relevant if you don't pass a weights argument.",
	gamma_regularizer: "instance of WeightRegularizer (eg. L1 or L2 regularization), applied to the gamma vector.",
	beta_regularizer: "instance of WeightRegularizer, applied to the beta vector.",

	nb_filter: "Number of convolution filters to use.",
	nb_row: "Number of rows in the convolution kernel.",
	nb_col: "Number of columns in the convolution kernel.",
	depth_multiplier: "how many output channel to use per input channel for the depthwise convolution step.",
	depthwise_regularizer: "instance of WeightRegularizer (eg. L1 or L2 regularization), applied to the depthwise weights matrix.",
	pointwise_regularizer: "instance of WeightRegularizer (eg. L1 or L2 regularization), applied to the pointwise weights matrix.",

	depthwise_constraint: "instance of the constraints module (eg. maxnorm, nonneg), applied to the depthwise weights matrix.",
	pointwise_constraint: "instance of the constraints module (eg. maxnorm, nonneg), applied to the pointwise weights matrix.",

}

let keras_conf = KerasModelConf.keras_conf
keras_conf.class_name = [];
for (i in keras_conf.Layer) {
	keras_conf.class_name = keras_conf.class_name.concat(keras_conf[keras_conf.Layer[i]])
}

KerasModelConf.keras_conf = keras_conf;

module.exports = KerasModelConf;
