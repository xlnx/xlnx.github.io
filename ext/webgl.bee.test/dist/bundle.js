/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/browser-main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../AppData/Roaming/npm/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/browser-main.ts":
/*!*****************************!*\
  !*** ./src/browser-main.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glm_1 = __webpack_require__(/*! ./util/glm */ "./src/util/glm.js");
var renderer_1 = __webpack_require__(/*! ./renderer/renderer */ "./src/renderer/renderer.ts");
var scene_1 = __webpack_require__(/*! ./scene/scene */ "./src/scene/scene.ts");
var viewport_1 = __webpack_require__(/*! ./scene/viewport */ "./src/scene/viewport.ts");
var model_1 = __webpack_require__(/*! ./gl/model */ "./src/gl/model.ts");
var modelObject_1 = __webpack_require__(/*! ./object/modelObject */ "./src/object/modelObject.ts");
var lighting_1 = __webpack_require__(/*! ./techniques/lighting */ "./src/techniques/lighting.ts");
var shadow_1 = __webpack_require__(/*! ./techniques/shadow */ "./src/techniques/shadow.ts");
var renderer = new renderer_1.Renderer(document.body);
var scene = new scene_1.default();
var camera = scene.createViewport(new viewport_1.PerspectiveViewport()).get();
camera.position = glm_1.glm.vec3(3, 0, 1.2);
camera.target = glm_1.glm.vec3(-3, 0, -0.8);
var light = scene.createCommunicator(new lighting_1.PointLight()).get();
light.set("position", glm_1.glm.vec3(0, 0, 2));
light.set("diffuseIntensity", 5);
light.set("ambientIntensity", 0.7);
var shadow = scene.createTechnique(new shadow_1.ShadowTechnique());
renderer_1.gl.clearColor(0, 0, 0, 0);
renderer_1.gl.clearDepth(1);
var model = scene.createObject(new modelObject_1.default(model_1.default.create("clemson.json"))).get();
// Model.create("black-bishop.json"))).get();
model.scale(0.5);
renderer_1.gl.enable(renderer_1.gl.DEPTH_TEST);
renderer.dispatch("render", function () {
    scene.render();
});
renderer.start();


/***/ }),

/***/ "./src/gl/buffer.ts":
/*!**************************!*\
  !*** ./src/gl/buffer.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = __webpack_require__(/*! ../renderer/renderer */ "./src/renderer/renderer.ts");
var BufferBase = /** @class */ (function () {
    function BufferBase(handle) {
        this.handle = handle;
    }
    return BufferBase;
}());
var VBO = /** @class */ (function (_super) {
    __extends(VBO, _super);
    function VBO() {
        return _super.call(this, renderer_1.gl.createBuffer()) || this;
    }
    VBO.prototype.bind = function () {
        renderer_1.gl.bindBuffer(renderer_1.gl.ARRAY_BUFFER, this.handle);
    };
    VBO.prototype.unbind = function () {
        renderer_1.gl.bindBuffer(renderer_1.gl.ARRAY_BUFFER, null);
    };
    VBO.prototype.data = function (data) {
        renderer_1.gl.bufferData(renderer_1.gl.ARRAY_BUFFER, new Float32Array(data), renderer_1.gl.STATIC_DRAW);
    };
    return VBO;
}(BufferBase));
exports.VBO = VBO;
var EBO = /** @class */ (function (_super) {
    __extends(EBO, _super);
    function EBO() {
        return _super.call(this, renderer_1.gl.createBuffer()) || this;
    }
    EBO.prototype.bind = function () {
        renderer_1.gl.bindBuffer(renderer_1.gl.ELEMENT_ARRAY_BUFFER, this.handle);
    };
    EBO.prototype.unbind = function () {
        renderer_1.gl.bindBuffer(renderer_1.gl.ELEMENT_ARRAY_BUFFER, null);
    };
    EBO.prototype.data = function (data) {
        renderer_1.gl.bufferData(renderer_1.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), renderer_1.gl.STATIC_DRAW);
    };
    return EBO;
}(BufferBase));
exports.EBO = EBO;
var FBO = /** @class */ (function (_super) {
    __extends(FBO, _super);
    function FBO() {
        return _super.call(this, renderer_1.gl.createFramebuffer()) || this;
    }
    FBO.prototype.bind = function () {
        renderer_1.gl.bindFramebuffer(renderer_1.gl.FRAMEBUFFER, this.handle);
    };
    FBO.prototype.unbind = function () {
        renderer_1.gl.bindFramebuffer(renderer_1.gl.FRAMEBUFFER, null);
    };
    FBO.prototype.setRenderBuffer = function (rbo, channel) {
        renderer_1.gl.framebufferRenderbuffer(renderer_1.gl.FRAMEBUFFER, channel, renderer_1.gl.RENDERBUFFER, rbo);
    };
    FBO.prototype.check = function () {
        switch (renderer_1.gl.checkFramebufferStatus(renderer_1.gl.FRAMEBUFFER)) {
            case renderer_1.gl.FRAMEBUFFER_COMPLETE: break;
            case renderer_1.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                throw "framebuffer incomplete attachment.";
            case renderer_1.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                throw "framebuffer incomplete missing attachment.";
            case renderer_1.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                throw "framebuffer incomplete dimensions.";
            case renderer_1.gl.FRAMEBUFFER_UNSUPPORTED:
                throw "framebuffer unsupported.";
            default:
                throw "unknown framebuffer error.";
        }
    };
    return FBO;
}(BufferBase));
exports.FBO = FBO;
var RBO = /** @class */ (function (_super) {
    __extends(RBO, _super);
    function RBO() {
        return _super.call(this, renderer_1.gl.createRenderbuffer()) || this;
    }
    RBO.prototype.bind = function () {
        renderer_1.gl.bindRenderbuffer(renderer_1.gl.RENDERBUFFER, this.handle);
    };
    RBO.prototype.unbind = function () {
        renderer_1.gl.bindRenderbuffer(renderer_1.gl.RENDERBUFFER, null);
    };
    return RBO;
}(BufferBase));
exports.RBO = RBO;


/***/ }),

/***/ "./src/gl/communicator.ts":
/*!********************************!*\
  !*** ./src/gl/communicator.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ulist_1 = __webpack_require__(/*! ../util/ulist */ "./src/util/ulist.ts");
var shader_1 = __webpack_require__(/*! ./shader */ "./src/gl/shader.ts");
var Communicator = /** @class */ (function () {
    function Communicator(type, array) {
        if (array === void 0) { array = true; }
        this.type = type;
        this.array = array;
        this.data = {};
        if (array) {
            if (!(type in Communicator.counters)) {
                Communicator.counters[type] = shader_1.Shader.uniform("int", "g" + type + "_count");
            }
        }
    }
    Communicator.prototype.invoke = function (index) {
        if (this.array) {
            for (var key in this.data) {
                // console.log(key, this.data[key].data);
                this.data[key].uniform.subscribe(index).set(this.data[key].data);
            }
            return true;
        }
        else {
            for (var key in this.data) {
                // console.log(key, this.data[key].data);
                this.data[key].uniform.set(this.data[key].data);
            }
            return false;
        }
    };
    Communicator.prototype.set = function (key, value) {
        if (key in this.data) {
            this.data[key].data = value;
        }
        else {
            throw "communicator key does not match any: " + key;
        }
    };
    Communicator.prototype.init = function (uniforms) {
        if (this.array) {
            for (var name_1 in uniforms) {
                this.data[name_1] = {
                    data: uniforms[name_1].init,
                    uniform: shader_1.Shader.uniform(uniforms[name_1].type, "g" + this.type + "_" + name_1 + "[]")
                };
            }
        }
        else {
            for (var name_2 in uniforms) {
                this.data[name_2] = {
                    data: uniforms[name_2].init,
                    uniform: shader_1.Shader.uniform(uniforms[name_2].type, "g" + this.type)
                };
            }
        }
    };
    Communicator.counters = {};
    return Communicator;
}());
exports.Communicator = Communicator;
var Communicators = /** @class */ (function () {
    function Communicators() {
        this.data = new ulist_1.ulist();
    }
    Communicators.prototype.invoke = function () {
        var map = {};
        this.data.visit(function (e) {
            var communicator = e.get();
            if (!(communicator.type in map)) {
                map[communicator.type] = 0;
            }
            if (communicator.invoke(map[communicator.type])) {
                map[communicator.type]++;
            }
        });
        for (var type in map) {
            Communicator.counters[type].set(map[type]);
        }
    };
    Communicators.prototype.add = function (communicator) {
        return this.data.push(communicator);
    };
    Communicators.prototype.use = function () {
        Communicators.communicators.push(this);
    };
    Communicators.prototype.unuse = function () {
        if (Communicators.communicators.length) {
            Communicators.communicators.pop();
        }
    };
    Object.defineProperty(Communicators, "current", {
        get: function () {
            if (Communicators.communicators.length > 0) {
                return Communicators.communicators[Communicators.communicators.length - 1];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Communicators.communicators = [];
    return Communicators;
}());
exports.Communicators = Communicators;


/***/ }),

/***/ "./src/gl/material.ts":
/*!****************************!*\
  !*** ./src/gl/material.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var texture_1 = __webpack_require__(/*! ./texture */ "./src/gl/texture.ts");
var shader_1 = __webpack_require__(/*! ./shader */ "./src/gl/shader.ts");
var textureType = {
    0x1: "Diffuse",
    0x2: "Specular",
    0x3: "Ambient",
    0x4: "Emissive",
    0x5: "Height",
    0x6: "Normals",
    0x7: "Shininess",
    0x8: "Opacity",
    0x9: "Displacement",
    0xa: "Lightmap",
    0xb: "Reflection"
};
var Material = /** @class */ (function () {
    function Material(data, path) {
        if (path === void 0) { path = Material.materialPath; }
        this.textures = {};
        this.attributes = [];
        for (var _i = 0, _a = data.properties; _i < _a.length; _i++) {
            var prop = _a[_i];
            var _b = prop.key.substring(1).split('.'), key = _b[0], attr = _b[1];
            if (key in Material.keymap) {
                if (attr in Material.keymap[key]) {
                    Material.keymap[key][attr](this, prop, path);
                }
            }
        }
    }
    Material.prototype.use = function () {
        var i = 0;
        for (var loc in this.textures) {
            this.textures[loc].texture.invoke(i);
            this.textures[loc].uniform.set(i);
            i += 1;
        }
        for (var _i = 0, _a = this.attributes; _i < _a.length; _i++) {
            var attr = _a[_i];
            attr.uniform.set(attr.value);
        }
    };
    Material.materialPath = "./materials/";
    Material.keymap = {
        mat: {
            shininess: function (self, prop) {
                self.attributes.push({
                    value: prop.value,
                    uniform: shader_1.Shader.uniform("float", "gSpecularPower")
                });
            },
            shinpercent: function (self, prop) {
                self.attributes.push({
                    value: prop.value,
                    uniform: shader_1.Shader.uniform("float", "gSpecularIntensity")
                });
            }
        },
        tex: {
            file: function (self, prop, path) {
                if (prop.semantic in textureType) {
                    console.log(textureType[prop.semantic]);
                    self.textures[prop.semantic] = {
                        texture: new texture_1.Texture2D(path + prop.value),
                        uniform: shader_1.Shader.uniform("int", "g" + textureType[prop.semantic])
                    };
                }
            }
        }
    };
    return Material;
}());
exports.default = Material;


/***/ }),

/***/ "./src/gl/mesh.ts":
/*!************************!*\
  !*** ./src/gl/mesh.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vertexAttrs_1 = __webpack_require__(/*! ./vertexAttrs */ "./src/gl/vertexAttrs.ts");
var Mesh = /** @class */ (function () {
    function Mesh(vertices, indices) {
        if (indices === void 0) { indices = undefined; }
        if (indices != undefined) {
            this.vao = new vertexAttrs_1.VAO(vertices, indices);
        }
        else {
            this.vao = new vertexAttrs_1.VAO(vertices);
        }
    }
    Mesh.prototype.render = function () {
        this.vao.bind();
        this.vao.draw();
        this.vao.unbind();
    };
    return Mesh;
}());
exports.default = Mesh;


/***/ }),

/***/ "./src/gl/model.ts":
/*!*************************!*\
  !*** ./src/gl/model.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assets_1 = __webpack_require__(/*! ../util/assets */ "./src/util/assets.ts");
var material_1 = __webpack_require__(/*! ./material */ "./src/gl/material.ts");
var mesh_1 = __webpack_require__(/*! ./mesh */ "./src/gl/mesh.ts");
var vertexAttrs_1 = __webpack_require__(/*! ./vertexAttrs */ "./src/gl/vertexAttrs.ts");
var vertexAttrMap = {
    vertices: "pos3",
    colors: "color4",
    normals: "norm3",
    tangents: "tg3",
    bitangents: "bitg3",
    texturecoords: "tex2"
};
var Model = /** @class */ (function () {
    function Model(name) {
        this.mesh = {};
        name = Model.modelPath + name;
        var scene = assets_1.default.import(name);
        for (var _i = 0, _a = scene.meshes; _i < _a.length; _i++) {
            var m = _a[_i];
            if (!(m.materialindex in this.mesh)) {
                this.mesh[m.materialindex] = {
                    material: new material_1.default(scene.materials[m.materialindex], Model.modelPath),
                    mesh: []
                };
            }
            this.mesh[m.materialindex].mesh.push(Model.createMesh(m));
        }
    }
    Model.prototype.render = function () {
        for (var i in this.mesh) {
            this.mesh[i].material.use();
            for (var _i = 0, _a = this.mesh[i].mesh; _i < _a.length; _i++) {
                var m = _a[_i];
                m.render();
            }
        }
    };
    Model.create = function (name) {
        if (!(name in Model.models)) {
            Model.models[name] = new Model(name);
        }
        return Model.models[name];
    };
    Model.createMesh = function (mesh) {
        var attrs = [];
        for (var attr in mesh) {
            if (attr in vertexAttrMap) {
                attrs.push(vertexAttrMap[attr]);
            }
        }
        var vs = new vertexAttrs_1.VertexAttrs(attrs);
        for (var attr in mesh) {
            if (attr in vertexAttrMap) {
                vs.set(vertexAttrMap[attr], attr == "texturecoords" ?
                    mesh[attr][0] : mesh[attr]);
            }
        }
        var indices = [];
        for (var _i = 0, _a = mesh.faces; _i < _a.length; _i++) {
            var x = _a[_i];
            indices = indices.concat(x);
        }
        return new mesh_1.default(vs, indices);
    };
    Model.modelPath = "./assets/";
    Model.models = {};
    return Model;
}());
exports.default = Model;


/***/ }),

/***/ "./src/gl/shader.ts":
/*!**************************!*\
  !*** ./src/gl/shader.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xhr_1 = __webpack_require__(/*! ../util/xhr */ "./src/util/xhr.ts");
var renderer_1 = __webpack_require__(/*! ../renderer/renderer */ "./src/renderer/renderer.ts");
var communicator_1 = __webpack_require__(/*! ./communicator */ "./src/gl/communicator.ts");
var Uniform = /** @class */ (function () {
    function Uniform(name, valueType, isArray) {
        this.name = name;
        this.valueType = valueType;
        this.isArray = isArray;
        // console.log(new UniformMap());
        switch (valueType) {
            case "int":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniform1iv(location, new Int32Array([value]));
                };
                break;
            case "float":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniform1fv(location, new Float32Array([value]));
                };
                break;
            case "ivec2":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniform2iv(location, value.array);
                };
                break;
            case "vec2":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniform2fv(location, value.array);
                };
                break;
            case "ivec3":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniform3iv(location, value.array);
                };
                break;
            case "vec3":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniform3fv(location, value.array);
                };
                break;
            case "ivec4":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniform4iv(location, value.array);
                };
                break;
            case "vec4":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniform4fv(location, value.array);
                };
                break;
            case "mat2":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniformMatrix2fv(location, false, value.array);
                };
                break;
            case "mat3":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniformMatrix4fv(location, false, value.array);
                };
                break;
            case "mat4":
                this.setter = function (location, value) {
                    return renderer_1.gl.uniformMatrix4fv(location, false, value.array);
                };
                break;
            default: throw "undefined uniform type";
        }
    }
    Uniform.prototype.set = function (value) {
        try {
            if (!this.isArray) {
                this.setter(renderer_1.gl.getUniformLocation(Shader.current.handle, this.name), value);
            }
            else {
                throw 1;
            }
        }
        catch (e) {
            if (e == 1) {
                throw "cannot assign value to a uniform array.";
            }
            else {
                // console.warn("uniform variable does not exist: " + this.name);
            }
        }
    };
    Uniform.prototype.subscribe = function (offset) {
        if (!this.isArray) {
            throw "cannot subscribe a non-array uniform";
        }
        else {
            return new Uniform(this.name + "[" + offset + "]", this.valueType, false);
        }
    };
    return Uniform;
}());
exports.Uniform = Uniform;
var Shader = /** @class */ (function () {
    function Shader(vsfilename, fsfilename) {
        this.handle = renderer_1.gl.createProgram();
        vsfilename = Shader.shaderPath + (renderer_1.gl2 ? "gl2/" : "gl/") + vsfilename;
        fsfilename = Shader.shaderPath + (renderer_1.gl2 ? "gl2/" : "gl/") + fsfilename;
        // console.log(vsfilename);
        // console.log(fsfilename);
        var vs = Shader.compileShader(xhr_1.default.getSync(vsfilename), renderer_1.gl.VERTEX_SHADER);
        var fs = Shader.compileShader(xhr_1.default.getSync(fsfilename), renderer_1.gl.FRAGMENT_SHADER);
        renderer_1.gl.bindAttribLocation(this.handle, 0, "Position");
        renderer_1.gl.bindAttribLocation(this.handle, 1, "Color");
        renderer_1.gl.bindAttribLocation(this.handle, 2, "Normal");
        renderer_1.gl.bindAttribLocation(this.handle, 3, "Tangent");
        renderer_1.gl.bindAttribLocation(this.handle, 4, "Bitangent");
        renderer_1.gl.bindAttribLocation(this.handle, 5, "TexCoord");
        renderer_1.gl.bindAttribLocation(this.handle, 6, "BoneIndex");
        renderer_1.gl.bindAttribLocation(this.handle, 7, "BoneWeight");
        renderer_1.gl.attachShader(this.handle, vs);
        renderer_1.gl.attachShader(this.handle, fs);
        renderer_1.gl.linkProgram(this.handle);
        if (!renderer_1.gl.getProgramParameter(this.handle, renderer_1.gl.LINK_STATUS)) {
            throw renderer_1.gl.getProgramInfoLog(this.handle);
        }
    }
    Shader.prototype.use = function () {
        Shader.current = this;
        renderer_1.gl.useProgram(this.handle);
        if (communicator_1.Communicators.current) {
            communicator_1.Communicators.current.invoke();
        }
    };
    Shader.prototype.unuse = function () {
        Shader.current = null;
        if (Shader.current && communicator_1.Communicators.current) {
            communicator_1.Communicators.current.invoke();
        }
        renderer_1.gl.useProgram(Shader.current);
    };
    Shader.uniform = function (valueType, name) {
        var p = name.indexOf("[]");
        if (p != -1) {
            return new Uniform(name.substring(0, name.indexOf("[]")), valueType, true);
        }
        else {
            return new Uniform(name, valueType, false);
        }
    };
    Shader.compileShader = function (source, type) {
        var shader = renderer_1.gl.createShader(type);
        renderer_1.gl.shaderSource(shader, source);
        renderer_1.gl.compileShader(shader);
        if (!renderer_1.gl.getShaderParameter(shader, renderer_1.gl.COMPILE_STATUS)) {
            throw renderer_1.gl.getShaderInfoLog(shader);
        }
        return shader;
    };
    Shader.create = function (name) {
        if (!(name in Shader.shaders)) {
            Shader.shaders[name] = new Shader(name + ".vs", name + ".fs");
        }
        return Shader.shaders[name];
    };
    Object.defineProperty(Shader, "current", {
        get: function () {
            return Shader.stack.length ? Shader.stack[Shader.stack.length - 1] : null;
        },
        set: function (value) {
            if (value != null) {
                Shader.stack.push(value);
            }
            else {
                if (Shader.stack.length) {
                    Shader.stack.pop();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Shader.shaderPath = "./shaders/";
    Shader.stack = [];
    Shader.shaders = {};
    return Shader;
}());
exports.Shader = Shader;


/***/ }),

/***/ "./src/gl/texture.ts":
/*!***************************!*\
  !*** ./src/gl/texture.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = __webpack_require__(/*! ../renderer/renderer */ "./src/renderer/renderer.ts");
var Texture = /** @class */ (function () {
    function Texture(type) {
        this.type = type;
        this.handle = renderer_1.gl.createTexture();
    }
    Texture.prototype.invoke = function (channel) {
        renderer_1.gl.activeTexture(renderer_1.gl.TEXTURE0 + channel);
        this.bind();
    };
    Texture.prototype.bind = function () {
        renderer_1.gl.bindTexture(this.type, this.handle);
    };
    Texture.prototype.unbind = function () {
        renderer_1.gl.bindTexture(this.type, null);
    };
    return Texture;
}());
exports.Texture = Texture;
var Texture2D = /** @class */ (function (_super) {
    __extends(Texture2D, _super);
    function Texture2D(first, second, third) {
        var _this = _super.call(this, renderer_1.gl.TEXTURE_2D) || this;
        if (typeof first == "string") {
            var filename = first;
            var usemipmap_1 = second == undefined ? true : second;
            _this.bind();
            renderer_1.gl.texImage2D(_this.type, 0, renderer_1.gl.RGBA, 1, 1, 0, renderer_1.gl.RGBA, renderer_1.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
            _this.unbind();
            var img_1 = new Image();
            img_1.onload = function () {
                _this.bind();
                renderer_1.gl.pixelStorei(renderer_1.gl.UNPACK_FLIP_Y_WEBGL, true);
                renderer_1.gl.texImage2D(_this.type, 0, renderer_1.gl.RGBA, renderer_1.gl.RGBA, renderer_1.gl.UNSIGNED_BYTE, img_1);
                // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                renderer_1.gl.texParameteri(_this.type, renderer_1.gl.TEXTURE_WRAP_S, renderer_1.gl.REPEAT);
                renderer_1.gl.texParameteri(_this.type, renderer_1.gl.TEXTURE_WRAP_T, renderer_1.gl.REPEAT);
                renderer_1.gl.texParameteri(_this.type, renderer_1.gl.TEXTURE_MAG_FILTER, renderer_1.gl.LINEAR);
                if (usemipmap_1) {
                    renderer_1.gl.texParameteri(_this.type, renderer_1.gl.TEXTURE_MIN_FILTER, renderer_1.gl.LINEAR_MIPMAP_LINEAR);
                    renderer_1.gl.generateMipmap(_this.type);
                }
                else {
                    renderer_1.gl.texParameteri(_this.type, renderer_1.gl.TEXTURE_MIN_FILTER, renderer_1.gl.LINEAR);
                }
                _this.unbind();
                _this.w = img_1.width;
                _this.h = img_1.height;
            };
            img_1.src = filename;
        }
        else {
            var component = first;
            _this.w = second;
            _this.h = third;
            if (second == undefined) {
                _this.w = renderer_1.Renderer.instance.canvas.width;
                _this.h = renderer_1.Renderer.instance.canvas.height;
            }
            _this.bind();
            switch (component) {
                case renderer_1.gl.DEPTH_COMPONENT:
                    {
                        renderer_1.gl.texImage2D(_this.type, 0, component, _this.w, _this.h, 0, component, renderer_1.gl.FLOAT, null);
                    }
                    break;
                default:
                    {
                        renderer_1.gl.texImage2D(_this.type, 0, component, _this.w, _this.h, 0, component, renderer_1.gl.UNSIGNED_BYTE, null);
                    }
                    break;
            }
            // } else {
            // 	gl.texImage2D(this.type, 0, component, 1, 1, 0, component, gl.FLOAT, null);
            // }
            renderer_1.gl.texParameterf(_this.type, renderer_1.gl.TEXTURE_MIN_FILTER, renderer_1.gl.LINEAR);
            renderer_1.gl.texParameterf(_this.type, renderer_1.gl.TEXTURE_MAG_FILTER, renderer_1.gl.LINEAR);
            renderer_1.gl.texParameterf(_this.type, renderer_1.gl.TEXTURE_WRAP_S, renderer_1.gl.CLAMP_TO_EDGE);
            renderer_1.gl.texParameterf(_this.type, renderer_1.gl.TEXTURE_WRAP_T, renderer_1.gl.CLAMP_TO_EDGE);
            _this.unbind();
        }
        return _this;
    }
    Object.defineProperty(Texture2D.prototype, "width", {
        get: function () {
            return this.w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Texture2D.prototype, "height", {
        get: function () {
            return this.h;
        },
        enumerable: true,
        configurable: true
    });
    return Texture2D;
}(Texture));
exports.Texture2D = Texture2D;
var TextureCube = /** @class */ (function (_super) {
    __extends(TextureCube, _super);
    function TextureCube(component, width, height) {
        var _this = _super.call(this, renderer_1.gl.TEXTURE_CUBE_MAP) || this;
        if (width == undefined) {
            width = height = renderer_1.Renderer.instance.canvas.height;
        }
        _this.bind();
        renderer_1.gl.texParameterf(_this.type, renderer_1.gl.TEXTURE_MIN_FILTER, renderer_1.gl.LINEAR);
        renderer_1.gl.texParameterf(_this.type, renderer_1.gl.TEXTURE_MAG_FILTER, renderer_1.gl.LINEAR);
        renderer_1.gl.texParameterf(_this.type, renderer_1.gl.TEXTURE_WRAP_S, renderer_1.gl.CLAMP_TO_EDGE);
        renderer_1.gl.texParameterf(_this.type, renderer_1.gl.TEXTURE_WRAP_T, renderer_1.gl.CLAMP_TO_EDGE);
        if (renderer_1.gl2) {
            renderer_1.gl.texParameterf(_this.type, renderer_1.gl2.TEXTURE_WRAP_R, renderer_1.gl.CLAMP_TO_EDGE);
        }
        for (var i = 0; i != 6; ++i) {
            renderer_1.gl.texImage2D(renderer_1.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, component, width, height, 0, component, renderer_1.gl.UNSIGNED_BYTE, null);
        }
        _this.unbind();
        return _this;
    }
    return TextureCube;
}(Texture));
exports.TextureCube = TextureCube;


/***/ }),

/***/ "./src/gl/vertexAttrs.ts":
/*!*******************************!*\
  !*** ./src/gl/vertexAttrs.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = __webpack_require__(/*! ../renderer/renderer */ "./src/renderer/renderer.ts");
var buffer_1 = __webpack_require__(/*! ./buffer */ "./src/gl/buffer.ts");
var attrLocation = {
    pos: 0, color: 1, norm: 2, tg: 3, bitg: 4, tex: 5, ibone: 6, wbone: 7
};
var TypeMap = /** @class */ (function () {
    function TypeMap() {
    }
    return TypeMap;
}());
var VAO = /** @class */ (function () {
    function VAO(attr, indices) {
        if (indices === void 0) { indices = undefined; }
        this.vbo = new buffer_1.VBO();
        this.attrs = attr.attrs;
        this.attrSize = attr.attrSize;
        this.numVertices = attr.vertices.length / attr.component;
        this.vbo.bind();
        this.vbo.data(attr.vertices);
        this.vbo.unbind();
        if (indices != undefined) {
            this.ebo = new buffer_1.EBO();
            this.ebo.bind();
            this.ebo.data(indices);
            this.ebo.unbind();
            this.numIndices = indices.length;
        }
    }
    VAO.prototype.bind = function () {
        this.vbo.bind();
        if (this.ebo) {
            this.ebo.bind();
        }
        for (var _i = 0, _a = this.attrs; _i < _a.length; _i++) {
            var x = _a[_i];
            renderer_1.gl.enableVertexAttribArray(x.index);
            // console.log(x.index, x.size, x.type, false, this.attrSize, x.offset);
            renderer_1.gl.vertexAttribPointer(x.index, x.size, x.type, false, this.attrSize, x.offset);
        }
    };
    VAO.prototype.unbind = function () {
        for (var _i = 0, _a = this.attrs; _i < _a.length; _i++) {
            var x = _a[_i];
            renderer_1.gl.disableVertexAttribArray(x.index);
        }
        if (this.ebo) {
            this.ebo.unbind();
        }
        this.vbo.unbind();
    };
    VAO.prototype.draw = function (mode, first, count) {
        if (mode === void 0) { mode = undefined; }
        if (first === void 0) { first = undefined; }
        if (count === void 0) { count = undefined; }
        if (this.ebo) {
            renderer_1.gl.drawElements(renderer_1.gl.TRIANGLES, this.numIndices, renderer_1.gl.UNSIGNED_SHORT, 0);
        }
        else {
            if (mode != undefined) {
                renderer_1.gl.drawArrays(mode, first, count);
            }
            else {
                renderer_1.gl.drawArrays(renderer_1.gl.TRIANGLES, 0, this.numVertices);
            }
        }
    };
    return VAO;
}());
exports.VAO = VAO;
var VertexAttrs = /** @class */ (function () {
    function VertexAttrs(attrNames) {
        this.attrNames = attrNames;
        this.attrs = [];
        this.attrSize = 0;
        this.vertices = [];
        this.component = 0;
        this.attrLookup = {};
        var offset = 0;
        for (var _i = 0, attrNames_1 = attrNames; _i < attrNames_1.length; _i++) {
            var x = attrNames_1[_i];
            var attr = {
                index: null,
                type: null,
                size: null,
                offset: null
            };
            attr.index = attrLocation[x.substr(0, x.length - 1)];
            if (x[0] == "i") {
                attr.type = renderer_1.gl.INT;
            }
            else {
                attr.type = renderer_1.gl.FLOAT;
            }
            attr.size = +x.substr(-1);
            attr.offset = offset;
            offset += attr.size * VertexAttrs.getSize(attr.type);
            this.attrs.push(attr);
            this.attrLookup[x] = attr;
            this.component += attr.size;
        }
        this.attrSize = offset;
    }
    VertexAttrs.prototype.push = function (vertex) {
        for (var _i = 0, _a = this.attrNames; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x in vertex) {
                this.vertices = this.vertices.concat(vertex[x]);
            }
            else {
                throw "lack of vertex attribute: " + x;
            }
        }
    };
    VertexAttrs.prototype.set = function (type, vs) {
        var i = 0;
        for (var _i = 0, _a = this.attrNames; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x == type)
                break;
            i += this.attrLookup[x].size;
        }
        var dt = this.attrLookup[type].size;
        for (var j = 0; j < vs.length; j += dt) {
            for (var k = 0; k != dt; ++k) {
                this.vertices[i + k] = vs[j + k];
            }
            i += this.component;
        }
    };
    VertexAttrs.getSize = function (type) {
        switch (type) {
            case renderer_1.gl.FLOAT: return 4;
            case renderer_1.gl.BYTE:
            case renderer_1.gl.UNSIGNED_BYTE: return 1;
            case renderer_1.gl.SHORT:
            case renderer_1.gl.UNSIGNED_SHORT: return 2;
            case renderer_1.gl.INT:
            case renderer_1.gl.UNSIGNED_INT: return 4;
            default: throw "unknown type";
        }
    };
    return VertexAttrs;
}());
exports.VertexAttrs = VertexAttrs;


