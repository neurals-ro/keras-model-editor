
var keras_layer = {
	class_name: "Dense",
	name: "dense_",
	"inbound_nodes": [],


}

var keras_args = {
	InputLayer: {
		help: "Input layer",
		color: "#00ff00",
		args: {
			"batch_input_shape": [ null, 299, 299, 3],
            "sparse": false,
            "input_dtype": "float32"
		}
	},
	Dense: {
		help: "Just your regular fully connected NN layer.",
		color: "#7f7f00",
		args: {
			output_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200
		}

	},
	
	Activation: {
		help: "Applies an activation function to an output.",
		color: "#ff5656",
		args: {
			activation: "tanh"
		}

	},

	Dropout: {
		help: "Applies Dropout to the input. Dropout consists in randomly setting a fraction p of input units to 0 at each update during training time, which helps prevent overfitting.",
		color: "#ff5656",
		args: {
			p: 0.5
		}

	},

	SpatialDropout2D: {
		help: "This version performs the same function as Dropout, however it drops entire 2D feature maps instead of individual elements. If adjacent pixels within feature maps are strongly correlated (as is normally the case in early convolution layers) then regular dropout will not regularize the activations and will otherwise just result in an effective learning rate decrease. In this case, SpatialDropout2D will help promote independence between feature maps and should be used instead.",
		color: "#ff5656",
		args: {
			p: 0.5,
			dim_ordering: 'tf'
		}

	},
	SpatialDropout3D: {
		help: "This version performs the same function as Dropout, however it drops entire 3D feature maps instead of individual elements. If adjacent pixels within feature maps are strongly correlated (as is normally the case in early convolution layers) then regular dropout will not regularize the activations and will otherwise just result in an effective learning rate decrease. In this case, SpatialDropout#D will help promote independence between feature maps and should be used instead.",
		color: "#ff5656",
		args: {
			p: 0.5,
			dim_ordering: 'tf'
		}

	},

	Permute: {
		help: "Permutes the dimensions of the input according to a given pattern. Useful for e.g. connecting RNNs and convnets together.",
		color: "#000",
		args: {
			dims: "(2, 1)"
		}

	},

	Reshape: {
		help: "Reshapes an output to a certain shape.",
		color: "#000",
		args: {

		}
	},

	Flatten: {
		help: "Flattens the input. Does not affect the batch size.",
		color: "#000",
		args: {

		}
	},

	RepeatVector:{
		help: "Repeats the input n times.",
		color: "#000",
		args: {
			n: 3
		}

	},

	Merge: {
		help: "A Merge layer can be used to merge a list of tensors into a single tensor, following some merge mode.",
		color: "#5fbf00",
		args: {
			layers: "[layer1, layer2]",
			mode: "sum",
			concat_axis: 2,
			dot_axes: "(tuple)",
			output_shape: "(tuple integers)",
			node_indices: "",
			tensor_indices: "",
			output_mask: ""
		}

	},

	ActivityRegularization: {
		help: "Layer that passes through its input unchanged, but applies an update to the cost function based on the activity.",
		color: "#000",
		args: {
			l1: 0.0,
			l2: 0.0
		}
	},


	Lambda: {
		help: "Used for evaluating an arbitrary Theano / TensorFlow expression on the output of the previous layer.",
		color: "#000",
		args: {
			"function": "",
			output_shape: "(input_shape[0], )",
			arguments: ""
		}

	},

	Masking: {
		help: "Masks an input sequence by using a mask value to identify timesteps to be skipped.",
		color: "#000",
		args: {
			mask_value: 0.0
		}
	},

	Highway: {
		help: "Densely connected highway network, a natural extension of LSTMs to feedforward networks.",
		color: "#000",
		args: {
			output_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200
		}

	},
	MaxoutDense: {
		help: "A MaxoutDense layer takes the element-wise maximum of nb_feature Dense(input_dim, output_dim) linear layers. This allows the layer to learn a convex, piecewise linear activation function over the inputs.",
		color: "#ff0000",
		args: {
			output_dim: 1,
			nb_feature: 2,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200
		}

	},
	TimeDistributedDense: {
		help: "Deprecated: use TimeDistributed",
		color: "#f00",
		args: {
			deprecated: "use TimeDistributed"
		}
	},

	Convolution1D: {
		help: "Convolution operator for filtering neighborhoods of one-dimensional inputs. When using this layer as the first layer in a model, either provide the keyword argument input_dim (int, e.g. 128 for sequences of 128-dimensional vectors), or input_shape (tuple of integers, e.g. (10, 128) for sequences of 10 vectors of 128-dimensional vectors).",
		color: "#005fbf",
		args: {
			nb_filter: 1,
			filter_length: "",
			border_mode: "valid",
			subsample_length: 300,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_length: 300
		}

	},

	Convolution2D: {
		help: "Convolution operator for filtering windows of two-dimensional inputs. When using this layer as the first layer in a model, provide the keyword argument input_shape (tuple of integers, does not include the sample axis), e.g.  input_shape=(3, 128, 128) for 128x128 RGB pictures.",
		color: "#005fbf",
		args: {
			nb_filter: 1,
			nb_row: 200,
			nb_col: 200,
			filter_length: "",
			border_mode: "valid",
			subsample_length: 300,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			dim_ordering: "tf",
			bias: true,
			input_length: 300
		}

	},

	Deconvolution2D: {
		help: "Transposed convolution operator for filtering windows of two-dimensional inputs. The need for transposed convolutions generally arises from the desire to use a transformation going in the opposite direction of a normal convolution, i.e., from something that has the shape of the output of some convolution to something that has the shape of its input while maintaining a connectivity pattern that is compatible with said convolution. ",
		color: "#005fbf",
		args: {
			nb_filter: 1,
			nb_row: 200,
			nb_col: 200,
			output_shape: "",
			border_mode: "valid",
			subsample: "",
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			dim_ordering: "tf",
			bias: true,
		}

	},

	Convolution3D: {
		help: "Convolution operator for filtering windows of three-dimensional inputs. When using this layer as the first layer in a model, provide the keyword argument input_shape (tuple of integers, does not include the sample axis), e.g.  input_shape=(3, 10, 128, 128) for 10 frames of 128x128 RGB pictures.",
		color: "#005fbf",
		args: {
			nb_filter: 1,
			kernel_dim1: 200,
			kernel_dim2: 200,
			kernel_dim3: 200,
			border_mode: "valid",
			subsample: "",
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			dim_ordering: "tf",
			bias: true
		}

	},

	Cropping1D: {
		help: "Cropping layer for 1D input (e.g. temporal sequence). It crops along the time dimension (axis 1).",
		color: "#ff5656",
		args: {
			cropping: "(1, 1)"
		}
	},

	Cropping2D: {
		help: "Cropping layer for 2D input (e.g. picture). It crops along spatial dimensions, i.e. width and height.",
		color: "#ff5656",
		args: {
			cropping: "((0, 0), (0, 0))",
			dim_ordering: "tf"
		}
	},

	Cropping3D: {
		help: "Cropping layer for 3D data (e.g. spatial or saptio-temporal).",
		color: "#ff5656",
		args: {
			cropping: "((1, 1), (1, 1), (1, 1))",
			dim_ordering: "tf"
		}
	},

	UpSampling1D: {
		help: "Repeat each temporal step length times along the time axis.",
		color: "#aaff56",
		args: {
			length: 2
		}
	},

	UpSampling2D: {
		help: "Repeat the rows and columns of the data by size[0] and size[1] respectively.",
		color: "#aaff56",
		args: {
			size: "(2, 2)",
			dim_ordering: "tf"
		}
	},

	UpSampling3D: {
		help: "Repeat the first, second and third dimension of the data by size[0], size[1] and size[2] respectively.",
		color: "#aaff56",
		args: {
			size: "(2, 2, 2)",
			dim_ordering: "tf"
		}
	},

	ZeroPadding1D: {
		help: "Zero-padding layer for 1D input (e.g. temporal sequence).",
		color: "#aaff56",
		args: {
			padding: "1"
		}
	},

	ZeroPadding2D: {
		help: "Zero-padding layer for 1D input (e.g. temporal sequence).",
		color: "#aaff56",
		args: {
			padding: "(1, 1)",
			dim_ordering: "tf"
		}
	},

	ZeroPadding3D: {
		help: "Zero-padding layer for 3D data (spatial or spatio-temporal).",
		color: "#aaff56",
		args: {
			padding: "(1, 1, 1)",
			dim_ordering: "tf"
		}
	},

	Bidirectional: {
		help: "Bidirectional wrapper for RNNs.",
		color: "#003f7f",
		args: {
			layer: "",
			merge_mode: "sum"
		}

	},

	"Embedding": {
		help: "Turn positive integers (indexes) into dense vectors of fixed size. eg. [[4], [20]] -> [[0.25, 0.1], [0.6, -0.2]] \nThis layer can only be used as the first layer in a model.",
		color: "#003f7f",
		args: {
			output_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200,
			mask_zero: false,
			dropout: 0.5
		}
	},

	MaxPooling1D: {
		help: "Max pooling operation for temporal data.",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid'
		}
	},

	MaxPooling2D: {
		help: "Max pooling operation for 2D data.",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid',
			dim_ordering: "tf"
		}

	},

	MaxPooling3D: {
		help: "Max pooling operation for 3D data (spatial or spatio-temporal).",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid',
			dim_ordering: "tf"
		}

	},


	AveragePooling1D: {
		help: "Average pooling operation for temporal data.",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid'
		}
	},


	AveragePooling2D: {
		help: "Average pooling operation for 2D data.",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid',
			dim_ordering: "tf"
		}
	},

	AveragePooling3D: {
		help: "Average pooling operation for 3D data (spatial or spatio-temporal).",
		color: "#ff0000",
		args: {
			pool_size: "",
			strides: "",
			border_mode: 'valid',
			dim_ordering: "tf"
		}
	},

	GlobalMaxPooling1D: {
		help: "Global max pooling operation for temporal data.",
		color: "#ff0000",
		args: {
		}
	},

	GlobalAveragePooling1D: {
		help: "Global average pooling operation for temporal data.",
		color: "#ff0000",
		args: {
		}
	},

	GlobalMaxPooling2D: {
		help: "Global max pooling operation for spatial data.",
		color: "#ff0000",
		args: {
			dim_ordering: "tf"
		}
	},

	GlobalAveragePooling2D: {
		help: "Global average pooling operation for spatial data.",
		color: "#ff0000",
		args: {
			dim_ordering: "tf"
		}
	},

	LocallyConnected1D: {
		help: "The LocallyConnected1D layer works similarly to the Convolution1D layer, except that weights are unshared, that is, a different set of filters is applied at each different patch of the input. When using this layer as the first layer in a model, either provide the keyword argument input_dim (int, e.g. 128 for sequences of 128-dimensional vectors), or input_shape (tuple of integers, e.g. input_shape=(10, 128) for sequences of 10 vectors of 128-dimensional vectors). Also, note that this layer can only be used with a fully-specified input shape (None dimensions not allowed).",
		color: "#7f7f00",
		args: {
			nb_filter: 1,
			filter_length: "",
			input_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			subsample_length: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			input_dim: 200,
			input_length: "None"
		}
	},

	LocallyConnected2D: {
		help: "The LocallyConnected1D layer works similarly to the Convolution1D layer, except that weights are unshared, that is, a different set of filters is applied at each different patch of the input. When using this layer as the first layer in a model, either provide the keyword argument input_dim (int, e.g. 128 for sequences of 128-dimensional vectors), or input_shape (tuple of integers, e.g. input_shape=(10, 128) for sequences of 10 vectors of 128-dimensional vectors). Also, note that this layer can only be used with a fully-specified input shape (None dimensions not allowed).",
		color: "#7f7f00",
		args: {
			nb_filter: 1,
			nb_row: 1,
			nb_col: 1,
			filter_length: "",
			input_dim: 1,
			init: "uniform",
			activation: "tanh",
			weights: "",
			subsample_length: "",
			W_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "activity_l2(0.01)",
			W_constraint: "maxnorm(m=2)",
			b_constraint: "maxnorm(m=2)",
			bias: true,
			dim_ordering: "tf"
		}
	},











	SimpleRNN: {
		help: "Fully-connected RNN where the output is to be fed back to input.",
		color: "#003f7f",
		args: {
			output_dim: 200,
			init: "uniform",
			inner_init: "uniform",
			activation: "tanh",
			W_regularizer: "l2(0.01)",
			U_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			dropout_W: 0.5,
			dropout_U: 0.5
		}

	},
	GRU: {
		help: "Gated Recurrent Unit - Cho et al. 2014.",
		color: "#003f7f",
		args: {
			output_dim: 200,
			init: "uniform",
			inner_init: "uniform",
			activation: "tanh",
			inner_activation: "tanh",
			W_regularizer: "l2(0.01)",
			U_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			dropout_W: 0.5,
			dropout_U: 0.5
		}

	},
	LSTM: {
		help: "Long-Short Term Memory unit - Hochreiter 1997.",
		color: "#003f7f",
		args: {
			output_dim: 200,
			init: "uniform",
			inner_init: "uniform",
			forget_bias_init: "uniform",
			activation: "tanh",
			inner_activation: "tanh",
			W_regularizer: "l2(0.01)",
			U_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			dropout_W: 0.5,
			dropout_U: 0.5
		}

	},

	BatchNormalization: {
		help: "Normalize the activations of the previous layer at each batch, i.e. applies a transformation that maintains the mean activation close to 0 and the activation standard deviation close to 1.",
		color: "#003f7f",
		args: {
			epsilon: 0.01,
			mode: 0,
			axis: 1,
			momentum: 0.1,
			weights: "",
			beta_init: "uniform",
			gamma_init: "uniform",
			gamma_regularizer: "l2(0.01)",
			beta_regularizer: "l2(0.01)"
		}

	},

	SeparableConvolution2D: {
		help: "Separable convolution operator for 2D inputs. \n Separable convolutions consist in first performing a depthwise spatial convolution (which acts on each input channel separately) followed by a pointwise convolution which mixes together the resulting output channels. The  depth_multiplier argument controls how many output channels are generated per input channel in the depthwise step. \n Intuitively, separable convolutions can be understood as a way to factorize a convolution kernel into two smaller kernels, or as an extreme version of an Inception block.",
		color: "#007fff",
		args: {
			nb_filter: 1,
			nb_row: 2,
			nb_col: 2,
			init: "uniform",
			activation: "tanh",
			weights: "",
			border_mode: 'valid',
			subsample: "",
			depth_multiplier: "",
			depthwise_regularizer: "l2(0.01)",
			pointwise_regularizer: "l2(0.01)",
			b_regularizer: "l2(0.01)",
			activity_regularizer: "l2(0.01)",
			depthwise_constraint: "",
			pointwise_constraint: "",
			b_constraint: "",
			dim_ordering: "tf",
			bias: false
		}

	},

	TimeDistributed: {
		help: "This wrapper allows to apply a layer to every temporal slice of an input. The input should be at least 3D, and the dimension of index one will be considered to be the temporal dimension. \nConsider a batch of 32 samples, where each sample is a sequence of 10 vectors of 16 dimensions. The batch input shape of the layer is then (32, 10, 16) (and the input_shape, not including the samples dimension, is  (10, 16)).",
		color: "#003f7f",
		args: {
			layer: ""
		}
	},



	GlobalAveragePooling2D: {
		help: "Global average pooling operation for spatial data.",
		color: "#000",
		args: {
			dim_ordering: "tf",
		}

	},

	LeakyReLU: {
		help: "Special version of a Rectified Linear Unit that allows a small gradient when the unit is not active: f(x) = alpha * x for x < 0, f(x) = x for x >= 0.",
		color: "#003f7f",
		args: {
			alpha: 0.0
		}
	},

	PReLU: {
		help: "Parametric Rectified Linear Unit: f(x) = alphas * x for x < 0, f(x) = x for x >= 0, where alphas is a learned array with the same shape as x.",
		color: "#003f7f",
		args: {
			init: "uniform",
			weights: ""
		}
	},

	ELU: {
		help: "Exponential Linear Unit: f(x) =  alpha * (exp(x) - 1.) for x < 0, f(x) = x for x >= 0.",
		color: "#003f7f",
		args: {
			alpha: 1
		}
	},

	ParametricSoftplus: {
		help: "Parametric Softplus: alpha * log(1 + exp(beta * x))",
		color: "#003f7f",
		args: {
			alpha_init: 0.5,
			beta_init: 0.5,
			weights: ""
		}
	},

	ThresholdedReLU: {
		help: "Thresholded Rectified Linear Unit: f(x) = x for x > theta f(x) = 0 otherwise.",
		color: "#003f7f",
		args: {
			theta: 0.5
		}
	},

	SReLU: {
		help: "S-shaped Rectified Linear Unit.",
		color: "#003f7f",
		args: {
			t_left_init: "uniform",
			a_left_init: "uniform",
			t_right_init: "uniform",
			a_right_init: "uniform"
		}
	},

	GaussianNoise: {
		help: "Apply to the input an additive zero-centered Gaussian noise with standard deviation sigma. This is useful to mitigate overfitting (you could see it as a kind of random data augmentation). Gaussian Noise (GS) is a natural choice as corruption process for real valued inputs. \nAs it is a regularization layer, it is only active at training time.",
		color: "#ffaaff",
		args: {
			sigma: 0.5
		}
	},

	GaussianDropout: {
		help: "Apply to the input an multiplicative one-centered Gaussian noise with standard deviation sqrt(p/(1-p)). \nAs it is a regularization layer, it is only active at training time.",
		color: "#ffaaff",
		args: {
			p: 0.5
		}
	},



















}

keras_help = {
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
