(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sb", [], factory);
	else if(typeof exports === 'object')
		exports["sb"] = factory();
	else
		root["sb"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.displayLabels = exports.SubstituentLables = exports.OriginalPosition = exports.XYLinkLabels = exports.colorDivisions = exports.XYvalues = exports.emFunction = exports.menuFunction = exports.visFunction = exports.appFunction = exports.ImageExporter = exports.Structures = exports.QuickModeMonosaccharides = exports.MonosaccharideGlycoCT = exports.SubstituentsPositions = exports.RepeatingUnit = exports.NodeComparator = exports.GlycoCTSubstituents = exports.GlycoCTWriter = exports.GlycoCTParser = exports.Glycan = exports.Substituent = exports.SubstituentLinkage = exports.GlycosidicLinkage = exports.SubstituentType = exports.Monosaccharide = exports.RingType = exports.MonosaccharideType = exports.DonorPosition = exports.Isomer = exports.Anomericity = exports.AcceptorPosition = exports.GraphNode = exports.GraphEdge = exports.Graph = undefined;
	
	var _Graph = __webpack_require__(1);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	var _GraphEdge = __webpack_require__(2);
	
	var _GraphEdge2 = _interopRequireDefault(_GraphEdge);
	
	var _GraphNode = __webpack_require__(4);
	
	var _GraphNode2 = _interopRequireDefault(_GraphNode);
	
	var _AcceptorPosition = __webpack_require__(5);
	
	var _AcceptorPosition2 = _interopRequireDefault(_AcceptorPosition);
	
	var _Anomericity = __webpack_require__(7);
	
	var _Anomericity2 = _interopRequireDefault(_Anomericity);
	
	var _Isomer = __webpack_require__(8);
	
	var _Isomer2 = _interopRequireDefault(_Isomer);
	
	var _DonorPosition = __webpack_require__(9);
	
	var _DonorPosition2 = _interopRequireDefault(_DonorPosition);
	
	var _MonosaccharideType = __webpack_require__(10);
	
	var _MonosaccharideType2 = _interopRequireDefault(_MonosaccharideType);
	
	var _RingType = __webpack_require__(11);
	
	var _RingType2 = _interopRequireDefault(_RingType);
	
	var _SubstituentType = __webpack_require__(12);
	
	var _SubstituentType2 = _interopRequireDefault(_SubstituentType);
	
	var _SubstituentsGlycoCT = __webpack_require__(13);
	
	var _SubstituentsGlycoCT2 = _interopRequireDefault(_SubstituentsGlycoCT);
	
	var _SubstituentsPositions = __webpack_require__(14);
	
	var _SubstituentsPositions2 = _interopRequireDefault(_SubstituentsPositions);
	
	var _MonosaccharideGlycoCT = __webpack_require__(15);
	
	var _MonosaccharideGlycoCT2 = _interopRequireDefault(_MonosaccharideGlycoCT);
	
	var _QuickModeMonosaccharides = __webpack_require__(16);
	
	var _QuickModeMonosaccharides2 = _interopRequireDefault(_QuickModeMonosaccharides);
	
	var _Structures = __webpack_require__(17);
	
	var _Structures2 = _interopRequireDefault(_Structures);
	
	var _XYvalues = __webpack_require__(18);
	
	var _XYvalues2 = _interopRequireDefault(_XYvalues);
	
	var _colorDivisions = __webpack_require__(19);
	
	var _colorDivisions2 = _interopRequireDefault(_colorDivisions);
	
	var _SubstituentLabels = __webpack_require__(20);
	
	var _SubstituentLabels2 = _interopRequireDefault(_SubstituentLabels);
	
	var _XYLinkLabels = __webpack_require__(21);
	
	var _XYLinkLabels2 = _interopRequireDefault(_XYLinkLabels);
	
	var _OriginalPosition = __webpack_require__(22);
	
	var _OriginalPosition2 = _interopRequireDefault(_OriginalPosition);
	
	var _GlycosidicLinkage = __webpack_require__(23);
	
	var _GlycosidicLinkage2 = _interopRequireDefault(_GlycosidicLinkage);
	
	var _SubstituentLinkage = __webpack_require__(24);
	
	var _SubstituentLinkage2 = _interopRequireDefault(_SubstituentLinkage);
	
	var _Monosaccharide = __webpack_require__(25);
	
	var _Monosaccharide2 = _interopRequireDefault(_Monosaccharide);
	
	var _Substituent = __webpack_require__(27);
	
	var _Substituent2 = _interopRequireDefault(_Substituent);
	
	var _Glycan = __webpack_require__(28);
	
	var _Glycan2 = _interopRequireDefault(_Glycan);
	
	var _RepeatingUnit = __webpack_require__(26);
	
	var _RepeatingUnit2 = _interopRequireDefault(_RepeatingUnit);
	
	var _GlycoCTParser = __webpack_require__(29);
	
	var _GlycoCTParser2 = _interopRequireDefault(_GlycoCTParser);
	
	var _GlycoCTWriter = __webpack_require__(30);
	
	var _GlycoCTWriter2 = _interopRequireDefault(_GlycoCTWriter);
	
	var _NodeComparator = __webpack_require__(32);
	
	var _NodeComparator2 = _interopRequireDefault(_NodeComparator);
	
	var _ImageExporter = __webpack_require__(36);
	
	var _ImageExporter2 = _interopRequireDefault(_ImageExporter);
	
	var _appFunction = __webpack_require__(33);
	
	var _appFunction2 = _interopRequireDefault(_appFunction);
	
	var _visFunction = __webpack_require__(34);
	
	var _visFunction2 = _interopRequireDefault(_visFunction);
	
	var _menuFunction = __webpack_require__(38);
	
	var _menuFunction2 = _interopRequireDefault(_menuFunction);
	
	var _emFunction = __webpack_require__(35);
	
	var _emFunction2 = _interopRequireDefault(_emFunction);
	
	var _svgUtility = __webpack_require__(40);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import svgUtility from "./js/views/svg/svgUtility";
	
	//Glycomics Structure
	//Dictionary
	exports.Graph = _Graph2.default;
	exports.GraphEdge = _GraphEdge2.default;
	exports.GraphNode = _GraphNode2.default;
	exports.AcceptorPosition = _AcceptorPosition2.default;
	exports.Anomericity = _Anomericity2.default;
	exports.Isomer = _Isomer2.default;
	exports.DonorPosition = _DonorPosition2.default;
	exports.MonosaccharideType = _MonosaccharideType2.default;
	exports.RingType = _RingType2.default;
	exports.Monosaccharide = _Monosaccharide2.default;
	exports.SubstituentType = _SubstituentType2.default;
	exports.GlycosidicLinkage = _GlycosidicLinkage2.default;
	exports.SubstituentLinkage = _SubstituentLinkage2.default;
	exports.Substituent = _Substituent2.default;
	exports.Glycan = _Glycan2.default;
	exports.GlycoCTParser = _GlycoCTParser2.default;
	exports.GlycoCTWriter = _GlycoCTWriter2.default;
	exports.GlycoCTSubstituents = _SubstituentsGlycoCT2.default;
	exports.NodeComparator = _NodeComparator2.default;
	exports.RepeatingUnit = _RepeatingUnit2.default;
	exports.SubstituentsPositions = _SubstituentsPositions2.default;
	exports.MonosaccharideGlycoCT = _MonosaccharideGlycoCT2.default;
	exports.QuickModeMonosaccharides = _QuickModeMonosaccharides2.default;
	exports.Structures = _Structures2.default;
	exports.ImageExporter = _ImageExporter2.default;
	exports.appFunction = _appFunction2.default;
	exports.visFunction = _visFunction2.default;
	exports.menuFunction = _menuFunction2.default;
	exports.emFunction = _emFunction2.default;
	exports.XYvalues = _XYvalues2.default;
	exports.colorDivisions = _colorDivisions2.default;
	exports.XYLinkLabels = _XYLinkLabels2.default;
	exports.OriginalPosition = _OriginalPosition2.default;
	exports.SubstituentLables = _SubstituentLabels2.default;
	exports.displayLabels = _svgUtility.displayLabels;
	
	//
	
	
	//Function
	
	
	//IO
	
	
	//Glycan
	
	
	//Nodes
	
	
	//Linkages
	/**
	 * This file allows the creation of a bundle library. 
	 * Author:  Davide Alocci
	 * Version: 0.0.1
	 */
	
	//Data Structure

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Class taken from sigma.js
	 * https://github.com/jacomyal/sigma.js  -> sigma.js/src/classes/sigma.classes.graph.js
	 *
	 * This is the only part we need from sigma.js and we can add more method to fulfill our needs
	 *
	 * Licence:
	 *
	 * Copyright (C) 2013-2014, Alexis Jacomy, http://sigmajs.org
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
	 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
	 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
	 * IN THE SOFTWARE.
	 */
	
	;(function (undefined) {
	    'use strict';
	
	    var _methods = Object.create(null),
	        _indexes = Object.create(null),
	        _initBindings = Object.create(null),
	        _methodBindings = Object.create(null),
	        _methodBeforeBindings = Object.create(null),
	        _defaultSettings = {
	        immutable: true,
	        clone: false
	    },
	        _defaultSettingsFunction = function _defaultSettingsFunction(key) {
	        return _defaultSettings[key];
	    };
	
	    /**
	     * The graph constructor. It initializes the data and the indexes, and binds
	     * the custom indexes and methods to its own scope.
	     *
	     * Recognized parameters:
	     * **********************
	     * Here is the exhaustive list of every accepted parameters in the settings
	     * object:
	     *
	     *   {boolean} clone     Indicates if the data have to be cloned in methods
	     *                       to add nodes or edges.
	     *   {boolean} immutable Indicates if nodes "id" values and edges "id",
	     *                       "source" and "target" values must be set as
	     *                       immutable.
	     *
	     * @param  {?configurable} settings Eventually a settings function.
	     * @return {graph}                  The new graph instance.
	     */
	    var graph = function graph(settings) {
	        var k, fn, data;
	
	        /**
	         * DATA:
	         * *****
	         * Every data that is callable from graph methods are stored in this "data"
	         * object. This object will be served as context for all these methods,
	         * and it is possible to add other type of data in it.
	         */
	        data = {
	            /**
	             * SETTINGS FUNCTION:
	             * ******************
	             */
	            settings: settings || _defaultSettingsFunction,
	
	            /**
	             * MAIN DATA:
	             * **********
	             */
	            nodesArray: [],
	            edgesArray: [],
	
	            /**
	             * GLOBAL INDEXES:
	             * ***************
	             * These indexes just index data by ids.
	             */
	            nodesIndex: Object.create(null),
	            edgesIndex: Object.create(null),
	
	            /**
	             * LOCAL INDEXES:
	             * **************
	             * These indexes refer from node to nodes. Each key is an id, and each
	             * value is the array of the ids of related nodes.
	             */
	            inNeighborsIndex: Object.create(null),
	            outNeighborsIndex: Object.create(null),
	            allNeighborsIndex: Object.create(null),
	
	            inNeighborsCount: Object.create(null),
	            outNeighborsCount: Object.create(null),
	            allNeighborsCount: Object.create(null)
	        };
	
	        // Execute bindings:
	        for (k in _initBindings) {
	            _initBindings[k].call(data);
	        } // Add methods to both the scope and the data objects:
	        for (k in _methods) {
	            fn = __bindGraphMethod(k, data, _methods[k]);
	            this[k] = fn;
	            data[k] = fn;
	        }
	    };
	
	    /**
	     * A custom tool to bind methods such that function that are bound to it will
	     * be executed anytime the method is called.
	     *
	     * @param  {string}   methodName The name of the method to bind.
	     * @param  {object}   scope      The scope where the method must be executed.
	     * @param  {function} fn         The method itself.
	     * @return {function}            The new method.
	     */
	    function __bindGraphMethod(methodName, scope, fn) {
	        var result = function result() {
	            var k, res;
	
	            // Execute "before" bound functions:
	            for (k in _methodBeforeBindings[methodName]) {
	                _methodBeforeBindings[methodName][k].apply(scope, arguments);
	            } // Apply the method:
	            res = fn.apply(scope, arguments);
	
	            // Execute bound functions:
	            for (k in _methodBindings[methodName]) {
	                _methodBindings[methodName][k].apply(scope, arguments);
	            } // Return res:
	            return res;
	        };
	
	        return result;
	    }
	
	    /**
	     * This custom tool function removes every pair key/value from an hash. The
	     * goal is to avoid creating a new object while some other references are
	     * still hanging in some scopes...
	     *
	     * @param  {object} obj The object to empty.
	     * @return {object}     The empty object.
	     */
	    function __emptyObject(obj) {
	        var k;
	
	        for (k in obj) {
	            if (!('hasOwnProperty' in obj) || obj.hasOwnProperty(k)) delete obj[k];
	        }return obj;
	    }
	
	    /**
	     * This global method adds a method that will be bound to the futurly created
	     * graph instances.
	     *
	     * Since these methods will be bound to their scope when the instances are
	     * created, it does not use the prototype. Because of that, methods have to
	     * be added before instances are created to make them available.
	     *
	     * Here is an example:
	     *
	     *  > graph.addMethod('getNodesCount', function() {
	    *  >   return this.nodesArray.length;
	    *  > });
	     *  >
	     *  > var myGraph = new graph();
	     *  > console.log(myGraph.getNodesCount()); // outputs 0
	     *
	     * @param  {string}   methodName The name of the method.
	     * @param  {function} fn         The method itself.
	     * @return {object}              The global graph constructor.
	     */
	    graph.addMethod = function (methodName, fn) {
	        if (typeof methodName !== 'string' || typeof fn !== 'function' || arguments.length !== 2) throw 'addMethod: Wrong arguments.';
	
	        if (_methods[methodName] || graph[methodName]) throw 'The method "' + methodName + '" already exists.';
	
	        _methods[methodName] = fn;
	        _methodBindings[methodName] = Object.create(null);
	        _methodBeforeBindings[methodName] = Object.create(null);
	
	        return this;
	    };
	
	    /**
	     * This global method returns true if the method has already been added, and
	     * false else.
	     *
	     * Here are some examples:
	     *
	     *  > graph.hasMethod('addNode'); // returns true
	     *  > graph.hasMethod('hasMethod'); // returns true
	     *  > graph.hasMethod('unexistingMethod'); // returns false
	     *
	     * @param  {string}  methodName The name of the method.
	     * @return {boolean}            The result.
	     */
	    graph.hasMethod = function (methodName) {
	        return !!(_methods[methodName] || graph[methodName]);
	    };
	
	    /**
	     * This global methods attaches a function to a method. Anytime the specified
	     * method is called, the attached function is called right after, with the
	     * same arguments and in the same scope. The attached function is called
	     * right before if the last argument is true, unless the method is the graph
	     * constructor.
	     *
	     * To attach a function to the graph constructor, use 'constructor' as the
	     * method name (first argument).
	     *
	     * The main idea is to have a clean way to keep custom indexes up to date,
	     * for instance:
	     *
	     *  > var timesAddNodeCalled = 0;
	     *  > graph.attach('addNode', 'timesAddNodeCalledInc', function() {
	    *  >   timesAddNodeCalled++;
	    *  > });
	     *  >
	     *  > var myGraph = new graph();
	     *  > console.log(timesAddNodeCalled); // outputs 0
	     *  >
	     *  > myGraph.addNode({ id: '1' }).addNode({ id: '2' });
	     *  > console.log(timesAddNodeCalled); // outputs 2
	     *
	     * The idea for calling a function before is to provide pre-processors, for
	     * instance:
	     *
	     *  > var colorPalette = { Person: '#C3CBE1', Place: '#9BDEBD' };
	     *  > graph.attach('addNode', 'applyNodeColorPalette', function(n) {
	    *  >   n.color = colorPalette[n.category];
	    *  > }, true);
	     *  >
	     *  > var myGraph = new graph();
	     *  > myGraph.addNode({ id: 'n0', category: 'Person' });
	     *  > console.log(myGraph.nodes('n0').color); // outputs '#C3CBE1'
	     *
	     * @param  {string}   methodName The name of the related method or
	     *                               "constructor".
	     * @param  {string}   key        The key to identify the function to attach.
	     * @param  {function} fn         The function to bind.
	     * @param  {boolean}  before     If true the function is called right before.
	     * @return {object}              The global graph constructor.
	     */
	    graph.attach = function (methodName, key, fn, before) {
	        if (typeof methodName !== 'string' || typeof key !== 'string' || typeof fn !== 'function' || arguments.length < 3 || arguments.length > 4) throw 'attach: Wrong arguments.';
	
	        var bindings;
	
	        if (methodName === 'constructor') bindings = _initBindings;else {
	            if (before) {
	                if (!_methodBeforeBindings[methodName]) throw 'The method "' + methodName + '" does not exist.';
	
	                bindings = _methodBeforeBindings[methodName];
	            } else {
	                if (!_methodBindings[methodName]) throw 'The method "' + methodName + '" does not exist.';
	
	                bindings = _methodBindings[methodName];
	            }
	        }
	
	        if (bindings[key]) throw 'A function "' + key + '" is already attached ' + 'to the method "' + methodName + '".';
	
	        bindings[key] = fn;
	
	        return this;
	    };
	
	    /**
	     * Alias of attach(methodName, key, fn, true).
	     */
	    graph.attachBefore = function (methodName, key, fn) {
	        return this.attach(methodName, key, fn, true);
	    };
	
	    /**
	     * This methods is just an helper to deal with custom indexes. It takes as
	     * arguments the name of the index and an object containing all the different
	     * functions to bind to the methods.
	     *
	     * Here is a basic example, that creates an index to keep the number of nodes
	     * in the current graph. It also adds a method to provide a getter on that
	     * new index:
	     *
	     *  > sigma.classes.graph.addIndex('nodesCount', {
	    *  >   constructor: function() {
	    *  >     this.nodesCount = 0;
	    *  >   },
	    *  >   addNode: function() {
	    *  >     this.nodesCount++;
	    *  >   },
	    *  >   dropNode: function() {
	    *  >     this.nodesCount--;
	    *  >   }
	    *  > });
	     *  >
	     *  > sigma.classes.graph.addMethod('getNodesCount', function() {
	    *  >   return this.nodesCount;
	    *  > });
	     *  >
	     *  > var myGraph = new sigma.classes.graph();
	     *  > console.log(myGraph.getNodesCount()); // outputs 0
	     *  >
	     *  > myGraph.addNode({ id: '1' }).addNode({ id: '2' });
	     *  > console.log(myGraph.getNodesCount()); // outputs 2
	     *
	     * @param  {string} name     The name of the index.
	     * @param  {object} bindings The object containing the functions to bind.
	     * @return {object}          The global graph constructor.
	     */
	    graph.addIndex = function (name, bindings) {
	        if (typeof name !== 'string' || Object(bindings) !== bindings || arguments.length !== 2) throw 'addIndex: Wrong arguments.';
	
	        if (_indexes[name]) throw 'The index "' + name + '" already exists.';
	
	        var k;
	
	        // Store the bindings:
	        _indexes[name] = bindings;
	
	        // Attach the bindings:
	        for (k in bindings) {
	            if (typeof bindings[k] !== 'function') throw 'The bindings must be functions.';else graph.attach(k, name, bindings[k]);
	        }return this;
	    };
	
	    /**
	     * This method adds a node to the graph. The node must be an object, with a
	     * string under the key "id". Except for this, it is possible to add any
	     * other attribute, that will be preserved all along the manipulations.
	     *
	     * If the graph option "clone" has a truthy value, the node will be cloned
	     * when added to the graph. Also, if the graph option "immutable" has a
	     * truthy value, its id will be defined as immutable.
	     *
	     * @param  {object} node The node to add.
	     * @return {object}      The graph instance.
	     */
	    graph.addMethod('addNode', function (node) {
	        // Check that the node is an object and has an id:
	        if (Object(node) !== node || arguments.length !== 1) throw 'addNode: Wrong arguments.';
	
	        if (typeof node.id !== 'string' && typeof node.id !== 'number') throw 'The node must have a string or number id.';
	
	        if (this.nodesIndex[node.id]) throw 'The node "' + node.id + '" already exists.';
	
	        var k,
	            id = node.id,
	            validNode = Object.create(null);
	
	        // Check the "clone" option:
	        if (this.settings('clone')) {
	            for (k in node) {
	                if (k !== 'id') validNode[k] = node[k];
	            }
	        } else validNode = node;
	
	        // Check the "immutable" option:
	        if (this.settings('immutable')) Object.defineProperty(validNode, 'id', {
	            value: id,
	            enumerable: true
	        });else validNode.id = id;
	
	        // Add empty containers for edges indexes:
	        this.inNeighborsIndex[id] = Object.create(null);
	        this.outNeighborsIndex[id] = Object.create(null);
	        this.allNeighborsIndex[id] = Object.create(null);
	
	        this.inNeighborsCount[id] = 0;
	        this.outNeighborsCount[id] = 0;
	        this.allNeighborsCount[id] = 0;
	
	        // Add the node to indexes:
	        this.nodesArray.push(validNode);
	        this.nodesIndex[validNode.id] = validNode;
	
	        // Return the current instance:
	        return this;
	    });
	
	    /**
	     * This method adds an edge to the graph. The edge must be an object, with a
	     * string under the key "id", and strings under the keys "source" and
	     * "target" that design existing nodes. Except for this, it is possible to
	     * add any other attribute, that will be preserved all along the
	     * manipulations.
	     *
	     * If the graph option "clone" has a truthy value, the edge will be cloned
	     * when added to the graph. Also, if the graph option "immutable" has a
	     * truthy value, its id, source and target will be defined as immutable.
	     *
	     * @param  {object} edge The edge to add.
	     * @return {object}      The graph instance.
	     */
	    graph.addMethod('addEdge', function (edge) {
	        // Check that the edge is an object and has an id:
	        if (Object(edge) !== edge || arguments.length !== 1) throw 'addEdge: Wrong arguments.';
	
	        if (typeof edge.id !== 'string' && typeof edge.id !== 'number') throw 'The edge must have a string or number id.';
	
	        if (typeof edge.source !== 'string' && typeof edge.source !== 'number' || !this.nodesIndex[edge.source]) throw 'The edge source must have an existing node id.';
	
	        if (typeof edge.target !== 'string' && typeof edge.target !== 'number' || !this.nodesIndex[edge.target]) throw 'The edge target must have an existing node id.';
	
	        if (this.edgesIndex[edge.id]) throw 'The edge "' + edge.id + '" already exists.';
	
	        var k,
	            validEdge = Object.create(null);
	
	        // Check the "clone" option:
	        if (this.settings('clone')) {
	            for (k in edge) {
	                if (k !== 'id' && k !== 'source' && k !== 'target') validEdge[k] = edge[k];
	            }
	        } else validEdge = edge;
	
	        // Check the "immutable" option:
	        if (this.settings('immutable')) {
	            Object.defineProperty(validEdge, 'id', {
	                value: edge.id,
	                enumerable: true
	            });
	
	            Object.defineProperty(validEdge, 'source', {
	                value: edge.source,
	                enumerable: true
	            });
	
	            Object.defineProperty(validEdge, 'target', {
	                value: edge.target,
	                enumerable: true
	            });
	        } else {
	            validEdge.id = edge.id;
	            validEdge.source = edge.source;
	            validEdge.target = edge.target;
	        }
	
	        // Add the edge to indexes:
	        this.edgesArray.push(validEdge);
	        this.edgesIndex[validEdge.id] = validEdge;
	
	        if (!this.inNeighborsIndex[validEdge.target][validEdge.source]) this.inNeighborsIndex[validEdge.target][validEdge.source] = Object.create(null);
	        this.inNeighborsIndex[validEdge.target][validEdge.source][validEdge.id] = validEdge;
	
	        if (!this.outNeighborsIndex[validEdge.source][validEdge.target]) this.outNeighborsIndex[validEdge.source][validEdge.target] = Object.create(null);
	        this.outNeighborsIndex[validEdge.source][validEdge.target][validEdge.id] = validEdge;
	
	        if (!this.allNeighborsIndex[validEdge.source][validEdge.target]) this.allNeighborsIndex[validEdge.source][validEdge.target] = Object.create(null);
	        this.allNeighborsIndex[validEdge.source][validEdge.target][validEdge.id] = validEdge;
	
	        if (validEdge.target !== validEdge.source) {
	            if (!this.allNeighborsIndex[validEdge.target][validEdge.source]) this.allNeighborsIndex[validEdge.target][validEdge.source] = Object.create(null);
	            this.allNeighborsIndex[validEdge.target][validEdge.source][validEdge.id] = validEdge;
	        }
	
	        // Keep counts up to date:
	        this.inNeighborsCount[validEdge.target]++;
	        this.outNeighborsCount[validEdge.source]++;
	        this.allNeighborsCount[validEdge.target]++;
	        this.allNeighborsCount[validEdge.source]++;
	
	        return this;
	    });
	
	    /**
	     * This method drops a node from the graph. It also removes each edge that is
	     * bound to it, through the dropEdge method. An error is thrown if the node
	     * does not exist.
	     *
	     * @param  {string} id The node id.
	     * @return {object}    The graph instance.
	     */
	    graph.addMethod('dropNode', function (id) {
	        // Check that the arguments are valid:
	        if (typeof id !== 'string' && typeof id !== 'number' || arguments.length !== 1) throw 'dropNode: Wrong arguments.';
	
	        if (!this.nodesIndex[id]) throw 'The node "' + id + '" does not exist.';
	
	        var i, k, l;
	
	        // Remove the node from indexes:
	        delete this.nodesIndex[id];
	        for (i = 0, l = this.nodesArray.length; i < l; i++) {
	            if (this.nodesArray[i].id === id) {
	                this.nodesArray.splice(i, 1);
	                break;
	            }
	        } // Remove related edges:
	        for (i = this.edgesArray.length - 1; i >= 0; i--) {
	            if (this.edgesArray[i].source === id || this.edgesArray[i].target === id) this.dropEdge(this.edgesArray[i].id);
	        } // Remove related edge indexes:
	        delete this.inNeighborsIndex[id];
	        delete this.outNeighborsIndex[id];
	        delete this.allNeighborsIndex[id];
	
	        delete this.inNeighborsCount[id];
	        delete this.outNeighborsCount[id];
	        delete this.allNeighborsCount[id];
	
	        for (k in this.nodesIndex) {
	            delete this.inNeighborsIndex[k][id];
	            delete this.outNeighborsIndex[k][id];
	            delete this.allNeighborsIndex[k][id];
	        }
	
	        return this;
	    });
	
	    /**
	     * This method drops an edge from the graph. An error is thrown if the edge
	     * does not exist.
	     *
	     * @param  {string} id The edge id.
	     * @return {object}    The graph instance.
	     */
	    graph.addMethod('dropEdge', function (id) {
	        // Check that the arguments are valid:
	        if (typeof id !== 'string' && typeof id !== 'number' || arguments.length !== 1) throw 'dropEdge: Wrong arguments.';
	
	        if (!this.edgesIndex[id]) throw 'The edge "' + id + '" does not exist.';
	
	        var i, l, edge;
	
	        // Remove the edge from indexes:
	        edge = this.edgesIndex[id];
	        delete this.edgesIndex[id];
	        for (i = 0, l = this.edgesArray.length; i < l; i++) {
	            if (this.edgesArray[i].id === id) {
	                this.edgesArray.splice(i, 1);
	                break;
	            }
	        }delete this.inNeighborsIndex[edge.target][edge.source][edge.id];
	        if (!Object.keys(this.inNeighborsIndex[edge.target][edge.source]).length) delete this.inNeighborsIndex[edge.target][edge.source];
	
	        delete this.outNeighborsIndex[edge.source][edge.target][edge.id];
	        if (!Object.keys(this.outNeighborsIndex[edge.source][edge.target]).length) delete this.outNeighborsIndex[edge.source][edge.target];
	
	        delete this.allNeighborsIndex[edge.source][edge.target][edge.id];
	        if (!Object.keys(this.allNeighborsIndex[edge.source][edge.target]).length) delete this.allNeighborsIndex[edge.source][edge.target];
	
	        if (edge.target !== edge.source) {
	            delete this.allNeighborsIndex[edge.target][edge.source][edge.id];
	            if (!Object.keys(this.allNeighborsIndex[edge.target][edge.source]).length) delete this.allNeighborsIndex[edge.target][edge.source];
	        }
	
	        this.inNeighborsCount[edge.target]--;
	        this.outNeighborsCount[edge.source]--;
	        this.allNeighborsCount[edge.source]--;
	        this.allNeighborsCount[edge.target]--;
	
	        return this;
	    });
	
	    /**
	     * This method destroys the current instance. It basically empties each index
	     * and methods attached to the graph.
	     */
	    graph.addMethod('kill', function () {
	        // Delete arrays:
	        this.nodesArray.length = 0;
	        this.edgesArray.length = 0;
	        delete this.nodesArray;
	        delete this.edgesArray;
	
	        // Delete indexes:
	        delete this.nodesIndex;
	        delete this.edgesIndex;
	        delete this.inNeighborsIndex;
	        delete this.outNeighborsIndex;
	        delete this.allNeighborsIndex;
	        delete this.inNeighborsCount;
	        delete this.outNeighborsCount;
	        delete this.allNeighborsCount;
	    });
	
	    /**
	     * This method empties the nodes and edges arrays, as well as the different
	     * indexes.
	     *
	     * @return {object} The graph instance.
	     */
	    graph.addMethod('clear', function () {
	        this.nodesArray.length = 0;
	        this.edgesArray.length = 0;
	
	        // Due to GC issues, I prefer not to create new object. These objects are
	        // only available from the methods and attached functions, but still, it is
	        // better to prevent ghost references to unrelevant data...
	        __emptyObject(this.nodesIndex);
	        __emptyObject(this.edgesIndex);
	        __emptyObject(this.nodesIndex);
	        __emptyObject(this.inNeighborsIndex);
	        __emptyObject(this.outNeighborsIndex);
	        __emptyObject(this.allNeighborsIndex);
	        __emptyObject(this.inNeighborsCount);
	        __emptyObject(this.outNeighborsCount);
	        __emptyObject(this.allNeighborsCount);
	
	        return this;
	    });
	
	    /**
	     * This method reads an object and adds the nodes and edges, through the
	     * proper methods "addNode" and "addEdge".
	     *
	     * Here is an example:
	     *
	     *  > var myGraph = new graph();
	     *  > myGraph.read({
	    *  >   nodes: [
	    *  >     { id: 'n0' },
	    *  >     { id: 'n1' }
	    *  >   ],
	    *  >   edges: [
	    *  >     {
	    *  >       id: 'e0',
	    *  >       source: 'n0',
	    *  >       target: 'n1'
	    *  >     }
	    *  >   ]
	    *  > });
	     *  >
	     *  > console.log(
	     *  >   myGraph.nodes().length,
	     *  >   myGraph.edges().length
	     *  > ); // outputs 2 1
	     *
	     * @param  {object} g The graph object.
	     * @return {object}   The graph instance.
	     */
	    graph.addMethod('read', function (g) {
	        var i, a, l;
	
	        a = g.nodes || [];
	        for (i = 0, l = a.length; i < l; i++) {
	            this.addNode(a[i]);
	        }a = g.edges || [];
	        for (i = 0, l = a.length; i < l; i++) {
	            this.addEdge(a[i]);
	        }return this;
	    });
	
	    /**
	     * This methods returns one or several nodes, depending on how it is called.
	     *
	     * To get the array of nodes, call "nodes" without argument. To get a
	     * specific node, call it with the id of the node. The get multiple node,
	     * call it with an array of ids, and it will return the array of nodes, in
	     * the same order.
	     *
	     * @param  {?(string|array)} v Eventually one id, an array of ids.
	     * @return {object|array}      The related node or array of nodes.
	     */
	    graph.addMethod('nodes', function (v) {
	        // Clone the array of nodes and return it:
	        if (!arguments.length) return this.nodesArray.slice(0);
	
	        // Return the related node:
	        if (arguments.length === 1 && (typeof v === 'string' || typeof v === 'number')) return this.nodesIndex[v];
	
	        // Return an array of the related node:
	        if (arguments.length === 1 && Object.prototype.toString.call(v) === '[object Array]') {
	            var i,
	                l,
	                a = [];
	
	            for (i = 0, l = v.length; i < l; i++) {
	                if (typeof v[i] === 'string' || typeof v[i] === 'number') a.push(this.nodesIndex[v[i]]);else throw 'nodes: Wrong arguments.';
	            }return a;
	        }
	
	        throw 'nodes: Wrong arguments.';
	    });
	
	    /**
	     * This methods returns the degree of one or several nodes, depending on how
	     * it is called. It is also possible to get incoming or outcoming degrees
	     * instead by specifying 'in' or 'out' as a second argument.
	     *
	     * @param  {string|array} v     One id, an array of ids.
	     * @param  {?string}      which Which degree is required. Values are 'in',
	     *                              'out', and by default the normal degree.
	     * @return {number|array}       The related degree or array of degrees.
	     */
	    graph.addMethod('degree', function (v, which) {
	        // Check which degree is required:
	        which = {
	            'in': this.inNeighborsCount,
	            'out': this.outNeighborsCount
	        }[which || ''] || this.allNeighborsCount;
	
	        // Return the related node:
	        if (typeof v === 'string' || typeof v === 'number') return which[v];
	
	        // Return an array of the related node:
	        if (Object.prototype.toString.call(v) === '[object Array]') {
	            var i,
	                l,
	                a = [];
	
	            for (i = 0, l = v.length; i < l; i++) {
	                if (typeof v[i] === 'string' || typeof v[i] === 'number') a.push(which[v[i]]);else throw 'degree: Wrong arguments.';
	            }return a;
	        }
	
	        throw 'degree: Wrong arguments.';
	    });
	
	    /**
	     * This methods returns one or several edges, depending on how it is called.
	     *
	     * To get the array of edges, call "edges" without argument. To get a
	     * specific edge, call it with the id of the edge. The get multiple edge,
	     * call it with an array of ids, and it will return the array of edges, in
	     * the same order.
	     *
	     * @param  {?(string|array)} v Eventually one id, an array of ids.
	     * @return {object|array}      The related edge or array of edges.
	     */
	    graph.addMethod('edges', function (v) {
	        // Clone the array of edges and return it:
	        if (!arguments.length) return this.edgesArray.slice(0);
	
	        // Return the related edge:
	        if (arguments.length === 1 && (typeof v === 'string' || typeof v === 'number')) return this.edgesIndex[v];
	
	        // Return an array of the related edge:
	        if (arguments.length === 1 && Object.prototype.toString.call(v) === '[object Array]') {
	            var i,
	                l,
	                a = [];
	
	            for (i = 0, l = v.length; i < l; i++) {
	                if (typeof v[i] === 'string' || typeof v[i] === 'number') a.push(this.edgesIndex[v[i]]);else throw 'edges: Wrong arguments.';
	            }return a;
	        }
	
	        throw 'edges: Wrong arguments.';
	    });
	
	    /**
	     * This method return all the children of a specific node. An error is thrown if the node
	     * does not exist.
	     *
	     * @param  {string} id The edge id.
	     * @return {object|array}      The related node or array of nodes.
	     */
	    graph.addMethod('getChildren', function (id) {
	        // Check that the arguments are valid:
	        if (typeof id !== 'string' && typeof id !== 'number' || arguments.length !== 1) throw 'getChildren: Wrong arguments.';
	
	        if (!this.nodesIndex[id]) throw 'The node "' + id + '" does not exist.';
	        var n = [];
	        for (var node in this.outNeighborsIndex[id]) {
	            if (typeof node === 'string' || typeof node === 'number') n.push(this.nodesIndex[node]);else throw 'nodes: Wrong arguments.';
	        }
	
	        return n;
	    });
	
	    /**
	     * EXPORT:
	     * *******
	     *
	     */
	
	    if (typeof sigma !== 'undefined') {
	        sigma.classes = sigma.classes || Object.create(null);
	        sigma.classes.graph = graph;
	    } else if (true) {
	        if (typeof module !== 'undefined' && module.exports) exports = module.exports = graph;
	        exports.graph = graph;
	    } else this.graph = graph;
	}).call(undefined);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createjsEaseljs = __webpack_require__(3);
	
	var _createjsEaseljs2 = _interopRequireDefault(_createjsEaseljs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/*
	let createjs;
	if (typeof window !== "undefined") {
	    createjs = require("createjs-easeljs");
	}
	 */
	
	var Edge = function (_createjs$Container) {
	    _inherits(Edge, _createjs$Container);
	
	    /**
	     * Create a new Edge using nodes.
	     * @param {string} id the edge id
	     * @param {Node} sourceNode The source node
	     * @param {Node} targetNode The target Node
	     */
	    function Edge(id, sourceNode, targetNode) {
	        _classCallCheck(this, Edge);
	
	        var _this = _possibleConstructorReturn(this, (Edge.__proto__ || Object.getPrototypeOf(Edge)).call(this));
	
	        if (typeof id == 'undefined' || typeof sourceNode == 'undefined' || typeof targetNode == 'undefined') {
	            throw "The parameter id, sourceNode and targetNode cannot be undefined";
	        }
	
	        //WARNING: Do not change this properties name !
	        //They are used by the graph class in Sigma.js
	        _this.id = id;
	        try {
	            _this.source = sourceNode.getId();
	            _this.target = targetNode.getId();
	        } catch (err) {
	            throw 'SourceNode and TargetNode must have a getId() method. Please use or extend the Node obj like in Monosaccharide or Substituent';
	        }
	        // end sigma.js strict parameter
	
	        _this.sourceNode = sourceNode;
	        _this.targetNode = targetNode;
	        return _this;
	    }
	
	    _createClass(Edge, [{
	        key: 'getEdgeId',
	        value: function getEdgeId() {
	            return this.id;
	        }
	    }, {
	        key: 'getEdgeSource',
	        value: function getEdgeSource() {
	            return this.sourceNode;
	        }
	    }, {
	        key: 'getEdgeTarget',
	        value: function getEdgeTarget() {
	            return this.targetNode;
	        }
	    }]);
	
	    return Edge;
	}(_createjsEaseljs2.default.Container);
	
	exports.default = Edge;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	/*!
	* @license EaselJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2011-2015 gskinner.com, inc.
	*
	* Distributed under the terms of the MIT license.
	* http://www.opensource.org/licenses/mit-license.html
	*
	* This notice shall be included in all copies or substantial portions of the Software.
	*/
	this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var b=a.prototype;b.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._listeners=null,this._captureListeners=null}var b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ticker cannot be instantiated."}a.RAF_SYNCHED="synched",a.RAF="raf",a.TIMEOUT="timeout",a.useRAF=!1,a.timingMode=null,a.maxDelta=0,a.paused=!1,a.removeEventListener=null,a.removeAllEventListeners=null,a.dispatchEvent=null,a.hasEventListener=null,a._listeners=null,createjs.EventDispatcher.initialize(a),a._addEventListener=a.addEventListener,a.addEventListener=function(){return!a._inited&&a.init(),a._addEventListener.apply(a,arguments)},a._inited=!1,a._startTime=0,a._pausedTime=0,a._ticks=0,a._pausedTicks=0,a._interval=50,a._lastTime=0,a._times=null,a._tickTimes=null,a._timerId=null,a._raf=!0,a.setInterval=function(b){a._interval=b,a._inited&&a._setupTick()},a.getInterval=function(){return a._interval},a.setFPS=function(b){a.setInterval(1e3/b)},a.getFPS=function(){return 1e3/a._interval};try{Object.defineProperties(a,{interval:{get:a.getInterval,set:a.setInterval},framerate:{get:a.getFPS,set:a.setFPS}})}catch(b){console.log(b)}a.init=function(){a._inited||(a._inited=!0,a._times=[],a._tickTimes=[],a._startTime=a._getTime(),a._times.push(a._lastTime=0),a.interval=a._interval)},a.reset=function(){if(a._raf){var b=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;b&&b(a._timerId)}else clearTimeout(a._timerId);a.removeAllEventListeners("tick"),a._timerId=a._times=a._tickTimes=null,a._startTime=a._lastTime=a._ticks=0,a._inited=!1},a.getMeasuredTickTime=function(b){var c=0,d=a._tickTimes;if(!d||d.length<1)return-1;b=Math.min(d.length,b||0|a.getFPS());for(var e=0;b>e;e++)c+=d[e];return c/b},a.getMeasuredFPS=function(b){var c=a._times;return!c||c.length<2?-1:(b=Math.min(c.length-1,b||0|a.getFPS()),1e3/((c[0]-c[b])/b))},a.setPaused=function(b){a.paused=b},a.getPaused=function(){return a.paused},a.getTime=function(b){return a._startTime?a._getTime()-(b?a._pausedTime:0):-1},a.getEventTime=function(b){return a._startTime?(a._lastTime||a._startTime)-(b?a._pausedTime:0):-1},a.getTicks=function(b){return a._ticks-(b?a._pausedTicks:0)},a._handleSynch=function(){a._timerId=null,a._setupTick(),a._getTime()-a._lastTime>=.97*(a._interval-1)&&a._tick()},a._handleRAF=function(){a._timerId=null,a._setupTick(),a._tick()},a._handleTimeout=function(){a._timerId=null,a._setupTick(),a._tick()},a._setupTick=function(){if(null==a._timerId){var b=a.timingMode||a.useRAF&&a.RAF_SYNCHED;if(b==a.RAF_SYNCHED||b==a.RAF){var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(c)return a._timerId=c(b==a.RAF?a._handleRAF:a._handleSynch),void(a._raf=!0)}a._raf=!1,a._timerId=setTimeout(a._handleTimeout,a._interval)}},a._tick=function(){var b=a.paused,c=a._getTime(),d=c-a._lastTime;if(a._lastTime=c,a._ticks++,b&&(a._pausedTicks++,a._pausedTime+=d),a.hasEventListener("tick")){var e=new createjs.Event("tick"),f=a.maxDelta;e.delta=f&&d>f?f:d,e.paused=b,e.time=c,e.runTime=c-a._pausedTime,a.dispatchEvent(e)}for(a._tickTimes.unshift(a._getTime()-c);a._tickTimes.length>100;)a._tickTimes.pop();for(a._times.unshift(c);a._times.length>100;)a._times.pop()};var c=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);a._getTime=function(){return(c&&c.call(performance)||(new Date).getTime())-a._startTime},createjs.Ticker=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"UID cannot be instantiated"}a._nextID=0,a.get=function(){return a._nextID++},createjs.UID=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j,k){this.Event_constructor(a,b,c),this.stageX=d,this.stageY=e,this.rawX=null==i?d:i,this.rawY=null==j?e:j,this.nativeEvent=f,this.pointerID=g,this.primary=!!h,this.relatedTarget=k}var b=createjs.extend(a,createjs.Event);b._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},b._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},b._get_isTouch=function(){return-1!==this.pointerID};try{Object.defineProperties(b,{localX:{get:b._get_localX},localY:{get:b._get_localY},isTouch:{get:b._get_isTouch}})}catch(c){}b.clone=function(){return new a(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f){this.setValues(a,b,c,d,e,f)}var b=a.prototype;a.DEG_TO_RAD=Math.PI/180,a.identity=null,b.setValues=function(a,b,c,d,e,f){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=e||0,this.ty=f||0,this},b.append=function(a,b,c,d,e,f){var g=this.a,h=this.b,i=this.c,j=this.d;return(1!=a||0!=b||0!=c||1!=d)&&(this.a=g*a+i*b,this.b=h*a+j*b,this.c=g*c+i*d,this.d=h*c+j*d),this.tx=g*e+i*f+this.tx,this.ty=h*e+j*f+this.ty,this},b.prepend=function(a,b,c,d,e,f){var g=this.a,h=this.c,i=this.tx;return this.a=a*g+c*this.b,this.b=b*g+d*this.b,this.c=a*h+c*this.d,this.d=b*h+d*this.d,this.tx=a*i+c*this.ty+e,this.ty=b*i+d*this.ty+f,this},b.appendMatrix=function(a){return this.append(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.prependMatrix=function(a){return this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.appendTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c),this.append(l*d,m*d,-m*e,l*e,0,0)):this.append(l*d,m*d,-m*e,l*e,b,c),(i||j)&&(this.tx-=i*this.a+j*this.c,this.ty-=i*this.b+j*this.d),this},b.prependTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return(i||j)&&(this.tx-=i,this.ty-=j),g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.prepend(l*d,m*d,-m*e,l*e,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c)):this.prepend(l*d,m*d,-m*e,l*e,b,c),this},b.rotate=function(b){b*=a.DEG_TO_RAD;var c=Math.cos(b),d=Math.sin(b),e=this.a,f=this.b;return this.a=e*c+this.c*d,this.b=f*c+this.d*d,this.c=-e*d+this.c*c,this.d=-f*d+this.d*c,this},b.skew=function(b,c){return b*=a.DEG_TO_RAD,c*=a.DEG_TO_RAD,this.append(Math.cos(c),Math.sin(c),-Math.sin(b),Math.cos(b),0,0),this},b.scale=function(a,b){return this.a*=a,this.b*=a,this.c*=b,this.d*=b,this},b.translate=function(a,b){return this.tx+=this.a*a+this.c*b,this.ty+=this.b*a+this.d*b,this},b.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},b.invert=function(){var a=this.a,b=this.b,c=this.c,d=this.d,e=this.tx,f=a*d-b*c;return this.a=d/f,this.b=-b/f,this.c=-c/f,this.d=a/f,this.tx=(c*this.ty-d*e)/f,this.ty=-(a*this.ty-b*e)/f,this},b.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},b.equals=function(a){return this.tx===a.tx&&this.ty===a.ty&&this.a===a.a&&this.b===a.b&&this.c===a.c&&this.d===a.d},b.transformPoint=function(a,b,c){return c=c||{},c.x=a*this.a+b*this.c+this.tx,c.y=a*this.b+b*this.d+this.ty,c},b.decompose=function(b){null==b&&(b={}),b.x=this.tx,b.y=this.ty,b.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),b.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var c=Math.atan2(-this.c,this.d),d=Math.atan2(this.b,this.a),e=Math.abs(1-c/d);return 1e-5>e?(b.rotation=d/a.DEG_TO_RAD,this.a<0&&this.d>=0&&(b.rotation+=b.rotation<=0?180:-180),b.skewX=b.skewY=0):(b.skewX=c/a.DEG_TO_RAD,b.skewY=d/a.DEG_TO_RAD),b},b.copy=function(a){return this.setValues(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.clone=function(){return new a(this.a,this.b,this.c,this.d,this.tx,this.ty)},b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},a.identity=new a,createjs.Matrix2D=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e){this.setValues(a,b,c,d,e)}var b=a.prototype;b.setValues=function(a,b,c,d,e){return this.visible=null==a?!0:!!a,this.alpha=null==b?1:b,this.shadow=c,this.compositeOperation=d,this.matrix=e||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},b.append=function(a,b,c,d,e){return this.alpha*=b,this.shadow=c||this.shadow,this.compositeOperation=d||this.compositeOperation,this.visible=this.visible&&a,e&&this.matrix.appendMatrix(e),this},b.prepend=function(a,b,c,d,e){return this.alpha*=b,this.shadow=this.shadow||c,this.compositeOperation=this.compositeOperation||d,this.visible=this.visible&&a,e&&this.matrix.prependMatrix(e),this},b.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},b.clone=function(){return new a(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.setValues(a,b)}var b=a.prototype;b.setValues=function(a,b){return this.x=a||0,this.y=b||0,this},b.copy=function(a){return this.x=a.x,this.y=a.y,this},b.clone=function(){return new a(this.x,this.y)},b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setValues(a,b,c,d)}var b=a.prototype;b.setValues=function(a,b,c,d){return this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0,this},b.extend=function(a,b,c,d){return c=c||0,d=d||0,a+c>this.x+this.width&&(this.width=a+c-this.x),b+d>this.y+this.height&&(this.height=b+d-this.y),a<this.x&&(this.width+=this.x-a,this.x=a),b<this.y&&(this.height+=this.y-b,this.y=b),this},b.pad=function(a,b,c,d){return this.x-=b,this.y-=a,this.width+=b+d,this.height+=a+c,this},b.copy=function(a){return this.setValues(a.x,a.y,a.width,a.height)},b.contains=function(a,b,c,d){return c=c||0,d=d||0,a>=this.x&&a+c<=this.x+this.width&&b>=this.y&&b+d<=this.y+this.height},b.union=function(a){return this.clone().extend(a.x,a.y,a.width,a.height)},b.intersection=function(b){var c=b.x,d=b.y,e=c+b.width,f=d+b.height;return this.x>c&&(c=this.x),this.y>d&&(d=this.y),this.x+this.width<e&&(e=this.x+this.width),this.y+this.height<f&&(f=this.y+this.height),c>=e||d>=f?null:new a(c,d,e-c,f-d)},b.intersects=function(a){return a.x<=this.x+this.width&&this.x<=a.x+a.width&&a.y<=this.y+this.height&&this.y<=a.y+a.height},b.isEmpty=function(){return this.width<=0||this.height<=0},b.clone=function(){return new a(this.x,this.y,this.width,this.height)},b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g){a.addEventListener&&(this.target=a,this.overLabel=null==c?"over":c,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=e,this._isPressed=!1,this._isOver=!1,this._enabled=!1,a.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),f&&(g&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(g)),a.hitArea=f))}var b=a.prototype;b.setEnabled=function(a){if(a!=this._enabled){var b=this.target;this._enabled=a,a?(b.cursor="pointer",b.addEventListener("rollover",this),b.addEventListener("rollout",this),b.addEventListener("mousedown",this),b.addEventListener("pressup",this),b._reset&&(b.__reset=b._reset,b._reset=this._reset)):(b.cursor=null,b.removeEventListener("rollover",this),b.removeEventListener("rollout",this),b.removeEventListener("mousedown",this),b.removeEventListener("pressup",this),b.__reset&&(b._reset=b.__reset,delete b.__reset))}},b.getEnabled=function(){return this._enabled};try{Object.defineProperties(b,{enabled:{get:b.getEnabled,set:b.setEnabled}})}catch(c){}b.toString=function(){return"[ButtonHelper]"},b.handleEvent=function(a){var b,c=this.target,d=a.type;"mousedown"==d?(this._isPressed=!0,b=this.downLabel):"pressup"==d?(this._isPressed=!1,b=this._isOver?this.overLabel:this.outLabel):"rollover"==d?(this._isOver=!0,b=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,b=this._isPressed?this.overLabel:this.outLabel),this.play?c.gotoAndPlay&&c.gotoAndPlay(b):c.gotoAndStop&&c.gotoAndStop(b)},b._reset=function(){var a=this.paused;this.__reset(),this.paused=a},createjs.ButtonHelper=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.color=a||"black",this.offsetX=b||0,this.offsetY=c||0,this.blur=d||0}var b=a.prototype;a.identity=new a("transparent",0,0,0),b.toString=function(){return"[Shadow]"},b.clone=function(){return new a(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(a)}var b=createjs.extend(a,createjs.EventDispatcher);b.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(b,{animations:{get:b.getAnimations}})}catch(c){}b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames||0;var b=this._data[a];return null==b?0:b.frames.length},b.getAnimation=function(a){return this._data[a]},b.getFrame=function(a){var b;return this._frames&&(b=this._frames[a])?b:null},b.getFrameBounds=function(a,b){var c=this.getFrame(a);return c?(b||new createjs.Rectangle).setValues(-c.regX,-c.regY,c.rect.width,c.rect.height):null},b.toString=function(){return"[SpriteSheet]"},b.clone=function(){throw"SpriteSheet cannot be cloned."},b._parseData=function(a){var b,c,d,e;if(null!=a){if(this.framerate=a.framerate||0,a.images&&(c=a.images.length)>0)for(e=this._images=[],b=0;c>b;b++){var f=a.images[b];if("string"==typeof f){var g=f;f=document.createElement("img"),f.src=g}e.push(f),f.getContext||f.naturalWidth||(this._loadCount++,this.complete=!1,function(a,b){f.onload=function(){a._handleImageLoad(b)}}(this,g),function(a,b){f.onerror=function(){a._handleImageError(b)}}(this,g))}if(null==a.frames);else if(Array.isArray(a.frames))for(this._frames=[],e=a.frames,b=0,c=e.length;c>b;b++){var h=e[b];this._frames.push({image:this._images[h[4]?h[4]:0],rect:new createjs.Rectangle(h[0],h[1],h[2],h[3]),regX:h[5]||0,regY:h[6]||0})}else d=a.frames,this._frameWidth=d.width,this._frameHeight=d.height,this._regX=d.regX||0,this._regY=d.regY||0,this._spacing=d.spacing||0,this._margin=d.margin||0,this._numFrames=d.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(d=a.animations)){this._data={};var i;for(i in d){var j={name:i},k=d[i];if("number"==typeof k)e=j.frames=[k];else if(Array.isArray(k))if(1==k.length)j.frames=[k[0]];else for(j.speed=k[3],j.next=k[2],e=j.frames=[],b=k[0];b<=k[1];b++)e.push(b);else{j.speed=k.speed,j.next=k.next;var l=k.frames;e=j.frames="number"==typeof l?[l]:l.slice(0)}(j.next===!0||void 0===j.next)&&(j.next=i),(j.next===!1||e.length<2&&j.next==i)&&(j.next=null),j.speed||(j.speed=1),this._animations.push(i),this._data[i]=j}}}},b._handleImageLoad=function(){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},b._handleImageError=function(a){var b=new createjs.Event("error");b.src=a,this.dispatchEvent(b),0==--this._loadCount&&this.dispatchEvent("complete")},b._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var a=this._numFrames||1e5,b=0,c=this._frameWidth,d=this._frameHeight,e=this._spacing,f=this._margin;a:for(var g=0,h=this._images;g<h.length;g++)for(var i=h[g],j=i.width,k=i.height,l=f;k-f-d>=l;){for(var m=f;j-f-c>=m;){if(b>=a)break a;b++,this._frames.push({image:i,rect:new createjs.Rectangle(m,l,c,d),regX:this._regX,regY:this._regY}),m+=c+e}l+=d+e}this._numFrames=b}},createjs.SpriteSheet=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.command=null,this._stroke=null,this._strokeStyle=null,this._oldStrokeStyle=null,this._strokeDash=null,this._oldStrokeDash=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var b=a.prototype,c=a;a.getRGB=function(a,b,c,d){return null!=a&&null==c&&(d=b,c=255&a,b=a>>8&255,a=a>>16&255),null==d?"rgb("+a+","+b+","+c+")":"rgba("+a+","+b+","+c+","+d+")"},a.getHSL=function(a,b,c,d){return null==d?"hsl("+a%360+","+b+"%,"+c+"%)":"hsla("+a%360+","+b+"%,"+c+"%,"+d+")"},a.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},a.STROKE_CAPS_MAP=["butt","round","square"],a.STROKE_JOINTS_MAP=["miter","round","bevel"];var d=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");d.getContext&&(a._ctx=d.getContext("2d"),d.width=d.height=1),b.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(b,{instructions:{get:b.getInstructions}})}catch(e){}b.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},b.draw=function(a,b){this._updateInstructions();for(var c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)c[d].exec(a,b)},b.drawAsPath=function(a){this._updateInstructions();for(var b,c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)(b=c[d]).path!==!1&&b.exec(a)},b.moveTo=function(a,b){return this.append(new c.MoveTo(a,b),!0)},b.lineTo=function(a,b){return this.append(new c.LineTo(a,b))},b.arcTo=function(a,b,d,e,f){return this.append(new c.ArcTo(a,b,d,e,f))},b.arc=function(a,b,d,e,f,g){return this.append(new c.Arc(a,b,d,e,f,g))},b.quadraticCurveTo=function(a,b,d,e){return this.append(new c.QuadraticCurveTo(a,b,d,e))},b.bezierCurveTo=function(a,b,d,e,f,g){return this.append(new c.BezierCurveTo(a,b,d,e,f,g))},b.rect=function(a,b,d,e){return this.append(new c.Rect(a,b,d,e))},b.closePath=function(){return this._activeInstructions.length?this.append(new c.ClosePath):this},b.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._oldStrokeStyle=this._stroke=this._fill=this._strokeDash=this._oldStrokeDash=null,this._dirty=this._strokeIgnoreScale=!1,this},b.beginFill=function(a){return this._setFill(a?new c.Fill(a):null)},b.beginLinearGradientFill=function(a,b,d,e,f,g){return this._setFill((new c.Fill).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientFill=function(a,b,d,e,f,g,h,i){return this._setFill((new c.Fill).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapFill=function(a,b,d){return this._setFill(new c.Fill(null,d).bitmap(a,b))},b.endFill=function(){return this.beginFill()},b.setStrokeStyle=function(a,b,d,e,f){return this._updateInstructions(!0),this._strokeStyle=this.command=new c.StrokeStyle(a,b,d,e,f),this._stroke&&(this._stroke.ignoreScale=f),this._strokeIgnoreScale=f,this},b.setStrokeDash=function(a,b){return this._updateInstructions(!0),this._strokeDash=this.command=new c.StrokeDash(a,b),this},b.beginStroke=function(a){return this._setStroke(a?new c.Stroke(a):null)},b.beginLinearGradientStroke=function(a,b,d,e,f,g){return this._setStroke((new c.Stroke).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientStroke=function(a,b,d,e,f,g,h,i){return this._setStroke((new c.Stroke).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapStroke=function(a,b){return this._setStroke((new c.Stroke).bitmap(a,b))},b.endStroke=function(){return this.beginStroke()},b.curveTo=b.quadraticCurveTo,b.drawRect=b.rect,b.drawRoundRect=function(a,b,c,d,e){return this.drawRoundRectComplex(a,b,c,d,e,e,e,e)},b.drawRoundRectComplex=function(a,b,d,e,f,g,h,i){return this.append(new c.RoundRect(a,b,d,e,f,g,h,i))},b.drawCircle=function(a,b,d){return this.append(new c.Circle(a,b,d))},b.drawEllipse=function(a,b,d,e){return this.append(new c.Ellipse(a,b,d,e))},b.drawPolyStar=function(a,b,d,e,f,g){return this.append(new c.PolyStar(a,b,d,e,f,g))},b.append=function(a,b){return this._activeInstructions.push(a),this.command=a,b||(this._dirty=!0),this},b.decodePath=function(b){for(var c=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],d=[2,2,4,6,0],e=0,f=b.length,g=[],h=0,i=0,j=a.BASE_64;f>e;){var k=b.charAt(e),l=j[k],m=l>>3,n=c[m];if(!n||3&l)throw"bad path data (@"+e+"): "+k;var o=d[m];m||(h=i=0),g.length=0,e++;for(var p=(l>>2&1)+2,q=0;o>q;q++){var r=j[b.charAt(e)],s=r>>5?-1:1;r=(31&r)<<6|j[b.charAt(e+1)],3==p&&(r=r<<6|j[b.charAt(e+2)]),r=s*r/10,q%2?h=r+=h:i=r+=i,g[q]=r,e+=p}n.apply(this,g)}return this},b.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},b.unstore=function(){return this._storeIndex=0,this},b.clone=function(){var b=new a;return b.command=this.command,b._stroke=this._stroke,b._strokeStyle=this._strokeStyle,b._strokeDash=this._strokeDash,b._strokeIgnoreScale=this._strokeIgnoreScale,b._fill=this._fill,b._instructions=this._instructions.slice(),b._commitIndex=this._commitIndex,b._activeInstructions=this._activeInstructions.slice(),b._dirty=this._dirty,b._storeIndex=this._storeIndex,b},b.toString=function(){return"[Graphics]"},b.mt=b.moveTo,b.lt=b.lineTo,b.at=b.arcTo,b.bt=b.bezierCurveTo,b.qt=b.quadraticCurveTo,b.a=b.arc,b.r=b.rect,b.cp=b.closePath,b.c=b.clear,b.f=b.beginFill,b.lf=b.beginLinearGradientFill,b.rf=b.beginRadialGradientFill,b.bf=b.beginBitmapFill,b.ef=b.endFill,b.ss=b.setStrokeStyle,b.sd=b.setStrokeDash,b.s=b.beginStroke,b.ls=b.beginLinearGradientStroke,b.rs=b.beginRadialGradientStroke,b.bs=b.beginBitmapStroke,b.es=b.endStroke,b.dr=b.drawRect,b.rr=b.drawRoundRect,b.rc=b.drawRoundRectComplex,b.dc=b.drawCircle,b.de=b.drawEllipse,b.dp=b.drawPolyStar,b.p=b.decodePath,b._updateInstructions=function(b){var c=this._instructions,d=this._activeInstructions,e=this._commitIndex;if(this._dirty&&d.length){c.length=e,c.push(a.beginCmd);var f=d.length,g=c.length;c.length=g+f;for(var h=0;f>h;h++)c[h+g]=d[h];this._fill&&c.push(this._fill),this._stroke&&(this._strokeDash!==this._oldStrokeDash&&(this._oldStrokeDash=this._strokeDash,c.push(this._strokeDash)),this._strokeStyle!==this._oldStrokeStyle&&(this._oldStrokeStyle=this._strokeStyle,c.push(this._strokeStyle)),c.push(this._stroke)),this._dirty=!1}b&&(d.length=0,this._commitIndex=c.length)},b._setFill=function(a){return this._updateInstructions(!0),this.command=this._fill=a,this},b._setStroke=function(a){return this._updateInstructions(!0),(this.command=this._stroke=a)&&(a.ignoreScale=this._strokeIgnoreScale),this},(c.LineTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.lineTo(this.x,this.y)},(c.MoveTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.moveTo(this.x,this.y)},(c.ArcTo=function(a,b,c,d,e){this.x1=a,this.y1=b,this.x2=c,this.y2=d,this.radius=e}).prototype.exec=function(a){a.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(c.Arc=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.startAngle=d,this.endAngle=e,this.anticlockwise=!!f}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(c.QuadraticCurveTo=function(a,b,c,d){this.cpx=a,this.cpy=b,this.x=c,this.y=d}).prototype.exec=function(a){a.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(c.BezierCurveTo=function(a,b,c,d,e,f){this.cp1x=a,this.cp1y=b,this.cp2x=c,this.cp2y=d,this.x=e,this.y=f}).prototype.exec=function(a){a.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(c.Rect=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){a.rect(this.x,this.y,this.w,this.h)},(c.ClosePath=function(){}).prototype.exec=function(a){a.closePath()},(c.BeginPath=function(){}).prototype.exec=function(a){a.beginPath()},b=(c.Fill=function(a,b){this.style=a,this.matrix=b}).prototype,b.exec=function(a){if(this.style){a.fillStyle=this.style;var b=this.matrix;b&&(a.save(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty)),a.fill(),b&&a.restore()}},b.linearGradient=function(b,c,d,e,f,g){for(var h=this.style=a._ctx.createLinearGradient(d,e,f,g),i=0,j=b.length;j>i;i++)h.addColorStop(c[i],b[i]);return h.props={colors:b,ratios:c,x0:d,y0:e,x1:f,y1:g,type:"linear"},this},b.radialGradient=function(b,c,d,e,f,g,h,i){for(var j=this.style=a._ctx.createRadialGradient(d,e,f,g,h,i),k=0,l=b.length;l>k;k++)j.addColorStop(c[k],b[k]);return j.props={colors:b,ratios:c,x0:d,y0:e,r0:f,x1:g,y1:h,r1:i,type:"radial"},this},b.bitmap=function(b,c){if(b.naturalWidth||b.getContext||b.readyState>=2){var d=this.style=a._ctx.createPattern(b,c||"");d.props={image:b,repetition:c,type:"bitmap"}}return this},b.path=!1,b=(c.Stroke=function(a,b){this.style=a,this.ignoreScale=b}).prototype,b.exec=function(a){this.style&&(a.strokeStyle=this.style,this.ignoreScale&&(a.save(),a.setTransform(1,0,0,1,0,0)),a.stroke(),this.ignoreScale&&a.restore())},b.linearGradient=c.Fill.prototype.linearGradient,b.radialGradient=c.Fill.prototype.radialGradient,b.bitmap=c.Fill.prototype.bitmap,b.path=!1,b=(c.StrokeStyle=function(a,b,c,d,e){this.width=a,this.caps=b,this.joints=c,this.miterLimit=d,this.ignoreScale=e}).prototype,b.exec=function(b){b.lineWidth=null==this.width?"1":this.width,b.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:a.STROKE_CAPS_MAP[this.caps],b.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:a.STROKE_JOINTS_MAP[this.joints],b.miterLimit=null==this.miterLimit?"10":this.miterLimit,b.ignoreScale=null==this.ignoreScale?!1:this.ignoreScale},b.path=!1,(c.StrokeDash=function(a,b){this.segments=a,this.offset=b||0}).prototype.exec=function(a){a.setLineDash&&(a.setLineDash(this.segments||c.StrokeDash.EMPTY_SEGMENTS),a.lineDashOffset=this.offset||0)},c.StrokeDash.EMPTY_SEGMENTS=[],(c.RoundRect=function(a,b,c,d,e,f,g,h){this.x=a,this.y=b,this.w=c,this.h=d,this.radiusTL=e,this.radiusTR=f,this.radiusBR=g,this.radiusBL=h}).prototype.exec=function(a){var b=(j>i?i:j)/2,c=0,d=0,e=0,f=0,g=this.x,h=this.y,i=this.w,j=this.h,k=this.radiusTL,l=this.radiusTR,m=this.radiusBR,n=this.radiusBL;0>k&&(k*=c=-1),k>b&&(k=b),0>l&&(l*=d=-1),l>b&&(l=b),0>m&&(m*=e=-1),m>b&&(m=b),0>n&&(n*=f=-1),n>b&&(n=b),a.moveTo(g+i-l,h),a.arcTo(g+i+l*d,h-l*d,g+i,h+l,l),a.lineTo(g+i,h+j-m),a.arcTo(g+i+m*e,h+j+m*e,g+i-m,h+j,m),a.lineTo(g+n,h+j),a.arcTo(g-n*f,h+j+n*f,g,h+j-n,n),a.lineTo(g,h+k),a.arcTo(g-k*c,h-k*c,g+k,h,k),a.closePath()},(c.Circle=function(a,b,c){this.x=a,this.y=b,this.radius=c}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,0,2*Math.PI)},(c.Ellipse=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.w,e=this.h,f=.5522848,g=d/2*f,h=e/2*f,i=b+d,j=c+e,k=b+d/2,l=c+e/2;a.moveTo(b,l),a.bezierCurveTo(b,l-h,k-g,c,k,c),a.bezierCurveTo(k+g,c,i,l-h,i,l),a.bezierCurveTo(i,l+h,k+g,j,k,j),a.bezierCurveTo(k-g,j,b,l+h,b,l)},(c.PolyStar=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.sides=d,this.pointSize=e,this.angle=f}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.radius,e=(this.angle||0)/180*Math.PI,f=this.sides,g=1-(this.pointSize||0),h=Math.PI/f;a.moveTo(b+Math.cos(e)*d,c+Math.sin(e)*d);for(var i=0;f>i;i++)e+=h,1!=g&&a.lineTo(b+Math.cos(e)*d*g,c+Math.sin(e)*d*g),e+=h,a.lineTo(b+Math.cos(e)*d,c+Math.sin(e)*d);a.closePath()},a.beginCmd=new c.BeginPath,createjs.Graphics=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null
	}var b=createjs.extend(a,createjs.EventDispatcher);a._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],a.suppressCrossDomainErrors=!1,a._snapToPixelEnabled=!1;var c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._hitTestCanvas=c,a._hitTestContext=c.getContext("2d"),c.width=c.height=1),a._nextCacheID=1,b.getStage=function(){for(var a=this,b=createjs.Stage;a.parent;)a=a.parent;return a instanceof b?a:null};try{Object.defineProperties(b,{stage:{get:b.getStage}})}catch(d){}b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;return a.drawImage(c,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,c.width/d,c.height/d),!0},b.updateContext=function(b){var c=this,d=c.mask,e=c._props.matrix;d&&d.graphics&&!d.graphics.isEmpty()&&(d.getMatrix(e),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty),d.graphics.drawAsPath(b),b.clip(),e.invert(),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty)),this.getMatrix(e);var f=e.tx,g=e.ty;a._snapToPixelEnabled&&c.snapToPixel&&(f=f+(0>f?-.5:.5)|0,g=g+(0>g?-.5:.5)|0),b.transform(e.a,e.b,e.c,e.d,f,g),b.globalAlpha*=c.alpha,c.compositeOperation&&(b.globalCompositeOperation=c.compositeOperation),c.shadow&&this._applyShadow(b,c.shadow)},b.cache=function(a,b,c,d,e){e=e||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=c,this._cacheHeight=d,this._cacheOffsetX=a,this._cacheOffsetY=b,this._cacheScale=e,this.updateCache()},b.updateCache=function(b){var c=this.cacheCanvas;if(!c)throw"cache() must be called before updateCache()";var d=this._cacheScale,e=this._cacheOffsetX*d,f=this._cacheOffsetY*d,g=this._cacheWidth,h=this._cacheHeight,i=c.getContext("2d"),j=this._getFilterBounds();e+=this._filterOffsetX=j.x,f+=this._filterOffsetY=j.y,g=Math.ceil(g*d)+j.width,h=Math.ceil(h*d)+j.height,g!=c.width||h!=c.height?(c.width=g,c.height=h):b||i.clearRect(0,0,g+1,h+1),i.save(),i.globalCompositeOperation=b,i.setTransform(d,0,0,d,-e,-f),this.draw(i,!0),this._applyFilters(),i.restore(),this.cacheID=a._nextCacheID++},b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},b.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},b.localToGlobal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a,b,c||new createjs.Point)},b.globalToLocal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a,b,c||new createjs.Point)},b.localToLocal=function(a,b,c,d){return d=this.localToGlobal(a,b,d),c.globalToLocal(d.x,d.y,d)},b.setTransform=function(a,b,c,d,e,f,g,h,i){return this.x=a||0,this.y=b||0,this.scaleX=null==c?1:c,this.scaleY=null==d?1:d,this.rotation=e||0,this.skewX=f||0,this.skewY=g||0,this.regX=h||0,this.regY=i||0,this},b.getMatrix=function(a){var b=this,c=a&&a.identity()||new createjs.Matrix2D;return b.transformMatrix?c.copy(b.transformMatrix):c.appendTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY)},b.getConcatenatedMatrix=function(a){for(var b=this,c=this.getMatrix(a);b=b.parent;)c.prependMatrix(b.getMatrix(b._props.matrix));return c},b.getConcatenatedDisplayProps=function(a){a=a?a.identity():new createjs.DisplayProps;var b=this,c=b.getMatrix(a.matrix);do a.prepend(b.visible,b.alpha,b.shadow,b.compositeOperation),b!=this&&c.prependMatrix(b.getMatrix(b._props.matrix));while(b=b.parent);return a},b.hitTest=function(b,c){var d=a._hitTestContext;d.setTransform(1,0,0,1,-b,-c),this.draw(d);var e=this._testHit(d);return d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,2,2),e},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var a=this.cacheCanvas;if(a){var b=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,a.width/b,a.height/b)}return null},b.getTransformedBounds=function(){return this._getBounds()},b.setBounds=function(a,b,c,d){null==a&&(this._bounds=a),this._bounds=(this._bounds||new createjs.Rectangle).setValues(a,b,c,d)},b.clone=function(){return this._cloneProps(new a)},b.toString=function(){return"[DisplayObject (name="+this.name+")]"},b._cloneProps=function(a){return a.alpha=this.alpha,a.mouseEnabled=this.mouseEnabled,a.tickEnabled=this.tickEnabled,a.name=this.name,a.regX=this.regX,a.regY=this.regY,a.rotation=this.rotation,a.scaleX=this.scaleX,a.scaleY=this.scaleY,a.shadow=this.shadow,a.skewX=this.skewX,a.skewY=this.skewY,a.visible=this.visible,a.x=this.x,a.y=this.y,a.compositeOperation=this.compositeOperation,a.snapToPixel=this.snapToPixel,a.filters=null==this.filters?null:this.filters.slice(0),a.mask=this.mask,a.hitArea=this.hitArea,a.cursor=this.cursor,a._bounds=this._bounds,a},b._applyShadow=function(a,b){b=b||Shadow.identity,a.shadowColor=b.color,a.shadowOffsetX=b.offsetX,a.shadowOffsetY=b.offsetY,a.shadowBlur=b.blur},b._tick=function(a){var b=this._listeners;b&&b.tick&&(a.target=null,a.propagationStopped=a.immediatePropagationStopped=!1,this.dispatchEvent(a))},b._testHit=function(b){try{var c=b.getImageData(0,0,1,1).data[3]>1}catch(d){if(!a.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return c},b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;a>e;e++)this.filters[e].applyFilter(b,0,0,c,d)},b._getFilterBounds=function(){var a,b=this.filters,c=this._rectangle.setValues(0,0,0,0);if(!b||!(a=b.length))return c;for(var d=0;a>d;d++){var e=this.filters[d];e.getBounds&&e.getBounds(c)}return c},b._getBounds=function(a,b){return this._transformBounds(this.getBounds(),a,b)},b._transformBounds=function(a,b,c){if(!a)return a;var d=a.x,e=a.y,f=a.width,g=a.height,h=this._props.matrix;h=c?h.identity():this.getMatrix(h),(d||e)&&h.appendTransform(0,0,1,1,0,0,0,-d,-e),b&&h.prependMatrix(b);var i=f*h.a,j=f*h.b,k=g*h.c,l=g*h.d,m=h.tx,n=h.ty,o=m,p=m,q=n,r=n;return(d=i+m)<o?o=d:d>p&&(p=d),(d=i+k+m)<o?o=d:d>p&&(p=d),(d=k+m)<o?o=d:d>p&&(p=d),(e=j+n)<q?q=e:e>r&&(r=e),(e=j+l+n)<q?q=e:e>r&&(r=e),(e=l+n)<q?q=e:e>r&&(r=e),a.setValues(o,q,p-o,r-q)},b._hasMouseEventListener=function(){for(var b=a._MOUSE_EVENTS,c=0,d=b.length;d>c;c++)if(this.hasEventListener(b[c]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var b=createjs.extend(a,createjs.DisplayObject);b.getNumChildren=function(){return this.children.length};try{Object.defineProperties(b,{numChildren:{get:b.getNumChildren}})}catch(c){}b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(),d=0,e=c.length;e>d;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0},b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addChild(arguments[c]);return arguments[b-1]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.push(a),a.dispatchEvent("added"),a},b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(c>2){for(var e=0;c-1>e;e++)this.addChildAt(arguments[e],d+e);return arguments[c-2]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),a.dispatchEvent("added"),a},b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(createjs.indexOf(this.children,a))},b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;b>d;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;b>d;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-1)return!1;var f=this.children[a];return f&&(f.parent=null),this.children.splice(a,1),f.dispatchEvent("removed"),!0},b.removeAllChildren=function(){for(var a=this.children;a.length;)this.removeChildAt(0)},b.getChildAt=function(a){return this.children[a]},b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},b.sortChildren=function(a){this.children.sort(a)},b.getChildIndex=function(a){return createjs.indexOf(this.children,a)},b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)},b.swapChildren=function(a,b){for(var c,d,e=this.children,f=0,g=e.length;g>f&&(e[f]==a&&(c=f),e[f]==b&&(d=f),null==c||null==d);f++);f!=g&&(e[c]=b,e[d]=a)},b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;d>e&&c[e]!=a;e++);e!=d&&e!=b&&(c.splice(e,1),c.splice(b,0,a))}},b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1},b.hitTest=function(a,b){return null!=this.getObjectUnderPoint(a,b)},b.getObjectsUnderPoint=function(a,b,c){var d=[],e=this.localToGlobal(a,b);return this._getObjectsUnderPoint(e.x,e.y,d,c>0,1==c),d},b.getObjectUnderPoint=function(a,b,c){var d=this.localToGlobal(a,b);return this._getObjectsUnderPoint(d.x,d.y,null,c>0,1==c)},b.getBounds=function(){return this._getBounds(null,!0)},b.getTransformedBounds=function(){return this._getBounds()},b.clone=function(b){var c=this._cloneProps(new a);return b&&this._cloneChildren(c),c},b.toString=function(){return"[Container (name="+this.name+")]"},b._tick=function(a){if(this.tickChildren)for(var b=this.children.length-1;b>=0;b--){var c=this.children[b];c.tickEnabled&&c._tick&&c._tick(a)}this.DisplayObject__tick(a)},b._cloneChildren=function(a){a.children.length&&a.removeAllChildren();for(var b=a.children,c=0,d=this.children.length;d>c;c++){var e=this.children[c].clone(!0);e.parent=a,b.push(e)}},b._getObjectsUnderPoint=function(b,c,d,e,f,g){if(g=g||0,!g&&!this._testMask(this,b,c))return null;var h,i=createjs.DisplayObject._hitTestContext;f=f||e&&this._hasMouseEventListener();for(var j=this.children,k=j.length,l=k-1;l>=0;l--){var m=j[l],n=m.hitArea;if(m.visible&&(n||m.isVisible())&&(!e||m.mouseEnabled)&&(n||this._testMask(m,b,c)))if(!n&&m instanceof a){var o=m._getObjectsUnderPoint(b,c,d,e,f,g+1);if(!d&&o)return e&&!this.mouseChildren?this:o}else{if(e&&!f&&!m._hasMouseEventListener())continue;var p=m.getConcatenatedDisplayProps(m._props);if(h=p.matrix,n&&(h.appendMatrix(n.getMatrix(n._props.matrix)),p.alpha=n.alpha),i.globalAlpha=p.alpha,i.setTransform(h.a,h.b,h.c,h.d,h.tx-b,h.ty-c),(n||m).draw(i),!this._testHit(i))continue;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,2,2),!d)return e&&!this.mouseChildren?this:m;d.push(m)}}return null},b._testMask=function(a,b,c){var d=a.mask;if(!d||!d.graphics||d.graphics.isEmpty())return!0;var e=this._props.matrix,f=a.parent;e=f?f.getConcatenatedMatrix(e):e.identity(),e=d.getMatrix(d._props.matrix).prependMatrix(e);var g=createjs.DisplayObject._hitTestContext;return g.setTransform(e.a,e.b,e.c,e.d,e.tx-b,e.ty-c),d.graphics.drawAsPath(g),g.fillStyle="#000",g.fill(),this._testHit(g)?(g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,2,2),!0):!1},b._getBounds=function(a,b){var c=this.DisplayObject_getBounds();if(c)return this._transformBounds(c,a,b);var d=this._props.matrix;d=b?d.identity():this.getMatrix(d),a&&d.prependMatrix(a);for(var e=this.children.length,f=null,g=0;e>g;g++){var h=this.children[g];h.visible&&(c=h._getBounds(d))&&(f?f.extend(c.x,c.y,c.width,c.height):f=c.clone())}return f},createjs.Container=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof a?document.getElementById(a):a,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var b=createjs.extend(a,createjs.Container);b._get_nextStage=function(){return this._nextStage},b._set_nextStage=function(a){this._nextStage&&(this._nextStage._prevStage=null),a&&(a._prevStage=this),this._nextStage=a};try{Object.defineProperties(b,{nextStage:{get:b._get_nextStage,set:b._set_nextStage}})}catch(c){}b.update=function(a){if(this.canvas&&(this.tickOnUpdate&&this.tick(a),this.dispatchEvent("drawstart",!1,!0)!==!1)){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var b=this.drawRect,c=this.canvas.getContext("2d");c.setTransform(1,0,0,1,0,0),this.autoClear&&(b?c.clearRect(b.x,b.y,b.width,b.height):c.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),c.save(),this.drawRect&&(c.beginPath(),c.rect(b.x,b.y,b.width,b.height),c.clip()),this.updateContext(c),this.draw(c,!1),c.restore(),this.dispatchEvent("drawend")}},b.tick=function(a){if(this.tickEnabled&&this.dispatchEvent("tickstart",!1,!0)!==!1){var b=new createjs.Event("tick");if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);this._tick(b),this.dispatchEvent("tickend")}},b.handleEvent=function(a){"tick"==a.type&&this.update(a)},b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},b.toDataURL=function(a,b){var c,d=this.canvas.getContext("2d"),e=this.canvas.width,f=this.canvas.height;if(a){c=d.getImageData(0,0,e,f);var g=d.globalCompositeOperation;d.globalCompositeOperation="destination-over",d.fillStyle=a,d.fillRect(0,0,e,f)}var h=this.canvas.toDataURL(b||"image/png");return a&&(d.putImageData(c,0,0),d.globalCompositeOperation=g),h},b.enableMouseOver=function(a){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==a&&this._testMouseOver(!0)),null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1e3/Math.min(50,a))},b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c,d=this._eventListeners;if(!a&&d){for(b in d)c=d[b],c.t.removeEventListener(b,c.f,!1);this._eventListeners=null}else if(a&&!d&&this.canvas){var e=window.addEventListener?window:document,f=this;d=this._eventListeners={},d.mouseup={t:e,f:function(a){f._handleMouseUp(a)}},d.mousemove={t:e,f:function(a){f._handleMouseMove(a)}},d.dblclick={t:this.canvas,f:function(a){f._handleDoubleClick(a)}},d.mousedown={t:this.canvas,f:function(a){f._handleMouseDown(a)}};for(b in d)c=d[b],c.t.addEventListener(b,c.f,!1)}},b.clone=function(){throw"Stage cannot be cloned."},b.toString=function(){return"[Stage (name="+this.name+")]"},b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),f=window.getComputedStyle?getComputedStyle(a,null):a.currentStyle,g=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth),h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),i=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),j=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+g,right:b.right+d-i,top:b.top+e+h,bottom:b.bottom+e-j}},b._getPointerData=function(a){var b=this._pointerData[a];return b||(b=this._pointerData[a]={x:0,y:0}),b},b._handleMouseMove=function(a){a||(a=window.event),this._handlePointerMove(-1,a,a.pageX,a.pageY)},b._handlePointerMove=function(a,b,c,d,e){if((!this._prevStage||void 0!==e)&&this.canvas){var f=this._nextStage,g=this._getPointerData(a),h=g.inBounds;this._updatePointerPosition(a,b,c,d),(h||g.inBounds||this.mouseMoveOutside)&&(-1===a&&g.inBounds==!h&&this._dispatchMouseEvent(this,h?"mouseleave":"mouseenter",!1,a,g,b),this._dispatchMouseEvent(this,"stagemousemove",!1,a,g,b),this._dispatchMouseEvent(g.target,"pressmove",!0,a,g,b)),f&&f._handlePointerMove(a,b,c,d,null)}},b._updatePointerPosition=function(a,b,c,d){var e=this._getElementRect(this.canvas);c-=e.left,d-=e.top;var f=this.canvas.width,g=this.canvas.height;c/=(e.right-e.left)/f,d/=(e.bottom-e.top)/g;var h=this._getPointerData(a);(h.inBounds=c>=0&&d>=0&&f-1>=c&&g-1>=d)?(h.x=c,h.y=d):this.mouseMoveOutside&&(h.x=0>c?0:c>f-1?f-1:c,h.y=0>d?0:d>g-1?g-1:d),h.posEvtObj=b,h.rawX=c,h.rawY=d,(a===this._primaryPointerID||-1===a)&&(this.mouseX=h.x,this.mouseY=h.y,this.mouseInBounds=h.inBounds)},b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)},b._handlePointerUp=function(a,b,c,d){var e=this._nextStage,f=this._getPointerData(a);if(!this._prevStage||void 0!==d){var g=null,h=f.target;d||!h&&!e||(g=this._getObjectsUnderPoint(f.x,f.y,null,!0)),f.down&&(this._dispatchMouseEvent(this,"stagemouseup",!1,a,f,b,g),f.down=!1),g==h&&this._dispatchMouseEvent(h,"click",!0,a,f,b),this._dispatchMouseEvent(h,"pressup",!0,a,f,b),c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):f.target=null,e&&e._handlePointerUp(a,b,c,d||g&&this)}},b._handleMouseDown=function(a){this._handlePointerDown(-1,a,a.pageX,a.pageY)},b._handlePointerDown=function(a,b,c,d,e){this.preventSelection&&b.preventDefault(),(null==this._primaryPointerID||-1===a)&&(this._primaryPointerID=a),null!=d&&this._updatePointerPosition(a,b,c,d);var f=null,g=this._nextStage,h=this._getPointerData(a);e||(f=h.target=this._getObjectsUnderPoint(h.x,h.y,null,!0)),h.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,a,h,b,f),h.down=!0),this._dispatchMouseEvent(f,"mousedown",!0,a,h,b),g&&g._handlePointerDown(a,b,c,d,e||f&&this)},b._testMouseOver=function(a,b,c){if(!this._prevStage||void 0!==b){var d=this._nextStage;if(!this._mouseOverIntervalID)return void(d&&d._testMouseOver(a,b,c));var e=this._getPointerData(-1);if(e&&(a||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var f,g,h,i=e.posEvtObj,j=c||i&&i.target==this.canvas,k=null,l=-1,m="";!b&&(a||this.mouseInBounds&&j)&&(k=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var n=this._mouseOverTarget||[],o=n[n.length-1],p=this._mouseOverTarget=[];for(f=k;f;)p.unshift(f),m||(m=f.cursor),f=f.parent;for(this.canvas.style.cursor=m,!b&&c&&(c.canvas.style.cursor=m),g=0,h=p.length;h>g&&p[g]==n[g];g++)l=g;for(o!=k&&this._dispatchMouseEvent(o,"mouseout",!0,-1,e,i,k),g=n.length-1;g>l;g--)this._dispatchMouseEvent(n[g],"rollout",!1,-1,e,i,k);for(g=p.length-1;g>l;g--)this._dispatchMouseEvent(p[g],"rollover",!1,-1,e,i,o);o!=k&&this._dispatchMouseEvent(k,"mouseover",!0,-1,e,i,o),d&&d._testMouseOver(a,b||k&&this,c||j&&this)}}},b._handleDoubleClick=function(a,b){var c=null,d=this._nextStage,e=this._getPointerData(-1);b||(c=this._getObjectsUnderPoint(e.x,e.y,null,!0),this._dispatchMouseEvent(c,"dblclick",!0,-1,e,a)),d&&d._handleDoubleClick(a,b||c&&this)},b._dispatchMouseEvent=function(a,b,c,d,e,f,g){if(a&&(c||a.hasEventListener(b))){var h=new createjs.MouseEvent(b,c,!1,e.x,e.y,f,d,d===this._primaryPointerID||-1===d,e.rawX,e.rawY,g);a.dispatchEvent(h)}},createjs.Stage=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){function a(a){this.DisplayObject_constructor(),"string"==typeof a?(this.image=document.createElement("img"),this.image.src=a):this.image=a,this.sourceRect=null}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.image,b=this.cacheCanvas||a&&(a.naturalWidth||a.getContext||a.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&b)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b)||!this.image)return!0;var c=this.image,d=this.sourceRect;if(d){var e=d.x,f=d.y,g=e+d.width,h=f+d.height,i=0,j=0,k=c.width,l=c.height;0>e&&(i-=e,e=0),g>k&&(g=k),0>f&&(j-=f,f=0),h>l&&(h=l),a.drawImage(c,e,f,g-e,h-f,i,j,g-e,h-f)}else a.drawImage(c,0,0);return!0},b.getBounds=function(){var a=this.DisplayObject_getBounds();if(a)return a;var b=this.image,c=this.sourceRect||b,d=b&&(b.naturalWidth||b.getContext||b.readyState>=2);return d?this._rectangle.setValues(0,0,c.width,c.height):null},b.clone=function(){var b=new a(this.image);return this.sourceRect&&(b.sourceRect=this.sourceRect.clone()),this._cloneProps(b),b},b.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=a,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,null!=b&&this.gotoAndPlay(b)}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(0|this._currentFrame);if(!c)return!1;var d=c.rect;return d.width&&d.height&&a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height),!0},b.play=function(){this.paused=!1},b.stop=function(){this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._skipAdvance=!0,this._goto(a)},b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.advance=function(a){var b=this.framerate||this.spriteSheet.framerate,c=b&&null!=a?a/(1e3/b):1;this._normalizeFrame(c)},b.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},b.clone=function(){return this._cloneProps(new a(this.spriteSheet))},b.toString=function(){return"[Sprite (name="+this.name+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.currentFrame=this.currentFrame,a.currentAnimation=this.currentAnimation,a.paused=this.paused,a.currentAnimationFrame=this.currentAnimationFrame,a.framerate=this.framerate,a._animation=this._animation,a._currentFrame=this._currentFrame,a._skipAdvance=this._skipAdvance,a},b._tick=function(a){this.paused||(this._skipAdvance||this.advance(a&&a.delta),this._skipAdvance=!1),this.DisplayObject__tick(a)},b._normalizeFrame=function(a){a=a||0;var b,c=this._animation,d=this.paused,e=this._currentFrame;if(c){var f=c.speed||1,g=this.currentAnimationFrame;if(b=c.frames.length,g+a*f>=b){var h=c.next;if(this._dispatchAnimationEnd(c,e,d,h,b-1))return;if(h)return this._goto(h,a-(b-g)/f);this.paused=!0,g=c.frames.length-1}else g+=a*f;this.currentAnimationFrame=g,this._currentFrame=c.frames[0|g]}else if(e=this._currentFrame+=a,b=this.spriteSheet.getNumFrames(),e>=b&&b>0&&!this._dispatchAnimationEnd(c,e,d,b-1)&&(this._currentFrame-=b)>=b)return this._normalizeFrame();e=0|this._currentFrame,this.currentFrame!=e&&(this.currentFrame=e,this.dispatchEvent("change"))},b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;if(this.hasEventListener("animationend")){var g=new createjs.Event("animationend");g.name=f,g.next=d,this.dispatchEvent(g)}var h=this._animation!=a||this._currentFrame!=b;return h||c||!this.paused||(this.currentAnimationFrame=e,h=!0),h},b._goto=function(a,b){if(this.currentAnimationFrame=0,isNaN(a)){var c=this.spriteSheet.getAnimation(a);c&&(this._animation=c,this.currentAnimation=a,this._normalizeFrame(b))}else this.currentAnimation=this._animation=null,this._currentFrame=a,this._normalizeFrame()},createjs.Sprite=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),this.graphics=a?a:new createjs.Graphics}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this.graphics.draw(a,this),!0)},b.clone=function(b){var c=b&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new a(c))},b.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.DisplayObject_constructor(),this.text=a,this.font=b,this.color=c,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var b=createjs.extend(a,createjs.DisplayObject),c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._workingContext=c.getContext("2d"),c.width=c.height=1),a.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},a.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.color||"#000";return this.outline?(a.strokeStyle=c,a.lineWidth=1*this.outline):a.fillStyle=c,this._drawText(this._prepContext(a)),!0},b.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},b.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},b.getMeasuredHeight=function(){return this._drawText(null,{}).height},b.getBounds=function(){var b=this.DisplayObject_getBounds();if(b)return b;if(null==this.text||""===this.text)return null;var c=this._drawText(null,{}),d=this.maxWidth&&this.maxWidth<c.width?this.maxWidth:c.width,e=d*a.H_OFFSETS[this.textAlign||"left"],f=this.lineHeight||this.getMeasuredLineHeight(),g=f*a.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(e,g,d,c.height)},b.getMetrics=function(){var b={lines:[]};return b.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),b.vOffset=b.lineHeight*a.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,b,b.lines)},b.clone=function(){return this._cloneProps(new a(this.text,this.font,this.color))},b.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.textAlign=this.textAlign,a.textBaseline=this.textBaseline,a.maxWidth=this.maxWidth,a.outline=this.outline,a.lineHeight=this.lineHeight,a.lineWidth=this.lineWidth,a},b._prepContext=function(a){return a.font=this.font||"10px sans-serif",a.textAlign=this.textAlign||"left",a.textBaseline=this.textBaseline||"top",a},b._drawText=function(b,c,d){var e=!!b;e||(b=a._workingContext,b.save(),this._prepContext(b));for(var f=this.lineHeight||this.getMeasuredLineHeight(),g=0,h=0,i=String(this.text).split(/(?:\r\n|\r|\n)/),j=0,k=i.length;k>j;j++){var l=i[j],m=null;if(null!=this.lineWidth&&(m=b.measureText(l).width)>this.lineWidth){var n=l.split(/(\s)/);l=n[0],m=b.measureText(l).width;for(var o=1,p=n.length;p>o;o+=2){var q=b.measureText(n[o]+n[o+1]).width;m+q>this.lineWidth?(e&&this._drawTextLine(b,l,h*f),d&&d.push(l),m>g&&(g=m),l=n[o+1],m=b.measureText(l).width,h++):(l+=n[o]+n[o+1],m+=q)}}e&&this._drawTextLine(b,l,h*f),d&&d.push(l),c&&null==m&&(m=b.measureText(l).width),m>g&&(g=m),h++}return c&&(c.width=g,c.height=h*f),e||b.restore(),c},b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)},b._getMeasuredWidth=function(b){var c=a._workingContext;c.save();var d=this._prepContext(c).measureText(b).width;return c.restore(),d},createjs.Text=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Container_constructor(),this.text=a||"",this.spriteSheet=b,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var b=createjs.extend(a,createjs.Container);a.maxPoolSize=100,a._spritePool=[],b.draw=function(a,b){this.DisplayObject_draw(a,b)||(this._updateText(),this.Container_draw(a,b))},b.getBounds=function(){return this._updateText(),this.Container_getBounds()},b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&a)},b.clone=function(){return this._cloneProps(new a(this.text,this.spriteSheet))},b.addChild=b.addChildAt=b.removeChild=b.removeChildAt=b.removeAllChildren=function(){},b._cloneProps=function(a){return this.Container__cloneProps(a),a.lineHeight=this.lineHeight,a.letterSpacing=this.letterSpacing,a.spaceWidth=this.spaceWidth,a},b._getFrameIndex=function(a,b){var c,d=b.getAnimation(a);return d||(a!=(c=a.toUpperCase())||a!=(c=a.toLowerCase())||(c=null),c&&(d=b.getAnimation(c))),d&&d.frames[0]},b._getFrame=function(a,b){var c=this._getFrameIndex(a,b);return null==c?c:b.getFrame(c)},b._getLineHeight=function(a){var b=this._getFrame("1",a)||this._getFrame("T",a)||this._getFrame("L",a)||a.getFrame(0);return b?b.rect.height:1},b._getSpaceWidth=function(a){var b=this._getFrame("1",a)||this._getFrame("l",a)||this._getFrame("e",a)||this._getFrame("a",a)||a.getFrame(0);return b?b.rect.width:1},b._updateText=function(){var b,c=0,d=0,e=this._oldProps,f=!1,g=this.spaceWidth,h=this.lineHeight,i=this.spriteSheet,j=a._spritePool,k=this.children,l=0,m=k.length;for(var n in e)e[n]!=this[n]&&(e[n]=this[n],f=!0);if(f){var o=!!this._getFrame(" ",i);o||g||(g=this._getSpaceWidth(i)),h||(h=this._getLineHeight(i));for(var p=0,q=this.text.length;q>p;p++){var r=this.text.charAt(p);if(" "!=r||o)if("\n"!=r&&"\r"!=r){var s=this._getFrameIndex(r,i);null!=s&&(m>l?b=k[l]:(k.push(b=j.length?j.pop():new createjs.Sprite),b.parent=this,m++),b.spriteSheet=i,b.gotoAndStop(s),b.x=c,b.y=d,l++,c+=b.getBounds().width+this.letterSpacing)}else"\r"==r&&"\n"==this.text.charAt(p+1)&&p++,c=0,d+=h;else c+=g}for(;m>l;)j.push(b=k.pop()),b.parent=null,m--;j.length>a.maxPoolSize&&(j.length=a.maxPoolSize)}},createjs.BitmapText=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d,e){this.Container_constructor(),!a.inited&&a.init(),this.mode=b||a.INDEPENDENT,this.startPosition=c||0,this.loop=d,this.currentFrame=0,this.timeline=new createjs.Timeline(null,e,{paused:!0,position:c,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function b(){throw"MovieClipPlugin cannot be instantiated."}var c=createjs.extend(a,createjs.Container);a.INDEPENDENT="independent",a.SINGLE_FRAME="single",a.SYNCHED="synched",a.inited=!1,a.init=function(){a.inited||(b.install(),a.inited=!0)},c.getLabels=function(){return this.timeline.getLabels()},c.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},c.getDuration=function(){return this.timeline.duration};try{Object.defineProperties(c,{labels:{get:c.getLabels},currentLabel:{get:c.getCurrentLabel},totalFrames:{get:c.getDuration},duration:{get:c.getDuration}})}catch(d){}c.initialize=a,c.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},c.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),this.Container_draw(a,b),!0)
	},c.play=function(){this.paused=!1},c.stop=function(){this.paused=!0},c.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},c.gotoAndStop=function(a){this.paused=!0,this._goto(a)},c.advance=function(b){var c=a.INDEPENDENT;if(this.mode==c){for(var d=this,e=d.framerate;(d=d.parent)&&null==e;)d.mode==c&&(e=d._framerate);this._framerate=e;var f=null!=e&&-1!=e&&null!=b?b/(1e3/e)+this._t:1,g=0|f;for(this._t=f-g;!this.paused&&g--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},c.clone=function(){throw"MovieClip cannot be cloned."},c.toString=function(){return"[MovieClip (name="+this.name+")]"},c._tick=function(a){this.advance(a&&a.delta),this.Container__tick(a)},c._goto=function(a){var b=this.timeline.resolve(a);null!=b&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=b,this._t=0,this._updateTimeline())},c._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},c._updateTimeline=function(){var b=this.timeline,c=this.mode!=a.INDEPENDENT;b.loop=null==this.loop?!0:this.loop;var d=c?this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,e=c||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=b._calcPosition(d),b.setPosition(d,e),this._prevPosition=b._prevPosition,this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var f in this._managed)this._managed[f]=1;for(var g=b._tweens,h=0,i=g.length;i>h;h++){var j=g[h],k=j._target;if(k!=this&&!j.passive){var l=j._stepPosition;k instanceof createjs.DisplayObject?this._addManagedChild(k,l):this._setState(k.state,l)}}var m=this.children;for(h=m.length-1;h>=0;h--){var n=m[h].id;1==this._managed[n]&&(this.removeChildAt(h),delete this._managed[n])}}},c._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];this._addManagedChild(e,b)}},c._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),this._managed[b.id]=2)},c._getBounds=function(a,b){var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=createjs.promote(a,"Container"),b.priority=100,b.install=function(){createjs.Tween.installPlugin(b,["startPosition"])},b.init=function(a,b,c){return c},b.step=function(){},b.tween=function(b,c,d,e,f,g){return b.target instanceof a?1==g?f[c]:e[c]:d}}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"SpriteSheetUtils cannot be instantiated"}var b=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");b.getContext&&(a._workingCanvas=b,a._workingContext=b.getContext("2d"),b.width=b.height=1),a.addFlippedFrames=function(b,c,d,e){if(c||d||e){var f=0;c&&a._flip(b,++f,!0,!1),d&&a._flip(b,++f,!1,!0),e&&a._flip(b,++f,!0,!0)}},a.extractFrame=function(b,c){isNaN(c)&&(c=b.getAnimation(c).frames[0]);var d=b.getFrame(c);if(!d)return null;var e=d.rect,f=a._workingCanvas;f.width=e.width,f.height=e.height,a._workingContext.drawImage(d.image,e.x,e.y,e.width,e.height,0,0,e.width,e.height);var g=document.createElement("img");return g.src=f.toDataURL("image/png"),g},a.mergeAlpha=function(a,b,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),c.width=Math.max(b.width,a.width),c.height=Math.max(b.height,a.height);var d=c.getContext("2d");return d.save(),d.drawImage(a,0,0),d.globalCompositeOperation="destination-in",d.drawImage(b,0,0),d.restore(),c},a._flip=function(b,c,d,e){for(var f=b._images,g=a._workingCanvas,h=a._workingContext,i=f.length/c,j=0;i>j;j++){var k=f[j];k.__tmp=j,h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,g.width+1,g.height+1),g.width=k.width,g.height=k.height,h.setTransform(d?-1:1,0,0,e?-1:1,d?k.width:0,e?k.height:0),h.drawImage(k,0,0);var l=document.createElement("img");l.src=g.toDataURL("image/png"),l.width=k.width,l.height=k.height,f.push(l)}var m=b._frames,n=m.length/c;for(j=0;n>j;j++){k=m[j];var o=k.rect.clone();l=f[k.image.__tmp+i*c];var p={image:l,rect:o,regX:k.regX,regY:k.regY};d&&(o.x=l.width-o.x-o.width,p.regX=o.width-k.regX),e&&(o.y=l.height-o.y-o.height,p.regY=o.height-k.regY),m.push(p)}var q="_"+(d?"h":"")+(e?"v":""),r=b._animations,s=b._data,t=r.length/c;for(j=0;t>j;j++){var u=r[j];k=s[u];var v={name:u+q,speed:k.speed,next:k.next,frames:[]};k.next&&(v.next+=q),m=k.frames;for(var w=0,x=m.length;x>w;w++)v.frames.push(m[w]+n*c);s[v.name]=v,r.push(v.name)}},createjs.SpriteSheetUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this.framerate=a||0,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1}var b=createjs.extend(a,createjs.EventDispatcher);a.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",a.ERR_RUNNING="a build is already running",b.addFrame=function(b,c,d,e,f){if(this._data)throw a.ERR_RUNNING;var g=c||b.bounds||b.nominalBounds;return!g&&b.getBounds&&(g=b.getBounds()),g?(d=d||1,this._frames.push({source:b,sourceRect:g,scale:d,funct:e,data:f,index:this._frames.length,height:g.height*d})-1):null},b.addAnimation=function(b,c,d,e){if(this._data)throw a.ERR_RUNNING;this._animations[b]={frames:c,next:d,speed:e}},b.addMovieClip=function(b,c,d,e,f,g){if(this._data)throw a.ERR_RUNNING;var h=b.frameBounds,i=c||b.bounds||b.nominalBounds;if(!i&&b.getBounds&&(i=b.getBounds()),i||h){var j,k,l=this._frames.length,m=b.timeline.duration;for(j=0;m>j;j++){var n=h&&h[j]?h[j]:i;this.addFrame(b,n,d,this._setupMovieClipFrame,{i:j,f:e,d:f})}var o=b.timeline._labels,p=[];for(var q in o)p.push({index:o[q],label:q});if(p.length)for(p.sort(function(a,b){return a.index-b.index}),j=0,k=p.length;k>j;j++){for(var r=p[j].label,s=l+p[j].index,t=l+(j==k-1?m:p[j+1].index),u=[],v=s;t>v;v++)u.push(v);(!g||(r=g(r,b,s,t)))&&this.addAnimation(r,u,!0)}}},b.build=function(){if(this._data)throw a.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},b.buildAsync=function(b){if(this._data)throw a.ERR_RUNNING;this.timeSlice=b,this._startBuild();var c=this;this._timerID=setTimeout(function(){c._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},b.stopAsync=function(){clearTimeout(this._timerID),this._data=null},b.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},b.toString=function(){return"[SpriteSheetBuilder]"},b._startBuild=function(){var b=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var c=[];this._data={images:[],frames:c,framerate:this.framerate,animations:this._animations};var d=this._frames.slice();if(d.sort(function(a,b){return a.height<=b.height?-1:1}),d[d.length-1].height+2*b>this.maxHeight)throw a.ERR_DIMENSIONS;for(var e=0,f=0,g=0;d.length;){var h=this._fillRow(d,e,g,c,b);if(h.w>f&&(f=h.w),e+=h.h,!h.h||!d.length){var i=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");i.width=this._getSize(f,this.maxWidth),i.height=this._getSize(e,this.maxHeight),this._data.images[g]=i,h.h||(f=e=0,g++)}}},b._setupMovieClipFrame=function(a,b){var c=a.actionsEnabled;a.actionsEnabled=!1,a.gotoAndStop(b.i),a.actionsEnabled=c,b.f&&b.f(a,b.d,b.i)},b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))},b._fillRow=function(b,c,d,e,f){var g=this.maxWidth,h=this.maxHeight;c+=f;for(var i=h-c,j=f,k=0,l=b.length-1;l>=0;l--){var m=b[l],n=this._scale*m.scale,o=m.sourceRect,p=m.source,q=Math.floor(n*o.x-f),r=Math.floor(n*o.y-f),s=Math.ceil(n*o.height+2*f),t=Math.ceil(n*o.width+2*f);if(t>g)throw a.ERR_DIMENSIONS;s>i||j+t>g||(m.img=d,m.rect=new createjs.Rectangle(j,c,t,s),k=k||s,b.splice(l,1),e[m.index]=[j,c,t,s,d,Math.round(-q+n*p.regX-f),Math.round(-r+n*p.regY-f)],j+=t)}return{w:j,h:k}},b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},b._run=function(){for(var a=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}var e=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var f=new createjs.Event("progress");f.progress=e,this.dispatchEvent(f)}},b._drawNext=function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img],f=e.getContext("2d");return a.funct&&a.funct(a.source,a.data),f.save(),f.beginPath(),f.rect(c.x,c.y,c.width,c.height),f.clip(),f.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b)),f.scale(b,b),a.source.draw(f),f.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),"string"==typeof a&&(a=document.getElementById(a)),this.mouseEnabled=!1;var b=a.style;b.position="absolute",b.transformOrigin=b.WebkitTransformOrigin=b.msTransformOrigin=b.MozTransformOrigin=b.OTransformOrigin="0% 0%",this.htmlElement=a,this._oldProps=null}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){return null!=this.htmlElement},b.draw=function(){return!0},b.cache=function(){},b.uncache=function(){},b.updateCache=function(){},b.hitTest=function(){},b.localToGlobal=function(){},b.globalToLocal=function(){},b.localToLocal=function(){},b.clone=function(){throw"DOMElement cannot be cloned."},b.toString=function(){return"[DOMElement (name="+this.name+")]"},b._tick=function(a){var b=this.getStage();b&&b.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(a)},b._handleDrawEnd=function(){var a=this.htmlElement;if(a){var b=a.style,c=this.getConcatenatedDisplayProps(this._props),d=c.matrix,e=c.visible?"visible":"hidden";if(e!=b.visibility&&(b.visibility=e),c.visible){var f=this._oldProps,g=f&&f.matrix,h=1e4;if(!g||!g.equals(d)){var i="matrix("+(d.a*h|0)/h+","+(d.b*h|0)/h+","+(d.c*h|0)/h+","+(d.d*h|0)/h+","+(d.tx+.5|0);b.transform=b.WebkitTransform=b.OTransform=b.msTransform=i+","+(d.ty+.5|0)+")",b.MozTransform=i+"px,"+(d.ty+.5|0)+"px)",f||(f=this._oldProps=new createjs.DisplayProps(!0,0/0)),f.matrix.copy(d)}f.alpha!=c.alpha&&(b.opacity=""+(c.alpha*h|0)/h,f.alpha=c.alpha)}}},createjs.DOMElement=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){}var b=a.prototype;b.getBounds=function(a){return a},b.applyFilter=function(a,b,c,d,e,f,g,h){f=f||a,null==g&&(g=b),null==h&&(h=c);try{var i=a.getImageData(b,c,d,e)}catch(j){return!1}return this._applyFilter(i)?(f.putImageData(i,g,h),!0):!1},b.toString=function(){return"[Filter]"},b.clone=function(){return new a},b._applyFilter=function(){return!0},createjs.Filter=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){(isNaN(a)||0>a)&&(a=0),(isNaN(b)||0>b)&&(b=0),(isNaN(c)||1>c)&&(c=1),this.blurX=0|a,this.blurY=0|b,this.quality=0|c}var b=createjs.extend(a,createjs.Filter);a.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],a.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],b.getBounds=function(a){var b=0|this.blurX,c=0|this.blurY;if(0>=b&&0>=c)return a;var d=Math.pow(this.quality,.2);return(a||new createjs.Rectangle).pad(b*d+1,c*d+1,b*d+1,c*d+1)},b.clone=function(){return new a(this.blurX,this.blurY,this.quality)},b.toString=function(){return"[BlurFilter]"},b._applyFilter=function(b){var c=this.blurX>>1;if(isNaN(c)||0>c)return!1;var d=this.blurY>>1;if(isNaN(d)||0>d)return!1;if(0==c&&0==d)return!1;var e=this.quality;(isNaN(e)||1>e)&&(e=1),e|=0,e>3&&(e=3),1>e&&(e=1);var f=b.data,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=c+c+1|0,w=d+d+1|0,x=0|b.width,y=0|b.height,z=x-1|0,A=y-1|0,B=c+1|0,C=d+1|0,D={r:0,b:0,g:0,a:0},E=D;for(i=1;v>i;i++)E=E.n={r:0,b:0,g:0,a:0};E.n=D;var F={r:0,b:0,g:0,a:0},G=F;for(i=1;w>i;i++)G=G.n={r:0,b:0,g:0,a:0};G.n=F;for(var H=null,I=0|a.MUL_TABLE[c],J=0|a.SHG_TABLE[c],K=0|a.MUL_TABLE[d],L=0|a.SHG_TABLE[d];e-->0;){m=l=0;var M=I,N=J;for(h=y;--h>-1;){for(n=B*(r=f[0|l]),o=B*(s=f[l+1|0]),p=B*(t=f[l+2|0]),q=B*(u=f[l+3|0]),E=D,i=B;--i>-1;)E.r=r,E.g=s,E.b=t,E.a=u,E=E.n;for(i=1;B>i;i++)j=l+((i>z?z:i)<<2)|0,n+=E.r=f[j],o+=E.g=f[j+1],p+=E.b=f[j+2],q+=E.a=f[j+3],E=E.n;for(H=D,g=0;x>g;g++)f[l++]=n*M>>>N,f[l++]=o*M>>>N,f[l++]=p*M>>>N,f[l++]=q*M>>>N,j=m+((j=g+c+1)<z?j:z)<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n;m+=x}for(M=K,N=L,g=0;x>g;g++){for(l=g<<2|0,n=C*(r=f[l])|0,o=C*(s=f[l+1|0])|0,p=C*(t=f[l+2|0])|0,q=C*(u=f[l+3|0])|0,G=F,i=0;C>i;i++)G.r=r,G.g=s,G.b=t,G.a=u,G=G.n;for(k=x,i=1;d>=i;i++)l=k+g<<2,n+=G.r=f[l],o+=G.g=f[l+1],p+=G.b=f[l+2],q+=G.a=f[l+3],G=G.n,A>i&&(k+=x);if(l=g,H=F,e>0)for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(f[j]=n*M>>>N,f[j+1]=o*M>>>N,f[j+2]=p*M>>>N):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x;else for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(u=255/u,f[j]=(n*M>>>N)*u,f[j+1]=(o*M>>>N)*u,f[j+2]=(p*M>>>N)*u):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x}}return!0},createjs.BlurFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.alphaMap=a,this._alphaMap=null,this._mapData=null}var b=createjs.extend(a,createjs.Filter);b.clone=function(){var b=new a(this.alphaMap);return b._alphaMap=this._alphaMap,b._mapData=this._mapData,b},b.toString=function(){return"[AlphaMapFilter]"},b._applyFilter=function(a){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var b=a.data,c=this._mapData,d=0,e=b.length;e>d;d+=4)b[d+3]=c[d]||0;return!0},b._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var a,b=this._alphaMap=this.alphaMap,c=b;b instanceof HTMLCanvasElement?a=c.getContext("2d"):(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),c.width=b.width,c.height=b.height,a=c.getContext("2d"),a.drawImage(b,0,0));try{var d=a.getImageData(0,0,b.width,b.height)}catch(e){return!1}return this._mapData=d.data,!0},createjs.AlphaMapFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.mask=a}var b=createjs.extend(a,createjs.Filter);b.applyFilter=function(a,b,c,d,e,f,g,h){return this.mask?(f=f||a,null==g&&(g=b),null==h&&(h=c),f.save(),a!=f?!1:(f.globalCompositeOperation="destination-in",f.drawImage(this.mask,g,h),f.restore(),!0)):!0},b.clone=function(){return new a(this.mask)},b.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h){this.redMultiplier=null!=a?a:1,this.greenMultiplier=null!=b?b:1,this.blueMultiplier=null!=c?c:1,this.alphaMultiplier=null!=d?d:1,this.redOffset=e||0,this.greenOffset=f||0,this.blueOffset=g||0,this.alphaOffset=h||0}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorFilter]"},b.clone=function(){return new a(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},b._applyFilter=function(a){for(var b=a.data,c=b.length,d=0;c>d;d+=4)b[d]=b[d]*this.redMultiplier+this.redOffset,b[d+1]=b[d+1]*this.greenMultiplier+this.greenOffset,b[d+2]=b[d+2]*this.blueMultiplier+this.blueOffset,b[d+3]=b[d+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setColor(a,b,c,d)}var b=a.prototype;a.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],a.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],a.LENGTH=a.IDENTITY_MATRIX.length,b.setColor=function(a,b,c,d){return this.reset().adjustColor(a,b,c,d)},b.reset=function(){return this.copy(a.IDENTITY_MATRIX)},b.adjustColor=function(a,b,c,d){return this.adjustHue(d),this.adjustContrast(b),this.adjustBrightness(a),this.adjustSaturation(c)},b.adjustBrightness=function(a){return 0==a||isNaN(a)?this:(a=this._cleanValue(a,255),this._multiplyMatrix([1,0,0,0,a,0,1,0,0,a,0,0,1,0,a,0,0,0,1,0,0,0,0,0,1]),this)},b.adjustContrast=function(b){if(0==b||isNaN(b))return this;b=this._cleanValue(b,100);var c;return 0>b?c=127+b/100*127:(c=b%1,c=0==c?a.DELTA_INDEX[b]:a.DELTA_INDEX[b<<0]*(1-c)+a.DELTA_INDEX[(b<<0)+1]*c,c=127*c+127),this._multiplyMatrix([c/127,0,0,0,.5*(127-c),0,c/127,0,0,.5*(127-c),0,0,c/127,0,.5*(127-c),0,0,0,1,0,0,0,0,0,1]),this},b.adjustSaturation=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,100);var b=1+(a>0?3*a/100:a/100),c=.3086,d=.6094,e=.082;return this._multiplyMatrix([c*(1-b)+b,d*(1-b),e*(1-b),0,0,c*(1-b),d*(1-b)+b,e*(1-b),0,0,c*(1-b),d*(1-b),e*(1-b)+b,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.adjustHue=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,180)/180*Math.PI;var b=Math.cos(a),c=Math.sin(a),d=.213,e=.715,f=.072;return this._multiplyMatrix([d+b*(1-d)+c*-d,e+b*-e+c*-e,f+b*-f+c*(1-f),0,0,d+b*-d+.143*c,e+b*(1-e)+.14*c,f+b*-f+c*-.283,0,0,d+b*-d+c*-(1-d),e+b*-e+c*e,f+b*(1-f)+c*f,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.concat=function(b){return b=this._fixMatrix(b),b.length!=a.LENGTH?this:(this._multiplyMatrix(b),this)},b.clone=function(){return(new a).copy(this)},b.toArray=function(){for(var b=[],c=0,d=a.LENGTH;d>c;c++)b[c]=this[c];return b},b.copy=function(b){for(var c=a.LENGTH,d=0;c>d;d++)this[d]=b[d];return this},b.toString=function(){return"[ColorMatrix]"},b._multiplyMatrix=function(a){var b,c,d,e=[];for(b=0;5>b;b++){for(c=0;5>c;c++)e[c]=this[c+5*b];for(c=0;5>c;c++){var f=0;for(d=0;5>d;d++)f+=a[c+5*d]*e[d];this[c+5*b]=f}}},b._cleanValue=function(a,b){return Math.min(b,Math.max(-b,a))},b._fixMatrix=function(b){return b instanceof a&&(b=b.toArray()),b.length<a.LENGTH?b=b.slice(0,b.length).concat(a.IDENTITY_MATRIX.slice(b.length,a.LENGTH)):b.length>a.LENGTH&&(b=b.slice(0,a.LENGTH)),b},createjs.ColorMatrix=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.matrix=a}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorMatrixFilter]"},b.clone=function(){return new a(this.matrix)},b._applyFilter=function(a){for(var b,c,d,e,f=a.data,g=f.length,h=this.matrix,i=h[0],j=h[1],k=h[2],l=h[3],m=h[4],n=h[5],o=h[6],p=h[7],q=h[8],r=h[9],s=h[10],t=h[11],u=h[12],v=h[13],w=h[14],x=h[15],y=h[16],z=h[17],A=h[18],B=h[19],C=0;g>C;C+=4)b=f[C],c=f[C+1],d=f[C+2],e=f[C+3],f[C]=b*i+c*j+d*k+e*l+m,f[C+1]=b*n+c*o+d*p+e*q+r,f[C+2]=b*s+c*t+d*u+e*v+w,f[C+3]=b*x+c*y+d*z+e*A+B;return!0},createjs.ColorMatrixFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Touch cannot be instantiated"}a.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},a.enable=function(b,c,d){return b&&b.canvas&&a.isSupported()?b.__touch?!0:(b.__touch={pointers:{},multitouch:!c,preventDefault:!d,count:0},"ontouchstart"in window?a._IOS_enable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_enable(b),!0):!1},a.disable=function(b){b&&("ontouchstart"in window?a._IOS_disable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_disable(b),delete b.__touch)},a._IOS_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IOS_handleEvent(b,c)};c.addEventListener("touchstart",d,!1),c.addEventListener("touchmove",d,!1),c.addEventListener("touchend",d,!1),c.addEventListener("touchcancel",d,!1)},a._IOS_disable=function(a){var b=a.canvas;if(b){var c=a.__touch.f;b.removeEventListener("touchstart",c,!1),b.removeEventListener("touchmove",c,!1),b.removeEventListener("touchend",c,!1),b.removeEventListener("touchcancel",c,!1)}},a._IOS_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();for(var c=b.changedTouches,d=b.type,e=0,f=c.length;f>e;e++){var g=c[e],h=g.identifier;g.target==a.canvas&&("touchstart"==d?this._handleStart(a,h,b,g.pageX,g.pageY):"touchmove"==d?this._handleMove(a,h,b,g.pageX,g.pageY):("touchend"==d||"touchcancel"==d)&&this._handleEnd(a,h,b))}}},a._IE_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IE_handleEvent(b,c)};void 0===window.navigator.pointerEnabled?(c.addEventListener("MSPointerDown",d,!1),window.addEventListener("MSPointerMove",d,!1),window.addEventListener("MSPointerUp",d,!1),window.addEventListener("MSPointerCancel",d,!1),b.__touch.preventDefault&&(c.style.msTouchAction="none")):(c.addEventListener("pointerdown",d,!1),window.addEventListener("pointermove",d,!1),window.addEventListener("pointerup",d,!1),window.addEventListener("pointercancel",d,!1),b.__touch.preventDefault&&(c.style.touchAction="none")),b.__touch.activeIDs={}},a._IE_disable=function(a){var b=a.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",b,!1),window.removeEventListener("MSPointerUp",b,!1),window.removeEventListener("MSPointerCancel",b,!1),a.canvas&&a.canvas.removeEventListener("MSPointerDown",b,!1)):(window.removeEventListener("pointermove",b,!1),window.removeEventListener("pointerup",b,!1),window.removeEventListener("pointercancel",b,!1),a.canvas&&a.canvas.removeEventListener("pointerdown",b,!1))},a._IE_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();var c=b.type,d=b.pointerId,e=a.__touch.activeIDs;if("MSPointerDown"==c||"pointerdown"==c){if(b.srcElement!=a.canvas)return;e[d]=!0,this._handleStart(a,d,b,b.pageX,b.pageY)}else e[d]&&("MSPointerMove"==c||"pointermove"==c?this._handleMove(a,d,b,b.pageX,b.pageY):("MSPointerUp"==c||"MSPointerCancel"==c||"pointerup"==c||"pointercancel"==c)&&(delete e[d],this._handleEnd(a,d,b)))}},a._handleStart=function(a,b,c,d,e){var f=a.__touch;if(f.multitouch||!f.count){var g=f.pointers;g[b]||(g[b]=!0,f.count++,a._handlePointerDown(b,c,d,e))}},a._handleMove=function(a,b,c,d,e){a.__touch.pointers[b]&&a._handlePointerMove(b,c,d,e)},a._handleEnd=function(a,b,c){var d=a.__touch,e=d.pointers;e[b]&&(d.count--,a._handlePointerUp(b,c,!0),delete e[b])},createjs.Touch=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.EaselJS=createjs.EaselJS||{};a.version="0.8.2",a.buildDate="Thu, 26 Nov 2015 20:44:34 GMT"}();
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.createjs;
	}.call(window));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createjsEaseljs = __webpack_require__(3);
	
	var _createjsEaseljs2 = _interopRequireDefault(_createjsEaseljs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/*
	let createjs;
	if (typeof window !== "undefined") {
	    createjs = require("createjs-easeljs");
	}
	 */
	
	var Node = function (_createjs$Container) {
	    _inherits(Node, _createjs$Container);
	
	    function Node(id) {
	        _classCallCheck(this, Node);
	
	        var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));
	
	        if (typeof id == 'undefined') {
	            throw "The parameter id be undefined";
	        } else {
	            _this.id = id;
	        }
	        return _this;
	    }
	
	    _createClass(Node, [{
	        key: "getId",
	        value: function getId() {
	            return this.id;
	        }
	    }]);
	
	    return Node;
	}(_createjsEaseljs2.default.Container);
	
	exports.default = Node;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var AcceptorPosition = function (_Enum) {
	    _inherits(AcceptorPosition, _Enum);
	
	    function AcceptorPosition() {
	        _classCallCheck(this, AcceptorPosition);
	
	        return _possibleConstructorReturn(this, (AcceptorPosition.__proto__ || Object.getPrototypeOf(AcceptorPosition)).apply(this, arguments));
	    }
	
	    _createClass(AcceptorPosition, [{
	        key: 'getAcceptorPosition',
	        value: function getAcceptorPosition(value) {
	            switch (value) {
	                case 1:
	                    return AcceptorPosition.ONE;
	                case 2:
	                    return AcceptorPosition.TWO;
	                case 3:
	                    return AcceptorPosition.THREE;
	                default:
	                    return AcceptorPosition.UNDEFINED;
	            }
	        }
	    }]);
	
	    return AcceptorPosition;
	}(_enumify.Enum);
	
	exports.default = AcceptorPosition;
	
	
	AcceptorPosition.initEnum({
	    ONE: {
	        value: 1
	    },
	    TWO: {
	        value: 2
	    },
	    THREE: {
	        value: 3
	    },
	    UNDEFINED: {
	        value: 'undefined'
	    }
	});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.copyProperties = copyProperties;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var INITIALIZED = Symbol();
	
	/**
	 * This is an abstract class that is not intended to be
	 * used directly. Extend it to turn your class into an enum
	 * (initialization is performed via `MyClass.initEnum()`).
	 */
	
	var Enum = exports.Enum = function () {
	    /**
	     * `initEnum()` closes the class. Then calling this constructor
	     * throws an exception.
	     * 
	     * If your subclass has a constructor then you can control
	     * what properties are added to `this` via the argument you
	     * pass to `super()`. No arguments are fine, too.
	     */
	
	    function Enum() {
	        var instanceProperties = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
	
	        _classCallCheck(this, Enum);
	
	        // new.target would be better than this.constructor,
	        // but isn’t supported by Babel
	        if ({}.hasOwnProperty.call(this.constructor, INITIALIZED)) {
	            throw new Error('Enum classes can’t be instantiated');
	        }
	        if ((typeof instanceProperties === 'undefined' ? 'undefined' : _typeof(instanceProperties)) === 'object' && instanceProperties !== null) {
	            copyProperties(this, instanceProperties);
	        }
	    }
	    /**
	     * Set up the enum, close the class.
	     * 
	     * @param arg Either an object whose properties provide the names
	     * and values (which must be mutable objects) of the enum constants.
	     * Or an Array whose elements are used as the names of the enum constants
	     * The values are create by instantiating the current class.
	     */
	
	    _createClass(Enum, [{
	        key: 'toString',
	
	        /**
	         * Default `toString()` method for enum constant.
	         */
	        value: function toString() {
	            return this.constructor.name + '.' + this.name;
	        }
	    }], [{
	        key: 'initEnum',
	        value: function initEnum(arg) {
	            Object.defineProperty(this, 'enumValues', {
	                value: [],
	                configurable: false,
	                writable: false,
	                enumerable: true
	            });
	            if (Array.isArray(arg)) {
	                this._enumValuesFromArray(arg);
	            } else {
	                this._enumValuesFromObject(arg);
	            }
	            Object.freeze(this.enumValues);
	            this[INITIALIZED] = true;
	            return this;
	        }
	    }, {
	        key: '_enumValuesFromArray',
	        value: function _enumValuesFromArray(arr) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var key = _step.value;
	
	                    this._pushEnumValue(new this(), key);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_enumValuesFromObject',
	        value: function _enumValuesFromObject(obj) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = Object.keys(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var key = _step2.value;
	
	                    var value = new this(obj[key]);
	                    this._pushEnumValue(value, key);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_pushEnumValue',
	        value: function _pushEnumValue(enumValue, name) {
	            enumValue.name = name;
	            enumValue.ordinal = this.enumValues.length;
	            Object.defineProperty(this, name, {
	                value: enumValue,
	                configurable: false,
	                writable: false,
	                enumerable: true
	            });
	            this.enumValues.push(enumValue);
	        }
	
	        /**
	         * Given the name of an enum constant, return its value.
	         */
	
	    }, {
	        key: 'enumValueOf',
	        value: function enumValueOf(name) {
	            return this.enumValues.find(function (x) {
	                return x.name === name;
	            });
	        }
	
	        /**
	         * Make enum classes iterable
	         */
	
	    }, {
	        key: Symbol.iterator,
	        value: function value() {
	            return this.enumValues[Symbol.iterator]();
	        }
	    }]);
	
	    return Enum;
	}();
	
	function copyProperties(target, source) {
	    // Ideally, we’d use Reflect.ownKeys() here,
	    // but I don’t want to depend on a polyfill
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	        for (var _iterator3 = Object.getOwnPropertyNames(source)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var key = _step3.value;
	
	            var desc = Object.getOwnPropertyDescriptor(source, key);
	            Object.defineProperty(target, key, desc);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }
	
	    return target;
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Anomericity = function (_Enum) {
	  _inherits(Anomericity, _Enum);
	
	  function Anomericity() {
	    _classCallCheck(this, Anomericity);
	
	    return _possibleConstructorReturn(this, (Anomericity.__proto__ || Object.getPrototypeOf(Anomericity)).apply(this, arguments));
	  }
	
	  return Anomericity;
	}(_enumify.Enum);
	
	exports.default = Anomericity;
	
	
	Anomericity.initEnum(['ALPHA', 'BETA', 'UNDEFINED']);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Isomer = function (_Enum) {
	  _inherits(Isomer, _Enum);
	
	  function Isomer() {
	    _classCallCheck(this, Isomer);
	
	    return _possibleConstructorReturn(this, (Isomer.__proto__ || Object.getPrototypeOf(Isomer)).apply(this, arguments));
	  }
	
	  return Isomer;
	}(_enumify.Enum);
	
	exports.default = Isomer;
	
	
	Isomer.initEnum(['L', 'D', 'UNDEFINED']);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var DonorPosition = function (_Enum) {
	    _inherits(DonorPosition, _Enum);
	
	    function DonorPosition() {
	        _classCallCheck(this, DonorPosition);
	
	        return _possibleConstructorReturn(this, (DonorPosition.__proto__ || Object.getPrototypeOf(DonorPosition)).apply(this, arguments));
	    }
	
	    _createClass(DonorPosition, [{
	        key: 'getDonorPosition',
	        value: function getDonorPosition(value) {
	            switch (value) {
	                case 1:
	                    return DonorPosition.ONE;
	                case 2:
	                    return DonorPosition.TWO;
	                case 3:
	                    return DonorPosition.THREE;
	                case 4:
	                    return DonorPosition.FOUR;
	                case 5:
	                    return DonorPosition.FIVE;
	                case 6:
	                    return DonorPosition.SIX;
	                case 7:
	                    return DonorPosition.SEVEN;
	                case 8:
	                    return DonorPosition.EIGHT;
	                case 9:
	                    return DonorPosition.NINE;
	                default:
	                    return DonorPosition.UNDEFINED;
	            }
	        }
	    }]);
	
	    return DonorPosition;
	}(_enumify.Enum);
	
	exports.default = DonorPosition;
	
	
	DonorPosition.initEnum({
	    ONE: {
	        value: 1
	    },
	    TWO: {
	        value: 2
	    },
	    THREE: {
	        value: 3
	    },
	    FOUR: {
	        value: 4
	    },
	    FIVE: {
	        value: 5
	    },
	    SIX: {
	        value: 6
	    },
	    SEVEN: {
	        value: 7
	    },
	    EIGHT: {
	        value: 8
	    },
	    NINE: {
	        value: 9
	    },
	    UNDEFINED: {
	        value: 'undefined'
	    }
	});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var MonosaccharideType = function (_Enum) {
	    _inherits(MonosaccharideType, _Enum);
	
	    function MonosaccharideType() {
	        _classCallCheck(this, MonosaccharideType);
	
	        return _possibleConstructorReturn(this, (MonosaccharideType.__proto__ || Object.getPrototypeOf(MonosaccharideType)).apply(this, arguments));
	    }
	
	    return MonosaccharideType;
	}(_enumify.Enum);
	
	exports.default = MonosaccharideType;
	
	
	MonosaccharideType.initEnum({
	    Hex: {
	        shape: 'circle',
	        color: '#FFFFFF',
	        bisected: false
	    },
	    Glc: {
	        shape: 'circle',
	        color: '#0090BC',
	        bisected: false
	    },
	    Man: {
	        shape: 'circle',
	        color: '#00A651',
	        bisected: false
	    },
	    Gal: {
	        shape: 'circle',
	        color: '#FFD400',
	        bisected: false
	    },
	    Gul: {
	        shape: 'circle',
	        color: '#F47920',
	        bisected: false
	    },
	    Alt: {
	        shape: 'circle',
	        color: '#F69EA1',
	        bisected: false
	    },
	    All: {
	        shape: 'circle',
	        color: '#A54399',
	        bisected: false
	    },
	    Tal: {
	        shape: 'circle',
	        color: '#8FCCE9',
	        bisected: false
	    },
	    Ido: {
	        shape: 'circle',
	        color: '#A17A4D',
	        bisected: false
	    },
	    HexNAc: {
	        shape: 'square',
	        color: '#FFFFFF',
	        bisected: false
	    },
	    GlcNAc: {
	        shape: 'square',
	        color: '#0090BC',
	        bisected: false
	    },
	    ManNAc: {
	        shape: 'square',
	        color: '#00A651',
	        bisected: false
	    },
	    GalNAc: {
	        shape: 'square',
	        color: '#FFD400',
	        bisected: false
	    },
	    GulNAc: {
	        shape: 'square',
	        color: '#F47920',
	        bisected: false
	    },
	    AltNAc: {
	        shape: 'square',
	        color: '#F69EA1',
	        bisected: false
	    },
	    AllNAc: {
	        shape: 'square',
	        color: '#A54399',
	        bisected: false
	    },
	    TalNAc: {
	        shape: 'square',
	        color: '#8FCCE9',
	        bisected: false
	    },
	    IdoNAc: {
	        shape: 'square',
	        color: '#A17A4D',
	        bisected: false
	    },
	    HexN: {
	        shape: 'square',
	        color: '#FFFFFF',
	        bisected: true
	    },
	    GlcN: {
	        shape: 'square',
	        color: '#0090BC',
	        bisected: true
	    },
	    ManN: {
	        shape: 'square',
	        color: '#00A651',
	        bisected: true
	    },
	    GalN: {
	        shape: 'square',
	        color: '#FFD400',
	        bisected: true
	    },
	    GulN: {
	        shape: 'square',
	        color: '#F47920',
	        bisected: true
	    },
	    AltN: {
	        shape: 'square',
	        color: '#F69EA1',
	        bisected: true
	    },
	    AllN: {
	        shape: 'square',
	        color: '#A54399',
	        bisected: true
	    },
	    TalN: {
	        shape: 'square',
	        color: '#8FCCE9',
	        bisected: true
	    },
	    IdoN: {
	        shape: 'square',
	        color: '#A17A4D',
	        bisected: true
	    },
	    HexA: {
	        shape: 'diamond',
	        color: '#FFFFFF',
	        bisected: true
	    },
	    GlcA: {
	        shape: 'diamond',
	        color: '#0090BC',
	        bisected: true
	    },
	    ManA: {
	        shape: 'diamond',
	        color: '#00A651',
	        bisected: true
	    },
	    GalA: {
	        shape: 'diamond',
	        color: '#FFD400',
	        bisected: true
	    },
	    GulA: {
	        shape: 'diamond',
	        color: '#F47920',
	        bisected: true
	    },
	    AltA: {
	        shape: 'diamond',
	        color: '#F69EA1',
	        bisected: true
	    },
	    AllA: {
	        shape: 'diamond',
	        color: '#A54399',
	        bisected: true
	    },
	    TalA: {
	        shape: 'diamond',
	        color: '#8FCCE9',
	        bisected: true
	    },
	    IdoA: {
	        shape: 'diamond',
	        color: '#A17A4D',
	        bisected: true
	    },
	    dHex: {
	        shape: 'triangle',
	        color: '#FFFFFF',
	        bisected: false
	    },
	    Qui: {
	        shape: 'triangle',
	        color: '#0090BC',
	        bisected: false
	    },
	    Rha: {
	        shape: 'triangle',
	        color: '#00A651',
	        bisected: false
	    },
	    SixdAlt: {
	        shape: 'triangle',
	        color: '#F69EA1',
	        bisected: false
	    },
	    SixdTal: {
	        shape: 'triangle',
	        color: '#8FCCE9',
	        bisected: false
	    },
	    SixdGul: {
	        shape: "triangle",
	        color: "#F47920",
	        bisected: false
	    },
	    Fuc: {
	        shape: 'triangle',
	        color: '#ED1C24',
	        bisected: false
	    },
	    dHexNAc: {
	        shape: 'triangle',
	        color: '#FFFFFF',
	        bisected: true
	    },
	    QuiNAc: {
	        shape: 'triangle',
	        color: '#0090BC',
	        bisected: true
	    },
	    RhaNAc: {
	        shape: 'triangle',
	        color: '#00A651',
	        bisected: true
	    },
	    FucNAc: {
	        shape: 'triangle',
	        color: '#ED1C24',
	        bisected: true
	    },
	    SixdAltNAc: {
	        shape: 'triangle',
	        color: '#F69EA1',
	        bisected: true
	    },
	    SixdGulNAc: {
	        shape: 'triangle',
	        color: '#F47920',
	        bisected: true
	    },
	    SixdTalNAc: {
	        shape: 'triangle',
	        color: '#8FCCE9',
	        bisected: true
	    },
	    ddHex: {
	        shape: 'rectangle',
	        color: '#FFFFFF',
	        bisected: false
	    },
	    Oli: {
	        shape: 'rectangle',
	        color: '#0090BC',
	        bisected: false
	    },
	    Tyv: {
	        shape: 'rectangle',
	        color: '#00A651',
	        bisected: false
	    },
	    Abe: {
	        shape: 'rectangle',
	        color: '#F47920',
	        bisected: false
	    },
	    Par: {
	        shape: 'rectangle',
	        color: '#F69EA1',
	        bisected: false
	    },
	    Dig: {
	        shape: 'rectangle',
	        color: '#A54399',
	        bisected: false
	    },
	    Col: {
	        shape: 'rectangle',
	        color: '#8FCCE9',
	        bisected: false
	    },
	    Pen: {
	        shape: 'star',
	        color: '#FFFFFF',
	        bisected: false
	    },
	    Ara: {
	        shape: 'star',
	        color: '#00A651',
	        bisected: false
	    },
	    Lyx: {
	        shape: 'star',
	        color: '#FFD400',
	        bisected: false
	    },
	    Xyl: {
	        shape: 'star',
	        color: '#F47920',
	        bisected: false
	    },
	    Rib: {
	        shape: 'star',
	        color: '#F69EA1',
	        bisected: false
	    },
	    Nonu: {
	        shape: 'diamond',
	        color: '#FFFFFF',
	        bisected: false
	    },
	    Kdn: {
	        shape: 'diamond',
	        color: '#00A651',
	        bisected: false
	    },
	    Neu5Ac: {
	        shape: 'diamond',
	        color: '#A54399',
	        bisected: false
	    },
	    Neu5Gc: {
	        shape: 'diamond',
	        color: '#8FCCE9',
	        bisected: false
	    },
	    Neu: {
	        shape: 'diamond',
	        color: '#A17A4D',
	        bisected: false
	    },
	    Sia: {
	        shape: 'diamond',
	        color: '#ED1C24',
	        bisected: false
	    },
	
	    Unknown: {
	        shape: 'Hexagon',
	        color: '#FFFFFF',
	        bisected: false
	    },
	    Bac: {
	        shape: 'Hexagon',
	        color: '#0090BC',
	        bisected: false
	    },
	    LDManHep: {
	        shape: 'Hexagon',
	        color: '#00A651',
	        bisected: false
	    },
	    Kdo: {
	        shape: 'Hexagon',
	        color: '#FFD400',
	        bisected: false
	    },
	    Dha: {
	        shape: 'Hexagon',
	        color: '#F47920',
	        bisected: false
	    },
	    DDManHep: {
	        shape: 'Hexagon',
	        color: '#F69EA1',
	        bisected: false
	    },
	    MurNAc: {
	        shape: 'Hexagon',
	        color: '#A54399',
	        bisected: false
	    },
	    MurNGc: {
	        shape: 'Hexagon',
	        color: '#8FCCE9',
	        bisected: false
	    },
	    Mur: {
	        shape: 'Hexagon',
	        color: '#A17A4D',
	        bisected: false
	    },
	    Assigned: {
	        shape: 'Pentagon',
	        color: '#FFFFFF',
	        bisected: false
	    },
	    Api: {
	        shape: 'Pentagon',
	        color: '#0090BC',
	        bisected: false
	    },
	    Fru: {
	        shape: 'Pentagon',
	        color: '#00A651',
	        bisected: false
	    },
	    Tag: {
	        shape: 'Pentagon',
	        color: '#FFD400',
	        bisected: false
	    },
	    Sor: {
	        shape: 'Pentagon',
	        color: '#F47920',
	        bisected: false
	    },
	    Psi: {
	        shape: 'Pentagon',
	        color: '#F69EA1',
	        bisected: false
	    }
	});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var RingType = function (_Enum) {
	  _inherits(RingType, _Enum);
	
	  function RingType() {
	    _classCallCheck(this, RingType);
	
	    return _possibleConstructorReturn(this, (RingType.__proto__ || Object.getPrototypeOf(RingType)).apply(this, arguments));
	  }
	
	  return RingType;
	}(_enumify.Enum);
	
	exports.default = RingType;
	
	
	RingType.initEnum(['P', 'F', 'OPEN', 'UNDEFINED']);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var SubstituentType = function (_Enum) {
	    _inherits(SubstituentType, _Enum);
	
	    function SubstituentType() {
	        _classCallCheck(this, SubstituentType);
	
	        return _possibleConstructorReturn(this, (SubstituentType.__proto__ || Object.getPrototypeOf(SubstituentType)).apply(this, arguments));
	    }
	
	    return SubstituentType;
	}(_enumify.Enum);
	
	exports.default = SubstituentType;
	
	
	SubstituentType.initEnum({
	    Acetyl: {
	        label: 'Ac'
	    },
	    Bromo: {
	        label: 'Br'
	    },
	    Chloro: {
	        label: 'Cl'
	    },
	    Ethyl: {
	        label: 'Et'
	    },
	    Ethanolamine: {
	        label: 'ETA'
	    },
	    Fluoro: {
	        label: 'F'
	    },
	    Formyl: {
	        label: 'Formyl'
	    },
	    Hydroxymethyl: {
	        label: 'HMe'
	    },
	    Imino: {
	        label: 'Imino'
	    },
	    RLactate1: {
	        label: 'RLac1'
	    },
	    SLactate1: {
	        label: 'SLac1'
	    },
	    Amino: {
	        label: 'N'
	    },
	    Methyl: {
	        label: 'Me'
	    },
	    NAcetyl: {
	        label: 'NAc'
	    },
	    NAlanine: {
	        label: 'NAla'
	    },
	    NFormyl: {
	        label: 'NFormyl'
	    },
	    NGlycolyl: {
	        label: 'NGc'
	    },
	    NMethyl: {
	        label: 'NMe'
	    },
	    NSuccinate: {
	        label: 'NSuc'
	    },
	    NSulfate: {
	        label: 'NS'
	    },
	    NTrifluoroacetyl: {
	        label: 'NTFA'
	    },
	    Nitrate: {
	        label: 'NO3'
	    },
	    Phosphate: {
	        label: 'P'
	    },
	    Pyruvate: {
	        label: 'Pyr'
	    },
	    Sulfate: {
	        label: 'S'
	    },
	    Thio: {
	        label: 'Thio'
	    },
	    RPyruvate: {
	        label: 'RPyr'
	    },
	    SPyruvate: {
	        label: 'SPyr'
	    },
	    RLactate2: {
	        label: 'RLac2'
	    },
	    SLactate2: {
	        label: 'SLac2'
	    }
	});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Renaud on 06/07/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var GlycoCTSubstituents = function (_Enum) {
	    _inherits(GlycoCTSubstituents, _Enum);
	
	    function GlycoCTSubstituents() {
	        _classCallCheck(this, GlycoCTSubstituents);
	
	        return _possibleConstructorReturn(this, (GlycoCTSubstituents.__proto__ || Object.getPrototypeOf(GlycoCTSubstituents)).apply(this, arguments));
	    }
	
	    return GlycoCTSubstituents;
	}(_enumify.Enum);
	
	exports.default = GlycoCTSubstituents;
	
	
	GlycoCTSubstituents.initEnum({
	    NAcetyl: {
	        glycoct: "n-acetyl"
	    },
	    Amino: {
	        glycoct: "amino"
	    },
	    NGlycolyl: {
	        glycoct: "n-glycolyl"
	    },
	    Methyl: {
	        glycoct: "methyl"
	    },
	    Acetyl: {
	        glycoct: "acetyl"
	    },
	    Sulfate: {
	        glycoct: "sulfate"
	    },
	    Phosphate: {
	        glycoct: "phosphate"
	    },
	    Bromo: {
	        glycoct: 'bromo'
	    },
	    Chloro: {
	        glycoct: 'chloro'
	    },
	    Ethyl: {
	        glycoct: 'ethyl'
	    },
	    Ethanolamine: {
	        glycoct: 'ethanolamine'
	    },
	    Fluoro: {
	        glycoct: 'fluoro'
	    },
	    Formyl: {
	        glycoct: 'formyl'
	    },
	    Hydroxymethyl: {
	        glycoct: 'hydroxymethyl'
	    },
	    Imino: {
	        glycoct: 'imino'
	    },
	    RLactate1: {
	        glycoct: '(r)-lactate'
	    },
	    SLactate1: {
	        glycoct: '(s)-lactate'
	    },
	    NAlanine: {
	        glycoct: 'n-alanine'
	    },
	    NFormyl: {
	        glycoct: 'n-formyl'
	    },
	    NMethyl: {
	        glycoct: 'n-methyl'
	    },
	    NSuccinate: {
	        glycoct: 'n-succinate'
	    },
	    NSulfate: {
	        glycoct: 'n-sulfate'
	    },
	    NTrifluoroacetyl: {
	        glycoct: 'n-trifluoroacetyl'
	    },
	    Nitrate: {
	        glycoct: 'nitrate'
	    },
	    Pyruvate: {
	        glycoct: 'pyruvate'
	    },
	    Thio: {
	        glycoct: 'thio'
	    },
	    RPyruvate: {
	        glycoct: '(r)-pyruvate'
	    },
	    SPyruvate: {
	        glycoct: '(s)-pyruvate'
	    },
	    RLactate2: {
	        glycoct: '(r)-lactate2'
	    },
	    SLactate2: {
	        glycoct: '(s)-lactate2'
	    },
	    Unknown: {
	        glycoct: 'unknown'
	    }
	});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Renaud on 03/08/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var SubstituentsPositions = function (_Enum) {
	    _inherits(SubstituentsPositions, _Enum);
	
	    function SubstituentsPositions() {
	        _classCallCheck(this, SubstituentsPositions);
	
	        return _possibleConstructorReturn(this, (SubstituentsPositions.__proto__ || Object.getPrototypeOf(SubstituentsPositions)).apply(this, arguments));
	    }
	
	    return SubstituentsPositions;
	}(_enumify.Enum);
	
	exports.default = SubstituentsPositions;
	
	
	SubstituentsPositions.initEnum({
	    HexNAc: {
	        position: 2
	    },
	
	    GlcNAc: {
	        position: 2
	    },
	
	    ManNAc: {
	        position: 2
	    },
	
	    GalNAc: {
	        position: 2
	    },
	
	    GulNAc: {
	        position: 2
	    },
	
	    AltNAc: {
	        position: 2
	    },
	
	    AllNAc: {
	        position: 2
	    },
	
	    TalNAc: {
	        position: 2
	    },
	
	    IdoNAc: {
	        position: 2
	    },
	
	    HexN: {
	        position: 2
	    },
	
	    GlcN: {
	        position: 2
	    },
	
	    ManN: {
	        position: 2
	    },
	
	    GalN: {
	        position: 2
	    },
	
	    GulN: {
	        position: 2
	    },
	
	    AltN: {
	        position: 2
	    },
	
	    AllN: {
	        position: 2
	    },
	
	    TalN: {
	        position: 2
	    },
	
	    IdoN: {
	        position: 2
	    },
	
	    KdnNAc: {
	        position: 5
	    },
	
	    KdnGc: {
	        position: 5
	    },
	
	    KdnNGc: {
	        position: 5
	    },
	
	    KdnN: {
	        position: 5
	    },
	
	    Neu5Ac: {
	        position: 5
	    },
	
	    Neu5Gc: {
	        position: 5
	    },
	
	    Neu: {
	        position: 5
	    },
	
	    dHexNAc: {
	        position: 2
	    },
	
	    QuiNAc: {
	        position: 2
	    },
	
	    RhaNAc: {
	        position: 2
	    },
	
	    SixdAltNAc: {
	        position: 2
	    },
	
	    SixdTalNAc: {
	        position: 2
	    },
	
	    FucNAc: {
	        position: 2
	    },
	
	    MurNAc: {
	        position: 5
	    },
	
	    MurNGc: {
	        position: 5
	    },
	
	    MurGc: {
	        position: 5
	    }
	
	});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Renaud on 21/07/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var MonosaccharideGlycoCT = function (_Enum) {
	    _inherits(MonosaccharideGlycoCT, _Enum);
	
	    function MonosaccharideGlycoCT() {
	        _classCallCheck(this, MonosaccharideGlycoCT);
	
	        return _possibleConstructorReturn(this, (MonosaccharideGlycoCT.__proto__ || Object.getPrototypeOf(MonosaccharideGlycoCT)).apply(this, arguments));
	    }
	
	    return MonosaccharideGlycoCT;
	}(_enumify.Enum);
	
	exports.default = MonosaccharideGlycoCT;
	
	
	MonosaccharideGlycoCT.initEnum({
	    Hex: {
	        glycoct: "HEX",
	        transform: ""
	    },
	
	    Glc: {
	        glycoct: "glc-HEX",
	        transform: ""
	    },
	
	    Man: {
	        glycoct: "man-HEX",
	        transform: ""
	    },
	
	    Gal: {
	        glycoct: "gal-HEX",
	        transform: ""
	    },
	
	    Gul: {
	        glycoct: "gul-HEX",
	        transform: ""
	    },
	
	    Alt: {
	        glycoct: "alt-HEX",
	        transform: ""
	    },
	
	    All: {
	        glycoct: "all-HEX",
	        transform: ""
	    },
	
	    Tal: {
	        glycoct: "tal-HEX",
	        transform: ""
	    },
	
	    Ara: {
	        glycoct: "ara-PEN",
	        transform: ""
	    },
	
	    Lyx: {
	        glycoct: "lyx-PEN",
	        transform: ""
	    },
	
	    Rib: {
	        glycoct: "rib-PEN",
	        transform: ""
	    },
	
	    Bac: {
	        glycoct: "glc-HEX",
	        transform: "|2:d|4:d|6:d"
	    },
	
	    Fuc: {
	        glycoct: "gal-HEX",
	        transform: "|6:d"
	    },
	
	    HexA: {
	        glycoct: "HEX",
	        transform: "|6:a"
	    },
	
	    GlcA: {
	        glycoct: "glc-HEX",
	        transform: "|6:a"
	    },
	
	    ManA: {
	        glycoct: "man-HEX",
	        transform: "|6:a"
	    },
	
	    GalA: {
	        glycoct: "gal-HEX",
	        transform: "|6:a"
	    },
	
	    GulA: {
	        glycoct: "gul-HEX",
	        transform: "|6:a"
	    },
	
	    AltA: {
	        glycoct: "alt-HEX",
	        transform: "|6:a"
	    },
	
	    AllA: {
	        glycoct: "all-HEX",
	        transform: "|6:a"
	    },
	
	    TalA: {
	        glycoct: "tal-HEX",
	        transform: "|6:a"
	    },
	
	    Qui: {
	        glycoct: "glc-HEX",
	        transform: "|6:d"
	    },
	
	    dHex: {
	        glycoct: "HEX",
	        transform: "|6:d"
	    },
	
	    Ido: {
	        glycoct: "ido-HEX",
	        transform: ""
	    },
	
	    IdoA: {
	        glycoct: "ido-HEX",
	        transform: "|6:a"
	    },
	
	    Pen: {
	        glycoct: "PEN-1:4",
	        transform: ""
	    },
	
	    Rha: {
	        glycoct: "man-HEX",
	        transform: "|6:d"
	    },
	
	    SixdAlt: {
	        glycoct: "alt-HEX",
	        transform: "|6:d"
	    },
	
	    SixdTal: {
	        glycoct: "tal-HEX",
	        transform: "|6:d"
	    },
	
	    SixdGul: {
	        glycoct: "gul-HEX",
	        transform: "|6:d"
	    },
	
	    Xyl: {
	        glycoct: "xyl-PEN",
	        transform: ""
	    },
	
	    ddHex: {
	        glycoct: "HEX",
	        transform: "|2:d|6:d"
	    },
	
	    Unknown: {
	        glycoct: "unknown",
	        transform: ""
	    },
	
	    Oli: {
	        glycoct: "PEN",
	        transform: "|3:d|6:d"
	    },
	
	    Tyv: {
	        glycoct: "ara-HEX",
	        transform: "|3:d|6:d"
	    },
	
	    Abe: {
	        glycoct: "dxyl-HEX",
	        transform: "|3:d|6:d"
	    },
	
	    Par: {
	        glycoct: "rib-HEX",
	        transform: "|3:d|6:d"
	    },
	
	    Col: {
	        glycoct: "lxyl-HEX",
	        transform: "|3:d|6:d"
	    },
	
	    Dig: {
	        glycoct: "rib-HEX",
	        transform: "|2:d|6:d"
	    },
	
	    Nonu: {
	        glycoct: "NON",
	        transform: ""
	    },
	
	    Kdn: {
	        glycoct: "gro-dgal-NON-2:6",
	        transform: "|1:a|2:keto|3:d"
	    },
	
	    Kdo: {
	        glycoct: "man-OCT-2:6",
	        transform: "|1:a|2:keto|3:d"
	    },
	
	    Fru: {
	        glycoct: "ara-HEX-2:5",
	        transform: "|2:keto"
	    },
	
	    // GlycoCT not found
	    Assigned: {
	        glycoct: "assigned-PEN",
	        transform: ""
	    },
	    LDManHep: {
	        glycoct: "ldmanhep-HEX",
	        transform: ""
	    },
	
	    DDManHep: {
	        glycoct: "ddmanhep-HEX",
	        transform: ""
	    },
	
	    Dha: {
	        glycoct: "dha-HEX",
	        transform: ""
	    },
	
	    Mur: {
	        glycoct: "mur-HEX",
	        transform: ""
	    },
	
	    Sia: {
	        glycoct: "sia-NON",
	        transform: ""
	    },
	
	    Api: {
	        glycoct: "api-PEN",
	        transform: ""
	    },
	
	    Tag: {
	        glycoct: "tag-PEN",
	        transform: ""
	    },
	
	    Sor: {
	        glycoct: "sor-PEN",
	        transform: ""
	    },
	
	    Psi: {
	        glycoct: "psi-PEN",
	        transform: ""
	    }
	
	});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Renaud on 11/08/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var QuickModeMonosaccharides = function (_Enum) {
	    _inherits(QuickModeMonosaccharides, _Enum);
	
	    function QuickModeMonosaccharides() {
	        _classCallCheck(this, QuickModeMonosaccharides);
	
	        return _possibleConstructorReturn(this, (QuickModeMonosaccharides.__proto__ || Object.getPrototypeOf(QuickModeMonosaccharides)).apply(this, arguments));
	    }
	
	    return QuickModeMonosaccharides;
	}(_enumify.Enum);
	
	exports.default = QuickModeMonosaccharides;
	
	
	QuickModeMonosaccharides.initEnum({
	
	    Gal: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "1"
	    },
	
	    Glc: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "1"
	    },
	
	    Man: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "1"
	    },
	
	    GalNAc: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "1"
	    },
	
	    GlcNAc: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "1"
	    },
	
	    Fuc: {
	        isomer: "L",
	        ringType: "P",
	        acceptorPosition: "1"
	    },
	
	    Kdn: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "2"
	    },
	
	    Neu5Ac: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "2"
	    },
	
	    Neu5Gc: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "2"
	    },
	
	    Neu: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "2"
	    },
	
	    Xyl: {
	        isomer: "D",
	        ringType: "P",
	        acceptorPosition: "1"
	    }
	
	});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Renaud on 15/08/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Structures = function (_Enum) {
	    _inherits(Structures, _Enum);
	
	    function Structures() {
	        _classCallCheck(this, Structures);
	
	        return _possibleConstructorReturn(this, (Structures.__proto__ || Object.getPrototypeOf(Structures)).apply(this, arguments));
	    }
	
	    return Structures;
	}(_enumify.Enum);
	
	exports.default = Structures;
	
	
	Structures.initEnum({
	
	    ncore: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dman-HEX-1:5\n6b:a-dman-HEX-1:5\n7b:a-dman-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5o(3+1)6d\n6:5o(6+1)7d"
	    },
	
	    ncorefuc: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dman-HEX-1:5\n6b:a-dman-HEX-1:5\n7b:a-dman-HEX-1:5\n8b:a-lgal-HEX-1:5|6:d\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5o(3+1)6d\n6:5o(6+1)7d\n7:1o(6+1)8d"
	    },
	
	    ncorebisect: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dman-HEX-1:5\n6b:a-dman-HEX-1:5\n7b:b-dglc-HEX-1:5\n8s:n-acetyl\n9b:a-dman-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5o(3+1)6d\n6:5o(4+1)7d\n7:7d(2+1)8n\n8:5o(6+1)9d"
	    },
	
	    ncorebisectfuc: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dman-HEX-1:5\n6b:a-dman-HEX-1:5\n7b:b-dglc-HEX-1:5\n8s:n-acetyl\n9b:a-dman-HEX-1:5\n10b:a-lgal-HEX-1:5|6:d\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5o(3+1)6d\n6:5o(4+1)7d\n7:7d(2+1)8n\n8:5o(6+1)9d\n9:1o(6+1)10d"
	    },
	
	    ncorehyb: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dman-HEX-1:5\n6b:a-dman-HEX-1:5\n7b:a-dman-HEX-1:5\n8b:a-dman-HEX-1:5\n9b:a-dman-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5o(3+1)6d\n6:5o(6+1)7d\n7:7o(3+1)8d\n8:7o(6+1)9d"
	    },
	
	    ncorehybfuc: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dman-HEX-1:5\n6b:a-dman-HEX-1:5\n7b:a-dman-HEX-1:5\n8b:a-dman-HEX-1:5\n9b:a-dman-HEX-1:5\n10b:a-lgal-HEX-1:5|6:d\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5o(3+1)6d\n6:5o(6+1)7d\n7:7o(3+1)8d\n8:7o(6+1)9d\n9:1o(6+1)10d"
	    },
	
	    ncorehybbis: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dman-HEX-1:5\n6b:a-dman-HEX-1:5\n7b:b-dglc-HEX-1:5\n8s:n-acetyl\n9b:a-dman-HEX-1:5\n10b:a-dman-HEX-1:5\n11b:a-dman-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5o(3+1)6d\n6:5o(4+1)7d\n7:7d(2+1)8n\n8:5o(6+1)9d\n9:9o(3+1)10d\n10:9o(6+1)11d"
	    },
	
	    ncorehybbisfuc: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dman-HEX-1:5\n6b:a-dman-HEX-1:5\n7b:b-dglc-HEX-1:5\n8s:n-acetyl\n9b:a-dman-HEX-1:5\n10b:a-dman-HEX-1:5\n11b:a-dman-HEX-1:5\n12b:a-lgal-HEX-1:5|6:d\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5o(3+1)6d\n6:5o(4+1)7d\n7:7d(2+1)8n\n8:5o(6+1)9d\n9:9o(3+1)10d\n10:9o(6+1)11d\n11:1o(6+1)12d"
	    },
	
	    ncoreman: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dman-HEX-1:5\n6b:a-dman-HEX-1:5\n7b:a-dman-HEX-1:5\n8b:a-dman-HEX-1:5\n9b:a-dman-HEX-1:5\n10b:a-dman-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5o(3+1)6d\n6:6o(2+1)7d\n7:5o(6+1)8d\n8:8o(3+1)9d\n9:8o(6+1)10d"
	    },
	
	    ocore1: {
	        glycoct: "RES\n1b:a-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d"
	    },
	
	    ocore2: {
	        glycoct: "RES\n1b:a-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:b-dglc-HEX-1:5\n5s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:1o(6+1)4d\n4:4d(2+1)5n"
	    },
	
	    ocore3: {
	        glycoct: "RES\n1b:a-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3d(2+1)4n"
	    },
	
	    ocore4: {
	        glycoct: "RES\n1b:a-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dglc-HEX-1:5\n6s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3d(2+1)4n\n4:1o(6+1)5d\n5:5d(2+1)6n"
	    },
	
	    ocore5: {
	        glycoct: "RES\n1b:a-dgal-HEX-1:5\n2s:n-acetyl\n3b:a-dgal-HEX-1:5\n4s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3d(2+1)4n"
	    },
	
	    ocore6: {
	        glycoct: "RES\n1b:a-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(6+1)3d\n3:3d(2+1)4n"
	    },
	
	    ocore7: {
	        glycoct: "RES\n1b:a-dgal-HEX-1:5\n2s:n-acetyl\n3b:a-dgal-HEX-1:5\n4s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(6+1)3d\n3:3d(2+1)4n"
	    },
	
	    ocore8: {
	        glycoct: "RES\n1b:a-dgal-HEX-1:5\n2s:n-acetyl\n3b:a-dgal-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d"
	    },
	
	    gslarthro: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dman-HEX-1:5\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dgal-HEX-1:5\n6s:n-acetyl\nLIN\n1:1o(4+1)2d\n2:2o(3+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d\n5:5d(2+1)6n"
	    },
	
	    gslgala: {
	        glycoct: "RES\n1b:a-dgal-HEX-1:5\n2b:a-dgal-HEX-1:5\nLIN\n1:1o(4+1)2d"
	    },
	
	    gslganglio: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:b-dgal-HEX-1:5\n4s:n-acetyl\n5b:b-dgal-HEX-1:5\nLIN\n1:1o(4+1)2d\n2:2o(4+1)3d\n3:3d(2+1)4n\n4:3o(3+1)5d"
	    },
	
	    gslglobo: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:a-dgal-HEX-1:5\n4b:b-dgal-HEX-1:5\n5s:n-acetyl\nLIN\n1:1o(4+1)2d\n2:2o(4+1)3d\n3:3o(3+1)4d\n4:4d(2+1)5n"
	    },
	
	    gslisoglobo: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:a-dgal-HEX-1:5\n4b:b-dgal-HEX-1:5\n5s:n-acetyl\nLIN\n1:1o(4+1)2d\n2:2o(3+1)3d\n3:3o(3+1)4d\n4:4d(2+1)5n"
	    },
	
	    gsllacto: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dgal-HEX-1:5\nLIN\n1:1o(4+1)2d\n2:2o(3+1)3d\n3:3d(2+1)4n\n4:3o(3+1)5d"
	    },
	
	    gslmollu: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dman-HEX-1:5\n3b:a-dman-HEX-1:5\n4b:b-dglc-HEX-1:5\n5s:n-acetyl\nLIN\n1:1o(4+1)2d\n2:2o(3+1)3d\n3:3o(2+1)4d\n4:4d(2+1)5n"
	    },
	
	    gslmuco: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:b-dgal-HEX-1:5\n4b:b-dgal-HEX-1:5\nLIN\n1:1o(4+1)2d\n2:2o(4+1)3d\n3:3o(3+1)4d"
	    },
	
	    gslneolacto: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dgal-HEX-1:5\nLIN\n1:1o(4+1)2d\n2:2o(3+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d"
	    },
	
	    gaghyaluronic: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5|6:a\n4b:b-dglc-HEX-1:5\n5s:n-acetyl\n6b:b-dglc-HEX-1:5|6:a\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(4+1)4d\n4:4d(2+1)5n\n5:4o(3+1)6d"
	    },
	
	    gagchodroitin4: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5|6:a\n4b:b-dgal-HEX-1:5\n5s:n-acetyl\n6b:b-dglc-HEX-1:5|6:a\n7s:sulfate\n8s:sulfate\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(4+1)4d\n4:4d(2+1)5n\n5:4o(3+1)6d\n6:4o(4+-1)7n\n7:1o(4+-1)8n"
	    },
	
	    gagchodroitin6: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5|6:a\n4b:b-dgal-HEX-1:5\n5s:n-acetyl\n6b:b-dglc-HEX-1:5|6:a\n7s:sulfate\n8s:sulfate\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(4+1)4d\n4:4d(2+1)5n\n5:4o(3+1)6d\n6:4o(6+-1)7n\n7:1o(6+-1)8n"
	    },
	
	    gagchodroitin26: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5|6:a\n4s:sulfate\n5b:b-dgal-HEX-1:5\n6s:n-acetyl\n7b:b-dglc-HEX-1:5|6:a\n8s:sulfate\n9s:sulfate\n10s:sulfate\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(2+-1)4n\n4:3o(4+1)5d\n5:5d(2+1)6n\n6:5o(3+1)7d\n7:7o(2+-1)8n\n8:5o(6+-1)9n\n9:1o(6+-1)10n"
	    },
	
	    gagchodroitin46: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dglc-HEX-1:5|6:a\n4b:b-dgal-HEX-1:5\n5s:n-acetyl\n6b:b-dglc-HEX-1:5|6:a\n7s:sulfate\n8s:sulfate\n9s:sulfate\n10s:sulfate\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(4+1)4d\n4:4d(2+1)5n\n5:4o(3+1)6d\n6:4o(4+-1)7n\n7:4o(6+-1)8n\n8:1o(4+-1)9n\n9:1o(6+-1)10n"
	    },
	
	    gagdermatan: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dido-HEX-1:5|6:a\n4b:b-dgal-HEX-1:5\n5s:n-acetyl\n6b:b-dido-HEX-1:5|6:a\n7s:sulfate\n8s:sulfate\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(4+1)4d\n4:4d(2+1)5n\n5:4o(3+1)6d\n6:4o(4+-1)7n\n7:1o(4+-1)8n"
	    },
	
	    gagkeratan: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:b-dglc-HEX-1:5\n5s:n-acetyl\n6b:b-dgal-HEX-1:5\n7s:sulfate\n8s:sulfate\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3o(3+1)4d\n4:4d(2+1)5n\n5:4o(4+1)6d\n6:4o(6+-1)7n\n7:1o(6+-1)8n"
	    },
	
	    gagheparin: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-sulfate\n3s:sulfate\n4b:a-dido-HEX-1:5|6:a\n5s:sulfate\n6b:b-dglc-HEX-1:5\n7s:n-sulfate\n8s:sulfate\n9b:a-dido-HEX-1:5|6:a\n10s:sulfate\n11s:sulfate\nLIN\n1:1d(2+-1)2n\n2:1o(3+-1)3n\n3:1o(4+1)4d\n4:4o(2+-1)5n\n5:4o(4+1)6d\n6:6d(2+-1)7n\n7:6o(3+-1)8n\n8:6o(4+1)9d\n9:6o(6+-1)10n\n10:1o(6+-1)11n"
	    },
	
	    gagheparan: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:a-dido-HEX-1:5|6:a\n4s:sulfate\n5b:b-dglc-HEX-1:5\n6s:n-sulfate\n7b:a-dido-HEX-1:5|6:a\n8s:sulfate\n9s:sulfate\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3o(2+-1)4n\n4:3o(4+1)5d\n5:5d(2+-1)6n\n6:5o(4+1)7d\n7:5o(6+-1)8n\n8:1o(6+-1)9n"
	    },
	
	    milklac: {
	        glycoct: "RES\n1b:x-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\nLIN\n1:1o(4+1)2d"
	    },
	
	    milk3fuclac: {
	        glycoct: "RES\n1b:x-dglc-HEX-1:5\n2b:a-lgal-HEX-1:5|6:d\n3b:b-dgal-HEX-1:5\nLIN\n1:1o(3+1)2d\n2:1o(4+1)3d"
	    },
	
	    milk2fuclac: {
	        glycoct: "RES\n1b:x-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:a-lgal-HEX-1:5|6:d\nLIN\n1:1o(4+1)2d\n2:2o(2+1)3d"
	    },
	
	    milkdifuc: {
	        glycoct: "RES\n1b:x-dglc-HEX-1:5\n2b:a-lgal-HEX-1:5|6:d\n3b:b-dgal-HEX-1:5\n4b:a-lgal-HEX-1:5|6:d\nLIN\n1:1o(3+1)2d\n2:1o(4+1)3d\n3:3o(2+1)4d"
	    },
	
	    milktetra: {
	        glycoct: "RES\n1b:x-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dgal-HEX-1:5\nLIN\n1:1o(4+1)2d\n2:2o(3+1)3d\n3:3d(2+1)4n\n4:3o(3+1)5d"
	    },
	
	    milkneotetra: {
	        glycoct: "RES\n1b:x-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:b-dglc-HEX-1:5\n4s:n-acetyl\n5b:b-dgal-HEX-1:5\nLIN\n1:1o(4+1)2d\n2:2o(3+1)3d\n3:3d(2+1)4n\n4:3o(4+1)5d"
	    },
	
	    antigenA: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2b:a-lgal-HEX-1:5|6:d\n3b:a-dgal-HEX-1:5\n4s:n-acetyl\nLIN\n1:1o(2+1)2d\n2:1o(3+1)3d\n3:3d(2+1)4n"
	    },
	
	    antigenB: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2b:a-lgal-HEX-1:5|6:d\n3b:b-dgal-HEX-1:5\nLIN\n1:1o(2+1)2d\n2:1o(3+1)3d"
	    },
	
	    antigenH: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2b:a-lgal-HEX-1:5|6:d\nLIN\n1:1o(2+1)2d"
	    },
	
	    antigenCAD: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n5s:n-acetyl\n6b:b-dgal-HEX-1:5\n7s:n-acetyl\n8b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n9s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(3+2)4d\n4:4d(5+1)5n\n5:3o(4+1)6d\n6:6d(2+1)7n\n7:1o(6+2)8d\n8:8d(5+1)9n"
	    },
	
	    antigenP: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:a-dgal-HEX-1:5\n4b:b-dgal-HEX-1:5\n5s:n-acetyl\nLIN\n1:1o(4+1)2d\n2:2o(4+1)3d\n3:3o(3+1)4d\n4:4d(2+1)5n"
	    },
	
	    antigenPk: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2b:b-dgal-HEX-1:5\n3b:a-dgal-HEX-1:5\nLIN\n1:1o(4+1)2d\n2:2o(4+1)3d"
	    },
	
	    antigenSda: {
	        glycoct: "RES\n1b:b-dgal-HEX-1:5\n2b:b-dglc-HEX-1:5\n3s:n-acetyl\n4b:b-dgal-HEX-1:5\n5b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n6s:n-acetyl\n7b:b-dgal-HEX-1:5\n8s:n-acetyl\nLIN\n1:1o(3+1)2d\n2:2d(2+1)3n\n3:2o(4+1)4d\n4:4o(3+2)5d\n5:5d(5+1)6n\n6:4o(4+1)7d\n7:7d(2+1)8n"
	    },
	
	    highMannose: {
	        glycoct: "RES\n1b:a-dman-HEX-1:5\n2b:a-dman-HEX-1:5\nLIN\n1:1o(2+1)2d"
	    },
	
	    lacDiNAc: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n"
	    },
	
	    lactoseAmine: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d"
	    },
	
	    neoLactoseAmine: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d"
	    },
	
	    polyLactoseAmine: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:b-dglc-HEX-1:5\n5s:n-acetyl\n6b:b-dgal-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3o(3+1)4d\n4:4d(2+1)5n\n5:4o(4+1)6d"
	    },
	
	    sialyllactoNLSa: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n5s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(3+2)4d\n4:4d(5+1)5n"
	    },
	
	    sialyllactorNLSb: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n5s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(6+2)4d\n4:4d(5+1)5n"
	    },
	
	    sialyllactoNLSc: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n5s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:1o(6+2)4d\n4:4d(5+1)5n"
	    },
	
	    disialyllactorNLDS: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n5s:n-acetyl\n6b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n7s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(3+2)4d\n4:4d(5+1)5n\n5:1o(6+2)6d\n6:6d(5+1)7n"
	    },
	
	    fucosylatedLacDiNAc: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:a-lgal-HEX-1:5|6:d\n4b:b-dgal-HEX-1:5\n5s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:1o(4+1)4d\n4:4d(2+1)5n"
	    },
	
	    sialylatedLacDiNAc: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4s:n-acetyl\n5b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n6s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3d(2+1)4n\n4:3o(6+2)5d\n5:5d(5+1)6n"
	    },
	
	    lewisA: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-lgal-HEX-1:5|6:d\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:1o(4+1)4d"
	    },
	
	    lewisB: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-lgal-HEX-1:5|6:d\n5b:a-lgal-HEX-1:5|6:d\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(2+1)4d\n4:1o(4+1)5d"
	    },
	
	    lewisC: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d"
	    },
	
	    lewisD: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-lgal-HEX-1:5|6:d\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(2+1)4d"
	    },
	
	    lewisX: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:a-lgal-HEX-1:5|6:d\n4b:b-dgal-HEX-1:5\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:1o(4+1)4d"
	    },
	
	    lewisY: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:a-lgal-HEX-1:5|6:d\n4b:b-dgal-HEX-1:5\n5b:a-lgal-HEX-1:5|6:d\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:1o(4+1)4d\n4:4o(2+1)5d"
	    },
	
	    sialylLewisA: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n5s:n-acetyl\n6b:a-lgal-HEX-1:5|6:d\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:3o(3+2)4d\n4:4d(5+1)5n\n5:1o(4+1)6d"
	    },
	
	    sialylLewisX: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:a-lgal-HEX-1:5|6:d\n4b:b-dgal-HEX-1:5\n5b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n6s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(3+1)3d\n3:1o(4+1)4d\n4:4o(3+2)5d\n5:5d(5+1)6n"
	    },
	
	    VIM2: {
	        glycoct: "RES\n1b:b-dglc-HEX-1:5\n2s:n-acetyl\n3b:b-dgal-HEX-1:5\n4b:a-dgro-dgal-NON-2:6|1:a|2:keto|3:d\n5s:n-acetyl\nLIN\n1:1d(2+1)2n\n2:1o(4+1)3d\n3:3o(3+2)4d\n4:4d(5+1)5n"
	    }
	
	});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: S.TSUCHIYA
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var XYvalues = function (_Enum) {
	    _inherits(XYvalues, _Enum);
	
	    function XYvalues() {
	        _classCallCheck(this, XYvalues);
	
	        return _possibleConstructorReturn(this, (XYvalues.__proto__ || Object.getPrototypeOf(XYvalues)).apply(this, arguments));
	    }
	
	    _createClass(XYvalues, [{
	        key: 'getXYvalue',
	        value: function getXYvalue(value) {
	            switch (value) {
	                case 1:
	                    return XYvalues.ONE;
	                case 2:
	                    return XYvalues.TWO;
	                case 3:
	                    return XYvalues.THREE;
	                case 4:
	                    return XYvalues.FOUR;
	                case 5:
	                    return XYvalues.FIVE;
	                case 6:
	                    return XYvalues.SIX;
	                case 7:
	                    return XYvalues.SEVEN;
	                case 8:
	                    return XYvalues.EIGHT;
	                case 9:
	                    return XYvalues.NINE;
	                case 'undefined':
	                    return XYvalues.UNDEFINED;
	            }
	        }
	    }]);
	
	    return XYvalues;
	}(_enumify.Enum);
	
	/*
	gap: 50
	
	1: [gap, 0]
	2: [0, gap]
	3: [-1*gap, gap]
	4: [-1*gap, 0]
	5: [-1*gap, 0]
	6: [-1*gap, -1*gap]
	7: [0,-1*gap]
	8: [0,-1*gap]
	9: [0,-1*gap]
	'undefined': [0,-1*gap]
	 */
	
	exports.default = XYvalues;
	XYvalues.initEnum({
	    ONE: {
	        x: 1,
	        y: 0
	    },
	    TWO: {
	        x: 0,
	        y: 1
	    },
	    THREE: {
	        x: -1,
	        y: 1
	    },
	    FOUR: {
	        x: -1,
	        y: 0
	    },
	    FIVE: {
	        x: -1,
	        y: 0
	    },
	    SIX: {
	        x: -1,
	        y: -1
	    },
	    SEVEN: {
	        x: -1,
	        y: -1
	    },
	    EIGHT: {
	        x: 0,
	        y: -1
	    },
	    NINE: {
	        x: 0,
	        y: -1
	    },
	    UNDEFINED: {
	        x: -1,
	        y: 0
	    }
	});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var colorDivisions = function (_Enum) {
	    _inherits(colorDivisions, _Enum);
	
	    function colorDivisions() {
	        _classCallCheck(this, colorDivisions);
	
	        return _possibleConstructorReturn(this, (colorDivisions.__proto__ || Object.getPrototypeOf(colorDivisions)).apply(this, arguments));
	    }
	
	    _createClass(colorDivisions, [{
	        key: "getColorDivisions",
	        value: function getColorDivisions() {
	            var ret = [];
	            ret.push(this.getColorDivision("whiteColor"));
	            ret.push(this.getColorDivision("blueColor"));
	            ret.push(this.getColorDivision("greenColor"));
	            ret.push(this.getColorDivision("yellowColor"));
	            ret.push(this.getColorDivision("orangeColor"));
	            ret.push(this.getColorDivision("pinkColor"));
	            ret.push(this.getColorDivision("purpleColor"));
	            ret.push(this.getColorDivision("lightBlueColor"));
	            ret.push(this.getColorDivision("brownColor"));
	            ret.push(this.getColorDivision("redColor"));
	
	            return ret;
	        }
	    }, {
	        key: "getColorDivision",
	        value: function getColorDivision(value) {
	            switch (value) {
	                case "whiteColor":
	                    return colorDivisions.WHITE;
	                case "blueColor":
	                    return colorDivisions.BLUE;
	                case "greenColor":
	                    return colorDivisions.GREEN;
	                case "yellowColor":
	                    return colorDivisions.YELLOW;
	                case "orangeColor":
	                    return colorDivisions.ORANGE;
	                case "pinkColor":
	                    return colorDivisions.PINK;
	                case "purpleColor":
	                    return colorDivisions.PURPLE;
	                case "lightBlueColor":
	                    return colorDivisions.LIGHTBLUE;
	                case "brownColor":
	                    return colorDivisions.BROWN;
	                case "redColor":
	                    return colorDivisions.RED;
	            }
	        }
	    }, {
	        key: "getDivisionFromCode",
	        value: function getDivisionFromCode(value) {
	            switch (value) {
	                case "#FFFFFF":
	                    return colorDivisions.WHITE;
	                case "#0090BC":
	                    return colorDivisions.BLUE;
	                case "#00A651":
	                    return colorDivisions.GREEN;
	                case "#FFD400":
	                    return colorDivisions.YELLOW;
	                case "#F47920":
	                    return colorDivisions.ORANGE;
	                case "#F69EA1":
	                    return colorDivisions.PINK;
	                case "#A54399":
	                    return colorDivisions.PURPLE;
	                case "#8FCCE9":
	                    return colorDivisions.LIGHTBLUE;
	                case "#A17A4D":
	                    return colorDivisions.BROWN;
	                case "#ED1C24":
	                    return colorDivisions.RED;
	            }
	        }
	    }, {
	        key: "getDivision",
	        value: function getDivision(value) {
	            switch (value) {
	                case "whiteColor":
	                    return colorDivisions.WHITE.division;
	                case "blueColor":
	                    return colorDivisions.BLUE.division;
	                case "greenColor":
	                    return colorDivisions.GREEN.division;
	                case "yellowColor":
	                    return colorDivisions.YELLOW.division;
	                case "orangeColor":
	                    return colorDivisions.ORANGE.division;
	                case "pinkColor":
	                    return colorDivisions.PINK.division;
	                case "purpleColor":
	                    return colorDivisions.PURPLE.division;
	                case "lightBlueColor":
	                    return colorDivisions.LIGHTBLUE.division;
	                case "brownColor":
	                    return colorDivisions.BROWN.division;
	                case "redColor":
	                    return colorDivisions.RED.division;
	            }
	        }
	    }, {
	        key: "getColor",
	        value: function getColor(value) {
	            switch (value) {
	                case "whiteColor":
	                    return colorDivisions.WHITE.display_division;
	                case "blueColor":
	                    return colorDivisions.BLUE.display_division;
	                case "greenColor":
	                    return colorDivisions.GREEN.display_division;
	                case "yellowColor":
	                    return colorDivisions.YELLOW.display_division;
	                case "orangeColor":
	                    return colorDivisions.ORANGE.display_division;
	                case "pinkColor":
	                    return colorDivisions.PINK.display_division;
	                case "purpleColor":
	                    return colorDivisions.PURPLE.display_division;
	                case "lightBlueColor":
	                    return colorDivisions.LIGHTBLUE.display_division;
	                case "brownColor":
	                    return colorDivisions.BROWN.display_division;
	                case "redColor":
	                    return colorDivisions.RED.display_division;
	            }
	        }
	    }]);
	
	    return colorDivisions;
	}(_enumify.Enum);
	
	// Color Divisions with all possible colors
	
	
	exports.default = colorDivisions;
	colorDivisions.initEnum({
	    WHITE: {
	        division: "whiteColor",
	        display_division: '#FFFFFF'
	    },
	    BLUE: {
	        division: "blueColor",
	        display_division: '#0090BC'
	    },
	    GREEN: {
	        division: "greenColor",
	        display_division: '#00A651'
	    },
	    YELLOW: {
	        division: "yellowColor",
	        display_division: '#FFD400'
	    },
	    ORANGE: {
	        division: "orangeColor",
	        display_division: '#F47920'
	    },
	    PINK: {
	        division: "pinkColor",
	        display_division: '#F69EA1'
	    },
	    PURPLE: {
	        division: "purpleColor",
	        display_division: '#A54399'
	    },
	    LIGHTBLUE: {
	        division: "lightBlueColor",
	        display_division: '#8FCCE9'
	    },
	    BROWN: {
	        division: "brownColor",
	        display_division: '#A17A4D'
	    },
	    RED: {
	        division: "redColor",
	        display_division: '#ED1C24'
	    }
	});
	
	//original param from menu.js
	// Color Divisions with all possible colors
	/*
	var colorDivisions = [{
	    division: "whiteColor",
	    display_division: '#FFFFFF'
	}, {
	    division: "blueColor",
	    display_division: '#0090BC'
	}, {
	    division: "greenColor",
	    display_division: '#00A651'
	}, {
	    division: "yellowColor",
	    display_division: '#FFD400'
	}, {
	    division: "orangeColor",
	    display_division: '#F47920'
	}, {
	    division: "pinkColor",
	    display_division: '#F69EA1'
	}, {
	    division: "purpleColor",
	    display_division: '#A54399'
	}, {
	    division:"lightBlueColor",
	    display_division: '#8FCCE9'
	}, {
	    division:"brownColor",
	    display_division: '#A17A4D'
	}, {
	    division:"redColor",
	    display_division: '#ED1C24'
	}];
	 */

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SubstituentLabels = function (_Enum) {
	    _inherits(SubstituentLabels, _Enum);
	
	    function SubstituentLabels() {
	        _classCallCheck(this, SubstituentLabels);
	
	        return _possibleConstructorReturn(this, (SubstituentLabels.__proto__ || Object.getPrototypeOf(SubstituentLabels)).apply(this, arguments));
	    }
	
	    _createClass(SubstituentLabels, [{
	        key: "getSubstituentLabel",
	        value: function getSubstituentLabel(value) {
	            switch (value) {
	                case 1:
	                    return SubstituentLabels.ONE;
	                case 2:
	                    return SubstituentLabels.TWO;
	                case 3:
	                    return SubstituentLabels.THREE;
	                case 4:
	                    return SubstituentLabels.FOUR;
	                case 5:
	                    return SubstituentLabels.FIVE;
	                case 6:
	                    return SubstituentLabels.SIX;
	                case 7:
	                    return SubstituentLabels.SEVEN;
	                case 8:
	                    return SubstituentLabels.EIGHT;
	                case 9:
	                    return SubstituentLabels.NINE;
	                case "undefined":
	                    return SubstituentLabels.UNDEFINED;
	            }
	        }
	    }]);
	
	    return SubstituentLabels;
	}(_enumify.Enum);
	
	/*
	var subsXY = {
	1: [x-7, y+20],
	2: [x+16, y],
	3: [x+16,y-16],
	4: [x-7, y-28],
	5: [x+16, y+8],
	6: [x-28, y-16],
	7: [x-28, y+8],
	8: [x-28, y+16],
	9: [x+16, y+16],
	"undefined": [x-28, y]
	};
	 */
	
	
	exports.default = SubstituentLabels;
	SubstituentLabels.initEnum({
	    ONE: {
	        x: 20,
	        y: -7
	    },
	    TWO: {
	        x: 0,
	        y: 16
	    },
	    THREE: {
	        x: -16,
	        y: 16
	    },
	    FOUR: {
	        x: -28,
	        y: -7
	    },
	    FIVE: {
	        x: 8,
	        y: 16
	    },
	    SIX: {
	        x: -16,
	        y: -28
	    },
	    SEVEN: {
	        x: 8,
	        y: -28
	    },
	    EIGHT: {
	        x: 16,
	        y: -28
	    },
	    NINE: {
	        x: 16,
	        y: 16
	    },
	    UNDEFINED: {
	        x: 0,
	        y: -28
	    }
	});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _enumify = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: S.TSUCHIYA
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var XYLinkLabels = function (_Enum) {
	    _inherits(XYLinkLabels, _Enum);
	
	    function XYLinkLabels() {
	        _classCallCheck(this, XYLinkLabels);
	
	        return _possibleConstructorReturn(this, (XYLinkLabels.__proto__ || Object.getPrototypeOf(XYLinkLabels)).apply(this, arguments));
	    }
	
	    _createClass(XYLinkLabels, [{
	        key: "getXYLinkLabel",
	        value: function getXYLinkLabel(value) {
	            switch (value) {
	                case 1:
	                    return XYLinkLabels.ONE;
	                case 2:
	                    return XYLinkLabels.TWO;
	                case 3:
	                    return XYLinkLabels.THREE;
	                case 4:
	                    return XYLinkLabels.FOUR;
	                case 5:
	                    return XYLinkLabels.FIVE;
	                case 6:
	                    return XYLinkLabels.SIX;
	                case 7:
	                    return XYLinkLabels.SEVEN;
	                case 8:
	                    return XYLinkLabels.EIGHT;
	                case 9:
	                    return XYLinkLabels.NINE;
	                case 'undefined':
	                    return XYLinkLabels.UNDEFINED;
	
	            }
	        }
	    }]);
	
	    return XYLinkLabels;
	}(_enumify.Enum);
	
	/*
	* 1: [4, 0],
	* 2: [-3,14],
	* 3: [0, 10],
	* 4: [4, 0],
	* 5: [0,0],
	* 6: [-10,13],
	* 7: [0,14],
	* 8: [0,14],
	* 9: [0,14],
	* 'undefined': [0,14]
	* */
	
	exports.default = XYLinkLabels;
	XYLinkLabels.initEnum({
	    ONE: {
	        x: 4,
	        y: 0
	    },
	    TWO: {
	        x: 15,
	        y: 0
	    },
	    THREE: {
	        x: 13,
	        y: 0
	    },
	    FOUR: {
	        x: 0,
	        y: 5
	    },
	    FIVE: {
	        x: 0,
	        y: 5
	    },
	    SIX: {
	        x: 13,
	        y: -10
	    },
	    SEVEN: {
	        x: 13,
	        y: -10
	    },
	    EIGHT: {
	        x: 15,
	        y: -6
	    },
	    NINE: {
	        x: 15,
	        y: -6
	    },
	    UNDEFINED: {
	        x: 0,
	        y: 5
	    }
	});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OriginalPosition = function () {
	    function OriginalPosition(_x, _y) {
	        _classCallCheck(this, OriginalPosition);
	
	        this.x = _x === undefined ? 600 : _x;
	        this.y = _y === undefined ? 200 : _y;
	    }
	
	    _createClass(OriginalPosition, [{
	        key: "posX",
	        set: function set(_x) {
	            this.x = _x;
	        },
	        get: function get() {
	            return this.x;
	        }
	    }, {
	        key: "posY",
	        set: function set(_y) {
	            this.y = _y;
	        },
	        get: function get() {
	            return this.y;
	        }
	    }]);
	
	    return OriginalPosition;
	}();
	
	exports.default = OriginalPosition;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GraphEdge = __webpack_require__(2);
	
	var _GraphEdge2 = _interopRequireDefault(_GraphEdge);
	
	var _AcceptorPosition = __webpack_require__(5);
	
	var _AcceptorPosition2 = _interopRequireDefault(_AcceptorPosition);
	
	var _DonorPosition = __webpack_require__(9);
	
	var _DonorPosition2 = _interopRequireDefault(_DonorPosition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var GlycosidicLinkage = function (_Edge) {
	    _inherits(GlycosidicLinkage, _Edge);
	
	    function GlycosidicLinkage(id, sourceNode, targetNode, acceptorPosition, donorPosition) {
	        _classCallCheck(this, GlycosidicLinkage);
	
	        var _this = _possibleConstructorReturn(this, (GlycosidicLinkage.__proto__ || Object.getPrototypeOf(GlycosidicLinkage)).call(this, id, sourceNode, targetNode));
	
	        if (acceptorPosition instanceof _AcceptorPosition2.default) {
	            _this._acceptorPosition = acceptorPosition;
	        } else if (typeof acceptorPosition == 'undefined') {
	            _this._acceptorPosition = _AcceptorPosition2.default.UNDEFINED;
	        } else {
	            throw "The Acceptor Position must be AcceptorPosition type. Please use the enum under src/js/glycomics/dictionary/AcceptorPosition.js";
	        }
	
	        if (donorPosition instanceof _DonorPosition2.default) {
	            _this._donorPosition = donorPosition;
	        } else if (typeof donorPosition == 'undefined') {
	            _this._donorPosition = _DonorPosition2.default.UNDEFINED;
	        } else {
	            throw "The Donor Position must be DonorPosition type. Please use the enum under src/js/glycomics/dictionary/DonorPosition.js";
	        }
	        return _this;
	    }
	
	    _createClass(GlycosidicLinkage, [{
	        key: 'acceptorPosition',
	        get: function get() {
	            return this._acceptorPosition;
	        },
	
	
	        /*
	        get linkageType () {
	            return this._linkageType;
	        }
	         */
	
	        set: function set(acceptorPosition) {
	            if (acceptorPosition instanceof _AcceptorPosition2.default) {
	                this._acceptorPosition = acceptorPosition;
	            } else {
	                throw "The Donor Position must be AcceptorPosition type. Please use the enum under src/js/glycomics/dictionary/AcceptorPosition.js";
	            }
	            return acceptorPosition;
	        }
	    }, {
	        key: 'donorPosition',
	        get: function get() {
	            return this._donorPosition;
	        },
	        set: function set(donorPosition) {
	            if (donorPosition instanceof _DonorPosition2.default) {
	                this._donorPosition = donorPosition;
	            } else {
	                throw "The Donor Position must be DonorPosition type. Please use the enum under src/js/glycomics/dictionary/DonorPosition.js";
	            }
	            return donorPosition;
	        }
	        /*
	        set linkageType (_linkageType) {
	           if (_linkageType instanceof LinkageType) {
	               this._linkageType = _linkageType;
	           } else {
	               throw "The Linkage Type must be LinkageType. Please use the enum under src/js/glycomics/dictionary/LinkageType.js";
	           }
	        }
	        */
	
	    }]);
	
	    return GlycosidicLinkage;
	}(_GraphEdge2.default);
	
	exports.default = GlycosidicLinkage;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GraphEdge = __webpack_require__(2);
	
	var _GraphEdge2 = _interopRequireDefault(_GraphEdge);
	
	var _DonorPosition = __webpack_require__(9);
	
	var _DonorPosition2 = _interopRequireDefault(_DonorPosition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var SubstituentLinkage = function (_Edge) {
	    _inherits(SubstituentLinkage, _Edge);
	
	    function SubstituentLinkage(id, target, source, donorPosition) {
	        _classCallCheck(this, SubstituentLinkage);
	
	        var _this = _possibleConstructorReturn(this, (SubstituentLinkage.__proto__ || Object.getPrototypeOf(SubstituentLinkage)).call(this, id, target, source));
	
	        if (donorPosition instanceof _DonorPosition2.default) {
	            _this._donorPosition = donorPosition;
	        } else if (typeof donorPosition == 'undefined') {
	            _this._donorPosition = _DonorPosition2.default.UNDEFINED;
	        } else {
	            throw "The Donor Position must be DonorPosition type. Please use the enum under src/js/glycomics/dictionary/DonorPosition.js";
	        }
	        return _this;
	    }
	
	    _createClass(SubstituentLinkage, [{
	        key: 'donorPosition',
	        get: function get() {
	            return this._donorPosition;
	        }
	
	        /*
	        get linkageType () {
	            return this._linkageType;
	        }
	         */
	
	        ,
	        set: function set(donorPosition) {
	            if (donorPosition instanceof _DonorPosition2.default) {
	                this._donorPosition = donorPosition;
	            } else {
	                throw "The Donor Position must be DonorPosition type. Please use the enum under src/js/glycomics/dictionary/DonorPosition.js";
	            }
	            return donorPosition;
	        }
	
	        /*
	        set linkageType (_linkageType) {
	            if (_linkageType instanceof LinkageType) {
	                this._linkageType = _linkageType;
	            } else {
	                throw "The Linkage Type must be LinkageType. Please use the enum under src/js/glycomics/dictionary/LinkageType.js";
	            }
	        }
	         */
	
	    }]);
	
	    return SubstituentLinkage;
	}(_GraphEdge2.default);
	
	exports.default = SubstituentLinkage;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GraphNode = __webpack_require__(4);
	
	var _GraphNode2 = _interopRequireDefault(_GraphNode);
	
	var _Anomericity = __webpack_require__(7);
	
	var _Anomericity2 = _interopRequireDefault(_Anomericity);
	
	var _Isomer = __webpack_require__(8);
	
	var _Isomer2 = _interopRequireDefault(_Isomer);
	
	var _RingType = __webpack_require__(11);
	
	var _RingType2 = _interopRequireDefault(_RingType);
	
	var _MonosaccharideType = __webpack_require__(10);
	
	var _MonosaccharideType2 = _interopRequireDefault(_MonosaccharideType);
	
	var _RepeatingUnit = __webpack_require__(26);
	
	var _RepeatingUnit2 = _interopRequireDefault(_RepeatingUnit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Monosaccharide = function (_Node) {
	    _inherits(Monosaccharide, _Node);
	
	    function Monosaccharide(id, monosaccharideType, anomericity, isomer, ringType) {
	        _classCallCheck(this, Monosaccharide);
	
	        var _this = _possibleConstructorReturn(this, (Monosaccharide.__proto__ || Object.getPrototypeOf(Monosaccharide)).call(this, id));
	
	        if (monosaccharideType instanceof _MonosaccharideType2.default) {
	            _this._monosaccharideType = monosaccharideType;
	        } else if (typeof monosaccharideType == 'undefined') {
	            _this._monosaccharideType = _MonosaccharideType2.default.UNDEFINED;
	        } else {
	            throw 'Please use the MonosaccharideType class and forget about string. Extend the enum if you need a specific value';
	        }
	
	        if (anomericity instanceof _Anomericity2.default) {
	            _this._anomericity = anomericity;
	        } else if (typeof anomericity == 'undefined') {
	            _this._anomericity = _Anomericity2.default.UNDEFINED;
	        } else {
	            throw 'Please use the Anomericity class and forget about string. Extend the enum if you need a specific value';
	        }
	
	        if (isomer instanceof _Isomer2.default) {
	            _this._isomer = isomer;
	        } else if (typeof isomer == 'undefined') {
	            _this._isomer = _Isomer2.default.UNDEFINED;
	        } else {
	            throw 'Please use the Isomer class and forget about string. Extend the enum if you need a specific value';
	        }
	
	        if (ringType instanceof _RingType2.default) {
	            _this._ringType = ringType;
	        } else if (typeof ringType == 'undefined') {
	            _this._ringType = _RingType2.default.UNDEFINED;
	        } else {
	            throw 'Please use the RingType class and forget about string. Extend the enum if you need a specific value';
	        }
	
	        return _this;
	    }
	
	    _createClass(Monosaccharide, [{
	        key: 'ringType',
	        get: function get() {
	            return this._ringType;
	        },
	        set: function set(ringType) {
	            if (ringType instanceof _RingType2.default) {
	                this._ringType = ringType;
	            } else {
	                throw 'Please use the RingType class and forget about string. Extend the enum if you need a specific value';
	            }
	        }
	    }, {
	        key: 'monosaccharideType',
	        get: function get() {
	            return this._monosaccharideType;
	        },
	        set: function set(monosaccharideType) {
	            if (monosaccharideType instanceof _MonosaccharideType2.default) {
	                this._monosaccharideType = monosaccharideType;
	            } else {
	                throw 'Please use the MonosaccharideType class and forget about string. Extend the enum if you need a specific value';
	            }
	        }
	    }, {
	        key: 'isomer',
	        get: function get() {
	            return this._isomer;
	        },
	        set: function set(isomer) {
	            if (isomer instanceof _Isomer2.default) {
	                this._isomer = isomer;
	            } else {
	                throw 'Please use the Isomer class and forget about string. Extend the enum if you need a specific value';
	            }
	        }
	    }, {
	        key: 'anomericity',
	        get: function get() {
	            return this._anomericity;
	        },
	        set: function set(anomericity) {
	            if (anomericity instanceof _Anomericity2.default) {
	                this._anomericity = anomericity;
	            } else {
	                throw 'Please use the Anomericity class and forget about string. Extend the enum if you need a specific value';
	            }
	        }
	    }, {
	        key: 'repeatingUnit',
	        get: function get() {
	            return this._repeatingUnit;
	        },
	        set: function set(_repeatingUnit) {
	            if (_repeatingUnit instanceof _RepeatingUnit2.default) {
	                this._repeatingUnit = _repeatingUnit;
	            } else {
	                throw "Please use the RepeatingUnit class and forget about string. Extend the enum if you need a specific value";
	            }
	        }
	    }]);
	
	    return Monosaccharide;
	}(_GraphNode2.default);
	
	exports.default = Monosaccharide;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _DonorPosition = __webpack_require__(9);
	
	var _DonorPosition2 = _interopRequireDefault(_DonorPosition);
	
	var _AcceptorPosition = __webpack_require__(5);
	
	var _AcceptorPosition2 = _interopRequireDefault(_AcceptorPosition);
	
	var _createjsEaseljs = __webpack_require__(3);
	
	var _createjsEaseljs2 = _interopRequireDefault(_createjsEaseljs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Renaud on 17/07/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var RepeatingUnit = function (_createjs$Container) {
	    _inherits(RepeatingUnit, _createjs$Container);
	
	    function RepeatingUnit(id, nodes, min, max, entry, exit, donorPosition, acceptorPosition) {
	        _classCallCheck(this, RepeatingUnit);
	
	        var _this = _possibleConstructorReturn(this, (RepeatingUnit.__proto__ || Object.getPrototypeOf(RepeatingUnit)).call(this));
	
	        _this.id = id;
	        _this.nodes = nodes;
	
	        if (min === "?") {
	            _this.min = min;
	        } else {
	            _this.min = parseInt(min);
	        }
	
	        if (max === "?") {
	            _this.max = max;
	        } else {
	            _this.max = parseInt(max);
	        }
	
	        if (donorPosition === "?") {
	            _this.donorPosition = _DonorPosition2.default.UNDEFINED;
	        } else {
	            _this.donorPosition = donorPosition;
	        }
	
	        if (acceptorPosition === "?") {
	            _this.acceptorPosition = _AcceptorPosition2.default.UNDEFINED;
	        } else {
	            _this.acceptorPosition = acceptorPosition;
	        }
	        return _this;
	    }
	
	    return RepeatingUnit;
	}(_createjsEaseljs2.default.Container);
	
	exports.default = RepeatingUnit;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GraphNode = __webpack_require__(4);
	
	var _GraphNode2 = _interopRequireDefault(_GraphNode);
	
	var _SubstituentType = __webpack_require__(12);
	
	var _SubstituentType2 = _interopRequireDefault(_SubstituentType);
	
	var _RepeatingUnit = __webpack_require__(26);
	
	var _RepeatingUnit2 = _interopRequireDefault(_RepeatingUnit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Substituent = function (_Node) {
	    _inherits(Substituent, _Node);
	
	    function Substituent(id, substituentType) {
	        _classCallCheck(this, Substituent);
	
	        var _this = _possibleConstructorReturn(this, (Substituent.__proto__ || Object.getPrototypeOf(Substituent)).call(this, id));
	
	        if (substituentType instanceof _SubstituentType2.default) {
	            _this._substituentType = substituentType;
	        } else if (typeof substituentType == 'undefined') {
	            _this._substituentType = _SubstituentType2.default.UNDEFINED;
	        } else {
	            throw 'Please use the SubstituentType class and forget about string. Extend the enum if you need a specific value';
	        }
	        return _this;
	    }
	
	    _createClass(Substituent, [{
	        key: 'substituentType',
	        get: function get() {
	            return this._substituentType;
	        },
	        set: function set(substituentType) {
	            if (substituentType instanceof _SubstituentType2.default) {
	                this._substituentType = substituentType;
	            } else {
	                throw 'Please use the SubstituentType class and forget about string. Extend the enum if you need a specific value';
	            }
	        }
	    }, {
	        key: 'repeatingUnit',
	        get: function get() {
	            return this._repeatingUnit;
	        },
	        set: function set(_repeatingUnit) {
	            if (_repeatingUnit instanceof _RepeatingUnit2.default) {
	                this._repeatingUnit = _repeatingUnit;
	            } else {
	                throw "Please use the RepeatingUnit class and forget about string. Extend the enum if you need a specific value";
	            }
	        }
	    }]);
	
	    return Substituent;
	}(_GraphNode2.default);
	
	exports.default = Substituent;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Monosaccharide = __webpack_require__(25);
	
	var _Monosaccharide2 = _interopRequireDefault(_Monosaccharide);
	
	var _Substituent = __webpack_require__(27);
	
	var _Substituent2 = _interopRequireDefault(_Substituent);
	
	var _GlycosidicLinkage = __webpack_require__(23);
	
	var _GlycosidicLinkage2 = _interopRequireDefault(_GlycosidicLinkage);
	
	var _SubstituentLinkage = __webpack_require__(24);
	
	var _SubstituentLinkage2 = _interopRequireDefault(_SubstituentLinkage);
	
	var _Graph = __webpack_require__(1);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	var _createjsEaseljs = __webpack_require__(3);
	
	var _createjsEaseljs2 = _interopRequireDefault(_createjsEaseljs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * TODO: We need to add something to freeze the Glycan structure.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * At the moment all the attributes are mutable unless ids with targets and sources.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	/*
	let createjs;
	if (typeof window !== "undefined") {
	    createjs = require("createjs-easeljs");
	}
	 */
	
	var Glycan = function (_createjs$Container) {
	    _inherits(Glycan, _createjs$Container);
	
	    function Glycan(id, rootNode) {
	        _classCallCheck(this, Glycan);
	
	        var _this = _possibleConstructorReturn(this, (Glycan.__proto__ || Object.getPrototypeOf(Glycan)).call(this));
	
	        if (typeof id !== 'string' && typeof id !== 'number') {
	            throw 'The glycan must have a string or number id.';
	        } else {
	            _this.id = id;
	        }
	
	        _this.rootSet = false;
	        //Wrapping of Sigma.js graph datastructure.
	        _this.graph = new _Graph2.default.graph();
	
	        if (rootNode instanceof _Monosaccharide2.default) {
	            _this.rootNode = rootNode;
	            try {
	                _this.graph.addNode(rootNode);
	            } catch (err) {
	                throw 'Error adding node: ' + err;
	            }
	
	            _this.rootSet = true;
	        } else if (typeof rootNode !== 'undefined') {
	            throw 'The Root Node cannot be undefined or a Monosaccharide ';
	        }
	
	        return _this;
	    }
	
	    /**
	     * Chech if the root of the Glycan is set.
	     * @returns {boolean}
	     */
	
	    _createClass(Glycan, [{
	        key: 'rootIsSet',
	        value: function rootIsSet() {
	            return this.rootSet;
	        }
	
	        /**
	         * Get the Glycan Id
	         * @returns {string} Glycan Id
	         */
	
	    }, {
	        key: 'getGlycanId',
	        value: function getGlycanId() {
	            return this.id;
	        }
	
	        /**
	         * Get the root node. Can only be a Monosaccharide
	         * @returns {Monosaccharide} Root Monosaccharide
	         */
	
	    }, {
	        key: 'getRootNode',
	        value: function getRootNode() {
	            return this.rootNode;
	        }
	
	        /**
	         * Set the root node. Can only be a Monosaccharide
	         * @param {Monosaccharide} rootNode The root node
	         * @returns {Monosaccharide} The root node
	         */
	
	    }, {
	        key: 'setRootNode',
	        value: function setRootNode(rootNode) {
	            if (!(rootNode instanceof _Monosaccharide2.default)) {
	                throw 'The Root Node can be only a Monosaccharide ';
	            }
	
	            if (this.rootIsSet()) {
	                throw 'The Root Node can only be set once. Create a new Glycan object.';
	            }
	
	            this.rootNode = rootNode;
	            this.graph.addNode(rootNode);
	            this.rootSet = true;
	            return rootNode;
	        }
	
	        /**
	         * Return the Node with the id specified by the user otherwise throw an error.
	         * @param {string} id The node id
	         * @returns {*} return a node object (Monosaccharide or Substituent in our case).
	         */
	
	    }, {
	        key: 'getNodeById',
	        value: function getNodeById(id) {
	            try {
	                var node = this.graph.nodes(id);
	                if (node) return node;
	            } catch (err) {
	                throw 'Error: ' + err;
	            }
	            throw 'Error: The node does not exist';
	        }
	
	        /**
	         * Return the Edge with the id specified by the user otherwise throw an error.
	         * @param {string} id The Edge id
	         * @returns {*} return a linkage(edge) object (GlycosidicLinkage or SubstituentLinkage in our case).
	         */
	
	    }, {
	        key: 'getEdgeById',
	        value: function getEdgeById(id) {
	            try {
	                var edge = this.graph.edges(id);
	                if (edge) return edge;
	            } catch (err) {
	                throw 'Error: ' + err;
	            }
	            throw 'Error: The node does not exist';
	        }
	
	        /**
	         * Return the Edge within sourceNode and targetNode
	         * Throw an error if the edge does not exist.
	         * TODO: The for loop can ber removed by creating a new method in the graph.js to get specific edges.
	         * @param {string} id The Edge id
	         * @returns {*} return a linkage(edge) object (GlycosidicLinkage or SubstituentLinkage in our case).
	         */
	
	    }, {
	        key: 'getEdge',
	        value: function getEdge(sourceNode, targetNode) {
	            for (var i = 0; i < this.graph.edges().length; i++) {
	                if (this.graph.edges()[i].getEdgeSource() === sourceNode && this.graph.edges()[i].getEdgeTarget() === targetNode) {
	                    return this.graph.edges()[i];
	                }
	            }
	            throw 'No edge found between the sourceNode and targetNode';
	        }
	
	        /**
	         * Return the Monosaccharide with the id specified by the user otherwise throw an error.
	         * @param {string} id The Monosaccharide id
	         * @returns {Monosaccharide} return a Monosaccahride object
	         */
	
	    }, {
	        key: 'getMonosaccharideById',
	        value: function getMonosaccharideById(id) {
	            var monosaccharide = this.getNodeById(id);
	            if (monosaccharide instanceof _Monosaccharide2.default) {
	                return monosaccharide;
	            } else {
	                throw 'This method can only return monosaccharide object';
	            }
	        }
	
	        /**
	         * Return the Substituent with the id specified by the user otherwise throw an error.
	         * @param {string} id The Substituent id
	         * @returns {Substituent} return a Substituent object
	         */
	
	    }, {
	        key: 'getSubstituentById',
	        value: function getSubstituentById(id) {
	            var substituent = this.getNodeById(id);
	            if (substituent instanceof _Substituent2.default) {
	                return substituent;
	            } else {
	                throw 'This method can only return substituent object';
	            }
	        }
	
	        /**
	         * Return the GlycosidicLinkage with the id specified by the user otherwise throw an error.
	         * @param {string} id The Edge id
	         * @returns {GlycosidicLinkage} return a GlycosidicLinkage object
	         */
	
	    }, {
	        key: 'getGlycosidicLinkagebyID',
	        value: function getGlycosidicLinkagebyID(id) {
	            var glyLinkage = this.getEdgeById(id);
	            if (glyLinkage instanceof _GlycosidicLinkage2.default) {
	                return glyLinkage;
	            } else {
	                throw 'This method can only return GlycosidicLinkage object';
	            }
	        }
	
	        /**
	         * Return the SubstituentLinkage with the id specified by the user otherwise throw an error.
	         * @param {string} id The Edge id
	         * @returns {SubstituentLinkage} return a SubstituentLinkage object
	         */
	
	    }, {
	        key: 'getSubstituentLinkagebyId',
	        value: function getSubstituentLinkagebyId(id) {
	            var subLinkage = this.getEdgeById(id);
	            if (subLinkage instanceof _SubstituentLinkage2.default) {
	                return subLinkage;
	            } else {
	                throw 'This method can only return SubstituentLinkage object';
	            }
	        }
	
	        /**
	         * Return the GlycosidicLinkage within sourceNode and targhetNode
	         * @param {string} id The Edge id
	         * @returns {GlycosidicLinkage} return a GlycosidicLinkage object
	         */
	
	    }, {
	        key: 'getGlycosidicLinkage',
	        value: function getGlycosidicLinkage(sourceNode, targetNode) {
	            var glyLinkage = this.getEdge(sourceNode, targetNode);
	            if (glyLinkage instanceof _GlycosidicLinkage2.default) {
	                return glyLinkage;
	            } else {
	                throw 'This method can only return GlycosidicLinkage object';
	            }
	        }
	
	        /**
	         * Return the SubstituentLinkage within sourceNode and targhetNode
	         * @param {string} id The Edge id
	         * @returns {SubstituentLinkage} return a SubstituentLinkage object
	         */
	
	    }, {
	        key: 'getSubstituentLinkage',
	        value: function getSubstituentLinkage(sourceNode, targetNode) {
	            var subLinkage = this.getEdgeById(sourceNode, targetNode);
	            if (subLinkage instanceof _SubstituentLinkage2.default) {
	                return subLinkage;
	            } else {
	                throw 'This method can only return SubstituentLinkage object';
	            }
	        }
	
	        /**
	         * Add a new Monosaccharide to the Glycan with a pre-built Glycosidic Linkage.
	         * @param {Monosaccharide} childNode The monosaccharide to add
	         * @param {GlycosidicLinkage} glycosidicLinkage The edge to add
	         * @returns {Monosaccharide} The monosaccharide added to the Glycan.
	         */
	
	    }, {
	        key: 'addMonosaccharide',
	        value: function addMonosaccharide(childNode, glycosidicLinkage) {
	            if (childNode instanceof _Monosaccharide2.default && glycosidicLinkage instanceof _GlycosidicLinkage2.default) {
	                this.graph.addNode(childNode);
	                this.graph.addEdge(glycosidicLinkage);
	            } else {
	                throw 'Error: the childNode must be a Monosaccharide and the Linkage must be a GlycosidicLinkage';
	            }
	
	            return childNode;
	        }
	
	        /**
	         * Add a new Substituent to the Glycan with a pre-built Substituent Linkage
	         * @param {Substituent} childNode The substituent to add
	         * @param {SubstituentLinkage}substituentLinkage The edge to add
	         * @returns {Substituent} The substituent added to the Substituent.
	         */
	
	    }, {
	        key: 'addSubstituent',
	        value: function addSubstituent(childNode, substituentLinkage) {
	            if (childNode instanceof _Substituent2.default && substituentLinkage instanceof _SubstituentLinkage2.default) {
	                try {
	                    this.graph.addNode(childNode);
	                    this.graph.addEdge(substituentLinkage);
	                } catch (err) {
	                    throw 'Cannot add node and edge to the graph: ' + err;
	                }
	            } else {
	                throw 'The childNode must be a Substituent and the Linkage must be a SubstituentLinkage';
	            }
	            return childNode;
	        }
	
	        /**
	         * Add a new Monosaccharide to the Glycan without Glycosidic Linkage Object
	         * @param {Node} parentNode The parentNode in the graph.(Monosaccharide or Substituent)
	         * @param {Monosaccharide} childNode The Monosaccharide to add
	         * @param {AcceptorPosition} AcceptorPosition The AcceptorPosition in the Glycosidic Linkage
	         * @param {DonorPosition} donorPosition The donorPosition in the Glycosidic Linkage
	         * @return {GlycosidicLinkage} the linkage created to add the node.
	         */
	
	    }, {
	        key: 'addMonosaccharideWithLinkage',
	        value: function addMonosaccharideWithLinkage(parentNode, childNode, acceptorPosition, donorPosition) {
	            if (childNode instanceof _Monosaccharide2.default) {
	                try {
	                    var glycosidicLinkage = new _GlycosidicLinkage2.default('GlyLin:' + parentNode.getId() + '-' + childNode.getId(), parentNode, childNode, acceptorPosition, donorPosition);
	                    this.addMonosaccharide(childNode, glycosidicLinkage);
	                    return glycosidicLinkage;
	                } catch (err) {
	                    throw 'Cannot Create a Glycosidic Linkage: ' + err;
	                }
	            }
	        }
	
	        /**
	         * Add a new Monosaccharide to the Glycan without Glycosidic Linkage Object
	         * @param {Node} parentNode The parentNode in the graph.(Monosaccharide or Substituent)
	         * @param {Substituent} childNode The Monosaccharide to add
	         * @param {DonorPosition} donorPosition The donorPosition in the Glycosidic Linkage
	         * @return {SubstituentLinkage} the linkage created to add the node.
	         */
	
	    }, {
	        key: 'addSubstituentWithLinkage',
	        value: function addSubstituentWithLinkage(parentNode, childNode, donorPosition) {
	            if (childNode instanceof _Substituent2.default) {
	                try {
	                    var substituentLinkage = new _SubstituentLinkage2.default('SubLin:' + parentNode.getId() + '-' + childNode.getId(), parentNode, childNode, donorPosition);
	                    this.addSubstituent(childNode, substituentLinkage);
	                    return substituentLinkage;
	                } catch (err) {
	                    throw 'Cannot Create a Glycosidic Linkage: ' + err;
	                }
	            }
	        }
	        /**
	         * Remove a node from the Glycan graph. This method works with Substituents and Monosaccharides
	         * @param {string} id The id of the node to be removed
	         * @returns {Graph} Updated graph.
	         */
	
	    }, {
	        key: 'removeNodeById',
	        value: function removeNodeById(id) {
	            try {
	                var updatedGraph = this.graph.dropNode(id);
	                return updatedGraph;
	            } catch (err) {
	                throw 'Error removing the Node: ' + err;
	            }
	        }
	
	        /**
	         * Remove a Monosaccharide for the Glycan. It removes all the edges connected to the Monosaccharide.
	         * Be carefull: The children will be detached from the tree.
	         * @param {Monosaccharide} childNode The monosaccharide to be removed
	         * @returns {Graph} Updated graph
	         */
	
	    }, {
	        key: 'removeMonosaccharide',
	        value: function removeMonosaccharide(childNode) {
	            if (childNode instanceof _Monosaccharide2.default) {
	                try {
	                    var updatedGraph = this.removeNodeById(childNode.id);
	                    return updatedGraph;
	                } catch (err) {
	                    throw 'Error removing Monosaccharide: ' + err;
	                }
	            } else {
	                throw 'This method can remove only monosaccharide from the Glycan';
	            }
	        }
	
	        /**
	         * Remove a Substituent for the Glycan. It removes all the edges connected to the Substituent.
	         * Be carefull: The children will be detached from the tree.
	         * @param {Substituent} childNode The substituent to be removed
	         * @returns {Graph} Updated graph
	         */
	
	    }, {
	        key: 'removeSubstituent',
	        value: function removeSubstituent(childNode) {
	            if (childNode instanceof _Substituent2.default) {
	                try {
	                    var updatedGraph = this.graph.dropNode(childNode.id);
	                    return updatedGraph;
	                } catch (err) {
	                    throw 'Error removing Substituent: ' + err;
	                }
	            } else {
	                throw 'This method can remove only substituent from the Glycan';
	            }
	        }
	
	        /**
	         * Remove a edge from the Glycan graph. This method works with Substituents and Monosaccharides
	         * @param {string} id The id of the linkage to be removed
	         * @returns {Graph} Updated graph.
	         */
	
	    }, {
	        key: 'removeLinkageById',
	        value: function removeLinkageById(id) {
	            try {
	                var updatedGraph = this.graph.dropEdge(id);
	                return updatedGraph;
	            } catch (err) {
	                throw 'Error removing the Node: ' + err;
	            }
	        }
	
	        /**
	         * Remove a GlycosidicLinkage for the Glycan.
	         * @param {GlycosidicLinkage} glycosidicLinkage The glycosidicLinkage to be removed
	         * @returns {Graph} Updated graph
	         */
	
	    }, {
	        key: 'removeGlycosidicLinkage',
	        value: function removeGlycosidicLinkage(linkage) {
	            if (linkage instanceof _GlycosidicLinkage2.default) {
	                try {
	                    var updatedGraph = this.removeLinkageById(linkage.id);
	                    return updatedGraph;
	                } catch (err) {
	                    throw 'Error removing GlycosidicLinkage: ' + err;
	                }
	            } else {
	                throw 'This method can remove only GlycosidicLinkages from the Glycan';
	            }
	        }
	
	        /**
	         * Remove a SubstituentLinkage for the Glycan.
	         * @param {SubstituentLinkage} childNode The substituentLinkage to be removed
	         * @returns {Graph} Updated graph
	         */
	
	    }, {
	        key: 'removeSubstituentLinkage',
	        value: function removeSubstituentLinkage(linkage) {
	            if (linkage instanceof _SubstituentLinkage2.default) {
	                try {
	                    var updatedGraph = this.removeLinkageById(linkage.id);
	                    return updatedGraph;
	                } catch (err) {
	                    throw 'Error removing Substituent: ' + err;
	                }
	            } else {
	                throw 'This method can remove only substituent from the Glycan';
	            }
	        }
	
	        /**
	         * This method reads an object and adds a structure.
	         * Please use id root for the root node!
	         * Here is an example:
	         *
	         *   var myGlycan = new Glycan();
	         *   myGlycan.addStructure({
	         *     nodes: [
	         *       {
	         *         id: 'root',
	         *         nodeType: 'Monosaccharide',
	         *         monosaccharideType: ''
	         *         anomericity: '',
	         *         isomer: '',
	         *         ringType: ''
	         *       },
	         *       {
	         *         id: 'n1',
	         *         nodeType: 'Monosaccharide',
	         *         monosaccharideType: ''
	         *         anomericity: '',
	         *         isomer: '',
	         *         ringType: ''
	         *       }
	         *     ],
	         *     edges: [
	         *       {
	         *         id: 'e0',
	         *         source: 'root',
	         *         target: 'n1',
	         *         donorPosition: '',
	         *         acceptorPosition: '',
	         *         linkageType:
	         *       }
	         *     ]
	         *   });
	         *
	         * @param  {object} g The graph object.
	         * @return {object}   The graph instance.
	         */
	
	    }, {
	        key: 'addStructure',
	        value: function addStructure(structure) {
	            var i, a, l;
	
	            a = g.nodes || [];
	            for (i = 0, l = a.length; i < l; i++) {
	                this.addNode(a[i]);
	            }a = g.edges || [];
	            for (i = 0, l = a.length; i < l; i++) {
	                this.addEdge(a[i]);
	            }return this;
	        }
	
	        /**
	         * The actual size of the Glycan in terms of nodes.
	         * Each monosaccharide and substituent count as 1
	         * @returns {number} The size of the Glycan
	         */
	
	    }, {
	        key: 'size',
	        value: function size() {
	            return this.graph.nodes().length;
	        }
	
	        /**
	         * Clear the Glycan object and set Root to undefined.
	         * Only the Id remains set (Id is immutable).
	         */
	
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.rootSet = false;
	            this.rootNode = undefined;
	            this.graph.clear();
	        }
	    }]);
	
	    return Glycan;
	}(_createjsEaseljs2.default.Container);
	
	exports.default = Glycan;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:  Davide Alocci
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Version: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Glycan = __webpack_require__(28);
	
	var _Glycan2 = _interopRequireDefault(_Glycan);
	
	var _Anomericity = __webpack_require__(7);
	
	var _Anomericity2 = _interopRequireDefault(_Anomericity);
	
	var _MonosaccharideType = __webpack_require__(10);
	
	var _MonosaccharideType2 = _interopRequireDefault(_MonosaccharideType);
	
	var _Isomer = __webpack_require__(8);
	
	var _Isomer2 = _interopRequireDefault(_Isomer);
	
	var _RingType = __webpack_require__(11);
	
	var _RingType2 = _interopRequireDefault(_RingType);
	
	var _SubstituentType = __webpack_require__(12);
	
	var _SubstituentType2 = _interopRequireDefault(_SubstituentType);
	
	var _Monosaccharide = __webpack_require__(25);
	
	var _Monosaccharide2 = _interopRequireDefault(_Monosaccharide);
	
	var _AcceptorPosition = __webpack_require__(5);
	
	var _AcceptorPosition2 = _interopRequireDefault(_AcceptorPosition);
	
	var _DonorPosition = __webpack_require__(9);
	
	var _DonorPosition2 = _interopRequireDefault(_DonorPosition);
	
	var _Substituent = __webpack_require__(27);
	
	var _Substituent2 = _interopRequireDefault(_Substituent);
	
	var _SubstituentLinkage = __webpack_require__(24);
	
	var _SubstituentLinkage2 = _interopRequireDefault(_SubstituentLinkage);
	
	var _SubstituentsGlycoCT = __webpack_require__(13);
	
	var _SubstituentsGlycoCT2 = _interopRequireDefault(_SubstituentsGlycoCT);
	
	var _MonosaccharideGlycoCT = __webpack_require__(15);
	
	var _MonosaccharideGlycoCT2 = _interopRequireDefault(_MonosaccharideGlycoCT);
	
	var _SubstituentsPositions = __webpack_require__(14);
	
	var _SubstituentsPositions2 = _interopRequireDefault(_SubstituentsPositions);
	
	var _RepeatingUnit = __webpack_require__(26);
	
	var _RepeatingUnit2 = _interopRequireDefault(_RepeatingUnit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GlycoCTParser = function () {
	    function GlycoCTParser(formula) {
	        _classCallCheck(this, GlycoCTParser);
	
	        this.formula = formula;
	    }
	
	    // Used to generate unique IDs
	
	
	    _createClass(GlycoCTParser, [{
	        key: 'randomString',
	        value: function randomString(length) {
	            // Possible chars in the generated string
	            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');
	
	            if (!length) {
	                // If no length specified, get a random length
	                length = Math.floor(Math.random() * chars.length);
	            }
	
	            var str = '';
	            for (var i = 0; i < length; i++) {
	                // Add random chars till length is the one specified
	                str += chars[Math.floor(Math.random() * chars.length)];
	            }
	            return str;
	        }
	
	        /**
	         * Gets SubstituentType from name
	         * @param name
	         */
	
	    }, {
	        key: 'getSub',
	        value: function getSub(name) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = _SubstituentType2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var sub = _step.value;
	
	                    if (sub.name === name) return sub;
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	
	        /**
	         * Get MonosaccharideType from name
	         * @param name
	         */
	
	    }, {
	        key: 'getMono',
	        value: function getMono(name) {
	            switch (name) {
	                case "KdnNAc":
	                    return _MonosaccharideType2.default.Neu5Ac;
	                case "KdnNGc":
	                    return _MonosaccharideType2.default.Neu5Gc;
	                case "KdnN":
	                    return _MonosaccharideType2.default.Neu;
	            }
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = _MonosaccharideType2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var mono = _step2.value;
	
	                    if (mono.name === name) return mono;
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	
	        /**
	         * Gets MonosaccharideGlycoCT from stemType (e.g glc-HEX) and transform
	         * @param stemType
	         * @param transform
	         * @returns {*}
	         */
	
	    }, {
	        key: 'getMonoType',
	        value: function getMonoType(stemType, transform) {
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = _MonosaccharideGlycoCT2.default[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var mono = _step3.value;
	
	                    if (mono.glycoct === stemType && mono.transform === transform) {
	                        return mono;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            return undefined;
	        }
	
	        /**
	         * Adds one residue to the glycan
	         * @param residue e.g : ["3b","glc-HEX-1","5"]
	         * @param donorPosition
	         * @param acceptorPosition
	         * @param repeatingUnit : String
	         * @returns {*}
	         */
	
	    }, {
	        key: 'createResidue',
	        value: function createResidue(residue, donorPosition, acceptorPosition, repeatingUnit) {
	            // If we generate a Monosaccharide
	            if (residue[0].substring(residue[0].length - 1) === "b") {
	
	                // Parse anomericity
	                var anomericity;
	                var _iteratorNormalCompletion4 = true;
	                var _didIteratorError4 = false;
	                var _iteratorError4 = undefined;
	
	                try {
	                    for (var _iterator4 = _Anomericity2.default[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                        var anom = _step4.value;
	
	                        if (residue[1].substring(0, 1) === "a") {
	                            anomericity = _Anomericity2.default.ALPHA;
	                        } else if (residue[1].substring(0, 1) === "b") {
	                            anomericity = _Anomericity2.default.BETA;
	                        } else {
	                            anomericity = _Anomericity2.default.UNDEFINED;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError4 = true;
	                    _iteratorError4 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                            _iterator4.return();
	                        }
	                    } finally {
	                        if (_didIteratorError4) {
	                            throw _iteratorError4;
	                        }
	                    }
	                }
	
	                var dashSplit = residue[1].split("-");
	                var stemType = dashSplit[1]; // Also contains isomer as the first char
	
	                // Parse Isomer
	                var isomer;
	                var _iteratorNormalCompletion5 = true;
	                var _didIteratorError5 = false;
	                var _iteratorError5 = undefined;
	
	                try {
	                    for (var _iterator5 = _Isomer2.default[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                        var isom = _step5.value;
	
	                        if (stemType.substring(0, 1) === "x") {
	                            isomer = _Isomer2.default.UNDEFINED;
	                        }
	                        if (stemType.substring(0, 1) === isom.name.toLowerCase()) {
	                            isomer = isom;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError5 = true;
	                    _iteratorError5 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                            _iterator5.return();
	                        }
	                    } finally {
	                        if (_didIteratorError5) {
	                            throw _iteratorError5;
	                        }
	                    }
	                }
	
	                var glycoct = residue[1].substring(3, residue[1].length - 2);
	                /* As we split on ":", the first part of the first transformation is stuck with the second part of ring type.
	                   e.g: 1b:b-dman-HEX-1:5|6:a
	                   -> residue = ["1b","b-dman-HEX-1","5|6","a"]
	                */
	                var firstTransform = residue[2].split("|"); // Contains ringType and first part of first transformation
	                var transform = "";
	                if (firstTransform.length > 1) // at least one transformation
	                    {
	                        // We rebuild the whole transformation
	                        transform = "|" + firstTransform[1];
	                        for (var k = 3; k < residue.length; k++) {
	                            transform += ":" + residue[k];
	                        }
	                    }
	
	                // Fetch the Monosaccharide type in the database considering the given glycoct + transform combination
	                // First we try the whole name
	                var monoType = this.getMonoType(glycoct, transform);
	                if (monoType === undefined) {
	                    // Second, we check if the monosaccharide is among the simple HEX cases (e.g: 1b:b-HEX-1:4 -> they have no stemType, just the superclass HEX)
	                    glycoct = residue[1].substring(2, residue[1].length - 2);
	                    monoType = this.getMonoType(glycoct, transform);
	                    if (monoType === undefined) {
	                        // Third, we check if the monosaccharide is among the exceptions for the ring type (Kdn for example include ringType in their formula: 1b:b-lgro-dgal-NON-2:6)
	                        glycoct = residue[1].substring(3) + ":" + firstTransform[0];
	                        monoType = this.getMonoType(glycoct, transform);
	                        if (monoType === undefined) {
	                            // Finally, the monosaccharide is not known
	                            monoType = _MonosaccharideGlycoCT2.default.Unknown;
	                        }
	                    }
	                }
	                monoType = _MonosaccharideType2.default[monoType.name];
	
	                // Then we parse the ringType
	                var ringStop = residue[2].substring(0, 1);
	                var ringType;
	                if (ringStop === "4") {
	                    ringType = _RingType2.default.F;
	                } else if (ringStop === "5") {
	                    ringType = _RingType2.default.P;
	                } else {
	                    ringType = _RingType2.default.UNDEFINED;
	                }
	
	                var nodeId = this.randomString(7);
	                // Creating the monosaccharide object
	                var node = new _Monosaccharide2.default(nodeId, monoType, anomericity, isomer, ringType);
	                // Assign to repeatingUnit if the node is in one
	                if (repeatingUnit !== undefined) {
	                    node.repeatingUnit = repeatingUnit;
	                }
	                // If donorPosition and acceptorPosition are "r", we are building the root
	                if (donorPosition === "r" && acceptorPosition === "r") {
	                    this.glycan = new _Glycan2.default("Glycan", node);
	                } else {
	                    // Parse the AcceptorPosition
	                    var ac;
	                    var _iteratorNormalCompletion6 = true;
	                    var _didIteratorError6 = false;
	                    var _iteratorError6 = undefined;
	
	                    try {
	                        for (var _iterator6 = _AcceptorPosition2.default[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                            var anomC = _step6.value;
	
	                            if (acceptorPosition === "?") {
	                                ac = _AcceptorPosition2.default.UNDEFINED;
	                            }
	                            if (parseInt(acceptorPosition) === anomC.value) {
	                                ac = anomC;
	                            }
	                        }
	                        // Parse the DonorPosition
	                    } catch (err) {
	                        _didIteratorError6 = true;
	                        _iteratorError6 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                                _iterator6.return();
	                            }
	                        } finally {
	                            if (_didIteratorError6) {
	                                throw _iteratorError6;
	                            }
	                        }
	                    }
	
	                    var lc;
	                    var _iteratorNormalCompletion7 = true;
	                    var _didIteratorError7 = false;
	                    var _iteratorError7 = undefined;
	
	                    try {
	                        for (var _iterator7 = _DonorPosition2.default[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                            var linkedC = _step7.value;
	
	                            if (donorPosition === "?") {
	                                lc = _DonorPosition2.default.UNDEFINED;
	                            }
	                            if (parseInt(donorPosition) === linkedC.value) {
	                                lc = linkedC;
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError7 = true;
	                        _iteratorError7 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                                _iterator7.return();
	                            }
	                        } finally {
	                            if (_didIteratorError7) {
	                                throw _iteratorError7;
	                            }
	                        }
	                    }
	
	                    this.glycan.addMonosaccharideWithLinkage(this.clickedNode, node, ac, lc);
	                }
	                // Return the nodeId so we can access the node once it's been created
	                return nodeId;
	            } else if (residue[0].substring(residue[0].length - 1) === "s") {
	                // We're creating a substituent
	                // Parse the sub name
	                var subName = residue[1];
	                var substituentType;
	                var _iteratorNormalCompletion8 = true;
	                var _didIteratorError8 = false;
	                var _iteratorError8 = undefined;
	
	                try {
	                    for (var _iterator8 = _SubstituentsGlycoCT2.default[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                        var sub = _step8.value;
	
	                        if (subName === sub.glycoct) {
	                            subName = sub.name;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError8 = true;
	                    _iteratorError8 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                            _iterator8.return();
	                        }
	                    } finally {
	                        if (_didIteratorError8) {
	                            throw _iteratorError8;
	                        }
	                    }
	                }
	
	                var _iteratorNormalCompletion9 = true;
	                var _didIteratorError9 = false;
	                var _iteratorError9 = undefined;
	
	                try {
	                    for (var _iterator9 = _SubstituentType2.default[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                        var subType = _step9.value;
	
	                        if (subName.toLowerCase() === subType.name.toLowerCase()) {
	                            substituentType = subType;
	                        }
	                    }
	
	                    // Parse sub's donorPosition
	                } catch (err) {
	                    _didIteratorError9 = true;
	                    _iteratorError9 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                            _iterator9.return();
	                        }
	                    } finally {
	                        if (_didIteratorError9) {
	                            throw _iteratorError9;
	                        }
	                    }
	                }
	
	                var lcs;
	                var _iteratorNormalCompletion10 = true;
	                var _didIteratorError10 = false;
	                var _iteratorError10 = undefined;
	
	                try {
	                    for (var _iterator10 = _DonorPosition2.default[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	                        var linkedCS = _step10.value;
	
	                        if (donorPosition === "?") {
	                            lcs = _DonorPosition2.default.UNDEFINED;
	                        }
	                        if (parseInt(donorPosition) === linkedCS.value) {
	                            lcs = linkedCS;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError10 = true;
	                    _iteratorError10 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
	                            _iterator10.return();
	                        }
	                    } finally {
	                        if (_didIteratorError10) {
	                            throw _iteratorError10;
	                        }
	                    }
	                }
	
	                var subId = this.randomString(7); // If the Mono-Sub combination has a predefined code, change the monosaccharide
	                // Create substituent Object
	                var substituent = new _Substituent2.default(subId, substituentType);
	                // Check if when we add the sub at this particular position we get a new parent monosaccharide type
	                // e.g Gal + NAc(donorPosition=2) => GalNAc
	                var newType = this.getMono(this.clickedNode.monosaccharideType.name + this.getSub(subName).label);
	                if (newType && _SubstituentsPositions2.default[newType.name].position == donorPosition) {
	                    this.updateNodeType(this.clickedNode, newType);
	                } else {
	                    var subLinkage = new _SubstituentLinkage2.default(this.randomString(7), this.clickedNode, substituent, lcs);
	                    this.glycan.addSubstituent(substituent, subLinkage);
	                }
	            }
	        }
	
	        /**
	         * Find a node in the glycan, and change its type
	         * @param node
	         * @param type
	         */
	
	    }, {
	        key: 'updateNodeType',
	        value: function updateNodeType(node, type) {
	            var _iteratorNormalCompletion11 = true;
	            var _didIteratorError11 = false;
	            var _iteratorError11 = undefined;
	
	            try {
	                for (var _iterator11 = this.glycan.graph.nodes()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	                    var glycanNode = _step11.value;
	
	                    if (node === glycanNode) {
	                        glycanNode.monosaccharideType = type;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError11 = true;
	                _iteratorError11 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
	                        _iterator11.return();
	                    }
	                } finally {
	                    if (_didIteratorError11) {
	                        throw _iteratorError11;
	                    }
	                }
	            }
	        }
	
	        /**
	         * Main function of the class, used to parse the formula
	         * @returns {*}
	         */
	
	    }, {
	        key: 'parseGlycoCT',
	        value: function parseGlycoCT() {
	            if (this.formula === "") {
	                return new _Glycan2.default("Glycan");
	            }
	            // Get the text lines under the RES section
	            var res = this.getSection("RES", this.formula);
	            var links;
	            if (!this.formula.split("LIN")[1]) // If the formula is only one node (no link)
	                {
	                    if (!res[0]) // wrong formula
	                        {
	                            return new _Glycan2.default("Glycan");
	                        }
	                    // Create the root (DonorPosition and AcceptorPosition of root are unknwown from GlycoCT formula)
	                    this.createResidue(res[0].split(":"), "r", "r");
	                    return this.glycan;
	                } else {
	                // Get the text lines under the LIN section
	                links = this.getSection("LIN", this.formula);
	            }
	            // Get the rep section
	            var repSection = this.getSection("REP", this.formula);
	            // Get each rep from the rep section
	            var reps = this.getRepeatingUnit(repSection);
	
	            // This will contain the id of the created nodes
	            var nodesIds = {};
	
	            // This will contain the RepeatingUnit objects, and the nodes that are in it [[RepObject,[nodes...]],...]
	            var repInfo = [];
	
	            // If there are some Repeating Units in the formula
	            if (reps.length != 0) {
	                // Use the function to insert the residues and links lines from the REPS to the main RES section
	                // so that we get rid of the REP section and finally have only RES and LIN sections, with mixed up indices (doesn't matter)
	                var merge = this.mergeRep(reps, res, links);
	                res = merge[0];
	                links = merge[1];
	                repInfo = merge[2];
	            }
	
	            // We finally call the function that reads through the lines and calls the function to create nodes
	            this.generateNodes(links, nodesIds, res, repInfo);
	
	            return this.glycan;
	        }
	
	        /**
	         * Function that inserts the residues and links from the REPs sections into the main RES and LIN sections
	         * Outputs an array of 3 arrays: the new RES section, the new LIN section, repInfo which contains the RepeatingUnit objects and which nodes belongs to them
	         * @param reps
	         * @param res
	         * @param links
	         * @returns {[*,*,*]}
	         */
	
	    }, {
	        key: 'mergeRep',
	        value: function mergeRep(reps, res, links) {
	            var repeatingUnitsObjects = []; // Contains all the instanciated Rep objects
	            var repeatingUnit;
	            var repInfo = {}; // Shows which node is associated to which Rep
	
	            // First merge the RES
	            var finalRes = [];
	            var repUnitRead = 0;
	            var repUnitIndices = {};
	            for (var i in res) {
	                if (res[i].split(":")[0].indexOf("r") == -1) // Not a repeating unit
	                    {
	                        finalRes.push(res[i]);
	                    } else {
	                    repUnitIndices[parseInt(i) + 1] = reps[repUnitRead];
	                    finalRes = finalRes.concat(reps[repUnitRead].res);
	                    repUnitRead++;
	                }
	            }
	
	            // Then links
	            var finalLinks = [];
	            repUnitRead = 0;
	            var allLinks = [];
	            // STEP 1: Insert all the links
	            for (i in links) {
	                allLinks.push(links[i]);
	                finalLinks.push(links[i]);
	                if (this.isTargetARep(links[i], repUnitIndices)) // target node is a repeating unit
	                    {
	                        finalLinks = finalLinks.concat(reps[repUnitRead].lin);
	                        repUnitRead++;
	                    }
	            }
	
	            // STEP 2: Update the links:
	            // If the target of a link is a repeating unit, change to the first residue of the unit (entering the unit)
	            // If the source is a repeating unit, change to the ending residue (leaving the unit)
	            var repeatingUnitObject;
	            var createdUnits = [];
	            var repNodesIds;
	            for (i in finalLinks) {
	                if (this.isTargetARep(finalLinks[i], repUnitIndices)) // If target is Rep, replace its index by its entry Node
	                    {
	                        if (!createdUnits.includes(this.getLinkTarget(finalLinks[i]))) {
	                            createdUnits.push(this.getLinkTarget(finalLinks[i]));
	                            repeatingUnit = repUnitIndices[this.getLinkTarget(finalLinks[i])];
	                            repeatingUnitObject = new _RepeatingUnit2.default(this.randomString(7), [], repeatingUnit.info.min, repeatingUnit.info.max, repeatingUnit.info.entry, repeatingUnit.info.exit, repeatingUnit.info.donorPosition, repeatingUnit.info.acceptorPosition);
	                            repNodesIds = this.getRepNodesIds(repeatingUnit.res);
	                            repeatingUnitsObjects.push([repeatingUnitObject, repNodesIds]);
	                        }
	                        finalLinks[i] = this.updateLinkTarget(finalLinks[i], repUnitIndices[this.getLinkTarget(finalLinks[i])].info.entry);
	                    }
	                if (this.isSourceARep(finalLinks[i], repUnitIndices)) // If target is Rep, replace its index by its entry Node
	                    {
	                        if (!createdUnits.includes(this.getLinkSource(finalLinks[i]))) {
	                            createdUnits.push(this.getLinkSource(finalLinks[i]));
	                            repeatingUnit = repUnitIndices[this.getLinkSource(finalLinks[i])];
	                            repeatingUnitObject = new _RepeatingUnit2.default(this.randomString(7), [], repeatingUnit.info.min, repeatingUnit.info.max, repeatingUnit.info.entry, repeatingUnit.info.exit, repeatingUnit.info.donorPosition, repeatingUnit.info.acceptorPosition);
	                            repNodesIds = this.getRepNodesIds(repeatingUnit.res);
	                            repeatingUnitsObjects.push([repeatingUnitObject, repNodesIds]);
	                        }
	                        finalLinks[i] = this.updateLinkSource(finalLinks[i], repUnitIndices[this.getLinkSource(finalLinks[i])].info.exit);
	                    }
	            }
	
	            return [finalRes, finalLinks, repeatingUnitsObjects];
	        }
	
	        /**
	         * Get the index of all the nodes within an array of residues. Used to get the nodes in a specific rep
	         * @param res
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'getRepNodesIds',
	        value: function getRepNodesIds(res) {
	            var output = [];
	            var _iteratorNormalCompletion12 = true;
	            var _didIteratorError12 = false;
	            var _iteratorError12 = undefined;
	
	            try {
	                for (var _iterator12 = res[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	                    var r = _step12.value;
	
	                    output.push(r.split(/\w:/)[0]);
	                }
	            } catch (err) {
	                _didIteratorError12 = true;
	                _iteratorError12 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
	                        _iterator12.return();
	                    }
	                } finally {
	                    if (_didIteratorError12) {
	                        throw _iteratorError12;
	                    }
	                }
	            }
	
	            return output;
	        }
	    }, {
	        key: 'getLinkSource',
	        value: function getLinkSource(link) {
	            return link.split(/[on]/)[0].split(":")[1];
	        }
	    }, {
	        key: 'getLinkTarget',
	        value: function getLinkTarget(link) {
	            return link.split(")")[1].split(/[dn]/)[0];
	        }
	    }, {
	        key: 'updateLinkTarget',
	        value: function updateLinkTarget(link, target) {
	            var output = link.split(")")[0] + ")" + target + "d";
	            return output;
	        }
	    }, {
	        key: 'updateLinkSource',
	        value: function updateLinkSource(link, source) {
	            var output = link.split(":")[0] + ":" + source + "o" + link.split(/[on]/)[1];
	            return output;
	        }
	
	        // Checks if the target of the link is a repeating unit in the main RES section
	
	    }, {
	        key: 'isTargetARep',
	        value: function isTargetARep(link, repUnitIndices) {
	            var target = link.split(")")[1].split(/[dn]/)[0];
	            if (repUnitIndices[target]) return true;
	            return false;
	        }
	
	        // Checks if the source of the link is a repeating unit in the main RES section
	
	    }, {
	        key: 'isSourceARep',
	        value: function isSourceARep(link, repUnitIndices) {
	            var source = link.split(/[on]/)[0].split(":")[1];
	            if (repUnitIndices[source]) return true;
	            return false;
	        }
	
	        // Get a node's RepeatingUnit object
	
	    }, {
	        key: 'findMatchingRep',
	        value: function findMatchingRep(sourceId, repInfo) {
	            var _iteratorNormalCompletion13 = true;
	            var _didIteratorError13 = false;
	            var _iteratorError13 = undefined;
	
	            try {
	                for (var _iterator13 = repInfo[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
	                    var pair = _step13.value;
	
	                    if (pair[1].includes("" + sourceId)) {
	                        return pair[0];
	                    }
	                }
	            } catch (err) {
	                _didIteratorError13 = true;
	                _iteratorError13 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion13 && _iterator13.return) {
	                        _iterator13.return();
	                    }
	                } finally {
	                    if (_didIteratorError13) {
	                        throw _iteratorError13;
	                    }
	                }
	            }
	
	            return undefined;
	        }
	
	        /**
	         * Reads through all the lines
	         * @param links
	         * @param nodesIds
	         * @param res
	         * @param repInfo
	         */
	
	    }, {
	        key: 'generateNodes',
	        value: function generateNodes(links, nodesIds, res, repInfo) {
	            var repeatingUnit;
	            var residueListById = {};
	
	            // Fill in the residueListById array
	            var _iteratorNormalCompletion14 = true;
	            var _didIteratorError14 = false;
	            var _iteratorError14 = undefined;
	
	            try {
	                for (var _iterator14 = res[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
	                    var residue = _step14.value;
	
	                    residueListById[residue.split(/\w:/)[0]] = residue.split(":");
	                }
	                // Now we read the links to build the whole glycan
	            } catch (err) {
	                _didIteratorError14 = true;
	                _iteratorError14 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion14 && _iterator14.return) {
	                        _iterator14.return();
	                    }
	                } finally {
	                    if (_didIteratorError14) {
	                        throw _iteratorError14;
	                    }
	                }
	            }
	
	            for (var linkId in links) {
	                if (links[linkId] !== "") {
	                    // If the link is not empty
	                    var link = links[linkId];
	                    var sourceId = parseInt(link.split(":")[1].split("(")[0]);
	                    var nodeId;
	                    if (residueListById[sourceId] !== "") // The source node hasn't been created, so this is the root
	                        {
	                            repeatingUnit = this.findMatchingRep(sourceId, repInfo);
	                            nodeId = this.createResidue(residueListById[sourceId], "r", "r", repeatingUnit);
	                            residueListById[sourceId] = "";
	                            nodesIds[sourceId] = nodeId;
	                        }
	                    // Then we create the target node of the link
	                    var targetId = parseInt(link.split(")")[1]);
	                    var linkages = link.split(/[\(\)]+/)[1];
	                    var donorPosition, acceptorPosition;
	                    donorPosition = linkages.split("+")[0] === "-1" ? "?" : linkages.split("+")[0];
	                    acceptorPosition = linkages.split("+")[1] === "-1" ? "?" : linkages.split("+")[1];
	                    var _iteratorNormalCompletion15 = true;
	                    var _didIteratorError15 = false;
	                    var _iteratorError15 = undefined;
	
	                    try {
	                        for (var _iterator15 = this.glycan.graph.nodes()[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
	                            var node = _step15.value;
	                            // clickedNode = sourceNode
	                            if (node.id === nodesIds[sourceId]) {
	                                this.clickedNode = node;
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError15 = true;
	                        _iteratorError15 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion15 && _iterator15.return) {
	                                _iterator15.return();
	                            }
	                        } finally {
	                            if (_didIteratorError15) {
	                                throw _iteratorError15;
	                            }
	                        }
	                    }
	
	                    repeatingUnit = this.findMatchingRep(targetId, repInfo);
	                    nodeId = this.createResidue(residueListById[targetId], donorPosition, acceptorPosition, repeatingUnit);
	                    residueListById[targetId] = "";
	                    nodesIds[targetId] = nodeId;
	                }
	            }
	        }
	    }, {
	        key: 'findNodeById',
	        value: function findNodeById(id) {
	            var _iteratorNormalCompletion16 = true;
	            var _didIteratorError16 = false;
	            var _iteratorError16 = undefined;
	
	            try {
	                for (var _iterator16 = this.glycan.graph.nodes()[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
	                    var node = _step16.value;
	
	                    if (node.id == id) {
	                        return node;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError16 = true;
	                _iteratorError16 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion16 && _iterator16.return) {
	                        _iterator16.return();
	                    }
	                } finally {
	                    if (_didIteratorError16) {
	                        throw _iteratorError16;
	                    }
	                }
	            }
	
	            return undefined;
	        }
	
	        /**
	         * Returns an array of lines that correspond to the entire requested section (RES, LIN, REP...)
	         * @param section
	         * @param formula
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'getSection',
	        value: function getSection(section, formula) {
	            var sections = ["RES", "LIN", "REP", "UND", "ALT"];
	            sections.splice(sections.indexOf(section), 1);
	            if (section === "REP") {
	                sections.splice(0, 2); // Remove RES and LIN because in REP we want to keep them
	            }
	            var formulaArray;
	            if (!(formula instanceof Array)) {
	                formulaArray = formula.split("\n");
	            } else {
	                formulaArray = formula;
	            }
	            var output = [];
	            var flag = false;
	            var _iteratorNormalCompletion17 = true;
	            var _didIteratorError17 = false;
	            var _iteratorError17 = undefined;
	
	            try {
	                for (var _iterator17 = formulaArray[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
	                    var line = _step17.value;
	
	                    if (flag && sections.includes(line)) // If other section encountered
	                        {
	                            return output;
	                        }
	                    if (line === section) // If the right section is encountered...
	                        {
	                            if (flag) // Second section word encountered
	                                {
	                                    return output;
	                                } else // .. Only once
	                                {
	                                    flag = true;
	                                }
	                        } else {
	                        if (flag) {
	                            output.push(line);
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError17 = true;
	                _iteratorError17 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion17 && _iterator17.return) {
	                        _iterator17.return();
	                    }
	                } finally {
	                    if (_didIteratorError17) {
	                        throw _iteratorError17;
	                    }
	                }
	            }
	
	            return output;
	        }
	
	        /**
	         * Returns all the infos that we can read from the REP section for every RepeatingUnit
	         * Output : [{"info", "res", "lin"},...]
	         * "info": {"donorPosition", "acceptorPosition", "min", "max", "exit", "entry"}
	         * @param array
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'getRepeatingUnit',
	        value: function getRepeatingUnit(array) {
	            var info, min, max;
	            var output = [],
	                value = [],
	                key = "";
	            var _iteratorNormalCompletion18 = true;
	            var _didIteratorError18 = false;
	            var _iteratorError18 = undefined;
	
	            try {
	                for (var _iterator18 = array[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
	                    var line = _step18.value;
	
	                    var split = line.split(/REP\d+:/);
	                    if (split[1]) {
	                        if (value.length != 0 && key !== "") {
	                            min = key.split("=")[1].substring(0, 2) == "-1" ? "?" : key.split("=")[1].split("-")[0];
	                            max = key.substring(key.length - 2) == "-1" ? "?" : key.split("-")[key.split("-").length - 1];
	                            info = { "donorPosition": key.split("(")[1].split("+")[0], "acceptorPosition": key.split(")")[0].split("+")[1],
	                                "min": min, "max": max,
	                                "exit": key.split("o")[0], "entry": key.split(")")[1].split("d")[0] };
	                            output.push({ "info": info, "res": this.getSection("RES", value), "lin": this.getSection("LIN", value) });
	                        }
	                        value = [];
	                        key = split[1];
	                    } else {
	                        value.push(line);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError18 = true;
	                _iteratorError18 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion18 && _iterator18.return) {
	                        _iterator18.return();
	                    }
	                } finally {
	                    if (_didIteratorError18) {
	                        throw _iteratorError18;
	                    }
	                }
	            }
	
	            if (value.length !== 0) {
	                min = key.split("=")[1].substring(0, 2) == "-1" ? "?" : key.split("=")[1].split("-")[0];
	                max = key.substring(key.length - 2) == "-1" ? "?" : key.split("-")[key.split("-").length - 1];
	                info = { "donorPosition": key.split("(")[1].split("+")[0], "acceptorPosition": key.split(")")[0].split("+")[1],
	                    "min": min, "max": max,
	                    "exit": key.split("o")[0], "entry": key.split(")")[1].split("d")[0] };
	                output.push({ "info": info, "res": this.getSection("RES", value), "lin": this.getSection("LIN", value) });
	            }
	            return output;
	        }
	    }]);
	
	    return GlycoCTParser;
	}();
	
	exports.default = GlycoCTParser;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Renaud on 05/07/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Substituent = __webpack_require__(27);
	
	var _Substituent2 = _interopRequireDefault(_Substituent);
	
	var _SubstituentType = __webpack_require__(12);
	
	var _SubstituentType2 = _interopRequireDefault(_SubstituentType);
	
	var _GlycosidicLinkage = __webpack_require__(23);
	
	var _GlycosidicLinkage2 = _interopRequireDefault(_GlycosidicLinkage);
	
	var _SubstituentsGlycoCT = __webpack_require__(13);
	
	var _SubstituentsGlycoCT2 = _interopRequireDefault(_SubstituentsGlycoCT);
	
	var _MonosaccharideType = __webpack_require__(10);
	
	var _MonosaccharideType2 = _interopRequireDefault(_MonosaccharideType);
	
	var _EdgeComparator = __webpack_require__(31);
	
	var _EdgeComparator2 = _interopRequireDefault(_EdgeComparator);
	
	var _RepeatingUnit = __webpack_require__(26);
	
	var _RepeatingUnit2 = _interopRequireDefault(_RepeatingUnit);
	
	var _MonosaccharideGlycoCT = __webpack_require__(15);
	
	var _MonosaccharideGlycoCT2 = _interopRequireDefault(_MonosaccharideGlycoCT);
	
	var _SubstituentLinkage = __webpack_require__(24);
	
	var _SubstituentLinkage2 = _interopRequireDefault(_SubstituentLinkage);
	
	var _SubstituentsPositions = __webpack_require__(14);
	
	var _SubstituentsPositions2 = _interopRequireDefault(_SubstituentsPositions);
	
	var _DonorPosition = __webpack_require__(9);
	
	var _DonorPosition2 = _interopRequireDefault(_DonorPosition);
	
	var _appFunction = __webpack_require__(33);
	
	var _appFunction2 = _interopRequireDefault(_appFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GlycoCTWriter = function () {
	    function GlycoCTWriter(glycan, tree) {
	        _classCallCheck(this, GlycoCTWriter);
	
	        this.glycan = glycan;
	        this.tree = tree;
	        this.res = [];
	        this.rep = [];
	        this.edges = [];
	    }
	
	    // Get SubstituentType
	
	
	    _createClass(GlycoCTWriter, [{
	        key: "getSub",
	        value: function getSub(label) {
	            if (label === "Gc") {
	                return _SubstituentType2.default.NGlycolyl;
	            }
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = _SubstituentType2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var sub = _step.value;
	
	                    if (sub.label.toLowerCase() === label.toLowerCase()) return sub;
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return undefined;
	        }
	
	        // Get MonosaccharideType
	
	    }, {
	        key: "getMono",
	        value: function getMono(name) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = _MonosaccharideType2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var mono = _step2.value;
	
	                    if (mono.name.toLowerCase() === name.toLowerCase()) return mono;
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	
	        // Add a Substituent residue line to the formula
	
	    }, {
	        key: "writeSub",
	        value: function writeSub(i, substituent) {
	            var formula = "";
	            // Substituents start with index + "s"
	            formula += i + 1 + "s:";
	            var subName = substituent.substituentType.name;
	            var substituentType = "";
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = _SubstituentsGlycoCT2.default[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var sub = _step3.value;
	
	                    if (subName.toLowerCase() === sub.name.toLowerCase()) {
	                        substituentType = sub.glycoct;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            if (substituentType === "") {
	                var _iteratorNormalCompletion4 = true;
	                var _didIteratorError4 = false;
	                var _iteratorError4 = undefined;
	
	                try {
	                    for (var _iterator4 = _SubstituentType2.default[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                        sub = _step4.value;
	
	                        if (subName.toLowerCase() === sub.name.toLowerCase()) {
	                            substituentType = sub.name.toLowerCase();
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError4 = true;
	                    _iteratorError4 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                            _iterator4.return();
	                        }
	                    } finally {
	                        if (_didIteratorError4) {
	                            throw _iteratorError4;
	                        }
	                    }
	                }
	            }
	            formula += substituentType + "\n";
	            return formula;
	        }
	
	        // Add a substituent link to the formula
	
	    }, {
	        key: "writeSubLink",
	        value: function writeSubLink(i, source, target, donorPosition, acceptorPosition) {
	            var formula = "";
	            // Substituent links start with index, and "d"
	            formula += i + 1 + ":" + source + "d";
	
	            formula += "(" + donorPosition;
	            formula += "+";
	            formula += acceptorPosition + ")";
	
	            // They end with "n"
	            formula += target + "n";
	
	            formula += "\n";
	
	            return formula;
	        }
	
	        // Add a Monosaccharide link to the formula
	
	    }, {
	        key: "writeMonoLink",
	        value: function writeMonoLink(i, source, target, donorPosition, acceptorPosition) {
	            var prefix = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "o";
	            var suffix = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "d";
	
	            var formula = "";
	            // Monosaccharide links start by either "n" if the source node is ending a Repeating Unit, or "o" otherwise
	            formula += i + ":" + source + prefix;
	
	            formula += "(" + donorPosition;
	            formula += "+";
	            formula += acceptorPosition + ")";
	
	            // They end with "n" if the target node starts a Repeating Unit, "d" otherwise
	            formula += target + suffix;
	
	            formula += "\n";
	
	            return formula;
	        }
	
	        // Compares 2 nodes a and b using the EdgeComparator first, then the NodeComparator if we can't decide
	
	    }, {
	        key: "comparatorFunction",
	        value: function comparatorFunction(a, b) {
	            if (b === undefined) {
	                return -1;
	            }
	            var comp = new _EdgeComparator2.default();
	            var edge1 = this.getLink(a.parent.node.id, a.node.id);
	            var edge2 = this.getLink(b.parent.node.id, b.node.id);
	            return comp.compare(edge1, edge2);
	        }
	
	        // Basic sorting algorithm to sort a node's children to get the right order for the GlycoCT
	
	    }, {
	        key: "sort",
	        value: function sort(arr) {
	
	            var arr2 = Object.assign({}, arr);
	            var len = arr.length;
	
	            for (var i = 0; i < len; i++) {
	                while (i > -1) {
	                    if (this.comparatorFunction(arr[i], arr[i + 1]) > 0) {
	                        var temp = arr[i];
	                        arr[i] = arr[i + 1];
	                        arr[i + 1] = temp;
	                        i--;
	                    } else {
	                        break;
	                    }
	                }
	            }
	            return arr;
	        }
	
	        // Get a link between two nodes whose ids are given
	
	    }, {
	        key: "getLink",
	        value: function getLink(id1, id2) {
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;
	
	            try {
	                for (var _iterator5 = this.glycan.graph.edges()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var edge = _step5.value;
	
	                    if (edge.source == id1 && edge.target == id2 || edge.source == id2 && edge.target == id1) {
	                        return edge;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	        }
	
	        /**
	         * Puts all the info we need in the arrays res, edges and rep
	         * This function is used for the main RES, but also for the RES inside a REP so we have this "unit" var to keep track of this
	         * @param root
	         * @param unit: id of the repeating unit if we're writing lines within a rep
	         */
	
	    }, {
	        key: "generateArrays",
	        value: function generateArrays(root) {
	            var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	
	            this.res = [];
	            this.edges = [];
	            if (root === undefined) {
	                this.res = [];
	                this.edges = [];
	                this.rep = [];
	                return;
	            }
	            var stack = [];
	            stack.push(root);
	            if (root.node !== undefined) {
	                // We go through the tree
	                while (stack.length > 0) {
	                    var node = stack.pop();
	                    var nodeUnit = node.node.repeatingUnit;
	                    // if (we're not writing for a REP && current node is in no REP) || (we're writing for a REP && the current's node's repeating unit is the unit we're writing for)
	                    if (unit === "" && nodeUnit === undefined || unit !== "" && nodeUnit !== undefined && nodeUnit.id === unit) {
	                        this.res.push(node);
	                        if (this.res.length > 1) // if we have at least 2 nodes : add link
	                            {
	                                this.edges.push(this.getLink(node.parent.node.id, node.node.id));
	                            }
	                    } else {
	                        if (unit === "") // we're not writing for a unit
	                            {
	                                if (node.parent !== undefined && node.parent.node.repeatingUnit !== nodeUnit) // If child is the first of the repeating unit
	                                    {
	                                        this.edges.push(this.getLink(node.parent.node.id, node.node.id));
	                                    } else if (nodeUnit !== undefined) {
	                                    if (node.children !== undefined) {
	                                        // We go through the children, if they are also part of the unit we add the link
	                                        var _iteratorNormalCompletion6 = true;
	                                        var _didIteratorError6 = false;
	                                        var _iteratorError6 = undefined;
	
	                                        try {
	                                            for (var _iterator6 = node.children[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                                                var rootChild = _step6.value;
	
	                                                if (rootChild.node.repeatingUnit !== nodeUnit) {
	                                                    this.edges.push(this.getLink(rootChild.node.id, node.node.id));
	                                                }
	                                            }
	                                        } catch (err) {
	                                            _didIteratorError6 = true;
	                                            _iteratorError6 = err;
	                                        } finally {
	                                            try {
	                                                if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                                                    _iterator6.return();
	                                                }
	                                            } finally {
	                                                if (_didIteratorError6) {
	                                                    throw _iteratorError6;
	                                                }
	                                            }
	                                        }
	                                    }
	                                }
	                                // we add the res to the residue list
	                                if (!this.res.includes(nodeUnit)) {
	                                    this.res.push(nodeUnit);
	                                }
	                            }
	                    }
	
	                    // Finally we add the children to the stack, in the right order
	                    var children = node.children;
	                    if (children !== undefined) {
	                        if (children.length > 1) {
	                            children = this.sort(children);
	                        }
	                        var _iteratorNormalCompletion7 = true;
	                        var _didIteratorError7 = false;
	                        var _iteratorError7 = undefined;
	
	                        try {
	                            for (var _iterator7 = children[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                                var child = _step7.value;
	
	                                stack.push(child);
	                            }
	                        } catch (err) {
	                            _didIteratorError7 = true;
	                            _iteratorError7 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                                    _iterator7.return();
	                                }
	                            } finally {
	                                if (_didIteratorError7) {
	                                    throw _iteratorError7;
	                                }
	                            }
	                        }
	                    }
	                }
	            } else {
	                this.res = [];
	            }
	        }
	
	        /**
	         * This function writes a RES section (main or in a REP) by reading in the arrays prepared by generateArrays()
	         * @param resId
	         * @param repId
	         * @param res
	         * @param associatedSubs: e.g: GalNAc -> Gal + associatedSub (NAc)
	         * @param repNumber: number of the current REP (REP1, REP2...)
	         * @param offset: when we call it several times, the residues' indices don't start from 0
	         * @returns {[*,*]}
	         */
	
	    }, {
	        key: "generateRES",
	        value: function generateRES(resId, repId, res, associatedSubs, repNumber) {
	            var offset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	            // Offset: if we have some Repeating Units, we generate the RES section within the REP
	            // with this function, but the offset will create a continuity with the previous indexes
	            var formula = "RES\n";
	            var i;
	            // For every residue (whether it's a sub, mono, or rep)
	            for (i = 0; i < res.length; i++) {
	                if (res[i] instanceof _RepeatingUnit2.default) // If the residue is a REP
	                    {
	                        formula += i + 1 + offset + "r:r" + repNumber;
	                        resId[res[i].id] = i + 1 + offset;
	                        repId[res[i].id] = repNumber;
	                        repNumber++;
	                        formula += "\n";
	                    } else if (res[i].node instanceof _Substituent2.default) // If the residue is a sub
	                    {
	                        formula += this.writeSub(i + offset, res[i].node);
	                        resId[res[i].node.id] = i + 1 + offset;
	                    } else // If the residue is a Monosaccharide
	                    {
	                        resId[res[i].node.id] = i + 1 + offset;
	                        formula += i + 1 + offset + "b:";
	                        switch (res[i].node._anomericity.name) {
	                            case "ALPHA":
	                                formula += "a";
	                                break;
	                            case "BETA":
	                                formula += "b";
	                                break;
	                            default:
	                                formula += "x";
	                                break;
	                        }
	                        formula += "-";
	
	                        var resName = res[i].node._monosaccharideType.name;
	
	                        // In this function, we'll rename weird Monosaccharides names so we can recognize them more easily.
	                        // E.g: Neu5Ac => KdnNAc so we can recognize Kdn and NAc
	                        // Nonulosonates exceptions:
	                        switch (resName) {
	                            case "Neu5Ac":
	                                resName = "KdnNAc";
	                                break;
	                            case "Neu5Gc":
	                                resName = "KdnGc";
	                                break;
	                            case "Neu":
	                                resName = "KdnN";
	                                break;
	                            case "MurNGc":
	                                resName = "MurGc";
	                                break;
	                        }
	
	                        var transform;
	                        var appFunc = new _appFunction2.default();
	
	                        // These types either don't need a specified isomericity or already bear it by default in their glycoct in the database
	                        var isoExceptions = ["Hex", "dHex", "HexA", "HexN", "ddHex", "HexNAc", "dHexNAc", "Pen", "Oli", "Abe", "Col", "Nonu", "LDManHep", "DDManHep"];
	
	                        if (!isoExceptions.includes(resName)) // Exceptions
	                            {
	                                switch (res[i].node._isomer.name) {
	                                    case "L":
	                                        formula += "l";
	                                        break;
	                                    case "D":
	                                        formula += "d";
	                                        break;
	                                    default:
	                                        formula += "x";
	                                        break;
	                                }
	                            }
	
	                        if (_MonosaccharideGlycoCT2.default[resName] !== undefined) // if the residue has a defined name
	                            {
	                                formula += _MonosaccharideGlycoCT2.default[resName].glycoct;
	                                transform = _MonosaccharideGlycoCT2.default[resName].transform;
	                            } else // It can be that the residue is a Mono+Sub (GalNAc...)
	                            {
	                                var monoName, subName, assocSubType, assocSub, donorPosition;
	                                if (_MonosaccharideGlycoCT2.default[resName.substring(0, 3)] !== undefined) // If the 3 first letters make a monosaccharide
	                                    {
	                                        // We get the raw monosaccharide type, and we put the substituent in an array to be treated later
	                                        monoName = resName.substring(0, 3);
	                                        subName = resName.substring(3);
	                                        formula += _MonosaccharideGlycoCT2.default[monoName].glycoct;
	                                        transform = _MonosaccharideGlycoCT2.default[monoName].transform;
	                                        assocSubType = this.getSub(subName);
	                                        assocSub = new _Substituent2.default(appFunc.randomString(7), assocSubType);
	                                        if (_SubstituentsPositions2.default[resName] !== undefined) // Should always be defined
	                                            {
	                                                donorPosition = _SubstituentsPositions2.default[resName].position;
	                                            }
	                                        associatedSubs.push([assocSub, i + 1 + offset, donorPosition]);
	                                    } else if (_MonosaccharideGlycoCT2.default[resName.substring(0, 4)] !== undefined) // If the 4 first letters make a monosaccharide. e.g Nonu
	                                    {
	                                        // See above
	                                        monoName = resName.substring(0, 4);
	                                        subName = resName.substring(4);
	                                        formula += _MonosaccharideGlycoCT2.default[monoName].glycoct;
	                                        transform = _MonosaccharideGlycoCT2.default[monoName].transform;
	                                        assocSubType = this.getSub(subName);
	                                        assocSub = new _Substituent2.default(appFunc.randomString(7), assocSubType);
	                                        if (_SubstituentsPositions2.default[resName] !== undefined) // Should always be defined
	                                            {
	                                                donorPosition = _SubstituentsPositions2.default[resName].position;
	                                            }
	                                        associatedSubs.push([assocSub, i + 1 + offset, donorPosition]);
	                                    }
	                            }
	
	                        // These exceptions already bear their ringType in their glycoct
	                        var ringExceptions = ["Kdn", "KdnNAc", "KdnGc", "KdnN", "Kdo", "Fru"];
	                        if (!ringExceptions.includes(resName)) // Ring exceptions
	                            {
	                                formula += "-";
	                                switch (res[i].node._ringType.name) {
	                                    case "P":
	                                        formula += "1:5";
	                                        break;
	                                    case "F":
	                                        formula += "1:4";
	                                        break;
	                                    default:
	                                        formula += "x:x";
	                                        break;
	                                }
	                            }
	
	                        formula += transform;
	
	                        formula += "\n";
	                    }
	            }
	            // Finally we treat the associatedSubs
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;
	
	            try {
	                for (var _iterator8 = associatedSubs[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var pair = _step8.value;
	
	                    var associatedSub = pair[0];
	                    formula += this.writeSub(i + offset, associatedSub);
	                    i++;
	                    pair[0] = i;
	                }
	            } catch (err) {
	                _didIteratorError8 = true;
	                _iteratorError8 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                        _iterator8.return();
	                    }
	                } finally {
	                    if (_didIteratorError8) {
	                        throw _iteratorError8;
	                    }
	                }
	            }
	
	            return [i + offset, formula];
	        }
	
	        /**
	         * This function writes a LIN section (main or in a REP) by reading in the arrays prepared by generateArrays()
	         * @param resId
	         * @param associatedSubs: e.g: GalNAc -> Gal + associatedSub (NAc)
	         * @param offset: when we call it several times, the residues' indices don't start from 0
	         * @param unit: if we are writing for a unit
	         * @returns {[*,*]}
	         */
	
	    }, {
	        key: "generateLIN",
	        value: function generateLIN(resId, associatedSubs) {
	            var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	            var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
	
	            var formula = "";
	            var i;
	            if (this.res.length + associatedSubs.length > 1) {
	                formula += "LIN\n";
	                var edges = this.edges;
	                var prevSource = 0,
	                    prevTarget = 0;
	                for (i = 0; i < edges.length; i++) {
	                    // We get the link information
	                    var source = edges[i].sourceNode.repeatingUnit === undefined || unit !== "" ? resId[edges[i].sourceNode.getId()] : resId[edges[i].sourceNode.repeatingUnit.id];
	                    var donorPosition = edges[i].donorPosition.value === "undefined" ? -1 : edges[i].donorPosition.value;
	                    var acceptorPosition;
	                    if (edges[i] instanceof _SubstituentLinkage2.default) acceptorPosition = 1;else if (edges[i].acceptorPosition.value === "undefined") acceptorPosition = 1;else acceptorPosition = edges[i].acceptorPosition.value;
	
	                    var target = edges[i].targetNode.repeatingUnit === undefined || unit !== "" ? resId[edges[i].targetNode.getId()] : resId[edges[i].targetNode.repeatingUnit.id];
	
	                    if (prevSource !== source || prevTarget !== target) // Cheap fix to this bug: When operating with repeating units, some links are duplicated
	                        {
	                            prevSource = source;
	                            prevTarget = target;
	
	                            if (edges[i] instanceof _GlycosidicLinkage2.default) {
	                                var prefix = "o";
	                                var suffix = "d";
	                                var sourceRep = findNodeInTree(this.tree, edges[i].sourceNode).node.repeatingUnit;
	                                var targetRep = findNodeInTree(this.tree, edges[i].targetNode).node.repeatingUnit;
	                                // Set the prefix and suffix to get the right ones according to repeating units
	                                if (sourceRep !== targetRep) {
	                                    if (sourceRep !== undefined) {
	                                        prefix = "n";
	                                    }
	                                    if (targetRep !== undefined) {
	                                        suffix = "n";
	                                    }
	                                }
	                                formula += this.writeMonoLink(i + 1 + offset, source, target, donorPosition, acceptorPosition, prefix, suffix);
	                            } else {
	                                formula += this.writeSubLink(i + offset, source, target, donorPosition, acceptorPosition);
	                            }
	                        } else {
	                        offset--; // The following of the cheap fix above: As the link gets duplicated, "i" is 1 higher than wanted, so let's decrease "offset"
	                    }
	                }
	
	                var _iteratorNormalCompletion9 = true;
	                var _didIteratorError9 = false;
	                var _iteratorError9 = undefined;
	
	                try {
	                    for (var _iterator9 = associatedSubs[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                        var pair = _step9.value;
	
	                        formula += this.writeSubLink(i + offset, pair[1], pair[0] + offset, pair[2], 1);
	                        i++;
	                    }
	                } catch (err) {
	                    _didIteratorError9 = true;
	                    _iteratorError9 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                            _iterator9.return();
	                        }
	                    } finally {
	                        if (_didIteratorError9) {
	                            throw _iteratorError9;
	                        }
	                    }
	                }
	
	                return [i + offset, formula];
	            }
	            return [0, ""];
	        }
	
	        /*
	            findNodeInTree(tree,node1)
	            {
	                var stack = [], node, i;
	                stack.push(tree);
	        
	                while (stack.length > 0) {
	                    node = stack.pop();
	                    if (node.node == node1) {
	                        return node;
	                    } else if (node.children != undefined) {
	                        for (i = 0; i < node.children.length; i += 1) {
	                            stack.push(node.children[i]);
	                        }
	                    }
	                }
	                return null;
	            }
	         */
	
	        /**
	         * Main function called from outside the class to return the final formula
	         * @returns {*}
	         */
	
	    }, {
	        key: "exportGlycoCT",
	        value: function exportGlycoCT() {
	            var resId = {};
	            var repId = {};
	            this.generateArrays(this.tree);
	            var res = this.res;
	            var associatedSubs = [];
	            if (res.length === 0) {
	                return "";
	            }
	            var repNumber = 1;
	
	            // RES
	            var resInfo = this.generateRES(resId, repId, res, associatedSubs, repNumber);
	            var formula = resInfo[1];
	            var lastResId = resInfo[0];
	
	            // LIN
	            var linInfo = this.generateLIN(resId, associatedSubs);
	            formula += linInfo[1];
	            var lastLinId = linInfo[0];
	
	            // REP
	
	            var _iteratorNormalCompletion10 = true;
	            var _didIteratorError10 = false;
	            var _iteratorError10 = undefined;
	
	            try {
	                for (var _iterator10 = this.res[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	                    var residue = _step10.value;
	
	                    if (residue instanceof _RepeatingUnit2.default) {
	                        this.rep.push(residue);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError10 = true;
	                _iteratorError10 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
	                        _iterator10.return();
	                    }
	                } finally {
	                    if (_didIteratorError10) {
	                        throw _iteratorError10;
	                    }
	                }
	            }
	
	            if (this.rep.length !== 0) // if we have REPs
	                {
	                    formula += "REP\n";
	                    var _iteratorNormalCompletion11 = true;
	                    var _didIteratorError11 = false;
	                    var _iteratorError11 = undefined;
	
	                    try {
	                        for (var _iterator11 = this.rep[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	                            var rep = _step11.value;
	
	                            this.generateArrays(this.findRepMinDepth(rep), rep.id);
	                            var entryId = lastResId + 1;
	                            associatedSubs = [];
	                            resInfo = this.generateRES(resId, repId, this.res, associatedSubs, repNumber, lastResId);
	                            lastResId = resInfo[0];
	                            var exitId = lastResId;
	                            formula += "REP" + repId[rep.id] + ":" + exitId + "o(";
	                            //TODO: 結合位置がundefinedの場合に対応できていない
	                            formula += rep.donorPosition === _DonorPosition2.default.UNDEFINED ? "-1" : rep.donorPosition;
	                            formula += "+";
	                            formula += rep.acceptorPosition === AcceptorPosition.UNDEFINED ? "-1" : rep.acceptorPosition;
	                            formula += ")" + entryId + "d=";
	                            formula += rep.min === "?" ? "-1" : rep.min;
	                            formula += "-";
	                            formula += rep.max === "?" ? "-1" : rep.max;
	                            formula += "\n" + resInfo[1];
	                            linInfo = this.generateLIN(resId, associatedSubs, lastLinId, rep.id);
	                            lastLinId = linInfo[0];
	                            formula += linInfo[1];
	                        }
	                    } catch (err) {
	                        _didIteratorError11 = true;
	                        _iteratorError11 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion11 && _iterator11.return) {
	                                _iterator11.return();
	                            }
	                        } finally {
	                            if (_didIteratorError11) {
	                                throw _iteratorError11;
	                            }
	                        }
	                    }
	                }
	
	            if (formula.substring(formula.length - 1) == '\n') // Remove final \n
	                {
	                    formula = formula.substring(0, formula.length - 1);
	                }
	
	            return formula;
	        }
	
	        // Returns the node with the minimum depth in tree (aka the entry)
	
	    }, {
	        key: "findRepMinDepth",
	        value: function findRepMinDepth(rep) {
	            var minVal = rep.nodes[0].depth;
	            var minNode = rep.nodes[0];
	            var _iteratorNormalCompletion12 = true;
	            var _didIteratorError12 = false;
	            var _iteratorError12 = undefined;
	
	            try {
	                for (var _iterator12 = rep.nodes[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	                    var node = _step12.value;
	
	                    if (node.depth < minVal) {
	                        minVal = node.depth;
	                        minNode = node;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError12 = true;
	                _iteratorError12 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
	                        _iterator12.return();
	                    }
	                } finally {
	                    if (_didIteratorError12) {
	                        throw _iteratorError12;
	                    }
	                }
	            }
	
	            return minNode;
	        }
	    }]);
	
	    return GlycoCTWriter;
	}();
	
	exports.default = GlycoCTWriter;
	
	
	var findNodeInTree = function findNodeInTree(tree, node1) {
	    var stack = [],
	        node = void 0,
	        i = void 0;
	    stack.push(tree);
	
	    while (stack.length > 0) {
	        node = stack.pop();
	        if (node.node == node1) {
	            return node;
	        } else if (node.children != undefined) {
	            for (i = 0; i < node.children.length; i += 1) {
	                stack.push(node.children[i]);
	            }
	        }
	    }
	    return null;
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Renaud on 11/07/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	/**
	 * Created by Renaud on 10/07/2017.
	 */
	
	var _NodeComparator = __webpack_require__(32);
	
	var _NodeComparator2 = _interopRequireDefault(_NodeComparator);
	
	var _GlycosidicLinkage = __webpack_require__(23);
	
	var _GlycosidicLinkage2 = _interopRequireDefault(_GlycosidicLinkage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EdgeComparator = function () {
	    function EdgeComparator() {
	        _classCallCheck(this, EdgeComparator);
	    }
	
	    _createClass(EdgeComparator, [{
	        key: "compare",
	        value: function compare(e1, e2) {
	            var bondsE1 = this.bonds(e1);
	            var bondsE2 = this.bonds(e2);
	            if (bondsE1 > bondsE2) {
	                return 1;
	            } else if (bondsE1 === bondsE2) {
	                var parentLinkPosE1 = this.parentLinkPos(e1);
	                var parentLinkPosE2 = this.parentLinkPos(e2);
	                if (parentLinkPosE1 > parentLinkPosE2) {
	                    return 1;
	                } else if (parentLinkPosE1 === parentLinkPosE2) {
	                    var childLinkPosE1 = this.childLinkPos(e1);
	                    var childLinkPosE2 = this.childLinkPos(e2);
	                    if (childLinkPosE1 > childLinkPosE2) {
	                        return 1;
	                    } else if (childLinkPosE1 === childLinkPosE2) {
	                        var linkageTypeE1 = this.linkageType(e1);
	                        var linkageTypeE2 = this.linkageType(e2);
	                        if (linkageTypeE1 > linkageTypeE2) {
	                            return 1;
	                        } else if (linkageTypeE1 === linkageTypeE2) {
	                            return this.compareNodes(e1, e2);
	                        }
	                    }
	                }
	            }
	
	            return -1;
	        }
	    }, {
	        key: "parentLinkPos",
	        value: function parentLinkPos(edge) {
	            return edge.donorPosition.value === "undefined" ? 0 : edge.donorPosition.value;
	        }
	    }, {
	        key: "bonds",
	        value: function bonds(edge) {
	            return 1; // always 1 bond in our application
	        }
	    }, {
	        key: "childLinkPos",
	        value: function childLinkPos(edge) {
	            return edge.acceptorPosition.value === "undefined" ? 0 : edge.acceptorPosition.value;
	        }
	    }, {
	        key: "linkageType",
	        value: function linkageType(edge) {
	            if (edge instanceof _GlycosidicLinkage2.default) {
	                return 1;
	            } else {
	                return 0;
	            }
	        }
	    }, {
	        key: "compareNodes",
	        value: function compareNodes(edge1, edge2) {
	            var comp = new _NodeComparator2.default();
	            return comp.compare(edge1.targetNode, edge2.targetNode);
	        }
	    }]);
	
	    return EdgeComparator;
	}();
	
	exports.default = EdgeComparator;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Renaud on 10/07/2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _EdgeComparator = __webpack_require__(31);
	
	var _EdgeComparator2 = _interopRequireDefault(_EdgeComparator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NodeComparator = function () {
	    function NodeComparator() {
	        _classCallCheck(this, NodeComparator);
	    }
	
	    _createClass(NodeComparator, [{
	        key: "compare",
	        value: function compare(n1, n2) {
	            var childrenN1 = this.children(n1);
	            var childrenN2 = this.children(n2);
	            if (childrenN1 > childrenN2) {
	                return 1;
	            } else if (childrenN1 === childrenN2) {
	                var longestN1 = this.longestBranch(n1) - n1.depth;
	                var longestN2 = this.longestBranch(n2) - n2.depth;
	                if (longestN1 > longestN2) {
	                    return 1;
	                } else if (longestN1 === longestN2) {
	                    var terminalsN1 = this.terminals(n1);
	                    var terminalsN2 = this.terminals(n2);
	                    if (terminalsN1 > terminalsN2) {
	                        return 1;
	                    } else if (terminalsN1 === terminalsN2) {
	                        var branchingN1 = this.branching(n1);
	                        var branchingN2 = this.branching(n2);
	                        if (branchingN1 > branchingN2) {
	                            return 1;
	                        } else if (branchingN1 === branchingN2) {
	                            if (n1.node.monosaccharideType.name >= n2.node.monosaccharideType.name) {
	                                return 1;
	                            }
	                        }
	                    }
	                }
	            }
	
	            return -1;
	        }
	    }, {
	        key: "longestBranch",
	        value: function longestBranch(node) {
	            if (node.children === undefined) {
	                return node.depth;
	            }
	            var depths = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var child = _step.value;
	
	                    depths.push(this.longestBranch(child));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = depths[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var depth = _step2.value;
	
	                    if (node.depth > depth) {
	                        return node.depth;
	                    } else {
	                        return Math.max.apply(null, depths);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "children",
	        value: function children(node) {
	            if (node.children === undefined) {
	                return 1;
	            }
	            var nodes = [];
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = node.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var child = _step3.value;
	
	                    nodes.push(this.children(child));
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            return nodes.reduce(function (a, b) {
	                return a + b;
	            }, 0) + 1;
	        }
	    }, {
	        key: "terminals",
	        value: function terminals(node) {
	            if (node.children === undefined) {
	                return 1;
	            }
	            var nodes = [];
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = node.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var child = _step4.value;
	
	                    nodes.push(this.terminals(child));
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            return nodes.reduce(function (a, b) {
	                return a + b;
	            }, 0);
	        }
	    }, {
	        key: "branching",
	        value: function branching(node) {
	            if (node.children === undefined) {
	                return 0;
	            }
	            var branches = [];
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;
	
	            try {
	                for (var _iterator5 = node.children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var child = _step5.value;
	
	                    branches.push(this.branching(child));
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	
	            return node.children.length > 1 ? branches.reduce(function (a, b) {
	                return a + b;
	            }, 0) + 1 : branches.reduce(function (a, b) {
	                return a + b;
	            }, 0);
	        }
	    }]);
	
	    return NodeComparator;
	}();
	
	exports.default = NodeComparator;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _visFunction = __webpack_require__(34);
	
	var _visFunction2 = _interopRequireDefault(_visFunction);
	
	var _GlycosidicLinkage = __webpack_require__(23);
	
	var _GlycosidicLinkage2 = _interopRequireDefault(_GlycosidicLinkage);
	
	var _SubstituentsPositions = __webpack_require__(14);
	
	var _SubstituentsPositions2 = _interopRequireDefault(_SubstituentsPositions);
	
	var _Substituent = __webpack_require__(27);
	
	var _Substituent2 = _interopRequireDefault(_Substituent);
	
	var _DonorPosition = __webpack_require__(9);
	
	var _DonorPosition2 = _interopRequireDefault(_DonorPosition);
	
	var _AcceptorPosition = __webpack_require__(5);
	
	var _AcceptorPosition2 = _interopRequireDefault(_AcceptorPosition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var vf = new _visFunction2.default();
	
	// Get an array of all Repeating Units
	
	var appFunction = function () {
	    function appFunction() {
	        _classCallCheck(this, appFunction);
	    }
	
	    _createClass(appFunction, [{
	        key: "generateRepeatingUnits",
	        value: function generateRepeatingUnits(nodes) {
	            var output = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var node = _step.value;
	
	                    if (node.node.repeatingUnit !== undefined) // the node is in a repeating unit
	                        {
	                            if (output.includes(node.node.repeatingUnit)) {
	                                var _iteratorNormalCompletion2 = true;
	                                var _didIteratorError2 = false;
	                                var _iteratorError2 = undefined;
	
	                                try {
	                                    for (var _iterator2 = output[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                        var repUnit = _step2.value;
	
	                                        if (repUnit === node.node.repeatingUnit) {
	                                            if (!repUnit.nodes.includes(node)) {
	                                                repUnit.nodes.push(node);
	                                            }
	                                        }
	                                    }
	                                } catch (err) {
	                                    _didIteratorError2 = true;
	                                    _iteratorError2 = err;
	                                } finally {
	                                    try {
	                                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                            _iterator2.return();
	                                        }
	                                    } finally {
	                                        if (_didIteratorError2) {
	                                            throw _iteratorError2;
	                                        }
	                                    }
	                                }
	                            } else {
	                                output.push(node.node.repeatingUnit);
	                            }
	                        }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return output;
	        }
	
	        // Used to select from one node to another
	
	    }, {
	        key: "selectAllNodesBetween",
	        value: function selectAllNodesBetween(node1, node2, _treeData, _selectedNodes) {
	            var root = findNodeInTree(_treeData, node1);
	            var node = findNodeInTree(_treeData, node2);
	            if (root.depth < node.depth) {
	                _selectedNodes = selectAllChildrenBetween(node2, node1, root.depth, _treeData, _selectedNodes);
	            } else {
	                _selectedNodes = [];
	                _selectedNodes = selectAllParentsBetween(node1, node2, _treeData, _selectedNodes);
	            }
	
	            return _selectedNodes;
	        }
	
	        /**
	         * Finds a spot where a substituant Label is readable (i.e no link going through it)
	         * @param x : Coordinates of the source
	         * @param y : Coordinates of the source
	         * @param donorPosition
	         */
	        /*
	        findSubstituantLabelSpot (x, y, donorPosition)
	        {
	            let subsXY = {1: [x-7, y+20], 2: [x+16, y], 3: [x+16,y-16], 4: [x-7, y-28], 5: [x+16, y+8], 6: [x-28, y-16], 7: [x-28, y+8], 8: [x-28, y+16], 9: [x+16, y+16], "undefined": [x-28, y]};
	            return subsXY[donorPosition];
	        }
	         */
	
	    }, {
	        key: "clickedNodeHasSubs",
	        value: function clickedNodeHasSubs(_clickedNode, _glycan) {
	            var name = _clickedNode.monosaccharideType.name;
	            if (_SubstituentsPositions2.default[name]) //sb.SubstituentsPositions[name])
	                return true;
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = _glycan.graph.edges()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var edge = _step3.value;
	
	                    if (edge.sourceNode === _clickedNode && edge.targetNode instanceof _Substituent2.default) //sb.Substituent)
	                        {
	                            return true;
	                        }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            return false;
	        }
	
	        // Get the coordinates of the repeating unit's brackets considering the nodes that are inside
	
	    }, {
	        key: "getRepCoord",
	        value: function getRepCoord(repeatingUnit, _shapes) {
	            var output = [];
	            var gap = 50;
	            var circleRadius = 15; // Radius of a circle shape
	            var minX = _shapes[repeatingUnit.nodes[0].node.id][0];
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = repeatingUnit.nodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var node = _step4.value;
	
	                    if (_shapes[node.node.id][0] < minX) {
	                        minX = _shapes[node.node.id][0];
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            output.push(minX - gap + 3 * circleRadius / 2);
	            var maxX = _shapes[repeatingUnit.nodes[0].node.id][0];
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;
	
	            try {
	                for (var _iterator5 = repeatingUnit.nodes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var _node = _step5.value;
	
	                    if (_shapes[_node.node.id][0] > maxX) {
	                        maxX = _shapes[_node.node.id][0];
	                    }
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	
	            output.push(maxX + gap - 3 * circleRadius / 2);
	            var minY = _shapes[repeatingUnit.nodes[0].node.id][1];
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;
	
	            try {
	                for (var _iterator6 = repeatingUnit.nodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var _node2 = _step6.value;
	
	                    if (_shapes[_node2.node.id][1] < minY) {
	                        minY = _shapes[_node2.node.id][1];
	                    }
	                }
	            } catch (err) {
	                _didIteratorError6 = true;
	                _iteratorError6 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                        _iterator6.return();
	                    }
	                } finally {
	                    if (_didIteratorError6) {
	                        throw _iteratorError6;
	                    }
	                }
	            }
	
	            output.push(minY - 3 * circleRadius / 2); // 10px is the width of the base of the bracket
	            var maxY = _shapes[repeatingUnit.nodes[0].node.id][1];
	            var _iteratorNormalCompletion7 = true;
	            var _didIteratorError7 = false;
	            var _iteratorError7 = undefined;
	
	            try {
	                for (var _iterator7 = repeatingUnit.nodes[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                    var _node3 = _step7.value;
	
	                    if (_shapes[_node3.node.id][1] > maxY) {
	                        maxY = _shapes[_node3.node.id][1];
	                    }
	                }
	            } catch (err) {
	                _didIteratorError7 = true;
	                _iteratorError7 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                        _iterator7.return();
	                    }
	                } finally {
	                    if (_didIteratorError7) {
	                        throw _iteratorError7;
	                    }
	                }
	            }
	
	            output.push(maxY + gap / 4); // 10px is the width of the base of the bracket
	            return output;
	        }
	    }, {
	        key: "pasteNewNode",
	        value: function pasteNewNode(node, _glycan, _treeData, _copiedNode, _shapes) {
	            var foundNodeInTree = searchNodeInTree(_treeData, _copiedNode); // Search the copied node in the tree data
	            var linksRelatedToNode = findLinksForCopy(foundNodeInTree, _glycan); // Find all links related to this node and its children
	            var copyOfLinks = _.cloneDeep(linksRelatedToNode); // Copy of the links
	            var copyOfNode = _.cloneDeep(foundNodeInTree); // Copy of the tree node
	            copyOfNode.node.id += this.randomString(7); // Change node id (to avoid error with twice same id in tree)
	            var linkage = vf.findLinkForMono(_copiedNode, _glycan); // Search the link which has the copied node as target
	            var copyOfLinkage = void 0; // Copy of the link
	            var nodeToAppend = searchNodeInTree(_treeData, node); // Search the node  to which we want to paste
	            if (linkage != null) {
	                // If the linkage exists (so if the copied node is not the root)
	                copyOfLinkage = _.cloneDeep(linkage); // Copy the link
	                copyOfLinkage.id += this.randomString(7); // Change its id
	                copyOfLinkage.source = nodeToAppend.node.id; // Change the source with the id of the node to append
	                copyOfLinkage.sourceNode = nodeToAppend.node; // Change the sourceNode with the node to append
	            } else {
	                // If we copied the root, then create a new linkage with undefined anomer and linked carbons
	                copyOfLinkage = new _GlycosidicLinkage2.default(this.randomString(7), //new sb.GlycosidicLinkage(this.randomString(7),
	                _glycan.getNodeById(nodeToAppend.node.id), _glycan.getNodeById(foundNodeInTree.node.id), _AcceptorPosition2.default.UNDEFINED, _DonorPosition2.default.UNDEFINED);
	            }
	            changeChildrenIds(copyOfNode); // Change all the children nodes ids (to avoid error of twice same id in tree)
	            if (typeof nodeToAppend.children == 'undefined') {
	                // Add children property if the node doesn't have children yet
	                nodeToAppend.children = [];
	            }
	            nodeToAppend.children.push(copyOfNode); // Push the copy to the children of the node to append
	            _glycan = addNodeCopyInGraph(copyOfNode, _glycan); // Add the new copy in the graph structure
	            // Update the source of the first linkage (search the copied node which corresponds to the first of the copy)
	            for (var i = 0; i < copyOfNode.length; i++) {
	                var idBeforeChange = copyOfNode[i].node.id.substring(0, copyOfNode[i].node.id.length - 7);
	                if (idBeforeChange === copyOfLinkage.source) {
	                    copyOfLinkage.source = copyOfNode[i].node.id;
	                    copyOfLinkage.sourceNode = copyOfNode[i].node;
	                }
	            }
	            searchFirstPasteNodeAndUpdateLink(_treeData, copyOfLinkage); // Update the target of the first linkage
	            updateLinksRelated(copyOfNode, copyOfLinks); // Update all links (ids to avoid twice same ids
	            for (var j = 0; j < copyOfLinks.length; j++) {
	                // Update ids of all links
	                copyOfLinks[j].id += this.randomString(7);
	            }
	            if (typeof nodeToAppend.children === 'undefined') {
	                nodeToAppend.children = [];
	            }
	            _glycan.graph.addEdge(copyOfLinkage); // Add the first edge to the graph
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;
	
	            try {
	                for (var _iterator8 = copyOfLinks[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var link = _step8.value;
	                    // Add all links to the graph
	                    _glycan.graph.addEdge(link);
	                }
	            } catch (err) {
	                _didIteratorError8 = true;
	                _iteratorError8 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                        _iterator8.return();
	                    }
	                } finally {
	                    if (_didIteratorError8) {
	                        throw _iteratorError8;
	                    }
	                }
	            }
	
	            fadeOutContextMenu();
	
	            var ret = vf.generateShapes(_glycan, _shapes, _treeData);
	
	            displayTree(ret[1], ret[0], _glycan); // Display the tree with new structure
	        }
	
	        /**
	         * Generate a random string (used for identifiers) with a given length
	         * @param length The length of the string we want to generate
	         * @returns {string}
	         */
	
	    }, {
	        key: "randomString",
	        value: function randomString(length) {
	            // Possible chars in the generated string
	            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');
	
	            if (!length) {
	                // If no length specified, get a random length
	                length = Math.floor(Math.random() * chars.length);
	            }
	
	            var str = '';
	            for (var i = 0; i < length; i++) {
	                // Add random chars till length is the one specified
	                str += chars[Math.floor(Math.random() * chars.length)];
	            }
	            return str;
	        }
	    }, {
	        key: "getNodeParent",
	        value: function getNodeParent(node, _glycan) {
	            var _iteratorNormalCompletion9 = true;
	            var _didIteratorError9 = false;
	            var _iteratorError9 = undefined;
	
	            try {
	                for (var _iterator9 = _glycan.graph.edges()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                    var e = _step9.value;
	
	                    if (e.target === node.id) {
	                        return e.sourceNode;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError9 = true;
	                _iteratorError9 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                        _iterator9.return();
	                    }
	                } finally {
	                    if (_didIteratorError9) {
	                        throw _iteratorError9;
	                    }
	                }
	            }
	        }
	    }]);
	
	    return appFunction;
	}();
	
	/**
	* Change children ids of a node
	* @param node
	*/
	
	
	exports.default = appFunction;
	var changeChildrenIds = function changeChildrenIds(node) {
	    if (node.children != null) {
	        for (var i = 0; i < node.children.length; i++) {
	            node.children[i].node.id += undefined.randomString(7);
	            changeChildrenIds(node.children[i]);
	        }
	    }
	};
	
	var getSelectedNodeIndex = function getSelectedNodeIndex(node, _selectedNodes) {
	    for (var i in _selectedNodes) {
	        if (_selectedNodes[i].id === node.id) {
	            return i;
	        }
	    }
	    return -1;
	};
	
	/**
	 * Search the first node we paste, and change the first link target to this node
	 * @param root The node from which we start the search
	 * @param linkageToUpdate The linkage to update
	 */
	var searchFirstPasteNodeAndUpdateLink = function searchFirstPasteNodeAndUpdateLink(root, linkageToUpdate) {
	    var idBeforeChange = root.node.id; // Get the id of the current node
	    if (idBeforeChange === linkageToUpdate.source) {
	        // If it corresponds to the source of the linkage
	        if (root.children != null) {
	            // If the node has children
	            linkageToUpdate.target = root.children[root.children.length - 1].node.id; // Update target with last child of node id
	            linkageToUpdate.targetNode = root.children[root.children.length - 1].node; // Update targetNode with last child of node
	        }
	    } else {
	        // If its not the good node
	        if (root.children != null) {
	            // Recursivity on children
	            for (var i = 0; i < root.children.length; i++) {
	                searchFirstPasteNodeAndUpdateLink(root.children[i], linkageToUpdate);
	            }
	        }
	    }
	};
	
	/**
	 * Update links source and target ids to paste a node
	 * @param node The node we are currently checking
	 * @param links The links we want to update
	 */
	var updateLinksRelated = function updateLinksRelated(node, links) {
	    var idBeforeChange = node.node.id.substring(0, node.node.id.length - 7); // Get teh id before the update (we add 7 chars each time)
	    for (var i = 0; i < links.length; i++) {
	        // Loop on links
	        if (links[i].source === idBeforeChange) {
	            // If source correspondance, update it
	            links[i].source = node.node.id;
	            links[i].sourceNode = node.node;
	        }
	        if (links[i].target === idBeforeChange) {
	            // If target correspondance, update it
	            links[i].target = node.node.id;
	            links[i].targetNode = node.node;
	        }
	    }
	    if (node.children != null) {
	        // Recursivity if children existing
	        for (var j = 0; j < node.children.length; j++) {
	            updateLinksRelated(node.children[j], links);
	        }
	    }
	};
	
	/**
	 * Find all links in relation with a node and its children
	 * @param node The root node of the copy
	 * @param _glycan
	 */
	var findLinksForCopy = function findLinksForCopy(node, _glycan) {
	    var allLinks = [];
	    if (node.children != null) {
	        for (var i = 0; i < node.children.length; i++) {
	            allLinks.push(_glycan.getEdge(node.node, node.children[i].node));
	            allLinks = allLinks.concat(findLinksForCopy(node.children[i], _glycan));
	        }
	    }
	    return allLinks;
	};
	
	/**
	 * Add a node from d3js tree and its children in the sigma graph, copying links
	 * @param node The node to add
	 * @param _glycan
	 */
	var addNodeCopyInGraph = function addNodeCopyInGraph(node, _glycan) {
	    _glycan.graph.addNode(node.node);
	    if (node.children != null) {
	        for (var i = 0; i < node.children.length; i++) {
	            _glycan = addNodeCopyInGraph(node.children[i], _glycan);
	        }
	    }
	    return _glycan;
	};
	
	/**
	 * Search a node in the tree structure
	 * @param node The node we are looking for
	 * @param root The root from which we want to search
	 */
	var searchNodeInTree = function searchNodeInTree(root, node) {
	    if (root.node.id === node.id) {
	        return root;
	    } else if (root.children != null) {
	        // If the node has children, recursivity on each child to find the source node
	        var i = void 0;
	        var result = null;
	        for (i = 0; result == null && i < root.children.length; i++) {
	            result = searchNodeInTree(root.children[i], node);
	        }
	        return result;
	    }
	};
	
	var findNodeInTree = function findNodeInTree(tree, node1) {
	    var stack = [],
	        node = void 0,
	        i = void 0;
	    stack.push(tree);
	
	    while (stack.length > 0) {
	        node = stack.pop();
	        if (node.node === node1) {
	            return node;
	        } else if (node.children !== undefined) {
	            for (i = 0; i < node.children.length; i += 1) {
	                stack.push(node.children[i]);
	            }
	        }
	    }
	    return null;
	};
	
	// Unselect a node's children (used when we already have a selection, and we make a new smaller selection over it)
	var removeChildrenFromSelection = function removeChildrenFromSelection(node, _treeData, _selectedNodes) {
	    var finedNode = findNodeInTree(_treeData, node);
	    if (finedNode.children !== undefined) {
	        var _iteratorNormalCompletion10 = true;
	        var _didIteratorError10 = false;
	        var _iteratorError10 = undefined;
	
	        try {
	            for (var _iterator10 = finedNode.children[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	                var child = _step10.value;
	
	                if (_selectedNodes.includes(child.node)) {
	                    _selectedNodes.splice(getSelectedNodeIndex(child.node, _selectedNodes), 1);
	                }
	                _selectedNodes = removeChildrenFromSelection(child.node, _treeData, _selectedNodes);
	            }
	        } catch (err) {
	            _didIteratorError10 = true;
	            _iteratorError10 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion10 && _iterator10.return) {
	                    _iterator10.return();
	                }
	            } finally {
	                if (_didIteratorError10) {
	                    throw _iteratorError10;
	                }
	            }
	        }
	    }
	
	    return _selectedNodes;
	};
	
	var selectAllParentsBetween = function selectAllParentsBetween(node1, node2, _treeData, _selectedNodes) {
	    var selectParents = [];
	    var currentNode = findNodeInTree(_treeData, node1);
	    if (node1 !== clickedNode && !_selectedNodes.includes(node1) && !selectParents.includes(node1)) selectParents.push(node1);
	    while (currentNode.parent !== undefined) {
	        if (currentNode.parent.node !== clickedNode && !_selectedNodes.includes(currentNode.parent.node) && !selectParents.includes(currentNode.parent.node)) selectParents.push(currentNode.parent.node);
	        if (currentNode.parent.node === node2) {
	            _selectedNodes = _selectedNodes.concat(selectParents);
	            return _selectedNodes;
	        }
	        currentNode = currentNode.parent;
	    }
	
	    return _selectedNodes;
	};
	
	var selectAllChildrenBetween = function selectAllChildrenBetween(node1, node2, rootDepth, _treeData, _selectedNodes) {
	    if (_selectedNodes.length === 0 || rootDepth > findNodeInTree(_treeData, _selectedNodes[0]).depth) {
	        _selectedNodes = [];
	    }
	    _selectedNodes = selectAllParentsBetween(node1, node2, _treeData, _selectedNodes);
	    _selectedNodes = removeChildrenFromSelection(node1, _treeData, _selectedNodes);
	
	    return _selectedNodes;
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GlycosidicLinkage = __webpack_require__(23);
	
	var _GlycosidicLinkage2 = _interopRequireDefault(_GlycosidicLinkage);
	
	var _DonorPosition = __webpack_require__(9);
	
	var _DonorPosition2 = _interopRequireDefault(_DonorPosition);
	
	var _AcceptorPosition = __webpack_require__(5);
	
	var _AcceptorPosition2 = _interopRequireDefault(_AcceptorPosition);
	
	var _MonosaccharideType = __webpack_require__(10);
	
	var _MonosaccharideType2 = _interopRequireDefault(_MonosaccharideType);
	
	var _Anomericity = __webpack_require__(7);
	
	var _Anomericity2 = _interopRequireDefault(_Anomericity);
	
	var _Isomer = __webpack_require__(8);
	
	var _Isomer2 = _interopRequireDefault(_Isomer);
	
	var _RingType = __webpack_require__(11);
	
	var _RingType2 = _interopRequireDefault(_RingType);
	
	var _XYvalues = __webpack_require__(18);
	
	var _XYvalues2 = _interopRequireDefault(_XYvalues);
	
	var _colorDivisions = __webpack_require__(19);
	
	var _colorDivisions2 = _interopRequireDefault(_colorDivisions);
	
	var _emFunction = __webpack_require__(35);
	
	var _emFunction2 = _interopRequireDefault(_emFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var visFunction = function () {
	    function visFunction() {
	        _classCallCheck(this, visFunction);
	    }
	
	    /**
	     * Update the treeData, and then call the displayTree function to display it with the new data
	     */
	
	
	    _createClass(visFunction, [{
	        key: "updateTreeVisualization",
	        value: function updateTreeVisualization(newLink, _glycan, _treeData) {
	            // If the tree is empty, we just initialize it with the node as a root
	            if (typeof newLink === 'undefined') {
	                _treeData = { "node": _glycan.getRootNode(), "children": [] };
	            } else {
	                // If tree already has a root, add the node in the tree
	                _treeData = this.searchAndAddNodeInTree(_treeData, newLink);
	            }
	            return _treeData;
	        }
	
	        /**
	         * Search a node in a tree
	         * @param root The root of the tree
	         * @param link The link used for new node
	         * @returns {*}
	         */
	
	    }, {
	        key: "searchAndAddNodeInTree",
	        value: function searchAndAddNodeInTree(root, link) {
	            // If the current node is the source of the link
	            if (root.node == link.sourceNode) {
	                // If the node doesn't have children, add an empty array as children property
	                if (typeof root.children === 'undefined') root.children = [];
	                root.children.push({ "node": link.targetNode, "children": [] }); // Push the target of the link
	            } else if (root.children != null) {
	                // If the node has children, recursivity on each child to find the source node
	                var i = void 0;
	                var result = null;
	                for (i = 0; result == null && i < root.children.length; i++) {
	                    this.searchAndAddNodeInTree(root.children[i], link);
	                }
	            }
	
	            return root;
	        }
	
	        /**
	         * Update an existing node
	         */
	
	    }, {
	        key: "updateExistingNode",
	        value: function updateExistingNode(_glycan, _infosTable, _treeData, _shapes) {
	            var newShape = _infosTable.shape; // Selected shape
	            //let newColor = this.getColorCodeFromString(_infosTable[2]); // Selected color
	            var newColor = _colorDivisions2.default.prototype.getColor(_infosTable.color); // Selected color
	            var anomericity = this.getAnomericityWithSelection(_infosTable.anomericity); // Anomericity
	            var isomer = this.getIsomerWithSelection(_infosTable.isomer); // Isomer
	            var ringType = this.getRingTypeWithSelection(_infosTable.ringType); // Ring type
	            var donorPosition = this.getDonorPositionWithSelection(_infosTable.donorPosition); // Donor position
	            var acceptorPosition = this.getAcceptorPositionWithSelection(_infosTable.acceptorPosition); // Acceptor position
	            var monoToUpdate = _glycan.getNodeById(clickedNode.id); // Get the node we want to update in the graph
	            monoToUpdate.anomericity = anomericity; // Update anomericity
	            monoToUpdate.ringType = ringType; // Update ring type
	            monoToUpdate.isomer = isomer; // Update isomer
	            var isBisected = newShape.indexOf("bisected") != -1; // Check if the shape is bisected
	            if (isBisected) {
	                newShape = newShape.split("bisected")[1]; // We update the value of the shape by removing keywork "bisected"
	            }
	            var newMonoType = this.getMonoTypeWithColorAndShape(newColor, newShape, isBisected); // Find new monosaccharide type
	            monoToUpdate.monosaccharideType = newMonoType; // Update monosaccharide type
	            if (monoToUpdate == _treeData.node) {
	                rootDonorPosition = donorPosition;
	                rootAcceptorPosition = acceptorPosition;
	            } else {
	                var linkToUpdate = this.findLinkForMono(monoToUpdate, _glycan); // Get the link to update (if exists)
	                var prevDonorPosition = linkToUpdate.donorPosition.value;
	                if (linkToUpdate != null) {
	                    linkToUpdate.donorPosition = donorPosition; // Update donor position
	                    linkToUpdate.acceptorPosition = acceptorPosition; // Update acceptor position
	                }
	                var dx = _XYvalues2.default.prototype.getXYvalue(donorPosition.value).x * 50 - _XYvalues2.default.prototype.getXYvalue(prevDonorPosition).x * 50;
	                var dy = _XYvalues2.default.prototype.getXYvalue(donorPosition.value).y * 50 - _XYvalues2.default.prototype.getXYvalue(prevDonorPosition).y * 50;
	                _shapes = this.moveNodeAndChildren(this.findNodeInTree(_treeData, monoToUpdate), dx, dy, _shapes);
	            }
	            updateNodeInTree(_treeData, monoToUpdate, _treeData, _shapes, _glycan); // Update the node in the tree
	        }
	
	        /**
	         * Search and remove a node from the tree
	         * @param root The node from which we search in the tree
	         * @param node The node we are searching
	         */
	
	    }, {
	        key: "searchAndRemoveNodeInTree",
	        value: function searchAndRemoveNodeInTree(root, node) {
	            if (root.children != null) {
	                // If the root has children
	                for (var i = 0; i < root.children.length; i++) {
	                    // Loop on children
	                    if (root.children[i].node == node) {
	                        // If one child corresponds, remove it
	                        var removed = node;
	                        root.children.splice(i, 1);
	                        return removed;
	                    } else {
	                        node = this.searchAndRemoveNodeInTree(root.children[i], node); // Recursivity call on children
	                    }
	                }
	            }
	            return node;
	        }
	
	        // Visually moves a node and its children
	
	    }, {
	        key: "moveNodeAndChildren",
	        value: function moveNodeAndChildren(node, dx, dy, _shapes) {
	            var stack = [node];
	            while (stack.length != 0) {
	                var n = stack.pop();
	                _shapes[n.node.id][0] += dx;
	                _shapes[n.node.id][1] += dy;
	                if (n.children != undefined) {
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;
	
	                    try {
	                        for (var _iterator = n.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var child = _step.value;
	
	                            stack.push(child);
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	                }
	            }
	
	            return _shapes;
	        }
	
	        /**
	         * Find in the MonosaccharideType enum the corresponding type for a given color and shape
	         * @param color The color of the MonosaccharideType
	         * @param shape The shape of the MonosaccharideType
	         * @param isBisected Boolean telling if the shape is bisected
	         */
	
	    }, {
	        key: "getMonoTypeWithColorAndShape",
	        value: function getMonoTypeWithColorAndShape(color, shape, isBisected) {
	            // Loop on monosaccharide types, and return the one we want
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = _MonosaccharideType2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var type = _step2.value;
	
	                    if (type.color == color && type.shape == shape && type.bisected == isBisected) {
	                        return type;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return _MonosaccharideType2.default.UNDEFINED; // Return undefined if combination doesn't exist
	        }
	
	        /**
	         * Find in the Anomericity enum the corresponding value for a given selected value
	         * @param anomericity The anomericity we are seeking
	         * @returns {*}
	         */
	
	    }, {
	        key: "getAnomericityWithSelection",
	        value: function getAnomericityWithSelection(anomericity) {
	            var anomericityName = void 0;
	            // Get the string associated to display label
	            if (anomericity == "α") {
	                anomericityName = "ALPHA";
	            } else if (anomericity == "β") {
	                anomericityName = "BETA";
	            }
	
	            // Loop on anomericity values, and return the one we want
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = _Anomericity2.default[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var anom = _step3.value;
	                    //sb.Anomericity) {
	                    if (anom.name == anomericityName) return anom;
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            return _Anomericity2.default.UNDEFINED; // Return undefined if not found (not supposed to happen)
	            //return sb.Anomericity.UNDEFINED; // Return undefined if not found (not supposed to happen)
	        }
	
	        /**
	         * Find in the Isomer enum the corresponding value for a given selected value
	         * @param isomer The isomer we are seeking
	         * @returns {*}
	         */
	
	    }, {
	        key: "getIsomerWithSelection",
	        value: function getIsomerWithSelection(isomer) {
	            // Loop on isomers, and return the one we want
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = _Isomer2.default[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var anom = _step4.value;
	                    //sb.Isomer) {
	                    if (anom.name == isomer) return anom;
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            return _Isomer2.default.UNDEFINED; // Return undefined if not found (not supposed to happen)
	            //return sb.Isomer.UNDEFINED; // Return undefined if not found (not supposed to happen)
	        }
	
	        /**
	         * Find in the RingType enum the corresponding value for a given selected value
	         * @param ringType The ring type we are seeking
	         * @returns {*}
	         */
	
	    }, {
	        key: "getRingTypeWithSelection",
	        value: function getRingTypeWithSelection(ringType) {
	            // Loop on ring types, and return the one we want
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;
	
	            try {
	                for (var _iterator5 = _RingType2.default[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var ring = _step5.value;
	                    //sb.RingType) {
	                    if (ring.name == ringType) return ring;
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	
	            return _RingType2.default.UNDEFINED; // Return undefined if not found (not supposed to happen)
	        }
	
	        /**
	         * Find in the AcceptorPosition enum the corresponding value for a given selected value
	         * @param acceptorPosition The acceptor position we are seeking
	         * @returns {*}
	         */
	
	    }, {
	        key: "getAcceptorPositionWithSelection",
	        value: function getAcceptorPositionWithSelection(acceptorPosition) {
	            // Loop on acceptor positions, and return the one we want
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;
	
	            try {
	                for (var _iterator6 = _AcceptorPosition2.default[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var carbon = _step6.value;
	                    //sb.AcceptorPosition) {
	                    if (carbon.value == acceptorPosition) return carbon;
	                }
	            } catch (err) {
	                _didIteratorError6 = true;
	                _iteratorError6 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                        _iterator6.return();
	                    }
	                } finally {
	                    if (_didIteratorError6) {
	                        throw _iteratorError6;
	                    }
	                }
	            }
	
	            return _AcceptorPosition2.default.UNDEFINED; // Return undefined if not found (not supposed to happen)
	        }
	
	        /**
	         * Find in the DonorPosition enum the corresponding value for a given selected value
	         * @param donorPosition The donor position we are seeking
	         * @returns {*}
	         */
	
	    }, {
	        key: "getDonorPositionWithSelection",
	        value: function getDonorPositionWithSelection(donorPosition) {
	            // Loop on donor positions, and return the one we want
	            var _iteratorNormalCompletion7 = true;
	            var _didIteratorError7 = false;
	            var _iteratorError7 = undefined;
	
	            try {
	                for (var _iterator7 = _DonorPosition2.default[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                    var carbon = _step7.value;
	                    //sb.DonorPosition) {
	                    if (carbon.value == donorPosition) return carbon;
	                }
	            } catch (err) {
	                _didIteratorError7 = true;
	                _iteratorError7 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                        _iterator7.return();
	                    }
	                } finally {
	                    if (_didIteratorError7) {
	                        throw _iteratorError7;
	                    }
	                }
	            }
	
	            return _DonorPosition2.default.UNDEFINED; // Return undefined if not found (not supposed to happen)
	        }
	
	        /**
	         * Get color code from a string, using colorDivisions
	         * @param colorName The color string we are seeking the translated code
	         * @returns {string|string|string|string|string|string|*}
	         */
	        /*
	        getColorCodeFromString(colorName) {
	            // Loop on colors, and return the code when found
	            for (let color of colorDivisions) {
	                if (color.division == colorName) {
	                    return color.display_division;
	                }
	            }
	        }
	         */
	
	    }, {
	        key: "generateShapes",
	        value: function generateShapes(_glycan, _shapes, _treeData) {
	            _shapes = [];
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;
	
	            try {
	                for (var _iterator8 = _glycan.graph.nodes()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var mono = _step8.value;
	
	                    var link = void 0;
	                    var _iteratorNormalCompletion9 = true;
	                    var _didIteratorError9 = false;
	                    var _iteratorError9 = undefined;
	
	                    try {
	                        for (var _iterator9 = _glycan.graph.edges()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                            var edge = _step9.value;
	
	                            if (edge.target == mono.id) {
	                                link = edge;
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError9 = true;
	                        _iteratorError9 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                                _iterator9.return();
	                            }
	                        } finally {
	                            if (_didIteratorError9) {
	                                throw _iteratorError9;
	                            }
	                        }
	                    }
	
	                    var node = void 0;
	                    var shape = void 0;
	                    if (_shapes.length === 0) {
	                        // If tree is empty, instantiate the glycan with the monosaccharide as the root
	                        node = { "node": mono };
	                        shape = this.calculateXandYNode(node, _glycan, _shapes);
	                        _shapes[mono.id] = shape;
	
	                        var rootShape = [rootPos.x, rootPos.y];
	                        _shapes.root = rootShape;
	                        rootDonorPosition = _DonorPosition2.default.UNDEFINED;
	                        rootAcceptorPosition = _AcceptorPosition2.default.ONE;
	                        _treeData = this.updateTreeVisualization(undefined, _glycan, _treeData); // Update visualization in the svg
	                    } else {
	                        if (link instanceof _GlycosidicLinkage2.default) {
	                            _treeData = this.updateTreeVisualization(link, _glycan, _treeData);
	                            node = { "node": mono };
	                            shape = this.calculateXandYNode(node, _glycan, _shapes);
	                            _shapes[mono.id] = shape;
	                        } else {
	                            _treeData = this.updateTreeVisualization(link, _glycan, _treeData);
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError8 = true;
	                _iteratorError8 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                        _iterator8.return();
	                    }
	                } finally {
	                    if (_didIteratorError8) {
	                        throw _iteratorError8;
	                    }
	                }
	            }
	
	            return [_shapes, _treeData];
	        }
	
	        /**
	         * Calculate X and Y for a node (using our fixed modification values), recursivity from node to root
	         * @param node The node for which we want to calculate new coordinates
	         */
	
	    }, {
	        key: "calculateXandYNode",
	        value: function calculateXandYNode(node, _glycan, _shapes) {
	            var link = this.findLinkForMono(node.node, _glycan); // Find the link which has the node as target
	            if (typeof link != 'undefined') {
	                // If the link exists
	                var donorPosition = link.donorPosition.value; // Get linked carbon value
	                var sourceX = void 0;
	                var sourceY = void 0;
	                var sourceId = void 0;
	                var sourceNode = void 0;
	
	                // Calculate new coordinates for the wanted node
	                var _iteratorNormalCompletion10 = true;
	                var _didIteratorError10 = false;
	                var _iteratorError10 = undefined;
	
	                try {
	                    for (var _iterator10 = _glycan.graph.nodes()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	                        var n = _step10.value;
	
	                        if (n == link.sourceNode) {
	                            sourceId = n.id;
	                            var source = _shapes[sourceId];
	                            sourceX = source[0];
	                            sourceY = source[1];
	                            sourceNode = n;
	                        }
	                    }
	
	                    // Modifications we have to do on the obtained value
	                } catch (err) {
	                    _didIteratorError10 = true;
	                    _iteratorError10 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
	                            _iterator10.return();
	                        }
	                    } finally {
	                        if (_didIteratorError10) {
	                            throw _iteratorError10;
	                        }
	                    }
	                }
	
	                var usablePos = this.extractUsablePosition(link, _glycan);
	                if (donorPosition !== "undefined") {
	                    donorPosition = parseInt(this._pickUsedPosition(usablePos, link));
	                } else {
	                    if (usablePos.undefined !== "") {
	                        donorPosition = this._pickUsedPosition(usablePos, link);
	                    }
	                    if (donorPosition !== "undefined") {
	                        donorPosition = parseInt(donorPosition);
	                    }
	                }
	
	                var newX = sourceX + _XYvalues2.default.prototype.getXYvalue(donorPosition).x * 50; // Apply the modification on x
	                var newY = sourceY + _XYvalues2.default.prototype.getXYvalue(donorPosition).y * 50; // Apply the modification on y
	
	                var availible = this.isAvailible(newX, newY, _shapes);
	                if (availible != "") {
	                    var newPos = this.findNewSpot(newX, newY, link.donorPosition.value, _shapes, sourceId);
	                    newX = newPos[0];
	                    newY = newPos[1];
	                }
	
	                return [newX, newY]; // Return the obtained coordinates
	            } else {
	                // If the node is the root, just add 150 to the x and 900 to y to display it on the right of the svg
	                //return [OriginalPosition.x, OriginalPosition.y.value];
	                return [rootPos.x, rootPos.y];
	            }
	        }
	
	        /**
	         * Finds the edge in the glycan which has the monosaccharide as target
	         * @param monosaccharide The monosaccharide which is the target fo the searched link
	         * @returns {*}
	         */
	
	    }, {
	        key: "findLinkForMono",
	        value: function findLinkForMono(monosaccharide, _glycan) {
	            var links = _glycan.graph.edges(); // Tree links
	            var _iteratorNormalCompletion11 = true;
	            var _didIteratorError11 = false;
	            var _iteratorError11 = undefined;
	
	            try {
	                for (var _iterator11 = links[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	                    var link = _step11.value;
	
	                    // If the link has the node as target, return the edge from the graph s
	                    if (link.target == monosaccharide.id) {
	                        return _glycan.getEdge(link.sourceNode, link.targetNode);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError11 = true;
	                _iteratorError11 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
	                        _iterator11.return();
	                    }
	                } finally {
	                    if (_didIteratorError11) {
	                        throw _iteratorError11;
	                    }
	                }
	            }
	
	            return undefined;
	        }
	
	        /**
	         * Tells if there is already a node at a given position x, y and returns its id if so
	         * @param x
	         * @param y
	         */
	
	    }, {
	        key: "isAvailible",
	        value: function isAvailible(x, y, _shapes) {
	            for (var shape in _shapes) {
	                if (_shapes[shape][0] == x && _shapes[shape][1] == y) return shape;
	            }
	            return "";
	        }
	
	        /**
	         * Returns a new availible position for a shape to be at.
	         * @param x, y, donorPosition
	         * @param y
	         * @param linked
	         * @param sourceId
	         */
	
	    }, {
	        key: "findNewSpot",
	        value: function findNewSpot(x, y, linked, _shapes) {
	            var sourceId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : clickedNode.id;
	
	            var limit = void 0;
	            var gap = 50;
	            switch (linked) {
	                case 1:
	                    // Right
	                    y = _shapes[sourceId][1];
	                    limit = y;
	                    for (var id in _shapes) {
	                        if (_shapes[id][1] <= limit) {
	                            _shapes = moveShape(id, 0, -1 * gap, _shapes);
	                        }
	                    }
	                    break;
	                case 2:
	                    // Down
	                    x = _shapes[sourceId][0];
	                    limit = x;
	                    for (var _id in _shapes) {
	                        if (_shapes[_id][0] <= limit) // if the shape is higher or same Y as clickedNode
	                            {
	                                _shapes = moveShape(_id, -1 * gap, 0, _shapes);
	                            }
	                    }
	                    break;
	                case 3:
	                    x += this.gap;
	                    while (this.isAvailible(x, y, _shapes) != "") {
	                        x += gap;
	                    }break;
	                case 4:
	                    // Left
	                    y = _shapes[sourceId][1];
	                    limit = y;
	                    for (var _id2 in _shapes) {
	                        if (_shapes[_id2][1] >= limit) {
	                            _shapes = moveShape(_id2, 0, gap, _shapes);
	                        }
	                    }
	                    break;
	                case 5:
	                    // Left
	                    y = _shapes[sourceId][1];
	                    limit = y;
	                    for (var _id3 in _shapes) {
	                        if (_shapes[_id3][1] >= limit) {
	                            _shapes = moveShape(_id3, 0, gap, _shapes);
	                        }
	                    }
	                    break;
	                case 6:
	                    x -= gap;
	                    while (this.isAvailible(x, y, _shapes) != "") {
	                        x -= gap;
	                    }break;
	                case "undefined":
	                    // Up
	                    x = _shapes[sourceId][0];
	                    limit = x;
	                    for (var _id4 in _shapes) {
	                        if (_shapes[_id4][0] >= limit) // if the shape is higher or same Y as clickedNode
	                            {
	                                _shapes = moveShape(_id4, gap, 0, _shapes);
	                            }
	                    }
	                    break;
	            }
	            return [x, y];
	        }
	    }, {
	        key: "findNodeInTree",
	        value: function findNodeInTree(tree, node1) {
	            var stack = [],
	                node = void 0,
	                i = void 0;
	            stack.push(tree);
	
	            while (stack.length > 0) {
	                node = stack.pop();
	                if (node.node == node1) {
	                    return node;
	                } else if (node.children != undefined) {
	                    for (i = 0; i < node.children.length; i += 1) {
	                        stack.push(node.children[i]);
	                    }
	                }
	            }
	            return null;
	        }
	    }, {
	        key: "extractUsablePosition",
	        value: function extractUsablePosition(_edge, _glycan) {
	            var ret = {
	                "undefined": ""
	            };
	
	            //if (this.getNodeChild(_edge.sourceNode, _glycan).length === 1) return ret;
	
	            var emFunc = new _emFunction2.default();
	
	            for (var i = 1; i < emFunc.getNumberCarbons(_edge.sourceNode); i++) {
	                ret[i] = "";
	            }
	
	            var _iteratorNormalCompletion12 = true;
	            var _didIteratorError12 = false;
	            var _iteratorError12 = undefined;
	
	            try {
	                for (var _iterator12 = _glycan.graph.edges()[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	                    var edge = _step12.value;
	
	                    if (edge.targetNode === _edge.sourceNode && edge.acceptorPosition !== _AcceptorPosition2.default.UNDEFINED) {
	                        ret[edge.acceptorPosition.value] = edge;
	                    }
	                    if (edge.sourceNode === _edge.sourceNode) {
	                        if (edge.donorPosition !== _DonorPosition2.default.UNDEFINED) {
	                            ret[edge.donorPosition.value] = edge;
	                        } else {
	                            if (ret.undefined === "") {
	                                ret.undefined = edge;
	                            } else {
	                                ret[this._pickUsablePosition(ret)] = edge;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError12 = true;
	                _iteratorError12 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
	                        _iterator12.return();
	                    }
	                } finally {
	                    if (_didIteratorError12) {
	                        throw _iteratorError12;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: "getNodeChild",
	        value: function getNodeChild(_node, _glycan) {
	            var ret = [];
	            _glycan.graph.edges().map(function (edge) {
	                if (edge.source === _node.id) {
	                    ret.push(edge.targetNode);
	                }
	            });
	
	            return ret;
	        }
	    }, {
	        key: "_pickUsedPosition",
	        value: function _pickUsedPosition(_usablePosition, _value) {
	            var key = Object.keys(_usablePosition).filter(function (key) {
	                if (_usablePosition[key] === _value) return key;
	            });
	
	            return key[0];
	        }
	    }, {
	        key: "_pickUsablePosition",
	        value: function _pickUsablePosition(_usablePosition) {
	            var key = Object.keys(_usablePosition).filter(function (key) {
	                if (_usablePosition[key] === "") return key;
	            });
	
	            return key.length === 0 ? -1 : key[0];
	        }
	    }]);
	
	    return visFunction;
	}();
	
	/**
	 * Update a node in the tree, and then display the tree again
	 * @param root The root of the tree
	 * @param newMonosaccharide The updated monosaccharide
	 */
	
	
	exports.default = visFunction;
	var updateNodeInTree = function updateNodeInTree(root, newMonosaccharide, _treeData, _shapes, _glycan) {
	    // Compare id's, and update if found the node to update
	    if (root.node.id == newMonosaccharide.id) {
	        root.node = newMonosaccharide;
	    } else if (root.children != null) {
	        // If has children, recursivity on each child to find the node to uodate
	        var i = void 0;
	        var result = null;
	        for (i = 0; result == null && i < root.children.length; i++) {
	            updateNodeInTree(root.children[i], newMonosaccharide, _treeData, _shapes, _glycan);
	        }
	    }
	    displayTree(_treeData, _shapes, _glycan); // Display the tree after the update
	};
	
	/**
	 * Visually moves a node
	 * @param id, addX, addY
	 */
	var moveShape = function moveShape(id, addX, addY, _shapes) {
	    _shapes[id][0] += addX;
	    _shapes[id][1] += addY;
	
	    return _shapes;
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MonosaccharideGlycoCT = __webpack_require__(15);
	
	var _MonosaccharideGlycoCT2 = _interopRequireDefault(_MonosaccharideGlycoCT);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var emFunction = function () {
	    function emFunction() {
	        _classCallCheck(this, emFunction);
	    }
	
	    _createClass(emFunction, [{
	        key: "generateTree",
	
	
	        /**
	         * Creates a tree from the Glycan
	         * Called after using the parser, which only returns a Glycan
	         * @returns {Array}
	         */
	        value: function generateTree(_glycan) {
	            // Put parentId in each node
	            var nodes = _glycan.graph.nodes();
	            for (var nodePos in nodes) {
	                var parent = void 0;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = _glycan.graph.edges()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var edge = _step.value;
	
	                        if (edge.target == nodes[nodePos].id) {
	                            parent = edge.sourceNode;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                if (parent !== undefined) nodes[nodePos] = { "node": nodes[nodePos], "parentId": parent.id, "children": [] };else nodes[nodePos] = { "node": nodes[nodePos], "children": [] };
	            }
	
	            // Switch to tree view
	            var map = {},
	                node = void 0,
	                roots = [];
	            var parentsIds = {};
	            var nodesDepths = {};
	            for (var i = 0; i < nodes.length; i += 1) {
	                node = nodes[i];
	                node.children = [];
	                map[node.node.id] = i; // use map to look-up the parents
	                if (node.parentId !== undefined) {
	                    nodes[map[node.parentId]].children.push(node);
	                    parentsIds[node.node.id] = node;
	                    if (node.node.id !== node.parentId) nodes[map[node.parentId]].parent = parentsIds[node.parentId];
	
	                    if (nodesDepths[node.node.id] === undefined) {
	                        nodes[map[node.parentId]].depth = nodesDepths[node.parentId] + 1;
	                        nodesDepths[node.node.id] = nodesDepths[node.parentId] + 1;
	                    }
	
	                    delete nodes[map[node.parentId]].parentId;
	                } else {
	                    roots = node;
	                    parentsIds[node.node.id] = node;
	                    nodesDepths[node.node.id] = 0;
	                    roots.depth = 0;
	                }
	            }
	
	            delete roots.parent;
	
	            return roots;
	        }
	
	        /**
	         * Returns the number of carbons the residue can be linked by
	         */
	
	    }, {
	        key: "getNumberCarbons",
	        value: function getNumberCarbons(node) {
	            if (node === undefined) {
	                return 6;
	            }
	            var monoName = node.monosaccharideType.name;
	            var monoType = _MonosaccharideGlycoCT2.default[monoName];
	            if (monoType === undefined) {
	                if (monoName.startsWith("d")) {
	                    monoType = _MonosaccharideGlycoCT2.default[monoName.substring(0, 4)];
	                }
	                if (monoName.startsWith("Sixd")) {
	                    monoType = _MonosaccharideGlycoCT2.default[monoName.substring(0, 7)];
	                }
	                if (monoName.startsWith("Neu")) {
	                    monoType = _MonosaccharideGlycoCT2.default.Kdn;
	                }
	                if (monoType === undefined) {
	                    monoType = _MonosaccharideGlycoCT2.default[monoName.substring(0, 3)];
	                }
	
	                /*
	                monoType = MonosaccharideGlycoCT[monoName.substring(0,3)];
	                if (monoType === undefined)
	                {
	                    monoType = MonosaccharideGlycoCT[monoName.substring(0,4)];
	                    if (monoType === undefined && monoName.substring(0,3) === "Neu")
	                    {
	                        monoType = MonosaccharideGlycoCT.Kdn;
	                    }
	                }
	                 */
	            }
	            var glycoct = monoType.glycoct;
	            if (glycoct.indexOf("PEN") !== -1) {
	                return 5;
	            } else if (glycoct.indexOf("NON") !== -1) {
	                return 9;
	            } else {
	                return 6;
	            }
	        }
	    }]);
	
	    return emFunction;
	}();
	
	exports.default = emFunction;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Renaud on 18/08/2017.
	 */
	
	var vkbeautify = __webpack_require__(37);
	
	var ImageExporter = function () {
	    function ImageExporter() {
	        _classCallCheck(this, ImageExporter);
	    }
	
	    _createClass(ImageExporter, [{
	        key: "get_xml_svg_code",
	        value: function get_xml_svg_code(div_svg) {
	            // Get the d3js SVG element
	            var tmp = document.getElementById(div_svg);
	            var svg = tmp.getElementsByTagName("svg")[0];
	
	            // Extract the data as SVG text string
	            var xml = new XMLSerializer().serializeToString(svg);
	            return xml.replace('xmlns="http://www.w3.org/2000/svg"', 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"');
	        }
	    }, {
	        key: "get_html_svg_code",
	        value: function get_html_svg_code(div_svg) {
	            // Get the d3js SVG element
	            var tmp = document.getElementById(div_svg);
	            var svg = tmp.getElementsByTagName("svg")[0];
	
	            // Extract the data as SVG text string
	            return svg.innerHTML;
	        }
	    }, {
	        key: "show_svg_code",
	        value: function show_svg_code(div_svg, div_svg_code) {
	            var svg_xml = this.get_xml_svg_code(div_svg);
	
	            //Optional: prettify the XML with proper indentations
	            svg_xml = vkbeautify.xml(svg_xml);
	
	            // Set the content of the <pre> element with the XML
	            //    $("#svg_code").text(svg_xml);
	            $(div_svg_code).text(svg_xml);
	
	            //Optional: Use Google-Code-Prettifier to add colors.
	            //prettyPrint();
	        }
	    }, {
	        key: "save",
	        value: function save() {
	
	            var html = this.get_xml_svg_code("viz");
	
	            var imgsrc = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(html)));
	
	            return imgsrc;
	        }
	    }, {
	        key: "download",
	        value: function download(imgsrc) {
	
	            var image = new Image();
	            image.src = imgsrc;
	            image.onload = function () {
	
	                var link = document.createElement("a");
	
	                link.addEventListener('click', function (ev) {
	                    link.download = 'glycan.svg';
	                    link.href = imgsrc;
	                    link.id = "link_img";
	                }, false);
	                document.body.appendChild(link);
	
	                link.click();
	            };
	        }
	    }]);
	
	    return ImageExporter;
	}();
	
	exports.default = ImageExporter;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
	  var d3 = {
	    version: "3.5.17"
	  };
	  var d3_arraySlice = [].slice, d3_array = function(list) {
	    return d3_arraySlice.call(list);
	  };
	  var d3_document = this.document;
	  function d3_documentElement(node) {
	    return node && (node.ownerDocument || node.document || node).documentElement;
	  }
	  function d3_window(node) {
	    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
	  }
	  if (d3_document) {
	    try {
	      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
	    } catch (e) {
	      d3_array = function(list) {
	        var i = list.length, array = new Array(i);
	        while (i--) array[i] = list[i];
	        return array;
	      };
	    }
	  }
	  if (!Date.now) Date.now = function() {
	    return +new Date();
	  };
	  if (d3_document) {
	    try {
	      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
	    } catch (error) {
	      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
	      d3_element_prototype.setAttribute = function(name, value) {
	        d3_element_setAttribute.call(this, name, value + "");
	      };
	      d3_element_prototype.setAttributeNS = function(space, local, value) {
	        d3_element_setAttributeNS.call(this, space, local, value + "");
	      };
	      d3_style_prototype.setProperty = function(name, value, priority) {
	        d3_style_setProperty.call(this, name, value + "", priority);
	      };
	    }
	  }
	  d3.ascending = d3_ascending;
	  function d3_ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	  d3.descending = function(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  };
	  d3.min = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
	    }
	    return a;
	  };
	  d3.max = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
	    }
	    return a;
	  };
	  d3.extent = function(array, f) {
	    var i = -1, n = array.length, a, b, c;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	    return [ a, c ];
	  };
	  function d3_number(x) {
	    return x === null ? NaN : +x;
	  }
	  function d3_numeric(x) {
	    return !isNaN(x);
	  }
	  d3.sum = function(array, f) {
	    var s = 0, n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
	    } else {
	      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
	    }
	    return s;
	  };
	  d3.mean = function(array, f) {
	    var s = 0, n = array.length, a, i = -1, j = n;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
	    }
	    if (j) return s / j;
	  };
	  d3.quantile = function(values, p) {
	    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
	    return e ? v + e * (values[h] - v) : v;
	  };
	  d3.median = function(array, f) {
	    var numbers = [], n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
	    }
	    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
	  };
	  d3.variance = function(array, f) {
	    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
	    if (arguments.length === 1) {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    } else {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	    if (j > 1) return s / (j - 1);
	  };
	  d3.deviation = function() {
	    var v = d3.variance.apply(this, arguments);
	    return v ? Math.sqrt(v) : v;
	  };
	  function d3_bisector(compare) {
	    return {
	      left: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }
	  var d3_bisect = d3_bisector(d3_ascending);
	  d3.bisectLeft = d3_bisect.left;
	  d3.bisect = d3.bisectRight = d3_bisect.right;
	  d3.bisector = function(f) {
	    return d3_bisector(f.length === 1 ? function(d, x) {
	      return d3_ascending(f(d), x);
	    } : f);
	  };
	  d3.shuffle = function(array, i0, i1) {
	    if ((m = arguments.length) < 3) {
	      i1 = array.length;
	      if (m < 2) i0 = 0;
	    }
	    var m = i1 - i0, t, i;
	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
	    }
	    return array;
	  };
	  d3.permute = function(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  };
	  d3.pairs = function(array) {
	    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
	    return pairs;
	  };
	  d3.transpose = function(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  };
	  function d3_transposeLength(d) {
	    return d.length;
	  }
	  d3.zip = function() {
	    return d3.transpose(arguments);
	  };
	  d3.keys = function(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  };
	  d3.values = function(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  };
	  d3.entries = function(map) {
	    var entries = [];
	    for (var key in map) entries.push({
	      key: key,
	      value: map[key]
	    });
	    return entries;
	  };
	  d3.merge = function(arrays) {
	    var n = arrays.length, m, i = -1, j = 0, merged, array;
	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);
	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }
	    return merged;
	  };
	  var abs = Math.abs;
	  d3.range = function(start, stop, step) {
	    if (arguments.length < 3) {
	      step = 1;
	      if (arguments.length < 2) {
	        stop = start;
	        start = 0;
	      }
	    }
	    if ((stop - start) / step === Infinity) throw new Error("infinite range");
	    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
	    start *= k, stop *= k, step *= k;
	    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
	    return range;
	  };
	  function d3_range_integerScale(x) {
	    var k = 1;
	    while (x * k % 1) k *= 10;
	    return k;
	  }
	  function d3_class(ctor, properties) {
	    for (var key in properties) {
	      Object.defineProperty(ctor.prototype, key, {
	        value: properties[key],
	        enumerable: false
	      });
	    }
	  }
	  d3.map = function(object, f) {
	    var map = new d3_Map();
	    if (object instanceof d3_Map) {
	      object.forEach(function(key, value) {
	        map.set(key, value);
	      });
	    } else if (Array.isArray(object)) {
	      var i = -1, n = object.length, o;
	      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
	    } else {
	      for (var key in object) map.set(key, object[key]);
	    }
	    return map;
	  };
	  function d3_Map() {
	    this._ = Object.create(null);
	  }
	  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
	  d3_class(d3_Map, {
	    has: d3_map_has,
	    get: function(key) {
	      return this._[d3_map_escape(key)];
	    },
	    set: function(key, value) {
	      return this._[d3_map_escape(key)] = value;
	    },
	    remove: d3_map_remove,
	    keys: d3_map_keys,
	    values: function() {
	      var values = [];
	      for (var key in this._) values.push(this._[key]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var key in this._) entries.push({
	        key: d3_map_unescape(key),
	        value: this._[key]
	      });
	      return entries;
	    },
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
	    }
	  });
	  function d3_map_escape(key) {
	    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
	  }
	  function d3_map_unescape(key) {
	    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
	  }
	  function d3_map_has(key) {
	    return d3_map_escape(key) in this._;
	  }
	  function d3_map_remove(key) {
	    return (key = d3_map_escape(key)) in this._ && delete this._[key];
	  }
	  function d3_map_keys() {
	    var keys = [];
	    for (var key in this._) keys.push(d3_map_unescape(key));
	    return keys;
	  }
	  function d3_map_size() {
	    var size = 0;
	    for (var key in this._) ++size;
	    return size;
	  }
	  function d3_map_empty() {
	    for (var key in this._) return false;
	    return true;
	  }
	  d3.nest = function() {
	    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
	    function map(mapType, array, depth) {
	      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
	      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
	          values.push(object);
	        } else {
	          valuesByKey.set(keyValue, [ object ]);
	        }
	      }
	      if (mapType) {
	        object = mapType();
	        setter = function(keyValue, values) {
	          object.set(keyValue, map(mapType, values, depth));
	        };
	      } else {
	        object = {};
	        setter = function(keyValue, values) {
	          object[keyValue] = map(mapType, values, depth);
	        };
	      }
	      valuesByKey.forEach(setter);
	      return object;
	    }
	    function entries(map, depth) {
	      if (depth >= keys.length) return map;
	      var array = [], sortKey = sortKeys[depth++];
	      map.forEach(function(key, keyMap) {
	        array.push({
	          key: key,
	          values: entries(keyMap, depth)
	        });
	      });
	      return sortKey ? array.sort(function(a, b) {
	        return sortKey(a.key, b.key);
	      }) : array;
	    }
	    nest.map = function(array, mapType) {
	      return map(mapType, array, 0);
	    };
	    nest.entries = function(array) {
	      return entries(map(d3.map, array, 0), 0);
	    };
	    nest.key = function(d) {
	      keys.push(d);
	      return nest;
	    };
	    nest.sortKeys = function(order) {
	      sortKeys[keys.length - 1] = order;
	      return nest;
	    };
	    nest.sortValues = function(order) {
	      sortValues = order;
	      return nest;
	    };
	    nest.rollup = function(f) {
	      rollup = f;
	      return nest;
	    };
	    return nest;
	  };
	  d3.set = function(array) {
	    var set = new d3_Set();
	    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
	    return set;
	  };
	  function d3_Set() {
	    this._ = Object.create(null);
	  }
	  d3_class(d3_Set, {
	    has: d3_map_has,
	    add: function(key) {
	      this._[d3_map_escape(key += "")] = true;
	      return key;
	    },
	    remove: d3_map_remove,
	    values: d3_map_keys,
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key));
	    }
	  });
	  d3.behavior = {};
	  function d3_identity(d) {
	    return d;
	  }
	  d3.rebind = function(target, source) {
	    var i = 1, n = arguments.length, method;
	    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
	    return target;
	  };
	  function d3_rebind(target, source, method) {
	    return function() {
	      var value = method.apply(source, arguments);
	      return value === source ? target : value;
	    };
	  }
	  function d3_vendorSymbol(object, name) {
	    if (name in object) return name;
	    name = name.charAt(0).toUpperCase() + name.slice(1);
	    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
	      var prefixName = d3_vendorPrefixes[i] + name;
	      if (prefixName in object) return prefixName;
	    }
	  }
	  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
	  function d3_noop() {}
	  d3.dispatch = function() {
	    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    return dispatch;
	  };
	  function d3_dispatch() {}
	  d3_dispatch.prototype.on = function(type, listener) {
	    var i = type.indexOf("."), name = "";
	    if (i >= 0) {
	      name = type.slice(i + 1);
	      type = type.slice(0, i);
	    }
	    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
	    if (arguments.length === 2) {
	      if (listener == null) for (type in this) {
	        if (this.hasOwnProperty(type)) this[type].on(name, null);
	      }
	      return this;
	    }
	  };
	  function d3_dispatch_event(dispatch) {
	    var listeners = [], listenerByName = new d3_Map();
	    function event() {
	      var z = listeners, i = -1, n = z.length, l;
	      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
	      return dispatch;
	    }
	    event.on = function(name, listener) {
	      var l = listenerByName.get(name), i;
	      if (arguments.length < 2) return l && l.on;
	      if (l) {
	        l.on = null;
	        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
	        listenerByName.remove(name);
	      }
	      if (listener) listeners.push(listenerByName.set(name, {
	        on: listener
	      }));
	      return dispatch;
	    };
	    return event;
	  }
	  d3.event = null;
	  function d3_eventPreventDefault() {
	    d3.event.preventDefault();
	  }
	  function d3_eventSource() {
	    var e = d3.event, s;
	    while (s = e.sourceEvent) e = s;
	    return e;
	  }
	  function d3_eventDispatch(target) {
	    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    dispatch.of = function(thiz, argumentz) {
	      return function(e1) {
	        try {
	          var e0 = e1.sourceEvent = d3.event;
	          e1.target = target;
	          d3.event = e1;
	          dispatch[e1.type].apply(thiz, argumentz);
	        } finally {
	          d3.event = e0;
	        }
	      };
	    };
	    return dispatch;
	  }
	  d3.requote = function(s) {
	    return s.replace(d3_requote_re, "\\$&");
	  };
	  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  var d3_subclass = {}.__proto__ ? function(object, prototype) {
	    object.__proto__ = prototype;
	  } : function(object, prototype) {
	    for (var property in prototype) object[property] = prototype[property];
	  };
	  function d3_selection(groups) {
	    d3_subclass(groups, d3_selectionPrototype);
	    return groups;
	  }
	  var d3_select = function(s, n) {
	    return n.querySelector(s);
	  }, d3_selectAll = function(s, n) {
	    return n.querySelectorAll(s);
	  }, d3_selectMatches = function(n, s) {
	    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
	    d3_selectMatches = function(n, s) {
	      return d3_selectMatcher.call(n, s);
	    };
	    return d3_selectMatches(n, s);
	  };
	  if (typeof Sizzle === "function") {
	    d3_select = function(s, n) {
	      return Sizzle(s, n)[0] || null;
	    };
	    d3_selectAll = Sizzle;
	    d3_selectMatches = Sizzle.matchesSelector;
	  }
	  d3.selection = function() {
	    return d3.select(d3_document.documentElement);
	  };
	  var d3_selectionPrototype = d3.selection.prototype = [];
	  d3_selectionPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, group, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
	          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selector(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_select(selector, this);
	    };
	  }
	  d3_selectionPrototype.selectAll = function(selector) {
	    var subgroups = [], subgroup, node;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
	          subgroup.parentNode = node;
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selectorAll(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_selectAll(selector, this);
	    };
	  }
	  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
	  var d3_nsPrefix = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: d3_nsXhtml,
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };
	  d3.ns = {
	    prefix: d3_nsPrefix,
	    qualify: function(name) {
	      var i = name.indexOf(":"), prefix = name;
	      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	      return d3_nsPrefix.hasOwnProperty(prefix) ? {
	        space: d3_nsPrefix[prefix],
	        local: name
	      } : name;
	    }
	  };
	  d3_selectionPrototype.attr = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node();
	        name = d3.ns.qualify(name);
	        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
	      }
	      for (value in name) this.each(d3_selection_attr(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_attr(name, value));
	  };
	  function d3_selection_attr(name, value) {
	    name = d3.ns.qualify(name);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrConstant() {
	      this.setAttribute(name, value);
	    }
	    function attrConstantNS() {
	      this.setAttributeNS(name.space, name.local, value);
	    }
	    function attrFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
	    }
	    function attrFunctionNS() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
	    }
	    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
	  }
	  function d3_collapse(s) {
	    return s.trim().replace(/\s+/g, " ");
	  }
	  d3_selectionPrototype.classed = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
	        if (value = node.classList) {
	          while (++i < n) if (!value.contains(name[i])) return false;
	        } else {
	          value = node.getAttribute("class");
	          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
	        }
	        return true;
	      }
	      for (value in name) this.each(d3_selection_classed(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_classed(name, value));
	  };
	  function d3_selection_classedRe(name) {
	    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
	  }
	  function d3_selection_classes(name) {
	    return (name + "").trim().split(/^|\s+/);
	  }
	  function d3_selection_classed(name, value) {
	    name = d3_selection_classes(name).map(d3_selection_classedName);
	    var n = name.length;
	    function classedConstant() {
	      var i = -1;
	      while (++i < n) name[i](this, value);
	    }
	    function classedFunction() {
	      var i = -1, x = value.apply(this, arguments);
	      while (++i < n) name[i](this, x);
	    }
	    return typeof value === "function" ? classedFunction : classedConstant;
	  }
	  function d3_selection_classedName(name) {
	    var re = d3_selection_classedRe(name);
	    return function(node, value) {
	      if (c = node.classList) return value ? c.add(name) : c.remove(name);
	      var c = node.getAttribute("class") || "";
	      if (value) {
	        re.lastIndex = 0;
	        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
	      } else {
	        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
	      }
	    };
	  }
	  d3_selectionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
	        return this;
	      }
	      if (n < 2) {
	        var node = this.node();
	        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
	      }
	      priority = "";
	    }
	    return this.each(d3_selection_style(name, value, priority));
	  };
	  function d3_selection_style(name, value, priority) {
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleConstant() {
	      this.style.setProperty(name, value, priority);
	    }
	    function styleFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
	    }
	    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
	  }
	  d3_selectionPrototype.property = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") return this.node()[name];
	      for (value in name) this.each(d3_selection_property(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_property(name, value));
	  };
	  function d3_selection_property(name, value) {
	    function propertyNull() {
	      delete this[name];
	    }
	    function propertyConstant() {
	      this[name] = value;
	    }
	    function propertyFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) delete this[name]; else this[name] = x;
	    }
	    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
	  }
	  d3_selectionPrototype.text = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    } : value == null ? function() {
	      this.textContent = "";
	    } : function() {
	      this.textContent = value;
	    }) : this.node().textContent;
	  };
	  d3_selectionPrototype.html = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    } : value == null ? function() {
	      this.innerHTML = "";
	    } : function() {
	      this.innerHTML = value;
	    }) : this.node().innerHTML;
	  };
	  d3_selectionPrototype.append = function(name) {
	    name = d3_selection_creator(name);
	    return this.select(function() {
	      return this.appendChild(name.apply(this, arguments));
	    });
	  };
	  function d3_selection_creator(name) {
	    function create() {
	      var document = this.ownerDocument, namespace = this.namespaceURI;
	      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
	    }
	    function createNS() {
	      return this.ownerDocument.createElementNS(name.space, name.local);
	    }
	    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
	  }
	  d3_selectionPrototype.insert = function(name, before) {
	    name = d3_selection_creator(name);
	    before = d3_selection_selector(before);
	    return this.select(function() {
	      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
	    });
	  };
	  d3_selectionPrototype.remove = function() {
	    return this.each(d3_selectionRemove);
	  };
	  function d3_selectionRemove() {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  }
	  d3_selectionPrototype.data = function(value, key) {
	    var i = -1, n = this.length, group, node;
	    if (!arguments.length) {
	      value = new Array(n = (group = this[0]).length);
	      while (++i < n) {
	        if (node = group[i]) {
	          value[i] = node.__data__;
	        }
	      }
	      return value;
	    }
	    function bind(group, groupData) {
	      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
	      if (key) {
	        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
	        for (i = -1; ++i < n; ) {
	          if (node = group[i]) {
	            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
	              exitNodes[i] = node;
	            } else {
	              nodeByKeyValue.set(keyValue, node);
	            }
	            keyValues[i] = keyValue;
	          }
	        }
	        for (i = -1; ++i < m; ) {
	          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          } else if (node !== true) {
	            updateNodes[i] = node;
	            node.__data__ = nodeData;
	          }
	          nodeByKeyValue.set(keyValue, true);
	        }
	        for (i = -1; ++i < n; ) {
	          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
	            exitNodes[i] = group[i];
	          }
	        }
	      } else {
	        for (i = -1; ++i < n0; ) {
	          node = group[i];
	          nodeData = groupData[i];
	          if (node) {
	            node.__data__ = nodeData;
	            updateNodes[i] = node;
	          } else {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          }
	        }
	        for (;i < m; ++i) {
	          enterNodes[i] = d3_selection_dataNode(groupData[i]);
	        }
	        for (;i < n; ++i) {
	          exitNodes[i] = group[i];
	        }
	      }
	      enterNodes.update = updateNodes;
	      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
	      enter.push(enterNodes);
	      update.push(updateNodes);
	      exit.push(exitNodes);
	    }
	    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
	    if (typeof value === "function") {
	      while (++i < n) {
	        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
	      }
	    } else {
	      while (++i < n) {
	        bind(group = this[i], value);
	      }
	    }
	    update.enter = function() {
	      return enter;
	    };
	    update.exit = function() {
	      return exit;
	    };
	    return update;
	  };
	  function d3_selection_dataNode(data) {
	    return {
	      __data__: data
	    };
	  }
	  d3_selectionPrototype.datum = function(value) {
	    return arguments.length ? this.property("__data__", value) : this.property("__data__");
	  };
	  d3_selectionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_filter(selector) {
	    return function() {
	      return d3_selectMatches(this, selector);
	    };
	  }
	  d3_selectionPrototype.order = function() {
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }
	    return this;
	  };
	  d3_selectionPrototype.sort = function(comparator) {
	    comparator = d3_selection_sortComparator.apply(this, arguments);
	    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
	    return this.order();
	  };
	  function d3_selection_sortComparator(comparator) {
	    if (!arguments.length) comparator = d3_ascending;
	    return function(a, b) {
	      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
	    };
	  }
	  d3_selectionPrototype.each = function(callback) {
	    return d3_selection_each(this, function(node, i, j) {
	      callback.call(node, node.__data__, i, j);
	    });
	  };
	  function d3_selection_each(groups, callback) {
	    for (var j = 0, m = groups.length; j < m; j++) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
	        if (node = group[i]) callback(node, i, j);
	      }
	    }
	    return groups;
	  }
	  d3_selectionPrototype.call = function(callback) {
	    var args = d3_array(arguments);
	    callback.apply(args[0] = this, args);
	    return this;
	  };
	  d3_selectionPrototype.empty = function() {
	    return !this.node();
	  };
	  d3_selectionPrototype.node = function() {
	    for (var j = 0, m = this.length; j < m; j++) {
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }
	    return null;
	  };
	  d3_selectionPrototype.size = function() {
	    var n = 0;
	    d3_selection_each(this, function() {
	      ++n;
	    });
	    return n;
	  };
	  function d3_selection_enter(selection) {
	    d3_subclass(selection, d3_selection_enterPrototype);
	    return selection;
	  }
	  var d3_selection_enterPrototype = [];
	  d3.selection.enter = d3_selection_enter;
	  d3.selection.enter.prototype = d3_selection_enterPrototype;
	  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
	  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
	  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
	  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
	  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
	  d3_selection_enterPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, upgroup, group, node;
	    for (var j = -1, m = this.length; ++j < m; ) {
	      upgroup = (group = this[j]).update;
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = group.parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
	          subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  d3_selection_enterPrototype.insert = function(name, before) {
	    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
	    return d3_selectionPrototype.insert.call(this, name, before);
	  };
	  function d3_selection_enterInsertBefore(enter) {
	    var i0, j0;
	    return function(d, i, j) {
	      var group = enter[j].update, n = group.length, node;
	      if (j != j0) j0 = j, i0 = 0;
	      if (i >= i0) i0 = i + 1;
	      while (!(node = group[i0]) && ++i0 < n) ;
	      return node;
	    };
	  }
	  d3.select = function(node) {
	    var group;
	    if (typeof node === "string") {
	      group = [ d3_select(node, d3_document) ];
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = [ node ];
	      group.parentNode = d3_documentElement(node);
	    }
	    return d3_selection([ group ]);
	  };
	  d3.selectAll = function(nodes) {
	    var group;
	    if (typeof nodes === "string") {
	      group = d3_array(d3_selectAll(nodes, d3_document));
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = d3_array(nodes);
	      group.parentNode = null;
	    }
	    return d3_selection([ group ]);
	  };
	  d3_selectionPrototype.on = function(type, listener, capture) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof type !== "string") {
	        if (n < 2) listener = false;
	        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
	        return this;
	      }
	      if (n < 2) return (n = this.node()["__on" + type]) && n._;
	      capture = false;
	    }
	    return this.each(d3_selection_on(type, listener, capture));
	  };
	  function d3_selection_on(type, listener, capture) {
	    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
	    if (i > 0) type = type.slice(0, i);
	    var filter = d3_selection_onFilters.get(type);
	    if (filter) type = filter, wrap = d3_selection_onFilter;
	    function onRemove() {
	      var l = this[name];
	      if (l) {
	        this.removeEventListener(type, l, l.$);
	        delete this[name];
	      }
	    }
	    function onAdd() {
	      var l = wrap(listener, d3_array(arguments));
	      onRemove.call(this);
	      this.addEventListener(type, this[name] = l, l.$ = capture);
	      l._ = listener;
	    }
	    function removeAll() {
	      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
	      for (var name in this) {
	        if (match = name.match(re)) {
	          var l = this[name];
	          this.removeEventListener(match[1], l, l.$);
	          delete this[name];
	        }
	      }
	    }
	    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
	  }
	  var d3_selection_onFilters = d3.map({
	    mouseenter: "mouseover",
	    mouseleave: "mouseout"
	  });
	  if (d3_document) {
	    d3_selection_onFilters.forEach(function(k) {
	      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
	    });
	  }
	  function d3_selection_onListener(listener, argumentz) {
	    return function(e) {
	      var o = d3.event;
	      d3.event = e;
	      argumentz[0] = this.__data__;
	      try {
	        listener.apply(this, argumentz);
	      } finally {
	        d3.event = o;
	      }
	    };
	  }
	  function d3_selection_onFilter(listener, argumentz) {
	    var l = d3_selection_onListener(listener, argumentz);
	    return function(e) {
	      var target = this, related = e.relatedTarget;
	      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
	        l.call(target, e);
	      }
	    };
	  }
	  var d3_event_dragSelect, d3_event_dragId = 0;
	  function d3_event_dragSuppress(node) {
	    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
	    if (d3_event_dragSelect == null) {
	      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
	    }
	    if (d3_event_dragSelect) {
	      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
	      style[d3_event_dragSelect] = "none";
	    }
	    return function(suppressClick) {
	      w.on(name, null);
	      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
	      if (suppressClick) {
	        var off = function() {
	          w.on(click, null);
	        };
	        w.on(click, function() {
	          d3_eventPreventDefault();
	          off();
	        }, true);
	        setTimeout(off, 0);
	      }
	    };
	  }
	  d3.mouse = function(container) {
	    return d3_mousePoint(container, d3_eventSource());
	  };
	  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
	  function d3_mousePoint(container, e) {
	    if (e.changedTouches) e = e.changedTouches[0];
	    var svg = container.ownerSVGElement || container;
	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();
	      if (d3_mouse_bug44083 < 0) {
	        var window = d3_window(container);
	        if (window.scrollX || window.scrollY) {
	          svg = d3.select("body").append("svg").style({
	            position: "absolute",
	            top: 0,
	            left: 0,
	            margin: 0,
	            padding: 0,
	            border: "none"
	          }, "important");
	          var ctm = svg[0][0].getScreenCTM();
	          d3_mouse_bug44083 = !(ctm.f || ctm.e);
	          svg.remove();
	        }
	      }
	      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
	      point.y = e.clientY;
	      point = point.matrixTransform(container.getScreenCTM().inverse());
	      return [ point.x, point.y ];
	    }
	    var rect = container.getBoundingClientRect();
	    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
	  }
	  d3.touch = function(container, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
	    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return d3_mousePoint(container, touch);
	      }
	    }
	  };
	  d3.behavior.drag = function() {
	    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
	    function drag() {
	      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
	    }
	    function dragstart(id, position, subject, move, end) {
	      return function() {
	        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
	        if (origin) {
	          dragOffset = origin.apply(that, arguments);
	          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
	        } else {
	          dragOffset = [ 0, 0 ];
	        }
	        dispatch({
	          type: "dragstart"
	        });
	        function moved() {
	          var position1 = position(parent, dragId), dx, dy;
	          if (!position1) return;
	          dx = position1[0] - position0[0];
	          dy = position1[1] - position0[1];
	          dragged |= dx | dy;
	          position0 = position1;
	          dispatch({
	            type: "drag",
	            x: position1[0] + dragOffset[0],
	            y: position1[1] + dragOffset[1],
	            dx: dx,
	            dy: dy
	          });
	        }
	        function ended() {
	          if (!position(parent, dragId)) return;
	          dragSubject.on(move + dragName, null).on(end + dragName, null);
	          dragRestore(dragged);
	          dispatch({
	            type: "dragend"
	          });
	        }
	      };
	    }
	    drag.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return drag;
	    };
	    return d3.rebind(drag, event, "on");
	  };
	  function d3_behavior_dragTouchId() {
	    return d3.event.changedTouches[0].identifier;
	  }
	  d3.touches = function(container, touches) {
	    if (arguments.length < 2) touches = d3_eventSource().touches;
	    return touches ? d3_array(touches).map(function(touch) {
	      var point = d3_mousePoint(container, touch);
	      point.identifier = touch.identifier;
	      return point;
	    }) : [];
	  };
	  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
	  function d3_sgn(x) {
	    return x > 0 ? 1 : x < 0 ? -1 : 0;
	  }
	  function d3_cross2d(a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	  }
	  function d3_acos(x) {
	    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
	  }
	  function d3_asin(x) {
	    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
	  }
	  function d3_sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }
	  function d3_cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }
	  function d3_tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }
	  function d3_haversin(x) {
	    return (x = Math.sin(x / 2)) * x;
	  }
	  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
	  d3.interpolateZoom = function(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
	    if (d2 < ε2) {
	      S = Math.log(w1 / w0) / ρ;
	      i = function(t) {
	        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
	      };
	    } else {
	      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / ρ;
	      i = function(t) {
	        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
	        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
	      };
	    }
	    i.duration = S * 1e3;
	    return i;
	  };
	  d3.behavior.zoom = function() {
	    var view = {
	      x: 0,
	      y: 0,
	      k: 1
	    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
	    if (!d3_behavior_zoomWheel) {
	      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
	      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return d3.event.wheelDelta;
	      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
	        return -d3.event.detail;
	      }, "MozMousePixelScroll");
	    }
	    function zoom(g) {
	      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
	    }
	    zoom.event = function(g) {
	      g.each(function() {
	        var dispatch = event.of(this, arguments), view1 = view;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.zoom", function() {
	            view = this.__chart__ || {
	              x: 0,
	              y: 0,
	              k: 1
	            };
	            zoomstarted(dispatch);
	          }).tween("zoom:zoom", function() {
	            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
	            return function(t) {
	              var l = i(t), k = dx / l[2];
	              this.__chart__ = view = {
	                x: cx - l[0] * k,
	                y: cy - l[1] * k,
	                k: k
	              };
	              zoomed(dispatch);
	            };
	          }).each("interrupt.zoom", function() {
	            zoomended(dispatch);
	          }).each("end.zoom", function() {
	            zoomended(dispatch);
	          });
	        } else {
	          this.__chart__ = view;
	          zoomstarted(dispatch);
	          zoomed(dispatch);
	          zoomended(dispatch);
	        }
	      });
	    };
	    zoom.translate = function(_) {
	      if (!arguments.length) return [ view.x, view.y ];
	      view = {
	        x: +_[0],
	        y: +_[1],
	        k: view.k
	      };
	      rescale();
	      return zoom;
	    };
	    zoom.scale = function(_) {
	      if (!arguments.length) return view.k;
	      view = {
	        x: view.x,
	        y: view.y,
	        k: null
	      };
	      scaleTo(+_);
	      rescale();
	      return zoom;
	    };
	    zoom.scaleExtent = function(_) {
	      if (!arguments.length) return scaleExtent;
	      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.center = function(_) {
	      if (!arguments.length) return center;
	      center = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.size = function(_) {
	      if (!arguments.length) return size;
	      size = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.duration = function(_) {
	      if (!arguments.length) return duration;
	      duration = +_;
	      return zoom;
	    };
	    zoom.x = function(z) {
	      if (!arguments.length) return x1;
	      x1 = z;
	      x0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    zoom.y = function(z) {
	      if (!arguments.length) return y1;
	      y1 = z;
	      y0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    function location(p) {
	      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
	    }
	    function point(l) {
	      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
	    }
	    function scaleTo(s) {
	      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
	    }
	    function translateTo(p, l) {
	      l = point(l);
	      view.x += p[0] - l[0];
	      view.y += p[1] - l[1];
	    }
	    function zoomTo(that, p, l, k) {
	      that.__chart__ = {
	        x: view.x,
	        y: view.y,
	        k: view.k
	      };
	      scaleTo(Math.pow(2, k));
	      translateTo(center0 = p, l);
	      that = d3.select(that);
	      if (duration > 0) that = that.transition().duration(duration);
	      that.call(zoom.event);
	    }
	    function rescale() {
	      if (x1) x1.domain(x0.range().map(function(x) {
	        return (x - view.x) / view.k;
	      }).map(x0.invert));
	      if (y1) y1.domain(y0.range().map(function(y) {
	        return (y - view.y) / view.k;
	      }).map(y0.invert));
	    }
	    function zoomstarted(dispatch) {
	      if (!zooming++) dispatch({
	        type: "zoomstart"
	      });
	    }
	    function zoomed(dispatch) {
	      rescale();
	      dispatch({
	        type: "zoom",
	        scale: view.k,
	        translate: [ view.x, view.y ]
	      });
	    }
	    function zoomended(dispatch) {
	      if (!--zooming) dispatch({
	        type: "zoomend"
	      }), center0 = null;
	    }
	    function mousedowned() {
	      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
	      d3_selection_interrupt.call(that);
	      zoomstarted(dispatch);
	      function moved() {
	        dragged = 1;
	        translateTo(d3.mouse(that), location0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        subject.on(mousemove, null).on(mouseup, null);
	        dragRestore(dragged);
	        zoomended(dispatch);
	      }
	    }
	    function touchstarted() {
	      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
	      started();
	      zoomstarted(dispatch);
	      subject.on(mousedown, null).on(touchstart, started);
	      function relocate() {
	        var touches = d3.touches(that);
	        scale0 = view.k;
	        touches.forEach(function(t) {
	          if (t.identifier in locations0) locations0[t.identifier] = location(t);
	        });
	        return touches;
	      }
	      function started() {
	        var target = d3.event.target;
	        d3.select(target).on(touchmove, moved).on(touchend, ended);
	        targets.push(target);
	        var changed = d3.event.changedTouches;
	        for (var i = 0, n = changed.length; i < n; ++i) {
	          locations0[changed[i].identifier] = null;
	        }
	        var touches = relocate(), now = Date.now();
	        if (touches.length === 1) {
	          if (now - touchtime < 500) {
	            var p = touches[0];
	            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
	            d3_eventPreventDefault();
	          }
	          touchtime = now;
	        } else if (touches.length > 1) {
	          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
	          distance0 = dx * dx + dy * dy;
	        }
	      }
	      function moved() {
	        var touches = d3.touches(that), p0, l0, p1, l1;
	        d3_selection_interrupt.call(that);
	        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
	          p1 = touches[i];
	          if (l1 = locations0[p1.identifier]) {
	            if (l0) break;
	            p0 = p1, l0 = l1;
	          }
	        }
	        if (l1) {
	          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
	          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
	          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
	          scaleTo(scale1 * scale0);
	        }
	        touchtime = null;
	        translateTo(p0, l0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        if (d3.event.touches.length) {
	          var changed = d3.event.changedTouches;
	          for (var i = 0, n = changed.length; i < n; ++i) {
	            delete locations0[changed[i].identifier];
	          }
	          for (var identifier in locations0) {
	            return void relocate();
	          }
	        }
	        d3.selectAll(targets).on(zoomName, null);
	        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
	        dragRestore();
	        zoomended(dispatch);
	      }
	    }
	    function mousewheeled() {
	      var dispatch = event.of(this, arguments);
	      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
	      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
	      mousewheelTimer = setTimeout(function() {
	        mousewheelTimer = null;
	        zoomended(dispatch);
	      }, 50);
	      d3_eventPreventDefault();
	      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
	      translateTo(center0, translate0);
	      zoomed(dispatch);
	    }
	    function dblclicked() {
	      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
	      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
	    }
	    return d3.rebind(zoom, event, "on");
	  };
	  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
	  d3.color = d3_color;
	  function d3_color() {}
	  d3_color.prototype.toString = function() {
	    return this.rgb() + "";
	  };
	  d3.hsl = d3_hsl;
	  function d3_hsl(h, s, l) {
	    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
	  }
	  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
	  d3_hslPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, this.l / k);
	  };
	  d3_hslPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, k * this.l);
	  };
	  d3_hslPrototype.rgb = function() {
	    return d3_hsl_rgb(this.h, this.s, this.l);
	  };
	  function d3_hsl_rgb(h, s, l) {
	    var m1, m2;
	    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
	    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
	    l = l < 0 ? 0 : l > 1 ? 1 : l;
	    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
	    m1 = 2 * l - m2;
	    function v(h) {
	      if (h > 360) h -= 360; else if (h < 0) h += 360;
	      if (h < 60) return m1 + (m2 - m1) * h / 60;
	      if (h < 180) return m2;
	      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
	      return m1;
	    }
	    function vv(h) {
	      return Math.round(v(h) * 255);
	    }
	    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
	  }
	  d3.hcl = d3_hcl;
	  function d3_hcl(h, c, l) {
	    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
	  }
	  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
	  d3_hclPrototype.brighter = function(k) {
	    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.darker = function(k) {
	    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.rgb = function() {
	    return d3_hcl_lab(this.h, this.c, this.l).rgb();
	  };
	  function d3_hcl_lab(h, c, l) {
	    if (isNaN(h)) h = 0;
	    if (isNaN(c)) c = 0;
	    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
	  }
	  d3.lab = d3_lab;
	  function d3_lab(l, a, b) {
	    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
	  }
	  var d3_lab_K = 18;
	  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
	  var d3_labPrototype = d3_lab.prototype = new d3_color();
	  d3_labPrototype.brighter = function(k) {
	    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.darker = function(k) {
	    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.rgb = function() {
	    return d3_lab_rgb(this.l, this.a, this.b);
	  };
	  function d3_lab_rgb(l, a, b) {
	    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
	    x = d3_lab_xyz(x) * d3_lab_X;
	    y = d3_lab_xyz(y) * d3_lab_Y;
	    z = d3_lab_xyz(z) * d3_lab_Z;
	    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
	  }
	  function d3_lab_hcl(l, a, b) {
	    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
	  }
	  function d3_lab_xyz(x) {
	    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
	  }
	  function d3_xyz_lab(x) {
	    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
	  }
	  function d3_xyz_rgb(r) {
	    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
	  }
	  d3.rgb = d3_rgb;
	  function d3_rgb(r, g, b) {
	    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
	  }
	  function d3_rgbNumber(value) {
	    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
	  }
	  function d3_rgbString(value) {
	    return d3_rgbNumber(value) + "";
	  }
	  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
	  d3_rgbPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    var r = this.r, g = this.g, b = this.b, i = 30;
	    if (!r && !g && !b) return new d3_rgb(i, i, i);
	    if (r && r < i) r = i;
	    if (g && g < i) g = i;
	    if (b && b < i) b = i;
	    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
	  };
	  d3_rgbPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_rgb(k * this.r, k * this.g, k * this.b);
	  };
	  d3_rgbPrototype.hsl = function() {
	    return d3_rgb_hsl(this.r, this.g, this.b);
	  };
	  d3_rgbPrototype.toString = function() {
	    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
	  };
	  function d3_rgb_hex(v) {
	    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
	  }
	  function d3_rgb_parse(format, rgb, hsl) {
	    var r = 0, g = 0, b = 0, m1, m2, color;
	    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
	    if (m1) {
	      m2 = m1[2].split(",");
	      switch (m1[1]) {
	       case "hsl":
	        {
	          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
	        }
	
	       case "rgb":
	        {
	          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
	        }
	      }
	    }
	    if (color = d3_rgb_names.get(format)) {
	      return rgb(color.r, color.g, color.b);
	    }
	    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
	      if (format.length === 4) {
	        r = (color & 3840) >> 4;
	        r = r >> 4 | r;
	        g = color & 240;
	        g = g >> 4 | g;
	        b = color & 15;
	        b = b << 4 | b;
	      } else if (format.length === 7) {
	        r = (color & 16711680) >> 16;
	        g = (color & 65280) >> 8;
	        b = color & 255;
	      }
	    }
	    return rgb(r, g, b);
	  }
	  function d3_rgb_hsl(r, g, b) {
	    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
	    if (d) {
	      s = l < .5 ? d / (max + min) : d / (2 - max - min);
	      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
	      h *= 60;
	    } else {
	      h = NaN;
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new d3_hsl(h, s, l);
	  }
	  function d3_rgb_lab(r, g, b) {
	    r = d3_rgb_xyz(r);
	    g = d3_rgb_xyz(g);
	    b = d3_rgb_xyz(b);
	    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
	    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
	  }
	  function d3_rgb_xyz(r) {
	    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
	  }
	  function d3_rgb_parseNumber(c) {
	    var f = parseFloat(c);
	    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
	  }
	  var d3_rgb_names = d3.map({
	    aliceblue: 15792383,
	    antiquewhite: 16444375,
	    aqua: 65535,
	    aquamarine: 8388564,
	    azure: 15794175,
	    beige: 16119260,
	    bisque: 16770244,
	    black: 0,
	    blanchedalmond: 16772045,
	    blue: 255,
	    blueviolet: 9055202,
	    brown: 10824234,
	    burlywood: 14596231,
	    cadetblue: 6266528,
	    chartreuse: 8388352,
	    chocolate: 13789470,
	    coral: 16744272,
	    cornflowerblue: 6591981,
	    cornsilk: 16775388,
	    crimson: 14423100,
	    cyan: 65535,
	    darkblue: 139,
	    darkcyan: 35723,
	    darkgoldenrod: 12092939,
	    darkgray: 11119017,
	    darkgreen: 25600,
	    darkgrey: 11119017,
	    darkkhaki: 12433259,
	    darkmagenta: 9109643,
	    darkolivegreen: 5597999,
	    darkorange: 16747520,
	    darkorchid: 10040012,
	    darkred: 9109504,
	    darksalmon: 15308410,
	    darkseagreen: 9419919,
	    darkslateblue: 4734347,
	    darkslategray: 3100495,
	    darkslategrey: 3100495,
	    darkturquoise: 52945,
	    darkviolet: 9699539,
	    deeppink: 16716947,
	    deepskyblue: 49151,
	    dimgray: 6908265,
	    dimgrey: 6908265,
	    dodgerblue: 2003199,
	    firebrick: 11674146,
	    floralwhite: 16775920,
	    forestgreen: 2263842,
	    fuchsia: 16711935,
	    gainsboro: 14474460,
	    ghostwhite: 16316671,
	    gold: 16766720,
	    goldenrod: 14329120,
	    gray: 8421504,
	    green: 32768,
	    greenyellow: 11403055,
	    grey: 8421504,
	    honeydew: 15794160,
	    hotpink: 16738740,
	    indianred: 13458524,
	    indigo: 4915330,
	    ivory: 16777200,
	    khaki: 15787660,
	    lavender: 15132410,
	    lavenderblush: 16773365,
	    lawngreen: 8190976,
	    lemonchiffon: 16775885,
	    lightblue: 11393254,
	    lightcoral: 15761536,
	    lightcyan: 14745599,
	    lightgoldenrodyellow: 16448210,
	    lightgray: 13882323,
	    lightgreen: 9498256,
	    lightgrey: 13882323,
	    lightpink: 16758465,
	    lightsalmon: 16752762,
	    lightseagreen: 2142890,
	    lightskyblue: 8900346,
	    lightslategray: 7833753,
	    lightslategrey: 7833753,
	    lightsteelblue: 11584734,
	    lightyellow: 16777184,
	    lime: 65280,
	    limegreen: 3329330,
	    linen: 16445670,
	    magenta: 16711935,
	    maroon: 8388608,
	    mediumaquamarine: 6737322,
	    mediumblue: 205,
	    mediumorchid: 12211667,
	    mediumpurple: 9662683,
	    mediumseagreen: 3978097,
	    mediumslateblue: 8087790,
	    mediumspringgreen: 64154,
	    mediumturquoise: 4772300,
	    mediumvioletred: 13047173,
	    midnightblue: 1644912,
	    mintcream: 16121850,
	    mistyrose: 16770273,
	    moccasin: 16770229,
	    navajowhite: 16768685,
	    navy: 128,
	    oldlace: 16643558,
	    olive: 8421376,
	    olivedrab: 7048739,
	    orange: 16753920,
	    orangered: 16729344,
	    orchid: 14315734,
	    palegoldenrod: 15657130,
	    palegreen: 10025880,
	    paleturquoise: 11529966,
	    palevioletred: 14381203,
	    papayawhip: 16773077,
	    peachpuff: 16767673,
	    peru: 13468991,
	    pink: 16761035,
	    plum: 14524637,
	    powderblue: 11591910,
	    purple: 8388736,
	    rebeccapurple: 6697881,
	    red: 16711680,
	    rosybrown: 12357519,
	    royalblue: 4286945,
	    saddlebrown: 9127187,
	    salmon: 16416882,
	    sandybrown: 16032864,
	    seagreen: 3050327,
	    seashell: 16774638,
	    sienna: 10506797,
	    silver: 12632256,
	    skyblue: 8900331,
	    slateblue: 6970061,
	    slategray: 7372944,
	    slategrey: 7372944,
	    snow: 16775930,
	    springgreen: 65407,
	    steelblue: 4620980,
	    tan: 13808780,
	    teal: 32896,
	    thistle: 14204888,
	    tomato: 16737095,
	    turquoise: 4251856,
	    violet: 15631086,
	    wheat: 16113331,
	    white: 16777215,
	    whitesmoke: 16119285,
	    yellow: 16776960,
	    yellowgreen: 10145074
	  });
	  d3_rgb_names.forEach(function(key, value) {
	    d3_rgb_names.set(key, d3_rgbNumber(value));
	  });
	  function d3_functor(v) {
	    return typeof v === "function" ? v : function() {
	      return v;
	    };
	  }
	  d3.functor = d3_functor;
	  d3.xhr = d3_xhrType(d3_identity);
	  function d3_xhrType(response) {
	    return function(url, mimeType, callback) {
	      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
	      mimeType = null;
	      return d3_xhr(url, mimeType, response, callback);
	    };
	  }
	  function d3_xhr(url, mimeType, response, callback) {
	    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
	    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
	    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
	      request.readyState > 3 && respond();
	    };
	    function respond() {
	      var status = request.status, result;
	      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
	        try {
	          result = response.call(xhr, request);
	        } catch (e) {
	          dispatch.error.call(xhr, e);
	          return;
	        }
	        dispatch.load.call(xhr, result);
	      } else {
	        dispatch.error.call(xhr, request);
	      }
	    }
	    request.onprogress = function(event) {
	      var o = d3.event;
	      d3.event = event;
	      try {
	        dispatch.progress.call(xhr, request);
	      } finally {
	        d3.event = o;
	      }
	    };
	    xhr.header = function(name, value) {
	      name = (name + "").toLowerCase();
	      if (arguments.length < 2) return headers[name];
	      if (value == null) delete headers[name]; else headers[name] = value + "";
	      return xhr;
	    };
	    xhr.mimeType = function(value) {
	      if (!arguments.length) return mimeType;
	      mimeType = value == null ? null : value + "";
	      return xhr;
	    };
	    xhr.responseType = function(value) {
	      if (!arguments.length) return responseType;
	      responseType = value;
	      return xhr;
	    };
	    xhr.response = function(value) {
	      response = value;
	      return xhr;
	    };
	    [ "get", "post" ].forEach(function(method) {
	      xhr[method] = function() {
	        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
	      };
	    });
	    xhr.send = function(method, data, callback) {
	      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
	      request.open(method, url, true);
	      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
	      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
	      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
	      if (responseType != null) request.responseType = responseType;
	      if (callback != null) xhr.on("error", callback).on("load", function(request) {
	        callback(null, request);
	      });
	      dispatch.beforesend.call(xhr, request);
	      request.send(data == null ? null : data);
	      return xhr;
	    };
	    xhr.abort = function() {
	      request.abort();
	      return xhr;
	    };
	    d3.rebind(xhr, dispatch, "on");
	    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
	  }
	  function d3_xhr_fixCallback(callback) {
	    return callback.length === 1 ? function(error, request) {
	      callback(error == null ? request : null);
	    } : callback;
	  }
	  function d3_xhrHasResponse(request) {
	    var type = request.responseType;
	    return type && type !== "text" ? request.response : request.responseText;
	  }
	  d3.dsv = function(delimiter, mimeType) {
	    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
	    function dsv(url, row, callback) {
	      if (arguments.length < 3) callback = row, row = null;
	      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
	      xhr.row = function(_) {
	        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
	      };
	      return xhr;
	    }
	    function response(request) {
	      return dsv.parse(request.responseText);
	    }
	    function typedResponse(f) {
	      return function(request) {
	        return dsv.parse(request.responseText, f);
	      };
	    }
	    dsv.parse = function(text, f) {
	      var o;
	      return dsv.parseRows(text, function(row, i) {
	        if (o) return o(row, i - 1);
	        var a = new Function("d", "return {" + row.map(function(name, i) {
	          return JSON.stringify(name) + ": d[" + i + "]";
	        }).join(",") + "}");
	        o = f ? function(row, i) {
	          return f(a(row), i);
	        } : a;
	      });
	    };
	    dsv.parseRows = function(text, f) {
	      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
	      function token() {
	        if (I >= N) return EOF;
	        if (eol) return eol = false, EOL;
	        var j = I;
	        if (text.charCodeAt(j) === 34) {
	          var i = j;
	          while (i++ < N) {
	            if (text.charCodeAt(i) === 34) {
	              if (text.charCodeAt(i + 1) !== 34) break;
	              ++i;
	            }
	          }
	          I = i + 2;
	          var c = text.charCodeAt(i + 1);
	          if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(i + 2) === 10) ++I;
	          } else if (c === 10) {
	            eol = true;
	          }
	          return text.slice(j + 1, i).replace(/""/g, '"');
	        }
	        while (I < N) {
	          var c = text.charCodeAt(I++), k = 1;
	          if (c === 10) eol = true; else if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(I) === 10) ++I, ++k;
	          } else if (c !== delimiterCode) continue;
	          return text.slice(j, I - k);
	        }
	        return text.slice(j);
	      }
	      while ((t = token()) !== EOF) {
	        var a = [];
	        while (t !== EOL && t !== EOF) {
	          a.push(t);
	          t = token();
	        }
	        if (f && (a = f(a, n++)) == null) continue;
	        rows.push(a);
	      }
	      return rows;
	    };
	    dsv.format = function(rows) {
	      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
	      var fieldSet = new d3_Set(), fields = [];
	      rows.forEach(function(row) {
	        for (var field in row) {
	          if (!fieldSet.has(field)) {
	            fields.push(fieldSet.add(field));
	          }
	        }
	      });
	      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
	        return fields.map(function(field) {
	          return formatValue(row[field]);
	        }).join(delimiter);
	      })).join("\n");
	    };
	    dsv.formatRows = function(rows) {
	      return rows.map(formatRow).join("\n");
	    };
	    function formatRow(row) {
	      return row.map(formatValue).join(delimiter);
	    }
	    function formatValue(text) {
	      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
	    }
	    return dsv;
	  };
	  d3.csv = d3.dsv(",", "text/csv");
	  d3.tsv = d3.dsv("	", "text/tab-separated-values");
	  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
	    setTimeout(callback, 17);
	  };
	  d3.timer = function() {
	    d3_timer.apply(this, arguments);
	  };
	  function d3_timer(callback, delay, then) {
	    var n = arguments.length;
	    if (n < 2) delay = 0;
	    if (n < 3) then = Date.now();
	    var time = then + delay, timer = {
	      c: callback,
	      t: time,
	      n: null
	    };
	    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
	    d3_timer_queueTail = timer;
	    if (!d3_timer_interval) {
	      d3_timer_timeout = clearTimeout(d3_timer_timeout);
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	    return timer;
	  }
	  function d3_timer_step() {
	    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
	    if (delay > 24) {
	      if (isFinite(delay)) {
	        clearTimeout(d3_timer_timeout);
	        d3_timer_timeout = setTimeout(d3_timer_step, delay);
	      }
	      d3_timer_interval = 0;
	    } else {
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	  }
	  d3.timer.flush = function() {
	    d3_timer_mark();
	    d3_timer_sweep();
	  };
	  function d3_timer_mark() {
	    var now = Date.now(), timer = d3_timer_queueHead;
	    while (timer) {
	      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
	      timer = timer.n;
	    }
	    return now;
	  }
	  function d3_timer_sweep() {
	    var t0, t1 = d3_timer_queueHead, time = Infinity;
	    while (t1) {
	      if (t1.c) {
	        if (t1.t < time) time = t1.t;
	        t1 = (t0 = t1).n;
	      } else {
	        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
	      }
	    }
	    d3_timer_queueTail = t0;
	    return time;
	  }
	  function d3_format_precision(x, p) {
	    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
	  }
	  d3.round = function(x, n) {
	    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
	  };
	  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
	  d3.formatPrefix = function(value, precision) {
	    var i = 0;
	    if (value = +value) {
	      if (value < 0) value *= -1;
	      if (precision) value = d3.round(value, d3_format_precision(value, precision));
	      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
	      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
	    }
	    return d3_formatPrefixes[8 + i / 3];
	  };
	  function d3_formatPrefix(d, i) {
	    var k = Math.pow(10, abs(8 - i) * 3);
	    return {
	      scale: i > 8 ? function(d) {
	        return d / k;
	      } : function(d) {
	        return d * k;
	      },
	      symbol: d
	    };
	  }
	  function d3_locale_numberFormat(locale) {
	    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
	      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = locale_grouping[j = (j + 1) % locale_grouping.length];
	      }
	      return t.reverse().join(locale_thousands);
	    } : d3_identity;
	    return function(specifier) {
	      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
	      if (precision) precision = +precision.substring(1);
	      if (zfill || fill === "0" && align === "=") {
	        zfill = fill = "0";
	        align = "=";
	      }
	      switch (type) {
	       case "n":
	        comma = true;
	        type = "g";
	        break;
	
	       case "%":
	        scale = 100;
	        suffix = "%";
	        type = "f";
	        break;
	
	       case "p":
	        scale = 100;
	        suffix = "%";
	        type = "r";
	        break;
	
	       case "b":
	       case "o":
	       case "x":
	       case "X":
	        if (symbol === "#") prefix = "0" + type.toLowerCase();
	
	       case "c":
	        exponent = false;
	
	       case "d":
	        integer = true;
	        precision = 0;
	        break;
	
	       case "s":
	        scale = -1;
	        type = "r";
	        break;
	      }
	      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
	      if (type == "r" && !precision) type = "g";
	      if (precision != null) {
	        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
	      }
	      type = d3_format_types.get(type) || d3_format_typeDefault;
	      var zcomma = zfill && comma;
	      return function(value) {
	        var fullSuffix = suffix;
	        if (integer && value % 1) return "";
	        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
	        if (scale < 0) {
	          var unit = d3.formatPrefix(value, precision);
	          value = unit.scale(value);
	          fullSuffix = unit.symbol + suffix;
	        } else {
	          value *= scale;
	        }
	        value = type(value, precision);
	        var i = value.lastIndexOf("."), before, after;
	        if (i < 0) {
	          var j = exponent ? value.lastIndexOf("e") : -1;
	          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
	        } else {
	          before = value.substring(0, i);
	          after = locale_decimal + value.substring(i + 1);
	        }
	        if (!zfill && comma) before = formatGroup(before, Infinity);
	        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
	        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
	        negative += prefix;
	        value = before + after;
	        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
	      };
	    };
	  }
	  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
	  var d3_format_types = d3.map({
	    b: function(x) {
	      return x.toString(2);
	    },
	    c: function(x) {
	      return String.fromCharCode(x);
	    },
	    o: function(x) {
	      return x.toString(8);
	    },
	    x: function(x) {
	      return x.toString(16);
	    },
	    X: function(x) {
	      return x.toString(16).toUpperCase();
	    },
	    g: function(x, p) {
	      return x.toPrecision(p);
	    },
	    e: function(x, p) {
	      return x.toExponential(p);
	    },
	    f: function(x, p) {
	      return x.toFixed(p);
	    },
	    r: function(x, p) {
	      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
	    }
	  });
	  function d3_format_typeDefault(x) {
	    return x + "";
	  }
	  var d3_time = d3.time = {}, d3_date = Date;
	  function d3_date_utc() {
	    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
	  }
	  d3_date_utc.prototype = {
	    getDate: function() {
	      return this._.getUTCDate();
	    },
	    getDay: function() {
	      return this._.getUTCDay();
	    },
	    getFullYear: function() {
	      return this._.getUTCFullYear();
	    },
	    getHours: function() {
	      return this._.getUTCHours();
	    },
	    getMilliseconds: function() {
	      return this._.getUTCMilliseconds();
	    },
	    getMinutes: function() {
	      return this._.getUTCMinutes();
	    },
	    getMonth: function() {
	      return this._.getUTCMonth();
	    },
	    getSeconds: function() {
	      return this._.getUTCSeconds();
	    },
	    getTime: function() {
	      return this._.getTime();
	    },
	    getTimezoneOffset: function() {
	      return 0;
	    },
	    valueOf: function() {
	      return this._.valueOf();
	    },
	    setDate: function() {
	      d3_time_prototype.setUTCDate.apply(this._, arguments);
	    },
	    setDay: function() {
	      d3_time_prototype.setUTCDay.apply(this._, arguments);
	    },
	    setFullYear: function() {
	      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
	    },
	    setHours: function() {
	      d3_time_prototype.setUTCHours.apply(this._, arguments);
	    },
	    setMilliseconds: function() {
	      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
	    },
	    setMinutes: function() {
	      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
	    },
	    setMonth: function() {
	      d3_time_prototype.setUTCMonth.apply(this._, arguments);
	    },
	    setSeconds: function() {
	      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
	    },
	    setTime: function() {
	      d3_time_prototype.setTime.apply(this._, arguments);
	    }
	  };
	  var d3_time_prototype = Date.prototype;
	  function d3_time_interval(local, step, number) {
	    function round(date) {
	      var d0 = local(date), d1 = offset(d0, 1);
	      return date - d0 < d1 - date ? d0 : d1;
	    }
	    function ceil(date) {
	      step(date = local(new d3_date(date - 1)), 1);
	      return date;
	    }
	    function offset(date, k) {
	      step(date = new d3_date(+date), k);
	      return date;
	    }
	    function range(t0, t1, dt) {
	      var time = ceil(t0), times = [];
	      if (dt > 1) {
	        while (time < t1) {
	          if (!(number(time) % dt)) times.push(new Date(+time));
	          step(time, 1);
	        }
	      } else {
	        while (time < t1) times.push(new Date(+time)), step(time, 1);
	      }
	      return times;
	    }
	    function range_utc(t0, t1, dt) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = t0;
	        return range(utc, t1, dt);
	      } finally {
	        d3_date = Date;
	      }
	    }
	    local.floor = local;
	    local.round = round;
	    local.ceil = ceil;
	    local.offset = offset;
	    local.range = range;
	    var utc = local.utc = d3_time_interval_utc(local);
	    utc.floor = utc;
	    utc.round = d3_time_interval_utc(round);
	    utc.ceil = d3_time_interval_utc(ceil);
	    utc.offset = d3_time_interval_utc(offset);
	    utc.range = range_utc;
	    return local;
	  }
	  function d3_time_interval_utc(method) {
	    return function(date, k) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = date;
	        return method(utc, k)._;
	      } finally {
	        d3_date = Date;
	      }
	    };
	  }
	  d3_time.year = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setMonth(0, 1);
	    return date;
	  }, function(date, offset) {
	    date.setFullYear(date.getFullYear() + offset);
	  }, function(date) {
	    return date.getFullYear();
	  });
	  d3_time.years = d3_time.year.range;
	  d3_time.years.utc = d3_time.year.utc.range;
	  d3_time.day = d3_time_interval(function(date) {
	    var day = new d3_date(2e3, 0);
	    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	    return day;
	  }, function(date, offset) {
	    date.setDate(date.getDate() + offset);
	  }, function(date) {
	    return date.getDate() - 1;
	  });
	  d3_time.days = d3_time.day.range;
	  d3_time.days.utc = d3_time.day.utc.range;
	  d3_time.dayOfYear = function(date) {
	    var year = d3_time.year(date);
	    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
	  };
	  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
	    i = 7 - i;
	    var interval = d3_time[day] = d3_time_interval(function(date) {
	      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
	      return date;
	    }, function(date, offset) {
	      date.setDate(date.getDate() + Math.floor(offset) * 7);
	    }, function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
	    });
	    d3_time[day + "s"] = interval.range;
	    d3_time[day + "s"].utc = interval.utc.range;
	    d3_time[day + "OfYear"] = function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
	    };
	  });
	  d3_time.week = d3_time.sunday;
	  d3_time.weeks = d3_time.sunday.range;
	  d3_time.weeks.utc = d3_time.sunday.utc.range;
	  d3_time.weekOfYear = d3_time.sundayOfYear;
	  function d3_locale_timeFormat(locale) {
	    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
	    function d3_time_format(template) {
	      var n = template.length;
	      function format(date) {
	        var string = [], i = -1, j = 0, c, p, f;
	        while (++i < n) {
	          if (template.charCodeAt(i) === 37) {
	            string.push(template.slice(j, i));
	            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
	            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
	            string.push(c);
	            j = i + 1;
	          }
	        }
	        string.push(template.slice(j, i));
	        return string.join("");
	      }
	      format.parse = function(string) {
	        var d = {
	          y: 1900,
	          m: 0,
	          d: 1,
	          H: 0,
	          M: 0,
	          S: 0,
	          L: 0,
	          Z: null
	        }, i = d3_time_parse(d, template, string, 0);
	        if (i != string.length) return null;
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;
	        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
	        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          date.setFullYear(d.y, 0, 1);
	          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
	        } else date.setFullYear(d.y, d.m, d.d);
	        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
	        return localZ ? date._ : date;
	      };
	      format.toString = function() {
	        return template;
	      };
	      return format;
	    }
	    function d3_time_parse(date, template, string, j) {
	      var c, p, t, i = 0, n = template.length, m = string.length;
	      while (i < n) {
	        if (j >= m) return -1;
	        c = template.charCodeAt(i++);
	        if (c === 37) {
	          t = template.charAt(i++);
	          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
	          if (!p || (j = p(date, string, j)) < 0) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }
	      return j;
	    }
	    d3_time_format.utc = function(template) {
	      var local = d3_time_format(template);
	      function format(date) {
	        try {
	          d3_date = d3_date_utc;
	          var utc = new d3_date();
	          utc._ = date;
	          return local(utc);
	        } finally {
	          d3_date = Date;
	        }
	      }
	      format.parse = function(string) {
	        try {
	          d3_date = d3_date_utc;
	          var date = local.parse(string);
	          return date && date._;
	        } finally {
	          d3_date = Date;
	        }
	      };
	      format.toString = local.toString;
	      return format;
	    };
	    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
	    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
	    locale_periods.forEach(function(p, i) {
	      d3_time_periodLookup.set(p.toLowerCase(), i);
	    });
	    var d3_time_formats = {
	      a: function(d) {
	        return locale_shortDays[d.getDay()];
	      },
	      A: function(d) {
	        return locale_days[d.getDay()];
	      },
	      b: function(d) {
	        return locale_shortMonths[d.getMonth()];
	      },
	      B: function(d) {
	        return locale_months[d.getMonth()];
	      },
	      c: d3_time_format(locale_dateTime),
	      d: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      e: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      H: function(d, p) {
	        return d3_time_formatPad(d.getHours(), p, 2);
	      },
	      I: function(d, p) {
	        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
	      },
	      j: function(d, p) {
	        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
	      },
	      L: function(d, p) {
	        return d3_time_formatPad(d.getMilliseconds(), p, 3);
	      },
	      m: function(d, p) {
	        return d3_time_formatPad(d.getMonth() + 1, p, 2);
	      },
	      M: function(d, p) {
	        return d3_time_formatPad(d.getMinutes(), p, 2);
	      },
	      p: function(d) {
	        return locale_periods[+(d.getHours() >= 12)];
	      },
	      S: function(d, p) {
	        return d3_time_formatPad(d.getSeconds(), p, 2);
	      },
	      U: function(d, p) {
	        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
	      },
	      w: function(d) {
	        return d.getDay();
	      },
	      W: function(d, p) {
	        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
	      },
	      x: d3_time_format(locale_date),
	      X: d3_time_format(locale_time),
	      y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
	      },
	      Y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
	      },
	      Z: d3_time_zone,
	      "%": function() {
	        return "%";
	      }
	    };
	    var d3_time_parsers = {
	      a: d3_time_parseWeekdayAbbrev,
	      A: d3_time_parseWeekday,
	      b: d3_time_parseMonthAbbrev,
	      B: d3_time_parseMonth,
	      c: d3_time_parseLocaleFull,
	      d: d3_time_parseDay,
	      e: d3_time_parseDay,
	      H: d3_time_parseHour24,
	      I: d3_time_parseHour24,
	      j: d3_time_parseDayOfYear,
	      L: d3_time_parseMilliseconds,
	      m: d3_time_parseMonthNumber,
	      M: d3_time_parseMinutes,
	      p: d3_time_parseAmPm,
	      S: d3_time_parseSeconds,
	      U: d3_time_parseWeekNumberSunday,
	      w: d3_time_parseWeekdayNumber,
	      W: d3_time_parseWeekNumberMonday,
	      x: d3_time_parseLocaleDate,
	      X: d3_time_parseLocaleTime,
	      y: d3_time_parseYear,
	      Y: d3_time_parseFullYear,
	      Z: d3_time_parseZone,
	      "%": d3_time_parseLiteralPercent
	    };
	    function d3_time_parseWeekdayAbbrev(date, string, i) {
	      d3_time_dayAbbrevRe.lastIndex = 0;
	      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseWeekday(date, string, i) {
	      d3_time_dayRe.lastIndex = 0;
	      var n = d3_time_dayRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonthAbbrev(date, string, i) {
	      d3_time_monthAbbrevRe.lastIndex = 0;
	      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonth(date, string, i) {
	      d3_time_monthRe.lastIndex = 0;
	      var n = d3_time_monthRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseLocaleFull(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
	    }
	    function d3_time_parseLocaleDate(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
	    }
	    function d3_time_parseLocaleTime(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
	    }
	    function d3_time_parseAmPm(date, string, i) {
	      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
	      return n == null ? -1 : (date.p = n, i);
	    }
	    return d3_time_format;
	  }
	  var d3_time_formatPads = {
	    "-": "",
	    _: " ",
	    "0": "0"
	  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
	  function d3_time_formatPad(value, fill, width) {
	    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }
	  function d3_time_formatRe(names) {
	    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
	  }
	  function d3_time_formatLookup(names) {
	    var map = new d3_Map(), i = -1, n = names.length;
	    while (++i < n) map.set(names[i].toLowerCase(), i);
	    return map;
	  }
	  function d3_time_parseWeekdayNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
	    return n ? (date.w = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberSunday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.U = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberMonday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.W = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseFullYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
	    return n ? (date.y = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
	  }
	  function d3_time_parseZone(date, string, i) {
	    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
	    i + 5) : -1;
	  }
	  function d3_time_expandYear(d) {
	    return d + (d > 68 ? 1900 : 2e3);
	  }
	  function d3_time_parseMonthNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
	  }
	  function d3_time_parseDay(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.d = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseDayOfYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.j = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseHour24(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.H = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMinutes(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.M = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseSeconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.S = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMilliseconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.L = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_zone(d) {
	    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
	    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
	  }
	  function d3_time_parseLiteralPercent(date, string, i) {
	    d3_time_percentRe.lastIndex = 0;
	    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }
	  function d3_time_formatMulti(formats) {
	    var n = formats.length, i = -1;
	    while (++i < n) formats[i][0] = this(formats[i][0]);
	    return function(date) {
	      var i = 0, f = formats[i];
	      while (!f[1](date)) f = formats[++i];
	      return f[0](date);
	    };
	  }
	  d3.locale = function(locale) {
	    return {
	      numberFormat: d3_locale_numberFormat(locale),
	      timeFormat: d3_locale_timeFormat(locale)
	    };
	  };
	  var d3_locale_enUS = d3.locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [ 3 ],
	    currency: [ "$", "" ],
	    dateTime: "%a %b %e %X %Y",
	    date: "%m/%d/%Y",
	    time: "%H:%M:%S",
	    periods: [ "AM", "PM" ],
	    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
	  });
	  d3.format = d3_locale_enUS.numberFormat;
	  d3.geo = {};
	  function d3_adder() {}
	  d3_adder.prototype = {
	    s: 0,
	    t: 0,
	    add: function(y) {
	      d3_adderSum(y, this.t, d3_adderTemp);
	      d3_adderSum(d3_adderTemp.s, this.s, this);
	      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
	    },
	    reset: function() {
	      this.s = this.t = 0;
	    },
	    valueOf: function() {
	      return this.s;
	    }
	  };
	  var d3_adderTemp = new d3_adder();
	  function d3_adderSum(a, b, o) {
	    var x = o.s = a + b, bv = x - a, av = x - bv;
	    o.t = a - av + (b - bv);
	  }
	  d3.geo.stream = function(object, listener) {
	    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
	      d3_geo_streamObjectType[object.type](object, listener);
	    } else {
	      d3_geo_streamGeometry(object, listener);
	    }
	  };
	  function d3_geo_streamGeometry(geometry, listener) {
	    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
	      d3_geo_streamGeometryType[geometry.type](geometry, listener);
	    }
	  }
	  var d3_geo_streamObjectType = {
	    Feature: function(feature, listener) {
	      d3_geo_streamGeometry(feature.geometry, listener);
	    },
	    FeatureCollection: function(object, listener) {
	      var features = object.features, i = -1, n = features.length;
	      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
	    }
	  };
	  var d3_geo_streamGeometryType = {
	    Sphere: function(object, listener) {
	      listener.sphere();
	    },
	    Point: function(object, listener) {
	      object = object.coordinates;
	      listener.point(object[0], object[1], object[2]);
	    },
	    MultiPoint: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
	    },
	    LineString: function(object, listener) {
	      d3_geo_streamLine(object.coordinates, listener, 0);
	    },
	    MultiLineString: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
	    },
	    Polygon: function(object, listener) {
	      d3_geo_streamPolygon(object.coordinates, listener);
	    },
	    MultiPolygon: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
	    },
	    GeometryCollection: function(object, listener) {
	      var geometries = object.geometries, i = -1, n = geometries.length;
	      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
	    }
	  };
	  function d3_geo_streamLine(coordinates, listener, closed) {
	    var i = -1, n = coordinates.length - closed, coordinate;
	    listener.lineStart();
	    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
	    listener.lineEnd();
	  }
	  function d3_geo_streamPolygon(coordinates, listener) {
	    var i = -1, n = coordinates.length;
	    listener.polygonStart();
	    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
	    listener.polygonEnd();
	  }
	  d3.geo.area = function(object) {
	    d3_geo_areaSum = 0;
	    d3.geo.stream(object, d3_geo_area);
	    return d3_geo_areaSum;
	  };
	  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
	  var d3_geo_area = {
	    sphere: function() {
	      d3_geo_areaSum += 4 * π;
	    },
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_areaRingSum.reset();
	      d3_geo_area.lineStart = d3_geo_areaRingStart;
	    },
	    polygonEnd: function() {
	      var area = 2 * d3_geo_areaRingSum;
	      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
	      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
	    }
	  };
	  function d3_geo_areaRingStart() {
	    var λ00, φ00, λ0, cosφ0, sinφ0;
	    d3_geo_area.point = function(λ, φ) {
	      d3_geo_area.point = nextPoint;
	      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
	      sinφ0 = Math.sin(φ);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      φ = φ * d3_radians / 2 + π / 4;
	      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
	      d3_geo_areaRingSum.add(Math.atan2(v, u));
	      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
	    }
	    d3_geo_area.lineEnd = function() {
	      nextPoint(λ00, φ00);
	    };
	  }
	  function d3_geo_cartesian(spherical) {
	    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
	    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
	  }
	  function d3_geo_cartesianDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }
	  function d3_geo_cartesianCross(a, b) {
	    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
	  }
	  function d3_geo_cartesianAdd(a, b) {
	    a[0] += b[0];
	    a[1] += b[1];
	    a[2] += b[2];
	  }
	  function d3_geo_cartesianScale(vector, k) {
	    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
	  }
	  function d3_geo_cartesianNormalize(d) {
	    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	    d[0] /= l;
	    d[1] /= l;
	    d[2] /= l;
	  }
	  function d3_geo_spherical(cartesian) {
	    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
	  }
	  function d3_geo_sphericalEqual(a, b) {
	    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
	  }
	  d3.geo.bounds = function() {
	    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
	    var bound = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        bound.point = ringPoint;
	        bound.lineStart = ringStart;
	        bound.lineEnd = ringEnd;
	        dλSum = 0;
	        d3_geo_area.polygonStart();
	      },
	      polygonEnd: function() {
	        d3_geo_area.polygonEnd();
	        bound.point = point;
	        bound.lineStart = lineStart;
	        bound.lineEnd = lineEnd;
	        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
	        range[0] = λ0, range[1] = λ1;
	      }
	    };
	    function point(λ, φ) {
	      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
	      if (φ < φ0) φ0 = φ;
	      if (φ > φ1) φ1 = φ;
	    }
	    function linePoint(λ, φ) {
	      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
	      if (p0) {
	        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
	        d3_geo_cartesianNormalize(inflection);
	        inflection = d3_geo_spherical(inflection);
	        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
	        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = inflection[1] * d3_degrees;
	          if (φi > φ1) φ1 = φi;
	        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = -inflection[1] * d3_degrees;
	          if (φi < φ0) φ0 = φi;
	        } else {
	          if (φ < φ0) φ0 = φ;
	          if (φ > φ1) φ1 = φ;
	        }
	        if (antimeridian) {
	          if (λ < λ_) {
	            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	          } else {
	            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	          }
	        } else {
	          if (λ1 >= λ0) {
	            if (λ < λ0) λ0 = λ;
	            if (λ > λ1) λ1 = λ;
	          } else {
	            if (λ > λ_) {
	              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	            } else {
	              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	            }
	          }
	        }
	      } else {
	        point(λ, φ);
	      }
	      p0 = p, λ_ = λ;
	    }
	    function lineStart() {
	      bound.point = linePoint;
	    }
	    function lineEnd() {
	      range[0] = λ0, range[1] = λ1;
	      bound.point = point;
	      p0 = null;
	    }
	    function ringPoint(λ, φ) {
	      if (p0) {
	        var dλ = λ - λ_;
	        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
	      } else λ__ = λ, φ__ = φ;
	      d3_geo_area.point(λ, φ);
	      linePoint(λ, φ);
	    }
	    function ringStart() {
	      d3_geo_area.lineStart();
	    }
	    function ringEnd() {
	      ringPoint(λ__, φ__);
	      d3_geo_area.lineEnd();
	      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
	      range[0] = λ0, range[1] = λ1;
	      p0 = null;
	    }
	    function angle(λ0, λ1) {
	      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
	    }
	    function compareRanges(a, b) {
	      return a[0] - b[0];
	    }
	    function withinRange(x, range) {
	      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	    }
	    return function(feature) {
	      φ1 = λ1 = -(λ0 = φ0 = Infinity);
	      ranges = [];
	      d3.geo.stream(feature, bound);
	      var n = ranges.length;
	      if (n) {
	        ranges.sort(compareRanges);
	        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
	          b = ranges[i];
	          if (withinRange(b[0], a) || withinRange(b[1], a)) {
	            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	          } else {
	            merged.push(a = b);
	          }
	        }
	        var best = -Infinity, dλ;
	        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
	          b = merged[i];
	          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
	        }
	      }
	      ranges = range = null;
	      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
	    };
	  }();
	  d3.geo.centroid = function(object) {
	    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	    d3.geo.stream(object, d3_geo_centroid);
	    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
	    if (m < ε2) {
	      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
	      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
	      m = x * x + y * y + z * z;
	      if (m < ε2) return [ NaN, NaN ];
	    }
	    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
	  };
	  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
	  var d3_geo_centroid = {
	    sphere: d3_noop,
	    point: d3_geo_centroidPoint,
	    lineStart: d3_geo_centroidLineStart,
	    lineEnd: d3_geo_centroidLineEnd,
	    polygonStart: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
	    }
	  };
	  function d3_geo_centroidPoint(λ, φ) {
	    λ *= d3_radians;
	    var cosφ = Math.cos(φ *= d3_radians);
	    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
	  }
	  function d3_geo_centroidPointXYZ(x, y, z) {
	    ++d3_geo_centroidW0;
	    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
	    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
	    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
	  }
	  function d3_geo_centroidLineStart() {
	    var x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroid.point = nextPoint;
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_centroidLineEnd() {
	    d3_geo_centroid.point = d3_geo_centroidPoint;
	  }
	  function d3_geo_centroidRingStart() {
	    var λ00, φ00, x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ00 = λ, φ00 = φ;
	      d3_geo_centroid.point = nextPoint;
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    d3_geo_centroid.lineEnd = function() {
	      nextPoint(λ00, φ00);
	      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
	      d3_geo_centroid.point = d3_geo_centroidPoint;
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
	      d3_geo_centroidX2 += v * cx;
	      d3_geo_centroidY2 += v * cy;
	      d3_geo_centroidZ2 += v * cz;
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_compose(a, b) {
	    function compose(x, y) {
	      return x = a(x, y), b(x[0], x[1]);
	    }
	    if (a.invert && b.invert) compose.invert = function(x, y) {
	      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	    };
	    return compose;
	  }
	  function d3_true() {
	    return true;
	  }
	  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
	    var subject = [], clip = [];
	    segments.forEach(function(segment) {
	      if ((n = segment.length - 1) <= 0) return;
	      var n, p0 = segment[0], p1 = segment[n];
	      if (d3_geo_sphericalEqual(p0, p1)) {
	        listener.lineStart();
	        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
	        listener.lineEnd();
	        return;
	      }
	      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
	      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	    });
	    clip.sort(compare);
	    d3_geo_clipPolygonLinkCircular(subject);
	    d3_geo_clipPolygonLinkCircular(clip);
	    if (!subject.length) return;
	    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
	      clip[i].e = entry = !entry;
	    }
	    var start = subject[0], points, point;
	    while (1) {
	      var current = start, isSubject = true;
	      while (current.v) if ((current = current.n) === start) return;
	      points = current.z;
	      listener.lineStart();
	      do {
	        current.v = current.o.v = true;
	        if (current.e) {
	          if (isSubject) {
	            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.n.x, 1, listener);
	          }
	          current = current.n;
	        } else {
	          if (isSubject) {
	            points = current.p.z;
	            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.p.x, -1, listener);
	          }
	          current = current.p;
	        }
	        current = current.o;
	        points = current.z;
	        isSubject = !isSubject;
	      } while (!current.v);
	      listener.lineEnd();
	    }
	  }
	  function d3_geo_clipPolygonLinkCircular(array) {
	    if (!(n = array.length)) return;
	    var n, i = 0, a = array[0], b;
	    while (++i < n) {
	      a.n = b = array[i];
	      b.p = a;
	      a = b;
	    }
	    a.n = b = array[0];
	    b.p = a;
	  }
	  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
	    this.x = point;
	    this.z = points;
	    this.o = other;
	    this.e = entry;
	    this.v = false;
	    this.n = this.p = null;
	  }
	  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
	    return function(rotate, listener) {
	      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          clip.point = pointRing;
	          clip.lineStart = ringStart;
	          clip.lineEnd = ringEnd;
	          segments = [];
	          polygon = [];
	        },
	        polygonEnd: function() {
	          clip.point = point;
	          clip.lineStart = lineStart;
	          clip.lineEnd = lineEnd;
	          segments = d3.merge(segments);
	          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
	          if (segments.length) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
	          } else if (clipStartInside) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            interpolate(null, null, 1, listener);
	            listener.lineEnd();
	          }
	          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
	          segments = polygon = null;
	        },
	        sphere: function() {
	          listener.polygonStart();
	          listener.lineStart();
	          interpolate(null, null, 1, listener);
	          listener.lineEnd();
	          listener.polygonEnd();
	        }
	      };
	      function point(λ, φ) {
	        var point = rotate(λ, φ);
	        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
	      }
	      function pointLine(λ, φ) {
	        var point = rotate(λ, φ);
	        line.point(point[0], point[1]);
	      }
	      function lineStart() {
	        clip.point = pointLine;
	        line.lineStart();
	      }
	      function lineEnd() {
	        clip.point = point;
	        line.lineEnd();
	      }
	      var segments;
	      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
	      function pointRing(λ, φ) {
	        ring.push([ λ, φ ]);
	        var point = rotate(λ, φ);
	        ringListener.point(point[0], point[1]);
	      }
	      function ringStart() {
	        ringListener.lineStart();
	        ring = [];
	      }
	      function ringEnd() {
	        pointRing(ring[0][0], ring[0][1]);
	        ringListener.lineEnd();
	        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
	        ring.pop();
	        polygon.push(ring);
	        ring = null;
	        if (!n) return;
	        if (clean & 1) {
	          segment = ringSegments[0];
	          var n = segment.length - 1, i = -1, point;
	          if (n > 0) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            while (++i < n) listener.point((point = segment[i])[0], point[1]);
	            listener.lineEnd();
	          }
	          return;
	        }
	        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
	        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
	      }
	      return clip;
	    };
	  }
	  function d3_geo_clipSegmentLength1(segment) {
	    return segment.length > 1;
	  }
	  function d3_geo_clipBufferListener() {
	    var lines = [], line;
	    return {
	      lineStart: function() {
	        lines.push(line = []);
	      },
	      point: function(λ, φ) {
	        line.push([ λ, φ ]);
	      },
	      lineEnd: d3_noop,
	      buffer: function() {
	        var buffer = lines;
	        lines = [];
	        line = null;
	        return buffer;
	      },
	      rejoin: function() {
	        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	      }
	    };
	  }
	  function d3_geo_clipSort(a, b) {
	    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
	  }
	  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
	  function d3_geo_clipAntimeridianLine(listener) {
	    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
	    return {
	      lineStart: function() {
	        listener.lineStart();
	        clean = 1;
	      },
	      point: function(λ1, φ1) {
	        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
	        if (abs(dλ - π) < ε) {
	          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          listener.point(λ1, φ0);
	          clean = 0;
	        } else if (sλ0 !== sλ1 && dλ >= π) {
	          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
	          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
	          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          clean = 0;
	        }
	        listener.point(λ0 = λ1, φ0 = φ1);
	        sλ0 = sλ1;
	      },
	      lineEnd: function() {
	        listener.lineEnd();
	        λ0 = φ0 = NaN;
	      },
	      clean: function() {
	        return 2 - clean;
	      }
	    };
	  }
	  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
	    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
	    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
	  }
	  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
	    var φ;
	    if (from == null) {
	      φ = direction * halfπ;
	      listener.point(-π, φ);
	      listener.point(0, φ);
	      listener.point(π, φ);
	      listener.point(π, 0);
	      listener.point(π, -φ);
	      listener.point(0, -φ);
	      listener.point(-π, -φ);
	      listener.point(-π, 0);
	      listener.point(-π, φ);
	    } else if (abs(from[0] - to[0]) > ε) {
	      var s = from[0] < to[0] ? π : -π;
	      φ = direction * s / 2;
	      listener.point(-s, φ);
	      listener.point(0, φ);
	      listener.point(s, φ);
	    } else {
	      listener.point(to[0], to[1]);
	    }
	  }
	  function d3_geo_pointInPolygon(point, polygon) {
	    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
	    d3_geo_areaRingSum.reset();
	    for (var i = 0, n = polygon.length; i < n; ++i) {
	      var ring = polygon[i], m = ring.length;
	      if (!m) continue;
	      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
	      while (true) {
	        if (j === m) j = 0;
	        point = ring[j];
	        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
	        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
	        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
	        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
	          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
	          d3_geo_cartesianNormalize(arc);
	          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
	          d3_geo_cartesianNormalize(intersection);
	          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
	          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
	            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
	          }
	        }
	        if (!j++) break;
	        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
	      }
	    }
	    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
	  }
	  function d3_geo_clipCircle(radius) {
	    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
	    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
	    function visible(λ, φ) {
	      return Math.cos(λ) * Math.cos(φ) > cr;
	    }
	    function clipLine(listener) {
	      var point0, c0, v0, v00, clean;
	      return {
	        lineStart: function() {
	          v00 = v0 = false;
	          clean = 1;
	        },
	        point: function(λ, φ) {
	          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
	          if (!point0 && (v00 = v0 = v)) listener.lineStart();
	          if (v !== v0) {
	            point2 = intersect(point0, point1);
	            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
	              point1[0] += ε;
	              point1[1] += ε;
	              v = visible(point1[0], point1[1]);
	            }
	          }
	          if (v !== v0) {
	            clean = 0;
	            if (v) {
	              listener.lineStart();
	              point2 = intersect(point1, point0);
	              listener.point(point2[0], point2[1]);
	            } else {
	              point2 = intersect(point0, point1);
	              listener.point(point2[0], point2[1]);
	              listener.lineEnd();
	            }
	            point0 = point2;
	          } else if (notHemisphere && point0 && smallRadius ^ v) {
	            var t;
	            if (!(c & c0) && (t = intersect(point1, point0, true))) {
	              clean = 0;
	              if (smallRadius) {
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	              } else {
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	              }
	            }
	          }
	          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
	            listener.point(point1[0], point1[1]);
	          }
	          point0 = point1, v0 = v, c0 = c;
	        },
	        lineEnd: function() {
	          if (v0) listener.lineEnd();
	          point0 = null;
	        },
	        clean: function() {
	          return clean | (v00 && v0) << 1;
	        }
	      };
	    }
	    function intersect(a, b, two) {
	      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
	      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
	      if (!determinant) return !two && a;
	      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
	      d3_geo_cartesianAdd(A, B);
	      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
	      if (t2 < 0) return;
	      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
	      d3_geo_cartesianAdd(q, A);
	      q = d3_geo_spherical(q);
	      if (!two) return q;
	      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
	      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
	      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
	      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
	      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
	        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
	        d3_geo_cartesianAdd(q1, A);
	        return [ q, d3_geo_spherical(q1) ];
	      }
	    }
	    function code(λ, φ) {
	      var r = smallRadius ? radius : π - radius, code = 0;
	      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
	      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
	      return code;
	    }
	  }
	  function d3_geom_clipLine(x0, y0, x1, y1) {
	    return function(line) {
	      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
	      r = x0 - ax;
	      if (!dx && r > 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dx > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = x1 - ax;
	      if (!dx && r < 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dx > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      r = y0 - ay;
	      if (!dy && r > 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dy > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = y1 - ay;
	      if (!dy && r < 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dy > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      if (t0 > 0) line.a = {
	        x: ax + t0 * dx,
	        y: ay + t0 * dy
	      };
	      if (t1 < 1) line.b = {
	        x: ax + t1 * dx,
	        y: ay + t1 * dy
	      };
	      return line;
	    };
	  }
	  var d3_geo_clipExtentMAX = 1e9;
	  d3.geo.clipExtent = function() {
	    var x0, y0, x1, y1, stream, clip, clipExtent = {
	      stream: function(output) {
	        if (stream) stream.valid = false;
	        stream = clip(output);
	        stream.valid = true;
	        return stream;
	      },
	      extent: function(_) {
	        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
	        if (stream) stream.valid = false, stream = null;
	        return clipExtent;
	      }
	    };
	    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
	  };
	  function d3_geo_clipExtent(x0, y0, x1, y1) {
	    return function(listener) {
	      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          listener = bufferListener;
	          segments = [];
	          polygon = [];
	          clean = true;
	        },
	        polygonEnd: function() {
	          listener = listener_;
	          segments = d3.merge(segments);
	          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
	          if (inside || visible) {
	            listener.polygonStart();
	            if (inside) {
	              listener.lineStart();
	              interpolate(null, null, 1, listener);
	              listener.lineEnd();
	            }
	            if (visible) {
	              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
	            }
	            listener.polygonEnd();
	          }
	          segments = polygon = ring = null;
	        }
	      };
	      function insidePolygon(p) {
	        var wn = 0, n = polygon.length, y = p[1];
	        for (var i = 0; i < n; ++i) {
	          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
	            b = v[j];
	            if (a[1] <= y) {
	              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
	            } else {
	              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
	            }
	            a = b;
	          }
	        }
	        return wn !== 0;
	      }
	      function interpolate(from, to, direction, listener) {
	        var a = 0, a1 = 0;
	        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
	          do {
	            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	          } while ((a = (a + direction + 4) % 4) !== a1);
	        } else {
	          listener.point(to[0], to[1]);
	        }
	      }
	      function pointVisible(x, y) {
	        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	      }
	      function point(x, y) {
	        if (pointVisible(x, y)) listener.point(x, y);
	      }
	      var x__, y__, v__, x_, y_, v_, first, clean;
	      function lineStart() {
	        clip.point = linePoint;
	        if (polygon) polygon.push(ring = []);
	        first = true;
	        v_ = false;
	        x_ = y_ = NaN;
	      }
	      function lineEnd() {
	        if (segments) {
	          linePoint(x__, y__);
	          if (v__ && v_) bufferListener.rejoin();
	          segments.push(bufferListener.buffer());
	        }
	        clip.point = point;
	        if (v_) listener.lineEnd();
	      }
	      function linePoint(x, y) {
	        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
	        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
	        var v = pointVisible(x, y);
	        if (polygon) ring.push([ x, y ]);
	        if (first) {
	          x__ = x, y__ = y, v__ = v;
	          first = false;
	          if (v) {
	            listener.lineStart();
	            listener.point(x, y);
	          }
	        } else {
	          if (v && v_) listener.point(x, y); else {
	            var l = {
	              a: {
	                x: x_,
	                y: y_
	              },
	              b: {
	                x: x,
	                y: y
	              }
	            };
	            if (clipLine(l)) {
	              if (!v_) {
	                listener.lineStart();
	                listener.point(l.a.x, l.a.y);
	              }
	              listener.point(l.b.x, l.b.y);
	              if (!v) listener.lineEnd();
	              clean = false;
	            } else if (v) {
	              listener.lineStart();
	              listener.point(x, y);
	              clean = false;
	            }
	          }
	        }
	        x_ = x, y_ = y, v_ = v;
	      }
	      return clip;
	    };
	    function corner(p, direction) {
	      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
	    }
	    function compare(a, b) {
	      return comparePoints(a.x, b.x);
	    }
	    function comparePoints(a, b) {
	      var ca = corner(a, 1), cb = corner(b, 1);
	      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
	    }
	  }
	  function d3_geo_conic(projectAt) {
	    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
	    p.parallels = function(_) {
	      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
	      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
	    };
	    return p;
	  }
	  function d3_geo_conicEqualArea(φ0, φ1) {
	    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
	    function forward(λ, φ) {
	      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
	      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = ρ0 - y;
	      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEqualArea = function() {
	    return d3_geo_conic(d3_geo_conicEqualArea);
	  }).raw = d3_geo_conicEqualArea;
	  d3.geo.albers = function() {
	    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
	  };
	  d3.geo.albersUsa = function() {
	    var lower48 = d3.geo.albers();
	    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
	    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
	    var point, pointStream = {
	      point: function(x, y) {
	        point = [ x, y ];
	      }
	    }, lower48Point, alaskaPoint, hawaiiPoint;
	    function albersUsa(coordinates) {
	      var x = coordinates[0], y = coordinates[1];
	      point = null;
	      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
	      return point;
	    }
	    albersUsa.invert = function(coordinates) {
	      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
	      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
	    };
	    albersUsa.stream = function(stream) {
	      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
	      return {
	        point: function(x, y) {
	          lower48Stream.point(x, y);
	          alaskaStream.point(x, y);
	          hawaiiStream.point(x, y);
	        },
	        sphere: function() {
	          lower48Stream.sphere();
	          alaskaStream.sphere();
	          hawaiiStream.sphere();
	        },
	        lineStart: function() {
	          lower48Stream.lineStart();
	          alaskaStream.lineStart();
	          hawaiiStream.lineStart();
	        },
	        lineEnd: function() {
	          lower48Stream.lineEnd();
	          alaskaStream.lineEnd();
	          hawaiiStream.lineEnd();
	        },
	        polygonStart: function() {
	          lower48Stream.polygonStart();
	          alaskaStream.polygonStart();
	          hawaiiStream.polygonStart();
	        },
	        polygonEnd: function() {
	          lower48Stream.polygonEnd();
	          alaskaStream.polygonEnd();
	          hawaiiStream.polygonEnd();
	        }
	      };
	    };
	    albersUsa.precision = function(_) {
	      if (!arguments.length) return lower48.precision();
	      lower48.precision(_);
	      alaska.precision(_);
	      hawaii.precision(_);
	      return albersUsa;
	    };
	    albersUsa.scale = function(_) {
	      if (!arguments.length) return lower48.scale();
	      lower48.scale(_);
	      alaska.scale(_ * .35);
	      hawaii.scale(_);
	      return albersUsa.translate(lower48.translate());
	    };
	    albersUsa.translate = function(_) {
	      if (!arguments.length) return lower48.translate();
	      var k = lower48.scale(), x = +_[0], y = +_[1];
	      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
	      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      return albersUsa;
	    };
	    return albersUsa.scale(1070);
	  };
	  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_pathAreaPolygon = 0;
	      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
	      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
	    }
	  };
	  function d3_geo_pathAreaRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathArea.point = function(x, y) {
	      d3_geo_pathArea.point = nextPoint;
	      x00 = x0 = x, y00 = y0 = y;
	    };
	    function nextPoint(x, y) {
	      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
	      x0 = x, y0 = y;
	    }
	    d3_geo_pathArea.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
	  var d3_geo_pathBounds = {
	    point: d3_geo_pathBoundsPoint,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_pathBoundsPoint(x, y) {
	    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
	    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
	    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
	    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
	  }
	  function d3_geo_pathBuffer() {
	    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointCircle = d3_geo_pathBufferCircle(_);
	        return stream;
	      },
	      result: function() {
	        if (buffer.length) {
	          var result = buffer.join("");
	          buffer = [];
	          return result;
	        }
	      }
	    };
	    function point(x, y) {
	      buffer.push("M", x, ",", y, pointCircle);
	    }
	    function pointLineStart(x, y) {
	      buffer.push("M", x, ",", y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      buffer.push("L", x, ",", y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      buffer.push("Z");
	    }
	    return stream;
	  }
	  function d3_geo_pathBufferCircle(radius) {
	    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
	  }
	  var d3_geo_pathCentroid = {
	    point: d3_geo_pathCentroidPoint,
	    lineStart: d3_geo_pathCentroidLineStart,
	    lineEnd: d3_geo_pathCentroidLineEnd,
	    polygonStart: function() {
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
	      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
	    }
	  };
	  function d3_geo_pathCentroidPoint(x, y) {
	    d3_geo_centroidX0 += x;
	    d3_geo_centroidY0 += y;
	    ++d3_geo_centroidZ0;
	  }
	  function d3_geo_pathCentroidLineStart() {
	    var x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	  }
	  function d3_geo_pathCentroidLineEnd() {
	    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	  }
	  function d3_geo_pathCentroidRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      z = y0 * x - x0 * y;
	      d3_geo_centroidX2 += z * (x0 + x);
	      d3_geo_centroidY2 += z * (y0 + y);
	      d3_geo_centroidZ2 += z * 3;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	    d3_geo_pathCentroid.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  function d3_geo_pathContext(context) {
	    var pointRadius = 4.5;
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointRadius = _;
	        return stream;
	      },
	      result: d3_noop
	    };
	    function point(x, y) {
	      context.moveTo(x + pointRadius, y);
	      context.arc(x, y, pointRadius, 0, τ);
	    }
	    function pointLineStart(x, y) {
	      context.moveTo(x, y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      context.lineTo(x, y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      context.closePath();
	    }
	    return stream;
	  }
	  function d3_geo_resample(project) {
	    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
	    function resample(stream) {
	      return (maxDepth ? resampleRecursive : resampleNone)(stream);
	    }
	    function resampleNone(stream) {
	      return d3_geo_transformPoint(stream, function(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      });
	    }
	    function resampleRecursive(stream) {
	      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
	      var resample = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          stream.polygonStart();
	          resample.lineStart = ringStart;
	        },
	        polygonEnd: function() {
	          stream.polygonEnd();
	          resample.lineStart = lineStart;
	        }
	      };
	      function point(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      }
	      function lineStart() {
	        x0 = NaN;
	        resample.point = linePoint;
	        stream.lineStart();
	      }
	      function linePoint(λ, φ) {
	        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	        stream.point(x0, y0);
	      }
	      function lineEnd() {
	        resample.point = point;
	        stream.lineEnd();
	      }
	      function ringStart() {
	        lineStart();
	        resample.point = ringPoint;
	        resample.lineEnd = ringEnd;
	      }
	      function ringPoint(λ, φ) {
	        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	        resample.point = linePoint;
	      }
	      function ringEnd() {
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
	        resample.lineEnd = lineEnd;
	        lineEnd();
	      }
	      return resample;
	    }
	    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
	      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
	      if (d2 > 4 * δ2 && depth--) {
	        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
	        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
	          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
	          stream.point(x2, y2);
	          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
	        }
	      }
	    }
	    resample.precision = function(_) {
	      if (!arguments.length) return Math.sqrt(δ2);
	      maxDepth = (δ2 = _ * _) > 0 && 16;
	      return resample;
	    };
	    return resample;
	  }
	  d3.geo.path = function() {
	    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
	    function path(object) {
	      if (object) {
	        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
	        d3.geo.stream(object, cacheStream);
	      }
	      return contextStream.result();
	    }
	    path.area = function(object) {
	      d3_geo_pathAreaSum = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathArea));
	      return d3_geo_pathAreaSum;
	    };
	    path.centroid = function(object) {
	      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
	      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
	    };
	    path.bounds = function(object) {
	      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
	      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
	      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
	    };
	    path.projection = function(_) {
	      if (!arguments.length) return projection;
	      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
	      return reset();
	    };
	    path.context = function(_) {
	      if (!arguments.length) return context;
	      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
	      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	      return reset();
	    };
	    path.pointRadius = function(_) {
	      if (!arguments.length) return pointRadius;
	      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	      return path;
	    };
	    function reset() {
	      cacheStream = null;
	      return path;
	    }
	    return path.projection(d3.geo.albersUsa()).context(null);
	  };
	  function d3_geo_pathProjectStream(project) {
	    var resample = d3_geo_resample(function(x, y) {
	      return project([ x * d3_degrees, y * d3_degrees ]);
	    });
	    return function(stream) {
	      return d3_geo_projectionRadians(resample(stream));
	    };
	  }
	  d3.geo.transform = function(methods) {
	    return {
	      stream: function(stream) {
	        var transform = new d3_geo_transform(stream);
	        for (var k in methods) transform[k] = methods[k];
	        return transform;
	      }
	    };
	  };
	  function d3_geo_transform(stream) {
	    this.stream = stream;
	  }
	  d3_geo_transform.prototype = {
	    point: function(x, y) {
	      this.stream.point(x, y);
	    },
	    sphere: function() {
	      this.stream.sphere();
	    },
	    lineStart: function() {
	      this.stream.lineStart();
	    },
	    lineEnd: function() {
	      this.stream.lineEnd();
	    },
	    polygonStart: function() {
	      this.stream.polygonStart();
	    },
	    polygonEnd: function() {
	      this.stream.polygonEnd();
	    }
	  };
	  function d3_geo_transformPoint(stream, point) {
	    return {
	      point: point,
	      sphere: function() {
	        stream.sphere();
	      },
	      lineStart: function() {
	        stream.lineStart();
	      },
	      lineEnd: function() {
	        stream.lineEnd();
	      },
	      polygonStart: function() {
	        stream.polygonStart();
	      },
	      polygonEnd: function() {
	        stream.polygonEnd();
	      }
	    };
	  }
	  d3.geo.projection = d3_geo_projection;
	  d3.geo.projectionMutator = d3_geo_projectionMutator;
	  function d3_geo_projection(project) {
	    return d3_geo_projectionMutator(function() {
	      return project;
	    })();
	  }
	  function d3_geo_projectionMutator(projectAt) {
	    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
	      x = project(x, y);
	      return [ x[0] * k + δx, δy - x[1] * k ];
	    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
	    function projection(point) {
	      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
	      return [ point[0] * k + δx, δy - point[1] * k ];
	    }
	    function invert(point) {
	      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
	      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
	    }
	    projection.stream = function(output) {
	      if (stream) stream.valid = false;
	      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
	      stream.valid = true;
	      return stream;
	    };
	    projection.clipAngle = function(_) {
	      if (!arguments.length) return clipAngle;
	      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
	      return invalidate();
	    };
	    projection.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent;
	      clipExtent = _;
	      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
	      return invalidate();
	    };
	    projection.scale = function(_) {
	      if (!arguments.length) return k;
	      k = +_;
	      return reset();
	    };
	    projection.translate = function(_) {
	      if (!arguments.length) return [ x, y ];
	      x = +_[0];
	      y = +_[1];
	      return reset();
	    };
	    projection.center = function(_) {
	      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
	      λ = _[0] % 360 * d3_radians;
	      φ = _[1] % 360 * d3_radians;
	      return reset();
	    };
	    projection.rotate = function(_) {
	      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
	      δλ = _[0] % 360 * d3_radians;
	      δφ = _[1] % 360 * d3_radians;
	      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
	      return reset();
	    };
	    d3.rebind(projection, projectResample, "precision");
	    function reset() {
	      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
	      var center = project(λ, φ);
	      δx = x - center[0] * k;
	      δy = y + center[1] * k;
	      return invalidate();
	    }
	    function invalidate() {
	      if (stream) stream.valid = false, stream = null;
	      return projection;
	    }
	    return function() {
	      project = projectAt.apply(this, arguments);
	      projection.invert = project.invert && invert;
	      return reset();
	    };
	  }
	  function d3_geo_projectionRadians(stream) {
	    return d3_geo_transformPoint(stream, function(x, y) {
	      stream.point(x * d3_radians, y * d3_radians);
	    });
	  }
	  function d3_geo_equirectangular(λ, φ) {
	    return [ λ, φ ];
	  }
	  (d3.geo.equirectangular = function() {
	    return d3_geo_projection(d3_geo_equirectangular);
	  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
	  d3.geo.rotation = function(rotate) {
	    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
	    function forward(coordinates) {
	      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    }
	    forward.invert = function(coordinates) {
	      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    };
	    return forward;
	  };
	  function d3_geo_identityRotation(λ, φ) {
	    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	  }
	  d3_geo_identityRotation.invert = d3_geo_equirectangular;
	  function d3_geo_rotation(δλ, δφ, δγ) {
	    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
	  }
	  function d3_geo_forwardRotationλ(δλ) {
	    return function(λ, φ) {
	      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	    };
	  }
	  function d3_geo_rotationλ(δλ) {
	    var rotation = d3_geo_forwardRotationλ(δλ);
	    rotation.invert = d3_geo_forwardRotationλ(-δλ);
	    return rotation;
	  }
	  function d3_geo_rotationφγ(δφ, δγ) {
	    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
	    function rotation(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
	      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
	    }
	    rotation.invert = function(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
	      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
	    };
	    return rotation;
	  }
	  d3.geo.circle = function() {
	    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
	    function circle() {
	      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
	      interpolate(null, null, 1, {
	        point: function(x, y) {
	          ring.push(x = rotate(x, y));
	          x[0] *= d3_degrees, x[1] *= d3_degrees;
	        }
	      });
	      return {
	        type: "Polygon",
	        coordinates: [ ring ]
	      };
	    }
	    circle.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return circle;
	    };
	    circle.angle = function(x) {
	      if (!arguments.length) return angle;
	      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
	      return circle;
	    };
	    circle.precision = function(_) {
	      if (!arguments.length) return precision;
	      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
	      return circle;
	    };
	    return circle.angle(90);
	  };
	  function d3_geo_circleInterpolate(radius, precision) {
	    var cr = Math.cos(radius), sr = Math.sin(radius);
	    return function(from, to, direction, listener) {
	      var step = direction * precision;
	      if (from != null) {
	        from = d3_geo_circleAngle(cr, from);
	        to = d3_geo_circleAngle(cr, to);
	        if (direction > 0 ? from < to : from > to) from += direction * τ;
	      } else {
	        from = radius + direction * τ;
	        to = radius - .5 * step;
	      }
	      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
	        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
	      }
	    };
	  }
	  function d3_geo_circleAngle(cr, point) {
	    var a = d3_geo_cartesian(point);
	    a[0] -= cr;
	    d3_geo_cartesianNormalize(a);
	    var angle = d3_acos(-a[1]);
	    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
	  }
	  d3.geo.distance = function(a, b) {
	    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
	    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
	  };
	  d3.geo.graticule = function() {
	    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
	    function graticule() {
	      return {
	        type: "MultiLineString",
	        coordinates: lines()
	      };
	    }
	    function lines() {
	      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
	        return abs(x % DX) > ε;
	      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
	        return abs(y % DY) > ε;
	      }).map(y));
	    }
	    graticule.lines = function() {
	      return lines().map(function(coordinates) {
	        return {
	          type: "LineString",
	          coordinates: coordinates
	        };
	      });
	    };
	    graticule.outline = function() {
	      return {
	        type: "Polygon",
	        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
	      };
	    };
	    graticule.extent = function(_) {
	      if (!arguments.length) return graticule.minorExtent();
	      return graticule.majorExtent(_).minorExtent(_);
	    };
	    graticule.majorExtent = function(_) {
	      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
	      X0 = +_[0][0], X1 = +_[1][0];
	      Y0 = +_[0][1], Y1 = +_[1][1];
	      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.minorExtent = function(_) {
	      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	      x0 = +_[0][0], x1 = +_[1][0];
	      y0 = +_[0][1], y1 = +_[1][1];
	      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.step = function(_) {
	      if (!arguments.length) return graticule.minorStep();
	      return graticule.majorStep(_).minorStep(_);
	    };
	    graticule.majorStep = function(_) {
	      if (!arguments.length) return [ DX, DY ];
	      DX = +_[0], DY = +_[1];
	      return graticule;
	    };
	    graticule.minorStep = function(_) {
	      if (!arguments.length) return [ dx, dy ];
	      dx = +_[0], dy = +_[1];
	      return graticule;
	    };
	    graticule.precision = function(_) {
	      if (!arguments.length) return precision;
	      precision = +_;
	      x = d3_geo_graticuleX(y0, y1, 90);
	      y = d3_geo_graticuleY(x0, x1, precision);
	      X = d3_geo_graticuleX(Y0, Y1, 90);
	      Y = d3_geo_graticuleY(X0, X1, precision);
	      return graticule;
	    };
	    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
	  };
	  function d3_geo_graticuleX(y0, y1, dy) {
	    var y = d3.range(y0, y1 - ε, dy).concat(y1);
	    return function(x) {
	      return y.map(function(y) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_geo_graticuleY(x0, x1, dx) {
	    var x = d3.range(x0, x1 - ε, dx).concat(x1);
	    return function(y) {
	      return x.map(function(x) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_source(d) {
	    return d.source;
	  }
	  function d3_target(d) {
	    return d.target;
	  }
	  d3.geo.greatArc = function() {
	    var source = d3_source, source_, target = d3_target, target_;
	    function greatArc() {
	      return {
	        type: "LineString",
	        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
	      };
	    }
	    greatArc.distance = function() {
	      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
	    };
	    greatArc.source = function(_) {
	      if (!arguments.length) return source;
	      source = _, source_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.target = function(_) {
	      if (!arguments.length) return target;
	      target = _, target_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.precision = function() {
	      return arguments.length ? greatArc : 0;
	    };
	    return greatArc;
	  };
	  d3.geo.interpolate = function(source, target) {
	    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
	  };
	  function d3_geo_interpolate(x0, y0, x1, y1) {
	    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
	    var interpolate = d ? function(t) {
	      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
	      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
	    } : function() {
	      return [ x0 * d3_degrees, y0 * d3_degrees ];
	    };
	    interpolate.distance = d;
	    return interpolate;
	  }
	  d3.geo.length = function(object) {
	    d3_geo_lengthSum = 0;
	    d3.geo.stream(object, d3_geo_length);
	    return d3_geo_lengthSum;
	  };
	  var d3_geo_lengthSum;
	  var d3_geo_length = {
	    sphere: d3_noop,
	    point: d3_noop,
	    lineStart: d3_geo_lengthLineStart,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_lengthLineStart() {
	    var λ0, sinφ0, cosφ0;
	    d3_geo_length.point = function(λ, φ) {
	      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
	      d3_geo_length.point = nextPoint;
	    };
	    d3_geo_length.lineEnd = function() {
	      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
	    };
	    function nextPoint(λ, φ) {
	      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
	      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
	      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
	    }
	  }
	  function d3_geo_azimuthal(scale, angle) {
	    function azimuthal(λ, φ) {
	      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
	      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
	    }
	    azimuthal.invert = function(x, y) {
	      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
	      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
	    };
	    return azimuthal;
	  }
	  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
	    return Math.sqrt(2 / (1 + cosλcosφ));
	  }, function(ρ) {
	    return 2 * Math.asin(ρ / 2);
	  });
	  (d3.geo.azimuthalEqualArea = function() {
	    return d3_geo_projection(d3_geo_azimuthalEqualArea);
	  }).raw = d3_geo_azimuthalEqualArea;
	  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
	    var c = Math.acos(cosλcosφ);
	    return c && c / Math.sin(c);
	  }, d3_identity);
	  (d3.geo.azimuthalEquidistant = function() {
	    return d3_geo_projection(d3_geo_azimuthalEquidistant);
	  }).raw = d3_geo_azimuthalEquidistant;
	  function d3_geo_conicConformal(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), t = function(φ) {
	      return Math.tan(π / 4 + φ / 2);
	    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
	    if (!n) return d3_geo_mercator;
	    function forward(λ, φ) {
	      if (F > 0) {
	        if (φ < -halfπ + ε) φ = -halfπ + ε;
	      } else {
	        if (φ > halfπ - ε) φ = halfπ - ε;
	      }
	      var ρ = F / Math.pow(t(φ), n);
	      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
	      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
	    };
	    return forward;
	  }
	  (d3.geo.conicConformal = function() {
	    return d3_geo_conic(d3_geo_conicConformal);
	  }).raw = d3_geo_conicConformal;
	  function d3_geo_conicEquidistant(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
	    if (abs(n) < ε) return d3_geo_equirectangular;
	    function forward(λ, φ) {
	      var ρ = G - φ;
	      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = G - y;
	      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEquidistant = function() {
	    return d3_geo_conic(d3_geo_conicEquidistant);
	  }).raw = d3_geo_conicEquidistant;
	  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / cosλcosφ;
	  }, Math.atan);
	  (d3.geo.gnomonic = function() {
	    return d3_geo_projection(d3_geo_gnomonic);
	  }).raw = d3_geo_gnomonic;
	  function d3_geo_mercator(λ, φ) {
	    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
	  }
	  d3_geo_mercator.invert = function(x, y) {
	    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
	  };
	  function d3_geo_mercatorProjection(project) {
	    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
	    m.scale = function() {
	      var v = scale.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.translate = function() {
	      var v = translate.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.clipExtent = function(_) {
	      var v = clipExtent.apply(m, arguments);
	      if (v === m) {
	        if (clipAuto = _ == null) {
	          var k = π * scale(), t = translate();
	          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
	        }
	      } else if (clipAuto) {
	        v = null;
	      }
	      return v;
	    };
	    return m.clipExtent(null);
	  }
	  (d3.geo.mercator = function() {
	    return d3_geo_mercatorProjection(d3_geo_mercator);
	  }).raw = d3_geo_mercator;
	  var d3_geo_orthographic = d3_geo_azimuthal(function() {
	    return 1;
	  }, Math.asin);
	  (d3.geo.orthographic = function() {
	    return d3_geo_projection(d3_geo_orthographic);
	  }).raw = d3_geo_orthographic;
	  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / (1 + cosλcosφ);
	  }, function(ρ) {
	    return 2 * Math.atan(ρ);
	  });
	  (d3.geo.stereographic = function() {
	    return d3_geo_projection(d3_geo_stereographic);
	  }).raw = d3_geo_stereographic;
	  function d3_geo_transverseMercator(λ, φ) {
	    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
	  }
	  d3_geo_transverseMercator.invert = function(x, y) {
	    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
	  };
	  (d3.geo.transverseMercator = function() {
	    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
	    projection.center = function(_) {
	      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
	    };
	    projection.rotate = function(_) {
	      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
	      [ _[0], _[1], _[2] - 90 ]);
	    };
	    return rotate([ 0, 0, 90 ]);
	  }).raw = d3_geo_transverseMercator;
	  d3.geom = {};
	  function d3_geom_pointX(d) {
	    return d[0];
	  }
	  function d3_geom_pointY(d) {
	    return d[1];
	  }
	  d3.geom.hull = function(vertices) {
	    var x = d3_geom_pointX, y = d3_geom_pointY;
	    if (arguments.length) return hull(vertices);
	    function hull(data) {
	      if (data.length < 3) return [];
	      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
	      for (i = 0; i < n; i++) {
	        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
	      }
	      points.sort(d3_geom_hullOrder);
	      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
	      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
	      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
	      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
	      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
	      return polygon;
	    }
	    hull.x = function(_) {
	      return arguments.length ? (x = _, hull) : x;
	    };
	    hull.y = function(_) {
	      return arguments.length ? (y = _, hull) : y;
	    };
	    return hull;
	  };
	  function d3_geom_hullUpper(points) {
	    var n = points.length, hull = [ 0, 1 ], hs = 2;
	    for (var i = 2; i < n; i++) {
	      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
	      hull[hs++] = i;
	    }
	    return hull.slice(0, hs);
	  }
	  function d3_geom_hullOrder(a, b) {
	    return a[0] - b[0] || a[1] - b[1];
	  }
	  d3.geom.polygon = function(coordinates) {
	    d3_subclass(coordinates, d3_geom_polygonPrototype);
	    return coordinates;
	  };
	  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
	  d3_geom_polygonPrototype.area = function() {
	    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      area += a[1] * b[0] - a[0] * b[1];
	    }
	    return area * .5;
	  };
	  d3_geom_polygonPrototype.centroid = function(k) {
	    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
	    if (!arguments.length) k = -1 / (6 * this.area());
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      c = a[0] * b[1] - b[0] * a[1];
	      x += (a[0] + b[0]) * c;
	      y += (a[1] + b[1]) * c;
	    }
	    return [ x * k, y * k ];
	  };
	  d3_geom_polygonPrototype.clip = function(subject) {
	    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
	    while (++i < n) {
	      input = subject.slice();
	      subject.length = 0;
	      b = this[i];
	      c = input[(m = input.length - closed) - 1];
	      j = -1;
	      while (++j < m) {
	        d = input[j];
	        if (d3_geom_polygonInside(d, a, b)) {
	          if (!d3_geom_polygonInside(c, a, b)) {
	            subject.push(d3_geom_polygonIntersect(c, d, a, b));
	          }
	          subject.push(d);
	        } else if (d3_geom_polygonInside(c, a, b)) {
	          subject.push(d3_geom_polygonIntersect(c, d, a, b));
	        }
	        c = d;
	      }
	      if (closed) subject.push(subject[0]);
	      a = b;
	    }
	    return subject;
	  };
	  function d3_geom_polygonInside(p, a, b) {
	    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
	  }
	  function d3_geom_polygonIntersect(c, d, a, b) {
	    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
	    return [ x1 + ua * x21, y1 + ua * y21 ];
	  }
	  function d3_geom_polygonClosed(coordinates) {
	    var a = coordinates[0], b = coordinates[coordinates.length - 1];
	    return !(a[0] - b[0] || a[1] - b[1]);
	  }
	  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
	  function d3_geom_voronoiBeach() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.edge = this.site = this.circle = null;
	  }
	  function d3_geom_voronoiCreateBeach(site) {
	    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
	    beach.site = site;
	    return beach;
	  }
	  function d3_geom_voronoiDetachBeach(beach) {
	    d3_geom_voronoiDetachCircle(beach);
	    d3_geom_voronoiBeaches.remove(beach);
	    d3_geom_voronoiBeachPool.push(beach);
	    d3_geom_voronoiRedBlackNode(beach);
	  }
	  function d3_geom_voronoiRemoveBeach(beach) {
	    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
	      x: x,
	      y: y
	    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
	    d3_geom_voronoiDetachBeach(beach);
	    var lArc = previous;
	    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      d3_geom_voronoiDetachBeach(lArc);
	      lArc = previous;
	    }
	    disappearing.unshift(lArc);
	    d3_geom_voronoiDetachCircle(lArc);
	    var rArc = next;
	    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      d3_geom_voronoiDetachBeach(rArc);
	      rArc = next;
	    }
	    disappearing.push(rArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var nArcs = disappearing.length, iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }
	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiAddBeach(site) {
	    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
	    while (node) {
	      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
	      if (dxl > ε) node = node.L; else {
	        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
	        if (dxr > ε) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -ε) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -ε) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }
	    var newArc = d3_geom_voronoiCreateBeach(site);
	    d3_geom_voronoiBeaches.insert(lArc, newArc);
	    if (!lArc && !rArc) return;
	    if (lArc === rArc) {
	      d3_geom_voronoiDetachCircle(lArc);
	      rArc = d3_geom_voronoiCreateBeach(lArc.site);
	      d3_geom_voronoiBeaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      d3_geom_voronoiAttachCircle(lArc);
	      d3_geom_voronoiAttachCircle(rArc);
	      return;
	    }
	    if (!rArc) {
	      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      return;
	    }
	    d3_geom_voronoiDetachCircle(lArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
	      x: (cy * hb - by * hc) / d + ax,
	      y: (bx * hc - cx * hb) / d + ay
	    };
	    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
	    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
	    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
	    if (!pby2) return rfocx;
	    var lArc = arc.P;
	    if (!lArc) return -Infinity;
	    site = lArc.site;
	    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
	    if (!plby2) return lfocx;
	    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
	    return (rfocx + lfocx) / 2;
	  }
	  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site.y === directrix ? site.x : Infinity;
	  }
	  function d3_geom_voronoiCell(site) {
	    this.site = site;
	    this.edges = [];
	  }
	  d3_geom_voronoiCell.prototype.prepare = function() {
	    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
	    while (iHalfEdge--) {
	      edge = halfEdges[iHalfEdge].edge;
	      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
	    }
	    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
	    return halfEdges.length;
	  };
	  function d3_geom_voronoiCloseCells(extent) {
	    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
	    while (iCell--) {
	      cell = cells[iCell];
	      if (!cell || !cell.prepare()) continue;
	      halfEdges = cell.edges;
	      nHalfEdges = halfEdges.length;
	      iHalfEdge = 0;
	      while (iHalfEdge < nHalfEdges) {
	        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
	        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
	        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
	          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
	            x: x0,
	            y: abs(x2 - x0) < ε ? y2 : y1
	          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
	            x: abs(y2 - y1) < ε ? x2 : x1,
	            y: y1
	          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
	            x: x1,
	            y: abs(x2 - x1) < ε ? y2 : y0
	          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
	            x: abs(y2 - y0) < ε ? x2 : x0,
	            y: y0
	          } : null), cell.site, null));
	          ++nHalfEdges;
	        }
	      }
	    }
	  }
	  function d3_geom_voronoiHalfEdgeOrder(a, b) {
	    return b.angle - a.angle;
	  }
	  function d3_geom_voronoiCircle() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.x = this.y = this.arc = this.site = this.cy = null;
	  }
	  function d3_geom_voronoiAttachCircle(arc) {
	    var lArc = arc.P, rArc = arc.N;
	    if (!lArc || !rArc) return;
	    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
	    if (lSite === rSite) return;
	    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -ε2) return;
	    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
	    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = cy + Math.sqrt(x * x + y * y);
	    circle.cy = cy;
	    arc.circle = circle;
	    var before = null, node = d3_geom_voronoiCircles._;
	    while (node) {
	      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
	        if (node.L) node = node.L; else {
	          before = node.P;
	          break;
	        }
	      } else {
	        if (node.R) node = node.R; else {
	          before = node;
	          break;
	        }
	      }
	    }
	    d3_geom_voronoiCircles.insert(before, circle);
	    if (!before) d3_geom_voronoiFirstCircle = circle;
	  }
	  function d3_geom_voronoiDetachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
	      d3_geom_voronoiCircles.remove(circle);
	      d3_geom_voronoiCirclePool.push(circle);
	      d3_geom_voronoiRedBlackNode(circle);
	      arc.circle = null;
	    }
	  }
	  function d3_geom_voronoiClipEdges(extent) {
	    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
	    while (i--) {
	      e = edges[i];
	      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
	        e.a = e.b = null;
	        edges.splice(i, 1);
	      }
	    }
	  }
	  function d3_geom_voronoiConnectEdge(edge, extent) {
	    var vb = edge.b;
	    if (vb) return true;
	    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!va) va = {
	          x: fx,
	          y: y0
	        }; else if (va.y >= y1) return;
	        vb = {
	          x: fx,
	          y: y1
	        };
	      } else {
	        if (!va) va = {
	          x: fx,
	          y: y1
	        }; else if (va.y < y0) return;
	        vb = {
	          x: fx,
	          y: y0
	        };
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!va) va = {
	            x: (y0 - fb) / fm,
	            y: y0
	          }; else if (va.y >= y1) return;
	          vb = {
	            x: (y1 - fb) / fm,
	            y: y1
	          };
	        } else {
	          if (!va) va = {
	            x: (y1 - fb) / fm,
	            y: y1
	          }; else if (va.y < y0) return;
	          vb = {
	            x: (y0 - fb) / fm,
	            y: y0
	          };
	        }
	      } else {
	        if (ly < ry) {
	          if (!va) va = {
	            x: x0,
	            y: fm * x0 + fb
	          }; else if (va.x >= x1) return;
	          vb = {
	            x: x1,
	            y: fm * x1 + fb
	          };
	        } else {
	          if (!va) va = {
	            x: x1,
	            y: fm * x1 + fb
	          }; else if (va.x < x0) return;
	          vb = {
	            x: x0,
	            y: fm * x0 + fb
	          };
	        }
	      }
	    }
	    edge.a = va;
	    edge.b = vb;
	    return true;
	  }
	  function d3_geom_voronoiEdge(lSite, rSite) {
	    this.l = lSite;
	    this.r = rSite;
	    this.a = this.b = null;
	  }
	  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, rSite);
	    d3_geom_voronoiEdges.push(edge);
	    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
	    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
	    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
	    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
	    return edge;
	  }
	  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, null);
	    edge.a = va;
	    edge.b = vb;
	    d3_geom_voronoiEdges.push(edge);
	    return edge;
	  }
	  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
	    if (!edge.a && !edge.b) {
	      edge.a = vertex;
	      edge.l = lSite;
	      edge.r = rSite;
	    } else if (edge.l === rSite) {
	      edge.b = vertex;
	    } else {
	      edge.a = vertex;
	    }
	  }
	  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
	    var va = edge.a, vb = edge.b;
	    this.edge = edge;
	    this.site = lSite;
	    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
	  }
	  d3_geom_voronoiHalfEdge.prototype = {
	    start: function() {
	      return this.edge.l === this.site ? this.edge.a : this.edge.b;
	    },
	    end: function() {
	      return this.edge.l === this.site ? this.edge.b : this.edge.a;
	    }
	  };
	  function d3_geom_voronoiRedBlackTree() {
	    this._ = null;
	  }
	  function d3_geom_voronoiRedBlackNode(node) {
	    node.U = node.C = node.L = node.R = node.P = node.N = null;
	  }
	  d3_geom_voronoiRedBlackTree.prototype = {
	    insert: function(after, node) {
	      var parent, grandpa, uncle;
	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) after = after.L;
	          after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = d3_geom_voronoiRedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;
	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              d3_geom_voronoiRedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              d3_geom_voronoiRedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },
	    remove: function(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;
	      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
	      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
	      if (parent) {
	        if (parent.L === node) parent.L = next; else parent.R = next;
	      } else {
	        this._ = next;
	      }
	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }
	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) {
	        node.C = false;
	        return;
	      }
	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);
	      if (node) node.C = false;
	    }
	  };
	  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
	    var p = node, q = node.R, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }
	  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
	    var p = node, q = node.L, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }
	  function d3_geom_voronoiRedBlackFirst(node) {
	    while (node.L) node = node.L;
	    return node;
	  }
	  function d3_geom_voronoi(sites, bbox) {
	    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
	    d3_geom_voronoiEdges = [];
	    d3_geom_voronoiCells = new Array(sites.length);
	    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
	    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
	    while (true) {
	      circle = d3_geom_voronoiFirstCircle;
	      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
	        if (site.x !== x0 || site.y !== y0) {
	          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
	          d3_geom_voronoiAddBeach(site);
	          x0 = site.x, y0 = site.y;
	        }
	        site = sites.pop();
	      } else if (circle) {
	        d3_geom_voronoiRemoveBeach(circle.arc);
	      } else {
	        break;
	      }
	    }
	    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
	    var diagram = {
	      cells: d3_geom_voronoiCells,
	      edges: d3_geom_voronoiEdges
	    };
	    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
	    return diagram;
	  }
	  function d3_geom_voronoiVertexOrder(a, b) {
	    return b.y - a.y || b.x - a.x;
	  }
	  d3.geom.voronoi = function(points) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
	    if (points) return voronoi(points);
	    function voronoi(data) {
	      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
	      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
	        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
	          var s = e.start();
	          return [ s.x, s.y ];
	        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
	        polygon.point = data[i];
	      });
	      return polygons;
	    }
	    function sites(data) {
	      return data.map(function(d, i) {
	        return {
	          x: Math.round(fx(d, i) / ε) * ε,
	          y: Math.round(fy(d, i) / ε) * ε,
	          i: i
	        };
	      });
	    }
	    voronoi.links = function(data) {
	      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
	        return edge.l && edge.r;
	      }).map(function(edge) {
	        return {
	          source: data[edge.l.i],
	          target: data[edge.r.i]
	        };
	      });
	    };
	    voronoi.triangles = function(data) {
	      var triangles = [];
	      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
	        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
	        while (++j < m) {
	          e0 = e1;
	          s0 = s1;
	          e1 = edges[j].edge;
	          s1 = e1.l === site ? e1.r : e1.l;
	          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
	            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
	          }
	        }
	      });
	      return triangles;
	    };
	    voronoi.x = function(_) {
	      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
	    };
	    voronoi.y = function(_) {
	      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
	    };
	    voronoi.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
	      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
	      return voronoi;
	    };
	    voronoi.size = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
	      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
	    };
	    return voronoi;
	  };
	  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
	  function d3_geom_voronoiTriangleArea(a, b, c) {
	    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
	  }
	  d3.geom.delaunay = function(vertices) {
	    return d3.geom.voronoi().triangles(vertices);
	  };
	  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
	    if (compat = arguments.length) {
	      x = d3_geom_quadtreeCompatX;
	      y = d3_geom_quadtreeCompatY;
	      if (compat === 3) {
	        y2 = y1;
	        x2 = x1;
	        y1 = x1 = 0;
	      }
	      return quadtree(points);
	    }
	    function quadtree(data) {
	      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
	      if (x1 != null) {
	        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
	      } else {
	        x2_ = y2_ = -(x1_ = y1_ = Infinity);
	        xs = [], ys = [];
	        n = data.length;
	        if (compat) for (i = 0; i < n; ++i) {
	          d = data[i];
	          if (d.x < x1_) x1_ = d.x;
	          if (d.y < y1_) y1_ = d.y;
	          if (d.x > x2_) x2_ = d.x;
	          if (d.y > y2_) y2_ = d.y;
	          xs.push(d.x);
	          ys.push(d.y);
	        } else for (i = 0; i < n; ++i) {
	          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
	          if (x_ < x1_) x1_ = x_;
	          if (y_ < y1_) y1_ = y_;
	          if (x_ > x2_) x2_ = x_;
	          if (y_ > y2_) y2_ = y_;
	          xs.push(x_);
	          ys.push(y_);
	        }
	      }
	      var dx = x2_ - x1_, dy = y2_ - y1_;
	      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
	      function insert(n, d, x, y, x1, y1, x2, y2) {
	        if (isNaN(x) || isNaN(y)) return;
	        if (n.leaf) {
	          var nx = n.x, ny = n.y;
	          if (nx != null) {
	            if (abs(nx - x) + abs(ny - y) < .01) {
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            } else {
	              var nPoint = n.point;
	              n.x = n.y = n.point = null;
	              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            }
	          } else {
	            n.x = x, n.y = y, n.point = d;
	          }
	        } else {
	          insertChild(n, d, x, y, x1, y1, x2, y2);
	        }
	      }
	      function insertChild(n, d, x, y, x1, y1, x2, y2) {
	        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
	        n.leaf = false;
	        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
	        if (right) x1 = xm; else x2 = xm;
	        if (below) y1 = ym; else y2 = ym;
	        insert(n, d, x, y, x1, y1, x2, y2);
	      }
	      var root = d3_geom_quadtreeNode();
	      root.add = function(d) {
	        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
	      };
	      root.visit = function(f) {
	        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
	      };
	      root.find = function(point) {
	        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
	      };
	      i = -1;
	      if (x1 == null) {
	        while (++i < n) {
	          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
	        }
	        --i;
	      } else data.forEach(root.add);
	      xs = ys = data = d = null;
	      return root;
	    }
	    quadtree.x = function(_) {
	      return arguments.length ? (x = _, quadtree) : x;
	    };
	    quadtree.y = function(_) {
	      return arguments.length ? (y = _, quadtree) : y;
	    };
	    quadtree.extent = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
	      y2 = +_[1][1];
	      return quadtree;
	    };
	    quadtree.size = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
	      return quadtree;
	    };
	    return quadtree;
	  };
	  function d3_geom_quadtreeCompatX(d) {
	    return d.x;
	  }
	  function d3_geom_quadtreeCompatY(d) {
	    return d.y;
	  }
	  function d3_geom_quadtreeNode() {
	    return {
	      leaf: true,
	      nodes: [],
	      point: null,
	      x: null,
	      y: null
	    };
	  }
	  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
	    if (!f(node, x1, y1, x2, y2)) {
	      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
	      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
	      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
	      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
	      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
	    }
	  }
	  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
	    var minDistance2 = Infinity, closestPoint;
	    (function find(node, x1, y1, x2, y2) {
	      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
	      if (point = node.point) {
	        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
	        if (distance2 < minDistance2) {
	          var distance = Math.sqrt(minDistance2 = distance2);
	          x0 = x - distance, y0 = y - distance;
	          x3 = x + distance, y3 = y + distance;
	          closestPoint = point;
	        }
	      }
	      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
	      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
	        if (node = children[i & 3]) switch (i & 3) {
	         case 0:
	          find(node, x1, y1, xm, ym);
	          break;
	
	         case 1:
	          find(node, xm, y1, x2, ym);
	          break;
	
	         case 2:
	          find(node, x1, ym, xm, y2);
	          break;
	
	         case 3:
	          find(node, xm, ym, x2, y2);
	          break;
	        }
	      }
	    })(root, x0, y0, x3, y3);
	    return closestPoint;
	  }
	  d3.interpolateRgb = d3_interpolateRgb;
	  function d3_interpolateRgb(a, b) {
	    a = d3.rgb(a);
	    b = d3.rgb(b);
	    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
	    return function(t) {
	      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
	    };
	  }
	  d3.interpolateObject = d3_interpolateObject;
	  function d3_interpolateObject(a, b) {
	    var i = {}, c = {}, k;
	    for (k in a) {
	      if (k in b) {
	        i[k] = d3_interpolate(a[k], b[k]);
	      } else {
	        c[k] = a[k];
	      }
	    }
	    for (k in b) {
	      if (!(k in a)) {
	        c[k] = b[k];
	      }
	    }
	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }
	  d3.interpolateNumber = d3_interpolateNumber;
	  function d3_interpolateNumber(a, b) {
	    a = +a, b = +b;
	    return function(t) {
	      return a * (1 - t) + b * t;
	    };
	  }
	  d3.interpolateString = d3_interpolateString;
	  function d3_interpolateString(a, b) {
	    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
	    a = a + "", b = b + "";
	    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
	      if ((bs = bm.index) > bi) {
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) {
	        if (s[i]) s[i] += bm; else s[++i] = bm;
	      } else {
	        s[++i] = null;
	        q.push({
	          i: i,
	          x: d3_interpolateNumber(am, bm)
	        });
	      }
	      bi = d3_interpolate_numberB.lastIndex;
	    }
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; else s[++i] = bs;
	    }
	    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
	      return b(t) + "";
	    }) : function() {
	      return b;
	    } : (b = q.length, function(t) {
	      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    });
	  }
	  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
	  d3.interpolate = d3_interpolate;
	  function d3_interpolate(a, b) {
	    var i = d3.interpolators.length, f;
	    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
	    return f;
	  }
	  d3.interpolators = [ function(a, b) {
	    var t = typeof b;
	    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
	  } ];
	  d3.interpolateArray = d3_interpolateArray;
	  function d3_interpolateArray(a, b) {
	    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
	    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
	    for (;i < na; ++i) c[i] = a[i];
	    for (;i < nb; ++i) c[i] = b[i];
	    return function(t) {
	      for (i = 0; i < n0; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }
	  var d3_ease_default = function() {
	    return d3_identity;
	  };
	  var d3_ease = d3.map({
	    linear: d3_ease_default,
	    poly: d3_ease_poly,
	    quad: function() {
	      return d3_ease_quad;
	    },
	    cubic: function() {
	      return d3_ease_cubic;
	    },
	    sin: function() {
	      return d3_ease_sin;
	    },
	    exp: function() {
	      return d3_ease_exp;
	    },
	    circle: function() {
	      return d3_ease_circle;
	    },
	    elastic: d3_ease_elastic,
	    back: d3_ease_back,
	    bounce: function() {
	      return d3_ease_bounce;
	    }
	  });
	  var d3_ease_mode = d3.map({
	    "in": d3_identity,
	    out: d3_ease_reverse,
	    "in-out": d3_ease_reflect,
	    "out-in": function(f) {
	      return d3_ease_reflect(d3_ease_reverse(f));
	    }
	  });
	  d3.ease = function(name) {
	    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
	    t = d3_ease.get(t) || d3_ease_default;
	    m = d3_ease_mode.get(m) || d3_identity;
	    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
	  };
	  function d3_ease_clamp(f) {
	    return function(t) {
	      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
	    };
	  }
	  function d3_ease_reverse(f) {
	    return function(t) {
	      return 1 - f(1 - t);
	    };
	  }
	  function d3_ease_reflect(f) {
	    return function(t) {
	      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
	    };
	  }
	  function d3_ease_quad(t) {
	    return t * t;
	  }
	  function d3_ease_cubic(t) {
	    return t * t * t;
	  }
	  function d3_ease_cubicInOut(t) {
	    if (t <= 0) return 0;
	    if (t >= 1) return 1;
	    var t2 = t * t, t3 = t2 * t;
	    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
	  }
	  function d3_ease_poly(e) {
	    return function(t) {
	      return Math.pow(t, e);
	    };
	  }
	  function d3_ease_sin(t) {
	    return 1 - Math.cos(t * halfπ);
	  }
	  function d3_ease_exp(t) {
	    return Math.pow(2, 10 * (t - 1));
	  }
	  function d3_ease_circle(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }
	  function d3_ease_elastic(a, p) {
	    var s;
	    if (arguments.length < 2) p = .45;
	    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
	    return function(t) {
	      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
	    };
	  }
	  function d3_ease_back(s) {
	    if (!s) s = 1.70158;
	    return function(t) {
	      return t * t * ((s + 1) * t - s);
	    };
	  }
	  function d3_ease_bounce(t) {
	    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	  }
	  d3.interpolateHcl = d3_interpolateHcl;
	  function d3_interpolateHcl(a, b) {
	    a = d3.hcl(a);
	    b = d3.hcl(b);
	    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
	    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateHsl = d3_interpolateHsl;
	  function d3_interpolateHsl(a, b) {
	    a = d3.hsl(a);
	    b = d3.hsl(b);
	    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
	    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateLab = d3_interpolateLab;
	  function d3_interpolateLab(a, b) {
	    a = d3.lab(a);
	    b = d3.lab(b);
	    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
	    return function(t) {
	      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
	    };
	  }
	  d3.interpolateRound = d3_interpolateRound;
	  function d3_interpolateRound(a, b) {
	    b -= a;
	    return function(t) {
	      return Math.round(a + b * t);
	    };
	  }
	  d3.transform = function(string) {
	    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
	    return (d3.transform = function(string) {
	      if (string != null) {
	        g.setAttribute("transform", string);
	        var t = g.transform.baseVal.consolidate();
	      }
	      return new d3_transform(t ? t.matrix : d3_transformIdentity);
	    })(string);
	  };
	  function d3_transform(m) {
	    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
	    if (r0[0] * r1[1] < r1[0] * r0[1]) {
	      r0[0] *= -1;
	      r0[1] *= -1;
	      kx *= -1;
	      kz *= -1;
	    }
	    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
	    this.translate = [ m.e, m.f ];
	    this.scale = [ kx, ky ];
	    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
	  }
	  d3_transform.prototype.toString = function() {
	    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
	  };
	  function d3_transformDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	  }
	  function d3_transformNormalize(a) {
	    var k = Math.sqrt(d3_transformDot(a, a));
	    if (k) {
	      a[0] /= k;
	      a[1] /= k;
	    }
	    return k;
	  }
	  function d3_transformCombine(a, b, k) {
	    a[0] += k * b[0];
	    a[1] += k * b[1];
	    return a;
	  }
	  var d3_transformIdentity = {
	    a: 1,
	    b: 0,
	    c: 0,
	    d: 1,
	    e: 0,
	    f: 0
	  };
	  d3.interpolateTransform = d3_interpolateTransform;
	  function d3_interpolateTransformPop(s) {
	    return s.length ? s.pop() + "," : "";
	  }
	  function d3_interpolateTranslate(ta, tb, s, q) {
	    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
	      var i = s.push("translate(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ta[0], tb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ta[1], tb[1])
	      });
	    } else if (tb[0] || tb[1]) {
	      s.push("translate(" + tb + ")");
	    }
	  }
	  function d3_interpolateRotate(ra, rb, s, q) {
	    if (ra !== rb) {
	      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
	        x: d3_interpolateNumber(ra, rb)
	      });
	    } else if (rb) {
	      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
	    }
	  }
	  function d3_interpolateSkew(wa, wb, s, q) {
	    if (wa !== wb) {
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
	        x: d3_interpolateNumber(wa, wb)
	      });
	    } else if (wb) {
	      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
	    }
	  }
	  function d3_interpolateScale(ka, kb, s, q) {
	    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
	      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ka[0], kb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ka[1], kb[1])
	      });
	    } else if (kb[0] !== 1 || kb[1] !== 1) {
	      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
	    }
	  }
	  function d3_interpolateTransform(a, b) {
	    var s = [], q = [];
	    a = d3.transform(a), b = d3.transform(b);
	    d3_interpolateTranslate(a.translate, b.translate, s, q);
	    d3_interpolateRotate(a.rotate, b.rotate, s, q);
	    d3_interpolateSkew(a.skew, b.skew, s, q);
	    d3_interpolateScale(a.scale, b.scale, s, q);
	    a = b = null;
	    return function(t) {
	      var i = -1, n = q.length, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  }
	  function d3_uninterpolateNumber(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return (x - a) / b;
	    };
	  }
	  function d3_uninterpolateClamp(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return Math.max(0, Math.min(1, (x - a) / b));
	    };
	  }
	  d3.layout = {};
	  d3.layout.bundle = function() {
	    return function(links) {
	      var paths = [], i = -1, n = links.length;
	      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
	      return paths;
	    };
	  };
	  function d3_layout_bundlePath(link) {
	    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
	    while (start !== lca) {
	      start = start.parent;
	      points.push(start);
	    }
	    var k = points.length;
	    while (end !== lca) {
	      points.splice(k, 0, end);
	      end = end.parent;
	    }
	    return points;
	  }
	  function d3_layout_bundleAncestors(node) {
	    var ancestors = [], parent = node.parent;
	    while (parent != null) {
	      ancestors.push(node);
	      node = parent;
	      parent = parent.parent;
	    }
	    ancestors.push(node);
	    return ancestors;
	  }
	  function d3_layout_bundleLeastCommonAncestor(a, b) {
	    if (a === b) return a;
	    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
	    while (aNode === bNode) {
	      sharedNode = aNode;
	      aNode = aNodes.pop();
	      bNode = bNodes.pop();
	    }
	    return sharedNode;
	  }
	  d3.layout.chord = function() {
	    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
	    function relayout() {
	      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
	      chords = [];
	      groups = [];
	      k = 0, i = -1;
	      while (++i < n) {
	        x = 0, j = -1;
	        while (++j < n) {
	          x += matrix[i][j];
	        }
	        groupSums.push(x);
	        subgroupIndex.push(d3.range(n));
	        k += x;
	      }
	      if (sortGroups) {
	        groupIndex.sort(function(a, b) {
	          return sortGroups(groupSums[a], groupSums[b]);
	        });
	      }
	      if (sortSubgroups) {
	        subgroupIndex.forEach(function(d, i) {
	          d.sort(function(a, b) {
	            return sortSubgroups(matrix[i][a], matrix[i][b]);
	          });
	        });
	      }
	      k = (τ - padding * n) / k;
	      x = 0, i = -1;
	      while (++i < n) {
	        x0 = x, j = -1;
	        while (++j < n) {
	          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
	          subgroups[di + "-" + dj] = {
	            index: di,
	            subindex: dj,
	            startAngle: a0,
	            endAngle: a1,
	            value: v
	          };
	        }
	        groups[di] = {
	          index: di,
	          startAngle: x0,
	          endAngle: x,
	          value: groupSums[di]
	        };
	        x += padding;
	      }
	      i = -1;
	      while (++i < n) {
	        j = i - 1;
	        while (++j < n) {
	          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
	          if (source.value || target.value) {
	            chords.push(source.value < target.value ? {
	              source: target,
	              target: source
	            } : {
	              source: source,
	              target: target
	            });
	          }
	        }
	      }
	      if (sortChords) resort();
	    }
	    function resort() {
	      chords.sort(function(a, b) {
	        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
	      });
	    }
	    chord.matrix = function(x) {
	      if (!arguments.length) return matrix;
	      n = (matrix = x) && matrix.length;
	      chords = groups = null;
	      return chord;
	    };
	    chord.padding = function(x) {
	      if (!arguments.length) return padding;
	      padding = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortGroups = function(x) {
	      if (!arguments.length) return sortGroups;
	      sortGroups = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortSubgroups = function(x) {
	      if (!arguments.length) return sortSubgroups;
	      sortSubgroups = x;
	      chords = null;
	      return chord;
	    };
	    chord.sortChords = function(x) {
	      if (!arguments.length) return sortChords;
	      sortChords = x;
	      if (chords) resort();
	      return chord;
	    };
	    chord.chords = function() {
	      if (!chords) relayout();
	      return chords;
	    };
	    chord.groups = function() {
	      if (!groups) relayout();
	      return groups;
	    };
	    return chord;
	  };
	  d3.layout.force = function() {
	    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
	    function repulse(node) {
	      return function(quad, x1, _, x2) {
	        if (quad.point !== node) {
	          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
	          if (dw * dw / theta2 < dn) {
	            if (dn < chargeDistance2) {
	              var k = quad.charge / dn;
	              node.px -= dx * k;
	              node.py -= dy * k;
	            }
	            return true;
	          }
	          if (quad.point && dn && dn < chargeDistance2) {
	            var k = quad.pointCharge / dn;
	            node.px -= dx * k;
	            node.py -= dy * k;
	          }
	        }
	        return !quad.charge;
	      };
	    }
	    force.tick = function() {
	      if ((alpha *= .99) < .005) {
	        timer = null;
	        event.end({
	          type: "end",
	          alpha: alpha = 0
	        });
	        return true;
	      }
	      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        s = o.source;
	        t = o.target;
	        x = t.x - s.x;
	        y = t.y - s.y;
	        if (l = x * x + y * y) {
	          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
	          x *= l;
	          y *= l;
	          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
	          t.y -= y * k;
	          s.x += x * (k = 1 - k);
	          s.y += y * k;
	        }
	      }
	      if (k = alpha * gravity) {
	        x = size[0] / 2;
	        y = size[1] / 2;
	        i = -1;
	        if (k) while (++i < n) {
	          o = nodes[i];
	          o.x += (x - o.x) * k;
	          o.y += (y - o.y) * k;
	        }
	      }
	      if (charge) {
	        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
	        i = -1;
	        while (++i < n) {
	          if (!(o = nodes[i]).fixed) {
	            q.visit(repulse(o));
	          }
	        }
	      }
	      i = -1;
	      while (++i < n) {
	        o = nodes[i];
	        if (o.fixed) {
	          o.x = o.px;
	          o.y = o.py;
	        } else {
	          o.x -= (o.px - (o.px = o.x)) * friction;
	          o.y -= (o.py - (o.py = o.y)) * friction;
	        }
	      }
	      event.tick({
	        type: "tick",
	        alpha: alpha
	      });
	    };
	    force.nodes = function(x) {
	      if (!arguments.length) return nodes;
	      nodes = x;
	      return force;
	    };
	    force.links = function(x) {
	      if (!arguments.length) return links;
	      links = x;
	      return force;
	    };
	    force.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return force;
	    };
	    force.linkDistance = function(x) {
	      if (!arguments.length) return linkDistance;
	      linkDistance = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.distance = force.linkDistance;
	    force.linkStrength = function(x) {
	      if (!arguments.length) return linkStrength;
	      linkStrength = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.friction = function(x) {
	      if (!arguments.length) return friction;
	      friction = +x;
	      return force;
	    };
	    force.charge = function(x) {
	      if (!arguments.length) return charge;
	      charge = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.chargeDistance = function(x) {
	      if (!arguments.length) return Math.sqrt(chargeDistance2);
	      chargeDistance2 = x * x;
	      return force;
	    };
	    force.gravity = function(x) {
	      if (!arguments.length) return gravity;
	      gravity = +x;
	      return force;
	    };
	    force.theta = function(x) {
	      if (!arguments.length) return Math.sqrt(theta2);
	      theta2 = x * x;
	      return force;
	    };
	    force.alpha = function(x) {
	      if (!arguments.length) return alpha;
	      x = +x;
	      if (alpha) {
	        if (x > 0) {
	          alpha = x;
	        } else {
	          timer.c = null, timer.t = NaN, timer = null;
	          event.end({
	            type: "end",
	            alpha: alpha = 0
	          });
	        }
	      } else if (x > 0) {
	        event.start({
	          type: "start",
	          alpha: alpha = x
	        });
	        timer = d3_timer(force.tick);
	      }
	      return force;
	    };
	    force.start = function() {
	      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
	      for (i = 0; i < n; ++i) {
	        (o = nodes[i]).index = i;
	        o.weight = 0;
	      }
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        if (typeof o.source == "number") o.source = nodes[o.source];
	        if (typeof o.target == "number") o.target = nodes[o.target];
	        ++o.source.weight;
	        ++o.target.weight;
	      }
	      for (i = 0; i < n; ++i) {
	        o = nodes[i];
	        if (isNaN(o.x)) o.x = position("x", w);
	        if (isNaN(o.y)) o.y = position("y", h);
	        if (isNaN(o.px)) o.px = o.x;
	        if (isNaN(o.py)) o.py = o.y;
	      }
	      distances = [];
	      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
	      strengths = [];
	      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
	      charges = [];
	      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
	      function position(dimension, size) {
	        if (!neighbors) {
	          neighbors = new Array(n);
	          for (j = 0; j < n; ++j) {
	            neighbors[j] = [];
	          }
	          for (j = 0; j < m; ++j) {
	            var o = links[j];
	            neighbors[o.source.index].push(o.target);
	            neighbors[o.target.index].push(o.source);
	          }
	        }
	        var candidates = neighbors[i], j = -1, l = candidates.length, x;
	        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
	        return Math.random() * size;
	      }
	      return force.resume();
	    };
	    force.resume = function() {
	      return force.alpha(.1);
	    };
	    force.stop = function() {
	      return force.alpha(0);
	    };
	    force.drag = function() {
	      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
	      if (!arguments.length) return drag;
	      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
	    };
	    function dragmove(d) {
	      d.px = d3.event.x, d.py = d3.event.y;
	      force.resume();
	    }
	    return d3.rebind(force, event, "on");
	  };
	  function d3_layout_forceDragstart(d) {
	    d.fixed |= 2;
	  }
	  function d3_layout_forceDragend(d) {
	    d.fixed &= ~6;
	  }
	  function d3_layout_forceMouseover(d) {
	    d.fixed |= 4;
	    d.px = d.x, d.py = d.y;
	  }
	  function d3_layout_forceMouseout(d) {
	    d.fixed &= ~4;
	  }
	  function d3_layout_forceAccumulate(quad, alpha, charges) {
	    var cx = 0, cy = 0;
	    quad.charge = 0;
	    if (!quad.leaf) {
	      var nodes = quad.nodes, n = nodes.length, i = -1, c;
	      while (++i < n) {
	        c = nodes[i];
	        if (c == null) continue;
	        d3_layout_forceAccumulate(c, alpha, charges);
	        quad.charge += c.charge;
	        cx += c.charge * c.cx;
	        cy += c.charge * c.cy;
	      }
	    }
	    if (quad.point) {
	      if (!quad.leaf) {
	        quad.point.x += Math.random() - .5;
	        quad.point.y += Math.random() - .5;
	      }
	      var k = alpha * charges[quad.point.index];
	      quad.charge += quad.pointCharge = k;
	      cx += k * quad.point.x;
	      cy += k * quad.point.y;
	    }
	    quad.cx = cx / quad.charge;
	    quad.cy = cy / quad.charge;
	  }
	  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
	  d3.layout.hierarchy = function() {
	    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
	    function hierarchy(root) {
	      var stack = [ root ], nodes = [], node;
	      root.depth = 0;
	      while ((node = stack.pop()) != null) {
	        nodes.push(node);
	        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
	          var n, childs, child;
	          while (--n >= 0) {
	            stack.push(child = childs[n]);
	            child.parent = node;
	            child.depth = node.depth + 1;
	          }
	          if (value) node.value = 0;
	          node.children = childs;
	        } else {
	          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          delete node.children;
	        }
	      }
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var childs, parent;
	        if (sort && (childs = node.children)) childs.sort(sort);
	        if (value && (parent = node.parent)) parent.value += node.value;
	      });
	      return nodes;
	    }
	    hierarchy.sort = function(x) {
	      if (!arguments.length) return sort;
	      sort = x;
	      return hierarchy;
	    };
	    hierarchy.children = function(x) {
	      if (!arguments.length) return children;
	      children = x;
	      return hierarchy;
	    };
	    hierarchy.value = function(x) {
	      if (!arguments.length) return value;
	      value = x;
	      return hierarchy;
	    };
	    hierarchy.revalue = function(root) {
	      if (value) {
	        d3_layout_hierarchyVisitBefore(root, function(node) {
	          if (node.children) node.value = 0;
	        });
	        d3_layout_hierarchyVisitAfter(root, function(node) {
	          var parent;
	          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          if (parent = node.parent) parent.value += node.value;
	        });
	      }
	      return root;
	    };
	    return hierarchy;
	  };
	  function d3_layout_hierarchyRebind(object, hierarchy) {
	    d3.rebind(object, hierarchy, "sort", "children", "value");
	    object.nodes = object;
	    object.links = d3_layout_hierarchyLinks;
	    return object;
	  }
	  function d3_layout_hierarchyVisitBefore(node, callback) {
	    var nodes = [ node ];
	    while ((node = nodes.pop()) != null) {
	      callback(node);
	      if ((children = node.children) && (n = children.length)) {
	        var n, children;
	        while (--n >= 0) nodes.push(children[n]);
	      }
	    }
	  }
	  function d3_layout_hierarchyVisitAfter(node, callback) {
	    var nodes = [ node ], nodes2 = [];
	    while ((node = nodes.pop()) != null) {
	      nodes2.push(node);
	      if ((children = node.children) && (n = children.length)) {
	        var i = -1, n, children;
	        while (++i < n) nodes.push(children[i]);
	      }
	    }
	    while ((node = nodes2.pop()) != null) {
	      callback(node);
	    }
	  }
	  function d3_layout_hierarchyChildren(d) {
	    return d.children;
	  }
	  function d3_layout_hierarchyValue(d) {
	    return d.value;
	  }
	  function d3_layout_hierarchySort(a, b) {
	    return b.value - a.value;
	  }
	  function d3_layout_hierarchyLinks(nodes) {
	    return d3.merge(nodes.map(function(parent) {
	      return (parent.children || []).map(function(child) {
	        return {
	          source: parent,
	          target: child
	        };
	      });
	    }));
	  }
	  d3.layout.partition = function() {
	    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
	    function position(node, x, dx, dy) {
	      var children = node.children;
	      node.x = x;
	      node.y = node.depth * dy;
	      node.dx = dx;
	      node.dy = dy;
	      if (children && (n = children.length)) {
	        var i = -1, n, c, d;
	        dx = node.value ? dx / node.value : 0;
	        while (++i < n) {
	          position(c = children[i], x, d = c.value * dx, dy);
	          x += d;
	        }
	      }
	    }
	    function depth(node) {
	      var children = node.children, d = 0;
	      if (children && (n = children.length)) {
	        var i = -1, n;
	        while (++i < n) d = Math.max(d, depth(children[i]));
	      }
	      return 1 + d;
	    }
	    function partition(d, i) {
	      var nodes = hierarchy.call(this, d, i);
	      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
	      return nodes;
	    }
	    partition.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return partition;
	    };
	    return d3_layout_hierarchyRebind(partition, hierarchy);
	  };
	  d3.layout.pie = function() {
	    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
	    function pie(data) {
	      var n = data.length, values = data.map(function(d, i) {
	        return +value.call(pie, d, i);
	      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
	      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
	        return values[j] - values[i];
	      } : function(i, j) {
	        return sort(data[i], data[j]);
	      });
	      index.forEach(function(i) {
	        arcs[i] = {
	          data: data[i],
	          value: v = values[i],
	          startAngle: a,
	          endAngle: a += v * k + pa,
	          padAngle: p
	        };
	      });
	      return arcs;
	    }
	    pie.value = function(_) {
	      if (!arguments.length) return value;
	      value = _;
	      return pie;
	    };
	    pie.sort = function(_) {
	      if (!arguments.length) return sort;
	      sort = _;
	      return pie;
	    };
	    pie.startAngle = function(_) {
	      if (!arguments.length) return startAngle;
	      startAngle = _;
	      return pie;
	    };
	    pie.endAngle = function(_) {
	      if (!arguments.length) return endAngle;
	      endAngle = _;
	      return pie;
	    };
	    pie.padAngle = function(_) {
	      if (!arguments.length) return padAngle;
	      padAngle = _;
	      return pie;
	    };
	    return pie;
	  };
	  var d3_layout_pieSortByValue = {};
	  d3.layout.stack = function() {
	    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
	    function stack(data, index) {
	      if (!(n = data.length)) return data;
	      var series = data.map(function(d, i) {
	        return values.call(stack, d, i);
	      });
	      var points = series.map(function(d) {
	        return d.map(function(v, i) {
	          return [ x.call(stack, v, i), y.call(stack, v, i) ];
	        });
	      });
	      var orders = order.call(stack, points, index);
	      series = d3.permute(series, orders);
	      points = d3.permute(points, orders);
	      var offsets = offset.call(stack, points, index);
	      var m = series[0].length, n, i, j, o;
	      for (j = 0; j < m; ++j) {
	        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
	        for (i = 1; i < n; ++i) {
	          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
	        }
	      }
	      return data;
	    }
	    stack.values = function(x) {
	      if (!arguments.length) return values;
	      values = x;
	      return stack;
	    };
	    stack.order = function(x) {
	      if (!arguments.length) return order;
	      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
	      return stack;
	    };
	    stack.offset = function(x) {
	      if (!arguments.length) return offset;
	      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
	      return stack;
	    };
	    stack.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      return stack;
	    };
	    stack.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      return stack;
	    };
	    stack.out = function(z) {
	      if (!arguments.length) return out;
	      out = z;
	      return stack;
	    };
	    return stack;
	  };
	  function d3_layout_stackX(d) {
	    return d.x;
	  }
	  function d3_layout_stackY(d) {
	    return d.y;
	  }
	  function d3_layout_stackOut(d, y0, y) {
	    d.y0 = y0;
	    d.y = y;
	  }
	  var d3_layout_stackOrders = d3.map({
	    "inside-out": function(data) {
	      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
	        return max[a] - max[b];
	      }), top = 0, bottom = 0, tops = [], bottoms = [];
	      for (i = 0; i < n; ++i) {
	        j = index[i];
	        if (top < bottom) {
	          top += sums[j];
	          tops.push(j);
	        } else {
	          bottom += sums[j];
	          bottoms.push(j);
	        }
	      }
	      return bottoms.reverse().concat(tops);
	    },
	    reverse: function(data) {
	      return d3.range(data.length).reverse();
	    },
	    "default": d3_layout_stackOrderDefault
	  });
	  var d3_layout_stackOffsets = d3.map({
	    silhouette: function(data) {
	      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o > max) max = o;
	        sums.push(o);
	      }
	      for (j = 0; j < m; ++j) {
	        y0[j] = (max - sums[j]) / 2;
	      }
	      return y0;
	    },
	    wiggle: function(data) {
	      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
	      y0[0] = o = o0 = 0;
	      for (j = 1; j < m; ++j) {
	        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
	        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
	          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
	            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
	          }
	          s2 += s3 * data[i][j][1];
	        }
	        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
	        if (o < o0) o0 = o;
	      }
	      for (j = 0; j < m; ++j) y0[j] -= o0;
	      return y0;
	    },
	    expand: function(data) {
	      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
	      }
	      for (j = 0; j < m; ++j) y0[j] = 0;
	      return y0;
	    },
	    zero: d3_layout_stackOffsetZero
	  });
	  function d3_layout_stackOrderDefault(data) {
	    return d3.range(data.length);
	  }
	  function d3_layout_stackOffsetZero(data) {
	    var j = -1, m = data[0].length, y0 = [];
	    while (++j < m) y0[j] = 0;
	    return y0;
	  }
	  function d3_layout_stackMaxIndex(array) {
	    var i = 1, j = 0, v = array[0][1], k, n = array.length;
	    for (;i < n; ++i) {
	      if ((k = array[i][1]) > v) {
	        j = i;
	        v = k;
	      }
	    }
	    return j;
	  }
	  function d3_layout_stackReduceSum(d) {
	    return d.reduce(d3_layout_stackSum, 0);
	  }
	  function d3_layout_stackSum(p, d) {
	    return p + d[1];
	  }
	  d3.layout.histogram = function() {
	    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
	    function histogram(data, i) {
	      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
	      while (++i < m) {
	        bin = bins[i] = [];
	        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
	        bin.y = 0;
	      }
	      if (m > 0) {
	        i = -1;
	        while (++i < n) {
	          x = values[i];
	          if (x >= range[0] && x <= range[1]) {
	            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
	            bin.y += k;
	            bin.push(data[i]);
	          }
	        }
	      }
	      return bins;
	    }
	    histogram.value = function(x) {
	      if (!arguments.length) return valuer;
	      valuer = x;
	      return histogram;
	    };
	    histogram.range = function(x) {
	      if (!arguments.length) return ranger;
	      ranger = d3_functor(x);
	      return histogram;
	    };
	    histogram.bins = function(x) {
	      if (!arguments.length) return binner;
	      binner = typeof x === "number" ? function(range) {
	        return d3_layout_histogramBinFixed(range, x);
	      } : d3_functor(x);
	      return histogram;
	    };
	    histogram.frequency = function(x) {
	      if (!arguments.length) return frequency;
	      frequency = !!x;
	      return histogram;
	    };
	    return histogram;
	  };
	  function d3_layout_histogramBinSturges(range, values) {
	    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
	  }
	  function d3_layout_histogramBinFixed(range, n) {
	    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
	    while (++x <= n) f[x] = m * x + b;
	    return f;
	  }
	  function d3_layout_histogramRange(values) {
	    return [ d3.min(values), d3.max(values) ];
	  }
	  d3.layout.pack = function() {
	    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
	    function pack(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
	        return radius;
	      };
	      root.x = root.y = 0;
	      d3_layout_hierarchyVisitAfter(root, function(d) {
	        d.r = +r(d.value);
	      });
	      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	      if (padding) {
	        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r += dr;
	        });
	        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r -= dr;
	        });
	      }
	      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
	      return nodes;
	    }
	    pack.size = function(_) {
	      if (!arguments.length) return size;
	      size = _;
	      return pack;
	    };
	    pack.radius = function(_) {
	      if (!arguments.length) return radius;
	      radius = _ == null || typeof _ === "function" ? _ : +_;
	      return pack;
	    };
	    pack.padding = function(_) {
	      if (!arguments.length) return padding;
	      padding = +_;
	      return pack;
	    };
	    return d3_layout_hierarchyRebind(pack, hierarchy);
	  };
	  function d3_layout_packSort(a, b) {
	    return a.value - b.value;
	  }
	  function d3_layout_packInsert(a, b) {
	    var c = a._pack_next;
	    a._pack_next = b;
	    b._pack_prev = a;
	    b._pack_next = c;
	    c._pack_prev = b;
	  }
	  function d3_layout_packSplice(a, b) {
	    a._pack_next = b;
	    b._pack_prev = a;
	  }
	  function d3_layout_packIntersects(a, b) {
	    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
	    return .999 * dr * dr > dx * dx + dy * dy;
	  }
	  function d3_layout_packSiblings(node) {
	    if (!(nodes = node.children) || !(n = nodes.length)) return;
	    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
	    function bound(node) {
	      xMin = Math.min(node.x - node.r, xMin);
	      xMax = Math.max(node.x + node.r, xMax);
	      yMin = Math.min(node.y - node.r, yMin);
	      yMax = Math.max(node.y + node.r, yMax);
	    }
	    nodes.forEach(d3_layout_packLink);
	    a = nodes[0];
	    a.x = -a.r;
	    a.y = 0;
	    bound(a);
	    if (n > 1) {
	      b = nodes[1];
	      b.x = b.r;
	      b.y = 0;
	      bound(b);
	      if (n > 2) {
	        c = nodes[2];
	        d3_layout_packPlace(a, b, c);
	        bound(c);
	        d3_layout_packInsert(a, c);
	        a._pack_prev = c;
	        d3_layout_packInsert(c, b);
	        b = a._pack_next;
	        for (i = 3; i < n; i++) {
	          d3_layout_packPlace(a, b, c = nodes[i]);
	          var isect = 0, s1 = 1, s2 = 1;
	          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
	            if (d3_layout_packIntersects(j, c)) {
	              isect = 1;
	              break;
	            }
	          }
	          if (isect == 1) {
	            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
	              if (d3_layout_packIntersects(k, c)) {
	                break;
	              }
	            }
	          }
	          if (isect) {
	            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
	            i--;
	          } else {
	            d3_layout_packInsert(a, c);
	            b = c;
	            bound(c);
	          }
	        }
	      }
	    }
	    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
	    for (i = 0; i < n; i++) {
	      c = nodes[i];
	      c.x -= cx;
	      c.y -= cy;
	      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
	    }
	    node.r = cr;
	    nodes.forEach(d3_layout_packUnlink);
	  }
	  function d3_layout_packLink(node) {
	    node._pack_next = node._pack_prev = node;
	  }
	  function d3_layout_packUnlink(node) {
	    delete node._pack_next;
	    delete node._pack_prev;
	  }
	  function d3_layout_packTransform(node, x, y, k) {
	    var children = node.children;
	    node.x = x += k * node.x;
	    node.y = y += k * node.y;
	    node.r *= k;
	    if (children) {
	      var i = -1, n = children.length;
	      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
	    }
	  }
	  function d3_layout_packPlace(a, b, c) {
	    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
	    if (db && (dx || dy)) {
	      var da = b.r + c.r, dc = dx * dx + dy * dy;
	      da *= da;
	      db *= db;
	      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	      c.x = a.x + x * dx + y * dy;
	      c.y = a.y + x * dy - y * dx;
	    } else {
	      c.x = a.x + db;
	      c.y = a.y;
	    }
	  }
	  d3.layout.tree = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
	    function tree(d, i) {
	      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
	      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
	      d3_layout_hierarchyVisitBefore(root1, secondWalk);
	      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
	        var left = root0, right = root0, bottom = root0;
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          if (node.x < left.x) left = node;
	          if (node.x > right.x) right = node;
	          if (node.depth > bottom.depth) bottom = node;
	        });
	        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          node.x = (node.x + tx) * kx;
	          node.y = node.depth * ky;
	        });
	      }
	      return nodes;
	    }
	    function wrapTree(root0) {
	      var root1 = {
	        A: null,
	        children: [ root0 ]
	      }, queue = [ root1 ], node1;
	      while ((node1 = queue.pop()) != null) {
	        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
	          queue.push((children[i] = child = {
	            _: children[i],
	            parent: node1,
	            children: (child = children[i].children) && child.slice() || [],
	            A: null,
	            a: null,
	            z: 0,
	            m: 0,
	            c: 0,
	            s: 0,
	            t: null,
	            i: i
	          }).a = child);
	        }
	      }
	      return root1.children[0];
	    }
	    function firstWalk(v) {
	      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
	      if (children.length) {
	        d3_layout_treeShift(v);
	        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	        if (w) {
	          v.z = w.z + separation(v._, w._);
	          v.m = v.z - midpoint;
	        } else {
	          v.z = midpoint;
	        }
	      } else if (w) {
	        v.z = w.z + separation(v._, w._);
	      }
	      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	    }
	    function secondWalk(v) {
	      v._.x = v.z + v.parent.m;
	      v.m += v.parent.m;
	    }
	    function apportion(v, w, ancestor) {
	      if (w) {
	        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
	        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
	          vom = d3_layout_treeLeft(vom);
	          vop = d3_layout_treeRight(vop);
	          vop.a = v;
	          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	          if (shift > 0) {
	            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
	            sip += shift;
	            sop += shift;
	          }
	          sim += vim.m;
	          sip += vip.m;
	          som += vom.m;
	          sop += vop.m;
	        }
	        if (vim && !d3_layout_treeRight(vop)) {
	          vop.t = vim;
	          vop.m += sim - sop;
	        }
	        if (vip && !d3_layout_treeLeft(vom)) {
	          vom.t = vip;
	          vom.m += sip - som;
	          ancestor = v;
	        }
	      }
	      return ancestor;
	    }
	    function sizeNode(node) {
	      node.x *= size[0];
	      node.y = node.depth * size[1];
	    }
	    tree.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return tree;
	    };
	    tree.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null ? sizeNode : null;
	      return tree;
	    };
	    tree.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) == null ? null : sizeNode;
	      return tree;
	    };
	    return d3_layout_hierarchyRebind(tree, hierarchy);
	  };
	  function d3_layout_treeSeparation(a, b) {
	    return a.parent == b.parent ? 1 : 2;
	  }
	  function d3_layout_treeLeft(v) {
	    var children = v.children;
	    return children.length ? children[0] : v.t;
	  }
	  function d3_layout_treeRight(v) {
	    var children = v.children, n;
	    return (n = children.length) ? children[n - 1] : v.t;
	  }
	  function d3_layout_treeMove(wm, wp, shift) {
	    var change = shift / (wp.i - wm.i);
	    wp.c -= change;
	    wp.s += shift;
	    wm.c += change;
	    wp.z += shift;
	    wp.m += shift;
	  }
	  function d3_layout_treeShift(v) {
	    var shift = 0, change = 0, children = v.children, i = children.length, w;
	    while (--i >= 0) {
	      w = children[i];
	      w.z += shift;
	      w.m += shift;
	      shift += w.s + (change += w.c);
	    }
	  }
	  function d3_layout_treeAncestor(vim, v, ancestor) {
	    return vim.a.parent === v.parent ? vim.a : ancestor;
	  }
	  d3.layout.cluster = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
	    function cluster(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var children = node.children;
	        if (children && children.length) {
	          node.x = d3_layout_clusterX(children);
	          node.y = d3_layout_clusterY(children);
	        } else {
	          node.x = previousNode ? x += separation(node, previousNode) : 0;
	          node.y = 0;
	          previousNode = node;
	        }
	      });
	      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
	      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
	        node.x = (node.x - root.x) * size[0];
	        node.y = (root.y - node.y) * size[1];
	      } : function(node) {
	        node.x = (node.x - x0) / (x1 - x0) * size[0];
	        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
	      });
	      return nodes;
	    }
	    cluster.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return cluster;
	    };
	    cluster.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null;
	      return cluster;
	    };
	    cluster.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) != null;
	      return cluster;
	    };
	    return d3_layout_hierarchyRebind(cluster, hierarchy);
	  };
	  function d3_layout_clusterY(children) {
	    return 1 + d3.max(children, function(child) {
	      return child.y;
	    });
	  }
	  function d3_layout_clusterX(children) {
	    return children.reduce(function(x, child) {
	      return x + child.x;
	    }, 0) / children.length;
	  }
	  function d3_layout_clusterLeft(node) {
	    var children = node.children;
	    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
	  }
	  function d3_layout_clusterRight(node) {
	    var children = node.children, n;
	    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
	  }
	  d3.layout.treemap = function() {
	    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
	    function scale(children, k) {
	      var i = -1, n = children.length, child, area;
	      while (++i < n) {
	        area = (child = children[i]).value * (k < 0 ? 0 : k);
	        child.area = isNaN(area) || area <= 0 ? 0 : area;
	      }
	    }
	    function squarify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while ((n = remaining.length) > 0) {
	          row.push(child = remaining[n - 1]);
	          row.area += child.area;
	          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
	            remaining.pop();
	            best = score;
	          } else {
	            row.area -= row.pop().area;
	            position(row, u, rect, false);
	            u = Math.min(rect.dx, rect.dy);
	            row.length = row.area = 0;
	            best = Infinity;
	          }
	        }
	        if (row.length) {
	          position(row, u, rect, true);
	          row.length = row.area = 0;
	        }
	        children.forEach(squarify);
	      }
	    }
	    function stickify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), remaining = children.slice(), child, row = [];
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while (child = remaining.pop()) {
	          row.push(child);
	          row.area += child.area;
	          if (child.z != null) {
	            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
	            row.length = row.area = 0;
	          }
	        }
	        children.forEach(stickify);
	      }
	    }
	    function worst(row, u) {
	      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
	      while (++i < n) {
	        if (!(r = row[i].area)) continue;
	        if (r < rmin) rmin = r;
	        if (r > rmax) rmax = r;
	      }
	      s *= s;
	      u *= u;
	      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
	    }
	    function position(row, u, rect, flush) {
	      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
	      if (u == rect.dx) {
	        if (flush || v > rect.dy) v = rect.dy;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dy = v;
	          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
	        }
	        o.z = true;
	        o.dx += rect.x + rect.dx - x;
	        rect.y += v;
	        rect.dy -= v;
	      } else {
	        if (flush || v > rect.dx) v = rect.dx;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dx = v;
	          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
	        }
	        o.z = false;
	        o.dy += rect.y + rect.dy - y;
	        rect.x += v;
	        rect.dx -= v;
	      }
	    }
	    function treemap(d) {
	      var nodes = stickies || hierarchy(d), root = nodes[0];
	      root.x = root.y = 0;
	      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
	      if (stickies) hierarchy.revalue(root);
	      scale([ root ], root.dx * root.dy / root.value);
	      (stickies ? stickify : squarify)(root);
	      if (sticky) stickies = nodes;
	      return nodes;
	    }
	    treemap.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return treemap;
	    };
	    treemap.padding = function(x) {
	      if (!arguments.length) return padding;
	      function padFunction(node) {
	        var p = x.call(treemap, node, node.depth);
	        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
	      }
	      function padConstant(node) {
	        return d3_layout_treemapPad(node, x);
	      }
	      var type;
	      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
	      padConstant) : padConstant;
	      return treemap;
	    };
	    treemap.round = function(x) {
	      if (!arguments.length) return round != Number;
	      round = x ? Math.round : Number;
	      return treemap;
	    };
	    treemap.sticky = function(x) {
	      if (!arguments.length) return sticky;
	      sticky = x;
	      stickies = null;
	      return treemap;
	    };
	    treemap.ratio = function(x) {
	      if (!arguments.length) return ratio;
	      ratio = x;
	      return treemap;
	    };
	    treemap.mode = function(x) {
	      if (!arguments.length) return mode;
	      mode = x + "";
	      return treemap;
	    };
	    return d3_layout_hierarchyRebind(treemap, hierarchy);
	  };
	  function d3_layout_treemapPadNull(node) {
	    return {
	      x: node.x,
	      y: node.y,
	      dx: node.dx,
	      dy: node.dy
	    };
	  }
	  function d3_layout_treemapPad(node, padding) {
	    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
	    if (dx < 0) {
	      x += dx / 2;
	      dx = 0;
	    }
	    if (dy < 0) {
	      y += dy / 2;
	      dy = 0;
	    }
	    return {
	      x: x,
	      y: y,
	      dx: dx,
	      dy: dy
	    };
	  }
	  d3.random = {
	    normal: function(µ, σ) {
	      var n = arguments.length;
	      if (n < 2) σ = 1;
	      if (n < 1) µ = 0;
	      return function() {
	        var x, y, r;
	        do {
	          x = Math.random() * 2 - 1;
	          y = Math.random() * 2 - 1;
	          r = x * x + y * y;
	        } while (!r || r > 1);
	        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
	      };
	    },
	    logNormal: function() {
	      var random = d3.random.normal.apply(d3, arguments);
	      return function() {
	        return Math.exp(random());
	      };
	    },
	    bates: function(m) {
	      var random = d3.random.irwinHall(m);
	      return function() {
	        return random() / m;
	      };
	    },
	    irwinHall: function(m) {
	      return function() {
	        for (var s = 0, j = 0; j < m; j++) s += Math.random();
	        return s;
	      };
	    }
	  };
	  d3.scale = {};
	  function d3_scaleExtent(domain) {
	    var start = domain[0], stop = domain[domain.length - 1];
	    return start < stop ? [ start, stop ] : [ stop, start ];
	  }
	  function d3_scaleRange(scale) {
	    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	  }
	  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
	    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
	    return function(x) {
	      return i(u(x));
	    };
	  }
	  function d3_scale_nice(domain, nice) {
	    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
	    if (x1 < x0) {
	      dx = i0, i0 = i1, i1 = dx;
	      dx = x0, x0 = x1, x1 = dx;
	    }
	    domain[i0] = nice.floor(x0);
	    domain[i1] = nice.ceil(x1);
	    return domain;
	  }
	  function d3_scale_niceStep(step) {
	    return step ? {
	      floor: function(x) {
	        return Math.floor(x / step) * step;
	      },
	      ceil: function(x) {
	        return Math.ceil(x / step) * step;
	      }
	    } : d3_scale_niceIdentity;
	  }
	  var d3_scale_niceIdentity = {
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
	    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
	    if (domain[k] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }
	    while (++j <= k) {
	      u.push(uninterpolate(domain[j - 1], domain[j]));
	      i.push(interpolate(range[j - 1], range[j]));
	    }
	    return function(x) {
	      var j = d3.bisect(domain, x, 1, k) - 1;
	      return i[j](u[j](x));
	    };
	  }
	  d3.scale.linear = function() {
	    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
	  };
	  function d3_scale_linear(domain, range, interpolate, clamp) {
	    var output, input;
	    function rescale() {
	      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
	      output = linear(domain, range, uninterpolate, interpolate);
	      input = linear(range, domain, uninterpolate, d3_interpolate);
	      return scale;
	    }
	    function scale(x) {
	      return output(x);
	    }
	    scale.invert = function(y) {
	      return input(y);
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(Number);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.rangeRound = function(x) {
	      return scale.range(x).interpolate(d3_interpolateRound);
	    };
	    scale.clamp = function(x) {
	      if (!arguments.length) return clamp;
	      clamp = x;
	      return rescale();
	    };
	    scale.interpolate = function(x) {
	      if (!arguments.length) return interpolate;
	      interpolate = x;
	      return rescale();
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      d3_scale_linearNice(domain, m);
	      return rescale();
	    };
	    scale.copy = function() {
	      return d3_scale_linear(domain, range, interpolate, clamp);
	    };
	    return rescale();
	  }
	  function d3_scale_linearRebind(scale, linear) {
	    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
	  }
	  function d3_scale_linearNice(domain, m) {
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    return domain;
	  }
	  function d3_scale_linearTickRange(domain, m) {
	    if (m == null) m = 10;
	    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
	    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
	    extent[0] = Math.ceil(extent[0] / step) * step;
	    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
	    extent[2] = step;
	    return extent;
	  }
	  function d3_scale_linearTicks(domain, m) {
	    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
	  }
	  function d3_scale_linearTickFormat(domain, m, format) {
	    var range = d3_scale_linearTickRange(domain, m);
	    if (format) {
	      var match = d3_format_re.exec(format);
	      match.shift();
	      if (match[8] === "s") {
	        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
	        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
	        match[8] = "f";
	        format = d3.format(match.join(""));
	        return function(d) {
	          return format(prefix.scale(d)) + prefix.symbol;
	        };
	      }
	      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
	      format = match.join("");
	    } else {
	      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
	    }
	    return d3.format(format);
	  }
	  var d3_scale_linearFormatSignificant = {
	    s: 1,
	    g: 1,
	    p: 1,
	    r: 1,
	    e: 1
	  };
	  function d3_scale_linearPrecision(value) {
	    return -Math.floor(Math.log(value) / Math.LN10 + .01);
	  }
	  function d3_scale_linearFormatPrecision(type, range) {
	    var p = d3_scale_linearPrecision(range[2]);
	    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
	  }
	  d3.scale.log = function() {
	    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
	  };
	  function d3_scale_log(linear, base, positive, domain) {
	    function log(x) {
	      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
	    }
	    function pow(x) {
	      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
	    }
	    function scale(x) {
	      return linear(log(x));
	    }
	    scale.invert = function(x) {
	      return pow(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      positive = x[0] >= 0;
	      linear.domain((domain = x.map(Number)).map(log));
	      return scale;
	    };
	    scale.base = function(_) {
	      if (!arguments.length) return base;
	      base = +_;
	      linear.domain(domain.map(log));
	      return scale;
	    };
	    scale.nice = function() {
	      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
	      linear.domain(niced);
	      domain = niced.map(pow);
	      return scale;
	    };
	    scale.ticks = function() {
	      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
	      if (isFinite(j - i)) {
	        if (positive) {
	          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
	          ticks.push(pow(i));
	        } else {
	          ticks.push(pow(i));
	          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
	        }
	        for (i = 0; ticks[i] < u; i++) {}
	        for (j = ticks.length; ticks[j - 1] > v; j--) {}
	        ticks = ticks.slice(i, j);
	      }
	      return ticks;
	    };
	    scale.tickFormat = function(n, format) {
	      if (!arguments.length) return d3_scale_logFormat;
	      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
	      var k = Math.max(1, base * n / scale.ticks().length);
	      return function(d) {
	        var i = d / pow(Math.round(log(d)));
	        if (i * base < base - .5) i *= base;
	        return i <= k ? format(d) : "";
	      };
	    };
	    scale.copy = function() {
	      return d3_scale_log(linear.copy(), base, positive, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
	    floor: function(x) {
	      return -Math.ceil(-x);
	    },
	    ceil: function(x) {
	      return -Math.floor(-x);
	    }
	  };
	  d3.scale.pow = function() {
	    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
	  };
	  function d3_scale_pow(linear, exponent, domain) {
	    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
	    function scale(x) {
	      return linear(powp(x));
	    }
	    scale.invert = function(x) {
	      return powb(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      linear.domain((domain = x.map(Number)).map(powp));
	      return scale;
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      return scale.domain(d3_scale_linearNice(domain, m));
	    };
	    scale.exponent = function(x) {
	      if (!arguments.length) return exponent;
	      powp = d3_scale_powPow(exponent = x);
	      powb = d3_scale_powPow(1 / exponent);
	      linear.domain(domain.map(powp));
	      return scale;
	    };
	    scale.copy = function() {
	      return d3_scale_pow(linear.copy(), exponent, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_scale_powPow(e) {
	    return function(x) {
	      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
	    };
	  }
	  d3.scale.sqrt = function() {
	    return d3.scale.pow().exponent(.5);
	  };
	  d3.scale.ordinal = function() {
	    return d3_scale_ordinal([], {
	      t: "range",
	      a: [ [] ]
	    });
	  };
	  function d3_scale_ordinal(domain, ranger) {
	    var index, range, rangeBand;
	    function scale(x) {
	      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
	    }
	    function steps(start, step) {
	      return d3.range(domain.length).map(function(i) {
	        return start + step * i;
	      });
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = [];
	      index = new d3_Map();
	      var i = -1, n = x.length, xi;
	      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
	      return scale[ranger.t].apply(scale, ranger.a);
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      rangeBand = 0;
	      ranger = {
	        t: "range",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangePoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
	      0) : (stop - start) / (domain.length - 1 + padding);
	      range = steps(start + step * padding / 2, step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangePoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundPoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
	      0) : (stop - start) / (domain.length - 1 + padding) | 0;
	      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangeRoundPoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
	      range = steps(start + step * outerPadding, step);
	      if (reverse) range.reverse();
	      rangeBand = step * (1 - padding);
	      ranger = {
	        t: "rangeBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
	      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
	      if (reverse) range.reverse();
	      rangeBand = Math.round(step * (1 - padding));
	      ranger = {
	        t: "rangeRoundBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBand = function() {
	      return rangeBand;
	    };
	    scale.rangeExtent = function() {
	      return d3_scaleExtent(ranger.a[0]);
	    };
	    scale.copy = function() {
	      return d3_scale_ordinal(domain, ranger);
	    };
	    return scale.domain(domain);
	  }
	  d3.scale.category10 = function() {
	    return d3.scale.ordinal().range(d3_category10);
	  };
	  d3.scale.category20 = function() {
	    return d3.scale.ordinal().range(d3_category20);
	  };
	  d3.scale.category20b = function() {
	    return d3.scale.ordinal().range(d3_category20b);
	  };
	  d3.scale.category20c = function() {
	    return d3.scale.ordinal().range(d3_category20c);
	  };
	  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
	  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
	  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
	  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
	  d3.scale.quantile = function() {
	    return d3_scale_quantile([], []);
	  };
	  function d3_scale_quantile(domain, range) {
	    var thresholds;
	    function rescale() {
	      var k = 0, q = range.length;
	      thresholds = [];
	      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
	      return scale;
	    }
	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.quantiles = function() {
	      return thresholds;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantile(domain, range);
	    };
	    return rescale();
	  }
	  d3.scale.quantize = function() {
	    return d3_scale_quantize(0, 1, [ 0, 1 ]);
	  };
	  function d3_scale_quantize(x0, x1, range) {
	    var kx, i;
	    function scale(x) {
	      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
	    }
	    function rescale() {
	      kx = range.length / (x1 - x0);
	      i = range.length - 1;
	      return scale;
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return [ x0, x1 ];
	      x0 = +x[0];
	      x1 = +x[x.length - 1];
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      y = y < 0 ? NaN : y / kx + x0;
	      return [ y, y + 1 / kx ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantize(x0, x1, range);
	    };
	    return rescale();
	  }
	  d3.scale.threshold = function() {
	    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
	  };
	  function d3_scale_threshold(domain, range) {
	    function scale(x) {
	      if (x <= x) return range[d3.bisect(domain, x)];
	    }
	    scale.domain = function(_) {
	      if (!arguments.length) return domain;
	      domain = _;
	      return scale;
	    };
	    scale.range = function(_) {
	      if (!arguments.length) return range;
	      range = _;
	      return scale;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return [ domain[y - 1], domain[y] ];
	    };
	    scale.copy = function() {
	      return d3_scale_threshold(domain, range);
	    };
	    return scale;
	  }
	  d3.scale.identity = function() {
	    return d3_scale_identity([ 0, 1 ]);
	  };
	  function d3_scale_identity(domain) {
	    function identity(x) {
	      return +x;
	    }
	    identity.invert = identity;
	    identity.domain = identity.range = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(identity);
	      return identity;
	    };
	    identity.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    identity.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    identity.copy = function() {
	      return d3_scale_identity(domain);
	    };
	    return identity;
	  }
	  d3.svg = {};
	  function d3_zero() {
	    return 0;
	  }
	  d3.svg.arc = function() {
	    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
	    function arc() {
	      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
	      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
	      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
	      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
	      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
	        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
	        if (!cw) p1 *= -1;
	        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
	        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
	      }
	      if (r1) {
	        x0 = r1 * Math.cos(a0 + p1);
	        y0 = r1 * Math.sin(a0 + p1);
	        x1 = r1 * Math.cos(a1 - p1);
	        y1 = r1 * Math.sin(a1 - p1);
	        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
	        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
	          var h1 = (a0 + a1) / 2;
	          x0 = r1 * Math.cos(h1);
	          y0 = r1 * Math.sin(h1);
	          x1 = y1 = null;
	        }
	      } else {
	        x0 = y0 = 0;
	      }
	      if (r0) {
	        x2 = r0 * Math.cos(a1 - p0);
	        y2 = r0 * Math.sin(a1 - p0);
	        x3 = r0 * Math.cos(a0 + p0);
	        y3 = r0 * Math.sin(a0 + p0);
	        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
	        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
	          var h0 = (a0 + a1) / 2;
	          x2 = r0 * Math.cos(h0);
	          y2 = r0 * Math.sin(h0);
	          x3 = y3 = null;
	        }
	      } else {
	        x2 = y2 = 0;
	      }
	      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
	        cr = r0 < r1 ^ cw ? 0 : 1;
	        var rc1 = rc, rc0 = rc;
	        if (da < π) {
	          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	        }
	        if (x1 != null) {
	          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
	          if (rc === rc1) {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
	          } else {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
	          }
	        } else {
	          path.push("M", x0, ",", y0);
	        }
	        if (x3 != null) {
	          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
	          if (rc === rc0) {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          } else {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          }
	        } else {
	          path.push("L", x2, ",", y2);
	        }
	      } else {
	        path.push("M", x0, ",", y0);
	        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
	        path.push("L", x2, ",", y2);
	        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
	      }
	      path.push("Z");
	      return path.join("");
	    }
	    function circleSegment(r1, cw) {
	      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
	    }
	    arc.innerRadius = function(v) {
	      if (!arguments.length) return innerRadius;
	      innerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.outerRadius = function(v) {
	      if (!arguments.length) return outerRadius;
	      outerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.cornerRadius = function(v) {
	      if (!arguments.length) return cornerRadius;
	      cornerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.padRadius = function(v) {
	      if (!arguments.length) return padRadius;
	      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
	      return arc;
	    };
	    arc.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return arc;
	    };
	    arc.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return arc;
	    };
	    arc.padAngle = function(v) {
	      if (!arguments.length) return padAngle;
	      padAngle = d3_functor(v);
	      return arc;
	    };
	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
	      return [ Math.cos(a) * r, Math.sin(a) * r ];
	    };
	    return arc;
	  };
	  var d3_svg_arcAuto = "auto";
	  function d3_svg_arcInnerRadius(d) {
	    return d.innerRadius;
	  }
	  function d3_svg_arcOuterRadius(d) {
	    return d.outerRadius;
	  }
	  function d3_svg_arcStartAngle(d) {
	    return d.startAngle;
	  }
	  function d3_svg_arcEndAngle(d) {
	    return d.endAngle;
	  }
	  function d3_svg_arcPadAngle(d) {
	    return d && d.padAngle;
	  }
	  function d3_svg_arcSweep(x0, y0, x1, y1) {
	    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
	  }
	  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
	    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
	  }
	  function d3_svg_line(projection) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
	    function line(data) {
	      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
	      function segment() {
	        segments.push("M", interpolate(projection(points), tension));
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
	        } else if (points.length) {
	          segment();
	          points = [];
	        }
	      }
	      if (points.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    line.x = function(_) {
	      if (!arguments.length) return x;
	      x = _;
	      return line;
	    };
	    line.y = function(_) {
	      if (!arguments.length) return y;
	      y = _;
	      return line;
	    };
	    line.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return line;
	    };
	    line.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      return line;
	    };
	    line.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return line;
	    };
	    return line;
	  }
	  d3.svg.line = function() {
	    return d3_svg_line(d3_identity);
	  };
	  var d3_svg_lineInterpolators = d3.map({
	    linear: d3_svg_lineLinear,
	    "linear-closed": d3_svg_lineLinearClosed,
	    step: d3_svg_lineStep,
	    "step-before": d3_svg_lineStepBefore,
	    "step-after": d3_svg_lineStepAfter,
	    basis: d3_svg_lineBasis,
	    "basis-open": d3_svg_lineBasisOpen,
	    "basis-closed": d3_svg_lineBasisClosed,
	    bundle: d3_svg_lineBundle,
	    cardinal: d3_svg_lineCardinal,
	    "cardinal-open": d3_svg_lineCardinalOpen,
	    "cardinal-closed": d3_svg_lineCardinalClosed,
	    monotone: d3_svg_lineMonotone
	  });
	  d3_svg_lineInterpolators.forEach(function(key, value) {
	    value.key = key;
	    value.closed = /-closed$/.test(key);
	  });
	  function d3_svg_lineLinear(points) {
	    return points.length > 1 ? points.join("L") : points + "Z";
	  }
	  function d3_svg_lineLinearClosed(points) {
	    return points.join("L") + "Z";
	  }
	  function d3_svg_lineStep(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
	    if (n > 1) path.push("H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepBefore(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepAfter(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
	    return path.join("");
	  }
	  function d3_svg_lineCardinalOpen(points, tension) {
	    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineCardinalClosed(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
	    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
	  }
	  function d3_svg_lineCardinal(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineHermite(points, tangents) {
	    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
	      return d3_svg_lineLinear(points);
	    }
	    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
	    if (quad) {
	      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
	      p0 = points[1];
	      pi = 2;
	    }
	    if (tangents.length > 1) {
	      t = tangents[1];
	      p = points[pi];
	      pi++;
	      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      for (var i = 2; i < tangents.length; i++, pi++) {
	        p = points[pi];
	        t = tangents[i];
	        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      }
	    }
	    if (quad) {
	      var lp = points[pi];
	      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
	    }
	    return path;
	  }
	  function d3_svg_lineCardinalTangents(points, tension) {
	    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
	    while (++i < n) {
	      p0 = p1;
	      p1 = p2;
	      p2 = points[i];
	      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineBasis(points) {
	    if (points.length < 3) return d3_svg_lineLinear(points);
	    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    points.push(points[n - 1]);
	    while (++i <= n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    points.pop();
	    path.push("L", pi);
	    return path.join("");
	  }
	  function d3_svg_lineBasisOpen(points) {
	    if (points.length < 4) return d3_svg_lineLinear(points);
	    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
	    while (++i < 3) {
	      pi = points[i];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
	    --i;
	    while (++i < n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBasisClosed(points) {
	    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
	    while (++i < 4) {
	      pi = points[i % n];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    --i;
	    while (++i < m) {
	      pi = points[i % n];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBundle(points, tension) {
	    var n = points.length - 1;
	    if (n) {
	      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
	      while (++i <= n) {
	        p = points[i];
	        t = i / n;
	        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
	        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
	      }
	    }
	    return d3_svg_lineBasis(points);
	  }
	  function d3_svg_lineDot4(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	  }
	  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
	  function d3_svg_lineBasisBezier(path, x, y) {
	    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
	  }
	  function d3_svg_lineSlope(p0, p1) {
	    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
	  }
	  function d3_svg_lineFiniteDifferences(points) {
	    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
	    while (++i < j) {
	      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
	    }
	    m[i] = d;
	    return m;
	  }
	  function d3_svg_lineMonotoneTangents(points) {
	    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
	    while (++i < j) {
	      d = d3_svg_lineSlope(points[i], points[i + 1]);
	      if (abs(d) < ε) {
	        m[i] = m[i + 1] = 0;
	      } else {
	        a = m[i] / d;
	        b = m[i + 1] / d;
	        s = a * a + b * b;
	        if (s > 9) {
	          s = d * 3 / Math.sqrt(s);
	          m[i] = s * a;
	          m[i + 1] = s * b;
	        }
	      }
	    }
	    i = -1;
	    while (++i <= j) {
	      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
	      tangents.push([ s || 0, m[i] * s || 0 ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineMonotone(points) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
	  }
	  d3.svg.line.radial = function() {
	    var line = d3_svg_line(d3_svg_lineRadial);
	    line.radius = line.x, delete line.x;
	    line.angle = line.y, delete line.y;
	    return line;
	  };
	  function d3_svg_lineRadial(points) {
	    var point, i = -1, n = points.length, r, a;
	    while (++i < n) {
	      point = points[i];
	      r = point[0];
	      a = point[1] - halfπ;
	      point[0] = r * Math.cos(a);
	      point[1] = r * Math.sin(a);
	    }
	    return points;
	  }
	  function d3_svg_area(projection) {
	    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
	    function area(data) {
	      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
	        return x;
	      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
	        return y;
	      } : d3_functor(y1), x, y;
	      function segment() {
	        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
	          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
	        } else if (points0.length) {
	          segment();
	          points0 = [];
	          points1 = [];
	        }
	      }
	      if (points0.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    area.x = function(_) {
	      if (!arguments.length) return x1;
	      x0 = x1 = _;
	      return area;
	    };
	    area.x0 = function(_) {
	      if (!arguments.length) return x0;
	      x0 = _;
	      return area;
	    };
	    area.x1 = function(_) {
	      if (!arguments.length) return x1;
	      x1 = _;
	      return area;
	    };
	    area.y = function(_) {
	      if (!arguments.length) return y1;
	      y0 = y1 = _;
	      return area;
	    };
	    area.y0 = function(_) {
	      if (!arguments.length) return y0;
	      y0 = _;
	      return area;
	    };
	    area.y1 = function(_) {
	      if (!arguments.length) return y1;
	      y1 = _;
	      return area;
	    };
	    area.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return area;
	    };
	    area.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      interpolateReverse = interpolate.reverse || interpolate;
	      L = interpolate.closed ? "M" : "L";
	      return area;
	    };
	    area.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return area;
	    };
	    return area;
	  }
	  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
	  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
	  d3.svg.area = function() {
	    return d3_svg_area(d3_identity);
	  };
	  d3.svg.area.radial = function() {
	    var area = d3_svg_area(d3_svg_lineRadial);
	    area.radius = area.x, delete area.x;
	    area.innerRadius = area.x0, delete area.x0;
	    area.outerRadius = area.x1, delete area.x1;
	    area.angle = area.y, delete area.y;
	    area.startAngle = area.y0, delete area.y0;
	    area.endAngle = area.y1, delete area.y1;
	    return area;
	  };
	  d3.svg.chord = function() {
	    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
	    function chord(d, i) {
	      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
	      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
	    }
	    function subgroup(self, f, d, i) {
	      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
	      return {
	        r: r,
	        a0: a0,
	        a1: a1,
	        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
	        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
	      };
	    }
	    function equals(a, b) {
	      return a.a0 == b.a0 && a.a1 == b.a1;
	    }
	    function arc(r, p, a) {
	      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
	    }
	    function curve(r0, p0, r1, p1) {
	      return "Q 0,0 " + p1;
	    }
	    chord.radius = function(v) {
	      if (!arguments.length) return radius;
	      radius = d3_functor(v);
	      return chord;
	    };
	    chord.source = function(v) {
	      if (!arguments.length) return source;
	      source = d3_functor(v);
	      return chord;
	    };
	    chord.target = function(v) {
	      if (!arguments.length) return target;
	      target = d3_functor(v);
	      return chord;
	    };
	    chord.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return chord;
	    };
	    chord.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return chord;
	    };
	    return chord;
	  };
	  function d3_svg_chordRadius(d) {
	    return d.radius;
	  }
	  d3.svg.diagonal = function() {
	    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
	    function diagonal(d, i) {
	      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
	        x: p0.x,
	        y: m
	      }, {
	        x: p3.x,
	        y: m
	      }, p3 ];
	      p = p.map(projection);
	      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
	    }
	    diagonal.source = function(x) {
	      if (!arguments.length) return source;
	      source = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.target = function(x) {
	      if (!arguments.length) return target;
	      target = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.projection = function(x) {
	      if (!arguments.length) return projection;
	      projection = x;
	      return diagonal;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalProjection(d) {
	    return [ d.x, d.y ];
	  }
	  d3.svg.diagonal.radial = function() {
	    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
	    diagonal.projection = function(x) {
	      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalRadialProjection(projection) {
	    return function() {
	      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
	      return [ r * Math.cos(a), r * Math.sin(a) ];
	    };
	  }
	  d3.svg.symbol = function() {
	    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
	    function symbol(d, i) {
	      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
	    }
	    symbol.type = function(x) {
	      if (!arguments.length) return type;
	      type = d3_functor(x);
	      return symbol;
	    };
	    symbol.size = function(x) {
	      if (!arguments.length) return size;
	      size = d3_functor(x);
	      return symbol;
	    };
	    return symbol;
	  };
	  function d3_svg_symbolSize() {
	    return 64;
	  }
	  function d3_svg_symbolType() {
	    return "circle";
	  }
	  function d3_svg_symbolCircle(size) {
	    var r = Math.sqrt(size / π);
	    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
	  }
	  var d3_svg_symbols = d3.map({
	    circle: d3_svg_symbolCircle,
	    cross: function(size) {
	      var r = Math.sqrt(size / 5) / 2;
	      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
	    },
	    diamond: function(size) {
	      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
	      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
	    },
	    square: function(size) {
	      var r = Math.sqrt(size) / 2;
	      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
	    },
	    "triangle-down": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
	    },
	    "triangle-up": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
	    }
	  });
	  d3.svg.symbolTypes = d3_svg_symbols.keys();
	  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
	  d3_selectionPrototype.transition = function(name) {
	    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
	      time: Date.now(),
	      ease: d3_ease_cubicInOut,
	      delay: 0,
	      duration: 250
	    };
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_selectionPrototype.interrupt = function(name) {
	    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
	  };
	  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
	  function d3_selection_interruptNS(ns) {
	    return function() {
	      var lock, activeId, active;
	      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        if (--lock.count) delete lock[activeId]; else delete this[ns];
	        lock.active += .5;
	        active.event && active.event.interrupt.call(this, this.__data__, active.index);
	      }
	    };
	  }
	  function d3_transition(groups, ns, id) {
	    d3_subclass(groups, d3_transitionPrototype);
	    groups.namespace = ns;
	    groups.id = id;
	    return groups;
	  }
	  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
	  d3_transitionPrototype.call = d3_selectionPrototype.call;
	  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
	  d3_transitionPrototype.node = d3_selectionPrototype.node;
	  d3_transitionPrototype.size = d3_selectionPrototype.size;
	  d3.transition = function(selection, name) {
	    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
	  };
	  d3.transition.prototype = d3_transitionPrototype;
	  d3_transitionPrototype.select = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
	          subgroup.push(subnode);
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.selectAll = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          transition = node[ns][id];
	          subnodes = selector.call(node, node.__data__, i, j);
	          subgroups.push(subgroup = []);
	          for (var k = -1, o = subnodes.length; ++k < o; ) {
	            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
	            subgroup.push(subnode);
	          }
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_transition(subgroups, this.namespace, this.id);
	  };
	  d3_transitionPrototype.tween = function(name, tween) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
	    return d3_selection_each(this, tween == null ? function(node) {
	      node[ns][id].tween.remove(name);
	    } : function(node) {
	      node[ns][id].tween.set(name, tween);
	    });
	  };
	  function d3_transition_tween(groups, name, value, tween) {
	    var id = groups.id, ns = groups.namespace;
	    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
	    } : (value = tween(value), function(node) {
	      node[ns][id].tween.set(name, value);
	    }));
	  }
	  d3_transitionPrototype.attr = function(nameNS, value) {
	    if (arguments.length < 2) {
	      for (value in nameNS) this.attr(value, nameNS[value]);
	      return this;
	    }
	    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrTween(b) {
	      return b == null ? attrNull : (b += "", function() {
	        var a = this.getAttribute(name), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttribute(name, i(t));
	        });
	      });
	    }
	    function attrTweenNS(b) {
	      return b == null ? attrNullNS : (b += "", function() {
	        var a = this.getAttributeNS(name.space, name.local), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttributeNS(name.space, name.local, i(t));
	        });
	      });
	    }
	    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.attrTween = function(nameNS, tween) {
	    var name = d3.ns.qualify(nameNS);
	    function attrTween(d, i) {
	      var f = tween.call(this, d, i, this.getAttribute(name));
	      return f && function(t) {
	        this.setAttribute(name, f(t));
	      };
	    }
	    function attrTweenNS(d, i) {
	      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
	      return f && function(t) {
	        this.setAttributeNS(name.space, name.local, f(t));
	      };
	    }
	    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.style(priority, name[priority], value);
	        return this;
	      }
	      priority = "";
	    }
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleString(b) {
	      return b == null ? styleNull : (b += "", function() {
	        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
	        return a !== b && (i = d3_interpolate(a, b), function(t) {
	          this.style.setProperty(name, i(t), priority);
	        });
	      });
	    }
	    return d3_transition_tween(this, "style." + name, value, styleString);
	  };
	  d3_transitionPrototype.styleTween = function(name, tween, priority) {
	    if (arguments.length < 3) priority = "";
	    function styleTween(d, i) {
	      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
	      return f && function(t) {
	        this.style.setProperty(name, f(t), priority);
	      };
	    }
	    return this.tween("style." + name, styleTween);
	  };
	  d3_transitionPrototype.text = function(value) {
	    return d3_transition_tween(this, "text", value, d3_transition_text);
	  };
	  function d3_transition_text(b) {
	    if (b == null) b = "";
	    return function() {
	      this.textContent = b;
	    };
	  }
	  d3_transitionPrototype.remove = function() {
	    var ns = this.namespace;
	    return this.each("end.transition", function() {
	      var p;
	      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
	    });
	  };
	  d3_transitionPrototype.ease = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].ease;
	    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
	    return d3_selection_each(this, function(node) {
	      node[ns][id].ease = value;
	    });
	  };
	  d3_transitionPrototype.delay = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].delay;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].delay = +value.call(node, node.__data__, i, j);
	    } : (value = +value, function(node) {
	      node[ns][id].delay = value;
	    }));
	  };
	  d3_transitionPrototype.duration = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].duration;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
	    } : (value = Math.max(1, value), function(node) {
	      node[ns][id].duration = value;
	    }));
	  };
	  d3_transitionPrototype.each = function(type, listener) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) {
	      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
	      try {
	        d3_transitionInheritId = id;
	        d3_selection_each(this, function(node, i, j) {
	          d3_transitionInherit = node[ns][id];
	          type.call(node, node.__data__, i, j);
	        });
	      } finally {
	        d3_transitionInherit = inherit;
	        d3_transitionInheritId = inheritId;
	      }
	    } else {
	      d3_selection_each(this, function(node) {
	        var transition = node[ns][id];
	        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
	      });
	    }
	    return this;
	  };
	  d3_transitionPrototype.transition = function() {
	    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if (node = group[i]) {
	          transition = node[ns][id0];
	          d3_transitionNode(node, i, ns, id1, {
	            time: transition.time,
	            ease: transition.ease,
	            delay: transition.delay + transition.duration,
	            duration: transition.duration
	          });
	        }
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id1);
	  };
	  function d3_transitionNamespace(name) {
	    return name == null ? "__transition__" : "__transition_" + name + "__";
	  }
	  function d3_transitionNode(node, i, ns, id, inherit) {
	    var lock = node[ns] || (node[ns] = {
	      active: 0,
	      count: 0
	    }), transition = lock[id], time, timer, duration, ease, tweens;
	    function schedule(elapsed) {
	      var delay = transition.delay;
	      timer.t = delay + time;
	      if (delay <= elapsed) return start(elapsed - delay);
	      timer.c = start;
	    }
	    function start(elapsed) {
	      var activeId = lock.active, active = lock[activeId];
	      if (active) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        --lock.count;
	        delete lock[activeId];
	        active.event && active.event.interrupt.call(node, node.__data__, active.index);
	      }
	      for (var cancelId in lock) {
	        if (+cancelId < id) {
	          var cancel = lock[cancelId];
	          cancel.timer.c = null;
	          cancel.timer.t = NaN;
	          --lock.count;
	          delete lock[cancelId];
	        }
	      }
	      timer.c = tick;
	      d3_timer(function() {
	        if (timer.c && tick(elapsed || 1)) {
	          timer.c = null;
	          timer.t = NaN;
	        }
	        return 1;
	      }, 0, time);
	      lock.active = id;
	      transition.event && transition.event.start.call(node, node.__data__, i);
	      tweens = [];
	      transition.tween.forEach(function(key, value) {
	        if (value = value.call(node, node.__data__, i)) {
	          tweens.push(value);
	        }
	      });
	      ease = transition.ease;
	      duration = transition.duration;
	    }
	    function tick(elapsed) {
	      var t = elapsed / duration, e = ease(t), n = tweens.length;
	      while (n > 0) {
	        tweens[--n].call(node, e);
	      }
	      if (t >= 1) {
	        transition.event && transition.event.end.call(node, node.__data__, i);
	        if (--lock.count) delete lock[id]; else delete node[ns];
	        return 1;
	      }
	    }
	    if (!transition) {
	      time = inherit.time;
	      timer = d3_timer(schedule, 0, time);
	      transition = lock[id] = {
	        tween: new d3_Map(),
	        time: time,
	        timer: timer,
	        delay: inherit.delay,
	        duration: inherit.duration,
	        ease: inherit.ease,
	        index: i
	      };
	      inherit = null;
	      ++lock.count;
	    }
	  }
	  d3.svg.axis = function() {
	    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
	    function axis(g) {
	      g.each(function() {
	        var g = d3.select(this);
	        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
	        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
	        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
	        d3.transition(path));
	        tickEnter.append("line");
	        tickEnter.append("text");
	        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
	        if (orient === "bottom" || orient === "top") {
	          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
	          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
	          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
	        } else {
	          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
	          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
	          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
	        }
	        lineEnter.attr(y2, sign * innerTickSize);
	        textEnter.attr(y1, sign * tickSpacing);
	        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
	        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
	        if (scale1.rangeBand) {
	          var x = scale1, dx = x.rangeBand() / 2;
	          scale0 = scale1 = function(d) {
	            return x(d) + dx;
	          };
	        } else if (scale0.rangeBand) {
	          scale0 = scale1;
	        } else {
	          tickExit.call(tickTransform, scale1, scale0);
	        }
	        tickEnter.call(tickTransform, scale0, scale1);
	        tickUpdate.call(tickTransform, scale1, scale1);
	      });
	    }
	    axis.scale = function(x) {
	      if (!arguments.length) return scale;
	      scale = x;
	      return axis;
	    };
	    axis.orient = function(x) {
	      if (!arguments.length) return orient;
	      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
	      return axis;
	    };
	    axis.ticks = function() {
	      if (!arguments.length) return tickArguments_;
	      tickArguments_ = d3_array(arguments);
	      return axis;
	    };
	    axis.tickValues = function(x) {
	      if (!arguments.length) return tickValues;
	      tickValues = x;
	      return axis;
	    };
	    axis.tickFormat = function(x) {
	      if (!arguments.length) return tickFormat_;
	      tickFormat_ = x;
	      return axis;
	    };
	    axis.tickSize = function(x) {
	      var n = arguments.length;
	      if (!n) return innerTickSize;
	      innerTickSize = +x;
	      outerTickSize = +arguments[n - 1];
	      return axis;
	    };
	    axis.innerTickSize = function(x) {
	      if (!arguments.length) return innerTickSize;
	      innerTickSize = +x;
	      return axis;
	    };
	    axis.outerTickSize = function(x) {
	      if (!arguments.length) return outerTickSize;
	      outerTickSize = +x;
	      return axis;
	    };
	    axis.tickPadding = function(x) {
	      if (!arguments.length) return tickPadding;
	      tickPadding = +x;
	      return axis;
	    };
	    axis.tickSubdivide = function() {
	      return arguments.length && axis;
	    };
	    return axis;
	  };
	  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
	    top: 1,
	    right: 1,
	    bottom: 1,
	    left: 1
	  };
	  function d3_svg_axisX(selection, x0, x1) {
	    selection.attr("transform", function(d) {
	      var v0 = x0(d);
	      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
	    });
	  }
	  function d3_svg_axisY(selection, y0, y1) {
	    selection.attr("transform", function(d) {
	      var v0 = y0(d);
	      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
	    });
	  }
	  d3.svg.brush = function() {
	    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
	    function brush(g) {
	      g.each(function() {
	        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
	        var background = g.selectAll(".background").data([ 0 ]);
	        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
	        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
	        var resize = g.selectAll(".resize").data(resizes, d3_identity);
	        resize.exit().remove();
	        resize.enter().append("g").attr("class", function(d) {
	          return "resize " + d;
	        }).style("cursor", function(d) {
	          return d3_svg_brushCursor[d];
	        }).append("rect").attr("x", function(d) {
	          return /[ew]$/.test(d) ? -3 : null;
	        }).attr("y", function(d) {
	          return /^[ns]/.test(d) ? -3 : null;
	        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
	        resize.style("display", brush.empty() ? "none" : null);
	        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
	        if (x) {
	          range = d3_scaleRange(x);
	          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
	          redrawX(gUpdate);
	        }
	        if (y) {
	          range = d3_scaleRange(y);
	          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
	          redrawY(gUpdate);
	        }
	        redraw(gUpdate);
	      });
	    }
	    brush.event = function(g) {
	      g.each(function() {
	        var event_ = event.of(this, arguments), extent1 = {
	          x: xExtent,
	          y: yExtent,
	          i: xExtentDomain,
	          j: yExtentDomain
	        }, extent0 = this.__chart__ || extent1;
	        this.__chart__ = extent1;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.brush", function() {
	            xExtentDomain = extent0.i;
	            yExtentDomain = extent0.j;
	            xExtent = extent0.x;
	            yExtent = extent0.y;
	            event_({
	              type: "brushstart"
	            });
	          }).tween("brush:brush", function() {
	            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
	            xExtentDomain = yExtentDomain = null;
	            return function(t) {
	              xExtent = extent1.x = xi(t);
	              yExtent = extent1.y = yi(t);
	              event_({
	                type: "brush",
	                mode: "resize"
	              });
	            };
	          }).each("end.brush", function() {
	            xExtentDomain = extent1.i;
	            yExtentDomain = extent1.j;
	            event_({
	              type: "brush",
	              mode: "resize"
	            });
	            event_({
	              type: "brushend"
	            });
	          });
	        } else {
	          event_({
	            type: "brushstart"
	          });
	          event_({
	            type: "brush",
	            mode: "resize"
	          });
	          event_({
	            type: "brushend"
	          });
	        }
	      });
	    };
	    function redraw(g) {
	      g.selectAll(".resize").attr("transform", function(d) {
	        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
	      });
	    }
	    function redrawX(g) {
	      g.select(".extent").attr("x", xExtent[0]);
	      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
	    }
	    function redrawY(g) {
	      g.select(".extent").attr("y", yExtent[0]);
	      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
	    }
	    function brushstart() {
	      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
	      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
	      if (d3.event.changedTouches) {
	        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
	      } else {
	        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
	      }
	      g.interrupt().selectAll("*").interrupt();
	      if (dragging) {
	        origin[0] = xExtent[0] - origin[0];
	        origin[1] = yExtent[0] - origin[1];
	      } else if (resizing) {
	        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
	        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
	        origin[0] = xExtent[ex];
	        origin[1] = yExtent[ey];
	      } else if (d3.event.altKey) center = origin.slice();
	      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
	      d3.select("body").style("cursor", eventTarget.style("cursor"));
	      event_({
	        type: "brushstart"
	      });
	      brushmove();
	      function keydown() {
	        if (d3.event.keyCode == 32) {
	          if (!dragging) {
	            center = null;
	            origin[0] -= xExtent[1];
	            origin[1] -= yExtent[1];
	            dragging = 2;
	          }
	          d3_eventPreventDefault();
	        }
	      }
	      function keyup() {
	        if (d3.event.keyCode == 32 && dragging == 2) {
	          origin[0] += xExtent[1];
	          origin[1] += yExtent[1];
	          dragging = 0;
	          d3_eventPreventDefault();
	        }
	      }
	      function brushmove() {
	        var point = d3.mouse(target), moved = false;
	        if (offset) {
	          point[0] += offset[0];
	          point[1] += offset[1];
	        }
	        if (!dragging) {
	          if (d3.event.altKey) {
	            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
	            origin[0] = xExtent[+(point[0] < center[0])];
	            origin[1] = yExtent[+(point[1] < center[1])];
	          } else center = null;
	        }
	        if (resizingX && move1(point, x, 0)) {
	          redrawX(g);
	          moved = true;
	        }
	        if (resizingY && move1(point, y, 1)) {
	          redrawY(g);
	          moved = true;
	        }
	        if (moved) {
	          redraw(g);
	          event_({
	            type: "brush",
	            mode: dragging ? "move" : "resize"
	          });
	        }
	      }
	      function move1(point, scale, i) {
	        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
	        if (dragging) {
	          r0 -= position;
	          r1 -= size + position;
	        }
	        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
	        if (dragging) {
	          max = (min += position) + size;
	        } else {
	          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
	          if (position < min) {
	            max = min;
	            min = position;
	          } else {
	            max = position;
	          }
	        }
	        if (extent[0] != min || extent[1] != max) {
	          if (i) yExtentDomain = null; else xExtentDomain = null;
	          extent[0] = min;
	          extent[1] = max;
	          return true;
	        }
	      }
	      function brushend() {
	        brushmove();
	        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
	        d3.select("body").style("cursor", null);
	        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
	        dragRestore();
	        event_({
	          type: "brushend"
	        });
	      }
	    }
	    brush.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.clamp = function(z) {
	      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
	      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
	      return brush;
	    };
	    brush.extent = function(z) {
	      var x0, x1, y0, y1, t;
	      if (!arguments.length) {
	        if (x) {
	          if (xExtentDomain) {
	            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
	          } else {
	            x0 = xExtent[0], x1 = xExtent[1];
	            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
	            if (x1 < x0) t = x0, x0 = x1, x1 = t;
	          }
	        }
	        if (y) {
	          if (yExtentDomain) {
	            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
	          } else {
	            y0 = yExtent[0], y1 = yExtent[1];
	            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
	            if (y1 < y0) t = y0, y0 = y1, y1 = t;
	          }
	        }
	        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
	      }
	      if (x) {
	        x0 = z[0], x1 = z[1];
	        if (y) x0 = x0[0], x1 = x1[0];
	        xExtentDomain = [ x0, x1 ];
	        if (x.invert) x0 = x(x0), x1 = x(x1);
	        if (x1 < x0) t = x0, x0 = x1, x1 = t;
	        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
	      }
	      if (y) {
	        y0 = z[0], y1 = z[1];
	        if (x) y0 = y0[1], y1 = y1[1];
	        yExtentDomain = [ y0, y1 ];
	        if (y.invert) y0 = y(y0), y1 = y(y1);
	        if (y1 < y0) t = y0, y0 = y1, y1 = t;
	        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
	      }
	      return brush;
	    };
	    brush.clear = function() {
	      if (!brush.empty()) {
	        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
	        xExtentDomain = yExtentDomain = null;
	      }
	      return brush;
	    };
	    brush.empty = function() {
	      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
	    };
	    return d3.rebind(brush, event, "on");
	  };
	  var d3_svg_brushCursor = {
	    n: "ns-resize",
	    e: "ew-resize",
	    s: "ns-resize",
	    w: "ew-resize",
	    nw: "nwse-resize",
	    ne: "nesw-resize",
	    se: "nwse-resize",
	    sw: "nesw-resize"
	  };
	  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
	  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
	  var d3_time_formatUtc = d3_time_format.utc;
	  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
	  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
	  function d3_time_formatIsoNative(date) {
	    return date.toISOString();
	  }
	  d3_time_formatIsoNative.parse = function(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  };
	  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
	  d3_time.second = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 1e3) * 1e3);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
	  }, function(date) {
	    return date.getSeconds();
	  });
	  d3_time.seconds = d3_time.second.range;
	  d3_time.seconds.utc = d3_time.second.utc.range;
	  d3_time.minute = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 6e4) * 6e4);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
	  }, function(date) {
	    return date.getMinutes();
	  });
	  d3_time.minutes = d3_time.minute.range;
	  d3_time.minutes.utc = d3_time.minute.utc.range;
	  d3_time.hour = d3_time_interval(function(date) {
	    var timezone = date.getTimezoneOffset() / 60;
	    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
	  }, function(date) {
	    return date.getHours();
	  });
	  d3_time.hours = d3_time.hour.range;
	  d3_time.hours.utc = d3_time.hour.utc.range;
	  d3_time.month = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setDate(1);
	    return date;
	  }, function(date, offset) {
	    date.setMonth(date.getMonth() + offset);
	  }, function(date) {
	    return date.getMonth();
	  });
	  d3_time.months = d3_time.month.range;
	  d3_time.months.utc = d3_time.month.utc.range;
	  function d3_time_scale(linear, methods, format) {
	    function scale(x) {
	      return linear(x);
	    }
	    scale.invert = function(x) {
	      return d3_time_scaleDate(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
	      linear.domain(x);
	      return scale;
	    };
	    function tickMethod(extent, count) {
	      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
	      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
	        return d / 31536e6;
	      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
	    }
	    scale.nice = function(interval, skip) {
	      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
	      if (method) interval = method[0], skip = method[1];
	      function skipped(date) {
	        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
	      }
	      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
	        floor: function(date) {
	          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
	          return date;
	        },
	        ceil: function(date) {
	          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
	          return date;
	        }
	      } : interval));
	    };
	    scale.ticks = function(interval, skip) {
	      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
	        range: interval
	      }, skip ];
	      if (method) interval = method[0], skip = method[1];
	      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
	    };
	    scale.tickFormat = function() {
	      return format;
	    };
	    scale.copy = function() {
	      return d3_time_scale(linear.copy(), methods, format);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_time_scaleDate(t) {
	    return new Date(t);
	  }
	  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
	  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
	  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
	    return d.getMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getHours();
	  } ], [ "%a %d", function(d) {
	    return d.getDay() && d.getDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getMonth();
	  } ], [ "%Y", d3_true ] ]);
	  var d3_time_scaleMilliseconds = {
	    range: function(start, stop, step) {
	      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
	    },
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  d3_time_scaleLocalMethods.year = d3_time.year;
	  d3_time.scale = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
	  };
	  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
	    return [ m[0].utc, m[1] ];
	  });
	  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
	    return d.getUTCMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getUTCSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getUTCMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getUTCHours();
	  } ], [ "%a %d", function(d) {
	    return d.getUTCDay() && d.getUTCDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getUTCDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getUTCMonth();
	  } ], [ "%Y", d3_true ] ]);
	  d3_time_scaleUtcMethods.year = d3_time.year.utc;
	  d3_time.scale.utc = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
	  };
	  d3.text = d3_xhrType(function(request) {
	    return request.responseText;
	  });
	  d3.json = function(url, callback) {
	    return d3_xhr(url, "application/json", d3_json, callback);
	  };
	  function d3_json(request) {
	    return JSON.parse(request.responseText);
	  }
	  d3.html = function(url, callback) {
	    return d3_xhr(url, "text/html", d3_html, callback);
	  };
	  function d3_html(request) {
	    var range = d3_document.createRange();
	    range.selectNode(d3_document.body);
	    return range.createContextualFragment(request.responseText);
	  }
	  d3.xml = d3_xhrType(function(request) {
	    return request.responseXML;
	  });
	  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
	}();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _visFunction = __webpack_require__(34);
	
	var _visFunction2 = _interopRequireDefault(_visFunction);
	
	var _appFunction = __webpack_require__(33);
	
	var _appFunction2 = _interopRequireDefault(_appFunction);
	
	var _emFunction = __webpack_require__(35);
	
	var _emFunction2 = _interopRequireDefault(_emFunction);
	
	var _RepeatingUnit = __webpack_require__(26);
	
	var _RepeatingUnit2 = _interopRequireDefault(_RepeatingUnit);
	
	var _Monosaccharide = __webpack_require__(25);
	
	var _Monosaccharide2 = _interopRequireDefault(_Monosaccharide);
	
	var _Substituent = __webpack_require__(27);
	
	var _Substituent2 = _interopRequireDefault(_Substituent);
	
	var _SubstituentsPositions = __webpack_require__(14);
	
	var _SubstituentsPositions2 = _interopRequireDefault(_SubstituentsPositions);
	
	var _MonosaccharideType = __webpack_require__(10);
	
	var _MonosaccharideType2 = _interopRequireDefault(_MonosaccharideType);
	
	var _Glycan = __webpack_require__(28);
	
	var _Glycan2 = _interopRequireDefault(_Glycan);
	
	var _GlycosidicLinkage = __webpack_require__(23);
	
	var _GlycosidicLinkage2 = _interopRequireDefault(_GlycosidicLinkage);
	
	var _XYvalues = __webpack_require__(18);
	
	var _XYvalues2 = _interopRequireDefault(_XYvalues);
	
	var _colorDivisions = __webpack_require__(19);
	
	var _colorDivisions2 = _interopRequireDefault(_colorDivisions);
	
	var _RepetitionUtility = __webpack_require__(39);
	
	var _RepetitionUtility2 = _interopRequireDefault(_RepetitionUtility);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var vf = new _visFunction2.default();
	var af = new _appFunction2.default();
	var ef = new _emFunction2.default();
	
	var menuFunction = function () {
	    function menuFunction() {
	        _classCallCheck(this, menuFunction);
	    }
	
	    /**
	     * Get SubDivisions of a searched division, using recursive calls
	     * @param divisionToCheck The currently checked division
	     * @param searchedDivision The division searched
	     * @returns {*}
	     */
	
	
	    _createClass(menuFunction, [{
	        key: "getSubDivisions",
	        value: function getSubDivisions(divisionToCheck, searchedDivision) {
	            // If current division is shape, next step is color choice
	            if (searchedDivision.indexOf("shape") > -1) {
	                return makeDivisionBlocks();
	            }
	            if (divisionToCheck) {
	                // Loop on divisions, recursive calls on subDivisions if needed
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = divisionToCheck[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var div = _step.value;
	
	                        if (div.division == searchedDivision) {
	                            return div.subDivisions;
	                        }
	
	                        var found = this.getSubDivisions(div.subDivisions, searchedDivision);
	                        if (found) return found;
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	
	        // Verifies if the selection is legal for a repetion, then creates it
	
	    }, {
	        key: "handleRepetition",
	        value: function handleRepetition(_shapes, _treeData, _glycan, _clickedNode, _selectedNodes) {
	            var repFunc = new _RepetitionUtility2.default(_glycan, _treeData, _shapes);
	            repFunc.start(_clickedNode, _selectedNodes);
	            _shapes = moveNodesInsideRep(repFunc.shapes, repFunc.treeData, repFunc.glycan);
	            displayTree(repFunc.treeData, _shapes, repFunc.glycan);
	            updateMenu();
	
	            return _shapes;
	        }
	
	        /**
	         * Deletes all the subs of a node.
	         * If the node is a mono+sub (e.g GulNAc), when called for the first time the function will only delete the substituents except NAc on donorPosition 2
	         * If called again on it, the GulNAc will turn to Gul.
	         * @param node
	         */
	
	    }, {
	        key: "deleteSubs",
	        value: function deleteSubs(node, _glycan, _treeData, _shapes) {
	            var name = node.monosaccharideType.name;
	            var deleted = 0;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = _glycan.graph.edges()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var edge = _step2.value;
	
	                    if (edge.sourceNode == node) {
	                        if (edge.targetNode instanceof _Substituent2.default) {
	                            deleteNode(edge.targetNode);
	                            deleted++;
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            if (deleted == 0 && _SubstituentsPositions2.default[name]) {
	                // Has an embedded sub to be deleted
	                if (name.substring(0, 3) == "Neu") {
	                    _glycan = this.updateNodeType(node, _MonosaccharideType2.default.Kdn, _glycan);
	                } else {
	                    var i = 1;
	                    while ((!_MonosaccharideType2.default[name.substring(0, name.length - i)] || _SubstituentsPositions2.default[name.substring(0, name.length - i)]) && i < 10) {
	                        i++;
	                    }
	                    _glycan = this.updateNodeType(node, _MonosaccharideType2.default[name.substring(0, name.length - i)], _glycan);
	                }
	            }
	            displayTree(_treeData, _shapes, _glycan);
	            updateMenu();
	        }
	
	        /**
	         * Visually gathers all the scattered nodes
	         * (because after a deletion some nodes can stay far away for no reason anymore)
	         */
	
	    }, {
	        key: "reassembleNodes",
	        value: function reassembleNodes(_glycan, _shapes) {
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = _glycan.graph.edges()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var edge = _step3.value;
	
	                    var source = edge.source;
	                    var target = edge.target;
	                    var donorPosition = edge.donorPosition.value;
	                    var dx = _XYvalues2.default.prototype.getXYvalue(donorPosition).x * 50;
	                    var dy = _XYvalues2.default.prototype.getXYvalue(donorPosition).y * 50;
	                    var usualX = _shapes[source][0] + dx;
	                    var usualY = _shapes[source][1] + dy;
	                    if (_shapes[target] != undefined && (_shapes[target][0] != usualX || _shapes[target][1] != usualY)) {
	                        // If the node is not where it should be{
	                        if (af.isAvailible(usualX, usualY, _shapes) == "") {
	                            _shapes[target] = [usualX, usualY];
	                        } else {
	                            _shapes[target] = af.findNewSpot(usualX, usualY, _shapes, donorPosition);
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            return _shapes;
	        }
	
	        /**
	         * Delete all children nodes in the graph structure
	         * @param node The node from which we want to delete children
	         */
	
	    }, {
	        key: "deleteAllChildrenInGraph",
	        value: function deleteAllChildrenInGraph(node, _glycan) {
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = _glycan.graph.edges()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var edge = _step4.value;
	
	                    if (edge.sourceNode == node) {
	                        _glycan = this.deleteAllChildrenInGraph(edge.targetNode, _glycan);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            if (node.children === undefined) // leaf
	                {
	                    _glycan.removeNodeById(node.id);
	                }
	
	            return _glycan;
	        }
	    }, {
	        key: "deleteAllShapesInGraph",
	        value: function deleteAllShapesInGraph(node, _glycan, _shapes) {
	            // has to be separate from deleteAllChildrenInGraph because it updates the glycan on the fly
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;
	
	            try {
	                for (var _iterator5 = _glycan.graph.edges()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var edge = _step5.value;
	
	                    if (edge.sourceNode == node) {
	                        delete _shapes[node.id];
	                        delete _shapes[edge.target];
	                        _shapes = this.deleteAllShapesInGraph(edge.targetNode, _glycan, _shapes);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	
	            return _shapes;
	        }
	
	        /**
	         * Create a new node using the informations selected by the user
	         */
	
	    }, {
	        key: "createNewNode",
	        value: function createNewNode(_infosTable, _glycan, _treeData, _shapes) {
	            var typeNodeToAdd = _infosTable.display_division; // Selected type, monosaccharide or substituent
	            if (typeNodeToAdd == "Monosaccharide") {
	                var shape = _infosTable.shape; // Selected shape
	                var isBisected = shape.indexOf("bisected") != -1; // Check if the shape is bisected
	                if (isBisected) {
	                    shape = shape.split("bisected")[1]; // We update the value of the shape by removing keywork "bisected"
	                }
	                var color = _colorDivisions2.default.prototype.getColor(_infosTable.color); // Selected color
	                var anomericity = vf.getAnomericityWithSelection(_infosTable.anomericity); // Anomericity
	                var isomer = vf.getIsomerWithSelection(_infosTable.isomer); // Isomer
	                var ring = vf.getRingTypeWithSelection(_infosTable.ringType); // Ring type
	                var donorPosition = vf.getDonorPositionWithSelection(_infosTable.donorPosition); // Get the donor position
	                var acceptorPosition = vf.getAcceptorPositionWithSelection(_infosTable.acceptorPosition); // Get the acceptor position
	                var monoType = vf.getMonoTypeWithColorAndShape(color, shape, isBisected); // Get the monosaccharide type
	                var generatedNodeId = af.randomString(7); // Generate an id
	                var monosaccharide = new _Monosaccharide2.default(generatedNodeId, monoType, anomericity, isomer, ring); // Create new monosaccharide
	
	                var node = void 0;
	                if (Object.keys(_treeData).length === 0) {
	                    // If tree is empty, instantiate the glycan with the monosaccharide as the root
	                    _glycan = new _Glycan2.default("glycan", monosaccharide);
	                    node = { "node": monosaccharide };
	                    shape = vf.calculateXandYNode(node, _glycan, _shapes);
	                    _shapes[generatedNodeId] = shape;
	                    var rootShape = [rootPos.x, rootPos.y];
	                    _shapes.root = rootShape;
	                    rootDonorPosition = donorPosition;
	                    rootAcceptorPosition = acceptorPosition;
	                    _treeData = vf.updateTreeVisualization(undefined, _glycan, _treeData); // Update visualization in the svg
	                } else {
	                    var generatedEdgeId = af.randomString(7); // If tree not empty, generate id, create linkage and update visualziation
	                    var glycosidicLink = new _GlycosidicLinkage2.default(generatedEdgeId, clickedNode, monosaccharide, acceptorPosition, donorPosition);
	                    _glycan.addMonosaccharide(monosaccharide, glycosidicLink);
	                    _treeData = vf.updateTreeVisualization(glycosidicLink, _glycan, _treeData);
	                    var parent = af.getNodeParent(monosaccharide, _glycan);
	                    node = { "node": monosaccharide, "parent": parent };
	                    shape = vf.calculateXandYNode(node, _glycan, _shapes);
	                    _shapes[generatedNodeId] = shape;
	                }
	                _shapes = moveNodesInsideRep(_shapes, _treeData, _glycan);
	                clickedNode = monosaccharide;
	                return [_glycan, _shapes, _treeData];
	            }
	        }
	    }, {
	        key: "updateNodeType",
	        value: function updateNodeType(node, type, _glycan) {
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;
	
	            try {
	                for (var _iterator6 = _glycan.graph.nodes()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var glycanNode = _step6.value;
	
	                    if (node === glycanNode) {
	                        glycanNode.monosaccharideType = type;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError6 = true;
	                _iteratorError6 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                        _iterator6.return();
	                    }
	                } finally {
	                    if (_didIteratorError6) {
	                        throw _iteratorError6;
	                    }
	                }
	            }
	
	            return _glycan;
	        }
	    }]);
	
	    return menuFunction;
	}();
	
	/**
	 *
	 * @param startX
	 * @param startY
	 * @param dx
	 * @param dy
	 * @param repCoord
	 * This function will check if a node can escape a repeating unit without hitting another node
	 */
	
	
	exports.default = menuFunction;
	var checkNodesInLine = function checkNodesInLine(startX, startY, dy, dx, repCoord, _shapes) {
	    var limit = void 0;
	    var x = startX + dx,
	        y = startY + dy;
	    if (dx == 0) // Horizontal
	        {
	            if (dy > 0) // going to the right
	                {
	                    limit = repCoord[3];
	                    while (y < limit) {
	                        if (af.isAvailible(x, y, _shapes) != "") return true;
	                        y += dy;
	                    }
	                } else if (dy < 0) // going to the left
	                {
	                    limit = repCoord[2];
	                    while (y > limit) {
	                        if (af.isAvailible(x, y, _shapes) != "") return true;
	                        y += dy;
	                    }
	                }
	        } else if (dy == 0) // Vertical
	        {
	            if (dx > 0) // going to the bottom
	                {
	                    limit = repCoord[1];
	                    while (x < limit) {
	                        if (af.isAvailible(x, y, _shapes) != "") return true;
	                        x += dx;
	                    }
	                } else if (dx < 0) // going to the top
	                {
	                    limit = repCoord[0];
	                    while (x > limit) {
	                        if (af.isAvailible(x, y, _shapes) != "") return true;
	                        x += dx;
	                    }
	                }
	        }
	    return false;
	};
	
	var makeDivisionBlocks = function makeDivisionBlocks() {
	    var ret = [];
	
	    for (var cd in _colorDivisions2.default) {
	        var item = {};
	        if (cd === 'enumValues') continue;
	        item.division = _colorDivisions2.default[cd].division;
	        item.display_division = _colorDivisions2.default[cd].display_division;
	        ret.push(item);
	    }
	    return ret;
	};
	
	/* This function is used to visually move the nodes out of a repetition if they are not part of it
	  A repetition is shown on the screen as a rectangle area bordered by brackets. However there can be
	  nodes inside this rectangle even though they don't belong in the repetition. To avoid a confusion, this
	  function pushes them out of this area
	
	  However, if a node cannot escape (other nodes are blocking the way out), it won't move
	   */
	var moveNodesInsideRep = function moveNodesInsideRep(_shapes, _treeData, _glycan) {
	    var nodes = tree.nodes(_treeData);
	    var repeatingUnits = af.generateRepeatingUnits(nodes);
	    var _iteratorNormalCompletion7 = true;
	    var _didIteratorError7 = false;
	    var _iteratorError7 = undefined;
	
	    try {
	        for (var _iterator7 = repeatingUnits[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) // for each Repeating unit
	        {
	            var rep = _step7.value;
	
	            var repCoord = af.getRepCoord(rep, _shapes);
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;
	
	            try {
	                for (var _iterator8 = nodes[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) // and for each node
	                {
	                    var node = _step8.value;
	
	                    if (node.node instanceof _Monosaccharide2.default) {
	                        var donorPosition = void 0;
	                        var dontMove = false;
	                        // if the node is not part of the repeating unit AND is located inside the square, move it
	                        while ((node.node.repeatingUnit == undefined || node.node.repeatingUnit.id != rep.id) && _shapes[node.node.id][0] >= repCoord[0] && _shapes[node.node.id][0] <= repCoord[1] && _shapes[node.node.id][1] >= repCoord[2] && _shapes[node.node.id][1] <= repCoord[3] && !dontMove) {
	                            var link = void 0;
	                            var _iteratorNormalCompletion9 = true;
	                            var _didIteratorError9 = false;
	                            var _iteratorError9 = undefined;
	
	                            try {
	                                for (var _iterator9 = _glycan.graph.edges()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                                    var e = _step9.value;
	
	                                    if (e.target == node.node.id) link = e;
	                                }
	                            } catch (err) {
	                                _didIteratorError9 = true;
	                                _iteratorError9 = err;
	                            } finally {
	                                try {
	                                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                                        _iterator9.return();
	                                    }
	                                } finally {
	                                    if (_didIteratorError9) {
	                                        throw _iteratorError9;
	                                    }
	                                }
	                            }
	
	                            donorPosition = link.donorPosition.value;
	                            var dy = _XYvalues2.default.prototype.getXYvalue(donorPosition).y * 50;
	                            var dx = _XYvalues2.default.prototype.getXYvalue(donorPosition).x * 50;
	                            var startX = _shapes[node.node.id][0];
	                            var startY = _shapes[node.node.id][1];
	                            if (!checkNodesInLine(startX, startY, dy, dx, repCoord, _shapes)) _shapes = vf.moveNodeAndChildren(node, dx, dy);else {
	                                dontMove = true;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError8 = true;
	                _iteratorError8 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                        _iterator8.return();
	                    }
	                } finally {
	                    if (_didIteratorError8) {
	                        throw _iteratorError8;
	                    }
	                }
	            }
	        }
	    } catch (err) {
	        _didIteratorError7 = true;
	        _iteratorError7 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                _iterator7.return();
	            }
	        } finally {
	            if (_didIteratorError7) {
	                throw _iteratorError7;
	            }
	        }
	    }
	
	    return _shapes;
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _RepeatingUnit = __webpack_require__(26);
	
	var _RepeatingUnit2 = _interopRequireDefault(_RepeatingUnit);
	
	var _Monosaccharide = __webpack_require__(25);
	
	var _Monosaccharide2 = _interopRequireDefault(_Monosaccharide);
	
	var _emFunction = __webpack_require__(35);
	
	var _emFunction2 = _interopRequireDefault(_emFunction);
	
	var _appFunction = __webpack_require__(33);
	
	var _appFunction2 = _interopRequireDefault(_appFunction);
	
	var _visFunction = __webpack_require__(34);
	
	var _visFunction2 = _interopRequireDefault(_visFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	    This source code moved from src/js/views/menu.js
	 */
	
	var RepetitionUtility = function () {
	    function RepetitionUtility(_glycan, _treeData, _shapes) {
	        _classCallCheck(this, RepetitionUtility);
	
	        this._shapes = _shapes;
	        this._treeData = _treeData;
	        this._glycan = _glycan;
	    }
	
	    _createClass(RepetitionUtility, [{
	        key: "start",
	
	
	        // Verifies if the selection is legal for a repetion, then creates it
	        value: function start(_clickedNode, _selectedNodes) {
	            var ef = new _emFunction2.default();
	            var af = new _appFunction2.default();
	            var vf = new _visFunction2.default();
	            var nodes = [_clickedNode].concat(_selectedNodes);
	            if (!this.isRepeated(nodes)) {
	                var treeNodes = this.findNodesInTree(nodes, this.treeData);
	                var repEntry = void 0,
	                    repExit = void 0;
	                if (this.isBranchSelected(treeNodes)) // BRANCH
	                    {
	                        repEntry = treeNodes[0].node;
	                        repExit = this.findRepExit(treeNodes[0], this.treeData, _clickedNode, _selectedNodes);
	                        if (repExit.length !== 1) // If the rep unit has 2 exits
	                            {
	                                return;
	                            }
	                        repExit = repExit[0].node;
	                    } else // NO BRANCH
	                    {
	                        var entryExit = this.findEntryAndExit(treeNodes);
	                        if (!entryExit) {
	                            return;
	                        }
	                        repEntry = entryExit[0];
	                        repExit = entryExit[1];
	                    }
	
	                if (repExit !== undefined) // Doesn't finish by a fork
	                    {
	                        var min = prompt("Minimum number of repetitions");
	                        if (min == null || min === "") {
	                            return;
	                        }
	                        var max = prompt("Maximum number of repetitions");
	                        if (max == null || max === "") {
	                            return;
	                        }
	                        var donor = prompt("Donor Position on the " + repExit.monosaccharideType.name + " (\"?\" for unknown linkage)");
	                        if (donor !== "?" && (donor > ef.getNumberCarbons(repExit) || donor < 1)) return;
	                        var acceptor = prompt("Acceptor Position on the " + repEntry.monosaccharideType.name + " (\"?\" for unknown linkage)");
	                        if (acceptor !== "?" && (acceptor > 3 || acceptor < 1)) return;
	                        var id = af.randomString(7);
	                        var repeatingUnit = new _RepeatingUnit2.default(id, treeNodes, min, max, repEntry, repExit, donor, acceptor);
	                        var _iteratorNormalCompletion = true;
	                        var _didIteratorError = false;
	                        var _iteratorError = undefined;
	
	                        try {
	                            for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                var node = _step.value;
	
	                                vf.findNodeInTree(this.treeData, node).node = repeatingUnit;
	                                node.repeatingUnit = repeatingUnit;
	                            }
	                        } catch (err) {
	                            _didIteratorError = true;
	                            _iteratorError = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion && _iterator.return) {
	                                    _iterator.return();
	                                }
	                            } finally {
	                                if (_didIteratorError) {
	                                    throw _iteratorError;
	                                }
	                            }
	                        }
	                    }
	            }
	
	            return;
	        }
	
	        // Checks if the selection array "nodes" is linear or has a fork
	
	    }, {
	        key: "isBranchSelected",
	        value: function isBranchSelected(nodes) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var node = _step2.value;
	
	                    if (node.children != undefined) {
	                        var selectedChildren = 0;
	                        var _iteratorNormalCompletion3 = true;
	                        var _didIteratorError3 = false;
	                        var _iteratorError3 = undefined;
	
	                        try {
	                            for (var _iterator3 = node.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                                var child = _step3.value;
	
	                                if (nodes.includes(child)) {
	                                    selectedChildren++;
	                                }
	                            }
	                        } catch (err) {
	                            _didIteratorError3 = true;
	                            _iteratorError3 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                                    _iterator3.return();
	                                }
	                            } finally {
	                                if (_didIteratorError3) {
	                                    throw _iteratorError3;
	                                }
	                            }
	                        }
	
	                        if (selectedChildren > 1) {
	                            return true;
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return false;
	        }
	
	        // Find the entry and exit of a bunch of nodes (for repeating units)
	
	    }, {
	        key: "findEntryAndExit",
	        value: function findEntryAndExit(nodes) {
	            var maxDepth = nodes[0].depth;
	            var minDepth = nodes[0].depth;
	            var maxNode = nodes[0].node;
	            var minNode = nodes[0].node;
	            var unselectedChildren = 0;
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = nodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var node = _step4.value;
	
	                    unselectedChildren += this.countUnselectedChildren(node, nodes);
	                    if (node.depth > maxDepth) {
	                        maxDepth = node.depth;
	                        maxNode = node.node;
	                    }
	                    if (node.depth < minDepth) {
	                        minDepth = node.depth;
	                        minNode = node.node;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            if (unselectedChildren > 1) {
	                return false;
	            } else {
	                return [minNode, maxNode];
	            }
	        }
	
	        // Find the exit(s) of a group of nodes (for repeating unit)
	
	    }, {
	        key: "findRepExit",
	        value: function findRepExit(root, _treeData, _clickedNode, _selectedNodes) {
	            var wholeSelection = [_clickedNode].concat(_selectedNodes);
	            var treeNode = this.findNodesInTree(wholeSelection, _treeData);
	            var exits = [];
	            var stack = [root];
	
	            while (stack.length > 0) {
	                var node = stack.pop();
	                if (this.countUnselectedChildren(node, treeNode) === 1) {
	                    if (!exits.includes(node)) exits.push(node);
	                }
	                if (node.children !== undefined) {
	                    var _iteratorNormalCompletion5 = true;
	                    var _didIteratorError5 = false;
	                    var _iteratorError5 = undefined;
	
	                    try {
	                        for (var _iterator5 = node.children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                            var child = _step5.value;
	
	                            if (treeNode.includes(child)) stack.push(child);
	                        }
	                    } catch (err) {
	                        _didIteratorError5 = true;
	                        _iteratorError5 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                                _iterator5.return();
	                            }
	                        } finally {
	                            if (_didIteratorError5) {
	                                throw _iteratorError5;
	                            }
	                        }
	                    }
	                }
	            }
	            return exits;
	        }
	
	        // Turns an array of Monosaccharides into an array of tree nodes
	
	    }, {
	        key: "findNodesInTree",
	        value: function findNodesInTree(arr, _treeData) {
	            var ret = [];
	            var vf = new _visFunction2.default();
	            for (var i in arr) {
	                ret[i] = vf.findNodeInTree(_treeData, arr[i]);
	            }
	            return ret;
	        }
	
	        // Check if any of the nodes in arr are already in a REP
	
	    }, {
	        key: "isRepeated",
	        value: function isRepeated(arr) {
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;
	
	            try {
	                for (var _iterator6 = arr[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var node = _step6.value;
	
	                    if (node.repeatingUnit !== undefined) {
	                        return true;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError6 = true;
	                _iteratorError6 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                        _iterator6.return();
	                    }
	                } finally {
	                    if (_didIteratorError6) {
	                        throw _iteratorError6;
	                    }
	                }
	            }
	
	            return false;
	        }
	
	        /**
	            Used to check if the repetition can be done on the array "nodes".
	            If there are more than 1 unselected children in the array, there are several exits to the repeating unit, which is impossible.
	            If there are 0 unselected children, the repetition is only possible if there are no branches selected:
	            If you select the end of a linear glycan, there are no exits because the last selected node is the last node of the glycan (Repetition OK)
	            however, if there is a branch an no unselected children, the group of nodes ends with a fork, which is impossible
	         */
	
	    }, {
	        key: "countUnselectedChildren",
	        value: function countUnselectedChildren(node, nodes) {
	            var count = 0;
	            if (node.children != undefined) {
	                var _iteratorNormalCompletion7 = true;
	                var _didIteratorError7 = false;
	                var _iteratorError7 = undefined;
	
	                try {
	                    for (var _iterator7 = node.children[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                        var child = _step7.value;
	
	                        if (!nodes.includes(child) && child.node instanceof _Monosaccharide2.default) {
	                            count++;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError7 = true;
	                    _iteratorError7 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                            _iterator7.return();
	                        }
	                    } finally {
	                        if (_didIteratorError7) {
	                            throw _iteratorError7;
	                        }
	                    }
	                }
	
	                return count;
	            } else {
	                return 0;
	            }
	        }
	    }, {
	        key: "glycan",
	        set: function set(_glycan) {
	            this._glycan = _glycan;
	        },
	        get: function get() {
	            return this._glycan;
	        }
	    }, {
	        key: "treeData",
	        set: function set(_treeData) {
	            this._treeData = _treeData;
	        },
	        get: function get() {
	            return this._treeData;
	        }
	    }, {
	        key: "shapes",
	        set: function set(_shapes) {
	            this._shapes = _shapes;
	        },
	        get: function get() {
	            return this._shapes;
	        }
	    }]);
	
	    return RepetitionUtility;
	}();
	
	exports.default = RepetitionUtility;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.displayLabels = exports.createTriangleLinearGradient = exports.createDiamondLinearGradient = exports.createSquareLinearGradient = undefined;
	
	var _Substituent = __webpack_require__(27);
	
	var _Substituent2 = _interopRequireDefault(_Substituent);
	
	var _XYLinkLabels = __webpack_require__(21);
	
	var _XYLinkLabels2 = _interopRequireDefault(_XYLinkLabels);
	
	var _visFunction = __webpack_require__(34);
	
	var _visFunction2 = _interopRequireDefault(_visFunction);
	
	var _SubstituentLabels = __webpack_require__(20);
	
	var _SubstituentLabels2 = _interopRequireDefault(_SubstituentLabels);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create a linear gradient for a square
	 * @param color The color that the square has to have
	 * @param gradientId The generated id of the linear gradient
	 */
	var createSquareLinearGradient = exports.createSquareLinearGradient = function createSquareLinearGradient(color, gradientId) {
	    var svg = d3.select("#svgTree"); // Get the svgTree
	    // Create a linearGradient using the gradientId
	    var linearGradient = svg.append("linearGradient").attr("id", gradientId).attr("x1", "0%").attr("y1", "100%").attr("x2", "100%").attr("y2", "0%").attr("spreadMethod", "pad");
	
	    // First half of the square, in white
	    linearGradient.append("stop").attr("offset", "48%").attr("stop-color", "#fff").attr("stop-opacity", 1);
	
	    // Separation in the middle, in black
	    linearGradient.append("stop").attr("offset", "50%").attr("stop-color", "#000").attr("stop-opacity", 1);
	
	    // Second half of the square, in the wanted color
	    linearGradient.append("stop").attr("offset", "52%").attr("stop-color", color).attr("stop-opacity", 1);
	};
	
	/**
	 * Create a linear gradient for a diamond
	 * @param type The type of the monosaccharide that the diamond has to have
	 * @param gradientId The generated id of the linear gradient
	 */
	var createDiamondLinearGradient = exports.createDiamondLinearGradient = function createDiamondLinearGradient(type, gradientId) {
	    var svg = d3.select("#svgTree"); // Get the svgTree
	    var linearGradient = void 0;
	    // AltA and IdoA are reverted diamonds so we don't append the same linearGradient
	    if (type === MonosaccharideType.AltA || type === MonosaccharideType.IdoA) {
	        linearGradient = svg.append("linearGradient").attr("id", gradientId).attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%").attr("spreadMethod", "pad");
	    } else {
	        linearGradient = svg.append("linearGradient").attr("id", gradientId).attr("x1", "0%").attr("y1", "100%").attr("x2", "0%").attr("y2", "0%").attr("spreadMethod", "pad");
	    }
	
	    // First half of the diamond, in white
	    linearGradient.append("stop").attr("offset", "48%").attr("stop-color", "#fff").attr("stop-opacity", 1);
	
	    // Separation of the diamond, in black
	    linearGradient.append("stop").attr("offset", "50%").attr("stop-color", "#000").attr("stop-opacity", 1);
	
	    // Second half of the diamond, in the wanted color
	    linearGradient.append("stop").attr("offset", "52%").attr("stop-color", type.color).attr("stop-opacity", 1);
	};
	
	/**
	 * Create a linear gradient for a triangle
	 * @param color The color that the triangle has to have
	 * @param gradientId The generated id of the linear gradient
	 */
	var createTriangleLinearGradient = exports.createTriangleLinearGradient = function createTriangleLinearGradient(color, gradientId) {
	    var svg = d3.select("#svgTree");
	    var linearGradient = svg.append("linearGradient").attr("id", gradientId).attr("x1", "0%").attr("y1", "54%").attr("x2", "50%").attr("y2", "22%").attr("spreadMethod", "pad");
	
	    // First half of the triangle, in white
	    linearGradient.append("stop").attr("offset", "40%").attr("stop-color", "#fff").attr("stop-opacity", 1);
	
	    // Separation of the triangle, in black
	    linearGradient.append("stop").attr("offset", "50%").attr("stop-color", "#000").attr("stop-opacity", 1);
	
	    // Second half of the triangle, in the wanted color
	    linearGradient.append("stop").attr("offset", "60%").attr("stop-color", color).attr("stop-opacity", 1);
	};
	
	/**
	 * Called once to display the donorPosition and acceptorPosition of the link,
	 * Then once more to display the anomericity (with a different font-family)
	 * A Monospace font is used so that no matter what the two labels contain,
	 * they won't overlap each other
	 * @param linkLabel
	 * @param links
	 * @param anom
	 */
	var displayLabels = exports.displayLabels = function displayLabels(linkLabel, links, anom) {
	    var root = { "node": { "id": "root" } };
	    var rootLink = { "source": root, "target": treeData };
	    var visFunc = new _visFunction2.default();
	    links.push(rootLink);
	    linkLabel.data(links).enter().append("text").attr("class", "linkLabel").style("fill", function (d) {
	        if (!exporting) {
	            var allSelectedNodes = [clickedNode].concat(selectedNodes);
	            if (d.target.node instanceof _Substituent2.default && d.source.node === clickedNode && selectedNodes.length === 0) {
	                return "red";
	            }
	            if (d.target.node instanceof _Substituent2.default && allSelectedNodes.includes(d.source.node) || // If it's a sub and its parent is selected
	            allSelectedNodes.includes(d.target.node) && allSelectedNodes.includes(d.source.node)) {
	                // or both are monosaccharides are selected
	                return "#58ACFA";
	            } else if (anom) {
	                return "#4b4b4b";
	            }
	            return "black";
	        }
	        return "black";
	    }).style("font-family", function (d) {
	        if (d.target.node["anomericity"]) // Monosaccharide
	            {
	                return "Courier New";
	            } else {
	            return "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue";
	        }
	    }).style("font-size", "10px").style("alignment-baseline", "text-before-edge").style("dominant-baseline", "text-before-edge").style("text-anchor", function (d) {
	        if (d.target.node["anomericity"]) // Monosaccharide
	            {
	                return "middle";
	            } else {
	            var linked = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
	            if (linked === 2 || linked === 3 || linked === 6 || linked === "undefined") {
	                return "middle";
	            } else if (linked === 1) {
	                return "left";
	            } else if (linked === 4 || linked === 5) {
	                return "right";
	            }
	        }
	        return "middle";
	    }).style("font-style", function (d) {
	        if (d.target.node["anomericity"]) // Monosaccharide
	            {
	                if (anom) {
	                    return "italic";
	                }
	            }
	        return "";
	    }).attr("x", function (d) {
	        var finalX = void 0; // Final x of the label
	        var source = shapes[d.source.node.id]; // Calculate source coordinates
	        if (d.target.node["anomericity"]) // Monosaccharide
	            {
	                var target = shapes[d.target.node.id]; // Calculate target coordinates
	                var usualX = (source[0] + target[0]) / 2; // Get x of the middle of the link
	                if (d.source.node.id === "root") finalX = (shapes["root"][0] * 2 + 50) / 2;
	                // Add value to have a visible display (not on the line)
	                else {
	                        var donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
	                        finalX = usualX + _XYLinkLabels2.default.prototype.getXYLinkLabel(donorPos).x; // Add value to have a visible display (not on the line)
	                    }
	            } else // Substituant
	            {
	                /*
	                                let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
	                                let y = source[1] + SubstituentLabels.prototype.getSubstituentLabel(donorPos).y;
	                                finalX = y;
	                                finalX = appFunc.findSubstituantLabelSpot(source[0], source[1], visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value)[0];
	                 */
	                var _donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
	                finalX = _SubstituentLabels2.default.prototype.getSubstituentLabel(_donorPos).x + source[0];
	            }
	
	        return finalX; // Return the obtained value
	    }).attr("y", function (d) {
	        var finalY = void 0; // Final y of the label
	        var source = shapes[d.source.node.id]; // Get source coordinates
	        if (d.target.node["anomericity"]) // Monosaccharide
	            {
	                var target = shapes[d.target.node.id]; // Calculate target coordinates
	                var usualY = (source[1] + target[1]) / 2; // Get y of the middle of the link
	                if (d.source.node.id === "root") finalY = shapes["root"][1] + 4;
	                // Add value to have a visible display
	                else {
	                        var donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
	                        finalY = usualY + _XYLinkLabels2.default.prototype.getXYLinkLabel(donorPos).y; // Add value to have a visible display (not on the line)
	                    }
	            } else // Substituant
	            {
	                /*
	                                let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
	                                let x = source[0] + SubstituentLabels.prototype.getSubstituentLabel(donorPos).x;
	                                finalY = appFunc.findSubstituantLabelSpot(source[0], source[1], visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value)[1];
	                 */
	                var _donorPos2 = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
	                finalY = _SubstituentLabels2.default.prototype.getSubstituentLabel(_donorPos2).y + source[1];
	            }
	        return finalY; // Return the obtained value
	    }).style("stroke", function (d) {
	        if (!exporting) {
	            var allSelectedNodes = [clickedNode].concat(selectedNodes);
	            if (d.target.node instanceof _Substituent2.default && d.source.node === clickedNode && selectedNodes.length === 0) {
	                return "red";
	            }
	            if (d.target.node instanceof _Substituent2.default && allSelectedNodes.includes(d.source.node) || // If it's a sub and its parent is selected
	            allSelectedNodes.includes(d.target.node) && allSelectedNodes.includes(d.source.node)) {
	                // or both are monosaccharides are selected
	                return "#58ACFA";
	            } else if (anom) {
	                return "#4b4b4b";
	            }
	            return "black";
	        }
	        return "black";
	    }).text(function (d) {
	        if (d.target.node["anomericity"]) // Monosaccharide
	            {
	                var link = visFunc.findLinkForMono(d.target.node, glycan); // Get the link to which we want to add a label
	                var anomericity = void 0; // Anomericity of the target node
	                if (!anom) anomericity = "\xA0";else {
	                    if (d.target.node.anomericity.name === "ALPHA") {
	                        anomericity = "α";
	                    } else if (d.target.node.anomericity.name === "BETA") {
	                        anomericity = "β";
	                    } else {
	                        anomericity = "?\xA0";
	                    }
	                }
	                var acceptorPositionLabel = void 0;
	                if (anom) acceptorPositionLabel = "\xA0";else {
	                    if (d.source.node.id === "root") {
	                        if (rootAcceptorPosition.value === "undefined") {
	                            acceptorPositionLabel = "?";
	                        } else {
	                            acceptorPositionLabel = rootAcceptorPosition.value;
	                        }
	                    } else {
	                        if (link.acceptorPosition.value === "undefined") {
	                            acceptorPositionLabel = "?";
	                        } else {
	                            acceptorPositionLabel = link.acceptorPosition.value;
	                        }
	                    }
	                }
	
	                var donorPositionLabel = void 0;
	                if (anom) donorPositionLabel = "\xA0";else {
	                    if (d.source.node.id === "root") {
	                        if (rootDonorPosition.value === 'undefined') {
	                            donorPositionLabel = "?";
	                        } else {
	                            donorPositionLabel = rootDonorPosition.value;
	                        }
	                    } else {
	                        if (link.donorPosition.value === 'undefined') {
	                            donorPositionLabel = "?";
	                        } else {
	                            donorPositionLabel = link.donorPosition.value;
	                        }
	                    }
	                }
	                var coma = void 0;
	                if (anom) coma = "\xA0";else coma = ",";
	                return anomericity + acceptorPositionLabel + coma + donorPositionLabel; // Text of the label
	            } else {
	            return d.target.node._substituentType.label;
	        }
	    });
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=sb.js.map