/***/ }),

/***/ "./src/object/modelObject.ts":
/*!***********************************!*\
  !*** ./src/object/modelObject.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(/*! ../scene/object */ "./src/scene/object.ts");
var ModelObj = /** @class */ (function (_super) {
    __extends(ModelObj, _super);
    function ModelObj(model) {
        var _this = _super.call(this) || this;
        _this.model = model;
        return _this;
    }
    ModelObj.prototype.render = function (viewport, shader) {
        shader.use();
        this.setViewMatrices(viewport);
        this.model.render();
        shader.unuse();
    };
    return ModelObj;
}(object_1.default));
exports.default = ModelObj;


/***/ }),

/***/ "./src/renderer/events.ts":
/*!********************************!*\
  !*** ./src/renderer/events.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ulist_1 = __webpack_require__(/*! ../util/ulist */ "./src/util/ulist.ts");
var Event = /** @class */ (function () {
    function Event(event, elem) {
        this.event = event;
        this.elem = elem;
    }
    Event.prototype.cancel = function () {
        document.removeEventListener(this.event, this.elem.get());
        this.elem.remove();
    };
    return Event;
}());
exports.Event = Event;
var EventList = /** @class */ (function () {
    function EventList() {
        this.events = new ulist_1.ulist();
    }
    EventList.prototype.addEvent = function (event, callback) {
        document.addEventListener(event, callback);
        return new Event(event, this.events.push(callback));
    };
    return EventList;
}());
exports.EventList = EventList;


/***/ }),

/***/ "./src/renderer/renderer.ts":
/*!**********************************!*\
  !*** ./src/renderer/renderer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ulist_1 = __webpack_require__(/*! ../util/ulist */ "./src/util/ulist.ts");
var events_1 = __webpack_require__(/*! ./events */ "./src/renderer/events.ts");
var gl;
exports.gl = gl;
var gl2;
exports.gl2 = gl2;
var RenderEvent = /** @class */ (function () {
    function RenderEvent(elem) {
        this.elem = elem;
    }
    RenderEvent.prototype.cancel = function () {
        this.elem.remove();
    };
    return RenderEvent;
}());
var Renderer = /** @class */ (function () {
    function Renderer(container, fallback) {
        if (fallback === void 0) { fallback = false; }
        this.fps = 0;
        this.events = new events_1.EventList();
        this.renderers = new ulist_1.ulist();
        if (Renderer.context != null) {
            throw "Multiple WebGL contexts not supported.";
        }
        else {
            this.canvasWrapper = document.createElement("div");
            this.canvas = document.createElement("canvas");
            this.canvasWrapper.style.width = "100%";
            this.canvasWrapper.style.height = "100%";
            this.canvas.width = container.clientWidth;
            this.canvas.height = container.clientHeight;
            this.canvasWrapper.appendChild(this.canvas);
            this.canvasWrapper.style["text-align"] = "center";
            this.canvasWrapper.style["overflow"] = "hidden";
            container.appendChild(this.canvasWrapper);
            try {
                fallback = fallback || (navigator.userAgent.indexOf("Mac OS X") > 0);
                if (!fallback) {
                    exports.gl2 = gl2 = this.canvas.getContext("webgl2"); // || canvas.getContext("experimental-webgl");
                }
                if (!gl2) {
                    exports.gl = gl = this.canvas.getContext("webgl")
                        || this.canvas.getContext("experimental-webgl");
                    if (!gl) {
                        throw "";
                    }
                    else {
                        console.warn("webgl 2.0 is not supported on your browser, fallback to webgl 1.0.");
                    }
                }
                else {
                    exports.gl = gl = gl2;
                }
            }
            catch (e) {
                console.error("webgl is not supported on your browser. " + e);
                throw "webgl is not supported on your browser. " + e;
            }
        }
        Renderer.context = this;
    }
    Object.defineProperty(Renderer, "instance", {
        get: function () {
            if (Renderer.context) {
                return Renderer.context;
            }
            else {
                throw "no current renderer.";
            }
        },
        enumerable: true,
        configurable: true
    });
    Renderer.prototype.dispatch = function (eventType, callback) {
        if (eventType == "render") {
            return new RenderEvent(this.renderers.push(callback));
        }
        else {
            return this.events.addEvent(eventType, callback);
        }
    };
    Renderer.prototype.start = function () {
        this.animationRequest = window.requestAnimationFrame(this.render.bind(this));
    };
    Renderer.prototype.render = function (time) {
        this.renderers.visit(function (e) {
            try {
                e.get()();
            }
            catch (err) {
                console.error(err);
            }
        });
        if (Math.floor(time / 1000) > Renderer.prevTime) {
            console.log("fps:", this.fps + 1);
            Renderer.prevTime = Math.floor(time / 1000);
            this.fps = 0;
        }
        this.fps += 1;
        this.animationRequest = window.requestAnimationFrame(this.render.bind(this));
    };
    Renderer.context = null;
    Renderer.prevTime = 0;
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/scene/object.ts":
/*!*****************************!*\
  !*** ./src/scene/object.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var glm_1 = __webpack_require__(/*! ../util/glm */ "./src/util/glm.js");
var shader_1 = __webpack_require__(/*! ../gl/shader */ "./src/gl/shader.ts");
var ObjBase = /** @class */ (function () {
    function ObjBase() {
        this.P = glm_1.glm.vec3(0, 0, 0);
        this.S = glm_1.glm.vec3(1, 1, 1);
        this.R = glm_1.glm.vec3(0, 0, 0);
        this.translateModified = true;
        this.scaleModified = true;
        this.rotateModified = true;
    }
    ObjBase.prototype.scaleIdentity = function () {
        this.S = glm_1.glm.vec3(1, 1, 1);
        this.scaleModified = true;
    };
    ObjBase.prototype.scale = function (factor) {
        this.S["*="](factor);
        this.scaleModified = true;
    };
    Object.defineProperty(ObjBase.prototype, "scaleFactor", {
        set: function (factor) {
            if (typeof factor == "number") {
                this.S = glm_1.glm.vec3(factor, factor, factor);
            }
            else {
                this.S = factor;
            }
            this.scaleModified = true;
        },
        enumerable: true,
        configurable: true
    });
    ObjBase.prototype.translateIdentity = function () {
        this.P = glm_1.glm.vec3(0, 0, 0);
        this.translateModified = true;
    };
    ObjBase.prototype.translate = function (diff) {
        this.P["+="](diff);
        this.translateModified = true;
    };
    Object.defineProperty(ObjBase.prototype, "position", {
        get: function () {
            return this.P;
        },
        set: function (pos) {
            this.P = pos;
            this.translateModified = true;
        },
        enumerable: true,
        configurable: true
    });
    ObjBase.prototype.rotateIdentity = function () {
        this.R = glm_1.glm.vec3(0, 0, 0);
        this.rotateModified = true;
    };
    ObjBase.prototype.rotate = function (angle) {
        this.R["+="](angle);
        this.rotateModified = true;
    };
    ObjBase.prototype.getTrans = function () {
        if (this.translateModified || this.scaleModified || this.rotateModified) {
            if (this.translateModified) {
                this.translateModified = false;
                this.translateTrans = glm_1.glm.mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.P.x, this.P.y, this.P.z, 1);
            }
            if (this.rotateModified) {
                this.rotateModified = false;
                var sinx = Math.sin(this.R.x), siny = Math.sin(this.R.y), sinz = Math.sin(this.R.z), cosx = Math.cos(this.R.x), cosy = Math.cos(this.R.y), cosz = Math.cos(this.R.z), sycz = siny * cosz, sysz = siny * sinz;
                this.rotateTrans = glm_1.glm.mat4(cosz * cosy, sinz * cosy, siny, 0, -cosx * sinz - sinx * sycz, cosx * cosz - sinx * sysz, sinx * cosy, 0, sinx * sinz - cosx * sycz, -sinx * cosz - cosx * sysz, cosx * cosy, 0, 0, 0, 0, 1);
            }
            if (this.scaleModified) {
                this.scaleModified = false;
                this.scaleTrans = glm_1.glm.mat4(this.S.x, 0, 0, 0, 0, this.S.y, 0, 0, 0, 0, this.S.z, 0, 0, 0, 0, 1);
            }
            this.trans = this.translateTrans["*"](this.rotateTrans["*"](this.scaleTrans));
        }
        return this.trans;
    };
    return ObjBase;
}());
var Obj = /** @class */ (function (_super) {
    __extends(Obj, _super);
    function Obj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Obj.prototype.setViewMatrices = function (viewport) {
        Obj.gWVP.set(viewport.getTrans()["*"](this.getTrans()));
        Obj.gWorld.set(this.getTrans());
        Obj.gVP.set(viewport.getTrans());
        Obj.gCameraWorldPos.set(viewport.position);
    };
    Obj.gWVP = shader_1.Shader.uniform("mat4", "gWVP");
    Obj.gWorld = shader_1.Shader.uniform("mat4", "gWorld");
    Obj.gVP = shader_1.Shader.uniform("mat4", "gVP");
    Obj.gCameraWorldPos = shader_1.Shader.uniform("vec3", "gCameraWorldPos");
    return Obj;
}(ObjBase));
exports.default = Obj;


/***/ }),

/***/ "./src/scene/scene.ts":
/*!****************************!*\
  !*** ./src/scene/scene.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ulist_1 = __webpack_require__(/*! ../util/ulist */ "./src/util/ulist.ts");
var shader_1 = __webpack_require__(/*! ../gl/shader */ "./src/gl/shader.ts");
var communicator_1 = __webpack_require__(/*! ../gl/communicator */ "./src/gl/communicator.ts");
var renderer_1 = __webpack_require__(/*! ../renderer/renderer */ "./src/renderer/renderer.ts");
var Scene = /** @class */ (function () {
    function Scene() {
        this.objects = new ulist_1.ulist();
        this.viewports = new ulist_1.ulist();
        this.techniques = new ulist_1.ulist();
        this.communicators = new communicator_1.Communicators();
        this.shader = shader_1.Shader.create("test");
    }
    Scene.prototype.createObject = function (object) {
        return this.objects.push(object).translate();
    };
    Scene.prototype.createViewport = function (viewport) {
        return this.viewports.push(viewport).translate();
    };
    Scene.prototype.createCommunicator = function (communicator) {
        return this.communicators.add(communicator).translate();
    };
    Scene.prototype.createTechnique = function (technique) {
        return this.techniques.push(technique).translate();
    };
    Scene.prototype.render = function () {
        var _this = this;
        this.techniques.visit(function (e) {
            e.get().render(_this.objects, _this.viewports, _this.communicators);
        });
        renderer_1.gl.clear(renderer_1.gl.COLOR_BUFFER_BIT | renderer_1.gl.DEPTH_BUFFER_BIT);
        this.techniques.visit(function (e) {
            e.get().mainImage(_this.objects, _this.viewports, _this.communicators);
        });
        this.communicators.use();
        this.viewports.visit(function (v) {
            _this.objects.visit(function (e) {
                e.get().render(v.get(), _this.shader);
            });
        });
        this.communicators.unuse();
    };
    return Scene;
}());
exports.default = Scene;


/***/ }),

/***/ "./src/scene/technique.ts":
/*!********************************!*\
  !*** ./src/scene/technique.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Technique = /** @class */ (function () {
    function Technique() {
    }
    return Technique;
}());
exports.Technique = Technique;


/***/ }),

/***/ "./src/scene/viewport.ts":
/*!*******************************!*\
  !*** ./src/scene/viewport.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var glm_1 = __webpack_require__(/*! ../util/glm */ "./src/util/glm.js");
var renderer_1 = __webpack_require__(/*! ../renderer/renderer */ "./src/renderer/renderer.ts");
var Viewport = /** @class */ (function () {
    function Viewport(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.N = glm_1.glm.vec3(0, 1, 0);
        this.P = glm_1.glm.vec3(0, 0, 0);
        this.Up = glm_1.glm.vec3(0, 0, 1);
        this.rotateModified = true;
        this.translateModified = true;
        if (left != undefined) {
            renderer_1.gl.viewport(left, top, width, height);
        }
        else {
            this.left = 0;
            this.top = 0;
            this.width = renderer_1.Renderer.instance.canvas.width;
            this.height = renderer_1.Renderer.instance.canvas.height;
        }
    }
    Object.defineProperty(Viewport.prototype, "target", {
        get: function () {
            return this.N;
        },
        set: function (target) {
            this.N = glm_1.glm.normalize(target);
            this.rotateModified = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "up", {
        get: function () {
            return this.Up;
        },
        set: function (up) {
            this.Up = glm_1.glm.normalize(up);
            this.rotateModified = true;
        },
        enumerable: true,
        configurable: true
    });
    Viewport.prototype.translate = function (diff) {
        this.P["+="](diff);
        this.translateModified = true;
    };
    Object.defineProperty(Viewport.prototype, "position", {
        get: function () {
            return this.P;
        },
        set: function (position) {
            this.P = position;
            this.translateModified = true;
        },
        enumerable: true,
        configurable: true
    });
    Viewport.prototype.getTrans = function () {
        if (this.translateModified || this.rotateModified) {
            if (this.translateModified) {
                this.translateModified = false;
                this.translateTrans = glm_1.glm.mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -this.P.x, -this.P.y, -this.P.z, 1);
            }
            if (this.rotateModified) {
                this.rotateModified = false;
                var U = glm_1.glm.normalize(glm_1.glm.cross(this.N, this.Up));
                var V = glm_1.glm.cross(U, this.N);
                this.rotateTrans = glm_1.glm.mat4(U.x, V.x, -this.N.x, 0, U.y, V.y, -this.N.y, 0, U.z, V.z, -this.N.z, 0, 0, 0, 0, 1);
            }
            this.trans = this.rotateTrans["*"](this.translateTrans);
        }
        return this.trans;
    };
    Viewport.prototype.modified = function () {
        return this.translateModified || this.rotateModified;
    };
    return Viewport;
}());
exports.Viewport = Viewport;
var PerspectiveViewport = /** @class */ (function (_super) {
    __extends(PerspectiveViewport, _super);
    function PerspectiveViewport(left, top, width, height) {
        var _this = _super.call(this, left, top, width, height) || this;
        _this.perspectiveModified = true;
        _this.ffov = glm_1.glm.radians(60);
        _this.fzNear = 1e-3;
        _this.fzFar = 1e5;
        return _this;
    }
    PerspectiveViewport.prototype.getTrans = function () {
        if (this.perspectiveModified || _super.prototype.modified.call(this)) {
            if (this.perspectiveModified) {
                this.perspectiveModified = false;
                this.perspectiveTrans = glm_1.glm.perspective(this.ffov, this.width / this.height, this.fzNear, this.fzFar);
            }
            this.viewportTrans = this.perspectiveTrans["*"](_super.prototype.getTrans.call(this));
        }
        return this.viewportTrans;
    };
    Object.defineProperty(PerspectiveViewport.prototype, "fov", {
        get: function () {
            return this.ffov;
        },
        set: function (angle) {
            this.ffov = angle;
            this.perspectiveModified = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerspectiveViewport.prototype, "zNear", {
        get: function () {
            return this.fzNear;
        },
        set: function (z) {
            this.fzNear = z;
            this.perspectiveModified = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerspectiveViewport.prototype, "zFar", {
        get: function () {
            return this.fzFar;
        },
        set: function (z) {
            this.fzFar = z;
            this.perspectiveModified = true;
        },
        enumerable: true,
        configurable: true
    });
    return PerspectiveViewport;
}(Viewport));
exports.PerspectiveViewport = PerspectiveViewport;


/***/ }),

/***/ "./src/techniques/lighting.ts":
/*!************************************!*\
  !*** ./src/techniques/lighting.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var communicator_1 = __webpack_require__(/*! ../gl/communicator */ "./src/gl/communicator.ts");
var glm_1 = __webpack_require__(/*! ../util/glm */ "./src/util/glm.js");
var LightBase = /** @class */ (function (_super) {
    __extends(LightBase, _super);
    function LightBase(type) {
        if (type === void 0) { type = undefined; }
        var _this = _super.call(this, type ? type : "LightBase") || this;
        _this.init({
            color: {
                type: "vec3",
                init: glm_1.glm.vec3(1, 1, 1)
            },
            ambientIntensity: {
                type: "float",
                init: .5
            },
            diffuseIntensity: {
                type: "float",
                init: 1
            }
        });
        return _this;
    }
    return LightBase;
}(communicator_1.Communicator));
var PointLight = /** @class */ (function (_super) {
    __extends(PointLight, _super);
    function PointLight(type) {
        if (type === void 0) { type = undefined; }
        var _this = _super.call(this, type ? type : "PointLight") || this;
        _this.init({
            attenConstant: {
                type: "float",
                init: 1
            },
            attenLinear: {
                type: "float",
                init: .5
            },
            attenExp: {
                type: "float",
                init: .5
            },
            position: {
                type: "vec3",
                init: glm_1.glm.vec3(0, 0, 1)
            }
        });
        return _this;
    }
    return PointLight;
}(LightBase));
exports.PointLight = PointLight;


/***/ }),

/***/ "./src/techniques/offscreen.ts":
/*!*************************************!*\
  !*** ./src/techniques/offscreen.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buffer_1 = __webpack_require__(/*! ../gl/buffer */ "./src/gl/buffer.ts");
var renderer_1 = __webpack_require__(/*! ../renderer/renderer */ "./src/renderer/renderer.ts");
// class SingleChannelFBRB {
// 	private rbo = new RBO();
// 	private dbo = new RBO();
// 	private fbo = new FBO();
// 	constructor() {
// 		this.fbo.bind();
// 			this.rbo.bind();
// 				if (gl2) {
// 					gl.renderbufferStorage(gl.RENDERBUFFER, gl2.R32F, 
// 						Renderer.instance.canvas.width, Renderer.instance.canvas.height);
// 				} else {
// 					gl.renderbufferStorage(gl.RENDERBUFFER, gl2.RGB, 
// 						Renderer.instance.canvas.width, Renderer.instance.canvas.height);
// 				}
// 				this.fbo.setRenderBuffer(this.rbo, gl.COLOR_ATTACHMENT0);
// 			this.rbo.unbind();
// 			this.dbo.bind();
// 				gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT,
// 					Renderer.instance.canvas.width, Renderer.instance.canvas.height);
// 				this.fbo.setRenderBuffer(this.dbo, gl.DEPTH_ATTACHMENT);
// 			this.dbo.unbind();
// 		this.fbo.unbind();
// 	}
// 	bind() {
// 		this.fbo.bind();
// 	}
// 	unbind() {
// 		this.rbo.bind();
// 	}
// }
var RenderBuffer = /** @class */ (function () {
    function RenderBuffer(component, width, height) {
        this.type = "renderbuffer";
        this.rbo = new buffer_1.RBO();
        if (width == undefined) {
            width = renderer_1.Renderer.instance.canvas.width;
            height = renderer_1.Renderer.instance.canvas.height;
        }
        this.rbo.bind();
        renderer_1.gl.renderbufferStorage(renderer_1.gl.RENDERBUFFER, component, width, height);
        this.rbo.unbind();
    }
    return RenderBuffer;
}());
exports.RenderBuffer = RenderBuffer;
var Offscreen = /** @class */ (function () {
    function Offscreen() {
        this.fbo = new buffer_1.FBO();
    }
    Offscreen.prototype.set = function (channel, second, face) {
        if (second.type == "renderbuffer") {
            var renderbuffer = second;
            renderer_1.gl.framebufferRenderbuffer(renderer_1.gl.FRAMEBUFFER, channel, renderer_1.gl.RENDERBUFFER, renderbuffer.rbo.handle);
        }
        else {
            var texture = second;
            switch (texture.type) {
                case renderer_1.gl.TEXTURE_2D:
                    {
                        renderer_1.gl.framebufferTexture2D(renderer_1.gl.FRAMEBUFFER, channel, renderer_1.gl.TEXTURE_2D, texture.handle, 0);
                    }
                    break;
                case renderer_1.gl.TEXTURE_CUBE_MAP:
                    {
                        renderer_1.gl.framebufferTexture2D(renderer_1.gl.FRAMEBUFFER, channel, renderer_1.gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, texture.handle, 0);
                    }
                    break;
            }
        }
    };
    Offscreen.prototype.bind = function () {
        this.fbo.bind();
    };
    Offscreen.prototype.unbind = function () {
        this.fbo.unbind();
    };
    Offscreen.prototype.check = function () {
        this.fbo.check();
    };
    return Offscreen;
}());
exports.Offscreen = Offscreen;


