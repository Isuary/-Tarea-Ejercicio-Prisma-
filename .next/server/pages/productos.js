"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/productos";
exports.ids = ["pages/productos"];
exports.modules = {

/***/ "./pages/productos.js":
/*!****************************!*\
  !*** ./pages/productos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Productos)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Productos() {\n    const { 0: productos , 1: setProductos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        codigo: \"\",\n        descripcion: \"\",\n        proveedor: \"\",\n        fechaVencimiento: \"\",\n        ubicacionFisica: \"\",\n        existenciaMinima: \"\"\n    });\n    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Obtener productos (con búsqueda)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(`/api/productos?search=${search}`).then((res)=>res.json()).then((data)=>setProductos(data));\n    }, [\n        search\n    ]);\n    // Manejar el formulario\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const method = form.id ? \"PUT\" : \"POST\"; // Si hay id, es actualización, sino es creación\n        const res = await fetch(\"/api/productos\", {\n            method,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                id: form.id,\n                codigo: form.codigo,\n                descripcion: form.descripcion,\n                proveedor: form.proveedor,\n                fechaVencimiento: form.fechaVencimiento,\n                ubicacionFisica: form.ubicacionFisica,\n                existenciaMinima: parseInt(form.existenciaMinima, 10)\n            })\n        });\n        if (res.ok) {\n            const producto = await res.json();\n            if (form.id) {\n                setProductos(productos.map((p)=>p.id === producto.id ? producto : p));\n            } else {\n                setProductos([\n                    ...productos,\n                    producto\n                ]);\n            }\n            setForm({\n                id: \"\",\n                codigo: \"\",\n                descripcion: \"\",\n                proveedor: \"\",\n                fechaVencimiento: \"\",\n                ubicacionFisica: \"\",\n                existenciaMinima: \"\"\n            });\n        } else {\n            console.error(\"Error al crear o actualizar el producto\");\n        }\n    };\n    // Cargar datos del producto seleccionado en el formulario\n    const cargarProducto = (producto)=>{\n        setForm({\n            id: producto.id,\n            codigo: producto.codigo,\n            descripcion: producto.descripcion,\n            proveedor: producto.proveedor,\n            fechaVencimiento: producto.fechaVencimiento.split(\"T\")[0],\n            ubicacionFisica: producto.ubicacionFisica,\n            existenciaMinima: producto.existenciaMinima\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Lista de Productos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Buscar por c\\xf3digo o descripci\\xf3n\",\n                value: search,\n                onChange: (e)=>setSearch(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: productos.length > 0 ? productos.map((producto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>cargarProducto(producto),\n                        children: [\n                            producto.descripcion,\n                            \" - \",\n                            producto.codigo\n                        ]\n                    }, producto.id, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"No se encontraron productos\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                    lineNumber: 95,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: form.id ? \"Actualizar Producto\" : \"Crear Producto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"C\\xf3digo\",\n                        value: form.codigo,\n                        onChange: (e)=>setForm({\n                                ...form,\n                                codigo: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Descripci\\xf3n\",\n                        value: form.descripcion,\n                        onChange: (e)=>setForm({\n                                ...form,\n                                descripcion: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Proveedor\",\n                        value: form.proveedor,\n                        onChange: (e)=>setForm({\n                                ...form,\n                                proveedor: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        placeholder: \"Fecha de Vencimiento\",\n                        value: form.fechaVencimiento,\n                        onChange: (e)=>setForm({\n                                ...form,\n                                fechaVencimiento: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Ubicaci\\xf3n F\\xedsica\",\n                        value: form.ubicacionFisica,\n                        onChange: (e)=>setForm({\n                                ...form,\n                                ubicacionFisica: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        placeholder: \"Existencia M\\xednima\",\n                        value: form.existenciaMinima,\n                        onChange: (e)=>setForm({\n                                ...form,\n                                existenciaMinima: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: form.id ? \"Actualizar Producto\" : \"Crear Producto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\CURSOS U\\\\desarrollo web\\\\ultima tarea\\\\pages\\\\productos.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bHRpbWEtdGFyZWEvLi9wYWdlcy9wcm9kdWN0b3MuanM/ZmVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdG9zKCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0b3MsIHNldFByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6ICcnLFxyXG4gICAgY29kaWdvOiAnJyxcclxuICAgIGRlc2NyaXBjaW9uOiAnJyxcclxuICAgIHByb3ZlZWRvcjogJycsXHJcbiAgICBmZWNoYVZlbmNpbWllbnRvOiAnJyxcclxuICAgIHViaWNhY2lvbkZpc2ljYTogJycsXHJcbiAgICBleGlzdGVuY2lhTWluaW1hOiAnJyxcclxuICB9KTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBPYnRlbmVyIHByb2R1Y3RvcyAoY29uIGLDunNxdWVkYSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYC9hcGkvcHJvZHVjdG9zP3NlYXJjaD0ke3NlYXJjaH1gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0UHJvZHVjdG9zKGRhdGEpKTtcclxuICB9LCBbc2VhcmNoXSk7XHJcblxyXG4gIC8vIE1hbmVqYXIgZWwgZm9ybXVsYXJpb1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbWV0aG9kID0gZm9ybS5pZCA/ICdQVVQnIDogJ1BPU1QnOyAvLyBTaSBoYXkgaWQsIGVzIGFjdHVhbGl6YWNpw7NuLCBzaW5vIGVzIGNyZWFjacOzblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvcHJvZHVjdG9zJywge1xyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaWQ6IGZvcm0uaWQsIC8vIEluY2x1eWUgaWQgc29sbyBzaSBzZSBlc3TDoSBhY3R1YWxpemFuZG9cclxuICAgICAgICBjb2RpZ286IGZvcm0uY29kaWdvLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiBmb3JtLmRlc2NyaXBjaW9uLFxyXG4gICAgICAgIHByb3ZlZWRvcjogZm9ybS5wcm92ZWVkb3IsXHJcbiAgICAgICAgZmVjaGFWZW5jaW1pZW50bzogZm9ybS5mZWNoYVZlbmNpbWllbnRvLFxyXG4gICAgICAgIHViaWNhY2lvbkZpc2ljYTogZm9ybS51YmljYWNpb25GaXNpY2EsXHJcbiAgICAgICAgZXhpc3RlbmNpYU1pbmltYTogcGFyc2VJbnQoZm9ybS5leGlzdGVuY2lhTWluaW1hLCAxMCksXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICBjb25zdCBwcm9kdWN0byA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoZm9ybS5pZCkge1xyXG4gICAgICAgIHNldFByb2R1Y3Rvcyhwcm9kdWN0b3MubWFwKHAgPT4gKHAuaWQgPT09IHByb2R1Y3RvLmlkID8gcHJvZHVjdG8gOiBwKSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFByb2R1Y3RvcyhbLi4ucHJvZHVjdG9zLCBwcm9kdWN0b10pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRGb3JtKHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgY29kaWdvOiAnJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjogJycsXHJcbiAgICAgICAgcHJvdmVlZG9yOiAnJyxcclxuICAgICAgICBmZWNoYVZlbmNpbWllbnRvOiAnJyxcclxuICAgICAgICB1YmljYWNpb25GaXNpY2E6ICcnLFxyXG4gICAgICAgIGV4aXN0ZW5jaWFNaW5pbWE6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIGNyZWFyIG8gYWN0dWFsaXphciBlbCBwcm9kdWN0bycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIENhcmdhciBkYXRvcyBkZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvIGVuIGVsIGZvcm11bGFyaW9cclxuICBjb25zdCBjYXJnYXJQcm9kdWN0byA9IChwcm9kdWN0bykgPT4ge1xyXG4gICAgc2V0Rm9ybSh7XHJcbiAgICAgIGlkOiBwcm9kdWN0by5pZCxcclxuICAgICAgY29kaWdvOiBwcm9kdWN0by5jb2RpZ28sXHJcbiAgICAgIGRlc2NyaXBjaW9uOiBwcm9kdWN0by5kZXNjcmlwY2lvbixcclxuICAgICAgcHJvdmVlZG9yOiBwcm9kdWN0by5wcm92ZWVkb3IsXHJcbiAgICAgIGZlY2hhVmVuY2ltaWVudG86IHByb2R1Y3RvLmZlY2hhVmVuY2ltaWVudG8uc3BsaXQoJ1QnKVswXSwgLy8gRm9ybWF0byBkZSBmZWNoYVxyXG4gICAgICB1YmljYWNpb25GaXNpY2E6IHByb2R1Y3RvLnViaWNhY2lvbkZpc2ljYSxcclxuICAgICAgZXhpc3RlbmNpYU1pbmltYTogcHJvZHVjdG8uZXhpc3RlbmNpYU1pbmltYSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+TGlzdGEgZGUgUHJvZHVjdG9zPC9oMT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHBvciBjw7NkaWdvIG8gZGVzY3JpcGNpw7NuXCJcclxuICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cHJvZHVjdG9zLmxlbmd0aCA+IDAgPyBwcm9kdWN0b3MubWFwKChwcm9kdWN0bykgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17cHJvZHVjdG8uaWR9IG9uQ2xpY2s9eygpID0+IGNhcmdhclByb2R1Y3RvKHByb2R1Y3RvKX0+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0by5kZXNjcmlwY2lvbn0gLSB7cHJvZHVjdG8uY29kaWdvfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKSA6IDxsaT5ObyBzZSBlbmNvbnRyYXJvbiBwcm9kdWN0b3M8L2xpPn1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxoMj57Zm9ybS5pZCA/ICdBY3R1YWxpemFyIFByb2R1Y3RvJyA6ICdDcmVhciBQcm9kdWN0byd9PC9oMj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkPDs2RpZ29cIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm0uY29kaWdvfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgY29kaWdvOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2nDs25cIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm0uZGVzY3JpcGNpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBkZXNjcmlwY2lvbjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvdmVlZG9yXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtLnByb3ZlZWRvcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHByb3ZlZWRvcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmVjaGEgZGUgVmVuY2ltaWVudG9cIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm0uZmVjaGFWZW5jaW1pZW50b31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGZlY2hhVmVuY2ltaWVudG86IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlViaWNhY2nDs24gRsOtc2ljYVwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybS51YmljYWNpb25GaXNpY2F9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB1YmljYWNpb25GaXNpY2E6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhpc3RlbmNpYSBNw61uaW1hXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtLmV4aXN0ZW5jaWFNaW5pbWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBleGlzdGVuY2lhTWluaW1hOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPntmb3JtLmlkID8gJ0FjdHVhbGl6YXIgUHJvZHVjdG8nIDogJ0NyZWFyIFByb2R1Y3RvJ308L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9kdWN0b3MiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJmb3JtIiwic2V0Rm9ybSIsImlkIiwiY29kaWdvIiwiZGVzY3JpcGNpb24iLCJwcm92ZWVkb3IiLCJmZWNoYVZlbmNpbWllbnRvIiwidWJpY2FjaW9uRmlzaWNhIiwiZXhpc3RlbmNpYU1pbmltYSIsInNlYXJjaCIsInNldFNlYXJjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2VJbnQiLCJvayIsInByb2R1Y3RvIiwibWFwIiwicCIsImNvbnNvbGUiLCJlcnJvciIsImNhcmdhclByb2R1Y3RvIiwic3BsaXQiLCJkaXYiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInVsIiwibGVuZ3RoIiwibGkiLCJvbkNsaWNrIiwiaDIiLCJvblN1Ym1pdCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/productos.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/productos.js"));
module.exports = __webpack_exports__;

})();