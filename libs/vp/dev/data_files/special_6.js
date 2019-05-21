var pts = 'M5.96087,5.37469 L7.91223,5.39332 L9.06923,3.51094 L6.23716,2.03858 L3.54325,3.02637 L2.24809,5.26286 L2.8525,7.48072 L4.63118,8.24486 L7.04879,7.74164 L7.01426,6.027 L5.70183,6.45566 L4.32034,6.4743 L3.28422,6.21337 L3.59505,4.64783 L5.30465,3.30593 L7.11787,3.32457 L7.03153,4.44281 L4.57937,4.89011 L4.32034,6.4743 L5.70183,6.45566 Z'; var polys = {
	"1" : "M7.91223,5.39332 L5.96087,5.37469 L4.50241,5.36076 L4.57937,4.89011 L7.03153,4.44281 L7.11787,3.32457 L6.72058,2.2899 L9.06923,3.51094 Z",
	"10" : "M5.70183,6.45566 L7.01426,6.027 L7.04879,7.74164 L4.63118,8.24486 L2.8525,7.48072 L2.58461,6.49771 L4.32034,6.4743 Z",
	"11" : "M4.32034,6.4743 L5.70183,6.45566 L7.02253,6.43784 L7.04879,7.74164 L4.63118,8.24486 L2.8525,7.48072 L2.44986,6.00326 L3.28422,6.21337 Z",
	"12" : "M3.28422,6.21337 L4.32034,6.4743 L7.03705,7.15844 L7.04879,7.74164 L4.63118,8.24486 L2.8525,7.48072 L2.24809,5.26286 L3.54325,3.02637 L3.94634,2.87856 L3.59505,4.64783 Z",
	"13" : "M3.59505,4.64783 L3.28422,6.21337 L3.01843,7.55201 L2.8525,7.48072 L2.24809,5.26286 L3.54325,3.02637 L6.23716,2.03858 L6.6475,2.25191 L5.30465,3.30593 Z",
	"14" : "M5.30465,3.30593 L3.59505,4.64783 L2.34737,5.62715 L2.24809,5.26286 L3.54325,3.02637 L6.23716,2.03858 L8.74287,3.34127 L7.11787,3.32457 Z",
	"15" : "M7.11787,3.32457 L5.30465,3.30593 L3.39273,3.28628 L3.54325,3.02637 L6.23716,2.03858 L9.06923,3.51094 L7.91223,5.39332 L6.95884,5.38422 L7.03153,4.44281 Z",
	"16" : "M7.03153,4.44281 L7.11787,3.32457 L7.17934,2.52841 L9.06923,3.51094 L7.91223,5.39332 L5.96087,5.37469 L4.70342,6.46913 L4.32034,6.4743 L4.57937,4.89011 Z",
	"17" : "M4.57937,4.89011 L7.03153,4.44281 L8.68144,4.14185 L7.91223,5.39332 L5.96087,5.37469 L5.70183,6.45566 L4.32034,6.4743 Z",
	"18" : "M4.32034,6.4743 L4.57937,4.89011 L7.03153,4.44281 L8.60045,3.26722 L8.88461,3.41496 L5.96087,5.37469 L5.70183,6.45566 Z",
	"19" : "M5.70183,6.45566 L4.32034,6.4743 L4.57937,4.89011 L6.14544,4.60445 L5.96087,5.37469 Z",
	"2" : "M9.06923,3.51094 L7.91223,5.39332 L5.96087,5.37469 L4.34136,6.34573 L4.46024,5.6187 L7.03153,4.44281 L7.11787,3.32457 L3.63674,2.99208 L6.23716,2.03858 Z",
	"3" : "M6.23716,2.03858 L9.06923,3.51094 L8.20663,4.91435 L7.11787,3.32457 L5.30465,3.30593 L3.59505,4.64783 L2.40166,5.82637 L2.24809,5.26286 L3.54325,3.02637 Z",
	"4" : "M3.54325,3.02637 L6.23716,2.03858 L9.01519,3.48284 L7.11787,3.32457 L5.30465,3.30593 L3.59505,4.64783 L3.28422,6.21337 L3.17012,7.61717 L2.8525,7.48072 L2.24809,5.26286 Z",
	"5" : "M2.24809,5.26286 L3.54325,3.02637 L6.23716,2.03858 L6.81496,2.33897 L5.30465,3.30593 L3.59505,4.64783 L3.28422,6.21337 L5.33825,8.09768 L4.63118,8.24486 L2.8525,7.48072 Z",
	"6" : "M2.8525,7.48072 L2.24809,5.26286 L3.54325,3.02637 L4.07077,2.83294 L3.59505,4.64783 L3.28422,6.21337 L4.32034,6.4743 L5.70183,6.45566 L7.01426,6.027 L7.04879,7.74164 L4.63118,8.24486 Z",
	"7" : "M4.63118,8.24486 L2.8525,7.48072 L2.24809,5.26286 L2.43733,4.93609 L3.28422,6.21337 L4.32034,6.4743 L5.70183,6.45566 L7.01426,6.027 L7.04879,7.74164 Z",
	"8" : "M7.04879,7.74164 L4.63118,8.24486 L2.8525,7.48072 L2.41046,5.85866 L3.28422,6.21337 L4.32034,6.4743 L5.70183,6.45566 L7.01426,6.027 Z",
	"9" : "M7.01426,6.027 L7.04879,7.74164 L4.63118,8.24486 L2.8525,7.48072 L2.82887,7.39402 L5.70183,6.45566 Z"
};