/***/ }),

/***/ "./src/techniques/shadow.ts":
/*!**********************************!*\
  !*** ./src/techniques/shadow.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var viewport_1 = __webpack_require__(/*! ../scene/viewport */ "./src/scene/viewport.ts");
var shader_1 = __webpack_require__(/*! ../gl/shader */ "./src/gl/shader.ts");
var offscreen_1 = __webpack_require__(/*! ../techniques/offscreen */ "./src/techniques/offscreen.ts");
var communicator_1 = __webpack_require__(/*! ../gl/communicator */ "./src/gl/communicator.ts");
var renderer_1 = __webpack_require__(/*! ../renderer/renderer */ "./src/renderer/renderer.ts");
var texture_1 = __webpack_require__(/*! ../gl/texture */ "./src/gl/texture.ts");
var glm_1 = __webpack_require__(/*! ../util/glm */ "./src/util/glm.js");
var technique_1 = __webpack_require__(/*! ../scene/technique */ "./src/scene/technique.ts");
var ShadowCommunicator = /** @class */ (function (_super) {
    __extends(ShadowCommunicator, _super);
    function ShadowCommunicator() {
        var _this = _super.call(this, "Shadow") || this;
        _this.init({
            ShadowMap: {
                type: "int",
                init: 0
            }
        });
        return _this;
    }
    return ShadowCommunicator;
}(communicator_1.Communicator));
var ShadowTechnique = /** @class */ (function (_super) {
    __extends(ShadowTechnique, _super);
    function ShadowTechnique() {
        var _this = _super.call(this) || this;
        _this.offscreen = new offscreen_1.Offscreen();
        _this.shader = shader_1.Shader.create("shadow");
        _this.communicator = null;
        _this.gShadowMap = new ShadowCommunicator();
        _this.shadowTexture = new texture_1.TextureCube(renderer_1.gl.RGB);
        _this.lightCamera = new viewport_1.Viewport();
        _this.offscreen.bind();
        _this.offscreen.set(renderer_1.gl.DEPTH_ATTACHMENT, new offscreen_1.RenderBuffer(renderer_1.gl.DEPTH_COMPONENT16, renderer_1.Renderer.instance.canvas.height, renderer_1.Renderer.instance.canvas.height));
        _this.offscreen.unbind();
        return _this;
    }
    ShadowTechnique.prototype.render = function (objects, viewports, communicators) {
        var _this = this;
        renderer_1.gl.cullFace(renderer_1.gl.FRONT);
        renderer_1.gl.clearColor(1, 1, 1, 1);
        this.offscreen.bind();
        communicators.use();
        for (var i = 0; i != 6; ++i) {
            this.offscreen.set(renderer_1.gl.COLOR_ATTACHMENT0, this.shadowTexture, i);
            // this.offscreen.check();
            renderer_1.gl.clear(renderer_1.gl.DEPTH_BUFFER_BIT | renderer_1.gl.COLOR_BUFFER_BIT);
            _a = ShadowTechnique.cameraPositions[i], this.lightCamera.target = _a[0], this.lightCamera.up = _a[1];
            objects.visit(function (e) {
                e.get().render(_this.lightCamera, _this.shader);
            });
        }
        communicators.unuse();
        this.offscreen.unbind();
        renderer_1.gl.clearColor(0, 0, 0, 0);
        renderer_1.gl.cullFace(renderer_1.gl.BACK);
        var _a;
    };
    ShadowTechnique.prototype.mainImage = function (objects, viewports, communicators) {
        if (this.communicator != null) {
            this.communicator.remove();
        }
        this.communicator = communicators.add(this.gShadowMap);
    };
    ShadowTechnique.cameraPositions = [
        [glm_1.glm.vec3(1, 0, 0), glm_1.glm.vec3(0, -1, 0)],
        [glm_1.glm.vec3(-1, 0, 0), glm_1.glm.vec3(0, -1, 0)],
        [glm_1.glm.vec3(0, 1, 0), glm_1.glm.vec3(0, 0, 1)],
        [glm_1.glm.vec3(0, -1, 0), glm_1.glm.vec3(0, 0, -1)],
        [glm_1.glm.vec3(0, 0, 1), glm_1.glm.vec3(0, -1, 0)],
        [glm_1.glm.vec3(0, 0, -1), glm_1.glm.vec3(0, -1, 0)]
    ];
    return ShadowTechnique;
}(technique_1.Technique));
exports.ShadowTechnique = ShadowTechnique;


/***/ }),

/***/ "./src/util/assets.ts":
/*!****************************!*\
  !*** ./src/util/assets.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xhr_1 = __webpack_require__(/*! ../util/xhr */ "./src/util/xhr.ts");
var assets = /** @class */ (function () {
    function assets() {
    }
    assets.importObj = function (filename) {
    };
    assets.importJson = function (filename) {
        try {
            var src = xhr_1.default.getSync(filename);
            return JSON.parse(src);
        }
        catch (e) {
            throw "failed to import asset due to previous errors: " + e;
        }
    };
    assets.import = function (filename) {
        var format = filename.substring(filename.lastIndexOf('.') + 1);
        format = format.toLowerCase();
        switch (format) {
            case "json": return assets.importJson(filename);
            case "obj": return assets.importObj(filename);
            default: throw "unknown model format: " + format;
        }
    };
    return assets;
}());
exports.default = assets;


/***/ }),

/***/ "./src/util/glm.js":
/*!*************************!*\
  !*** ./src/util/glm.js ***!
  \*************************/
/*! exports provided: glm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glm", function() { return glm; });
/*! glm-js built 2017-04-02 11:34:38-04:00 | (c) humbletim | http://humbletim.github.io/glm-js */
let glm = (function declare_glmjs_glmatrix(globals, $GLM_log, $GLM_console_log) { var GLM, GLMAT, GLMAT_VERSION, GLMJS_PREFIX, $GLM_console_factory, glm; ArrayBuffer.exists;
	/*
	
	 --------------------------------------------------------------------------
	 glm-js | (c) humbletim | http://humbletim.github.io/glm-js
	 --------------------------------------------------------------------------
	
	 The MIT License (MIT)
	
	 Copyright (c) 2015-2016 humbletim
	
	 Permission is hereby granted, free of charge, to any person obtaining a copy
	 of this software and associated documentation files (the "Software"), to deal
	 in the Software without restriction, including without limitation the rights
	 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 copies of the Software, and to permit persons to whom the Software is
	 furnished to do so, subject to the following conditions:
	
	 The above copyright notice and this permission notice shall be included in all
	 copies or substantial portions of the Software.
	
	 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 SOFTWARE.
	
	 --------------------------------------------------------------------------
	 gl-matrix | (c) Brandon Jones, Colin MacKenzie IV | http://glmatrix.net/
	 --------------------------------------------------------------------------
	
	 Copyright (c) 2013 Brandon Jones, Colin MacKenzie IV
	
	 This software is provided 'as-is', without any express or implied
	 warranty. In no event will the authors be held liable for any damages
	 arising from the use of this software.
	
	 Permission is granted to anyone to use this software for any purpose,
	 including commercial applications, and to alter it and redistribute it
	 freely, subject to the following restrictions:
	
	  1. The origin of this software must not be misrepresented; you must not
		 claim that you wrote the original software. If you use this software
		 in a product, an acknowledgment in the product documentation would be
		 appreciated but is not required.
	
	  2. Altered source versions must be plainly marked as such, and must not
		 be misrepresented as being the original software.
	
	  3. This notice may not be removed or altered from any source distribution.
	*/
	GLMAT={};GLMAT_VERSION="2.2.2";
	(function(a){a.VERSION=GLMAT_VERSION;if(!b)var b=1E-6;if(!c)var c="undefined"!==typeof Float32Array?Float32Array:Array;if(!e)var e=Math.random;var d={setMatrixArrayType:function(y){c=y}};"undefined"!==typeof a&&(a.glMatrix=d);var h=Math.PI/180;d.toRadian=function(y){return y*h};d={create:function(){var y=new c(2);y[0]=0;y[1]=0;return y},clone:function(y){var a=new c(2);a[0]=y[0];a[1]=y[1];return a},fromValues:function(y,a){var v=new c(2);v[0]=y;v[1]=a;return v},copy:function(y,a){y[0]=a[0];y[1]=a[1];
	return y},set:function(y,a,v){y[0]=a;y[1]=v;return y},add:function(y,a,v){y[0]=a[0]+v[0];y[1]=a[1]+v[1];return y},subtract:function(y,a,v){y[0]=a[0]-v[0];y[1]=a[1]-v[1];return y}};d.sub=d.subtract;d.multiply=function(y,a,v){y[0]=a[0]*v[0];y[1]=a[1]*v[1];return y};d.mul=d.multiply;d.divide=function(y,a,v){y[0]=a[0]/v[0];y[1]=a[1]/v[1];return y};d.div=d.divide;d.min=function(y,a,v){y[0]=Math.min(a[0],v[0]);y[1]=Math.min(a[1],v[1]);return y};d.max=function(y,a,v){y[0]=Math.max(a[0],v[0]);y[1]=Math.max(a[1],
	v[1]);return y};d.scale=function(y,a,v){y[0]=a[0]*v;y[1]=a[1]*v;return y};d.scaleAndAdd=function(y,a,v,b){y[0]=a[0]+v[0]*b;y[1]=a[1]+v[1]*b;return y};d.distance=function(a,f){var v=f[0]-a[0],b=f[1]-a[1];return Math.sqrt(v*v+b*b)};d.dist=d.distance;d.squaredDistance=function(a,f){var v=f[0]-a[0],b=f[1]-a[1];return v*v+b*b};d.sqrDist=d.squaredDistance;d.length=function(a){var f=a[0];a=a[1];return Math.sqrt(f*f+a*a)};d.len=d.length;d.squaredLength=function(a){var f=a[0];a=a[1];return f*f+a*a};d.sqrLen=
	d.squaredLength;d.negate=function(a,f){a[0]=-f[0];a[1]=-f[1];return a};d.inverse=function(a,f){a[0]=1/f[0];a[1]=1/f[1];return a};d.normalize=function(a,f){var v=f[0],b=f[1],v=v*v+b*b;0<v&&(v=1/Math.sqrt(v),a[0]=f[0]*v,a[1]=f[1]*v);return a};d.dot=function(a,f){return a[0]*f[0]+a[1]*f[1]};d.cross=function(a,f,v){f=f[0]*v[1]-f[1]*v[0];a[0]=a[1]=0;a[2]=f;return a};d.lerp=function(a,f,v,b){var c=f[0];f=f[1];a[0]=c+b*(v[0]-c);a[1]=f+b*(v[1]-f);return a};d.random=function(a,f){f=f||1;var v=2*e()*Math.PI;
	a[0]=Math.cos(v)*f;a[1]=Math.sin(v)*f;return a};d.transformMat2=function(a,f,v){var b=f[0];f=f[1];a[0]=v[0]*b+v[2]*f;a[1]=v[1]*b+v[3]*f;return a};d.transformMat2d=function(a,f,v){var b=f[0];f=f[1];a[0]=v[0]*b+v[2]*f+v[4];a[1]=v[1]*b+v[3]*f+v[5];return a};d.transformMat3=function(a,f,b){var c=f[0];f=f[1];a[0]=b[0]*c+b[3]*f+b[6];a[1]=b[1]*c+b[4]*f+b[7];return a};d.transformMat4=function(a,f,b){var c=f[0];f=f[1];a[0]=b[0]*c+b[4]*f+b[12];a[1]=b[1]*c+b[5]*f+b[13];return a};var j=d.create();d.forEach=function(a,
	f,b,c,d,e){f||(f=2);b||(b=0);for(c=c?Math.min(c*f+b,a.length):a.length;b<c;b+=f)j[0]=a[b],j[1]=a[b+1],d(j,j,e),a[b]=j[0],a[b+1]=j[1];return a};d.str=function(a){return"vec2("+a[0]+", "+a[1]+")"};"undefined"!==typeof a&&(a.vec2=d);var g={create:function(){var a=new c(3);a[0]=0;a[1]=0;a[2]=0;return a},clone:function(a){var f=new c(3);f[0]=a[0];f[1]=a[1];f[2]=a[2];return f},fromValues:function(a,f,b){var P=new c(3);P[0]=a;P[1]=f;P[2]=b;return P},copy:function(a,f){a[0]=f[0];a[1]=f[1];a[2]=f[2];return a},
	set:function(a,f,b,c){a[0]=f;a[1]=b;a[2]=c;return a},add:function(a,f,b){a[0]=f[0]+b[0];a[1]=f[1]+b[1];a[2]=f[2]+b[2];return a},subtract:function(a,f,b){a[0]=f[0]-b[0];a[1]=f[1]-b[1];a[2]=f[2]-b[2];return a}};g.sub=g.subtract;g.multiply=function(a,f,b){a[0]=f[0]*b[0];a[1]=f[1]*b[1];a[2]=f[2]*b[2];return a};g.mul=g.multiply;g.divide=function(a,f,b){a[0]=f[0]/b[0];a[1]=f[1]/b[1];a[2]=f[2]/b[2];return a};g.div=g.divide;g.min=function(a,f,b){a[0]=Math.min(f[0],b[0]);a[1]=Math.min(f[1],b[1]);a[2]=Math.min(f[2],
	b[2]);return a};g.max=function(a,f,b){a[0]=Math.max(f[0],b[0]);a[1]=Math.max(f[1],b[1]);a[2]=Math.max(f[2],b[2]);return a};g.scale=function(a,f,b){a[0]=f[0]*b;a[1]=f[1]*b;a[2]=f[2]*b;return a};g.scaleAndAdd=function(a,f,b,c){a[0]=f[0]+b[0]*c;a[1]=f[1]+b[1]*c;a[2]=f[2]+b[2]*c;return a};g.distance=function(a,f){var b=f[0]-a[0],c=f[1]-a[1],d=f[2]-a[2];return Math.sqrt(b*b+c*c+d*d)};g.dist=g.distance;g.squaredDistance=function(a,f){var b=f[0]-a[0],c=f[1]-a[1],d=f[2]-a[2];return b*b+c*c+d*d};g.sqrDist=
	g.squaredDistance;g.length=function(a){var f=a[0],b=a[1];a=a[2];return Math.sqrt(f*f+b*b+a*a)};g.len=g.length;g.squaredLength=function(a){var f=a[0],b=a[1];a=a[2];return f*f+b*b+a*a};g.sqrLen=g.squaredLength;g.negate=function(a,f){a[0]=-f[0];a[1]=-f[1];a[2]=-f[2];return a};g.inverse=function(a,f){a[0]=1/f[0];a[1]=1/f[1];a[2]=1/f[2];return a};g.normalize=function(a,f){var b=f[0],c=f[1],d=f[2],b=b*b+c*c+d*d;0<b&&(b=1/Math.sqrt(b),a[0]=f[0]*b,a[1]=f[1]*b,a[2]=f[2]*b);return a};g.dot=function(a,f){return a[0]*
	f[0]+a[1]*f[1]+a[2]*f[2]};g.cross=function(a,f,b){var c=f[0],d=f[1];f=f[2];var e=b[0],l=b[1];b=b[2];a[0]=d*b-f*l;a[1]=f*e-c*b;a[2]=c*l-d*e;return a};g.lerp=function(a,f,b,c){var d=f[0],e=f[1];f=f[2];a[0]=d+c*(b[0]-d);a[1]=e+c*(b[1]-e);a[2]=f+c*(b[2]-f);return a};g.random=function(a,f){f=f||1;var b=2*e()*Math.PI,c=2*e()-1,d=Math.sqrt(1-c*c)*f;a[0]=Math.cos(b)*d;a[1]=Math.sin(b)*d;a[2]=c*f;return a};g.transformMat4=function(a,f,b){var c=f[0],d=f[1];f=f[2];var e=b[3]*c+b[7]*d+b[11]*f+b[15],e=e||1;a[0]=
	(b[0]*c+b[4]*d+b[8]*f+b[12])/e;a[1]=(b[1]*c+b[5]*d+b[9]*f+b[13])/e;a[2]=(b[2]*c+b[6]*d+b[10]*f+b[14])/e;return a};g.transformMat3=function(a,f,b){var c=f[0],d=f[1];f=f[2];a[0]=c*b[0]+d*b[3]+f*b[6];a[1]=c*b[1]+d*b[4]+f*b[7];a[2]=c*b[2]+d*b[5]+f*b[8];return a};g.transformQuat=function(a,f,b){var c=f[0],d=f[1],e=f[2];f=b[0];var l=b[1],x=b[2];b=b[3];var u=b*c+l*e-x*d,J=b*d+x*c-f*e,g=b*e+f*d-l*c,c=-f*c-l*d-x*e;a[0]=u*b+c*-f+J*-x-g*-l;a[1]=J*b+c*-l+g*-f-u*-x;a[2]=g*b+c*-x+u*-l-J*-f;return a};g.rotateX=
	function(a,f,b,c){var d=[],e=[];d[0]=f[0]-b[0];d[1]=f[1]-b[1];d[2]=f[2]-b[2];e[0]=d[0];e[1]=d[1]*Math.cos(c)-d[2]*Math.sin(c);e[2]=d[1]*Math.sin(c)+d[2]*Math.cos(c);a[0]=e[0]+b[0];a[1]=e[1]+b[1];a[2]=e[2]+b[2];return a};g.rotateY=function(a,f,b,c){var d=[],e=[];d[0]=f[0]-b[0];d[1]=f[1]-b[1];d[2]=f[2]-b[2];e[0]=d[2]*Math.sin(c)+d[0]*Math.cos(c);e[1]=d[1];e[2]=d[2]*Math.cos(c)-d[0]*Math.sin(c);a[0]=e[0]+b[0];a[1]=e[1]+b[1];a[2]=e[2]+b[2];return a};g.rotateZ=function(a,f,b,c){var d=[],e=[];d[0]=f[0]-
	b[0];d[1]=f[1]-b[1];d[2]=f[2]-b[2];e[0]=d[0]*Math.cos(c)-d[1]*Math.sin(c);e[1]=d[0]*Math.sin(c)+d[1]*Math.cos(c);e[2]=d[2];a[0]=e[0]+b[0];a[1]=e[1]+b[1];a[2]=e[2]+b[2];return a};var k=g.create();g.forEach=function(a,f,b,c,d,e){f||(f=3);b||(b=0);for(c=c?Math.min(c*f+b,a.length):a.length;b<c;b+=f)k[0]=a[b],k[1]=a[b+1],k[2]=a[b+2],d(k,k,e),a[b]=k[0],a[b+1]=k[1],a[b+2]=k[2];return a};g.str=function(a){return"vec3("+a[0]+", "+a[1]+", "+a[2]+")"};"undefined"!==typeof a&&(a.vec3=g);var i={create:function(){var a=
	new c(4);a[0]=0;a[1]=0;a[2]=0;a[3]=0;return a},clone:function(a){var f=new c(4);f[0]=a[0];f[1]=a[1];f[2]=a[2];f[3]=a[3];return f},fromValues:function(a,f,b,d){var e=new c(4);e[0]=a;e[1]=f;e[2]=b;e[3]=d;return e},copy:function(a,f){a[0]=f[0];a[1]=f[1];a[2]=f[2];a[3]=f[3];return a},set:function(a,f,b,c,d){a[0]=f;a[1]=b;a[2]=c;a[3]=d;return a},add:function(a,f,b){a[0]=f[0]+b[0];a[1]=f[1]+b[1];a[2]=f[2]+b[2];a[3]=f[3]+b[3];return a},subtract:function(a,f,b){a[0]=f[0]-b[0];a[1]=f[1]-b[1];a[2]=f[2]-b[2];
	a[3]=f[3]-b[3];return a}};i.sub=i.subtract;i.multiply=function(a,f,b){a[0]=f[0]*b[0];a[1]=f[1]*b[1];a[2]=f[2]*b[2];a[3]=f[3]*b[3];return a};i.mul=i.multiply;i.divide=function(a,f,b){a[0]=f[0]/b[0];a[1]=f[1]/b[1];a[2]=f[2]/b[2];a[3]=f[3]/b[3];return a};i.div=i.divide;i.min=function(a,f,b){a[0]=Math.min(f[0],b[0]);a[1]=Math.min(f[1],b[1]);a[2]=Math.min(f[2],b[2]);a[3]=Math.min(f[3],b[3]);return a};i.max=function(a,f,b){a[0]=Math.max(f[0],b[0]);a[1]=Math.max(f[1],b[1]);a[2]=Math.max(f[2],b[2]);a[3]=
	Math.max(f[3],b[3]);return a};i.scale=function(a,f,b){a[0]=f[0]*b;a[1]=f[1]*b;a[2]=f[2]*b;a[3]=f[3]*b;return a};i.scaleAndAdd=function(a,f,b,c){a[0]=f[0]+b[0]*c;a[1]=f[1]+b[1]*c;a[2]=f[2]+b[2]*c;a[3]=f[3]+b[3]*c;return a};i.distance=function(a,f){var b=f[0]-a[0],c=f[1]-a[1],d=f[2]-a[2],e=f[3]-a[3];return Math.sqrt(b*b+c*c+d*d+e*e)};i.dist=i.distance;i.squaredDistance=function(a,f){var b=f[0]-a[0],c=f[1]-a[1],d=f[2]-a[2],e=f[3]-a[3];return b*b+c*c+d*d+e*e};i.sqrDist=i.squaredDistance;i.length=function(a){var f=
	a[0],b=a[1],c=a[2];a=a[3];return Math.sqrt(f*f+b*b+c*c+a*a)};i.len=i.length;i.squaredLength=function(a){var f=a[0],b=a[1],c=a[2];a=a[3];return f*f+b*b+c*c+a*a};i.sqrLen=i.squaredLength;i.negate=function(a,f){a[0]=-f[0];a[1]=-f[1];a[2]=-f[2];a[3]=-f[3];return a};i.inverse=function(a,f){a[0]=1/f[0];a[1]=1/f[1];a[2]=1/f[2];a[3]=1/f[3];return a};i.normalize=function(a,f){var b=f[0],c=f[1],d=f[2],e=f[3],b=b*b+c*c+d*d+e*e;0<b&&(b=1/Math.sqrt(b),a[0]=f[0]*b,a[1]=f[1]*b,a[2]=f[2]*b,a[3]=f[3]*b);return a};
	i.dot=function(a,f){return a[0]*f[0]+a[1]*f[1]+a[2]*f[2]+a[3]*f[3]};i.lerp=function(a,f,b,c){var d=f[0],e=f[1],l=f[2];f=f[3];a[0]=d+c*(b[0]-d);a[1]=e+c*(b[1]-e);a[2]=l+c*(b[2]-l);a[3]=f+c*(b[3]-f);return a};i.random=function(a,f){f=f||1;a[0]=e();a[1]=e();a[2]=e();a[3]=e();i.normalize(a,a);i.scale(a,a,f);return a};i.transformMat4=function(a,f,b){var c=f[0],d=f[1],e=f[2];f=f[3];a[0]=b[0]*c+b[4]*d+b[8]*e+b[12]*f;a[1]=b[1]*c+b[5]*d+b[9]*e+b[13]*f;a[2]=b[2]*c+b[6]*d+b[10]*e+b[14]*f;a[3]=b[3]*c+b[7]*d+
	b[11]*e+b[15]*f;return a};i.transformQuat=function(a,b,c){var d=b[0],e=b[1],n=b[2];b=c[0];var l=c[1],x=c[2];c=c[3];var u=c*d+l*n-x*e,J=c*e+x*d-b*n,g=c*n+b*e-l*d,d=-b*d-l*e-x*n;a[0]=u*c+d*-b+J*-x-g*-l;a[1]=J*c+d*-l+g*-b-u*-x;a[2]=g*c+d*-x+u*-l-J*-b;return a};var w=i.create();i.forEach=function(a,b,c,d,e,n){b||(b=4);c||(c=0);for(d=d?Math.min(d*b+c,a.length):a.length;c<d;c+=b)w[0]=a[c],w[1]=a[c+1],w[2]=a[c+2],w[3]=a[c+3],e(w,w,n),a[c]=w[0],a[c+1]=w[1],a[c+2]=w[2],a[c+3]=w[3];return a};i.str=function(a){return"vec4("+
	a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"};"undefined"!==typeof a&&(a.vec4=i);d={create:function(){var a=new c(4);a[0]=1;a[1]=0;a[2]=0;a[3]=1;return a},clone:function(a){var b=new c(4);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a},identity:function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=1;return a},transpose:function(a,b){if(a===b){var c=b[1];a[1]=b[2];a[2]=c}else a[0]=b[0],a[1]=b[2],a[2]=b[1],a[3]=b[3];return a},invert:function(a,b){var c=
	b[0],d=b[1],e=b[2],n=b[3],l=c*n-e*d;if(!l)return null;l=1/l;a[0]=n*l;a[1]=-d*l;a[2]=-e*l;a[3]=c*l;return a},adjoint:function(a,b){var c=b[0];a[0]=b[3];a[1]=-b[1];a[2]=-b[2];a[3]=c;return a},determinant:function(a){return a[0]*a[3]-a[2]*a[1]},multiply:function(a,b,c){var d=b[0],e=b[1],n=b[2];b=b[3];var l=c[0],x=c[1],u=c[2];c=c[3];a[0]=d*l+n*x;a[1]=e*l+b*x;a[2]=d*u+n*c;a[3]=e*u+b*c;return a}};d.mul=d.multiply;d.rotate=function(a,b,c){var d=b[0],e=b[1],n=b[2];b=b[3];var l=Math.sin(c);c=Math.cos(c);a[0]=
	d*c+n*l;a[1]=e*c+b*l;a[2]=d*-l+n*c;a[3]=e*-l+b*c;return a};d.scale=function(a,b,c){var d=b[1],e=b[2],n=b[3],l=c[0];c=c[1];a[0]=b[0]*l;a[1]=d*l;a[2]=e*c;a[3]=n*c;return a};d.str=function(a){return"mat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"};d.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2))};d.LDU=function(a,b,c,d){a[2]=d[2]/d[0];c[0]=d[0];c[1]=d[1];c[3]=d[3]-a[2]*c[1];return[a,b,c]};"undefined"!==typeof a&&(a.mat2=d);d={create:function(){var a=
	new c(6);a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=0;a[5]=0;return a},clone:function(a){var b=new c(6);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];return b},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a},identity:function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=0;a[5]=0;return a},invert:function(a,b){var c=b[0],d=b[1],e=b[2],n=b[3],l=b[4],x=b[5],u=c*n-d*e;if(!u)return null;u=1/u;a[0]=n*u;a[1]=-d*u;a[2]=-e*u;a[3]=c*u;a[4]=(e*x-n*l)*u;a[5]=(d*l-c*x)*u;return a},
	determinant:function(a){return a[0]*a[3]-a[1]*a[2]},multiply:function(a,b,c){var d=b[0],e=b[1],n=b[2],l=b[3],x=b[4];b=b[5];var u=c[0],g=c[1],h=c[2],K=c[3],j=c[4];c=c[5];a[0]=d*u+n*g;a[1]=e*u+l*g;a[2]=d*h+n*K;a[3]=e*h+l*K;a[4]=d*j+n*c+x;a[5]=e*j+l*c+b;return a}};d.mul=d.multiply;d.rotate=function(a,b,c){var d=b[0],e=b[1],n=b[2],l=b[3],x=b[4];b=b[5];var u=Math.sin(c);c=Math.cos(c);a[0]=d*c+n*u;a[1]=e*c+l*u;a[2]=d*-u+n*c;a[3]=e*-u+l*c;a[4]=x;a[5]=b;return a};d.scale=function(a,b,c){var d=b[1],e=b[2],
	n=b[3],l=b[4],x=b[5],u=c[0];c=c[1];a[0]=b[0]*u;a[1]=d*u;a[2]=e*c;a[3]=n*c;a[4]=l;a[5]=x;return a};d.translate=function(a,b,c){var d=b[0],e=b[1],n=b[2],l=b[3],x=b[4];b=b[5];var u=c[0];c=c[1];a[0]=d;a[1]=e;a[2]=n;a[3]=l;a[4]=d*u+n*c+x;a[5]=e*u+l*c+b;return a};d.str=function(a){return"mat2d("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+")"};d.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+1)};"undefined"!==
	typeof a&&(a.mat2d=d);d={create:function(){var a=new c(9);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a},fromMat4:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[4];a[4]=b[5];a[5]=b[6];a[6]=b[8];a[7]=b[9];a[8]=b[10];return a},clone:function(a){var b=new c(9);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];return a},
	identity:function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a},transpose:function(a,b){if(a===b){var c=b[1],d=b[2],e=b[5];a[1]=b[3];a[2]=b[6];a[3]=c;a[5]=b[7];a[6]=d;a[7]=e}else a[0]=b[0],a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8];return a},invert:function(a,b){var c=b[0],d=b[1],e=b[2],n=b[3],l=b[4],x=b[5],u=b[6],g=b[7],h=b[8],K=h*l-x*g,j=-h*n+x*u,m=g*n-l*u,i=c*K+d*j+e*m;if(!i)return null;i=1/i;a[0]=K*i;a[1]=(-h*d+e*g)*i;a[2]=(x*
	d-e*l)*i;a[3]=j*i;a[4]=(h*c-e*u)*i;a[5]=(-x*c+e*n)*i;a[6]=m*i;a[7]=(-g*c+d*u)*i;a[8]=(l*c-d*n)*i;return a},adjoint:function(a,b){var c=b[0],d=b[1],e=b[2],n=b[3],l=b[4],x=b[5],u=b[6],g=b[7],h=b[8];a[0]=l*h-x*g;a[1]=e*g-d*h;a[2]=d*x-e*l;a[3]=x*u-n*h;a[4]=c*h-e*u;a[5]=e*n-c*x;a[6]=n*g-l*u;a[7]=d*u-c*g;a[8]=c*l-d*n;return a},determinant:function(a){var b=a[3],c=a[4],d=a[5],e=a[6],n=a[7],l=a[8];return a[0]*(l*c-d*n)+a[1]*(-l*b+d*e)+a[2]*(n*b-c*e)},multiply:function(a,b,c){var d=b[0],e=b[1],n=b[2],l=b[3],
	x=b[4],u=b[5],g=b[6],h=b[7];b=b[8];var j=c[0],m=c[1],i=c[2],k=c[3],q=c[4],t=c[5],s=c[6],r=c[7];c=c[8];a[0]=j*d+m*l+i*g;a[1]=j*e+m*x+i*h;a[2]=j*n+m*u+i*b;a[3]=k*d+q*l+t*g;a[4]=k*e+q*x+t*h;a[5]=k*n+q*u+t*b;a[6]=s*d+r*l+c*g;a[7]=s*e+r*x+c*h;a[8]=s*n+r*u+c*b;return a}};d.mul=d.multiply;d.translate=function(a,b,c){var d=b[0],e=b[1],n=b[2],l=b[3],x=b[4],u=b[5],g=b[6],h=b[7];b=b[8];var j=c[0];c=c[1];a[0]=d;a[1]=e;a[2]=n;a[3]=l;a[4]=x;a[5]=u;a[6]=j*d+c*l+g;a[7]=j*e+c*x+h;a[8]=j*n+c*u+b;return a};d.rotate=
	function(a,b,c){var d=b[0],e=b[1],n=b[2],l=b[3],x=b[4],u=b[5],g=b[6],h=b[7];b=b[8];var j=Math.sin(c);c=Math.cos(c);a[0]=c*d+j*l;a[1]=c*e+j*x;a[2]=c*n+j*u;a[3]=c*l-j*d;a[4]=c*x-j*e;a[5]=c*u-j*n;a[6]=g;a[7]=h;a[8]=b;return a};d.scale=function(a,b,c){var d=c[0];c=c[1];a[0]=d*b[0];a[1]=d*b[1];a[2]=d*b[2];a[3]=c*b[3];a[4]=c*b[4];a[5]=c*b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];return a};d.fromMat2d=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=0;a[3]=b[2];a[4]=b[3];a[5]=0;a[6]=b[4];a[7]=b[5];a[8]=1;return a};d.fromQuat=
	function(a,b){var c=b[0],d=b[1],e=b[2],n=b[3],l=c+c,x=d+d,u=e+e,c=c*l,g=d*l,d=d*x,h=e*l,j=e*x,e=e*u,l=n*l,x=n*x,n=n*u;a[0]=1-d-e;a[3]=g-n;a[6]=h+x;a[1]=g+n;a[4]=1-c-e;a[7]=j-l;a[2]=h-x;a[5]=j+l;a[8]=1-c-d;return a};d.normalFromMat4=function(a,b){var c=b[0],d=b[1],e=b[2],n=b[3],l=b[4],x=b[5],u=b[6],g=b[7],h=b[8],j=b[9],m=b[10],i=b[11],k=b[12],q=b[13],t=b[14],s=b[15],r=c*x-d*l,z=c*u-e*l,w=c*g-n*l,A=d*u-e*x,E=d*g-n*x,F=e*g-n*u,G=h*q-j*k,H=h*t-m*k,h=h*s-i*k,I=j*t-m*q,j=j*s-i*q,m=m*s-i*t,i=r*m-z*j+w*I+
	A*h-E*H+F*G;if(!i)return null;i=1/i;a[0]=(x*m-u*j+g*I)*i;a[1]=(u*h-l*m-g*H)*i;a[2]=(l*j-x*h+g*G)*i;a[3]=(e*j-d*m-n*I)*i;a[4]=(c*m-e*h+n*H)*i;a[5]=(d*h-c*j-n*G)*i;a[6]=(q*F-t*E+s*A)*i;a[7]=(t*w-k*F-s*z)*i;a[8]=(k*E-q*w+s*r)*i;return a};d.str=function(a){return"mat3("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+")"};d.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],
	2)+Math.pow(a[7],2)+Math.pow(a[8],2))};"undefined"!==typeof a&&(a.mat3=d);var r={create:function(){var a=new c(16);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a},clone:function(a){var b=new c(16);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=
	b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a},identity:function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a},transpose:function(a,b){if(a===b){var c=b[1],d=b[2],e=b[3],n=b[6],l=b[7],g=b[11];a[1]=b[4];a[2]=b[8];a[3]=b[12];a[4]=c;a[6]=b[9];a[7]=b[13];a[8]=d;a[9]=n;a[11]=b[14];a[12]=e;a[13]=l;a[14]=g}else a[0]=
	b[0],a[1]=b[4],a[2]=b[8],a[3]=b[12],a[4]=b[1],a[5]=b[5],a[6]=b[9],a[7]=b[13],a[8]=b[2],a[9]=b[6],a[10]=b[10],a[11]=b[14],a[12]=b[3],a[13]=b[7],a[14]=b[11],a[15]=b[15];return a},invert:function(a,b){var c=b[0],d=b[1],e=b[2],n=b[3],l=b[4],g=b[5],u=b[6],h=b[7],j=b[8],m=b[9],i=b[10],k=b[11],q=b[12],t=b[13],s=b[14],r=b[15],z=c*g-d*l,w=c*u-e*l,B=c*h-n*l,A=d*u-e*g,E=d*h-n*g,F=e*h-n*u,G=j*t-m*q,H=j*s-i*q,I=j*r-k*q,L=m*s-i*t,M=m*r-k*t,O=i*r-k*s,D=z*O-w*M+B*L+A*I-E*H+F*G;if(!D)return null;D=1/D;a[0]=(g*O-u*
	M+h*L)*D;a[1]=(e*M-d*O-n*L)*D;a[2]=(t*F-s*E+r*A)*D;a[3]=(i*E-m*F-k*A)*D;a[4]=(u*I-l*O-h*H)*D;a[5]=(c*O-e*I+n*H)*D;a[6]=(s*B-q*F-r*w)*D;a[7]=(j*F-i*B+k*w)*D;a[8]=(l*M-g*I+h*G)*D;a[9]=(d*I-c*M-n*G)*D;a[10]=(q*E-t*B+r*z)*D;a[11]=(m*B-j*E-k*z)*D;a[12]=(g*H-l*L-u*G)*D;a[13]=(c*L-d*H+e*G)*D;a[14]=(t*w-q*A-s*z)*D;a[15]=(j*A-m*w+i*z)*D;return a},adjoint:function(a,b){var c=b[0],d=b[1],e=b[2],n=b[3],l=b[4],g=b[5],h=b[6],j=b[7],m=b[8],i=b[9],k=b[10],q=b[11],t=b[12],s=b[13],r=b[14],z=b[15];a[0]=g*(k*z-q*r)-
	i*(h*z-j*r)+s*(h*q-j*k);a[1]=-(d*(k*z-q*r)-i*(e*z-n*r)+s*(e*q-n*k));a[2]=d*(h*z-j*r)-g*(e*z-n*r)+s*(e*j-n*h);a[3]=-(d*(h*q-j*k)-g*(e*q-n*k)+i*(e*j-n*h));a[4]=-(l*(k*z-q*r)-m*(h*z-j*r)+t*(h*q-j*k));a[5]=c*(k*z-q*r)-m*(e*z-n*r)+t*(e*q-n*k);a[6]=-(c*(h*z-j*r)-l*(e*z-n*r)+t*(e*j-n*h));a[7]=c*(h*q-j*k)-l*(e*q-n*k)+m*(e*j-n*h);a[8]=l*(i*z-q*s)-m*(g*z-j*s)+t*(g*q-j*i);a[9]=-(c*(i*z-q*s)-m*(d*z-n*s)+t*(d*q-n*i));a[10]=c*(g*z-j*s)-l*(d*z-n*s)+t*(d*j-n*g);a[11]=-(c*(g*q-j*i)-l*(d*q-n*i)+m*(d*j-n*g));a[12]=
	-(l*(i*r-k*s)-m*(g*r-h*s)+t*(g*k-h*i));a[13]=c*(i*r-k*s)-m*(d*r-e*s)+t*(d*k-e*i);a[14]=-(c*(g*r-h*s)-l*(d*r-e*s)+t*(d*h-e*g));a[15]=c*(g*k-h*i)-l*(d*k-e*i)+m*(d*h-e*g);return a},determinant:function(a){var b=a[0],c=a[1],d=a[2],e=a[3],n=a[4],l=a[5],g=a[6],h=a[7],j=a[8],i=a[9],m=a[10],k=a[11],q=a[12],s=a[13],t=a[14];a=a[15];return(b*l-c*n)*(m*a-k*t)-(b*g-d*n)*(i*a-k*s)+(b*h-e*n)*(i*t-m*s)+(c*g-d*l)*(j*a-k*q)-(c*h-e*l)*(j*t-m*q)+(d*h-e*g)*(j*s-i*q)},multiply:function(a,b,c){var d=b[0],e=b[1],n=b[2],
	l=b[3],g=b[4],h=b[5],j=b[6],i=b[7],m=b[8],k=b[9],q=b[10],s=b[11],t=b[12],r=b[13],z=b[14];b=b[15];var w=c[0],C=c[1],B=c[2],A=c[3];a[0]=w*d+C*g+B*m+A*t;a[1]=w*e+C*h+B*k+A*r;a[2]=w*n+C*j+B*q+A*z;a[3]=w*l+C*i+B*s+A*b;w=c[4];C=c[5];B=c[6];A=c[7];a[4]=w*d+C*g+B*m+A*t;a[5]=w*e+C*h+B*k+A*r;a[6]=w*n+C*j+B*q+A*z;a[7]=w*l+C*i+B*s+A*b;w=c[8];C=c[9];B=c[10];A=c[11];a[8]=w*d+C*g+B*m+A*t;a[9]=w*e+C*h+B*k+A*r;a[10]=w*n+C*j+B*q+A*z;a[11]=w*l+C*i+B*s+A*b;w=c[12];C=c[13];B=c[14];A=c[15];a[12]=w*d+C*g+B*m+A*t;a[13]=
	w*e+C*h+B*k+A*r;a[14]=w*n+C*j+B*q+A*z;a[15]=w*l+C*i+B*s+A*b;return a}};r.mul=r.multiply;r.translate=function(a,b,c){var d=c[0],e=c[1];c=c[2];var n,l,g,h,j,i,m,k,q,s,t,r;b===a?(a[12]=b[0]*d+b[4]*e+b[8]*c+b[12],a[13]=b[1]*d+b[5]*e+b[9]*c+b[13],a[14]=b[2]*d+b[6]*e+b[10]*c+b[14],a[15]=b[3]*d+b[7]*e+b[11]*c+b[15]):(n=b[0],l=b[1],g=b[2],h=b[3],j=b[4],i=b[5],m=b[6],k=b[7],q=b[8],s=b[9],t=b[10],r=b[11],a[0]=n,a[1]=l,a[2]=g,a[3]=h,a[4]=j,a[5]=i,a[6]=m,a[7]=k,a[8]=q,a[9]=s,a[10]=t,a[11]=r,a[12]=n*d+j*e+q*c+
	b[12],a[13]=l*d+i*e+s*c+b[13],a[14]=g*d+m*e+t*c+b[14],a[15]=h*d+k*e+r*c+b[15]);return a};r.scale=function(a,b,c){var d=c[0],e=c[1];c=c[2];a[0]=b[0]*d;a[1]=b[1]*d;a[2]=b[2]*d;a[3]=b[3]*d;a[4]=b[4]*e;a[5]=b[5]*e;a[6]=b[6]*e;a[7]=b[7]*e;a[8]=b[8]*c;a[9]=b[9]*c;a[10]=b[10]*c;a[11]=b[11]*c;a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a};r.rotate=function(a,c,d,e){var g=e[0],n=e[1];e=e[2];var l=Math.sqrt(g*g+n*n+e*e),h,j,i,m,k,q,s,t,r,z,w,Q,C,B,A,E,F,G,H,I;if(Math.abs(l)<b)return null;l=1/l;g*=
	l;n*=l;e*=l;h=Math.sin(d);j=Math.cos(d);i=1-j;d=c[0];l=c[1];m=c[2];k=c[3];q=c[4];s=c[5];t=c[6];r=c[7];z=c[8];w=c[9];Q=c[10];C=c[11];B=g*g*i+j;A=n*g*i+e*h;E=e*g*i-n*h;F=g*n*i-e*h;G=n*n*i+j;H=e*n*i+g*h;I=g*e*i+n*h;g=n*e*i-g*h;n=e*e*i+j;a[0]=d*B+q*A+z*E;a[1]=l*B+s*A+w*E;a[2]=m*B+t*A+Q*E;a[3]=k*B+r*A+C*E;a[4]=d*F+q*G+z*H;a[5]=l*F+s*G+w*H;a[6]=m*F+t*G+Q*H;a[7]=k*F+r*G+C*H;a[8]=d*I+q*g+z*n;a[9]=l*I+s*g+w*n;a[10]=m*I+t*g+Q*n;a[11]=k*I+r*g+C*n;c!==a&&(a[12]=c[12],a[13]=c[13],a[14]=c[14],a[15]=c[15]);return a};
	r.rotateX=function(a,b,c){var d=Math.sin(c);c=Math.cos(c);var e=b[4],g=b[5],l=b[6],h=b[7],j=b[8],i=b[9],m=b[10],k=b[11];b!==a&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[4]=e*c+j*d;a[5]=g*c+i*d;a[6]=l*c+m*d;a[7]=h*c+k*d;a[8]=j*c-e*d;a[9]=i*c-g*d;a[10]=m*c-l*d;a[11]=k*c-h*d;return a};r.rotateY=function(a,b,c){var d=Math.sin(c);c=Math.cos(c);var e=b[0],g=b[1],l=b[2],h=b[3],j=b[8],i=b[9],m=b[10],k=b[11];b!==a&&(a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],
	a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=e*c-j*d;a[1]=g*c-i*d;a[2]=l*c-m*d;a[3]=h*c-k*d;a[8]=e*d+j*c;a[9]=g*d+i*c;a[10]=l*d+m*c;a[11]=h*d+k*c;return a};r.rotateZ=function(a,b,c){var d=Math.sin(c);c=Math.cos(c);var e=b[0],g=b[1],l=b[2],h=b[3],j=b[4],i=b[5],m=b[6],k=b[7];b!==a&&(a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=e*c+j*d;a[1]=g*c+i*d;a[2]=l*c+m*d;a[3]=h*c+k*d;a[4]=j*c-e*d;a[5]=i*c-g*d;a[6]=m*c-l*d;a[7]=k*c-h*d;return a};r.fromRotationTranslation=
	function(a,b,c){var d=b[0],e=b[1],g=b[2],h=b[3],j=d+d,i=e+e,m=g+g;b=d*j;var k=d*i,d=d*m,q=e*i,e=e*m,g=g*m,j=h*j,i=h*i,h=h*m;a[0]=1-(q+g);a[1]=k+h;a[2]=d-i;a[3]=0;a[4]=k-h;a[5]=1-(b+g);a[6]=e+j;a[7]=0;a[8]=d+i;a[9]=e-j;a[10]=1-(b+q);a[11]=0;a[12]=c[0];a[13]=c[1];a[14]=c[2];a[15]=1;return a};r.fromQuat=function(a,b){var c=b[0],d=b[1],e=b[2],g=b[3],h=c+c,j=d+d,i=e+e,c=c*h,m=d*h,d=d*j,k=e*h,q=e*j,e=e*i,h=g*h,j=g*j,g=g*i;a[0]=1-d-e;a[1]=m+g;a[2]=k-j;a[3]=0;a[4]=m-g;a[5]=1-c-e;a[6]=q+h;a[7]=0;a[8]=k+j;
	a[9]=q-h;a[10]=1-c-d;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};r.frustum=function(a,b,c,d,e,g,h){var j=1/(c-b),i=1/(e-d),m=1/(g-h);a[0]=2*g*j;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=2*g*i;a[6]=0;a[7]=0;a[8]=(c+b)*j;a[9]=(e+d)*i;a[10]=(h+g)*m;a[11]=-1;a[12]=0;a[13]=0;a[14]=2*(h*g)*m;a[15]=0;return a};r.perspective=function(a,b,c,d,e){b=1/Math.tan(b/2);var g=1/(d-e);a[0]=b/c;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=(e+d)*g;a[11]=-1;a[12]=0;a[13]=0;a[14]=2*e*d*g;a[15]=0;
	return a};r.ortho=function(a,b,c,d,e,g,h){var j=1/(b-c),i=1/(d-e),m=1/(g-h);a[0]=-2*j;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=-2*i;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=2*m;a[11]=0;a[12]=(b+c)*j;a[13]=(e+d)*i;a[14]=(h+g)*m;a[15]=1;return a};r.lookAt=function(a,c,d,e){var g,h,j,i,m,k,q,s,t=c[0],z=c[1];c=c[2];j=e[0];i=e[1];h=e[2];q=d[0];e=d[1];g=d[2];if(Math.abs(t-q)<b&&Math.abs(z-e)<b&&Math.abs(c-g)<b)return r.identity(a);d=t-q;e=z-e;q=c-g;s=1/Math.sqrt(d*d+e*e+q*q);d*=s;e*=s;q*=s;g=i*q-h*e;h=h*d-j*q;j=j*e-i*
	d;(s=Math.sqrt(g*g+h*h+j*j))?(s=1/s,g*=s,h*=s,j*=s):j=h=g=0;i=e*j-q*h;m=q*g-d*j;k=d*h-e*g;(s=Math.sqrt(i*i+m*m+k*k))?(s=1/s,i*=s,m*=s,k*=s):k=m=i=0;a[0]=g;a[1]=i;a[2]=d;a[3]=0;a[4]=h;a[5]=m;a[6]=e;a[7]=0;a[8]=j;a[9]=k;a[10]=q;a[11]=0;a[12]=-(g*t+h*z+j*c);a[13]=-(i*t+m*z+k*c);a[14]=-(d*t+e*z+q*c);a[15]=1;return a};r.str=function(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+
	a[15]+")"};r.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2)+Math.pow(a[9],2)+Math.pow(a[10],2)+Math.pow(a[11],2)+Math.pow(a[12],2)+Math.pow(a[13],2)+Math.pow(a[14],2)+Math.pow(a[15],2))};"undefined"!==typeof a&&(a.mat4=r);var m={create:function(){var a=new c(4);a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a}},q=g.create(),s=g.fromValues(1,0,0),t=g.fromValues(0,1,0);m.rotationTo=
	function(a,b,c){var d=g.dot(b,c);if(-0.999999>d)return g.cross(q,s,b),1E-6>g.length(q)&&g.cross(q,t,b),g.normalize(q,q),m.setAxisAngle(a,q,Math.PI),a;if(0.999999<d)return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a;g.cross(q,b,c);a[0]=q[0];a[1]=q[1];a[2]=q[2];a[3]=1+d;return m.normalize(a,a)};var z=d.create();m.setAxes=function(a,b,c,d){z[0]=c[0];z[3]=c[1];z[6]=c[2];z[1]=d[0];z[4]=d[1];z[7]=d[2];z[2]=-b[0];z[5]=-b[1];z[8]=-b[2];return m.normalize(a,m.fromMat3(a,z))};m.clone=i.clone;m.fromValues=i.fromValues;m.copy=
	i.copy;m.set=i.set;m.identity=function(a){a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a};m.setAxisAngle=function(a,b,c){c*=0.5;var d=Math.sin(c);a[0]=d*b[0];a[1]=d*b[1];a[2]=d*b[2];a[3]=Math.cos(c);return a};m.add=i.add;m.multiply=function(a,b,c){var d=b[0],e=b[1],g=b[2];b=b[3];var h=c[0],j=c[1],i=c[2];c=c[3];a[0]=d*c+b*h+e*i-g*j;a[1]=e*c+b*j+g*h-d*i;a[2]=g*c+b*i+d*j-e*h;a[3]=b*c-d*h-e*j-g*i;return a};m.mul=m.multiply;m.scale=i.scale;m.rotateX=function(a,b,c){c*=0.5;var d=b[0],e=b[1],g=b[2];b=b[3];var h=Math.sin(c);
	c=Math.cos(c);a[0]=d*c+b*h;a[1]=e*c+g*h;a[2]=g*c-e*h;a[3]=b*c-d*h;return a};m.rotateY=function(a,b,c){c*=0.5;var d=b[0],e=b[1],g=b[2];b=b[3];var h=Math.sin(c);c=Math.cos(c);a[0]=d*c-g*h;a[1]=e*c+b*h;a[2]=g*c+d*h;a[3]=b*c-e*h;return a};m.rotateZ=function(a,b,c){c*=0.5;var d=b[0],e=b[1],g=b[2];b=b[3];var h=Math.sin(c);c=Math.cos(c);a[0]=d*c+e*h;a[1]=e*c-d*h;a[2]=g*c+b*h;a[3]=b*c-g*h;return a};m.calculateW=function(a,b){var c=b[0],d=b[1],e=b[2];a[0]=c;a[1]=d;a[2]=e;a[3]=Math.sqrt(Math.abs(1-c*c-d*d-
	e*e));return a};m.dot=i.dot;m.lerp=i.lerp;m.slerp=function(a,b,c,d){var e=b[0],g=b[1],h=b[2];b=b[3];var j=c[0],i=c[1],m=c[2];c=c[3];var k,q,s;q=e*j+g*i+h*m+b*c;0>q&&(q=-q,j=-j,i=-i,m=-m,c=-c);1E-6<1-q?(k=Math.acos(q),s=Math.sin(k),q=Math.sin((1-d)*k)/s,d=Math.sin(d*k)/s):q=1-d;a[0]=q*e+d*j;a[1]=q*g+d*i;a[2]=q*h+d*m;a[3]=q*b+d*c;return a};m.invert=function(a,b){var c=b[0],d=b[1],e=b[2],g=b[3],h=c*c+d*d+e*e+g*g,h=h?1/h:0;a[0]=-c*h;a[1]=-d*h;a[2]=-e*h;a[3]=g*h;return a};m.conjugate=function(a,b){a[0]=
	-b[0];a[1]=-b[1];a[2]=-b[2];a[3]=b[3];return a};m.length=i.length;m.len=m.length;m.squaredLength=i.squaredLength;m.sqrLen=m.squaredLength;m.normalize=i.normalize;m.fromMat3=function(a,b){var c=b[0]+b[4]+b[8];if(0<c)c=Math.sqrt(c+1),a[3]=0.5*c,c=0.5/c,a[0]=(b[5]-b[7])*c,a[1]=(b[6]-b[2])*c,a[2]=(b[1]-b[3])*c;else{var d=0;b[4]>b[0]&&(d=1);b[8]>b[3*d+d]&&(d=2);var e=(d+1)%3,g=(d+2)%3,c=Math.sqrt(b[3*d+d]-b[3*e+e]-b[3*g+g]+1);a[d]=0.5*c;c=0.5/c;a[3]=(b[3*e+g]-b[3*g+e])*c;a[e]=(b[3*e+d]+b[3*d+e])*c;a[g]=
	(b[3*g+d]+b[3*d+g])*c}return a};m.str=function(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"};"undefined"!==typeof a&&(a.quat=m)})(GLMAT);try{module.exports=GLMAT}catch(e$$10){}try{glm.exists&&alert("glm.common.js loaded over exist glm instance: "+glm)}catch(e$$11){}glm=null;GLMJS_PREFIX="glm-js: ";
	GLM={$DEBUG:"undefined"!==typeof $GLM_DEBUG&&$GLM_DEBUG,version:"0.0.6c",GLM_VERSION:96,$outer:{polyfills:GLM_polyfills(),functions:{},intern:function(a,b){if(a)if(void 0===b&&"object"===typeof a)for(var c in a)GLM.$outer.intern(c,a[c]);else return GLM.$DEBUG&&GLM.$outer.console.debug("intern "+a,b&&(b.name||typeof b)),GLM.$outer[a]=b},$import:function(a){GLM.$outer.$import=function(){throw Error("glm.$outer.$import already called...");};GLM.$outer.intern(a.statics);GLM.$template.extend(GLM,GLM.$template["declare<T,V,number>"](a["declare<T,V,number>"]),
	GLM.$template["declare<T,V,...>"](a["declare<T,V,...>"]),GLM.$template["declare<T,...>"](a["declare<T,...>"]),GLM.$template["declare<T>"](a["declare<T>"]));GLM.$init(a)},console:$GLM_reset_logging(),quat_array_from_xyz:function(a){var b=glm.quat(),c=glm.mat3(1);b["*="](glm.angleAxis(a.x,c[0]));b["*="](glm.angleAxis(a.y,c[1]));b["*="](glm.angleAxis(a.z,c[2]));return b.elements},Array:Array,ArrayBuffer:ArrayBuffer,Float32Array:Float32Array,Float64Array:Float64Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,
	Uint32Array:Uint32Array,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,DataView:"undefined"!==typeof DataView&&DataView,$rebindTypedArrays:function(a){var b=Object.keys(GLM.$outer).filter(RegExp.prototype.test.bind(/.Array$|^ArrayBuffer$|^DataView$/)).map(function(b){var e=a.call(this,b,GLM.$outer[b]);e!==GLM.$outer[b]&&(GLM.$outer.console.warn("$rebindTypedArrays("+b+")... replacing"),GLM.$outer[b]=e);return e});GLM.$subarray=GLM.patch_subarray();return b}},$extern:$GLM_extern,$log:$GLM_log,
	GLMJSError:$GLM_GLMJSError("GLMJSError"),_radians:function(a){return a*this.PI/180}.bind(Math),_degrees:function(a){return 180*a/this.PI}.bind(Math),normalize:$GLM_extern("normalize"),inverse:$GLM_extern("inverse"),distance:$GLM_extern("distance"),length:$GLM_extern("length"),length2:$GLM_extern("length2"),transpose:$GLM_extern("transpose"),slerp:$GLM_extern("slerp"),mix:$GLM_extern("mix"),clamp:$GLM_extern("clamp"),angleAxis:$GLM_extern("angleAxis"),rotate:$GLM_extern("rotate"),scale:$GLM_extern("scale"),
	translate:$GLM_extern("translate"),lookAt:$GLM_extern("lookAt"),cross:$GLM_extern("cross"),dot:$GLM_extern("dot"),perspective:function(a,b,c,e){return GLM.$outer.mat4_perspective(a,b,c,e)},ortho:function(a,b,c,e,d,h){return GLM.$outer.mat4_ortho(a,b,c,e,d,h)},_eulerAngles:function(a){return GLM.$outer.vec3_eulerAngles(a)},angle:function(a){return 2*Math.acos(a.w)},axis:function(a){var b=1-a.w*a.w;if(0>=b)return glm.vec3(0,0,1);b=1/Math.sqrt(b);return glm.vec3(a.x*b,a.y*b,a.z*b)},$from_ptr:function(a,
	b,c){if(this!==GLM)throw new GLM.GLMJSError("... use glm.make_<type>() (not new glm.make<type>())");b=new GLM.$outer.Float32Array(b.buffer||b,c||0,a.componentLength);b=new GLM.$outer.Float32Array(b);return new a(b)},make_vec2:function(a,b){return GLM.$from_ptr.call(this,GLM.vec2,a,2===arguments.length?b:a.byteOffset)},make_vec3:function(a,b){return GLM.$from_ptr.call(this,GLM.vec3,a,2===arguments.length?b:a.byteOffset)},make_vec4:function(a,b){return GLM.$from_ptr.call(this,GLM.vec4,a,2===arguments.length?
	b:a.byteOffset)},make_quat:function(a,b){return GLM.$from_ptr.call(this,GLM.quat,a,2===arguments.length?b:a.byteOffset)},make_mat3:function(a,b){return GLM.$from_ptr.call(this,GLM.mat3,a,2===arguments.length?b:a.byteOffset)},make_mat4:function(a,b){return GLM.$from_ptr.call(this,GLM.mat4,a,2===arguments.length?b:a.byteOffset)},diagonal4x4:function(a){if("vec4"!==GLM.$typeof(a))throw new GLM.GLMJSError("unsupported argtype to GLM.diagonal4x4: "+["type:"+GLM.$typeof(a)]);a=a.elements;return new GLM.mat4([a[0],
	0,0,0,0,a[1],0,0,0,0,a[2],0,0,0,0,a[3]])},diagonal3x3:function(a){if("vec3"!==GLM.$typeof(a))throw new GLM.GLMJSError("unsupported argtype to GLM.diagonal3x3: "+["type:"+GLM.$typeof(a)]);a=a.elements;return new GLM.mat3([a[0],0,0,0,a[1],0,0,0,a[2]])},_toMat4:function(a){return new GLM.mat4(GLM.$outer.mat4_array_from_quat(a))},FAITHFUL:!0,to_string:function(a,b){try{var c=a.$type||typeof a;if(!GLM[c])throw new GLM.GLMJSError("unsupported argtype to GLM.to_string: "+["type:"+c,a]);return GLM.FAITHFUL?
	GLM.$to_string(a,b).replace(/[\t\n]/g,""):GLM.$to_string(a,b)}catch(e){return GLM.$DEBUG&&GLM.$outer.console.error("to_string error: ",c,a+"",e),e+""}},$sizeof:function(a){return a.BYTES_PER_ELEMENT},$types:[],$isGLMConstructor:function(a){return!!(a&&a.prototype instanceof GLM.$GLMBaseType)},$getGLMType:function(a){return a instanceof GLM.$GLMBaseType&&a.constructor||"string"===typeof a&&GLM[a]},$isGLMObject:function(a){return!!(a instanceof GLM.$GLMBaseType&&a.$type)},$typeof:function(a){return a instanceof
	GLM.$GLMBaseType?a.$type:"undefined"},$to_array:function(a){return[].slice.call(a.elements)},$to_json:function(a,b,c){this instanceof GLM.$GLMBaseType&&(c=b,b=a,a=this);return JSON.stringify(GLM.$to_object(a),b,c)},$inspect:function(a){this instanceof GLM.$GLMBaseType&&(a=this);return GLM.$to_json(a,null,2)},_clamp:function(a,b,c){return a<b?b:a>c?c:a},_abs:function(a){return Math.abs(a)},_equal:function(a,b){return a===b},_epsilonEqual:function(a,b,c){return Math.abs(a-b)<c},_fract:function(a){return a-
	Math.floor(a)},_frexp:function(){function a(b,c){var e=GLM.$outer.DataView||a._DataView;if(0==b)return c&&Array.isArray(c)?c[0]=c[1]=0:[0,0];e=new e(new GLM.$outer.ArrayBuffer(8));e.setFloat64(0,b);var d=e.getUint32(0)>>>20&2047;0===d&&(e.setFloat64(0,b*Math.pow(2,64)),d=(e.getUint32(0)>>>20&2047)-64);e=d-1022;d=GLM.ldexp(b,-e);return c&&Array.isArray(c)?(c[0]=e,c[1]=d):[d,e]}a._DataView=function(a){this.buffer=a;this.setFloat64=function(a,b){if(0!==a)throw Error("...this is a very limited DataView emulator");
	(new Uint8Array(this.buffer)).set([].reverse.call(new Uint8Array((new Float64Array([b])).buffer)),a)};this.getUint32=function(a){if(0!==a)throw Error("...this is a very limited DataView emulator");return(new Uint32Array((new Uint8Array([].slice.call(new Uint8Array(this.buffer)).reverse())).buffer))[1]}};return a}(),_ldexp:function(a,b){return 1023<b?a*Math.pow(2,1023)*Math.pow(2,b-1023):-1074>b?a*Math.pow(2,-1074)*Math.pow(2,b+1074):a*Math.pow(2,b)},_max:Math.max,_min:Math.min,sqrt:Math.sqrt,__sign:function(a){return 0<
	a?1:0>a?-1:+a},$constants:{epsilon:1E-6,euler:0.5772156649015329,e:Math.E,ln_ten:Math.LN10,ln_two:Math.LN2,pi:Math.PI,half_pi:Math.PI/2,quarter_pi:Math.PI/4,one_over_pi:1/Math.PI,two_over_pi:2/Math.PI,root_pi:Math.sqrt(Math.PI),root_two:Math.sqrt(2),root_three:Math.sqrt(3),two_over_root_pi:2/Math.sqrt(Math.PI),one_over_root_two:Math.SQRT1_2,root_two:Math.SQRT2},FIXEDPRECISION:6,$toFixedString:function(a,b,c,e){void 0===e&&(e=GLM.FIXEDPRECISION);if(!c||!c.map)throw Error("unsupported argtype to $toFixedString(..,..,props="+
	typeof c+")");try{var d="";c.map(function(c){c=b[d=c];if(!c.toFixed)throw Error("!toFixed in w"+[c,a,JSON.stringify(b)]);return c.toFixed(0)})}catch(h){throw GLM.$DEBUG&&GLM.$outer.console.error("$toFixedString error",a,typeof b,Object.prototype.toString.call(b),d),GLM.$DEBUG&&glm.$log("$toFixedString error",a,typeof b,Object.prototype.toString.call(b),d),new GLM.GLMJSError(h);}c=c.map(function(a){return b[a].toFixed(e)});return a+"("+c.join(", ")+")"}};GLM._sign=Math.sign||GLM.__sign;
	for(var p in GLM.$constants)(function(a,b){GLM[b]=function(){return a};GLM[b].valueOf=GLM[b]})(GLM.$constants[p],p);
	GLM.$GLMBaseType=function(){function a(a,c){var e=a.$||{};this.$type=c;this.$type_name=e.name||"<"+c+">";e.components&&(this.$components=e.components[0]);this.$len=this.components=a.componentLength;this.constructor=a;this.byteLength=a.BYTES_PER_ELEMENT;GLM.$types.push(c)}a.prototype={clone:function(){return new this.constructor(new this.elements.constructor(this.elements))},toString:function(){return GLM.$to_string(this)},inspect:function(){return GLM.$inspect(this)},toJSON:function(){return GLM.$to_object(this)}};
	Object.defineProperty(a.prototype,"address",{get:function(){var a=this.elements.byteOffset.toString(16);return"0x00000000".substr(0,10-a.length)+a}});return a}();
	(function(){function a(a,b,c){return a.subarray(b,c||a.length)}function b(a,b,c){var e=a.constructor;c=c||a.length;return new e(a.buffer,a.byteOffset+b*e.BYTES_PER_ELEMENT,c-b)}function c(){var a=new GLM.$outer.Float32Array([0,0]);a.subarray(1).subarray(0)[0]=1;var b=c.result=[a[1],(new GLM.$outer.Float32Array(16)).subarray(12,16).length];return!(a[1]!==b[0]||4!==b[1])}function e(a){var b=new GLM.$outer.Float32Array([0,0]);a(a(b,1),0)[0]=1;a=e.result=[b[1],a(new GLM.$outer.Float32Array(16),12,16).length];
	return!(b[1]!==a[0]||4!==a[1])}Object.defineProperty(GLM,"patch_subarray",{configurable:!0,value:function(){var d=!c()?b:a;d.workaround_broken_spidermonkey_subarray=b;d.native_subarray=a;if(!e(d))throw Error("failed to resolve working TypedArray.subarray implementation... "+e.result);return d}})})();GLM.$subarray=GLM.patch_subarray();
	var GLM_template=GLM.$template={_genArgError:function(a,b,c,e){~e.indexOf(void 0)&&(e=e.slice(0,e.indexOf(void 0)));var d=RegExp.prototype.test.bind(/^[^$_]/);return new GLM.GLMJSError("unsupported argtype to "+b+" "+a.$sig+": [typ="+c+"] :: got arg types: "+e.map(GLM.$template.jstypes.get)+" // supported types: "+Object.keys(a).filter(d).join("||"))},jstypes:{get:function(a){return null===a?"null":void 0===a?"undefined":a.$type||GLM.$template.jstypes[typeof a]||GLM.$template.jstypes[a+""]||function(a){if("object"===
	typeof a){if(a instanceof GLM.$outer.Float32Array)return"Float32Array";if(a instanceof GLM.$outer.ArrayBuffer)return"ArrayBuffer";if(Array.isArray(a))return"array"}return"<unknown "+[typeof a,a]+">"}(a)},"0":"float","boolean":"bool",number:"float",string:"string","[object Float32Array]":"Float32Array","[object ArrayBuffer]":"ArrayBuffer","function":"function"},_add_overrides:function(a,b){for(var c in b)b[c]&&GLM[c].override(a,b[c])},_add_inline_override:function(a,b,c){this[b]=eval(GLM.$template._traceable("glm_"+
	a+"_"+b,c))();return this},_inline_helpers:function(a,b){Object.defineProperty(a,"GLM",{value:GLM});return{$type:"built-in",$type_name:b,$template:a,F:a,dbg:b,override:this._add_inline_override.bind(a,b),link:function(c){var e=a[c];e||(e=a[[c,"undefined"]]);if(!e)throw new GLM.GLMJSError("error linking direct function for "+b+"<"+c+"> or "+b+"<"+[c,void 0]+">");return/\bthis[\[.]/.test(e+"")?e.bind(a):e}}},"template<T>":function(a,b){a.$sig="template<T>";var c=GLM.$template.jstypes,e=GLM.$template._genArgError,
	d=GLM.$GLMBaseType;return this.slingshot(this._inline_helpers(a,b),eval(this._traceable("Tglm_"+b,function(b){this instanceof d&&(b=this);var j=[b&&b.$type||c[typeof b]||c.get(b)||"null"];if(!a[j])throw e(a,arguments.callee.dbg,j,[b]);return a[j](b)}))())},"template<T,...>":function(a,b){a.$sig="template<T,...>";var c=GLM.$template.jstypes,e=GLM.$template._genArgError,d=GLM.$GLMBaseType;return this.slingshot(this._inline_helpers(a,b),eval(this._traceable("Tdotglm_"+b,function(b){for(var j=Array(arguments.length),
	g=0;g<j.length;g++)j[g]=arguments[g];this instanceof d&&j.unshift(b=this);g=[b&&b.$type||c[typeof b]||c.get(b)||"null"];if(!a[g])throw e(a,arguments.callee.dbg,g,j);return a[g].apply(a,j)}))())},"template<T,V,number>":function(a,b){a.$sig="template<T,V,number>";var c=GLM.$template.jstypes,e=GLM.$template._genArgError,d=GLM.GLMJSError,h=GLM.$GLMBaseType;return this.slingshot(this._inline_helpers(a,b),eval(this._traceable("TVnglm_"+b,function(){for(var b=Array(arguments.length),g=0;g<b.length;g++)b[g]=
	arguments[g];this instanceof h&&b.unshift(this);var g=b[0],k=b[1],b=b[2],i=[g&&g.$type||c[typeof g]||c[g+""]||"<unknown "+g+">",k&&k.$type||c[typeof k]||c[k+""]||"<unknown "+k+">"];if(!a[i])throw e(a,arguments.callee.dbg,i,[g,k,b]);if("number"!==typeof b)throw new d(arguments.callee.dbg+a.$sig+": unsupported n type: "+[typeof b,b]);return a[i](g,k,b)}))())},"template<T,V,...>":function(a,b){a.$sig="template<T,V,...>";var c=GLM.$template.jstypes,e=GLM.$GLMBaseType,d=GLM.$template._genArgError,h=GLM.$outer.Array;
	return this.slingshot(this._inline_helpers(a,b),eval(this._traceable("TVglm_"+b,function(){for(var b=new h(arguments.length),g=0;g<b.length;g++)b[g]=arguments[g];this instanceof e&&b.unshift(this);var g=b[0],k=b[1],g=[g&&g.$type||c[typeof g],k&&k.$type||c[typeof k]||c[k+""]||h.isArray(k)&&"array"+k.length+""||""+k+""];if(!a[g])throw d(a,arguments.callee.dbg,g,b);return a[g].apply(a,b)}))())},override:function(a,b,c,e,d){function h(a,c){GLM.$outer.console.debug("glm.$template.override: "+b+" ... "+
	Object.keys(a.$template).filter(function(a){return!~a.indexOf("$")}).map(function(a){return!~c.indexOf(a)?"*"+a+"*":a}).join(" | "))}GLM.$DEBUG&&GLM.$outer.console.debug("glm.$template.override: ",a,b,c.$op?'$op: ["'+c.$op+'"]':"");if(!e)throw Error("unspecified target group "+e+' (expected override(<TV>, "p", {TSP}, ret={GROUP}))');var j=e[b];if(j&&j.$op!==c.$op)throw Error('glm.$template.override: mismatch merging existing override: .$op "'+[j.$op,"!=",c.$op].join(" ")+'"  p='+[b,j.$op,c.$op,"||"+
	Object.keys(j.$template).join("||")]);var g=GLM.$template[a](GLM.$template.deNify(c,b),b);if(j&&j.F.$sig!==g.F.$sig)throw Error('glm.$template.override: mismatch merging existing override: .$sig "'+[j&&j.F.$sig,"!=",g.F.$sig].join(" ")+'"  p='+[b,j&&j.F.$sig,g.F.$sig,"||"+Object.keys(j&&j.$template||{}).join("||")]);g.$op=c.$op;if(j){for(var k in g.$template)"$op"===k||"$sig"===k||(a=k in j.$template,!a||!0===d?(GLM.$DEBUG&&GLM.$outer.console.debug("glm.$template.override: "+b+" ... "+k+" merged"),
	j.$template[k]=g.$template[k]):a&&GLM.$DEBUG&&GLM.$outer.console.debug("glm.$template.override: "+b+" ... "+k+" skipped"));if(GLM.$DEBUG){var i=[];Object.keys(j.$template).forEach(function(a){a in g.$template||(GLM.$DEBUG&&GLM.$outer.console.debug("glm.$template.override: "+b+" ... "+a+" carried-forward"),i.push(a))});h(e[b],i)}}else e[b]=g,GLM.$DEBUG&&h(e[b],[]);return e},_override:function(a,b,c){for(var e in b){if("mat4_scale"!==e&&"object"!==typeof b[e])throw new GLM.GLMJSError("expect object property overrides"+
	[e,b[e],Object.keys(c)]);"object"===typeof b[e]?this.override(a,e,b[e],c,!0):ret_scale=5}return c},slingshot:function(){return this.extend.apply(this,[].reverse.call(arguments))},extend:function(a,b){[].slice.call(arguments,1).forEach(function(b){if(b)for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e])});return a},"declare<T,V,...>":function(a){return!a?{}:this._override("template<T,V,...>",a,GLM.$outer.functions)},"declare<T>":function(a){return!a?{}:this._override("template<T>",a,GLM.$outer.functions)},
	"declare<T,...>":function(a){return!a?{}:this._override("template<T,...>",a,GLM.$outer.functions)},"declare<T,V,number>":function(a){return!a?{}:this._override("template<T,V,number>",a,GLM.$outer.functions)},_tojsname:function(a){return(a||"_").replace(/[^$a-zA-Z0-9_]/g,"_")},_traceable:function(a,b){var c=b;if("function"!==typeof c)throw new GLM.GLMJSError("_traceable expects tidy function as second arg "+c);if(!a)throw new GLM.GLMJSError("_traceable expects hint or what's the point"+[c,a]);a=this._tojsname(a||
	"_traceable");c=c.toString().replace(/^(\s*var\s*(\w+)\s*=\s*)__VA_ARGS__;/mg,function(a,b,c){return b+"new Array(arguments.length);for(var I=0;I<varname.length;I++)varname[I]=arguments[I];".replace(/I/g,"__VA_ARGS__I").replace(/varname/g,c)}).replace(/\barguments[.]callee\b/g,a);if(/^function _traceable/.test(c))throw new GLM.GLMJSError("already wrapped in a _traceable: "+[c,a]);c='function _traceable(){ "use strict"; SRC; return HINT; }'.replace("HINT",a.replace(/[$]/g,"$$$$")).replace("SRC",c.replace(/[$]/g,
	"$$$$").replace(/^function\s*\(/,"function "+a+"("));c="1,"+c;if(GLM.$DEBUG)try{eval(c)}catch(e){throw console.error("_traceable error",a,c,b,e),e;}return c},deNify:function(a,b){var c={vec:[2,3,4],mat:[3,4]},e=this._tojsname.bind(this),d;for(d in a){var h=!1;d.replace(/([vV]ec|[mM]at)(?:\w*)<N>/,function(j,g){h=!0;var k=a[d];delete a[d];c[g.toLowerCase()].forEach(function(c){var g=d.replace(/<N[*]N>/g,c*c).replace(/<N>/g,c);if(!(g in a)){var h=e("glm_"+b+"_"+g);a[g]=eval("'use strict'; 1,"+(k+"").replace(/^function\s*\(/,
	"function "+h+"(").replace(/N[*]N/g,c*c).replace(/N/g,c))}})}.bind(this));/^[$]/.test(d)?GLM.$DEBUG&&GLM.$outer.console.debug("@ NOT naming "+d):!h&&("function"===typeof a[d]&&!a[d].name)&&(GLM.$DEBUG&&GLM.$outer.console.debug("naming "+e(b+"_"+d)),a[d]=eval(this._traceable("glm_"+b+"_"+d,a[d]))())}return a},$_module_stamp:+new Date,_iso:"/[*][^/*]*[*]/",_get_argnames:function(a){return(a+"").replace(/\s+/g,"").replace(RegExp(this._iso,"g"),"").split("){",1)[0].replace(/^[^(]*[(]/,"").replace(/=[^,]+/g,
	"").split(",").filter(Boolean)},_fix_$_names:function(a,b){Object.keys(b).filter(function(a){return"function"===typeof b[a]&&!b[a].name}).map(function(c){var e=a+"_"+c;GLM.$DEBUG&&GLM.$outer.console.debug("naming $."+c+" == "+e,this._traceable(e,b[c]));b[c]=eval(this._traceable("glm_"+e,b[c]))()}.bind(this));return b},_typedArrayMaker:function(a,b){return function(c){if(c.length===a)return new b(c);var e=new b(a);e.set(c);return e}},GLMType:function(a,b){var c=this._fix_$_names(a,b),e=c.identity.length,
	d,h=Object,j=GLM.$template._get_argnames.bind(GLM.$template),g=GLM.GLMJSError,k={},i;for(i in c)"function"===typeof c[i]&&function(a){k[i]=function(b){return a.apply(c,b)}}(c[i]);d=function(b){var d=k[typeof b[0]+b.length];if(!d){var e="glm."+a;b=e+"("+b.map(function(a){return typeof a})+")";d=h.keys(c).filter(function(a){return"function"===typeof c[a]&&/^\w+\d+$/.test(a)}).map(function(a){return e+"("+j(c[a])+")"});throw new g("no constructor found for: "+b+"\nsupported signatures:\n\t"+d.join("\n\t"));
	}return d};var w,r=GLM;GLM.$template._get_argnames.bind(GLM.$template);w=function(b,c){2<r.$DEBUG&&r.$outer.console.info("adopting elements...",typeof b);if(b.length!=e){if(!1===c)return c;r.$outer.console.error(a+" elements size mismatch: "+["wanted:"+e,"handed:"+b.length]);var d=r.$subarray(b,0,e);throw new r.GLMJSError(a+" elements size mismatch: "+["wanted:"+e,"handed:"+b.length,"theoreticaly-correctable?:"+(d.length===e)]);}return b};var m=this._typedArrayMaker(e,GLM.$outer.Float32Array),q,s=
	GLM.$outer;q=function(a){return a instanceof s.Float32Array};var t=function(a,b,c,g,h,i,j,k){return eval(k("glm_"+h+"$class",function(c){for(var f=new a(arguments.length),g=0;g<f.length;g++)f[g]=arguments[g];var h=d(f),g=t;if(this instanceof g)f=q(c)?w(c):m(h(f)),b.defineProperty(this,"elements",{enumerable:!1,configurable:!0,value:f});else return f=q(c)&&c.length===e?m(c):h(f),new g(f)}))()}(Array,Object,GLM,c,a,GLM.$template._get_argnames.bind(GLM.$template),GLM.GLMJSError,GLM.$template._traceable.bind(GLM.$template));
	c.components=c.components?c.components.map(function(a){return"string"===typeof a?a.split(""):a}):[];t.$=c;t.componentLength=e;t.BYTES_PER_ELEMENT=e*GLM.$outer.Float32Array.BYTES_PER_ELEMENT;t.prototype=new GLM.$GLMBaseType(t,a);t.toJSON=function(){var b={glm$type:a,glm$class:t.prototype.$type_name,glm$eg:(new t).object},c;for(c in t)/function |^[$]/.test(c+t[c])||(b[c]=t[c]);return b};return t}};
	GLM.$template["declare<T,V,...>"]({cross:{"vec2,vec2":function(a,b){return this.GLM.vec3(0,0,a.x*b.y-a.y*b.x)}},distance:{"vec<N>,vec<N>":function(a,b){return this.GLM.length(b.sub(a))}}});
	GLM.$template["declare<T,V,number>"]({mix:{"float,float":function(a,b,c){return b*c+a*(1-c)},"vec<N>,vec<N>":function(a,b,c){var e=1-c,d=new this.GLM.vecN(new a.elements.constructor(N)),h=d.elements;a=a.elements;b=b.elements;for(var j=0;j<N;j++)h[j]=b[j]*c+a[j]*e;return d}},clamp:{"float,float":function(a,b,c){return GLM._clamp(a,b,c)},"vec<N>,float":function(a,b,c){return new GLM.vecN(GLM.$to_array(a).map(function(a){return GLM._clamp(a,b,c)}))}},epsilonEqual:{"float,float":GLM._epsilonEqual,"vec<N>,vec<N>":function(a,
	b,c){for(var e=this["float,float"],d=glm.bvecN(),h=0;h<N;h++)d[h]=e(a[h],b[h],c);return d},"ivec<N>,ivec<N>":function(a,b,c){return this["vecN,vecN"](a,b,c)},"uvec<N>,uvec<N>":function(a,b,c){return this["vecN,vecN"](a,b,c)},"quat,quat":function(a,b,c){for(var e=this["float,float"],d=glm.bvec4(),h=0;4>h;h++)d[h]=e(a[h],b[h],c);return d},"mat<N>,mat<N>":function(){throw new GLM.GLMJSError("error: 'epsilonEqual' only accept floating-point and integer scalar or vector inputs");}}});
	GLM.$template.extend(GLM,GLM.$template["declare<T>"]({degrees:{"float":function(a){return this.GLM._degrees(a)},"vec<N>":function(a){return new this.GLM.vecN(this.GLM.$to_array(a).map(this.GLM._degrees))}},radians:{"float":function(a){return this.GLM._radians(a)},"vec<N>":function(a){return new this.GLM.vecN(this.GLM.$to_array(a).map(this.GLM._radians))}},sign:{"null":function(){return 0},undefined:function(){return NaN},string:function(){return NaN},"float":function(a){return GLM._sign(a)},"vec<N>":function(a){return new GLM.vecN(GLM.$to_array(a).map(GLM._sign))},
	"ivec<N>":function(a){return new GLM.ivecN(GLM.$to_array(a).map(GLM._sign))}},abs:{"float":function(a){return GLM._abs(a)},"vec<N>":function(a){return new GLM.vecN(GLM.$to_array(a).map(GLM._abs))}},fract:{"float":function(a){return GLM._fract(a)},"vec<N>":function(a){return new GLM.vecN(GLM.$to_array(a).map(GLM._fract))}},all:{"vec<N>":function(a){return N===GLM.$to_array(a).filter(Boolean).length},"bvec<N>":function(a){return N===GLM.$to_array(a).filter(Boolean).length},"ivec<N>":function(a){return N===
	GLM.$to_array(a).filter(Boolean).length},"uvec<N>":function(a){return N===GLM.$to_array(a).filter(Boolean).length},quat:function(a){return 4===GLM.$to_array(a).filter(Boolean).length}},$to_object:{vec2:function(a){return{x:a.x,y:a.y}},vec3:function(a){return{x:a.x,y:a.y,z:a.z}},vec4:function(a){return{x:a.x,y:a.y,z:a.z,w:a.w}},uvec2:function(a){return{x:a.x,y:a.y}},uvec3:function(a){return{x:a.x,y:a.y,z:a.z}},uvec4:function(a){return{x:a.x,y:a.y,z:a.z,w:a.w}},ivec2:function(a){return{x:a.x,y:a.y}},
	ivec3:function(a){return{x:a.x,y:a.y,z:a.z}},ivec4:function(a){return{x:a.x,y:a.y,z:a.z,w:a.w}},bvec2:function(a){return{x:!!a.x,y:!!a.y}},bvec3:function(a){return{x:!!a.x,y:!!a.y,z:!!a.z}},bvec4:function(a){return{x:!!a.x,y:!!a.y,z:!!a.z,w:!!a.w}},quat:function(a){return{w:a.w,x:a.x,y:a.y,z:a.z}},mat3:function(a){return{"0":this.vec3(a[0]),1:this.vec3(a[1]),2:this.vec3(a[2])}},mat4:function(a){return{"0":this.vec4(a[0]),1:this.vec4(a[1]),2:this.vec4(a[2]),3:this.vec4(a[3])}}},roll:{$atan2:Math.atan2,
	quat:function(a){return this.$atan2(2*(a.x*a.y+a.w*a.z),a.w*a.w+a.x*a.x-a.y*a.y-a.z*a.z)}},pitch:{$atan2:Math.atan2,quat:function(a){return this.$atan2(2*(a.y*a.z+a.w*a.x),a.w*a.w-a.x*a.x-a.y*a.y+a.z*a.z)}},yaw:{$asin:Math.asin,quat:function(a){return this.$asin(this.GLM.clamp(-2*(a.x*a.z-a.w*a.y),-1,1))}},eulerAngles:{quat:function(a){return this.GLM.vec3(this.GLM.pitch(a),this.GLM.yaw(a),this.GLM.roll(a))}}}),GLM.$template["declare<T,...>"]({$from_glsl:{string:function(a,b){var c;a.replace(/^([$\w]+)\(([-.0-9ef, ]+)\)$/,
	function(a,d,h){a=glm[d]||glm["$"+d];if(!a)throw new GLM.GLMJSError("glsl decoding issue: unknown type '"+d+"'");c=h.split(",").map(parseFloat);if(!b||b===a)c=a.apply(glm,c);else{if(!0===b||b===Array){for(;c.length<a.componentLength;)c.push(c[c.length-1]);return c}throw new GLM.GLMJSError("glsl decoding issue: second argument expected to be undefined|true|Array");}});return c}},$to_glsl:{"vec<N>":function(a,b){var c=GLM.$to_array(a);b&&("object"===typeof b&&"precision"in b)&&(c=c.map(function(a){return a.toFixed(b.precision)}));
	for(;c.length&&c[c.length-2]===c[c.length-1];)c.pop();return a.$type+"("+c+")"},"uvec<N>":function(a,b){return this.vecN(a,b)},"ivec<N>":function(a,b){return this.vecN(a,b)},"bvec<N>":function(a,b){return this.vecN(a,b)},quat:function(a,b){var c;b&&("object"===typeof b&&"precision"in b)&&(c=b.precision);return 0===a.x+a.y+a.z?"quat("+(void 0===c?a.w:a.w.toFixed(c))+")":this.vec4(a,b)},"mat<N>":function(a,b){var c;b&&("object"===typeof b&&"precision"in b)&&(c=b.precision);var e=GLM.$to_array(a);void 0!==
	c&&(e=e.map(function(a){return a.toFixed(c)}));return e.reduce(function(a,b){return a+1*b},0)===e[0]*N?"matN("+e[0]+")":"matN("+e+")"}},frexp:{"float":function(a,b){return 1===arguments.length?this["float,undefined"](a):this["float,array"](a,b)},"vec<N>":function(a,b){if(2>arguments.length)throw new GLM.GLMJSError("frexp(vecN, ivecN) expected ivecN as second parameter");return GLM.vecN(GLM.$to_array(a).map(function(a,e){var d=GLM._frexp(a);b[e]=d[1];return d[0]}))},"float,undefined":function(a){return GLM._frexp(a)},
	"float,array":function(a,b){return GLM._frexp(a,b)}},ldexp:{"float":GLM._ldexp,"vec<N>":function(a,b){return GLM.vecN(GLM.$to_array(a).map(function(a,e){return GLM._ldexp(a,b[e])}))}}}));
	GLM.$template["declare<T,V,...>"]({rotate:{"float,vec3":function(a,b){return this.GLM.$outer.mat4_angleAxis(a,b)},"mat4,float":function(a,b,c){return a.mul(this.GLM.$outer.mat4_angleAxis(b,c))}},scale:{$outer:GLM.$outer,"mat4,vec3":function(a,b){return a.mul(this.$outer.mat4_scale(b))},"vec3,undefined":function(a){return this.$outer.mat4_scale(a)}},translate:{"mat4,vec3":function(a,b){return a.mul(this.GLM.$outer.mat4_translation(b))},"vec3,undefined":function(a){return this.GLM.$outer.mat4_translation(a)}},
	angleAxis:{"float,vec3":function(a,b){return this.GLM.$outer.quat_angleAxis(a,b)}},min:{"float,float":function(a,b){return this.GLM._min(a,b)},"vec<N>,float":function(a,b){return new this.GLM.vecN(this.GLM.$to_array(a).map(function(a){return this.GLM._min(a,b)}.bind(this)))}},max:{"float,float":function(a,b){return this.GLM._max(a,b)},"vec<N>,float":function(a,b){return new this.GLM.vecN(this.GLM.$to_array(a).map(function(a){return this.GLM._max(a,b)}.bind(this)))}},equal:{"float,float":GLM._equal,
	"vec<N>,vec<N>":function(a,b){for(var c=this["float,float"],e=glm.bvecN(),d=0;d<N;d++)e[d]=c(a[d],b[d]);return e},"bvec<N>,bvec<N>":function(a,b){return this["vecN,vecN"](a,b)},"ivec<N>,ivec<N>":function(a,b){return this["vecN,vecN"](a,b)},"uvec<N>,uvec<N>":function(a,b){return this["vecN,vecN"](a,b)},"quat,quat":function(a,b){for(var c=this["float,float"],e=glm.bvec4(),d=0;4>d;d++)e[d]=c(a[d],b[d]);return e}},_slerp:{"quat,quat":function(a,b,c){var e=b,d=glm.dot(glm.vec4(a),glm.vec4(b));0>d&&(e=
	b.mul(-1),d=-d);if(d>1-glm.epsilon())return glm.quat(glm.mix(a.w,e.w,c),glm.mix(a.x,e.x,c),glm.mix(a.y,e.y,c),glm.mix(a.z,e.z,c));b=Math.acos(d);return(a.mul(Math.sin((1-c)*b))+e.mul(Math.sin(c*b)))/Math.sin(b)}},rotation:{"vec3,vec3":function(a,b){var c=this.$dot(a,b),e=new a.constructor(new a.elements.constructor(3));if(c>=1-this.$epsilon)return this.$quat();if(c<-1+this.$epsilon)return e=this.$cross(this.$m[2],a),this.$length2(e)<this.$epsilon&&(e=this.$cross(this.$m[0],a)),e=this.$normalize(e),
	this.$angleAxis(this.$pi,e);var e=this.$cross(a,b),c=this.$sqrt(2*(1+c)),d=1/c;return this.$quat(0.5*c,e.x*d,e.y*d,e.z*d)}},project:{"vec3,mat4":function(a,b,c,e){a=glm.vec4(a,1);a=b["*"](a);a=c["*"](a);a["/="](a.w);a=a["*"](0.5)["+"](0.5);a[0]=a[0]*e[2]+e[0];a[1]=a[1]*e[3]+e[1];return glm.vec3(a)}},unProject:{"vec3,mat4":function(a,b,c,e){b=glm.inverse(c["*"](b));a=glm.vec4(a,1);a.x=(a.x-e[0])/e[2];a.y=(a.y-e[1])/e[3];a=a["*"](2)["-"](glm.vec4(1));e=b["*"](a);e["/="](e.w);return glm.vec3(e)}},orientedAngle:{"vec3,vec3":function(a,
	b,c){var e=Math.acos(glm.clamp(glm.dot(a,b),0,1));return glm.mix(e,-e,0>glm.dot(c,glm.cross(a,b))?1:0)}}});
	GLM.$to_string=GLM.$template["declare<T,...>"]({$to_string:{"function":function(a){return"[function "+(a.name||"anonymous")+"]"},ArrayBuffer:function(a){return"[object ArrayBuffer "+JSON.stringify({byteLength:a.byteLength})+"]"},Float32Array:function(a){return"[object Float32Array "+JSON.stringify({length:a.length,byteOffset:a.byteOffset,byteLength:a.byteLength,BPE:a.BYTES_PER_ELEMENT})+"]"},"float":function(a,b){return GLM.$toFixedString("float",{value:a},["value"],b&&b.precision)},string:function(a){return a},
	bool:function(a){return"bool("+a+")"},"vec<N>":function(a,b){return GLM.$toFixedString(a.$type_name,a,a.$components,b&&b.precision)},"uvec<N>":function(a,b){return GLM.$toFixedString(a.$type_name,a,a.$components,b&&"object"===typeof b&&b.precision||0)},"ivec<N>":function(a,b){return GLM.$toFixedString(a.$type_name,a,a.$components,b&&"object"===typeof b&&b.precision||0)},"bvec<N>":function(a){return a.$type_name+"("+GLM.$to_array(a).map(Boolean).join(", ")+")"},"mat<N>":function(a,b){var c=[0,1,2,
	3].slice(0,N).map(function(b){return a[b]}).map(function(a){return GLM.$toFixedString("\t",a,a.$components,b&&b.precision)});return a.$type_name+"(\n"+c.join(", \n")+"\n)"},quat:function(a,b){a=GLM.degrees(GLM.eulerAngles(a));return GLM.$toFixedString("<quat>"+a.$type_name,a,["x","y","z"],b&&b.precision)}}}).$to_string;
	GLM.$template["declare<T,V,...>"]({copy:{$op:"=","vec<N>,vec<N>":function(a,b){a.elements.set(b.elements);return a},"vec<N>,array<N>":function(a,b){a.elements.set(b);return a},"vec<N>,uvec<N>":function(a,b){a.elements.set(b.elements);return a},"vec<N>,ivec<N>":function(a,b){a.elements.set(b.elements);return a},"vec<N>,bvec<N>":function(a,b){a.elements.set(b.elements);return a},"uvec<N>,uvec<N>":function(a,b){a.elements.set(b.elements);return a},"uvec<N>,array<N>":function(a,b){a.elements.set(b);return a},
	"uvec<N>,vec<N>":function(a,b){a.elements.set(b.elements);return a},"uvec<N>,ivec<N>":function(a,b){a.elements.set(b.elements);return a},"uvec<N>,bvec<N>":function(a,b){a.elements.set(b.elements);return a},"ivec<N>,ivec<N>":function(a,b){a.elements.set(b.elements);return a},"ivec<N>,array<N>":function(a,b){a.elements.set(b);return a},"ivec<N>,vec<N>":function(a,b){a.elements.set(b.elements);return a},"ivec<N>,uvec<N>":function(a,b){a.elements.set(b.elements);return a},"ivec<N>,bvec<N>":function(a,
	b){a.elements.set(b.elements);return a},"bvec<N>,ivec<N>":function(a,b){a.elements.set(b.elements);return a},"bvec<N>,array<N>":function(a,b){a.elements.set(b);return a},"bvec<N>,vec<N>":function(a,b){a.elements.set(b.elements);return a},"bvec<N>,uvec<N>":function(a,b){a.elements.set(b.elements);return a},"bvec<N>,bvec<N>":function(a,b){a.elements.set(b.elements);return a},"quat,quat":function(a,b){a.elements.set(b.elements);return a},"mat<N>,mat<N>":function(a,b){a.elements.set(b.elements);return a},
	"mat<N>,array<N>":function(a,b){b=b.reduce(function(a,b){if(!a.concat)throw new GLM.GLMJSError("matN,arrayN -- [[.length===4] x 4] expected");return a.concat(b)});if(b===N)throw new GLM.GLMJSError("matN,arrayN -- [[N],[N],[N],[N]] expected");return a["="](b)},"mat<N>,array<N*N>":function(a,b){a.elements.set(b);return a},"mat4,array9":function(a,b){a.elements.set((new GLM.mat4(b)).elements);return a}},sub:{$op:"-",_sub:function(a,b){return this.GLM.$to_array(a).map(function(a,e){return a-b[e]})},"vec<N>,vec<N>":function(a,
	b){return new this.GLM.vecN(this._sub(a,b))},"vec<N>,uvec<N>":function(a,b){return new this.GLM.vecN(this._sub(a,b))},"uvec<N>,uvec<N>":function(a,b){return new this.GLM.uvecN(this._sub(a,b))},"uvec<N>,ivec<N>":function(a,b){return new this.GLM.uvecN(this._sub(a,b))},"vec<N>,ivec<N>":function(a,b){return new this.GLM.vecN(this._sub(a,b))},"ivec<N>,uvec<N>":function(a,b){return new this.GLM.ivecN(this._sub(a,b))},"ivec<N>,ivec<N>":function(a,b){return new this.GLM.ivecN(this._sub(a,b))}},sub_eq:{$op:"-=",
	"vec<N>,vec<N>":function(a,b){for(var c=a.elements,e=b.elements,d=0;d<N;d++)c[d]-=e[d];return a},"vec<N>,uvec<N>":function(a,b){return this["vecN,vecN"](a,b)},"uvec<N>,uvec<N>":function(a,b){return this["vecN,vecN"](a,b)},"uvec<N>,ivec<N>":function(a,b){return this["vecN,vecN"](a,b)},"vec<N>,ivec<N>":function(a,b){return this["vecN,vecN"](a,b)},"ivec<N>,ivec<N>":function(a,b){return this["vecN,vecN"](a,b)},"ivec<N>,uvec<N>":function(a,b){return this["vecN,vecN"](a,b)}},add:{$op:"+",_add:function(a,
	b){return this.GLM.$to_array(a).map(function(a,e){return a+b[e]})},"vec<N>,float":function(a,b){return new this.GLM.vecN(this._add(a,[b,b,b,b]))},"vec<N>,vec<N>":function(a,b){return new this.GLM.vecN(this._add(a,b))},"vec<N>,uvec<N>":function(a,b){return new this.GLM.vecN(this._add(a,b))},"uvec<N>,uvec<N>":function(a,b){return new this.GLM.uvecN(this._add(a,b))},"uvec<N>,ivec<N>":function(a,b){return new this.GLM.uvecN(this._add(a,b))},"vec<N>,ivec<N>":function(a,b){return new this.GLM.vecN(this._add(a,
	b))},"ivec<N>,ivec<N>":function(a,b){return new this.GLM.ivecN(this._add(a,b))},"ivec<N>,uvec<N>":function(a,b){return new this.GLM.ivecN(this._add(a,b))}},add_eq:{$op:"+=","vec<N>,vec<N>":function(a,b){for(var c=a.elements,e=b.elements,d=0;d<N;d++)c[d]+=e[d];return a},"vec<N>,uvec<N>":function(a,b){return this["vecN,vecN"](a,b)},"uvec<N>,uvec<N>":function(a,b){return this["vecN,vecN"](a,b)},"uvec<N>,ivec<N>":function(a,b){return this["vecN,vecN"](a,b)},"vec<N>,ivec<N>":function(a,b){return this["vecN,vecN"](a,
	b)},"ivec<N>,ivec<N>":function(a,b){return this["vecN,vecN"](a,b)},"ivec<N>,uvec<N>":function(a,b){return this["vecN,vecN"](a,b)}},div:{$op:"/","vec<N>,float":function(a,b){return new this.GLM.vecN(this.GLM.$to_array(a).map(function(a){return a/b}))}},div_eq:{$op:"/=","vec<N>,float":function(a,b){for(var c=0;c<N;c++)a.elements[c]/=b;return a}},mul:{$op:"*","vec<N>,vec<N>":function(a,b){return new this.GLM.vecN(this.GLM.$to_array(a).map(function(a,e){return a*b[e]}))}},eql_epsilon:function(a){return{$op:"~=",
	"vec<N>,vec<N>":a,"mat<N>,mat<N>":a,"quat,quat":a,"uvec<N>,uvec<N>":a,"ivec<N>,ivec<N>":a}}(function(a,b){return this.GLM.all(this.GLM.epsilonEqual(a,b,this.GLM.epsilon()))}),eql:function(a){return{$op:"==","mat<N>,mat<N>":function(a,c){return c.elements.length===glm.$to_array(a).filter(function(a,b){return a===c.elements[b]}).length},"vec<N>,vec<N>":a,"quat,quat":a,"uvec<N>,uvec<N>":a,"ivec<N>,ivec<N>":a,"bvec<N>,bvec<N>":a}}(function(a,b){return GLM.all(GLM.equal(a,b))})});
	GLM.string={$type_name:"string",$:{}};GLM.number={$type_name:"float",$:{}};GLM["boolean"]={$type:"bool",$type_name:"bool",$:{}};
	GLM.vec2=GLM.$template.GLMType("vec2",{name:"fvec2",identity:[0,0],components:["xy","01"],undefined0:function(){return this.identity},number1:function(a){return[a,a]},number2:function(a,b){return[a,b]},object1:function(a){if(null!==a)switch(a.length){case 4:case 3:case 2:return[a[0],a[1]];default:if("y"in a&&"x"in a){if(typeof a.x!==typeof a.y)throw new GLM.GLMJSError("unrecognized .x-ish object passed to GLM.vec2: "+a);return"string"===typeof a.x?[1*a.x,1*a.y]:[a.x,a.y]}}throw new GLM.GLMJSError("unrecognized object passed to GLM.vec2: "+
	a);}});
	GLM.uvec2=GLM.$template.GLMType("uvec2",{name:"uvec2",identity:[0,0],components:["xy","01"],_clamp:function(a){return~~a},undefined0:function(){return this.identity},number1:function(a){a=this._clamp(a);return[a,a]},number2:function(a,b){a=this._clamp(a);b=this._clamp(b);return[a,b]},object1:function(a){switch(a.length){case 4:case 3:case 2:return[a[0],a[1]].map(this._clamp);default:if("y"in a&&"x"in a){if(typeof a.x!==typeof a.y)throw new GLM.GLMJSError("unrecognized .x-ish object passed to GLM."+this.name+
	": "+a);return[a.x,a.y].map(this._clamp)}}throw new GLM.GLMJSError("unrecognized object passed to GLM."+this.name+": "+a);}});
	GLM.vec3=GLM.$template.GLMType("vec3",{name:"fvec3",identity:[0,0,0],components:["xyz","012","rgb"],undefined0:function(){return GLM.vec3.$.identity},number1:function(a){return[a,a,a]},number2:function(a,b){return[a,b,b]},number3:function(a,b,c){return[a,b,c]},Error:GLM.GLMJSError,object1:function(a){if(a)switch(a.length){case 4:case 3:return[a[0],a[1],a[2]];case 2:return[a[0],a[1],a[1]];default:if("z"in a&&"x"in a){if(typeof a.x!==typeof a.y)throw new this.Error("unrecognized .x-ish object passed to GLM.vec3: "+
	a);return"string"===typeof a.x?[1*a.x,1*a.y,1*a.z]:[a.x,a.y,a.z]}}throw new this.Error("unrecognized object passed to GLM.vec3: "+a);},object2:function(a,b){if(a instanceof GLM.vec2||a instanceof GLM.uvec2||a instanceof GLM.ivec2||a instanceof GLM.bvec2)return[a.x,a.y,b];throw new GLM.GLMJSError("unrecognized object passed to GLM.vec3(o,z): "+[a,b]);}});
	GLM.uvec3=GLM.$template.GLMType("uvec3",{name:"uvec3",identity:[0,0,0],components:["xyz","012"],_clamp:GLM.uvec2.$._clamp,undefined0:function(){return this.identity},number1:function(a){a=this._clamp(a);return[a,a,a]},number2:function(a,b){a=this._clamp(a);b=this._clamp(b);return[a,b,b]},number3:function(a,b,c){a=this._clamp(a);b=this._clamp(b);c=this._clamp(c);return[a,b,c]},object1:function(a){if(a)switch(a.length){case 4:case 3:return[a[0],a[1],a[2]].map(this._clamp);case 2:return[a[0],a[1],a[1]].map(this._clamp);
	default:if("z"in a&&"x"in a){if(typeof a.x!==typeof a.y)throw new GLM.GLMJSError("unrecognized .x-ish object passed to GLM."+this.name+": "+a);return[a.x,a.y,a.z].map(this._clamp)}}throw new GLM.GLMJSError("unrecognized object passed to GLM."+this.name+": "+a);},object2:function(a,b){if(a instanceof GLM.vec2)return[a.x,a.y,b].map(this._clamp);if(a instanceof GLM.uvec2||a instanceof GLM.ivec2||a instanceof GLM.bvec2)return[a.x,a.y,this._clamp(b)];throw new GLM.GLMJSError("unrecognized object passed to GLM."+
	this.name+"(o,z): "+[a,b]);}});
	GLM.vec4=GLM.$template.GLMType("vec4",{name:"fvec4",identity:[0,0,0,0],components:["xyzw","0123","rgba"],undefined0:function(){return this.identity},number1:function(a){return[a,a,a,a]},number2:function(a,b){return[a,b,b,b]},number3:function(a,b,c){return[a,b,c,c]},number4:function(a,b,c,e){return[a,b,c,e]},Error:GLM.GLMJSError,object1:function(a){if(a)switch(a.length){case 4:return[a[0],a[1],a[2],a[3]];case 3:return[a[0],a[1],a[2],a[2]];case 2:return[a[0],a[1],a[1],a[1]];default:if("w"in a&&"x"in
	a){if(typeof a.x!==typeof a.w)throw new this.Error("unrecognized .x-ish object passed to GLM.vec4: "+a);return"string"===typeof a.x?[1*a.x,1*a.y,1*a.z,1*a.w]:[a.x,a.y,a.z,a.w]}}throw new this.Error("unrecognized object passed to GLM.vec4: "+[a,a&&a.$type]);},$GLM:GLM,object2:function(a,b){if(a instanceof this.$GLM.vec3||a instanceof this.$GLM.uvec3||a instanceof this.$GLM.ivec3||a instanceof this.$GLM.bvec3)return[a.x,a.y,a.z,b];throw new this.$GLM.GLMJSError("unrecognized object passed to GLM.vec4(o,w): "+
	[a,b]);},object3:function(a,b,c){if(a instanceof this.$GLM.vec2||a instanceof this.$GLM.uvec2||a instanceof this.$GLM.ivec2||a instanceof this.$GLM.bvec2)return[a.x,a.y,b,c];throw new this.$GLM.GLMJSError("unrecognized object passed to GLM.vec4(o,z,w): "+[a,b,c]);}});
	GLM.uvec4=GLM.$template.GLMType("uvec4",{name:"uvec4",identity:[0,0,0,0],components:["xyzw","0123"],_clamp:GLM.uvec2.$._clamp,undefined0:function(){return this.identity},number1:function(a){a=this._clamp(a);return[a,a,a,a]},number2:function(a,b){a=this._clamp(a);b=this._clamp(b);return[a,b,b,b]},number3:function(a,b,c){a=this._clamp(a);b=this._clamp(b);c=this._clamp(c);return[a,b,c,c]},number4:function(a,b,c,e){return[a,b,c,e].map(this._clamp)},Error:GLM.GLMJSError,object1:function(a){if(a)switch(a.length){case 4:return[a[0],
	a[1],a[2],a[3]].map(this._clamp);case 3:return[a[0],a[1],a[2],a[2]].map(this._clamp);case 2:return[a[0],a[1],a[1],a[1]].map(this._clamp);default:if("w"in a&&"x"in a){if(typeof a.x!==typeof a.y)throw new this.Error("unrecognized .x-ish object passed to GLM."+this.name+": "+a);return[a.x,a.y,a.z,a.w].map(this._clamp)}}throw new GLM.GLMJSError("unrecognized object passed to GLM."+this.name+": "+[a,a&&a.$type]);},object2:function(a,b){if(a instanceof GLM.vec3)return[a.x,a.y,a.z,b].map(this._clamp);if(a instanceof
	GLM.uvec3||a instanceof GLM.ivec3||a instanceof GLM.bvec3)return[a.x,a.y,a.z,this._clamp(b)];throw new GLM.GLMJSError("unrecognized object passed to GLM."+this.name+"(o,w): "+[a,b]);},object3:function(a,b,c){if(a instanceof GLM.vec2)return[a.x,a.y,b,c].map(this._clamp);if(a instanceof GLM.uvec2||a instanceof GLM.ivec2||a instanceof GLM.bvec2)return[a.x,a.y,this._clamp(b),this._clamp(c)];throw new GLM.GLMJSError("unrecognized object passed to GLM."+this.name+"(o,z,w): "+[a,b,c]);}});
	GLM.ivec2=GLM.$template.GLMType("ivec2",GLM.$template.extend({},GLM.uvec2.$,{name:"ivec2"}));GLM.ivec3=GLM.$template.GLMType("ivec3",GLM.$template.extend({},GLM.uvec3.$,{name:"ivec3"}));GLM.ivec4=GLM.$template.GLMType("ivec4",GLM.$template.extend({},GLM.uvec4.$,{name:"ivec4"}));GLM.bvec2=GLM.$template.GLMType("bvec2",GLM.$template.extend({},GLM.uvec2.$,{name:"bvec2",boolean1:GLM.uvec2.$.number1,boolean2:GLM.uvec2.$.number2}));
	GLM.bvec3=GLM.$template.GLMType("bvec3",GLM.$template.extend({},GLM.uvec3.$,{name:"bvec3",boolean1:GLM.uvec3.$.number1,boolean2:GLM.uvec3.$.number2,boolean3:GLM.uvec3.$.number3}));GLM.bvec4=GLM.$template.GLMType("bvec4",GLM.$template.extend({},GLM.uvec4.$,{name:"bvec4",boolean1:GLM.uvec4.$.number1,boolean2:GLM.uvec4.$.number2,boolean3:GLM.uvec4.$.number3,boolean4:GLM.uvec4.$.number4}));GLM.bvec2.$._clamp=GLM.bvec3.$._clamp=GLM.bvec4.$._clamp=function(a){return!!a};
	GLM.mat3=GLM.$template.GLMType("mat3",{name:"mat3x3",identity:[1,0,0,0,1,0,0,0,1],undefined0:function(){return this.identity},number1:function(a){return 1===a?this.identity:[a,0,0,0,a,0,0,0,a]},number9:function(a,b,c,e,d,h,j,g,k){return arguments},Error:GLM.GLMJSError,$vec3:GLM.vec3,object1:function(a){if(a){var b=a.elements||a;if(16===b.length)return[b[0],b[1],b[2],b[4],b[5],b[6],b[8],b[9],b[10]];if(9===b.length)return b;if(0 in b&&1 in b&&2 in b&&!(3 in b)&&"object"===typeof b[2])return[b[0],b[1],
	b[2]].map(this.$vec3.$.object1).reduce(function(a,b){return a.concat(b)})}throw new this.Error("unrecognized object passed to GLM.mat3: "+a);},object3:function(a,b,c){return[a,b,c].map(glm.$to_array).reduce(function(a,b){return a.concat(b)})}});
	GLM.mat4=GLM.$template.GLMType("mat4",{name:"mat4x4",identity:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],undefined0:function(){return this.identity},number16:function(a,b,c,e,d,h,j,g,k,i,w,r,m,q,s,t){return arguments},number1:function(a){return 1===a?this.identity:[a,0,0,0,0,a,0,0,0,0,a,0,0,0,0,a]},Error:GLM.GLMJSError,$vec4:GLM.vec4,object1:function(a){var b;if(a){b=a.elements||a;if(9===b.length)return[b[0],b[1],b[2],0,b[3],b[4],b[5],0,b[6],b[7],b[8],0,0,0,0,1];if(4===b.length&&b[0]&&4===b[0].length)return b[0].concat(b[1],
	b[2],b[3]);if(16===b.length)return b;if(0 in b&&1 in b&&2 in b&&3 in b&&!(4 in b)&&"object"===typeof b[3])return[b[0],b[1],b[2],b[3]].map(this.$vec4.$.object1).reduce(function(a,b){return a.concat(b)})}throw new this.Error("unrecognized object passed to GLM.mat4: "+[a,b&&b.length]);},object4:function(a,b,c,e){return[a,b,c,e].map(glm.$to_array).reduce(function(a,b){return a.concat(b)})}});
	GLM.quat=GLM.$template.GLMType("quat",{identity:[0,0,0,1],components:["xyzw","0123"],undefined0:function(){return this.identity},number1:function(a){if(1!==a)throw Error("only quat(1) syntax supported for quat(number1 args)...");return this.identity},number4:function(a,b,c,e){return[b,c,e,a]},$GLM:GLM,$M3:GLM.mat3(),$quat_array_from_zyx:function(a){var b=this.$M3;return this.$GLM.$outer.quat_angleAxis(a.z,b[2]).mul(this.$GLM.$outer.quat_angleAxis(a.y,b[1])).mul(this.$GLM.$outer.quat_angleAxis(a.x,
	b[0])).elements},object1:function(a){if(a){if(a instanceof this.$GLM.mat4)return this.$GLM.$outer.quat_array_from_mat4(a);if(4===a.length)return[a[0],a[1],a[2],a[3]];if(a instanceof this.$GLM.quat)return[a.x,a.y,a.z,a.w];if(a instanceof this.$GLM.vec3)return this.$quat_array_from_zyx(a);if("w"in a&&"x"in a)return"string"===typeof a.x?[1*a.x,1*a.y,1*a.z,1*a.w]:[a.x,a.y,a.z,a.w]}throw new this.$GLM.GLMJSError("unrecognized object passed to GLM.quat.object1: "+[a,a&&a.$type,typeof a,a&&a.constructor]);
	}});
	(function(){var a=function(a,b,c,e){var k={def:function(b,c){this[b]=c;Object.defineProperty(a.prototype,b,c)}};a.$properties=a.$properties||k;var i=a.$properties.def.bind(a.$properties),w=[0,1,2,3].map(function(a){return{enumerable:c,get:function(){return this.elements[a]},set:function(b){this.elements[a]=b}}});b.forEach(function(a,b){i(a,w[b])});if(isNaN(b[0])&&!/^_/.test(b[0])){var k=b.slice(),r=GLM.$subarray;do(function(a,b,c){"quat"===b&&(b="vec"+c);var d=GLM[b];i(a,{enumerable:!1,get:function(){return new d(r(this.elements,0*
	c,1*c))},set:function(a){return(new d(r(this.elements,0*c,1*c)))["="](a)}})})(k.join(""),a.prototype.$type.replace(/[1-9]$/,k.length),k.length);while(k[1]!=k.pop());if(e)return a.$properties;k=b.slice();if(b={xyz:{yz:1},xyzw:{yzw:1,yz:1,zw:2}}[k.join("")])for(var m in b)(function(a,b,c,d){i(a,{enumerable:!1,get:function(){return new GLM[b](GLM.$subarray(this.elements,0*c+d,1*c+d))},set:function(a){return(new GLM[b](GLM.$subarray(this.elements,0*c+d,1*c+d)))["="](a)}})})(m,a.prototype.$type.replace(/[1-9]$/,
	m.length),m.length,b[m])}return a.$properties};a(GLM.vec2,GLM.vec2.$.components[0],!0);a(GLM.vec2,GLM.vec2.$.components[1]);a(GLM.vec3,GLM.vec3.$.components[0],!0);a(GLM.vec3,GLM.vec3.$.components[1]);a(GLM.vec3,GLM.vec3.$.components[2]);a(GLM.vec4,GLM.vec4.$.components[0],!0);a(GLM.vec4,GLM.vec4.$.components[1]);a(GLM.vec4,GLM.vec4.$.components[2]);a(GLM.quat,GLM.quat.$.components[0],!0,"noswizzles");a(GLM.quat,GLM.quat.$.components[1]);GLM.quat.$properties.def("wxyz",{enumerable:!1,get:function(){return new GLM.vec4(this.w,
	this.x,this.y,this.z)},set:function(a){a=GLM.vec4(a);return this["="](GLM.quat(a.x,a.y,a.z,a.w))}});"uvec2 uvec3 uvec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4".split(" ").forEach(function(b){a(GLM[b],GLM[b].$.components[0],!0);a(GLM[b],GLM[b].$.components[1])});Object.defineProperty(GLM.quat.prototype,"_x",{get:function(){throw Error("erroneous quat._x access");}});var b={2:{yx:{enumerable:!1,get:function(){return new GLM.vec2(this.y,this.x)},set:function(a){a=GLM.vec2(a);this.y=a[0];this.x=a[1]}}},3:{xz:{enumerable:!1,
	get:function(){return new GLM.vec2(this.x,this.z)},set:function(a){a=GLM.vec2(a);this.x=a[0];this.z=a[1]}},zx:{enumerable:!1,get:function(){return new GLM.vec2(this.z,this.x)},set:function(a){a=GLM.vec2(a);this.z=a[0];this.x=a[1]}},xzy:{enumerable:!1,get:function(){return new GLM.vec3(this.x,this.z,this.y)},set:function(a){a=GLM.vec3(a);this.x=a[0];this.z=a[1];this.y=a[2]}}},4:{xw:{enumerable:!1,get:function(){return new GLM.vec2(this.x,this.w)},set:function(a){a=GLM.vec2(a);this.x=a[0];this.w=a[1]}},
	wz:{enumerable:!1,get:function(){return new GLM.vec2(this.w,this.z)},set:function(a){a=GLM.vec2(a);this.w=a[0];this.z=a[1]}},wxz:{enumerable:!1,get:function(){return new GLM.vec3(this.w,this.x,this.z)},set:function(a){a=GLM.vec3(a);this.w=a[0];this.x=a[1];this.z=a[2];return this}},xyw:{enumerable:!1,get:function(){return new GLM.vec3(this.x,this.y,this.w)},set:function(a){a=GLM.vec3(a);this.x=a[0];this.y=a[1];this.w=a[2];return this}},xzw:{enumerable:!1,get:function(){return new GLM.vec3(this.x,this.z,
	this.w)},set:function(a){a=GLM.vec3(a);this.x=a[0];this.z=a[1];this.w=a[2]}},wxyz:{enumerable:!1,get:function(){return new GLM.vec4(this.w,this.x,this.y,this.z)},set:function(a){a=GLM.vec4(a);this.w=a[0];this.x=a[1];this.y=a[2];this.z=a[3];return this}}}},c;for(c in b)for(var e in b[c])2>=c&&GLM.vec2.$properties.def(e,b[c][e]),3>=c&&GLM.vec3.$properties.def(e,b[c][e]),4>=c&&GLM.vec4.$properties.def(e,b[c][e]);GLM.$partition=function(a,b,c,e){if(void 0===c)throw new GLM.GLMJSError("nrows is undefined");
	var k=b.$.identity.length;c=c||k;for(var i=function(a){3<GLM.$DEBUG&&GLM.$outer.console.debug("CACHEDBG: "+a)},w=0;w<c;w++)(function(c){var j=e&&e+c,q=c*k;Object.defineProperty(a,c,{configurable:!0,enumerable:!0,set:function(e){if(e instanceof b)this.elements.set(e.elements,q);else if(e&&e.length===k)this.elements.set(e,q);else throw new GLM.GLMJSError("unsupported argtype to "+(a&&a.$type)+"["+c+"] setter: "+[typeof e,e]);},get:function(){if(e){if(this[j])return c||i("cache hit "+j),this[j];c||i("cache miss "+
	j)}var a,d=new b(a=GLM.$subarray(this.elements,q,q+k));if(d.elements!==a)throw new GLM.GLMJSError("v.elements !== t "+[GLM.$subarray,d.elements.constructor===a.constructor,d.elements.buffer===a.buffer]);e&&Object.defineProperty(this,j,{configurable:!0,enumerable:!1,value:d});return d}})})(w)};GLM.$partition(GLM.mat4.prototype,GLM.vec4,4,"_cache_");GLM.$partition(GLM.mat3.prototype,GLM.vec3,3,"_cache_")})();
	GLM.$dumpTypes=function(a){GLM.$types.forEach(function(b){GLM[b].componentLength&&a("GLM."+b,JSON.stringify({"#type":GLM[b].prototype.$type_name,"#floats":GLM[b].componentLength,"#bytes":GLM[b].BYTES_PER_ELEMENT}))})};
	GLM.$init=function(a){a.prefix&&(GLMJS_PREFIX=a.prefix);GLM.$prefix=GLMJS_PREFIX;var b=a.log||function(){};try{b("GLM-js: ENV: "+_ENV._VERSION)}catch(c){}b("GLM-JS: initializing: "+JSON.stringify(a,0,2));b(JSON.stringify({functions:Object.keys(GLM.$outer.functions)}));var e=GLM.mat4,d=GLM.$outer;GLM.toMat4=function(a){return new e(d.mat4_array_from_quat(a))};GLM.$template.extend(GLM.rotation.$template,{$quat:GLM.quat,$dot:GLM.dot.link("vec3,vec3"),$epsilon:GLM.epsilon(),$m:GLM.mat3(),$pi:GLM.pi(),
	$length2:GLM.length2.link("vec3"),$cross:GLM.cross.link("vec3,vec3"),$normalize:GLM.normalize.link("vec3"),$angleAxis:GLM.angleAxis.link("float,vec3"),$sqrt:GLM.sqrt});GLM.$symbols=[];for(var h in GLM)"function"===typeof GLM[h]&&/^[a-z]/.test(h)&&GLM.$symbols.push(h);GLM.$types.forEach(function(a){var b=GLM[a].prototype.$type,c;for(c in GLM.$outer.functions){var d=GLM.$outer.functions[c];d.$op&&(GLM.$DEBUG&&GLM.$outer.console.debug("mapping operator<"+b+"> "+c+" / "+d.$op),GLM[a].prototype[c]=d,GLM[a].prototype[d.$op]=
	d)}});b("GLM-JS: "+GLM.version+" emulating GLM_VERSION="+GLM.GLM_VERSION+" vendor_name="+a.vendor_name+" vendor_version="+a.vendor_version);glm.vendor=a};
	GLM.using_namespace=function(a){GLM.$DEBUG&&GLM.$outer.console.debug("GLM.using_namespace munges globals; it should probably not be used!");GLM.using_namespace.$tmp={ret:void 0,tpl:a,names:GLM.$symbols,saved:{},evals:[],restore:[],before:[],after:[]};eval(GLM.using_namespace.$tmp.names.map(function(a,c){return"GLM.using_namespace.$tmp.saved['"+a+"'] = GLM.using_namespace.$tmp.before["+c+"] = 'undefined' !== typeof "+a+";"}).join("\n"));GLM.$DEBUG&&console.warn("GLM.using_namespace before #globals: "+
	GLM.using_namespace.$tmp.before.length);GLM.using_namespace.$tmp.names.map(function(a){GLM.using_namespace.$tmp.restore.push(a+"=GLM.using_namespace.$tmp.saved['"+a+"'];"+("GLM.using_namespace.$tmp.saved['"+a+"']=undefined;delete GLM.using_namespace.$tmp.saved['"+a+"'];"));GLM.using_namespace.$tmp.evals.push(a+"=GLM."+a+";")});eval(GLM.using_namespace.$tmp.evals.join("\n"));GLM.using_namespace.$tmp.ret=a();eval(GLM.using_namespace.$tmp.restore.join("\n"));eval(GLM.using_namespace.$tmp.names.map(function(a,
	c){return"GLM.using_namespace.$tmp.after["+c+"] = 'undefined' !== typeof "+a+";"}).join("\n"));GLM.$DEBUG&&console.warn("GLM.using_namespace after #globals: "+GLM.using_namespace.$tmp.after.length);a=GLM.using_namespace.$tmp.ret;delete GLM.using_namespace.$tmp;return a};
	function $GLM_extern(a,b){b=b||a;return function(){GLM[b]=GLM.$outer.functions[a]||GLM.$outer[a];if(!GLM[b])throw new GLM.GLMJSError("$GLM_extern: unresolved external symbol: "+a);GLM.$DEBUG&&GLM.$outer.console.debug("$GLM_extern: resolved external symbol "+a+" "+typeof GLM[b]);return GLM[b].apply(this,arguments)}}
	function GLM_polyfills(){var a={};"bind"in Function.prototype||(a.bind=Function.prototype.bind=function(a){function c(){}if("function"!==typeof this)throw new TypeError("not callable");var e=[].slice,d=e.call(arguments,1),h=this,j=function(){return h.apply(this instanceof c?this:a||global,d.concat(e.call(arguments)))};c.prototype=this.prototype||c.prototype;j.prototype=new c;return j});return a}
	$GLM_reset_logging.current=function(){return{$GLM_log:"undefined"!==typeof $GLM_log&&$GLM_log,$GLM_console_log:"undefined"!==typeof $GLM_console_log&&$GLM_console_log,$GLM_console_prefixed:"undefined"!==typeof $GLM_console_prefixed&&$GLM_console_prefixed,console:GLM.$outer.console}};
	function $GLM_reset_logging(a){a&&"object"===typeof a&&($GLM_log=a.$GLM_log,$GLM_console_log=a.$GLM_console_log,$GLM_console_factory=a.$GLM_console_factory,GLM.$outer.console=a.console,a=!1);if(a||"undefined"===typeof $GLM_log)$GLM_log=function(a,b){GLM.$outer.console.log.apply(GLM.$outer.console,[].slice.call(arguments).map(function(a){var b=typeof a;return"xboolean"===b||"string"===b?a+"":GLM.$isGLMObject(a)||!isNaN(a)?GLM.to_string(a):a+""}))};if(a||"undefined"===typeof $GLM_console_log)$GLM_console_log=
	function(a,b){(console[a]||function(){}).apply(console,[].slice.call(arguments,1))};if(a||"undefined"===typeof $GLM_console_factory)$GLM_console_factory=function(a){return $GLM_console_log.bind($GLM_console_log,a)};var b=$GLM_console_factory,c={};"debug,warn,info,error,log,write".replace(/\w+/g,function(a){c[a]=b(a)});"object"===typeof GLM&&(GLM.$outer&&(GLM.$outer.console=c),GLM.$log=$GLM_log);return c}try{window.$GLM_reset_logging=this.$GLM_reset_logging=$GLM_reset_logging}catch(e$$19){}
	GLM.$reset_logging=$GLM_reset_logging;GLM.$log=GLM.$log||$GLM_log;function $GLM_GLMJSError(a,b){function c(c){this.name=a;this.stack=Error().stack;Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);this.message=c;b&&b.apply(this,arguments)}c.prototype=Error();c.prototype.name=a;return c.prototype.constructor=c}GLMAT.mat4.exists;glm=GLM;var DLL={_version:"0.0.2",_name:"glm.gl-matrix.js",_glm_version:glm.version,prefix:"glm-js[glMatrix]: ",vendor_version:GLMAT.VERSION,vendor_name:"glMatrix"};
	DLL.statics={$outer:GLM.$outer,$typeArray:function(a){return new this.$outer.Float32Array(a)},$mat4:GLM.mat4,$quat:GLM.quat,$mat4$perspective:GLMAT.mat4.perspective,$mat4$ortho:GLMAT.mat4.ortho,mat4_perspective:function(a,b,c,e){return new this.$mat4(this.$mat4$perspective(this.$typeArray(16),a,b,c,e))},mat4_ortho:function(a,b,c,e,d,h){return new this.$mat4(this.$mat4$ortho(this.$typeArray(16),a,b,c,e,d||-1,h||1))},$quat$setAxisAngle:GLMAT.quat.setAxisAngle,$mat4$fromQuat:GLMAT.mat4.fromQuat,mat4_angleAxis:function(a,
	b){var c=this.$quat$setAxisAngle(this.$typeArray(4),b,a);return new this.$mat4(this.$mat4$fromQuat(this.$typeArray(16),c))},quat_angleAxis:function(a,b){return new this.$quat(this.$quat$setAxisAngle(this.$typeArray(4),b,a))},$mat4$translate:GLMAT.mat4.translate,mat4_translation:function(a){var b=new this.$mat4;this.$mat4$translate(b.elements,b.elements,a.elements);return b},$mat4$scale:GLMAT.mat4.scale,mat4_scale:function(a){var b=new this.$mat4;this.$mat4$scale(b.elements,b.elements,a.elements);
	return b},toJSON:function(){var a={},b;for(b in this)0!==b.indexOf("$")&&(a[b]=this[b]);return a},$vec3:GLM.vec3,$clamp:GLM.clamp,mat4_array_from_quat:function(a){return this.$mat4$fromQuat(this.$typeArray(16),a.elements)},$qtmp:new GLM.$outer.Float32Array(9),$quat$fromMat3:GLMAT.quat.fromMat3,$mat3$fromMat4:GLMAT.mat3.fromMat4,quat_array_from_mat4:function(a){return this.$quat$fromMat3(this.$typeArray(4),this.$mat3$fromMat4(this.$qtmp,a.elements))}};
	DLL["declare<T,V,...>"]={mul:{$op:"*",$typeArray:function(a){return new this.GLM.$outer.Float32Array(a)},$vec3$transformQuat:GLMAT.vec3.transformQuat,"quat,vec3":function(a,b){return new this.GLM.vec3(this.$vec3$transformQuat(this.$typeArray(3),b.elements,a.elements))},"vec3,quat":function(a,b){return this["quat,vec3"](this.GLM.inverse(b),a)},"quat,vec4":function(a,b){return this["mat4,vec4"](this.GLM.toMat4(a),b)},"vec4,quat":function(a,b){return this["quat,vec4"](this.GLM.inverse(b),a)},"$vec<N>$scale":"GLMAT.vecN.scale",
	"vec<N>,float":function(a,b){return new this.GLM.vecN(this.$vecN$scale(this.$typeArray(N),a.elements,b))},"quat,float":function(a,b){return new a.constructor(this["vec4,float"](a,b).elements)},$vec4$transformMat4:GLMAT.vec4.transformMat4,"mat4,vec4":function(a,b){return new GLM.vec4(this.$vec4$transformMat4(this.$typeArray(4),b.elements,a.elements))},"vec4,mat4":function(a,b){return this["mat4,vec4"](GLM.inverse(b),a)},"$mat<N>mul":"GLMAT.matN.mul","mat<N>,mat<N>":function(a,b){return new a.constructor(this.$matNmul(this.$typeArray(N*
	N),a.elements,b.elements))},$quat$multiply:GLMAT.quat.multiply,"quat,quat":function(a,b){return new a.constructor(this.$quat$multiply(this.$typeArray(4),a.elements,b.elements))}},mul_eq:{$op:"*=","$mat<N>$multiply":"GLMAT.matN.multiply","mat<N>,mat<N>":function(a,b){this.$matN$multiply(a.elements,a.elements,b.elements);return a},"$vec<N>$scale":"GLMAT.vecN.scale","vec<N>,float":function(a,b){this.$vecN$scale(a.elements,a.elements,b);return a},$quat$multiply:GLMAT.quat.multiply,"quat,quat":function(a,
	b){this.$quat$multiply(a.elements,a.elements,b.elements);return a},$quat$invert:GLMAT.quat.invert,$vec3$transformQuat:GLMAT.vec3.transformQuat,"inplace:vec3,quat":function(a,b){var c=this.$quat$invert(new this.GLM.$outer.Float32Array(4),b.elements);this.$vec3$transformQuat(a.elements,a.elements,c);return a},$mat4$invert:GLMAT.mat4.invert,$vec4$transformMat4:GLMAT.vec4.transformMat4,"inplace:vec4,mat4":function(a,b){var c=this.$mat4$invert(new this.GLM.$outer.Float32Array(16),b.elements);this.$vec4$transformMat4(a.elements,
	a.elements,c);return a}},cross:{$vec2$cross:GLMAT.vec2.cross,"vec2,vec2":function(a,b){return new this.GLM.vec3(this.$vec2$cross(new this.GLM.$outer.Float32Array(3),a,b))},$vec3$cross:GLMAT.vec3.cross,"vec3,vec3":function(a,b){return new this.GLM.vec3(this.$vec3$cross(new this.GLM.$outer.Float32Array(3),a,b))}},dot:{"$vec<N>$dot":"GLMAT.vecN.dot","vec<N>,vec<N>":function(a,b){return this.$vecN$dot(a,b)}},lookAt:{$mat4$lookAt:GLMAT.mat4.lookAt,"vec3,vec3":function(a,b,c){return new this.GLM.mat4(this.$mat4$lookAt(new this.GLM.$outer.Float32Array(16),
	a.elements,b.elements,c.elements))}}};DLL["declare<T,V,number>"]={mix:{$quat$slerp:GLMAT.quat.slerp,"quat,quat":function(a,b,c){return new GLM.quat(this.$quat$slerp(new GLM.$outer.Float32Array(4),a.elements,b.elements,c))}}};DLL["declare<T,V,number>"].slerp=DLL["declare<T,V,number>"].mix;
	DLL["declare<T>"]={normalize:{"$vec<N>normalize":"GLMAT.vecN.normalize",$typeArray:function(a){return new this.GLM.$outer.Float32Array(a)},"vec<N>":function(a){return new this.GLM.vecN(this.$vecNnormalize(this.$typeArray(N),a))},$quat$normalize:GLMAT.quat.normalize,quat:function(a){return new this.GLM.quat(this.$quat$normalize(new this.GLM.$outer.Float32Array(4),a.elements))}},length:{$quat$length:GLMAT.quat.length,quat:function(a){return this.$quat$length(a.elements)},"$vec<N>$length":"GLMAT.vecN.length",
	"vec<N>":function(a){return this.$vecN$length(a.elements)}},length2:{$quat$squaredLength:GLMAT.quat.squaredLength,quat:function(a){return this.$quat$squaredLength(a.elements)},"$vec<N>$squaredLength":"GLMAT.vecN.squaredLength","vec<N>":function(a){return this.$vecN$squaredLength(a.elements)}},inverse:{$quatinvert:GLMAT.quat.invert,quat:function(a){return this.GLM.quat(this.$quatinvert(new this.GLM.$outer.Float32Array(4),a.elements))},$mat4invert:GLMAT.mat4.invert,mat4:function(a){a=a.clone();return null===
	this.$mat4invert(a.elements,a.elements)?a["="](this.GLM.mat4()):a}},transpose:{$mat4$transpose:GLMAT.mat4.transpose,mat4:function(a){a=a.clone();this.$mat4$transpose(a.elements,a.elements);return a}}};glm.$outer.$import(DLL);try{module.exports=glm}catch(e$$20){}
	function $GLMVector(a,b,c){this.typearray=c=c||GLM.$outer.Float32Array;if(!(this instanceof $GLMVector))throw new GLM.GLMJSError("use new");if("function"!==typeof a||!GLM.$isGLMConstructor(a))throw new GLM.GLMJSError("expecting typ to be GLM.$isGLMConstructor: "+[typeof a,a?a.$type:a]+" // "+GLM.$isGLMConstructor(a));if(1===a.componentLength&&GLM[a.prototype.$type.replace("$","$$v")])throw new GLM.GLMJSError("unsupported argtype to glm.$vectorType - for single-value types use glm."+a.prototype.$type.replace("$",
	"$$v")+"..."+a.prototype.$type);this.glmtype=a;if(!this.glmtype.componentLength)throw Error("need .componentLength "+[a,b,c]);this.componentLength=this.glmtype.componentLength;this.BYTES_PER_ELEMENT=this.glmtype.BYTES_PER_ELEMENT;this._set_$elements=function(a){Object.defineProperty(this,"$elements",{enumerable:!1,configurable:!0,value:a});return this.$elements};Object.defineProperty(this,"elements",{enumerable:!0,configurable:!0,get:function(){return this.$elements},set:function(a){this._kv&&!this._kv.dynamic&&
	GLM.$DEBUG&&GLM.$outer.console.warn("WARNING: setting .elements on frozen (non-dynamic) GLMVector...");if(a){var b=this.length;this.length=a.length/this.componentLength;this.byteLength=this.length*this.BYTES_PER_ELEMENT;if(this.length!==Math.round(this.length))throw new GLM.GLMJSError("$vectorType.length alignment mismatch "+JSON.stringify({componentLength:this.componentLength,length:this.length,rounded_length:Math.round(this.length),elements_length:a.length,old_length:b}));}else this.length=this.byteLength=
	0;return this._set_$elements(a)}});this.elements=b&&new c(b*a.componentLength)}GLM.$vectorType=$GLMVector;GLM.$vectorType.version="0.0.2";
	$GLMVector.prototype=GLM.$template.extend(new GLM.$GLMBaseType($GLMVector,"$vectorType"),{toString:function(){return"[$GLMVector .elements=#"+(this.elements&&this.elements.length)+" .elements[0]="+(this.elements&&this.elements[0])+" ->[0]"+(this["->"]&&this["->"][0])+"]"},"=":function(a){if(a instanceof this.constructor||glm.$isGLMObject(a))a=a.elements;return this._set(new this.typearray(a))},_typed_concat:function(a,b,c){var e=a.length+b.length;c=c||new a.constructor(e);c.set(a);c.set(b,a.length);
	return c},"+":function(a){if(a instanceof this.constructor||glm.$isGLMObject(a))a=a.elements;return new this.constructor(this._typed_concat(this.elements,a))},"+=":function(a){if(a instanceof this.constructor||glm.$isGLMObject(a))a=a.elements;return this._set(this._typed_concat(this.elements,a))},_set:function(a){a instanceof this.constructor&&(a=new this.typearray(a.elements));if(!(a instanceof this.typearray))throw new GLM.GLMJSError("unsupported argtype to $GLMVector._set "+(a&&a.constructor));
	GLM.$DEBUG&&GLM.$outer.console.debug("$GLMVector.prototype.set...this.elements:"+[this.elements&&this.elements.constructor.name,this.elements&&this.elements.length]+"elements:"+[a.constructor.name,a.length]);var b=this._kv;this._kv=void 0;this.elements=a;if(this.elements!==a)throw new GLM.GLMJSError("err with .elements: "+[this.glmtype.prototype.$type,this.elements,a]);b&&this._setup(b);return this},arrayize:function(a,b){return this._setup({dynamic:b,setters:a},this.length)},$destroy:function(a){if(a){for(var b=
	Array.isArray(a),c=function(c){Object.defineProperty(a,c,{enumerable:!0,configurable:!0,value:void 0});delete a[c];b||(a[c]=void 0,delete a[c])},e=0;e<a.length;e++)e in a&&c(e);for(;e in a;)GLM.$DEBUG&&GLM.$outer.console.debug("$destroy",this.name,e),c(e++);b&&(a.length=0)}},_arrlike_toJSON:function(){return this.slice(0)},_mixinArray:function(a){a.toJSON=this._arrlike_toJSON;"forEach map slice filter join reduce".split(" ").forEach(function(b){a[b]=Array.prototype[b]});return a},_setup:function(a,
	b){var c=this.glmtype,e=this.typearray,d=this.length;this._kv=a;var h=a.stride||this.glmtype.BYTES_PER_ELEMENT,j=a.offset||this.elements.byteOffset,g=a.elements||this.elements,k=a.container||this.arr||[],i=a.setters||!1,w=a.dynamic||!1;"self"===k&&(k=this);if(!g)throw new GLMJSError("GLMVector._setup - neither kv.elements nor this.elements...");this.$destroy(this.arr,b);var r=this.arr=this["->"]=k;Array.isArray(r)||this._mixinArray(r);var m=this.componentLength;if(!m)throw new GLM.GLMJSError("no componentLength!?"+
	Object.keys(this));for(var q=g.buffer.byteLength,s=this,t=0;t<d;t++){var k=j+t*h,z=k+this.glmtype.BYTES_PER_ELEMENT,y=function(){a.i=t;a.next=z;a.last=q;a.offset=a.offset||j;a.stride=a.stride||h;return JSON.stringify(a)};if(k>q)throw Error("["+t+"] off "+k+" > last "+q+" "+y());if(z>q)throw Error("["+t+"] next "+z+" > last "+q+" "+y());r[t]=null;var f=function(a,b){var d=new c(new e(a.buffer,b,m));w&&Object.defineProperty(d,"$elements",{value:a});return d},y=f(g,k);!i&&!w?r[t]=y:function(a,b,c){Object.defineProperty(r,
	b,{enumerable:!0,configurable:!0,get:w?function(){a.$elements!==s.elements&&(GLM.$log("dynoget rebinding ti",b,c,a.$elements===s.elements),a=f(s.elements,c));return a}:function(){return a},set:i&&(w?function(d){GLM.$log("dynoset",b,c,a.$elements===s.elements);a.$elements!==s.elements&&(GLM.$log("dynoset rebinding ti",b,c,a.$elements===s.elements),a=f(s.elements,c));return a.copy(d)}:function(b){return a.copy(b)})||void 0})}(y,t,k)}return this},setFromBuffers:function(a){var b=this.elements,c=0;a.forEach(function(a){var d=
	a.length;if(c+d>b.length){d=Math.min(b.length-c,a.length);if(0>=d)return;a=glm.$subarray(a,0,d);d=a.length}if(c+d>b.length)throw new glm.GLMJSError("$vectorType.fromBuffers mismatch "+[c,d,b.length]);b.set(a,c);c+=a.length});return c},setFromPointer:function(a){if(!(a instanceof GLM.$outer.ArrayBuffer))throw new glm.GLMJSError("unsupported argtype "+[typeof a]+" - $GLMVector.setFromPointer");return this._set(new this.typearray(a))}});GLM.exists;GLM.$vectorType.exists;
	if(GLM.$toTypedArray)throw"error: glm.experimental.js double-included";
	GLM.$toTypedArray=function(a,b,c){var e=b||0,d=typeof e;if("number"===d){if("number"!==typeof c)throw new GLM.GLMJSError("GLM.$toTypedArray: unsupported argtype for componentLength ("+typeof c+")");return new a(e*c)}if("object"!==d)throw new GLM.GLMJSError("GLM.$toTypedArray: unsupported arrayType: "+[typeof a,a]);if(e instanceof a)return e;if(e instanceof GLM.$outer.ArrayBuffer||Array.isArray(e))return new a(e);GLM.$isGLMObject(e)&&(d=e.elements,e=new a(d.length),e.set(d));if(!(e instanceof a)&&
	"byteOffset"in e&&"buffer"in e)return GLM.$DEBUG&&GLM.$outer.console.warn("coercing "+e.constructor.name+".buffer into "+[a.name,e.byteOffset,e.byteLength+" bytes","~"+e.byteLength/a.BYTES_PER_ELEMENT+" coerced elements"]+"...",{byteOffset:e.byteOffset,byteLength:e.byteLength,ecount:e.byteLength/a.BYTES_PER_ELEMENT}),new a(e.buffer,e.byteOffset,e.byteLength/a.BYTES_PER_ELEMENT);if(e instanceof a)return e;throw new GLM.GLMJSError("GLM.$toTypedArray: unsupported argtype initializers: "+[a,b,c]);};
	GLM.$make_primitive=function(a,b){GLM[a]=function(c){if(!(this instanceof GLM[a]))return new GLM[a](c);"object"!==typeof c&&(c=[c]);this.elements=GLM.$toTypedArray(b,c,1)};GLM[a]=eval(GLM.$template._traceable("glm_"+a+"$class",GLM[a]))();GLM.$template._add_overrides(a,{$to_string:function(a){return a.$type.replace(/[^a-z]/g,"")+"("+a.elements[0]+")"},$to_object:function(a){return a.elements[0]},$to_glsl:function(a){return a.$type.replace(/[^a-z]/g,"")+"("+a.elements[0]+")"}});GLM.$template._add_overrides(a.substr(1),
	{$to_string:!(a.substr(1)in GLM.$to_string.$template)&&function(a){return a.$type.replace(/[^a-z]/g,"")+"("+a.elements[0]+")"},$to_object:function(a){return a},$to_glsl:function(a){return a.$type.replace(/[^a-z]/g,"")+"("+a+")"}});GLM.$template.extend(GLM[a],{componentLength:1,BYTES_PER_ELEMENT:b.BYTES_PER_ELEMENT,prototype:GLM.$template.extend(new GLM.$GLMBaseType(GLM[a],a),{copy:function(a){this.elements.set(GLM.$isGLMObject(a)?a.elements:[a]);return this},valueOf:function(){return this.elements[0]}})});
	GLM[a].prototype["="]=GLM[a].prototype.copy;return GLM[a]};GLM.$make_primitive("$bool",GLM.$outer.Int32Array);GLM.$template._add_overrides("$bool",{$to_object:function(a){return!!a}});GLM.$make_primitive("$int32",GLM.$outer.Int32Array);GLM.$make_primitive("$uint32",GLM.$outer.Uint32Array);GLM.$make_primitive("$uint16",GLM.$outer.Uint16Array);GLM.$make_primitive("$uint8",GLM.$outer.Uint8Array);GLM.$float32=GLM.$make_primitive("$float",GLM.$outer.Float32Array);
	GLM.$make_primitive_vector=function(a,b,c){c=c||(new b).elements.constructor;var e=function(d){if(!(this instanceof e))return new e(d);this.$type=a;this.$type_name="vector<"+a+">";(d=GLM.$toTypedArray(c,d,b.componentLength))&&this._set(d)},e=eval(GLM.$template._traceable("glm_"+a+"$class",e))();e.prototype=new GLM.$vectorType(b,0,c);GLM.$template._add_overrides(a,{$to_string:function(a){return"[GLM."+a.$type+" elements[0]="+(a.elements&&a.elements[0])+"]"},$to_object:function(a){return a.map(GLM.$to_object)},
	$to_glsl:function(a,b){var c=a.$type.substr(2).replace(/[^a-z]/g,"");b="string"===typeof b?b:"example";var e=[];b&&e.push(c+" "+b+"["+a.length+"]");return e.concat(a.map(function(a,c){return b+"["+c+"] = "+a})).join(";")+";"}});GLM.$types.push(a);GLM.$template.extend(e.prototype,{$type:a,constructor:e,_setup:function(){throw new GLM.GLMJSError("._setup not available on primitive vectors yet...");},_set:function(a){this.elements=a;this.length=!this.elements?0:this.elements.length/this.glmtype.componentLength;
	this.arrayize();return this},arrayize:function(){for(var a=Object.defineProperty.bind(Object,this),b=0;b<this.length;b++)(function(b){a(b,{configurable:!0,enumerable:!0,get:function(){return this.elements[b]},set:function(a){return this.elements[b]=a}})})(b);return this._mixinArray(this)},toString:function(){return"[vector<"+a+"> {"+[].slice.call(this.elements,0,5)+(5<this.elements.length?",...":"")+"}]"}});return e};GLM.$vint32=GLM.$make_primitive_vector("$vint32",GLM.$int32);
	GLM.$vfloat=GLM.$vfloat32=GLM.$make_primitive_vector("$vfloat32",GLM.$float32);GLM.$vuint8=GLM.$make_primitive_vector("$vuint8",GLM.$uint8);GLM.$vuint16=GLM.$make_primitive_vector("$vuint16",GLM.$uint16);GLM.$vuint32=GLM.$make_primitive_vector("$vuint32",GLM.$uint32);
	GLM.$make_componentized_vector=function(a,b,c){c=c||(new b).elements.constructor;var e=function(a,h){if(!(this instanceof e))return new e(a,h);this._set(GLM.$toTypedArray(c,a,b.componentLength));if(!this.elements)throw new GLM.GLMJSError("!this.elements: "+[GLM.$toTypedArray(c,a,b.componentLength)]);this._setup({setters:!0,dynamic:h,container:"self"})},e=eval(GLM.$template._traceable("glm_"+a+"$class",e))();e.prototype=new GLM.$vectorType(b,0,c);GLM.$template._add_overrides(a,{$to_string:function(a){return"[GLM."+
	a.$type+" elements[0]="+(a.elements&&a.elements[0])+"]"},$to_object:function(a){return a.map(GLM.$to_object)},$to_glsl:function(a,b){var c=a.$type.substr(2);b="string"===typeof b?b:"example";var e=[];b&&e.push(c+" "+b+"["+a.length+"]");return e.concat(a.map(GLM.$to_glsl).map(function(a,c){return b+"["+c+"] = "+a})).join(";\n ")+";"}});GLM.$types.push(a);GLM.$template.extend(e.prototype,{$type:a,constructor:e});e.prototype.componentLength||alert("!cmop "+p);return e};
	(function(){var a=GLM.$template.deNify({"$vvec<N>":function(){return GLM.$make_componentized_vector("$vvecN",GLM.vecN)},"$vuvec<N>":function(){return GLM.$make_componentized_vector("$vuvecN",GLM.uvecN)},"$vmat<N>":function(){return GLM.$make_componentized_vector("$vmatN",GLM.matN)},$vquat:function(){return GLM.$make_componentized_vector("$vquat",GLM.quat)}},"$v"),b;for(b in a)GLM[b]=a[b]()})();
	(GLM._redefine_base64_helpers=function define_base64_helpers(b,c){function e(b){return(b+"").replace(/\s/g,"")}function d(b){return new k(b.split("").map(function(b){return b.charCodeAt(0)}))}function h(b){b instanceof k||(b=new k(b));return[].map.call(b,function(b){return String.fromCharCode(b)}).join("")}function j(b){b=b instanceof i?b:d(b).buffer;return GLM.$b64.encode(b,b.byteOffset,b.byteLength)}function g(b){b=new String(h(GLM.$b64.decode(b)));b.array=d(b);b.buffer=b.array.buffer;return b}
	b=define_base64_helpers.atob=b||define_base64_helpers.atob||g;c=define_base64_helpers.btoa=c||define_base64_helpers.btoa||j;var k=GLM.$outer.Uint8Array,i=GLM.$outer.ArrayBuffer,w,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf.bind("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");w={encode:function(b,c,d){b=new k(b,c,d);d=b.length;var e="";for(c=0;c<d;c+=3)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b[c]>>2],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b[c]&
	3)<<4|b[c+1]>>4],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b[c+1]&15)<<2|b[c+2]>>6],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b[c+2]&63];2===d%3?e=e.substring(0,e.length-1)+"=":1===d%3&&(e=e.substring(0,e.length-2)+"==");return e},decode:function(b){b=e(b);var c=b.length,d=0.75*c,g=0,h,j,f,v;"="===b[c-1]&&(d--,"="===b[c-2]&&d--);for(var w=new i(d),R=new k(w),d=0;d<c;d+=4)h=r(b[d]),j=r(b[d+1]),f=r(b[d+2]),v=r(b[d+3]),R[g++]=h<<2|j>>4,R[g++]=
	(j&15)<<4|f>>2,R[g++]=(f&3)<<6|v&63;return w}};GLM.$template.extend(w,{trim:e,atob:b,btoa:c,$atob:g,$btoa:j,toCharCodes:d,fromCharCodes:h,b64_to_utf8:function(c){return decodeURIComponent(escape(b(e(c))))},utf8_to_b64:function(b){return c(unescape(encodeURIComponent(b)))}});GLM.$template.extend(GLM,{$b64:w,$to_base64:function(b){return GLM.$b64.encode(b.elements.buffer,b.elements.byteOffset,b.elements.byteLength)},$from_base64:function(b,c){var d=GLM.$b64.decode(b);if(!0===c||c==GLM.$outer.ArrayBuffer)return d;
	void 0===c&&(c=GLM.$outer.Float32Array);return new c(d);throw new GLM.GLMJSError("TODO: $from_base64 not yet supported second argument type: ("+[typeof c,c]+")");}})})("function"===typeof atob&&atob.bind(this),"function"===typeof btoa&&btoa.bind(this));
	(function(){function a(a,c){return{get:function(){return a.call(this)},set:function(a){if(this.copy)return this.copy(new this.constructor(c.call(this,a)));this.elements.set(c.call(this,a))}}}"$bool $float32 $vfloat32 $vuint8 $vuint16 $vuint32 $vvec2 $vvec3 $vvec4 $vmat3 $vmat4 $vquat vec2 vec3 vec4 mat3 mat4 uvec2 uvec3 uvec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 quat".split(" ").map(GLM.$getGLMType).forEach(function(b){Object.defineProperty(b.prototype,"array",a(function(){return GLM.$to_array(this)},
	function(a){return a}));Object.defineProperty(b.prototype,"base64",a(function(){return GLM.$to_base64(this)},function(a){return GLM.$from_base64(a,this.elements.constructor)}));Object.defineProperty(b.prototype,"buffer",a(function(){return this.elements.buffer},function(a){return new this.elements.constructor(a)}));Object.defineProperty(b.prototype,"json",a(function(){return GLM.$to_json(this)},function(a){return JSON.parse(a)}));Object.defineProperty(b.prototype,"object",a(function(){return GLM.$to_object(this)},
	function(a){return a}));Object.defineProperty(b.prototype,"glsl",a(function(){return GLM.$to_glsl(this)},function(a){return GLM.$from_glsl(a,Array)}))})})();
	glm.GLMAT = GLMAT; return glm; })(this, typeof $GLM_log !== "undefined" ? $GLM_log : undefined, typeof $GLM_console_log !== "undefined" ? $GLM_console_log : undefined);

	
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../AppData/Roaming/npm/node_modules/webpack/buildin/harmony-module.js */ "../../AppData/Roaming/npm/node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js */ "../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/util/ulist.ts":
/*!***************************!*\
  !*** ./src/util/ulist.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ulist_elem = /** @class */ (function () {
    function ulist_elem(elem, list, idx) {
        this.elem = elem;
        this.list = list;
        this.idx = idx;
    }
    ulist_elem.prototype.get = function () {
        return this.list.data[this.idx].elem;
    };
    ulist_elem.prototype.remove = function () {
        this.list.data[this.idx] = this.list.data[this.list.data.length - 1];
        this.list.data[this.idx].idx = this.idx;
        this.list.data.pop();
    };
    ulist_elem.prototype.translate = function () {
        return new ulist_elem(this.elem, this.list, this.idx);
    };
    Object.defineProperty(ulist_elem.prototype, "index", {
        get: function () {
            return this.idx;
        },
        enumerable: true,
        configurable: true
    });
    return ulist_elem;
}());
exports.ulist_elem = ulist_elem;
var ulist_base = /** @class */ (function () {
    function ulist_base() {
        this.data = [];
    }
    return ulist_base;
}());
var ulist = /** @class */ (function () {
    function ulist() {
        this.data = new ulist_base();
    }
    ulist.prototype.push = function (elem) {
        var object = new ulist_elem(elem, this.data, this.data.data.length);
        this.data.data.push(object);
        return this.data.data[this.data.data.length - 1];
    };
    ulist.prototype.size = function () {
        return this.data.data.length;
    };
    ulist.prototype.visit = function (callback) {
        for (var _i = 0, _a = this.data.data; _i < _a.length; _i++) {
            var elem = _a[_i];
            callback(elem);
        }
    };
    ulist.prototype.subscribe = function (index) {
        return this.data.data[index];
    };
    return ulist;
}());
exports.ulist = ulist;


/***/ }),

/***/ "./src/util/xhr.ts":
/*!*************************!*\
  !*** ./src/util/xhr.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xhr = /** @class */ (function () {
    function xhr() {
    }
    xhr.getAsync = function (filename, type, callback) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = type;
        if (typeof filename == "string") {
            xhr.onload = function (event) {
                callback(undefined, xhr.response);
            };
            xhr.open("get", filename);
            xhr.send();
        }
        else {
            if (filename.length) {
                var result_1 = [];
                xhr.onload = function (event) {
                    filename = filename.slice(1);
                    result_1.push(xhr.response);
                    if (filename.length) {
                        xhr.open("get", filename[0]);
                        xhr.send();
                    }
                    else {
                        callback(undefined, result_1);
                    }
                };
                xhr.open("get", filename[0]);
                xhr.send();
            }
            else {
                callback(undefined, []);
            }
        }
    };
    xhr.getSync = function (filename) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", filename, false);
        xhr.send();
        if (xhr.status == 200) {
            return xhr.response;
        }
        else {
            throw "failed to load resource: " + filename + " due to " +
                xhr.statusText;
        }
    };
    return xhr;
}());
exports.default = xhr;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map